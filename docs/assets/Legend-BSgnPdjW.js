import{j as e}from"./jsx-runtime-DWbWqHZ-.js";import{r as f}from"./index-l2PZgWEW.js";import{M as l}from"./constant-DYgn2t-2.js";const c={horizon:"row",vertical:"column"},p=({cnt:a=6,minText:t="Less",maxText:o="More",orientation:s="horizon",itemWidth:d="10px",itemHeight:i="10px",itemBorderRadius:u="3px",themeColor:n="#39d353"})=>{const m=f.useId();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"legend-container",style:{"--orientation":c[s]},children:[e.jsx("span",{children:t}),new Array(a).fill(0).map((x,r)=>e.jsx("div",{className:"day-record",style:{"--itemWidth":d,"--itemHeight":i,"--itemBorderRadius":u,"--themeColor":n,"--opacity":l+r*(1-l)/(a-1)}},`${m}${r}`)),e.jsx("span",{children:o})]})})};p.__docgenInfo={description:"",methods:[],displayName:"Legend",props:{cnt:{defaultValue:{value:"6",computed:!1},required:!1},minText:{defaultValue:{value:'"Less"',computed:!1},required:!1},maxText:{defaultValue:{value:'"More"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizon"',computed:!1},required:!1},itemWidth:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemHeight:{defaultValue:{value:'"10px"',computed:!1},required:!1},itemBorderRadius:{defaultValue:{value:'"3px"',computed:!1},required:!1},themeColor:{defaultValue:{value:'"#39d353"',computed:!1},required:!1}}};export{p as L};