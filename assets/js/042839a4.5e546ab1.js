"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[23992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const r={},a="Getting Started",s={unversionedId:"tutorials/vote-extensions/auction-frontrunning/getting-started",id:"version-0.50/tutorials/vote-extensions/auction-frontrunning/getting-started",title:"Getting Started",description:"Table of Contents",source:"@site/versioned_docs/version-0.50/tutorials/vote-extensions/auction-frontrunning/00-getting-started.md",sourceDirName:"tutorials/vote-extensions/auction-frontrunning",slug:"/tutorials/vote-extensions/auction-frontrunning/getting-started",permalink:"/v0.50/tutorials/vote-extensions/auction-frontrunning/getting-started",draft:!1,tags:[],version:"0.50",sidebarPosition:0,frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Tutorials",permalink:"/v0.50/tutorials/"},next:{title:"Understanding Front-Running and more",permalink:"/v0.50/tutorials/vote-extensions/auction-frontrunning/understanding-frontrunning"}},l={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Getting Started",id:"getting-started-1",level:2},{value:"Overview of the Project",id:"overview-of-the-project",level:3},{value:"What are Vote extensions?",id:"what-are-vote-extensions",level:2},{value:"Requirements and Setup",id:"requirements-and-setup",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview-of-the-project"},"Getting Started")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"01-understanding-front-running"},"Understanding Front-Running")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"02-mitigating-front-running-with-vote-extensions"},"Mitigating Front-running with Vote Extensions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"03-demo-of-mitigating-front-running"},"Demo of Mitigating Front-Running"))),(0,o.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,o.kt)("h3",{id:"overview-of-the-project"},"Overview of the Project"),(0,o.kt)("p",null,"This tutorial outlines the development of a module designed to mitigate front-running in nameservice auctions. The following functions are central to this module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ExtendVote"),": Gathers bids from the mempool and includes them in the vote extension to ensure a fair and transparent auction process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PrepareProposal"),": Processes the vote extensions from the previous block, creating a special transaction that encapsulates bids to be included in the current proposal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ProcessProposal"),": Validates that the first transaction in the proposal is the special transaction containing the vote extensions and ensures the integrity of the bids.")),(0,o.kt)("p",null,"In this advanced tutorial, we will be working with an example application that facilitates the auctioning of nameservices. To see what frontrunning and nameservices are ",(0,o.kt)("a",{parentName:"p",href:"/v0.50/tutorials/vote-extensions/auction-frontrunning/understanding-frontrunning"},"here"),' This application provides a practical use case to explore the prevention of auction front-running, also known as "bid sniping", where a validator takes advantage of seeing a bid in the mempool to place their own higher bid before the original bid is processed.'),(0,o.kt)("p",null,"The tutorial will guide you through using the Cosmos SDK to mitigate front-running using vote extensions. The module will be built on top of the base blockchain provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorials/base")," directory and will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"auction")," module as a foundation. By the end of this tutorial, you will have a better understanding of how to prevent front-running in blockchain auctions, specifically in the context of nameservice auctioning."),(0,o.kt)("h2",{id:"what-are-vote-extensions"},"What are Vote extensions?"),(0,o.kt)("p",null,"Vote extensions is arbitrary information which can be inserted into a block. This feature is part of ABCI 2.0, which is available for use in the SDK 0.50 release and part of the 0.38 CometBFT release."),(0,o.kt)("p",null,"More information about vote extensions can be seen ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/build/abci/vote-extensions"},"here"),"."),(0,o.kt)("h2",{id:"requirements-and-setup"},"Requirements and Setup"),(0,o.kt)("p",null,"Before diving into the advanced tutorial on auction front-running simulation, ensure you meet the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Golang >1.21.5")," installed"),(0,o.kt)("li",{parentName:"ul"},"Familiarity with the concepts of front-running and MEV, as detailed in ",(0,o.kt)("a",{parentName:"li",href:"/v0.50/tutorials/vote-extensions/auction-frontrunning/understanding-frontrunning"},"Understanding Front-Running")),(0,o.kt)("li",{parentName:"ul"},"Understanding of Vote Extensions as described ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/build/abci/vote-extensions"},"here"))),(0,o.kt)("p",null,"You will also need a foundational blockchain to build upon coupled with your own module. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorials/base")," directory has the necessary blockchain code to start your custom project with the Cosmos SDK. For the module, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"auction")," module provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tutorials/auction/x/auction")," directory as a reference but please be aware that all of the code needed to implement vote extensions is already implemented in this module."),(0,o.kt)("p",null,"This will set up a strong base for your blockchain, enabling the integration of advanced features such as auction front-running simulation."))}p.isMDXComponent=!0}}]);