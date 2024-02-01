"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25347],{35321:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=e(85893),i=e(11151);const c={title:"Redis-\u4f7f\u7528\u793a\u4f8b"},s="Set/Get \u64cd\u4f5c",o={id:"\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",title:"Redis-\u4f7f\u7528\u793a\u4f8b",description:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/1-Redis-\u4f7f\u7528\u793a\u4f8b.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis",slug:"/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u4f7f\u7528\u793a\u4f8b",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/11-NoSQL Redis/1-Redis-\u4f7f\u7528\u793a\u4f8b.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Redis-\u4f7f\u7528\u793a\u4f8b"},sidebar:"tutorialSidebar",previous:{title:"Redis-\u914d\u7f6e\u7ba1\u7406",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u914d\u7f6e\u7ba1\u7406"},next:{title:"Redis-\u547d\u4ee4\u4ea4\u4e92",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/NoSQL Redis/Redis-\u547d\u4ee4\u4ea4\u4e92"}},d={},a=[];function l(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"setget-\u64cd\u4f5c",children:[(0,r.jsx)(t.code,{children:"Set/Get"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\t_, err := g.Redis().Set(ctx, "key", "value")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tvalue, err := g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.String())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"value\n"})}),"\n",(0,r.jsxs)(t.h1,{id:"setex-\u64cd\u4f5c",children:[(0,r.jsx)(t.code,{children:"SetEx"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar ctx = gctx.New()\n\terr := g.Redis().SetEX(ctx, "key", "value", 1)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tvalue, err := g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.IsNil())\n\tfmt.Println(value.String())\n\n\ttime.Sleep(time.Second)\n\n\tvalue, err = g.Redis().Get(ctx, "key")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.IsNil())\n\tfmt.Println(value.Val())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"false\nvalue\ntrue\n<nil>\n"})}),"\n",(0,r.jsxs)(t.h1,{id:"hsethgetall-\u64cd\u4f5c",children:[(0,r.jsx)(t.code,{children:"HSet/HGetAll"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\tkey = "key"\n\t)\n\t_, err := g.Redis().HSet(ctx, key, g.Map{\n\t\t"id":    1,\n\t\t"name":  "john",\n\t\t"score": 100,\n\t})\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// retrieve hash map\n\tvalue, err := g.Redis().HGetAll(ctx, key)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tfmt.Println(value.Map())\n\n\t// scan to struct\n\ttype User struct {\n\t\tId    uint64\n\t\tName  string\n\t\tScore float64\n\t}\n\tvar user *User\n\tif err = value.Scan(&user); err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tg.Dump(user)\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'map[id:1 name:john score:100]\n{\n    Id:    1,\n    Name:  "john",\n    Score: 100,\n}\n'})}),"\n",(0,r.jsxs)(t.h1,{id:"hmsethmget-\u64cd\u4f5c",children:[(0,r.jsx)(t.code,{children:"HMSet/HMGet"})," \u64cd\u4f5c"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t_ "github.com/gogf/gf/contrib/nosql/redis/v2"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nfunc main() {\n\tvar (\n\t\tctx = gctx.New()\n\t\tkey = "key"\n\t)\n\terr := g.Redis().HMSet(ctx, key, g.Map{\n\t\t"id":    1,\n\t\t"name":  "john",\n\t\t"score": 100,\n\t})\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\n\t// retrieve hash map\n\tvalues, err := g.Redis().HMGet(ctx, key, "id", "name")\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tg.Dump(values.Strings())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u7ec8\u7aef\u8f93\u51fa\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'[\n    "1",\n    "john",\n]\n'})}),"\n",(0,r.jsx)(t.p,{children:"As per Redis 4.0.0, HMSET is considered deprecated. Please use HSET innew code."}),"\n",(0,r.jsx)(t.p,{children:"\u6839\u636eRedis 4.0.0\uff0cHMSET\u88ab\u89c6\u4e3a\u5df2\u5f03\u7528\u3002\u8bf7\u5728\u65b0\u4ee3\u7801\u4e2d\u4f7f\u7528HSET\u3002"})]})}function g(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>s});var r=e(67294);const i={},c=r.createContext(i);function s(n){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(c.Provider,{value:t},n.children)}}}]);