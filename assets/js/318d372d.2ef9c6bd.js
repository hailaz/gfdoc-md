"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[11004],{50246:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=e(85893),r=e(11151);const a={},i="\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",o={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",title:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",description:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/6-\u6570\u636e\u6821\u9a8c/3-\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/2-\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/0-Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/6-\u6570\u636e\u6821\u9a8c/3-\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/2-\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-\u6838\u5fc3\u7ec4\u4ef6/6-\u6570\u636e\u6821\u9a8c/3-\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/2-\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/0-Map\u6821\u9a8c-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u76f8\u5173\u6587\u6863",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/"},next:{title:"\u57fa\u672c\u4ecb\u7ecd",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u6821\u9a8c/\u6570\u636e\u6821\u9a8c-\u53c2\u6570\u7c7b\u578b/\u6570\u636e\u6821\u9a8c-Map\u6821\u9a8c/Map\u6821\u9a8c-\u6821\u9a8c\u987a\u5e8f\u6027"}},p={},c=[];function d(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a",children:"\u9ed8\u8ba4\u9519\u8bef\u63d0\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx    = gctx.New()\n\t\tparams = map[string]interface{}{\n\t\t\t"passport":  "",\n\t\t\t"password":  "123456",\n\t\t\t"password2": "1234567",\n\t\t}\n\t\trules = map[string]string{\n\t\t\t"passport":  "required|length:6,16",\n\t\t\t"password":  "required|length:6,16|same:password2",\n\t\t\t"password2": "required|length:6,16",\n\t\t}\n\t)\n\terr := g.Validator().Rules(rules).Data(params).Run(ctx)\n\tif err != nil {\n\t\tg.Dump(err.Maps())\n\t}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "passport": {\n        "required": "The passport field is required",\n        "length":   "The passport value `` length must be between 6 and 16",\n    },\n    "password": {\n        "same": "The password value `123456` must be the same as field password2",\n    },\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a",children:"\u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx    = gctx.New()\n\t\tparams = map[string]interface{}{\n\t\t\t"passport":  "",\n\t\t\t"password":  "123456",\n\t\t\t"password2": "1234567",\n\t\t}\n\t\trules = map[string]string{\n\t\t\t"passport":  "required|length:6,16",\n\t\t\t"password":  "required|length:6,16|same:password2",\n\t\t\t"password2": "required|length:6,16",\n\t\t}\n\t\tmessages = map[string]interface{}{\n\t\t\t"passport": "\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a|\u8d26\u53f7\u957f\u5ea6\u5e94\u5f53\u5728{min}\u5230{max}\u4e4b\u95f4",\n\t\t\t"password": map[string]string{\n\t\t\t\t"required": "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",\n\t\t\t\t"same":     "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u76f8\u7b49",\n\t\t\t},\n\t\t}\n\t)\n\n\terr := g.Validator().Messages(messages).Rules(rules).Data(params).Run(ctx)\n\tif err != nil {\n\t\tg.Dump(err.Maps())\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u793a\u4f8b\u540c\u65f6\u4e5f\u5c55\u793a\u4e86 ",(0,s.jsx)(n.code,{children:"messsages"})," \u81ea\u5b9a\u4e49\u9519\u8bef\u4fe1\u606f\u4f20\u9012\u7684\u4e24\u79cd\u6570\u636e\u7c7b\u578b\uff0c ",(0,s.jsx)(n.code,{children:"string"})," \u6216\u8005 ",(0,s.jsx)(n.code,{children:"map[string]string"}),"\u3002\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"map[string]string"})," \u7c7b\u578b\u53c2\u6570\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u5b57\u6bb5\u3001\u5bf9\u5e94\u89c4\u5219\u7684\u9519\u8bef\u63d0\u793a\u4fe1\u606f\uff0c\u662f\u4e00\u4e2a\u4e8c\u7ef4\u7684\u201c\u5173\u8054\u6570\u7ec4\u201d\u3002\u8be5\u793a\u4f8b\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "passport": {\n            "length": "\u8d26\u53f7\u957f\u5ea6\u5e94\u5f53\u57286\u523016\u4e4b\u95f4",\n            "required": "\u8d26\u53f7\u4e0d\u80fd\u4e3a\u7a7a"\n    },\n    "password": {\n            "same": "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u76f8\u7b49"\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e0\u6807\u7b7e"}),"\n"]})]})}function l(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>o,a:()=>i});var s=e(67294);const r={},a=s.createContext(r);function i(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);