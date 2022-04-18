<template>
    <div class="sidebar">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#083858"
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
const menuList = [
    {
        name :'route1',
        icon: 'bicycle',
        children:[
            {
                name:'route1-1',
            },
            {
                name:'route1-2'
            }
        ]
    },
    {
        name :'route2',
        icon: 'Box',
        children:[
            {
                name:'rout2-1',
                children:[
                    {
                        name:'route2-1-1'
                    },
                    {
                        name:'route2-1-2'
                    },
                ]
            },
            {
                name:'route2-2'
            }
        ]
    },
    {
        name :'route3',
        icon: 'Edit',

    }
]
</script>

<style lang="scss">
.sidebar{
    width: 200px;
    min-height: 100%;   
    background-color: #083858;
    border-right: 1px solid #333;
    .el-menu{
        border:0px;
    }
}
</style>