import { useUserStore } from "./store";
import router from './router'
const createGuard = ()=>{
    const user = useUserStore();
    router.beforeEach((to,from,next)=>{
        if(to.fullPath !='/login' && !user.isLogin()){
            console.log('NOT LOGIN')
            next({
                path:'/login'
            })
        }else{
            next()
        }
    })
    return;
}
export default createGuard;
