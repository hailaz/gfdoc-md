"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[68996],{37093:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var d=r(85893),i=r(11151);const c={title:"ORM\u67e5\u8be2-Where/WhereOr/WhereNot"},l=void 0,h={id:"\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Where/WhereOr/WhereNot",title:"ORM\u67e5\u8be2-Where/WhereOr/WhereNot",description:"ORM \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u6761\u4ef6\u67e5\u8be2\u65b9\u6cd5\uff0c\u5e76\u4e14\u6761\u4ef6\u65b9\u6cd5\u652f\u6301\u591a\u79cd\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002",source:"@site/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/0-ORM\u67e5\u8be2-Where/WhereOr/WhereNot.md",sourceDirName:"4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/0-ORM\u67e5\u8be2-Where/WhereOr",slug:"/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Where/WhereOr/WhereNot",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-Where/WhereOr/WhereNot",draft:!1,unlisted:!1,editUrl:"https://github.com/hailaz/gfdoc-md/blob/main/docs/4-\u6838\u5fc3\u7ec4\u4ef6/10-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c/3-ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/0-ORM\u67e5\u8be2-Where/WhereOr/WhereNot.md",tags:[],version:"current",frontMatter:{title:"ORM\u67e5\u8be2-Where/WhereOr/WhereNot"},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/"},next:{title:"ORM\u67e5\u8be2-WhereWhereOrWhereNot",permalink:"/gfdoc-md/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c/ORM\u94fe\u5f0f\u64cd\u4f5c-\u6570\u636e\u67e5\u8be2/ORM\u67e5\u8be2-WhereWhereOrWhereNot"}},s={},o=[{value:"<code>Where/WhereOr</code> \u67e5\u8be2\u6761\u4ef6",id:"wherewhereor-\u67e5\u8be2\u6761\u4ef6",level:2},{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:3},{value:"<code>Wheref</code> \u683c\u5f0f\u5316\u6761\u4ef6\u5b57\u7b26\u4e32",id:"wheref-\u683c\u5f0f\u5316\u6761\u4ef6\u5b57\u7b26\u4e32",level:2},{value:"<code>WherePri</code> \u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",id:"wherepri-\u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",level:2},{value:"<code>WhereBuilder</code> \u590d\u6742\u6761\u4ef6\u7ec4\u5408",id:"wherebuilder-\u590d\u6742\u6761\u4ef6\u7ec4\u5408",level:2},{value:"\u5bf9\u8c61\u521b\u5efa",id:"\u5bf9\u8c61\u521b\u5efa",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879\uff1a\u7a7a\u6570\u7ec4\u6761\u4ef6\u5f15\u53d1\u7684 <code>0=1</code> \u6761\u4ef6",id:"\u6ce8\u610f\u4e8b\u9879\u7a7a\u6570\u7ec4\u6761\u4ef6\u5f15\u53d1\u7684-01-\u6761\u4ef6",level:2}];function t(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u6761\u4ef6\u67e5\u8be2\u65b9\u6cd5\uff0c\u5e76\u4e14\u6761\u4ef6\u65b9\u6cd5\u652f\u6301\u591a\u79cd\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"func (m *Model) Where(where interface{}, args...interface{}) *Model\nfunc (m *Model) Wheref(format string, args ...interface{}) *Model\nfunc (m *Model) WherePri(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereLike(column string, like interface{}) *Model\nfunc (m *Model) WhereIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNull(columns ...string) *Model\nfunc (m *Model) WhereLT(column string, value interface{}) *Model\nfunc (m *Model) WhereLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereGT(column string, value interface{}) *Model\nfunc (m *Model) WhereGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereNotNull(columns ...string) *Model\n\nfunc (m *Model) WhereOr(where interface{}, args ...interface{}) *Model\nfunc (m *Model) WhereOrBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNull(columns ...string) *Model\nfunc (m *Model) WhereOrLT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrLTE(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGT(column string, value interface{}) *Model\nfunc (m *Model) WhereOrGTE(column string, value interface{}) *Model\n\nfunc (m *Model) WhereOrNotBetween(column string, min, max interface{}) *Model\nfunc (m *Model) WhereOrNotLike(column string, like interface{}) *Model\nfunc (m *Model) WhereOrNotIn(column string, in interface{}) *Model\nfunc (m *Model) WhereOrNotNull(columns ...string) *Model\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0b\u9762\u6211\u4eec\u5bf9\u5176\u4e2d\u7684\u51e0\u4e2a\u5e38\u7528\u65b9\u6cd5\u505a\u7b80\u5355\u4ecb\u7ecd\uff0c\u5176\u4ed6\u6761\u4ef6\u67e5\u8be2\u65b9\u6cd5\u7528\u6cd5\u7c7b\u4f3c\u3002"}),"\n",(0,d.jsxs)(n.h2,{id:"wherewhereor-\u67e5\u8be2\u6761\u4ef6",children:[(0,d.jsx)(n.code,{children:"Where/WhereOr"})," \u67e5\u8be2\u6761\u4ef6"]}),"\n",(0,d.jsx)(n.h3,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u7528\u4e8e\u4f20\u9012\u67e5\u8be2\u6761\u4ef6\u53c2\u6570\uff0c\u652f\u6301\u7684\u53c2\u6570\u4e3a\u4efb\u610f\u7684 ",(0,d.jsx)(n.code,{children:"string/map/slice/struct/*struct"})," \u7c7b\u578b\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where"})," \u6761\u4ef6\u53c2\u6570\u63a8\u8350\u4f7f\u7528\u5b57\u7b26\u4e32\u7684\u53c2\u6570\u4f20\u9012\u65b9\u5f0f\uff08\u5e76\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"?"})," \u5360\u4f4d\u7b26\u9884\u5904\u7406\uff09\uff0c\u56e0\u4e3a ",(0,d.jsx)(n.code,{children:"map"}),"/ ",(0,d.jsx)(n.code,{children:"struct"})," \u7c7b\u578b\u4f5c\u4e3a\u67e5\u8be2\u53c2\u6570\u65e0\u6cd5\u4fdd\u8bc1\u987a\u5e8f\u6027\uff0c\u4e14\u5728\u90e8\u5206\u60c5\u51b5\u4e0b\uff08\u6570\u636e\u5e93\u6709\u65f6\u4f1a\u5e2e\u52a9\u4f60\u81ea\u52a8\u8fdb\u884c\u67e5\u8be2\u7d22\u5f15\u4f18\u5316\uff09\uff0c\u6570\u636e\u5e93\u7684\u7d22\u5f15\u548c\u4f60\u4f20\u9012\u7684\u67e5\u8be2\u6761\u4ef6\u987a\u5e8f\u6709\u4e00\u5b9a\u5173\u7cfb\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528\u591a\u4e2a ",(0,d.jsx)(n.code,{children:"Where"})," \u65b9\u6cd5\u8fde\u63a5\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c\u591a\u4e2a\u6761\u4ef6\u4e4b\u95f4\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"And"})," \u8fdb\u884c\u8fde\u63a5\u3002 \u6b64\u5916\uff0c\u5f53\u5b58\u5728\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6\u65f6\uff0c ",(0,d.jsx)(n.code,{children:"gdb"})," \u4f1a\u9ed8\u8ba4\u5c06\u591a\u4e2a\u6761\u4ef6\u5206\u522b\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"()"})," \u7b26\u53f7\u8fdb\u884c\u5305\u542b\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u53ef\u4ee5\u975e\u5e38\u53cb\u597d\u5730\u652f\u6301\u67e5\u8be2\u6761\u4ef6\u5206\u7ec4\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// WHERE `uid`=1\nWhere("uid=1")\nWhere("uid", 1)\nWhere("uid=?", 1)\nWhere(g.Map{"uid" : 1})\n// WHERE `uid` <= 1000 AND `age` >= 18\nWhere(g.Map{\n    "uid <=" : 1000,\n    "age >=" : 18,\n})\n\n// WHERE (`uid` <= 1000) AND (`age` >= 18)\nWhere("uid <=?", 1000).Where("age >=?", 18)\n\n// WHERE `level`=1 OR `money`>=1000000\nWhere("level=? OR money >=?", 1, 1000000)\n\n// WHERE (`level`=1) OR (`money`>=1000000)\nWhere("level", 1).WhereOr("money >=", 1000000)\n\n// WHERE `uid` IN(1,2,3)\nWhere("uid IN(?)", g.Slice{1,2,3})\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"struct"})," \u53c2\u6570\u7684\u793a\u4f8b\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"orm"})," \u7684 ",(0,d.jsx)(n.code,{children:"tag"})," \u7528\u4e8e\u6307\u5b9a ",(0,d.jsx)(n.code,{children:"struct"})," \u5c5e\u6027\u4e0e\u8868\u5b57\u6bb5\u7684\u6620\u5c04\u5173\u7cfb\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'type Condition struct{\n    Sex int `orm:"sex"`\n    Age int `orm:"age"`\n}\nWhere(Condition{1, 18})\n// WHERE `sex`=1 AND `age`=18\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + string"}),"\uff0c\u6761\u4ef6\u53c2\u6570\u4f7f\u7528\u5b57\u7b26\u4e32\u548c\u9884\u5904\u7406\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// \u67e5\u8be2\u591a\u6761\u8bb0\u5f55\u5e76\u4f7f\u7528Limit\u5206\u9875\n// SELECT * FROM user WHERE uid>1 LIMIT 0,10\ng.Model("user").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u4f7f\u7528Fields\u65b9\u6cd5\u67e5\u8be2\u6307\u5b9a\u5b57\u6bb5\n// \u672a\u4f7f\u7528Fields\u65b9\u6cd5\u6307\u5b9a\u67e5\u8be2\u5b57\u6bb5\u65f6\uff0c\u9ed8\u8ba4\u67e5\u8be2\u4e3a*\n// SELECT uid,name FROM user WHERE uid>1 LIMIT 0,10\ng.Model("user").Fields("uid,name").Where("uid > ?", 1).Limit(0, 10).All()\n\n// \u652f\u6301\u591a\u79cdWhere\u6761\u4ef6\u53c2\u6570\u7c7b\u578b\n// SELECT * FROM user WHERE uid=1 LIMIT 1\ng.Model("user").Where("uid=1").One()\ng.Model("user").Where("uid", 1).One()\ng.Model("user").Where("uid=?", 1).One()\n\n// SELECT * FROM user WHERE (uid=1) AND (name=\'john\') LIMIT 1\ng.Model("user").Where("uid", 1).Where("name", "john").One()\ng.Model("user").Where("uid=?", 1).Where("name=?", "john").One()\n\n// SELECT * FROM user WHERE (uid=1) OR (name=\'john\') LIMIT 1\ng.Model("user").Where("uid=?", 1).WhereOr("name=?", "john").One()\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + slice"}),"\uff0c\u9884\u5904\u7406\u53c2\u6570\u53ef\u76f4\u63a5\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"slice"})," \u53c2\u6570\u7ed9\u5b9a\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// SELECT * FROM user WHERE age>18 AND name like \'%john%\'\ng.Model("user").Where("age>? AND name like ?", g.Slice{18, "%john%"}).All()\n\n// SELECT * FROM user WHERE status=1\ng.Model("user").Where("status=?", g.Slice{1}).All()\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + map"}),"\uff0c\u6761\u4ef6\u53c2\u6570\u4f7f\u7528\u4efb\u610f ",(0,d.jsx)(n.code,{children:"map"})," \u7c7b\u578b\u4f20\u9012\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// SELECT * FROM user WHERE uid=1 AND name=\'john\' LIMIT 1\ng.Model("user").Where(g.Map{"uid" : 1, "name" : "john"}).One()\n\n// SELECT * FROM user WHERE uid=1 AND age>18 LIMIT 1\ng.Model("user").Where(g.Map{"uid" : 1, "age>" : 18}).One()\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Where + struct/*struct"}),"\uff0c ",(0,d.jsx)(n.code,{children:"struct"})," \u6807\u7b7e\u652f\u6301 ",(0,d.jsx)(n.code,{children:"orm/json"}),"\uff0c\u6620\u5c04\u5c5e\u6027\u5230\u5b57\u6bb5\u540d\u79f0\u5173\u7cfb\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'type User struct {\n    Id       int    `json:"uid"`\n    UserName string `orm:"name"`\n}\n// SELECT * FROM user WHERE uid =1 AND name=\'john\' LIMIT 1\ng.Model("user").Where(User{ Id : 1, UserName : "john"}).One()\n\n// SELECT * FROM user WHERE uid =1 LIMIT 1\ng.Model("user").Where(&User{ Id : 1}).One()\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u4ee5\u4e0a\u7684\u67e5\u8be2\u6761\u4ef6\u76f8\u5bf9\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684\u67e5\u8be2\u793a\u4f8b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'condition := g.Map{\n    "title like ?"         : "%\u4e5d\u5be8%",\n    "online"               : 1,\n    "hits between ? and ?" : g.Slice{1, 10},\n    "exp > 0"              : nil,\n    "category"             : g.Slice{100, 200},\n}\n// SELECT * FROM article WHERE title like \'%\u4e5d\u5be8%\' AND online=1 AND hits between 1 and 10 AND exp > 0 AND category IN(100,200)\ng.Model("article").Where(condition).All()\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"wheref-\u683c\u5f0f\u5316\u6761\u4ef6\u5b57\u7b26\u4e32",children:[(0,d.jsx)(n.code,{children:"Wheref"})," \u683c\u5f0f\u5316\u6761\u4ef6\u5b57\u7b26\u4e32"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff0c\u5728\u8f93\u5165\u5e26\u6709\u5b57\u7b26\u4e32\u7684\u6761\u4ef6\u8bed\u53e5\u65f6\uff0c\u5f80\u5f80\u9700\u8981\u7ed3\u5408 ",(0,d.jsx)(n.code,{children:"fmt.Sprintf"})," \u6765\u683c\u5f0f\u5316\u6761\u4ef6\uff08\u5f53\u7136\uff0c\u6ce8\u610f\u5728\u5b57\u7b26\u4e32\u4e2d\u4f7f\u7528\u5360\u4f4d\u7b26\u4ee3\u66ff\u53d8\u91cf\u7684\u8f93\u5165\u800c\u4e0d\u662f\u76f4\u63a5\u5c06\u53d8\u91cf\u683c\u5f0f\u5316\uff09\uff0c\u56e0\u6b64\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,d.jsx)(n.code,{children:"Where+fmt.Sprintf"})," \u7ed3\u5408\u7684\u4fbf\u6377\u65b9\u6cd5 ",(0,d.jsx)(n.code,{children:"Wheref"}),"\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// WHERE score > 100 and status in('succeeded','completed')\nWheref(`score > ? and status in (?)`, 100, g.Slice{\"succeeded\", \"completed\"})\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"wherepri-\u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6",children:[(0,d.jsx)(n.code,{children:"WherePri"})," \u652f\u6301\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u7684\u529f\u80fd\u540c ",(0,d.jsx)(n.code,{children:"Where"}),"\uff0c\u4f46\u63d0\u4f9b\u4e86\u5bf9\u8868\u4e3b\u952e\u7684\u667a\u80fd\u8bc6\u522b\uff0c\u5e38\u7528\u4e8e\u6839\u636e\u4e3b\u952e\u7684\u4fbf\u6377\u6570\u636e\u67e5\u8be2\u3002\u5047\u5982 ",(0,d.jsx)(n.code,{children:"user"})," \u8868\u7684\u4e3b\u952e\u4e3a ",(0,d.jsx)(n.code,{children:"uid"}),"\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b ",(0,d.jsx)(n.code,{children:"Where"})," \u4e0e ",(0,d.jsx)(n.code,{children:"WherePri"})," \u7684\u533a\u522b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// WHERE `uid`=1\nWhere("uid", 1)\nWherePri(1)\n\n// WHERE `uid` IN(1,2,3)\nWhere("uid", g.Slice{1,2,3})\nWherePri(g.Slice{1,2,3})\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"WherePri"})," \u65b9\u6cd5\u4e14\u7ed9\u5b9a\u53c2\u6570\u4e3a\u5355\u4e00\u7684\u53c2\u6570\u57fa\u672c\u7c7b\u578b\u6216\u8005 ",(0,d.jsx)(n.code,{children:"slice"})," \u7c7b\u578b\u65f6\uff0c\u5c06\u4f1a\u88ab\u8bc6\u522b\u4e3a\u4e3b\u952e\u7684\u67e5\u8be2\u6761\u4ef6\u503c\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"wherebuilder-\u590d\u6742\u6761\u4ef6\u7ec4\u5408",children:[(0,d.jsx)(n.code,{children:"WhereBuilder"})," \u590d\u6742\u6761\u4ef6\u7ec4\u5408"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"WhereBuilder"})," \u7528\u4ee5\u7ec4\u5408\u751f\u6210\u590d\u6742\u7684 ",(0,d.jsx)(n.code,{children:"Where"})," \u6761\u4ef6\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5bf9\u8c61\u521b\u5efa",children:"\u5bf9\u8c61\u521b\u5efa"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"Model"})," \u7684 ",(0,d.jsx)(n.code,{children:"Builder"})," \u65b9\u6cd5\u751f\u6210 ",(0,d.jsx)(n.code,{children:"WhereBuilder"})," \u5bf9\u8c61\u3002\u8be5\u65b9\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"// Builder creates and returns a WhereBuilder.\nfunc (m *Model) Builder() *WhereBuilder\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u793a\u4f8b-1",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'// SELECT * FROM `user` WHERE `id`=1 AND `address`="USA" AND (`status`="active" OR `status`="pending")\nm := g.Model("user")\nall, err := m.Where("id", 1).Where("address", "USA").Where(\n\tm.Builder().Where("status", "active").WhereOr("status", "pending"),\n).All()\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879\u7a7a\u6570\u7ec4\u6761\u4ef6\u5f15\u53d1\u7684-01-\u6761\u4ef6",children:["\u6ce8\u610f\u4e8b\u9879\uff1a\u7a7a\u6570\u7ec4\u6761\u4ef6\u5f15\u53d1\u7684 ",(0,d.jsx)(n.code,{children:"0=1"})," \u6761\u4ef6"]}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4f8b\u5b50\uff1a"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"SQL1"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'m := g.Model("auth")\nm.Where("status", g.Slice{"permitted", "inherited"}).Where("uid", 1).All()\n// SELECT * FROM `auth` WHERE (`status` IN(\'permitted\',\'inherited\')) AND (`uid`=1)\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"SQL2"}),"\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'m := g.Model("auth")\nm.Where("status", g.Slice{}).Where("uid", 1).All()\n// SELECT * FROM `auth` WHERE (0=1) AND (`uid`=1)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u7ed9\u5b9a\u7684\u6570\u7ec4\u6761\u4ef6\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u751f\u6210\u7684 ",(0,d.jsx)(n.code,{children:"SQL"})," \u51fa\u73b0\u4e86 ",(0,d.jsx)(n.code,{children:"0=1"})," \u7684\u65e0\u6548\u6761\u4ef6\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u5f00\u53d1\u8005\u6ca1\u6709\u663e\u793a\u58f0\u660e\u53ef\u4ee5\u8fc7\u6ee4\u7a7a\u6570\u7ec4\u6761\u4ef6\u65f6\uff0c ",(0,d.jsx)(n.code,{children:"ORM"})," \u4e0d\u4f1a\u81ea\u52a8\u8fc7\u6ee4\u7a7a\u6570\u7ec4\u6761\u4ef6\uff0c\u4ee5\u907f\u514d\u7a0b\u5e8f\u903b\u8f91\u7ed5\u8fc7 ",(0,d.jsx)(n.code,{children:"SQL"})," \u9650\u5236\u6761\u4ef6\uff0c\u5f15\u53d1\u4e0d\u53ef\u9884\u77e5\u7684\u4e1a\u52a1\u95ee\u9898\u3002\u5982\u679c\u5f00\u53d1\u8005\u786e\u5b9a ",(0,d.jsx)(n.code,{children:"SQL"})," \u9650\u5236\u6761\u4ef6\u662f\u53ef\u4ee5\u8fc7\u6ee4\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u663e\u793a\u8c03\u7528 ",(0,d.jsx)(n.code,{children:"OmitEmpty/OmitEmptyWhere"})," \u65b9\u6cd5\u6765\u6267\u884c\u7a7a\u6761\u4ef6\u8fc7\u6ee4\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'m := g.Model("auth")\nm.Where("status", g.Slice{}).Where("uid", 1).OmitEmpty().All()\n// SELECT * FROM `auth` WHERE `uid`=1\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>h,a:()=>l});var d=r(67294);const i={},c=d.createContext(i);function l(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);