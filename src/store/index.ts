import { createPinia,PiniaPluginContext } from 'pinia'
import { useUserStore } from './user'
import { useTabsStore } from './tabs'

const __PINIAKEY__ = '__PINIAKEY__'

const setStorage = (key: string, value: any): void =>{
    localStorage.setItem(key,JSON.stringify(value))
}
const getStorage = (key: string)=>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const piniaPlugin = (options : any) => {
    return (context: PiniaPluginContext) => {
        const { store } = context;
        const data = getStorage(`${options?.key ?? __PINIAKEY__}-${store.$id}`)
        store.$subscribe(() => {
            setStorage(`${options?.key ?? __PINIAKEY__}-${store.$id}`, toRaw(store.$state));
        })
        return {
            ...store.$state,
            ...data
        }
    }
}
    
const pinia = createPinia();
pinia.use(piniaPlugin({
    key:'my-manage'
}))
export { useUserStore,useTabsStore }
export default pinia;
