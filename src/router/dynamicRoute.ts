const dynamicRoute = [
    {
        name:'图表系统',
        path:'echart',
        icon:'PieChart',
        children:[
            {
                name:'折线图',
                path: 'e1',
                component: () => import("../views/Echart/main-pane.vue"),
            },
        ]
    },
    {
        name:'route2',
        path:'route2',
        icon:'CameraFilled',
        children:[
            {
                name:'route2-1',
                path: 'route2-1',
                component: () => import("../views/Page1/index.vue")
            },
            {
                name:'route2-2',
                path: 'route2-2',
                component: () => import("../views/Page1/index.vue")
            },
        ]
    },
]
export default dynamicRoute;