"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[72019],{21529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const c={title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b"},r=void 0,i={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b",title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b",description:"\u4f7f\u7528 GoFrame ORM \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u7531\u4e8e\u5b57\u6bb5\u503c\u662f\u4e00\u4e2a\u6cdb\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 Go \u53d8\u91cf\u7c7b\u578b\uff0c\u4f5c\u4e3a\u6cdb\u578b\u7684\u5177\u4f53\u503c\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/6-ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/7-ORM\u9ad8\u7ea7\u7279\u6027/6-ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8bc6\u522b"},sidebar:"tutorialSidebar",previous:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7a7a\u8dd1\u7279\u6027"},next:{title:"ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u9ad8\u7ea7\u7279\u6027/ORM\u9ad8\u7ea7\u7279\u6027-\u7c7b\u578b\u8f6c\u6362"}},d={},l=[];function a(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(t.code,{children:"GoFrame ORM"})," \u67e5\u8be2\u6570\u636e\u65f6\uff0c\u7531\u4e8e\u5b57\u6bb5\u503c\u662f\u4e00\u4e2a\u6cdb\u578b\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5230 ",(0,o.jsx)(t.code,{children:"Go"})," \u53d8\u91cf\u7c7b\u578b\uff0c\u4f5c\u4e3a\u6cdb\u578b\u7684\u5177\u4f53\u503c\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,o.jsx)(t.code,{children:"int(xx)"})," \u65f6\uff0c\u67e5\u8be2\u5230\u7684\u5b57\u6bb5\u503c\u7c7b\u578b\u5c06\u4f1a\u88ab\u8bc6\u522b\u4f1a ",(0,o.jsx)(t.code,{children:"int"})," \u7c7b\u578b"]}),"\n",(0,o.jsxs)(t.li,{children:["\u5f53\u5b57\u6bb5\u7c7b\u578b\u4e3a ",(0,o.jsx)(t.code,{children:"varchar(xxx)"}),"/ ",(0,o.jsx)(t.code,{children:"char(xxx)"}),"/ ",(0,o.jsx)(t.code,{children:"text"})," \u7b49\u7c7b\u578b\u65f6\u5c06\u4f1a\u88ab\u81ea\u52a8\u8bc6\u522b\u4e3a ",(0,o.jsx)(t.code,{children:"string"})," \u7c7b\u578b"]}),"\n",(0,o.jsx)(t.li,{children:"\u2026\u2026"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u4ee5\u4e0b\u4ee5 ",(0,o.jsx)(t.code,{children:"mysql"})," \u7c7b\u578b\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u6570\u636e\u5e93\u7c7b\u578b\u4e0e ",(0,o.jsx)(t.code,{children:"Go"})," \u53d8\u91cf\u7c7b\u578b\u7684\u81ea\u52a8\u8bc6\u522b\u6620\u5c04\u5173\u7cfb:"]}),"\n",(0,o.jsxs)(t.p,{children:["\u7248\u672c\u53ef\u80fd\u968f\u65f6\u8fed\u4ee3\u66f4\u65b0\uff0c\u5177\u4f53\u53ef\u67e5\u770b\u6e90\u7801 ",(0,o.jsx)(t.a,{href:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go",children:"https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go"})]}),"\n",(0,o.jsxs)(t.p,{children:["\u6570\u636e\u5e93\u7c7b\u578bGo\u53d8\u91cf\u7c7b\u578b",(0,o.jsx)(t.code,{children:"*char``string``*text``string``*binary``bytes``*blob``bytes``*int``int``*money``float64``bit``int``big_int``int64``float``float64``double``float64``decimal``float64``bool``bool``date``time.Time``datetime``time.Time``timestamp``time.Time``\u5176\u4ed6``string"})]}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u4e00\u7279\u6027\u5bf9\u4e8e\u9700\u8981\u5c06\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f16\u7801\uff0c\u5e76\u901a\u8fc7\u4f8b\u5982 ",(0,o.jsx)(t.code,{children:"JSON"})," \u65b9\u5f0f\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u6765\u8bf4\u5c06\u4f1a\u975e\u5e38\u53cb\u597d\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(67294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);