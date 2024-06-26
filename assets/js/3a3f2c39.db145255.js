"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[90444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="RFC Creation Process",l={unversionedId:"build/rfc/PROCESS",id:"build/rfc/PROCESS",title:"RFC Creation Process",description:"1. Copy the rfc-template.md file. Use the following filename pattern: rfc-next_number-title.md",source:"@site/docs/build/rfc/PROCESS.md",sourceDirName:"build/rfc",slug:"/build/rfc/PROCESS",permalink:"/main/build/rfc/PROCESS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Requests for Comments",permalink:"/main/build/rfc/"},next:{title:"RFC 001: Transaction Validation",permalink:"/main/build/rfc/rfc-001-tx-validation"}},s={},c=[{value:"What is an RFC?",id:"what-is-an-rfc",level:2},{value:"RFC life cycle",id:"rfc-life-cycle",level:2},{value:"RFC status",id:"rfc-status",level:3},{value:"Consensus Status",id:"consensus-status",level:4},{value:"Language used in RFC",id:"language-used-in-rfc",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rfc-creation-process"},"RFC Creation Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"rfc-template.md")," file. Use the following filename pattern: ",(0,r.kt)("inlineCode",{parentName:"li"},"rfc-next_number-title.md")),(0,r.kt)("li",{parentName:"ol"},"Create a draft Pull Request if you want to get an early feedback."),(0,r.kt)("li",{parentName:"ol"},"Make sure the context and a solution is clear and well documented."),(0,r.kt)("li",{parentName:"ol"},"Add an entry to a list in the ",(0,r.kt)("a",{parentName:"li",href:"/main/build/rfc/"},"README")," file."),(0,r.kt)("li",{parentName:"ol"},"Create a Pull Request to propose a new ADR.")),(0,r.kt)("h2",{id:"what-is-an-rfc"},"What is an RFC?"),(0,r.kt)("p",null,"An RFC is a sort of async whiteboarding session. It is meant to replace the need for a distributed team to come together to make a decision. Currently, the Cosmos SDK team and contributors are distributed around the world. The team conducts working groups to have a synchronous discussion and an RFC can be used to capture the discussion for a wider audience to better understand the changes that are coming to the software. "),(0,r.kt)("p",null,"The main difference the Cosmos SDK is defining as a differentiation between RFC and ADRs is that one is to come to consensus and circulate information about a potential change or feature. An ADR is used if there is already consensus on a feature or change and there is not a need to articulate the change coming to the software. An ADR will articulate the changes and have a lower amount of communication .   "),(0,r.kt)("h2",{id:"rfc-life-cycle"},"RFC life cycle"),(0,r.kt)("p",null,"RFC creation is an ",(0,r.kt)("strong",{parentName:"p"},"iterative")," process. An RFC is meant as a distributed collaboration session, it may have many comments and is usually the bi-product of no working group or synchronous communication "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Proposals could start with a new GitHub Issue,  be a result of existing Issues or a discussion.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An RFC doesn't have to arrive to ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," with an ",(0,r.kt)("em",{parentName:"p"},"accepted")," status in a single PR. If the motivation is clear and the solution is sound, we SHOULD be able to merge it and keep a ",(0,r.kt)("em",{parentName:"p"},"proposed")," status. It's preferable to have an iterative approach rather than long, not merged Pull Requests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("em",{parentName:"p"},"proposed")," RFC is merged, then it should clearly document outstanding issues either in the RFC document notes or in a GitHub Issue.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The PR SHOULD always be merged. In the case of a faulty RFC, we still prefer to  merge it with a ",(0,r.kt)("em",{parentName:"p"},"rejected")," status. The only time the RFC SHOULD NOT be merged is if the author abandons it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Merged RFCs SHOULD NOT be pruned.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If there is consensus and enough feedback then the RFC can be accepted. "))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: An RFC is written when there is no working group or team session on the problem. RFC's are meant as a distributed white boarding session. If there is a working group on the proposal there is no need to have an RFC as there is synchronous whiteboarding going on. ")),(0,r.kt)("h3",{id:"rfc-status"},"RFC status"),(0,r.kt)("p",null,"Status has two components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{CONSENSUS STATUS}\n")),(0,r.kt)("h4",{id:"consensus-status"},"Consensus Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"DRAFT -> PROPOSED -> LAST CALL yyyy-mm-dd -> ACCEPTED | REJECTED -> SUPERSEDED by ADR-xxx\n                  \\        |\n                   \\       |\n                    v      v\n                     ABANDONED\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DRAFT"),": ","[optional]"," an ADR which is work in progress, not being ready for a general review. This is to present an early work and get an early feedback in a Draft Pull Request form."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PROPOSED"),": an ADR covering a full solution architecture and still in the review - project stakeholders haven't reached an agreed yet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LAST CALL <date for the last call>"),": ","[optional]"," clear notify that we are close to accept updates. Changing a status to ",(0,r.kt)("inlineCode",{parentName:"li"},"LAST CALL")," means that social consensus (of Cosmos SDK maintainers) has been reached and we still want to give it a time to let the community react or analyze."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ACCEPTED"),": ADR which will represent a currently implemented or to be implemented architecture design."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REJECTED"),": ADR can go from PROPOSED or ACCEPTED to rejected if the consensus among project stakeholders will decide so."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SUPERSEDED by ADR-xxx"),": ADR which has been superseded by a new ADR."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ABANDONED"),": the ADR is no longer pursued by the original authors.")),(0,r.kt)("h2",{id:"language-used-in-rfc"},"Language used in RFC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The background/goal should be written in the present tense."),(0,r.kt)("li",{parentName:"ul"},"Avoid using a first, personal form.")))}d.isMDXComponent=!0}}]);