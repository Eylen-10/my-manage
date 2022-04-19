<template>
<div class="page-html flex1">
    <div class="condition">
        <el-row>
            <el-col :span="12" class="search-form">
                Name：<el-input v-model="conditionForm.name"></el-input>
            </el-col>
            <el-col :span="12" class="search-btn text-r">
                 <el-button >reset date filter</el-button>
                <el-button >reset all filters</el-button>
            </el-col>
        </el-row>
        
  
    </div>
    <div class="main-content flex1 flex-c">
      <mytable :headers="headers" :tableData="tableData" :pageInfo="pageInfo"></mytable>
    </div>
</div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import type { ElTable } from 'element-plus'
import Mytable from 'comp/Mytable.vue'
interface User {
  date: string
  name: string
  address: string
  tag: string
}
provide('getList',getList)
const tableRef = ref<InstanceType<typeof ElTable>>()
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
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  
]

function getList(){
  alert('getList')
}

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
    .table-header{
        th{
            color:black;
            .el-icon{
                color:black
            }
            .ascending{
                border-bottom-color: black;
            }
            .descending{
                border-top-color: black;
            }

        }
    }
    .el-table__body-wrapper{
        .cell{
          font-weight: normal;
        }
    }
}
</style>