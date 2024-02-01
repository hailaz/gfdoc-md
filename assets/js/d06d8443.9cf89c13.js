"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[94758],{45544:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>O,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(85893),d=n(11151);const o={title:"ORM\u67e5\u8be2-Group/Order/Having"},s="Group/Order \u5206\u7ec4\u4e0e\u6392\u5e8f",c={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Group/Order/Having",title:"ORM\u67e5\u8be2-Group/Order/Having",description:"Group \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u5206\u7ec4\uff0c Order \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u6392\u5e8f\u3002\u4f7f\u7528\u793a\u4f8b\uff1a",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/6-ORM\u67e5\u8be2-Group/Order/Having.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/6-ORM\u67e5\u8be2-Group/Order",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Group/Order/Having",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Group/Order/Having",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/6-ORM\u67e5\u8be2-Group/Order/Having.md",tags:[],version:"current",frontMatter:{title:"ORM\u67e5\u8be2-Group/Order/Having"},sidebar:"tutorialSidebar",previous:{title:"ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-LeftJoin/RightJoin/InnerJoin"},next:{title:"ORM\u67e5\u8be2-Union/UnionAll",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Union/UnionAll"}},i={},l=[];function a(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"grouporder-\u5206\u7ec4\u4e0e\u6392\u5e8f",children:[(0,t.jsx)(r.code,{children:"Group/Order"})," \u5206\u7ec4\u4e0e\u6392\u5e8f"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Group"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u5206\u7ec4\uff0c ",(0,t.jsx)(r.code,{children:"Order"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u6392\u5e8f\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age\ng.Model("user").Fields("COUNT(*) total,age").Group("age").All()\n\n// SELECT * FROM `student` ORDER BY class asc,course asc,score desc\ng.Model("student").Order("class asc,course asc,score desc").All()\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u540c\u65f6\uff0c ",(0,t.jsx)(r.code,{children:"goframe"})," \u7684 ",(0,t.jsx)(r.code,{children:"ORM"})," \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u6392\u5e8f\u65b9\u6cd5\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"// \u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u9012\u589e\u6392\u5e8f\nfunc (m *Model) OrderAsc(column string) *Model\n// \u6309\u7167\u6307\u5b9a\u5b57\u6bb5\u9012\u51cf\u6392\u5e8f\nfunc (m *Model) OrderDesc(column string) *Model\n// \u968f\u673a\u6392\u5e8f\nfunc (m *Model) OrderRandom() *Model\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'// SELECT `id`,`title` FROM `article` ORDER BY `created_at` ASC\ng.Model("article").Fields("id,title").OrderAsc("created_at").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY `views` DESC\ng.Model("article").Fields("id,title").OrderDesc("views").All()\n\n// SELECT `id`,`title` FROM `article` ORDER BY RAND()\ng.Model("article").Fields("id,title").OrderRandom().All()\n'})}),"\n",(0,t.jsxs)(r.h1,{id:"having-\u6761\u4ef6\u8fc7\u6ee4",children:[(0,t.jsx)(r.code,{children:"Having"})," \u6761\u4ef6\u8fc7\u6ee4"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Having"})," \u65b9\u6cd5\u7528\u4e8e\u67e5\u8be2\u7ed3\u679c\u7684\u6761\u4ef6\u8fc7\u6ee4\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'// SELECT COUNT(*) total,age FROM `user` GROUP BY age HAVING total>100\ng.Model("user").Fields("COUNT(*) total,age").Group("age").Having("total>100").All()\n\n// SELECT * FROM `student` ORDER BY class HAVING score>60\ng.Model("student").Order("class").Having("score>?", 60).All()\n'})})]})}function O(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>s});var t=n(67294);const d={},o=t.createContext(d);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);