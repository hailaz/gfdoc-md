"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[98140],{46685:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var d=n(85893),c=n(11151);const i={},r="\u4e00\u3001\u9879\u76ee\u4ecb\u7ecd",l={id:"\u5feb\u901f\u5f00\u59cb/\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee",title:"\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee",description:"\u793a\u4f8b\u662f\u6700\u597d\u7684\u6587\u6863\uff0c\u6211\u4eec\u4e3a\u5927\u5bb6\u51c6\u5907\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 API \u793a\u4f8b\u9879\u76ee\uff0c\u5927\u5bb6\u53ef\u4ee5\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u6e90\u7801\u66f4\u8fdb\u4e00\u6b65\u5b66\u4e60\u6846\u67b6\u4f7f\u7528\u3002\u5f53\u5927\u5bb6\u5728\u9605\u8bfb\u6e90\u7801\u65f6\u6709\u7591\u95ee\u7684\u5730\u65b9\uff0c\u5728\u5b98\u7f51\u6587\u6863\u4e2d\u5747\u6709\u7b54\u6848\uff0c\u8bf7\u6709\u6548\u5229\u7528\u597d\u5b98\u7f51 WIKI \u7684\u641c\u7d22\u529f\u80fd\u3002",source:"@site/docs/0-\u5feb\u901f\u5f00\u59cb/2-\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee.md",sourceDirName:"0-\u5feb\u901f\u5f00\u59cb",slug:"/\u5feb\u901f\u5f00\u59cb/\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee",permalink:"/gfdoc-md/docs/\u5feb\u901f\u5f00\u59cb/\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/0-\u5feb\u901f\u5f00\u59cb/2-\u5feb\u901f\u5f00\u59cb-\u793a\u4f8b\u9879\u76ee.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u3001\u5de5\u7a0b\u7ed3\u6784",permalink:"/gfdoc-md/docs/\u5feb\u901f\u5f00\u59cb/\u5feb\u901f\u5f00\u59cb-\u914d\u7f6e\u7ba1\u7406"},next:{title:"\u7b80\u5355\u603b\u7ed3",permalink:"/gfdoc-md/docs/\u5feb\u901f\u5f00\u59cb/\u5feb\u901f\u5f00\u59cb-What's Next"}},h={},o=[{value:"1\u3001\u63a5\u53e3\u5b9a\u4e49",id:"1\u63a5\u53e3\u5b9a\u4e49",level:2},{value:"2\u3001\u8def\u7531\u6ce8\u518c",id:"2\u8def\u7531\u6ce8\u518c",level:2},{value:"3\u3001\u5e38\u91cf\u7ba1\u7406",id:"3\u5e38\u91cf\u7ba1\u7406",level:2},{value:"4\u3001\u63a7\u5236\u5668\u5b9a\u4e49",id:"4\u63a7\u5236\u5668\u5b9a\u4e49",level:2},{value:"5\u3001\u6570\u636e\u5e93\u8bbf\u95ee",id:"5\u6570\u636e\u5e93\u8bbf\u95ee",level:2},{value:"1\uff09\u9a71\u52a8\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09",id:"1\u9a71\u52a8\u5f15\u5165\u4ec5\u4e00\u6b21",level:3},{value:"2\uff09\u6570\u636e\u5e93\u914d\u7f6e",id:"2\u6570\u636e\u5e93\u914d\u7f6e",level:3},{value:"3\uff09dao\u4ee3\u7801\u751f\u6210",id:"3dao\u4ee3\u7801\u751f\u6210",level:3},{value:"6\u3001\u4e1a\u52a1\u6a21\u578b",id:"6\u4e1a\u52a1\u6a21\u578b",level:2},{value:"7\u3001\u670d\u52a1\u63a5\u53e3",id:"7\u670d\u52a1\u63a5\u53e3",level:2},{value:"8\u3001\u4e1a\u52a1\u5b9e\u73b0",id:"8\u4e1a\u52a1\u5b9e\u73b0",level:2},{value:"1\uff09\u4f9d\u8d56\u6ce8\u5165",id:"1\u4f9d\u8d56\u6ce8\u5165",level:3},{value:"2\uff09\u589e\u52a0\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09",id:"2\u589e\u52a0\u5f15\u5165\u4ec5\u4e00\u6b21",level:3},{value:"1\u3001\u7528\u6237\u6ce8\u518c - <code>/user/signup</code>",id:"1\u7528\u6237\u6ce8\u518c---usersignup",level:2},{value:"2\u3001\u7528\u6237\u767b\u5f55 - <code>/user/signin</code>",id:"2\u7528\u6237\u767b\u5f55---usersignin",level:2}];function t(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u793a\u4f8b\u662f\u6700\u597d\u7684\u6587\u6863"}),"\uff0c\u6211\u4eec\u4e3a\u5927\u5bb6\u51c6\u5907\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,d.jsx)(s.code,{children:"API"})," \u793a\u4f8b\u9879\u76ee\uff0c\u5927\u5bb6\u53ef\u4ee5\u901a\u8fc7\u793a\u4f8b\u9879\u76ee\u6e90\u7801\u66f4\u8fdb\u4e00\u6b65\u5b66\u4e60\u6846\u67b6\u4f7f\u7528\u3002\u5f53\u5927\u5bb6\u5728\u9605\u8bfb\u6e90\u7801\u65f6\u6709\u7591\u95ee\u7684\u5730\u65b9\uff0c\u5728\u5b98\u7f51\u6587\u6863\u4e2d\u5747\u6709\u7b54\u6848\uff0c\u8bf7\u6709\u6548\u5229\u7528\u597d\u5b98\u7f51 ",(0,d.jsx)(s.code,{children:"WIKI"})," \u7684\u641c\u7d22\u529f\u80fd\u3002"]}),"\n",(0,d.jsx)(s.h1,{id:"\u4e00\u9879\u76ee\u4ecb\u7ecd",children:"\u4e00\u3001\u9879\u76ee\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(s.p,{children:["\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684\u57fa\u4e8e ",(0,d.jsx)(s.code,{children:"HTTP"})," \u7684 ",(0,d.jsx)(s.code,{children:"API Service"})," \u4e3a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"GoFrame"})," \u6846\u67b6\u4ee5\u53ca\u76f8\u5e94\u7684 ",(0,d.jsx)(s.code,{children:"CLI"})," \u5de5\u5177\u6765\u5f00\u53d1\u4e00\u4e2a\u63a5\u53e3\u9879\u76ee\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u4ee3\u7801\u5730\u5740\uff1a ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/gf-demo-user",children:"https://github.com/gogf/gf-demo-user"})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"git clone https://github.com/gogf/gf-demo-user\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u8bf7\u5148\u5c1d\u8bd5\u5c06\u6b64\u9879\u76ee\u5728\u672c\u5730\u8fd0\u884c\u8d77\u6765\u3002\u518d\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u4f1a\u7ed9\u5927\u5bb6\u4ecb\u7ecd\u8fd9\u4e2a\u793a\u4f8b\u9879\u76ee\u7684\u4e00\u4e9b\u7ec6\u8282\u3002"}),"\n",(0,d.jsx)(s.h1,{id:"\u4e8c\u8981\u70b9\u4ecb\u7ecd",children:"\u4e8c\u3001\u8981\u70b9\u4ecb\u7ecd"}),"\n",(0,d.jsx)(s.h2,{id:"1\u63a5\u53e3\u5b9a\u4e49",children:"1\u3001\u63a5\u53e3\u5b9a\u4e49"}),"\n",(0,d.jsxs)(s.p,{children:["\u63a5\u53e3\u6ce8\u518c\u6587\u4ef6\u4f4d\u4e8e ",(0,d.jsx)(s.code,{children:"api"})," \u76ee\u5f55\u4e0b\uff0c\u7531\u4e8e\u8be5\u9879\u76ee\u91c7\u7528\u4e86\u89c4\u8303\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\uff0c\u56e0\u6b64\u5728API\u7ed3\u6784\u4f53\u7684\u5c5e\u6027\u4e2d\u5305\u542b\u4e00\u4e9b\u6807\u7b7e\u3002\u5176\u4e2d\u7ed3\u6784\u4f53\u5c5e\u6027\u7684 ",(0,d.jsx)(s.code,{children:"v"})," \u6807\u7b7e\u8868\u793a\u6821\u9a8c\u89c4\u5219\uff0c\u8bf7\u6c42\u53c2\u6570\u8fdb\u5165 ",(0,d.jsx)(s.code,{children:"HTTP Server"})," \u540e\u5c06\u4f1a\u88ab\u81ea\u52a8\u6267\u884c\u6821\u9a8c\uff08\u6846\u67b6\u6709\u975e\u5e38\u5f3a\u5927\u7684\u6570\u636e\u6821\u9a8c\u7ec4\u4ef6\uff0c\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C/%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C",children:"\u6570\u636e\u6821\u9a8c"}),"\uff09"]}),"\n",(0,d.jsxs)(s.p,{children:["\u6846\u67b6\u4e2d\u6240\u6709\u6d89\u53ca\u5230\u7684\u6807\u7b7e\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98-FAQ",children:"\u5e38\u89c1\u95ee\u9898(FAQ)"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(22287).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"2\u8def\u7531\u6ce8\u518c",children:"2\u3001\u8def\u7531\u6ce8\u518c"}),"\n",(0,d.jsxs)(s.p,{children:["\u8def\u7531\u6ce8\u518c\u5f80\u5f80\u5728 ",(0,d.jsx)(s.code,{children:"cmd"})," \u5305\u4e2d\uff0c\u5728\u672c\u9879\u76ee\u4e2d\uff0c\u4ecd\u65e7\u91c7\u7528\u7075\u6d3b\u7684\u5206\u7ec4\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u3002\u5728\u90e8\u5206\u8def\u7531\u4e2d\u5e26\u6709\u9274\u6743\u4e2d\u95f4\u4ef6\uff0c\u8fd9\u90e8\u5206\u8def\u7531\u9700\u8981\u9274\u6743\u540e\u624d\u80fd\u8bbf\u95ee\uff0c\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u4ed4\u7ec6\u7814\u7a76\u4e0b\u6e90\u7801\u7684\u5b9e\u73b0\u539f\u7406\u3002\u5173\u4e8e\u8def\u7531\u4e2d\u95f4\u4ef6\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/WEB%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86-%E4%B8%AD%E9%97%B4%E4%BB%B6/%E6%8B%A6%E6%88%AA%E5%99%A8/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86-%E4%B8%AD%E9%97%B4%E4%BB%B6/%E6%8B%A6%E6%88%AA%E5%99%A8",children:"\u8def\u7531\u7ba1\u7406-\u4e2d\u95f4\u4ef6/\u62e6\u622a\u5668"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(3599).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"3\u5e38\u91cf\u7ba1\u7406",children:"3\u3001\u5e38\u91cf\u7ba1\u7406"}),"\n",(0,d.jsxs)(s.p,{children:["\u9879\u76ee\u7684\u5168\u5c40\u8bbf\u95ee\u5e38\u91cf\u4f4d\u4e8e ",(0,d.jsx)(s.code,{children:"internal/consts"})," \u5305\u4e0b\uff0c\u4f9b\u9879\u76ee\u6240\u6709\u7684\u5305\u5168\u5c40\u53ef\u8bbf\u95ee\uff0c ",(0,d.jsx)(s.strong,{children:"\u5168\u5c40\u5e38\u91cf\u901a\u8fc7\u4e0d\u540c\u7684\u6587\u4ef6\u4ee5\u53ca\u540d\u79f0\u547d\u540d\u524d\u7f00\u6765\u533a\u5206\u4e0d\u540c\u7684\u4e1a\u52a1\u6a21\u5757"}),"\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u5efa\u8bae\u6240\u6709\u7684\u5e38\u91cf\u90fd\u4e22\u5230 ",(0,d.jsx)(s.code,{children:"internal/consts"})," \u4e0b\uff0c\u975e\u516c\u5f00\u7684\u5e38\u91cf\u5efa\u8bae\u653e\u5230\u5bf9\u5e94\u7684\u5305\u4e0b\u9762\u95ed\u73af\u7ef4\u62a4\u3002"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(30537).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"4\u63a7\u5236\u5668\u5b9a\u4e49",children:"4\u3001\u63a7\u5236\u5668\u5b9a\u4e49"}),"\n",(0,d.jsxs)(s.p,{children:["\u63a7\u5236\u5668\u5f80\u5f80\u4e0d\u5e26\u6709\u4efb\u4f55\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8d1f\u8d23 ",(0,d.jsx)(s.code,{children:"API"})," \u63a5\u53e3\u6570\u636e\u7ed3\u6784\u7684\u8f93\u5165\u4e0e\u8f93\u51fa\uff0c\u8c03\u7528\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,d.jsx)(s.code,{children:"service"})," \u5b9e\u73b0\u5177\u4f53\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u5173\u4e8e\u9879\u76ee\u5de5\u7a0b\u8bbe\u8ba1\u4e2d\u5404\u4e2a\u90e8\u5206\u7684\u804c\u8d23\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E6%A1%86%E6%9E%B6%E8%AE%BE%E8%AE%A1/%E5%B7%A5%E7%A8%8B%E5%BC%80%E5%8F%91%E8%AE%BE%E8%AE%A1/%E5%B7%A5%E7%A8%8B%E7%9B%AE%E5%BD%95%E8%AE%BE%E8%AE%A1",children:"\u5de5\u7a0b\u76ee\u5f55\u8bbe\u8ba1\ud83d\udd25"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(54857).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"5\u6570\u636e\u5e93\u8bbf\u95ee",children:"5\u3001\u6570\u636e\u5e93\u8bbf\u95ee"}),"\n",(0,d.jsx)(s.h3,{id:"1\u9a71\u52a8\u5f15\u5165\u4ec5\u4e00\u6b21",children:"1\uff09\u9a71\u52a8\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,d.jsxs)(s.p,{children:["\u9996\u5148\uff0c\u9700\u8981\u5f15\u5165\u5bf9\u5e94\u7684\u9a71\u52a8\u6587\u4ef6\uff0c\u7531\u4e8e\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u7684\u662f ",(0,d.jsx)(s.code,{children:"MySQL"}),"\uff0c\u6211\u4eec\u9700\u8981\u5728 ",(0,d.jsx)(s.code,{children:"main.go"})," \u4e2d\u5f15\u5165\u4ee5\u4e0b\u9a71\u52a8\u6587\u4ef6\uff1a"]}),"\n",(0,d.jsxs)(s.p,{children:["\u5173\u4e8e\u9a71\u52a8\u7684\u652f\u6301\u4ee5\u53ca\u4f7f\u7528\u8bf7\u53c2\u8003\u94fe\u63a5\uff1a ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(67315).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h3,{id:"2\u6570\u636e\u5e93\u914d\u7f6e",children:"2\uff09\u6570\u636e\u5e93\u914d\u7f6e"}),"\n",(0,d.jsxs)(s.p,{children:["\u6570\u636e\u5e93\u7684\u914d\u7f6e\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"database"})," \u914d\u7f6e\u9879\uff0c\u5173\u4e8e\u6570\u636e\u5e93\u914d\u7f6e\u7684\u8be6\u7ec6\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(13680).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h3,{id:"3dao\u4ee3\u7801\u751f\u6210",children:"3\uff09dao\u4ee3\u7801\u751f\u6210"}),"\n",(0,d.jsxs)(s.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u6211\u4eec ",(0,d.jsx)(s.strong,{children:"\u63a8\u8350\u4f7f\u7528"})," ",(0,d.jsx)(s.code,{children:"dao/do/entity"})," \u7684\u65b9\u5f0f\u64cd\u4f5c\u6570\u636e\u5e93\uff0c ",(0,d.jsx)(s.strong,{children:"\u8fd9\u4e9b\u6587\u4ef6\u90fd\u662f\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u81ea\u52a8\u751f\u6210\u7684\uff0c\u7531\u5f00\u53d1\u5de5\u5177\u7edf\u4e00\u7ef4\u62a4"}),"\u3002"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(43929).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsxs)(s.p,{children:["\u4ee3\u7801\u751f\u6210\u65b9\u5f0f\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"make dao"})," \u547d\u4ee4\uff0c\u6216\u8005 ",(0,d.jsx)(s.code,{children:"gf gen dao"})," \u547d\u4ee4\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsxs)(s.p,{children:["\u5173\u4e8e\u6570\u636e\u5e93\u75db\u70b9\u53ca\u8bbe\u8ba1\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E6%A1%86%E6%9E%B6%E8%AE%BE%E8%AE%A1/%E5%B7%A5%E7%A8%8B%E5%BC%80%E5%8F%91%E8%AE%BE%E8%AE%A1/DAO%E5%B0%81%E8%A3%85%E8%AE%BE%E8%AE%A1/DAO%E5%B0%81%E8%A3%85%E8%AE%BE%E8%AE%A1",children:"DAO\u5c01\u88c5\u8bbe\u8ba1"}),"\uff0c\u5173\u4e8e\u6570\u636e\u5e93\u4ee3\u7801\u6587\u4ef6\u751f\u6210\u5de5\u5177\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a [\u6570\u636e\u89c4\u8303-gen dao](/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u89c4\u8303-gen dao)"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(75277).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"6\u4e1a\u52a1\u6a21\u578b",children:"6\u3001\u4e1a\u52a1\u6a21\u578b"}),"\n",(0,d.jsxs)(s.p,{children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\u5185\u90e8 ",(0,d.jsx)(s.strong,{children:"\u6a21\u5757\u95f4\u4ea4\u4e92\u7684\u6570\u636e\u7ed3\u6784"})," \u7531 ",(0,d.jsx)(s.code,{children:"model"})," \u5305\u7ef4\u62a4\uff0c\u4f9b\u5168\u5c40\u8bbf\u95ee\u3002\u66f4\u591a\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E6%A1%86%E6%9E%B6%E8%AE%BE%E8%AE%A1/%E5%B7%A5%E7%A8%8B%E5%BC%80%E5%8F%91%E8%AE%BE%E8%AE%A1/%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%E4%B8%8E%E4%B8%9A%E5%8A%A1%E6%A8%A1%E5%9E%8B",children:"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b"})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(72111).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"7\u670d\u52a1\u63a5\u53e3",children:"7\u3001\u670d\u52a1\u63a5\u53e3"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"\u4e3a\u4e86\u964d\u4f4e\u4e1a\u52a1\u9879\u76ee\u5185\u90e8\u6a21\u5757\u95f4\u7684\u8026\u5408\uff0c\u6846\u67b6\u5c06\u6a21\u5757\u95f4\u7684\u4f9d\u8d56\u62bd\u8c61\u4e3a\u4e86\u63a5\u53e3"}),"\uff0c\u7531 ",(0,d.jsx)(s.code,{children:"internal/service"})," \u5305\u7ef4\u62a4\u3002 ",(0,d.jsx)(s.code,{children:"internal/service"})," \u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u7ef4\u62a4\u63a5\u53e3\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"internal/logic"})," \u4e1a\u52a1\u5c01\u88c5\u7684\u4ee3\u7801\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u81ea\u52a8\u751f\u6210\u63a5\u53e3\u4ee3\u7801\u6587\u4ef6\u3002\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a [\u6a21\u5757\u89c4\u8303-gen service](/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6a21\u5757\u89c4\u8303-gen service)"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(12306).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h2,{id:"8\u4e1a\u52a1\u5b9e\u73b0",children:"8\u3001\u4e1a\u52a1\u5b9e\u73b0"}),"\n",(0,d.jsxs)(s.p,{children:["\u4e1a\u52a1\u7684\u5177\u4f53\u5b9e\u73b0\u7531 ",(0,d.jsx)(s.code,{children:"internal/logic"})," \u5305\u7ef4\u62a4\uff0c\u901a\u8fc7\u4f9d\u8d56\u6ce8\u5165\u7684\u65b9\u5f0f\u6ce8\u518c\u5177\u4f53\u7684\u5b9e\u73b0\u5bf9\u8c61\u5230 ",(0,d.jsx)(s.code,{children:"internal/service"})," \u5305\u4e0b\u3002"]}),"\n",(0,d.jsx)(s.h3,{id:"1\u4f9d\u8d56\u6ce8\u5165",children:"1\uff09\u4f9d\u8d56\u6ce8\u5165"}),"\n",(0,d.jsxs)(s.p,{children:["\u4e1a\u52a1\u5b9e\u73b0\u7684\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528\u7684\u662f\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5 ",(0,d.jsx)(s.code,{children:"init"}),"\uff0c\u5728\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5\u5185\u90e8\u4f7f\u7528 ",(0,d.jsx)(s.code,{children:"service.RegisterXxx"})," \u7684\u65b9\u5f0f\u6ce8\u5165\u5177\u4f53\u7684\u63a5\u53e3\u5b9e\u73b0\u5bf9\u8c61\u3002"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(95554).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h3,{id:"2\u589e\u52a0\u5f15\u5165\u4ec5\u4e00\u6b21",children:"2\uff09\u589e\u52a0\u5f15\u5165\uff08\u4ec5\u4e00\u6b21\uff09"}),"\n",(0,d.jsxs)(s.p,{children:["\u533f\u540d\u5305\u521d\u59cb\u5316\u65b9\u6cd5\u9700\u8981\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"import"})," \u65b9\u5f0f\u5f15\u5165\uff0c\u8be5\u5f15\u5165\u7528\u4e8e\u5c06\u4e1a\u52a1\u903b\u8f91\u5177\u4f53\u5b9e\u73b0\u6ce8\u518c\u5230 ",(0,d.jsx)(s.code,{children:"internal/service"})," \u4e0b\u3002\u8fd9\u79cd\u4f9d\u8d56\u5f80\u5f80\u9700\u8981\u5728 ",(0,d.jsx)(s.code,{children:"main.go"})," \u4e2d\u9876\u90e8\u5f15\u5165\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u9700\u8981\u6ce8\u610f\uff0c\u5728\u901a\u8fc7\u6846\u67b6\u5f00\u53d1\u5de5\u5177\u81ea\u52a8\u751f\u6210 ",(0,d.jsx)(s.code,{children:"service"})," \u5c42\u63a5\u53e3\u6587\u4ef6\u65f6\uff0c\u5f00\u53d1\u5de5\u5177\u540c\u65f6\u4e5f\u4f1a\u81ea\u52a8\u66f4\u65b0\u6700\u5916\u5c42\u7684 ",(0,d.jsx)(s.code,{children:"main.go"}),"\uff0c\u81ea\u52a8\u589e\u52a0 ",(0,d.jsx)(s.code,{children:"logic"})," \u5f15\u5165\uff0c\u65e0\u9700\u5f00\u53d1\u8005\u64cd\u5fc3\u3002"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{src:n(42964).Z+"",width:"3072",height:"1750"})}),"\n",(0,d.jsx)(s.h1,{id:"\u4e09\u4ee3\u7801\u751f\u6210",children:"\u4e09\u3001\u4ee3\u7801\u751f\u6210"}),"\n",(0,d.jsx)(s.p,{children:"\u6846\u67b6\u7684\u76ee\u7684\u662f\u8ba9\u5f00\u53d1\u8005\u5c06\u7cbe\u529b\u805a\u7126\u4e8e\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u672c\u8eab\u3002\u5728\u5f00\u53d1\u4e1a\u52a1\u9879\u76ee\u65f6\uff0c\u975e\u4e1a\u52a1\u76f8\u5173\u7684\u5197\u4f59\u4ee3\u7801\u90fd\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1\u5de5\u5177\u751f\u6210\uff0c\u4f8b\u5982\u4ee5\u4e0b\u5c42\u7ea7\u4ee3\u7801\uff1a"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"controller"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"dao/entity/do"})}),"\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.code,{children:"service"})}),"\n"]}),"\n",(0,d.jsxs)(s.p,{children:["\u66f4\u8be6\u7ec6\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\u5f00\u53d1\u5de5\u5177\u7ae0\u8282\uff1a ",(0,d.jsx)(s.a,{href:"/docs/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90-gen",children:"\u4ee3\u7801\u751f\u6210-gen(\ud83d\udd25\u91cd\u70b9\ud83d\udd25)"})]}),"\n",(0,d.jsx)(s.h1,{id:"\u56db\u63a5\u53e3\u6d4b\u8bd5",children:"\u56db\u3001\u63a5\u53e3\u6d4b\u8bd5"}),"\n",(0,d.jsxs)(s.p,{children:["\u6211\u4eec\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"curl"})," \u547d\u4ee4\u6765\u5bf9\u5176\u4e2d\u4e24\u4e2a\u63a5\u53e3\u6267\u884c\u7b80\u5355\u7684\u6d4b\u8bd5\u3002"]}),"\n",(0,d.jsxs)(s.h2,{id:"1\u7528\u6237\u6ce8\u518c---usersignup",children:["1\u3001\u7528\u6237\u6ce8\u518c - ",(0,d.jsx)(s.code,{children:"/user/signup"})]}),"\n",(0,d.jsxs)(s.p,{children:["\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7 ",(0,d.jsx)(s.code,{children:"test001"}),"\uff0c\u6635\u79f0\u4e3a ",(0,d.jsx)(s.code,{children:"john"}),"\uff0c\u5bc6\u7801\u4e3a ",(0,d.jsx)(s.code,{children:"123456"}),"\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"curl -d 'nickname=john&passport=test001&password=123456&password2=123456' http://127.0.0.1:8199/user/sign-up\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'{"code":0,"message":"","data":null}\n'})}),"\n",(0,d.jsx)(s.p,{children:"\u6211\u4eec\u518d\u6b21\u4f7f\u7528\u521a\u624d\u7684\u4fe1\u606f\u6ce8\u518c\u4e00\u6b21\u8bd5\u8bd5\u3002"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"curl -d 'nickname=john&passport=test001&password=123456&password2=123456' http://127.0.0.1:8199/user/sign-up\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'{"code":50,"message":"Passport \\"test001\\" is already token by others","data":null}\n'})}),"\n",(0,d.jsx)(s.p,{children:"\u53ef\u4ee5\u770b\u5230\u6ce8\u518c\u5931\u8d25\u4e86\uff0c\u76f8\u540c\u540d\u79f0\u53ea\u80fd\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7\u3002"}),"\n",(0,d.jsxs)(s.h2,{id:"2\u7528\u6237\u767b\u5f55---usersignin",children:["2\u3001\u7528\u6237\u767b\u5f55 - ",(0,d.jsx)(s.code,{children:"/user/signin"})]}),"\n",(0,d.jsx)(s.p,{children:"\u6211\u4eec\u5148\u8bbf\u95ee\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u7684\u63a5\u53e3\uff0c\u9a8c\u8bc1\u9274\u6743\u4e2d\u95f4\u4ef6\u662f\u5426\u751f\u6548\u3002"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"curl http://127.0.0.1:8199/user/profile\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"Forbidden\n"})}),"\n",(0,d.jsx)(s.p,{children:"\u6211\u4eec\u7528\u521a\u624d\u6ce8\u518c\u7684\u8d26\u53f7\u767b\u5f55\u3002"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"curl -i -d 'passport=test001&password=123456' http://127.0.0.1:8199/user/sign-in\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'HTTP/1.1 200 OK\nAccess-Control-Allow-Credentials: true\nAccess-Control-Allow-Headers: Origin,Content-Type,Accept,User-Agent,Cookie,Authorization,X-Auth-Token,X-Requested-With\nAccess-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,HEAD,CONNECT,OPTIONS,TRACE\nAccess-Control-Allow-Origin: *\nAccess-Control-Max-Age: 3628800\nContent-Type: application/json\nServer: GoFrame HTTP Server\nSet-Cookie: gfsessionid=14sc9nep0u6yl0cieluexn0n0w2008q7; Path=/; Expires=Wed, 09 Mar 2022 15:52:44 GMT; SameSite\nTrace-Id: 4830f6adbb72da16f34b7162f93080d8\nDate: Tue, 08 Mar 2022 15:52:44 GMT\nContent-Length: 35\n\n{"code":0,"message":"","data":null}\n'})}),"\n",(0,d.jsxs)(s.p,{children:["\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,d.jsx)(s.code,{children:"-i"})," \u9009\u9879\u7528\u4e8e\u7ec8\u7aef\u6253\u5370\u51fa\u670d\u52a1\u7aef\u8fd4\u56de\u7684 ",(0,d.jsx)(s.code,{children:"Header"})," \u4fe1\u606f\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u83b7\u53d6 ",(0,d.jsx)(s.code,{children:"sessionid"}),"\u3002 ",(0,d.jsx)(s.code,{children:"GF"})," \u6846\u67b6\u9ed8\u8ba4\u7684 ",(0,d.jsx)(s.code,{children:"sessionid"})," \u540d\u79f0\u4e3a ",(0,d.jsx)(s.code,{children:"gfsessionid"}),"\uff0c\u6211\u4eec\u770b\u5230\u8fd4\u56de\u7684 ",(0,d.jsx)(s.code,{children:"Header"})," \u4e2d\u5df2\u7ecf\u6709\u4e86\uff0c\u5e76\u4e14\u662f\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"Cookie"})," \u65b9\u5f0f\u8fd4\u56de\u7684\u3002"]}),"\n",(0,d.jsxs)(s.p,{children:["\u968f\u540e\u6211\u4eec\u518d\u6b21\u8bbf\u95ee\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u63a5\u53e3\uff0c\u5e76\u4e14\u8fd9\u6b21\u63d0\u4ea4 ",(0,d.jsx)(s.code,{children:"gfsessionid"}),"\uff0c\u8be5\u4fe1\u606f\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"Header"})," \u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,d.jsx)(s.code,{children:"Cookie"})," \u63d0\u4ea4\uff0c\u670d\u52a1\u7aef\u90fd\u662f\u80fd\u591f\u81ea\u52a8\u8bc6\u522b\u7684\u3002"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"curl -H 'gfsessionid:14sc9nep0u6yl0cieluexn0n0w2008q7' http://127.0.0.1:8199/user/profile\n"})}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:'{"code":0,"message":"","data":{"id":1,"passport":"test001","password":"123456","nickname":"john","createAt":"2022-03-08 23:51:40","updateAt":"2022-03-08 23:51:40"}}\n'})}),"\n",(0,d.jsx)(s.h1,{id:"\u4e94\u66f4\u591a\u793a\u4f8b",children:"\u4e94\u3001\u66f4\u591a\u793a\u4f8b"}),"\n",(0,d.jsxs)(s.p,{children:["\u6211\u4eec\u63d0\u4f9b\u4e86\u53e6\u4e00\u4e2a\u8f83\u4e3a\u5b8c\u6574\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u611f\u5174\u8da3\u53ef\u4ee5\u7814\u7a76\u4e00\u4e0b\u6e90\u7801\uff1a ",(0,d.jsx)(s.a,{href:"https://github.com/gogf/focus-single",children:"https://github.com/gogf/focus-single"})]})]})}function a(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},54857:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-11-18-087ac89a1515f033b8a3a643d4e62095.png"},43929:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-14-19-beb615cf8df862d47a2adc249009429c.png"},75277:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-17-4-017a8a0e8cebd0d4311b93d297ef431d.png"},67315:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-19-52-0657b45295fd0734470bc79187ee3839.png"},13680:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-21-51-821c399031727a78193e302c8916ebf4.png"},72111:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-24-17-77db7adf247833c9fe6c8478226fe58d.png"},12306:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-25-34-655b53debd6dffb2104b421565e2eae6.png"},42964:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-29-37-5c429ccd1e7dfb1a623b4a8f838c97bd.png"},22287:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-3-49-6016f5532c6c67548863d1af0c08904a.png"},95554:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-30-59-2a734eac0fa7d32fa44ca3108c1499b2.png"},3599:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-7-42-0f4cd3ece8ec4be365c7d7bcc7178470.png"},30537:(e,s,n)=>{n.d(s,{Z:()=>d});const d=n.p+"assets/images/image2022-8-22_22-9-48-637a8852aa501d69c9ea8ee01e94266a.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var d=n(67294);const c={},i=d.createContext(c);function r(e){const s=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),d.createElement(i.Provider,{value:s},e.children)}}}]);