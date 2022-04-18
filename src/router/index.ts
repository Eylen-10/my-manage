import { ElStep } from "element-plus";
import { createRouter,createWebHashHistory } from "vue-router"
import dynamicRouteList from './dynamicRoute'

var dynamicRoute: any = []
generateDynamicRoute({name:'root',children:dynamicRouteList})
function generateDynamicRoute(root: any){
    var children = root.children;
    if(children != null)
    {
        for(var i in children)
            generateDynamicRoute(children[i]);
    }else{
        dynamicRoute.push(root)
    }
}
const routes = [

    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login/index.vue")
    },
    {
        path: "/",
        name: "home",
        component:() => import("../views//Home/layout.vue"),
        children:dynamicRoute
    },
]
console.log(dynamicRoute)



const router = createRouter({
    history: createWebHashHistory(),
    routes
})



export default router;
