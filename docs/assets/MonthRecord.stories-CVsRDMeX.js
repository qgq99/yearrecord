import{M as w}from"./MonthRecord-DosGXxy8.js";const b={component:w,parameters:{layout:"centered"}},e={args:{}},a={args:{year:2024,month:9}},r={args:{itemWidth:"20px",itemHeight:"15px",itemBorderRadius:"5px",gridRowGap:"1px",gridColumnGap:"5px",themeColor:"#029cfd"}},t={args:{tooltipTitlePlacement:"right"}},o={args:{data:[{year:2024,month:6,day:1,data:10},{year:2024,month:6,day:2,data:20},{year:2024,month:3,day:5,data:25}]}},n={args:{tooltipTitileFunc:c=>`${c.year}年${c.month}月${c.day}日, 数据值: ${c.data}`}},s={args:{}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({
    // itemWidth: "10px",
    // itemHeight: "10px",
    // itemBorderRadius: "3px",
    // gridRowGap: "3px",
    // gridColumnGap: "3px",
    // year: new Date().getFullYear(),
    // month: new Date().getMonth() + 1 as Month,
    // data: undefined,
    // themeColor: "red",
    // tooltipTitileFunc: _ => \`tooltip title, \${_.data}\`,
    // tooltipTitlePlacement: "top",
    // compact: false
  } as MonthRecordProps)
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    year: 2024,
    month: 9
  } as MonthRecordProps)
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: ({
    itemWidth: "20px",
    itemHeight: "15px",
    itemBorderRadius: "5px",
    gridRowGap: "1px",
    gridColumnGap: "5px",
    themeColor: "#029cfd"
  } as MonthRecordProps)
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ({
    tooltipTitlePlacement: "right"
  } as MonthRecordProps)
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var M,P,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: ({
    data: [{
      year: 2024,
      month: 6,
      day: 1,
      data: 10
    }, {
      year: 2024,
      month: 6,
      day: 2,
      data: 20
    }, {
      year: 2024,
      month: 3,
      day: 5,
      data: 25
    }]
  } as MonthRecordProps)
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,C,$;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"{\n  args: ({\n    tooltipTitileFunc: item => `${item.year}年${item.month}月${item.day}日, 数据值: ${item.data}`\n  } as MonthRecordProps)\n}",...($=(C=n.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var G,_,D;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ({} as MonthRecordProps)
}`,...(D=(_=s.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const E=["Default","SpecificMonth","SpecificGeoInfo","SpecificTooltipTitlePlacement","CustomData","SpecificTooltipTitle","SpecificPrps"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomData:o,Default:e,SpecificGeoInfo:r,SpecificMonth:a,SpecificPrps:s,SpecificTooltipTitle:n,SpecificTooltipTitlePlacement:t,__namedExportsOrder:E,default:b},Symbol.toStringTag,{value:"Module"}));export{o as C,e as D,B as M,a as S,r as a,t as b,n as c,s as d};
