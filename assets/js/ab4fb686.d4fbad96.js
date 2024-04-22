"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[979],{8699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(5893),s=t(1151);const r={title:"Core Components",sidebar_position:4},i=void 0,c={id:"React Native/corecomponents",title:"Core Components",description:"React Native provides mobile components which can be used to create mobile apps",source:"@site/docs/React Native/corecomponents.md",sourceDirName:"React Native",slug:"/React Native/corecomponents",permalink:"/mobilecourse/docs/React Native/corecomponents",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/React Native/corecomponents.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Core Components",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/mobilecourse/docs/React Native/layout"},next:{title:"Flatlist",permalink:"/mobilecourse/docs/React Native/flatlist"}},a={},d=[{value:"View",id:"view",level:3},{value:"Text",id:"text",level:3},{value:"Using the <code>Text</code> component:",id:"using-the-text-component",level:4},{value:"Button",id:"button",level:3},{value:"Using the <code>Button</code> component:",id:"using-the-button-component",level:4},{value:"Pressable",id:"pressable",level:3},{value:"TextInput",id:"textinput",level:3},{value:"Using the <code>TextInput</code> component:",id:"using-the-textinput-component",level:4},{value:"Image",id:"image",level:3},{value:"Using the <code>Image</code> component:",id:"using-the-image-component",level:4}];function l(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"React Native provides mobile components which can be used to create mobile apps\r\nSome of the most common core components are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<View>"})," - container that supports layout with flexbox"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Button>"})," - basic button component"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Image>"})," - component for displaying images"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<TextInput>"})," - component for text input"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"view",children:"View"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"View"})," is a container component that supports flexbox layout. It is used to group and structure other components within your application."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { View } from "react-native";\r\n\r\nreturn (\r\n  <View style={styles.container}>\r\n    <View>\r\n      // Components\r\n    </View>\r\n    <View>\r\n      // Components\r\n    </View>\r\n  </View>\r\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more information and examples, refer to the official documentation ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/view",children:"https://reactnative.dev/docs/view"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["React Native provides also ",(0,o.jsx)(n.code,{children:"<ScrollView>"})," component that is generic scrolling container (",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/scrollview",children:"https://reactnative.dev/docs/scrollview"}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Text"})," is a component for displaying text."]}),"\n",(0,o.jsxs)(n.h4,{id:"using-the-text-component",children:["Using the ",(0,o.jsx)(n.code,{children:"Text"})," component:"]}),"\n",(0,o.jsxs)(n.p,{children:["Import the ",(0,o.jsx)(n.code,{children:"Text"})," component from React Native."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { Text, View } from "react-native";\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Render the ",(0,o.jsx)(n.code,{children:"Text"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"return (\r\n  <View style={styles.container}>\r\n    <Text>This is text</Text>\r\n  </View>\r\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"Text"})," component's ",(0,o.jsx)(n.code,{children:"style"})," prop to define font size, font weight etc. For example,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"return (\r\n  <View style={styles.container}>\r\n    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>This is text</Text>\r\n  </View>\r\n);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information and examples, refer to the official documentation ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/text",children:"https://reactnative.dev/docs/text"})]}),"\n",(0,o.jsx)(n.h3,{id:"button",children:"Button"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Button"})," component provides a basic button for user interaction"]}),"\n",(0,o.jsxs)(n.h4,{id:"using-the-button-component",children:["Using the ",(0,o.jsx)(n.code,{children:"Button"})," component:"]}),"\n",(0,o.jsxs)(n.p,{children:["Import the ",(0,o.jsx)(n.code,{children:"Button"})," component from React Native."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { Button, View } from "react-native";\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Render the ",(0,o.jsx)(n.code,{children:"Button"})," component.  The ",(0,o.jsx)(n.code,{children:"onPress"})," prop specifies the function that will be called when the button is pressed. The ",(0,o.jsx)(n.code,{children:"title"})," prop sets the text displayed on the button."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'return (\r\n  <View>\r\n    <Button onPress={buttonPressed} title="Press me" />\r\n  </View>\r\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Pressing the button will show an alert. Note: You have to import also ",(0,o.jsx)(n.code,{children:"Alert"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const buttonPressed = () => {\r\n  Alert.alert("Button pressed");\r\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(3385).Z+"",width:"321",height:"571"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For more information and examples, refer to the official documentation ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/button",children:"https://reactnative.dev/docs/button"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"pressable",children:"Pressable"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Button"})," component support limited level of customization. You can use the ",(0,o.jsx)(n.code,{children:"Pressable"})," component to build your own button."]}),"\n",(0,o.jsx)(n.p,{children:"For example, to get rounded red button:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Pressable, Text, StyleSheet } from 'react-native';\r\n\r\nconst RoundedRedButton = () => {\r\n  return (\r\n    <Pressable\r\n      style={({ pressed }) => [\r\n        styles.button,\r\n        { backgroundColor: pressed ? 'darkred' : 'red' },\r\n      ]}\r\n      onPress={() => console.log('Button pressed')}\r\n    >\r\n      <Text style={styles.buttonText}>Press me</Text>\r\n    </Pressable>\r\n  );\r\n};\r\n\r\nconst styles = StyleSheet.create({\r\n  button: {\r\n    borderRadius: 25,\r\n    paddingVertical: 10,\r\n    paddingHorizontal: 20,\r\n    justifyContent: 'center',\r\n    alignItems: 'center',\r\n  },\r\n  buttonText: {\r\n    color: 'white',\r\n    fontSize: 16,\r\n  },\r\n});\r\n\r\nexport default RoundedRedButton;\r\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information and examples, refer to the official documentation ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/pressable",children:"https://reactnative.dev/docs/pressable"})]}),"\n",(0,o.jsx)(n.h3,{id:"textinput",children:"TextInput"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TextInput"})," component allows users to enter and edit single or multiline text."]}),"\n",(0,o.jsxs)(n.h4,{id:"using-the-textinput-component",children:["Using the ",(0,o.jsx)(n.code,{children:"TextInput"})," component:"]}),"\n",(0,o.jsxs)(n.p,{children:["Import the ",(0,o.jsx)(n.code,{children:"TextInput"})," component from React Native."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { View, Button, Alert, TextInput } from "react-native";\n'})}),"\n",(0,o.jsx)(n.p,{children:"Create a new state where typed input is saved."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const [text, setText] = useState("");\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Render the ",(0,o.jsx)(n.code,{children:"TextInput"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"<TextInput\r\n  placeholder='Enter some text'\r\n  onChangeText={text => setText(text)} \r\n  value={text} \r\n/>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"placeholder"}),"  prop sets the placeholder text that appears in the input field when it's empty."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onChangeText"})," prop specifies the function that will be called whenever the text input changes. This means that whenever the user types something into the input field, the ",(0,o.jsx)(n.code,{children:"text"})," state will be updated with the new value."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"value"})," prop sets the value of the input field. In controlled components, this prop is usually tied to a state variable that holds the current value of the input."]}),"\n",(0,o.jsxs)(n.p,{children:["Then, we define ",(0,o.jsx)(n.code,{children:"handlePress"})," function that shows ",(0,o.jsx)(n.code,{children:"text"})," state value using the ",(0,o.jsx)(n.code,{children:"Alert"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const handlePress = () => {\r\n  Alert.alert("You typed:" + text);\r\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, import and render the ",(0,o.jsx)(n.code,{children:"Button"})," component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'<Button onPress={handlePress} title="Press me" />\n'})}),"\n",(0,o.jsx)(n.p,{children:"After entering text into the input field, pressing the button should trigger an alert displaying the text you've typed."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(3732).Z+"",width:"382",height:"218"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information and examples, refer to the official documentation ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/textinput",children:"https://reactnative.dev/docs/textinput"})]}),"\n",(0,o.jsx)(n.h3,{id:"image",children:"Image"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Image"})," is a component for displaying images"]}),"\n",(0,o.jsxs)(n.h4,{id:"using-the-image-component",children:["Using the ",(0,o.jsx)(n.code,{children:"Image"})," component:"]}),"\n",(0,o.jsxs)(n.p,{children:["Import the ",(0,o.jsx)(n.code,{children:"Image"})," component from React Native."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { View, Image } from "react-native";\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Render the ",(0,o.jsx)(n.code,{children:"Image"})," component (",(0,o.jsx)(n.strong,{children:"local image"}),"). You have to manually define width and height for the image."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"<Image\r\n  style={{ width:250, height: 100 }}\r\n  source={require('./img/haaga-helia.jpg')} \r\n/>\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the case of remote URI image, the source is defined in the following way:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"source={{uri: 'IMAGE_URI'}}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7665).Z+"",width:"321",height:"570"})}),"\n",(0,o.jsxs)(n.p,{children:["For additional core components, refer to the following link ",(0,o.jsx)(n.a,{href:"https://reactnative.dev/docs/components-and-apis",children:"https://reactnative.dev/docs/components-and-apis"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3385:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"},7665:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/image-665d1657d539795cbb7068bcea3347a6.png"},3732:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/textinput-1c2317b53b14485809107ed692db48c1.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(7294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);