"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[54575],{80480:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var c=d(85893),s=d(11151);const i={title:"v1.11 2020-01-14"},l=void 0,r={id:"\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.11 2020-01-14",title:"v1.11 2020-01-14",description:"GF(Go Frame) https://goframe.org \u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u9ad8\u6027\u80fd\u3001\u751f\u4ea7\u7ea7\u7684Go\u57fa\u7840\u5f00\u53d1\u6846\u67b6\u3002\u5b9e\u73b0\u4e86\u6bd4\u8f83\u5b8c\u5584\u7684\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\uff0c\u5305\u62ec\u5e38\u7528\u7684\u6838\u5fc3\u5f00\u53d1\u7ec4\u4ef6\uff0c \u5982\uff1a\u7f13\u5b58\u3001\u65e5\u5fd7\u3001\u6587\u4ef6\u3001\u65f6\u95f4\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u96c6\u5408\u3001\u5b57\u7b26\u4e32\u3001\u5b9a\u65f6\u5668\u3001\u547d\u4ee4\u884c\u3001\u6587\u4ef6\u9501\u3001\u5185\u5b58\u9501\u3001\u5bf9\u8c61\u6c60\u3001\u8fde\u63a5\u6c60\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u6570\u636e\u6821\u9a8c\u3001\u6570\u636e\u7f16\u7801\u3001\u6587\u4ef6\u76d1\u63a7\u3001 \u5b9a\u65f6\u4efb\u52a1\u3001\u6570\u636e\u5e93ORM\u3001TCP/UDP\u7ec4\u4ef6\u3001\u8fdb\u7a0b\u7ba1\u7406/\u901a\u4fe1\u3001\u5e76\u53d1\u5b89\u5168\u5bb9\u5668\u7b49\u7b49\u3002 \u5e76\u63d0\u4f9b\u4e86Web\u670d\u52a1\u5f00\u53d1\u7684\u7cfb\u5217\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5982\uff1aRouter\u3001Cookie\u3001Session\u3001Middleware\u3001\u670d\u52a1\u6ce8\u518c\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u6a21\u677f\u5f15\u64ce\u7b49\u7b49\uff0c \u652f\u6301\u70ed\u91cd\u542f\u3001\u70ed\u66f4\u65b0\u3001\u591a\u57df\u540d\u3001\u591a\u7aef\u53e3\u3001\u591a\u670d\u52a1\u3001HTTPS\u3001Rewrite\u7b49\u7279\u6027\u3002",source:"@site/docs/9-\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/7-\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/5-v1.11 2020-01-14.md",sourceDirName:"9-\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/7-\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x",slug:"/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.11 2020-01-14",permalink:"/gfdoc-md/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.11 2020-01-14",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/9-\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/7-\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/5-v1.11 2020-01-14.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"v1.11 2020-01-14"},sidebar:"tutorialSidebar",previous:{title:"v1.12 2020-03-31",permalink:"/gfdoc-md/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.12 2020-03-31"},next:{title:"v1.10 2019-12-05",permalink:"/gfdoc-md/docs/\u7248\u672c\u53d1\u5e03\u8bb0\u5f55/\u5386\u53f2\u7248\u672c\u8bb0\u5f55 v1.x/v1.10 2019-12-05"}},h={},o=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",level:2},{value:"\u529f\u80fd\u6539\u8fdb",id:"\u529f\u80fd\u6539\u8fdb",level:2},{value:"<code>container</code>",id:"container",level:3},{value:"<code>net</code>",id:"net",level:3},{value:"<code>database</code>",id:"database",level:3},{value:"<code>os</code>",id:"os",level:3},{value:"<code>crypto</code>",id:"crypto",level:3},{value:"<code>encoding</code>",id:"encoding",level:3},{value:"<code>util</code>",id:"util",level:3},{value:"<code>frame</code>",id:"frame",level:3},{value:"Bug Fix",id:"bug-fix",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GF(Go Frame)"})," ",(0,c.jsx)(n.a,{href:"https://goframe.org",children:"https://goframe.org"})," \u662f\u4e00\u6b3e\u6a21\u5757\u5316\u3001\u9ad8\u6027\u80fd\u3001\u751f\u4ea7\u7ea7\u7684Go\u57fa\u7840\u5f00\u53d1\u6846\u67b6\u3002\u5b9e\u73b0\u4e86\u6bd4\u8f83\u5b8c\u5584\u7684\u57fa\u7840\u8bbe\u65bd\u5efa\u8bbe\uff0c\u5305\u62ec\u5e38\u7528\u7684\u6838\u5fc3\u5f00\u53d1\u7ec4\u4ef6\uff0c \u5982\uff1a\u7f13\u5b58\u3001\u65e5\u5fd7\u3001\u6587\u4ef6\u3001\u65f6\u95f4\u3001\u961f\u5217\u3001\u6570\u7ec4\u3001\u96c6\u5408\u3001\u5b57\u7b26\u4e32\u3001\u5b9a\u65f6\u5668\u3001\u547d\u4ee4\u884c\u3001\u6587\u4ef6\u9501\u3001\u5185\u5b58\u9501\u3001\u5bf9\u8c61\u6c60\u3001\u8fde\u63a5\u6c60\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u6570\u636e\u6821\u9a8c\u3001\u6570\u636e\u7f16\u7801\u3001\u6587\u4ef6\u76d1\u63a7\u3001 \u5b9a\u65f6\u4efb\u52a1\u3001\u6570\u636e\u5e93ORM\u3001TCP/UDP\u7ec4\u4ef6\u3001\u8fdb\u7a0b\u7ba1\u7406/\u901a\u4fe1\u3001\u5e76\u53d1\u5b89\u5168\u5bb9\u5668\u7b49\u7b49\u3002 \u5e76\u63d0\u4f9b\u4e86Web\u670d\u52a1\u5f00\u53d1\u7684\u7cfb\u5217\u6838\u5fc3\u7ec4\u4ef6\uff0c\u5982\uff1aRouter\u3001Cookie\u3001Session\u3001Middleware\u3001\u670d\u52a1\u6ce8\u518c\u3001\u914d\u7f6e\u7ba1\u7406\u3001\u6a21\u677f\u5f15\u64ce\u7b49\u7b49\uff0c \u652f\u6301\u70ed\u91cd\u542f\u3001\u70ed\u66f4\u65b0\u3001\u591a\u57df\u540d\u3001\u591a\u7aef\u53e3\u3001\u591a\u670d\u52a1\u3001HTTPS\u3001Rewrite\u7b49\u7279\u6027\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"GF"})," \u6709\u7740\u4e30\u5bcc\u7684\u57fa\u7840\u6a21\u5757\u3001\u5b8c\u5584\u7684\u5de5\u5177\u94fe\u3001\u8be6\u5c3d\u7684\u5f00\u53d1\u6587\u6863\u3002\u5f00\u6e90\u8fd1\u4e24\u5e74\u4ee5\u6765\uff0c ",(0,c.jsx)(n.code,{children:"GF"})," \u5f97\u5230\u8d8a\u6765\u8d8a\u591a\u5c0f\u4f19\u4f34\u7684\u80af\u5b9a\u548c\u652f\u6301\uff0c\u4ece\u5bc2\u5bc2\u65e0\u540d\u5230\u73b0\u5728\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5fae\u670d\u52a1\u3001\u7269\u8054\u7f51\u3001\u533a\u5757\u94fe\u3001\u7535\u5546\u7cfb\u7edf\u3001\u94f6\u884c\u7cfb\u7edf\u7b49\u4f01\u4e1a\u7ea7\u7684\u751f\u4ea7\u9879\u76ee\u4e2d\uff0c\u7ecf\u5386\u4e86\u767e\u4e07\u7ea7\u3001\u5343\u4e07\u7ea7\u9879\u76ee\u7684\u8003\u9a8c\uff0c2019\u5e74\u5ea6\u88ab\u7801\u4e91 ",(0,c.jsx)(n.code,{children:"gitee"})," \u8bc4\u9009\u4e3a ",(0,c.jsx)(n.code,{children:"GVP"})," \u6700\u6709\u4ef7\u503c\u5f00\u6e90\u9879\u76ee\u3002 ",(0,c.jsx)(n.code,{children:"GF"})," \u6b63\u5728\u5feb\u901f\u5730\u6210\u957f\u4e2d\uff0c\u76ee\u524d\u4fdd\u6301\u77401-2\u4e2a\u6708\u8fed\u4ee3\u7248\u672c\u7684\u53d1\u5e03\u89c4\u5f8b\uff0c\u793e\u533a\u6d3b\u8dc3\uff0c\u6b22\u8fce\u52a0\u5165 ",(0,c.jsx)(n.code,{children:"GF"})," \u5927\u5bb6\u5ead\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u6700\u540e\uff0c\u795d\u5927\u5bb62020\u65b0\u5e74\u5feb\u4e50\uff0c\u9f20\u5e74\u5927\u5409\uff01"}),"\n",(0,c.jsx)(n.h2,{id:"\u65b0\u7279\u6027",children:"\u65b0\u7279\u6027"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u5e74\u65b0\u6c14\u8c61\uff0c\u5b98\u7f51\u6587\u6863\u5927\u91cf\u66f4\u65b0\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/index",children:"https://goframe.org/index"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"GF"})," \u5de5\u5177\u94fe\u66f4\u65b0\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/toolchain/cli",children:"https://goframe.org/toolchain/cli"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"gf run"})," \u70ed\u7f16\u8bd1\u8fd0\u884c\u547d\u4ee4\uff1b"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"gf docker"})," Docker\u955c\u50cf\u7f16\u8bd1\u547d\u4ee4\uff1b"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"gf gen model"})," \u5f3a\u5927\u7684\u6a21\u578b\u81ea\u52a8\u751f\u6210\u547d\u4ee4\uff1b"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gf build"})," \u547d\u4ee4\u589e\u52a0\u5bf9\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u652f\u6301\uff1b"]}),"\n",(0,c.jsx)(n.li,{children:"\u5927\u91cf\u547d\u4ee4\u884c\u5de5\u5177\u6539\u8fdb\u5de5\u4f5c\uff1b"}),"\n",(0,c.jsx)(n.li,{children:"\u65b0\u589e\u81ea\u52a8\u4ee3\u7406\u8bbe\u7f6e\u7279\u6027\uff1b"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6570\u636e\u5e93 ",(0,c.jsx)(n.code,{children:"ORM"})," \u65b0\u7279\u6027\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,c.jsx)(n.code,{children:"prefix"})," \u6570\u636e\u8868\u524d\u7f00\u652f\u6301\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/database/gdb/config",children:"https://goframe.org/database/gdb/config"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Schema"})," \u6570\u636e\u5e93\u5bf9\u8c61\u5e76\u6539\u8fdb\u6570\u636e\u5e93\u5207\u6362\u7279\u6027\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/schema",children:"https://goframe.org/database/gdb/model/schema"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u81ea\u52a8\u8bc6\u522b\u4e3b\u952e\u7684\u6761\u4ef6\u65b9\u6cd5\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/database/gdb/model/select",children:"https://goframe.org/database/gdb/model/select"})]}),"\n",(0,c.jsx)(n.li,{children:"\u6587\u6863\u53ca\u793a\u4f8b\u5927\u91cf\u66f4\u65b0\uff0c\u8986\u76d695%\u4ee5\u4e0a\u7684\u529f\u80fd\u7279\u6027\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u529f\u80fd\u6539\u8fdb",children:"\u529f\u80fd\u6539\u8fdb"}),"\n",(0,c.jsx)(n.h3,{id:"container",children:(0,c.jsx)(n.code,{children:"container"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"garray"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"New*ArrayRange"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u521d\u59cb\u5316\u521b\u5efa\u6307\u5b9a\u6570\u503c\u8303\u56f4\u7684\u6570\u7ec4\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Iterator*"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u6570\u7ec4\u9879\u5143\u7d20\u56de\u8c03\u904d\u5386\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gvar"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"MapStrStr"}),"\u3001 ",(0,c.jsx)(n.code,{children:"MapStrStrDeep"})," \u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"net",children:(0,c.jsx)(n.code,{children:"net"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ghttp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdbHTTP\u5ba2\u6237\u7aef\uff0c\u589e\u52a0\u5bf9\u63d0\u4ea4\u53c2\u6570\u7684\u81ea\u52a8 ",(0,c.jsx)(n.code,{children:"Content-Type"})," \u8bc6\u522b\u529f\u80fd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u589e\u52a0 ",(0,c.jsx)(n.code,{children:"Parse"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5feb\u6377\u7684\u5bf9\u8c61\u8f6c\u6362\u5373\u53c2\u6570\u6821\u9a8c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Request.GetPost*"})," \u65b9\u6cd5\u5168\u90e8\u6807\u8bb0\u4e3a ",(0,c.jsx)(n.code,{children:"deprecated"}),"\uff0c\u7edf\u4e00\u5ba2\u6237\u7aef\u53c2\u6570\u63d0\u4ea4\u65b9\u5f0f\u4e3a ",(0,c.jsx)(n.code,{children:"QueryString"}),", ",(0,c.jsx)(n.code,{children:"Form"}),", ",(0,c.jsx)(n.code,{children:"Body"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u53bb\u6389 ",(0,c.jsx)(n.code,{children:"Response"})," \u6a21\u677f\u89e3\u6790\u65f6\u7684 ",(0,c.jsx)(n.code,{children:"Get"}),"/ ",(0,c.jsx)(n.code,{children:"Post"})," \u5185\u7f6e\u53d8\u91cf\uff0c\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Query"}),", ",(0,c.jsx)(n.code,{children:"Form"}),", ",(0,c.jsx)(n.code,{children:"Request"})," \u5185\u7f6e\u53d8\u91cf\uff1a ",(0,c.jsx)(n.a,{href:"https://goframe.org/net/ghttp/response/template",children:"https://goframe.org/net/ghttp/response/template"})]}),"\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Response.WriteJson*"})," \u53ca ",(0,c.jsx)(n.code,{children:"Response.WriteXml*"})," \u65b9\u6cd5\uff0c\u589e\u52a0\u5bf9 ",(0,c.jsx)(n.code,{children:"string"}),", ",(0,c.jsx)(n.code,{children:"[]byte"})," \u7c7b\u578b\u53c2\u6570\u7684\u652f\u6301\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Server"})," \u65b0\u589e ",(0,c.jsx)(n.code,{children:"GetRouterArray"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5411\u5e94\u7528\u5c42\u66b4\u9732\u5e76\u83b7\u53d6 ",(0,c.jsx)(n.code,{children:"Server"})," \u7684\u8def\u7531\u5217\u8868\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Server"})," \u65b0\u589e ",(0,c.jsx)(n.code,{children:"Use"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4e3a ",(0,c.jsx)(n.code,{children:"BindMiddlewareDefault"})," \u7684\u522b\u540d\uff0c\u7528\u4ee5\u5168\u5c40\u4e2d\u95f4\u4ef6\u7684\u6ce8\u518c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Server"})," \u65b0\u589e ",(0,c.jsx)(n.code,{children:"RouteOverWrite"})," \u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u63a7\u5236\u662f\u5426\u5728\u6ce8\u518c\u8def\u7531\u51b2\u7a81\u65f6\u81ea\u52a8\u8986\u76d6\uff0c\u9ed8\u8ba4\u5173\u95ed\u5e76\u63d0\u793a\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Server"})," \u65b0\u589e ",(0,c.jsx)(n.code,{children:"Graceful"})," \u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u5728\u5355\u670d\u52a1\u573a\u666f\u4e0b\u63a7\u5236\u5e73\u6ed1\u91cd\u542f\u7279\u6027\u7684\u5f00\u542f/\u5173\u95ed\uff0c\u9ed8\u8ba4\u5f00\u542f\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gtcp"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6539\u8fdb\u7b80\u5355\u534f\u8bae\u4e0b\u7684\u6570\u636e\u5305\u53d1\u9001\u63a5\u6536\u529f\u80fd\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u5c06\u8fde\u63a5\u6c60\u9ed8\u8ba4\u7684\u7f13\u5b58\u8fc7\u671f\u65f6\u95f4 ",(0,c.jsx)(n.code,{children:"30"})," \u79d2\u4fee\u6539\u4e3a ",(0,c.jsx)(n.code,{children:"10"})," \u79d2\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"database",children:(0,c.jsx)(n.code,{children:"database"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gdb"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"As"})," \u6570\u636e\u8868\u522b\u540d\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6539\u8fdb\u6570\u636e\u8868\u3001\u5b57\u6bb5\u7684\u5b89\u5168\u5b57\u7b26\u81ea\u52a8\u8bc6\u522b\u6dfb\u52a0\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"DB"})," \u6570\u636e\u5e93\u5bf9\u8c61\u5207\u6362\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"TX"})," \u94fe\u5f0f\u64cd\u4f5c\u4e8b\u52a1\u652f\u6301\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"os",children:(0,c.jsx)(n.code,{children:"os"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gcfg"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"GetMapStrStr"})," \u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gcmd"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u589e\u52a0\u53c2\u6570\u89e3\u6790\u7684 ",(0,c.jsx)(n.code,{children:"strict"})," \u4e25\u683c\u53c2\u6570\uff0c\u9ed8\u8ba4\u4e25\u683c\u89e3\u6790\uff0c\u4e0d\u5b58\u5728\u6307\u5b9a\u53c2\u6570/\u9009\u9879\u540d\u79f0\u65f6\u5219\u62a5\u9519\u8fd4\u56de\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"genv"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Remove"})," \u65b9\u6cd5\u652f\u6301\u591a\u4e2a\u73af\u5883\u53d8\u91cf\u7684\u5220\u9664\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gfile"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"TempDir"})," \u4e34\u65f6\u76ee\u5f55\u83b7\u53d6\u65b9\u6cd5\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"*nix"})," \u7cfb\u7edf\u4e0b\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"/tmp"})," \u76ee\u5f55\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"ReadLines"}),", ",(0,c.jsx)(n.code,{children:"ReadByteLines"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u6309\u884c\u56de\u8c03\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Copy*"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u6587\u4ef6/\u76ee\u5f55\u7684\u62f7\u8d1d\uff0c\u652f\u6301\u9012\u5f52\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Replace*"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u5185\u5bb9\u66ff\u6362\uff0c\u652f\u6301\u9012\u5f52\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Scan*"})," \u65b9\u6cd5\uff0c\u7528\u4ee5\u68c0\u7d22\u5e76\u8fd4\u56de\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6/\u76ee\u5f55\uff0c\u652f\u6301\u6587\u4ef6\u6a21\u5f0f\u6307\u5b9a\uff0c\u652f\u6301\u9012\u5f52\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gproc"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6539\u8fdb\u547d\u4ee4\u884c\u8fd0\u884c\u65b9\u6cd5\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Shell"})," \u547d\u4ee4\u6587\u4ef6\u68c0\u7d22\u903b\u8f91\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u6539\u8fdb\u5b9e\u9a8c\u6027\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1\u8bbe\u8ba1\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gtime"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5c06\u5305\u65b9\u6cd5\u4ee5\u53ca ",(0,c.jsx)(n.code,{children:"Time"})," \u5bf9\u8c61\u7684\u65f6\u95f4\u6233\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"Second"}),", ",(0,c.jsx)(n.code,{children:"Millisecond"}),", ",(0,c.jsx)(n.code,{children:"Microsecond"}),", ",(0,c.jsx)(n.code,{children:"Nanosecond"})," \u6807\u8bb0\u4e3a\u5e9f\u9664\uff0c \u5e76\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Timestamp"}),", ",(0,c.jsx)(n.code,{children:"TimestampMilli"}),", ",(0,c.jsx)(n.code,{children:"TimestampMicro"}),", ",(0,c.jsx)(n.code,{children:"TimestampNano"})," \u66ff\u6362\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\u4ee5\u4e0a\u4fee\u6539\u53ef\u80fd\u548c\u8001\u7248\u672c\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"gview"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u89e3\u6790\u529f\u80fd\u3001\u7f13\u5b58\u8bbe\u8ba1\u6539\u8fdb\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"encode"}),", ",(0,c.jsx)(n.code,{children:"decode"})," HTML\u7f16\u7801/\u89e3\u7801\u6a21\u677f\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"concat"})," \u5b57\u7b26\u4e32\u62fc\u63a5\u6a21\u677f\u51fd\u6570\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"dump"})," \u6a21\u677f\u51fd\u6570\uff0c\u529f\u80fd\u7c7b\u4f3c\u4e8e ",(0,c.jsx)(n.code,{children:"g.Dump"})," \u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"AutoEncode"})," \u914d\u7f6e\u9879\uff0c\u7528\u4e8e\u81ea\u52a8\u8f6c\u7801\u8f93\u51fa\u7684 ",(0,c.jsx)(n.code,{children:"HTML"})," \u5185\u5bb9\uff0c\u5e38\u7528\u4e8e\u9632\u6b62 ",(0,c.jsx)(n.code,{children:"XSS"}),"\uff0c\u9ed8\u8ba4\u5173\u95ed\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u8be5\u7279\u6027\u5e76\u4e0d\u4f1a\u5f71\u54cd ",(0,c.jsx)(n.code,{children:"include"})," \u5185\u7f6e\u51fd\u6570: ",(0,c.jsx)(n.a,{href:"https://goframe.org/os/gview/xss",children:"https://goframe.org/os/gview/xss"})]}),"\n",(0,c.jsx)(n.li,{children:"\u5355\u5143\u6d4b\u8bd5\u5b8c\u5584\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"crypto",children:(0,c.jsx)(n.code,{children:"crypto"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gmd5"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,c.jsx)(n.code,{children:"MustEncrypt"}),", ",(0,c.jsx)(n.code,{children:"MustEncryptBytes"}),", ",(0,c.jsx)(n.code,{children:"MustEncryptString"}),", ",(0,c.jsx)(n.code,{children:"MustEncryptFile"})," \u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gsha1"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u589e\u52a0 ",(0,c.jsx)(n.code,{children:"MustEncryptFile"})," \u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"encoding",children:(0,c.jsx)(n.code,{children:"encoding"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gbase64"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"MustEncodeFile"}),", ",(0,c.jsx)(n.code,{children:"MustEncodeFileToString"}),", ",(0,c.jsx)(n.code,{children:"MustDecode"}),", ",(0,c.jsx)(n.code,{children:"MustDecodeToString"})," \u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gjson"}),"/ ",(0,c.jsx)(n.code,{children:"gparser"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"GetMapStrStr"})," \u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Must*"})," \u65b9\u6cd5\uff0c\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u683c\u5f0f\u7684\u8f6c\u6362\u5931\u8d25\u65f6\u4ea7\u751f ",(0,c.jsx)(n.code,{children:"panic"})," \u9519\u8bef\uff0c\u800c\u4e0d\u4f1a\u8fd4\u56de ",(0,c.jsx)(n.code,{children:"error"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"util",children:(0,c.jsx)(n.code,{children:"util"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gconv"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Convert"})," \u65b9\u6cd5\u589e\u52a0\u5bf9 ",(0,c.jsx)(n.code,{children:"[]int32"}),", ",(0,c.jsx)(n.code,{children:"[]int64"}),", ",(0,c.jsx)(n.code,{children:"[]uint"}),", ",(0,c.jsx)(n.code,{children:"[]uint32"}),", ",(0,c.jsx)(n.code,{children:"[]uint64"}),", ",(0,c.jsx)(n.code,{children:"[]float32"}),", ",(0,c.jsx)(n.code,{children:"[]float64"})," \u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u652f\u6301\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"String"})," \u5b57\u7b26\u4e32\u8f6c\u6362\u65b9\u6cd5\u5bf9\u6307\u9488\u53c2\u6570\u7684\u652f\u6301\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6539\u8fdb ",(0,c.jsx)(n.code,{children:"Map*"})," Map\u8f6c\u6362\u65b9\u6cd5\u7684\u4ee3\u7801\u7ed3\u6784\u53ca\u6027\u80fd\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Floats"}),", ",(0,c.jsx)(n.code,{children:"Float32s"}),", ",(0,c.jsx)(n.code,{children:"Float64s"})," \u5bf9 ",(0,c.jsx)(n.code,{children:"[]float32"}),", ",(0,c.jsx)(n.code,{children:"[]float64"})," \u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Ints"}),", ",(0,c.jsx)(n.code,{children:"Int32s"}),", ",(0,c.jsx)(n.code,{children:"Int64s"})," \u5bf9 ",(0,c.jsx)(n.code,{children:"[]int"}),", ",(0,c.jsx)(n.code,{children:"[]int32"}),", ",(0,c.jsx)(n.code,{children:"[]int64"})," \u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u65b0\u589e ",(0,c.jsx)(n.code,{children:"Uints"}),", ",(0,c.jsx)(n.code,{children:"Uint32s"}),", ",(0,c.jsx)(n.code,{children:"Uint64s"})," \u5bf9 ",(0,c.jsx)(n.code,{children:"[]uint"}),", ",(0,c.jsx)(n.code,{children:"[]uint32"}),", ",(0,c.jsx)(n.code,{children:"[]uint64"})," \u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u5b8c\u5584\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"frame",children:(0,c.jsx)(n.code,{children:"frame"})}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gins"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6240\u6709\u7684\u5355\u4f8b\u5bf9\u8c61\u5728\u83b7\u53d6\u5931\u8d25\u65f6\u4ea7\u751f ",(0,c.jsx)(n.code,{children:"panic"})," \u9519\u8bef\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u589e\u52a0\u5bf9\u5e38\u89c1\u9519\u8bef\u8def\u7531\u683c\u5f0f\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"/user//index"})," \u7684\u517c\u5bb9\u652f\u6301\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fee\u590d ",(0,c.jsx)(n.code,{children:"gtcp"}),"/ ",(0,c.jsx)(n.code,{children:"gudp"})," \u5728\u6570\u636e\u63a5\u6536\u65f6\u7684\u95f4\u9694\u65f6\u95f4\u5355\u4f4d\u95ee\u9898\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fee\u590d ",(0,c.jsx)(n.code,{children:"gfile"}),"/ ",(0,c.jsx)(n.code,{children:"gspath"}),"/ ",(0,c.jsx)(n.code,{children:"gfsnotify"})," \u5305\u5bf9\u6587\u4ef6\u7684\u5b58\u5728\u6027\u5224\u65ad\u4e0d\u4e25\u8c28\u95ee\u9898\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fee\u590d ",(0,c.jsx)(n.code,{children:"gproc.Kill"})," \u65b9\u6cd5\u5728 ",(0,c.jsx)(n.code,{children:"windows"})," \u7cfb\u7edf\u4e0b\u7684\u8fd0\u884c\u963b\u585e\u95ee\u9898\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4fee\u590d ",(0,c.jsx)(n.code,{children:"gstr.TrimLeftStr"}),"/ ",(0,c.jsx)(n.code,{children:"gstr.TrimRightStr"})," \u5728\u88ab\u66ff\u6362\u5b57\u7b26\u4e32\u957f\u5ea6\u5c0f\u4e8e\u66ff\u6362\u5b57\u7b26\u4e32\u957f\u5ea6\u65f6\u7684\u6570\u7ec4\u6ea2\u51fa\u95ee\u9898\u3002"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>r,a:()=>l});var c=d(67294);const s={},i=c.createContext(s);function l(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);