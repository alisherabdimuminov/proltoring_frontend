import{e as x,o as c,c as f,r as g,z as y,u as n,i as b,p as T,q as V,a,b as e,w as s,d as l,t as u,F as j,y as N,f as L}from"./BQArHuWU.js";import{_ as Q}from"./6CEVFvsQ.js";import{_ as D,a as E,b as A,c as G,d as J,e as K}from"./Ct7hk4q0.js";import{a as H}from"./QsnRFogE.js";import{u as O}from"./C1I6dpSE.js";import{U as P}from"./C-hKbBOJ.js";import{c as v}from"./X3DdcV6V.js";/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=v("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=v("FileQuestionIcon",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=v("SigmaIcon",[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]]);/**
 * @license lucide-vue-next v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=v("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]),ee=x({__name:"Card",props:{class:{}},setup(d){const o=d;return(r,i)=>(c(),f("div",{class:y(n(b)("rounded-xl border bg-card text-card-foreground shadow",o.class))},[g(r.$slots,"default")],2))}}),se=x({__name:"CardContent",props:{class:{}},setup(d){const o=d;return(r,i)=>(c(),f("div",{class:y(n(b)("p-6 pt-0",o.class))},[g(r.$slots,"default")],2))}}),te=x({__name:"CardHeader",props:{class:{}},setup(d){const o=d;return(r,i)=>(c(),f("div",{class:y(n(b)("flex flex-col gap-y-1.5 p-6",o.class))},[g(r.$slots,"default")],2))}}),ae=x({__name:"CardTitle",props:{class:{}},setup(d){const o=d;return(r,i)=>(c(),f("h3",{class:y(n(b)("font-semibold leading-none tracking-tight",o.class))},[g(r.$slots,"default")],2))}}),le={class:"p-5 md:p-10 flex flex-col gap-5"},ne={class:"flex gap-5 flex-col md:flex-row"},oe={class:"flex items-center justify-between"},re={class:"flex items-center justify-between"},de={class:"flex items-center justify-between"},ue={class:"flex items-center gap-2 justify-between"},ce={class:"flex items-center gap-2"},ie={class:"border rounded-md overflow-x-auto"},ye=x({__name:"index",setup(d){O({title:"Bosh sahifa"});const o=T([]),r=T([]),i=T([]),B=async()=>{let _=await $fetch(H("users"));o.value=_},M=async()=>{let _=await $fetch(H("tests"));r.value=_},F=async()=>{let _=await $fetch(H("questions"));i.value=_};return V(()=>{B(),M(),F()}),(_,t)=>{const w=ae,$=te,C=se,k=ee,I=Q,p=E,S=A,m=G,q=J,z=K,R=D;return c(),f("div",le,[a("div",ne,[e(k,{class:"w-full"},{default:s(()=>[e($,null,{default:s(()=>[e(w,null,{default:s(()=>t[0]||(t[0]=[l("Talabalar soni")])),_:1})]),_:1}),e(C,null,{default:s(()=>[a("div",oe,[a("p",null,u(n(o).length),1),e(n(P))])]),_:1})]),_:1}),e(k,{class:"w-full"},{default:s(()=>[e($,null,{default:s(()=>[e(w,null,{default:s(()=>t[1]||(t[1]=[l("Testlar soni")])),_:1})]),_:1}),e(C,null,{default:s(()=>[a("div",re,[a("p",null,u(n(r).length),1),e(n(Y))])]),_:1})]),_:1}),e(k,{class:"w-full"},{default:s(()=>[e($,null,{default:s(()=>[e(w,null,{default:s(()=>t[2]||(t[2]=[l("Savollar soni")])),_:1})]),_:1}),e(C,null,{default:s(()=>[a("div",de,[a("p",null,u(n(i).length),1),e(n(X))])]),_:1})]),_:1})]),a("div",ue,[a("div",ce,[e(n(Z),{size:20}),t[3]||(t[3]=a("p",{class:"text-2xl font-bold"},"Talabalar",-1))]),a("div",null,[e(I,{to:{name:"admin-users"},class:"text-blue-500 flex items-center gap-1 hover:underline"},{default:s(()=>[t[4]||(t[4]=a("span",null,"Barchasi",-1)),e(n(W),{size:16})]),_:1})])]),a("div",ie,[e(R,{class:"whitespace-nowrap"},{default:s(()=>[e(S,{class:"border-b"},{default:s(()=>[e(p,null,{default:s(()=>t[5]||(t[5]=[l("#")])),_:1}),e(p,null,{default:s(()=>t[6]||(t[6]=[l("Foydalanuvchi nomi")])),_:1}),e(p,null,{default:s(()=>t[7]||(t[7]=[l("Familiyasi")])),_:1}),e(p,null,{default:s(()=>t[8]||(t[8]=[l("Ismi")])),_:1}),e(p,null,{default:s(()=>t[9]||(t[9]=[l("Sharifi")])),_:1})]),_:1}),e(z,null,{default:s(()=>[(c(!0),f(j,null,N(n(o).slice(0,5),(h,U)=>(c(),L(q,null,{default:s(()=>[e(m,{class:"border-r"},{default:s(()=>[l(u(U+1),1)]),_:2},1024),e(m,null,{default:s(()=>[l(u(h.username),1)]),_:2},1024),e(m,null,{default:s(()=>[l(u(h.first_name),1)]),_:2},1024),e(m,null,{default:s(()=>[l(u(h.last_name),1)]),_:2},1024),e(m,null,{default:s(()=>[l(u(h.middle_name),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])])}}});export{ye as default};