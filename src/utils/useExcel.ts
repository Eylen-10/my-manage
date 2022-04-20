import { utils,writeFile } from 'xlsx'
type export_mytable_to_excel_param = {
  filename: string,
  data: Array<Object>,
  headers:Array<oHeaders>,
}
type export_json_to_excel_param = {
  filename: string,
  data: Array<Object>,
  header:Array<string>,
}
type oHeaders ={
  label: string,
  prop: string
}

function formatJson(filterVal: Array<string>, jsonData: Array<Object>) {
  return jsonData.map(v => filterVal.map(j => {
      return v[j];
  }));
}
var excel ={
  export_json_to_excel: ({ filename, data, header }: export_json_to_excel_param)=>{
    const ws = utils.json_to_sheet(data,{header: header})
    const wb = utils.book_new();
    utils.book_append_sheet(wb,ws,filename)
    writeFile(wb, filename + '.xlsx')
    return;
  },
  export_mytable_to_excel: ({ filename, data, headers }: export_mytable_to_excel_param)=>{
    let filterList = headers.map(v=>{return v.prop})
    let header = headers.map(v=>{return v.label})
    let exportDataList = [
      header,
      ...formatJson(filterList,data)
    ]
    const ws = utils.aoa_to_sheet(exportDataList);
    const wb = utils.book_new();
    utils.book_append_sheet(wb,ws,filename)
    writeFile(wb, filename + '.xlsx')
    return;
  } 

}
  
export default excel;