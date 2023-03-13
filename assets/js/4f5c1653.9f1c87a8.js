"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[4178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=u(r),s=a,d=b["".concat(i,".").concat(s)]||b[s]||k[s]||l;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={slug:"Turbopack",title:"Turbopack\u521d\u8bc6",tags:["Turbopack","Webpack","Vite"]},p=void 0,o={permalink:"/blog/Turbopack",source:"@site/blog/2022-10-29-Turbopack/index.mdx",title:"Turbopack\u521d\u8bc6",description:"Turbopack \u5efa\u7acb\u5728\u65b0\u7684\u589e\u91cf\u67b6\u6784\u4e0a\uff0c\u4ee5\u63d0\u4f9b\u6700\u5feb\u7684\u5f00\u53d1\u4f53\u9a8c\u3002 \u5728\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0c\u5b83\u663e\u793a\u66f4\u65b0\u901f\u5ea6\u6bd4 Vite \u5feb 10 \u500d\uff0c\u6bd4 Webpack \u5feb 700 \u500d\u3002 \u5728\u66f4\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0c\u5dee\u5f02\u66f4\u5927\u2014\u2014\u901a\u5e38\u6bd4 Vite \u5feb 20 \u500d\u3002",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[{label:"Turbopack",permalink:"/blog/tags/turbopack"},{label:"Webpack",permalink:"/blog/tags/webpack"},{label:"Vite",permalink:"/blog/tags/vite"}],readingTime:7.69,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"Turbopack",title:"Turbopack\u521d\u8bc6",tags:["Turbopack","Webpack","Vite"]},prevItem:{title:"Picturing Architecture",permalink:"/blog/uml"},nextItem:{title:"hexo\u8f6cdocusaurus",permalink:"/blog/docusaurus"}},i={authorsImageUrls:[]},u=[{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u6da1\u8f6e\u53d1\u52a8\u673a",id:"\u6da1\u8f6e\u53d1\u52a8\u673a",level:3},{value:"\u51fd\u6570\u7ea7\u7f13\u5b58",id:"\u51fd\u6570\u7ea7\u7f13\u5b58",level:3},{value:"\u7f13\u5b58",id:"\u7f13\u5b58",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u6309\u9700\u7f16\u8bd1",id:"\u6309\u9700\u7f16\u8bd1",level:3},{value:"\u9875\u9762\u7ea7\u7f16\u8bd1",id:"\u9875\u9762\u7ea7\u7f16\u8bd1",level:3},{value:"\u8bf7\u6c42\u7ea7\u7f16\u8bd1",id:"\u8bf7\u6c42\u7ea7\u7f16\u8bd1",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:4}],c={toc:u};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Turbopack \u5efa\u7acb\u5728\u65b0\u7684\u589e\u91cf\u67b6\u6784\u4e0a\uff0c\u4ee5\u63d0\u4f9b\u6700\u5feb\u7684\u5f00\u53d1\u4f53\u9a8c\u3002 \u5728\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0c\u5b83\u663e\u793a\u66f4\u65b0\u901f\u5ea6\u6bd4 Vite \u5feb 10 \u500d\uff0c\u6bd4 Webpack \u5feb 700 \u500d\u3002 \u5728\u66f4\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0c\u5dee\u5f02\u66f4\u5927\u2014\u2014\u901a\u5e38\u6bd4 Vite \u5feb 20 \u500d\u3002"),(0,a.kt)("p",null,"Turbopack \u4ec5\u6346\u7ed1\u5f00\u53d1\u6240\u9700\u7684\u6700\u5c11\u8d44\u4ea7\uff0c\u56e0\u6b64\u542f\u52a8\u65f6\u95f4\u975e\u5e38\u5feb\u3002 \u5728\u5177\u6709 3,000 \u4e2a\u6a21\u5757\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0cTurbopack \u9700\u8981 1.8 \u79d2\u624d\u80fd\u542f\u52a8\uff0c\u800c Vite \u9700\u8981 11.4 \u79d2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7675).Z,width:"1247",height:"490"})),(0,a.kt)("p",null,"Turbopack \u662f\u9488\u5bf9 JavaScript \u548c TypeScript \u4f18\u5316\u7684\u589e\u91cf\u6253\u5305\u5668\uff0c\u7531 Vercel \u7684 Webpack \u548c Next.js \u7684\u521b\u5efa\u8005\u7528 Rust \u7f16\u5199\u3002"),(0,a.kt)("p",null,"\u5728\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u4e0a\uff0cTurbopack \u7684\u66f4\u65b0\u901f\u5ea6\u6bd4 Vite \u5feb 10 \u500d\uff0c\u6bd4 Webpack \u5feb 700 \u500d\u3002\u5bf9\u4e8e\u6700\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5dee\u5f02\u53d8\u5f97\u66f4\u52a0\u660e\u663e\uff0c\u66f4\u65b0\u901f\u5ea6\u6bd4 Vite \u5feb 20 \u500d\u3002"),(0,a.kt)("p",null,"Turbopack \u6027\u80fd\u7684\u79d8\u8bc0\u662f\u53cc\u91cd\u7684\uff1a\u9ad8\u5ea6\u4f18\u5316\u7684\u673a\u5668\u4ee3\u7801\u548c\u4f4e\u7ea7\u589e\u91cf\u8ba1\u7b97\u5f15\u64ce\uff0c\u53ef\u4ee5\u7f13\u5b58\u5230\u5355\u4e2a\u51fd\u6570\u7684\u7ea7\u522b\u3002\u4e00\u65e6 Turbopack \u6267\u884c\u4e86\u4e00\u9879\u4efb\u52a1\uff0c\u5b83\u5c31\u518d\u4e5f\u4e0d\u4f1a\u8fd9\u6837\u505a\u4e86\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u7684\u56e2\u961f\u5438\u53d6\u4e86 Webpack 10 \u5e74\u7684\u7ecf\u9a8c\u6559\u8bad\uff0c\u7ed3\u5408\u4e86 Turborepo \u548c Google \u7684 Bazel \u5728\u589e\u91cf\u8ba1\u7b97\u65b9\u9762\u7684\u521b\u65b0\uff0c\u5e76\u521b\u5efa\u4e86\u4e00\u4e2a\u53ef\u4ee5\u652f\u6301\u672a\u6765\u51e0\u5341\u5e74\u8ba1\u7b97\u7684\u67b6\u6784\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Turbopack \u76ee\u524d\u5904\u4e8e alpha \u9636\u6bb5\u3002\u5b83\u8fd8\u6ca1\u6709\u51c6\u5907\u597d\u7528\u4e8e\u751f\u4ea7\u3002\u611f\u8c22\u60a8\u7684\u652f\u6301\u548c\u53cd\u9988\uff0c\u56e0\u4e3a\u6211\u4eec\u6b63\u5728\u52aa\u529b\u4e3a\u6bcf\u4e2a\u4eba\u505a\u597d\u51c6\u5907")),(0,a.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6df1\u5165\u4e86\u89e3 Turbopack \u7684\u5185\u90e8\u7ed3\u6784\uff0c\u627e\u51fa\u5b83\u4e3a\u4f55\u5982\u6b64\u4e4b\u5feb\u3002"),(0,a.kt)("h3",{id:"\u6da1\u8f6e\u53d1\u52a8\u673a"},"\u6da1\u8f6e\u53d1\u52a8\u673a"),(0,a.kt)("p",null,"Turbopack \u4e4b\u6240\u4ee5\u5982\u6b64\u4e4b\u5feb\uff0c\u662f\u56e0\u4e3a\u5b83\u5efa\u7acb\u5728\u4e00\u4e2a\u53ef\u91cd\u7528\u7684 Rust \u5e93\u4e4b\u4e0a\uff0c\u8be5\u5e93\u652f\u6301\u79f0\u4e3a Turbo \u5f15\u64ce\u7684\u589e\u91cf\u8ba1\u7b97\u3002\u8fd9\u662f\u5b83\u7684\u5de5\u4f5c\u539f\u7406\uff1a"),(0,a.kt)("h3",{id:"\u51fd\u6570\u7ea7\u7f13\u5b58"},"\u51fd\u6570\u7ea7\u7f13\u5b58"),(0,a.kt)("p",null,"\u5728 Turbo \u5f15\u64ce\u9a71\u52a8\u7684\u7a0b\u5e8f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5c06\u67d0\u4e9b\u529f\u80fd\u6807\u8bb0\u4e3a\u201c\u8981\u8bb0\u4f4f\u201d\u3002\u5f53\u8fd9\u4e9b\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0cTurbo \u5f15\u64ce\u4f1a\u8bb0\u4f4f\u5b83\u4eec\u88ab\u8c03\u7528\u7684\u5185\u5bb9\uff0c\u4ee5\u53ca\u5b83\u4eec\u8fd4\u56de\u7684\u5185\u5bb9\u3002\u7136\u540e\u5b83\u5c06\u5176\u4fdd\u5b58\u5728\u5185\u5b58\u7f13\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8354).Z,width:"1742",height:"654"})),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"readFile"),"\u4e24\u4e2a\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"api.ts"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.ts"),"\u3002\u7136\u540e\u6211\u4eec\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"bundle"),"\u8fd9\u4e9b\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"concat"),"\u653e\u5728\u4e00\u8d77\uff0c\u6700\u540e\u5f97\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"fullBundle"),"\u3002\u6240\u6709\u8fd9\u4e9b\u51fd\u6570\u8c03\u7528\u7684\u7ed3\u679c\u90fd\u4fdd\u5b58\u5728\u7f13\u5b58\u4e2d\u4ee5\u5907\u540e\u7528\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728\u5f00\u53d1\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002\u60a8\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.ts"),"\u6587\u4ef6\u4fdd\u5b58\u5728\u60a8\u7684\u673a\u5668\u4e0a\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Turbopack"),"\u63a5\u6536\u5230\u6587\u4ef6\u7cfb\u7edf\u4e8b\u4ef6\uff0c\u5e76\u77e5\u9053\u5b83\u9700\u8981\u91cd\u65b0\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"p"},'readFile("sdk.ts")'),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4653).Z,width:"1742",height:"654"})),(0,a.kt)("p",null,"\u7531\u4e8e\u7ed3\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.ts"),"\u5df2\u7ecf\u6539\u53d8\uff0c\u6211\u4eec\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"bundle"),"\u518d\u6b21\u8fde\u63a5\u5b83\uff0c\u7136\u540e\u9700\u8981\u518d\u6b21\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u81f3\u5173\u91cd\u8981\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"api.ts"),"\u6ca1\u6709\u6539\u53d8\u3002\u6211\u4eec\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u5b83\u7684\u7ed3\u679c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"concat"),"\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u901a\u8fc7\u4e0d\u9605\u8bfb\u5e76\u91cd\u65b0\u6253\u5305\u6765\u8282\u7701\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u60f3\u8c61\u4e00\u4e0b\uff0c\u5728\u4e00\u4e2a\u771f\u6b63\u7684\u6346\u7ed1\u5668\u4e2d\uff0c\u6709\u6570\u5343\u4e2a\u6587\u4ef6\u8981\u8bfb\u53d6\u548c\u8f6c\u6362\u8981\u6267\u884c\u3002\u5fc3\u667a\u6a21\u578b\u662f\u4e00\u6837\u7684\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u8bb0\u4f4f\u51fd\u6570\u8c03\u7528\u7684\u7ed3\u679c\u800c\u4e0d\u662f\u91cd\u590d\u4ee5\u524d\u5b8c\u6210\u7684\u5de5\u4f5c\u6765\u8282\u7701\u5927\u91cf\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,a.kt)("p",null,"Turbo \u5f15\u64ce\u5f53\u524d\u5c06\u5176\u7f13\u5b58\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002\u8fd9\u610f\u5473\u7740\u7f13\u5b58\u5c06\u4e0e\u8fd0\u884c\u5b83\u7684\u8fdb\u7a0b\u4e00\u6837\u957f - \u8fd9\u5bf9\u4e8e\u5f00\u53d1\u670d\u52a1\u5668\u6765\u8bf4\u6548\u679c\u5f88\u597d\u3002\u5728 Next v13 \u4e2d\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"next dev --turbo"),"\u65f6\uff0c\u60a8\u5c06\u4f7f\u7528 Turbo \u5f15\u64ce\u542f\u52a8\u7f13\u5b58\u3002\u5f53\u60a8\u53d6\u6d88\u5f00\u53d1\u670d\u52a1\u5668\u65f6\uff0c\u7f13\u5b58\u5c06\u88ab\u6e05\u9664\u3002"),(0,a.kt)("p",null,"\u5c06\u6765\uff0c\u6211\u4eec\u8ba1\u5212\u5c06\u8fd9\u4e2a\u7f13\u5b58\u6301\u4e45\u5316\u2014\u2014\u8981\u4e48\u4fdd\u5b58\u5230\u6587\u4ef6\u7cfb\u7edf\uff0c\u8981\u4e48\u4fdd\u5b58\u5230\u50cf Turborepo \u8fd9\u6837\u7684\u8fdc\u7a0b\u7f13\u5b58\u3002\u8fd9\u610f\u5473\u7740 Turbopack \u53ef\u4ee5\u8bb0\u4f4f",(0,a.kt)("strong",{parentName:"p"},"\u8de8\u8fd0\u884c\u548c\u673a\u5668\u5b8c\u6210\u7684\u5de5\u4f5c"),"\u3002"),(0,a.kt)("h3",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u4f7f Turbopack \u5728\u8ba1\u7b97\u5e94\u7528\u7a0b\u5e8f\u7684\u589e\u91cf\u66f4\u65b0\u65b9\u9762\u975e\u5e38\u5feb\u901f\u3002\u8fd9\u4f18\u5316\u4e86 Turbopack \u4ee5\u5904\u7406\u5f00\u53d1\u4e2d\u7684\u66f4\u65b0\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\u5c06\u59cb\u7ec8\u5feb\u901f\u54cd\u5e94\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u672a\u6765\uff0c\u6301\u4e45\u7f13\u5b58\u5c06\u4e3a\u66f4\u5feb\u7684\u751f\u4ea7\u6784\u5efa\u6253\u5f00\u5927\u95e8\u3002\u901a\u8fc7\u8bb0\u4f4f\u8de8\u8fd0\u884c\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u65b0\u7684\u751f\u4ea7\u6784\u5efa\u53ea\u80fd\u91cd\u5efa\u66f4\u6539\u7684\u6587\u4ef6 - \u53ef\u80fd\u4f1a\u8282\u7701\u5927\u91cf\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"\u6309\u9700\u7f16\u8bd1"},"\u6309\u9700\u7f16\u8bd1"),(0,a.kt)("p",null,"Turbo \u5f15\u64ce\u6709\u52a9\u4e8e\u5728\u60a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\u4e0a\u63d0\u4f9b\u6781\u5feb\u7684\u66f4\u65b0\uff0c\u4f46\u8fd8\u6709\u53e6\u4e00\u4e2a\u91cd\u8981\u6307\u6807\u9700\u8981\u8003\u8651 - \u542f\u52a8\u65f6\u95f4\u3002\u60a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\u5f00\u59cb\u8fd0\u884c\u7684\u901f\u5ea6\u8d8a\u5feb\uff0c\u60a8\u5f00\u59cb\u5de5\u4f5c\u7684\u901f\u5ea6\u5c31\u8d8a\u5feb\u3002"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u6d41\u7a0b\u66f4\u5feb - \u5de5\u4f5c\u66f4\u5feb\uff0c\u6216\u505a\u66f4\u5c11\u7684\u5de5\u4f5c\u3002\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u51cf\u5c11\u5de5\u4f5c\u91cf\u7684\u65b9\u6cd5\u662f\u53ea\u7f16\u8bd1\u542f\u52a8\u6240\u9700\u7684\u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"\u9875\u9762\u7ea7\u7f16\u8bd1"},"\u9875\u9762\u7ea7\u7f16\u8bd1"),(0,a.kt)("p",null,"2-3 \u5e74\u524d\u7684 Next.js \u7248\u672c\u7528\u4e8e\u5728\u663e\u793a\u60a8\u7684\u5f00\u53d1\u670d\u52a1\u5668\u4e4b\u524d",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f"),"\u3002\u5728 Next.js ","[11]"," \u4e2d\uff0c\u6211\u4eec\u5f00\u59cb\u53ea",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u8bf7\u6c42\u7684\u9875\u9762\u7684\u4ee3\u7801"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u66f4\u597d\uff0c\u4f46\u5e76\u4e0d\u5b8c\u7f8e\u3002\u5f53\u60a8\u5bfc\u822a\u5230 \u65f6/users\uff0c\u6211\u4eec\u5c06\u6346\u7ed1\u6240\u6709\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u6a21\u5757\u3001\u52a8\u6001\u5bfc\u5165\u7684\u6a21\u5757\u4ee5\u53ca\u5f15\u7528\u7684 CSS \u548c\u56fe\u50cf\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u60a8\u7684\u9875\u9762\u7684\u5f88\u5927\u4e00\u90e8\u5206\u9690\u85cf\u5728\u89c6\u56fe\u4e4b\u5916\uff0c\u6216\u8005\u9690\u85cf\u5728\u9009\u9879\u5361\u540e\u9762\uff0c\u6211\u4eec\u4ecd\u7136\u4f1a\u5bf9\u5176\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u7ea7\u7f16\u8bd1"},"\u8bf7\u6c42\u7ea7\u7f16\u8bd1"),(0,a.kt)("p",null,"Turbopack \u8db3\u591f\u806a\u660e\uff0c\u53ef\u4ee5\u53ea\u7f16\u8bd1\u60a8\u8bf7\u6c42\u7684\u4ee3\u7801\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u6d4f\u89c8\u5668\u8bf7\u6c42 HTML\uff0c\u6211\u4eec\u53ea\u7f16\u8bd1 HTML\u2014\u2014\u800c\u4e0d\u662f HTML \u5f15\u7528\u7684\u4efb\u4f55\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6d4f\u89c8\u5668\u9700\u8981\u4e00\u4e9b CSS\uff0c\u6211\u4eec\u5c06\u53ea\u7f16\u8bd1\u5b83\u2014\u2014\u800c\u4e0d\u7f16\u8bd1\u5f15\u7528\u7684\u56fe\u50cf\u3002\u80cc\u540e\u6709\u4e00\u4e2a\u5927\u7684\u56fe\u8868\u5e93",(0,a.kt)("inlineCode",{parentName:"p"},"next/dynamic"),"\u5417\uff1f\u5728\u663e\u793a\u56fe\u8868\u7684\u9009\u9879\u5361\u663e\u793a\u4e4b\u524d\u4e0d\u7f16\u8bd1\u5b83\u3002Turbopack \u751a\u81f3\u77e5\u9053\u4e0d\u7f16\u8bd1\u6e90\u6620\u5c04\uff0c\u9664\u975e\u60a8\u7684 Chrome DevTools \u662f\u6253\u5f00\u7684\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u4f7f\u7528\u539f\u751f ESM\uff0c\u6211\u4eec\u4f1a\u5f97\u5230\u7c7b\u4f3c\u7684\u884c\u4e3a\u3002\u9664\u4e86 Native ESM \u5411\u670d\u52a1\u5668\u4ea7\u751f\u5927\u91cf\u8bf7\u6c42\u5916\uff0c\u6b63\u5982\u6211\u4eec\u4e3a\u4ec0\u4e48\u9009\u62e9 Turbopack \u90e8\u5206\u6240\u8ba8\u8bba\u7684\u90a3\u6837\u3002\u901a\u8fc7\u8bf7\u6c42\u7ea7\u7f16\u8bd1\uff0c\u6211\u4eec\u65e2\u53ef\u4ee5\u51cf\u5c11\u8bf7\u6c42\u7684\u6570\u91cf\uff0c\u53c8\u53ef\u4ee5\u4f7f\u7528\u672c\u673a\u901f\u5ea6\u6765\u7f16\u8bd1\u5b83\u4eec\u3002\u6b63\u5982\u60a8\u5728\u6211\u4eec\u7684\u57fa\u51c6\u6d4b\u8bd5\u4e2d\u770b\u5230\u7684\u90a3\u6837\uff0c\u8fd9\u63d0\u4f9b\u4e86\u663e\u7740\u7684\u6027\u80fd\u6539\u8fdb\u3002"),(0,a.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,"\u3010\u539f\u6587\u5f15\u7528\u3011",(0,a.kt)("a",{parentName:"p",href:"https://turbo.build/pack/docs"},"Turbopack Quickstart \u2013 Turbopack")))}k.isMDXComponent=!0},7675:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-264c11779b8e1c0ef38da3c1a69282f5.jpg"},8354:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turbo-engine-first-run-c1e625571bc3497d4bd21db2d87aeeef.webp"},4653:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/turbo-engine-second-run-5c9dd6a904afa4163f6298d665eb81f2.webp"}}]);