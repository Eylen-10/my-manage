var A=Object.defineProperty;var C=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var $=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,R=(e,a)=>{for(var t in a||(a={}))G.call(a,t)&&$(e,t,a[t]);if(C)for(var t of C(a))H.call(a,t)&&$(e,t,a[t]);return e};import{d as M,b as s,o as n,c as _,h as l,w as o,l as d,m as T,n as N,e as h,t as b,F as x,q as k,s as S,f as p,v as I,a as V,r as B,u as j,x as J,k as y,T as Q,y as W,K as X}from"./index.745e8f5f.js";const Y={key:0},Z=M({name:"Sidebaritem"}),ee=Object.assign(Z,{props:{menu:Object,default:{}},setup(e){return(a,t)=>{const r=s("el-icon"),u=s("sidebaritem",!0),m=s("el-sub-menu"),v=s("el-menu-item");return e.menu.children&&e.menu.children.length?(n(),_("div",Y,[l(m,{index:e.menu.path},{title:o(()=>[e.menu.icon?(n(),d(r,{key:0},{default:o(()=>[(n(),d(T(e.menu.icon)))]),_:1})):N("",!0),h("span",null,b(e.menu.name),1)]),default:o(()=>[(n(!0),_(x,null,k(e.menu.children,f=>(n(),_("div",{key:f.name},[l(u,{menu:f},null,8,["menu"])]))),128))]),_:1},8,["index"])])):(n(),d(v,{key:1,index:e.menu.path,router:e.menu.path},{default:o(()=>[e.menu.icon?(n(),d(r,{key:0},{default:o(()=>[(n(),d(T(e.menu.icon)))]),_:1})):N("",!0),h("span",null,b(e.menu.name),1)]),_:1},8,["index","router"]))}}});const te={class:"sidebar"},ne={setup(e){const a=S();return(t,r)=>{const u=s("el-menu");return n(),_("div",te,[l(u,{"active-text-color":"#ffd04b","background-color":"#151718","default-active":p(a).curTab.path,class:"el-menu-vertical-demo mt10","text-color":"#fff",router:""},{default:o(()=>[(n(!0),_(x,null,k(p(I),m=>(n(),_("div",{key:m.name},[l(ee,{menu:m},null,8,["menu"])]))),128))]),_:1},8,["default-active"])])}}};var ae="/my-manage/dist/assets/avatar.1442be94.png";const oe={class:"header-component flex"},se={class:"flex1 mt5"},le={class:"fs14 flex-row pointer"},ue=y("\u9000\u51FA\u767B\u5F55"),ce={class:"tabs"},re={setup(e){const a=V(),t=S();var r=B([]);B({name:"",path:""});const u=j(),m=()=>{a.setUser(""),t.clearTab(),u.push({path:"/login"})};J(()=>{z(u.currentRoute);let c={path:u.currentRoute.value.fullPath,name:u.currentRoute.value.name};t.addTab(c)});function v(c){t.updateCurTab(c),u.push({path:c.path})}function f(c){t.delTab(c),u.push({path:t.curTab.path?t.curTab.path:"/"})}function z(){r.length=0;let c=u.currentRoute.value.matched;if(c&&c.length){r.length=0;for(let g=0;g<c.length;g++)r.push(c[g])}else r.push(R({},u.currentRoute.value))}return(c,g)=>{const D=s("expand"),E=s("el-icon"),F=s("el-breadcrumb-item"),K=s("el-breadcrumb"),L=s("el-avatar"),O=s("el-dropdown-item"),P=s("el-dropdown-menu"),U=s("el-dropdown"),q=s("el-tag");return n(),_(x,null,[h("div",oe,[l(E,{class:"mr10"},{default:o(()=>[l(D)]),_:1}),h("div",se,[l(K,{separator:"/",class:"color-w"},{default:o(()=>[(n(!0),_(x,null,k(p(r),(i,w)=>(n(),d(F,{key:w,to:i.path},{default:o(()=>[y(b(i.name),1)]),_:2},1032,["to"]))),128))]),_:1})]),l(U,null,{dropdown:o(()=>[l(P,null,{default:o(()=>[l(O,{onClick:m},{default:o(()=>[ue]),_:1})]),_:1})]),default:o(()=>[h("span",le,[l(L,{src:p(ae),style:{width:"25px",height:"25px"},class:"mr10 bold"},null,8,["src"]),y(" "+b(p(a).userName||"\u6E38\u5BA2"),1)])]),_:1})]),h("div",ce,[l(Q,{name:"el-zoom-in-left"},{default:o(()=>[(n(!0),_(x,null,k(p(t).tabMap,i=>(n(),d(q,{key:i.path,class:W(["mr10 pointer",{"el-tag--dark":p(t).curTab.path==i.path}]),onClick:w=>v(i),onClose:w=>f(i),closable:""},{default:o(()=>[y(b(i.name),1)]),_:2},1032,["class","onClick","onClose"]))),128))]),_:1})])],64)}}};const _e={class:"container flex-row"},de={class:"main-container flex1"},pe={setup(e){const a=V(),t=j();return a.userName||t.push({path:"/login"}),(r,u)=>{const m=s("router-view");return n(),_("div",_e,[l(ne),h("div",de,[l(re),l(m,null,{default:o(({Component:v,route:f})=>[(n(),d(X,null,[(n(),d(T(v),{key:f.fullPath}))],1024))]),_:1})])])}}};export{pe as default};
