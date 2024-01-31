"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72399],{92175:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=e(85893),r=e(11151);const s={},o=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",title:"\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",description:"Ajax \u5206\u9875\u4e0e\u5176\u4ed6\u5206\u9875\u65b9\u5f0f\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5206\u9875\u94fe\u63a5\u4f1a\u4f7f\u7528 Javascript \u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u8be5 Javascript \u65b9\u6cd5\u662f\u5206\u9875\u65b9\u6cd5\uff0c\u53c2\u6570\u56fa\u5b9a\u4e3a\u8be5\u5206\u9875\u5bf9\u5e94\u7684\u5206\u9875 URL \u5730\u5740\u3002\u8be5 Javascript \u65b9\u6cd5\u901a\u8fc7 Ajax \u83b7\u53d6\u5230 URL \u8fde\u63a5\u5bf9\u5e94\u7684\u5206\u9875\u5185\u5bb9\u540e\u6e32\u67d3\u5230\u9875\u9762\u3002",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406/2-\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406/2-\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u9875\u7ba1\u7406-\u9759\u6001\u5206\u9875",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-\u9759\u6001\u5206\u9875"},next:{title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f"}},i={},d=[];function p(n){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Ajax"})," \u5206\u9875\u4e0e\u5176\u4ed6\u5206\u9875\u65b9\u5f0f\u7684\u533a\u522b\u5728\u4e8e\uff0c\u5206\u9875\u94fe\u63a5\u4f1a\u4f7f\u7528 ",(0,a.jsx)(t.code,{children:"Javascript"})," \u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u8be5 ",(0,a.jsx)(t.code,{children:"Javascript"})," \u65b9\u6cd5\u662f\u5206\u9875\u65b9\u6cd5\uff0c\u53c2\u6570\u56fa\u5b9a\u4e3a\u8be5\u5206\u9875\u5bf9\u5e94\u7684\u5206\u9875 ",(0,a.jsx)(t.code,{children:"URL"})," \u5730\u5740\u3002\u8be5 ",(0,a.jsx)(t.code,{children:"Javascript"})," \u65b9\u6cd5\u901a\u8fc7 ",(0,a.jsx)(t.code,{children:"Ajax"})," \u83b7\u53d6\u5230 ",(0,a.jsx)(t.code,{children:"URL"})," \u8fde\u63a5\u5bf9\u5e94\u7684\u5206\u9875\u5185\u5bb9\u540e\u6e32\u67d3\u5230\u9875\u9762\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u5b8c\u6574\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/page/ajax", func(r *ghttp.Request) {\n\t\tpage := r.GetPage(100, 10)\n\t\tpage.AjaxActionName = "DoAjax"\n\t\tbuffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n                <script src="https://cdn.bootcss.com/jquery/2.0.3/jquery.min.js"><\/script>\n                <script>\n                function DoAjax(url) {\n                     $.get(url, function(data,status) {\n                         $("body").html(data);\n                     });\n                }\n                <\/script>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n\t\t\t"page1": page.GetContent(1),\n\t\t\t"page2": page.GetContent(2),\n\t\t\t"page3": page.GetContent(3),\n\t\t\t"page4": page.GetContent(4),\n\t\t})\n\t\tr.Response.Write(buffer)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\u5728\u8be5\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,a.jsx)(t.code,{children:"DoAjax(url)"})," \u65b9\u6cd5\u7528\u6765\u6267\u884c\u5206\u9875\u64cd\u4f5c\uff0c\u4e3a\u6f14\u793a\u9700\u8981\u5b83\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u4f1a\u52a0\u8f7d\u6307\u5b9a\u5206\u9875\u9875\u9762\u7684\u5185\u5bb9\u5e76\u8986\u76d6\u6389\u5f53\u524d\u9875\u9762\u7684\u5206\u9875\u5185\u5bb9\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'function DoAjax(url) {\n     $.get(url, function(data,status) {\n         $("body").html(data);\n     });\n}\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u65e0\u6807\u7b7e"}),"\n"]})]})}function u(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>c,a:()=>o});var a=e(67294);const r={},s=a.createContext(r);function o(n){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),a.createElement(s.Provider,{value:t},n.children)}}}]);