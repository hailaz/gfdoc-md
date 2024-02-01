"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[51631],{22196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=t(85893),i=t(11151);const c={title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType"},d="\u793a\u4f8b1\uff0c\u63d0\u4ea4 Json \u8bf7\u6c42",r={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType",title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",description:"\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 Content-Type \u8bbe\u7f6e\u4e3a application/json\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a Json:",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/4-HTTPClient-\u81ea\u5b9a\u4e49ContentType.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/4-HTTPClient-\u81ea\u5b9a\u4e49ContentType.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType"},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49Header",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Header"},next:{title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",permalink:"/gfdoc-md/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport"}},s={},l=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"\u793a\u4f8b1\u63d0\u4ea4-json-\u8bf7\u6c42",children:["\u793a\u4f8b1\uff0c\u63d0\u4ea4 ",(0,o.jsx)(n.code,{children:"Json"})," \u8bf7\u6c42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'g.Client().ContentJson().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"application/json"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,o.jsx)(n.code,{children:"Json"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"uid":1,"sku_id":10000,"amount":19.99,"create_time":"2020-03-26 12:00:00"}\n'})}),"\n",(0,o.jsxs)(n.h1,{id:"\u793a\u4f8b2\u63d0\u4ea4-xml-\u8bf7\u6c42",children:["\u793a\u4f8b2\uff0c\u63d0\u4ea4 ",(0,o.jsx)(n.code,{children:"Xml"})," \u8bf7\u6c42"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'g.Client().ContentXml().PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u8bf7\u6c42\u5c06\u4f1a\u5c06 ",(0,o.jsx)(n.code,{children:"Content-Type"})," \u8bbe\u7f6e\u4e3a ",(0,o.jsx)(n.code,{children:"application/xml"}),"\uff0c\u5e76\u4e14\u5c06\u63d0\u4ea4\u53c2\u6570\u81ea\u52a8\u7f16\u7801\u4e3a ",(0,o.jsx)(n.code,{children:"Xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"<doc><amount>19.99</amount><create_time>2020-03-26 12:00:00</create_time><sku_id>10000</sku_id><uid>1</uid></doc>\n"})}),"\n",(0,o.jsxs)(n.h1,{id:"\u793a\u4f8b3\u81ea\u5b9a\u4e49-contenttype",children:["\u793a\u4f8b3\uff0c\u81ea\u5b9a\u4e49 ",(0,o.jsx)(n.code,{children:"ContentType"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"ContentType"})," \u65b9\u6cd5\u81ea\u5b9a\u4e49\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,o.jsx)(n.code,{children:"ContentType"}),"\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'g.Client().ContentType("application/json").PostContent(ctx, "http://order.svc/v1/order", g.Map{\n    "uid"         : 1,\n    "sku_id"      : 10000,\n    "amount"      : 19.99,\n    "create_time" : "2020-03-26 12:00:00",\n})\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>d});var o=t(67294);const i={},c=o.createContext(i);function d(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);