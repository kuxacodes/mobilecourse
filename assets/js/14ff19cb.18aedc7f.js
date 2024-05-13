"use strict";(self.webpackChunkmobilecourse=self.webpackChunkmobilecourse||[]).push([[6169],{9484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>S,contentTitle:()=>_,default:()=>V,frontMatter:()=>P,metadata:()=>k,toc:()=>A});var t=i(4848),r=i(8453),a=i(6540),o=i(8215),s=i(3104),l=i(6347),d=i(205),c=i(7485),u=i(1682),h=i(9466);function v(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:i}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return v(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:i}=e;const t=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[l,c]=b({queryString:i,groupId:t}),[u,v]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,h.Dv)(i);return[t,(0,a.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),f=(()=>{const e=l??u;return p({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),v(e)}),[c,v,r]),tabValues:r}}var g=i(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:i,selectedValue:r,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,i=d.indexOf(n),t=l[i].value;t!==r&&(c(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=d.indexOf(e.currentTarget)+1;n=d[i]??d[0];break}case"ArrowLeft":{const i=d.indexOf(e.currentTarget)-1;n=d[i]??d[d.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:u,...a,className:(0,o.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:i??n},n)}))})}function w(e){let{lazy:n,children:i,selectedValue:r}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,t.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(w,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,t.jsx)(y,{...e,children:v(e.children)},String(n))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:n,hidden:i,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.A)(E.tabItem,r),hidden:i,children:n})}const P={title:"Environment variables",sidebar_position:3},_=void 0,k={id:"Networking/environmentvar",title:"Environment variables",description:"The code necessarily includes constant values that are specific to a certain build of the product: e.g. for testing the product and production builds.",source:"@site/docs/Networking/environmentvar.md",sourceDirName:"Networking",slug:"/Networking/environmentvar",permalink:"/mobilecourse/docs/Networking/environmentvar",draft:!1,unlisted:!1,editUrl:"https://github.com/haagahelia/mobileprogramming.git/docs/Networking/environmentvar.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Environment variables",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/mobilecourse/docs/Networking/"},next:{title:"Maps & Location",permalink:"/mobilecourse/docs/category/maps--location"}},S={},A=[{value:"Environment variables",id:"environment-variables",level:3},{value:"Using environment variables in command shell",id:"using-environment-variables-in-command-shell",level:3},{value:"Setting environment variables",id:"setting-environment-variables",level:4},{value:"Listing and undefining environment variables",id:"listing-and-undefining-environment-variables",level:4},{value:"Using environment variables in Expo",id:"using-environment-variables-in-expo",level:3},{value:"Using <code>dotenv</code> in Expo",id:"using-dotenv-in-expo",level:3},{value:"<code>.env</code> file",id:"env-file",level:4}];function N(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The code necessarily includes constant values that are specific to a certain build of the product: e.g. for testing the product and production builds."}),"\n",(0,t.jsxs)(n.p,{children:["This build specific ",(0,t.jsx)(n.strong,{children:"configuration data"})," can include e.g. host names, IP addresses, API end points or tokens. Some of the data may be sensitive and should not be disclosed, e.g. database credentials or API keys."]}),"\n",(0,t.jsx)(n.p,{children:"These values should not stored in Git repositories, even if the repository is private."}),"\n",(0,t.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"An environment variable is a variable whose value is set in the execution environment of a program, externally to the program."}),"\n",(0,t.jsx)(n.p,{children:"We can use environment variables to avoid hardcoding values in the program code and the git repository:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Set configuration values in environment variables in the runtime environemnt of the build process."}),"\n",(0,t.jsx)(n.li,{children:"The build tools read the values from environment variables and inject them into the build."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This makes the deployment of the app easier: the code can be always the same but we can build different configurations of the program. However, we need to manage setting the configuration data somehow outside the version control."}),"\n",(0,t.jsx)(n.h3,{id:"using-environment-variables-in-command-shell",children:"Using environment variables in command shell"}),"\n",(0,t.jsx)(n.p,{children:"The environment variables are set in the execution context of the program in the operating system. Setting own environment variables is  done in the shell where the program is started."}),"\n",(0,t.jsx)(n.h4,{id:"setting-environment-variables",children:"Setting environment variables"}),"\n","\n",(0,t.jsxs)(I,{groupId:"operating-systems",children:[(0,t.jsx)(T,{label:"Windows Powershell",value:"windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'$Env:API_HOST="localhost:3000";\n'})})}),(0,t.jsx)(T,{label:"Linux/OS X bash",value:"linux_osx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export API_HOST="localhost:3000"\n'})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Environment variable names are in UPPERCASE and words are separated with underscore by convention."})}),"\n",(0,t.jsx)(n.h4,{id:"listing-and-undefining-environment-variables",children:"Listing and undefining environment variables"}),"\n",(0,t.jsxs)(I,{groupId:"operating-systems",children:[(0,t.jsx)(T,{label:"Windows Powershell",value:"windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"dir Env:          # list all environment variables\ndir Env:API_HOST  # list one environment variable\ndel Env:API_HOST  # undefine an environment variable\n"})})}),(0,t.jsx)(T,{label:"Linux/OS X bash",value:"linux_osx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Linux/OS X bash:\n\n$ printenv            # list all environment variables\n$ printenv API_HOST   # list one environment variable\n$ unset API_host      # undefine an environment variable\n\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"using-environment-variables-in-expo",children:"Using environment variables in Expo"}),"\n",(0,t.jsxs)(n.p,{children:["Expo environment loads automatically environment variables with prefix ",(0,t.jsx)(n.code,{children:"EXPO_PUBLIC_"})]}),"\n",(0,t.jsxs)(n.p,{children:["The loaded values can be read in the program from ",(0,t.jsx)(n.code,{children:"process.env"}),", for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"const apiUrl = process.env.EXPO_PUBLIC_API_URL;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The values are loaded at build time. If you change values, you will need to reload the application."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The values of ",(0,t.jsx)(n.code,{children:"EXPO_PUBLIC_"})," variables will be visible in plain text in the compiled application. Do not store anything sensible in them in real world applications."]})}),"\n",(0,t.jsxs)(n.h3,{id:"using-dotenv-in-expo",children:["Using ",(0,t.jsx)(n.code,{children:"dotenv"})," in Expo"]}),"\n",(0,t.jsxs)(n.p,{children:["The environment variable functionality is implemented in Expo using the widely used ",(0,t.jsx)(n.code,{children:"dotenv"})," library."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dotenv"})," can read environment variables from the execution context. Additionally, the environment variable values can be set in ",(0,t.jsx)(n.code,{children:".env"})," file too. The actual value in the program is determined as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Values read from ",(0,t.jsx)(n.code,{children:"dotenv"})," file never override the ones in the runtime environment."]}),"\n",(0,t.jsx)(n.li,{children:"If a variable is defined in both, the value defined in runtime environment will hold."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Thus we can set the production environment variable values in the runtime environment and development environment values in a ",(0,t.jsx)(n.code,{children:".env"})," file. It is also easy to maintain different configurations bu just defining different ",(0,t.jsx)(n.code,{children:".env"})," files."]}),"\n",(0,t.jsxs)(n.h4,{id:"env-file",children:[(0,t.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,t.jsxs)(n.p,{children:["Define a file named ",(0,t.jsx)(n.code,{children:".env"})," in project root. Environment variable values can be assigned in the file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"EXPO_PUBLIC_API_URL=https://staging.example.com\nEXPO_PUBLIC_API_KEY=abc123\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://docs.expo.dev/guides/environment-variables/",children:"Expo documentation"})," for details."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["Remember to ignore the ",(0,t.jsx)(n.code,{children:".env"})," file from git."]})})]})}function V(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);