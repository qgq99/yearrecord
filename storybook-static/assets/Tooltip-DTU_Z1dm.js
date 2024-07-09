import{j as ee}from"./jsx-runtime-DWbWqHZ-.js";import{r as d,a as ze}from"./index-l2PZgWEW.js";import{r as st}from"./index-CaNG7YX3.js";const Z=Math.min,X=Math.max,le=Math.round,ie=Math.floor,K=e=>({x:e,y:e}),ct={left:"right",right:"left",bottom:"top",top:"bottom"},lt={start:"end",end:"start"};function be(e,t,n){return X(e,Z(t,n))}function ne(e,t){return typeof e=="function"?e(t):e}function Y(e){return e.split("-")[0]}function oe(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function Ce(e){return e==="y"?"height":"width"}function de(e){return["top","bottom"].includes(Y(e))?"y":"x"}function Pe(e){return Xe(de(e))}function ut(e,t,n){n===void 0&&(n=!1);const o=oe(e),r=Pe(e),i=Ce(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=ue(s)),[s,ue(s)]}function at(e){const t=ue(e);return[Re(e),t,Re(t)]}function Re(e){return e.replace(/start|end/g,t=>lt[t])}function ft(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function dt(e,t,n,o){const r=oe(e);let i=ft(Y(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(Re)))),i}function ue(e){return e.replace(/left|right|bottom|top/g,t=>ct[t])}function mt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ye(e){return typeof e!="number"?mt(e):{top:e,right:e,bottom:e,left:e}}function ae(e){const{x:t,y:n,width:o,height:r}=e;return{width:o,height:r,top:n,left:t,right:t+o,bottom:n+r,x:t,y:n}}function Fe(e,t,n){let{reference:o,floating:r}=e;const i=de(t),s=Pe(t),c=Ce(s),l=Y(t),u=i==="y",f=o.x+o.width/2-r.width/2,m=o.y+o.height/2-r.height/2,p=o[c]/2-r[c]/2;let a;switch(l){case"top":a={x:f,y:o.y-r.height};break;case"bottom":a={x:f,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:m};break;case"left":a={x:o.x-r.width,y:m};break;default:a={x:o.x,y:o.y}}switch(oe(t)){case"start":a[s]-=p*(n&&u?-1:1);break;case"end":a[s]+=p*(n&&u?-1:1);break}return a}const pt=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:m}=Fe(u,o,l),p=o,a={},g=0;for(let y=0;y<c.length;y++){const{name:E,fn:h}=c[y],{x,y:C,data:v,reset:P}=await h({x:f,y:m,initialPlacement:o,placement:p,strategy:r,middlewareData:a,rects:u,platform:s,elements:{reference:e,floating:t}});f=x??f,m=C??m,a={...a,[E]:{...a[E],...v}},P&&g<=50&&(g++,typeof P=="object"&&(P.placement&&(p=P.placement),P.rects&&(u=P.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):P.rects),{x:f,y:m}=Fe(u,p,l)),y=-1)}return{x:f,y:m,placement:p,strategy:r,middlewareData:a}};async function qe(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:m="floating",altBoundary:p=!1,padding:a=0}=ne(t,e),g=Ye(a),E=c[p?m==="floating"?"reference":"floating":m],h=ae(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(E)))==null||n?E:E.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:u,rootBoundary:f,strategy:l})),x=m==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),v=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},P=ae(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:C,strategy:l}):x);return{top:(h.top-P.top+g.top)/v.y,bottom:(P.bottom-h.bottom+g.bottom)/v.y,left:(h.left-P.left+g.left)/v.x,right:(P.right-h.right+g.right)/v.x}}const gt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:l}=t,{element:u,padding:f=0}=ne(e,t)||{};if(u==null)return{};const m=Ye(f),p={x:n,y:o},a=Pe(r),g=Ce(a),y=await s.getDimensions(u),E=a==="y",h=E?"top":"left",x=E?"bottom":"right",C=E?"clientHeight":"clientWidth",v=i.reference[g]+i.reference[a]-p[a]-i.floating[g],P=p[a]-i.reference[a],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let D=L?L[C]:0;(!D||!await(s.isElement==null?void 0:s.isElement(L)))&&(D=c.floating[C]||i.floating[g]);const k=v/2-P/2,F=D/2-y[g]/2-1,$=Z(m[h],F),A=Z(m[x],F),O=$,R=D-y[g]-A,w=D/2-y[g]/2+k,b=be(O,w,R),M=!l.arrow&&oe(r)!=null&&w!==b&&i.reference[g]/2-(w<O?$:A)-y[g]/2<0,T=M?w<O?w-O:w-R:0;return{[a]:p[a]+T,data:{[a]:b,centerOffset:w-b-T,...M&&{alignmentOffset:T}},reset:M}}}),ht=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:c,platform:l,elements:u}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:p,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:y=!0,...E}=ne(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const h=Y(r),x=Y(c)===c,C=await(l.isRTL==null?void 0:l.isRTL(u.floating)),v=p||(x||!y?[ue(c)]:at(c));!p&&g!=="none"&&v.push(...dt(c,y,g,C));const P=[c,...v],L=await qe(t,E),D=[];let k=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&D.push(L[h]),m){const O=ut(r,s,C);D.push(L[O[0]],L[O[1]])}if(k=[...k,{placement:r,overflows:D}],!D.every(O=>O<=0)){var F,$;const O=(((F=i.flip)==null?void 0:F.index)||0)+1,R=P[O];if(R)return{data:{index:O,overflows:k},reset:{placement:R}};let w=($=k.filter(b=>b.overflows[0]<=0).sort((b,M)=>b.overflows[1]-M.overflows[1])[0])==null?void 0:$.placement;if(!w)switch(a){case"bestFit":{var A;const b=(A=k.map(M=>[M.placement,M.overflows.filter(T=>T>0).reduce((T,S)=>T+S,0)]).sort((M,T)=>M[1]-T[1])[0])==null?void 0:A[0];b&&(w=b);break}case"initialPlacement":w=c;break}if(r!==w)return{reset:{placement:w}}}return{}}}};async function vt(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Y(n),c=oe(n),l=de(n)==="y",u=["left","top"].includes(s)?-1:1,f=i&&l?-1:1,m=ne(t,e);let{mainAxis:p,crossAxis:a,alignmentAxis:g}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return c&&typeof g=="number"&&(a=c==="end"?g*-1:g),l?{x:a*f,y:p*u}:{x:p*u,y:a*f}}const wt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:c}=t,l=await vt(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},yt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:E=>{let{x:h,y:x}=E;return{x:h,y:x}}},...l}=ne(e,t),u={x:n,y:o},f=await qe(t,l),m=de(Y(r)),p=Xe(m);let a=u[p],g=u[m];if(i){const E=p==="y"?"top":"left",h=p==="y"?"bottom":"right",x=a+f[E],C=a-f[h];a=be(x,a,C)}if(s){const E=m==="y"?"top":"left",h=m==="y"?"bottom":"right",x=g+f[E],C=g-f[h];g=be(x,g,C)}const y=c.fn({...t,[p]:a,[m]:g});return{...y,data:{x:y.x-n,y:y.y-o}}}}};function J(e){return Ue(e)?(e.nodeName||"").toLowerCase():"#document"}function _(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function H(e){var t;return(t=(Ue(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ue(e){return e instanceof Node||e instanceof _(e).Node}function B(e){return e instanceof Element||e instanceof _(e).Element}function V(e){return e instanceof HTMLElement||e instanceof _(e).HTMLElement}function $e(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _(e).ShadowRoot}function re(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function xt(e){return["table","td","th"].includes(J(e))}function Te(e){const t=Oe(),n=W(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function bt(e){let t=z(e);for(;V(t)&&!G(t);){if(Te(t))return t;t=z(t)}return null}function Oe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(J(e))}function W(e){return _(e).getComputedStyle(e)}function me(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function z(e){if(J(e)==="html")return e;const t=e.assignedSlot||e.parentNode||$e(e)&&e.host||H(e);return $e(t)?t.host:t}function Qe(e){const t=z(e);return G(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&re(t)?t:Qe(t)}function j(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Qe(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=_(r);return i?t.concat(s,s.visualViewport||[],re(r)?r:[],s.frameElement&&n?j(s.frameElement):[]):t.concat(r,j(r,[],n))}function Ze(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=V(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,c=le(n)!==i||le(o)!==s;return c&&(n=i,o=s),{width:n,height:o,$:c}}function Le(e){return B(e)?e:e.contextElement}function Q(e){const t=Le(e);if(!V(t))return K(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=Ze(t);let s=(i?le(n.width):n.width)/o,c=(i?le(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Rt=K(0);function Ge(e){const t=_(e);return!Oe()||!t.visualViewport?Rt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Et(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==_(e)?!1:t}function q(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Le(e);let s=K(1);t&&(o?B(o)&&(s=Q(o)):s=Q(e));const c=Et(i,n,o)?Ge(i):K(0);let l=(r.left+c.x)/s.x,u=(r.top+c.y)/s.y,f=r.width/s.x,m=r.height/s.y;if(i){const p=_(i),a=o&&B(o)?_(o):o;let g=p,y=g.frameElement;for(;y&&o&&a!==g;){const E=Q(y),h=y.getBoundingClientRect(),x=W(y),C=h.left+(y.clientLeft+parseFloat(x.paddingLeft))*E.x,v=h.top+(y.clientTop+parseFloat(x.paddingTop))*E.y;l*=E.x,u*=E.y,f*=E.x,m*=E.y,l+=C,u+=v,g=_(y),y=g.frameElement}}return ae({width:f,height:m,x:l,y:u})}const Ct=[":popover-open",":modal"];function Ae(e){return Ct.some(t=>{try{return e.matches(t)}catch{return!1}})}function Pt(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=H(o),c=t?Ae(t.floating):!1;if(o===s||c&&i)return n;let l={scrollLeft:0,scrollTop:0},u=K(1);const f=K(0),m=V(o);if((m||!m&&!i)&&((J(o)!=="body"||re(s))&&(l=me(o)),V(o))){const p=q(o);u=Q(o),f.x=p.x+o.clientLeft,f.y=p.y+o.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+f.x,y:n.y*u.y-l.scrollTop*u.y+f.y}}function Tt(e){return Array.from(e.getClientRects())}function Je(e){return q(H(e)).left+me(e).scrollLeft}function Ot(e){const t=H(e),n=me(e),o=e.ownerDocument.body,r=X(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=X(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Je(e);const c=-n.scrollTop;return W(o).direction==="rtl"&&(s+=X(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:c}}function Lt(e,t){const n=_(e),o=H(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const u=Oe();(!u||u&&t==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function At(e,t){const n=q(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=V(e)?Q(e):K(1),s=e.clientWidth*i.x,c=e.clientHeight*i.y,l=r*i.x,u=o*i.y;return{width:s,height:c,x:l,y:u}}function Ie(e,t,n){let o;if(t==="viewport")o=Lt(e,n);else if(t==="document")o=Ot(H(e));else if(B(t))o=At(t,n);else{const r=Ge(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return ae(o)}function et(e,t){const n=z(e);return n===t||!B(n)||G(n)?!1:W(n).position==="fixed"||et(n,t)}function St(e,t){const n=t.get(e);if(n)return n;let o=j(e,[],!1).filter(c=>B(c)&&J(c)!=="body"),r=null;const i=W(e).position==="fixed";let s=i?z(e):e;for(;B(s)&&!G(s);){const c=W(s),l=Te(s);!l&&c.position==="fixed"&&(r=null),(i?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||re(s)&&!l&&et(e,s))?o=o.filter(f=>f!==s):r=c,s=z(s)}return t.set(e,o),o}function Dt(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?Ae(t)?[]:St(t,this._c):[].concat(n),o],c=s[0],l=s.reduce((u,f)=>{const m=Ie(t,f,r);return u.top=X(m.top,u.top),u.right=Z(m.right,u.right),u.bottom=Z(m.bottom,u.bottom),u.left=X(m.left,u.left),u},Ie(t,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Mt(e){const{width:t,height:n}=Ze(e);return{width:t,height:n}}function kt(e,t,n){const o=V(t),r=H(t),i=n==="fixed",s=q(e,!0,i,t);let c={scrollLeft:0,scrollTop:0};const l=K(0);if(o||!o&&!i)if((J(t)!=="body"||re(r))&&(c=me(t)),o){const m=q(t,!0,i,t);l.x=m.x+t.clientLeft,l.y=m.y+t.clientTop}else r&&(l.x=Je(r));const u=s.left+c.scrollLeft-l.x,f=s.top+c.scrollTop-l.y;return{x:u,y:f,width:s.width,height:s.height}}function ge(e){return W(e).position==="static"}function _e(e,t){return!V(e)||W(e).position==="fixed"?null:t?t(e):e.offsetParent}function tt(e,t){const n=_(e);if(Ae(e))return n;if(!V(e)){let r=z(e);for(;r&&!G(r);){if(B(r)&&!ge(r))return r;r=z(r)}return n}let o=_e(e,t);for(;o&&xt(o)&&ge(o);)o=_e(o,t);return o&&G(o)&&ge(o)&&!Te(o)?n:o||bt(e)||n}const Ft=async function(e){const t=this.getOffsetParent||tt,n=this.getDimensions,o=await n(e.floating);return{reference:kt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function $t(e){return W(e).direction==="rtl"}const nt={convertOffsetParentRelativeRectToViewportRelativeRect:Pt,getDocumentElement:H,getClippingRect:Dt,getOffsetParent:tt,getElementRects:Ft,getClientRects:Tt,getDimensions:Mt,getScale:Q,isElement:B,isRTL:$t};function It(e,t){let n=null,o;const r=H(e);function i(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),i();const{left:u,top:f,width:m,height:p}=e.getBoundingClientRect();if(c||t(),!m||!p)return;const a=ie(f),g=ie(r.clientWidth-(u+m)),y=ie(r.clientHeight-(f+p)),E=ie(u),x={rootMargin:-a+"px "+-g+"px "+-y+"px "+-E+"px",threshold:X(0,Z(1,l))||1};let C=!0;function v(P){const L=P[0].intersectionRatio;if(L!==l){if(!C)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C=!1}try{n=new IntersectionObserver(v,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,x)}n.observe(e)}return s(!0),i}function _t(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,u=Le(e),f=r||i?[...u?j(u):[],...j(t)]:[];f.forEach(h=>{r&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const m=u&&c?It(u,n):null;let p=-1,a=null;s&&(a=new ResizeObserver(h=>{let[x]=h;x&&x.target===u&&a&&(a.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var C;(C=a)==null||C.observe(t)})),n()}),u&&!l&&a.observe(u),a.observe(t));let g,y=l?q(e):null;l&&E();function E(){const h=q(e);y&&(h.x!==y.x||h.y!==y.y||h.width!==y.width||h.height!==y.height)&&n(),y=h,g=requestAnimationFrame(E)}return n(),()=>{var h;f.forEach(x=>{r&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),m==null||m(),(h=a)==null||h.disconnect(),a=null,l&&cancelAnimationFrame(g)}}const Wt=wt,Bt=yt,Vt=ht,We=gt,Nt=(e,t,n)=>{const o=new Map,r={platform:nt,...n},i={...r.platform,_c:o};return pt(e,t,{...r,platform:i})};var se=typeof document<"u"?d.useLayoutEffect:d.useEffect;function fe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!fe(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!fe(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function ot(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Be(e,t){const n=ot(e);return Math.round(t*n)/n}function Ve(e){const t=d.useRef(e);return se(()=>{t.current=e}),t}function Ht(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:c=!0,whileElementsMounted:l,open:u}=e,[f,m]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,a]=d.useState(o);fe(p,o)||a(o);const[g,y]=d.useState(null),[E,h]=d.useState(null),x=d.useCallback(T=>{T!==L.current&&(L.current=T,y(T))},[]),C=d.useCallback(T=>{T!==D.current&&(D.current=T,h(T))},[]),v=i||g,P=s||E,L=d.useRef(null),D=d.useRef(null),k=d.useRef(f),F=l!=null,$=Ve(l),A=Ve(r),O=d.useCallback(()=>{if(!L.current||!D.current)return;const T={placement:t,strategy:n,middleware:p};A.current&&(T.platform=A.current),Nt(L.current,D.current,T).then(S=>{const I={...S,isPositioned:!0};R.current&&!fe(k.current,I)&&(k.current=I,st.flushSync(()=>{m(I)}))})},[p,t,n,A]);se(()=>{u===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,m(T=>({...T,isPositioned:!1})))},[u]);const R=d.useRef(!1);se(()=>(R.current=!0,()=>{R.current=!1}),[]),se(()=>{if(v&&(L.current=v),P&&(D.current=P),v&&P){if($.current)return $.current(v,P,O);O()}},[v,P,O,$,F]);const w=d.useMemo(()=>({reference:L,floating:D,setReference:x,setFloating:C}),[x,C]),b=d.useMemo(()=>({reference:v,floating:P}),[v,P]),M=d.useMemo(()=>{const T={position:n,left:0,top:0};if(!b.floating)return T;const S=Be(b.floating,f.x),I=Be(b.floating,f.y);return c?{...T,transform:"translate("+S+"px, "+I+"px)",...ot(b.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:S,top:I}},[n,c,b.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:O,refs:w,elements:b,floatingStyles:M}),[f,O,w,b,M])}const jt=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?We({element:o.current,padding:r}).fn(n):{}:o?We({element:o,padding:r}).fn(n):{}}}},Kt=(e,t)=>({...Wt(e),options:[e,t]}),zt=(e,t)=>({...Bt(e),options:[e,t]}),Xt=(e,t)=>({...Vt(e),options:[e,t]}),Yt=(e,t)=>({...jt(e),options:[e,t]});function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ee.apply(this,arguments)}var te=typeof document<"u"?d.useLayoutEffect:d.useEffect;let he=!1,qt=0;const Ne=()=>"floating-ui-"+qt++;function Ut(){const[e,t]=d.useState(()=>he?Ne():void 0);return te(()=>{e==null&&t(Ne())},[]),d.useEffect(()=>{he||(he=!0)},[]),e}const Qt=ze.useId,Se=Qt||Ut,Zt=d.forwardRef(function(t,n){let{context:{placement:o,elements:{floating:r},middlewareData:{arrow:i}},width:s=14,height:c=7,tipRadius:l=0,strokeWidth:u=0,staticOffset:f,stroke:m,d:p,style:{transform:a,...g}={},...y}=t;u*=2;const E=u/2,h=s/2*(l/-8+1),x=c/2*l/4,[C,v]=o.split("-"),P=r?nt.isRTL(r):!1,L=!!p,D=C==="top"||C==="bottom",k=f&&v==="end"?"bottom":"top";let F=f&&v==="end"?"right":"left";f&&P&&(F=v==="end"?"left":"right");const $=L?0:E,A=(i==null?void 0:i.x)!=null?f||i.x:"",O=(i==null?void 0:i.y)!=null?f||i.y+$:"",R=p||"M0,0"+(" H"+s)+(" L"+(s-h)+","+(c-x))+(" Q"+s/2+","+c+" "+h+","+(c-x))+" Z",w={top:L?"rotate(180deg)":"",left:L?"rotate(90deg)":"rotate(-90deg)",bottom:L?"":"rotate(180deg)",right:L?"rotate(-90deg)":"rotate(90deg)"}[C],b=Se();return d.createElement("svg",Ee({},y,{suppressHydrationWarning:!0,"aria-hidden":!0,ref:n,width:L?s:s+u,height:s,viewBox:"0 0 "+s+" "+(c>s?c:s),style:{position:"absolute",pointerEvents:"none",[F]:A,[k]:O,[C]:D||L?"100%":"calc(100% - "+u/2+"px)",transform:""+w+(a??""),...g}}),u>0&&d.createElement("path",{clipPath:"url(#"+b+")",fill:"none",stroke:m,strokeWidth:u+(p?0:1),d:R}),d.createElement("path",{stroke:u&&!p?y.fill:"none",d:R}),d.createElement("clipPath",{id:b},d.createElement("rect",{x:-E,y:E*(L?-1:1),width:s+u,height:s})))});function Gt(){const e=new Map;return{emit(t,n){var o;(o=e.get(t))==null||o.forEach(r=>r(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var o;e.set(t,((o=e.get(t))==null?void 0:o.filter(r=>r!==n))||[])}}}const Jt=d.createContext(null),en=d.createContext(null),rt=()=>{var e;return((e=d.useContext(Jt))==null?void 0:e.id)||null},De=()=>d.useContext(en);function U(e){return(e==null?void 0:e.ownerDocument)||document}function tn(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function nn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:o}=t;return n+"/"+o}).join(" "):navigator.userAgent}function pe(e){return U(e).defaultView||window}function N(e){return e?e instanceof pe(e).Element:!1}function on(e){return e?e instanceof pe(e).HTMLElement:!1}function rn(e){if(typeof ShadowRoot>"u")return!1;const t=pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function sn(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(tn())||t.test(nn()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function cn(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function it(e,t){const n=["mouse","pen"];return n.push("",void 0),n.includes(e)}function ln(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&rn(n)){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}return!1}function He(e){const t=d.useRef(e);return te(()=>{t.current=e}),t}const je="data-floating-ui-safe-polygon";function ve(e,t,n){return n&&!it(n)?0:typeof e=="number"?e:e==null?void 0:e[t]}function Ke(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,dataRef:r,events:i,elements:{domReference:s,floating:c},refs:l}=e,{enabled:u=!0,delay:f=0,handleClose:m=null,mouseOnly:p=!1,restMs:a=0,move:g=!0}=t,y=De(),E=rt(),h=He(m),x=He(f),C=d.useRef(),v=d.useRef(),P=d.useRef(),L=d.useRef(),D=d.useRef(!0),k=d.useRef(!1),F=d.useRef(()=>{}),$=d.useCallback(()=>{var w;const b=(w=r.current.openEvent)==null?void 0:w.type;return(b==null?void 0:b.includes("mouse"))&&b!=="mousedown"},[r]);d.useEffect(()=>{if(!u)return;function w(){clearTimeout(v.current),clearTimeout(L.current),D.current=!0}return i.on("dismiss",w),()=>{i.off("dismiss",w)}},[u,i]),d.useEffect(()=>{if(!u||!h.current||!n)return;function w(){$()&&o(!1)}const b=U(c).documentElement;return b.addEventListener("mouseleave",w),()=>{b.removeEventListener("mouseleave",w)}},[c,n,o,u,h,r,$]);const A=d.useCallback(function(w){w===void 0&&(w=!0);const b=ve(x.current,"close",C.current);b&&!P.current?(clearTimeout(v.current),v.current=setTimeout(()=>o(!1),b)):w&&(clearTimeout(v.current),o(!1))},[x,o]),O=d.useCallback(()=>{F.current(),P.current=void 0},[]),R=d.useCallback(()=>{if(k.current){const w=U(l.floating.current).body;w.style.pointerEvents="",w.removeAttribute(je),k.current=!1}},[l]);return d.useEffect(()=>{if(!u)return;function w(){return r.current.openEvent?["click","mousedown"].includes(r.current.openEvent.type):!1}function b(S){if(clearTimeout(v.current),D.current=!1,p&&!it(C.current)||a>0&&ve(x.current,"open")===0)return;r.current.openEvent=S;const I=ve(x.current,"open",C.current);I?v.current=setTimeout(()=>{o(!0)},I):o(!0)}function M(S){if(w())return;F.current();const I=U(c);if(clearTimeout(L.current),h.current){n||clearTimeout(v.current),P.current=h.current({...e,tree:y,x:S.clientX,y:S.clientY,onClose(){R(),O(),A()}});const ke=P.current;I.addEventListener("mousemove",ke),F.current=()=>{I.removeEventListener("mousemove",ke)};return}(C.current==="touch"?!ln(c,S.relatedTarget):!0)&&A()}function T(S){w()||h.current==null||h.current({...e,tree:y,x:S.clientX,y:S.clientY,onClose(){R(),O(),A()}})(S)}if(N(s)){const S=s;return n&&S.addEventListener("mouseleave",T),c==null||c.addEventListener("mouseleave",T),g&&S.addEventListener("mousemove",b,{once:!0}),S.addEventListener("mouseenter",b),S.addEventListener("mouseleave",M),()=>{n&&S.removeEventListener("mouseleave",T),c==null||c.removeEventListener("mouseleave",T),g&&S.removeEventListener("mousemove",b),S.removeEventListener("mouseenter",b),S.removeEventListener("mouseleave",M)}}},[s,c,u,e,p,a,g,A,O,R,o,n,y,x,h,r]),te(()=>{var w;if(u&&n&&(w=h.current)!=null&&w.__options.blockPointerEvents&&$()){const T=U(c).body;if(T.setAttribute(je,""),T.style.pointerEvents="none",k.current=!0,N(s)&&c){var b,M;const S=s,I=y==null||(b=y.nodesRef.current.find(Me=>Me.id===E))==null||(M=b.context)==null?void 0:M.elements.floating;return I&&(I.style.pointerEvents=""),S.style.pointerEvents="auto",c.style.pointerEvents="auto",()=>{S.style.pointerEvents="",c.style.pointerEvents=""}}}},[u,n,E,c,s,y,h,r,$]),te(()=>{n||(C.current=void 0,O(),R())},[n,O,R]),d.useEffect(()=>()=>{O(),clearTimeout(v.current),clearTimeout(L.current),R()},[u,O,R]),d.useMemo(()=>{if(!u)return{};function w(b){C.current=b.pointerType}return{reference:{onPointerDown:w,onPointerEnter:w,onMouseMove(){n||a===0||(clearTimeout(L.current),L.current=setTimeout(()=>{D.current||o(!0)},a))}},floating:{onMouseEnter(){clearTimeout(v.current)},onMouseLeave(){i.emit("dismiss",{type:"mouseLeave",data:{returnFocus:!1}}),A(!1)}}}},[i,u,a,n,o,A])}function we(e,t){let n=e.filter(r=>{var i;return r.parentId===t&&((i=r.context)==null?void 0:i.open)}),o=n;for(;o.length;)o=e.filter(r=>{var i;return(i=o)==null?void 0:i.some(s=>{var c;return r.parentId===s.id&&((c=r.context)==null?void 0:c.open)})}),n=n.concat(o);return n}function un(e){return"composedPath"in e?e.composedPath()[0]:e.target}const an=ze.useInsertionEffect,fn=an||(e=>e());function ce(e){const t=d.useRef(()=>{});return fn(()=>{t.current=e}),d.useCallback(function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t.current==null?void 0:t.current(...o)},[])}function ye(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const dn={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},mn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},pn=e=>{var t,n;return{escapeKeyBubbles:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePressBubbles:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function gn(e,t){t===void 0&&(t={});const{open:n,onOpenChange:o,events:r,nodeId:i,elements:{reference:s,domReference:c,floating:l},dataRef:u}=e,{enabled:f=!0,escapeKey:m=!0,outsidePress:p=!0,outsidePressEvent:a="pointerdown",referencePress:g=!1,referencePressEvent:y="pointerdown",ancestorScroll:E=!1,bubbles:h}=t,x=De(),C=rt()!=null,v=ce(typeof p=="function"?p:()=>!1),P=typeof p=="function"?v:p,L=d.useRef(!1),{escapeKeyBubbles:D,outsidePressBubbles:k}=pn(h),F=ce(A=>{if(!n||!f||!m||A.key!=="Escape")return;const O=x?we(x.nodesRef.current,i):[];if(!D&&(A.stopPropagation(),O.length>0)){let R=!0;if(O.forEach(w=>{var b;if((b=w.context)!=null&&b.open&&!w.context.dataRef.current.__escapeKeyBubbles){R=!1;return}}),!R)return}r.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),o(!1)}),$=ce(A=>{const O=L.current;if(L.current=!1,O||typeof P=="function"&&!P(A))return;const R=un(A);if(on(R)&&l){const M=R.clientWidth>0&&R.scrollWidth>R.clientWidth,T=R.clientHeight>0&&R.scrollHeight>R.clientHeight;let S=T&&A.offsetX>R.clientWidth;if(T&&pe(l).getComputedStyle(R).direction==="rtl"&&(S=A.offsetX<=R.offsetWidth-R.clientWidth),S||M&&A.offsetY>R.clientHeight)return}const w=x&&we(x.nodesRef.current,i).some(M=>{var T;return ye(A,(T=M.context)==null?void 0:T.elements.floating)});if(ye(A,l)||ye(A,c)||w)return;const b=x?we(x.nodesRef.current,i):[];if(b.length>0){let M=!0;if(b.forEach(T=>{var S;if((S=T.context)!=null&&S.open&&!T.context.dataRef.current.__outsidePressBubbles){M=!1;return}}),!M)return}r.emit("dismiss",{type:"outsidePress",data:{returnFocus:C?{preventScroll:!0}:sn(A)||cn(A)}}),o(!1)});return d.useEffect(()=>{if(!n||!f)return;u.current.__escapeKeyBubbles=D,u.current.__outsidePressBubbles=k;function A(){o(!1)}const O=U(l);m&&O.addEventListener("keydown",F),P&&O.addEventListener(a,$);let R=[];return E&&(N(c)&&(R=j(c)),N(l)&&(R=R.concat(j(l))),!N(s)&&s&&s.contextElement&&(R=R.concat(j(s.contextElement)))),R=R.filter(w=>{var b;return w!==((b=O.defaultView)==null?void 0:b.visualViewport)}),R.forEach(w=>{w.addEventListener("scroll",A,{passive:!0})}),()=>{m&&O.removeEventListener("keydown",F),P&&O.removeEventListener(a,$),R.forEach(w=>{w.removeEventListener("scroll",A)})}},[u,l,c,s,m,P,a,n,o,E,f,D,k,F,$]),d.useEffect(()=>{L.current=!1},[P,a]),d.useMemo(()=>f?{reference:{onKeyDown:F,[dn[y]]:()=>{g&&(r.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),o(!1))}},floating:{onKeyDown:F,[mn[a]]:()=>{L.current=!0}}}:{},[f,r,g,a,y,o,F])}function hn(e,t){t===void 0&&(t={});const{open:n,floatingId:o}=e,{enabled:r=!0,role:i="dialog"}=t,s=Se();return d.useMemo(()=>{const c={id:o,role:i};return r?i==="tooltip"?{reference:{"aria-describedby":n?o:void 0},floating:c}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":i==="alertdialog"?"dialog":i,"aria-controls":n?o:void 0,...i==="listbox"&&{role:"combobox"},...i==="menu"&&{id:s}},floating:{...c,...i==="menu"&&{"aria-labelledby":s}}}:{}},[r,i,n,o,s])}function vn(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:o,nodeId:r}=e,[i,s]=d.useState(null),c=((t=e.elements)==null?void 0:t.reference)||i,l=Ht(e),u=De(),f=ce(o),m=d.useRef(null),p=d.useRef({}),a=d.useState(()=>Gt())[0],g=Se(),y=d.useCallback(v=>{const P=N(v)?{getBoundingClientRect:()=>v.getBoundingClientRect(),contextElement:v}:v;l.refs.setReference(P)},[l.refs]),E=d.useCallback(v=>{(N(v)||v===null)&&(m.current=v,s(v)),(N(l.refs.reference.current)||l.refs.reference.current===null||v!==null&&!N(v))&&l.refs.setReference(v)},[l.refs]),h=d.useMemo(()=>({...l.refs,setReference:E,setPositionReference:y,domReference:m}),[l.refs,E,y]),x=d.useMemo(()=>({...l.elements,domReference:c}),[l.elements,c]),C=d.useMemo(()=>({...l,refs:h,elements:x,dataRef:p,nodeId:r,floatingId:g,events:a,open:n,onOpenChange:f}),[l,r,g,a,n,f,h,x]);return te(()=>{const v=u==null?void 0:u.nodesRef.current.find(P=>P.id===r);v&&(v.context=C)}),d.useMemo(()=>({...l,context:C,refs:h,elements:x}),[l,h,x,C])}function xe(e,t,n){const o=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(r=>r?r[n]:null).concat(e).reduce((r,i)=>(i&&Object.entries(i).forEach(s=>{let[c,l]=s;if(c.indexOf("on")===0){if(o.has(c)||o.set(c,[]),typeof l=="function"){var u;(u=o.get(c))==null||u.push(l),r[c]=function(){for(var f,m=arguments.length,p=new Array(m),a=0;a<m;a++)p[a]=arguments[a];return(f=o.get(c))==null?void 0:f.map(g=>g(...p)).find(g=>g!==void 0)}}}else r[c]=l}),r),{})}}function wn(e){e===void 0&&(e=[]);const t=e,n=d.useCallback(i=>xe(i,e,"reference"),t),o=d.useCallback(i=>xe(i,e,"floating"),t),r=d.useCallback(i=>xe(i,e,"item"),e.map(i=>i==null?void 0:i.item));return d.useMemo(()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:r}),[n,o,r])}const yn=({title:e="Tooltip title",placement:t="top",children:n})=>{const[o,r]=d.useState(!1),i=d.useRef(null),{refs:s,floatingStyles:c,context:l}=vn({open:o,onOpenChange:r,placement:t,middleware:[Kt(10),Xt(),zt(),Yt({element:i})],whileElementsMounted:_t}),u=Ke(l,{move:!1}),f=Ke(l),m=gn(l),p=hn(l,{role:"tooltip"}),{getReferenceProps:a,getFloatingProps:g}=wn([u,f,m,p]);return ee.jsxs(ee.Fragment,{children:[ee.jsx("span",{className:"reference-el-wraper",ref:s.setReference,...a(),children:n}),o&&ee.jsxs("div",{ref:s.setFloating,style:c,...g(),className:"tooltip",children:[e,ee.jsx(Zt,{ref:i,context:l})]})]})};yn.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{title:{required:!1,tsType:{name:"String"},description:"",defaultValue:{value:'"Tooltip title"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "right" | "bottom" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"top-start"'},{name:"literal",value:'"top-end"'},{name:"literal",value:'"right-start"'},{name:"literal",value:'"right-end"'},{name:"literal",value:'"bottom-start"'},{name:"literal",value:'"bottom-end"'},{name:"literal",value:'"left-start"'},{name:"literal",value:'"left-end"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};export{yn as T};
