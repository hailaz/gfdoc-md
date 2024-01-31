"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[84972],{21978:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>S,toc:()=>t});var n=c(85893),o=c(11151);const d={},s="Linux",S={id:"\u5176\u4ed6\u8d44\u6599/\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868",title:"Linux",description:"\u4fe1\u53f7\u53d6\u503c\u9ed8\u8ba4\u52a8\u4f5c\u542b\u4e49\uff08\u53d1\u51fa\u4fe1\u53f7\u7684\u539f\u56e0\uff09SIGHUP1Term\u7ec8\u7aef\u7684\u6302\u65ad\u6216\u8fdb\u7a0b\u6b7b\u4ea1SIGINT2Term\u6765\u81ea\u952e\u76d8\u7684\u4e2d\u65ad\u4fe1\u53f7SIGQUIT3Core\u6765\u81ea\u952e\u76d8\u7684\u79bb\u5f00\u4fe1\u53f7SIGILL4Core\u975e\u6cd5\u6307\u4ee4SIGABRT6Core\u6765\u81ea abort \u7684\u5f02\u5e38\u4fe1\u53f7SIGFPE8Core\u6d6e\u70b9\u4f8b\u5916SIGKILL9Term\u6740\u6b7bSIGSEGV11Core\u6bb5\u975e\u6cd5\u9519\u8bef (\u5185\u5b58\u5f15\u7528\u65e0\u6548)SIGPIPE13Term\u7ba1\u9053\u635f\u574f\uff1a\u5411\u4e00\u4e2a\u6ca1\u6709\u8bfb\u8fdb\u7a0b\u7684\u7ba1\u9053\u5199\u6570\u636eSIGALRM14Term\u6765\u81ea alarm \u7684\u8ba1\u65f6\u5668\u5230\u65f6\u4fe1\u53f7SIGTERM15Term\u7ec8\u6b62SIGUSR130,10,16Term\u7528\u6237\u81ea\u5b9a\u4e49\u4fe1\u53f7 1SIGUSR231,12,17Term\u7528\u6237\u81ea\u5b9a\u4e49\u4fe1\u53f7 2SIGCHLD20,17,18Ign\u5b50\u8fdb\u7a0b\u505c\u6b62\u6216\u7ec8\u6b62SIGCONT19,18,25Cont\u5982\u679c\u505c\u6b62\uff0c\u7ee7\u7eed\u6267\u884cSIGSTOP17,19,23Stop\u975e\u6765\u81ea\u7ec8\u7aef\u7684\u505c\u6b62\u4fe1\u53f7SIGTSTP18,20,24Stop\u6765\u81ea\u7ec8\u7aef\u7684\u505c\u6b62\u4fe1\u53f7SIGTTIN21,21,26Stop\u540e\u53f0\u8fdb\u7a0b\u8bfb\u7ec8\u7aefSIGTTOU22,22,27Stop\u540e\u53f0\u8fdb\u7a0b\u5199\u7ec8\u7aefSIGBUS10,7,10Core\u603b\u7ebf\u9519\u8bef\uff08\u5185\u5b58\u8bbf\u95ee\u9519\u8bef\uff09SIGPOLL",source:"@site/docs/15-\u5176\u4ed6\u8d44\u6599/7-\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868.md",sourceDirName:"15-\u5176\u4ed6\u8d44\u6599",slug:"/\u5176\u4ed6\u8d44\u6599/\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868",permalink:"/docs/\u5176\u4ed6\u8d44\u6599/\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/15-\u5176\u4ed6\u8d44\u6599/7-\u9644\u5f55\uff1a\u7cfb\u7edf\u4fe1\u53f7\u5217\u8868.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u683c\u5f0f\u5316\u6253\u5370\u5360\u4f4d\u7b26",permalink:"/docs/\u5176\u4ed6\u8d44\u6599/\u683c\u5f0f\u5316\u6253\u5370\u5360\u4f4d\u7b26"}},i={},t=[];function I(e){const r={code:"code",h1:"h1",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"linux",children:"Linux"}),"\n",(0,n.jsxs)(r.p,{children:["\u4fe1\u53f7\u53d6\u503c\u9ed8\u8ba4\u52a8\u4f5c\u542b\u4e49\uff08\u53d1\u51fa\u4fe1\u53f7\u7684\u539f\u56e0\uff09",(0,n.jsx)(r.code,{children:"SIGHUP"}),"1Term\u7ec8\u7aef\u7684\u6302\u65ad\u6216\u8fdb\u7a0b\u6b7b\u4ea1",(0,n.jsx)(r.code,{children:"SIGINT"}),"2Term\u6765\u81ea\u952e\u76d8\u7684\u4e2d\u65ad\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGQUIT"}),"3Core\u6765\u81ea\u952e\u76d8\u7684\u79bb\u5f00\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGILL"}),"4Core\u975e\u6cd5\u6307\u4ee4",(0,n.jsx)(r.code,{children:"SIGABRT"}),"6Core\u6765\u81ea abort \u7684\u5f02\u5e38\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGFPE"}),"8Core\u6d6e\u70b9\u4f8b\u5916",(0,n.jsx)(r.code,{children:"SIGKILL"}),"9Term\u6740\u6b7b",(0,n.jsx)(r.code,{children:"SIGSEGV"}),"11Core\u6bb5\u975e\u6cd5\u9519\u8bef (\u5185\u5b58\u5f15\u7528\u65e0\u6548)",(0,n.jsx)(r.code,{children:"SIGPIPE"}),"13Term\u7ba1\u9053\u635f\u574f\uff1a\u5411\u4e00\u4e2a\u6ca1\u6709\u8bfb\u8fdb\u7a0b\u7684\u7ba1\u9053\u5199\u6570\u636e",(0,n.jsx)(r.code,{children:"SIGALRM"}),"14Term\u6765\u81ea alarm \u7684\u8ba1\u65f6\u5668\u5230\u65f6\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGTERM"}),"15Term\u7ec8\u6b62",(0,n.jsx)(r.code,{children:"SIGUSR1"}),"30,10,16Term\u7528\u6237\u81ea\u5b9a\u4e49\u4fe1\u53f7 1",(0,n.jsx)(r.code,{children:"SIGUSR2"}),"31,12,17Term\u7528\u6237\u81ea\u5b9a\u4e49\u4fe1\u53f7 2",(0,n.jsx)(r.code,{children:"SIGCHLD"}),"20,17,18Ign\u5b50\u8fdb\u7a0b\u505c\u6b62\u6216\u7ec8\u6b62",(0,n.jsx)(r.code,{children:"SIGCONT"}),"19,18,25Cont\u5982\u679c\u505c\u6b62\uff0c\u7ee7\u7eed\u6267\u884c",(0,n.jsx)(r.code,{children:"SIGSTOP"}),"17,19,23Stop\u975e\u6765\u81ea\u7ec8\u7aef\u7684\u505c\u6b62\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGTSTP"}),"18,20,24Stop\u6765\u81ea\u7ec8\u7aef\u7684\u505c\u6b62\u4fe1\u53f7",(0,n.jsx)(r.code,{children:"SIGTTIN"}),"21,21,26Stop\u540e\u53f0\u8fdb\u7a0b\u8bfb\u7ec8\u7aef",(0,n.jsx)(r.code,{children:"SIGTTOU"}),"22,22,27Stop\u540e\u53f0\u8fdb\u7a0b\u5199\u7ec8\u7aef",(0,n.jsx)(r.code,{children:"SIGBUS"}),"10,7,10Core\u603b\u7ebf\u9519\u8bef\uff08\u5185\u5b58\u8bbf\u95ee\u9519\u8bef\uff09",(0,n.jsx)(r.code,{children:"SIGPOLL"})]}),"\n",(0,n.jsxs)(r.p,{children:["TermPollable \u4e8b\u4ef6\u53d1\u751f (Sys V)\uff0c\u4e0e SIGIO \u540c\u4e49",(0,n.jsx)(r.code,{children:"SIGPROF"}),"27,27,29Term\u7edf\u8ba1\u5206\u5e03\u56fe\u7528\u8ba1\u65f6\u5668\u5230\u65f6",(0,n.jsx)(r.code,{children:"SIGSYS"}),"12,-,12Core\u975e\u6cd5\u7cfb\u7edf\u8c03\u7528 (SVr4)",(0,n.jsx)(r.code,{children:"SIGTRAP"}),"5Core\u8ddf\u8e2a / \u65ad\u70b9\u81ea\u9677",(0,n.jsx)(r.code,{children:"SIGURG"}),"16,23,21Ignsocket \u7d27\u6025\u4fe1\u53f7 (4.2BSD)",(0,n.jsx)(r.code,{children:"SIGVTALRM"}),"26,26,28Term\u865a\u62df\u8ba1\u65f6\u5668\u5230\u65f6 (4.2BSD)",(0,n.jsx)(r.code,{children:"SIGXCPU"}),"24,24,30Core\u8d85\u8fc7 CPU \u65f6\u9650 (4.2BSD)",(0,n.jsx)(r.code,{children:"SIGXFSZ"}),"25,25,31Core\u8d85\u8fc7\u6587\u4ef6\u957f\u5ea6\u9650\u5236 (4.2BSD)",(0,n.jsx)(r.code,{children:"SIGIOT"}),"6CoreIOT \u81ea\u9677\uff0c\u4e0e SIGABRT \u540c\u4e49",(0,n.jsx)(r.code,{children:"SIGEMT"}),"7,-,7"]}),"\n",(0,n.jsxs)(r.p,{children:["Term",(0,n.jsx)(r.code,{children:"SIGSTKFLT"}),"-,16,-Term\u534f\u5904\u7406\u5668\u5806\u6808\u9519\u8bef (\u4e0d\u4f7f\u7528)",(0,n.jsx)(r.code,{children:"SIGIO"}),"23,29,22Term\u63cf\u8ff0\u7b26\u4e0a\u53ef\u4ee5\u8fdb\u884c I/O \u64cd\u4f5c",(0,n.jsx)(r.code,{children:"SIGCLD"}),"-,-,18Ign\u4e0e SIGCHLD \u540c\u4e49",(0,n.jsx)(r.code,{children:"SIGPWR"}),"29,30,19Term\u7535\u529b\u6545\u969c (System V)",(0,n.jsx)(r.code,{children:"SIGINFO"}),"29,-,-"]}),"\n",(0,n.jsxs)(r.p,{children:["\u4e0e SIGPWR \u540c\u4e49",(0,n.jsx)(r.code,{children:"SIGLOST"}),"-,-,-Term\u6587\u4ef6\u9501\u4e22\u5931",(0,n.jsx)(r.code,{children:"SIGWINCH"}),"28,28,20Ign\u7a97\u53e3\u5927\u5c0f\u6539\u53d8 (4.3BSD, Sun)",(0,n.jsx)(r.code,{children:"SIGUNUSED"}),"-,31,-Term\u672a\u4f7f\u7528\u4fe1\u53f7 (will be SIGSYS)"]}),"\n",(0,n.jsx)(r.h1,{id:"window",children:"Window"}),"\n",(0,n.jsxs)(r.p,{children:["\u4fe1\u53f7\u8bf4\u660e**",(0,n.jsx)(r.code,{children:"SIGABRT"}),(0,n.jsx)(r.strong,{children:"\u5f02\u5e38\u7ec8\u6b62"}),(0,n.jsx)(r.code,{children:"SIGFPE"}),(0,n.jsx)(r.strong,{children:"\u6d6e\u70b9\u9519\u8bef"}),(0,n.jsx)(r.code,{children:"SIGILL"}),(0,n.jsx)(r.strong,{children:"\u975e\u6cd5\u6307\u4ee4"}),(0,n.jsx)(r.code,{children:"SIGINT"}),(0,n.jsx)(r.strong,{children:"Ctrl+C \u4fe1\u53f7"}),(0,n.jsx)(r.code,{children:"SIGSEGV"}),(0,n.jsx)(r.strong,{children:"\u975e\u6cd5\u5b58\u50a8\u533a\u8bbf\u95ee"}),(0,n.jsx)(r.code,{children:"SIGTERM"}),"**\u7ec8\u6b62\u8bf7\u6c42"]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(I,{...e})}):I(e)}},11151:(e,r,c)=>{c.d(r,{Z:()=>S,a:()=>s});var n=c(67294);const o={},d=n.createContext(o);function s(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function S(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);