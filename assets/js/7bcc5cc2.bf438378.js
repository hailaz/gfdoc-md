"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[38981],{14504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=n(85893),r=n(11151);const d={title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c"},c="HTTP+DB+Redis+Logging",i={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",description:"\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u6574\u4e00\u70b9\u7684\u4f8b\u5b50\uff0c\u5305\u542b\u51e0\u4e2a\u5e38\u7528\u6838\u5fc3\u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u793a\u4f8b\uff0c\u793a\u4f8b\u4ee3\u7801\u5730\u5740\uff1a https://github.com/gogf/gf/tree/master/example/trace/http\\with\\db",source:"@site/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/1-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c.md",sourceDirName:"6-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",permalink:"/gfdoc-md/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/6-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/1-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage",permalink:"/gfdoc-md/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b",permalink:"/gfdoc-md/docs/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-GRPC\u793a\u4f8b"}},h={},l=[{value:"ORM\u94fe\u8def\u4fe1\u606f",id:"orm\u94fe\u8def\u4fe1\u606f",level:2},{value:"Attributes/Tags",id:"attributestags",level:3},{value:"Events/Process",id:"eventsprocess",level:3},{value:"Redis\u94fe\u8def\u4fe1\u606f",id:"redis\u94fe\u8def\u4fe1\u606f",level:2},{value:"Attributes/Tags",id:"attributestags-1",level:3},{value:"Events/Process",id:"eventsprocess-1",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"httpdbredislogging",children:(0,s.jsx)(t.code,{children:"HTTP+DB+Redis+Logging"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u76f8\u5bf9\u5b8c\u6574\u4e00\u70b9\u7684\u4f8b\u5b50\uff0c\u5305\u542b\u51e0\u4e2a\u5e38\u7528\u6838\u5fc3\u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u793a\u4f8b\uff0c\u793a\u4f8b\u4ee3\u7801\u5730\u5740\uff1a ",(0,s.jsx)(t.a,{href:"https://github.com/gogf/gf/tree/master/example/trace/http_with_db",children:"https://github.com/gogf/gf/tree/master/example/trace/http_with_db"})]}),"\n",(0,s.jsx)(t.h1,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/contrib/trace/otlphttp/v2"\n\t"github.com/gogf/gf/v2/database/gdb"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/net/gtrace"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n\tserviceName = "otlp-http-client"\n\tendpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n\tpath        = "adapt_******_******/api/otlp/traces" )\n\nfunc main() {\n\tvar ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tdefer shutdown()\n\n    StartRequests()\n}\n\nfunc StartRequests() {\n\tctx, span := gtrace.NewSpan(gctx.New(), "StartRequests")\n\tdefer span.End()\n\n\tvar (\n\t\terr    error\n\t\tclient = g.Client()\n\t)\n\t// Add user info.\n\tvar insertRes = struct {\n\t\tghttp.DefaultHandlerResponse\n\t\tData struct{ Id int64 } `json:"data"`\n\t}{}\n\terr = client.PostVar(ctx, "http://127.0.0.1:8199/user/insert", g.Map{\n\t\t"name": "john",\n\t}).Scan(&insertRes)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tg.Log().Info(ctx, "insert result:", insertRes)\n\tif insertRes.Data.Id == 0 {\n\t\tg.Log().Error(ctx, "retrieve empty id string")\n\t\treturn\n\t}\n\n\t// Query user info.\n\tvar queryRes = struct {\n\t\tghttp.DefaultHandlerResponse\n\t\tData struct{ User gdb.Record } `json:"data"`\n\t}{}\n\terr = client.GetVar(ctx, "http://127.0.0.1:8199/user/query", g.Map{\n\t\t"id": insertRes.Data.Id,\n\t}).Scan(&queryRes)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tg.Log().Info(ctx, "query result:", queryRes)\n\n\t// Delete user info.\n\tvar deleteRes = struct {\n\t\tghttp.DefaultHandlerResponse\n\t}{}\n\terr = client.PostVar(ctx, "http://127.0.0.1:8199/user/delete", g.Map{\n\t\t"id": insertRes.Data.Id,\n\t}).Scan(&deleteRes)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tg.Log().Info(ctx, "delete result:", deleteRes)\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,s.jsx)(t.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7HTTP\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u4e86 ",(0,s.jsx)(t.code,{children:"3"})," \u6b21\u8bf7\u6c42\uff1a"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"/user/insert"})," \u7528\u4e8e\u65b0\u589e\u4e00\u4e2a\u7528\u6237\u4fe1\u606f\uff0c\u6210\u529f\u540e\u8fd4\u56de\u7528\u6237\u7684ID\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"/user/query"})," \u7528\u4e8e\u67e5\u8be2\u7528\u6237\uff0c\u4f7f\u7528\u524d\u4e00\u4e2a\u63a5\u53e3\u8fd4\u56de\u7684\u7528\u6237ID\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"/user/delete"})," \u7528\u4e8e\u5220\u9664\u7528\u6237\uff0c\u4f7f\u7528\u4e4b\u524d\u63a5\u53e3\u8fd4\u56de\u7684\u7528\u6237ID\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/gogf/gf/contrib/trace/otlphttp/v2"\n\t"github.com/gogf/gf/v2/database/gdb"\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gcache"\n\t"github.com/gogf/gf/v2/os/gctx"\n)\n\ntype cTrace struct{}\n\nconst (\n\tserviceName = "otlp-http-client"\n\tendpoint    = "tracing-analysis-dc-hz.aliyuncs.com"\n\tpath        = "adapt_******_******/api/otlp/traces" )\n\nfunc main() {\n\tvar ctx = gctx.New()\n    shutdown, err := otlphttp.Init(serviceName, endpoint, path)\n\tif err != nil {\n\t\tg.Log().Fatal(ctx, err)\n\t}\n\tdefer shutdown()\n\n    // Set ORM cache adapter with redis.\n\tg.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n\n\t// Start HTTP server.\n\ts := g.Server()\n\ts.Use(ghttp.MiddlewareHandlerResponse)\n\ts.Group("/", func(group *ghttp.RouterGroup) {\n\t\tgroup.ALL("/user", new(cTrace))\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n\ntype InsertReq struct {\n\tName string `v:"required#Please input user name."`\n}\ntype InsertRes struct {\n\tId int64\n}\n\n// Insert is a route handler for inserting user info into database.\nfunc (c *cTrace) Insert(ctx context.Context, req *InsertReq) (res *InsertRes, err error) {\n\tresult, err := g.Model("user").Ctx(ctx).Insert(req)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tid, _ := result.LastInsertId()\n\tres = &InsertRes{\n\t\tId: id,\n\t}\n\treturn\n}\n\ntype QueryReq struct {\n\tId int `v:"min:1#User id is required for querying"`\n}\ntype QueryRes struct {\n\tUser gdb.Record\n}\n\n// Query is a route handler for querying user info. It firstly retrieves the info from redis,\n// if there\'s nothing in the redis, it then does db select.\nfunc (c *cTrace) Query(ctx context.Context, req *QueryReq) (res *QueryRes, err error) {\n\tone, err := g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n\t\tDuration: 5 * time.Second,\n\t\tName:     c.userCacheKey(req.Id),\n\t\tForce:    false,\n\t}).WherePri(req.Id).One()\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tres = &QueryRes{\n\t\tUser: one,\n\t}\n\treturn\n}\n\ntype DeleteReq struct {\n\tId int `v:"min:1#User id is required for deleting."`\n}\ntype DeleteRes struct{}\n\n// Delete is a route handler for deleting specified user info.\nfunc (c *cTrace) Delete(ctx context.Context, req *DeleteReq) (res *DeleteRes, err error) {\n\t_, err = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n\t\tDuration: -1,\n\t\tName:     c.userCacheKey(req.Id),\n\t\tForce:    false,\n\t}).WherePri(req.Id).Delete()\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\treturn\n}\n\nfunc (c *cTrace) userCacheKey(id int) string {\n\treturn fmt.Sprintf(`userInfo:%d`, id)\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u670d\u52a1\u7aef\u4ee3\u7801\u7b80\u8981\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u9996\u5148\uff0c\u5ba2\u6237\u7aef\u4e5f\u662f\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"jaeger.Init"})," \u65b9\u6cd5\u521d\u59cb\u5316 ",(0,s.jsx)(t.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u5230\u4e86\u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u7f13\u5b58\u529f\u80fd\uff0c\u4ee5\u4fbf\u4e8e\u540c\u65f6\u6f14\u793a ",(0,s.jsx)(t.code,{children:"ORM"})," \u548c ",(0,s.jsx)(t.code,{children:"Redis"})," \u7684\u94fe\u8def\u8ddf\u8e2a\u8bb0\u5f55\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u6211\u4eec\u5728\u7a0b\u5e8f\u542f\u52a8\u65f6\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u8bbe\u7f6e\u5f53\u524d\u6570\u636e\u5e93\u7f13\u5b58\u7ba1\u7406\u7684\u9002\u914d\u5668\u4e3a ",(0,s.jsx)(t.code,{children:"redis"}),"\u3002\u5173\u4e8e\u7f13\u5b58\u9002\u914d\u5668\u7684\u4ecb\u7ecd\u611f\u5174\u8da3\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E7%BC%93%E5%AD%98%E7%AE%A1%E7%90%86/%E7%BC%93%E5%AD%98%E7%AE%A1%E7%90%86-%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1",children:"\u7f13\u5b58\u7ba1\u7406-\u63a5\u53e3\u8bbe\u8ba1"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"ORM"})," \u7684\u64cd\u4f5c\u4e2d\uff0c\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(t.code,{children:"Ctx"})," \u65b9\u6cd5\u5c06\u4e0a\u4e0b\u6587\u53d8\u91cf\u4f20\u9012\u5230\u7ec4\u4ef6\u4e2d\uff0c ",(0,s.jsx)(t.code,{children:"orm"})," \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u8bc6\u522b\u5f53\u524d\u4e0a\u4e0b\u6587\u4e2d\u662f\u5426\u5305\u542bTracing\u94fe\u8def\u4fe1\u606f\uff0c\u5982\u679c\u5305\u542b\u5219\u81ea\u52a8\u542f\u7528\u94fe\u8def\u8ddf\u8e2a\u7279\u6027\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"ORM"})," \u7684\u64cd\u4f5c\u4e2d\uff0c\u8fd9\u91cc\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"Cache"})," \u65b9\u6cd5\u7f13\u5b58\u67e5\u8be2\u7ed3\u679c\u5230 ",(0,s.jsx)(t.code,{children:"redis"})," \u4e2d\uff0c\u5e76\u5728\u5220\u9664\u64cd\u4f5c\u4e2d\u4e5f\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"Cache"})," \u65b9\u6cd5\u6e05\u9664 ",(0,s.jsx)(t.code,{children:"redis"})," \u4e2d\u7684\u7f13\u5b58\u7ed3\u679c\u3002\u5173\u4e8e ",(0,s.jsx)(t.code,{children:"ORM"})," \u7684\u7f13\u5b58\u7ba1\u7406\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,s.jsx)(t.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C/ORM%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E6%9F%A5%E8%AF%A2%E7%BC%93%E5%AD%98",children:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u67e5\u8be2\u7f13\u5b58"})," \u7ae0\u8282\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"\u6548\u679c\u67e5\u770b",children:"\u6548\u679c\u67e5\u770b"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u542f\u52a8\u670d\u52a1\u7aef\uff1a"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(70406).Z+"",width:"2462",height:"808"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u542f\u52a8\u5ba2\u6237\u7aef\uff1a"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(57186).Z+"",width:"1800",height:"254"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"Jaeger"})," \u4e0a\u67e5\u770b\u94fe\u8def\u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(16965).Z+"",width:"1918",height:"861"})}),"\n",(0,s.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u6b21\u8bf7\u6c42\u603b\u5171\u4ea7\u751f\u4e86 ",(0,s.jsx)(t.code,{children:"14"})," \u4e2a ",(0,s.jsx)(t.code,{children:"span"}),"\uff0c\u5176\u4e2d\u5ba2\u6237\u7aef\u6709 ",(0,s.jsx)(t.code,{children:"4"})," \u4e2a ",(0,s.jsx)(t.code,{children:"span"}),"\uff0c\u670d\u52a1\u7aef\u6709 ",(0,s.jsx)(t.code,{children:"10"})," \u4e2a ",(0,s.jsx)(t.code,{children:"span"}),"\uff0c\u6bcf\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"span"})," \u4ee3\u8868\u4e00\u4e2a\u94fe\u8def\u8282\u70b9\u3002\u4e0d\u8fc7\uff0c\u6211\u4eec\u6ce8\u610f\u5230\uff0c\u8fd9\u91cc\u4ea7\u751f\u4e86 ",(0,s.jsx)(t.code,{children:"3"})," \u4e2a ",(0,s.jsx)(t.code,{children:"errors"}),"\u3002\u6211\u4eec\u70b9\u51fb\u8be6\u60c5\u67e5\u770b\u4ec0\u4e48\u539f\u56e0\u5462\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(49243).Z+"",width:"1915",height:"661"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u770b\u5230\u597d\u50cf\u6240\u6709\u7684 ",(0,s.jsx)(t.code,{children:"redis"})," \u64cd\u4f5c\u90fd\u62a5\u9519\u4e86\uff0c\u968f\u4fbf\u70b9\u51fb\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"redis"})," \u7684\u76f8\u5173 ",(0,s.jsx)(t.code,{children:"span"}),"\uff0c\u67e5\u770b\u4e00\u4e0b\u8be6\u60c5\u5462\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(78972).Z+"",width:"1282",height:"939"})}),"\n",(0,s.jsxs)(t.p,{children:["\u539f\u6765\u662f ",(0,s.jsx)(t.code,{children:"redis"})," \u8fde\u63a5\u4e0d\u4e0a\u62a5\u9519\u4e86\uff0c\u8fd9\u6837\u7684\u8bdd\u6240\u6709\u7684 ",(0,s.jsx)(t.code,{children:"orm"})," \u7f13\u5b58\u529f\u80fd\u90fd\u5931\u6548\u4e86\uff0c\u4f46\u662f\u53ef\u4ee5\u770b\u5230\u5e76\u6ca1\u6709\u5f71\u54cd\u63a5\u53e3\u903b\u8f91\uff0c\u53ea\u662f\u6240\u6709\u7684\u67e5\u8be2\u90fd\u8d70\u4e86\u6570\u636e\u5e93\u3002\u8fd9\u4e2a\u62a5\u9519\u662f\u56e0\u4e3a\u6211\u672c\u5730\u5fd8\u4e86\u6253\u5f00 ",(0,s.jsx)(t.code,{children:"redis server"}),"\uff0c\u6211\u8d76\u7d27\u542f\u52a8\u4e00\u4e0b\u672c\u5730\u7684 ",(0,s.jsx)(t.code,{children:"redis server"}),"\uff0c\u518d\u770b\u770b\u6548\u679c\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(86750).Z+"",width:"1496",height:"1166"})}),"\n",(0,s.jsxs)(t.p,{children:["\u518d\u628a\u4e0a\u9762\u7684\u5ba2\u6237\u7aef\u8fd0\u884c\u4e00\u4e0b\uff0c\u67e5\u770b ",(0,s.jsx)(t.code,{children:"jaeger"}),"\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(83451).Z+"",width:"1786",height:"254"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(29356).Z+"",width:"1907",height:"732"})}),"\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u5c31\u6ca1\u6709\u62a5\u9519\u4e86\u3002"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"HTTP Client&Server"}),"\u3001 ",(0,s.jsx)(t.code,{children:"Logging"})," \u7ec4\u4ef6\u5728\u4e4b\u524d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0c\u56e0\u6b64\u8fd9\u91cc\u6211\u4eec\u4e3b\u8981\u5173\u6ce8 ",(0,s.jsx)(t.code,{children:"orm"})," \u548c ",(0,s.jsx)(t.code,{children:"redis"})," \u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"orm\u94fe\u8def\u4fe1\u606f",children:"ORM\u94fe\u8def\u4fe1\u606f"}),"\n",(0,s.jsx)(t.h3,{id:"attributestags",children:"Attributes/Tags"}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u968f\u4fbf\u70b9\u5f00\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:"ORM"})," \u94fe\u8def ",(0,s.jsx)(t.code,{children:"Span"}),"\uff0c\u770b\u770b ",(0,s.jsx)(t.code,{children:"Attributes/Tags"})," \u4fe1\u606f\uff1a"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(38304).Z+"",width:"1053",height:"774"})}),"\n",(0,s.jsxs)(t.p,{children:["\u53ef\u4ee5\u770b\u5230\u8fd9\u91cc\u7684 ",(0,s.jsx)(t.code,{children:"span.kind"})," \u662f ",(0,s.jsx)(t.code,{children:"internal"}),"\uff0c\u4e5f\u5c31\u662f\u4e4b\u524d\u4ecb\u7ecd\u8fc7\u7684\u65b9\u6cd5\u5185\u90e8 ",(0,s.jsx)(t.code,{children:"span"})," \u7c7b\u578b\u3002\u8fd9\u91cc\u5f88\u591a ",(0,s.jsx)(t.code,{children:"Tags"})," \u5728\u4e4b\u524d\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0c\u56e0\u6b64\u8fd9\u91cc\u4e3b\u8981\u4ecb\u7ecd\u5173\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684 ",(0,s.jsx)(t.code,{children:"Tags"}),"\uff1a"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute/Tag"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<br></br>                db.type<br></br>              "})}),(0,s.jsxs)(t.td,{children:["\u6570\u636e\u5e93\u8fde\u63a5\u7c7b\u578b\u3002\u5982 ",(0,s.jsx)(t.code,{children:"mysql"}),", ",(0,s.jsx)(t.code,{children:"mssql"}),", ",(0,s.jsx)(t.code,{children:"pgsql"})," \u7b49\u7b49\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"db.link"})}),(0,s.jsx)(t.td,{children:"\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u3002\u5176\u4e2d\u5bc6\u7801\u5b57\u6bb5\u88ab\u81ea\u52a8\u9690\u85cf\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"db.group"})}),(0,s.jsx)(t.td,{children:"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0\u3002"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"eventsprocess",children:"Events/Process"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(62590).Z+"",width:"1082",height:"786"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Event/Log"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"db.execution.sql"})}),(0,s.jsxs)(t.td,{children:["\u6267\u884c\u7684\u5177\u4f53 ",(0,s.jsx)(t.code,{children:"SQL"})," \u8bed\u53e5\u3002\u7531\u4e8eORM\u5e95\u5c42\u662f\u9884\u5904\u7406\uff0c\u8be5\u8bed\u53e5\u4e3a\u65b9\u4fbf\u67e5\u770b\u81ea\u52a8\u62fc\u63a5\u800c\u6210\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"db.execution.type"})}),(0,s.jsxs)(t.td,{children:["\u6267\u884c\u7684 ",(0,s.jsx)(t.code,{children:"SQL"})," \u8bed\u53e5\u7c7b\u578b\u3002\u5e38\u89c1\u4e3a ",(0,s.jsx)(t.code,{children:"DB.ExecContext"})," \u548c ",(0,s.jsx)(t.code,{children:"DB.QueryContext"}),"\uff0c\u5206\u522b\u4ee3\u8868\u5199\u64cd\u4f5c\u548c\u8bfb\u64cd\u4f5c\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"db.execution.cost"})}),(0,s.jsxs)(t.td,{children:["\u5f53\u524d ",(0,s.jsx)(t.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u8017\u65f6\uff0c\u5355\u4f4d\u4e3a ",(0,s.jsx)(t.code,{children:"ms"})," \u6beb\u79d2\u3002"]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"redis\u94fe\u8def\u4fe1\u606f",children:"Redis\u94fe\u8def\u4fe1\u606f"}),"\n",(0,s.jsx)(t.h3,{id:"attributestags-1",children:"Attributes/Tags"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(45691).Z+"",width:"1012",height:"776"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute/Tag"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<br></br>                redis.host<br></br>              "})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u8fde\u63a5\u5730\u5740\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redis.port"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u8fde\u63a5\u7aef\u53e3\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redis.db"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u64cd\u4f5c ",(0,s.jsx)(t.code,{children:"db"}),"\u3002"]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"eventsprocess-1",children:"Events/Process"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(66480).Z+"",width:"883",height:"614"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Event/Log"}),(0,s.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redis.execution.command"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redis.execution.arguments"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u53c2\u6570\u3002"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redis.execution.cost"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Redis"})," \u6267\u884c\u6307\u4ee4\u6267\u884c\u8017\u65f6\uff0c\u5355\u4f4d\u4e3a ",(0,s.jsx)(t.code,{children:"ms"})," \u6beb\u79d2\u3002"]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},70406:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-40-50-741bd335405b570f2374c26c3b2f06ae.png"},57186:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-41-8-d6e27bc0926b4be4bd043ec69aa6d3fd.png"},16965:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-42-1-fcfd085a10c35af3c0f6d8c4c576d305.png"},49243:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-44-9-68b789863a81ffb0aea6941526cb6d0f.png"},78972:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-45-7-cbb17412f85e973201d3480dd84643bd.png"},86750:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-47-48-8a5fce2a16b3ce53ddfea8b3a53f5897.png"},83451:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-48-40-d2b682257174dafac01a4e92b9c63d03.png"},29356:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_11-49-18-54279cf30c57b38d8e79dc076bfe9751.png"},38304:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_12-27-25-bea691c589934d33a7cee0a59a53a7cd.png"},62590:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_12-35-41-062d03f749914a6a68aafad22aff094f.png"},45691:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_12-39-54-73e7d54cfe0ac002d89ba1149435d3fc.png"},66480:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2021-1-29_12-42-22-952a601723b0e677d3405cb15b1f7083.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var s=n(67294);const r={},d=s.createContext(r);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);