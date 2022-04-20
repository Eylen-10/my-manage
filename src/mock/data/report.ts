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
    let allList;
    if(param.name){
      allList = V1.filter(item=>{return item.name.indexOf(param.name) != -1 })
    }else{
      allList = V1
    }
    resData.totalNum = allList.length;
    if(param.start>=0 && param.pageSize > 0){
      resData.data = allList.slice(param.start,param.start + param.pageSize)
    }else{
      resData.data = allList
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
    resData.totalNum = resData.data.length;
    return resData;
  }
  
}
