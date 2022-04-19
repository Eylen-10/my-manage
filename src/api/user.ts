import request from '../utils/request'

//登录
export function LOGIN(params: any){
  return request({
    method: 'POST',
    data: params,
    url: '/login'
  })
}
//退出登录
export function LOGOUT(params: any){
  return request({
    method: 'POST',
    data: params,
    url: '/logout'
  })
}