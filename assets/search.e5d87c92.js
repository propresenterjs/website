import{d as e,r as s,c as r,L as t,o as a,b as l,e as u,F as n,q as o,t as c,w as p,g as d,f as i,x as y,h as m}from"./vendor.21010a09.js";import{D as g,s as x}from"./index.77b4f912.js";const f={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},h={class:"prose prose-discord dark:prose-light mx-auto max-w-4xl lg:max-w-full"},w=u("h1",null,"Search Results",-1),b={class:"no-list"},v={class:"text-sm font-semibold uppercase"};var q=e({expose:[],setup(e){const q=y(),k=s(q.query.query),P=r((()=>x(k.value))),j=e=>{switch(e){case g.Class:return"bg-discord-blurple-500 text-gray-200";case g.Method:return"bg-yellow-500 text-gray-700";case g.Property:return"bg-green-400 text-gray-700";case g.Events:return"bg-yellow-900 text-gray-200";case g.Typedefs:return"bg-purple-800 text-gray-200"}},C=e=>{switch(e){case g.Class:return"C";case g.Method:return"M";case g.Property:return"P";case g.Events:return"E";case g.Typedefs:return"T"}};return t((()=>q.query.query),(()=>{k.value=q.query.query})),(e,s)=>{const r=m("router-link");return a(),l("div",f,[u("div",h,[w,u("div",null,[u("ul",b,[(a(!0),l(n,null,o(i(P),(e=>(a(),l("li",{key:e.computedName,class:"cursor-pointer grid grid-layout-search items-center !min-w-0 !min-h-0 break-words-legacy"},[u("span",v,[u("span",{class:["inline-flex items-center justify-center w-6 h-6 rounded-md",j(e.type)]},c(C(e.type)),3)]),u(r,{exact:"",to:e.getLinkPath()},{default:p((()=>[d(c(e.computedName),1)])),_:2},1032,["to"])])))),128))])])])])}}});export default q;