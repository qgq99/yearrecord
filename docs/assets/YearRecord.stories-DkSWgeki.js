import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{M as R,g as B,a as S}from"./MonthRecord-DosGXxy8.js";const j=({itemWidth:e="10px",itemHeight:p="10px",itemBorderRadius:n="3px",gridRowGap:i="3px",gridColumnGap:c="3px",year:s=new Date().getFullYear(),data:m,themeColor:f="#39d353",tooltipTitileFunc:x=h=>"tooltip title",tooltipTitlePlacement:g="top",compact:u=!1})=>{const h=new Array(12).fill(0),w=()=>h.map((H,d)=>a.jsx(R,{itemHeight:p,itemWidth:e,itemBorderRadius:n,gridColumnGap:c,gridRowGap:i,year:s,month:d+1,themeColor:f,data:S(s,d+1,0,100),tooltipTitileFunc:x,tooltipTitlePlacement:g,compact:u},d));return a.jsx(a.Fragment,{children:a.jsx("div",{style:{display:"flex"},children:u?a.jsx(R,{compact:u,itemHeight:p,itemWidth:e,itemBorderRadius:n,gridColumnGap:c,gridRowGap:i,year:s,month:7,themeColor:f,data:m||B(new Date().getFullYear(),1,1,365),tooltipTitileFunc:x,tooltipTitlePlacement:g}):w()})})};j.__docgenInfo={description:"",methods:[],displayName:"YearRecord",props:{itemWidth:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemHeight:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemBorderRadius:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridRowGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridColumnGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},year:{defaultValue:{value:"new Date().getFullYear()",computed:!0},required:!1},themeColor:{defaultValue:{value:'"#39d353"',computed:!1},required:!1},tooltipTitileFunc:{defaultValue:{value:'_ => "tooltip title"',computed:!1},required:!1},tooltipTitlePlacement:{defaultValue:{value:'"top"',computed:!1},required:!1},compact:{defaultValue:{value:"false",computed:!1},required:!1}}};const E={component:j,parameters:{layout:"centered"}},t={args:{itemWidth:"10px",itemHeight:"10px",itemBorderRadius:"3px",gridRowGap:"3px",gridColumnGap:"3px",year:new Date().getFullYear(),data:void 0,themeColor:"#39d353",tooltipTitileFunc:e=>"tooltip title",tooltipTitlePlacement:"top",compact:!1}},r={args:{tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},o={args:{itemWidth:"13px",itemHeight:"13px",compact:!0,tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},l={args:{}};var y,$,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(D=($=t.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,v,_;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:"{\n  args: ({\n    tooltipTitileFunc: (item: DataRecord) => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`\n  } as YearRecordProps)\n}",...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var Y,C,q;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: ({
    itemWidth: "13px",
    itemHeight: "13px",
    compact: true,
    tooltipTitileFunc: (item: DataRecord) => \`\${item.year}年\${item.month}月\${item.day}日, \${item.data}次浏览\`
  } as YearRecordProps)
}`,...(q=(C=o.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var V,P,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ({} as YearRecordProps)
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const G=["Default","Basic","Compact","Props"],b=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Compact:o,Default:t,Props:l,__namedExportsOrder:G,default:E},Symbol.toStringTag,{value:"Module"}));export{r as B,o as C,l as P,b as Y,j as a};
