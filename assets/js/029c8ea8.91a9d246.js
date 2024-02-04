"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[4111],{42050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const r={title:"SameSite \u8bbe\u7f6e"},o="SameSite \u4ecb\u7ecd",c={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",title:"SameSite \u8bbe\u7f6e",description:"\u53c2\u8003\u6587\u6863",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/10-SameSite \u8bbe\u7f6e.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/SameSite \u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/10-SameSite \u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SameSite \u8bbe\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"PProf\u670d\u52a1\u6027\u80fd\u5206\u6790",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/PProf\u670d\u52a1\u6027\u80fd\u5206\u6790"},next:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6027\u80fd\u6d4b\u8bd5"}},a={},d=[{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2},{value:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"samesite-\u4ecb\u7ecd",children:"SameSite \u4ecb\u7ecd"}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u8003\u6587\u6863",children:"\u53c2\u8003\u6587\u6863"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/samesite-cookies-explained/",children:"https://web.dev/samesite-cookies-explained/"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/samesite-cookie-recipes/",children:"https://web.dev/samesite-cookie-recipes/"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://web.dev/schemeful-samesite/",children:"https://web.dev/schemeful-samesite/"})}),"\n",(0,s.jsx)(t.h2,{id:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42",children:"chrome89\u5f00\u59cb\u534f\u8bae\u4e0d\u540c\u4e5f\u5c5e\u4e8e\u8de8\u7ad9\u8bf7\u6c42"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.chromestatus.com/feature/5096179480133632",children:"https://www.chromestatus.com/feature/5096179480133632"})}),"\n",(0,s.jsx)(t.h1,{id:"\u5982\u4f55\u8bbe\u7f6e",children:"\u5982\u4f55\u8bbe\u7f6e\uff1f"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'func main() {\n\ts := g.Server()\n\ts.BindHandler("/", func(r *ghttp.Request) {\n\t\tr.Cookie.SetHttpCookie(&http.Cookie{\n\t\t\tName:     "test",\n\t\t\tValue:    "1234",\n\t\t\tSecure:   true,\n\t\t\tSameSite: http.SameSiteNoneMode,// \u81ea\u5b9a\u4e49samesite\uff0c\u914d\u5408secure\u4e00\u8d77\u4f7f\u7528\n\t\t})\n\t})\n\ts.SetAddr("127.0.0.1:8080")\n\ts.Run()\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);