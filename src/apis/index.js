import axios from 'axios'
import { API_ROOT } from '../utils/constants'

// export const fetchBoardDetailsAPI = async (boardId) => {
//   const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
//   return response.data
// }

export const updateBoardDetailsAPI = async (boardId, boardData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, boardData)
  return response.data
}

export const moveCardBetweenColumnsAPI = async (updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/supports/move_card`, updateData)
  return response.data
}

export const updateColumnDetailsAPI = async (columnId, updateData) => {
  const response = await axios.put(`${API_ROOT}/v1/columns/${columnId}`, updateData)
  return response.data
}

export const deleteColumnDetailsAPI = async (columnId) => {
  const response = await axios.delete(`${API_ROOT}/v1/columns/${columnId}`)
  return response.data
}

export const createNewColumnAPI = async (columnData) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, columnData)
  return response.data
}

export const createNewCardAPI = async (cardData) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, cardData)
  return response.data
}