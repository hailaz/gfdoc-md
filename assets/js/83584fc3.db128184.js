"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[85162],{1397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(85893),a=n(11151);const r={},o=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",title:"\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",description:"gpage \u652f\u6301\u81ea\u5b9a\u4e49 URL \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 {.page} \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406/3-\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/7-WEB\u670d\u52a1\u5f00\u53d1/10-\u5206\u9875\u7ba1\u7406/3-\u5206\u9875\u7ba1\u7406-URL\u6a21\u677f.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-Ajax\u5206\u9875"},next:{title:"\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875",permalink:"/docs/WEB\u670d\u52a1\u5f00\u53d1/\u5206\u9875\u7ba1\u7406/\u5206\u9875\u7ba1\u7406-\u81ea\u5b9a\u4e49\u5206\u9875"}},c={},d=[];function p(e){const t={code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"gpage"})," \u652f\u6301\u81ea\u5b9a\u4e49 ",(0,s.jsx)(t.code,{children:"URL"})," \u6a21\u677f\uff0c\u5728\u6a21\u677f\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"{.page}"})," \u5185\u7f6e\u53d8\u91cf\u66ff\u6362\u9875\u7801\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gview"\n)\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/page/template/{page}.html", func(r *ghttp.Request) {\n\t\tpage := r.GetPage(100, 10)\n\t\tpage.UrlTemplate = "/order/list/{.page}.html"\n\t\tbuffer, _ := gview.ParseContent(`\n        <html>\n            <head>\n                <style>\n                    a,span {padding:8px; font-size:16px;}\n                    div{margin:5px 5px 20px 5px}\n                </style>\n            </head>\n            <body>\n                <div>{{.page1}}</div>\n                <div>{{.page2}}</div>\n                <div>{{.page3}}</div>\n                <div>{{.page4}}</div>\n            </body>\n        </html>\n        `, g.Map{\n\t\t\t"page1": page.GetContent(1),\n\t\t\t"page2": page.GetContent(2),\n\t\t\t"page3": page.GetContent(3),\n\t\t\t"page4": page.GetContent(4),\n\t\t})\n\t\tr.Response.Write(buffer)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"UrlTemplate"})," \u5c5e\u6027\u8bbe\u7f6e ",(0,s.jsx)(t.code,{children:"URL"})," \u6a21\u677f\uff0c\u6267\u884c\u540e\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(45378).Z+"",width:"660",height:"230"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u65e0\u6807\u7b7e"}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},45378:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/QQ%E6%88%AA%E5%9B%BE20180806223701-ba3cd994a145bf97246f07323673b7d2.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);