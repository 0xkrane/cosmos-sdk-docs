"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[62887],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(t),p=i,m=g["".concat(l,".").concat(p)]||g[p]||u[p]||s;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const s={sidebar_position:1},r="Generating, Signing and Broadcasting Transactions",o={unversionedId:"user/run-node/txs",id:"version-0.50/user/run-node/txs",title:"Generating, Signing and Broadcasting Transactions",description:"This document describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.",source:"@site/versioned_docs/version-0.50/user/run-node/03-txs.md",sourceDirName:"user/run-node",slug:"/user/run-node/txs",permalink:"/v0.50/user/run-node/txs",draft:!1,tags:[],version:"0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userSidebar",previous:{title:"Interacting with the Node",permalink:"/v0.50/user/run-node/interact-node"},next:{title:"Running a Testnet",permalink:"/v0.50/user/run-node/run-testnet"}},l={},c=[{value:"Using the CLI",id:"using-the-cli",level:2},{value:"Generating a Transaction",id:"generating-a-transaction",level:3},{value:"Signing a Transaction",id:"signing-a-transaction",level:3},{value:"Signing with Multiple Signers",id:"signing-with-multiple-signers",level:4},{value:"Broadcasting a Transaction",id:"broadcasting-a-transaction",level:3},{value:"Encoding a Transaction",id:"encoding-a-transaction",level:3},{value:"Decoding a Transaction",id:"decoding-a-transaction",level:3},{value:"Programmatically with Go",id:"programmatically-with-go",level:2},{value:"Generating a Transaction",id:"generating-a-transaction-1",level:3},{value:"Signing a Transaction",id:"signing-a-transaction-1",level:3},{value:"Broadcasting a Transaction",id:"broadcasting-a-transaction-1",level:3},{value:"Simulating a Transaction",id:"simulating-a-transaction",level:4},{value:"Using gRPC",id:"using-grpc",level:2},{value:"Broadcasting a Transaction",id:"broadcasting-a-transaction-2",level:3},{value:"Using REST",id:"using-rest",level:2},{value:"Broadcasting a Transaction",id:"broadcasting-a-transaction-3",level:3},{value:"Using CosmJS (JavaScript &amp; TypeScript)",id:"using-cosmjs-javascript--typescript",level:2}],d={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generating-signing-and-broadcasting-transactions"},"Generating, Signing and Broadcasting Transactions"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This document describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.")),(0,i.kt)("h2",{id:"using-the-cli"},"Using the CLI"),(0,i.kt)("p",null,"The easiest way to send transactions is using the CLI, as we have seen in the previous page when ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/user/run-node/interact-node#using-the-cli"},"interacting with a node"),". For example, running the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx bank send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000stake --chain-id my-test-chain --keyring-backend test\n")),(0,i.kt)("p",null,"will run the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"generate a transaction with one ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg")," (",(0,i.kt)("inlineCode",{parentName:"li"},"x/bank"),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"MsgSend"),"), and print the generated transaction to the console."),(0,i.kt)("li",{parentName:"ul"},"ask the user for confirmation to send the transaction from the ",(0,i.kt)("inlineCode",{parentName:"li"},"$MY_VALIDATOR_ADDRESS")," account."),(0,i.kt)("li",{parentName:"ul"},"fetch ",(0,i.kt)("inlineCode",{parentName:"li"},"$MY_VALIDATOR_ADDRESS")," from the keyring. This is possible because we have ",(0,i.kt)("a",{parentName:"li",href:"/v0.50/user/run-node/keyring"},"set up the CLI's keyring")," in a previous step."),(0,i.kt)("li",{parentName:"ul"},"sign the generated transaction with the keyring's account."),(0,i.kt)("li",{parentName:"ul"},"broadcast the signed transaction to the network. This is possible because the CLI connects to the node's CometBFT RPC endpoint.")),(0,i.kt)("p",null,"The CLI bundles all the necessary steps into a simple-to-use user experience. However, it's possible to run all the steps individually too."),(0,i.kt)("h3",{id:"generating-a-transaction"},"Generating a Transaction"),(0,i.kt)("p",null,"Generating a transaction can simply be done by appending the ",(0,i.kt)("inlineCode",{parentName:"p"},"--generate-only")," flag on any ",(0,i.kt)("inlineCode",{parentName:"p"},"tx")," command, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx bank send $MY_VALIDATOR_ADDRESS $RECIPIENT 1000stake --chain-id my-test-chain --generate-only\n")),(0,i.kt)("p",null,"This will output the unsigned transaction as JSON in the console. We can also save the unsigned transaction to a file (to be passed around between signers more easily) by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"> unsigned_tx.json")," to the above command."),(0,i.kt)("h3",{id:"signing-a-transaction"},"Signing a Transaction"),(0,i.kt)("p",null,"Signing a transaction using the CLI requires the unsigned transaction to be saved in a file. Let's assume the unsigned transaction is in a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned_tx.json")," in the current directory (see previous paragraph on how to do that). Then, simply run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx sign unsigned_tx.json --chain-id my-test-chain --keyring-backend test --from $MY_VALIDATOR_ADDRESS\n")),(0,i.kt)("p",null,"This command will decode the unsigned transaction and sign it with ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"$MY_VALIDATOR_ADDRESS"),"'s key, which we already set up in the keyring. The signed transaction will be output as JSON to the console, and, as above, we can save it to a file by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"--output-document signed_tx.json"),"."),(0,i.kt)("p",null,"Some useful flags to consider in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx sign")," command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--sign-mode"),": you may use ",(0,i.kt)("inlineCode",{parentName:"li"},"amino-json")," to sign the transaction using ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_MODE_LEGACY_AMINO_JSON"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--offline"),": sign in offline mode. This means that the ",(0,i.kt)("inlineCode",{parentName:"li"},"tx sign")," command doesn't connect to the node to retrieve the signer's account number and sequence, both needed for signing. In this case, you must manually supply the ",(0,i.kt)("inlineCode",{parentName:"li"},"--account-number")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--sequence")," flags. This is useful for offline signing, i.e. signing in a secure environment which doesn't have access to the internet.")),(0,i.kt)("h4",{id:"signing-with-multiple-signers"},"Signing with Multiple Signers"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that signing a transaction with multiple signers or with a multisig account, where at least one signer uses ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT"),", is not yet possible. You may follow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/issues/8141"},"this Github issue")," for more info.")),(0,i.kt)("p",null,"Signing with multiple signers is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx multisign")," command. This command assumes that all signers use ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_LEGACY_AMINO_JSON"),". The flow is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"tx sign")," command flow, but instead of signing an unsigned transaction file, each signer signs the file signed by previous signer(s). The ",(0,i.kt)("inlineCode",{parentName:"p"},"tx multisign")," command will append signatures to the existing transactions. It is important that signers sign the transaction ",(0,i.kt)("strong",{parentName:"p"},"in the same order")," as given by the transaction, which is retrievable using the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetSigners()")," method."),(0,i.kt)("p",null,"For example, starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"unsigned_tx.json"),", and assuming the transaction has 4 signers, we would run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Let signer1 sign the unsigned tx.\nsimd tx multisign unsigned_tx.json signer_key_1 --chain-id my-test-chain --keyring-backend test > partial_tx_1.json\n# Now signer1 will send the partial_tx_1.json to the signer2.\n# Signer2 appends their signature:\nsimd tx multisign partial_tx_1.json signer_key_2 --chain-id my-test-chain --keyring-backend test > partial_tx_2.json\n# Signer2 sends the partial_tx_2.json file to signer3, and signer3 can append his signature:\nsimd tx multisign partial_tx_2.json signer_key_3 --chain-id my-test-chain --keyring-backend test > partial_tx_3.json\n")),(0,i.kt)("h3",{id:"broadcasting-a-transaction"},"Broadcasting a Transaction"),(0,i.kt)("p",null,"Broadcasting a transaction is done using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx broadcast tx_signed.json\n")),(0,i.kt)("p",null,"You may optionally pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"--broadcast-mode")," flag to specify which response to receive from the node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync"),": the CLI waits for a CheckTx execution response only."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"async"),": the CLI returns immediately (transaction might fail).")),(0,i.kt)("h3",{id:"encoding-a-transaction"},"Encoding a Transaction"),(0,i.kt)("p",null,"In order to broadcast a transaction using the gRPC or REST endpoints, the transaction will need to be encoded first. This can be done using the CLI."),(0,i.kt)("p",null,"Encoding a transaction is done using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx encode tx_signed.json\n")),(0,i.kt)("p",null,"This will read the transaction from the file, serialize it using Protobuf, and output the transaction bytes as base64 in the console."),(0,i.kt)("h3",{id:"decoding-a-transaction"},"Decoding a Transaction"),(0,i.kt)("p",null,"The CLI can also be used to decode transaction bytes."),(0,i.kt)("p",null,"Decoding a transaction is done using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx decode [protobuf-byte-string]\n")),(0,i.kt)("p",null,"This will decode the transaction bytes and output the transaction as JSON in the console. You can also save the transaction to a file by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"> tx.json")," to the above command."),(0,i.kt)("h2",{id:"programmatically-with-go"},"Programmatically with Go"),(0,i.kt)("p",null,"It is possible to manipulate transactions programmatically via Go using the Cosmos SDK's ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," interface."),(0,i.kt)("h3",{id:"generating-a-transaction-1"},"Generating a Transaction"),(0,i.kt)("p",null,"Before generating a transaction, a new instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," needs to be created. Since the Cosmos SDK supports both Amino and Protobuf transactions, the first step would be to decide which encoding scheme to use. All the subsequent steps remain unchanged, whether you're using Amino or Protobuf, as ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," abstracts the encoding mechanisms. In the following snippet, we will use Protobuf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/cosmos/cosmos-sdk/simapp"\n)\n\nfunc sendTx() error {\n    // Choose your codec: Amino or Protobuf. Here, we use Protobuf, given by the following function.\n    app := simapp.NewSimApp(...)\n\n    // Create a new TxBuilder.\n    txBuilder := app.TxConfig().NewTxBuilder()\n\n    // --snip--\n}\n')),(0,i.kt)("p",null,"We can also set up some keys and addresses that will send and receive the transactions. Here, for the purpose of the tutorial, we will be using some dummy data to create keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/cosmos/cosmos-sdk/testutil/testdata"\n)\n\npriv1, _, addr1 := testdata.KeyTestPubAddr()\npriv2, _, addr2 := testdata.KeyTestPubAddr()\npriv3, _, addr3 := testdata.KeyTestPubAddr()\n')),(0,i.kt)("p",null,"Populating the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," can be done via its methods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/client/tx_config.go#L33-L50\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"\n)\n\nfunc sendTx() error {\n    // --snip--\n\n    // Define two x/bank MsgSend messages:\n    // - from addr1 to addr3,\n    // - from addr2 to addr3.\n    // This means that the transactions needs two signers: addr1 and addr2.\n    msg1 := banktypes.NewMsgSend(addr1, addr3, types.NewCoins(types.NewInt64Coin("atom", 12)))\n    msg2 := banktypes.NewMsgSend(addr2, addr3, types.NewCoins(types.NewInt64Coin("atom", 34)))\n\n    err := txBuilder.SetMsgs(msg1, msg2)\n    if err != nil {\n        return err\n    }\n\n    txBuilder.SetGasLimit(...)\n    txBuilder.SetFeeAmount(...)\n    txBuilder.SetMemo(...)\n    txBuilder.SetTimeoutHeight(...)\n}\n')),(0,i.kt)("p",null,"At this point, ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder"),"'s underlying transaction is ready to be signed."),(0,i.kt)("h3",{id:"signing-a-transaction-1"},"Signing a Transaction"),(0,i.kt)("p",null,"We set encoding config to use Protobuf, which will use ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGN_MODE_DIRECT")," by default. As per ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-020-protobuf-transaction-encoding.md"},"ADR-020"),", each signer needs to sign the ",(0,i.kt)("inlineCode",{parentName:"p"},"SignerInfo"),"s of all other signers. This means that we need to perform two steps sequentially:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for each signer, populate the signer's ",(0,i.kt)("inlineCode",{parentName:"li"},"SignerInfo")," inside ",(0,i.kt)("inlineCode",{parentName:"li"},"TxBuilder"),","),(0,i.kt)("li",{parentName:"ul"},"once all ",(0,i.kt)("inlineCode",{parentName:"li"},"SignerInfo"),"s are populated, for each signer, sign the ",(0,i.kt)("inlineCode",{parentName:"li"},"SignDoc")," (the payload to be signed).")),(0,i.kt)("p",null,"In the current ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder"),"'s API, both steps are done using the same method: ",(0,i.kt)("inlineCode",{parentName:"p"},"SetSignatures()"),". The current API requires us to first perform a round of ",(0,i.kt)("inlineCode",{parentName:"p"},"SetSignatures()")," ",(0,i.kt)("em",{parentName:"p"},"with empty signatures"),", only to populate ",(0,i.kt)("inlineCode",{parentName:"p"},"SignerInfo"),"s, and a second round of ",(0,i.kt)("inlineCode",{parentName:"p"},"SetSignatures()")," to actually sign the correct payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"\n    "github.com/cosmos/cosmos-sdk/types/tx/signing"\n    xauthsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"\n)\n\nfunc sendTx() error {\n    // --snip--\n\n    privs := []cryptotypes.PrivKey{priv1, priv2}\n    accNums:= []uint64{..., ...} // The accounts\' account numbers\n    accSeqs:= []uint64{..., ...} // The accounts\' sequence numbers\n\n    // First round: we gather all the signer infos. We use the "set empty\n    // signature" hack to do that.\n    var sigsV2 []signing.SignatureV2\n    for i, priv := range privs {\n        sigV2 := signing.SignatureV2{\n            PubKey: priv.PubKey(),\n            Data: &signing.SingleSignatureData{\n                SignMode:  encCfg.TxConfig.SignModeHandler().DefaultMode(),\n                Signature: nil,\n            },\n            Sequence: accSeqs[i],\n        }\n\n        sigsV2 = append(sigsV2, sigV2)\n    }\n    err := txBuilder.SetSignatures(sigsV2...)\n    if err != nil {\n        return err\n    }\n\n    // Second round: all signer infos are set, so each signer can sign.\n    sigsV2 = []signing.SignatureV2{}\n    for i, priv := range privs {\n        signerData := xauthsigning.SignerData{\n            ChainID:       chainID,\n            AccountNumber: accNums[i],\n            Sequence:      accSeqs[i],\n        }\n        sigV2, err := tx.SignWithPrivKey(\n            encCfg.TxConfig.SignModeHandler().DefaultMode(), signerData,\n            txBuilder, priv, encCfg.TxConfig, accSeqs[i])\n        if err != nil {\n            return nil, err\n        }\n\n        sigsV2 = append(sigsV2, sigV2)\n    }\n    err = txBuilder.SetSignatures(sigsV2...)\n    if err != nil {\n        return err\n    }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TxBuilder")," is now correctly populated. To print it, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"TxConfig")," interface from the initial encoding config ",(0,i.kt)("inlineCode",{parentName:"p"},"encCfg"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func sendTx() error {\n    // --snip--\n\n    // Generated Protobuf-encoded bytes.\n    txBytes, err := encCfg.TxConfig.TxEncoder()(txBuilder.GetTx())\n    if err != nil {\n        return err\n    }\n\n    // Generate a JSON string.\n    txJSONBytes, err := encCfg.TxConfig.TxJSONEncoder()(txBuilder.GetTx())\n    if err != nil {\n        return err\n    }\n    txJSON := string(txJSONBytes)\n}\n")),(0,i.kt)("h3",{id:"broadcasting-a-transaction-1"},"Broadcasting a Transaction"),(0,i.kt)("p",null,"The preferred way to broadcast a transaction is to use gRPC, though using REST (via ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC-gateway"),") or the CometBFT RPC is also posible. An overview of the differences between these methods is exposed ",(0,i.kt)("a",{parentName:"p",href:"/v0.50/learn/advanced/grpc_rest"},"here"),". For this tutorial, we will only describe the gRPC method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n\n    "google.golang.org/grpc"\n\n    "github.com/cosmos/cosmos-sdk/types/tx"\n)\n\nfunc sendTx(ctx context.Context) error {\n    // --snip--\n\n    // Create a connection to the gRPC server.\n    grpcConn := grpc.Dial(\n        "127.0.0.1:9090", // Or your gRPC server address.\n        grpc.WithInsecure(), // The Cosmos SDK doesn\'t support any transport security mechanism.\n    )\n    defer grpcConn.Close()\n\n    // Broadcast the tx via gRPC. We create a new client for the Protobuf Tx\n    // service.\n    txClient := tx.NewServiceClient(grpcConn)\n    // We then call the BroadcastTx method on this client.\n    grpcRes, err := txClient.BroadcastTx(\n        ctx,\n        &tx.BroadcastTxRequest{\n            Mode:    tx.BroadcastMode_BROADCAST_MODE_SYNC,\n            TxBytes: txBytes, // Proto-binary of the signed transaction, see previous step.\n        },\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(grpcRes.TxResponse.Code) // Should be `0` if the tx is successful\n\n    return nil\n}\n')),(0,i.kt)("h4",{id:"simulating-a-transaction"},"Simulating a Transaction"),(0,i.kt)("p",null,"Before broadcasting a transaction, we sometimes may want to dry-run the transaction, to estimate some information about the transaction without actually committing it. This is called simulating a transaction, and can be done as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "testing"\n\n    "github.com/cosmos/cosmos-sdk/client"\n    "github.com/cosmos/cosmos-sdk/types/tx"\n    authtx "github.com/cosmos/cosmos-sdk/x/auth/tx"\n)\n\nfunc simulateTx() error {\n    // --snip--\n\n    // Simulate the tx via gRPC. We create a new client for the Protobuf Tx\n    // service.\n    txClient := tx.NewServiceClient(grpcConn)\n    txBytes := /* Fill in with your signed transaction bytes. */\n\n    // We then call the Simulate method on this client.\n    grpcRes, err := txClient.Simulate(\n        context.Background(),\n        &tx.SimulateRequest{\n            TxBytes: txBytes,\n        },\n    )\n    if err != nil {\n        return err\n    }\n\n    fmt.Println(grpcRes.GasInfo) // Prints estimated gas used.\n\n    return nil\n}\n')),(0,i.kt)("h2",{id:"using-grpc"},"Using gRPC"),(0,i.kt)("p",null,"It is not possible to generate or sign a transaction using gRPC, only to broadcast one. In order to broadcast a transaction using gRPC, you will need to generate, sign, and encode the transaction using either the CLI or programmatically with Go."),(0,i.kt)("h3",{id:"broadcasting-a-transaction-2"},"Broadcasting a Transaction"),(0,i.kt)("p",null,"Broadcasting a transaction using the gRPC endpoint can be done by sending a ",(0,i.kt)("inlineCode",{parentName:"p"},"BroadcastTx")," request as follows, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"txBytes")," are the protobuf-encoded bytes of a signed transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n    -d \'{"tx_bytes":"{{txBytes}}","mode":"BROADCAST_MODE_SYNC"}\' \\\n    localhost:9090 \\\n    cosmos.tx.v1beta1.Service/BroadcastTx\n')),(0,i.kt)("h2",{id:"using-rest"},"Using REST"),(0,i.kt)("p",null,"It is not possible to generate or sign a transaction using REST, only to broadcast one. In order to broadcast a transaction using REST, you will need to generate, sign, and encode the transaction using either the CLI or programmatically with Go."),(0,i.kt)("h3",{id:"broadcasting-a-transaction-3"},"Broadcasting a Transaction"),(0,i.kt)("p",null,"Broadcasting a transaction using the REST endpoint (served by ",(0,i.kt)("inlineCode",{parentName:"p"},"gRPC-gateway"),") can be done by sending a POST request as follows, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"txBytes")," are the protobuf-encoded bytes of a signed transaction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n    -H "Content-Type: application/json" \\\n    -d\'{"tx_bytes":"{{txBytes}}","mode":"BROADCAST_MODE_SYNC"}\' \\\n    localhost:1317/cosmos/tx/v1beta1/txs\n')),(0,i.kt)("h2",{id:"using-cosmjs-javascript--typescript"},"Using CosmJS (JavaScript & TypeScript)"),(0,i.kt)("p",null,"CosmJS aims to build client libraries in JavaScript that can be embedded in web applications. Please see ",(0,i.kt)("a",{parentName:"p",href:"https://cosmos.github.io/cosmjs"},"https://cosmos.github.io/cosmjs")," for more information. As of January 2021, CosmJS documentation is still work in progress."))}u.isMDXComponent=!0}}]);