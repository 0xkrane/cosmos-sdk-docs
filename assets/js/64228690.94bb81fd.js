"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[29507],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?n.createElement(g,a(a({ref:r},d),{},{components:t})):n.createElement(g,a({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19529:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:1},a="Errors",s={unversionedId:"build/building-modules/errors",id:"build/building-modules/errors",title:"Errors",description:"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.",source:"@site/docs/build/building-modules/12-errors.md",sourceDirName:"build/building-modules",slug:"/build/building-modules/errors",permalink:"/main/build/building-modules/errors",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Folder Structure",permalink:"/main/build/building-modules/structure"},next:{title:"Upgrading Modules",permalink:"/main/build/building-modules/upgrade"}},l={},u=[{value:"Registration",id:"registration",level:2},{value:"Wrapping",id:"wrapping",level:2},{value:"ABCI",id:"abci",level:2}],d={toc:u},c="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document outlines the recommended usage and APIs for error handling in Cosmos SDK modules.")),(0,o.kt)("p",null,"Modules are encouraged to define and register their own errors to provide better\ncontext on failed message or handler execution. Typically, these errors should be\ncommon or general errors which can be further wrapped to provide additional specific execution context."),(0,o.kt)("p",null,"There are two ways to return errors. You can register custom errors with a codespace that is meant to provide more information to clients and normal go errors. The Cosmos SDK uses a mixture of both. "),(0,o.kt)("p",null,":::Warning\nIf errors are registered they are part of consensus and cannot be changed in a minor release\n:::"),(0,o.kt)("h2",{id:"registration"},"Registration"),(0,o.kt)("p",null,"Modules should define and register their custom errors in ",(0,o.kt)("inlineCode",{parentName:"p"},"x/{module}/errors.go"),".\nRegistration of errors is handled via the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/errors/errors.go"},(0,o.kt)("inlineCode",{parentName:"a"},"errors")," package"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/distribution/types/errors.go\n")),(0,o.kt)("p",null,'Each custom module error must provide the codespace, which is typically the module name\n(e.g. "distribution") and is unique per module, and a uint32 code. Together, the codespace and code\nprovide a globally unique Cosmos SDK error. Typically, the code is monotonically increasing but does not\nnecessarily have to be. The only restrictions on error codes are the following:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Must be greater than one, as a code value of one is reserved for internal errors."),(0,o.kt)("li",{parentName:"ul"},"Must be unique within the module.")),(0,o.kt)("h2",{id:"wrapping"},"Wrapping"),(0,o.kt)("p",null,"The custom module errors can be returned as their concrete type as they already fulfill the ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),"\ninterface. However, module errors can be wrapped to provide further context and meaning to failed execution."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/keeper.go#L141-L182\n")),(0,o.kt)("h2",{id:"abci"},"ABCI"),(0,o.kt)("p",null,"If a module error is registered, the Cosmos SDK ",(0,o.kt)("inlineCode",{parentName:"p"},"errors")," package allows ABCI information to be extracted\nthrough the ",(0,o.kt)("inlineCode",{parentName:"p"},"ABCIInfo")," function. The package also provides ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseCheckTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseDeliverTx")," as\nauxiliary functions to automatically get ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DeliverTx")," responses from an error."))}p.isMDXComponent=!0}}]);