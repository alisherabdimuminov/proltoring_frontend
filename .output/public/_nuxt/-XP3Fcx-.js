import{c as h}from"./X3DdcV6V.js";import{e as c,D as k,o as d,f as p,w as l,r as i,n as w,g as B,u as e,aA as v,h as m,b as y,aB as M,m as u,i as f,aC as b,I as g,aD as P,aE as $,aF as C,c as D,z,aG as I,aH as S,aI as O,aJ as L,aK as H,aL as A,aM as U}from"./BQArHuWU.js";/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=h("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=h("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=h("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=h("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=h("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),G=c({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(o,{emit:s}){const a=k(o,s);return(r,_)=>(d(),p(e(v),w(B(e(a))),{default:l(()=>[i(r.$slots,"default")]),_:3},16))}}),J=c({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(o,{emit:s}){const n=o,t=s,a=m(()=>{const{class:_,...x}=n;return x}),r=k(a,t);return(_,x)=>(d(),p(e(b),null,{default:l(()=>[y(e(M),u(e(r),{class:e(f)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n.class)}),{default:l(()=>[i(_.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),N=c({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(o){const s=o,n=m(()=>{const{class:a,...r}=s;return r}),t=g(n);return(a,r)=>(d(),p(e(P),u(e(t),{class:e(f)("relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",a.inset&&"pl-8",s.class)}),{default:l(()=>[i(a.$slots,"default")]),_:3},16,["class"]))}}),W=c({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(o){const s=o,n=m(()=>{const{class:a,...r}=s;return r}),t=g(n);return(a,r)=>(d(),p(e($),u(e(t),{class:e(f)("px-2 py-1.5 text-sm font-semibold",a.inset&&"pl-8",s.class)}),{default:l(()=>[i(a.$slots,"default")]),_:3},16,["class"]))}}),Z=c({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const s=o,n=m(()=>{const{class:t,...a}=s;return a});return(t,a)=>(d(),p(e(C),u(n.value,{class:e(f)("-mx-1 my-1 h-px bg-muted",s.class)}),null,16,["class"]))}}),Q=c({__name:"DropdownMenuShortcut",props:{class:{}},setup(o){const s=o;return(n,t)=>(d(),D("span",{class:z(e(f)("ml-auto text-xs tracking-widest opacity-60",s.class))},[i(n.$slots,"default")],2))}}),X=c({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=g(o);return(t,a)=>(d(),p(e(I),u({class:"outline-none"},e(n)),{default:l(()=>[i(t.$slots,"default")]),_:3},16))}}),V=c({__name:"ScrollBar",props:{orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(o){const s=o,n=m(()=>{const{class:t,...a}=s;return a});return(t,a)=>(d(),p(e(O),u(n.value,{class:e(f)("flex touch-none select-none transition-colors",t.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-px",t.orientation==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-px",s.class)}),{default:l(()=>[y(e(S),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}}),Y=c({__name:"ScrollArea",props:{type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{},class:{}},setup(o){const s=o,n=m(()=>{const{class:t,...a}=s;return a});return(t,a)=>(d(),p(e(A),u(n.value,{class:e(f)("relative overflow-hidden",s.class)}),{default:l(()=>[y(e(L),{class:"h-full w-full rounded-[inherit]"},{default:l(()=>[i(t.$slots,"default")]),_:3}),y(V),y(e(H))]),_:3},16,["class"]))}}),ee=()=>U("color-mode").value;export{E as L,F as M,R as S,T as U,G as _,Y as a,K as b,X as c,Q as d,N as e,Z as f,W as g,J as h,ee as u};