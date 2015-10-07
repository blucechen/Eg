!function e(t,n,r){function i(s,u){if(!n[s]){if(!t[s]){var f="function"==typeof require&&require;if(!u&&f)return f(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var a=n[s]={exports:{}};t[s][0].call(a.exports,function(e){var n=t[s][1][e];return i(n?n:e)},a,a.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){t.exports=function(){var t=e("events"),n={};return n.createDomain=n.create=function(){function e(e){n.emit("error",e)}var n=new t.EventEmitter;return n.add=function(t){t.on("error",e)},n.remove=function(t){t.removeListener("error",e)},n.bind=function(t){return function(){var n=Array.prototype.slice.call(arguments);try{t.apply(null,n)}catch(r){e(r)}}},n.intercept=function(t){return function(n){if(n)e(n);else{var r=Array.prototype.slice.call(arguments,1);try{t.apply(null,r)}catch(n){e(n)}}}},n.run=function(t){try{t()}catch(n){e(n)}return this},n.dispose=function(){return this.removeAllListeners(),this},n.enter=n.exit=function(){return this},n},n}.call(this)},{events:2}],2:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function u(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,f,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],u(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),f=1;r>f;f++)o[f-1]=arguments[f];n.apply(this,o)}else if(s(n)){for(r=arguments.length,o=new Array(r-1),f=1;r>f;f++)o[f-1]=arguments[f];for(c=n.slice(),r=c.length,f=0;r>f;f++)c[f].apply(this,o)}return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned){var n;n=u(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,u;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(u=o;u-->0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?i(e._events[t])?1:e._events[t].length:0}},{}],3:[function(e,t,n){function r(){if(!u){u=!0;for(var e,t=s.length;t;){e=s,s=[];for(var n=-1;++n<t;)e[n]();t=s.length}u=!1}}function i(){}var o=t.exports={},s=[],u=!1;o.nextTick=function(e){s.push(e),u||setTimeout(r,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=i,o.addListener=i,o.once=i,o.off=i,o.removeListener=i,o.removeAllListeners=i,o.emit=i,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],4:[function(e,t,n){"use strict";function r(){}function i(e){try{return e.then}catch(t){return _=t,d}}function o(e,t){try{return e(t)}catch(n){return _=n,d}}function s(e,t,n){try{e(t,n)}catch(r){return _=r,d}}function u(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._32=0,this._8=null,this._89=[],e!==r&&p(e,this)}function f(e,t,n){return new e.constructor(function(i,o){var s=new u(r);s.then(i,o),c(e,new v(t,n,s))})}function c(e,t){for(;3===e._32;)e=e._8;return 0===e._32?void e._89.push(t):void m(function(){var n=1===e._32?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._32?a(t.promise,e._8):l(t.promise,e._8));var r=o(n,e._8);r===d?l(t.promise,_):a(t.promise,r)})}function a(e,t){if(t===e)return l(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=i(t);if(n===d)return l(e,_);if(n===e.then&&t instanceof u)return e._32=3,e._8=t,void h(e);if("function"==typeof n)return void p(n.bind(t),e)}e._32=1,e._8=t,h(e)}function l(e,t){e._32=2,e._8=t,h(e)}function h(e){for(var t=0;t<e._89.length;t++)c(e,e._89[t]);e._89=null}function v(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1,r=s(e,function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,l(t,e))});n||r!==d||(n=!0,l(t,_))}var m=e("asap/raw"),_=null,d={};t.exports=u,u._83=r,u.prototype.then=function(e,t){if(this.constructor!==u)return f(this,e,t);var n=new u(r);return c(this,new v(e,t,n)),n}},{"asap/raw":8}],5:[function(e,t,n){"use strict";function r(e){var t=new i(i._83);return t._32=1,t._8=e,t}var i=e("./core.js");e("asap/raw");t.exports=i;var o=r(!0),s=r(!1),u=r(null),f=r(void 0),c=r(0),a=r("");i.resolve=function(e){if(e instanceof i)return e;if(null===e)return u;if(void 0===e)return f;if(e===!0)return o;if(e===!1)return s;if(0===e)return c;if(""===e)return a;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new i(t.bind(e))}catch(n){return new i(function(e,t){t(n)})}return r(e)},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(s,u){if(u&&("object"==typeof u||"function"==typeof u)){if(u instanceof i&&u.then===i.prototype.then){for(;3===u._32;)u=u._8;return 1===u._32?r(s,u._8):(2===u._32&&n(u._8),void u.then(function(e){r(s,e)},n))}var f=u.then;if("function"==typeof f){var c=new i(f.bind(u));return void c.then(function(e){r(s,e)},n)}}t[s]=u,0===--o&&e(t)}if(0===t.length)return e([]);for(var o=t.length,s=0;s<t.length;s++)r(s,t[s])})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){e.forEach(function(e){i.resolve(e).then(t,n)})})},i.prototype["catch"]=function(e){return this.then(null,e)}},{"./core.js":4,"asap/raw":8}],6:[function(e,t,n){"use strict";function r(){if(f.length)throw f.shift()}function i(e){var t;t=u.length?u.pop():new o,t.task=e,s(t)}function o(){this.task=null}var s=e("./raw"),u=[],f=[],c=s.makeRequestCallFromTimer(r);t.exports=i,o.prototype.call=function(){try{this.task.call()}catch(e){i.onerror?i.onerror(e):(f.push(e),c())}finally{this.task=null,u[u.length]=this}}},{"./raw":7}],7:[function(e,t,n){(function(e){"use strict";function n(e){u.length||(s(),f=!0),u[u.length]=e}function r(){for(;c<u.length;){var e=c;if(c+=1,u[e].call(),c>a){for(var t=0,n=u.length-c;n>t;t++)u[t]=u[t+c];u.length-=c,c=0}}u.length=0,c=0,f=!1}function i(e){var t=1,n=new l(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}function o(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}t.exports=n;var s,u=[],f=!1,c=0,a=1024,l=e.MutationObserver||e.WebKitMutationObserver;s="function"==typeof l?i(r):o(r),n.requestFlush=s,n.makeRequestCallFromTimer=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t,n){(function(n){"use strict";function r(e){f.length||(o(),c=!0),f[f.length]=e}function i(){for(;a<f.length;){var e=a;if(a+=1,f[e].call(),a>l){for(var t=0,n=f.length-a;n>t;t++)f[t]=f[t+a];f.length-=a,a=0}}f.length=0,a=0,c=!1}function o(){var t=n.domain;t&&(s||(s=e("domain")),s.active=n.domain=null),c&&u?setImmediate(i):n.nextTick(i),t&&(s.active=n.domain=t)}var s,u="function"==typeof setImmediate;t.exports=r;var f=[],c=!1,a=0,l=1024;r.requestFlush=o}).call(this,e("_process"))},{_process:3,domain:1}],9:[function(e,t,n){"function"!=typeof Promise.prototype.done&&(Promise.prototype.done=function(e,t){var n=arguments.length?this.then.apply(this,arguments):this;n.then(null,function(e){setTimeout(function(){throw e},0)})})},{}],10:[function(e,t,n){e("asap");"undefined"==typeof Promise&&(Promise=e("./lib/core.js"),e("./lib/es6-extensions.js")),e("./polyfill-done.js")},{"./lib/core.js":4,"./lib/es6-extensions.js":5,"./polyfill-done.js":9,asap:6}]},{},[10]);
//# sourceMappingURL=/polyfills/promise-7.0.1.min.js.map