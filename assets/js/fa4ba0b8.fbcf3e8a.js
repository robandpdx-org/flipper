"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4558],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){return function(t){var r=p(t.components);return n.createElement(e,a({},t,{components:r}))}},p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=r(44996),l=["components"],c={},u="Virtual devices",s={unversionedId:"features/virtual-devices",id:"features/virtual-devices",title:"Virtual devices",description:"You can use flipper to launch iOS simulators and Android emulators.",source:"@site/../docs/features/virtual-devices.mdx",sourceDirName:"features",slug:"/features/virtual-devices",permalink:"/docs/features/virtual-devices",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/features/virtual-devices.mdx",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"React Native Support",permalink:"/docs/features/react-native"},next:{title:"Crash Reporter",permalink:"/docs/features/plugins/crash-reporter"}},p={},d=[],f={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"virtual-devices"},"Virtual devices"),(0,a.mdx)("p",null,"You can use flipper to launch iOS simulators and Android emulators."),(0,a.mdx)("p",null,'Select "Virtual devices" from the flipper menu'),(0,a.mdx)("img",{src:(0,i.default)("img/flipper-virtual-device-menu.jpg"),alt:""}),(0,a.mdx)("p",null,"From the opened modal you can select available virtual devices."),(0,a.mdx)("img",{src:(0,i.default)("img/flipper-virtual-device-select.png"),alt:""}),(0,a.mdx)("p",null,"Select the one you want and it will shortly open and connect to Flipper."),(0,a.mdx)("p",null,'You can also "favorite" your most used devices to always display them in the top of the list.'))}m.isMDXComponent=!0}}]);