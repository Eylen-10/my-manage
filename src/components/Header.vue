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
        <el-tag
        v-for="tag in editableTabs"
        :key="tag.path"
        class="mr10 pointer"
        size="medium"
        :effect="curTag.path == tag.path ? 'dark' :'light '"
        @click="changeTag(tag)"
        closable
        >
        {{tag.name}}
        </el-tag>

       <!-- <el-tabs v-model="editableTabsValue" type="card" @edit="handleTabsEdit">
            <el-tab-pane
                    :key="item.name"
                    v-for="(item) in editableTabs"
                    :label="item.name"
                    :name="item.name"
                >
                {{item.content}}
            </el-tab-pane>
        </el-tabs> -->
    </div>
</template>

<script setup>
import avatar from 'assets/avatar.png'
import { useUserStore } from '../store'
const user = useUserStore()
var breadcrumbList = reactive([])
var curTag = reactive({})
var editableTabs = [
          {
              name:'tab1',
              path:'/1',
          },
          {
              name:'tab2',
              path:'/2',
          }
        ]
changeTag(editableTabs[0])
function changeTag(item){
    console.log(item)
    curTag.path = item.path;
    curTag.name = item.name;
}
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
    // border-bottom: 1px solid #f1f1f1;
    .el-tag{
        border-radius: 0px;
        // border: 0px;
        // background: #083858;
        color: #0e6198;
        border-color: white;
        .el-icon{
            color:#0e6198;
        }
        .el-icon:hover{
            background-color: #0e6198;
            color: white;
        }
    }
    .el-tag--dark {
        background: #0e6198;
        color: white;
        border-color: white;
        .el-icon{
            color:white;
        }
        .el-icon:hover{
            background-color: white;
            color: #0e6198;
        }
    }
    
}
</style>