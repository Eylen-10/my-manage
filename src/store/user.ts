import { defineStore } from 'pinia'
export const useUserStore =  defineStore('user',{
    state: ()=>{
        return{
            userName: ''
        }
    },
    actions:{
        setUser(val: string){
            this.userName = val;
        },
        isLogin(){
            return !!this.userName;
        }
    }
})