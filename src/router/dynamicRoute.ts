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
        name:'组件系统',
        path:'route2',
        icon:'DataAnalysis',
        children:[
            {
                name:'人员列表',
                path: 'route2-1',
                component: () => import("../views/Page1/index.vue")
            },
            {
                name:'上传EXCEL',
                path: 'route2-2',
                component: () => import("../views/Page2/index.vue")
            },
            {
                name:'PDF阅览',
                path: 'route2-3',
                component: () => import("../views/Page4/index.vue")
            },
        ]
    },
    {
        name:'算法',
        path:'Algorithm',
        icon:'Document',
        children:[
            {
                name:'图遍历',
                path: 'GraphSearch',
                component: () => import("../views/Algorithm/GraphSearch.vue")
            },
        ]
    },
]
export default dynamicRoute;