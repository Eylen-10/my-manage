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
        name:'报表系统',
        path:'route2',
        icon:'DataAnalysis',
        children:[
            {
                name:'我的报表1',
                path: 'route2-1',
                component: () => import("../views/Page1/index.vue")
            },
            {
                name:'我的报表2',
                path: 'route2-2',
                component: () => import("../views/Page2/index.vue")
            },
        ]
    },
]
export default dynamicRoute;