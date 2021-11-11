"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2577],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(h,l(l({ref:e},c),{},{components:n})):r.createElement(h,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2892:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},u="@ButtonComponent",d={unversionedId:"decorators/gui/buttoncomponent",id:"decorators/gui/buttoncomponent",isDocsHomePage:!1,title:"@ButtonComponent",description:"add button interaction handler for your bot using @ButtonComponent decorator",source:"@site/docs/decorators/gui/buttoncomponent.md",sourceDirName:"decorators/gui",slug:"/decorators/gui/buttoncomponent",permalink:"/docs/decorators/gui/buttoncomponent",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/gui/buttoncomponent.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"@Permission",permalink:"/docs/decorators/general/permission"},next:{title:"@ContextMenu",permalink:"/docs/decorators/gui/contextmenu"}},c=[{value:"Example",id:"example",children:[],level:2},{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"custom_id",id:"custom_id",children:[],level:3},{value:"params",id:"params",children:[{value:"<code>botIds</code>",id:"botids",children:[],level:4},{value:"<code>Guilds</code>",id:"guilds",children:[],level:4}],level:3}],level:2}],s={toc:c};function p(t){var e=t.components,i=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buttoncomponent"},"@ButtonComponent"),(0,o.kt)("p",null,"add button interaction handler for your bot using ",(0,o.kt)("inlineCode",{parentName:"p"},"@ButtonComponent")," decorator"),(0,o.kt)("p",null,"Here are some example screenshots:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9749).Z})),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ButtonInteraction,\n  CommandInteraction,\n  MessageButton,\n  MessageActionRow,\n} from "discord.js";\nimport { ButtonComponent, Discord, Slash } from "discordx";\n\n@Discord()\nclass buttonExample {\n  @Slash("hello")\n  async hello(interaction: CommandInteraction) {\n    await interaction.deferReply();\n\n    // Create the button, giving it the ID: "hello-btn"\n    const helloBtn = new MessageButton()\n      .setLabel("Hello")\n      .setEmoji("\ud83d\udc4b")\n      .setStyle("PRIMARY")\n      .setCustomId("hello-btn");\n\n    // Create a MessageActionRow and add the button to that row.\n    const row = new MessageActionRow().addComponents(helloBtn);\n\n    interaction.editReply({\n      content: "Say hello to bot",\n      components: [row],\n    });\n  }\n\n  // register a handler for the button with ID: "hello-btn"\n  @ButtonComponent("hello-btn")\n  mybtn(interaction: ButtonInteraction) {\n    interaction.reply(`\ud83d\udc4b ${interaction.member}`);\n  }\n}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"ButtonComponent(\n  custom_id: string,\n  params?: { guilds?: Snowflake[]; botIds?: string[] }\n)\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"custom_id"},"custom_id"),(0,o.kt)("p",null,"A unique id for your button interaction to be handled under."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"function name"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As per discord latest annoucement, ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_ids")," being unique within a message. ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/message-components#custom-id"},"read here more")))),(0,o.kt)("h3",{id:"params"},"params"),(0,o.kt)("p",null,"Multiple options, check below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"object"),(0,o.kt)("td",{parentName:"tr",align:null},"undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h4",{id:"botids"},(0,o.kt)("inlineCode",{parentName:"h4"},"botIds")),(0,o.kt)("p",null,"Array of bot ids, for which only the event will be executed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,o.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,o.kt)("h4",{id:"guilds"},(0,o.kt)("inlineCode",{parentName:"h4"},"Guilds")),(0,o.kt)("p",null,"The guilds where the command is created"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,o.kt)("td",{parentName:"tr",align:null},"[ ]")))))}p.isMDXComponent=!0},9749:function(t,e,n){e.Z=n.p+"assets/images/button-example-d5dad5e3ccdbe2cbdb1556cf89810d30.jpg"}}]);