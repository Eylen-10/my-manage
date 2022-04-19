import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useTabsStore, useUserStore } from '../store';
const router = useRouter();
const user = useUserStore();
const tabs = useTabsStore();

const http = axios.create({
  baseURL : '/mock',
  timeout : 3000
})
// 数据请求拦截
http.interceptors.request.use((config) => {
  // if(import.meta.env.MODE == 'development'){
  //   config.baseURL = '/mock'
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//数据响应拦截
http.interceptors.response.use((res)=> {
  const data = res.data;
  if(res.status == 200 && data.code === 0){
    return Promise.resolve(data);
  }else{
    // token失效或未登录
    if(data.code == 101){
      ElMessage({
        type: 'error',
        duration: 3 * 1000,
        message: data.msg + "功能异常，请联系管理员"
      });
      setTimeout(()=>{
        user.setUser('');
        router.push({
            path:'/login'
        })
        tabs.updateCurTab({
            name:'',
            path:''
        })
        tabs.clearTab();
      }, 1000)
    }else{
      ElMessage({
        message: data.msg || '功能异常，请联系管理员',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(data);
    }
  }
},error => {
  console.log("error "+ error)
  if(!error.response) { //接口请求超时
    ElMessage({
      type: 'error',
      duration: 3 * 1000,
      message: "后台响应超时，请刷新页面重新请求，或联系技术人员"
    });
  }else{
    ElMessage({
      type: 'error',
      duration: 3 * 1000,
      message: "系统功能异常，请刷新页面重新请求，或联系技术人员"
    });
  }
  return Promise.reject(error);
})

export default http
