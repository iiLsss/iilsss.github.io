"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[8874],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const a={},c="Virtual-DOM",i={unversionedId:"react/virtualDOM",id:"react/virtualDOM",title:"Virtual-DOM",description:"\u63a5\u4e0a\u7ae0 JSX \u5f53 JSX \u7ecf babel \u8f6c\u4e49React.createElement(component, props, ...children)",source:"@site/docs/react/2.virtualDOM.md",sourceDirName:"react",slug:"/react/virtualDOM",permalink:"/docs/react/virtualDOM",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"react",previous:{title:"JSX \u8bed\u6cd5",permalink:"/docs/react/jsx"},next:{title:"Fiber \u67b6\u6784",permalink:"/docs/react/fiber"}},l={},p=[],u={toc:p};function s(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtual-dom"},"Virtual-DOM"),(0,o.kt)("p",null,"\u63a5\u4e0a\u7ae0 JSX \u5f53 JSX \u7ecf babel \u8f6c\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement(component, props, ...children)"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u8fd4\u56de\u7684\u7ed3\u679c\u5c31\u662f\u865a\u62df DOM"),(0,o.kt)("p",null,"\u865a\u62df DOM \u662f\u63cf\u8ff0\u771f\u662f DOM \u7684 js \u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// packages\\react\\src\\ReactElement.js\nconst RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true,\n};\nfunction createElement(type, config, children) {\n  let propName;\n  //\u63d0\u53d6\u4fdd\u7559\u540d\u79f0\n  const props = {};\n  let key = null;\n  let ref = null;\n  if (config) {\n    if (config.ref) {\n      ref = config.ref;\n    }\n    if (config.key) {\n      key = '' + config.key;\n    }\n    for (propName in config) {\n      if (!RESERVED_PROPS.hasOwnProperty(propName)) {\n        props[propName] = config[propName];\n      }\n    }\n  }\n  const childrenLength = arguments.length - 2;\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    const childArray = Array(childrenLength);\n    for (let i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n    props.children = childArray;\n  }\n  return {\n    $$typeof: REACT_ELEMENT_TYPE,\n    type,\n    ref,\n    key,\n    props,\n  };\n}\n")))}s.isMDXComponent=!0}}]);