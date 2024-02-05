"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[44207],{8550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(85893),i=t(11151);const o={title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"},c=void 0,l={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",description:"\u4ee3\u7406 Proxy \u8bbe\u7f6e",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/7-HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/7-HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"HTTPClient-\u4ee3\u7406Proxy\u8bbe\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370"},next:{title:"HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u62e6\u622a\u5668/\u4e2d\u95f4\u4ef6"}},s={},d=[{value:"\u4ee3\u7406 <code>Proxy</code> \u8bbe\u7f6e",id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",level:2},{value:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",level:2},{value:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",level:2}];function x(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"\u4ee3\u7406-proxy-\u8bbe\u7f6e",children:["\u4ee3\u7406 ",(0,r.jsx)(n.code,{children:"Proxy"})," \u8bbe\u7f6e"]}),"\n",(0,r.jsxs)(n.p,{children:["HTTP\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u5730\u5740 ",(0,r.jsx)(n.code,{children:"proxyURL"}),"\uff0c\u8be5\u8be5\u7279\u6027\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SetProxy*"})," \u76f8\u5173\u65b9\u6cd5\u5b9e\u73b0\u3002\u4ee3\u7406\u4e3b\u8981\u652f\u6301 ",(0,r.jsx)(n.code,{children:"http"})," \u548c ",(0,r.jsx)(n.code,{children:"socks5"})," \u4e24\u79cd\u5f62\u5f0f\uff0c\u5206\u522b\u4e3a ",(0,r.jsx)(n.code,{children:"http://USER:PASSWORD@IP:PORT"})," \u6216 ",(0,r.jsx)(n.code,{children:"socks5://USER:PASSWORD@IP:PORT"})," \u5f62\u5f0f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u65b9\u6cd5\u5217\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"func (c *Client) SetProxy(proxyURL string)\nfunc (c *Client) Proxy(proxyURL string) *Client\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u6765\u770b\u4e0b\u5ba2\u6237\u7aef\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"proxyURL"})," \u7684\u793a\u4f8b\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u666e\u901a\u8c03\u7528\u793a\u4f8b",children:"\u666e\u901a\u8c03\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"SetProxy"})," \u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'client := g.Client()\nclient.SetProxy("http://127.0.0.1:1081")\nclient.SetTimeout(5 * time.Second)\nresponse, err := client.Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nresponse.RawDump()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b",children:"\u94fe\u5f0f\u8c03\u7528\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Proxy"})," \u94fe\u5f0f\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'client := g.Client()\nresponse, err := client.Proxy("http://127.0.0.1:1081").Get(gctx.New(), "https://api.ip.sb/ip")\nif err != nil {\n    fmt.Println(err)\n}\nfmt.Println(response.RawResponse())\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(67294);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);