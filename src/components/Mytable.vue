<template>
  <div class="table-container flex1" v-loading="loading">
    <el-table ref="tableRef" row-key="date" :data="props.tableData" height="100%" style="width: 100%" header-row-class-name="table-header"	>
        <el-table-column 
        v-for="item in props.headers"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        >
        </el-table-column>
    </el-table>
     
  </div>
  <div class="p10">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="props.pageInfo.currentPage"
        :page-size="props.pageInfo.pageSize"
        layout="total, prev, pager, next"
        :total="props.pageInfo.totalNum">
      </el-pagination>
    </div>
</template>

<script setup lang="ts">


const getList = inject('getList')
type oHeader = {
  label: string,
  name: string
}

type oPage = {
  totalNum: Number,
  currentPage: Number,
  pageSize: Number
}
interface Props {
  headers: Array<oHeader>,
  tableData: [],
  pageInfo: oPage,
  loading: boolean,
}

const props = defineProps<Props>()

function getParams(){
  let params =  {
    start: (props.pageInfo.currentPage as number - 1 )* (props.pageInfo.pageSize as number) ,
    pageSize: props.pageInfo.pageSize,
  }
  // console.log('getParam',type,params)
  return params;
}

function handleCurrentChange(val : Number){
  props.pageInfo.currentPage = val;
  getList()
}
defineExpose({
  getParams
})
</script>
<style lang="scss">
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
</style>