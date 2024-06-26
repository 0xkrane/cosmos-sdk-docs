"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[3110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,k=s["".concat(m,".").concat(d)]||s[d]||h[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="Inter-block Cache",o={unversionedId:"build/spec/store/interblock-cache",id:"build/spec/store/interblock-cache",title:"Inter-block Cache",description:"* Inter-block Cache",source:"@site/docs/build/spec/store/interblock-cache.md",sourceDirName:"build/spec/store",slug:"/build/spec/store/interblock-cache",permalink:"/main/build/spec/store/interblock-cache",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Store",permalink:"/main/build/spec/store/"}},m={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Overview and basic concepts",id:"overview-and-basic-concepts",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Definitions",id:"definitions",level:3},{value:"System model and properties",id:"system-model-and-properties",level:2},{value:"Assumptions",id:"assumptions",level:3},{value:"Properties",id:"properties",level:3},{value:"Thread safety",id:"thread-safety",level:4},{value:"Crash recovery",id:"crash-recovery",level:4},{value:"Iteration",id:"iteration",level:4},{value:"Technical specification",id:"technical-specification",level:2},{value:"General design",id:"general-design",level:3},{value:"API",id:"api",level:3},{value:"CommitKVCacheManager",id:"commitkvcachemanager",level:4},{value:"CommitKVStoreCache",id:"commitkvstorecache",level:4},{value:"Implementation details",id:"implementation-details",level:3},{value:"History",id:"history",level:2},{value:"Copyright",id:"copyright",level:2}],c={toc:p},s="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inter-block-cache"},"Inter-block Cache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inter-block-cache"},"Inter-block Cache"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#synopsis"},"Synopsis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overview-and-basic-concepts"},"Overview and basic concepts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#motivation"},"Motivation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definitions"},"Definitions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#system-model-and-properties"},"System model and properties"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#assumptions"},"Assumptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#properties"},"Properties"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thread-safety"},"Thread safety")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#crash-recovery"},"Crash recovery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iteration"},"Iteration")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#technical-specification"},"Technical specification"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#general-design"},"General design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api"},"API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commitkvcachemanager"},"CommitKVCacheManager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commitkvstorecache"},"CommitKVStoreCache")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#implementation-details"},"Implementation details")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#history"},"History")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#copyright"},"Copyright"))))),(0,r.kt)("h2",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"The inter-block cache is an in-memory cache storing (in-most-cases) immutable state that modules need to read in between blocks. When enabled, all sub-stores of a multi store, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti"),", are wrapped."),(0,r.kt)("h2",{id:"overview-and-basic-concepts"},"Overview and basic concepts"),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"The goal of the inter-block cache is to allow SDK modules to have fast access to data that it is typically queried during the execution of every block. This is data that do not change often, e.g. module parameters. The inter-block cache wraps each ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," of a multi store such as ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti")," with a fixed size, write-through cache. Caches are not cleared after a block is committed, as opposed to other caching layers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"cachekv"),"."),(0,r.kt)("h3",{id:"definitions"},"Definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Store key")," uniquely identifies a store."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KVCache")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitKVStore")," wrapped with a cache."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cache manager")," is a key component of the inter-block cache responsible for maintaining a map from ",(0,r.kt)("inlineCode",{parentName:"li"},"store keys")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"KVCaches"),".")),(0,r.kt)("h2",{id:"system-model-and-properties"},"System model and properties"),(0,r.kt)("h3",{id:"assumptions"},"Assumptions"),(0,r.kt)("p",null,"This specification assumes that there exists a cache implementation accessible to the inter-block cache feature."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The implementation uses adaptive replacement cache (ARC), an enhancement over the standard last-recently-used (LRU) cache in that tracks both frequency and recency of use.")),(0,r.kt)("p",null,"The inter-block cache requires that the cache implementation to provide methods to create a cache, add a key/value pair, remove a key/value pair and retrieve the value associated to a key. In this specification, we assume that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache")," feature offers this functionality through the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewCache(size int)")," creates a new cache with ",(0,r.kt)("inlineCode",{parentName:"li"},"size")," capacity and returns it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get(key string)")," attempts to retrieve a key/value pair from ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache.")," It returns ",(0,r.kt)("inlineCode",{parentName:"li"},"(value []byte, success bool)"),". If ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache")," contains the key, it ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," contains the associated value and ",(0,r.kt)("inlineCode",{parentName:"li"},"success=true"),". Otherwise, ",(0,r.kt)("inlineCode",{parentName:"li"},"success=false")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," should be ignored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Add(key string, value []byte)")," inserts a key/value pair into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Remove(key string)")," removes the key/value pair identified by ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache"),".")),(0,r.kt)("p",null,"The specification also assumes that ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," offers the following API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Get(key string)")," attempts to retrieve a key/value pair from ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitKVStore"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set(key, string, value []byte)")," inserts a key/value pair into the ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitKVStore"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Delete(key string)")," removes the key/value pair identified by ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitKVStore"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ideally, both ",(0,r.kt)("inlineCode",{parentName:"p"},"Cache")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," should be specified in a different document and referenced here.")),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"thread-safety"},"Thread safety"),(0,r.kt)("p",null,"Accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cache manager")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"KVCache")," is not thread-safe: no method is guarded with a lock.\nNote that this is true even if the cache implementation is thread-safe."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For instance, assume that two ",(0,r.kt)("inlineCode",{parentName:"p"},"Set")," operations are executed concurrently on the same key, each writing a different value. After both are executed, the cache and the underlying store may be inconsistent, each storing a different value under the same key.")),(0,r.kt)("h4",{id:"crash-recovery"},"Crash recovery"),(0,r.kt)("p",null,"The inter-block cache transparently delegates ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit()")," to its aggregate ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),". If the\naggregate ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," supports atomic writes and use them to guarantee that the store is always in a consistent state in disk, the inter-block cache can be transparently moved to a consistent state when a failure occurs."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that this is the case for ",(0,r.kt)("inlineCode",{parentName:"p"},"IAVLStore"),", the preferred ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),". On commit, it calls ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveVersion()")," on the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"MutableTree"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveVersion")," writes to disk are atomic via batching. This means that only consistent versions of the store (the tree) are written to the disk. Thus, in case of a failure during a ",(0,r.kt)("inlineCode",{parentName:"p"},"SaveVersion")," call, on recovery from disk, the version of the store will be consistent.")),(0,r.kt)("h4",{id:"iteration"},"Iteration"),(0,r.kt)("p",null,"Iteration over each wrapped store is supported via the embedded ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," interface."),(0,r.kt)("h2",{id:"technical-specification"},"Technical specification"),(0,r.kt)("h3",{id:"general-design"},"General design"),(0,r.kt)("p",null,"The inter-block cache feature is composed by two components: ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVCacheManager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVCache"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVCacheManager")," implements the cache manager. It maintains a mapping from a store key to a ",(0,r.kt)("inlineCode",{parentName:"p"},"KVStore"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type CommitKVStoreCacheManager interface{\n    cacheSize uint\n    caches map[string]CommitKVStore\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStoreCache")," implements a ",(0,r.kt)("inlineCode",{parentName:"p"},"KVStore"),": a write-through cache that wraps a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),". This means that deletes and writes always happen to both the cache and the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),". Reads on the other hand first hit the internal cache. During a cache miss, the read is delegated to the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore")," and cached."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type CommitKVStoreCache interface{\n    store CommitKVStore\n    cache Cache\n}\n")),(0,r.kt)("p",null,"To enable inter-block cache on ",(0,r.kt)("inlineCode",{parentName:"p"},"rootmulti"),", one needs to instantiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVCacheManager")," and set it by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"SetInterBlockCache()")," before calling one of ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadLatestVersion()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadLatestVersionAndUpgrade(...)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadVersionAndUpgrade(...)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadVersion(version)"),"."),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"commitkvcachemanager"},"CommitKVCacheManager"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"NewCommitKVStoreCacheManager")," creates a new cache manager and returns it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the capacity of each of the KVCache maintained by the manager")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func NewCommitKVStoreCacheManager(size uint) CommitKVStoreCacheManager {\n    manager = CommitKVStoreCacheManager{size, make(map[string]CommitKVStore)}\n    return manager\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GetStoreCache")," returns a cache from the CommitStoreCacheManager for a given store key. If no cache exists for the store key, then one is created and set."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCacheManager")),(0,r.kt)("td",{parentName:"tr",align:null},"The cache manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeKey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The store key of the store being retrieved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStore")),(0,r.kt)("td",{parentName:"tr",align:null},"The store that it is cached in case the manager does not have any in its map of caches")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func GetStoreCache(\n    manager CommitKVStoreCacheManager,\n    storeKey string,\n    store CommitKVStore) CommitKVStore {\n\n    if manager.caches.has(storeKey) {\n        return manager.caches.get(storeKey)\n    } else {\n        cache = CommitKVStoreCacheManager{store, manager.cacheSize}\n        manager.set(storeKey, cache)\n        return cache\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Unwrap")," returns the underlying CommitKVStore for a given store key."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCacheManager")),(0,r.kt)("td",{parentName:"tr",align:null},"The cache manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storeKey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The store key of the store being unwrapped")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Unwrap(\n    manager CommitKVStoreCacheManager,\n    storeKey string) CommitKVStore {\n\n    if manager.caches.has(storeKey) {\n        cache = manager.caches.get(storeKey)\n        return cache.store\n    } else {\n        return nil\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reset")," resets the manager's map of caches."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCacheManager")),(0,r.kt)("td",{parentName:"tr",align:null},"The cache manager")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"function Reset(manager CommitKVStoreCacheManager) {\n\n    for (let storeKey of manager.caches.keys()) {\n        manager.caches.delete(storeKey)\n    }\n}\n")),(0,r.kt)("h4",{id:"commitkvstorecache"},"CommitKVStoreCache"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewCommitKVStoreCache")," creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStoreCache")," and returns it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"store"),(0,r.kt)("td",{parentName:"tr",align:null},"CommitKVStore"),(0,r.kt)("td",{parentName:"tr",align:null},"The store to be cached")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the capacity of the cache being created")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func NewCommitKVStoreCache(\n    store CommitKVStore,\n    size uint) CommitKVStoreCache {\n    KVCache = CommitKVStoreCache{store, NewCache(size)}\n    return KVCache\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Get")," retrieves a value by key. It first looks in the cache. If the key is not in the cache, the query is delegated to the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),". In the latter case, the key/value pair is cached. The method returns the value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KVCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")," from which the key/value pair is retrieved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the key/value pair being retrieved")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Get(\n    KVCache CommitKVStoreCache,\n    key string) []byte {\n    valueCache, success := KVCache.cache.Get(key)\n    if success {\n        // cache hit\n        return valueCache\n    } else {\n        // cache miss\n        valueStore = KVCache.store.Get(key)\n        KVCache.cache.Add(key, valueStore)\n        return valueStore\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set")," inserts a key/value pair into both the write-through cache and the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KVCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")," to which the key/value pair is inserted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the key/value pair being inserted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Value of the key/value pair being inserted")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Set(\n    KVCache CommitKVStoreCache,\n    key string,\n    value []byte) {\n\n    KVCache.cache.Add(key, value)\n    KVCache.store.Set(key, value)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," removes a key/value pair from both the write-through cache and the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStore"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KVCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")," from which the key/value pair is deleted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Key of the key/value pair being deleted")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Delete(\n    KVCache CommitKVStoreCache,\n    key string) {\n\n    KVCache.cache.Remove(key)\n    KVCache.store.Delete(key)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CacheWrap")," wraps a ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitKVStoreCache")," with another caching layer (",(0,r.kt)("inlineCode",{parentName:"p"},"CacheKV"),"). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is unclear whether there is a use case for ",(0,r.kt)("inlineCode",{parentName:"p"},"CacheWrap"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KVCache"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"CommitKVStoreCache")," being wrapped")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func CacheWrap(\n    KVCache CommitKVStoreCache) {\n     \n    return CacheKV.NewStore(KVCache)\n}\n")),(0,r.kt)("h3",{id:"implementation-details"},"Implementation details"),(0,r.kt)("p",null,"The inter-block cache implementation uses a fixed-sized adaptive replacement cache (ARC) as cache. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/golang-lru/blob/main/arc/arc.go"},"The ARC implementation")," is thread-safe. ARC is an enhancement over the standard LRU cache in that tracks both frequency and recency of use. This avoids a burst in access to new entries from evicting the frequently used older entries. It adds some additional tracking overhead to a standard LRU cache, computationally it is roughly ",(0,r.kt)("inlineCode",{parentName:"p"},"2x")," the cost, and the extra memory overhead is linear with the size of the cache. The default cache size is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"."),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"Dec 20, 2022 - Initial draft finished and submitted as a PR"),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"All content herein is licensed under ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0"),"."))}h.isMDXComponent=!0}}]);