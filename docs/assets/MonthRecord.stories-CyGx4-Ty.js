import{M as b}from"./MonthRecord-DAEv3RDy.js";const E={component:b,parameters:{layout:"centered"}},e={args:{}},a={args:{year:2024,month:9}},r={args:{itemWidth:"20px",itemHeight:"15px",itemBorderRadius:"5px",gridRowGap:"1px",gridColumnGap:"5px",themeColor:"#029cfd"}},o={args:{tooltipTitlePlacement:"right"}},t={args:{data:[{year:2024,month:6,day:1,data:10},{year:2024,month:6,day:2,data:20},{year:2024,month:3,day:5,data:25}]}},s={args:{tooltipTitileFunc:c=>`${c.year}年${c.month}月${c.day}日, 数据值: ${c.data}`}},n={args:{}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: ({} as MonthRecordProps)
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    year: 2024,
    month: 9
  } as MonthRecordProps)
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: ({
    itemWidth: "20px",
    itemHeight: "15px",
    itemBorderRadius: "5px",
    gridRowGap: "1px",
    gridColumnGap: "5px",
    themeColor: "#029cfd"
  } as MonthRecordProps)
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,f,M;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: ({
    tooltipTitlePlacement: "right"
  } as MonthRecordProps)
}`,...(M=(f=o.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var P,R,T;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(R=t.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var x,C,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{\n  args: ({\n    tooltipTitileFunc: item => `${item.year}年${item.month}月${item.day}日, 数据值: ${item.data}`\n  } as MonthRecordProps)\n}",...($=(C=s.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var G,_,D;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: ({} as MonthRecordProps)
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const O=["Default","SpecificMonth","SpecificGeoInfo","SpecificTooltipTitlePlacement","CustomData","SpecificTooltipTitle","SpecificPrps"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomData:t,Default:e,SpecificGeoInfo:r,SpecificMonth:a,SpecificPrps:n,SpecificTooltipTitle:s,SpecificTooltipTitlePlacement:o,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{t as C,e as D,w as M,a as S,r as a,o as b,s as c,n as d};
