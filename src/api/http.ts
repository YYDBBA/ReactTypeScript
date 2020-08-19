import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import qs from 'querystring'
import { message } from 'antd'
const request: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 5000
})
request.interceptors.request.use((config: AxiosRequestConfig) => {
  config.method?.toLocaleUpperCase() === 'GET'
    ? config.params = { ...config.params }
    : config.data = qs.stringify({ ...config.data })
  config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset:UTF-8";
  return config
}, (err: AxiosError) => {
  message.warn('失败')
  return Promise.reject(err)
})

request.interceptors.response.use((res: AxiosResponse) => {
  let response: any = null;
  if (res.status === 200) {
    response = res
  } else {
    message.warn('不知名原因')
  }
  return response
}, (err: AxiosError) => {
  message.warn('请求失败')
  Promise.reject(err)
})
export {
  request
}
