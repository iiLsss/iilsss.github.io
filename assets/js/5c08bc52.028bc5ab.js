"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="\u6570\u636e\u7c7b\u578b",o={unversionedId:"javascript/primitive_value",id:"javascript/primitive_value",title:"\u6570\u636e\u7c7b\u578b",description:"ECMAScript \u53d8\u91cf\u53ef\u4ee5\u5305\u542b\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff1a\u539f\u59cb\u503c\u548c\u5f15\u7528\u503c\u3002\u539f\u59cb\u503c(primitive value)\u5c31\u662f\u6700\u7b80\u5355\u7684\u6570\u636e\uff0c\u5f15\u7528\u503c(reference value)\u5219\u662f\u7531\u591a\u4e2a\u503c\u6784\u6210\u7684\u5bf9\u8c61\u3002",source:"@site/docs/javascript/primitive_value.md",sourceDirName:"javascript",slug:"/javascript/primitive_value",permalink:"/docs/javascript/primitive_value",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ES6+ New Feature",permalink:"/docs/javascript/ecmascript"},next:{title:"\u8fed\u4ee3\u5668&\u751f\u6210\u5668",permalink:"/docs/javascript/iterator&generator"}},p={},c=[{value:"\u65b0\u589e\u6570\u636e\u7c7b\u578b",id:"\u65b0\u589e\u6570\u636e\u7c7b\u578b",level:2},{value:"Symbol",id:"symbol",level:3},{value:"BigInt",id:"bigint",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-ecmascript-overview"},"ECMAScript")," \u53d8\u91cf\u53ef\u4ee5\u5305\u542b\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff1a\u539f\u59cb\u503c\u548c\u5f15\u7528\u503c\u3002\u539f\u59cb\u503c(primitive value)\u5c31\u662f\u6700\u7b80\u5355\u7684\u6570\u636e\uff0c\u5f15\u7528\u503c(reference value)\u5219\u662f\u7531\u591a\u4e2a\u503c\u6784\u6210\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u539f\u59cb\u503c")," \u53c8\u79f0\u57fa\u672c\u6570\u636e\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"symbol"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u5f15\u7528\u503c")," \u53c8\u79f0\u5f15\u7528\u6570\u636e\u7c7b\u578b",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"RegExp``\u3001Date"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),"\u7b49"),(0,a.kt)("h2",{id:"\u65b0\u589e\u6570\u636e\u7c7b\u578b"},"\u65b0\u589e\u6570\u636e\u7c7b\u578b"),(0,a.kt)("h3",{id:"symbol"},"Symbol"),(0,a.kt)("p",null,"\u521b\u5efa\u552f\u4e00\u6807\u8bc6\u7b26\u7684\u65b9\u6cd5\uff0c\u4e3b\u8981\u7528\u4e8e\u9632\u6b62\u5bf9\u8c61\u5c5e\u6027\u7684\u547d\u540d\u51b2\u7a81\u548c\u5b9a\u4e49\u5185\u90e8\u884c\u4e3a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const key1 = Symbol('key')\nconst key2 = Symbol('key')\n\nconsole.log(key1 === key2) // false\n\nconst obj = {\n  [key1]: 'value1',\n  [key2]: 'value2'\n}\nconsole.log(obj[key1] === obj[key2]) // false  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u573a\u666f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5e38\u91cf "),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5bf9\u8c61\u79c1\u6709\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5185\u7f6e\u7684 Symbol(",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol.iterator"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol.asyncIterator"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol.toStringTag"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"Symbol.hasInstance"),")")),(0,a.kt)("h3",{id:"bigint"},"BigInt"),(0,a.kt)("p",null,"\u53ef\u4ee5\u8868\u793a\u4efb\u610f\u7cbe\u5ea6\u7684\u6574\u6570\uff0c\u8fd9\u4f7f\u5f97\u5b83\u975e\u5e38\u9002\u5408\u9700\u8981\u5904\u7406\u8d85\u51fa Number \u7c7b\u578b\uff08\u537353\u4f4d\u7cbe\u5ea6\u6574\u6570\u9650\u5236\uff09\u7684\u573a\u666f\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInt")," \u6784\u9020\u51fd\u6570\u6216\u901a\u8fc7\u5728\u6574\u6570\u672b\u5c3e\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u6765\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"BigInt"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fdb\u884c\u8ba1\u7b97\nconst sum = BigInt(123456789012345678901234567890) + BigInt(9999999) // 123456789012345677877729597055n\n// \u8f6c\u4e3a\u5b57\u7b26\u4e32\nsum.toString() // '123456789012345677877729597055'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u573a\u666f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5904\u7406\u8d85\u5927\u6574\u6570\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},"\u7cbe\u786e\u6570\u5b66\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u7b97\u6cd5")))}m.isMDXComponent=!0}}]);