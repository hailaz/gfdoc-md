"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[24503],{22259:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(85893),o=t(11151);const r={},i="JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",c={id:"\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ",title:"JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",description:"\u95ee\u9898\u63cf\u8ff0",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson/6-\u901a\u7528\u7f16\u89e3\u7801-FAQ.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-FAQ",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-\u7ec4\u4ef6\u5217\u8868/3-\u7f16\u7801\u89e3\u7801/0-\u901a\u7528\u7f16\u89e3\u7801-gjson/6-\u901a\u7528\u7f16\u89e3\u7801-FAQ.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528\u7f16\u89e3\u7801-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u901a\u7528\u7f16\u89e3\u7801-gjson/\u901a\u7528\u7f16\u89e3\u7801-\u65b9\u6cd5\u4ecb\u7ecd"},next:{title:"\u4e8c\u8fdb\u5236\u7f16\u89e3\u7801-gbinary",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/\u4e8c\u8fdb\u5236\u7f16\u89e3\u7801-gbinary"}},d={},a=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u76f8\u5173\u8fde\u63a5",id:"\u76f8\u5173\u8fde\u63a5",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"json\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898",children:"JSON\u4e2d\u7684\u5927\u6570\u5b57\u7cbe\u5ea6\u4e22\u5931\u95ee\u9898"}),"\n",(0,s.jsx)(e.h2,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tstr := `{"Id":1492404095703580672,"Name":"Jason"}`\n\tstrJson := gjson.New(str)\n\tg.Dump(strJson)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'"{\\"Id\\":1492404095703580700,\\"Name\\":\\"Jason\\"}"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/encoding/gjson"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tstr := `{"Id":1492404095703580672,"Name":"Jason"}`\n\tstrJson := gjson.NewWithOptions(str, gjson.Options{\n\t\tStrNumber: true,\n\t})\n\tg.Dump(strJson)\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u540e\u8f93\u51fa\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'"{\\"Id\\":1492404095703580672,\\"Name\\":\\"Jason\\"}"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u76f8\u5173\u8fde\u63a5",children:"\u76f8\u5173\u8fde\u63a5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/gogf/gf/issues/1603",children:"https://github.com/gogf/gf/issues/1603"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u65e0\u6807\u7b7e"}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);