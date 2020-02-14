/*! For license information please see react-archer.js.LICENSE */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactArcher=t():e.ReactArcher=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="lib/",r(r.s=6)}([function(e,t,r){"use strict";e.exports=r(3)},function(e,t,r){"use strict";var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,u,f=n(t),l=n(r);if(f&&l){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(f!=l)return!1;var h=t instanceof Date,p=r instanceof Date;if(h!=p)return!1;if(h&&p)return t.getTime()==r.getTime();var d=t instanceof RegExp,y=r instanceof RegExp;if(d!=y)return!1;if(d&&y)return t.toString()==r.toString();var v=o(t);if((c=v.length)!==o(r).length)return!1;for(s=c;0!=s--;)if(!i.call(r,v[s]))return!1;if(a&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(u=v[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},function(e,t,r){"use strict";(function(e){var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var r=-1;return e.some((function(e,n){return e[0]===t&&(r=n,!0)})),r}return function(){function t(){this.__entries__=[]}var r={size:{configurable:!0}};return r.size.get=function(){return this.__entries__.length},t.prototype.get=function(t){var r=e(this.__entries__,t),n=this.__entries__[r];return n&&n[1]},t.prototype.set=function(t,r){var n=e(this.__entries__,t);~n?this.__entries__[n][1]=r:this.__entries__.push([t,r])},t.prototype.delete=function(t){var r=this.__entries__,n=e(r,t);~n&&r.splice(n,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var r=0,n=this.__entries__;r<n.length;r+=1){var o=n[r];e.call(t,o[1],o[0])}},Object.defineProperties(t.prototype,r),t}()}(),n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=function(){return void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")()}(),i=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)}}(),a=2,s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var r=!1,n=!1,o=0;function s(){r&&(r=!1,e()),n&&u()}function c(){i(s)}function u(){var e=Date.now();if(r){if(e-o<a)return;n=!0}else r=!0,n=!1,setTimeout(c,t);o=e}return u}(this.refresh.bind(this),20)};u.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},u.prototype.removeObserver=function(e){var t=this.observers_,r=t.indexOf(e);~r&&t.splice(r,1),!t.length&&this.connected_&&this.disconnect_()},u.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},u.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},u.prototype.connect_=function(){n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},u.prototype.disconnect_=function(){n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},u.prototype.onTransitionEnd_=function(e){var t=e.propertyName;void 0===t&&(t=""),s.some((function(e){return!!~t.indexOf(e)}))&&this.refresh()},u.getInstance=function(){return this.instance_||(this.instance_=new u),this.instance_},u.instance_=null;var f=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r+=1){var o=n[r];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},h=g(0,0,0,0);function p(e){return parseFloat(e)||0}function d(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return t.reduce((function(t,r){return t+p(e["border-"+r+"-width"])}),0)}function y(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return h;var n=l(e).getComputedStyle(e),o=function(e){for(var t={},r=0,n=["top","right","bottom","left"];r<n.length;r+=1){var o=n[r],i=e["padding-"+o];t[o]=p(i)}return t}(n),i=o.left+o.right,a=o.top+o.bottom,s=p(n.width),c=p(n.height);if("border-box"===n.boxSizing&&(Math.round(s+i)!==t&&(s-=d(n,"left","right")+i),Math.round(c+a)!==r&&(c-=d(n,"top","bottom")+a)),!function(e){return e===l(e).document.documentElement}(e)){var u=Math.round(s+i)-t,f=Math.round(c+a)-r;1!==Math.abs(u)&&(s-=u),1!==Math.abs(f)&&(c-=f)}return g(o.left,o.top,s,c)}var v=function(){return"undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&"function"==typeof e.getBBox}}();function b(e){return n?v(e)?function(e){var t=e.getBBox();return g(0,0,t.width,t.height)}(e):y(e):h}function g(e,t,r,n){return{x:e,y:t,width:r,height:n}}var m=function(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=g(0,0,0,0),this.target=e};m.prototype.isActive=function(){var e=b(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},m.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e};var w=function(e,t){var r=function(e){var t=e.x,r=e.y,n=e.width,o=e.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return f(a,{x:t,y:r,width:n,height:o,top:r,right:t+n,bottom:o+r,left:t}),a}(t);f(this,{target:e,contentRect:r})},_=function(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n};_.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new m(e)),this.controller_.addObserver(this),this.controller_.refresh())}},_.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},_.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},_.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},_.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new w(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},_.prototype.clearActive=function(){this.activeObservations_.splice(0)},_.prototype.hasActive=function(){return this.activeObservations_.length>0};var O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function(e){if(!(this instanceof E))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=u.getInstance(),r=new _(e,t,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){E.prototype[e]=function(){return(t=O.get(this))[e].apply(t,arguments);var t}}));var k=function(){return void 0!==o.ResizeObserver?o.ResizeObserver:E}();t.a=k}).call(this,r(5))},function(e,t,r){"use strict";var n=r(4),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,v=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,i,a,s){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,s],u=0;(e=Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function _(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||m}function O(){}function E(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=_.prototype;var k=E.prototype=new O;k.constructor=E,n(k,_.prototype),k.isPureReactComponent=!0;var x={current:null,currentDispatcher:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n=void 0,o={},a=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:x.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var C=/\/+/g,T=[];function M(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return n(o,t,""===r?"."+L(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var u=0;u<t.length;u++){var f=r+L(s=t[u],u);c+=e(s,f,n,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=b&&t[b]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),u=0;!(s=t.next()).done;)c+=e(s=s.value,f=r+L(s,u++),n,o);else"object"===s&&g("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function W(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(C,"$&/")+"/"),D(e,W,t=M(t,i,n,o)),R(t)}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,$,t=M(null,null,t,r)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){return P(e)||g("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:E,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},Fragment:s,StrictMode:c,Suspense:d,createElement:A,cloneElement:function(e,t,r){null==e&&g("267",e);var o=void 0,a=n({},e.props),s=e.key,c=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,u=x.current),void 0!==t.key&&(s=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)j.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=r;else if(1<o){f=Array(o);for(var l=0;l<o;l++)f[l]=arguments[l+2];a.children=f}return{$$typeof:i,type:e.type,key:s,ref:c,props:a,_owner:u}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.7.0",unstable_ConcurrentMode:h,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:x,assign:n}},q={default:U},I=q&&U||q;e.exports=I.default||I},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,s,c=a(e),u=1;u<arguments.length;u++){for(var f in r=Object(arguments[u]))o.call(r,f)&&(c[f]=r[f]);if(n){s=n(r);for(var l=0;l<s.length;l++)i.call(r,s[l])&&(c[s[l]]=r[s[l]])}}return c}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),s=r(2);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"x",void 0),u(this,"y",void 0),this.x=t,this.y=r}return function(e,t,r){t&&c(e.prototype,t),r&&c(e,r)}(e,[{key:"add",value:function(t){return new e(this.x+t.x,this.y+t.y)}},{key:"substract",value:function(t){return new e(this.x-t.x,this.y-t.y)}}]),e}();var l=function(e){var t=e.startingPoint,r=e.startingAnchorOrientation,n=e.endingPoint,i=e.endingAnchorOrientation,a=e.strokeColor,s=e.arrowLength,c=e.strokeWidth,u=e.strokeDasharray,f=e.arrowLabel,l=e.arrowMarkerId,h=e.noCurves,p=e.offset,d=2*s,y=t.x,v=t.y,b=function(e,t,r,n,o){var i=function(e){switch(e){case"left":return{arrowX:-1,arrowY:0};case"right":return{arrowX:1,arrowY:0};case"top":return{arrowX:0,arrowY:-1};case"bottom":return{arrowX:0,arrowY:1};default:return{arrowX:0,arrowY:0}}}(o);return{xEnd:e+i.arrowX*r*n/2,yEnd:t+i.arrowY*r*n/2}}(n.x,n.y,d,c,i),g=b.xEnd,m=b.yEnd,w=function(e,t,r,n,o){return"top"===o||"bottom"===o?{xAnchor1:e,yAnchor1:t+(n-t)/2}:"left"===o||"right"===o?{xAnchor1:e+(r-e)/2,yAnchor1:t}:{xAnchor1:e,yAnchor1:t}}(y,v,g,m,r),_=w.xAnchor1,O=w.yAnchor1,E=function(e,t,r,n,o){return"top"===o||"bottom"===o?{xAnchor2:r,yAnchor2:n-(n-t)/2}:"left"===o||"right"===o?{xAnchor2:r-(r-e)/2,yAnchor2:n}:{xAnchor2:r,yAnchor2:n}}(y,v,g,m,i),k=function(e){var t=e.xStart,r=e.yStart,n=e.xAnchor1,o=e.yAnchor1,i=e.xAnchor2,a=e.yAnchor2,s=e.xEnd,c=e.yEnd,u=e.noCurves,f=e.offset,l=u?"":"C";if(f&&f>0){var h=Math.atan2(o-r,n-t),p=f*Math.cos(h),d=f*Math.sin(h);t+=p,s-=p,r+=d,c-=d}return"M".concat(t,",").concat(r," ")+"".concat(l).concat(n,",").concat(o," ").concat(i,",").concat(a," ")+"".concat(s,",").concat(c)}({xStart:y,yStart:v,xAnchor1:_,yAnchor1:O,xAnchor2:E.xAnchor2,yAnchor2:E.yAnchor2,xEnd:g,yEnd:m,noCurves:h,offset:p}),x=function(e,t,r,n){return{xLabel:r>e?e:r,yLabel:n>t?t:n,labelWidth:Math.max(Math.abs(r-e),1),labelHeight:Math.max(Math.abs(n-t),1)}}(y,v,g,m),j=x.xLabel,S=x.yLabel,A=x.labelWidth,P=x.labelHeight;return o.a.createElement("g",null,o.a.createElement("path",{d:k,style:{fill:"none",stroke:a,strokeWidth:c,strokeDasharray:u},markerEnd:"url(".concat(location.href.split("#")[0],"#").concat(l,")")}),f&&o.a.createElement("foreignObject",{x:j,y:S,width:A,height:P,style:{overflow:"visible",pointerEvents:"none"}},o.a.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translateX(-50%) translateY(-50%)",pointerEvents:"all"}},o.a.createElement("div",null,f))))};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={position:"absolute",width:"100%",height:"100%",top:0,left:0};function _(e){return new f(e.left,e.top)}var O=o.a.createContext({}),E=O.Provider,k=O.Consumer,x=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?b(e):t}(this,v(t).call(this,e)),m(b(r),"arrowMarkerUniquePrefix",void 0),m(b(r),"refreshScreen",(function(){r.setState(d({},r.state))})),m(b(r),"storeParent",(function(e){r.state.parent||r.setState((function(t){return d({},t,{parent:e})}))})),m(b(r),"getRectFromRef",(function(e){return e?e.getBoundingClientRect():null})),m(b(r),"getParentCoordinates",(function(){var e=r.getRectFromRef(r.state.parent);return e?_(e):new f(0,0)})),m(b(r),"getPointCoordinatesFromAnchorPosition",(function(e,t,n){var o=r.getRectFromRef(r.state.refs[t]);return o?function(e,t){switch(e){case"top":return _(t).add(new f(t.width/2,0));case"bottom":return _(t).add(new f(t.width/2,t.height));case"left":return _(t).add(new f(0,t.height/2));case"right":return _(t).add(new f(t.width,t.height/2));case"middle":return _(t).add(new f(t.width/2,t.height/2));default:return new f(0,0)}}(e,o).substract(n):new f(0,0)})),m(b(r),"registerTransitions",(function(e,t){r.setState((function(r){return{sourceToTargetsMap:d({},r.sourceToTargetsMap,m({},e,t))}}))})),m(b(r),"unregisterTransitions",(function(e){r.setState((function(t){var r=d({},t.sourceToTargetsMap);return delete r[e],{sourceToTargetsMap:r}}))})),m(b(r),"registerChild",(function(e,t){r.state.refs[e]||(r.state.observer.observe(t),r.setState((function(r){return{refs:d({},r.refs,m({},e,t))}})))})),m(b(r),"unregisterChild",(function(e){r.setState((function(t){
    try{t.observer.unobserve(t.refs[e]);}catch{}
    var r=d({},t.refs);return delete r[e],{refs:r}}))})),m(b(r),"getSourceToTargets",(function(){var e=r.state.sourceToTargetsMap,t=Object.keys(e).map((function(t){return e[t]}));return[].concat.apply([],t)})),m(b(r),"computeArrows",(function(){var e=r.getParentCoordinates();return r.getSourceToTargets().map((function(t){var n=t.source,i=t.target,a=t.label,s=t.style,c=s&&s.strokeColor||r.props.strokeColor,u=s&&s.arrowLength||r.props.arrowLength,f=s&&s.strokeWidth||r.props.strokeWidth,h=s&&s.strokeDasharray||r.props.strokeDasharray,p=s&&s.arrowThickness||r.props.arrowThickness,d=s&&s.noCurves||r.props.noCurves,y=r.props.offset||0,v=n.anchor,b=r.getPointCoordinatesFromAnchorPosition(n.anchor,n.id,e),g=i.anchor,m=r.getPointCoordinatesFromAnchorPosition(i.anchor,i.id,e);return o.a.createElement(l,{key:JSON.stringify({source:n,target:i}),startingPoint:b,startingAnchorOrientation:v,endingPoint:m,endingAnchorOrientation:g,strokeColor:c,arrowLength:u,strokeWidth:f,strokeDasharray:h,arrowLabel:a,arrowThickness:p,arrowMarkerId:r.getMarkerId(n,i),noCurves:!!d,offset:y})}))})),m(b(r),"getMarkerId",(function(e,t){return"".concat(r.arrowMarkerUniquePrefix).concat(e.id).concat(t.id)})),m(b(r),"generateAllArrowMarkers",(function(){return r.getSourceToTargets().map((function(e){var t=e.source,n=e.target,i=(e.label,e.style),a=i&&i.strokeColor||r.props.strokeColor,s=i&&i.arrowLength||r.props.arrowLength,c=i&&i.arrowThickness||r.props.arrowThickness,u="M0,0 L0,".concat(c," L").concat(s-1,",").concat(c/2," z");return o.a.createElement("marker",{id:r.getMarkerId(t,n),key:r.getMarkerId(t,n),markerWidth:s,markerHeight:c,refX:"0",refY:c/2,orient:"auto",markerUnits:"strokeWidth"},o.a.createElement("path",{d:u,fill:a}))}))})),m(b(r),"svgContainerStyle",(function(){return d({},w,{},r.props.svgContainerStyle)}));var n=new s.a((function(){r.refreshScreen()}));r.state={refs:{},sourceToTargetsMap:{},observer:n,parent:null};var i=Math.random().toString().slice(2);return r.arrowMarkerUniquePrefix="arrow".concat(i),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),function(e,t,r){t&&y(e.prototype,t),r&&y(e,r)}(t,[{key:"componentDidMount",value:function(){window&&window.addEventListener("resize",this.refreshScreen)}},{key:"componentWillUnmount",value:function(){var e=this,t=this.state.observer;Object.keys(this.state.refs).map((function(r){
        try{t.unobserve(e.state.refs[r])
}catch{}})),window&&window.removeEventListener("resize",this.refreshScreen)}},{key:"render",value:function(){var e=this.computeArrows();return o.a.createElement(E,{value:{registerTransitions:this.registerTransitions,unregisterTransitions:this.unregisterTransitions,registerChild:this.registerChild,unregisterChild:this.unregisterChild}},o.a.createElement("div",{style:d({},this.props.style,{position:"relative"}),className:this.props.className},o.a.createElement("svg",{style:this.svgContainerStyle()},o.a.createElement("defs",null,this.generateAllArrowMarkers()),e),o.a.createElement("div",{style:{height:"100%"},ref:this.storeParent},this.props.children)))}}]),t}(o.a.Component);m(x,"defaultProps",{arrowLength:10,arrowThickness:6,strokeColor:"#f00",strokeWidth:2,svgContainerStyle:{}});var j=x;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?R(e):t}(this,(e=M(t)).call.apply(e,[this].concat(o))),L(R(r),"registerTransitions",(function(e){var t=r.generateSourceToTarget(e);if(!r.props.context.registerTransitions)throw new Error('Could not find "registerTransition" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');r.props.context.registerTransitions(r.props.id,t)})),L(R(r),"generateSourceToTarget",(function(e){var t=r.props.id;return e.map((function(e){var r=e.targetId,n=e.sourceAnchor,o=e.targetAnchor,i=e.label,a=e.style;return{source:{id:t,anchor:n},target:{id:r,anchor:o},label:i,style:a}}))})),L(R(r),"unregisterTransitions",(function(){if(!r.props.context.unregisterTransitions)throw new Error('Could not find "unregisterTransitions" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');r.props.context.unregisterTransitions(r.props.id)})),L(R(r),"onRefUpdate",(function(e){if(e){if(!r.props.context.registerChild)throw new Error('Could not find "registerChild" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');r.props.context.registerChild(r.props.id,e)}})),L(R(r),"unregisterChild",(function(){if(!r.props.context.unregisterChild)throw new Error('Could not find "unregisterChild" in the context of <ArcherElement>. Wrap the component in a <ArcherContainer>.');r.props.context.unregisterChild(r.props.id)})),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),function(e,t,r){t&&T(e.prototype,t),r&&T(e,r)}(t,[{key:"componentDidUpdate",value:function(e){a()(e.relations,this.props.relations)||this.registerTransitions(this.props.relations)}},{key:"componentDidMount",value:function(){0!==this.props.relations.length&&this.registerTransitions(this.props.relations)}},{key:"componentWillUnmount",value:function(){this.unregisterChild(),this.unregisterTransitions()}},{key:"render",value:function(){return o.a.createElement("div",{style:C({},this.props.style,{position:"relative"}),className:this.props.className,ref:this.onRefUpdate},this.props.children)}}]),t}(o.a.Component);L($,"defaultProps",{relations:[]});var W=function(e){return o.a.createElement(k,null,(function(t){return o.a.createElement($,A({},e,{context:t}))}))};r.d(t,"ArcherElement",(function(){return W})),r.d(t,"ArcherContainer",(function(){return j}))}])}));