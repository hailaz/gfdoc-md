"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[64142],{78359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var o=t(85893),s=t(11151);const d={title:"Golang\u679a\u4e3e\u503c\u7ba1\u7406"},a="Go\u5b9e\u73b0\u679a\u4e3e\u503c",i={id:"\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406",title:"Golang\u679a\u4e3e\u503c\u7ba1\u7406",description:"Go \u8bed\u8a00\u5e76\u6ca1\u6709\u63d0\u4f9b enum \u7684\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 const \u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\uff0c\u8fd9\u4e5f\u662f Go \u8bed\u8a00\u4e2d\u7ea6\u5b9a\u4fd7\u6210\u7684\u65b9\u5f0f\u3002",source:"@site/docs/1-\u6846\u67b6\u8bbe\u8ba1/9-Golang\u679a\u4e3e\u503c\u7ba1\u7406.md",sourceDirName:"1-\u6846\u67b6\u8bbe\u8ba1",slug:"/\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406",permalink:"/gfdoc-md/docs/\u6846\u67b6\u8bbe\u8ba1/Golang\u679a\u4e3e\u503c\u7ba1\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-\u6846\u67b6\u8bbe\u8ba1/9-Golang\u679a\u4e3e\u503c\u7ba1\u7406.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Golang\u679a\u4e3e\u503c\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"Context\u76f8\u5173\u8bbe\u8ba1",permalink:"/gfdoc-md/docs/\u6846\u67b6\u8bbe\u8ba1/Context\u76f8\u5173\u8bbe\u8ba1/"},next:{title:"\u9879\u76ee\u5f00\u53d1",permalink:"/gfdoc-md/docs/\u9879\u76ee\u5f00\u53d1/"}},r={},c=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"go\u5b9e\u73b0\u679a\u4e3e\u503c",children:"Go\u5b9e\u73b0\u679a\u4e3e\u503c"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Go"})," \u8bed\u8a00\u5e76\u6ca1\u6709\u63d0\u4f9b ",(0,o.jsx)(n.code,{children:"enum"})," \u7684\u5b9a\u4e49\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"const"})," \u6765\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\uff0c\u8fd9\u4e5f\u662f ",(0,o.jsx)(n.code,{children:"Go"})," \u8bed\u8a00\u4e2d\u7ea6\u5b9a\u4fd7\u6210\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728 ",(0,o.jsx)(n.code,{children:"Kubernetes"}),' \u9879\u76ee\u4e2d\uff0c\u6709\u5927\u91cf\u7684\u4ee5\u5e38\u91cf\u5f62\u5f0f\u5b9a\u4e49\u7684"\u679a\u4e3e\u503c"\uff1a']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// PodPhase is a label for the condition of a pod at the current time.\ntype PodPhase string\n\n// These are the valid statuses of pods.\nconst (\n\t// PodPending means the pod has been accepted by the system, but one or more of the containers\n\t// has not been started. This includes time before being bound to a node, as well as time spent\n\t// pulling images onto the host.\n\tPodPending PodPhase = "Pending"\n\t// PodRunning means the pod has been bound to a node and all of the containers have been started.\n\t// At least one container is still running or is in the process of being restarted.\n\tPodRunning PodPhase = "Running"\n\t// PodSucceeded means that all containers in the pod have voluntarily terminated\n\t// with a container exit code of 0, and the system is not going to restart any of these containers.\n\tPodSucceeded PodPhase = "Succeeded"\n\t// PodFailed means that all containers in the pod have terminated, and at least one container has\n\t// terminated in a failure (exited with a non-zero exit code or was stopped by the system).\n\tPodFailed PodPhase = "Failed"\n\t// PodUnknown means that for some reason the state of the pod could not be obtained, typically due\n\t// to an error in communicating with the host of the pod.\n\tPodUnknown PodPhase = "Unknown"\n)\n'})}),"\n",(0,o.jsx)(n.h1,{id:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c",children:"\u5982\u4f55\u8de8\u670d\u52a1\u9ad8\u6548\u7ef4\u62a4\u679a\u4e3e\u503c"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u53ea\u662f\u9879\u76ee\u5185\u90e8\u4f7f\u7528\u679a\u4e3e\u503c\u6bd4\u8f83\u7b80\u5355\uff0c\u5b9a\u4e49\u5b8c\u4e86\u5185\u90e8\u4f7f\u7528\u5373\u53ef\uff0c\u4f46\u6d89\u53ca\u5230\u8de8\u670d\u52a1\u4e4b\u95f4\u8c03\u7528\uff0c\u6216\u8005\u524d\u540e\u7aef\u534f\u4f5c\u65f6\uff0c\u6548\u7387\u5c31\u6bd4\u8f83\u4f4e\u4e86\u3002\u5f53\u670d\u52a1\u9700\u8981\u7ed9\u5916\u90e8\u8c03\u7528\u8005\u5c55\u793a\u63a5\u53e3\u80fd\u529b\u65f6\uff0c\u5f80\u5f80\u9700\u8981\u751f\u6210 ",(0,o.jsx)(n.code,{children:"API"})," \u63a5\u53e3\u6587\u6863\uff08\u6216\u8005\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,o.jsx)(n.code,{children:"proto"}),"\uff09\uff0c\u5f80\u5f80\u4e5f\u9700\u8981\u6839\u636e\u63a5\u53e3\u6587\u6863\uff08\u6587\u4ef6\uff09\u751f\u6210\u8c03\u7528\u7684\u5ba2\u6237\u7aef ",(0,o.jsx)(n.code,{children:"SDK"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u662f\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,o.jsx)(n.code,{children:"proto"}),"\uff0c\u5f80\u5f80\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u6e90\u7801\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u95ee\u9898\u4e0d\u5927\u3002\u6211\u4eec\u8fd9\u91cc\u4e3b\u8981\u8ba8\u8bba\u7684\u662f\u63a5\u53e3\u6587\u6863\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\uff0c\u7279\u522b\u662f\u524d\u540e\u7aef\u534f\u4f5c\u65f6\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"OpenAPI"})," \u6807\u51c6\u534f\u8bae\u6765\u7ef4\u62a4\u679a\u4e3e\u503c\u7684\u95ee\u9898\u3002\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u5de5\u5177\u6765\u7ef4\u62a4\u8fd9\u4e9b\u679a\u4e3e\u503c\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a [\u679a\u4e3e\u7ef4\u62a4-gen enums](/docs/\u5f00\u53d1\u5de5\u5177/\u4ee3\u7801\u751f\u6210-gen/\u679a\u4e3e\u7ef4\u62a4-gen enums)"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const s={},d=o.createContext(s);function a(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);