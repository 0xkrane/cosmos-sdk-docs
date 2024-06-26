"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[32746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={},r="ADR 063: Core Module API",s={unversionedId:"build/architecture/adr-063-core-module-api",id:"version-0.47/build/architecture/adr-063-core-module-api",title:"ADR 063: Core Module API",description:"Changelog",source:"@site/versioned_docs/version-0.47/build/architecture/adr-063-core-module-api.md",sourceDirName:"build/architecture",slug:"/build/architecture/adr-063-core-module-api",permalink:"/v0.47/build/architecture/adr-063-core-module-api",draft:!1,tags:[],version:"0.47",frontMatter:{},sidebar:"buildSidebar",previous:{title:"ADR 062: Collections, a simplified storage layer for cosmos-sdk modules.",permalink:"/v0.47/build/architecture/adr-062-collections-state-layer"},next:{title:"ADR 64: ABCI 2.0 Integration (Phase II)",permalink:"/v0.47/build/architecture/adr-064-abci-2.0"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Core Services",id:"core-services",level:3},{value:"Store Services",id:"store-services",level:4},{value:"Event Service",id:"event-service",level:4},{value:"Logger",id:"logger",level:4},{value:"<code>MsgServer</code> and <code>QueryServer</code> registration",id:"msgserver-and-queryserver-registration",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Begin and End Blockers",id:"begin-and-end-blockers",level:4},{value:"Remaining Parts of AppModule",id:"remaining-parts-of-appmodule",level:4},{value:"Example Usage",id:"example-usage",level:4},{value:"Runtime Compatibility Version",id:"runtime-compatibility-version",level:3},{value:"Testing",id:"testing",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-063-core-module-api"},"ADR 063: Core Module API"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-08-18 First Draft"),(0,a.kt)("li",{parentName:"ul"},"2022-12-08 First Draft"),(0,a.kt)("li",{parentName:"ul"},"2023-01-24 Updates")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"ACCEPTED Partially Implemented"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"A new core API is proposed as a way to develop cosmos-sdk applications that will eventually replace the existing\n",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," frameworks a set of core services and extension interfaces. This core API aims to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"be simpler"),(0,a.kt)("li",{parentName:"ul"},"more extensible"),(0,a.kt)("li",{parentName:"ul"},"more stable than the current framework"),(0,a.kt)("li",{parentName:"ul"},"enable deterministic events and queries,"),(0,a.kt)("li",{parentName:"ul"},"support event listeners"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v0.47/build/architecture/adr-033-protobuf-inter-module-comm"},"ADR 033: Protobuf-based Inter-Module Communication")," clients.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Historically modules have exposed their functionality to the framework via the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModuleBasic"),"\ninterfaces which have the following shortcomings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"both ",(0,a.kt)("inlineCode",{parentName:"li"},"AppModule")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AppModuleBasic")," need to be defined and registered which is counter-intuitive"),(0,a.kt)("li",{parentName:"ul"},"apps need to implement the full interfaces, even parts they don't need (although there are workarounds for this),"),(0,a.kt)("li",{parentName:"ul"},"interface methods depend heavily on unstable third party dependencies, in particular Comet,"),(0,a.kt)("li",{parentName:"ul"},"legacy required methods have littered these interfaces for far too long")),(0,a.kt)("p",null,"In order to interact with the state machine, modules have needed to do a combination of these things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"get store keys from the app"),(0,a.kt)("li",{parentName:"ul"},"call methods on ",(0,a.kt)("inlineCode",{parentName:"li"},"sdk.Context")," which contains more or less the full set of capability available to modules.")),(0,a.kt)("p",null,"By isolating all the state machine functionality into ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context"),", the set of functionalities available to\nmodules are tightly coupled to this type. If there are changes to upstream dependencies (such as Comet)\nor new functionalities are desired (such as alternate store types), the changes need impact ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," and all\nconsumers of it (basically all modules). Also, all modules now receive ",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context")," and need to convert these\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context"),"'s with a non-ergonomic unwrapping function."),(0,a.kt)("p",null,"Any breaking changes to these interfaces, such as ones imposed by third-party dependencies like Comet, have the\nside effect of forcing all modules in the ecosystem to update in lock-step. This means it is almost impossible to have\na version of the module which can be run with 2 or 3 different versions of the SDK or 2 or 3 different versions of\nanother module. This lock-step coupling slows down overall development within the ecosystem and causes updates to\ncomponents to be delayed longer than they would if things were more stable and loosely coupled."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," API proposes a set of core APIs that modules can rely on to interact with the state machine and expose their\nfunctionalities to it that are designed in a principled way such that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tight coupling of dependencies and unrelated functionalities is minimized or eliminated"),(0,a.kt)("li",{parentName:"ul"},"APIs can have long-term stability guarantees"),(0,a.kt)("li",{parentName:"ul"},"the SDK framework is extensible in a safe and straightforward way")),(0,a.kt)("p",null,"The design principles of the core API are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"everything that a module wants to interact with in the state machine is a service"),(0,a.kt)("li",{parentName:"ul"},"all services coordinate state via ",(0,a.kt)("inlineCode",{parentName:"li"},"context.Context"),' and don\'t try to recreate the "bag of variables" approach of ',(0,a.kt)("inlineCode",{parentName:"li"},"sdk.Context")),(0,a.kt)("li",{parentName:"ul"},"all independent services are isolated in independent packages with minimal APIs and minimal dependencies"),(0,a.kt)("li",{parentName:"ul"},"the core API should be minimalistic and designed for long-term support (LTS)"),(0,a.kt)("li",{parentName:"ul"},'a "runtime" module will implement all the "core services" defined by the core API and can handle all module\nfunctionalities exposed by core extension interfaces'),(0,a.kt)("li",{parentName:"ul"},"other non-core and/or non-LTS services can be exposed by specific versions of runtime modules or other modules\nfollowing the same design principles, this includes functionality that interacts with specific non-stable versions of\nthird party dependencies such as Comet"),(0,a.kt)("li",{parentName:"ul"},"the core API doesn't implement ",(0,a.kt)("em",{parentName:"li"},"any")," functionality, it just defines types"),(0,a.kt)("li",{parentName:"ul"},"go stable API compatibility guidelines are followed: ",(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/module-compatibility"},"https://go.dev/blog/module-compatibility"))),(0,a.kt)("p",null,'A "runtime" module is any module which implements the core functionality of composing an ABCI app, which is currently\nhandled by ',(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModuleManager"),". Runtime modules which implement the core API are ",(0,a.kt)("em",{parentName:"p"},"intentionally")," separate\nfrom the core API in order to enable more parallel versions and forks of the runtime module than is possible with the\nSDK's current tightly coupled ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," design while still allowing for a high degree of composability and\ncompatibility."),(0,a.kt)("p",null,"Modules which are built only against the core API don't need to know anything about which version of runtime,\n",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," or Comet in order to be compatible. Modules from the core mainline SDK could be easily composed\nwith a forked version of runtime with this pattern."),(0,a.kt)("p",null,"This design is intended to enable matrices of compatible dependency versions. Ideally a given version of any module\nis compatible with multiple versions of the runtime module and other compatible modules. This will allow dependencies\nto be selectively updated based on battle-testing. More conservative projects may want to update some dependencies\nslower than more fast moving projects."),(0,a.kt)("h3",{id:"core-services"},"Core Services"),(0,a.kt)("p",null,'The following "core services" are defined by the core API. All valid runtime module implementations should provide\nimplementations of these services to modules via both ',(0,a.kt)("a",{parentName:"p",href:"/v0.47/build/architecture/adr-057-app-wiring"},"dependency injection")," and\nmanual wiring. The individual services described below are all bundled in a convenient ",(0,a.kt)("inlineCode",{parentName:"p"},"appmodule.Service"),'\n"bundle service" so that for simplicity modules can declare a dependency on a single service.'),(0,a.kt)("h4",{id:"store-services"},"Store Services"),(0,a.kt)("p",null,"Store services will be defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/core/store")," package."),(0,a.kt)("p",null,"The generic ",(0,a.kt)("inlineCode",{parentName:"p"},"store.KVStore")," interface is the same as current SDK ",(0,a.kt)("inlineCode",{parentName:"p"},"KVStore")," interface. Store keys have been refactored\ninto store services which, instead of expecting the context to know about stores, invert the pattern and allow\nretrieving a store from a generic context. There are three store services for the three types of currently supported\nstores - regular kv-store, memory, and transient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type KVStoreService interface {\n    OpenKVStore(context.Context) KVStore\n}\n\ntype MemoryStoreService interface {\n    OpenMemoryStore(context.Context) KVStore\n}\ntype TransientStoreService interface {\n    OpenTransientStore(context.Context) KVStore\n}\n")),(0,a.kt)("p",null,"Modules can use these services like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (k msgServer) Send(ctx context.Context, msg *types.MsgSend) (*types.MsgSendResponse, error) {\n    store := k.kvStoreSvc.OpenKVStore(ctx)\n}\n")),(0,a.kt)("p",null,"Just as with the current runtime module implementation, modules will not need to explicitly name these store keys,\nbut rather the runtime module will choose an appropriate name for them and modules just need to request the\ntype of store they need in their dependency injection (or manual) constructors."),(0,a.kt)("h4",{id:"event-service"},"Event Service"),(0,a.kt)("p",null,"The event ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," will be defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/core/event")," package."),(0,a.kt)("p",null,"The event ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," allows modules to emit typed and legacy untyped events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"package event\n\ntype Service interface {\n  // EmitProtoEvent emits events represented as a protobuf message (as described in ADR 032).\n  //\n  // Callers SHOULD assume that these events may be included in consensus. These events\n  // MUST be emitted deterministically and adding, removing or changing these events SHOULD\n  // be considered state-machine breaking.\n  EmitProtoEvent(ctx context.Context, event protoiface.MessageV1) error\n\n  // EmitKVEvent emits an event based on an event and kv-pair attributes.\n  //\n  // These events will not be part of consensus and adding, removing or changing these events is\n  // not a state-machine breaking change.\n  EmitKVEvent(ctx context.Context, eventType string, attrs ...KVEventAttribute) error\n\n  // EmitProtoEventNonConsensus emits events represented as a protobuf message (as described in ADR 032), without\n  // including it in blockchain consensus.\n  //\n  // These events will not be part of consensus and adding, removing or changing events is\n  // not a state-machine breaking change.\n  EmitProtoEventNonConsensus(ctx context.Context, event protoiface.MessageV1) error\n}\n")),(0,a.kt)("p",null,"Typed events emitted with ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitProto"),"  should be assumed to be part of blockchain consensus (whether they are part of\nthe block or app hash is left to the runtime to specify)."),(0,a.kt)("p",null,"Events emitted by ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitKVEvent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EmitProtoEventNonConsensus")," are not considered to be part of consensus and cannot be observed\nby other modules. If there is a client-side need to add events in patch releases, these methods can be used."),(0,a.kt)("h4",{id:"logger"},"Logger"),(0,a.kt)("p",null,"A logger (",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/log"),") must be supplied using ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject"),", and will\nbe made available for modules to use via ",(0,a.kt)("inlineCode",{parentName:"p"},"depinject.In"),".\nModules using it should follow the current pattern in the SDK by adding the module name before using it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ModuleInputs struct {\n  depinject.In\n\n  Logger log.Logger\n}\n\nfunc ProvideModule(in ModuleInputs) ModuleOutputs {\n  keeper := keeper.NewKeeper(\n    in.logger,\n  )\n}\n\nfunc NewKeeper(logger log.Logger) Keeper {\n  return Keeper{\n    logger: logger.With(log.ModuleKey, "x/"+types.ModuleName),\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n### Core `AppModule` extension interfaces\n\n\nModules will provide their core services to the runtime module via extension interfaces built on top of the\n`cosmossdk.io/core/appmodule.AppModule` tag interface. This tag interface requires only two empty methods which\nallow `depinject` to identify implementors as `depinject.OnePerModule` types and as app module implementations:\n\n```go\ntype AppModule interface {\n  depinject.OnePerModuleType\n\n  // IsAppModule is a dummy method to tag a struct as implementing an AppModule.\n  IsAppModule()\n}\n")),(0,a.kt)("p",null,"Other core extension interfaces will be defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/core")," should be supported by valid runtime\nimplementations."),(0,a.kt)("h4",{id:"msgserver-and-queryserver-registration"},(0,a.kt)("inlineCode",{parentName:"h4"},"MsgServer")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"QueryServer")," registration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MsgServer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryServer")," registration is done by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasServices")," extension interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type HasServices interface {\n    AppModule\n\n    RegisterServices(grpc.ServiceRegistrar)\n}\n\n")),(0,a.kt)("p",null,"Because of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos.msg.v1.service")," protobuf option, required for ",(0,a.kt)("inlineCode",{parentName:"p"},"Msg")," services, the same ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceRegitrar")," can be\nused to register both ",(0,a.kt)("inlineCode",{parentName:"p"},"Msg")," and query services."),(0,a.kt)("h4",{id:"genesis"},"Genesis"),(0,a.kt)("p",null,"The genesis ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," functions - ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultGenesis"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateGenesis"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"InitGenesis")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ExportGenesis")," - are specified\nagainst the ",(0,a.kt)("inlineCode",{parentName:"p"},"GenesisSource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GenesisTarget")," interfaces which will abstract over genesis sources which may be a single\nJSON object or collections of JSON objects that can be efficiently streamed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// GenesisSource is a source for genesis data in JSON format. It may abstract over a\n// single JSON object or separate files for each field in a JSON object that can\n// be streamed over. Modules should open a separate io.ReadCloser for each field that\n// is required. When fields represent arrays they can efficiently be streamed\n// over. If there is no data for a field, this function should return nil, nil. It is\n// important that the caller closes the reader when done with it.\ntype GenesisSource = func(field string) (io.ReadCloser, error)\n\n// GenesisTarget is a target for writing genesis data in JSON format. It may\n// abstract over a single JSON object or JSON in separate files that can be\n// streamed over. Modules should open a separate io.WriteCloser for each field\n// and should prefer writing fields as arrays when possible to support efficient\n// iteration. It is important the caller closers the writer AND checks the error\n// when done with it. It is expected that a stream of JSON data is written\n// to the writer.\ntype GenesisTarget = func(field string) (io.WriteCloser, error)\n")),(0,a.kt)("p",null,"All genesis objects for a given module are expected to conform to the semantics of a JSON object.\nEach field in the JSON object should be read and written separately to support streaming genesis.\nThe ",(0,a.kt)("a",{parentName:"p",href:"adr-055-orm.md"},"ORM")," and ",(0,a.kt)("a",{parentName:"p",href:"adr-062-collections-state-layer.md"},"collections")," both support\nstreaming genesis and modules using these frameworks generally do not need to write any manual\ngenesis code."),(0,a.kt)("p",null,"To support genesis, modules should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasGenesis")," extension interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type HasGenesis interface {\n    AppModule\n\n    // DefaultGenesis writes the default genesis for this module to the target.\n    DefaultGenesis(GenesisTarget) error\n\n    // ValidateGenesis validates the genesis data read from the source.\n    ValidateGenesis(GenesisSource) error\n\n    // InitGenesis initializes module state from the genesis source.\n    InitGenesis(context.Context, GenesisSource) error\n\n    // ExportGenesis exports module state to the genesis target.\n    ExportGenesis(context.Context, GenesisTarget) error\n}\n")),(0,a.kt)("h4",{id:"begin-and-end-blockers"},"Begin and End Blockers"),(0,a.kt)("p",null,"Modules that have functionality that runs before transactions (begin blockers) or after transactions\n(end blockers) should implement the has ",(0,a.kt)("inlineCode",{parentName:"p"},"HasBeginBlocker")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"HasEndBlocker")," interfaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type HasBeginBlocker interface {\n  AppModule\n  BeginBlock(context.Context) error\n}\n\ntype HasEndBlocker interface {\n  AppModule\n  EndBlock(context.Context) error\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock")," methods will take a ",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),", because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"most modules don't need Comet information other than ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockInfo")," so we can eliminate dependencies on specific\nComet versions"),(0,a.kt)("li",{parentName:"ul"},"for the few modules that need Comet block headers and/or return validator updates, specific versions of the\nruntime module will provide specific functionality for interacting with the specific version(s) of Comet\nsupported")),(0,a.kt)("p",null,"In order for ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InitGenesis")," to send back validator updates and retrieve full Comet\nblock headers, the runtime module for a specific version of Comet could provide services like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ValidatorUpdateService interface {\n    SetValidatorUpdates(context.Context, []abci.ValidatorUpdate)\n}\n")),(0,a.kt)("p",null,"Header Service defines a way to get header information about a block. This information is generalized for all implementations: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\ntype Service interface {\n    GetHeaderInfo(context.Context) Info\n}\n\ntype Info struct {\n    Height int64      // Height returns the height of the block\n    Hash []byte       // Hash returns the hash of the block header\n    Time time.Time    // Time returns the time of the block\n    ChainID string    // ChainId returns the chain ID of the block\n}\n")),(0,a.kt)("p",null,"Comet Service provides a way to get comet specific information: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Service interface {\n    GetCometInfo(context.Context) Info\n}\n\ntype CometInfo struct {\n  Evidence []abci.Misbehavior // Misbehavior returns the misbehavior of the block\n    // ValidatorsHash returns the hash of the validators\n    // For Comet, it is the hash of the next validators\n    ValidatorsHash []byte\n    ProposerAddress []byte            // ProposerAddress returns the address of the block proposer\n    DecidedLastCommit abci.CommitInfo // DecidedLastCommit returns the last commit info\n}\n")),(0,a.kt)("p",null,"If a user would like to provide a module other information they would need to implement another service like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type RollKit Interface {\n  ...\n}\n")),(0,a.kt)("p",null,"We know these types will change at the Comet level and that also a very limited set of modules actually need this\nfunctionality, so they are intentionally kept out of core to keep core limited to the necessary, minimal set of stable\nAPIs."),(0,a.kt)("h4",{id:"remaining-parts-of-appmodule"},"Remaining Parts of AppModule"),(0,a.kt)("p",null,"The current ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," framework handles a number of additional concerns which aren't addressed by this core API.\nThese include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gas"),(0,a.kt)("li",{parentName:"ul"},"block headers"),(0,a.kt)("li",{parentName:"ul"},"upgrades"),(0,a.kt)("li",{parentName:"ul"},"registration of gogo proto and amino interface types"),(0,a.kt)("li",{parentName:"ul"},"cobra query and tx commands"),(0,a.kt)("li",{parentName:"ul"},"gRPC gateway "),(0,a.kt)("li",{parentName:"ul"},"crisis module invariants"),(0,a.kt)("li",{parentName:"ul"},"simulations")),(0,a.kt)("p",null,"Additional ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," extension interfaces either inside or outside of core will need to be specified to handle\nthese concerns."),(0,a.kt)("p",null,"In the case of gogo proto and amino interfaces, the registration of these generally should happen as early\nas possible during initialization and in ",(0,a.kt)("a",{parentName:"p",href:"./adr-057-app-wiring.md"},"ADR 057: App Wiring"),", protobuf type registration",(0,a.kt)("br",{parentName:"p"}),"\n","happens before dependency injection (although this could alternatively be done dedicated DI providers)."),(0,a.kt)("p",null,"gRPC gateway registration should probably be handled by the runtime module, but the core API shouldn't depend on gRPC\ngateway types as 1) we are already using an older version and 2) it's possible the framework can do this registration\nautomatically in the future. So for now, the runtime module should probably provide some sort of specific type for doing\nthis registration ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type GrpcGatewayInfo struct {\n    Handlers []GrpcGatewayHandler\n}\n\ntype GrpcGatewayHandler func(ctx context.Context, mux *runtime.ServeMux, client QueryClient) error\n")),(0,a.kt)("p",null,"which modules can return in a provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func ProvideGrpcGateway() GrpcGatewayInfo {\n    return GrpcGatewayinfo {\n        Handlers: []Handler {types.RegisterQueryHandlerClient}\n    }\n}\n")),(0,a.kt)("p",null,"Crisis module invariants and simulations are subject to potential redesign and should be managed with types\ndefined in the crisis and simulation modules respectively."),(0,a.kt)("p",null,"Extension interface for CLI commands will be provided via the ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/client/v2")," module and its\n",(0,a.kt)("a",{parentName:"p",href:"adr-058-auto-generated-cli.md"},"autocli")," framework."),(0,a.kt)("h4",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"Here is an example of setting up a hypothetical ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," v2 module which uses the ",(0,a.kt)("a",{parentName:"p",href:"adr-055-orm.md"},"ORM")," for its state\nmanagement and genesis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"\ntype Keeper struct {\n    db orm.ModuleDB\n    evtSrv event.Service\n}\n\nfunc (k Keeper) RegisterServices(r grpc.ServiceRegistrar) {\n  foov1.RegisterMsgServer(r, k)\n  foov1.RegisterQueryServer(r, k)\n}\n\nfunc (k Keeper) BeginBlock(context.Context) error {\n    return nil\n}\n\nfunc ProvideApp(config *foomodulev2.Module, evtSvc event.EventService, db orm.ModuleDB) (Keeper, appmodule.AppModule){\n    k := &Keeper{db: db, evtSvc: evtSvc}\n    return k, k\n}\n")),(0,a.kt)("h3",{id:"runtime-compatibility-version"},"Runtime Compatibility Version"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," module will define a static integer var, ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmossdk.io/core.RuntimeCompatibilityVersion"),", which is\na minor version indicator of the core module that is accessible at runtime. Correct runtime module implementations\nshould check this compatibility version and return an error if the current ",(0,a.kt)("inlineCode",{parentName:"p"},"RuntimeCompatibilityVersion")," is higher\nthan the version of the core API that this runtime version can support. When new features are adding to the ",(0,a.kt)("inlineCode",{parentName:"p"},"core"),"\nmodule API that runtime modules are required to support, this version should be incremented."),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"A mock implementation of all services should be provided in core to allow for unit testing of modules\nwithout needing to depend on any particular version of runtime. Mock services should\nallow tests to observe service behavior or provide a non-production implementation - for instance memory\nstores can be used to mock stores."),(0,a.kt)("p",null,"For integration testing, a mock runtime implementation should be provided that allows composing different app modules\ntogether for testing without a dependency on runtime or Comet."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.kt)("p",null,"Early versions of runtime modules should aim to support as much as possible modules built with the existing\n",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," framework. As the core API is more widely adopted, later runtime versions may choose to\ndrop support and only support the core API plus any runtime module specific APIs (like specific versions of Comet)."),(0,a.kt)("p",null,"The core module itself should strive to remain at the go semantic version ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," as long as possible and follow design\nprinciples that allow for strong long-term support (LTS)."),(0,a.kt)("p",null,"Older versions of the SDK can support modules built against core with adaptors that convert wrap core ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),"\nimplementations in implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule")," that conform to that version of the SDK's semantics as well\nas by providing service implementations by wrapping ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context"),"."),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"better API encapsulation and separation of concerns"),(0,a.kt)("li",{parentName:"ul"},"more stable APIs"),(0,a.kt)("li",{parentName:"ul"},"more framework extensibility"),(0,a.kt)("li",{parentName:"ul"},"deterministic events and queries"),(0,a.kt)("li",{parentName:"ul"},"event listeners"),(0,a.kt)("li",{parentName:"ul"},"inter-module msg and query execution support"),(0,a.kt)("li",{parentName:"ul"},"more explicit support for forking and merging of module versions (including runtime)")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modules will need to be refactored to use this API"),(0,a.kt)("li",{parentName:"ul"},"some replacements for ",(0,a.kt)("inlineCode",{parentName:"li"},"AppModule")," functionality still need to be defined in follow-ups\n(type registration, commands, invariants, simulations) and this will take additional design work")),(0,a.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gas"),(0,a.kt)("li",{parentName:"ul"},"block headers"),(0,a.kt)("li",{parentName:"ul"},"upgrades"),(0,a.kt)("li",{parentName:"ul"},"registration of gogo proto and amino interface types"),(0,a.kt)("li",{parentName:"ul"},"cobra query and tx commands"),(0,a.kt)("li",{parentName:"ul"},"gRPC gateway"),(0,a.kt)("li",{parentName:"ul"},"crisis module invariants"),(0,a.kt)("li",{parentName:"ul"},"simulations")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"adr-033-protobuf-inter-module-comm.md"},"ADR 033: Protobuf-based Inter-Module Communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./adr-057-app-wiring.md"},"ADR 057: App Wiring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"adr-055-orm.md"},"ADR 055: ORM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"adr-028-public-key-addresses.md"},"ADR 028: Public Key Addresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/blog/module-compatibility"},"Keeping Your Modules Compatible"))))}u.isMDXComponent=!0}}]);