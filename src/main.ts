import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import pinia from './store'
import router from './router'
import 'animate.css'
import { ElMessage } from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
import * as Echart from 'echarts'

const app = createApp(App)
app.use(pinia)
app.provide('$message',ElMessage)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlus)
for (const name in ElIcons){
	app.component(name,(ElIcons as any)[name])
}
app.provide('$echarts',Echart)

import createGuard from './permission'
createGuard()

import './mock'
// if(import.meta.env.MODE == 'development'){

// }

app.mount('#app')

