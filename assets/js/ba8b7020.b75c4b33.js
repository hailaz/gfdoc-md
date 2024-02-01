"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[19728],{87913:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=o(85893),r=o(11151);const i={title:"\u6846\u67b6\u5347\u7ea7-up"},d="\u4f7f\u7528\u65b9\u5f0f",c={id:"\u5f00\u53d1\u5de5\u5177/\u6846\u67b6\u5347\u7ea7-up",title:"\u6846\u67b6\u5347\u7ea7-up",description:"\u8be5\u547d\u4ee4\u4ece\u6846\u67b6 v2.3 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002",source:"@site/docs/3-\u5f00\u53d1\u5de5\u5177/2-\u6846\u67b6\u5347\u7ea7-up.md",sourceDirName:"3-\u5f00\u53d1\u5de5\u5177",slug:"/\u5f00\u53d1\u5de5\u5177/\u6846\u67b6\u5347\u7ea7-up",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u6846\u67b6\u5347\u7ea7-up",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-\u5f00\u53d1\u5de5\u5177/2-\u6846\u67b6\u5347\u7ea7-up.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6846\u67b6\u5347\u7ea7-up"},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u67e5\u770b-version",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u7248\u672c\u67e5\u770b-version"},next:{title:"\u9879\u76ee\u521b\u5efa-init",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u9879\u76ee\u521b\u5efa-init"}},g={},s=[];function a(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u4ece\u6846\u67b6 ",(0,t.jsx)(n.code,{children:"v2.3"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,t.jsx)(n.h1,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ gf up -h\nUSAGE\n    gf up [OPTION]\n\nOPTION\n    -a, --all    upgrade both version and cli, auto fix codes\n    -c, --cli    also upgrade CLI tool\n    -f, --fix    auto fix codes(it only make sense if cli is to be upgraded)\n    -h, --help   more information about this command\n\nEXAMPLE\n    gf up\n    gf up -a\n    gf up -c\n    gf up -cf\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4ee5\u5b9e\u73b0\u7248\u672c\u66f4\u65b0\uff0c\u540c\u65f6\u66f4\u65b0\u4e3b\u6846\u67b6\u7248\u672c\u3001\u793e\u533a\u7ec4\u4ef6\u7248\u672c\u5230\u6700\u65b0\u7248\u672c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9009\u9879\u8bf4\u660e\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u540d\u79f0\u542b\u4e49",(0,t.jsx)(n.code,{children:"all"}),"\u540c\u65f6\u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"cli"})," \u5de5\u5177\u7248\u672c\uff0c\u5e76\u4e14\u81ea\u52a8\u4fee\u590d\u672c\u5730\u4ee3\u7801\u5728\u5347\u7ea7\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",(0,t.jsx)(n.code,{children:"fix"}),"\u5347\u7ea7\u65f6\u81ea\u52a8\u4fee\u590d\u672c\u5730\u4ee3\u7801\u5728\u5347\u7ea7\u4e2d\u7684\u4e0d\u517c\u5bb9\u53d8\u66f4",(0,t.jsx)(n.code,{children:"cli"}),"\u5347\u7ea7\u65f6\u540c\u65f6\u66f4\u65b0 ",(0,t.jsx)(n.code,{children:"cli"})," \u5de5\u5177\u7248\u672c"]}),"\n",(0,t.jsx)(n.h1,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$ gf up -a\nstart upgrading version...\nupgrading "github.com/gogf/gf/contrib/drivers/mysql/v2" from "v2.2.4" to "latest"\ngo: upgraded github.com/BurntSushi/toml v1.1.0 => v1.2.1\ngo: upgraded github.com/cespare/xxhash/v2 v2.1.2 => v2.2.0\ngo: upgraded github.com/clbanning/mxj/v2 v2.5.6 => v2.5.7\ngo: upgraded github.com/fsnotify/fsnotify v1.5.4 => v1.6.0\ngo: upgraded github.com/go-sql-driver/mysql v1.6.0 => v1.7.0\ngo: upgraded github.com/gogf/gf/contrib/drivers/mysql/v2 v2.2.4 => v2.2.6\ngo: upgraded github.com/gogf/gf/v2 v2.2.4 => v2.2.6\ngo: upgraded github.com/magiconair/properties v1.8.6 => v1.8.7\ngo: upgraded github.com/mattn/go-colorable v0.1.12 => v0.1.13\ngo: upgraded github.com/mattn/go-isatty v0.0.14 => v0.0.17\ngo: upgraded github.com/mattn/go-runewidth v0.0.13 => v0.0.14\ngo: upgraded github.com/rivo/uniseg v0.2.0 => v0.4.3\ngo: upgraded go.opentelemetry.io/otel v1.7.0 => v1.11.2\ngo: upgraded go.opentelemetry.io/otel/sdk v1.7.0 => v1.11.2\ngo: upgraded golang.org/x/net v0.0.0-20220621193019-9d032be2e588 => v0.5.0\ngo: upgraded golang.org/x/sys v0.0.0-20220615213510-4f61da869c0c => v0.4.0\ngo: upgraded golang.org/x/text v0.3.8-0.20220509174342-b4bca84b0361 => v0.6.0\ngo: upgraded golang.org/x/tools v0.1.11-0.20220504162446-54c7ba520b92 => v0.1.12\n\nupgrading "github.com/gogf/gf/v2" from "v2.2.4" to "latest"\n\nauto fixing path "/Users/john/Workspace/Go/GOPATH/src/github.com/Khaos/eros"...\ndone!\n'})}),"\n",(0,t.jsx)(n.h1,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.p,{children:["\u547d\u4ee4\u6267\u884c\u524d\u8bf7 ",(0,t.jsx)(n.code,{children:"git"})," \u63d0\u4ea4\u672c\u5730\u4fee\u6539\u5185\u5bb9\u6216\u6267\u884c\u76ee\u5f55\u5907\u4efd\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>d});var t=o(67294);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);