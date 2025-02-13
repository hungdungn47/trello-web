import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from '~/utils/formatters'

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

authorizedAxiosInstance.interceptors.response.use((response) => {

  interceptorLoadingElements(false)

  return response
}, (error) => {

  interceptorLoadingElements(false)

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