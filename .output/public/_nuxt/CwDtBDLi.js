import{e as d,D as _,o as c,f as g,w as r,r as i,n as h,g as B,u as e,Y as $,h as x,b as u,Z as v,$ as C,m as y,i as f,j as D,a0 as k,a as z,a1 as P,c as w,z as b,I as O,a2 as F}from"./BQArHuWU.js";const A=d({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:t}){const n=_(a,t);return(l,m)=>(c(),g(e($),h(B(e(n))),{default:r(()=>[i(l.$slots,"default")]),_:3},16))}}),E=d({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(a,{emit:t}){const s=a,o=t,n=x(()=>{const{class:m,...p}=s;return p}),l=_(n,o);return(m,p)=>(c(),g(e(P),null,{default:r(()=>[u(e(v),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),u(e(C),y(e(l),{class:e(f)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s.class)}),{default:r(()=>[i(m.$slots,"default"),u(e(D),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:r(()=>[u(e(k),{class:"w-4 h-4"}),p[0]||(p[0]=z("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),I=d({__name:"DialogFooter",props:{class:{}},setup(a){const t=a;return(s,o)=>(c(),w("div",{class:b(e(f)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",t.class))},[i(s.$slots,"default")],2))}}),N=d({__name:"DialogHeader",props:{class:{}},setup(a){const t=a;return(s,o)=>(c(),w("div",{class:b(e(f)("flex flex-col gap-y-1.5 text-center sm:text-left",t.class))},[i(s.$slots,"default")],2))}}),V=d({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=x(()=>{const{class:n,...l}=t;return l}),o=O(s);return(n,l)=>(c(),g(e(F),y(e(o),{class:e(f)("text-lg font-semibold leading-none tracking-tight",t.class)}),{default:r(()=>[i(n.$slots,"default")]),_:3},16,["class"]))}});export{A as _,V as a,N as b,I as c,E as d};
