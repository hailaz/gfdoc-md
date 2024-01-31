"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[24690],{91397:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var t=n(85893),d=n(11151);const r={},i="\u57fa\u672c\u4ecb\u7ecd",s={id:"\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",title:"\u57fa\u672c\u4ecb\u7ecd",description:"\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 gcache \u7684 Redis \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 Redis \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f Session \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/8-\u7f13\u5b58\u7ba1\u7406/2-\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/8-\u7f13\u5b58\u7ba1\u7406",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",permalink:"/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/4-\u6838\u5fc3\u7ec4\u4ef6/8-\u7f13\u5b58\u7ba1\u7406/2-\u7f13\u5b58\u7ba1\u7406-Redis\u7f13\u5b58.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58",permalink:"/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u5185\u5b58\u7f13\u5b58"},next:{title:"\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/\u6838\u5fc3\u7ec4\u4ef6/\u7f13\u5b58\u7ba1\u7406/\u7f13\u5b58\u7ba1\u7406-\u65b9\u6cd5\u4ecb\u7ecd"}},o={},a=[{value:"\u5173\u4e8e <code>Clear/Size</code> \u7b49\u65b9\u6cd5",id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",level:2},{value:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 <code>redis db</code> \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",level:2}];function l(e){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h1,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(c.p,{children:["\u7f13\u5b58\u7ec4\u4ef6\u540c\u65f6\u63d0\u4f9b\u4e86 ",(0,t.jsx)(c.code,{children:"gcache"})," \u7684 ",(0,t.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u9002\u914d\u5b9e\u73b0\u3002 ",(0,t.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u5728\u591a\u8282\u70b9\u4fdd\u8bc1\u7f13\u5b58\u7684\u6570\u636e\u4e00\u81f4\u6027\u65f6\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f ",(0,t.jsx)(c.code,{children:"Session"})," \u5171\u4eab\u3001\u6570\u636e\u5e93\u67e5\u8be2\u7f13\u5b58\u7b49\u573a\u666f\u4e2d\u3002"]}),"\n",(0,t.jsx)(c.h1,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{children:'func ExampleCache_SetAdapter() {\n\tvar (\n\t\terr         error\n\t\tctx         = gctx.New()\n\t\tcache       = gcache.New()\n\t\tredisConfig = &gredis.Config{\n\t\t\tAddress: "127.0.0.1:6379",\n\t\t\tDb:      9,\n\t\t}\n\t\tcacheKey   = `key`\n\t\tcacheValue = `value`\n\t)\n\t// Create redis client object.\n\tredis, err := gredis.New(redisConfig)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\t// Create redis cache adapter and set it to cache object.\n\tcache.SetAdapter(gcache.NewAdapterRedis(redis))\n\n\t// Set and Get using cache object.\n\terr = cache.Set(ctx, cacheKey, cacheValue, time.Second)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(cache.MustGet(ctx, cacheKey).String())\n\n\t// Get using redis client.\n\tfmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())\n\n\t// Output:\n\t// value\n\t// value\n}\n'})}),"\n",(0,t.jsx)(c.h1,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(c.h2,{id:"\u5173\u4e8e-clearsize-\u7b49\u65b9\u6cd5",children:["\u5173\u4e8e ",(0,t.jsx)(c.code,{children:"Clear/Size"})," \u7b49\u65b9\u6cd5"]}),"\n",(0,t.jsxs)(c.p,{children:["\u9996\u5148\uff0c\u76f8\u540c\u7684 ",(0,t.jsx)(c.code,{children:"gredis.Config"})," \u603b\u662f\u4f1a\u8fde\u63a5\u5230\u76f8\u540c\u7684 ",(0,t.jsx)(c.code,{children:"redis db"})," \u4e2d\uff0c\u800c\u7531\u4e8e ",(0,t.jsx)(c.code,{children:"Redis"})," \u672c\u8eab\u6ca1\u6709\u6570\u636e\u5206\u7ec4\u529f\u80fd\uff0c\u6240\u4ee5\u5f53\u591a\u4e2a ",(0,t.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u8fde\u63a5\u5230\u540c\u4e2a ",(0,t.jsx)(c.code,{children:"redis db"})," \u65f6\uff0c\u5c06\u4f1a\u5171\u4eab\u6574\u4e2a ",(0,t.jsx)(c.code,{children:"redis db"}),"\uff0c\u800c\u4e0d\u4f1a\u5355\u72ec\u5f00\u8f9f\u4e00\u4e2a\u5206\u7ec4\u7528\u6765\u5b58\u50a8\u5f53\u524d ",(0,t.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\u3002\u56e0\u6b64\u5f53\u4f7f\u7528 ",(0,t.jsx)(c.code,{children:"Clear"}),"\u3001 ",(0,t.jsx)(c.code,{children:"Size"})," \u8fd9\u7c7b\u64cd\u4f5c\u65f6\uff0c\u5c06\u4f1a\u5bf9\u6574\u4e2a ",(0,t.jsx)(c.code,{children:"redis db"})," \u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u4e0e\u5185\u5b58\u7f13\u5b58\u4e00\u6837\u7684\u4ec5\u64cd\u4f5c\u5f53\u524d ",(0,t.jsx)(c.code,{children:"gcache.Cache"})," \u5bf9\u8c61\u4e2d\u7684\u5185\u5bb9\uff0c\u5b58\u5728\u4e00\u5b9a\u7684\u53cd\u76f4\u89c9\uff0c\u8bf7\u52a1\u5fc5\u8c28\u614e\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(c.h2,{id:"\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684-redis-db-\u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b",children:["\u5efa\u8bae\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,t.jsx)(c.code,{children:"redis db"})," \u533a\u5206\u4e1a\u52a1\u7f13\u5b58\u7c7b\u578b"]}),"\n",(0,t.jsxs)(c.p,{children:["\u53e6\u5916\uff0c\u5efa\u8bae\u5927\u5bb6\u5728\u4f7f\u7528 ",(0,t.jsx)(c.code,{children:"Redis"})," \u7f13\u5b58\u65f6\uff0c\u5355\u72ec\u914d\u7f6e\u4e0d\u540c\u7684 ",(0,t.jsx)(c.code,{children:"db"})," \u6765\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u548c\u5176\u4ed6\u7684\u4e1a\u52a1\u6570\u636e\u5171\u7528\u4e00\u4e2a ",(0,t.jsx)(c.code,{children:"db"}),"\u3002"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsx)(c.li,{children:"\u65e0\u6807\u7b7e"}),"\n"]})]})}function h(e={}){const{wrapper:c}={...(0,d.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>s,a:()=>i});var t=n(67294);const d={},r=t.createContext(d);function i(e){const c=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function s(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:c},e.children)}}}]);