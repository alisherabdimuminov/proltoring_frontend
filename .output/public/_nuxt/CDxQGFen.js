import{_ as K}from"./CVedjtX_.js";import{_ as W,a as Z,b as h,c as ll,d as el}from"./CwDtBDLi.js";import{_ as sl}from"./UWPiqfXs.js";import{_ as tl}from"./DgCD7uKa.js";import{_ as nl}from"./BsgV55nK.js";import{_ as al,a as ol,b as ul,c as dl,d as il,e as rl}from"./Ct7hk4q0.js";import{_ as _l}from"./qOuYr8qr.js";import{_ as ml,a as fl}from"./Ckv8ZdmD.js";import{a as pl,b as cl,c as vl,d as wl,_ as bl}from"./KNp__-6a.js";import{a as g}from"./QsnRFogE.js";import{e as Vl,C as $l,p,q as gl,c as y,a,b as e,w as s,o as m,d as n,u,F as x,y as q,f as B,t as d,v as yl}from"./BQArHuWU.js";import{u as Tl}from"./C1I6dpSE.js";import"./DEvUGmS0.js";import"./DmQST2my.js";const Sl={class:"p-5 md:p-10 flex flex-col gap-5"},xl={class:"flex items-center justify-between"},ql={class:"border rounded-md"},Bl={class:"flex items-center justify-between"},kl={class:"flex gap-3"},Cl={class:"flex items-center"},Ul={class:"flex items-center"},Dl={class:"flex items-center"},Nl={class:"flex items-center"},jl={class:"border rounded-md overflow-auto"},zl={class:"w-32 truncate"},Al={class:"w-32 truncate"},Hl={class:"w-32 truncate"},Ol={class:"w-32 truncate"},Ql={class:"w-32 truncate"},le=Vl({__name:"questions",setup(Rl){Tl({title:"Savollar"});const{toast:c}=$l(),T=p(),v=p({id:"0",name:"test"}),w=p("a"),k=p(),o=p({question:"",answer_a:"",answer_b:"",answer_c:"",answer_d:"",correct_answer:"",score:2,set:v.value});gl(()=>{C(),U()});const C=async()=>{let _=await $fetch(g("sets"));T.value=_},G=async()=>{(await $fetch(g("sets/add"),{method:"POST",body:JSON.stringify({name:v.value.name})})).status==="success"?(c({title:"Ajoyib",description:"To'plam qo'shildi"}),C()):c({title:"Xatolik",description:"Nimadur xato ketdi"})},U=async()=>{let _=await $fetch(g("questions"));k.value=_},J=async()=>{let _=await $fetch(g("questions/add"),{method:"POST",body:JSON.stringify({question:o.value.question,answer_a:o.value.answer_a,answer_b:o.value.answer_b,answer_c:o.value.answer_c,answer_d:o.value.answer_d,score:o.value.score,set:o.value.set.id,correct_answer:w.value})});_.status==="success"?(c({title:"Ajoyib",description:"Savol qo'shildi"}),U()):c({title:"Xatolik",description:"Barcha maydonni to'ldiring"}),console.log(_)};return(_,l)=>{const b=K,D=sl,N=Z,j=h,V=tl,z=nl,A=ll,H=el,O=W,i=ol,Q=ul,r=dl,R=il,F=rl,I=al,f=_l,$=ml,L=fl,P=pl,X=cl,Y=vl,E=wl,M=bl;return m(),y("div",Sl,[a("div",xl,[l[13]||(l[13]=a("p",null,"To'plamlar",-1)),e(O,null,{default:s(()=>[e(D,null,{default:s(()=>[e(b,null,{default:s(()=>l[9]||(l[9]=[n("To'plam qo'shish")])),_:1})]),_:1}),e(H,null,{default:s(()=>[e(j,null,{default:s(()=>[e(N,null,{default:s(()=>l[10]||(l[10]=[n("Yangi to'plam qo'shish")])),_:1})]),_:1}),a("div",null,[e(V,null,{default:s(()=>l[11]||(l[11]=[n("Nomi")])),_:1}),e(z,{modelValue:u(v).name,"onUpdate:modelValue":l[0]||(l[0]=t=>u(v).name=t)},null,8,["modelValue"])]),e(A,null,{default:s(()=>[e(b,{onClick:G},{default:s(()=>l[12]||(l[12]=[n("Qo'shish")])),_:1})]),_:1})]),_:1})]),_:1})]),a("div",ql,[e(I,null,{default:s(()=>[e(Q,{class:"border-b"},{default:s(()=>[e(i,{class:"w-4"},{default:s(()=>l[14]||(l[14]=[n("#")])),_:1}),e(i,null,{default:s(()=>l[15]||(l[15]=[n("Name")])),_:1})]),_:1}),e(F,null,{default:s(()=>[(m(!0),y(x,null,q(u(T),(t,S)=>(m(),B(R,null,{default:s(()=>[e(r,{class:"border-r"},{default:s(()=>[n(d(S+1),1)]),_:2},1024),e(r,null,{default:s(()=>[n(d(t.name),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),a("div",Bl,[l[26]||(l[26]=a("p",null,"Savollar",-1)),e(O,null,{default:s(()=>[e(D,null,{default:s(()=>[e(b,null,{default:s(()=>l[16]||(l[16]=[n("Savol qo'shish")])),_:1})]),_:1}),e(H,null,{default:s(()=>[e(j,null,{default:s(()=>[e(N,null,{default:s(()=>l[17]||(l[17]=[n("Yangi savol qo'shish")])),_:1})]),_:1}),a("div",null,[e(V,null,{default:s(()=>l[18]||(l[18]=[n("Savol")])),_:1}),e(f,{class:"resize-none",modelValue:u(o).question,"onUpdate:modelValue":l[1]||(l[1]=t=>u(o).question=t)},null,8,["modelValue"]),a("div",kl,[e(L,{modelValue:u(w),"onUpdate:modelValue":l[6]||(l[6]=t=>yl(w)?w.value=t:null),"default-value":"a",class:"grid grid-cols-2 w-full"},{default:s(()=>[a("div",null,[a("div",Cl,[e($,{id:"a",value:"a",class:"peer"}),l[19]||(l[19]=a("p",null,"A",-1))]),e(f,{class:"resize-none",modelValue:u(o).answer_a,"onUpdate:modelValue":l[2]||(l[2]=t=>u(o).answer_a=t)},null,8,["modelValue"])]),a("div",null,[a("div",Ul,[e($,{id:"b",value:"b",class:"peer"}),l[20]||(l[20]=a("p",null,"B",-1))]),e(f,{class:"resize-none",modelValue:u(o).answer_b,"onUpdate:modelValue":l[3]||(l[3]=t=>u(o).answer_b=t)},null,8,["modelValue"])]),a("div",null,[a("div",Dl,[e($,{id:"c",value:"c",class:"peer"}),l[21]||(l[21]=a("p",null,"C",-1))]),e(f,{class:"resize-none",modelValue:u(o).answer_c,"onUpdate:modelValue":l[4]||(l[4]=t=>u(o).answer_c=t)},null,8,["modelValue"])]),a("div",null,[a("div",Nl,[e($,{id:"d",value:"d",class:"peer"}),l[22]||(l[22]=a("p",null,"D",-1))]),e(f,{class:"resize-none",modelValue:u(o).answer_d,"onUpdate:modelValue":l[5]||(l[5]=t=>u(o).answer_d=t)},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),e(V,null,{default:s(()=>l[23]||(l[23]=[n("To'plam")])),_:1}),e(M,{modelValue:u(o).set.id,"onUpdate:modelValue":l[7]||(l[7]=t=>u(o).set.id=t)},{default:s(()=>[e(X,null,{default:s(()=>[e(P)]),_:1}),e(E,null,{default:s(()=>[(m(!0),y(x,null,q(u(T),t=>(m(),B(Y,{value:t.id},{default:s(()=>[n(d(t.name),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1},8,["modelValue"]),e(V,null,{default:s(()=>l[24]||(l[24]=[n("Ball")])),_:1}),e(z,{type:"number",modelValue:u(o).score,"onUpdate:modelValue":l[8]||(l[8]=t=>u(o).score=t)},null,8,["modelValue"])]),e(A,null,{default:s(()=>[e(b,{onClick:J},{default:s(()=>l[25]||(l[25]=[n("Qo'shish")])),_:1})]),_:1})]),_:1})]),_:1})]),a("div",jl,[e(I,{class:"whitespace-nowrap"},{default:s(()=>[e(Q,{class:"border-b"},{default:s(()=>[e(i,null,{default:s(()=>l[27]||(l[27]=[n("#")])),_:1}),e(i,null,{default:s(()=>l[28]||(l[28]=[n("Savol")])),_:1}),e(i,null,{default:s(()=>l[29]||(l[29]=[n("a varyant")])),_:1}),e(i,null,{default:s(()=>l[30]||(l[30]=[n("b varyant")])),_:1}),e(i,null,{default:s(()=>l[31]||(l[31]=[n("c varyant")])),_:1}),e(i,null,{default:s(()=>l[32]||(l[32]=[n("d varyant")])),_:1}),e(i,null,{default:s(()=>l[33]||(l[33]=[n("To'g'ri javob")])),_:1}),e(i,null,{default:s(()=>l[34]||(l[34]=[n("Ball")])),_:1}),e(i,null,{default:s(()=>l[35]||(l[35]=[n("To'plam")])),_:1})]),_:1}),e(F,null,{default:s(()=>[(m(!0),y(x,null,q(u(k),(t,S)=>(m(),B(R,null,{default:s(()=>[e(r,{class:"border-r"},{default:s(()=>[n(d(S+1),1)]),_:2},1024),e(r,null,{default:s(()=>[a("p",zl,d(t.question),1)]),_:2},1024),e(r,null,{default:s(()=>[a("p",Al,d(t.answer_a),1)]),_:2},1024),e(r,null,{default:s(()=>[a("p",Hl,d(t.answer_b),1)]),_:2},1024),e(r,null,{default:s(()=>[a("p",Ol,d(t.answer_c),1)]),_:2},1024),e(r,null,{default:s(()=>[a("p",Ql,d(t.answer_d),1)]),_:2},1024),e(r,null,{default:s(()=>[n(d(t.correct_answer),1)]),_:2},1024),e(r,null,{default:s(()=>[n(d(t.score),1)]),_:2},1024),e(r,null,{default:s(()=>[n(d(t.set.name),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})])])}}});export{le as default};