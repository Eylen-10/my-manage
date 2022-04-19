import request from '../utils/request'

//获取报表列表v1
export function GET_REPORT_V1(params: any){
  return request({
    method: 'POST',
    data: params,
    url: '/GET_REPORT_V1'
  })
}
//获取报表列表v2
export function GET_REPORT_V2(params: any){
  return request({
    method: 'POST',
    data: params,
    url: '/GET_REPORT_V2'
  })
}