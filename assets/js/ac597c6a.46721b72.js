"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[41596],{73425:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>E,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(85893),s=r(11151);const i={title:"\u6570\u636e\u8fd4\u56de"},c=void 0,o={id:"WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de",title:"\u6570\u636e\u8fd4\u56de",description:"HTTP Server \u7684\u6570\u636e\u8fd4\u56de\u901a\u8fc7 ghttp.Response \u5bf9\u8c61\u5b9e\u73b0\uff0c ghttp.Response \u5bf9\u8c61\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 http.ResponseWriter \u63a5\u53e3\u3002\u6570\u636e\u8f93\u51fa\u4f7f\u7528 Write* \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u4e14\u6570\u636e\u8f93\u51fa\u91c7\u7528\u4e86 Buffer \u673a\u5236\uff0c\u56e0\u6b64\u6570\u636e\u7684\u5904\u7406\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u4efb\u4f55\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 OutputBuffer \u65b9\u6cd5\u8f93\u51fa\u7f13\u51b2\u533a\u6570\u636e\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u6570\u636e\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/4-\u6570\u636e\u8fd4\u56de.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/4-\u6570\u636e\u8fd4\u56de/4-\u6570\u636e\u8fd4\u56de.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u6570\u636e\u8fd4\u56de"},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u8bf7\u6c42\u8f93\u5165/\u8bf7\u6c42\u8f93\u5165-\u6587\u4ef6\u4e0a\u4f20"},next:{title:"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236"}},E={},d=[];function l(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"HTTP Server"})," \u7684\u6570\u636e\u8fd4\u56de\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\uff0c ",(0,t.jsx)(n.code,{children:"ghttp.Response"})," \u5bf9\u8c61\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684 ",(0,t.jsx)(n.code,{children:"http.ResponseWriter"})," \u63a5\u53e3\u3002\u6570\u636e\u8f93\u51fa\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Write*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\uff0c\u5e76\u4e14\u6570\u636e\u8f93\u51fa\u91c7\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"Buffer"})," \u673a\u5236\uff0c\u56e0\u6b64\u6570\u636e\u7684\u5904\u7406\u6548\u7387\u6bd4\u8f83\u9ad8\u3002\u4efb\u4f55\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"OutputBuffer"})," \u65b9\u6cd5\u8f93\u51fa\u7f13\u51b2\u533a\u6570\u636e\u5230\u5ba2\u6237\u7aef\uff0c\u5e76\u6e05\u7a7a\u7f13\u51b2\u533a\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5e38\u7528\u65b9\u6cd5\uff1a\u66f4\u8be6\u7ec6\u7684\u63a5\u53e3\u5217\u8868\u8bf7\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#Response"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"func (r *Response) Write(content ...interface{})\nfunc (r *Response) WriteExit(content ...interface{})\nfunc (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteOver(content ...interface{})\nfunc (r *Response) WriteOverExit(content ...interface{})\nfunc (r *Response) WriteStatus(status int, content ...interface{})\nfunc (r *Response) WriteStatusExit(status int, content ...interface{})\nfunc (r *Response) WriteTpl(tpl string, params ...gview.Params) error\nfunc (r *Response) WriteTplContent(content string, params ...gview.Params) error\nfunc (r *Response) WriteTplDefault(params ...gview.Params) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\nfunc (r *Response) Writef(format string, params ...interface{})\nfunc (r *Response) WritefExit(format string, params ...interface{})\nfunc (r *Response) Writefln(format string, params ...interface{})\nfunc (r *Response) WriteflnExit(format string, params ...interface{})\nfunc (r *Response) Writeln(content ...interface{})\nfunc (r *Response) WritelnExit(content ...interface{})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7b80\u8981\u8bf4\u660e:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Write*"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\uff0c\u53c2\u6570\u53ef\u4e3a\u4efb\u610f\u7684\u6570\u636e\u683c\u5f0f\uff0c\u5185\u90e8\u901a\u8fc7\u65ad\u8a00\u5bf9\u53c2\u6570\u505a\u81ea\u52a8\u5206\u6790\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Write*Exit"})," \u65b9\u6cd5\u7528\u4e8e\u5f80\u8fd4\u56de\u7684\u6570\u636e\u7f13\u51b2\u533a\u8ffd\u52a0\u5199\u5165\u6570\u636e\u540e\u9000\u51fa\u5f53\u524d\u6267\u884c\u7684 ",(0,t.jsx)(n.code,{children:"HTTP Handler"})," \u65b9\u6cd5\uff0c\u53ef\u7528\u4e8e\u66ff\u4ee3 ",(0,t.jsx)(n.code,{children:"return"})," \u8fd4\u56de\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WriteOver*"})," \u65b9\u6cd5\u7528\u4e8e\u8986\u76d6\u7f13\u51b2\u533a\u5199\u5165\uff0c\u539f\u6709\u7f13\u51b2\u533a\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u4e3a\u65b0\u5199\u5165\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WriteStatus*"})," \u65b9\u6cd5\u7528\u4e8e\u8bbe\u7f6e\u5f53\u524d\u8bf7\u6c42\u6267\u884c\u8fd4\u56de\u7684\u72b6\u6001\u7801\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WriteJson*"}),"/ ",(0,t.jsx)(n.code,{children:"WriteXml"})," \u65b9\u6cd5\u7528\u4e8e\u7279\u5b9a\u6570\u636e\u683c\u5f0f\u7684\u8f93\u51fa\uff0c\u8fd9\u662f\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u7b80\u4fbf\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WriteTpl*"})," \u65b9\u6cd5\u7528\u4e8e\u6a21\u677f\u8f93\u51fa\uff0c\u89e3\u6790\u5e76\u8f93\u51fa\u6a21\u677f\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u89e3\u6790\u5e76\u8f93\u51fa\u7ed9\u5b9a\u7684\u6a21\u677f\u5185\u5bb9\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5176\u4ed6\u65b9\u6cd5\u8be6\u89c1\u63a5\u53e3\u6587\u6863\uff1b"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u9700\u8981\u63d0\u4e00\u4e0b\uff0c ",(0,t.jsx)(n.code,{children:"Header"})," \u7684\u64cd\u4f5c\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u5e93\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Response.Header().Set("Content-Type", "text/plain; charset=utf-8")\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7ee7\u7eed\u4e86\u89e3\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-%E7%BC%93%E5%86%B2%E6%8E%A7%E5%88%B6",children:"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-JSON/XML",children:"\u6570\u636e\u8fd4\u56de-JSON/XML"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-Redirect",children:"\u6570\u636e\u8fd4\u56de-Redirect"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-Exit%E6%8E%A7%E5%88%B6",children:"\u6570\u636e\u8fd4\u56de-Exit\u63a7\u5236"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD",children:"\u6570\u636e\u8fd4\u56de-\u6587\u4ef6\u4e0b\u8f7d"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-%E6%A8%A1%E6%9D%BF%E8%A7%A3%E6%9E%90",children:"\u6570\u636e\u8fd4\u56de-\u6a21\u677f\u89e3\u6790"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E/%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E-Stream%E8%BF%94%E5%9B%9E",children:"\u6570\u636e\u8fd4\u56de-Stream\u8fd4\u56de"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var t=r(67294);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);