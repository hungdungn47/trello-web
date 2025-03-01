import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentActiveCard: null,
  isShowModalActiveCard: false
}

export const activeCardSlice = createSlice({
  name: 'activeCard',
  initialState: initialState,
  reducers: {
    showModalActiveCard: (state, action) => {
      state.isShowModalActiveCard = true
    },
    clearAndHideCurrentActiveCard: (state, action) => {
      state.currentActiveCard = null
      state.isShowModalActiveCard = false
    },
    updateCurrentActiveCard: (state, action) => {
      state.currentActiveCard = action.payload
    }
  },
  extraReducers: (builder) => {

  }
})

export const { showModalActiveCard, clearAndHideCurrentActiveCard, updateCurrentActiveCard } = activeCardSlice.actions

export const selectCurrentActiveCard = (state) => {
  return state.activeCard.currentActiveCard
}

export const selectIsShowModalActiveCard = (state) => {
  return state.activeCard.isShowModalActiveCard
}

export const activeCardReducer = activeCardSlice.reducer