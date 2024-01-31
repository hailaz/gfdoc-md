"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[9628],{20870:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(85893),o=t(11151);const s={},i="\u57fa\u672c\u4ecb\u7ecd",c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",title:"\u57fa\u672c\u4ecb\u7ecd",description:"http \u5ba2\u6237\u7aef\u652f\u6301\u5bf9HTTP\u8bf7\u6c42\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\u539f\u59cb\u4fe1\u606f\u83b7\u53d6\u4e0e\u6253\u5370\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/6-HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/6-HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport"},next:{title:"\u4ee3\u7406 Proxy \u8bbe\u7f6e",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"}},a={},l=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"http"})," \u5ba2\u6237\u7aef\u652f\u6301\u5bf9HTTP\u8bf7\u6c42\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\u539f\u59cb\u4fe1\u606f\u83b7\u53d6\u4e0e\u6253\u5370\uff0c\u65b9\u4fbf\u8c03\u8bd5\uff0c\u76f8\u5173\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"func (r *Response) Raw() string\nfunc (r *Response) RawDump()\nfunc (r *Response) RawRequest() string\nfunc (r *Response) RawResponse() string\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u6240\u6709\u7684\u65b9\u6cd5\u5747\u7ed1\u5b9a\u5728 ",(0,r.jsx)(e.code,{children:"Response"})," \u5bf9\u8c61\u4e0a\uff0c\u4e5f\u5c31\u662f\u8bf4\u5fc5\u987b\u8981\u8bf7\u6c42\u7ed3\u675f\u540e\u624d\u80fd\u6253\u5370\u3002"]}),"\n",(0,r.jsx)(e.h1,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tresponse, err := g.Client().Post(\n\t\tgctx.New(),\n\t\t"https://goframe.org",\n\t\tg.Map{\n\t\t\t"name": "john",\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tresponse.RawDump()\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"+---------------------------------------------+\n|                   REQUEST                   |\n+---------------------------------------------+\nPOST / HTTP/1.1\nHost: goframe.org\nUser-Agent: GoFrameHTTPClient v2.0.0-beta\nContent-Length: 9\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nname=john\n\n+---------------------------------------------+\n|                   RESPONSE                  |\n+---------------------------------------------+\nHTTP/1.1 405 Method Not Allowed\nConnection: close\nTransfer-Encoding: chunked\nAllow: GET\nCache-Control: no-store\nContent-Security-Policy: frame-ancestors 'self'\nContent-Type: text/html;charset=UTF-8\nDate: Fri, 03 Dec 2021 09:43:29 GMT\nExpires: Thu, 01 Jan 1970 00:00:00 GMT\nServer: nginx\n...\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);