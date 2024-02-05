"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[10905],{66826:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(85893),s=r(11151);const o={title:"\u8bf7\u6c42\u8f93\u5165-JSON/XML"},d=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-JSON/XML",title:"\u8bf7\u6c42\u8f93\u5165-JSON/XML",description:"\u4ece GoFrame v1.11 \u7248\u672c\u5f00\u59cb\uff0c Request \u5bf9\u8c61\u63d0\u4f9b\u4e86\u5bf9\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684 JSON/XML \u6570\u636e\u683c\u5f0f\u7684\u539f\u751f\u652f\u6301\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u66f4\u4fbf\u6377\u7684\u6570\u636e\u83b7\u53d6\u7279\u6027\uff0c\u4ee5\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/3-\u8bf7\u6c42\u8f93\u5165-JSON/XML.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/3-\u8bf7\u6c42\u8f93\u5165-JSON",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-JSON/XML",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-JSON/XML",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/3-\u8bf7\u6c42\u8f93\u5165/3-\u8bf7\u6c42\u8f93\u5165-JSON/XML.md",tags:[],version:"current",frontMatter:{title:"\u8bf7\u6c42\u8f93\u5165-JSON/XML"},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u8f93\u5165-\u8bf7\u6c42\u6821\u9a8c",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u8bf7\u6c42\u6821\u9a8c"},next:{title:"\u8bf7\u6c42\u8f93\u5165-JSON/XML",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-JSONXML"}},i={},a=[{value:"\u793a\u4f8b1\uff0c\u7b80\u5355\u793a\u4f8b",id:"\u793a\u4f8b1\u7b80\u5355\u793a\u4f8b",level:2},{value:"\u793a\u4f8b2\uff0c\u5bf9\u8c61\u8f6c\u6362\u53ca\u6821\u9a8c",id:"\u793a\u4f8b2\u5bf9\u8c61\u8f6c\u6362\u53ca\u6821\u9a8c",level:2}];function l(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u4ece ",(0,t.jsx)(e.code,{children:"GoFrame v1.11"})," \u7248\u672c\u5f00\u59cb\uff0c ",(0,t.jsx)(e.code,{children:"Request"})," \u5bf9\u8c61\u63d0\u4f9b\u4e86\u5bf9\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684 ",(0,t.jsx)(e.code,{children:"JSON/XML"})," \u6570\u636e\u683c\u5f0f\u7684\u539f\u751f\u652f\u6301\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u66f4\u4fbf\u6377\u7684\u6570\u636e\u83b7\u53d6\u7279\u6027\uff0c\u4ee5\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b1\u7b80\u5355\u793a\u4f8b",children:"\u793a\u4f8b1\uff0c\u7b80\u5355\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Response.Writef("name: %v, pass: %v", r.Get("name"), r.Get("pass"))\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u63d0\u4ea4\u6570\u636e\u6765\u6d4b\u8bd5\u4e00\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Query"})," \u6570\u636e\u683c\u5f0f"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl "http://127.0.0.1:8199/?name=john&pass=123"\nname: john, pass: 123\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"Form"})," \u8868\u5355\u63d0\u4ea4"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl -d "name=john&pass=123" "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl -d \'{"name":"john","pass":"123"}\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><name>john</name><pass>123</pass></doc>\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n\n\n$ curl -d \'<doc><name>john</name><pass>123</pass></doc>\' "http://127.0.0.1:8199/"\nname: john, pass: 123\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b2\u5bf9\u8c61\u8f6c\u6362\u53ca\u6821\u9a8c",children:"\u793a\u4f8b2\uff0c\u5bf9\u8c61\u8f6c\u6362\u53ca\u6821\u9a8c"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/util/gvalid"\n)\n\ntype RegisterReq struct {\n\tName  string `p:"username"  v:"required|length:6,30#\u8bf7\u8f93\u5165\u8d26\u53f7|\u8d26\u53f7\u957f\u5ea6\u4e3a:{min}\u5230:{max}\u4f4d"`\n\tPass  string `p:"password1" v:"required|length:6,30#\u8bf7\u8f93\u5165\u5bc6\u7801|\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f"`\n\tPass2 string `p:"password2" v:"required|length:6,30|same:password1#\u8bf7\u786e\u8ba4\u5bc6\u7801|\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f|\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"`\n}\n\ntype RegisterRes struct {\n\tCode  int         `json:"code"`\n\tError string      `json:"error"`\n\tData  interface{} `json:"data"`\n}\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/register", func(r *ghttp.Request) {\n\t\tvar req *RegisterReq\n\t\tif err := r.Parse(&req); err != nil {\n\t\t\t// Validation error.\n\t\t\tif v, ok := err.(gvalid.Error); ok {\n\t\t\t\tr.Response.WriteJsonExit(RegisterRes{\n\t\t\t\t\tCode:  1,\n\t\t\t\t\tError: v.FirstString(),\n\t\t\t\t})\n\t\t\t}\n\t\t\t// Other error.\n\t\t\tr.Response.WriteJsonExit(RegisterRes{\n\t\t\t\tCode:  1,\n\t\t\t\tError: err.Error(),\n\t\t\t})\n\t\t}\n\t\t// ...\n\t\tr.Response.WriteJsonExit(RegisterRes{\n\t\t\tData: req,\n\t\t})\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"curl"})," \u5de5\u5177\u63d0\u4ea4\u6570\u636e\u6765\u6d4b\u8bd5\u4e00\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl -d \'{"username":"johngcn","password1":"123456","password2":"123456"}\' "http://127.0.0.1:8199/register"\n{"code":0,"error":"","data":{"Name":"johngcn","Pass":"123456","Pass2":"123456"}}\n\n\n$ curl -d \'{"username":"johngcn","password1":"123456","password2":"1234567"}\' "http://127.0.0.1:8199/register"\n{"code":1,"error":"\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4","data":null}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u63d0\u4ea4\u7684 ",(0,t.jsx)(e.code,{children:"JSON"})," \u5185\u5bb9\u4e5f\u88ab ",(0,t.jsx)(e.code,{children:"Parse"})," \u65b9\u6cd5\u667a\u80fd\u5730\u8f6c\u6362\u4e3a\u4e86\u7ed3\u6784\u4f53\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><username>johngcn</username><password1>123456</password1><password2>123456</password2></doc>\' "http://127.0.0.1:8199/register"\n{"code":0,"error":"","data":{"Name":"johngcn","Pass":"123456","Pass2":"123456"}}\n\n\n$ curl -d \'<?xml version="1.0" encoding="UTF-8"?><doc><username>johngcn</username><password1>123456</password1><password2>1234567</password2></doc>\' "http://127.0.0.1:8199/register"\n{"code":1,"error":"\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4","data":null}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u63d0\u4ea4\u7684 ",(0,t.jsx)(e.code,{children:"XML"})," \u5185\u5bb9\u4e5f\u88ab ",(0,t.jsx)(e.code,{children:"Parse"})," \u65b9\u6cd5\u667a\u80fd\u5730\u8f6c\u6362\u4e3a\u4e86\u7ed3\u6784\u4f53\u5bf9\u8c61\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>d});var t=r(67294);const s={},o=t.createContext(s);function d(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);