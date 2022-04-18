const dynamicRoute = [
    {
        name:'route1',
        path:'route1',
        icon:'Avatar',
        children:[
            {
                name:'route1-1',
                path: 'route1-1',
                children:[
                    {
                        name: 'route1-1-1',
                        path: 'route1-1-1',
                        component: () => import("../views/Page1/index.vue"),
                    },
                    {
                        name: 'route1-1-2',
                        path: 'route1-1-2',
                        component: () => import("../views/Page1/index.vue"),
                    }
                ]
            },
            {
                name:'route1-2',
                path: 'route1-2',
                component: () => import("../views/Page1/index.vue"),
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