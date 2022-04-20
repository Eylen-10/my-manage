<template>
<div class="page-html flex1">
    <div class="condition">
        <el-row>
            <el-col :span="12" class="search-form">
                姓名：<el-input v-model="conditionForm.name" @input="getList"></el-input>
            </el-col>
            <el-col :span="12" class="search-btn text-r">
                 <el-button type="primary" color="3b3ebb" class="fs10" @click="exportExcel"  :icon="Download">导 出</el-button>
                 <el-button type="primary" color="3b3ebb" class="fs10" @click="getList" :icon="Search" >查 询</el-button>
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
import excel from '../../utils/useExcel'
import { Download,Search } from '@element-plus/icons-vue'
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
const router = useRouter()
const currentPage = ref(1)
var pageInfo = reactive({
  totalNum: 0,
  currentPage: 1,
  pageSize: 18
})
const headers = [
  {
    prop: "date",
    label: "日期",
  },
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "address",
    label: "地址",
    filterList:[],
  },
  {
    prop: "tag",
    label: "标签",
    tag: true,
    ellipsis:true
  },
]
var tableData: any = ref([]);

function exportExcel(){
  // excel.export_json_to_excel({
  //     filename:'导出excel测试',
  //     data:tableData.value,
  //     header: Object.keys(tableData.value[0])
  //   });

  excel.export_mytable_to_excel({
    filename: router.currentRoute.value.name as string,
    data:tableData.value,
    headers
  });
  return;
}
function getList(){
  let params = mytableRef.value.getParams();
  params = {
    ...params,
    ...conditionForm
  }
  tableData.value.length = 0
  loading.value = true;
  GET_REPORT_V1(params).then((res:any)=>{
    loading.value = false;
    tableData.value = res.data
    pageInfo.totalNum = res.totalNum;
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