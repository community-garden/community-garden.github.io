!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],_=0,d=[];_<i.length;_++)c=i[_],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={6:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"templates/"+({0:"vendors~__react_static_root__/src/containers/Post~__react_static_root__/src/pages/index.tsx",1:"__react_static_root__/src/containers/Post",2:"__react_static_root__/src/pages/404.tsx",3:"__react_static_root__/src/pages/about.tsx",4:"__react_static_root__/src/pages/blog.tsx",5:"__react_static_root__/src/pages/index.tsx"}[e]||e)+"."+{0:"fc4cfa10",1:"35be75c3",2:"a27ea161",3:"98d320a3",4:"47645363",5:"ca6156e6"}[e]+".js"}(e);var s=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([160,7,8]),n()}({146:function(e,t,n){"use strict";var r=n(75),a=n.n(r),o=n(76),c=n.n(o),i=n(39),s=n.n(i),l=n(78),u=n.n(l),_=n(108),d=n.n(_),m=n(77),p=n.n(m),f=n(40),g=n.n(f),h=n(0),v=n.n(h),b=n(65),x=n(22),y=function(){return v.a.createElement("div",null,"This is a dynamic page! It will not be statically exported, but is available at runtime")},E=(n(226),n(141)),P=n(249),k=n(253),j=n(252),O=n(63),w=n(250),S=n(254),I=n(251),M=n(255);n(231);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var a=p()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}Object(b.addPrefetchExcludes)(["dynamic"]);var T=Object(E.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),A=T.MediaContextProvider,C=T.Media,R=function(e){var t=e.mobile;return v.a.createElement(P.a,{text:!0},v.a.createElement(k.a,{as:"h1",content:"Community Garden App",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"3em"}}),v.a.createElement(k.a,{as:"h2",content:"organize, manage, connect to local gardening initiatives",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em"}}),v.a.createElement(j.a,{style:{display:"none"},primary:!0,size:"huge"},"Get the App",v.a.createElement(O.a,{name:"right arrow"})))},z=function(e){u()(n,e);var t=L(n);function n(){var e;a()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),g()(s()(e),"state",{fixed:void 0}),g()(s()(e),"hideFixedMenu",(function(){return e.setState({fixed:!1})})),g()(s()(e),"showFixedMenu",(function(){return e.setState({fixed:!0})})),e}return c()(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return v.a.createElement(C,{greaterThan:"mobile"},v.a.createElement(w.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},v.a.createElement(S.a,{inverted:!0,textAlign:"center",style:{backgroundImage:'url("/jtilsch_06_2021_garden_q60.JPG")',backgroundSize:"cover",minHeight:700,padding:"1em 0em"},vertical:!0},v.a.createElement(I.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large"},v.a.createElement(P.a,null,v.a.createElement(I.a.Item,{as:x.Link,to:"/",active:!0},"Project"),v.a.createElement(I.a.Item,{as:x.Link,to:"/blog"},"Blog"),v.a.createElement(I.a.Item,{as:x.Link,to:"/milestones"},"Milestones"),v.a.createElement(I.a.Item,{as:x.Link,to:"/team"},"Team"))),v.a.createElement(R,null))),e)}}]),n}(h.Component),B=function(e){u()(n,e);var t=L(n);function n(){var e;a()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),g()(s()(e),"state",{sidebarOpened:void 0}),g()(s()(e),"handleSidebarHide",(function(){return e.setState({sidebarOpened:!1})})),g()(s()(e),"handleToggle",(function(){return e.setState({sidebarOpened:!0})})),e}return c()(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return v.a.createElement(C,{at:"mobile"},v.a.createElement(M.a.Pushable,null,v.a.createElement(M.a,{as:I.a,animation:"overlay",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:t},v.a.createElement(I.a.Item,{as:x.Link,to:"/",active:!0},"Project"),v.a.createElement(I.a.Item,{as:x.Link,to:"/blog"},"Blog"),v.a.createElement(I.a.Item,{as:x.Link,to:"/milestones"},"Milestones"),v.a.createElement(I.a.Item,{as:x.Link,to:"/team"},"Team"),v.a.createElement(I.a.Item,{as:"a",active:!0},"Project")),v.a.createElement(M.a.Pusher,{dimmed:t},v.a.createElement(S.a,{inverted:!0,textAlign:"center",style:{backgroundImage:'url("/jtilsch_06_2021_garden_q60.JPG")',backgroundSize:"cover",minHeight:350,padding:"1em 0em"},vertical:!0},v.a.createElement(P.a,null,v.a.createElement(I.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},v.a.createElement(I.a.Item,{onClick:this.handleToggle},v.a.createElement(O.a,{name:"sidebar"})),v.a.createElement(I.a.Item,{position:"right"}))),v.a.createElement(R,{mobile:!0})),e)))}}]),n}(h.Component),H=function(e){var t=e.children;return v.a.createElement(A,null,v.a.createElement(z,null,t),v.a.createElement(B,null,t))};t.a={HomepageLayout:function(){return v.a.createElement(b.Root,null,v.a.createElement(H,null,v.a.createElement(S.a,{style:{padding:"8em 0em"},vertical:!0},v.a.createElement(P.a,{text:!0},v.a.createElement(v.a.Suspense,{fallback:v.a.createElement("em",null,"Loading...")},v.a.createElement(x.Router,null,v.a.createElement(y,{path:"dynamic"}),v.a.createElement(b.Routes,{path:"*"})))))))}}},160:function(e,t,n){n(161),n(210),e.exports=n(218)},162:function(e,t,n){"use strict";n.r(t);var r=n(139),a=[{location:"__react_static_root__/node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"__react_static_root__/node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}];t.default=a},211:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return h}));var r=n(23),a=n.n(r),o=n(24),c=n.n(o),i=n(0),s=n.n(i),l=n(26),u=n.n(l);Object(l.setHasBabelPlugin)();var _={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=u()(c()({id:"__react_static_root__/src/pages/404.tsx",load:function(){return Promise.all([n.e(2).then(n.bind(null,147))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/404.tsx")},resolve:function(){return 147},chunkName:function(){return"__react_static_root__/src/pages/404.tsx"}}),_);d.template="__react_static_root__/src/pages/404.tsx";var m=u()(c()({id:"__react_static_root__/src/pages/about.tsx",load:function(){return Promise.all([n.e(3).then(n.bind(null,148))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/about.tsx")},resolve:function(){return 148},chunkName:function(){return"__react_static_root__/src/pages/about.tsx"}}),_);m.template="__react_static_root__/src/pages/about.tsx";var p=u()(c()({id:"__react_static_root__/src/pages/blog.tsx",load:function(){return Promise.all([n.e(4).then(n.bind(null,149))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/blog.tsx")},resolve:function(){return 149},chunkName:function(){return"__react_static_root__/src/pages/blog.tsx"}}),_);p.template="__react_static_root__/src/pages/blog.tsx";var f=u()(c()({id:"__react_static_root__/src/pages/index.tsx",load:function(){return Promise.all([Promise.all([n.e(0),n.e(5)]).then(n.bind(null,150))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/pages/index.tsx")},resolve:function(){return 150},chunkName:function(){return"__react_static_root__/src/pages/index.tsx"}}),_);f.template="__react_static_root__/src/pages/index.tsx";var g=u()(c()({id:"__react_static_root__/src/containers/Post",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1)]).then(n.bind(null,151))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"__react_static_root__/src/containers/Post")},resolve:function(){return 151},chunkName:function(){return"__react_static_root__/src/containers/Post"}}),_);g.template="__react_static_root__/src/containers/Post",t.default={"__react_static_root__/src/pages/404.tsx":d,"__react_static_root__/src/pages/about.tsx":m,"__react_static_root__/src/pages/blog.tsx":p,"__react_static_root__/src/pages/index.tsx":f,"__react_static_root__/src/containers/Post":g};var h="__react_static_root__/src/pages/404.tsx"}.call(this,"/")},213:function(e,t,n){var r={".":66,"./":66,"./index":66,"./index.js":66};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=213},221:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),o=n(37),c=n.n(o),i=n(144),s=(n(225),n(146).a.HomepageLayout);if(t.default=s,"undefined"!=typeof document){var l=document.getElementById("root"),u=l.hasChildNodes()?c.a.hydrate:c.a.render,_=function(e){u(a.a.createElement(i.AppContainer,null,a.a.createElement(e,null)),l)};_(s),e&&e.hot&&e.hot.accept("./App",(function(){_(s)}))}}.call(this,n(107)(e))}});