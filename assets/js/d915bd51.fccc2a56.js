"use strict";(self.webpackChunkdiqiu_website=self.webpackChunkdiqiu_website||[]).push([[9868],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1,title:"\u9762\u8bd5\u5927\u7eb2",tags:["\u9762\u8bd5"]},o="\u9762\u8bd5\u5927\u7eb2",l={unversionedId:"interview/index",id:"interview/index",title:"\u9762\u8bd5\u5927\u7eb2",description:"\u57fa\u7840\u77e5\u8bc6",source:"@site/docs/interview/index.md",sourceDirName:"interview",slug:"/interview/",permalink:"/docs/interview/",draft:!1,tags:[{label:"\u9762\u8bd5",permalink:"/docs/tags/\u9762\u8bd5"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u9762\u8bd5\u5927\u7eb2",tags:["\u9762\u8bd5"]},sidebar:"interview",next:{title:"\u77e5\u8bc6\u70b9\u7b80\u8ff0",permalink:"/docs/interview/interview_details"}},c={},p=[{value:"\u57fa\u7840\u77e5\u8bc6",id:"\u57fa\u7840\u77e5\u8bc6",level:2},{value:"\u4e2a\u4eba\u9879\u76ee",id:"\u4e2a\u4eba\u9879\u76ee",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9762\u8bd5\u5927\u7eb2"},"\u9762\u8bd5\u5927\u7eb2"),(0,i.kt)("h2",{id:"\u57fa\u7840\u77e5\u8bc6"},"\u57fa\u7840\u77e5\u8bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- \u7f51\u7edc\u57fa\u7840\n  - UDP&TCP\n    - UDP\n    - TCP\n  - HTTP \n    - HTTP/1.1\n    - HTTP/2\n    - HTTP/3\n    - HTTPS\n    - \u8de8\u57df\n    - \u7f13\u5b58\n  - DNS\n  - \u4f18\u5316\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- \u6d4f\u89c8\u5668\n  - \u8fdb\u7a0b&\u7ebf\u7a0b\n  - \u6e32\u67d3\u6d41\u7a0b\n  - \u4e8b\u4ef6\u5faa\u73af\n  - \u4f18\u5316\n    - \u56de\u6d41\n    - \u91cd\u7ed8\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- JavaScript\n  - \u8fd0\u884c\u73af\u5883\n    - V8\n      - \u6d41\u7a0b\uff08\u5185\u6838\u5c06js stream=> parser => AST => \u5b57\u8282\u7801\uff09\n      - \u8bed\u6cd5\u5206\u6790  \u62bd\u8c61\u8bed\u6cd5\u6811 \u8bcd\u6cd5\u4f5c\u7528\u57df\n      - \u8bcd\u6cd5\u5206\u6790  token\n      - parser \u89e3\u6790\u5668\n      - Ignition \u751f\u6210\u5b57\u8282\u7801\n      - turboFan \u751f\u6210\u673a\u5668\u7801(\u4f18\u5316\u91cd\u590d\u4ee3\u7801)\n    - \u5185\u5b58\u7ba1\u7406\n      - \u6808\n      - \u5806\n    - \u5783\u573e\u56de\u6536\n      - \u65b0\u751f\u4ee3\n      - \u8001\u751f\u4ee3\n  - \u57fa\u7840\n    - \u6267\u884c\u4e0a\u4e0b\u6587\n      - \u8bcd\u6cd5\u73af\u5883\u3001\u53d8\u91cf\u73af\u5883\u3001outer\u3001this (\u7f16\u8bd1\u9636\u6bb5\u3001\u8fd0\u884c\u9636\u6bb5)\n    - \u4f5c\u7528\u57df\n    - this\n      - call/apply/bind \u5b9e\u73b0\n    - \u95ed\u5305\n  - \u6570\u636e\u7c7b\u578b\n    - \u57fa\u672c\u6570\u636e\uff1aNumber String Boolean Undefined Null BigInt Symbol\n    - \u5f15\u7528\u6570\u636e\uff1aObject Array Function\n    - \u7c7b\u578b\u5224\u65ad\uff1atypeOf\n  - \u5bf9\u8c61\n    - \u5c5e\u6027\n    - \u539f\u578b\u94fe\n    - \u7ee7\u627f\n  - \u51fd\u6570\n    - \u7bad\u5934\u51fd\u6570\n    - \u67ef\u91cc\u5316\n    - \u7ec4\u5408\u51fd\u6570\n  - \u8fed\u4ee3\u5668&\u751f\u6210\u5668\n    - \u8fed\u4ee3\u5668 iterator\n      - \u89c4\u8303\n      - \u8fed\u4ee3\u7c7b\u578b\u548c\u64cd\u4f5c\n      - \u4e2d\u65ad\n    - \u751f\u6210\u5668 generator\n      - \u751f\u6210\u5668\u51fd\u6570\n      - \u7ec8\u6b62\n      - yield*\n\n  - \u5f02\u6b65\u5904\u7406\n    - promise\n    - async await\n    - setTimeout/setInterval\n\n")),(0,i.kt)("h2",{id:"\u4e2a\u4eba\u9879\u76ee"},"\u4e2a\u4eba\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- react\n  - jsx\n  - \u865a\u62dfDOM\n  - DOM-DIFF\n  - Fiber\n  - \u5f02\u6b65\u66f4\u65b0\n  - setState/useState\n  - \u5408\u6210\u4e8b\u4ef6\n  - \u6027\u80fd\u4f18\u5316\n  - \u670d\u52a1\u7aef\u6e32\u67d3\u539f\u7406ssr\n- react-router\n  - hash\u548chistory\u533a\u522b \u539f\u7406\n- redux\n  - \u4e2d\u95f4\u4ef6\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- webpack\n  - \u6784\u5efa\u6d41\u7a0b?\n  - loader\u4f5c\u7528\uff0c\u5982\u4f55\u5b9e\u73b0\uff0c\u5e38\u7528loader?\n  - plugin\u4f5c\u7528\uff0c\u5982\u4f55\u5b9e\u73b0\uff0c\u5e38\u7528plugin\uff1f\n  - webpack \u70ed\u66f4\u65b0\u539f\u7406\uff1f\n  - webpack \u6027\u80fd\u4f18\u5316\uff1f\n  - \u63cf\u8ff0\u4e00\u4e0b\u62bd\u8c61\u8bed\u6cd5\u6811\uff0cbabel\u7684\u4f5c\u7528\uff1f\n  - source map\u662f\u4ec0\u4e48\uff1f\u751f\u4ea7\u73af\u5883\u600e\u4e48\u7528\uff1f\n  - \u63d0\u5347\u6784\u5efa\u901f\u5ea6\uff1f\n  - \u5b9e\u73b0\u9879\u76ee\u4f18\u5316\uff1f\n")))}u.isMDXComponent=!0}}]);