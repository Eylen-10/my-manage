<template>
    <div class="header-component flex">
        <el-icon class="mr10"><expand /></el-icon>
        <div class="flex1 mt5">
            <el-breadcrumb separator="/" class="color-w">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index" :to="item.path">{{ item.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
         
        <el-dropdown>
            <span class="fs14 flex-row pointer">
                <el-avatar :src="avatar" style="width:25px;height:25px;" class="mr10 bold"/>
                {{ user.userName || '游客' }}
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import avatar from 'assets/avatar.png'
import { useUserStore } from '../store'
const user = useUserStore()
var breadcrumbList = reactive([])
const router = useRouter();
const logout = ()=>{
    user.setUser('')
    router.push({
        path:'/login'
    })
}
watchEffect(()=>{
    console.log(router.currentRoute.value)
    updateBreadcrumb(router.currentRoute)
    
})
function updateBreadcrumb(){
    breadcrumbList.length = 0
    let tem = router.currentRoute.value.matched
    if(tem && tem.length){
        breadcrumbList.length = 0
        for(let i=0;i<tem.length;i++){
            breadcrumbList.push(tem[i])
        }
    }else{
        breadcrumbList.push({
            ...router.currentRoute.value
        })
    }
}

</script>

<style lang="scss">
.header-component{
    height: 28px;
    // border-bottom: 1px solid #ccc;
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    padding: 10px;
    align-items: center;
    padding: 10px;
    padding-right: 50px;
    .el-breadcrumb{
        cursor: pointer;
        display: inline-block;
        &__inner{
            // color: #ccc;
            font-weight: bold !important;

        }
    }
    
}
</style>