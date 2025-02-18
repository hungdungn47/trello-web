import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from '~/utils/formatters'
import { logoutUserAPI } from '../redux/user/userSlice'
import { refreshTokenAPI } from '../apis'

let authorizedAxiosInstance = axios.create()

// set timeout = 10 minutes
authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10
// withCredentials: allow sending cookies to Backend
authorizedAxiosInstance.defaults.withCredentials = true

authorizedAxiosInstance.interceptors.request.use((config) => {

  interceptorLoadingElements(true)

  return config
}, (error) => {
  return Promise.reject(error)
})

let axiosStore
export const injectStore = (mainStore) => {
  axiosStore = mainStore
}

authorizedAxiosInstance.interceptors.response.use((response) => {

  interceptorLoadingElements(false)

  return response
}, async (error) => {
  interceptorLoadingElements(false)

  if (error.response?.status === 401) {
    axiosStore.dispatch(logoutUserAPI(false))
  }
  const originalRequest = error.config
  if (error.response?.status === 410 && !originalRequest._retry) {
    originalRequest._retry = true
    await refreshTokenAPI()
    return authorizedAxiosInstance(originalRequest)
  }

  let errorMessage = error?.message
  if (error.response?.data?.message) {
    errorMessage = error.response?.data?.message
  }
  if (error.response?.status !== 410) {
    toast.error(errorMessage)
  }
  return Promise.reject(error)
})

export default authorizedAxiosInstance