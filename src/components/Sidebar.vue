<template>
    <div class="sidebar">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#083858"
        :default-active="tabs.curTab.path"
        class="el-menu-vertical-demo"
        text-color="#fff"   
        router
      >
      <div v-for="menu in dynamicRoute" :key="menu.name">
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
    min-height: 100%;   
    background-color: #083858;
    border-right: 1px solid #333;
    .el-menu{
        border:0px;
        .el-sub-menu__title,.el-menu-item{
          font-size: 13px;
          letter-spacing: 1px;

        }
    }
}
</style>