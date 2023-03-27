<template>
    <div class="container flex-row">
        <Sidebar></Sidebar>
        <div class="main-container flex1">
            <Header></Header>
            <router-view #default="{ Component,route }">
                    <keep-alive>
                        <component :is="Component" :key="route.fullPath" />
                    </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script setup>
import Sidebar from 'comp/Sidebar.vue'
import Header from 'comp/Header.vue'
import { useUserStore } from '../../store'
const user = useUserStore();
const router = useRouter();

const para = {
        dregtyp: "PID",
        zjlx: "01",
        fkdq: "457",
        yljgdm: "MB2C08947",
        jzksbm: "0307",
        agentid: "600055",
      }
      console.log(para)
      const href = router.resolve({
        path: '/ehrview-web/smsignIn.html',
        query: para
      })
      const url = 'https://10.130.20.111:18186'
      console.log(url + href.fullPath)
      window.open(url + href.fullPath, '_blank')


if(!user.userName){
    router.push({
        path:'/login'
    })
}
</script>

<style lang="scss">
.container{
    width: 100%;
    height: calc(100vh - 10px);
    display: flex;
    
    .main-container{
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #fff;
        .content{
            background-color: #fff;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>