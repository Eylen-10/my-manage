import Mock from 'mockjs'
Mock.setup({
  timeout: '200-600'
});
console.log('mock start')

// 使用webpack的require.context()遍历所有mock文件
const files: any = import.meta.globEager("./data/*.ts") 
var configArray = [] as any;
Object.keys(files).forEach(key=>{
  configArray = configArray.concat(files[key].default);
})

// // 注册所有的mock服务
configArray.forEach((item: any) => {
  for (let [path, target] of Object.entries(item)) {
    Mock.mock('/mock/' + path,'post', target);
  }
});