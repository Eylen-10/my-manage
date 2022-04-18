import { defineStore } from 'pinia'
type tab = {
  name: string,
  path: string
}

export const useTabsStore =  defineStore('tabs',{
    state: ()=>{
        return{
          tabMap : reactive({}) as any,
          curTab : reactive({}) as tab
        }
    },
    actions:{
        addTab(val: tab){
            if(val.path != '/' && val.path != '/login' && val.path != ''){
              this.tabMap[val.path] = val;
              this.updateCurTab(val)
            }
        },
        delTab(val: tab){
          let keys = Object.keys(this.tabMap);
          let index = keys.indexOf(val.path)
          let next = {
            path:'',
            name:''
          };
          if(index == -1){
            return;
          }
          if(keys.length > 1){
            if(index == 0){
              next =  this.tabMap[keys[1]]
            }else if(index == keys.length-1){
              next = this.tabMap[keys[keys.length-2]]
            }else{
              next =  this.tabMap[keys[index+1]]
            }
          }
          if(this.tabMap[val.path]) 
            delete this.tabMap[val.path]
          this.updateCurTab(next)
        },
        updateCurTab(val: tab){
          this.curTab = val;
        },
    }
})