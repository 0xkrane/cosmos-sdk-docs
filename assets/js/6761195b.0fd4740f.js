"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[18470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const a={},l="RFC 005: Optimistic Execution",r={unversionedId:"build/rfc/rfc-005-optimistic-execution",id:"build/rfc/rfc-005-optimistic-execution",title:"RFC 005: Optimistic Execution",description:"Changelog",source:"@site/docs/build/rfc/rfc-005-optimistic-execution.md",sourceDirName:"build/rfc",slug:"/build/rfc/rfc-005-optimistic-execution",permalink:"/main/build/rfc/rfc-005-optimistic-execution",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"RFC 004: Accounts",permalink:"/main/build/rfc/rfc-004-accounts"},next:{title:"RFC 006: Handlers",permalink:"/main/build/rfc/rfc-006-handlers"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Background",id:"background",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Decision",id:"decision",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rfc-005-optimistic-execution"},"RFC 005: Optimistic Execution"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2023-06-07: Refactor for Cosmos SDK (@facundomedica)"),(0,o.kt)("li",{parentName:"ul"},"2022-08-16: Initial draft by Sei Network")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Before ABCI++, the first and only time a CometBFT blockchain's application layer would know about a block proposal is after the voting period, at which point CometBFT would invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EndBlock"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Commit")," ABCI methods of the application, with the block proposal contents passed in."),(0,o.kt)("p",null,"With the introduction of ABCI++, the application layer now receives the block proposal before the voting period commences. This can be used to optimistically execute the block proposal in parallel with the voting process, thus reducing the block time."),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"Given that the application receives the block proposal in an earlier stage (",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),"), it can be executed in the background so when ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," is called the response can returned instantly."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"The newly introduced ABCI method ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," is called after a node receives the full block proposal of the current height but before prevote starts. CometBFT states that preemptively executing the block proposal is a potential use case for it:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Contains all information on the proposed block needed to fully execute it.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Application may fully execute the block as though it was handling\n",(0,o.kt)("inlineCode",{parentName:"li"},"RequestFinalizeBlock"),"."),(0,o.kt)("li",{parentName:"ul"},"However, any resulting state changes must be kept as ",(0,o.kt)("em",{parentName:"li"},"candidate state"),",\nand the Application should be ready to discard it in case another block is decided."))),(0,o.kt)("li",{parentName:"ul"},"The Application MAY fully execute the block ","\u2014"," immediate execution"))))),(0,o.kt)("p",null,"Nevertheless, synchronously executing the proposal preemptively would not improve block time because it would just change the order of events (so the time we would like to save will be spent at ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock"),")."),(0,o.kt)("p",null,"Instead, we need to make block execution asynchronous by starting a goroutine in ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," (whose termination signal is kept in the application context) and returning a response immediately. That way, the actual block execution would happen at the same time as voting. When voting finishes and ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," is called, the application handler can wait for the previously started goroutine to finish, and commit the resulting cache store if the block hash matches."),(0,o.kt)("p",null,"Assuming average voting period takes ",(0,o.kt)("inlineCode",{parentName:"p"},"P")," and average block execution takes ",(0,o.kt)("inlineCode",{parentName:"p"},"Q"),", this would reduce the average block time by ",(0,o.kt)("inlineCode",{parentName:"p"},"P + Q - max(P, Q)"),"."),(0,o.kt)("p",null,"Sei Network reported ",(0,o.kt)("inlineCode",{parentName:"p"},"P=~600ms")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Q=~300ms")," during a load test, meaning that optimistic execution could cut the block time by ~300ms."),(0,o.kt)("p",null,"The following diagram illustrates the intended flow:"),(0,o.kt)("mermaid",{value:"flowchart LR;\n    Propose--\x3eProcessProposal;\n    ProcessProposal--\x3ePrevote;\n    Precommit--\x3eFinalizeBlock;\n    FinalizeBlock--\x3eCommit;\n    subgraph CometBFT\n    Propose\n    Prevote--\x3ePrecommit;\n    Commit\n    end\n    subgraph CosmosSDK\n    OEG[Optimistic Execution Goroutine]-.->FinalizeBlock\n    ProcessProposal-.->OEG\n    FinalizeBlock\n    end"}),(0,o.kt)("p",null,"Some considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the case that a proposal is being rejected by the local node, this node won't attempt to execute the proposal."),(0,o.kt)("li",{parentName:"ul"},"The app must drop any previous Optimistic Execution data if ",(0,o.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," is called, in other words, abort and restart.")),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"The execution context needs to have the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The block proposal (",(0,o.kt)("inlineCode",{parentName:"li"},"abci.RequestFinalizeBlock"),")"),(0,o.kt)("li",{parentName:"ul"},"Termination and completion signal for the OE goroutine")),(0,o.kt)("p",null,"The OE goroutine would run on top of a cached branch of the root multi-store (which is the default behavior for ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," as we only write to the underlying store once we've reached the end)."),(0,o.kt)("p",null,"The OE goroutine would periodically check if a termination signal has been sent to it, and stops if so. Once the OE goroutine finishes the execution it will set the completion signal."),(0,o.kt)("p",null,"The application developers will have the option to enable or disable Optimistic Execution, being disabled by default. To enable it, the application will need to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"SetOptimisticExecution")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"NewBaseApp"),". This is because this feature will be considered experimental until it's proven to be stable. Note that individual nodes should not enable/disable this feature on their own, as it could lead to inconsistent behavior."),(0,o.kt)("p",null,"Upon receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," call, the SDK would adopt the following procedure if OE is enabled:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"abort any running OE goroutine and wait for goroutine exit\nif height > initial height:\n    set OE fields\n    kick off an OP goroutine that optimistically process the proposal\nelse:\n    do nothing\nrespond to CometBFT\n")),(0,o.kt)("p",null,"OE won't be enabled during the first block of the chain, regardless of the configuration. This is because during the first block ",(0,o.kt)("inlineCode",{parentName:"p"},"InitChain")," writes to ",(0,o.kt)("inlineCode",{parentName:"p"},"finalizeBlockState")," so ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," starts with an already initialized state. In the case that an abort would be needed it would mean we need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"InitChain")," again or discard/recover the state; either way complicates the implementation too much just for a single block."),(0,o.kt)("p",null,"Upon receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"FinalizeBlock")," call, the SDK would adopt the following procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if OE is enabled:\n    abort if the currently executing OE's hash doesn't match the proposal's hash\n    if aborted:\n        process the proposal synchronously\n    else:\n        wait for the OE goroutine to finish\n        respond to CometBFT\n")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,o.kt)("p",null,"This can only be implemented on SDK versions using ABCI++, meaning v0.50.x and above."),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shorter block times for the same amount of transactions")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adds some complexity to the SDK"),(0,o.kt)("li",{parentName:"ul"},"Multiple rounds on a block that contains long running transactions could be problematic")),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each node can decide whether to use this feature or not.")),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sei-protocol/sei-chain/blob/81b8af7980df722a63a910cc35ff96e60a94cbfe/docs/rfc/rfc-000-optimistic-proposal-processing.md"},"Original RFC by Sei Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cometbft/cometbft/blob/a09f5d33ecd8846369b93cae9063291eb8abc3a0/spec/abci/abci%2B%2B_methods.md"},"ABCI++ methods in CometBFT"))))}d.isMDXComponent=!0}}]);