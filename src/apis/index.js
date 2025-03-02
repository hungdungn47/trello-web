import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '../utils/constants'
import { toast } from 'react-toastify'

// export const fetchBoardDetailsAPI = async (boardId) => {
//   const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
//   return response.data
// }

export const updateBoardDetailsAPI = async (boardId, boardData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/${boardId}`, boardData)
  return response.data
}

export const moveCardBetweenColumnsAPI = async (updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/boards/supports/move_card`, updateData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)
  return response.data
}

export const deleteColumnDetailsAPI = async (columnId) => {
  const response = await authorizedAxiosInstance.delete(`${API_ROOT}/v1/columns/${columnId}`)
  return response.data
}

export const createNewColumnAPI = async (columnData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/columns`, columnData)
  return response.data
}

export const createNewCardAPI = async (cardData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/cards`, cardData)
  return response.data
}

export const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/register`, data)
  toast.success('Registered successfully!', { theme: 'colored' })
  return response.data
}

export const verifyUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/users/verify`, data)
  toast.success('Verified account successfully!', { theme: 'colored' })
  return response.data
}

export const refreshTokenAPI = async () => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/users/refresh-token`)
  return response.data
}

export const fetchBoardsAPI = async (searchPath) => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/boards${searchPath}`)
  return response.data
}

export const createBoardAPI = async (boardData) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/boards`, boardData)
  toast.success('Created board successfully!')
  return response.data
}

export const updateCardDetailsAPI = async (cardId, cardData) => {
  console.log('payload:', cardData)
  const response = await authorizedAxiosInstance.put(`${API_ROOT}/v1/cards/${cardId}`, cardData)
  return response.data
}

export const inviteUserToBoardAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/invitations/board`, data)
  toast.success('User invited to board successfully')
  return response.data
}