import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from "../../utils/constants"

const initialState = {
  currentNotifications: null
}

export const fetchInvitationsAPI = createAsyncThunk(
  'notifications/fetchInvitationsAPI',
  async () => {
    const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/invitations`)
    return response.data
  }
)

export const updateBoardInvitationAPI = createAsyncThunk(
  'notifications/updateBoardInvitationAPI',
  async ({ invitationId, status }) => {
    const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/invitations/board/${invitationId}`, { status })
    return response.data
  }
)

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    clearCurrentNotifications: (state) => {
      state.currentNotifications = null
    },
    updateCurrentNotifications: (state, action) => {
      state.currentNotifications = action.payload
    },
    addNotification: (state, action) => {
      state.currentNotifications.unshift(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInvitationsAPI.fulfilled, (state, action) => {
      let invitationList = action.payload
      state.currentNotifications = Array.isArray(invitationList) ? invitationList.reverse() : []
    })
    builder.addCase(updateBoardInvitationAPI.fulfilled, (state, action) => {
      const getInvitation = state.currentNotifications.find(i => i._id === action.payload._id)
      getInvitation.boardInvitation = action.payload.boardInvitation
    })
  }
})

export const {
  clearCurrentNotifications,
  updateCurrentNotifications,
  addNotification
} = notificationsSlice.actions

export const selectCurrentNotifications = (state) => {
  return state.notifications.currentNotifications
}

export const notificationsReducer = notificationsSlice.reducer