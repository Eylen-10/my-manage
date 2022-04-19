<template>
    <div v-if="menu.children && menu.children.length">
        <el-sub-menu :index="'/'+menu.path">
            <template #title>
                <el-icon v-if="menu.icon">
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.name }}</span>
            </template>
            <div v-for="item in menu.children" :key="item.name">
                <sidebaritem :menu="item"></sidebaritem>
            </div>
        </el-sub-menu>     
    </div>
    <el-menu-item v-else :index="'/'+menu.path" :router="menu.path">
        <el-icon v-if="menu.icon">
            <component :is="menu.icon" />
        </el-icon>
        <span>{{ menu.name }}</span>
    </el-menu-item>
</template>
<script>

export default defineComponent({
    name:'Sidebaritem'
})
</script>

<script setup>
const { menu } = defineProps({
    menu: Object,
    default: {}
})
</script>

<style lang="scss">

</style>