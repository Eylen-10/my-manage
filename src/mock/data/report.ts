import { V1, V2 } from '../myData'
function getParam(req: any){
  return JSON.parse(req.body)
}
export default{
  GET_REPORT_V1(req: any){
    let param = getParam(req);
    console.log('mock GET_REPORT_V1',param)
    let resData = {} as any
    resData.code = 0;
    if(param.name){
      resData.data = V1.filter(item=>{return item.name.indexOf(param.name) != -1 })
    }else{
      resData.data = V1
    }
    // resData.data = V1;
    return resData;
  },
  GET_REPORT_V2(req: any){
    let param = getParam(req);
    console.log('mock logout',param)
    let resData = {} as any
    resData.code = 0;
    if(param.name){
      resData.data = V2.filter(item=>{return item.name.indexOf(param.name) != -1 })
    }else{
      resData.data = V2
    }
    return resData;
  }
  
}
