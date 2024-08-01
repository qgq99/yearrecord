import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{M as y,g as S,a as E}from"./MonthRecord-BKbCPvAq.js";const w=({itemWidth:e="10px",itemHeight:p="10px",itemBorderRadius:i="3px",gridRowGap:n="3px",gridColumnGap:c="3px",year:s=new Date().getFullYear(),data:m,themeColor:f="#39d353",tooltipTitileFunc:x=R=>"tooltip title",tooltipTitlePlacement:g="top",compact:u=!1,onRecordClick:h=()=>{}})=>{const R=new Array(12).fill(0),B=()=>R.map((M,d)=>a.jsx(y,{itemHeight:p,itemWidth:e,itemBorderRadius:i,gridColumnGap:c,gridRowGap:n,year:s,month:d+1,themeColor:f,data:E(s,d+1,0,100),tooltipTitileFunc:x,tooltipTitlePlacement:g,compact:u,onRecordClick:h},d));return a.jsx(a.Fragment,{children:a.jsx("div",{style:{display:"flex"},children:u?a.jsx(y,{compact:u,itemHeight:p,itemWidth:e,itemBorderRadius:i,gridColumnGap:c,gridRowGap:n,year:s,month:7,themeColor:f,data:m||S(new Date().getFullYear(),1,1,365),tooltipTitileFunc:x,tooltipTitlePlacement:g,onRecordClick:h}):B()})})};w.__docgenInfo={description:"",methods:[],displayName:"YearRecord",props:{itemWidth:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemHeight:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemBorderRadius:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridRowGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridColumnGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},year:{defaultValue:{value:"new Date().getFullYear()",computed:!0},required:!1},themeColor:{defaultValue:{value:'"#39d353"',computed:!1},required:!1},tooltipTitileFunc:{defaultValue:{value:'_ => "tooltip title"',computed:!1},required:!1},tooltipTitlePlacement:{defaultValue:{value:'"top"',computed:!1},required:!1},compact:{defaultValue:{value:"false",computed:!1},required:!1},onRecordClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}};const G={component:w,parameters:{layout:"centered"}},t={args:{itemWidth:"10px",itemHeight:"10px",itemBorderRadius:"3px",gridRowGap:"3px",gridColumnGap:"3px",year:new Date().getFullYear(),data:void 0,themeColor:"#39d353",tooltipTitileFunc:e=>"tooltip title",tooltipTitlePlacement:"top",compact:!1}},r={args:{tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},o={args:{itemWidth:"13px",itemHeight:"13px",compact:!0,tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},l={args:{}};var $,v,D;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    itemWidth: "10px",
    itemHeight: "10px",
    itemBorderRadius: "3px",
    gridRowGap: "3px",
    gridColumnGap: "3px",
    year: new Date().getFullYear(),
    data: undefined,
    themeColor: "#39d353",
    tooltipTitileFunc: (_: DataRecord) => "tooltip title",
    tooltipTitlePlacement: "top",
    compact: false
  }
}`,...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var F,_,Y;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:"{\n  args: ({\n    tooltipTitileFunc: (item: DataRecord) => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`\n  } as YearRecordProps)\n}",...(Y=(_=r.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var q,C,V;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: ({
    itemWidth: "13px",
    itemHeight: "13px",
    compact: true,
    tooltipTitileFunc: (item: DataRecord) => \`\${item.year}年\${item.month}月\${item.day}日, \${item.data}次浏览\`
  } as YearRecordProps)
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var P,T,j;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: ({} as YearRecordProps)
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const H=["Default","Basic","Compact","Props"],O=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Compact:o,Default:t,Props:l,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{r as B,o as C,l as P,O as Y,w as a};
