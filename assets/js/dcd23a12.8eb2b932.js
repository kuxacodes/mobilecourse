"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[893],{272:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(5893),n=r(1151);const i={title:"Expo",sidebar_position:2},o=void 0,a={id:"React Native/expo",title:"Expo",description:"Expo is a set of tools, libraries, and services for building React Native applications more easily and efficiently (https://expo.dev/).",source:"@site/docs/React Native/expo.md",sourceDirName:"React Native",slug:"/React Native/expo",permalink:"/mobilecourse/docs/React Native/expo",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/React Native/expo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Expo",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/mobilecourse/docs/React Native/basics"},next:{title:"Layout",permalink:"/mobilecourse/docs/React Native/layout"}},d={},l=[{value:"Create your first app",id:"create-your-first-app",level:3},{value:"Initialize project",id:"initialize-project",level:4},{value:"Install Expo Go",id:"install-expo-go",level:4},{value:"Open the app on your device:",id:"open-the-app-on-your-device",level:4},{value:"Modify your app",id:"modify-your-app",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Expo is a set of tools, libraries, and services for building React Native applications more easily and efficiently (",(0,t.jsx)(s.a,{href:"https://expo.dev/",children:"https://expo.dev/"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["Node.js LTS release version is required.\r\nLinux and macOS users have to install Watchman (",(0,t.jsx)(s.a,{href:"https://docs.expo.io/get-started/installation/",children:"https://docs.expo.io/get-started/installation/"}),")"]}),"\n",(0,t.jsx)(s.h3,{id:"create-your-first-app",children:"Create your first app"}),"\n",(0,t.jsx)(s.h4,{id:"initialize-project",children:"Initialize project"}),"\n",(0,t.jsx)(s.p,{children:"You can create a new React Native app using the following commands in terminal:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npx create-expo-app YOUR_APP_NAME\n"})}),"\n",(0,t.jsx)(s.p,{children:"Next, move to the project folder and start the development server:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd YOUR_APP_NAME\r\nnpx expo start\n"})}),"\n",(0,t.jsx)(s.h4,{id:"install-expo-go",children:"Install Expo Go"}),"\n",(0,t.jsx)(s.p,{children:"Expo opens Metro Bundler in your terminal after you run your app."}),"\n",(0,t.jsxs)(s.p,{children:["To preview your app on a mobile device, you'll need to install the ",(0,t.jsx)(s.strong,{children:"Expo Go"})," (",(0,t.jsx)(s.a,{href:"https://expo.dev/client",children:"https://expo.dev/client"}),") app to your mobile device. This allows you to view and interact with your Expo projects directly on your iOS or Android device."]}),"\n",(0,t.jsx)(s.h4,{id:"open-the-app-on-your-device",children:"Open the app on your device:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Android"}),": Open the Expo Go app and navigate to the Projects tab. From there, scan the QR code displayed in your terminal using the Expo Go app. This action will load your app on your Android device."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"iOS"}),": Launch the Camera app and point it at the QR code displayed in your terminal. Once the QR code is recognized, tap on the notification prompt to open the Expo Go app. Your app will then be loaded on your iOS device."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Alternatively, you can run your app on an emulator or a USB-connected device. For emulators, you can use Android Studio's Android Virtual Device (AVD) manager for Android emulation or Xcode's iOS Simulator for iOS emulation. Connect a physical device via USB to your computer, ensure it's properly configured for development, and then use Expo CLI to run your app on the connected device."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"w:600 bg right",src:r(8318).Z+"",width:"930",height:"781"})}),"\n",(0,t.jsx)(s.h4,{id:"modify-your-app",children:"Modify your app"}),"\n",(0,t.jsxs)(s.p,{children:["Open your expo project using the VSCode. Modify the ",(0,t.jsx)(s.code,{children:"return"})," statement in the ",(0,t.jsx)(s.strong,{children:"App.js"})," file. Expo provides ",(0,t.jsx)(s.strong,{children:"Fast Refresh"})," and you will see changes immediately in your mobile device."]}),"\n",(0,t.jsx)(s.p,{children:"You can open developer menu in the Expo Go app by shaking your device. There is also manual refresh option if expo fast refresh doesn't work."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"return (\r\n  <View style={styles.container}>\r\n    <Text>Hello World!</Text>\r\n  </View>\r\n);\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"w:300 bg right",src:r(5406).Z+"",width:"343",height:"610"})}),"\n",(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsx)(s.p,{children:"If you can't get app loading to your device, you can use tunnel connection type. Start your app using the following command:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npx expo start --tunnel\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8318:(e,s,r)=>{r.d(s,{Z:()=>t});const t=r.p+"assets/images/expo-6321cd208052ed3073da3d990ca564b6.png"},5406:(e,s,r)=>{r.d(s,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAJiCAMAAAEzt0E/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALTUExURZmZmZiYmJeXl5+fn6ysrK2traKiopaWlrGxsdra2vDw8Pb29vf39/Ly8uHh4bi4uJqamqSkpKOjo5ubm56ensjIyPr6+v////7+/tTU1MzMzMrKyq+vr9DQ0MXFxd7e3p2dnZycnKurq7e3t6mpqdbW1s/Pz8PDw9PT083Nze/v79vb2+bm5rKystXV1aWlpbm5ubW1taCgoK6urvX19by8vM7Ozurq6sbGxrS0tN/f38HBwdjY2KGhobq6uqamprOzs+Tk5Onp6eXl5dnZ2d3d3dfX1+zs7JSUlO7u7tzc3PHx8fz8/L+/v+vr65WVlcDAwKenp7CwsKqqqqioqL6+vtLS0snJyY6Ojru7u5GRkfPz8+fn58TExODg4L29vcvLy/39/fj4+Pv7+/T09OLi4sfHx/n5+Y+Pj5CQkOjo6O3t7ePj47a2ttHR0YaGhnd3dzs7OzU1NX5+fo2NjYqKimNjY3V1dTY2NhsbGzQ0NC4uLjExMRQUFFBQUFxcXGVlZV5eXnBwcC8vLygoKD09PSMjI39/f2pqaoWFhWhoaGFhYW1tbTMzM3Nzc2tra3R0dHFxcSwsLDIyMiAgIEdHRy0tLUpKSlJSUpOTk2lpaT4+Pnp6eikpKXZ2dm9vb3Jycn19fSsrK4mJiRAQEBERETw8PEFBQTg4OBISEioqKiQkJB8fH0tLS3x8fF1dXT8/P19fXzo6OlRUVDc3N5KSkjk5OYyMjE1NTWRkZEhISB0dHUVFRSEhIVZWVjAwMCYmJouLi0RERAAAAAcHB4GBgVpaWk5OTg8PD2xsbFlZWUZGRmdnZ2JiYkNDQ3t7e1dXV25ubggICAMDAwwMDBcXFwEBARYWFhgYGAICAh4eHoiIiCIiIg4ODgsLCwkJCYODgw0NDQYGBgUFBVtbW4CAgBkZGVNTUyUlJScnJxMTE4eHhwQEBGBgYBwcHBUVFQAAAJ9NvQgAAADxdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCpCmekAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAMtklEQVR4Xu3d0XnazBpFYXUxz6N+dDHXc6UuKEENUAYV0IEpQyrmfCMNNj7BiRKzYvxnvYlhhJUv2xtB4jhY3W/JpUtt+YHYI36sO+X1hj3Sfu67cd+N+27cd+O+m4fsm9v1jXv7zjlNx6lt3Hjqj+0O992478Z9N+67cd/Nb+172e9m36Fdh3Fsi1BKW9zsm2/2vSzt+p0/zPBL7bOXnWpvbfmBXMZuTvXTpmG7YY/W8x7uu3Hfjftu3HfjvpvP7nvn06bVj/uWoZviD7W+bd541o/tI+67cd+N+27cd+O+m9/at32escfbvnO7rm4/HXr91On+5zhv736H/NwpPsKw/8tEdwx9V7pubFurvtS52+w/lscSI+Zu7lKuAXOO6+0P9vwp7wb8zsHwGxwbHBscGxwbHBscGxwbHBscGxwbvnBsGfLSpWMs+uV0mD/6t7NbdhscGxwbHBscGxwbHBscGxwbHBscG77Z2PaFggf7e2PL7X9ie5Pb9S5306Z2/d6QT231Xj/2bfWGKgHTx/FQvwizbf2Z9YtE775S1KWSSjess/9UyevMEhG7uX0tK6X+GvnPpRg7pkg3z0ObVG96tE9+Oeud11k+g1WODY4Njg2ODY4Njg2ODY4Njg2ODY4Njg2ODY4Njg2ODY4Njg2ODY4NXzx2aNe3q5/YM7ZfprScU5lOhzQcLndeGvmDPWPzaU5L/d9lw5jS+eJ/M9vJscGxwbHBscGxwbHBscGxwbHBscGxwbHBscGxwbHBscGxwbHBscGxwbHBsYEa216g8GDff+zdV6hcxuXmWy7fGEr58Rf8OPbH15u8uvvil/jN9oxdprb4P8s64Uc7x370nc9Owwfl9P2hLd/8xbvsAaixTWnXz6+kNOR4eqhSKcDLa3YZh6G+2Kf2Nm4pSo6N9eLtO4HnyBqB617rF1u3W79EHmvYOffbC55yRM61wDyv767W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"},1151:(e,s,r)=>{r.d(s,{Z:()=>a,a:()=>o});var t=r(7294);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);