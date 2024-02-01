"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[53760],{88146:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=e(85893),i=e(11151);const c={title:"TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6"},o=void 0,s={id:"\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6",title:"TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6",description:"gtcp \u6a21\u5757\u652f\u6301 TLS \u52a0\u5bc6\u901a\u4fe1\u670d\u52a1\u7aef\u53ca\u5ba2\u6237\u7aef\uff0c\u5728\u5bf9\u5b89\u5168\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\u573a\u666f\u4e2d\u975e\u5e38\u5fc5\u8981\u3002 TLS \u670d\u52a1\u7aef\u521b\u5efa\u53ef\u4ee5\u901a\u8fc7 NewServerTLS \u6216\u8005 NewServerKeyCrt \u65b9\u6cd5\u5b9e\u73b0\u3002 TLS \u5ba2\u6237\u7aef\u521b\u5efa\u53ef\u4ee5\u901a\u8fc7 NewConnKeyCrt \u6216\u8005 NewConnTLS \u65b9\u6cd5\u5b9e\u73b0\u3002",source:"@site/docs/8-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6/2-TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6.md",sourceDirName:"8-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6",slug:"/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6",permalink:"/gfdoc-md/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/8-\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/0-TCP\u7ec4\u4ef6/2-TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"TCP\u7ec4\u4ef6-TLS\u52a0\u5bc6"},sidebar:"tutorialSidebar",previous:{title:"TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5",permalink:"/gfdoc-md/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u5de5\u5177\u65b9\u6cd5"},next:{title:"TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027",permalink:"/gfdoc-md/docs/\u7f51\u7edc\u670d\u52a1\u5f00\u53d1/TCP\u7ec4\u4ef6/TCP\u7ec4\u4ef6-\u8fde\u63a5\u6c60\u7279\u6027"}},d={},l=[];function a(t){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gtcp"})," \u6a21\u5757\u652f\u6301 ",(0,r.jsx)(n.code,{children:"TLS"})," \u52a0\u5bc6\u901a\u4fe1\u670d\u52a1\u7aef\u53ca\u5ba2\u6237\u7aef\uff0c\u5728\u5bf9\u5b89\u5168\u8981\u6c42\u6bd4\u8f83\u9ad8\u7684\u573a\u666f\u4e2d\u975e\u5e38\u5fc5\u8981\u3002 ",(0,r.jsx)(n.code,{children:"TLS"})," \u670d\u52a1\u7aef\u521b\u5efa\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"NewServerTLS"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"NewServerKeyCrt"})," \u65b9\u6cd5\u5b9e\u73b0\u3002 ",(0,r.jsx)(n.code,{children:"TLS"})," \u5ba2\u6237\u7aef\u521b\u5efa\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"NewConnKeyCrt"})," \u6216\u8005 ",(0,r.jsx)(n.code,{children:"NewConnTLS"})," \u65b9\u6cd5\u5b9e\u73b0\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/gogf/gf/v2/tree/master/.example/net/gtcp/tls",children:"https://github.com/gogf/gf/v2/tree/master/.example/net/gtcp/tls"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/gtcp"\n\t"github.com/gogf/gf/v2/util/gconv"\n\t"time"\n)\n\nfunc main() {\n\taddress := "127.0.0.1:8999"\n\tcrtFile := "server.crt"\n\tkeyFile := "server.key"\n\t// TLS Server\n\tgo gtcp.NewServerKeyCrt(address, crtFile, keyFile, func(conn *gtcp.Conn) {\n\t\tdefer conn.Close()\n\t\tfor {\n\t\t\tdata, err := conn.Recv(-1)\n\t\t\tif len(data) > 0 {\n\t\t\t\tfmt.Println(string(data))\n\t\t\t}\n\t\t\tif err != nil {\n\t\t\t\t// if client closes, err will be: EOF\n\t\t\t\tg.Log().Error(err)\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t}).Run()\n\n\ttime.Sleep(time.Second)\n\n\t// Client\n\tconn, err := gtcp.NewConnKeyCrt(address, crtFile, keyFile)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer conn.Close()\n\tfor i := 0; i < 10; i++ {\n\t\tif err := conn.Send([]byte(gconv.String(i))); err != nil {\n\t\t\tg.Log().Error(err)\n\t\t}\n\t\ttime.Sleep(time.Second)\n\t\tif i == 5 {\n\t\t\tconn.Close()\n\t\t\tbreak\n\t\t}\n\t}\n\n\t// exit after 5 seconds\n\ttime.Sleep(5 * time.Second)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5ba2\u6237\u7aef\u6267\u884c\u65f6\u62a5\u9519\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"panic: x509: certificate has expired or is not yet valid\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u662f\u56e0\u4e3a\u6211\u4eec\u7684\u8bc1\u4e66\u662f\u624b\u52a8\u521b\u5efa\u7684\uff0c\u5e76\u4e14\u5df2\u7ecf\u8fc7\u671f\u4e86\uff0c\u4e3a\u4e86\u6f14\u793a\u65b9\u4fbf\uff0c\u6211\u4eec\u5728\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d\u53bb\u6389\u5ba2\u6237\u7aef\u5bf9\u8bc1\u4e66\u7684\u6821\u9a8c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/net/gtcp"\n\t"github.com/gogf/gf/v2/util/gconv"\n\t"time"\n)\n\nfunc main() {\n\taddress := "127.0.0.1:8999"\n\tcrtFile := "server.crt"\n\tkeyFile := "server.key"\n\t// TLS Server\n\tgo gtcp.NewServerKeyCrt(address, crtFile, keyFile, func(conn *gtcp.Conn) {\n\t\tdefer conn.Close()\n\t\tfor {\n\t\t\tdata, err := conn.Recv(-1)\n\t\t\tif len(data) > 0 {\n\t\t\t\tfmt.Println(string(data))\n\t\t\t}\n\t\t\tif err != nil {\n\t\t\t\t// if client closes, err will be: EOF\n\t\t\t\tg.Log().Error(err)\n\t\t\t\tbreak\n\t\t\t}\n\t\t}\n\t}).Run()\n\n\ttime.Sleep(time.Second)\n\n\t// Client\n\ttlsConfig, err := gtcp.LoadKeyCrt(crtFile, keyFile)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\ttlsConfig.InsecureSkipVerify = true\n\n\tconn, err := gtcp.NewConnTLS(address, tlsConfig)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer conn.Close()\n\tfor i := 0; i < 10; i++ {\n\t\tif err := conn.Send([]byte(gconv.String(i))); err != nil {\n\t\t\tg.Log().Error(err)\n\t\t}\n\t\ttime.Sleep(time.Second)\n\t\tif i == 5 {\n\t\t\tconn.Close()\n\t\t\tbreak\n\t\t}\n\t}\n\n\t// exit after 5 seconds\n\ttime.Sleep(5 * time.Second)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"0\n1\n2\n3\n4\n5\n2019-06-05 00:13:12.488 [ERRO] EOF\nStack:\n1. /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf/v2/geg/net/gtcp/tls/gtcp_server_client.go:25\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d\u5ba2\u6237\u7aef\u5728 ",(0,r.jsx)(n.code,{children:"5"})," \u79d2\u540e\u5173\u95ed\u4e86\u8fde\u63a5\uff0c\u56e0\u6b64\u670d\u52a1\u7aef\u5728\u63a5\u6536\u6570\u636e\u65f6\u83b7\u53d6\u5230\u4e86\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"EOF"})," \u9519\u8bef\uff0c\u8fd9\u79cd\u9519\u8bef\u5728\u6b63\u5f0f\u4f7f\u7528\u4e2d\u6211\u4eec\u76f4\u63a5\u5ffd\u7565\uff0c\u62a5\u9519\u65f6\u670d\u52a1\u7aef\u76f4\u63a5\u5173\u95ed\u5ba2\u6237\u7aef\u8fde\u63a5\u5373\u53ef\u3002"]})]})}function g(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(a,{...t})}):a(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>o});var r=e(67294);const i={},c=r.createContext(i);function o(t){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(c.Provider,{value:n},t.children)}}}]);