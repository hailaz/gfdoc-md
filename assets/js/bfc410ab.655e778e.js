"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[69562],{3787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=t(85893),o=t(11151);const r={},c="SetTimeZone \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",s={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",title:"SetTimeZone \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",description:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime/3-\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime/3-\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65f6\u95f4\u7ba1\u7406-\u5de5\u5177\u65b9\u6cd5",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u5de5\u5177\u65b9\u6cd5"},next:{title:"\u65f6\u95f4\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}},d={},m=[{value:"<code>SetTimeZone</code> \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",level:2},{value:"\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c <code>time</code> \u5305\u521d\u59cb\u5316\u95ee\u9898",id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"settimezone-\u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",children:[(0,i.jsx)(n.code,{children:"SetTimeZone"})," \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\t// \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n\terr := gtime.SetTimeZone("Asia/Tokyo")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now().String())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now().String())\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2023-01-06 15:27:38\n2023-01-06 15:27:38.753909 +0900 JST m=+0.002758145\n"})}),"\n",(0,i.jsx)(n.h1,{id:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879",children:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.h2,{id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",children:[(0,i.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u53ea\u5141\u8bb8\u5168\u5c40\u8bbe\u7f6e\u4e00\u6b21\u65f6\u533a\uff0c\u5982\u679c\u591a\u6b21\u8c03\u7528\uff0c\u5e76\u4e14\u8bbe\u7f6e\u7684\u65f6\u533a\u4e0d\u4e00\u6837\uff0c\u540e\u7eed\u8c03\u7528\u5c06\u4f1a\u5931\u8d25\uff0c\u5e76\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"error"}),"\u3002"]}),"\n",(0,i.jsxs)(n.h2,{id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c ",(0,i.jsx)(n.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u95ee\u9898"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7a0b\u5e8f\u65f6\u533a\u7684\u5168\u5c40\u8bbe\u7f6e\u5fc5\u987b\u8981\u5728\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"time"})," \u5305 ",(0,i.jsx)(n.code,{children:"import"})," \u4e4b\u524d\u8c03\u7528\uff0c\u56e0\u4e3a\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(n.code,{children:"time"})," \u5305\u5728 ",(0,i.jsx)(n.code,{children:"import"})," \u65f6\u4f1a\u6267\u884c\u521d\u59cb\u5316\uff0c\u4e4b\u540e\u65e0\u6cd5\u518d\u5168\u5c40\u4fee\u6539\u7a0b\u5e8f\u65f6\u533a\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"ToLocation"})," \u65b9\u6cd5\uff08\u6216\u8005\u6807\u51c6\u5e93 ",(0,i.jsx)(n.code,{children:"In"})," \u65b9\u6cd5\uff09\u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\u3002\u5bf9\u65f6\u95f4\u5bf9\u8c61\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ToLocation"})," \u8f6c\u6362\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\t// \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n\terr := gtime.SetTimeZone("Asia/Tokyo")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now())\n\n\t// \u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\n\tlocal, err := time.LoadLocation("Asia/Shanghai")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(gtime.Now().ToLocation(local))\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2023-01-06 15:37:38\n2023-01-06 15:37:38.753909 +0900 JST m=+0.002758145\n2023-01-06 14:37:38\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u5f80\u5f80\u5728 ",(0,i.jsx)(n.code,{children:"main"})," \u5305\u4e4b\u524d\u4f1a\u6709\u5f88\u591a\u4e1a\u52a1\u7684\u5305 ",(0,i.jsx)(n.code,{children:"import"}),"\uff0c\u4f1a\u5f15\u8d77 ",(0,i.jsx)(n.code,{children:"time"})," \u5305\u7684\u521d\u59cb\u5316\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u5168\u5c40\u8bbe\u7f6e\u65f6\u533a\uff0c\u5efa\u8bae\u901a\u8fc7\u4e00\u4e2a\u72ec\u7acb\u7684\u5305\u6765\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"SetTimeZone"})," \u65b9\u6cd5\uff0c\u5e76\u4e14\u5728 ",(0,i.jsx)(n.code,{children:"main"})," \u5305\u7684\u6700\u5f00\u5934\u6267\u884c ",(0,i.jsx)(n.code,{children:"import"})," \u89c4\u907f ",(0,i.jsx)(n.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsxs)(n.p,{children:["\u76f8\u5173\u53c2\u8003\u94fe\u63a5\uff1a ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang",children:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n    _ "boot/time"\n\n    "fmt"\n\t"time"\n)\n\nfunc main() {\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now().String())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now().String())\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var i=t(67294);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);