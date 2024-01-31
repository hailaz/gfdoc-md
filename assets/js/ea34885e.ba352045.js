"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[70280],{50483:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(85893),c=r(11151);const i={},o="\u57fa\u672c\u4ecb\u7ecd",a={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-gtree",title:"\u57fa\u672c\u4ecb\u7ecd",description:"\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7279\u6027\u7684\u6811\u5f62\u5bb9\u5668\uff0c\u6811\u5f62\u6570\u636e\u7ed3\u6784\u7684\u7279\u70b9\u662f\u652f\u6301\u6709\u5e8f\u904d\u5386\u3001\u5185\u5b58\u5360\u7528\u4f4e\u3001\u590d\u6742\u5ea6\u7a33\u5b9a\u3001\u9002\u5408\u5927\u6570\u636e\u91cf\u5b58\u50a8\u3002\u8be5\u6a21\u5757\u5305\u542b\u591a\u4e2a\u6570\u636e\u7ed3\u6784\u7684\u6811\u5f62\u5bb9\u5668\uff1a RedBlackTree\u3001 AVLTree \u548c BTree\u3002",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/7-\u6811\u5f62\u7c7b\u578b-gtree/7-\u6811\u5f62\u7c7b\u578b-gtree.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/7-\u6811\u5f62\u7c7b\u578b-gtree",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/7-\u6811\u5f62\u7c7b\u578b-gtree/7-\u6811\u5f62\u7c7b\u578b-gtree.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u961f\u5217\u7c7b\u578b-gqueue/\u961f\u5217\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"},next:{title:"\u57fa\u672c\u4f7f\u7528",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528"}},s={},d=[];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["\u652f\u6301\u5e76\u53d1\u5b89\u5168\u5f00\u5173\u7279\u6027\u7684\u6811\u5f62\u5bb9\u5668\uff0c\u6811\u5f62\u6570\u636e\u7ed3\u6784\u7684\u7279\u70b9\u662f\u652f\u6301\u6709\u5e8f\u904d\u5386\u3001\u5185\u5b58\u5360\u7528\u4f4e\u3001\u590d\u6742\u5ea6\u7a33\u5b9a\u3001\u9002\u5408\u5927\u6570\u636e\u91cf\u5b58\u50a8\u3002\u8be5\u6a21\u5757\u5305\u542b\u591a\u4e2a\u6570\u636e\u7ed3\u6784\u7684\u6811\u5f62\u5bb9\u5668\uff1a ",(0,t.jsx)(n.code,{children:"RedBlackTree"}),"\u3001 ",(0,t.jsx)(n.code,{children:"AVLTree"})," \u548c ",(0,t.jsx)(n.code,{children:"BTree"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7c7b\u578b\u6570\u636e\u7ed3\u6784\u5e73\u5747\u590d\u6742\u5ea6\u652f\u6301\u6392\u5e8f\u6709\u5e8f\u904d\u5386\u8bf4\u660e",(0,t.jsx)(n.code,{children:"RedBlackTree"}),"\u7ea2\u9ed1\u6811",(0,t.jsx)(n.code,{children:"O(log N)"}),"\u662f\u662f\u5199\u5165\u6027\u80fd\u6bd4\u8f83\u597d",(0,t.jsx)(n.code,{children:"AVLTree"}),"\u9ad8\u5ea6\u5e73\u8861\u6811",(0,t.jsx)(n.code,{children:"O(log N)"}),"\u662f\u662f\u67e5\u627e\u6027\u80fd\u6bd4\u8f83\u597d",(0,t.jsx)(n.code,{children:"BTree"}),"B\u6811/B-\u6811",(0,t.jsx)(n.code,{children:"O(log N)"}),"\u662f\u662f\u5e38\u7528\u4e8e\u5916\u90e8\u5b58\u50a8"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u53c2\u8003\u8fde\u63a5\uff1a ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Binary_tree",children:"https://en.wikipedia.org/wiki/Binary_tree"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u8054\u6570\u7ec4\u573a\u666f\u3001\u6392\u5e8f\u952e\u503c\u5bf9\u573a\u666f\u3001\u5927\u6570\u636e\u91cf\u5185\u5b58CURD\u573a\u666f\u7b49\u7b49\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'import "github.com/gogf/gf/v2/container/gtree"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtree",children:"https://pkg.go.dev/github.com/gogf/gf/v2/container/gtree"})}),"\n",(0,t.jsx)(n.p,{children:"\u51e0\u79cd\u5bb9\u5668\u7684API\u65b9\u6cd5\u90fd\u975e\u5e38\u7c7b\u4f3c\uff0c\u7279\u70b9\u662f\u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u63d0\u4f9b\u7528\u4e8e\u6392\u5e8f\u7684\u65b9\u6cd5\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"gutil"})," \u6a21\u5757\u4e2d\u63d0\u4f9b\u4e86\u5e38\u7528\u7684\u4e00\u4e9b\u57fa\u672c\u7c7b\u578b\u6bd4\u8f83\u65b9\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u7a0b\u5e8f\u4e2d\u76f4\u63a5\u4f7f\u7528\uff0c\u540e\u7eed\u4e5f\u6709\u793a\u4f8b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"func ComparatorByte(a, b interface{}) int\nfunc ComparatorFloat32(a, b interface{}) int\nfunc ComparatorFloat64(a, b interface{}) int\nfunc ComparatorInt(a, b interface{}) int\nfunc ComparatorInt16(a, b interface{}) int\nfunc ComparatorInt32(a, b interface{}) int\nfunc ComparatorInt64(a, b interface{}) int\nfunc ComparatorInt8(a, b interface{}) int\nfunc ComparatorRune(a, b interface{}) int\nfunc ComparatorString(a, b interface{}) int\nfunc ComparatorTime(a, b interface{}) int\nfunc ComparatorUint(a, b interface{}) int\nfunc ComparatorUint16(a, b interface{}) int\nfunc ComparatorUint32(a, b interface{}) int\nfunc ComparatorUint64(a, b interface{}) int\nfunc ComparatorUint8(a, b interface{}) int\n"})}),"\n",(0,t.jsx)(n.h1,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%91%E5%BD%A2%E7%B1%BB%E5%9E%8B-gtree/%E6%A0%91%E5%BD%A2%E7%B1%BB%E5%9E%8B-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",children:"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/%E7%BB%84%E4%BB%B6%E5%88%97%E8%A1%A8/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%A0%91%E5%BD%A2%E7%B1%BB%E5%9E%8B-gtree/%E6%A0%91%E5%BD%A2%E7%B1%BB%E5%9E%8B-%E6%96%B9%E6%B3%95%E4%BB%8B%E7%BB%8D",children:"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(67294);const c={},i=t.createContext(c);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);