"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[9422],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={slug:"uml",title:"Picturing Architecture",tags:["UML"]},l="Picturing Architecture",o={permalink:"/blog/uml",source:"@site/blog/2022-11-13-UML/index.mdx",title:"Picturing Architecture",description:"\u4ea4\u6d41",date:"2022-11-13T00:00:00.000Z",formattedDate:"2022\u5e7411\u670813\u65e5",tags:[{label:"UML",permalink:"/blog/tags/uml"}],readingTime:26.075,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"uml",title:"Picturing Architecture",tags:["UML"]},nextItem:{title:"Turbopack\u521d\u8bc6",permalink:"/blog/Turbopack"}},s={authorsImageUrls:[]},u=[{value:"1. designing in an agile world",id:"1-designing-in-an-agile-world",level:2},{value:"2. Organizing Stories",id:"2-organizing-stories",level:2},{value:"stories and story cards",id:"stories-and-story-cards",level:3},{value:"story Maps",id:"story-maps",level:3},{value:"Story \uff08Use Case\uff09Diagram",id:"story-use-casediagram",level:3},{value:"3 Activity Diagrams",id:"3-activity-diagrams",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ea4\u6d41"),"\n\u9664\u975e\u4f60\u5728\u5c71\u9876\u7684\u5c71\u6d1e\u91cc\u5de5\u4f5c\uff0c\u5426\u5219\u4f60\u53ef\u4ee5\u4e0e\u5176\u4ed6\u4eba\u8c08\u8bba\u4f60\u7684\u5de5\u4f5c\uff0c\u5426\u5219\u4f60\u5c06\u65e0\u6cd5\u771f\u6b63\u6709\u6548\u7684\u7f16\u7a0b\u3002\u800c\u5f53\u4f60\u8fd9\u6837\u505a\u65f6\uff0c\u5c31\u662f\u8bf4\uff0c\u770b\u4ee3\u7801\u4e0d\u4f1a\u6d88\u51cf\u4ee3\u7801\n\u4ee3\u7801\u592a\u590d\u6742\u4e86\uff0c\u6574\u4f53\u89e3\u6784\u8fd8\u4e0d\u591f\u6e05\u6670"),(0,a.kt)("h2",{id:"1-designing-in-an-agile-world"},"1. designing in an agile world"),(0,a.kt)("h2",{id:"2-organizing-stories"},"2. Organizing Stories"),(0,a.kt)("h3",{id:"stories-and-story-cards"},"stories and story cards"),(0,a.kt)("p",null,"\u5f53\u8bbe\u8ba1\u5230\u63cf\u7ed8\u67b6\u6784\u65f6\uff0c\u8ba9\u6211\u4eec\u4ece\u8bbe\u8ba1\u8fc7\u7a0b\u7684\u5f00\u59cb\uff0c\u5373\u8bbe\u8ba1\u8fc7\u7a0b\u7684\u5f00\u59cb\u5f00\u59cb\u3002\u5728\u672c\u6a21\u5757\u4e2d\uff0c\u6211\u5c06\u8ba8\u8bba\u6545\u4e8b\u4ee5\u53ca\u7ec4\u7ec7\u6545\u4e8b\u5e76\u5df2\u56fe\u5f62\u65b9\u5f0f\u6545\u4e8b\u4ee5\u8fdb\u884c\u8ba1\u5212\u7684\u65b9\u5f0f\u3002\n\u4e0d\u8fc7\uff0c\u9996\u5148\u6211\u9700\u8981\u8c08\u4e00\u8c08\u5230\u5e95\u662f\u4ec0\u4e48\u6545\u4e8b\u3002\u56e0\u4e3a\u6ca1\u6709\u8fd9\u6837\u7684\u80cc\u666f\uff0c\u6211\u4ee5\u540e\u518d\u7ed9\u4f60\u7684\u63cf\u8ff0\u5c31\u6ca1\u6709\u591a\u5927\u610f\u4e49\uff0c\u800c\u4e14\u5f88\u591a\u4eba\u5e76\u6ca1\u6709\u771f\u6b63\u7406\u89e3\u4e00\u4e2a\u6545\u4e8b\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6545\u4e8b\u7684\u6982\u5ff5\u5bf9\u4e8e\u654f\u6377\u5f00\u53d1\u81f3\u5173\u91cd\u8981\uff0c\u56e0\u6b64\u6211\u4eec\u6700\u597d\u628a\u4e8b\u60c5\u505a\u597d\u3002\u56e0\u6b64\uff0c\u201c\u6545\u4e8b\u201d\u4e00\u8bcd\u5e76\u975e\u50cf\u6211\u4eec\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u7ecf\u5e38\u53d1\u4e0b\u7684\u90a3\u6837\u6784\u6210\u5bf9\u82f1\u8bed\u5355\u8bcd\u7684\u53cd\u611f\u3002\n\u4f8b\u5982\uff0c\u6709\u51e0\u68f5\u6811\u7684\u6839\u5728\u7a7a\u4e2d\u98d8\u626c\uff1f\u9996\u5148\uff0c\u4e00\u4e2a\u6545\u4e8b\u7684\u786e\u5207\u542b\u4e49\u5c31\u662f\u5b83\u5728\u5b57\u5178\u4e2d\u7684\u53d9\u8ff0\uff0c\u5373\u53d9\u8ff0\u3002\u66f4\u51c6\u786e\u5730\u8bf4\uff0c\u5b83\u662f\u4e00\u79cd\u53d9\u8ff0\uff0c\u5b83\u4f7f\u7528\u6237\u5b8c\u6210\u67d0\u4e9b\u8fc7\u7a0b\uff0c\u4ece\u800c\u4ea7\u751f\u5bf9\u4e8e\u8be5\u7528\u6237\u5728\u73b0\u5b9e\u4e16\u754c\u4e2d\u6709\u4ef7\u503c\u7684\u7ed3\u679c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e00\u4e2a\u6545\u4e8b\u63cf\u8ff0\u4e86\u4e00\u4e2a\u8fc7\u7a0b\u3002\u4ed6\u6ca1\u6709\u63cf\u8ff0\u4e8b\u7269"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A narrative that takes a user through some process that results in a valuable outcome\n")),(0,a.kt)("p",null,"\u8fd9\u662f\u52a8\u8bcd\uff0c\u4e0d\u662f\u540d\u8bcd\u3002\u56e0\u6b64\uff0c\u6545\u4e8b\u5e76\u4e0d\u662f\u8868\u8fbe\u529f\u80fd\u8bf7\u6c42\u7684\u4e00\u79cd\u597d\u65b9\u6cd5\u3002\u6dfb\u52a0\u6309\u94ae\u4e0d\u662f\u6545\u4e8b\u3002\u90a3\u91cc\u6ca1\u6709\u7528\u6237\u7ea7\u522b\u7684\u53d9\u8ff0\uff0c\u800c\u5178\u578b\u7684\u7528\u6237\u53ef\u80fd\u4f1a\u5728\u4e4e\u6211\u4eec\u7684\u7a0b\u5e8f\u6709\u591a\u5c11\u4e2a\u6309\u94ae"),(0,a.kt)("p",null,"\u7528\u6237\u5173\u5fc3\u7684\u662f\uff0c\u4ed6\u4eec\u5728\u4f7f\u7528\u8be5\u7a0b\u5e8f\u65f6\u6b63\u5728\u5b8c\u6210\u67d0\u4e9b\u5de5\u4f5c\uff0c\u800c\u8fd9\u6b63\u662f\u6545\u4e8b\u6240\u6355\u6349\u5230\u7684\uff0c\u4ed6\u4eec\u6b63\u5728\u5b8c\u6210\u7684\u4e8b\u60c5\u3002"),(0,a.kt)("p",null,"\u6545\u4e8b\u5e76\u975e\u72ec\u7acb\u5b58\u5728\uff0c\u800c\u662f\u5b58\u5728\u4e8e\u67d0\u4e9b\u4e0a\u4e0b\u6587\u4e2d\u3002\u800c\u6211\u4eec\u5c06\u4e0a\u4e0b\u6587\u89c6\u4e3a\u7cfb\u7edf\u9690\u55bb\u3002\u53ef\u4ee5\u5c06\u9690\u55bb\u60f3\u8c61\u4e3a\u6545\u4e8b\u53d1\u751f\u7684\u73af\u5883\uff0c\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u821e\u53f0\n\u56e0\u6b64\uff0c\u5728\u6211\u4eec\u7684\u535a\u5ba2\u7cfb\u7edf\u4e0a\uff0c\u6211\u9009\u62e9\u4e86\u4e00\u672c\u6742\u5fd7\u4f5c\u4e3a\u4e00\u4e2a\u7279\u522b\u6709\u7528\u7684\u9690\u55bb\uff0c\u9690\u55bb\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5806\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u5efa\u6a21\u7684\u62bd\u8c61\uff0c\u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u76f4\u89c2\u5730\u7406\u89e3\u8fd9\u4e9b\u62bd\u8c61\uff0c\u6216\u8005\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9690\u55bb\uff0c\u6211\u4eec\u53ef\u4ee5\n\u4e00\u672c\u6742\u5fd7\u4e0a\u53c8\u51fa\u7248\u5546\uff0c\u8bfb\u8005\uff0c\u4f5c\u5bb6\u548c\u6587\u7ae0\uff0c\u8fd8\u6709\u5b8c\u5168\u4e86\u89e3\u7684\u8bb8\u591a\u5176\u4ed6\u5185\u5bb9\u3002\u5982\u679c\u6211\u4eec\u7684\u4ee3\u7801\u7ed3\u6784\u5177\u6709\u8fd9\u79cd\u9690\u55bb\u6a21\u578b\uff0c\u90a3\u4e48\u4ee3\u7801\u7ed3\u6784\u4e5f\u5c06\u662f\u76f4\u89c2\u4e14\u6613\u4e8e\u7406\u89e3\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u7247\u6bb5\u5c06\u4ee5\u8fde\u8d2f\u7684\u65b9\u5f0f\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u56e0\u6b64\uff0c\u9690\u55bb\u5b9e\u9645\u4e0a\u4f7f\u6211\u4eec\u7cfb\u7edf\u4f53\u7cfb\u7ed3\u6784\u7684\u4e00\u5e45\u56fe\uff0c\u5c3d\u7ba1\u8fd9\u662f\u4e00\u79cd\u5fc3\u7406\u4e0a\u7684\u6784\u60f3\u3002\u8fd9\u662f\u6211\u4eec\u8c08\u8bba\u7684\u7b2c\u4e00\u5f20\u4ef7\u503c\u56fe\uff0c\u4ed6\u5728\u4f60\u7684\u5185\u5fc3\u6df1\u5904\uff0c\u770b\u4e0d\u5230 UML\u3002\u73b0\u5728\u5df2\u7ecf\u786e\u5b9a\u4e86\u4e00\u4e2a\u9690\u55bb\uff0c\u6211\u4eec\u7684\u4e0b\u4e00\u4e2a\u4efb\u52a1\u662f\u7f16\u9020\u4e00\u4e9b\u6545\u4e8b\u3002\u4ee3\u8868\u6545\u4e8b\u7684\u6700\u4f73\u65b9\u5f0f\u662f\u5728\u7d22\u5f15\u5361\u4e0a\u4ee5\u5b9e\u7269\u5f62\u5f0f\u5448\u73b0\uff0c\u73b0\u5728\u8fd9\u5f20\u5361\u7247\u5e76\u6ca1\u6709\u5305\u542b\u6240\u6709\u7ec6\u8282\uff0c\u53ea\u662f\u4e00\u4e24\u53e5\u8bdd\u3002\u5728\u5f00\u59cb\u7f16\u7801\u4e4b\u524d\uff0c\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u4e0e\u7528\u6237\u8fdb\u884c\u8be6\u7ec6\u5bf9\u8bdd\u7684\u5360\u4f4d\u7b26\u3002\n\u8fd9\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u73b0\u5728\u8fd9\u4e2a\u7279\u5b9a\u7684\u6545\u4e8b\u662f\u4ee5\u516c\u5f0f\u5316\u7684\u65b9\u5f0f\u8868\u793a\u7684\uff0c\u6211\u5c06\u5728\u7b2c\u4e8c\u79d2\u949f\u4e2d\u8c08\u8bba\u5b83\uff0c\u800c\u4e14\u8fd9\u91cc\u6709\u6bd4\u6211\u4eec\u5728\u654f\u6377\u5546\u5e97\u4e2d\u5e38\u89c1\u7684\u4e24\u5468\u53d1\u5e03\u5468\u671f\u4e2d\u66f4\u591a\u7684\u5de5\u4f5c\u8981\u505a\uff0c\u6240\u4ee5\u8fd9\u4e2a\u7279\u6b8a\u7684\u6545\u4e8b\u88ab\u79f0\u4e3a\u53f2\u8bd7\uff0c\u56e0\u4e3a\u5b83\u662f\u5982\u6b64\u4e4b\u5927\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4e0d\u662f\u5360\u4e00\u4e2a\u5bf9\u8bdd\u7684\u5360\u4f4d\u7b26\uff0c\u800c\u662f\u5360\u6574\u4e2a\u5bf9\u8bdd\u548c\u6574\u4e2a\u6545\u4e8b\u7684\u5360\u4f4d\u7b26\u3002\u5373\u4f7f\u5728\u53f2\u8bd7\u7ea7\uff0c\u8fd9\u91cc\u4e5f\u6709\u4e00\u4ef6\u91cd\u8981\u7684\u4e8b\u60c5\u8981\u6ce8\u610f\u3002\u9605\u8bfb\u6211\u4eec\u7684\u53e5\u5b50\uff0c\u4f5c\u5bb6\u771f\u7684\u53ea\u662f\u5bf9\u8868\u8fbe\u610f\u89c1\u611f\u5174\u8da3\u5417\uff1f\u6211\u4f1a\u8bf4\u4e0d\uff0c\u4ed6\u4eec\u5e0c\u671b\u4ed6\u4eec\u7684\u610f\u89c1\u80fd\u88ab\u542c\u5230\u5e76\u5177\u6709\u5f71\u54cd\u529b\u3002\u56e0\u6b64\uff0c\u8ba9\u6211\u4eec\u66f4\u6539\u6545\u4e8b\u4ee5\u53cd\u6620\u8be5\u76ee\u6807\u3002\u73b0\u5728\uff0c\u4e00\u9879\u66f4\u6539\u53ef\u80fd\u4f1a\u5bf9\u6211\u4eec\u7684\u4ee3\u7801\u4ea7\u751f\u5de8\u5927\u5f71\u54cd\u3002\u5982\u679c\u6211\u4eec\u6b63\u5728\u8003\u8651\u53d1\u6325\u5f71\u54cd\u529b\uff0c\u90a3\u4e48\u6211\u4eec\u4e5f\u5728\u8003\u8651\u5982\u4f55\u4f20\u64ad\u521a\u521a\u5199\u7684\u4e1c\u897f\uff1f\u6362\u53e5\u8bdd\u8bf4\uff0c\u8be5\u7a0b\u5e8f\u73b0\u5728\u5fc5\u987b\u5177\u6709\u4ee5\u524d\u6ca1\u6709\u7684\u529f\u80fd\uff0c\u4e0e\u4f20\u64ad\u6709\u5173\u7684\u529f\u80fd\uff0c\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\uff08\u4f8b\u5982\uff0c\u5f53\u6211\u4eec\u6dfb\u52a0\u65b0\u535a\u5ba2\u65f6\uff09\u6216\u81ea\u52a8\u53d1\u5e03\u63a8\u6587\u3002\u56e0\u6b64\uff0c\u7cbe\u5fc3\u5236\u4f5c\u8fd9\u4e9b\u53e5\u5b50\u975e\u5e38\u91cd\u8981\uff0c\u5e76\u4e14\u5728\u6211\u4eec\u5236\u4f5c\u8fd9\u4e9b\u53e5\u5b50\u65f6\u7262\u8bb0\u7528\u6237\u7684\u771f\u5b9e\u76ee\u6807\u66f4\u4e3a\u91cd\u8981\u3002\u73b0\u5728\u56de\u5230\u516c\u5f0f\u5316\u90e8\u5206\uff0c\u901a\u5e38\u4f7f\u7528 mike cohn \u7684\u6a21\u677f\u6765\u8868\u793a\u6545\u4e8b\u3002\n\u57fa\u672c\u5f62\u5f0f\u662f x \u6211\u9700\u8981 y \u6765\u505a z\u3002\u586b\u5199 x \u662f\u7528\u6237\u626e\u6f14\u7684\u89d2\u8272\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ed6\u662f\u4f5c\u4e3a x \u89d2\u8272\u7684\u7528\u6237\u3002\u4e0d\u8981\u8bb2\u8fd9\u4e9b\u89d2\u8272\u4e0e\u5b9e\u9645\u4eba\u5458\u6df7\u6dc6\n\u4f8b\u5982\u6709\u65f6\u6211\u4f1a\u4ee5\u4f5c\u8005\u7684\u8eab\u4efd\u767b\u5f55\u7cfb\u7edf\u5df2\u64b0\u5199\u535a\u5ba2\uff0c\u6709\u65f6\u6211\u4f1a\u4ee5\u7ba1\u7406\u5458\u7684\u8eab\u4efd\u767b\u5f55\u540c\u4e00\u7cfb\u7edf\u4ee5\u6267\u884c\u67d0\u79cd\u7ba1\u7406\u4efb\u52a1\u3002\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u90fd\u662f\u540c\u4e00\u4e2a\u4eba\u8fd9\u4e00\u4e8b\u5b9e\u5b9e\u9645\u4e0a\u5e76\u4e0d\u91cd\u8981\u3002"),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u548c\u8bbe\u8ba1\u7ea7\u522b\u4e0a\u91cd\u8981\u7684\u662f\u4eba\u5458\u5728\u767b\u5f55\u65f6\u6240\u626e\u6f14\u7684\u89d2\u8272\u3002\u4e0b\u4e00\u5757\u662f\u6211\u9700\u8981\u505a\u7684\u90e8\u5206\u3002\u8fd9\u662f\u7ed9\u5b9a\u89d2\u8272\u7684\u67d0\u4eba\u5c06\u6267\u884c\u7684\u4e00\u7ec4\u6d3b\u52a8\uff0c\u5df2\u5b9e\u73b0\u67d0\u79cd\u6709\u4ef7\u503c\u7684\u7ed3\u679c\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u672c\u8282\u63cf\u8ff0\u4e86\u4e00\u7ec4\u57df\u7ea7\u522b\u7684\u6d3b\u52a8\uff0c\u6ca1\u6709\u63cf\u8ff0\u4f7f\u7528\u8ba1\u7b97\u673a\u7a0b\u5e8f\u7684\u7528\u6237\n\u6211\u4eec\u5c06\u628a\u6240\u6709\u5185\u5bb9\u90fd\u4fdd\u7559\u5728\u6211\u4eec\u7684\u7cfb\u7edf\u9690\u55bb\u4e2d\uff0c\u56e0\u6b64\u8fd9\u91cc\u63cf\u8ff0\u4e2d\uff0c\u56e0\u6b64\u8fd9\u91cc\u63cf\u8ff0\u7684\u6240\u6709\u6d3b\u52a8\u90fd\u662f\u5728\u53d1\u884c\u6742\u5fd7\u7684\u8fc7\u7a0b\u4e2d\u5e94\u8be5\u8fdb\u884c\u7684\u4e8b\u60c5\uff0c\u4f60\u6ca1\u6709\u5728\u6545\u4e8b\u5361\u4e0a\u653e\u7f6e\u4efb\u4f55\u6709\u5173\u5982\u4f55\u4f7f\u7528\u8ba1\u7b97\u673a\u7a0b\u5e8f\u7684\u5185\u5bb9\u3002\n\u5982\u679c\u7a0b\u5e8f\u4e0d\u5b58\u5728\uff0c\u4f60\u5c06\u770b\u5230\u7528\u6237\u5c06\u8981\u6267\u884c\u7684\u64cd\u4f5c\u3002\u6a21\u677f\u4e2d\u7684\u7b2c\u4e09\u5b57\u53e5\u5411\u6211\u4eec\u5c55\u793a\u4e86\u6211\u4eec\u8bd5\u56fe\u5b9e\u73b0\u7684\u7ed3\u679c\u3002\u540c\u6837\uff0c\u8fd9\u5fc5\u987b\u5bf9\u6211\u4eec\u7684\u7528\u6237\u6709\u4ef7\u503c\n\u4f8b\u5982\u767b\u5f55\u4e0d\u662f\u6545\u4e8b\uff0c\u56e0\u4e3a\u90a3\u91cc\u6ca1\u6709\u6709\u4ef7\u503c\u7684\u7ed3\u679c\uff0c\u4f60\u4e0d\u662f\u4e3a\u4e86\u767b\u5f55\u513f\u767b\u5f55\uff0c\u73b0\u5728\uff0c\u5728\u4e00\u5bb6\u654f\u6377\u5546\u5e97\u4e2d\uff0c\u6211\u4eec\u7684\u5de5\u4f5c\u5355\u5143\u5c31\u662f\u6574\u4e2a\u6545\u4e8b"),(0,a.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u8bb2\u4e00\u6b21\u5904\u7406\u4e00\u4e2a\u6545\u4e8b\uff0c\u6784\u5efa\u4ece ui \u4e00\u76f4\u5230\u6570\u636e\u5e93\u7684\u6240\u6709\u5185\u5bb9\u3002\u5982\u679c\u6545\u4e8b\u8db3\u591f\u5c0f\uff0c\u6211\u4eec\u5c06\u5728\u4e00\u4e24\u4e2a\u661f\u671f\u5185\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\uff0c\u5c4a\u65f6\u6211\u4eec\u5c06\u62e5\u6709\u53ef\u4ee5\u53d1\u5e03\u7684\u5185\u5bb9\u3002\n\u6211\u4eec\u5c06\u6709\u4e00\u6bb5\u5de5\u4f5c\u4ee3\u7801\uff0c\u56e0\u6b64\u4ee5\u654f\u6377\u65b9\u5f0f\u5de5\u4f5c\u7684\u4f18\u70b9\u4e4b\u4e00\u662f\u8be5\u7a0b\u5e8f\u53ef\u4ee5\u8fd0\u884c\u3002\u73b0\u5728\u4ed6\u8d77\u521d\u5e76\u6ca1\u6709\u505a\u5f88\u591a\u4e8b\u60c5\uff0c\u4f46\u5b9e\u9645\u4e0a\u4ed6\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\n\u968f\u7740\u6211\u4eec\u7ee7\u7eed\u6784\u5efa\u8be5\u7a0b\u5e8f\uff0c\u6211\u4eec\u5c06\u4ece\u5934\u5230\u5c3e\u5b9e\u65bd\u66f4\u591a\u6545\u4e8b\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u8be5\u7a0b\u5e8f\u5c06\u9010\u6e10\u53d8\u5f97\u8d8a\u6765\u8d8a\u6709\u7528\u3002\n\u4e0d\u8fc7\u8fd9\u91cc\u7684\u8981\u70b9\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u968f\u65f6\u505c\u6b62\u5de5\u4f5c\uff0c\u5e76\u4e14\u6211\u4eec\u5c06\u62e5\u6709\u4e00\u4e2a\u529f\u80fd\u80fd\u9f50\u5168\u7684\u7a0b\u5e8f\u3002\u6211\u4eec\u6c38\u8fdc\u90fd\u4e0d\u4f1a\u5728\u7a0b\u5e8f\u7684\u67d0\u4e2a\u89d2\u843d\u5de5\u4f5c\u516d\u4e2a\u6708\uff0c\u800c\u5728\u90a3\u4e2a\u65f6\u5019\u7a0b\u5e8f\u4ecd\u7136\u65e0\u6cd5\u5de5\u4f5c\u3002\u73b0\u5728\u6709\u6700\u540e\u4e00\u4e2a\u601d\u7ef4\u5dee\u522b"),(0,a.kt)("p",null,"\u5f53\u6211\u7f16\u5199\u6545\u4e8b\u65f6\uff0c\u6211\u4e2a\u4eba\u5e0c\u671b\u5bf9\u89c4\u8303\u5f62\u5f0f\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f\uff0c\u5df2\u5c06\u7ed3\u679c\u653e\u5728\u7b2c\u4e00\u4f4d\uff0c\u8fd9\u4e3b\u8981\u662f\u56e0\u4e3a\u4ed6\u662f\u6211\u4e13\u6ce8\u4e8e\u6211\u8981\u5b8c\u6210\u7684\u5de5\u4f5c\u3002\u8fd9\u6bd5\u7adf\u662f\u6545\u4e8b\u4e2d\u6700\u91cd\u8981\u90e8\u5206"),(0,a.kt)("h3",{id:"story-maps"},"story Maps"),(0,a.kt)("p",null,"\u73b0\u5728\u4e00\u65e6\u6211\u4eec\u6709\u4e86\u5c11\u91cf\u7684\u6545\u4e8b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u4e00\u79cd\u56fe\u5f62\u5316\u7684\u65b9\u5f0f\u6765\u8868\u793a\u4ed6\u4eec\u7684\u5168\u90e8\u96c6\u5408\uff0c\u4ee5\u4fbf\u6211\u4eec\u80fd\u591f\u5f04\u6e05\u695a\u9996\u5148\u5904\u7406\u7684\u5185\u5bb9\n\u6211\u4eec\u7684\u76ee\u6807\u662f\u59cb\u7ec8\u81f4\u529b\u4e8e\u6700\u91cd\u8981\u7684\u4e8b\u60c5\uff0c\u65e2\u5bf9\u7528\u6237\u6700\u6709\u4ef7\u503c\u7684\u4e8b\u60c5\uff0c\u6211\u6240\u77e5\u9053\u7684\u6700\u597d\u7684\u5de5\u5177\u4e0d\u662f\u56fe\u7247\uff0c\u800c\u662f\u6240\u8c13\u7684\u6545\u4e8b\u5730\u56fe\uff0c\u4ed6\u662f\u4e00\u5757\u677f\u5b50\u6216\u4e00\u9762\u5e26\u6709\u4e00\u5806\u5361\u7247\u6216\u4fbf\u5229\u8d34\u7684\u5899"),(0,a.kt)("p",null,"\u6545\u4e8b\u5730\u56fe\u662f\u7531 jeff patton \u5f00\u53d1\u7684\uff0c\u4ed6\u5728\u4ed6\u7684\u300a\u7528\u6237\u6545\u4e8b\u5730\u56fe\u300b\u4e00\u4e66\u4e2d\u5bf9\u5176\u8fdb\u884c\u6765\u63cf\u8ff0\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u4f60\u9605\u8bfb\u5b83\uff0c\u8fd9\u662f\u4e00\u672c\u5f88\u68d2\u7684\u6811"),(0,a.kt)("p",null,"\u6211\u5c06\u6682\u65f6\u67e5\u770b\u5730\u56fe\u7684\u7ed3\u6784\uff0c\u4f46\u662f jeff \u7684\u4e66\u4e2d\u5305\u542b\u4e86\u6240\u6709\u7ec6\u8282\uff0c\u56e0\u6b64\u6211\u5c06\u5728\u672c\u8282\u8bfe\u4e2d\u6ca1\u6709\u4e8b\u4ef6\u8ba8\u8bba\u3002\u73b0\u5728\u6545\u4e8b\u5730\u56fe\u662f\u4e00\u4e2a\u7f51\u683c\uff0c\u6211\u4eec\u5728\u4e0a\u9762\u653e\u7f6e\u4e86\u6240\u6709\u6545\u4e8b\u5361\n\u901a\u5e38\u5f53\u6211\u5236\u4f5c\u5730\u56fe\u65f6\uff0c\u6211\u4f1a\u9047\u5230\u4e00\u4e9b\u5e76\u975e\u5730\u56fe\u771f\u6b63\u7ec4\u6210\u90e8\u5206\u7684\u6869\uff0c\u5de6\u8fb9\u4e00\u5806\u6545\u4e8b\u662f\u6211\u7684\u6e17\u6f0f\u6545\u4e8b\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u4e9b\u662f\u6211\u8ba4\u4e3a\u6211\u4eec\u5c06\u5728\u67d0\u4e2a\u65f6\u5019\u8fdb\u884c\u7684\u5de5\u4f5c\uff0c\u4f46\u662f\u6211\u73b0\u5728\u771f\u7684\u4e0d\u60f3\u8003\u8651\u4ed6\u4eec\uff0c\u56e0\u4e3a\u6211\u53ef\u80fd\u6ca1\u6709\u8db3\u591f\u7684\u4fe1\u606f\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5bf9\u4e8e\u6211\u4e0d\u60f3\u5fd8\u8bb0\u7684\u4e8b\u60c5\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u5806\u70c2\u6ce5\n\u6211\u559c\u6b22\u4fdd\u6301\u53ef\u89c1\uff0c\u4ee5\u4fbf\u5076\u5c14\u8003\u8651\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u559c\u6b22\u8bb2\u6545\u4e8b\u5730\u56fe\u653e\u7f6e\u5728\u6211\u7ecf\u5e38\u8d70\u7684\u67d0\u4e2a\u5927\u578b\u516c\u5171\u573a\u6240\uff0c\u6bcf\u5f53\u6211\u8d70\u5728\u5730\u56fe\u4e0a\u65f6\uff0c\u6211\u7684\u89c6\u7ebf\u90fd\u4f1a\u88ab\u6e17\u6d41\u5806\u4e2d\u7684\u5176\u4e2d\u4e00\u5f20\u5361\u7247\u5438\u5f15\u4f4f\uff0c\u800c\u6211\u4f1a\u5728\u8003\u8651\u4e00\u4e0b\uff0c\u4e5f\u8bb8\u5c06\u5176\u9002\u5f53\u7684\u79fb\u5230\u5730\u56fe\u4e0a\u3002\n\u53f3\u8fb9\u7684\u6545\u4e8b\u4e5f\u4e0d\u662f\u5730\u56fe\u7684\u4e00\u90e8\u5206\uff0c\u90a3\u53ea\u662f\u6211\u5b8c\u6210\u7684\u4e00\u5806\u4e8b\u60c5\uff0c\u8fd9\u8ba9\u6211\u5f88\u9ad8\u5174\u770b\u5230\u6211\u5b8c\u6210\u4e86\u4e00\u4e9b\u4e8b\u60c5\u3002\u5982\u679c\u4f60\u662f\u7ba1\u7406\u4eba\u5458\uff0c\u90a3\u4e48\u4f60\u771f\u7684\u4f1a\u5bf9\u6545\u4e8b\u4ece\u5730\u56fe\u79fb\u5230\u6210\u54c1\u6869\u7684\u901f\u5ea6\u611f\u5174\u8da3\n\u56e0\u6b64\u4ece\u7ba1\u7406\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5b9e\u9645\u4e0a\u5728\u54ea\u91cc\u5806\u6ee1\u4e86\u6210\u54c1\u5b9e\u9645\u4e0a\u53ef\u4ee5\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e00\u4e9b\u6709\u7528\u7684\u4fe1\u606f\u3002\u73b0\u5728\u8f6c\u5230\u5730\u56fe\u672c\u8eab\uff0c\u5217\u6807\u9898\u4f7f\u6211\u4eec\u73af\u5883\u4e2d\u9690\u55bb\u4e2d\u7684\u5e7f\u6cdb\u6d3b\u52a8\u7c7b\u578b\n\u901a\u5e38\uff0c\u4e3a\u4e86\u62e5\u6709\u4e00\u4e2a\u5b8c\u6210\u53ef\u884c\u7684\u7cfb\u7edf\uff0c\u4f60\u5fc5\u987b\u81f3\u5c11\u5728\u8fd9\u4e9b\u6d3b\u52a8\u7684\u6bcf\u4e00\u9879\u4e2d\u5b9e\u73b0\u4e86\u4e00\u4e9b\u529f\u80fd\uff0c\u5982\u679c\u8be5\u6d3b\u52a8\u662f\u4e00\u9879\u5927\u578b\u6d3b\u52a8\uff0c\u5219\u53ef\u4ee5\u6309\u7167\u6211\u5728\u6b64\u5904\u6240\u505a\u7684\u5c06\u5176\u7ec6\u5206\u4e3a\u5b50\u6d3b\u52a8\n\u7136\u540e\u4e0b\u4e00\u6b65\u662f\u83b7\u53d6\u6545\u4e8b\u5361\uff0c\u5e76\u5c06\u5176\u653e\u5728\u5730\u56fe\u7684\u53f3\u5217\u4e2d\u3002\u5f53\u7136\uff0c\u73b0\u5728\u6545\u4e8b\u4e0d\u4e00\u5b9a\u8981\u5b8c\u6210\u653e\u5728\u4e00\u5217\u6216\u53e6\u4e00\u5217\u4e2d\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5176\u653e\u5728\u770b\u8d77\u6765\u6700\u6709\u610f\u4e49\u7684\u4e00\u5217\u4e2d\n\u6545\u4e8b\u6309\u4f18\u5148\u7ea7\u548c\u4ef7\u503c\u6765\u7ec4\u7ec7\u3002\u56e0\u6b64\uff0c\u4f60\u79bb\u9876\u7aef\u8d8a\u8fd1\uff0c\u8fd9\u4e2a\u6545\u4e8b\u5c31\u8d8a\u6709\u4ef7\u503c\u3002\n\u4e00\u65e6\u6211\u5c06\u6240\u6709\u5361\u7247\u90fd\u653e\u5728\u5730\u56fe\u4e2d\uff0c\u6700\u4e0a\u9762\u7684\u4e00\u884c\u5c31\u662f\u4f60\u62e5\u6709\u4e00\u5957\u5b8c\u5168\u6709\u7528\u7684\u7cfb\u7edf\u6240\u9700\u8981\u505a\u7684\u6700\u5c11\u5de5\u4f5c\u3002\u4f60\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u6982\u5ff5\u9a8c\u8bc1\u7cfb\u7edf\u3002\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u4eec\u5c06\u5728\u6bcf\u4e00\u884c\u4e2d\u4ece\u5de6\u5230\u53f3\u6267\u884c\u6545\u4e8b\u3002\u56e0\u6b64\u6211\u4eec\u5c06\u4ece\u5de6\u5230\u53f3\uff0c\u4ece\u4e0a\u5230\u4e0b\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u603b\u662f\u63a5\u8fd1\u62e5\u6709\u4e00\u4e2a\u5b8c\u6574\u7684\u7cfb\u7edf\n\u6211\u4eec\u603b\u662f\u9996\u5148\u505a\u6700\u6709\u4ef7\u503c\u7684\u4e8b\u60c5\uff0c\u5e76\u4e14\u6211\u4eec\u603b\u662f\u4e00\u8d77\u5b9e\u65bd\u5177\u6709\u76f8\u540c\u4ef7\u503c\u6c34\u5e73\u7684\u6240\u6709\u5185\u5bb9\u4ee5\u5f62\u5f0f\u53d1\u5e03\uff0c\u800c\u4e14\u6211\u4eec\u79bb\u53d1\u5e03\u4ec5\u5269\u51e0\u4e2a\u6545\u4e8b\n\u6216\u8005\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u4efb\u4f55\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u4fdd\u8bc1\u6211\u4eec\u5df2\u7ecf\u5efa\u7acb\u4e86\u6211\u4eec\u53ef\u4ee5\u5728\u53ef\u7528\u65f6\u95f4\u5185\u6784\u5efa\u7684\u6700\u6709\u4ef7\u503c\u7684\u7a0b\u5e8f\n\u56e0\u6b64\uff0c\u516d\u4e2a\u6708\u5185\u5c06\u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u8fd9\u9879\u5de5\u4f5c\uff0c\u4e5f\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u53ef\u663e\u793a\u3002\u6211\u4eec\u603b\u662f\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5de5\u4f5c\u7cfb\u7edf\u3002\u7ee7\u7eed\u524d\u8fdb\uff0c\u5728\u5b8c\u6210\u6bcf\u4e00\u884c\u4e4b\u540e\uff0c\u4f60\u53ef\u80fd\u4e0d\u5e0c\u671b\u53d1\u5e03\u5230\u66f4\u5927\u7684\u7528\u6237\u793e\u533a\n\u6ce5\u6d46\u5411\u67d0\u4eba\u91ca\u653e\uff0c\u4f46\u4e0d\u4f1a\u5411\u6240\u6709\u4eba\u91ca\u653e\uff0c\u56e0\u6b64\u6211\u4eec\u5fc5\u987b\u51b3\u5b9a\u7684\u4e8b\u60c5\u4e4b\u4e00\u5c31\u662f\u4f55\u65f6\u8fdb\u884c\u6b63\u5f0f\u53d1\u5e03\uff0c\u800c\u5728\u6545\u4e8b\u5730\u56fe\u4e0a\u6307\u793a\u6b63\u5f0f\u53d1\u5e03\u7684\u65b9\u5f0f\u53ea\u662f\u5728\u5408\u7406\u7684\u4f4d\u7f6e\u5728\u5730\u56fe\u4e0a\u753b\u4e00\u6761\u6c34\u5e73\u7ebf\n\u5f53\u7136\uff0c\u771f\u662f\u7684\u5730\u56fe\u6bd4\u6211\u5728\u8fd9\u91cc\u7ed9\u4f60\u5c55\u793a\u7684\u5730\u56fe\u8981\u5927\u5f97\u591a\uff0c\u4f46\u5b83\u4eec\u5e76\u6ca1\u6709\u592a\u5927\u3002\u5728\u4efb\u4f55\u7ed9\u5b9a\u7684\u65f6\u523b\u3002\u4e00\u5f20\u5927\u5730\u56fe\u4e0a\u53ef\u4ee5\u90fd\u6709\u4e09\u5341\u4e2a\u6545\u4e8b\u3002\u90a3\u662f\u4e00\u5f20\u76f8\u5f53\u4e0d\u9519\u7684\u5730\u56fe\u3002"),(0,a.kt)("p",null,"\u4f60\u4e0d\u5e0c\u671b\u8d85\u8fc7 30 \u4e2a\u5de6\u53f3\u7684\u539f\u56e0\u662f\uff0c\u8fd9\u4e9b\u6545\u4e8b\u5c06\u5728\u5c06\u6765\u5b9e\u73b0\uff0c\u56e0\u6b64\u7acb\u5373\u5c06\u5176\u6545\u4e8b\u5316\u7684\u53ef\u80fd\u6027\u4e3a 0"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u8ba4\u4e3a\u8981\u505a\u7684\u4e8b\u60c5\u6bd4\u6446\u5728\u4f60\u9762\u524d\u7684\u4e09\u5341\u4ef6\u4e8b\u8981\u591a\u5f97\u591a\uff0c\u90a3\u5c31\u628a\u5b83\u653e\u5728\u6e17\u6d41\u5806\u4e2d\uff0c\u6700\u540e\u8bf7\u6ce8\u610f\uff0c\u6b64\u5730\u56fe\u662f\u52a8\u6001\u7684\uff0c\u8fd9\u662f\u4f7f\u7528\u7269\u7406\u7d22\u5f15\u5361\u6216\u4fbf\u5229\u8d34\u6bd4\u7ed8\u5236\u56fe\u5f62\u66f4\u597d\u7684\u539f\u56e0\u4e4b\u4e00\n\u901a\u5e38\u4f1a\u51fa\u73b0\u65b0\u7684\u6545\u4e8b\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u7528\u6237\u6b63\u5728\u4f7f\u7528\u4ee3\u7801\u5e76\u610f\u8bc6\u5230\u4ed6\u4eec\u5fd8\u8bb0\u4e86\u4e00\u4e9b\u4e1c\u897f\n\u73b0\u6709\u7684\u90a3\u4e9b\u5c06\u6d88\u5931\uff0c\u56e0\u4e3a\u6211\u4eec\u610f\u8bc6\u5230\u5b83\u4eec\u5e76\u4e0d\u50cf\u6211\u4eec\u8ba4\u4e3a\u7684\u90a3\u6837\u6709\u4ef7\u503c\uff0c\u4f18\u5148\u7ea7\u53d1\u751f\u53d8\u5316\uff0c\u5f00\u53d1\u56db\u5904\u79fb\u52a8\u3002\n\u73b0\u5728\uff0c\u5f53\u7ec4\u5408\u4e00\u4e2a\u6545\u4e8b\u56fe\u65f6\uff0c\u95ee\u9898\u4e4b\u4e00\u662f\u627e\u51fa\u8ba2\u8d2d\u5361\u7247\u7684\u6700\u4f73\u65b9\u6cd5\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u5b9e\u9645\u4f18\u5148\u4e8b\u9879\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("h3",{id:"story-use-casediagram"},"Story \uff08Use Case\uff09Diagram"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5b9e\u9645\u4e0a\u6709\u4e00\u5f20\u771f\u5b9e\u7684\u56fe\u7eb8\u5bf9\u6b64\u5f88\u6709\u5e2e\u52a9\uff0c\u6211\u79f0\u4e4b\u4e3a\u6545\u4e8b\u56fe\uff0cUML \u79f0\u5b83\u4eec\u4e3a\u7528\u4f8b\u56fe\n\u8fd9\u662f\u4e00\u5e45\u76f8\u540c\u7684\u56fe\uff0c\u7528\u4f8b\u548c\u6545\u4e8b\u975e\u5e38\u76f8\u4f3c\uff0c\u5c3d\u7ba1\u6982\u5ff5\u4e0d\u5c3d\u76f8\u540c\uff0c\u4f46\u662f\u7531\u4e8e\u6211\u662f\u4e00\u4e2a\u654f\u6377\u7684\u4eba\uff0c\u56e0\u6b64\u6211\u5728\u8fd9\u91cc\u4ee5\u6545\u4e8b\u800c\u4e0d\u662f\u7528\u4f8b\u7684\u65b9\u5f0f\u601d\u8003\uff0c\u56e0\u6b64\u6211\u5c06\u5176\u79f0\u4e3a\u6545\u4e8b\u56fe\u3002\n\u4f60\u53ef\u4ee5\u5728\u56fe\u4e2d\u7528\u5e26\u5706\u5708\u7684\u540d\u79f0\u8868\u793a\u6545\u4e8b\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7b80\u7b14\u56fe\u8868\u793a\u8be5\u6545\u4e8b\u4e2d\u6d89\u53ca\u7684\u89d2\u8272\nUML \u79f0\u8fd9\u4e9b\u4e3a\u89d2\u8272\u53c2\u4e0e\u8005\u3002\u4f46\u89d2\u8272\u5b9e\u9645\u4e0a\u662f\u4e00\u79cd\u66f4\u6b63\u786e\u7684\u770b\u5f85\u65b9\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u79f0\u5176\u4e3a\u89d2\u8272\u3002\u5728\u8fd9\u91cc\uff0c\u7531\u4e3b\u6301\u4eba\u89d2\u8272\u521b\u5efa\u7684\u6742\u5fd7\n\u4ee5\u6545\u4e8b\u5361\u7684\u5f62\u5f0f\uff0c\u6211\u4f1a\u8bf4\u7c7b\u4f3c\u7684\u8bdd\uff0c\u4f5c\u4e3a\u4e3b\u6301\u4eba\uff0c\u6211\u9700\u8981\u521b\u5efa\u4e00\u672c\u6742\u5fd7\u6765\u505a\u67d0\u4e8b\u6216\u5176\u4ed6\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u6dfb\u52a0\u7b2c\u4e8c\u4e2a\u6545\u4e8b\n\u4f5c\u4e3a\u4f5c\u8005\uff0c\u6211\u9700\u8981\u521b\u5efa\u4e00\u7bc7\u6587\u7ae0\uff0c\u6216\u8005\u4e5f\u8bb8\u6211\u5e94\u8be5\u8bf4\u6211\u9700\u8981\u5199\u4e00\u7bc7\u6587\u7ae0\u3002\u4e00\u79cd\u6216\u53e6\u4e00\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u6709\u7b2c\u4e8c\u4e2a\u6545\u4e8b\u3002\u73b0\u5728\u8fd9\u4e24\u4e2a\u6545\u4e8b\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\n\u9664\u975e\u6709\u6742\u8d28\u8981\u520a\u8f7d\uff0c\u5426\u5219\u4f60\u65e0\u6cd5\u521b\u5efa\u6587\u7ae0\u3002\u8fd9\u4e0d\u4e00\u5b9a\u610f\u5473\u7740\u6211\u4eec\u5fc5\u987b\u5728\u521b\u5efa\u6545\u4e8b\u4e4b\u524d\u5148\u521b\u5efa\u6742\u5fd7\uff0c\u4f46\u662f\u5982\u679c\u6211\u4eec\u4e0d\u521b\u5efa\u6742\u5fd7\uff0c\u5219\u5fc5\u987b\u4ee5\u4e0d\u540c\u7684\u65b9\u5f0f\u6765\u521b\u5efa\u6545\u4e8b\n\u4f8b\u5982\u5fc5\u987b\u6709\u6b8b\u5b58\u5bf9\u8c61\uff0c\u5982\u679c\u6211\u4eec\u4ee5\u76f8\u53cd\u7684\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u5bf9\u8c61\u5c06\u662f\u771f\u5b9e\u5bf9\u8c61\u3002\u6211\u5c06\u7528\u4e00\u6761\u7ebf\u548c\u4e00\u4e2a\u7bad\u5934\u6765\u8868\u793a\u8be5\u4f9d\u8d56\u5173\u7cfb\uff0c\u6539\u7ebf\u548c\u526a\u5934\u6307\u5411\u5fc5\u987b\u9996\u5148\u5b8c\u6210\u7684\u4e8b\u60c5\uff0c\u5c06\u5176\u89c6\u4e3a\u4f9d\u8d56\u5173\u7cfb\u3002\u5982\u679c A \u4f9d\u8d56\u4e8e B\uff0c\u5219\u7bad\u5934\u6307\u5411 B\u3002\u73b0\u5728\u6211\u8bb2\u6dfb\u52a0\u53e6\u4e00\u4e2a\u6545\u4e8b\n\u4f5c\u4e3a\u8bfb\u8005\uff0c\u6211\u60f3\u8bc4\u8bba\u4e00\u7bc7\u6587\u7ae0\uff0c\u7136\u540e\u8bbe\u7f6e\u4f9d\u8d56\u9879\u3002\u8bc4\u8bba\u4f9d\u8d56\u4e8e\u521b\u5efa\u6545\u4e8b\uff0c\u56e0\u4e3a\u5bf9\u4e0d\u5b58\u5728\u7684\u6545\u4e8b\u8fdb\u884c\u8bc4\u8bba\u5b8c\u6210\u6ca1\u6709\u610f\u4e49\n\u73b0\u5728\uff0c\u5f53\u6211\u60f3\u5230\u8bbe\u8ba1\u65f6\uff0c\u6211\u7684\u60f3\u6cd5\u662f\uff0c\u6ce8\u91ca\u5c06\u5728\u7f16\u5199\u540e\u7acb\u5373\u6dfb\u52a0\u5230\u6ce8\u91ca\u7ebf\u7a0b\u4e2d\uff0c\u4f46\u5b83\u662f\u4e0d\u53ef\u89c1\u7684\n\u5982\u679c\u8bc4\u8bba\u5457\u67d0\u4f4d\u4e3b\u6301\u4eba\u6279\u51c6\uff0c\u90a3\u4e48\u6211\u5c06\u4f7f\u5176\u53ef\u89c1\uff0c\u5982\u679c\u672a\u88ab\u6279\u51c6\uff0c\u5219\u5c06\u5176\u4ece\u7ebf\u7a0b\u4e2d\u5220\u9664\uff0c\u5728\u8fd9\u91cc\uff0c\u6211\u6307\u5b9a\u4e86\u4e24\u4e2a\u53ef\u80fd\u7684\u53c2\u4e0e\u8005\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f5c\u8005\u6216\u4e3b\u6301\u4eba\u90fd\u53ef\u4ee5\u6279\u51c6\u8bc4\u8bba\n\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u53e6\u4e00\u4e2a\u6545\u4e8b\uff0c\u8fd9\u5b9e\u9645\u4e0a\u662f\u6700\u540e\u4e00\u4e2a\u53d8\u4f53\u3002\u8fd9\u662f\u4e00\u79cd\u6279\u51c6\uff0c\u4f46\u6211\u5e0c\u671b\u80fd\u591f\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u6279\u51c6\n\u6362\u53e5\u8bdd\u8bf4\uff0c\u6211\u6b63\u5728\u60f3\u8c61\u7cfb\u7edf\u5c06\u5411\u4e3b\u6301\u4eba\u53d1\u9001\u4e00\u5c01\u7535\u5b50\u90ae\u4ef6\uff0c\u5982\u679c\u4e3b\u6301\u4eba\u54cd\u5e94\u8be5\u7535\u5b50\u90ae\u4ef6\uff0c\u90a3\u4e48\u8be5\u6545\u4e8b\u5c06\u88ab\u6279\u51c6\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u6807\u8bb0\u4f9d\u8d56\u9879\u884c\uff0c\u4ee5\u4f7f\u8fd9\u91cc\u7684\u4e8b\u60c5\u66f4\u52a0\u6e05\u695a\n\u4f60\u53ef\u4ee5\u4f7f\u7528 UML \u6210\u4e3a\u6784\u9020\u578b\u7684\u4e1c\u897f\uff0c\u4e00\u4e2a\u7b80\u77ed\u7684\u6ce8\u91ca\u5b57\u7b26\u4e32\uff0c\u90a3\u4e9b\u7c7b\u4f3c\u4e8e\u5c0f\u62ec\u53f7\u7684\u6807\u70b9\u7b26\u53f7\u6765\u5b8c\u6210\u6b64\u64cd\u4f5c\n\u987a\u4fbf\u8bf4\u4e00\u4e0b\uff0c\u8bf7\u6ce8\u610f\u8fd9\u4e9b\u662f\u5b9e\u9645\u7684\u6807\u70b9\u7b26\u53f7\uff0c\u4ed6\u4eec\u4e0d\u662f\u4e24\u4e2a\u5c0f\u4e8e\u53f7\u548c\u4e24\u4e2a\u5927\u4e8e\u53f7\n\u8fd9\u91cc\u7684 require \u6784\u9020\u578b\u5b9e\u9645\u4e0a\u53ea\u662f\u4e00\u884c\u7684\u9ed8\u8ba4\u542b\u4e49\uff0c\u56e0\u6b64\u663e\u793a\u7684\u6dfb\u52a0\u5b83\u5b9e\u9645\u4e0a\u53ea\u662f\u566a\u97f3\u3002\u4f46\u662f\uff0c\u6269\u5c55\u523b\u677f\u5370\u8c61\u544a\u8bc9\u6211\u4eec\u4e00\u4e9b\u6709\u8da3\u7684\u4e8b\u60c5\u3002\n\u5728\u8fd9\u91cc\uff0c\u6211\u8bf4\u7684\u662f\u7535\u5b50\u90ae\u4ef6\u6545\u4e8b\u662f\u66f4\u57fa\u672c\u7684\u6279\u51c6\u6545\u4e8b\u7684\u5ef6\u4f38\n\u6216\u6362\u4e00\u79cd\u8bf4\u8bdd\uff0c\u5f53\u6211\u4eec\u5b8c\u6210\u6279\u51c6\u6545\u4e8b\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u5df2\u7ecf\u5b8c\u6210\u4e86\u7535\u5b50\u90ae\u4ef6\u6545\u4e8b\u7684\u5927\u90e8\u5206\u5de5\u4f5c\uff0c\u56e0\u6b64\u7535\u5b50\u90ae\u4ef6\u6545\u4e8b\u5e94\u8be5\u76f8\u5bf9\u8f83\u77ed\n\u73b0\u5728\uff0c\u4e00\u65e6\u6211\u4eec\u6709\u4e86\u6240\u6709\u7684\u6545\u4e8b\uff0c\u6211\u4eec\u5c31\u4f1a\u6709\u5f88\u591a\u5708\u5b50\u548c\u5f88\u591a\u4f9d\u8d56\u5173\u7cfb\u3002\u90a3\u4e9b\u7bad\u5934\u6700\u591a\u7684\u6545\u4e8b\u662f\u6700\u5148\u53d1\u751f\u7684\u4e8b\u60c5\u7684\u826f\u597d\u5019\u9009\u8005\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5f88\u591a\u4e8b\u60c5\u90fd\u53d6\u51b3\u4e8e\u8fd9\u4e9b\u6545\u4e8b\uff0c\u56e0\u6b64\u5982\u679c\u6211\u4eec\u5148\u505a\u4e86\u8fd9\u4e9b\u4e8b\u60c5\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u8f7b\u677e\u5730\u8fdb\u884c\u5176\u4ed6\u4e8b\u60c5\n\u53e6\u8bf7\u6ce8\u610f\uff0c\u53f2\u8bd7\u786e\u5b9e\u662f\u4e00\u79cd\u6545\u4e8b\uff0c\u53ea\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u6545\u4e8b\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5c06\u5176\u653e\u5728\u56fe\u7247\u4e0a\uff0c\u6211\u5df2\u7ecf\u5728\u8fd9\u91cc\u5b8c\u6210\u4e86\uff0c\u4f46\u662f\u6211\u4f7f\u7528 UML \u4e2d\u7684\u4e0a\u4e0b\u98a0\u5012\u7684\u4e09\u53c9\u621f\u7b26\u53f7\u6765\u8868\u660e\u8fd9\u662f\u53f2\u8bd7\u822c\u7684\u3002\u56e0\u6b64\u8fd9\u662f\u6211\u5728\u5de5\u4f5c\u65f6\u4ee3\u8868\u6545\u4e8b\u7684\u4e24\u79cd\u56fe\u5f62\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u4e00\u6a21\u5757\u4e2d\uff0c\u6211\u8bb2\u8fdb\u4e00\u6b65\u6df1\u5165\u7814\u7a76\uff0c\u5e76\u5411\u4f60\u5c55\u793a\u5982\u4f55\u5f04\u6e05\u695a\u4e3a\u5b9e\u73b0\u8fd9\u4e2a\u6545\u4e8b\u6211\u4eec\u5fc5\u987b\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u6211\u5c06\u4f7f\u7528\u53e6\u4e00\u79cd UML \u56fe\uff08\u6d3b\u52a8\u56fe\uff09\u6765\u5b8c\u6210\u6b64\u64cd\u4f5c"),(0,a.kt)("h2",{id:"3-activity-diagrams"},"3 Activity Diagrams"),(0,a.kt)("p",null,"\u6d3b\u52a8\u56fe\u7684\u91cd\u70b9\u662f\u5411\u6211\u4eec\u5c55\u793a\u6240\u6709\u7684\u6d3b\u52a8\uff0c\u4e3a\u4e86\u8ba9\u6211\u4eec\u901a\u8fc7\u8fd9\u4e2a\u6545\u4e8b\uff0c\u6709\u4eba\u5fc5\u987b\u505a\u7684\u6240\u6709\u4e8b\u60c5\uff0c\u8fd9\u91cc\u6709\u6bd4\u4f60\u5728\u6545\u4e8b\u5361\u4e0a\u6709\u7684\u66f4\u591a\u7ec6\u8282\n\u6211\u4eec\u5f97\u5230\u7ec6\u8282\u7684\u65b9\u5f0f\uff0c\u5f53\u7136\u662f\u901a\u8fc7\u4e0e\u6211\u4eec\u7684\u7528\u6237\u4ea4\u8c08\u6240\u4ee5\u6d3b\u52a8\u56fe\u7279\u522b\u6709\u5e2e\u52a9\uff0c\u5f53\u4ee5\u548c\u4e00\u7fa4\u7528\u6237\u5750\u5728\u4e00\u8d77\uff0c\u89c6\u56fe\u5f04\u6e05\u695a\u4ed6\u4eec\u5fc5\u987b\u7ecf\u6d4e\u4ec0\u4e48\u6b65\u9aa4\u65f6\n\u4e3a\u4e86\u8fbe\u5230\u4ed6\u4eec\u6709\u4ef7\u503c\u7684\u7ed3\u679c\uff0c\u8fd9\u662f\u8fd9\u5f20\u56fe\u7684\u4e3b\u8981\u503c\u4e4b\u4e00\uff0c\u4e8b\u5b9e\u4e0a\u4e0d\u6d89\u53ca\u7f16\u7801\uff0c\u56e0\u6b64\u4f60\u7684\u7528\u6237\u662f\u5426\u53ef\u4ee5\u8bfb\u53d6\u4ee3\u7801\u5e76\u4e0d\u91cd\u8981\uff0c\u73b0\u5728\u4f60\u5fc5\u987b\u7ecf\u5386\u7684\u4e00\u7cfb\u5217\u6b65\u9aa4\u53ef\u80fd\u5f88\u7b80\u5355\uff0c\u4ed6\u53ef\u80fd\u53ea\u662f\u4e00\u4e2a\u7ebf\u6027\u5217\u8868\uff0c\u5982\u679c\u662f\u8fd9\u6837\u7684\u8bdd\uff0c\u7edd\u5bf9\u6ca1\u6709\u7406\u7531\u62cd\u8fd9\u6837\u7684\u7167\u7247\u53ea\u9700\u5236\u4f5c\u4e00\u4e2a\u9879\u76ee\u7b26\u53f7\u5217\u8868\u5e76\u7f16\u7801\u5927\u591a\u6570\u6545\u4e8b\u90fd\u6bd4\u90a3\u590d\u6742\uff0c\u8fd9\u5c31\u662f\u56fe\u8868\u4e3a\u4ec0\u4e48\u5f88\u65b9\u4fbf\uff0c\u987a\u4fbf\u8bf4\u4e00\u53e5\uff0c\u8fd9\u662f\u6240\u6709\u8fd9\u4e9b\u56fe\u8868\u7684\u4e00\u822c\u89c4\u5219\n\u5982\u679c\u4f60\u80fd\u7528\u4ee3\u7801\uff0c\u6211\u4eec\u8fd9\u91cc\u4e0d\u505a\u5927\u7684\u524d\u671f\u8bbe\u8ba1\u5de5\u4f5c\uff0c\u6211\u4eec\u7684\u76ee\u7684\u662f\u7f16\u7801\uff0c\u5982\u679c\u6211\u4eec\u80fd\u76f4\u63a5\u8fdb\u5165\u4ee3\u7801\uff0c\u73b0\u5728\u56de\u5230\u6211\u4eec\u7684\u7167\u7247\u5c31\u66f4\u597d\u4e86\u4e86\n\u6d3b\u52a8\u56fe\u4f1a\u52fe\u52d2\u51fa\u4e00\u4e2a\u7279\u5b9a\u6545\u4e8b\u7684\u6240\u6709\u6b65\u9aa4\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u6d3b\u52a8\u56fe\u901a\u5e38\u4f1a\u52fe\u52d2\u51fa\u51e0\u4e2a\u6545\u4e8b\u7684\u6b65\u9aa4\uff0c\u4e8b\u5b9e\u4e0a\uff0c\u6211\u8981\u5728\u8fd9\u91cc\u91c7\u53d6\u8fd9\u79cd\u65b9\u6cd5\uff0c\u6211\u5c06\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u6d3b\u52a8\u56fe\uff0c\u663e\u793a\u4e0e\u4e24\u4e2a\u8bc4\u8bba\u76f8\u5173\u7684\u6240\u6709\u6d3b\u52a8\n\u6211\u4eec\u5728\u4e0a\u4e00\u4e2a\u6a21\u5757\u4e2d\u770b\u5230\u7684\u6279\u51c6\u6545\u4e8b\uff0c\u73b0\u5728\u6240\u6709\u7684\u6d3b\u52a8\u90fd\u5fc5\u987b\u4ece\u67d0\u4e2a\u5730\u65b9\u5f00\u59cb\u3002\u6211\u4eec\u5728\u56fe\u8868\u4e2d\u7528\u4e00\u4e2a\u5927\u9ed1\u70b9\u6307\u51fa\uff0c\u90a3\u662f\u6211\u4eec\u5f00\u59cb\u7684\u5730\u65b9\n\u7136\u540e\u6211\u5c06\u6dfb\u52a0\u67d0\u4eba\u521b\u5efa\u8bc4\u8bba\u6240\u9700\u7684\u7b2c\u4e00\u4e2a\u6d3b\u52a8\n\u7136\u540e\u4e0b\u4e00\u4e2a\u9700\u8981\u6709\u4eba\u5728\u4eea\u8868\u677f\u4e0a\u6dfb\u52a0\u6ce8\u91ca\n\u73b0\u5728\u8bf7\u6ce8\u610f\uff0c\u6211\u6355\u6349\u5230\u7684\u6240\u6709\u4ee5\u4e0b\u662f\u6d3b\u52a8\u672c\u8eab\uff0c\u6211\u8bf4\u603b\u5f97\u6709\u4eba \u6211\u771f\u7684\u4e0d\u5728\u4e4e\u8c01\u5728\u505a\u8fd9\u4e2a\u6d3b\u52a8\uff0c\u5f53\u6211\u628a\u8fd9\u5f20\u56fe\u653e\u5728\u4e00\u8d77\u7684\u65f6\u5019\n\u90a3\u662f\u6211\u4ee5\u540e\u8981\u505a\u7684\u51b3\u5b9a\n\u5f53\u6211\u5f00\u59cb\u63a5\u8fd1\u8fd9\u91cc\u7684\u5b9e\u73b0\u65f6\uff0c\u6211\u5173\u5fc3\u7684\u662f\u4ec0\u4e48\uff0c\u6362\u53e5\u8bdd\u8bf4\u5c31\u662f\u6b63\u5728\u53d1\u751f\u7684\u4e8b\u60c5 \u662f\u8c01\u5728\u505a\u8fd9\u4ef6\u4e8b\n\u63a5\u4e0b\u6765\u6211\u9700\u8981\u505a\u7684\u662f\u628a\u8bc4\u8bba\u6dfb\u52a0\u5230\u8bc4\u8bba\u4e2d\n\u5f53\u6211\u5c06\u6ce8\u91ca\u6dfb\u52a0\u5230\u4eea\u8868\u677f\u65f6 UML\u8ba9\u6211\u4eec\u7528\u4e00\u79cd\u53eb\u505a\u53c9\u5b50\u7684\u4e1c\u897f\u6765\u8868\u793a\u8fd9\u79cd\u60c5\u51b5\n\u8fd9\u91cc\u7684\u5206\u53c9\u662f\u9876\u90e8\u7684\u7684\u7c97\u9ed1\u7ebf\u548c\u5e95\u90e8\u7684\u8fde\u63a5\u662f\u5e95\u90e8\u7684\u5927\u9ed1\u7ebf\n\u5176\u57fa\u672c\u601d\u60f3\u662f\uff0cfork\u548cjoin\u4e4b\u95f4\u7684\u64cd\u4f5c\u53ef\u4ee5\u4efb\u4f55\u987a\u5e8f\u8fdb\u884c\n\u65e0\u8bba\u5982\u4f55"))}p.isMDXComponent=!0}}]);