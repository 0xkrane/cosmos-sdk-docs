"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[39094],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return o?a.createElement(h,s(s({ref:t},u),{},{components:o})):a.createElement(h,s({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},52203:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const i={},s="ADR 053: Go Module Refactoring",r={unversionedId:"build/architecture/adr-053-go-module-refactoring",id:"version-0.47/build/architecture/adr-053-go-module-refactoring",title:"ADR 053: Go Module Refactoring",description:"Changelog",source:"@site/versioned_docs/version-0.47/build/architecture/adr-053-go-module-refactoring.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-053-go-module-refactoring",permalink:"/v0.47/build/architecture/adr-053-go-module-refactoring",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 050: SIGN_MODE_TEXTUAL",permalink:"/v0.47/build/architecture/adr-050-sign-mode-textual"},next:{title:"ADR 054: Semver Compatible SDK Modules",permalink:"/v0.47/build/architecture/adr-054-semver-compatible-modules"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adr-053-go-module-refactoring"},"ADR 053: Go Module Refactoring"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-04-27: First Draft")),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"PROPOSED"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"The current SDK is built as a single monolithic go module. This ADR describes\nhow we refactor the SDK into smaller independently versioned go modules\nfor ease of maintenance."),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"Go modules impose certain requirements on software projects with respect to\nstable version numbers (anything above 0.x) in that ",(0,n.kt)("a",{parentName:"p",href:"https://go.dev/doc/modules/release-workflow#breaking"},"any API breaking changes\nnecessitate a major version"),"\nincrease which technically creates a new go module\n(with a v2, v3, etc. suffix)."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://go.dev/blog/module-compatibility"},"Keeping modules API compatible")," in\nthis way requires a fair amount of fair thought and discipline."),(0,n.kt)("p",null,"The Cosmos SDK is a fairly large project which originated before go modules\ncame into existence and has always been under a v0.x release even though\nit has been used in production for years now, not because it isn't production\nquality software, but rather because the API compatibility guarantees required\nby go modules are fairly complex to adhere to with such a large project.\nUp to now, it has generally been deemed more important to be able to break the\nAPI if needed rather than require all users update all package import paths\nto accommodate breaking changes causing v2, v3, etc. releases. This is in\naddition to the other complexities related to protobuf generated code that will\nbe addressed in a separate ADR."),(0,n.kt)("p",null,"Nevertheless, the desire for semantic versioning has been ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/10162"},"strong in the\ncommunity")," and the\nsingle go module release process has made it very hard to\nrelease small changes to isolated features in a timely manner. Release cycles\noften exceed six months which means small improvements done in a day or\ntwo get bottle-necked by everything else in the monolithic release cycle."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"To improve the current situation, the SDK is being refactored into multiple\ngo modules within the current repository. There has been a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/10582#discussioncomment-1813377"},"fair amount of\ndebate"),"\nas to how to do this, with some developers arguing for larger vs smaller\nmodule scopes. There are pros and cons to both approaches (which will be\ndiscussed below in the ",(0,n.kt)("a",{parentName:"p",href:"#consequences"},"Consequences")," section), but the\napproach being adopted is the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a go module should generally be scoped to a specific coherent set of\nfunctionality (such as math, errors, store, etc.)"),(0,n.kt)("li",{parentName:"ul"},"when code is removed from the core SDK and moved to a new module path, every\neffort should be made to avoid API breaking changes in the existing code using\naliases and wrapper types (as done in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10779"},"https://github.com/cosmos/cosmos-sdk/pull/10779"),"\nand ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/11788"},"https://github.com/cosmos/cosmos-sdk/pull/11788"),")"),(0,n.kt)("li",{parentName:"ul"},"new go modules should be moved to a standalone domain (",(0,n.kt)("inlineCode",{parentName:"li"},"cosmossdk.io"),") before\nbeing tagged as ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.0.0")," to accommodate the possibility that they may be\nbetter served by a standalone repository in the future"),(0,n.kt)("li",{parentName:"ul"},"all go modules should follow the guidelines in ",(0,n.kt)("a",{parentName:"li",href:"https://go.dev/blog/module-compatibility"},"https://go.dev/blog/module-compatibility"),"\nbefore ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.0.0")," is tagged and should make use of ",(0,n.kt)("inlineCode",{parentName:"li"},"internal")," packages to limit\nthe exposed API surface"),(0,n.kt)("li",{parentName:"ul"},"the new go module's API may deviate from the existing code where there are\nclear improvements to be made or to remove legacy dependencies (for instance on\namino or gogo proto), as long the old package attempts\nto avoid API breakage with aliases and wrappers"),(0,n.kt)("li",{parentName:"ul"},"care should be taken when simply trying to turn an existing package into a\nnew go module: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/golang/go/wiki/Modules#is-it-possible-to-add-a-module-to-a-multi-module-repository"},"https://github.com/golang/go/wiki/Modules#is-it-possible-to-add-a-module-to-a-multi-module-repository"),".\nIn general, it seems safer to just create a new module path (appending v2, v3, etc.\nif necessary), rather than trying to make an old package a new module.")),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,n.kt)("p",null,"If the above guidelines are followed to use aliases or wrapper types pointing\nin existing APIs that point back to the new go modules, there should be no or\nvery limited breaking changes to existing APIs."),(0,n.kt)("h3",{id:"positive"},"Positive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"standalone pieces of software will reach ",(0,n.kt)("inlineCode",{parentName:"li"},"v1.0.0")," sooner"),(0,n.kt)("li",{parentName:"ul"},"new features to specific functionality will be released sooner ")),(0,n.kt)("h3",{id:"negative"},"Negative"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"there will be more go module versions to update in the SDK itself and\nper-project, although most of these will hopefully be indirect")),(0,n.kt)("h3",{id:"neutral"},"Neutral"),(0,n.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,n.kt)("p",null,"Further discussions are occurring in primarily in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/10582"},"https://github.com/cosmos/cosmos-sdk/discussions/10582")," and within\nthe Cosmos SDK Framework Working Group."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.dev/doc/modules/release-workflow"},"https://go.dev/doc/modules/release-workflow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.dev/blog/module-compatibility"},"https://go.dev/blog/module-compatibility")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/10162"},"https://github.com/cosmos/cosmos-sdk/discussions/10162")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/10582"},"https://github.com/cosmos/cosmos-sdk/discussions/10582")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10779"},"https://github.com/cosmos/cosmos-sdk/pull/10779")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/11788"},"https://github.com/cosmos/cosmos-sdk/pull/11788"))))}m.isMDXComponent=!0}}]);