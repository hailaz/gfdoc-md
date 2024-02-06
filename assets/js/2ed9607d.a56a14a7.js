"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[14050],{13767:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=r(85893),i=r(11151);const o={title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",sidebar_position:5},c=void 0,d={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",description:"\u76f8\u5173\u65b9\u6cd5\uff1a",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/5-\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/5-\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d"},next:{title:"\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de"}},t={},l=[{value:"\u5185\u7f6e\u53d8\u91cf",id:"\u5185\u7f6e\u53d8\u91cf",level:2},{value:"<code>Config</code>",id:"config",level:3},{value:"<code>Cookie</code>",id:"cookie",level:3},{value:"<code>Session</code>",id:"session",level:3},{value:"<code>Query</code>",id:"query",level:3},{value:"<code>Form</code>",id:"form",level:3},{value:"<code>Request</code>",id:"request",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"func (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) ParseTpl(tpl string, params ...gview.Params) (string, error)\nfunc (r *Response) ParseTplContent(content string, params ...gview.Params) (string, error)\nfunc (r *Response) ParseTplDefault(params ...gview.Params) (string, error)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Response"})," \u652f\u6301\u6a21\u677f\u6587\u4ef6/\u5185\u5bb9\u89e3\u6790\u8f93\u51fa\uff0c\u6216\u8005\u6a21\u677f\u6587\u4ef6/\u5185\u5bb9\u89e3\u6790\u8fd4\u56de\u3002\u4e0e\u76f4\u63a5\u4f7f\u7528\u6a21\u677f\u5bf9\u8c61\u89e3\u6790\u6a21\u677f\u529f\u80fd\u4e0d\u540c\u7684\u662f\uff0c ",(0,s.jsx)(n.code,{children:"Response"})," \u7684\u89e3\u6790\u652f\u6301\u4e00\u4e9b\u8bf7\u6c42\u76f8\u5173\u7684\u5185\u7f6e\u53d8\u91cf\u3002\u6a21\u677f\u89e3\u6790\u5305\u542b\u4ee5\u4e0b\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u8f93\u51fa\uff0c\u89e3\u6790\u5e76\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u5e76\u8f93\u51fa\u7ed9\u5b9a\u7684\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ParseTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u89e3\u6790\uff0c\u89e3\u6790\u6a21\u677f\u6587\u4ef6\u6216\u8005\u6a21\u677f\u5185\u5bb9\uff0c\u8fd4\u56de\u89e3\u6790\u540e\u7684\u5185\u5bb9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u89e3\u6790\u6a21\u677f\u65f6\u7ec4\u4ef6\u5e95\u5c42\u4f1a\u81ea\u52a8\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u83b7\u53d6\u5f53\u524d\u94fe\u8def\u7684 ",(0,s.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u5e76\u4f20\u9012\u7ed9\u6a21\u677f\u5f15\u64ce\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u4e0d\u7528\u663e\u793a\u7ed9\u6a21\u677f\u5f15\u64ce\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"Context"})," \u4e0a\u4e0b\u6587\u53d8\u91cf\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u7f6e\u53d8\u91cf",children:"\u5185\u7f6e\u53d8\u91cf"}),"\n",(0,s.jsx)(n.h3,{id:"config",children:(0,s.jsx)(n.code,{children:"Config"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee\u9ed8\u8ba4\u7684\u914d\u7f6e\u7ba1\u7406\uff08 ",(0,s.jsx)(n.code,{children:"config.toml"}),"\uff09\u5bf9\u8c61\u914d\u7f6e\u9879\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Config.\u914d\u7f6e\u9879}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cookie",children:(0,s.jsx)(n.code,{children:"Cookie"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,s.jsx)(n.code,{children:"Cookie"})," \u5bf9\u8c61\u53c2\u6570\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Cookie.\u952e\u540d}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"session",children:(0,s.jsx)(n.code,{children:"Session"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u7684 ",(0,s.jsx)(n.code,{children:"Session"})," \u5bf9\u8c61\u53c2\u6570\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Session.\u952e\u540d}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"query",children:(0,s.jsx)(n.code,{children:"Query"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee\u5f53\u524d ",(0,s.jsx)(n.code,{children:"Query String"})," \u4e2d\u7684\u8bf7\u6c42\u53c2\u6570\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Query.\u952e\u540d}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"form",children:(0,s.jsx)(n.code,{children:"Form"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u5f53\u524d\u8868\u5355\u8bf7\u6c42\u53c2\u6570\u503c\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Form.\u952e\u540d}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:(0,s.jsx)(n.code,{children:"Request"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u53c2\u6570\u503c\uff08\u4e0d\u533a\u5206\u53c2\u6570\u63d0\u4ea4\u65b9\u5f0f\uff09\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{{.Request.\u952e\u540d}}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.BindHandler("/", func(r *ghttp.Request){\n        r.Cookie.Set("theme", "default")\n        r.Session.Set("name", "john")\n        content :=`Config:{{.Config.redis.cache}}, Cookie:{{.Cookie.theme}}, Session:{{.Session.name}}, Query:{{.Query.name}}`\n        r.Response.WriteTplContent(content, nil)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,s.jsx)(n.code,{children:"config.toml"})," \u5185\u5bb9\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'# Redis\u6570\u636e\u5e93\u914d\u7f6e\n[redis]\n    disk  = "127.0.0.1:6379,0"\n    cache = "127.0.0.1:6379,1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/?name=john",children:"http://127.0.0.1:8199/?name=john"})," \uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Config:127.0.0.1:6379,1, Cookie:default, Session:john, Query:john\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);