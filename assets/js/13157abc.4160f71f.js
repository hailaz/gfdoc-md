"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[65482],{93323:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=e(85893),o=e(11151);const s={title:"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362"},c="Struct \u8f6c\u6362",i={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",title:"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",description:"Struct \u65b9\u6cd5\u7528\u4e8e\u5c06\u6574\u4e2a Json \u5305\u542b\u7684\u6570\u636e\u5185\u5bb9\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\u6216\u8005\u5bf9\u8c61\u3002",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson/2-\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson/2-\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u901a\u7528\u7f16\u89e3\u7801-Struct\u8f6c\u6362"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u5c42\u7ea7\u8bbf\u95ee"},next:{title:"\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u52a8\u6001\u521b\u5efa\u4fee\u6539"}},d={},u=[];function a(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"struct-\u8f6c\u6362",children:[(0,r.jsx)(t.code,{children:"Struct"})," \u8f6c\u6362"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Struct"})," \u65b9\u6cd5\u7528\u4e8e\u5c06\u6574\u4e2a ",(0,r.jsx)(t.code,{children:"Json"})," \u5305\u542b\u7684\u6570\u636e\u5185\u5bb9\u8f6c\u6362\u4e3a\u6307\u5b9a\u7684\u6570\u636e\u683c\u5f0f\u6216\u8005\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'data :=\n    `\n{\n    "count" : 1,\n    "array" : ["John", "Ming"]\n}`\nif j, err := gjson.DecodeToJson(data); err != nil {\n    panic(err)\n} else {\n    type Users struct {\n        Count int\n        Array []string\n    }\n    users := new(Users)\n    if err := j.Scan(users); err != nil {\n        panic(err)\n    }\n    fmt.Printf(`%+v`, users)\n}\n\n// Output:\n// &{Count:1 Array:[John Ming]}\n'})})]})}function l(n={}){const{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>i,a:()=>c});var r=e(67294);const o={},s=r.createContext(o);function c(n){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),r.createElement(s.Provider,{value:t},n.children)}}}]);