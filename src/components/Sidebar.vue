<template>
    <div class="sidebar">{{tabs.curTab.path}}
      <el-menu
        active-text-color="#ffd04b"
        background-color="#151718"
        :default-active="tabs.curTab.path"
        class="el-menu-vertical-demo mt10"
        text-color="#fff"   
        router
      >
      <div v-for="menu in dynamicRoute" :key="'/'+menu.path">
          <sidebaritem :menu="menu"></sidebaritem>
      </div>
       
      </el-menu>
        
    </div>
</template>

<script setup>
import Sidebaritem from './Sidebaritem.vue'
import dynamicRoute from 'router/dynamicRoute'
import { useTabsStore } from '../store'
const tabs = useTabsStore()
</script>

<style lang="scss">
.sidebar{
    width: 200px;
    min-height: calc(100vh - 10px) ;   
    background-color: #151718;
    border-right: 1px solid #333;
    border-radius: 22px;
    overflow: hidden;
    // padding-top: 10px;
    .el-menu{
        border:0px;
        margin:0 10px 0 10px;
        overflow: hidden;
        .el-menu-item{
          border-radius: 20px;
          min-width: 120px;
          margin:0 10px;
          height: 40px;
        }
        .el-menu-item.is-active{
          background: white;
          color: #4b42ac;
          font-weight: bold;
        }
        .el-sub-menu__title,.el-menu-item{
          font-size: 13px;
          letter-spacing: 1px;

        }
    }
}
</style>