import { Md5 } from 'ts-md5/dist/md5'
function getParam(req: any){
  return JSON.parse(req.body)
}
export default{
  login:(req : any)=>{
    let param = getParam(req);
    console.log('mock login',param)
    let resData = {} as any
    if(param.account == 'TEST' && param.password == Md5.hashStr('TEST')){
      resData.code = 0
      resData.data = param
    }else{
      resData.code = -1;
      resData.msg = "账号或密码错误"
    }

    return resData;
  },
  logout:(req : any)=>{
    let param = getParam(req);
    console.log('mock logout',param)
    let resData = {} as any
    resData.code = 0
    return resData;
  }
}