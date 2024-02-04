"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[69562],{97965:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var i=t(85893),o=t(11151);const c={title:"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e"},r="SetTimeZone \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",d={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",title:"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",description:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime/3-\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/6-\u65f6\u95f4\u7ba1\u7406-gtime/3-\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u65f6\u95f4\u7ba1\u7406-\u65f6\u533a\u8bbe\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u65f6\u95f4\u7ba1\u7406-\u5de5\u5177\u65b9\u6cd5",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u5de5\u5177\u65b9\u6cd5"},next:{title:"\u65f6\u95f4\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/gfdoc-md/docs/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u65f6\u95f4\u7ba1\u7406-gtime/\u65f6\u95f4\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}},s={},m=[{value:"<code>SetTimeZone</code> \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",level:2},{value:"\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c <code>time</code> \u5305\u521d\u59cb\u5316\u95ee\u9898",id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"settimezone-\u8bbe\u7f6e\u5168\u5c40\u65f6\u533a",children:[(0,i.jsx)(e.code,{children:"SetTimeZone"})," \u8bbe\u7f6e\u5168\u5c40\u65f6\u533a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\t// \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n\terr := gtime.SetTimeZone("Asia/Tokyo")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now().String())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now().String())\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2023-01-06 15:27:38\n2023-01-06 15:27:38.753909 +0900 JST m=+0.002758145\n"})}),"\n",(0,i.jsx)(e.h1,{id:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879",children:"\u65f6\u533a\u8bbe\u7f6e\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(e.h2,{id:"settimezone-\u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519",children:[(0,i.jsx)(e.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u591a\u6b21\u8c03\u7528\u62a5\u9519"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"SetTimeZone"})," \u65b9\u6cd5\u53ea\u5141\u8bb8\u5168\u5c40\u8bbe\u7f6e\u4e00\u6b21\u65f6\u533a\uff0c\u5982\u679c\u591a\u6b21\u8c03\u7528\uff0c\u5e76\u4e14\u8bbe\u7f6e\u7684\u65f6\u533a\u4e0d\u4e00\u6837\uff0c\u540e\u7eed\u8c03\u7528\u5c06\u4f1a\u5931\u8d25\uff0c\u5e76\u8fd4\u56de ",(0,i.jsx)(e.code,{children:"error"}),"\u3002"]}),"\n",(0,i.jsxs)(e.h2,{id:"\u4e1a\u52a1\u9879\u76ee\u4e2d-time-\u5305\u521d\u59cb\u5316\u95ee\u9898",children:["\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c ",(0,i.jsx)(e.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u95ee\u9898"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7a0b\u5e8f\u65f6\u533a\u7684\u5168\u5c40\u8bbe\u7f6e\u5fc5\u987b\u8981\u5728\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(e.code,{children:"time"})," \u5305 ",(0,i.jsx)(e.code,{children:"import"})," \u4e4b\u524d\u8c03\u7528\uff0c\u56e0\u4e3a\u6807\u51c6\u5e93\u7684 ",(0,i.jsx)(e.code,{children:"time"})," \u5305\u5728 ",(0,i.jsx)(e.code,{children:"import"})," \u65f6\u4f1a\u6267\u884c\u521d\u59cb\u5316\uff0c\u4e4b\u540e\u65e0\u6cd5\u518d\u5168\u5c40\u4fee\u6539\u7a0b\u5e8f\u65f6\u533a\uff0c\u53ea\u80fd\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"ToLocation"})," \u65b9\u6cd5\uff08\u6216\u8005\u6807\u51c6\u5e93 ",(0,i.jsx)(e.code,{children:"In"})," \u65b9\u6cd5\uff09\u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\u3002\u5bf9\u65f6\u95f4\u5bf9\u8c61\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"ToLocation"})," \u8f6c\u6362\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/v2/os/gtime"\n)\n\nfunc main() {\n\t// \u8bbe\u7f6e\u8fdb\u7a0b\u5168\u5c40\u65f6\u533a\n\terr := gtime.SetTimeZone("Asia/Tokyo")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now())\n\n\t// \u5bf9\u7279\u5b9a\u65f6\u95f4\u5bf9\u8c61\u6267\u884c\u65f6\u533a\u8f6c\u6362\n\tlocal, err := time.LoadLocation("Asia/Shanghai")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(gtime.Now().ToLocation(local))\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2023-01-06 15:37:38\n2023-01-06 15:37:38.753909 +0900 JST m=+0.002758145\n2023-01-06 14:37:38\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\uff0c\u5f80\u5f80\u5728 ",(0,i.jsx)(e.code,{children:"main"})," \u5305\u4e4b\u524d\u4f1a\u6709\u5f88\u591a\u4e1a\u52a1\u7684\u5305 ",(0,i.jsx)(e.code,{children:"import"}),"\uff0c\u4f1a\u5f15\u8d77 ",(0,i.jsx)(e.code,{children:"time"})," \u5305\u7684\u521d\u59cb\u5316\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u5168\u5c40\u8bbe\u7f6e\u65f6\u533a\uff0c\u5efa\u8bae\u901a\u8fc7\u4e00\u4e2a\u72ec\u7acb\u7684\u5305\u6765\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"SetTimeZone"})," \u65b9\u6cd5\uff0c\u5e76\u4e14\u5728 ",(0,i.jsx)(e.code,{children:"main"})," \u5305\u7684\u6700\u5f00\u5934\u6267\u884c ",(0,i.jsx)(e.code,{children:"import"})," \u89c4\u907f ",(0,i.jsx)(e.code,{children:"time"})," \u5305\u521d\u59cb\u5316\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsxs)(e.p,{children:["\u76f8\u5173\u53c2\u8003\u94fe\u63a5\uff1a ",(0,i.jsx)(e.a,{href:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang",children:"https://stackoverflow.com/questions/54363451/setting-timezone-globally-in-golang"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'package main\n\nimport (\n    _ "boot/time"\n\n    "fmt"\n\t"time"\n)\n\nfunc main() {\n\t// \u4f7f\u7528gtime\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(gtime.Now().String())\n\n\t// \u4f7f\u7528\u6807\u51c6\u5e93\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\n\tfmt.Println(time.Now().String())\n}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>d,a:()=>r});var i=t(67294);const o={},c=i.createContext(o);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);