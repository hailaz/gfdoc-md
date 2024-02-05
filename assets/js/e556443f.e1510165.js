"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[35440],{55818:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>E,frontMatter:()=>l,metadata:()=>s,toc:()=>t});var d=o(85893),i=o(11151);const l={title:"ORM\u67e5\u8be2-UnionUnionAll"},r=void 0,s={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-UnionUnionAll",title:"ORM\u67e5\u8be2-UnionUnionAll",description:"GoFrame ORM\xa0\u7ec4\u4ef6\u652f\u6301 Union/UnionAll \u64cd\u4f5c\uff0c Union/UnionAll \u64cd\u4f5c\u7b26\u7528\u4e8e\u8fde\u63a5\u4e24\u4e2a\u4ee5\u4e0a\u7684 SELECT \u8bed\u53e5\u7684\u7ed3\u679c\u7ec4\u5408\u5230\u4e00\u4e2a\u7ed3\u679c\u96c6\u5408\u4e2d\uff0c\u5173\u4e8e Union/UnionAll \u7ec4\u5408\u67e5\u8be2\u7684\u76f8\u5173\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003MySQL\u7684\u5b98\u65b9\u6587\u6863\u4ecb\u7ecd https://dev.mysql.com/doc/refman/8.0/en/union.html \u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c\u6216\u8005\u65b9\u6cd5\u64cd\u4f5c\u6765\u5b9e\u73b0 Union/UnionAll \u64cd\u4f5c\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/7-ORM\u67e5\u8be2-UnionUnionAll.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-UnionUnionAll",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-UnionUnionAll",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/7-ORM\u67e5\u8be2-UnionUnionAll.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"ORM\u67e5\u8be2-UnionUnionAll"},sidebar:"tutorialSidebar",previous:{title:"ORM\u67e5\u8be2-Union/UnionAll",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Union/UnionAll"},next:{title:"ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-\u5b50\u67e5\u8be2\u7279\u6027"}},c={},t=[{value:"\u65b9\u6cd5\u5b9a\u4e49",id:"\u65b9\u6cd5\u5b9a\u4e49",level:2},{value:"<code>Union</code>",id:"union",level:2},{value:"<code>UnionAll</code>",id:"unionall",level:2}];function R(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.code,{children:"GoFrame ORM"}),"\xa0\u7ec4\u4ef6\u652f\u6301 ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64cd\u4f5c\uff0c ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64cd\u4f5c\u7b26\u7528\u4e8e\u8fde\u63a5\u4e24\u4e2a\u4ee5\u4e0a\u7684 ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8bed\u53e5\u7684\u7ed3\u679c\u7ec4\u5408\u5230\u4e00\u4e2a\u7ed3\u679c\u96c6\u5408\u4e2d\uff0c\u5173\u4e8e ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u7ec4\u5408\u67e5\u8be2\u7684\u76f8\u5173\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003MySQL\u7684\u5b98\u65b9\u6587\u6863\u4ecb\u7ecd ",(0,d.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/union.html",children:"https://dev.mysql.com/doc/refman/8.0/en/union.html"})," \u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u94fe\u5f0f\u64cd\u4f5c\u6216\u8005\u65b9\u6cd5\u64cd\u4f5c\u6765\u5b9e\u73b0 ",(0,d.jsx)(e.code,{children:"Union/UnionAll"})," \u64cd\u4f5c\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"\u65b9\u6cd5\u5b9a\u4e49",children:"\u65b9\u6cd5\u5b9a\u4e49"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:'// Union does "(SELECT xxx FROM xxx) UNION (SELECT xxx FROM xxx) ..." statement.\nfunc (c *Core) Union(unions ...*Model) *Model\n\n// UnionAll does "(SELECT xxx FROM xxx) UNION ALL (SELECT xxx FROM xxx) ..." statement.\nfunc (c *Core) UnionAll(unions ...*Model) *Model\n'})}),"\n",(0,d.jsx)(e.h2,{id:"union",children:(0,d.jsx)(e.code,{children:"Union"})}),"\n",(0,d.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"Union"})," \u64cd\u4f5c\u7b26\uff0c\u591a\u4e2a ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8bed\u53e5\u4f1a\u5220\u9664\u91cd\u590d\u7684\u6570\u636e\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:'// \u83b7\u53d6\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u5bf9\u8c61(\u914d\u7f6e\u540d\u79f0\u4e3a"default")\ndb := g.DB()\n\ndb.Union(\n    db.Model("user").Where("id", 1),\n    db.Model("user").Where("id", 2),\n    db.Model("user").WhereIn("id", g.Slice{1, 2, 3}),\n).OrderDesc("id").All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(e.code,{children:"dao"})," \u94fe\u5f0f\u64cd\u4f5c\u5b9e\u73b0\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"dao.User.Union(\n    dao.User.Where(dao.User.Columns.Id, 1),\n    dao.User.Where(dao.User.Columns.Id, 2),\n    dao.User.WhereIn(dao.User.Columns.Id, g.Slice{1, 2, 3}),\n).OrderDesc(dao.User.Columns.Id).All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n"})}),"\n",(0,d.jsx)(e.h2,{id:"unionall",children:(0,d.jsx)(e.code,{children:"UnionAll"})}),"\n",(0,d.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(e.code,{children:"UnionAll"})," \u64cd\u4f5c\u7b26\uff0c\u591a\u4e2a ",(0,d.jsx)(e.code,{children:"SELECT"})," \u8bed\u53e5\u4e0d\u4f1a\u5220\u9664\u91cd\u590d\u7684\u6570\u636e\u3002"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:'db.UnionAll(\n    db.Model("user").Where("id", 1),\n    db.Model("user").Where("id", 2),\n    db.Model(table).WhereIn("id", g.Slice{1, 2, 3}),\n).OrderDesc("id").All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n'})}),"\n",(0,d.jsxs)(e.p,{children:["\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(e.code,{children:"dao"})," \u94fe\u5f0f\u64cd\u4f5c\u5b9e\u73b0\uff1a"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"dao.User.UnionAll(\n    dao.User.Where(dao.User.Columns.Id, 1),\n    dao.User.Where(dao.User.Columns.Id, 2),\n    dao.User.WhereIn(dao.User.Columns.Id, g.Slice{1, 2, 3}),\n).OrderDesc(dao.User.Columns.Id).All()\n// (SELECT * FROM `user` WHERE `id`=1)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id`=2)\n// UNION ALL\n// (SELECT * FROM `user` WHERE `id` IN (1,2,3)\n// ORDER BY `id` DESC) ORDER BY `id` DESC\n"})})]})}function E(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(R,{...n})}):R(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>s,a:()=>r});var d=o(67294);const i={},l=d.createContext(i);function r(n){const e=d.useContext(l);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);