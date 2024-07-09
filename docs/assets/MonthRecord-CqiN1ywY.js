import{j as n}from"./jsx-runtime-DWbWqHZ-.js";import{useMDXComponents as s}from"./index-DbIxU3Ed.js";import{M as c,C as o,d}from"./index-DLkVipt8.js";import{M as a,D as p,S as l,a as h,b as m,C as x,c as j,d as i}from"./MonthRecord.stories-CVsRDMeX.js";import"./index-l2PZgWEW.js";import"./iframe-qtsZd3Yf.js";import"../sb-preview/runtime.js";import"./index-CaNG7YX3.js";import"./index-DXimoRZY.js";import"./index-B5xYo-Cg.js";import"./index-DrFu-skq.js";import"./MonthRecord-DosGXxy8.js";import"./Tooltip-DTU_Z1dm.js";function r(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:a}),`
`,n.jsx(e.h1,{id:"monthrecord",children:"MonthRecord"}),`
`,n.jsx(e.p,{children:`可展示某个月的数据记录情况, 每个组件都由7行不定列的小方块组成。 形式上, 位于第一行的方块代表当天是周一, 第二行代表周二,\r
依次类推。最左边一列从上到下第一个显示的方块代表本月1号, 日期递增方向为做上到下, 从左到右。\r
每个小方块的颜色深浅表示了该天数据的大小, 数据越大, 其颜色越深。`}),`
`,n.jsx(o,{of:p}),`
`,n.jsx(e.h2,{id:"指定展示某年某月的数据",children:"指定展示某年某月的数据"}),`
`,n.jsx(o,{of:l}),`
`,n.jsx(e.h2,{id:"指定方块尺寸圆角半径主题颜色以及行列间距",children:"指定方块尺寸、圆角半径、主题颜色以及行列间距"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h2,{id:"设置tooltip展示位置",children:"设置Tooltip展示位置"}),`
`,n.jsx(o,{of:m}),`
`,n.jsx(e.h2,{id:"数据",children:"数据"}),`
`,n.jsxs(e.p,{children:["MonthRecord接收的数据类型为",n.jsx(e.code,{children:"DataRecord[] | undefined,"}),", 若为",n.jsx(e.code,{children:"undefined"}),", 则自动生成类型为",n.jsx(e.code,{children:"DataRecord[]"}),"的数据。类型DataRecord的定义如下:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;\r
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20\r
21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 || 30 | 31;\r
\r
interface DataRecord {\r
  year: number,\r
  month: Month,\r
  day: Day,\r
  data: number\r
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"尽管不会报错, 仍建议data的长度恰好等于所指定的月份的天数, 其日期按真实顺序递增"})}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h1,{id:"指定tooltip-title的内容计算逻辑",children:"指定Tooltip title的内容计算逻辑"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"tooltipTitileFunc"}),"这个prop接收一个类型为",n.jsx(e.code,{children:"(item: DataRecord) => string"}),`的函数, 改函数将接收每一条数据记录作为输入, 并将其返回值设置为其Tooltip title的内容。\r
例如, 当设置:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:"tooltipTitileFunc = item => `${item.year}年${item.month}月${item.day}日, 数据值: ${item.data}`\n"})}),`
`,n.jsx(o,{of:j}),`
`,n.jsx(e.h1,{id:"props",children:"Props"}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(d,{of:i})]})}function P(t={}){const{wrapper:e}={...s(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{P as default};
