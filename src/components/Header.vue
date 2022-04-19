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
    <div class="tabs">
        <transition-group name="el-zoom-in-left">
             <el-tag
                v-for="item in tabs.tabMap"
                :key="item.path"
                class="mr10 pointer"
                :class="{'el-tag--dark': tabs.curTab.path == item.path}"
                @click="changeTag(item)"
                @close="close(item)"
                closable
            >
            {{item.name}}
            </el-tag>
        </transition-group>
       
    </div>
</template>

<script setup>
import avatar from 'assets/avatar.png'
import { useTabsStore, useUserStore } from '../store'
const user = useUserStore()
const tabs = useTabsStore()
var breadcrumbList = reactive([])
var curTag = reactive({
    name:'',
    path:''
})
var editableTabs = []




const router = useRouter();
const logout = ()=>{
    user.setUser('');
    tabs.clearTab();
    router.push({
        path:'/login'
    })
}

watchEffect(()=>{
    updateBreadcrumb(router.currentRoute)
    let curRoute = {
        path:router.currentRoute.value.fullPath,
        name:router.currentRoute.value.name
    }
    tabs.addTab(curRoute);
    
})
function changeTag(item){
    tabs.updateCurTab(item);
    router.push({
        path:item.path
    })
}
function close(item){
    tabs.delTab(item);
    router.push({
        path:tabs.curTab.path ? tabs.curTab.path : '/'
    })
}
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
    background: white;
    height: 28px;
    align-items: center;
    padding: 10px;
    padding-right: 50px;
    padding-bottom: 5px;
    box-shadow: 0 5px 5px #ebedf0;
    .el-breadcrumb{
        cursor: pointer;
        display: inline-block;
        &__inner{
            // color: #ccc;
            font-weight: bold !important;

        }
    }
    
}
.tabs{
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    // border-bottom: 1px solid #f1f1f1;
    .el-tag:hover{
        opacity: 0.7;
    }
    .el-tag{
        box-shadow: rgba(141, 141, 141, 0.1) 0px 4px 4px;
        height: 28px;
        border-radius: 0px;
        padding-left:12px;
        padding-right:12px;
        background: #e4e4fd;
        color: #4b42ac;
        // border: 0;
        border-color: rgba(75, 66, 172,0.1);
        .el-icon{
            color:#4b42ac;
            background: #e4e4fd;
        }
        .el-icon:hover{
            background-color: #4b42ac;
            color: white;
        }
    }
    .el-tag--dark {
        background: #4b42ac;
        color: #e4e4fd;
        border-color: #e4e4fd;
        .el-icon{
            color:#4b42ac;
        }
        .el-icon:hover{
            background-color: #e4e4fd;
            color: #4b42ac;
        }
    }
    
}
</style>