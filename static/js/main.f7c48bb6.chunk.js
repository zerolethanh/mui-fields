(this["webpackJsonpmui-fields-example"]=this["webpackJsonpmui-fields-example"]||[]).push([[0],{53:function(e){e.exports=JSON.parse('{"fullName":{"label":"H\u1ecd v\xe0 t\xean","value":"L\xea Th\xe0nh","required":true,"autoFocus":true},"gender":{"radios":true,"title":"gi\u1edbi t\xednh","options":[{"value":"m","label":"nam"},{"value":"f","label":"n\u1eef"}]},"cmnd":{"label":"S\u1ed1 cmnd/th\u1ebb c\u0103n c\u01b0\u1edbc","type":"number","fullWidth":false},"dob":{"label":"Ng\xe0y sinh","type":"date","defaultValue":"2010-01-20","fullWidth":false},"province":{"label":"N\u01a1i \u1edf hi\u1ec7n t\u1ea1i","select":true,"selections":[{"code":"HAN","name":"H\xe0 N\u1ed9i"},{"code":"SGN","name":"HCM"}],"keyPath":"code","valuePath":"code","labelPath":"name"},"sothich":{"isMultipleSelect":true,"label":"S\u1edf th\xedch","selections":["l\u1eadp tr\xecnh","\u0111\u1ecdc s\xe1ch b\xe1o","ch\u1ee5p \u1ea3nh","du l\u1ecbch"],"fullWidth":true},"dev":{"isMultipleSelect":true,"label":"Dev","selections":[{"value":"web","label":"Web"},{"value":"mobile-app","label":"Mobile App"},{"value":"AI","label":"AI"},{"value":"block-chain","label":"Block Chain"}],"keyPath":"value","valuePath":"value","labelPath":"label"},"isVietNamese":{"label":"L\xe0 ng\u01b0\u1eddi Vi\u1ec7t Nam","checkbox":true,"checked":true,"fullWidth":true}}')},54:function(e,t,r){"use strict";(function(e){var n=r(0),a=r.n(n),o=r(89),u=r(59),i=r(85),c=r(46),l=r(45),f=r(47),s=r(44),v=r(57),p=r(61),h=r(62),b=r(86),d=r(60),y=r(88),m=r(90),g=r(58);function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){var t=e.name,r=e.attributes,n=e.methods,u=r.value||r.defaultValue;return delete r.value,a.a.createElement(o.a,_({key:t,margin:"dense",id:t,name:t,label:t,variant:"outlined",error:Boolean(n.errors[t]),helperText:n.errors[t]&&n.errors[t].message,fullWidth:!0,InputLabelProps:{shrink:!0},inputRef:n.register(r)},r,{defaultValue:u}))}var P="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function k(e,t){return e(t={exports:{}},t.exports),t.exports}var A="object"==typeof P&&P&&P.Object===Object&&P,V="object"==typeof self&&self&&self.Object===Object&&self,x=A||V||Function("return this")(),z=x.Symbol,C=Object.prototype,N=C.hasOwnProperty,W=C.toString,M=z?z.toStringTag:void 0;var I=function(e){var t=N.call(e,M),r=e[M];try{e[M]=void 0;var n=!0}catch(o){}var a=W.call(e);return n&&(t?e[M]=r:delete e[M]),a},L=Object.prototype.toString;var T=function(e){return L.call(e)},$=z?z.toStringTag:void 0;var F=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?I(e):T(e)};var B=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var D=function(e){if(!B(e))return!1;var t=F(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};function R(e){var t=e.name,r=e.attributes,o=e.methods,f=e.isSwitch,s=w(Object(n.useState)(r.defaultValue||r.value||r.checked||!1),2),v=s[0],p=s[1];Object(n.useEffect)((function(){o.setValue(t,v)}),[]);var h=r.onChangeChecked,b=f?i.a:c.a,d=r.fullWidth?l.a:a.a.Fragment;return a.a.createElement(d,null,a.a.createElement(u.a,{control:a.a.createElement(b,_({name:t,inputRef:o.register({name:t}),onChange:function(e,r){o.setValue(t,r),p(r),D(h)&&h(r)}},r,{checked:v})),label:r.label||t}))}var U=Array.isArray;var H=function(e){return null!=e&&"object"==typeof e};var J=function(e){return"symbol"==typeof e||H(e)&&"[object Symbol]"==F(e)},K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var G=function(e,t){if(U(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!J(e))||(q.test(e)||!K.test(e)||null!=t&&e in Object(t))},Q=x["__core-js_shared__"],X=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var Y=function(e){return!!X&&X in e},Z=Function.prototype.toString;var ee=function(e){if(null!=e){try{return Z.call(e)}catch(t){}try{return e+""}catch(t){}}return""},te=/^\[object .+?Constructor\]$/,re=Function.prototype,ne=Object.prototype,ae=re.toString,oe=ne.hasOwnProperty,ue=RegExp("^"+ae.call(oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(e){return!(!B(e)||Y(e))&&(D(e)?ue:te).test(ee(e))};var ce=function(e,t){return null==e?void 0:e[t]};var le=function(e,t){var r=ce(e,t);return ie(r)?r:void 0},fe=le(Object,"create");var se=function(){this.__data__=fe?fe(null):{},this.size=0};var ve=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},pe=Object.prototype.hasOwnProperty;var he=function(e){var t=this.__data__;if(fe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pe.call(t,e)?t[e]:void 0},be=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;return fe?void 0!==t[e]:be.call(t,e)};var ye=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fe&&void 0===t?"__lodash_hash_undefined__":t,this};function me(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}me.prototype.clear=se,me.prototype.delete=ve,me.prototype.get=he,me.prototype.has=de,me.prototype.set=ye;var ge=me;var je=function(){this.__data__=[],this.size=0};var _e=function(e,t){return e===t||e!==e&&t!==t};var Oe=function(e,t){for(var r=e.length;r--;)if(_e(e[r][0],t))return r;return-1},we=Array.prototype.splice;var Se=function(e){var t=this.__data__,r=Oe(t,e);return!(r<0)&&(r==t.length-1?t.pop():we.call(t,r,1),--this.size,!0)};var Ee=function(e){var t=this.__data__,r=Oe(t,e);return r<0?void 0:t[r][1]};var Pe=function(e){return Oe(this.__data__,e)>-1};var ke=function(e,t){var r=this.__data__,n=Oe(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ae.prototype.clear=je,Ae.prototype.delete=Se,Ae.prototype.get=Ee,Ae.prototype.has=Pe,Ae.prototype.set=ke;var Ve=Ae,xe=le(x,"Map");var ze=function(){this.size=0,this.__data__={hash:new ge,map:new(xe||Ve),string:new ge}};var Ce=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var r=e.__data__;return Ce(t)?r["string"==typeof t?"string":"hash"]:r.map};var We=function(e){var t=Ne(this,e).delete(e);return this.size-=t?1:0,t};var Me=function(e){return Ne(this,e).get(e)};var Ie=function(e){return Ne(this,e).has(e)};var Le=function(e,t){var r=Ne(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Te(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Te.prototype.clear=ze,Te.prototype.delete=We,Te.prototype.get=Me,Te.prototype.has=Ie,Te.prototype.set=Le;var $e=Te;function Fe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function r(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var u=e.apply(this,n);return r.cache=o.set(a,u)||o,u};return r.cache=new(Fe.Cache||$e),r}Fe.Cache=$e;var Be=Fe;var De=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Re=/\\(\\)?/g,Ue=function(e){var t=Be(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(De,(function(e,r,n,a){t.push(n?a.replace(Re,"$1"):r||e)})),t}));var He=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},Je=z?z.prototype:void 0,Ke=Je?Je.toString:void 0;var qe=function e(t){if("string"==typeof t)return t;if(U(t))return He(t,e)+"";if(J(t))return Ke?Ke.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var Ge=function(e){return null==e?"":qe(e)};var Qe=function(e,t){return U(e)?e:G(e,t)?[e]:Ue(Ge(e))};var Xe=function(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ye=function(e,t){for(var r=0,n=(t=Qe(t,e)).length;null!=e&&r<n;)e=e[Xe(t[r++])];return r&&r==n?e:void 0};var Ze=function(e,t,r){var n=null==e?void 0:Ye(e,t);return void 0===n?r:n},et=function(e){var t=e.mapKey,r=e.mapValue,n=e.mapLabel,a=e.keyPath,o=e.valuePath,u=e.labelPath;return{getKey:function(e){return a?Ze(e,a):D(t)?t(e):r?r(e):e},getValue:function(e){return o?Ze(e,o):D(r)?r(e):e},getLabel:function(e){return u?Ze(e,u):D(n)?n(e):e}}};function tt(e){var t=e.name,r=e.attributes,o=e.methods,u=w(Object(n.useState)(r.defaultValue||r.value||""),2),i=u[0],c=u[1],l=r.values,s=r.selections,v=r.onChangeValue,p=et(r),h=p.getKey,b=p.getValue,d=p.getLabel,y=(l||s).map((function(e){return a.a.createElement(f.a,{key:h(e),value:b(e)},d(e))})),m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{value:i,name:t,select:!0,children:y,onChange:function(e){var r=e.target.value;o.setValue(t,r),c(r),D(v)&&v(r)}});return E({name:t,attributes:m,methods:o})}function rt(e){var t=e.name,r=e.attributes,o=e.methods,u=w(Object(n.useState)(r.defaultValue||r.value||[]),2),i=u[0],b=u[1],y=nt(),m=r.fullWidth?l.a:a.a.Fragment,g=r.selections,j=r.onChangeValue,O=et(r),S=O.getKey,E=O.getValue,P=O.getLabel;return a.a.createElement(m,null,a.a.createElement(s.a,{className:y.formControl,fullWidth:r.fullWidth},a.a.createElement(v.a,{id:"".concat(t,"-label")},r.label||t),a.a.createElement(p.a,_({labelId:"".concat(t,"-label"),id:t,multiple:!0,onChange:function(e){var r=e.target.value;o.setValue(t,r),b(r),D(j)&&j(r)},renderValue:function(){return i.map((function(e){var t;return g.forEach((function(r){E(r)===e&&(t=P(r))})),a.a.createElement(h.a,{key:e,label:t||e,className:y.chip})}))},MenuProps:at,inputRef:o.register({name:t})},r,{value:i}),g.map((function(e){return a.a.createElement(f.a,{key:S(e),value:E(e)},a.a.createElement(c.a,{checked:(t=E(e),!!i&&i.includes(t))}),a.a.createElement(d.a,{primary:P(e)}));var t})))))}var nt=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),at={PaperProps:{style:{maxHeight:224,width:250}}};var ot=function(){this.__data__=new Ve,this.size=0};var ut=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var it=function(e){return this.__data__.get(e)};var ct=function(e){return this.__data__.has(e)};var lt=function(e,t){var r=this.__data__;if(r instanceof Ve){var n=r.__data__;if(!xe||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new $e(n)}return r.set(e,t),this.size=r.size,this};function ft(e){var t=this.__data__=new Ve(e);this.size=t.size}ft.prototype.clear=ot,ft.prototype.delete=ut,ft.prototype.get=it,ft.prototype.has=ct,ft.prototype.set=lt;var st=ft;var vt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var pt=function(e){return this.__data__.has(e)};function ht(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new $e;++t<r;)this.add(e[t])}ht.prototype.add=ht.prototype.push=vt,ht.prototype.has=pt;var bt=ht;var dt=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1};var yt=function(e,t){return e.has(t)};var mt=function(e,t,r,n,a,o){var u=1&r,i=e.length,c=t.length;if(i!=c&&!(u&&c>i))return!1;var l=o.get(e);if(l&&o.get(t))return l==t;var f=-1,s=!0,v=2&r?new bt:void 0;for(o.set(e,t),o.set(t,e);++f<i;){var p=e[f],h=t[f];if(n)var b=u?n(h,p,f,t,e,o):n(p,h,f,e,t,o);if(void 0!==b){if(b)continue;s=!1;break}if(v){if(!dt(t,(function(e,t){if(!yt(v,t)&&(p===e||a(p,e,r,n,o)))return v.push(t)}))){s=!1;break}}else if(p!==h&&!a(p,h,r,n,o)){s=!1;break}}return o.delete(e),o.delete(t),s},gt=x.Uint8Array;var jt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var _t=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ot=z?z.prototype:void 0,wt=Ot?Ot.valueOf:void 0;var St=function(e,t,r,n,a,o,u){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new gt(e),new gt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return _e(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var i=jt;case"[object Set]":var c=1&n;if(i||(i=_t),e.size!=t.size&&!c)return!1;var l=u.get(e);if(l)return l==t;n|=2,u.set(e,t);var f=mt(i(e),i(t),n,a,o,u);return u.delete(e),f;case"[object Symbol]":if(wt)return wt.call(e)==wt.call(t)}return!1};var Et=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e};var Pt=function(e,t,r){var n=t(e);return U(e)?n:Et(n,r(e))};var kt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,o=[];++r<n;){var u=e[r];t(u,r,e)&&(o[a++]=u)}return o};var At=function(){return[]},Vt=Object.prototype.propertyIsEnumerable,xt=Object.getOwnPropertySymbols,zt=xt?function(e){return null==e?[]:(e=Object(e),kt(xt(e),(function(t){return Vt.call(e,t)})))}:At;var Ct=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Nt=function(e){return H(e)&&"[object Arguments]"==F(e)},Wt=Object.prototype,Mt=Wt.hasOwnProperty,It=Wt.propertyIsEnumerable,Lt=Nt(function(){return arguments}())?Nt:function(e){return H(e)&&Mt.call(e,"callee")&&!It.call(e,"callee")};var Tt=function(){return!1},$t=k((function(e,t){var r=t&&!t.nodeType&&t,n=r&&e&&!e.nodeType&&e,a=n&&n.exports===r?x.Buffer:void 0,o=(a?a.isBuffer:void 0)||Tt;e.exports=o})),Ft=/^(?:0|[1-9]\d*)$/;var Bt=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ft.test(e))&&e>-1&&e%1==0&&e<t};var Dt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Rt={};Rt["[object Float32Array]"]=Rt["[object Float64Array]"]=Rt["[object Int8Array]"]=Rt["[object Int16Array]"]=Rt["[object Int32Array]"]=Rt["[object Uint8Array]"]=Rt["[object Uint8ClampedArray]"]=Rt["[object Uint16Array]"]=Rt["[object Uint32Array]"]=!0,Rt["[object Arguments]"]=Rt["[object Array]"]=Rt["[object ArrayBuffer]"]=Rt["[object Boolean]"]=Rt["[object DataView]"]=Rt["[object Date]"]=Rt["[object Error]"]=Rt["[object Function]"]=Rt["[object Map]"]=Rt["[object Number]"]=Rt["[object Object]"]=Rt["[object RegExp]"]=Rt["[object Set]"]=Rt["[object String]"]=Rt["[object WeakMap]"]=!1;var Ut=function(e){return H(e)&&Dt(e.length)&&!!Rt[F(e)]};var Ht=function(e){return function(t){return e(t)}},Jt=k((function(e,t){var r=t&&!t.nodeType&&t,n=r&&e&&!e.nodeType&&e,a=n&&n.exports===r&&A.process,o=function(){try{var e=n&&n.require&&n.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=o})),Kt=Jt&&Jt.isTypedArray,qt=Kt?Ht(Kt):Ut,Gt=Object.prototype.hasOwnProperty;var Qt=function(e,t){var r=U(e),n=!r&&Lt(e),a=!r&&!n&&$t(e),o=!r&&!n&&!a&&qt(e),u=r||n||a||o,i=u?Ct(e.length,String):[],c=i.length;for(var l in e)!t&&!Gt.call(e,l)||u&&("length"==l||a&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Bt(l,c))||i.push(l);return i},Xt=Object.prototype;var Yt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Xt)};var Zt=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),er=Object.prototype.hasOwnProperty;var tr=function(e){if(!Yt(e))return Zt(e);var t=[];for(var r in Object(e))er.call(e,r)&&"constructor"!=r&&t.push(r);return t};var rr=function(e){return null!=e&&Dt(e.length)&&!D(e)};var nr=function(e){return rr(e)?Qt(e):tr(e)};var ar=function(e){return Pt(e,nr,zt)},or=Object.prototype.hasOwnProperty;var ur=function(e,t,r,n,a,o){var u=1&r,i=ar(e),c=i.length;if(c!=ar(t).length&&!u)return!1;for(var l=c;l--;){var f=i[l];if(!(u?f in t:or.call(t,f)))return!1}var s=o.get(e);if(s&&o.get(t))return s==t;var v=!0;o.set(e,t),o.set(t,e);for(var p=u;++l<c;){var h=e[f=i[l]],b=t[f];if(n)var d=u?n(b,h,f,t,e,o):n(h,b,f,e,t,o);if(!(void 0===d?h===b||a(h,b,r,n,o):d)){v=!1;break}p||(p="constructor"==f)}if(v&&!p){var y=e.constructor,m=t.constructor;y==m||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof m&&m instanceof m||(v=!1)}return o.delete(e),o.delete(t),v},ir=le(x,"DataView"),cr=le(x,"Promise"),lr=le(x,"Set"),fr=le(x,"WeakMap"),sr=ee(ir),vr=ee(xe),pr=ee(cr),hr=ee(lr),br=ee(fr),dr=F;(ir&&"[object DataView]"!=dr(new ir(new ArrayBuffer(1)))||xe&&"[object Map]"!=dr(new xe)||cr&&"[object Promise]"!=dr(cr.resolve())||lr&&"[object Set]"!=dr(new lr)||fr&&"[object WeakMap]"!=dr(new fr))&&(dr=function(e){var t=F(e),r="[object Object]"==t?e.constructor:void 0,n=r?ee(r):"";if(n)switch(n){case sr:return"[object DataView]";case vr:return"[object Map]";case pr:return"[object Promise]";case hr:return"[object Set]";case br:return"[object WeakMap]"}return t});var yr=dr,mr=Object.prototype.hasOwnProperty;var gr=function(e,t,r,n,a,o){var u=U(e),i=U(t),c=u?"[object Array]":yr(e),l=i?"[object Array]":yr(t),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),s="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),v=c==l;if(v&&$t(e)){if(!$t(t))return!1;u=!0,f=!1}if(v&&!f)return o||(o=new st),u||qt(e)?mt(e,t,r,n,a,o):St(e,t,c,r,n,a,o);if(!(1&r)){var p=f&&mr.call(e,"__wrapped__"),h=s&&mr.call(t,"__wrapped__");if(p||h){var b=p?e.value():e,d=h?t.value():t;return o||(o=new st),a(b,d,r,n,o)}}return!!v&&(o||(o=new st),ur(e,t,r,n,a,o))};var jr=function e(t,r,n,a,o){return t===r||(null==t||null==r||!H(t)&&!H(r)?t!==t&&r!==r:gr(t,r,n,a,e,o))};var _r=function(e,t,r,n){var a=r.length,o=a,u=!n;if(null==e)return!o;for(e=Object(e);a--;){var i=r[a];if(u&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){var c=(i=r[a])[0],l=e[c],f=i[1];if(u&&i[2]){if(void 0===l&&!(c in e))return!1}else{var s=new st;if(n)var v=n(l,f,c,e,t,s);if(!(void 0===v?jr(f,l,3,n,s):v))return!1}}return!0};var Or=function(e){return e===e&&!B(e)};var wr=function(e){for(var t=nr(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Or(a)]}return t};var Sr=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}};var Er=function(e){var t=wr(e);return 1==t.length&&t[0][2]?Sr(t[0][0],t[0][1]):function(r){return r===e||_r(r,e,t)}};var Pr=function(e,t){return null!=e&&t in Object(e)};var kr=function(e,t,r){for(var n=-1,a=(t=Qe(t,e)).length,o=!1;++n<a;){var u=Xe(t[n]);if(!(o=null!=e&&r(e,u)))break;e=e[u]}return o||++n!=a?o:!!(a=null==e?0:e.length)&&Dt(a)&&Bt(u,a)&&(U(e)||Lt(e))};var Ar=function(e,t){return null!=e&&kr(e,t,Pr)};var Vr=function(e,t){return G(e)&&Or(t)?Sr(Xe(e),t):function(r){var n=Ze(r,e);return void 0===n&&n===t?Ar(r,e):jr(t,n,3)}};var xr=function(e){return e};var zr=function(e){return function(t){return null==t?void 0:t[e]}};var Cr=function(e){return function(t){return Ye(t,e)}};var Nr=function(e){return G(e)?zr(Xe(e)):Cr(e)};var Wr=function(e){return"function"==typeof e?e:null==e?xr:"object"==typeof e?U(e)?Vr(e[0],e[1]):Er(e):Nr(e)};var Mr=function(e){return function(t,r,n){var a=Object(t);if(!rr(t)){var o=Wr(r);t=nr(t),r=function(e){return o(a[e],e,a)}}var u=e(t,r,n);return u>-1?a[o?t[u]:u]:void 0}};var Ir=function(e,t,r,n){for(var a=e.length,o=r+(n?1:-1);n?o--:++o<a;)if(t(e[o],o,e))return o;return-1},Lr=/^\s+|\s+$/g,Tr=/^[-+]0x[0-9a-f]+$/i,$r=/^0b[01]+$/i,Fr=/^0o[0-7]+$/i,Br=parseInt;var Dr=function(e){if("number"==typeof e)return e;if(J(e))return NaN;if(B(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=B(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Lr,"");var r=$r.test(e);return r||Fr.test(e)?Br(e.slice(2),r?2:8):Tr.test(e)?NaN:+e};var Rr=function(e){return e?(e=Dr(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0};var Ur=function(e){var t=Rr(e),r=t%1;return t===t?r?t-r:t:0},Hr=Math.max;var Jr=Mr((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:Ur(r);return a<0&&(a=Hr(n+a,0)),Ir(e,Wr(t),a)})),Kr={PaperProps:{style:{maxHeight:224,width:250}}};function qr(e){var t=e.name,r=e.attributes,n=e.methods,o=useStyles(),u=r.fullWidth?l.a:a.a.Fragment,i=r.selections,b=r.value,y=r.onChangeValue;return a.a.createElement(u,null,a.a.createElement(s.a,{className:o.formControl,fullWidth:r.fullWidth},a.a.createElement(v.a,{id:"".concat(t,"-label")},r.label||t),a.a.createElement(p.a,_({labelId:"".concat(t,"-label"),id:t,multiple:!0,onChange:function(e){var r=e.target.value;n.setValue(t,r),D(y)&&y(r)},renderValue:function(){return a.a.createElement("div",{className:o.chips},b.map((function(e){return a.a.createElement(h.a,{key:e,label:Jr(i,{value:e}).label,className:o.chip})})))},MenuProps:Kr,inputRef:n.register({name:t})},r),i.map((function(e){return a.a.createElement(f.a,{key:e.value,value:e.value},a.a.createElement(c.a,{checked:b.indexOf(e.value)>-1}),a.a.createElement(d.a,{primary:e.label}))})))))}function Gr(e){var t,r=e.name,o=e.attributes,i=e.methods,c=w(Object(n.useState)(o.defaultValue||o.value||""),2),l=c[0],f=c[1];return a.a.createElement(s.a,{component:"fieldset"},a.a.createElement(g.a,{component:"legend"},(null===o||void 0===o?void 0:o.legend)||(null===o||void 0===o?void 0:o.title)),a.a.createElement(m.a,{"aria-label":r,name:r,value:l,onChange:function(e){var t=e.target.value;f(t),i.setValue(r,t)},inputRef:i.register({name:r})},null===(t=o.options)||void 0===t?void 0:t.map((function(e,t){return a.a.createElement(u.a,_({key:e.value||t,control:a.a.createElement(y.a,null)},e))}))))}t.a=function(e,t){return Object.keys(e).map((function(r,n){var o,u=e[r];if(!u)return null;var i,c={};return!function(e){return e.isCheckBox||e.check||e.checkbox}(u)?!function(e){return e.isSwitch||e.switch}(u)?!function(e){return e.isSelectBox||e.select}(u)?!function(e){return e.isMultipleSelect||e.multipleSelect}(u)?!function(e){return e.isMultipleSelectWithValueLabel||e.isMultipleSelectWithValueLabel}(u)?o=(i=u).radio||i.radios?Gr:E:o=qr:o=rt:o=tt:(o=R,c.isSwitch=!0):o=R,a.a.createElement(o,_({key:r,name:r,attributes:u,methods:t},c))}))}}).call(this,r(80))},73:function(e,t,r){e.exports=r(84)},78:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(10),u=r.n(o),i=(r(78),r(15)),c=r(56),l=r(53),f=r(54);u.a.render(a.a.createElement((function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),r=t[0],o=t[1],u=Object(c.a)();return a.a.createElement("form",{onSubmit:u.handleSubmit((function(e){console.log(e),o(e)})),style:{margin:20}},Object(f.a)(l,u),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"Submit")),r&&a.a.createElement("pre",null,JSON.stringify(r,null,2)))}),null),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.f7c48bb6.chunk.js.map