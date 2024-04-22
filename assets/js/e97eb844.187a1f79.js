"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[234],{3749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(5893),i=n(1151);const r={title:"Flatlist",sidebar_position:5},o=void 0,a={id:"React Native/flatlist",title:"Flatlist",description:"FlatList is a versatile list component with several useful features, including headers, footers, and scrolling capabilities.",source:"@site/docs/React Native/flatlist.md",sourceDirName:"React Native",slug:"/React Native/flatlist",permalink:"/mobilecourse/docs/React Native/flatlist",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/React Native/flatlist.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Flatlist",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Core Components",permalink:"/mobilecourse/docs/React Native/corecomponents"},next:{title:"Styling",permalink:"/mobilecourse/docs/React Native/styling"}},l={},c=[{value:"Using the <code>FlatList</code> component:",id:"using-the-flatlist-component",level:4}];function d(e){const t={code:"code",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"FlatList"})})," is a versatile list component with several useful features, including headers, footers, and scrolling capabilities."]}),"\n",(0,s.jsx)(t.p,{children:"In the next example, we create a simple todo app that looks the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(7060).Z+"",width:"330",height:"189"})}),"\n",(0,s.jsxs)(t.h4,{id:"using-the-flatlist-component",children:["Using the ",(0,s.jsx)(t.code,{children:"FlatList"})," component:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Import the ",(0,s.jsx)(t.code,{children:"FlatList"})," component from React Native:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import {\r\n  StyleSheet,\r\n  Text,\r\n  View,\r\n  Button,\r\n  TextInput,\r\n  FlatList,\r\n} from "react-native";\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Declare new states to manage text input and FlatList items:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const [todo, setTodo] = useState("");\r\nconst [todos, setTodos] = useState([]);\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Next, we render the ",(0,s.jsx)(t.code,{children:"TextInput"})," and ",(0,s.jsx)(t.code,{children:"Button"})," components:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"return (  \r\n  <View style={styles.container}>\r\n    <TextInput \r\n      value={todo}\r\n      onChangeText={text => setTodo(text)}\r\n      placeholder='Enter a new task...'\r\n    />\r\n    <Button title='Add' onPress={handlePress}  />\r\n  </View>\r\n);\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"handlePress"}),' function is called when the "Add" button is pressed. This function adds the current value of the ',(0,s.jsx)(t.code,{children:"todo"})," state (representing the new task) to the ",(0,s.jsx)(t.code,{children:"todos"})," state array. After adding the task to the array, the ",(0,s.jsx)(t.code,{children:"todo"})," state is reset to an empty string, clearing the ",(0,s.jsx)(t.code,{children:"TextInput"})," for the next task input."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const handlePress = () => {\r\n  setTodos([...todos, { key: todo }]);\r\n  setTodo("");\r\n};\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Finally, we render the ",(0,s.jsx)(t.code,{children:"FlatList"})," component to display all todos."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"<FlatList \r\n  data={todos} \r\n  renderItem={({item}) => <Text>{item.key}</Text>} \r\n/>\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"renderItem"})," prop defines how data items are rendered within the list. The ",(0,s.jsx)(t.code,{children:"data"})," prop indicates the source of the data, which must be an array. The ",(0,s.jsx)(t.code,{children:"keyExtractor"})," prop extracts a unique key for each item in the list. It that is not defined, index will be used."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7060:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flatlist-0dae718eb4398f6b58026daf0041c4a0.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);