<template>
<div class="page-html flex1">
    <div class="condition">
        <el-row>
            <el-col :span="12" class="search-form">
                姓名：<el-input v-model="conditionForm.name" @input="getList"></el-input>
            </el-col>
            <el-col :span="12" class="search-btn text-r">
                 <el-button type="primary" color="3b3ebb" class="fs10" @click="getList" >查 询</el-button>
            </el-col>
        </el-row>
        
  
    </div>
    <div class="main-content flex1 flex-c">
      <mytable :headers="headers" :tableData="tableData" :pageInfo="pageInfo" ref="mytableRef" :loading="loading"></mytable>
    </div>
</div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ElTable } from 'element-plus'
import Mytable from 'comp/Mytable.vue'
import { GET_REPORT_V1 } from '../../api/report'
interface User {
  date: string
  name: string
  address: string
  tag: string
}
provide('getList',getList)
const mytableRef = ref()
var loading = ref(false)
const conditionForm = reactive({
    name:''
})
const currentPage = ref(1)
var pageInfo = reactive({
  totalNum: 5163,
  currentPage: 1,
  pageSize: 20
})
const headers = [
  {
    prop: "date",
    label: "日期"
  },
  {
    prop: "name",
    label: "姓名"
  },
  {
    prop: "address",
    label: "地址"
  },
  {
    prop: "tag",
    label: "标签"
  },
]
var tableData: any = ref([]);

function getList(){
  let params = mytableRef.value.getParams();
  params = {
    ...params,
    ...conditionForm
  }
  console.log(params)
  loading.value = true;
  GET_REPORT_V1(params).then(res=>{
    loading.value = false;
    tableData.value = res.data
  }).catch(()=>{
    loading.value = false;
  })
}
onMounted(()=>{
  getList()
})
</script>
<style lang="scss">
.page-html{
    width: calc(100% - 25px);
    display: flex;
    flex-direction: column;
    background-color: #f7f8fa;
    margin-left: 10px;
    margin-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;    
    .condition{
        min-height: 32px;
        padding: 10px;
        margin-bottom: 10px;
        background: white;
        border: 1px solid #eee;
        font-size: 14px;
    }
    .main-content{
        background: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;    
    }
    
}
</style>