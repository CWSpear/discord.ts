"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7611],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7719:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],o={id:"ClientOptions",title:"Interface: ClientOptions",sidebar_label:"ClientOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/main/interfaces/ClientOptions",id:"api/main/interfaces/ClientOptions",isDocsHomePage:!1,title:"Interface: ClientOptions",description:"Hierarchy",source:"@site/docs/api/main/interfaces/ClientOptions.md",sourceDirName:"api/main/interfaces",slug:"/api/main/interfaces/ClientOptions",permalink:"/docs/api/main/interfaces/ClientOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ClientOptions",title:"Interface: ClientOptions",sidebar_label:"ClientOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"ApplicationCommandParams",permalink:"/docs/api/main/interfaces/ApplicationCommandParams"},next:{title:"EventParams",permalink:"/docs/api/main/interfaces/EventParams"}},d=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"botGuilds",id:"botguilds",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"botId",id:"botid",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"classes",id:"classes",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"guards",id:"guards",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"logger",id:"logger",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"silent",id:"silent",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"simpleCommand",id:"simplecommand",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"DiscordJSClientOptions")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ClientOptions"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"botguilds"},"botGuilds"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"botGuilds"),": ",(0,l.kt)("a",{parentName:"p",href:"../#iguild"},(0,l.kt)("inlineCode",{parentName:"a"},"IGuild")),"[]"),(0,l.kt)("p",null,"Set the guilds globally for application commands"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L43"},"types/core/ClientOptions.ts:43")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"botid"},"botId"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"botId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Specifiy bot id (added for multiple bot support)"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L48"},"types/core/ClientOptions.ts:48")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"classes"},"classes"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"classes"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.kt)("p",null,"The classes to load for your discord bot"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L53"},"types/core/ClientOptions.ts:53")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"guards"},"guards"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"guards"),": ",(0,l.kt)("a",{parentName:"p",href:"../#guardfunction"},(0,l.kt)("inlineCode",{parentName:"a"},"GuardFunction")),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,l.kt)("p",null,"The global guards"),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L58"},"types/core/ClientOptions.ts:58")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"logger"},"logger"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"logger"),": ",(0,l.kt)("a",{parentName:"p",href:"ILogger"},(0,l.kt)("inlineCode",{parentName:"a"},"ILogger"))),(0,l.kt)("p",null,"Set custom logger implementation"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L63"},"types/core/ClientOptions.ts:63")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"silent"},"silent"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"silent"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Do not log anything"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L68"},"types/core/ClientOptions.ts:68")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"simplecommand"},"simpleCommand"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"simpleCommand"),": ",(0,l.kt)("a",{parentName:"p",href:"SimpleCommandConfig"},(0,l.kt)("inlineCode",{parentName:"a"},"SimpleCommandConfig"))),(0,l.kt)("p",null,"simple command related customization"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/oceanroleplay/discord.ts/blob/4baaf5f/src/types/core/ClientOptions.ts#L73"},"types/core/ClientOptions.ts:73")))}u.isMDXComponent=!0}}]);