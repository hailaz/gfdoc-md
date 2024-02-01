"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[73912],{23946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=t(85893),r=t(11151);const c={title:"\u534f\u8bae\u7f16\u8bd1-gen pb"},s="\u57fa\u672c\u4ecb\u7ecd",d={id:"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u534f\u8bae\u7f16\u8bd1-gen pb",title:"\u534f\u8bae\u7f16\u8bd1-gen pb",description:"\u8be5\u529f\u80fd\u7279\u6027\u4ece v2.4 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002",source:"@site/docs/3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/4-\u534f\u8bae\u7f16\u8bd1-gen pb.md",sourceDirName:"3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen",slug:"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u534f\u8bae\u7f16\u8bd1-gen pb",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u534f\u8bae\u7f16\u8bd1-gen pb",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/4-\u534f\u8bae\u7f16\u8bd1-gen pb.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u534f\u8bae\u7f16\u8bd1-gen pb"},sidebar:"tutorialSidebar",previous:{title:"\u679a\u4e3e\u7ef4\u62a4-gen enums",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u679a\u4e3e\u7ef4\u62a4-gen enums"},next:{title:"\u6570\u636e\u8868PB-gen pbentity",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u8868PB-gen pbentity"}},i={},l=[];function p(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u8be5\u529f\u80fd\u7279\u6027\u4ece ",(0,o.jsx)(n.code,{children:"v2.4"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,o.jsx)(n.h1,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u7528\u4e8e\u7f16\u8bd1 ",(0,o.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\uff0c\u751f\u6210\u5bf9\u5e94\u7684 ",(0,o.jsx)(n.code,{children:"protobuf go"})," \u6587\u4ef6\u4ee5\u53ca\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u6587\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.h1,{id:"\u547d\u4ee4\u4f7f\u7528",children:"\u547d\u4ee4\u4f7f\u7528"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ gf gen pb -h\nUSAGE\n    gf gen pb [OPTION]\n\nOPTION\n    -p, --path   protobuf file folder path\n    -a, --api    output folder path storing generated go files of api\n    -c, --ctrl   output folder path storing generated go files of controller\n    -h, --help   more information about this command\n\nEXAMPLE\n    gf gen pb\n    gf gen pb -p . -a . -p .\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528\u6846\u67b6\u63a8\u8350\u7684\u9879\u76ee\u5de5\u7a0b\u811a\u624b\u67b6\uff0c\u5e76\u4e14\u7cfb\u7edf\u5b89\u88c5\u4e86 ",(0,o.jsx)(n.code,{children:"make"})," \u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"make pb"})," \u5feb\u6377\u6307\u4ee4\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:["\u540d\u79f0\u5fc5\u987b\u9ed8\u8ba4\u503c\u542b\u4e49",(0,o.jsx)(n.code,{children:"path"}),"\u5426",(0,o.jsx)(n.code,{children:"manifest/protobuf"}),"\u6307\u5411 ",(0,o.jsx)(n.code,{children:"proto"})," \u534f\u8bae\u5b9a\u4e49\u6587\u4ef6",(0,o.jsx)(n.code,{children:"api"}),"\u5426",(0,o.jsx)(n.code,{children:"api"}),"\u6307\u5411\u751f\u6210\u7684\u63a5\u53e3\u6587\u4ef6\u5b58\u653e\u76ee\u5f55",(0,o.jsx)(n.code,{children:"ctrl"}),"\u5426",(0,o.jsx)(n.code,{children:"internal/controller"}),"\u6307\u5411\u751f\u6210\u7684\u63a7\u5236\u5668\u6587\u4ef6\u5b58\u653e\u76ee\u5f55"]}),"\n",(0,o.jsx)(n.h1,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5728\u751f\u6210\u63a7\u5236\u5668\u6587\u4ef6\u65f6\uff0c\u4f1a\u81ea\u52a8\u8bc6\u522b\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u5bf9\u5e94\u7684\u63a5\u53e3\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u5219\u4e0d\u518d\u91cd\u590d\u751f\u6210\u5bf9\u5e94\u7684\u63a5\u53e3\u65b9\u6cd5\uff0c\u9632\u6b62\u8986\u76d6\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u5982\u679c\u5728 ",(0,o.jsx)(n.code,{children:"proto"})," \u76ee\u5f55\u6267\u884c\u8be5\u547d\u4ee4\uff0c\u5e76\u4e14\u6307\u5b9a\u7684 ",(0,o.jsx)(n.code,{children:"path"})," \u76ee\u5f55\u4e0d\u5b58\u5728\u65f6\uff0c\u90a3\u4e48\u5c06\u4f1a\u81ea\u52a8\u7f16\u8bd1\u672c\u5730 ",(0,o.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\uff0c\u4e14\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u751f\u6210\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u5e76\u81ea\u52a8\u5173\u95ed\u63a7\u5236\u5668\u6587\u4ef6\u7684\u751f\u6210\u529f\u80fd\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var o=t(67294);const r={},c=o.createContext(r);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);