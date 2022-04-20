<template>
<div class="page-html flex1">
  <div class="condition">
    
      <el-row>
          <el-col :span="24" class="search-btn ">
              <input type="file" ref="inputRef" accept=".xls,.xlsx" @change="handleInputClick" v-show="false">
              <el-button color="#3b3ebb"  @click="handleUpload">上传 excel</el-button>
          </el-col>
      </el-row>
    
  </div>
  <div class="main-content flex1 flex-c">
      <Mytable :headers="headers" :tableData="tableData" :pageInfo="pageInfo" ref="mytableRef" :loading="loading"></Mytable>
  </div>
</div>
  
</template>

<script lang="ts" setup>
import moment from 'moment'
import {read,utils,WorkBook,WorkSheet} from 'xlsx'
import { dateUtil } from '../../utils/dateUtil'
import Mytable from 'comp/Mytable.vue'
const inputRef = ref<HTMLInputElement | null>(null);

var pageInfo = reactive({
  totalNum: 0,
  currentPage: 1,
  pageSize: 18
})
var loading = ref(false)
function handleInputClick(e: Event) {
  const files = e && (e.target as HTMLInputElement).files;
  const rawFile = files && files[0]; // only setting files[0]
  if (!rawFile) return;
  upload(rawFile);
}
var result = ref([]);
var headers = computed(()=>{
  let header = [];
  if(result.value.length > 0){
    let item = result.value[0]
    for(let key of Object.keys(item)){
      header.push({
        label:key,
        prop:key
      })
    }
  }
  return header;
  
})
var tableData = computed(()=>{
  let data = [] as any;
  if(result.value.length > 0){
    let start = (pageInfo.currentPage as number - 1 )* (pageInfo.pageSize as number) 
    data = result.value.slice(start,start + pageInfo.pageSize)
  }
  return data;
})
async function upload(rawFile: File) {
  const inputRefDom = unref(inputRef);
  if (inputRefDom) {
    // fix can't select the same excel
    inputRefDom.value = '';
  }
  readerData(rawFile).then((res: any) =>{
    result.value = res[0].results;
    pageInfo.totalNum = result.value.length;
  });
}
interface ExcelData<T = any> {
  header: string[];
  results: T[];
  meta: { sheetName: string };
}
function getHeaderRow(sheet: WorkSheet) {
  if (!sheet || !sheet['!ref']) return [];
  const headers: string[] = [];
  // A3:B7=>{s:{c:0, r:2}, e:{c:1, r:6}}
  const range = utils.decode_range(sheet['!ref']);

  const R = range.s.r;
  /* start in the first row */
  for (let C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[utils.encode_cell({ c: C, r: R })];
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + C; // <-- replace with your desired default
    if (cell && cell.t) hdr = utils.format_cell(cell);
    headers.push(hdr);
  }
  return headers;
}
function getExcelData(workbook: WorkBook) {
        const excelData: ExcelData[] = [];
        // const { dateFormat, timeZone } = props;
        const dateFormat = 'YYYY-MM-DD'
        for (const sheetName of workbook.SheetNames) {
          const worksheet = workbook.Sheets[sheetName];
          const header: string[] = getHeaderRow(worksheet);
          let results = utils.sheet_to_json(worksheet, {
            raw: true,
            dateNF: dateFormat, //Not worked
          }) as object[];
          results = results.map((row: object) => {
            for (let field in row) {
              if (row[field] instanceof Date) {
                // if (timeZone === 8) {
                //   row[field].setSeconds(row[field].getSeconds() + 43);
                // }
                // if (dateFormat) {
                //   row[field] = dateUtil(row[field]).format(dateFormat);
                // }
                row[field] = dateUtil(row[field]).format(dateFormat);
              }
            }
            return row;
          });

          excelData.push({
            header,
            results,
            meta: {
              sheetName,
            },
          });
        }
        return excelData;
      }
function readerData(rawFile: File) {
  loading.value = true;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = e.target && e.target.result;
        const workbook = read(data, { type: 'binary', cellDates: true });
        console.log(workbook);
        /* DO SOMETHING WITH workbook HERE */
        const excelData = getExcelData(workbook);
        resolve(excelData);
      } catch (error) {
        reject(error);
      } finally {
        loading.value = false;
      }
    };
    reader.readAsArrayBuffer(rawFile);
  });
}
function handleUpload(){
  const inputRefDom = unref(inputRef);
  inputRefDom && inputRefDom.click();
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
    
}
</style>