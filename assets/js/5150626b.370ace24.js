"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[45980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=o,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:1},r="AutoCLI",s={unversionedId:"build/tooling/autocli",id:"version-0.47/build/tooling/autocli",title:"AutoCLI",description:"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.",source:"@site/versioned_docs/version-0.47/build/tooling/03-autocli.md",sourceDirName:"build/tooling",slug:"/build/tooling/autocli",permalink:"/v0.47/build/tooling/autocli",draft:!1,tags:[],version:"0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Confix",permalink:"/v0.47/build/tooling/confix"},next:{title:"Hubl",permalink:"/v0.47/build/tooling/hubl"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Flags",id:"flags",level:2},{value:"Commands and Queries",id:"commands-and-queries",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Specifying Subcommands",id:"specifying-subcommands",level:3},{value:"Positional Arguments",id:"positional-arguments",level:3},{value:"Customising Flag Names",id:"customising-flag-names",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autocli"},"AutoCLI"),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This document details how to build CLI and REST interfaces for a module. Examples from various Cosmos SDK modules are included.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v0.47/build/building-modules/intro"},"Building Modules Intro")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," package is a ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cosmossdk.io/client/v2/autocli"},"Go library")," for generating CLI (command line interface) interfaces for Cosmos SDK-based applications. It provides a simple way to add CLI commands to your application by generating them automatically based on your gRPC service definitions. Autocli generates CLI commands and flags directly from your protobuf messages, including options, input parameters, and output parameters. This means that you can easily add a CLI interface to your application without having to manually create and manage commands."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Here are the steps to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," package:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define your app's modules that implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"appmodule.AppModule")," interface."),(0,o.kt)("li",{parentName:"ol"},"Configure how behave ",(0,o.kt)("inlineCode",{parentName:"li"},"autocli")," command generation, by implementing the ",(0,o.kt)("inlineCode",{parentName:"li"},"func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions")," method on the module. Learn more ",(0,o.kt)("a",{parentName:"li",href:"#advanced-usage"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"autocli.AppOptions")," struct to specifies the modules you defined. If you are using the ",(0,o.kt)("inlineCode",{parentName:"li"},"depinject")," package to manage your app's dependencies, it can automatically create an instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"autocli.AppOptions")," based on your app's configuration."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"EnhanceRootCommand()")," method provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"autocli")," to add the CLI commands for the specified modules to your root command and can also be found in the ",(0,o.kt)("inlineCode",{parentName:"li"},"client/v2/autocli/app.go")," file. Additionally, this method adds the ",(0,o.kt)("inlineCode",{parentName:"li"},"autocli")," functionality to your app's root command. This method is additive only, meaning that it does not create commands if they are already registered for a module. Instead, it adds any missing commands to the root command.")),(0,o.kt)("p",null,"Here's an example of how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Define your app\'s modules\ntestModules := map[string]appmodule.AppModule{\n    "testModule": &TestModule{},\n}\n\n// Define the autocli AppOptions\nautoCliOpts := autocli.AppOptions{\n    Modules: testModules,\n}\n\n// Get the root command\nrootCmd := &cobra.Command{\n    Use: "app",\n}\n\n// Enhance the root command with autocli\nautocli.EnhanceRootCommand(rootCmd, autoCliOpts)\n\n// Run the root command\nif err := rootCmd.Execute(); err != nil {\n    fmt.Println(err)\n}\n')),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," generates flags for each field in a protobuf message. By default, the names of the flags are generated based on the names of the fields in the message. You can customise the flag names using the ",(0,o.kt)("inlineCode",{parentName:"p"},"namingOptions")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddMessageFlags()")," method."),(0,o.kt)("p",null,"To define flags for a message, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddMessageFlags()")," method. This method takes the ",(0,o.kt)("inlineCode",{parentName:"p"},"cobra.Command")," instance and the message type as input, and generates flags for each field in the message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/1ac260cb1c6f05666f47e67f8b2cfd6229a55c3b/client/v2/autocli/common.go#L44-L49\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"binder")," variable returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddMessageFlags()")," method is used to bind the command-line arguments to the fields in the message."),(0,o.kt)("p",null,"You can also customise the behavior of the flags using the ",(0,o.kt)("inlineCode",{parentName:"p"},"namingOptions")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddMessageFlags()")," method. This parameter allows you to specify a custom prefix for the flags, and to specify whether to generate flags for repeated fields and whether to generate flags for fields with default values."),(0,o.kt)("h2",{id:"commands-and-queries"},"Commands and Queries"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," package generates CLI commands and flags for each method defined in your gRPC service. By default, it generates commands for each RPC method that does not return a stream of messages. The commands are named based on the name of the service method."),(0,o.kt)("p",null,"For example, given the following protobuf definition for a service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"service MyService {\n  rpc MyMethod(MyRequest) returns (MyResponse) {}\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," will generate a command named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-method")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyMethod")," method. The command will have flags for each field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyRequest")," message."),(0,o.kt)("p",null,"If you want to customise the behavior of a command, you can define a custom command by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli.Command")," interface. You can then register the command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli.Builder")," instance for your application."),(0,o.kt)("p",null,"Similarly, you can define a custom query by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli.Query")," interface. You can then register the query with the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli.Builder")," instance for your application."),(0,o.kt)("p",null,"To add a custom command or query, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddCustomCommand")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddCustomQuery")," methods, respectively. These methods take a ",(0,o.kt)("inlineCode",{parentName:"p"},"cobra.Command")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cobra.Command")," instance, respectively, which can be used to define the behavior of the command or query."),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("h3",{id:"specifying-subcommands"},"Specifying Subcommands"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," generates a command for each method in your gRPC service. However, you can specify subcommands to group related commands together. To specify subcommands, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ServiceCommandDescriptor")," struct."),(0,o.kt)("p",null,"This example shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ServiceCommandDescriptor")," struct to group related commands together and specify subcommands in your gRPC service by defining an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ModuleOptions")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli.go")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/bcdf81cbaf8d70c4e4fa763f51292d54aed689fd/x/gov/autocli.go#L9-L27\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoCLIOptions()")," method in the autocli package allows you to specify the services and sub-commands to be mapped for your app. In the example code, an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ModuleOptions")," struct is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appmodule.AppModule")," implementation located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/gov/autocli.go")," file. This configuration groups related commands together and specifies subcommands for each service."),(0,o.kt)("h3",{id:"positional-arguments"},"Positional Arguments"),(0,o.kt)("p",null,"Positional arguments are arguments that are passed to a command without being specified as a flag. They are typically used for providing additional context to a command, such as a filename or search query."),(0,o.kt)("p",null,"To add positional arguments to a command, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.PositionalArgDescriptor")," struct, as seen in the example below. You need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtoField")," parameter, which is the name of the protobuf field that should be used as the positional argument. In addition, if the parameter is a variable-length argument, you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Varargs")," parameter as ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". This can only be applied to the last positional parameter, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtoField")," must be a repeated field."),(0,o.kt)("p",null,"Here's an example of how to define a positional argument for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/bcdf81cbaf8d70c4e4fa763f51292d54aed689fd/x/auth/autocli.go#L8-L32\n")),(0,o.kt)("p",null,"Here are some example commands that use the positional arguments we defined above:"),(0,o.kt)("p",null,"To query an account by address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<appd> query auth account cosmos1abcd...xyz\n")),(0,o.kt)("p",null,"To query an account address by account number:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<appd> query auth address-by-acc-num 1\n")),(0,o.kt)("p",null,"In both of these commands, the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," service is being queried with the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," subcommand, followed by the specific method being called (",(0,o.kt)("inlineCode",{parentName:"p"},"account")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"address-by-acc-num"),"). The positional argument is included at the end of the command (",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos1abcd...xyz")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),") to specify the address or account number, respectively."),(0,o.kt)("h3",{id:"customising-flag-names"},"Customising Flag Names"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," generates flag names based on the names of the fields in your protobuf message. However, you can customise the flag names by providing a ",(0,o.kt)("inlineCode",{parentName:"p"},"FlagOptions")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Builder.AddMessageFlags()")," method. This parameter allows you to specify custom names for flags based on the names of the message fields. For example, if you have a message with the fields ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"test1"),", you can use the following naming options to customise the flags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'options := autocliv1.RpcCommandOptions{ \n    FlagOptions: map[string]*autocliv1.FlagOptions{ \n        "test": { Name: "custom_name", }, \n        "test1": { Name: "other_name", }, \n    }, \n}\n\nbuilder.AddMessageFlags(message, options)\n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.RpcCommandOptions")," is a field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ServiceCommandDescriptor")," struct, which is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1")," package. To use this option, you can define an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"autocliv1.ModuleOptions")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"appmodule.AppModule")," implementation and specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"FlagOptions")," for the relevant service command descriptor."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"autocli")," is a powerful tool for adding CLI interfaces to your Cosmos SDK-based applications. It allows you to easily generate CLI commands and flags from your protobuf messages, and provides many options for customising the behavior of your CLI application."),(0,o.kt)("p",null,"To further enhance your CLI experience with Cosmos SDK-based blockchains, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Hubl"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Hubl")," is a tool that allows you to query any Cosmos SDK-based blockchain using the new AutoCLI feature of the Cosmos SDK. With hubl, you can easily configure a new chain and query modules with just a few simple commands."),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"Hubl"),", including how to configure a new chain and query a module, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/tooling/hubl"},"Hubl documentation"),"."))}u.isMDXComponent=!0}}]);