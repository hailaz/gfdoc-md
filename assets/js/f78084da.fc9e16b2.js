"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[77809],{84279:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=i(85893),s=i(11151);const r={},t="\u57fa\u672c\u4ecb\u7ecd",d={id:"\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u8868PB-gen pbentity",title:"\u6570\u636e\u8868PB-gen pbentity",description:"\u8be5\u529f\u80fd\u7279\u6027\u4ece v2.4 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002",source:"@site/docs/3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/5-\u6570\u636e\u8868PB-gen pbentity.md",sourceDirName:"3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen",slug:"/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u8868PB-gen pbentity",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u6570\u636e\u8868PB-gen pbentity",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-\u5f00\u53d1\u5de5\u5177/5-\u4ee3\u7801\u751f\u6210-gen/5-\u6570\u636e\u8868PB-gen pbentity.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u534f\u8bae\u7f16\u8bd1-gen pb",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u534f\u8bae\u7f16\u8bd1-gen pb"},next:{title:"\u6ce8\u610f\u4e8b\u9879",permalink:"/gfdoc-md/docs/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run"}},c={},l=[{value:"\u76f8\u540c\u4e4b\u5904",id:"\u76f8\u540c\u4e4b\u5904",level:2},{value:"\u4e0d\u540c\u4e4b\u5904",id:"\u4e0d\u540c\u4e4b\u5904",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u8be5\u529f\u80fd\u7279\u6027\u4ece ",(0,o.jsx)(n.code,{children:"v2.4"})," \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002"]}),"\n",(0,o.jsx)(n.h1,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,o.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u7528\u4e8e\u8bfb\u53d6\u914d\u7f6e\u7684\u6570\u636e\u5e93\uff0c\u6839\u636e\u6570\u636e\u8868\u751f\u6210\u5bf9\u5e94\u7684 ",(0,o.jsx)(n.code,{children:"proto"})," \u6570\u636e\u7ed3\u6784\u6587\u4ef6\u3002"]}),"\n",(0,o.jsx)(n.h1,{id:"\u547d\u4ee4\u4f7f\u7528",children:"\u547d\u4ee4\u4f7f\u7528"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'$ gf gen pbentity -h\nUSAGE\n    gf gen pbentity [OPTION]\n\nOPTION\n    -p, --path                 directory path for generated files storing\n    -k, --package              package path for all entity proto files\n    -l, --link                 database configuration, the same as the ORM configuration of GoFrame\n    -t, --tables               generate models only for given tables, multiple table names separated with \',\'\n    -f, --prefix               add specified prefix for all entity names and entity proto files\n    -r, --removePrefix         remove specified prefix of the table, multiple prefix separated with \',\'\n    -rf, --removeFieldPrefix   remove specified prefix of the field, multiple prefix separated with \',\'\n    -n, --nameCase             case for message attribute names, default is "Camel":\n                               | Case            | Example            |\n                               |---------------- |--------------------|\n                               | Camel           | AnyKindOfString    |\n                               | CamelLower      | anyKindOfString    | default\n                               | Snake           | any_kind_of_string |\n                               | SnakeScreaming  | ANY_KIND_OF_STRING |\n                               | SnakeFirstUpper | rgb_code_md5       |\n                               | Kebab           | any-kind-of-string |\n                               | KebabScreaming  | ANY-KIND-OF-STRING |\n    -j, --jsonCase             case for message json tag, cases are the same as "nameCase", default "CamelLower".\n                               set it to "none" to ignore json tag generating.\n    -o, --option               extra protobuf options\n    -h, --help                 more information about this command\n\nEXAMPLE\n    gf gen pbentity\n    gf gen pbentity -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen pbentity -p ./protocol/demos/entity -t user,user_detail,user_login\n    gf gen pbentity -r user_ -k github.com/gogf/gf/example/protobuf\n    gf gen pbentity -r user_\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gf.gen.pbentity", which also supports multiple databases, for example(config.yaml):\n    gfcli:\n      gen:\n      - pbentity:\n            link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n            path:    "protocol/demos/entity"\n            tables:  "order,products"\n            package: "demos"\n      - pbentity:\n            link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n            path:    "protocol/demos/entity"\n            prefix:  "primary_"\n            tables:  "user, userDetail"\n            package: "demos"\n            option:  |\n              option go_package    = "protobuf/demos";\n              option java_package  = "protobuf/demos";\n              option php_namespace = "protobuf/demos";\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f7f\u7528\u6846\u67b6\u63a8\u8350\u7684\u9879\u76ee\u5de5\u7a0b\u811a\u624b\u67b6\uff0c\u5e76\u4e14\u7cfb\u7edf\u5b89\u88c5\u4e86 ",(0,o.jsx)(n.code,{children:"make"})," \u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"make pbentity"})," \u5feb\u6377\u6307\u4ee4\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:["\u540d\u79f0\u9ed8\u8ba4\u503c\u542b\u4e49\u793a\u4f8b",(0,o.jsx)(n.code,{children:"gfcli.gen.pbentity"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee3\u7801\u751f\u6210\u914d\u7f6e\u9879\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u914d\u7f6e\u9879\u6784\u6210\u6570\u7ec4\uff0c\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u751f\u6210\u3002\u4e0d\u540c\u7684\u6570\u636e\u5e93\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u751f\u6210\u89c4\u5219\uff0c\u4f8b\u5982\u53ef\u4ee5\u751f\u6210\u5230\u4e0d\u540c\u7684\u4f4d\u7f6e\u6216\u8005\u6587\u4ef6\u3002-",(0,o.jsx)(n.code,{children:"path``manifest/protobuf/pbentity"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u751f\u6210 ",(0,o.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\u7684\u5b58\u50a8 ",(0,o.jsx)(n.strong,{children:"\u76ee\u5f55"})," \u5730\u5740\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"protobuf/pbentity``package"}),"\u81ea\u52a8\u8bc6\u522b ",(0,o.jsx)(n.code,{children:"go.mod"}),"\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"go_package"})," \u8def\u5f84\uff0c\u5e76\u81ea\u52a8\u8bc6\u522b ",(0,o.jsx)(n.code,{children:"package"})," \u540d\u79f0-",(0,o.jsx)(n.code,{children:"link"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u8868\u793a\u4f60\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b ",(0,o.jsx)(n.code,{children:"mysql"}),", ",(0,o.jsx)(n.code,{children:"postgresql"})," \u7b49, \u7b2c\u4e8c\u90e8\u5206\u5c31\u662f\u8fde\u63a5\u6570\u636e\u5e93\u7684 ",(0,o.jsx)(n.code,{children:"dsn"})," \u4fe1\u606f\u3002\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"/docs/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E4%BD%BF%E7%94%A8%E9%85%8D%E7%BD%AE",children:"ORM\u4f7f\u7528\u914d\u7f6e"})," \u7ae0\u8282\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"prefix"})}),"\n",(0,o.jsx)(n.p,{children:"\u751f\u6210\u6570\u636e\u5e93\u5bf9\u8c61\u53ca\u6587\u4ef6\u7684\u524d\u7f00\uff0c\u4ee5\u4fbf\u533a\u5206\u4e0d\u540c\u6570\u636e\u5e93\u6216\u8005\u4e0d\u540c\u6570\u636e\u5e93\u4e2d\u7684\u76f8\u540c\u8868\u540d\uff0c\u9632\u6b62\u6570\u636e\u8868\u540c\u540d\u8986\u76d6\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"order_"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"user_"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"removePrefix"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5220\u9664\u6570\u636e\u8868\u7684\u6307\u5b9a\u524d\u7f00\u540d\u79f0\u3002\u591a\u4e2a\u524d\u7f00\u4ee5 ",(0,o.jsx)(n.code,{children:","})," \u53f7\u5206\u9694\u3002",(0,o.jsx)(n.code,{children:"gf_``removeFieldPrefix"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u5220\u9664\u5b57\u6bb5\u540d\u79f0\u7684\u6307\u5b9a\u524d\u7f00\u540d\u79f0\u3002\u591a\u4e2a\u524d\u7f00\u4ee5 ",(0,o.jsx)(n.code,{children:","})," \u53f7\u5206\u9694\u3002",(0,o.jsx)(n.code,{children:"f_``tables"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u6307\u5b9a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u9700\u8981\u6267\u884c\u4ee3\u7801\u751f\u6210\u7684\u6570\u636e\u8868\u3002\u5982\u679c\u4e3a\u7a7a\uff0c\u8868\u793a\u6570\u636e\u5e93\u7684\u6240\u6709\u8868\u90fd\u4f1a\u751f\u6210\u3002",(0,o.jsx)(n.code,{children:"user, user_detail``nameCase``CamelLower"}),"\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"message"})," \u5c5e\u6027\u5b57\u6bb5\u540d\u79f0\u683c\u5f0f\u3002\u53c2\u6570\u53ef\u9009\u4e3a\uff1a ",(0,o.jsx)(n.code,{children:"Camel"}),"\u3001 ",(0,o.jsx)(n.code,{children:"CamelLower"}),"\u3001 ",(0,o.jsx)(n.code,{children:"Snake"}),"\u3001 ",(0,o.jsx)(n.code,{children:"SnakeScreaming"}),"\u3001 ",(0,o.jsx)(n.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,o.jsx)(n.code,{children:"Kebab"}),"\u3001 ",(0,o.jsx)(n.code,{children:"KebabScreaming"}),"\u3002\u5177\u4f53\u4ecb\u7ecd\u8bf7\u53c2\u8003\u547d\u540d\u884c\u5e2e\u52a9\u793a\u4f8b\u3002",(0,o.jsx)(n.code,{children:"Snake``option"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u989d\u5916\u7684 ",(0,o.jsx)(n.code,{children:"proto option"})," \u914d\u7f6e\u5217\u8868"]}),"\n",(0,o.jsxs)(n.h1,{id:"\u4e0e-gen-dao-\u4e2d\u7684-entity-\u5dee\u522b",children:["\u4e0e ",(0,o.jsx)(n.code,{children:"gen dao"})," \u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u5dee\u522b"]}),"\n",(0,o.jsx)(n.h2,{id:"\u76f8\u540c\u4e4b\u5904",children:"\u76f8\u540c\u4e4b\u5904"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4e24\u8005\u751f\u6210\u7684\u5185\u5bb9\u90fd\u662f ",(0,o.jsx)(n.code,{children:"entity"})," \u5185\u5bb9\uff0c\u5373\u4ece\u6570\u636e\u96c6\u5408\uff08\u6570\u636e\u5e93\u8868\uff09\u4e2d\u751f\u6210\u5bf9\u5e94\u7684 ",(0,o.jsx)(n.code,{children:"Golang"})," \u5b9e\u4f53\u5bf9\u8c61\u4f9b\u7a0b\u5e8f\u65b9\u4fbf\u4f7f\u7528\u3002\u5e76\u4e14\u90fd\u662f\u5355\u5411\u751f\u6210\uff0c\u5373\u53ea\u80fd\u4ece\u6570\u636e\u96c6\u5408\u751f\u6210\u5b9e\u4f53\u5bf9\u8c61\u4ee3\u7801\uff0c\u4ee5\u4fdd\u8bc1\u5b9e\u4f53\u5bf9\u8c61\u6570\u636e\u7ed3\u6784\u7684\u540c\u6b65\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gen dao"})," \u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u6570\u636e\u5b9e\u4f53\u5bf9\u8c61\u662f\u5bf9\u4e8e ",(0,o.jsx)(n.code,{children:"Golang"})," \u8bed\u8a00\u6765\u8bf4\u662f\u901a\u7528\u7684\uff0c\u4f46\u76ee\u524d\u4e3b\u8981\u4e3a ",(0,o.jsx)(n.code,{children:"HTTP"})," \u534f\u8bae\u670d\u52a1\u3002\u5728 ",(0,o.jsx)(n.code,{children:"HTTP"})," \u670d\u52a1\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"gen dao"})," \u4e2d\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u867d\u7136\u662f\u5728 ",(0,o.jsx)(n.code,{children:"internal"})," \u76ee\u5f55\u4e0b\uff0c\u4f46\u6700\u7ec8\u4e5f\u4f1a\u4f5c\u4e3a ",(0,o.jsx)(n.code,{children:"HTTP API"})," \u8fd4\u56de\u7684\u4e00\u90e8\u5206\u670d\u52a1\u5ba2\u6237\u7aef\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e0d\u540c\u4e4b\u5904",children:"\u4e0d\u540c\u4e4b\u5904"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5728 ",(0,o.jsx)(n.code,{children:"GRPC"})," \u670d\u52a1\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"gen dao"})," \u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u6570\u636e\u7ed3\u6784\u65e0\u6cd5\u63d0\u4f9b\u7ed9 ",(0,o.jsx)(n.code,{children:"GRPC"})," \u63a5\u53e3\u4f7f\u7528\uff0c\u56e0\u4e3a ",(0,o.jsx)(n.code,{children:"GRPC"})," \u7684\u6570\u636e\u7ed3\u6784\u9700\u8981\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"proto"})," \u6587\u4ef6\u6765\u5b9a\u4e49\u3002\u56e0\u6b64\uff0c\u5728 ",(0,o.jsx)(n.code,{children:"GRPC"})," \u670d\u52a1\u4e2d\u5c31\u9700\u8981\u4f7f\u7528\u5230 ",(0,o.jsx)(n.code,{children:"gen pbentity"})," \u4e2d\u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"pbentity proto"})," \u6587\u4ef6\u3002\u540c\u65f6\uff0c\u5728 ",(0,o.jsx)(n.code,{children:"GRPC"})," \u5fae\u670d\u52a1\u5f00\u53d1\u4e2d\uff0c ",(0,o.jsx)(n.code,{children:"gen dao"})," \u751f\u6210\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u5df2\u7ecf\u6ca1\u6709\u5177\u4f53\u4f5c\u7528\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u53d6\u540d ",(0,o.jsx)(n.code,{children:"pbentity"})," \u800c\u4e0d\u662f ",(0,o.jsx)(n.code,{children:"entity"})," \u7684\u540d\u79f0\uff0c\u662f\u4e3a\u4e86\u9632\u6b62\u548c ",(0,o.jsx)(n.code,{children:"gen dao"})," \u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"entity"})," \u542b\u4e49\u51b2\u7a81\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u65e0\u6807\u7b7e"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var o=i(67294);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);