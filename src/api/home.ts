import { request } from './http'

export const getOne = () => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username: '',
      password: ''
    }
  })
}