"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[74324],{97606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=n(85893),c=n(11151);const i={title:"\u6570\u636e\u8fd4\u56de-Redirect"},d="RedirectTo",o={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect",title:"\u6570\u636e\u8fd4\u56de-Redirect",description:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 RedirectTo/RedirectBack \u6765\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u8be5\u529f\u80fd\u901a\u8fc7 Location Header \u5b9e\u73b0\u3002\u76f8\u5173\u65b9\u6cd5\uff1a",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/2-\u6570\u636e\u8fd4\u56de-Redirect.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Redirect",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/2-\u6570\u636e\u8fd4\u56de-Redirect.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-Redirect"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-JSON/XML",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSON/XML"},next:{title:"\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236"}},s={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"RedirectTo/RedirectBack"})," \u6765\u5b9e\u73b0\u9875\u9762\u4e4b\u95f4\u7684\u8df3\u8f6c\uff0c\u8be5\u529f\u80fd\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"Location Header"})," \u5b9e\u73b0\u3002\u76f8\u5173\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"func (r *Response) RedirectBack(code ...int)\nfunc (r *Response) RedirectTo(location string, code ...int)\n"})}),"\n",(0,r.jsx)(t.h1,{id:"redirectto",children:(0,r.jsx)(t.code,{children:"RedirectTo"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ReditectTo"})," \u7528\u4ee5\u5f15\u5bfc\u5ba2\u6237\u7aef\u8df3\u8f6c\u5230\u6307\u5b9a\u7684\u5730\u5740\uff0c\u5730\u5740\u53ef\u4ee5\u662f\u4e00\u4e2a\u672c\u5730\u670d\u52a1\u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 ",(0,r.jsx)(t.code,{children:"HTTP"})," \u5730\u5740\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Response.RedirectTo("/login")\n\t})\n\ts.BindHandler("/login", func(r *ghttp.Request) {\n\t\tr.Response.Writeln("Login First")\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\xa0\u968f\u540e\u53ef\u4ee5 \u53d1\u73b0\u6d4f\u89c8\u5668\u7acb\u5373\u8df3\u8f6c\u5230\u4e86 ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/login",children:"http://127.0.0.1:8199/login"})," \u9875\u9762\u3002"]}),"\n",(0,r.jsx)(t.h1,{id:"redirectback",children:(0,r.jsx)(t.code,{children:"RedirectBack"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RedirectBack"})," \u7528\u4ee5\u5f15\u5bfc\u5ba2\u6237\u7aef\u8df3\u8f6c\u5230\u4e0a\u4e00\u9875\u9762\u5730\u5740\uff0c\u4e0a\u4e00\u9875\u9762\u5730\u5740\u662f\u901a\u8fc7 ",(0,r.jsx)(t.code,{children:"Referer Header"})," \u83b7\u53d6\u7684\uff0c\u4e00\u822c\u6765\u8bf4\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u90fd\u4f1a\u4f20\u9012\u8fd9\u4e00Header\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/page", func(r *ghttp.Request) {\n\t\tr.Response.Writeln(`<a href="/back">back</a>`)\n\t})\n\ts.BindHandler("/back", func(r *ghttp.Request) {\n\t\tr.Response.RedirectBack()\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8fd0\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.jsx)(t.a,{href:"http://127.0.0.1:8199/page",children:"http://127.0.0.1:8199/page"})," \u70b9\u51fb\u9875\u9762\u7684 ",(0,r.jsx)(t.code,{children:"back"})," \u8fde\u63a5 \uff0c\u53ef\u4ee5\u53d1\u73b0\u70b9\u51fb\u540e\u9875\u9762\u968f\u540e\u53c8\u8df3\u8f6c\u4e86\u56de\u6765\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var r=n(67294);const c={},i=r.createContext(c);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);