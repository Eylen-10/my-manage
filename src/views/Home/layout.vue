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