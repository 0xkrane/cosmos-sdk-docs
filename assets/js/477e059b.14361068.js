"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[54647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},l="x/crisis",s={unversionedId:"build/modules/crisis/README",id:"version-0.47/build/modules/crisis/README",title:"x/crisis",description:"Overview",source:"@site/versioned_docs/version-0.47/build/modules/crisis/README.md",sourceDirName:"build/modules/crisis",slug:"/build/modules/crisis/",permalink:"/v0.47/build/modules/crisis/",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"x/consensus",permalink:"/v0.47/build/modules/consensus/"},next:{title:"x/distribution",permalink:"/v0.47/build/modules/distribution/"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Contents",id:"contents",level:2},{value:"State",id:"state",level:2},{value:"ConstantFee",id:"constantfee",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgVerifyInvariant",id:"msgverifyinvariant",level:3},{value:"Events",id:"events",level:2},{value:"Handlers",id:"handlers",level:3},{value:"MsgVerifyInvariance",id:"msgverifyinvariance",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Client",id:"client",level:2},{value:"CLI",id:"cli",level:3},{value:"Transactions",id:"transactions",level:4},{value:"invariant-broken",id:"invariant-broken",level:5}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xcrisis"},(0,r.kt)("inlineCode",{parentName:"h1"},"x/crisis")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The crisis module halts the blockchain under the circumstance that a blockchain\ninvariant is broken. Invariants can be registered with the application during the\napplication initialization process."),(0,r.kt)("h2",{id:"contents"},"Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state"},"State")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#messages"},"Messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#events"},"Events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#client"},"Client"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cli"},"CLI"))))),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("h3",{id:"constantfee"},"ConstantFee"),(0,r.kt)("p",null,"Due to the anticipated large gas cost requirement to verify an invariant (and\npotential to exceed the maximum allowable block gas limit) a constant fee is\nused instead of the standard gas consumption method. The constant fee is\nintended to be larger than the anticipated gas cost of running the invariant\nwith the standard gas consumption method."),(0,r.kt)("p",null,"The ConstantFee param is stored in the module params state with the prefix of ",(0,r.kt)("inlineCode",{parentName:"p"},"0x01"),",\nit can be updated with governance or the address with authority."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Params: ",(0,r.kt)("inlineCode",{parentName:"li"},"mint/params -> legacy_amino(sdk.Coin)"))),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("p",null,"In this section we describe the processing of the crisis messages and the\ncorresponding updates to the state."),(0,r.kt)("h3",{id:"msgverifyinvariant"},"MsgVerifyInvariant"),(0,r.kt)("p",null,"Blockchain invariants can be checked using the ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgVerifyInvariant")," message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/crisis/v1beta1/tx.proto#L26-L42\n")),(0,r.kt)("p",null,"This message is expected to fail if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the sender does not have enough coins for the constant fee"),(0,r.kt)("li",{parentName:"ul"},"the invariant route is not registered")),(0,r.kt)("p",null,"This message checks the invariant provided, and if the invariant is broken it\npanics, halting the blockchain. If the invariant is broken, the constant fee is\nnever deducted as the transaction is never committed to a block (equivalent to\nbeing refunded). However, if the invariant is not broken, the constant fee will\nnot be refunded."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"The crisis module emits the following events:"),(0,r.kt)("h3",{id:"handlers"},"Handlers"),(0,r.kt)("h4",{id:"msgverifyinvariance"},"MsgVerifyInvariance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invariant"),(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"{invariantRoute}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"crisis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"verify_invariant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"{senderAddress}")))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The crisis module contains the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConstantFee"),(0,r.kt)("td",{parentName:"tr",align:null},"object (coin)"),(0,r.kt)("td",{parentName:"tr",align:null},'{"denom":"uatom","amount":"1000"}')))),(0,r.kt)("h2",{id:"client"},"Client"),(0,r.kt)("h3",{id:"cli"},"CLI"),(0,r.kt)("p",null,"A user can query and interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"crisis")," module using the CLI."),(0,r.kt)("h4",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"crisis")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx crisis --help\n")),(0,r.kt)("h5",{id:"invariant-broken"},"invariant-broken"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"invariant-broken")," command submits proof when an invariant was broken to halt the chain"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx crisis invariant-broken [module-name] [invariant-route] [flags]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx crisis invariant-broken bank total-supply --from=[keyname or address]\n")))}p.isMDXComponent=!0}}]);