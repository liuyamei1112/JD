webpackJsonp([8],{14:function(t,n,e){"use strict";n.a={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},15:function(t,n){t.exports=function(t,n,e,o,r,i){var a,c=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,c=t.default);var s="function"==typeof c?c.options:c;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),r&&(s._scopeId=r);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=l):o&&(l=o),l){var p=s.functional,f=p?s.render:s.beforeCreate;p?(s._injectStyles=l,s.render=function(t,n){return l.call(n),f(t,n)}):s.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:c,options:s}}},16:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),r=e(5),i=e.n(r),a=e(6),c=e(19),u=e(7),s=e(20),l=e(39),p=e(41),f=(e.n(p),e(42)),d=(e.n(f),e(43));e.n(d);o.default.use(a.a),o.default.use(u.a),o.default.use(i.a);var h={mode:"history",linkActiveClass:"current",routes:c.a},v=new a.a(h);v.beforeEach(function(t,n,e){i.a.LoadingBar.start(),s.a.title(t.meta.title),e()}),v.afterEach(function(){i.a.LoadingBar.finish(),window.scrollTo(0,0)});var m=new u.a.Store({state:{},getters:{},mutations:{},actions:{}});new o.default({el:"#app",router:v,store:m,render:function(t){return t(l.a)}})},19:function(t,n,e){"use strict";var o=[{path:"/",meta:{title:"首页"},redirect:"/home",component:function(t){return e.e(7).then(function(){var n=[e(45)];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/home",meta:{title:"首页"},component:function(t){return e.e(0).then(function(){var n=[e(46)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/list",meta:{title:"分类"},component:function(t){return e.e(1).then(function(){var n=[e(47)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/shopping",meta:{title:"拼购"},component:function(t){return e.e(2).then(function(){var n=[e(48)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/mine",meta:{title:"我的"},component:function(t){return e.e(3).then(function(){var n=[e(49)];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/login",component:function(t){return e.e(6).then(function(){var n=[e(50)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/cart",component:function(t){return e.e(4).then(function(){var n=[e(51)];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/search",component:function(t){return e.e(5).then(function(){var n=[e(52)];t.apply(null,n)}.bind(this)).catch(e.oe)}}];n.a=o},20:function(t,n,e){"use strict";var o=e(8),r=e.n(o),i=e(38),a={};a.title=function(t){t=t||"京东",window.document.title=t};var c="development"===i.a?"http://127.0.0.1:8888":"production"===i.a?"https://www.url.com":"https://debug.url.com";a.ajax=r.a.create({baseURL:c,timeout:3e4}),n.a=a},38:function(t,n,e){"use strict";n.a="production"},39:function(t,n,e){"use strict";var o=e(14),r=e(40),i=e(15),a=i(o.a,r.a,!1,null,null,null);a.options.__file="src/app.vue",n.a=a.exports},40:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view")],1)},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};n.a=i},41:function(t,n){},42:function(t,n){},43:function(t,n){}},[16]);