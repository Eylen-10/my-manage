import{d as S,A as p,r as T,b as t,o as V,c as z,e as _,h as e,w as a,f,k as c,t as D}from"./index.745e8f5f.js";const B={class:"page-html flex1"},G={class:"condition"},L=c(" Name\uFF1A"),O=c("reset date filter"),R=c("reset all filters"),j={class:"main-content flex1 flex-c"},E={class:"p10"},q=S({setup(P){const d=p(),u=T({name:""}),g=p(1),h=()=>{d.value.clearFilter(["date"])},v=()=>{d.value.clearFilter()},b=(n,o)=>n.address,x=(n,o)=>o.tag===n,w=(n,o,i)=>{const l=i.property;return o[l]===n},y=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"}];function C(){}function k(){}return(n,o)=>{const i=t("el-input"),l=t("el-col"),m=t("el-button"),N=t("el-row"),s=t("el-table-column"),F=t("el-tag"),A=t("el-table"),H=t("el-pagination");return V(),z("div",B,[_("div",G,[e(N,null,{default:a(()=>[e(l,{span:12,class:"search-form"},{default:a(()=>[L,e(i,{modelValue:f(u).name,"onUpdate:modelValue":o[0]||(o[0]=r=>f(u).name=r)},null,8,["modelValue"])]),_:1}),e(l,{span:12,class:"search-btn text-r"},{default:a(()=>[e(m,{onClick:h},{default:a(()=>[O]),_:1}),e(m,{onClick:v},{default:a(()=>[R]),_:1})]),_:1})]),_:1})]),_("div",j,[e(A,{ref_key:"tableRef",ref:d,"row-key":"date",data:y,height:"100%",style:{width:"100%"},"header-row-class-name":"table-header"},{default:a(()=>[e(s,{prop:"date",label:"Date",sortable:"",width:"180","column-key":"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":w}),e(s,{prop:"name",label:"Name",width:"180"}),e(s,{prop:"address",label:"Address",formatter:b}),e(s,{prop:"tag",label:"Tag",width:"100",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],"filter-method":x,"filter-placement":"bottom-end"},{default:a(r=>[e(F,{type:r.row.tag==="Home"?"":"success","disable-transitions":""},{default:a(()=>[c(D(r.row.tag),1)]),_:2},1032,["type"])]),_:1})]),_:1},512),_("div",E,[e(H,{onSizeChange:k,onCurrentChange:C,"current-page":g.value,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, prev, pager, next, jumper",total:400},null,8,["current-page"])])])])}}});export{q as default};
