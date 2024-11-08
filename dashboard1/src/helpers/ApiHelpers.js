import { Axios } from 'axios'
import { LocalStorageEnums } from '../enums'

export const BASE_URL = 'http://localhost:5000/api'

const axios = new Axios({
  baseURL: BASE_URL,
  timeout: 5000,
  validateStatus: status => {
    if (status >= 200 && status < 400) {
      return true
    }
    return false
  },
})

axios.interceptors.request.use(
  value => {
    const token = localStorage.getItem(LocalStorageEnums.accessToken)
    if (token) {
      value.headers.Authorization = `Bearer ${token}`
    }
    value.headers['Content-Type'] = 'application/json'
    return value
  },
  error => {
    return Promise.reject(error)
  },
)


export const mainAxios = axios
