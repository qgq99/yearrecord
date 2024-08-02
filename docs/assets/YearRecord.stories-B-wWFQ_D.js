import{j as a}from"./jsx-runtime-DWbWqHZ-.js";import{M as R,g as G,c as H,a as M}from"./MonthRecord-DAEv3RDy.js";import{L as W}from"./Legend-BSgnPdjW.js";const w=({itemWidth:e="10px",itemHeight:p="10px",itemBorderRadius:i="3px",gridRowGap:c="3px",gridColumnGap:m="3px",year:s=new Date().getFullYear(),data:f,themeColor:g="#39d353",tooltipTitlePlacement:x="top",compact:u=!1,legendProps:B={},showLegend:S=!1,legendPlacement:E="bottom-end",tooltipTitileFunc:h=d=>"tooltip title",onRecordClick:v=d=>{}})=>{const d=new Array(12).fill(0),b=()=>d.map((O,n)=>a.jsx(R,{itemHeight:p,itemWidth:e,itemBorderRadius:i,gridColumnGap:m,gridRowGap:c,year:s,month:n+1,themeColor:g,data:M(s,n+1,0,100),tooltipTitileFunc:h,tooltipTitlePlacement:x,compact:u,onRecordClick:v},n));return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"yearRecord-container ",children:[u?a.jsx(R,{compact:u,itemHeight:p,itemWidth:e,itemBorderRadius:i,gridColumnGap:m,gridRowGap:c,year:s,month:7,themeColor:g,data:f||G(new Date().getFullYear(),1,1,365),tooltipTitileFunc:h,tooltipTitlePlacement:x,onRecordClick:v}):b(),S&&a.jsx("div",{className:"legend-component-container",style:{"--inset":H(E)},children:a.jsx(W,{...B})})]})})};w.__docgenInfo={description:"",methods:[],displayName:"YearRecord",props:{itemWidth:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemHeight:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemBorderRadius:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridRowGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},gridColumnGap:{defaultValue:{value:'"3px"',computed:!1},required:!1},year:{defaultValue:{value:"new Date().getFullYear()",computed:!0},required:!1},themeColor:{defaultValue:{value:'"#39d353"',computed:!1},required:!1},tooltipTitlePlacement:{defaultValue:{value:'"top"',computed:!1},required:!1},compact:{defaultValue:{value:"false",computed:!1},required:!1},legendProps:{defaultValue:{value:"{}",computed:!1},required:!1},showLegend:{defaultValue:{value:"false",computed:!1},required:!1},legendPlacement:{defaultValue:{value:'"bottom-end"',computed:!1},required:!1},tooltipTitileFunc:{defaultValue:{value:'_ => "tooltip title"',computed:!1},required:!1},onRecordClick:{defaultValue:{value:"_ => undefined",computed:!1},required:!1}}};const L={component:w,parameters:{layout:"centered"}},t={args:{itemWidth:"10px",itemHeight:"10px",itemBorderRadius:"3px",gridRowGap:"3px",gridColumnGap:"3px",year:new Date().getFullYear(),data:void 0,themeColor:"#39d353",tooltipTitileFunc:e=>"tooltip title",tooltipTitlePlacement:"top",compact:!1}},r={args:{tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},o={args:{itemWidth:"13px",itemHeight:"13px",compact:!0,tooltipTitileFunc:e=>`${e.year}年${e.month}月${e.day}日, ${e.data}次浏览`}},l={args:{}};var y,$,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=($=t.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,D,F;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:"{\n  args: ({\n    tooltipTitileFunc: (item: DataRecord) => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`\n  } as YearRecordProps)\n}",...(F=(D=r.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var V,P,Y;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: ({
    itemWidth: "13px",
    itemHeight: "13px",
    compact: true,
    tooltipTitileFunc: (item: DataRecord) => \`\${item.year}年\${item.month}月\${item.day}日, \${item.data}次浏览\`
  } as YearRecordProps)
}`,...(Y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var C,j,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: ({} as YearRecordProps)
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const N=["Default","Basic","Compact","Props"],k=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,Compact:o,Default:t,Props:l,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{r as B,o as C,l as P,k as Y,w as a};
