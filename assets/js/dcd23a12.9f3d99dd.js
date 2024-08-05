"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[8071],{8318:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(4848),i=o(8453);const a={title:"Expo",sidebar_position:2},r=void 0,s={id:"React Native/expo",title:"Expo",description:"Expo is a set of tools, libraries, and services for building React Native applications more easily and efficiently (https://expo.dev/).",source:"@site/docs/React Native/expo.md",sourceDirName:"React Native",slug:"/React Native/expo",permalink:"/mobilecourse/docs/React Native/expo",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/React Native/expo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Expo",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/mobilecourse/docs/React Native/basics"},next:{title:"Layout",permalink:"/mobilecourse/docs/React Native/layout"}},l={},p=[{value:"Create your first app",id:"create-your-first-app",level:3},{value:"Initialize project",id:"initialize-project",level:4},{value:"Install Expo Go",id:"install-expo-go",level:4},{value:"Open the app on your device:",id:"open-the-app-on-your-device",level:4},{value:"Modify your app",id:"modify-your-app",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Expo is a set of tools, libraries, and services for building React Native applications more easily and efficiently (",(0,n.jsx)(t.a,{href:"https://expo.dev/",children:"https://expo.dev/"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Node.js LTS release version is required.\nLinux and macOS users have to install Watchman (",(0,n.jsx)(t.a,{href:"https://docs.expo.io/get-started/installation/",children:"https://docs.expo.io/get-started/installation/"}),")"]}),"\n",(0,n.jsx)(t.h3,{id:"create-your-first-app",children:"Create your first app"}),"\n",(0,n.jsx)(t.h4,{id:"initialize-project",children:"Initialize project"}),"\n",(0,n.jsx)(t.p,{children:"You can create a new React Native app using the following command in terminal:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx create-expo-app YOUR_APP_NAME\n"})}),"\n",(0,n.jsxs)(t.p,{children:["By default, the app generated by Expo includes many features unnecessary for the start of this course. We will begin with a clean project. Expo provides templates (",(0,n.jsx)(t.a,{href:"https://docs.expo.dev/more/create-expo/#--template",children:"https://docs.expo.dev/more/create-expo/#--template"}),") and we will use blank template. Enter the following command in the terminal:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx create-expo-app YOUR_APP_NAME --template blank\n"})}),"\n",(0,n.jsx)(t.p,{children:"Next, move to the project folder and start the development server:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd YOUR_APP_NAME\nnpx expo start\n"})}),"\n",(0,n.jsx)(t.h4,{id:"install-expo-go",children:"Install Expo Go"}),"\n",(0,n.jsx)(t.p,{children:"Expo opens Metro Bundler in your terminal after you run your app."}),"\n",(0,n.jsxs)(t.p,{children:["To preview your app on a mobile device, you'll need to install the ",(0,n.jsx)(t.strong,{children:"Expo Go"})," (",(0,n.jsx)(t.a,{href:"https://expo.dev/client",children:"https://expo.dev/client"}),") app to your mobile device. This allows you to view and interact with your Expo projects directly on your iOS or Android device."]}),"\n",(0,n.jsx)(t.h4,{id:"open-the-app-on-your-device",children:"Open the app on your device:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Android"}),": Open the Expo Go app and navigate to the Projects tab. From there, scan the QR code displayed in your terminal using the Expo Go app. This action will load your app on your Android device."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"iOS"}),": Launch the Camera app and point it at the QR code displayed in your terminal. Once the QR code is recognized, tap on the notification prompt to open the Expo Go app. Your app will then be loaded on your iOS device."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can run your app on an emulator or a USB-connected device. For emulators, you can use Android Studio's Android Virtual Device (AVD) manager for Android emulation or Xcode's iOS Simulator for iOS emulation. Connect a physical device via USB to your computer, ensure it's properly configured for development, and then use Expo CLI to run your app on the connected device."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"w:600 bg right",src:o(9739).A+"",width:"930",height:"781"})}),"\n",(0,n.jsx)(t.p,{children:"The demo app that Expo creates looks like the following screenshot."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"w:600 bg right",src:o(9362).A+"",width:"300",height:"626"})}),"\n",(0,n.jsx)(t.p,{children:"You can stop the project by pressing Ctrl-C in the terminal."}),"\n",(0,n.jsx)(t.h4,{id:"modify-your-app",children:"Modify your app"}),"\n",(0,n.jsxs)(t.p,{children:["Open your expo project using the VSCode. Modify the ",(0,n.jsx)(t.code,{children:"return"})," statement in the ",(0,n.jsx)(t.strong,{children:"App.js"})," file. Expo provides ",(0,n.jsx)(t.strong,{children:"Fast Refresh"})," and you will see changes immediately in your mobile device."]}),"\n",(0,n.jsx)(t.p,{children:"You can open developer menu in the Expo Go app by shaking your device. There is also manual refresh option if expo fast refresh doesn't work."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:'return (\n  <View style={styles.container}>\n    <Text>Hello World!</Text>\n    <StatusBar style="auto" />\n  </View>\n);\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"w:300 bg right",src:o(4699).A+"",width:"300",height:"626"})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"If you can't get app loading to your device, you can use tunnel connection type. Start your app using the following command:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx expo start --tunnel\n"})})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9739:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/expo-6321cd208052ed3073da3d990ca564b6.png"},9362:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/expoapp-823d112e15708bda0884150ce3ad5b17.png"},4699:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/hello-4c7a1cd3a3273a01cc3efc824b6bd3aa.png"},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var n=o(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);