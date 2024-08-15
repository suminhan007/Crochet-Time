(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function uv(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var Vp={exports:{}},xs={},zp={exports:{}},tA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),dv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),wv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),Cv=Symbol.for("react.lazy"),yf=Symbol.iterator;function Qv(A){return A===null||typeof A!="object"?null:(A=yf&&A[yf]||A["@@iterator"],typeof A=="function"?A:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Wp={};function jn(A,e,t){this.props=A,this.context=e,this.refs=Wp,this.updater=t||Gp}jn.prototype.isReactComponent={};jn.prototype.setState=function(A,e){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,e,"setState")};jn.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Xp(){}Xp.prototype=jn.prototype;function td(A,e,t){this.props=A,this.context=e,this.refs=Wp,this.updater=t||Gp}var rd=td.prototype=new Xp;rd.constructor=td;$p(rd,jn.prototype);rd.isPureReactComponent=!0;var Ff=Array.isArray,Jp=Object.prototype.hasOwnProperty,nd={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(A,e,t){var r,n={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Jp.call(e,r)&&!Yp.hasOwnProperty(r)&&(n[r]=e[r]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];n.children=s}if(A&&A.defaultProps)for(r in a=A.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:ao,type:A,key:i,ref:o,props:n,_owner:nd.current}}function yv(A,e){return{$$typeof:ao,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}function id(A){return typeof A=="object"&&A!==null&&A.$$typeof===ao}function Fv(A){var e={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(t){return e[t]})}var Uf=/\/+/g;function vl(A,e){return typeof A=="object"&&A!==null&&A.key!=null?Fv(""+A.key):e.toString(36)}function ca(A,e,t,r,n){var i=typeof A;(i==="undefined"||i==="boolean")&&(A=null);var o=!1;if(A===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(A.$$typeof){case ao:case dv:o=!0}}if(o)return o=A,n=n(o),A=r===""?"."+vl(o,0):r,Ff(n)?(t="",A!=null&&(t=A.replace(Uf,"$&/")+"/"),ca(n,e,t,"",function(l){return l})):n!=null&&(id(n)&&(n=yv(n,t+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(Uf,"$&/")+"/")+A)),e.push(n)),1;if(o=0,r=r===""?".":r+":",Ff(A))for(var a=0;a<A.length;a++){i=A[a];var s=r+vl(i,a);o+=ca(i,e,t,s,n)}else if(s=Qv(A),typeof s=="function")for(A=s.call(A),a=0;!(i=A.next()).done;)i=i.value,s=r+vl(i,a++),o+=ca(i,e,t,s,n);else if(i==="object")throw e=String(A),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(A,e,t){if(A==null)return A;var r=[],n=0;return ca(A,r,"","",function(i){return e.call(t,i,n++)}),r}function Uv(A){if(A._status===-1){var e=A._result;e=e(),e.then(function(t){(A._status===0||A._status===-1)&&(A._status=1,A._result=t)},function(t){(A._status===0||A._status===-1)&&(A._status=2,A._result=t)}),A._status===-1&&(A._status=0,A._result=e)}if(A._status===1)return A._result.default;throw A._result}var de={current:null},ua={transition:null},xv={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:ua,ReactCurrentOwner:nd};tA.Children={map:wo,forEach:function(A,e,t){wo(A,function(){e.apply(this,arguments)},t)},count:function(A){var e=0;return wo(A,function(){e++}),e},toArray:function(A){return wo(A,function(e){return e})||[]},only:function(A){if(!id(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};tA.Component=jn;tA.Fragment=fv;tA.Profiler=pv;tA.PureComponent=td;tA.StrictMode=gv;tA.Suspense=wv;tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xv;tA.cloneElement=function(A,e,t){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var r=$p({},A.props),n=A.key,i=A.ref,o=A._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=nd.current),e.key!==void 0&&(n=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(s in e)Jp.call(e,s)&&!Yp.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ao,type:A.type,key:n,ref:i,props:r,_owner:o}};tA.createContext=function(A){return A={$$typeof:Bv,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:hv,_context:A},A.Consumer=A};tA.createElement=Zp;tA.createFactory=function(A){var e=Zp.bind(null,A);return e.type=A,e};tA.createRef=function(){return{current:null}};tA.forwardRef=function(A){return{$$typeof:vv,render:A}};tA.isValidElement=id;tA.lazy=function(A){return{$$typeof:Cv,_payload:{_status:-1,_result:A},_init:Uv}};tA.memo=function(A,e){return{$$typeof:mv,type:A,compare:e===void 0?null:e}};tA.startTransition=function(A){var e=ua.transition;ua.transition={};try{A()}finally{ua.transition=e}};tA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};tA.useCallback=function(A,e){return de.current.useCallback(A,e)};tA.useContext=function(A){return de.current.useContext(A)};tA.useDebugValue=function(){};tA.useDeferredValue=function(A){return de.current.useDeferredValue(A)};tA.useEffect=function(A,e){return de.current.useEffect(A,e)};tA.useId=function(){return de.current.useId()};tA.useImperativeHandle=function(A,e,t){return de.current.useImperativeHandle(A,e,t)};tA.useInsertionEffect=function(A,e){return de.current.useInsertionEffect(A,e)};tA.useLayoutEffect=function(A,e){return de.current.useLayoutEffect(A,e)};tA.useMemo=function(A,e){return de.current.useMemo(A,e)};tA.useReducer=function(A,e,t){return de.current.useReducer(A,e,t)};tA.useRef=function(A){return de.current.useRef(A)};tA.useState=function(A){return de.current.useState(A)};tA.useSyncExternalStore=function(A,e,t){return de.current.useSyncExternalStore(A,e,t)};tA.useTransition=function(){return de.current.useTransition()};tA.version="18.2.0";zp.exports=tA;var H=zp.exports;const Pe=uv(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev=H,bv=Symbol.for("react.element"),Hv=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,Iv=Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lv={key:!0,ref:!0,__self:!0,__source:!0};function qp(A,e,t){var r,n={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kv.call(e,r)&&!Lv.hasOwnProperty(r)&&(n[r]=e[r]);if(A&&A.defaultProps)for(r in e=A.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:bv,type:A,key:i,ref:o,props:n,_owner:Iv.current}}xs.Fragment=Hv;xs.jsx=qp;xs.jsxs=qp;Vp.exports=xs;var Q=Vp.exports,Qc={},Ah={exports:{}},Ie={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function e(b,I){var O=b.length;b.push(I);A:for(;0<O;){var G=O-1>>>1,W=b[G];if(0<n(W,I))b[G]=I,b[O]=W,O=G;else break A}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var I=b[0],O=b.pop();if(O!==I){b[0]=O;A:for(var G=0,W=b.length,FA=W>>>1;G<FA;){var uA=2*(G+1)-1,nA=b[uA],sA=uA+1,gA=b[sA];if(0>n(nA,O))sA<W&&0>n(gA,nA)?(b[G]=gA,b[sA]=O,G=sA):(b[G]=nA,b[uA]=O,G=uA);else if(sA<W&&0>n(gA,O))b[G]=gA,b[sA]=O,G=sA;else break A}}return I}function n(b,I){var O=b.sortIndex-I.sortIndex;return O!==0?O:b.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;A.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();A.unstable_now=function(){return o.now()-a}}var s=[],l=[],c=1,u=null,d=3,p=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var I=t(l);I!==null;){if(I.callback===null)r(l);else if(I.startTime<=b)r(l),I.sortIndex=I.expirationTime,e(s,I);else break;I=t(l)}}function C(b){if(w=!1,h(b),!v)if(t(s)!==null)v=!0,K(F);else{var I=t(l);I!==null&&Z(C,I.startTime-b)}}function F(b,I){v=!1,w&&(w=!1,g(E),E=-1),p=!0;var O=d;try{for(h(I),u=t(s);u!==null&&(!(u.expirationTime>I)||b&&!Y());){var G=u.callback;if(typeof G=="function"){u.callback=null,d=u.priorityLevel;var W=G(u.expirationTime<=I);I=A.unstable_now(),typeof W=="function"?u.callback=W:u===t(s)&&r(s),h(I)}else r(s);u=t(s)}if(u!==null)var FA=!0;else{var uA=t(l);uA!==null&&Z(C,uA.startTime-I),FA=!1}return FA}finally{u=null,d=O,p=!1}}var m=!1,y=null,E=-1,k=5,_=-1;function Y(){return!(A.unstable_now()-_<k)}function J(){if(y!==null){var b=A.unstable_now();_=b;var I=!0;try{I=y(!0,b)}finally{I?$():(m=!1,y=null)}}else m=!1}var $;if(typeof f=="function")$=function(){f(J)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,V=S.port2;S.port1.onmessage=J,$=function(){V.postMessage(null)}}else $=function(){x(J,0)};function K(b){y=b,m||(m=!0,$())}function Z(b,I){E=x(function(){b(A.unstable_now())},I)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(b){b.callback=null},A.unstable_continueExecution=function(){v||p||(v=!0,K(F))},A.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<b?Math.floor(1e3/b):5},A.unstable_getCurrentPriorityLevel=function(){return d},A.unstable_getFirstCallbackNode=function(){return t(s)},A.unstable_next=function(b){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var O=d;d=I;try{return b()}finally{d=O}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(b,I){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var O=d;d=b;try{return I()}finally{d=O}},A.unstable_scheduleCallback=function(b,I,O){var G=A.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?G+O:G):O=G,b){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,b={id:c++,callback:I,priorityLevel:b,startTime:O,expirationTime:W,sortIndex:-1},O>G?(b.sortIndex=O,e(l,b),t(s)===null&&b===t(l)&&(w?(g(E),E=-1):w=!0,Z(C,O-G))):(b.sortIndex=W,e(s,b),v||p||(v=!0,K(F))),b},A.unstable_shouldYield=Y,A.unstable_wrapCallback=function(b){var I=d;return function(){var O=d;d=I;try{return b.apply(this,arguments)}finally{d=O}}}})(th);eh.exports=th;var Sv=eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=H,ke=Sv;function L(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Ni={};function Rr(A,e){yn(A,e),yn(A+"Capture",e)}function yn(A,e){for(Ni[A]=e,A=0;A<e.length;A++)nh.add(e[A])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},Ef={};function Mv(A){return yc.call(Ef,A)?!0:yc.call(xf,A)?!1:_v.test(A)?Ef[A]=!0:(xf[A]=!0,!1)}function Dv(A,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Kv(A,e,t,r){if(e===null||typeof e>"u"||Dv(A,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fe(A,e,t,r,n,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=A,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){Ae[A]=new fe(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var e=A[0];Ae[e]=new fe(e,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){Ae[A]=new fe(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){Ae[A]=new fe(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){Ae[A]=new fe(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){Ae[A]=new fe(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){Ae[A]=new fe(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){Ae[A]=new fe(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){Ae[A]=new fe(A,5,!1,A.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var e=A.replace(od,ad);Ae[e]=new fe(e,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var e=A.replace(od,ad);Ae[e]=new fe(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var e=A.replace(od,ad);Ae[e]=new fe(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){Ae[A]=new fe(A,1,!1,A.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){Ae[A]=new fe(A,1,!1,A.toLowerCase(),null,!0,!0)});function sd(A,e,t,r){var n=Ae.hasOwnProperty(e)?Ae[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kv(e,t,n,r)&&(t=null),r||n===null?Mv(e)&&(t===null?A.removeAttribute(e):A.setAttribute(e,""+t)):n.mustUseProperty?A[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,r=n.attributeNamespace,t===null?A.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,r?A.setAttributeNS(r,e,t):A.setAttribute(e,t))))}var Nt=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),ih=Symbol.for("react.provider"),oh=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Wn(A){return A===null||typeof A!="object"?null:(A=bf&&A[bf]||A["@@iterator"],typeof A=="function"?A:null)}var EA=Object.assign,wl;function ai(A){if(wl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+A}var ml=!1;function Cl(A,e){if(!A||ml)return"";ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(A,[],e)}else{try{e.call()}catch(l){r=l}A.call(e.prototype)}else{try{throw Error()}catch(l){r=l}A()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),i=r.stack.split(`
`),o=n.length-1,a=i.length-1;1<=o&&0<=a&&n[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(n[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||n[o]!==i[a]){var s=`
`+n[o].replace(" at new "," at ");return A.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",A.displayName)),s}while(1<=o&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=t}return(A=A?A.displayName||A.name:"")?ai(A):""}function Tv(A){switch(A.tag){case 5:return ai(A.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return A=Cl(A.type,!1),A;case 11:return A=Cl(A.type.render,!1),A;case 1:return A=Cl(A.type,!0),A;default:return""}}function Ec(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case An:return"Fragment";case qr:return"Portal";case Fc:return"Profiler";case ld:return"StrictMode";case Uc:return"Suspense";case xc:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case oh:return(A.displayName||"Context")+".Consumer";case ih:return(A._context.displayName||"Context")+".Provider";case cd:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case ud:return e=A.displayName||null,e!==null?e:Ec(A.type)||"Memo";case zt:e=A._payload,A=A._init;try{return Ec(A(e))}catch{}}return null}function Nv(A){var e=A.type;switch(A.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=e.render,A=A.displayName||A.name||"",e.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function sh(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rv(A){var e=sh(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),r=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,i=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function Co(A){A._valueTracker||(A._valueTracker=Rv(A))}function lh(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return A&&(r=sh(A)?A.checked?"true":"false":A.value),A=r,A!==t?(e.setValue(A),!0):!1}function Da(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function bc(A,e){var t=e.checked;return EA({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??A._wrapperState.initialChecked})}function Hf(A,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ur(e.value!=null?e.value:t),A._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ch(A,e){e=e.checked,e!=null&&sd(A,"checked",e,!1)}function Hc(A,e){ch(A,e);var t=ur(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&A.value===""||A.value!=t)&&(A.value=""+t):A.value!==""+t&&(A.value=""+t);else if(r==="submit"||r==="reset"){A.removeAttribute("value");return}e.hasOwnProperty("value")?kc(A,e.type,t):e.hasOwnProperty("defaultValue")&&kc(A,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(A.defaultChecked=!!e.defaultChecked)}function kf(A,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+A._wrapperState.initialValue,t||e===A.value||(A.value=e),A.defaultValue=e}t=A.name,t!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,t!==""&&(A.name=t)}function kc(A,e,t){(e!=="number"||Da(A.ownerDocument)!==A)&&(t==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+t&&(A.defaultValue=""+t))}var si=Array.isArray;function pn(A,e,t,r){if(A=A.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<A.length;t++)n=e.hasOwnProperty("$"+A[t].value),A[t].selected!==n&&(A[t].selected=n),n&&r&&(A[t].defaultSelected=!0)}else{for(t=""+ur(t),e=null,n=0;n<A.length;n++){if(A[n].value===t){A[n].selected=!0,r&&(A[n].defaultSelected=!0);return}e!==null||A[n].disabled||(e=A[n])}e!==null&&(e.selected=!0)}}function Ic(A,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return EA({},e,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function If(A,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(L(92));if(si(t)){if(1<t.length)throw Error(L(93));t=t[0]}e=t}e==null&&(e=""),t=e}A._wrapperState={initialValue:ur(t)}}function uh(A,e){var t=ur(e.value),r=ur(e.defaultValue);t!=null&&(t=""+t,t!==A.value&&(A.value=t),e.defaultValue==null&&A.defaultValue!==t&&(A.defaultValue=t)),r!=null&&(A.defaultValue=""+r)}function Lf(A){var e=A.textContent;e===A._wrapperState.initialValue&&e!==""&&e!==null&&(A.value=e)}function dh(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(A,e){return A==null||A==="http://www.w3.org/1999/xhtml"?dh(e):A==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var Qo,fh=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return A(e,t,r,n)})}:A}(function(A,e){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;e.firstChild;)A.appendChild(e.firstChild)}});function Ri(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ov=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(A){Ov.forEach(function(e){e=e+A.charAt(0).toUpperCase()+A.substring(1),Qi[e]=Qi[A]})});function gh(A,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Qi.hasOwnProperty(A)&&Qi[A]?(""+e).trim():e+"px"}function ph(A,e){A=A.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,n=gh(t,e[t],r);t==="float"&&(t="cssFloat"),r?A.setProperty(t,n):A[t]=n}}var jv=EA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(A,e){if(e){if(jv[A]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,A));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function _c(A,e){if(A.indexOf("-")===-1)return typeof e.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function dd(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Dc=null,hn=null,Bn=null;function Sf(A){if(A=co(A)){if(typeof Dc!="function")throw Error(L(280));var e=A.stateNode;e&&(e=Is(e),Dc(A.stateNode,A.type,e))}}function hh(A){hn?Bn?Bn.push(A):Bn=[A]:hn=A}function Bh(){if(hn){var A=hn,e=Bn;if(Bn=hn=null,Sf(A),e)for(A=0;A<e.length;A++)Sf(e[A])}}function vh(A,e){return A(e)}function wh(){}var Ql=!1;function mh(A,e,t){if(Ql)return A(e,t);Ql=!0;try{return vh(A,e,t)}finally{Ql=!1,(hn!==null||Bn!==null)&&(wh(),Bh())}}function Oi(A,e){var t=A.stateNode;if(t===null)return null;var r=Is(t);if(r===null)return null;t=r[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(A=A.type,r=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!r;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(L(231,e,typeof t));return t}var Kc=!1;if(_t)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Kc=!1}function Pv(A,e,t,r,n,i,o,a,s){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(c){this.onError(c)}}var yi=!1,Ka=null,Ta=!1,Tc=null,Vv={onError:function(A){yi=!0,Ka=A}};function zv(A,e,t,r,n,i,o,a,s){yi=!1,Ka=null,Pv.apply(Vv,arguments)}function Gv(A,e,t,r,n,i,o,a,s){if(zv.apply(this,arguments),yi){if(yi){var l=Ka;yi=!1,Ka=null}else throw Error(L(198));Ta||(Ta=!0,Tc=l)}}function Or(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,e.flags&4098&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function Ch(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function _f(A){if(Or(A)!==A)throw Error(L(188))}function $v(A){var e=A.alternate;if(!e){if(e=Or(A),e===null)throw Error(L(188));return e!==A?null:A}for(var t=A,r=e;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(r=n.return,r!==null){t=r;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return _f(n),A;if(i===r)return _f(n),e;i=i.sibling}throw Error(L(188))}if(t.return!==r.return)t=n,r=i;else{for(var o=!1,a=n.child;a;){if(a===t){o=!0,t=n,r=i;break}if(a===r){o=!0,r=n,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=n;break}if(a===r){o=!0,r=i,t=n;break}a=a.sibling}if(!o)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?A:e}function Qh(A){return A=$v(A),A!==null?yh(A):null}function yh(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var e=yh(A);if(e!==null)return e;A=A.sibling}return null}var Fh=ke.unstable_scheduleCallback,Mf=ke.unstable_cancelCallback,Wv=ke.unstable_shouldYield,Xv=ke.unstable_requestPaint,LA=ke.unstable_now,Jv=ke.unstable_getCurrentPriorityLevel,fd=ke.unstable_ImmediatePriority,Uh=ke.unstable_UserBlockingPriority,Na=ke.unstable_NormalPriority,Yv=ke.unstable_LowPriority,xh=ke.unstable_IdlePriority,Es=null,Bt=null;function Zv(A){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Es,A,void 0,(A.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:ew,qv=Math.log,Aw=Math.LN2;function ew(A){return A>>>=0,A===0?32:31-(qv(A)/Aw|0)|0}var yo=64,Fo=4194304;function li(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Ra(A,e){var t=A.pendingLanes;if(t===0)return 0;var r=0,n=A.suspendedLanes,i=A.pingedLanes,o=t&268435455;if(o!==0){var a=o&~n;a!==0?r=li(a):(i&=o,i!==0&&(r=li(i)))}else o=t&~n,o!==0?r=li(o):i!==0&&(r=li(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,i=e&-e,n>=i||n===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=A.entangledLanes,e!==0)for(A=A.entanglements,e&=r;0<e;)t=31-nt(e),n=1<<t,r|=A[t],e&=~n;return r}function tw(A,e){switch(A){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rw(A,e){for(var t=A.suspendedLanes,r=A.pingedLanes,n=A.expirationTimes,i=A.pendingLanes;0<i;){var o=31-nt(i),a=1<<o,s=n[o];s===-1?(!(a&t)||a&r)&&(n[o]=tw(a,e)):s<=e&&(A.expiredLanes|=a),i&=~a}}function Nc(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function Eh(){var A=yo;return yo<<=1,!(yo&4194240)&&(yo=64),A}function yl(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function so(A,e,t){A.pendingLanes|=e,e!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,e=31-nt(e),A[e]=t}function nw(A,e){var t=A.pendingLanes&~e;A.pendingLanes=e,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=e,A.mutableReadLanes&=e,A.entangledLanes&=e,e=A.entanglements;var r=A.eventTimes;for(A=A.expirationTimes;0<t;){var n=31-nt(t),i=1<<n;e[n]=0,r[n]=-1,A[n]=-1,t&=~i}}function gd(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var r=31-nt(t),n=1<<r;n&e|A[r]&e&&(A[r]|=e),t&=~n}}var lA=0;function bh(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var Hh,pd,kh,Ih,Lh,Rc=!1,Uo=[],er=null,tr=null,rr=null,ji=new Map,Pi=new Map,Wt=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(A,e){switch(A){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(e.pointerId)}}function Jn(A,e,t,r,n,i){return A===null||A.nativeEvent!==i?(A={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[n]},e!==null&&(e=co(e),e!==null&&pd(e)),A):(A.eventSystemFlags|=r,e=A.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),A)}function ow(A,e,t,r,n){switch(e){case"focusin":return er=Jn(er,A,e,t,r,n),!0;case"dragenter":return tr=Jn(tr,A,e,t,r,n),!0;case"mouseover":return rr=Jn(rr,A,e,t,r,n),!0;case"pointerover":var i=n.pointerId;return ji.set(i,Jn(ji.get(i)||null,A,e,t,r,n)),!0;case"gotpointercapture":return i=n.pointerId,Pi.set(i,Jn(Pi.get(i)||null,A,e,t,r,n)),!0}return!1}function Sh(A){var e=Cr(A.target);if(e!==null){var t=Or(e);if(t!==null){if(e=t.tag,e===13){if(e=Ch(t),e!==null){A.blockedOn=e,Lh(A.priority,function(){kh(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function da(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=Oc(A.domEventName,A.eventSystemFlags,e[0],A.nativeEvent);if(t===null){t=A.nativeEvent;var r=new t.constructor(t.type,t);Mc=r,t.target.dispatchEvent(r),Mc=null}else return e=co(t),e!==null&&pd(e),A.blockedOn=t,!1;e.shift()}return!0}function Kf(A,e,t){da(A)&&t.delete(e)}function aw(){Rc=!1,er!==null&&da(er)&&(er=null),tr!==null&&da(tr)&&(tr=null),rr!==null&&da(rr)&&(rr=null),ji.forEach(Kf),Pi.forEach(Kf)}function Yn(A,e){A.blockedOn===e&&(A.blockedOn=null,Rc||(Rc=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,aw)))}function Vi(A){function e(n){return Yn(n,A)}if(0<Uo.length){Yn(Uo[0],A);for(var t=1;t<Uo.length;t++){var r=Uo[t];r.blockedOn===A&&(r.blockedOn=null)}}for(er!==null&&Yn(er,A),tr!==null&&Yn(tr,A),rr!==null&&Yn(rr,A),ji.forEach(e),Pi.forEach(e),t=0;t<Wt.length;t++)r=Wt[t],r.blockedOn===A&&(r.blockedOn=null);for(;0<Wt.length&&(t=Wt[0],t.blockedOn===null);)Sh(t),t.blockedOn===null&&Wt.shift()}var vn=Nt.ReactCurrentBatchConfig,Oa=!0;function sw(A,e,t,r){var n=lA,i=vn.transition;vn.transition=null;try{lA=1,hd(A,e,t,r)}finally{lA=n,vn.transition=i}}function lw(A,e,t,r){var n=lA,i=vn.transition;vn.transition=null;try{lA=4,hd(A,e,t,r)}finally{lA=n,vn.transition=i}}function hd(A,e,t,r){if(Oa){var n=Oc(A,e,t,r);if(n===null)Sl(A,e,r,ja,t),Df(A,r);else if(ow(n,A,e,t,r))r.stopPropagation();else if(Df(A,r),e&4&&-1<iw.indexOf(A)){for(;n!==null;){var i=co(n);if(i!==null&&Hh(i),i=Oc(A,e,t,r),i===null&&Sl(A,e,r,ja,t),i===n)break;n=i}n!==null&&r.stopPropagation()}else Sl(A,e,r,null,t)}}var ja=null;function Oc(A,e,t,r){if(ja=null,A=dd(r),A=Cr(A),A!==null)if(e=Or(A),e===null)A=null;else if(t=e.tag,t===13){if(A=Ch(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null);return ja=A,null}function _h(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case fd:return 1;case Uh:return 4;case Na:case Yv:return 16;case xh:return 536870912;default:return 16}default:return 16}}var Jt=null,Bd=null,fa=null;function Mh(){if(fa)return fa;var A,e=Bd,t=e.length,r,n="value"in Jt?Jt.value:Jt.textContent,i=n.length;for(A=0;A<t&&e[A]===n[A];A++);var o=t-A;for(r=1;r<=o&&e[t-r]===n[i-r];r++);return fa=n.slice(A,1<r?1-r:void 0)}function ga(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function xo(){return!0}function Tf(){return!1}function Le(A){function e(t,r,n,i,o){this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in A)A.hasOwnProperty(a)&&(t=A[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xo:Tf,this.isPropagationStopped=Tf,this}return EA(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=Le(Pn),lo=EA({},Pn,{view:0,detail:0}),cw=Le(lo),Fl,Ul,Zn,bs=EA({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Zn&&(Zn&&A.type==="mousemove"?(Fl=A.screenX-Zn.screenX,Ul=A.screenY-Zn.screenY):Ul=Fl=0,Zn=A),Fl)},movementY:function(A){return"movementY"in A?A.movementY:Ul}}),Nf=Le(bs),uw=EA({},bs,{dataTransfer:0}),dw=Le(uw),fw=EA({},lo,{relatedTarget:0}),xl=Le(fw),gw=EA({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),pw=Le(gw),hw=EA({},Pn,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Bw=Le(hw),vw=EA({},Pn,{data:0}),Rf=Le(vw),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qw(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=Cw[A])?!!e[A]:!1}function wd(){return Qw}var yw=EA({},lo,{key:function(A){if(A.key){var e=ww[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=ga(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?mw[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(A){return A.type==="keypress"?ga(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?ga(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Fw=Le(yw),Uw=EA({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Le(Uw),xw=EA({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Ew=Le(xw),bw=EA({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hw=Le(bw),kw=EA({},bs,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=Le(kw),Lw=[9,13,27,32],md=_t&&"CompositionEvent"in window,Fi=null;_t&&"documentMode"in document&&(Fi=document.documentMode);var Sw=_t&&"TextEvent"in window&&!Fi,Dh=_t&&(!md||Fi&&8<Fi&&11>=Fi),jf=" ",Pf=!1;function Kh(A,e){switch(A){case"keyup":return Lw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var en=!1;function _w(A,e){switch(A){case"compositionend":return Th(e);case"keypress":return e.which!==32?null:(Pf=!0,jf);case"textInput":return A=e.data,A===jf&&Pf?null:A;default:return null}}function Mw(A,e){if(en)return A==="compositionend"||!md&&Kh(A,e)?(A=Mh(),fa=Bd=Jt=null,en=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dh&&e.locale!=="ko"?null:e.data;default:return null}}var Dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!Dw[A.type]:e==="textarea"}function Nh(A,e,t,r){hh(r),e=Pa(e,"onChange"),0<e.length&&(t=new vd("onChange","change",null,t,r),A.push({event:t,listeners:e}))}var Ui=null,zi=null;function Kw(A){Jh(A,0)}function Hs(A){var e=nn(A);if(lh(e))return A}function Tw(A,e){if(A==="change")return e}var Rh=!1;if(_t){var El;if(_t){var bl="oninput"in document;if(!bl){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),bl=typeof zf.oninput=="function"}El=bl}else El=!1;Rh=El&&(!document.documentMode||9<document.documentMode)}function Gf(){Ui&&(Ui.detachEvent("onpropertychange",Oh),zi=Ui=null)}function Oh(A){if(A.propertyName==="value"&&Hs(zi)){var e=[];Nh(e,zi,A,dd(A)),mh(Kw,e)}}function Nw(A,e,t){A==="focusin"?(Gf(),Ui=e,zi=t,Ui.attachEvent("onpropertychange",Oh)):A==="focusout"&&Gf()}function Rw(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Hs(zi)}function Ow(A,e){if(A==="click")return Hs(e)}function jw(A,e){if(A==="input"||A==="change")return Hs(e)}function Pw(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var st=typeof Object.is=="function"?Object.is:Pw;function Gi(A,e){if(st(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var n=t[r];if(!yc.call(e,n)||!st(A[n],e[n]))return!1}return!0}function $f(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Wf(A,e){var t=$f(A);A=0;for(var r;t;){if(t.nodeType===3){if(r=A+t.textContent.length,A<=e&&r>=e)return{node:t,offset:e-A};A=r}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=$f(t)}}function jh(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?jh(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Ph(){for(var A=window,e=Da();e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Da(A.document)}return e}function Cd(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}function Vw(A){var e=Ph(),t=A.focusedElem,r=A.selectionRange;if(e!==t&&t&&t.ownerDocument&&jh(t.ownerDocument.documentElement,t)){if(r!==null&&Cd(t)){if(e=r.start,A=r.end,A===void 0&&(A=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(A,t.value.length);else if(A=(e=t.ownerDocument||document)&&e.defaultView||window,A.getSelection){A=A.getSelection();var n=t.textContent.length,i=Math.min(r.start,n);r=r.end===void 0?i:Math.min(r.end,n),!A.extend&&i>r&&(n=r,r=i,i=n),n=Wf(t,i);var o=Wf(t,r);n&&o&&(A.rangeCount!==1||A.anchorNode!==n.node||A.anchorOffset!==n.offset||A.focusNode!==o.node||A.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),A.removeAllRanges(),i>r?(A.addRange(e),A.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),A.addRange(e)))}}for(e=[],A=t;A=A.parentNode;)A.nodeType===1&&e.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)A=e[t],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var zw=_t&&"documentMode"in document&&11>=document.documentMode,tn=null,jc=null,xi=null,Pc=!1;function Xf(A,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pc||tn==null||tn!==Da(r)||(r=tn,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Gi(xi,r)||(xi=r,r=Pa(jc,"onSelect"),0<r.length&&(e=new vd("onSelect","select",null,e,t),A.push({event:e,listeners:r}),e.target=tn)))}function Eo(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var rn={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Hl={},Vh={};_t&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function ks(A){if(Hl[A])return Hl[A];if(!rn[A])return A;var e=rn[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Vh)return Hl[A]=e[t];return A}var zh=ks("animationend"),Gh=ks("animationiteration"),$h=ks("animationstart"),Wh=ks("transitionend"),Xh=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(A,e){Xh.set(A,e),Rr(e,[A])}for(var kl=0;kl<Jf.length;kl++){var Il=Jf[kl],Gw=Il.toLowerCase(),$w=Il[0].toUpperCase()+Il.slice(1);gr(Gw,"on"+$w)}gr(zh,"onAnimationEnd");gr(Gh,"onAnimationIteration");gr($h,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Wh,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Yf(A,e,t){var r=A.type||"unknown-event";A.currentTarget=t,Gv(r,e,void 0,A),A.currentTarget=null}function Jh(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var r=A[t],n=r.event;r=r.listeners;A:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,l=a.currentTarget;if(a=a.listener,s!==i&&n.isPropagationStopped())break A;Yf(n,a,l),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,l=a.currentTarget,a=a.listener,s!==i&&n.isPropagationStopped())break A;Yf(n,a,l),i=s}}}if(Ta)throw A=Tc,Ta=!1,Tc=null,A}function pA(A,e){var t=e[Wc];t===void 0&&(t=e[Wc]=new Set);var r=A+"__bubble";t.has(r)||(Yh(e,A,2,!1),t.add(r))}function Ll(A,e,t){var r=0;e&&(r|=4),Yh(t,A,r,e)}var bo="_reactListening"+Math.random().toString(36).slice(2);function $i(A){if(!A[bo]){A[bo]=!0,nh.forEach(function(t){t!=="selectionchange"&&(Ww.has(t)||Ll(t,!1,A),Ll(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[bo]||(e[bo]=!0,Ll("selectionchange",!1,e))}}function Yh(A,e,t,r){switch(_h(e)){case 1:var n=sw;break;case 4:n=lw;break;default:n=hd}t=n.bind(null,e,t,A),n=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?A.addEventListener(e,t,{capture:!0,passive:n}):A.addEventListener(e,t,!0):n!==void 0?A.addEventListener(e,t,{passive:n}):A.addEventListener(e,t,!1)}function Sl(A,e,t,r,n){var i=r;if(!(e&1)&&!(e&2)&&r!==null)A:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue A}a=a.parentNode}}r=r.return}mh(function(){var l=i,c=dd(t),u=[];A:{var d=Xh.get(A);if(d!==void 0){var p=vd,v=A;switch(A){case"keypress":if(ga(t)===0)break A;case"keydown":case"keyup":p=Fw;break;case"focusin":v="focus",p=xl;break;case"focusout":v="blur",p=xl;break;case"beforeblur":case"afterblur":p=xl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ew;break;case zh:case Gh:case $h:p=pw;break;case Wh:p=Hw;break;case"scroll":p=cw;break;case"wheel":p=Iw;break;case"copy":case"cut":case"paste":p=Bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Of}var w=(e&4)!==0,x=!w&&A==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var f=l,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=Oi(f,g),C!=null&&w.push(Wi(f,C,h)))),x)break;f=f.return}0<w.length&&(d=new p(d,v,null,t,c),u.push({event:d,listeners:w}))}}if(!(e&7)){A:{if(d=A==="mouseover"||A==="pointerover",p=A==="mouseout"||A==="pointerout",d&&t!==Mc&&(v=t.relatedTarget||t.fromElement)&&(Cr(v)||v[Mt]))break A;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=l,v=v?Cr(v):null,v!==null&&(x=Or(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=l),p!==v)){if(w=Nf,C="onMouseLeave",g="onMouseEnter",f="mouse",(A==="pointerout"||A==="pointerover")&&(w=Of,C="onPointerLeave",g="onPointerEnter",f="pointer"),x=p==null?d:nn(p),h=v==null?d:nn(v),d=new w(C,f+"leave",p,t,c),d.target=x,d.relatedTarget=h,C=null,Cr(c)===l&&(w=new w(g,f+"enter",v,t,c),w.target=h,w.relatedTarget=x,C=w),x=C,p&&v)e:{for(w=p,g=v,f=0,h=w;h;h=jr(h))f++;for(h=0,C=g;C;C=jr(C))h++;for(;0<f-h;)w=jr(w),f--;for(;0<h-f;)g=jr(g),h--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break e;w=jr(w),g=jr(g)}w=null}else w=null;p!==null&&Zf(u,d,p,w,!1),v!==null&&x!==null&&Zf(u,x,v,w,!0)}}A:{if(d=l?nn(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var F=Tw;else if(Vf(d))if(Rh)F=jw;else{F=Rw;var m=Nw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(F=Ow);if(F&&(F=F(A,l))){Nh(u,F,t,c);break A}m&&m(A,d,l),A==="focusout"&&(m=d._wrapperState)&&m.controlled&&d.type==="number"&&kc(d,"number",d.value)}switch(m=l?nn(l):window,A){case"focusin":(Vf(m)||m.contentEditable==="true")&&(tn=m,jc=l,xi=null);break;case"focusout":xi=jc=tn=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Xf(u,t,c);break;case"selectionchange":if(zw)break;case"keydown":case"keyup":Xf(u,t,c)}var y;if(md)A:{switch(A){case"compositionstart":var E="onCompositionStart";break A;case"compositionend":E="onCompositionEnd";break A;case"compositionupdate":E="onCompositionUpdate";break A}E=void 0}else en?Kh(A,t)&&(E="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Dh&&t.locale!=="ko"&&(en||E!=="onCompositionStart"?E==="onCompositionEnd"&&en&&(y=Mh()):(Jt=c,Bd="value"in Jt?Jt.value:Jt.textContent,en=!0)),m=Pa(l,E),0<m.length&&(E=new Rf(E,A,null,t,c),u.push({event:E,listeners:m}),y?E.data=y:(y=Th(t),y!==null&&(E.data=y)))),(y=Sw?_w(A,t):Mw(A,t))&&(l=Pa(l,"onBeforeInput"),0<l.length&&(c=new Rf("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=y))}Jh(u,e)})}function Wi(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Pa(A,e){for(var t=e+"Capture",r=[];A!==null;){var n=A,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Oi(A,t),i!=null&&r.unshift(Wi(A,i,n)),i=Oi(A,e),i!=null&&r.push(Wi(A,i,n))),A=A.return}return r}function jr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function Zf(A,e,t,r,n){for(var i=e._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,l=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&l!==null&&(a=l,n?(s=Oi(t,i),s!=null&&o.unshift(Wi(t,s,a))):n||(s=Oi(t,i),s!=null&&o.push(Wi(t,s,a)))),t=t.return}o.length!==0&&A.push({event:e,listeners:o})}var Xw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function qf(A){return(typeof A=="string"?A:""+A).replace(Xw,`
`).replace(Jw,"")}function Ho(A,e,t){if(e=qf(e),qf(A)!==e&&t)throw Error(L(425))}function Va(){}var Vc=null,zc=null;function Gc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Yw=typeof clearTimeout=="function"?clearTimeout:void 0,A1=typeof Promise=="function"?Promise:void 0,Zw=typeof queueMicrotask=="function"?queueMicrotask:typeof A1<"u"?function(A){return A1.resolve(null).then(A).catch(qw)}:$c;function qw(A){setTimeout(function(){throw A})}function _l(A,e){var t=e,r=0;do{var n=t.nextSibling;if(A.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(r===0){A.removeChild(n),Vi(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=n}while(t);Vi(e)}function nr(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return A}function e1(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Vn,Xi="__reactProps$"+Vn,Mt="__reactContainer$"+Vn,Wc="__reactEvents$"+Vn,Am="__reactListeners$"+Vn,em="__reactHandles$"+Vn;function Cr(A){var e=A[ht];if(e)return e;for(var t=A.parentNode;t;){if(e=t[Mt]||t[ht]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=e1(A);A!==null;){if(t=A[ht])return t;A=e1(A)}return e}A=t,t=A.parentNode}return null}function co(A){return A=A[ht]||A[Mt],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function nn(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(L(33))}function Is(A){return A[Xi]||null}var Xc=[],on=-1;function pr(A){return{current:A}}function vA(A){0>on||(A.current=Xc[on],Xc[on]=null,on--)}function fA(A,e){on++,Xc[on]=A.current,A.current=e}var dr={},oe=pr(dr),we=pr(!1),Mr=dr;function Fn(A,e){var t=A.type.contextTypes;if(!t)return dr;var r=A.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in t)n[i]=e[i];return r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=e,A.__reactInternalMemoizedMaskedChildContext=n),n}function me(A){return A=A.childContextTypes,A!=null}function za(){vA(we),vA(oe)}function t1(A,e,t){if(oe.current!==dr)throw Error(L(168));fA(oe,e),fA(we,t)}function Zh(A,e,t){var r=A.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(L(108,Nv(A)||"Unknown",n));return EA({},t,r)}function Ga(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||dr,Mr=oe.current,fA(oe,A),fA(we,we.current),!0}function r1(A,e,t){var r=A.stateNode;if(!r)throw Error(L(169));t?(A=Zh(A,e,Mr),r.__reactInternalMemoizedMergedChildContext=A,vA(we),vA(oe),fA(oe,A)):vA(we),fA(we,t)}var bt=null,Ls=!1,Ml=!1;function qh(A){bt===null?bt=[A]:bt.push(A)}function tm(A){Ls=!0,qh(A)}function hr(){if(!Ml&&bt!==null){Ml=!0;var A=0,e=lA;try{var t=bt;for(lA=1;A<t.length;A++){var r=t[A];do r=r(!0);while(r!==null)}bt=null,Ls=!1}catch(n){throw bt!==null&&(bt=bt.slice(A+1)),Fh(fd,hr),n}finally{lA=e,Ml=!1}}return null}var an=[],sn=0,$a=null,Wa=0,De=[],Ke=0,Dr=null,Ht=1,kt="";function vr(A,e){an[sn++]=Wa,an[sn++]=$a,$a=A,Wa=e}function AB(A,e,t){De[Ke++]=Ht,De[Ke++]=kt,De[Ke++]=Dr,Dr=A;var r=Ht;A=kt;var n=32-nt(r)-1;r&=~(1<<n),t+=1;var i=32-nt(e)+n;if(30<i){var o=n-n%5;i=(r&(1<<o)-1).toString(32),r>>=o,n-=o,Ht=1<<32-nt(e)+n|t<<n|r,kt=i+A}else Ht=1<<i|t<<n|r,kt=A}function Qd(A){A.return!==null&&(vr(A,1),AB(A,1,0))}function yd(A){for(;A===$a;)$a=an[--sn],an[sn]=null,Wa=an[--sn],an[sn]=null;for(;A===Dr;)Dr=De[--Ke],De[Ke]=null,kt=De[--Ke],De[Ke]=null,Ht=De[--Ke],De[Ke]=null}var He=null,be=null,yA=!1,et=null;function eB(A,e){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=A,e=A.deletions,e===null?(A.deletions=[t],A.flags|=16):e.push(t)}function n1(A,e){switch(A.tag){case 5:var t=A.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(A.stateNode=e,He=A,be=nr(e.firstChild),!0):!1;case 6:return e=A.pendingProps===""||e.nodeType!==3?null:e,e!==null?(A.stateNode=e,He=A,be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Dr!==null?{id:Ht,overflow:kt}:null,A.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=e,t.return=A,A.child=t,He=A,be=null,!0):!1;default:return!1}}function Jc(A){return(A.mode&1)!==0&&(A.flags&128)===0}function Yc(A){if(yA){var e=be;if(e){var t=e;if(!n1(A,e)){if(Jc(A))throw Error(L(418));e=nr(t.nextSibling);var r=He;e&&n1(A,e)?eB(r,t):(A.flags=A.flags&-4097|2,yA=!1,He=A)}}else{if(Jc(A))throw Error(L(418));A.flags=A.flags&-4097|2,yA=!1,He=A}}}function i1(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;He=A}function ko(A){if(A!==He)return!1;if(!yA)return i1(A),yA=!0,!1;var e;if((e=A.tag!==3)&&!(e=A.tag!==5)&&(e=A.type,e=e!=="head"&&e!=="body"&&!Gc(A.type,A.memoizedProps)),e&&(e=be)){if(Jc(A))throw tB(),Error(L(418));for(;e;)eB(A,e),e=nr(e.nextSibling)}if(i1(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(L(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"){if(e===0){be=nr(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}A=A.nextSibling}be=null}}else be=He?nr(A.stateNode.nextSibling):null;return!0}function tB(){for(var A=be;A;)A=nr(A.nextSibling)}function Un(){be=He=null,yA=!1}function Fd(A){et===null?et=[A]:et.push(A)}var rm=Nt.ReactCurrentBatchConfig;function qe(A,e){if(A&&A.defaultProps){e=EA({},e),A=A.defaultProps;for(var t in A)e[t]===void 0&&(e[t]=A[t]);return e}return e}var Xa=pr(null),Ja=null,ln=null,Ud=null;function xd(){Ud=ln=Ja=null}function Ed(A){var e=Xa.current;vA(Xa),A._currentValue=e}function Zc(A,e,t){for(;A!==null;){var r=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),A===t)break;A=A.return}}function wn(A,e){Ja=A,Ud=ln=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&e&&(Be=!0),A.firstContext=null)}function Ve(A){var e=A._currentValue;if(Ud!==A)if(A={context:A,memoizedValue:e,next:null},ln===null){if(Ja===null)throw Error(L(308));ln=A,Ja.dependencies={lanes:0,firstContext:A}}else ln=ln.next=A;return e}var Qr=null;function bd(A){Qr===null?Qr=[A]:Qr.push(A)}function rB(A,e,t,r){var n=e.interleaved;return n===null?(t.next=t,bd(e)):(t.next=n.next,n.next=t),e.interleaved=t,Dt(A,r)}function Dt(A,e){A.lanes|=e;var t=A.alternate;for(t!==null&&(t.lanes|=e),t=A,A=A.return;A!==null;)A.childLanes|=e,t=A.alternate,t!==null&&(t.childLanes|=e),t=A,A=A.return;return t.tag===3?t.stateNode:null}var Gt=!1;function Hd(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nB(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function It(A,e){return{eventTime:A,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(A,e,t){var r=A.updateQueue;if(r===null)return null;if(r=r.shared,rA&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,Dt(A,t)}return n=r.interleaved,n===null?(e.next=e,bd(r)):(e.next=n.next,n.next=e),r.interleaved=e,Dt(A,t)}function pa(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,gd(A,t)}}function o1(A,e){var t=A.updateQueue,r=A.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?n=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?n=i=e:i=i.next=e}else n=i=e;t={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:r.shared,effects:r.effects},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}function Ya(A,e,t,r){var n=A.updateQueue;Gt=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,l=s.next;s.next=null,o===null?i=l:o.next=l,o=s;var c=A.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=s))}if(i!==null){var u=n.baseState;o=0,c=l=s=null,a=i;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var v=A,w=a;switch(d=e,p=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){u=v.call(p,u,d);break A}u=v;break A;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(p,u,d):v,d==null)break A;u=EA({},u,d);break A;case 2:Gt=!0}}a.callback!==null&&a.lane!==0&&(A.flags|=64,d=n.effects,d===null?n.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,s=u):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;d=a,a=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);if(c===null&&(s=u),n.baseState=s,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else i===null&&(n.shared.lanes=0);Tr|=o,A.lanes=o,A.memoizedState=u}}function a1(A,e,t){if(A=e.effects,e.effects=null,A!==null)for(e=0;e<A.length;e++){var r=A[e],n=r.callback;if(n!==null){if(r.callback=null,r=t,typeof n!="function")throw Error(L(191,n));n.call(r)}}}var iB=new rh.Component().refs;function qc(A,e,t,r){e=A.memoizedState,t=t(r,e),t=t==null?e:EA({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var Ss={isMounted:function(A){return(A=A._reactInternals)?Or(A)===A:!1},enqueueSetState:function(A,e,t){A=A._reactInternals;var r=ue(),n=ar(A),i=It(r,n);i.payload=e,t!=null&&(i.callback=t),e=ir(A,i,n),e!==null&&(it(e,A,n,r),pa(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var r=ue(),n=ar(A),i=It(r,n);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ir(A,i,n),e!==null&&(it(e,A,n,r),pa(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=ue(),r=ar(A),n=It(t,r);n.tag=2,e!=null&&(n.callback=e),e=ir(A,n,r),e!==null&&(it(e,A,r,t),pa(e,A,r))}};function s1(A,e,t,r,n,i,o){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Gi(t,r)||!Gi(n,i):!0}function oB(A,e,t){var r=!1,n=dr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(n=me(e)?Mr:oe.current,r=e.contextTypes,i=(r=r!=null)?Fn(A,n):dr),e=new e(t,i),A.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ss,A.stateNode=e,e._reactInternals=A,r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=n,A.__reactInternalMemoizedMaskedChildContext=i),e}function l1(A,e,t,r){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==A&&Ss.enqueueReplaceState(e,e.state,null)}function Au(A,e,t,r){var n=A.stateNode;n.props=t,n.state=A.memoizedState,n.refs=iB,Hd(A);var i=e.contextType;typeof i=="object"&&i!==null?n.context=Ve(i):(i=me(e)?Mr:oe.current,n.context=Fn(A,i)),n.state=A.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(qc(A,e,i,t),n.state=A.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Ss.enqueueReplaceState(n,n.state,null),Ya(A,t,n,r),n.state=A.memoizedState),typeof n.componentDidMount=="function"&&(A.flags|=4194308)}function qn(A,e,t){if(A=t.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,A));var n=r,i=""+A;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=n.refs;a===iB&&(a=n.refs={}),o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof A!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,A))}return A}function Io(A,e){throw A=Object.prototype.toString.call(e),Error(L(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A))}function c1(A){var e=A._init;return e(A._payload)}function aB(A){function e(g,f){if(A){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function t(g,f){if(!A)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function n(g,f){return g=sr(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,A?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return A&&g.alternate===null&&(g.flags|=2),g}function a(g,f,h,C){return f===null||f.tag!==6?(f=jl(h,g.mode,C),f.return=g,f):(f=n(f,h),f.return=g,f)}function s(g,f,h,C){var F=h.type;return F===An?c(g,f,h.props.children,C,h.key):f!==null&&(f.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===zt&&c1(F)===f.type)?(C=n(f,h.props),C.ref=qn(g,f,h),C.return=g,C):(C=Ca(h.type,h.key,h.props,null,g.mode,C),C.ref=qn(g,f,h),C.return=g,C)}function l(g,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Pl(h,g.mode,C),f.return=g,f):(f=n(f,h.children||[]),f.return=g,f)}function c(g,f,h,C,F){return f===null||f.tag!==7?(f=br(h,g.mode,C,F),f.return=g,f):(f=n(f,h),f.return=g,f)}function u(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=jl(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mo:return h=Ca(f.type,f.key,f.props,null,g.mode,h),h.ref=qn(g,null,f),h.return=g,h;case qr:return f=Pl(f,g.mode,h),f.return=g,f;case zt:var C=f._init;return u(g,C(f._payload),h)}if(si(f)||Wn(f))return f=br(f,g.mode,h,null),f.return=g,f;Io(g,f)}return null}function d(g,f,h,C){var F=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return F!==null?null:a(g,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mo:return h.key===F?s(g,f,h,C):null;case qr:return h.key===F?l(g,f,h,C):null;case zt:return F=h._init,d(g,f,F(h._payload),C)}if(si(h)||Wn(h))return F!==null?null:c(g,f,h,C,null);Io(g,h)}return null}function p(g,f,h,C,F){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,a(f,g,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case mo:return g=g.get(C.key===null?h:C.key)||null,s(f,g,C,F);case qr:return g=g.get(C.key===null?h:C.key)||null,l(f,g,C,F);case zt:var m=C._init;return p(g,f,h,m(C._payload),F)}if(si(C)||Wn(C))return g=g.get(h)||null,c(f,g,C,F,null);Io(f,C)}return null}function v(g,f,h,C){for(var F=null,m=null,y=f,E=f=0,k=null;y!==null&&E<h.length;E++){y.index>E?(k=y,y=null):k=y.sibling;var _=d(g,y,h[E],C);if(_===null){y===null&&(y=k);break}A&&y&&_.alternate===null&&e(g,y),f=i(_,f,E),m===null?F=_:m.sibling=_,m=_,y=k}if(E===h.length)return t(g,y),yA&&vr(g,E),F;if(y===null){for(;E<h.length;E++)y=u(g,h[E],C),y!==null&&(f=i(y,f,E),m===null?F=y:m.sibling=y,m=y);return yA&&vr(g,E),F}for(y=r(g,y);E<h.length;E++)k=p(y,g,E,h[E],C),k!==null&&(A&&k.alternate!==null&&y.delete(k.key===null?E:k.key),f=i(k,f,E),m===null?F=k:m.sibling=k,m=k);return A&&y.forEach(function(Y){return e(g,Y)}),yA&&vr(g,E),F}function w(g,f,h,C){var F=Wn(h);if(typeof F!="function")throw Error(L(150));if(h=F.call(h),h==null)throw Error(L(151));for(var m=F=null,y=f,E=f=0,k=null,_=h.next();y!==null&&!_.done;E++,_=h.next()){y.index>E?(k=y,y=null):k=y.sibling;var Y=d(g,y,_.value,C);if(Y===null){y===null&&(y=k);break}A&&y&&Y.alternate===null&&e(g,y),f=i(Y,f,E),m===null?F=Y:m.sibling=Y,m=Y,y=k}if(_.done)return t(g,y),yA&&vr(g,E),F;if(y===null){for(;!_.done;E++,_=h.next())_=u(g,_.value,C),_!==null&&(f=i(_,f,E),m===null?F=_:m.sibling=_,m=_);return yA&&vr(g,E),F}for(y=r(g,y);!_.done;E++,_=h.next())_=p(y,g,E,_.value,C),_!==null&&(A&&_.alternate!==null&&y.delete(_.key===null?E:_.key),f=i(_,f,E),m===null?F=_:m.sibling=_,m=_);return A&&y.forEach(function(J){return e(g,J)}),yA&&vr(g,E),F}function x(g,f,h,C){if(typeof h=="object"&&h!==null&&h.type===An&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case mo:A:{for(var F=h.key,m=f;m!==null;){if(m.key===F){if(F=h.type,F===An){if(m.tag===7){t(g,m.sibling),f=n(m,h.props.children),f.return=g,g=f;break A}}else if(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===zt&&c1(F)===m.type){t(g,m.sibling),f=n(m,h.props),f.ref=qn(g,m,h),f.return=g,g=f;break A}t(g,m);break}else e(g,m);m=m.sibling}h.type===An?(f=br(h.props.children,g.mode,C,h.key),f.return=g,g=f):(C=Ca(h.type,h.key,h.props,null,g.mode,C),C.ref=qn(g,f,h),C.return=g,g=C)}return o(g);case qr:A:{for(m=h.key;f!==null;){if(f.key===m)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(g,f.sibling),f=n(f,h.children||[]),f.return=g,g=f;break A}else{t(g,f);break}else e(g,f);f=f.sibling}f=Pl(h,g.mode,C),f.return=g,g=f}return o(g);case zt:return m=h._init,x(g,f,m(h._payload),C)}if(si(h))return v(g,f,h,C);if(Wn(h))return w(g,f,h,C);Io(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(g,f.sibling),f=n(f,h),f.return=g,g=f):(t(g,f),f=jl(h,g.mode,C),f.return=g,g=f),o(g)):t(g,f)}return x}var xn=aB(!0),sB=aB(!1),uo={},vt=pr(uo),Ji=pr(uo),Yi=pr(uo);function yr(A){if(A===uo)throw Error(L(174));return A}function kd(A,e){switch(fA(Yi,e),fA(Ji,A),fA(vt,uo),A=e.nodeType,A){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:A=A===8?e.parentNode:e,e=A.namespaceURI||null,A=A.tagName,e=Lc(e,A)}vA(vt),fA(vt,e)}function En(){vA(vt),vA(Ji),vA(Yi)}function lB(A){yr(Yi.current);var e=yr(vt.current),t=Lc(e,A.type);e!==t&&(fA(Ji,A),fA(vt,t))}function Id(A){Ji.current===A&&(vA(vt),vA(Ji))}var UA=pr(0);function Za(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dl=[];function Ld(){for(var A=0;A<Dl.length;A++)Dl[A]._workInProgressVersionPrimary=null;Dl.length=0}var ha=Nt.ReactCurrentDispatcher,Kl=Nt.ReactCurrentBatchConfig,Kr=0,xA=null,NA=null,zA=null,qa=!1,Ei=!1,Zi=0,nm=0;function ee(){throw Error(L(321))}function Sd(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!st(A[t],e[t]))return!1;return!0}function _d(A,e,t,r,n,i){if(Kr=i,xA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ha.current=A===null||A.memoizedState===null?sm:lm,A=t(r,n),Ei){i=0;do{if(Ei=!1,Zi=0,25<=i)throw Error(L(301));i+=1,zA=NA=null,e.updateQueue=null,ha.current=cm,A=t(r,n)}while(Ei)}if(ha.current=As,e=NA!==null&&NA.next!==null,Kr=0,zA=NA=xA=null,qa=!1,e)throw Error(L(300));return A}function Md(){var A=Zi!==0;return Zi=0,A}function ft(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zA===null?xA.memoizedState=zA=A:zA=zA.next=A,zA}function ze(){if(NA===null){var A=xA.alternate;A=A!==null?A.memoizedState:null}else A=NA.next;var e=zA===null?xA.memoizedState:zA.next;if(e!==null)zA=e,NA=A;else{if(A===null)throw Error(L(310));NA=A,A={memoizedState:NA.memoizedState,baseState:NA.baseState,baseQueue:NA.baseQueue,queue:NA.queue,next:null},zA===null?xA.memoizedState=zA=A:zA=zA.next=A}return zA}function qi(A,e){return typeof e=="function"?e(A):e}function Tl(A){var e=ze(),t=e.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=A;var r=NA,n=r.baseQueue,i=t.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}r.baseQueue=n=i,t.pending=null}if(n!==null){i=n.next,r=r.baseState;var a=o=null,s=null,l=i;do{var c=l.lane;if((Kr&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:A(r,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};s===null?(a=s=u,o=r):s=s.next=u,xA.lanes|=c,Tr|=c}l=l.next}while(l!==null&&l!==i);s===null?o=r:s.next=a,st(r,e.memoizedState)||(Be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=s,t.lastRenderedState=r}if(A=t.interleaved,A!==null){n=A;do i=n.lane,xA.lanes|=i,Tr|=i,n=n.next;while(n!==A)}else n===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nl(A){var e=ze(),t=e.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=A;var r=t.dispatch,n=t.pending,i=e.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do i=A(i,o.action),o=o.next;while(o!==n);st(i,e.memoizedState)||(Be=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function cB(){}function uB(A,e){var t=xA,r=ze(),n=e(),i=!st(r.memoizedState,n);if(i&&(r.memoizedState=n,Be=!0),r=r.queue,Dd(gB.bind(null,t,r,A),[A]),r.getSnapshot!==e||i||zA!==null&&zA.memoizedState.tag&1){if(t.flags|=2048,Ao(9,fB.bind(null,t,r,n,e),void 0,null),WA===null)throw Error(L(349));Kr&30||dB(t,e,n)}return n}function dB(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=xA.updateQueue,e===null?(e={lastEffect:null,stores:null},xA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function fB(A,e,t,r){e.value=t,e.getSnapshot=r,pB(e)&&hB(A)}function gB(A,e,t){return t(function(){pB(e)&&hB(A)})}function pB(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!st(A,t)}catch{return!0}}function hB(A){var e=Dt(A,1);e!==null&&it(e,A,1,-1)}function u1(A){var e=ft();return typeof A=="function"&&(A=A()),e.memoizedState=e.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:A},e.queue=A,A=A.dispatch=am.bind(null,xA,A),[e.memoizedState,A]}function Ao(A,e,t,r){return A={tag:A,create:e,destroy:t,deps:r,next:null},e=xA.updateQueue,e===null?(e={lastEffect:null,stores:null},xA.updateQueue=e,e.lastEffect=A.next=A):(t=e.lastEffect,t===null?e.lastEffect=A.next=A:(r=t.next,t.next=A,A.next=r,e.lastEffect=A)),A}function BB(){return ze().memoizedState}function Ba(A,e,t,r){var n=ft();xA.flags|=A,n.memoizedState=Ao(1|e,t,void 0,r===void 0?null:r)}function _s(A,e,t,r){var n=ze();r=r===void 0?null:r;var i=void 0;if(NA!==null){var o=NA.memoizedState;if(i=o.destroy,r!==null&&Sd(r,o.deps)){n.memoizedState=Ao(e,t,i,r);return}}xA.flags|=A,n.memoizedState=Ao(1|e,t,i,r)}function d1(A,e){return Ba(8390656,8,A,e)}function Dd(A,e){return _s(2048,8,A,e)}function vB(A,e){return _s(4,2,A,e)}function wB(A,e){return _s(4,4,A,e)}function mB(A,e){if(typeof e=="function")return A=A(),e(A),function(){e(null)};if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function CB(A,e,t){return t=t!=null?t.concat([A]):null,_s(4,4,mB.bind(null,e,A),t)}function Kd(){}function QB(A,e){var t=ze();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(t.memoizedState=[A,e],A)}function yB(A,e){var t=ze();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(A=A(),t.memoizedState=[A,e],A)}function FB(A,e,t){return Kr&21?(st(t,e)||(t=Eh(),xA.lanes|=t,Tr|=t,A.baseState=!0),e):(A.baseState&&(A.baseState=!1,Be=!0),A.memoizedState=t)}function im(A,e){var t=lA;lA=t!==0&&4>t?t:4,A(!0);var r=Kl.transition;Kl.transition={};try{A(!1),e()}finally{lA=t,Kl.transition=r}}function UB(){return ze().memoizedState}function om(A,e,t){var r=ar(A);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},xB(A))EB(e,t);else if(t=rB(A,e,t,r),t!==null){var n=ue();it(t,A,r,n),bB(t,e,r)}}function am(A,e,t){var r=ar(A),n={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(xB(A))EB(e,n);else{var i=A.alternate;if(A.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,t);if(n.hasEagerState=!0,n.eagerState=a,st(a,o)){var s=e.interleaved;s===null?(n.next=n,bd(e)):(n.next=s.next,s.next=n),e.interleaved=n;return}}catch{}finally{}t=rB(A,e,n,r),t!==null&&(n=ue(),it(t,A,r,n),bB(t,e,r))}}function xB(A){var e=A.alternate;return A===xA||e!==null&&e===xA}function EB(A,e){Ei=qa=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function bB(A,e,t){if(t&4194240){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,gd(A,t)}}var As={readContext:Ve,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},sm={readContext:Ve,useCallback:function(A,e){return ft().memoizedState=[A,e===void 0?null:e],A},useContext:Ve,useEffect:d1,useImperativeHandle:function(A,e,t){return t=t!=null?t.concat([A]):null,Ba(4194308,4,mB.bind(null,e,A),t)},useLayoutEffect:function(A,e){return Ba(4194308,4,A,e)},useInsertionEffect:function(A,e){return Ba(4,2,A,e)},useMemo:function(A,e){var t=ft();return e=e===void 0?null:e,A=A(),t.memoizedState=[A,e],A},useReducer:function(A,e,t){var r=ft();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:e},r.queue=A,A=A.dispatch=om.bind(null,xA,A),[r.memoizedState,A]},useRef:function(A){var e=ft();return A={current:A},e.memoizedState=A},useState:u1,useDebugValue:Kd,useDeferredValue:function(A){return ft().memoizedState=A},useTransition:function(){var A=u1(!1),e=A[0];return A=im.bind(null,A[1]),ft().memoizedState=A,[e,A]},useMutableSource:function(){},useSyncExternalStore:function(A,e,t){var r=xA,n=ft();if(yA){if(t===void 0)throw Error(L(407));t=t()}else{if(t=e(),WA===null)throw Error(L(349));Kr&30||dB(r,e,t)}n.memoizedState=t;var i={value:t,getSnapshot:e};return n.queue=i,d1(gB.bind(null,r,i,A),[A]),r.flags|=2048,Ao(9,fB.bind(null,r,i,t,e),void 0,null),t},useId:function(){var A=ft(),e=WA.identifierPrefix;if(yA){var t=kt,r=Ht;t=(r&~(1<<32-nt(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Zi++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=nm++,e=":"+e+"r"+t.toString(32)+":";return A.memoizedState=e},unstable_isNewReconciler:!1},lm={readContext:Ve,useCallback:QB,useContext:Ve,useEffect:Dd,useImperativeHandle:CB,useInsertionEffect:vB,useLayoutEffect:wB,useMemo:yB,useReducer:Tl,useRef:BB,useState:function(){return Tl(qi)},useDebugValue:Kd,useDeferredValue:function(A){var e=ze();return FB(e,NA.memoizedState,A)},useTransition:function(){var A=Tl(qi)[0],e=ze().memoizedState;return[A,e]},useMutableSource:cB,useSyncExternalStore:uB,useId:UB,unstable_isNewReconciler:!1},cm={readContext:Ve,useCallback:QB,useContext:Ve,useEffect:Dd,useImperativeHandle:CB,useInsertionEffect:vB,useLayoutEffect:wB,useMemo:yB,useReducer:Nl,useRef:BB,useState:function(){return Nl(qi)},useDebugValue:Kd,useDeferredValue:function(A){var e=ze();return NA===null?e.memoizedState=A:FB(e,NA.memoizedState,A)},useTransition:function(){var A=Nl(qi)[0],e=ze().memoizedState;return[A,e]},useMutableSource:cB,useSyncExternalStore:uB,useId:UB,unstable_isNewReconciler:!1};function bn(A,e){try{var t="",r=e;do t+=Tv(r),r=r.return;while(r);var n=t}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:A,source:e,stack:n,digest:null}}function Rl(A,e,t){return{value:A,source:null,stack:t??null,digest:e??null}}function eu(A,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var um=typeof WeakMap=="function"?WeakMap:Map;function HB(A,e,t){t=It(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ts||(ts=!0,uu=r),eu(A,e)},t}function kB(A,e,t){t=It(-1,t),t.tag=3;var r=A.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;t.payload=function(){return r(n)},t.callback=function(){eu(A,e)}}var i=A.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){eu(A,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function f1(A,e,t){var r=A.pingCache;if(r===null){r=A.pingCache=new um;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(t)||(n.add(t),A=Um.bind(null,A,e,t),e.then(A,A))}function g1(A){do{var e;if((e=A.tag===13)&&(e=A.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return A;A=A.return}while(A!==null);return null}function p1(A,e,t,r,n){return A.mode&1?(A.flags|=65536,A.lanes=n,A):(A===e?A.flags|=65536:(A.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=It(-1,1),e.tag=2,ir(t,e,1))),t.lanes|=1),A)}var dm=Nt.ReactCurrentOwner,Be=!1;function le(A,e,t,r){e.child=A===null?sB(e,null,t,r):xn(e,A.child,t,r)}function h1(A,e,t,r,n){t=t.render;var i=e.ref;return wn(e,n),r=_d(A,e,t,r,i,n),t=Md(),A!==null&&!Be?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Kt(A,e,n)):(yA&&t&&Qd(e),e.flags|=1,le(A,e,r,n),e.child)}function B1(A,e,t,r,n){if(A===null){var i=t.type;return typeof i=="function"&&!zd(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,IB(A,e,i,r,n)):(A=Ca(t.type,null,r,e,e.mode,n),A.ref=e.ref,A.return=e,e.child=A)}if(i=A.child,!(A.lanes&n)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Gi,t(o,r)&&A.ref===e.ref)return Kt(A,e,n)}return e.flags|=1,A=sr(i,r),A.ref=e.ref,A.return=e,e.child=A}function IB(A,e,t,r,n){if(A!==null){var i=A.memoizedProps;if(Gi(i,r)&&A.ref===e.ref)if(Be=!1,e.pendingProps=r=i,(A.lanes&n)!==0)A.flags&131072&&(Be=!0);else return e.lanes=A.lanes,Kt(A,e,n)}return tu(A,e,t,r,n)}function LB(A,e,t){var r=e.pendingProps,n=r.children,i=A!==null?A.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fA(un,Ee),Ee|=t;else{if(!(t&1073741824))return A=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:A,cachePool:null,transitions:null},e.updateQueue=null,fA(un,Ee),Ee|=A,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,fA(un,Ee),Ee|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,fA(un,Ee),Ee|=r;return le(A,e,n,t),e.child}function SB(A,e){var t=e.ref;(A===null&&t!==null||A!==null&&A.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tu(A,e,t,r,n){var i=me(t)?Mr:oe.current;return i=Fn(e,i),wn(e,n),t=_d(A,e,t,r,i,n),r=Md(),A!==null&&!Be?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Kt(A,e,n)):(yA&&r&&Qd(e),e.flags|=1,le(A,e,t,n),e.child)}function v1(A,e,t,r,n){if(me(t)){var i=!0;Ga(e)}else i=!1;if(wn(e,n),e.stateNode===null)va(A,e),oB(e,t,r),Au(e,t,r,n),r=!0;else if(A===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var s=o.context,l=t.contextType;typeof l=="object"&&l!==null?l=Ve(l):(l=me(t)?Mr:oe.current,l=Fn(e,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==l)&&l1(e,o,r,l),Gt=!1;var d=e.memoizedState;o.state=d,Ya(e,r,o,n),s=e.memoizedState,a!==r||d!==s||we.current||Gt?(typeof c=="function"&&(qc(e,t,c,r),s=e.memoizedState),(a=Gt||s1(e,t,a,r,d,s,l))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),o.props=r,o.state=s,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nB(A,e),a=e.memoizedProps,l=e.type===e.elementType?a:qe(e.type,a),o.props=l,u=e.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=me(t)?Mr:oe.current,s=Fn(e,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==s)&&l1(e,o,r,s),Gt=!1,d=e.memoizedState,o.state=d,Ya(e,r,o,n);var v=e.memoizedState;a!==u||d!==v||we.current||Gt?(typeof p=="function"&&(qc(e,t,p,r),v=e.memoizedState),(l=Gt||s1(e,t,l,r,d,v,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,s)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=s,r=l):(typeof o.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),r=!1)}return ru(A,e,t,r,i,n)}function ru(A,e,t,r,n,i){SB(A,e);var o=(e.flags&128)!==0;if(!r&&!o)return n&&r1(e,t,!1),Kt(A,e,i);r=e.stateNode,dm.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,A!==null&&o?(e.child=xn(e,A.child,null,i),e.child=xn(e,null,a,i)):le(A,e,a,i),e.memoizedState=r.state,n&&r1(e,t,!0),e.child}function _B(A){var e=A.stateNode;e.pendingContext?t1(A,e.pendingContext,e.pendingContext!==e.context):e.context&&t1(A,e.context,!1),kd(A,e.containerInfo)}function w1(A,e,t,r,n){return Un(),Fd(n),e.flags|=256,le(A,e,t,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(A){return{baseLanes:A,cachePool:null,transitions:null}}function MB(A,e,t){var r=e.pendingProps,n=UA.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=A!==null&&A.memoizedState===null?!1:(n&2)!==0),a?(i=!0,e.flags&=-129):(A===null||A.memoizedState!==null)&&(n|=1),fA(UA,n&1),A===null)return Yc(e),A=e.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(e.mode&1?A.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,A=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ks(o,r,0,null),A=br(A,r,t,null),i.return=e,A.return=e,i.sibling=A,e.child=i,e.child.memoizedState=iu(t),e.memoizedState=nu,A):Td(e,o));if(n=A.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return fm(A,e,o,r,a,n,t);if(i){i=r.fallback,o=e.mode,n=A.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=sr(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?i=sr(a,i):(i=br(i,o,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=A.child.memoizedState,o=o===null?iu(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=A.childLanes&~t,e.memoizedState=nu,r}return i=A.child,A=i.sibling,r=sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,A!==null&&(t=e.deletions,t===null?(e.deletions=[A],e.flags|=16):t.push(A)),e.child=r,e.memoizedState=null,r}function Td(A,e){return e=Ks({mode:"visible",children:e},A.mode,0,null),e.return=A,A.child=e}function Lo(A,e,t,r){return r!==null&&Fd(r),xn(e,A.child,null,t),A=Td(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function fm(A,e,t,r,n,i,o){if(t)return e.flags&256?(e.flags&=-257,r=Rl(Error(L(422))),Lo(A,e,o,r)):e.memoizedState!==null?(e.child=A.child,e.flags|=128,null):(i=r.fallback,n=e.mode,r=Ks({mode:"visible",children:r.children},n,0,null),i=br(i,n,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&xn(e,A.child,null,o),e.child.memoizedState=iu(o),e.memoizedState=nu,i);if(!(e.mode&1))return Lo(A,e,o,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(L(419)),r=Rl(i,r,void 0),Lo(A,e,o,r)}if(a=(o&A.childLanes)!==0,Be||a){if(r=WA,r!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|o)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Dt(A,n),it(r,A,n,-1))}return Vd(),r=Rl(Error(L(421))),Lo(A,e,o,r)}return n.data==="$?"?(e.flags|=128,e.child=A.child,e=xm.bind(null,A),n._reactRetry=e,null):(A=i.treeContext,be=nr(n.nextSibling),He=e,yA=!0,et=null,A!==null&&(De[Ke++]=Ht,De[Ke++]=kt,De[Ke++]=Dr,Ht=A.id,kt=A.overflow,Dr=e),e=Td(e,r.children),e.flags|=4096,e)}function m1(A,e,t){A.lanes|=e;var r=A.alternate;r!==null&&(r.lanes|=e),Zc(A.return,e,t)}function Ol(A,e,t,r,n){var i=A.memoizedState;i===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=n)}function DB(A,e,t){var r=e.pendingProps,n=r.revealOrder,i=r.tail;if(le(A,e,r.children,t),r=UA.current,r&2)r=r&1|2,e.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&m1(A,t,e);else if(A.tag===19)m1(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}r&=1}if(fA(UA,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(t=e.child,n=null;t!==null;)A=t.alternate,A!==null&&Za(A)===null&&(n=t),t=t.sibling;t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),Ol(e,!1,n,t,i);break;case"backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(A=n.alternate,A!==null&&Za(A)===null){e.child=n;break}A=n.sibling,n.sibling=t,t=n,n=A}Ol(e,!0,t,null,i);break;case"together":Ol(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(A,e){!(e.mode&1)&&A!==null&&(A.alternate=null,e.alternate=null,e.flags|=2)}function Kt(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Tr|=e.lanes,!(t&e.childLanes))return null;if(A!==null&&e.child!==A.child)throw Error(L(153));if(e.child!==null){for(A=e.child,t=sr(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=sr(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function gm(A,e,t){switch(e.tag){case 3:_B(e),Un();break;case 5:lB(e);break;case 1:me(e.type)&&Ga(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;fA(Xa,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fA(UA,UA.current&1),e.flags|=128,null):t&e.child.childLanes?MB(A,e,t):(fA(UA,UA.current&1),A=Kt(A,e,t),A!==null?A.sibling:null);fA(UA,UA.current&1);break;case 19:if(r=(t&e.childLanes)!==0,A.flags&128){if(r)return DB(A,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),fA(UA,UA.current),r)break;return null;case 22:case 23:return e.lanes=0,LB(A,e,t)}return Kt(A,e,t)}var KB,ou,TB,NB;KB=function(A,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)A.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ou=function(){};TB=function(A,e,t,r){var n=A.memoizedProps;if(n!==r){A=e.stateNode,yr(vt.current);var i=null;switch(t){case"input":n=bc(A,n),r=bc(A,r),i=[];break;case"select":n=EA({},n,{value:void 0}),r=EA({},r,{value:void 0}),i=[];break;case"textarea":n=Ic(A,n),r=Ic(A,r),i=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(A.onclick=Va)}Sc(t,r);var o;t=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var a=n[l];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ni.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var s=r[l];if(a=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(l,t)),t=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(l,s)):l==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(l)?(s!=null&&l==="onScroll"&&pA("scroll",A),i||a===s||(i=[])):(i=i||[]).push(l,s))}t&&(i=i||[]).push("style",t);var l=i;(e.updateQueue=l)&&(e.flags|=4)}};NB=function(A,e,t,r){t!==r&&(e.flags|=4)};function Ai(A,e){if(!yA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:r.sibling=null}}function te(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,r=0;if(e)for(var n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=A,n=n.sibling;else for(n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=A,n=n.sibling;return A.subtreeFlags|=r,A.childLanes=t,e}function pm(A,e,t){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(e),null;case 1:return me(e.type)&&za(),te(e),null;case 3:return r=e.stateNode,En(),vA(we),vA(oe),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(A===null||A.child===null)&&(ko(e)?e.flags|=4:A===null||A.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,et!==null&&(gu(et),et=null))),ou(A,e),te(e),null;case 5:Id(e);var n=yr(Yi.current);if(t=e.type,A!==null&&e.stateNode!=null)TB(A,e,t,r,n),A.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return te(e),null}if(A=yr(vt.current),ko(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[ht]=e,r[Xi]=i,A=(e.mode&1)!==0,t){case"dialog":pA("cancel",r),pA("close",r);break;case"iframe":case"object":case"embed":pA("load",r);break;case"video":case"audio":for(n=0;n<ci.length;n++)pA(ci[n],r);break;case"source":pA("error",r);break;case"img":case"image":case"link":pA("error",r),pA("load",r);break;case"details":pA("toggle",r);break;case"input":Hf(r,i),pA("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pA("invalid",r);break;case"textarea":If(r,i),pA("invalid",r)}Sc(t,i),n=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,A),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,A),n=["children",""+a]):Ni.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pA("scroll",r)}switch(t){case"input":Co(r),kf(r,i,!0);break;case"textarea":Co(r),Lf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Va)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=dh(t)),A==="http://www.w3.org/1999/xhtml"?t==="script"?(A=o.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof r.is=="string"?A=o.createElement(t,{is:r.is}):(A=o.createElement(t),t==="select"&&(o=A,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):A=o.createElementNS(A,t),A[ht]=e,A[Xi]=r,KB(A,e,!1,!1),e.stateNode=A;A:{switch(o=_c(t,r),t){case"dialog":pA("cancel",A),pA("close",A),n=r;break;case"iframe":case"object":case"embed":pA("load",A),n=r;break;case"video":case"audio":for(n=0;n<ci.length;n++)pA(ci[n],A);n=r;break;case"source":pA("error",A),n=r;break;case"img":case"image":case"link":pA("error",A),pA("load",A),n=r;break;case"details":pA("toggle",A),n=r;break;case"input":Hf(A,r),n=bc(A,r),pA("invalid",A);break;case"option":n=r;break;case"select":A._wrapperState={wasMultiple:!!r.multiple},n=EA({},r,{value:void 0}),pA("invalid",A);break;case"textarea":If(A,r),n=Ic(A,r),pA("invalid",A);break;default:n=r}Sc(t,n),a=n;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ph(A,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fh(A,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ri(A,s):typeof s=="number"&&Ri(A,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ni.hasOwnProperty(i)?s!=null&&i==="onScroll"&&pA("scroll",A):s!=null&&sd(A,i,s,o))}switch(t){case"input":Co(A),kf(A,r,!1);break;case"textarea":Co(A),Lf(A);break;case"option":r.value!=null&&A.setAttribute("value",""+ur(r.value));break;case"select":A.multiple=!!r.multiple,i=r.value,i!=null?pn(A,!!r.multiple,i,!1):r.defaultValue!=null&&pn(A,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(A.onclick=Va)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break A;case"img":r=!0;break A;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return te(e),null;case 6:if(A&&e.stateNode!=null)NB(A,e,A.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(t=yr(Yi.current),yr(vt.current),ko(e)){if(r=e.stateNode,t=e.memoizedProps,r[ht]=e,(i=r.nodeValue!==t)&&(A=He,A!==null))switch(A.tag){case 3:Ho(r.nodeValue,t,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,t,(A.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return te(e),null;case 13:if(vA(UA),r=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(yA&&be!==null&&e.mode&1&&!(e.flags&128))tB(),Un(),e.flags|=98560,i=!1;else if(i=ko(e),r!==null&&r.dehydrated!==null){if(A===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[ht]=e}else Un(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;te(e),i=!1}else et!==null&&(gu(et),et=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(A!==null&&A.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(A===null||UA.current&1?OA===0&&(OA=3):Vd())),e.updateQueue!==null&&(e.flags|=4),te(e),null);case 4:return En(),ou(A,e),A===null&&$i(e.stateNode.containerInfo),te(e),null;case 10:return Ed(e.type._context),te(e),null;case 17:return me(e.type)&&za(),te(e),null;case 19:if(vA(UA),i=e.memoizedState,i===null)return te(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ai(i,!1);else{if(OA!==0||A!==null&&A.flags&128)for(A=e.child;A!==null;){if(o=Za(A),o!==null){for(e.flags|=128,Ai(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,A=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=A,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,A=o.dependencies,i.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),t=t.sibling;return fA(UA,UA.current&1|2),e.child}A=A.sibling}i.tail!==null&&LA()>Hn&&(e.flags|=128,r=!0,Ai(i,!1),e.lanes=4194304)}else{if(!r)if(A=Za(o),A!==null){if(e.flags|=128,r=!0,t=A.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ai(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!yA)return te(e),null}else 2*LA()-i.renderingStartTime>Hn&&t!==1073741824&&(e.flags|=128,r=!0,Ai(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=LA(),e.sibling=null,t=UA.current,fA(UA,r?t&1|2:t&1),e):(te(e),null);case 22:case 23:return Pd(),r=e.memoizedState!==null,A!==null&&A.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(te(e),e.subtreeFlags&6&&(e.flags|=8192)):te(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function hm(A,e){switch(yd(e),e.tag){case 1:return me(e.type)&&za(),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return En(),vA(we),vA(oe),Ld(),A=e.flags,A&65536&&!(A&128)?(e.flags=A&-65537|128,e):null;case 5:return Id(e),null;case 13:if(vA(UA),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Un()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return vA(UA),null;case 4:return En(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var So=!1,ie=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,j=null;function cn(A,e){var t=A.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){HA(A,e,r)}else t.current=null}function au(A,e,t){try{t()}catch(r){HA(A,e,r)}}var C1=!1;function vm(A,e){if(Vc=Oa,A=Ph(),Cd(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var n=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break A}var o=0,a=-1,s=-1,l=0,c=0,u=A,d=null;e:for(;;){for(var p;u!==t||n!==0&&u.nodeType!==3||(a=o+n),u!==i||r!==0&&u.nodeType!==3||(s=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===A)break e;if(d===t&&++l===n&&(a=o),d===i&&++c===r&&(s=o),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zc={focusedElem:A,selectionRange:t},Oa=!1,j=e;j!==null;)if(e=j,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,j=A;else for(;j!==null;){e=j;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:qe(e.type,w),x);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(C){HA(e,e.return,C)}if(A=e.sibling,A!==null){A.return=e.return,j=A;break}j=e.return}return v=C1,C1=!1,v}function bi(A,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&A)===A){var i=n.destroy;n.destroy=void 0,i!==void 0&&au(e,t,i)}n=n.next}while(n!==r)}}function Ms(A,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function su(A){var e=A.ref;if(e!==null){var t=A.stateNode;switch(A.tag){case 5:A=t;break;default:A=t}typeof e=="function"?e(A):e.current=A}}function RB(A){var e=A.alternate;e!==null&&(A.alternate=null,RB(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&(delete e[ht],delete e[Xi],delete e[Wc],delete e[Am],delete e[em])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function OB(A){return A.tag===5||A.tag===3||A.tag===4}function Q1(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||OB(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function lu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(A,e):t.insertBefore(A,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(A,t)):(e=t,e.appendChild(A)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Va));else if(r!==4&&(A=A.child,A!==null))for(lu(A,e,t),A=A.sibling;A!==null;)lu(A,e,t),A=A.sibling}function cu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(r!==4&&(A=A.child,A!==null))for(cu(A,e,t),A=A.sibling;A!==null;)cu(A,e,t),A=A.sibling}var XA=null,At=!1;function Rt(A,e,t){for(t=t.child;t!==null;)jB(A,e,t),t=t.sibling}function jB(A,e,t){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Es,t)}catch{}switch(t.tag){case 5:ie||cn(t,e);case 6:var r=XA,n=At;XA=null,Rt(A,e,t),XA=r,At=n,XA!==null&&(At?(A=XA,t=t.stateNode,A.nodeType===8?A.parentNode.removeChild(t):A.removeChild(t)):XA.removeChild(t.stateNode));break;case 18:XA!==null&&(At?(A=XA,t=t.stateNode,A.nodeType===8?_l(A.parentNode,t):A.nodeType===1&&_l(A,t),Vi(A)):_l(XA,t.stateNode));break;case 4:r=XA,n=At,XA=t.stateNode.containerInfo,At=!0,Rt(A,e,t),XA=r,At=n;break;case 0:case 11:case 14:case 15:if(!ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var i=n,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&au(t,e,o),n=n.next}while(n!==r)}Rt(A,e,t);break;case 1:if(!ie&&(cn(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){HA(t,e,a)}Rt(A,e,t);break;case 21:Rt(A,e,t);break;case 22:t.mode&1?(ie=(r=ie)||t.memoizedState!==null,Rt(A,e,t),ie=r):Rt(A,e,t);break;default:Rt(A,e,t)}}function y1(A){var e=A.updateQueue;if(e!==null){A.updateQueue=null;var t=A.stateNode;t===null&&(t=A.stateNode=new Bm),e.forEach(function(r){var n=Em.bind(null,A,r);t.has(r)||(t.add(r),r.then(n,n))})}}function Xe(A,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];try{var i=A,o=e,a=o;A:for(;a!==null;){switch(a.tag){case 5:XA=a.stateNode,At=!1;break A;case 3:XA=a.stateNode.containerInfo,At=!0;break A;case 4:XA=a.stateNode.containerInfo,At=!0;break A}a=a.return}if(XA===null)throw Error(L(160));jB(i,o,n),XA=null,At=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(l){HA(n,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)PB(e,A),e=e.sibling}function PB(A,e){var t=A.alternate,r=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(Xe(e,A),ut(A),r&4){try{bi(3,A,A.return),Ms(3,A)}catch(w){HA(A,A.return,w)}try{bi(5,A,A.return)}catch(w){HA(A,A.return,w)}}break;case 1:Xe(e,A),ut(A),r&512&&t!==null&&cn(t,t.return);break;case 5:if(Xe(e,A),ut(A),r&512&&t!==null&&cn(t,t.return),A.flags&32){var n=A.stateNode;try{Ri(n,"")}catch(w){HA(A,A.return,w)}}if(r&4&&(n=A.stateNode,n!=null)){var i=A.memoizedProps,o=t!==null?t.memoizedProps:i,a=A.type,s=A.updateQueue;if(A.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ch(n,i),_c(a,o);var l=_c(a,i);for(o=0;o<s.length;o+=2){var c=s[o],u=s[o+1];c==="style"?ph(n,u):c==="dangerouslySetInnerHTML"?fh(n,u):c==="children"?Ri(n,u):sd(n,c,u,l)}switch(a){case"input":Hc(n,i);break;case"textarea":uh(n,i);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?pn(n,!!i.multiple,p,!1):d!==!!i.multiple&&(i.defaultValue!=null?pn(n,!!i.multiple,i.defaultValue,!0):pn(n,!!i.multiple,i.multiple?[]:"",!1))}n[Xi]=i}catch(w){HA(A,A.return,w)}}break;case 6:if(Xe(e,A),ut(A),r&4){if(A.stateNode===null)throw Error(L(162));n=A.stateNode,i=A.memoizedProps;try{n.nodeValue=i}catch(w){HA(A,A.return,w)}}break;case 3:if(Xe(e,A),ut(A),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Vi(e.containerInfo)}catch(w){HA(A,A.return,w)}break;case 4:Xe(e,A),ut(A);break;case 13:Xe(e,A),ut(A),n=A.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(Od=LA())),r&4&&y1(A);break;case 22:if(c=t!==null&&t.memoizedState!==null,A.mode&1?(ie=(l=ie)||c,Xe(e,A),ie=l):Xe(e,A),ut(A),r&8192){if(l=A.memoizedState!==null,(A.stateNode.isHidden=l)&&!c&&A.mode&1)for(j=A,c=A.child;c!==null;){for(u=j=c;j!==null;){switch(d=j,p=d.child,d.tag){case 0:case 11:case 14:case 15:bi(4,d,d.return);break;case 1:cn(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,t=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){HA(r,t,w)}}break;case 5:cn(d,d.return);break;case 22:if(d.memoizedState!==null){U1(u);continue}}p!==null?(p.return=d,j=p):U1(u)}c=c.sibling}A:for(c=null,u=A;;){if(u.tag===5){if(c===null){c=u;try{n=u.stateNode,l?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=u.stateNode,s=u.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gh("display",o))}catch(w){HA(A,A.return,w)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(w){HA(A,A.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===A)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===A)break A;for(;u.sibling===null;){if(u.return===null||u.return===A)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Xe(e,A),ut(A),r&4&&y1(A);break;case 21:break;default:Xe(e,A),ut(A)}}function ut(A){var e=A.flags;if(e&2){try{A:{for(var t=A.return;t!==null;){if(OB(t)){var r=t;break A}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(Ri(n,""),r.flags&=-33);var i=Q1(A);cu(A,i,n);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Q1(A);lu(A,a,o);break;default:throw Error(L(161))}}catch(s){HA(A,A.return,s)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function wm(A,e,t){j=A,VB(A)}function VB(A,e,t){for(var r=(A.mode&1)!==0;j!==null;){var n=j,i=n.child;if(n.tag===22&&r){var o=n.memoizedState!==null||So;if(!o){var a=n.alternate,s=a!==null&&a.memoizedState!==null||ie;a=So;var l=ie;if(So=o,(ie=s)&&!l)for(j=n;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?x1(n):s!==null?(s.return=o,j=s):x1(n);for(;i!==null;)j=i,VB(i),i=i.sibling;j=n,So=a,ie=l}F1(A)}else n.subtreeFlags&8772&&i!==null?(i.return=n,j=i):F1(A)}}function F1(A){for(;j!==null;){var e=j;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ie||Ms(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ie)if(t===null)r.componentDidMount();else{var n=e.elementType===e.type?t.memoizedProps:qe(e.type,t.memoizedProps);r.componentDidUpdate(n,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&a1(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}a1(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&Vi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ie||e.flags&512&&su(e)}catch(d){HA(e,e.return,d)}}if(e===A){j=null;break}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}}function U1(A){for(;j!==null;){var e=j;if(e===A){j=null;break}var t=e.sibling;if(t!==null){t.return=e.return,j=t;break}j=e.return}}function x1(A){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ms(4,e)}catch(s){HA(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(s){HA(e,n,s)}}var i=e.return;try{su(e)}catch(s){HA(e,i,s)}break;case 5:var o=e.return;try{su(e)}catch(s){HA(e,o,s)}}}catch(s){HA(e,e.return,s)}if(e===A){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var mm=Math.ceil,es=Nt.ReactCurrentDispatcher,Nd=Nt.ReactCurrentOwner,je=Nt.ReactCurrentBatchConfig,rA=0,WA=null,TA=null,qA=0,Ee=0,un=pr(0),OA=0,eo=null,Tr=0,Ds=0,Rd=0,Hi=null,he=null,Od=0,Hn=1/0,Ut=null,ts=!1,uu=null,or=null,_o=!1,Yt=null,rs=0,ki=0,du=null,wa=-1,ma=0;function ue(){return rA&6?LA():wa!==-1?wa:wa=LA()}function ar(A){return A.mode&1?rA&2&&qA!==0?qA&-qA:rm.transition!==null?(ma===0&&(ma=Eh()),ma):(A=lA,A!==0||(A=window.event,A=A===void 0?16:_h(A.type)),A):1}function it(A,e,t,r){if(50<ki)throw ki=0,du=null,Error(L(185));so(A,t,r),(!(rA&2)||A!==WA)&&(A===WA&&(!(rA&2)&&(Ds|=t),OA===4&&Xt(A,qA)),Ce(A,r),t===1&&rA===0&&!(e.mode&1)&&(Hn=LA()+500,Ls&&hr()))}function Ce(A,e){var t=A.callbackNode;rw(A,e);var r=Ra(A,A===WA?qA:0);if(r===0)t!==null&&Mf(t),A.callbackNode=null,A.callbackPriority=0;else if(e=r&-r,A.callbackPriority!==e){if(t!=null&&Mf(t),e===1)A.tag===0?tm(E1.bind(null,A)):qh(E1.bind(null,A)),Zw(function(){!(rA&6)&&hr()}),t=null;else{switch(bh(r)){case 1:t=fd;break;case 4:t=Uh;break;case 16:t=Na;break;case 536870912:t=xh;break;default:t=Na}t=ZB(t,zB.bind(null,A))}A.callbackPriority=e,A.callbackNode=t}}function zB(A,e){if(wa=-1,ma=0,rA&6)throw Error(L(327));var t=A.callbackNode;if(mn()&&A.callbackNode!==t)return null;var r=Ra(A,A===WA?qA:0);if(r===0)return null;if(r&30||r&A.expiredLanes||e)e=ns(A,r);else{e=r;var n=rA;rA|=2;var i=$B();(WA!==A||qA!==e)&&(Ut=null,Hn=LA()+500,Er(A,e));do try{ym();break}catch(a){GB(A,a)}while(!0);xd(),es.current=i,rA=n,TA!==null?e=0:(WA=null,qA=0,e=OA)}if(e!==0){if(e===2&&(n=Nc(A),n!==0&&(r=n,e=fu(A,n))),e===1)throw t=eo,Er(A,0),Xt(A,r),Ce(A,LA()),t;if(e===6)Xt(A,r);else{if(n=A.current.alternate,!(r&30)&&!Cm(n)&&(e=ns(A,r),e===2&&(i=Nc(A),i!==0&&(r=i,e=fu(A,i))),e===1))throw t=eo,Er(A,0),Xt(A,r),Ce(A,LA()),t;switch(A.finishedWork=n,A.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:wr(A,he,Ut);break;case 3:if(Xt(A,r),(r&130023424)===r&&(e=Od+500-LA(),10<e)){if(Ra(A,0)!==0)break;if(n=A.suspendedLanes,(n&r)!==r){ue(),A.pingedLanes|=A.suspendedLanes&n;break}A.timeoutHandle=$c(wr.bind(null,A,he,Ut),e);break}wr(A,he,Ut);break;case 4:if(Xt(A,r),(r&4194240)===r)break;for(e=A.eventTimes,n=-1;0<r;){var o=31-nt(r);i=1<<o,o=e[o],o>n&&(n=o),r&=~i}if(r=n,r=LA()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mm(r/1960))-r,10<r){A.timeoutHandle=$c(wr.bind(null,A,he,Ut),r);break}wr(A,he,Ut);break;case 5:wr(A,he,Ut);break;default:throw Error(L(329))}}}return Ce(A,LA()),A.callbackNode===t?zB.bind(null,A):null}function fu(A,e){var t=Hi;return A.current.memoizedState.isDehydrated&&(Er(A,e).flags|=256),A=ns(A,e),A!==2&&(e=he,he=t,e!==null&&gu(e)),A}function gu(A){he===null?he=A:he.push.apply(he,A)}function Cm(A){for(var e=A;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var n=t[r],i=n.getSnapshot;n=n.value;try{if(!st(i(),n))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(A,e){for(e&=~Rd,e&=~Ds,A.suspendedLanes|=e,A.pingedLanes&=~e,A=A.expirationTimes;0<e;){var t=31-nt(e),r=1<<t;A[t]=-1,e&=~r}}function E1(A){if(rA&6)throw Error(L(327));mn();var e=Ra(A,0);if(!(e&1))return Ce(A,LA()),null;var t=ns(A,e);if(A.tag!==0&&t===2){var r=Nc(A);r!==0&&(e=r,t=fu(A,r))}if(t===1)throw t=eo,Er(A,0),Xt(A,e),Ce(A,LA()),t;if(t===6)throw Error(L(345));return A.finishedWork=A.current.alternate,A.finishedLanes=e,wr(A,he,Ut),Ce(A,LA()),null}function jd(A,e){var t=rA;rA|=1;try{return A(e)}finally{rA=t,rA===0&&(Hn=LA()+500,Ls&&hr())}}function Nr(A){Yt!==null&&Yt.tag===0&&!(rA&6)&&mn();var e=rA;rA|=1;var t=je.transition,r=lA;try{if(je.transition=null,lA=1,A)return A()}finally{lA=r,je.transition=t,rA=e,!(rA&6)&&hr()}}function Pd(){Ee=un.current,vA(un)}function Er(A,e){A.finishedWork=null,A.finishedLanes=0;var t=A.timeoutHandle;if(t!==-1&&(A.timeoutHandle=-1,Yw(t)),TA!==null)for(t=TA.return;t!==null;){var r=t;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:En(),vA(we),vA(oe),Ld();break;case 5:Id(r);break;case 4:En();break;case 13:vA(UA);break;case 19:vA(UA);break;case 10:Ed(r.type._context);break;case 22:case 23:Pd()}t=t.return}if(WA=A,TA=A=sr(A.current,null),qA=Ee=e,OA=0,eo=null,Rd=Ds=Tr=0,he=Hi=null,Qr!==null){for(e=0;e<Qr.length;e++)if(t=Qr[e],r=t.interleaved,r!==null){t.interleaved=null;var n=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=n,r.next=o}t.pending=r}Qr=null}return A}function GB(A,e){do{var t=TA;try{if(xd(),ha.current=As,qa){for(var r=xA.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}qa=!1}if(Kr=0,zA=NA=xA=null,Ei=!1,Zi=0,Nd.current=null,t===null||t.return===null){OA=1,eo=e,TA=null;break}A:{var i=A,o=t.return,a=t,s=e;if(e=qA,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var l=s,c=a,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=g1(o);if(p!==null){p.flags&=-257,p1(p,o,a,i,e),p.mode&1&&f1(i,l,e),e=p,s=l;var v=e.updateQueue;if(v===null){var w=new Set;w.add(s),e.updateQueue=w}else v.add(s);break A}else{if(!(e&1)){f1(i,l,e),Vd();break A}s=Error(L(426))}}else if(yA&&a.mode&1){var x=g1(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),p1(x,o,a,i,e),Fd(bn(s,a));break A}}i=s=bn(s,a),OA!==4&&(OA=2),Hi===null?Hi=[i]:Hi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var g=HB(i,s,e);o1(i,g);break A;case 1:a=s;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(or===null||!or.has(h)))){i.flags|=65536,e&=-e,i.lanes|=e;var C=kB(i,a,e);o1(i,C);break A}}i=i.return}while(i!==null)}XB(t)}catch(F){e=F,TA===t&&t!==null&&(TA=t=t.return);continue}break}while(!0)}function $B(){var A=es.current;return es.current=As,A===null?As:A}function Vd(){(OA===0||OA===3||OA===2)&&(OA=4),WA===null||!(Tr&268435455)&&!(Ds&268435455)||Xt(WA,qA)}function ns(A,e){var t=rA;rA|=2;var r=$B();(WA!==A||qA!==e)&&(Ut=null,Er(A,e));do try{Qm();break}catch(n){GB(A,n)}while(!0);if(xd(),rA=t,es.current=r,TA!==null)throw Error(L(261));return WA=null,qA=0,OA}function Qm(){for(;TA!==null;)WB(TA)}function ym(){for(;TA!==null&&!Wv();)WB(TA)}function WB(A){var e=YB(A.alternate,A,Ee);A.memoizedProps=A.pendingProps,e===null?XB(A):TA=e,Nd.current=null}function XB(A){var e=A;do{var t=e.alternate;if(A=e.return,e.flags&32768){if(t=hm(t,e),t!==null){t.flags&=32767,TA=t;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{OA=6,TA=null;return}}else if(t=pm(t,e,Ee),t!==null){TA=t;return}if(e=e.sibling,e!==null){TA=e;return}TA=e=A}while(e!==null);OA===0&&(OA=5)}function wr(A,e,t){var r=lA,n=je.transition;try{je.transition=null,lA=1,Fm(A,e,t,r)}finally{je.transition=n,lA=r}return null}function Fm(A,e,t,r){do mn();while(Yt!==null);if(rA&6)throw Error(L(327));t=A.finishedWork;var n=A.finishedLanes;if(t===null)return null;if(A.finishedWork=null,A.finishedLanes=0,t===A.current)throw Error(L(177));A.callbackNode=null,A.callbackPriority=0;var i=t.lanes|t.childLanes;if(nw(A,i),A===WA&&(TA=WA=null,qA=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_o||(_o=!0,ZB(Na,function(){return mn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=lA;lA=1;var a=rA;rA|=4,Nd.current=null,vm(A,t),PB(t,A),Vw(zc),Oa=!!Vc,zc=Vc=null,A.current=t,wm(t),Xv(),rA=a,lA=o,je.transition=i}else A.current=t;if(_o&&(_o=!1,Yt=A,rs=n),i=A.pendingLanes,i===0&&(or=null),Zv(t.stateNode),Ce(A,LA()),e!==null)for(r=A.onRecoverableError,t=0;t<e.length;t++)n=e[t],r(n.value,{componentStack:n.stack,digest:n.digest});if(ts)throw ts=!1,A=uu,uu=null,A;return rs&1&&A.tag!==0&&mn(),i=A.pendingLanes,i&1?A===du?ki++:(ki=0,du=A):ki=0,hr(),null}function mn(){if(Yt!==null){var A=bh(rs),e=je.transition,t=lA;try{if(je.transition=null,lA=16>A?16:A,Yt===null)var r=!1;else{if(A=Yt,Yt=null,rs=0,rA&6)throw Error(L(331));var n=rA;for(rA|=4,j=A.current;j!==null;){var i=j,o=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var l=a[s];for(j=l;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:bi(8,c,i)}var u=c.child;if(u!==null)u.return=c,j=u;else for(;j!==null;){c=j;var d=c.sibling,p=c.return;if(RB(c),c===l){j=null;break}if(d!==null){d.return=p,j=d;break}j=p}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}j=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,j=o;else A:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,j=g;break A}j=i.return}}var f=A.current;for(j=f;j!==null;){o=j;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,j=h;else A:for(o=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ms(9,a)}}catch(F){HA(a,a.return,F)}if(a===o){j=null;break A}var C=a.sibling;if(C!==null){C.return=a.return,j=C;break A}j=a.return}}if(rA=n,hr(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Es,A)}catch{}r=!0}return r}finally{lA=t,je.transition=e}}return!1}function b1(A,e,t){e=bn(t,e),e=HB(A,e,1),A=ir(A,e,1),e=ue(),A!==null&&(so(A,1,e),Ce(A,e))}function HA(A,e,t){if(A.tag===3)b1(A,A,t);else for(;e!==null;){if(e.tag===3){b1(e,A,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){A=bn(t,A),A=kB(e,A,1),e=ir(e,A,1),A=ue(),e!==null&&(so(e,1,A),Ce(e,A));break}}e=e.return}}function Um(A,e,t){var r=A.pingCache;r!==null&&r.delete(e),e=ue(),A.pingedLanes|=A.suspendedLanes&t,WA===A&&(qA&t)===t&&(OA===4||OA===3&&(qA&130023424)===qA&&500>LA()-Od?Er(A,0):Rd|=t),Ce(A,e)}function JB(A,e){e===0&&(A.mode&1?(e=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):e=1);var t=ue();A=Dt(A,e),A!==null&&(so(A,e,t),Ce(A,t))}function xm(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),JB(A,t)}function Em(A,e){var t=0;switch(A.tag){case 13:var r=A.stateNode,n=A.memoizedState;n!==null&&(t=n.retryLane);break;case 19:r=A.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),JB(A,t)}var YB;YB=function(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps||we.current)Be=!0;else{if(!(A.lanes&t)&&!(e.flags&128))return Be=!1,gm(A,e,t);Be=!!(A.flags&131072)}else Be=!1,yA&&e.flags&1048576&&AB(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;va(A,e),A=e.pendingProps;var n=Fn(e,oe.current);wn(e,t),n=_d(null,e,r,A,n,t);var i=Md();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,me(r)?(i=!0,Ga(e)):i=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Hd(e),n.updater=Ss,e.stateNode=n,n._reactInternals=e,Au(e,r,A,t),e=ru(null,e,r,!0,i,t)):(e.tag=0,yA&&i&&Qd(e),le(null,e,n,t),e=e.child),e;case 16:r=e.elementType;A:{switch(va(A,e),A=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=Hm(r),A=qe(r,A),n){case 0:e=tu(null,e,r,A,t);break A;case 1:e=v1(null,e,r,A,t);break A;case 11:e=h1(null,e,r,A,t);break A;case 14:e=B1(null,e,r,qe(r.type,A),t);break A}throw Error(L(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:qe(r,n),tu(A,e,r,n,t);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:qe(r,n),v1(A,e,r,n,t);case 3:A:{if(_B(e),A===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,n=i.element,nB(A,e),Ya(e,r,null,t);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){n=bn(Error(L(423)),e),e=w1(A,e,r,t,n);break A}else if(r!==n){n=bn(Error(L(424)),e),e=w1(A,e,r,t,n);break A}else for(be=nr(e.stateNode.containerInfo.firstChild),He=e,yA=!0,et=null,t=sB(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Un(),r===n){e=Kt(A,e,t);break A}le(A,e,r,t)}e=e.child}return e;case 5:return lB(e),A===null&&Yc(e),r=e.type,n=e.pendingProps,i=A!==null?A.memoizedProps:null,o=n.children,Gc(r,n)?o=null:i!==null&&Gc(r,i)&&(e.flags|=32),SB(A,e),le(A,e,o,t),e.child;case 6:return A===null&&Yc(e),null;case 13:return MB(A,e,t);case 4:return kd(e,e.stateNode.containerInfo),r=e.pendingProps,A===null?e.child=xn(e,null,r,t):le(A,e,r,t),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:qe(r,n),h1(A,e,r,n,t);case 7:return le(A,e,e.pendingProps,t),e.child;case 8:return le(A,e,e.pendingProps.children,t),e.child;case 12:return le(A,e,e.pendingProps.children,t),e.child;case 10:A:{if(r=e.type._context,n=e.pendingProps,i=e.memoizedProps,o=n.value,fA(Xa,r._currentValue),r._currentValue=o,i!==null)if(st(i.value,o)){if(i.children===n.children&&!we.current){e=Kt(A,e,t);break A}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=It(-1,t&-t),s.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Zc(i.return,t,e),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Zc(o,t,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}le(A,e,n.children,t),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,wn(e,t),n=Ve(n),r=r(n),e.flags|=1,le(A,e,r,t),e.child;case 14:return r=e.type,n=qe(r,e.pendingProps),n=qe(r.type,n),B1(A,e,r,n,t);case 15:return IB(A,e,e.type,e.pendingProps,t);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:qe(r,n),va(A,e),e.tag=1,me(r)?(A=!0,Ga(e)):A=!1,wn(e,t),oB(e,r,n),Au(e,r,n,t),ru(null,e,r,!0,A,t);case 19:return DB(A,e,t);case 22:return LB(A,e,t)}throw Error(L(156,e.tag))};function ZB(A,e){return Fh(A,e)}function bm(A,e,t,r){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(A,e,t,r){return new bm(A,e,t,r)}function zd(A){return A=A.prototype,!(!A||!A.isReactComponent)}function Hm(A){if(typeof A=="function")return zd(A)?1:0;if(A!=null){if(A=A.$$typeof,A===cd)return 11;if(A===ud)return 14}return 2}function sr(A,e){var t=A.alternate;return t===null?(t=Ne(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&14680064,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t}function Ca(A,e,t,r,n,i){var o=2;if(r=A,typeof A=="function")zd(A)&&(o=1);else if(typeof A=="string")o=5;else A:switch(A){case An:return br(t.children,n,i,e);case ld:o=8,n|=8;break;case Fc:return A=Ne(12,t,e,n|2),A.elementType=Fc,A.lanes=i,A;case Uc:return A=Ne(13,t,e,n),A.elementType=Uc,A.lanes=i,A;case xc:return A=Ne(19,t,e,n),A.elementType=xc,A.lanes=i,A;case ah:return Ks(t,n,i,e);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case ih:o=10;break A;case oh:o=9;break A;case cd:o=11;break A;case ud:o=14;break A;case zt:o=16,r=null;break A}throw Error(L(130,A==null?A:typeof A,""))}return e=Ne(o,t,e,n),e.elementType=A,e.type=r,e.lanes=i,e}function br(A,e,t,r){return A=Ne(7,A,r,e),A.lanes=t,A}function Ks(A,e,t,r){return A=Ne(22,A,r,e),A.elementType=ah,A.lanes=t,A.stateNode={isHidden:!1},A}function jl(A,e,t){return A=Ne(6,A,null,e),A.lanes=t,A}function Pl(A,e,t){return e=Ne(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}function km(A,e,t,r,n){this.tag=e,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Gd(A,e,t,r,n,i,o,a,s){return A=new km(A,e,t,a,s),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ne(3,null,null,e),A.current=i,i.stateNode=A,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(i),A}function Im(A,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:A,containerInfo:e,implementation:t}}function qB(A){if(!A)return dr;A=A._reactInternals;A:{if(Or(A)!==A||A.tag!==1)throw Error(L(170));var e=A;do{switch(e.tag){case 3:e=e.stateNode.context;break A;case 1:if(me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break A}}e=e.return}while(e!==null);throw Error(L(171))}if(A.tag===1){var t=A.type;if(me(t))return Zh(A,t,e)}return e}function A2(A,e,t,r,n,i,o,a,s){return A=Gd(t,r,!0,A,n,i,o,a,s),A.context=qB(null),t=A.current,r=ue(),n=ar(t),i=It(r,n),i.callback=e??null,ir(t,i,n),A.current.lanes=n,so(A,n,r),Ce(A,r),A}function Ts(A,e,t,r){var n=e.current,i=ue(),o=ar(n);return t=qB(t),e.context===null?e.context=t:e.pendingContext=t,e=It(i,o),e.payload={element:A},r=r===void 0?null:r,r!==null&&(e.callback=r),A=ir(n,e,o),A!==null&&(it(A,n,o,i),pa(A,n,o)),o}function is(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function H1(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function $d(A,e){H1(A,e),(A=A.alternate)&&H1(A,e)}function Lm(){return null}var e2=typeof reportError=="function"?reportError:function(A){console.error(A)};function Wd(A){this._internalRoot=A}Ns.prototype.render=Wd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(L(409));Ts(A,e,null,null)};Ns.prototype.unmount=Wd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Nr(function(){Ts(null,A,null,null)}),e[Mt]=null}};function Ns(A){this._internalRoot=A}Ns.prototype.unstable_scheduleHydration=function(A){if(A){var e=Ih();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Wt.length&&e!==0&&e<Wt[t].priority;t++);Wt.splice(t,0,A),t===0&&Sh(A)}};function Xd(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Rs(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function k1(){}function Sm(A,e,t,r,n){if(n){if(typeof r=="function"){var i=r;r=function(){var l=is(o);i.call(l)}}var o=A2(e,r,A,0,null,!1,!1,"",k1);return A._reactRootContainer=o,A[Mt]=o.current,$i(A.nodeType===8?A.parentNode:A),Nr(),o}for(;n=A.lastChild;)A.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var l=is(s);a.call(l)}}var s=Gd(A,0,!1,null,null,!1,!1,"",k1);return A._reactRootContainer=s,A[Mt]=s.current,$i(A.nodeType===8?A.parentNode:A),Nr(function(){Ts(e,s,t,r)}),s}function Os(A,e,t,r,n){var i=t._reactRootContainer;if(i){var o=i;if(typeof n=="function"){var a=n;n=function(){var s=is(o);a.call(s)}}Ts(e,o,A,n)}else o=Sm(t,e,A,n,r);return is(o)}Hh=function(A){switch(A.tag){case 3:var e=A.stateNode;if(e.current.memoizedState.isDehydrated){var t=li(e.pendingLanes);t!==0&&(gd(e,t|1),Ce(e,LA()),!(rA&6)&&(Hn=LA()+500,hr()))}break;case 13:Nr(function(){var r=Dt(A,1);if(r!==null){var n=ue();it(r,A,1,n)}}),$d(A,1)}};pd=function(A){if(A.tag===13){var e=Dt(A,134217728);if(e!==null){var t=ue();it(e,A,134217728,t)}$d(A,134217728)}};kh=function(A){if(A.tag===13){var e=ar(A),t=Dt(A,e);if(t!==null){var r=ue();it(t,A,e,r)}$d(A,e)}};Ih=function(){return lA};Lh=function(A,e){var t=lA;try{return lA=A,e()}finally{lA=t}};Dc=function(A,e,t){switch(e){case"input":if(Hc(A,t),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==A&&r.form===A.form){var n=Is(r);if(!n)throw Error(L(90));lh(r),Hc(r,n)}}}break;case"textarea":uh(A,t);break;case"select":e=t.value,e!=null&&pn(A,!!t.multiple,e,!1)}};vh=jd;wh=Nr;var _m={usingClientEntryPoint:!1,Events:[co,nn,Is,hh,Bh,jd]},ei={findFiberByHostInstance:Cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mm={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=Qh(A),A===null?null:A.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Es=Mo.inject(Mm),Bt=Mo}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Ie.createPortal=function(A,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(L(200));return Im(A,e,null,t)};Ie.createRoot=function(A,e){if(!Xd(A))throw Error(L(299));var t=!1,r="",n=e2;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Gd(A,1,!1,null,null,t,!1,r,n),A[Mt]=e.current,$i(A.nodeType===8?A.parentNode:A),new Wd(e)};Ie.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(L(188)):(A=Object.keys(A).join(","),Error(L(268,A)));return A=Qh(e),A=A===null?null:A.stateNode,A};Ie.flushSync=function(A){return Nr(A)};Ie.hydrate=function(A,e,t){if(!Rs(e))throw Error(L(200));return Os(null,A,e,!0,t)};Ie.hydrateRoot=function(A,e,t){if(!Xd(A))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,n=!1,i="",o=e2;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=A2(e,null,A,1,t??null,n,!1,i,o),A[Mt]=e.current,$i(A),r)for(A=0;A<r.length;A++)t=r[A],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);return new Ns(e)};Ie.render=function(A,e,t){if(!Rs(e))throw Error(L(200));return Os(null,A,e,!1,t)};Ie.unmountComponentAtNode=function(A){if(!Rs(A))throw Error(L(40));return A._reactRootContainer?(Nr(function(){Os(null,null,A,!1,function(){A._reactRootContainer=null,A[Mt]=null})}),!0):!1};Ie.unstable_batchedUpdates=jd;Ie.unstable_renderSubtreeIntoContainer=function(A,e,t,r){if(!Rs(t))throw Error(L(200));if(A==null||A._reactInternals===void 0)throw Error(L(38));return Os(A,e,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function t2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t2)}catch(A){console.error(A)}}t2(),Ah.exports=Ie;var Dm=Ah.exports,I1=Dm;Qc.createRoot=I1.createRoot,Qc.hydrateRoot=I1.hydrateRoot;var U=function(){return U=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},U.apply(this,arguments)};function Jd(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function bA(A,e){var t=typeof Symbol=="function"&&A[Symbol.iterator];if(!t)return A;var r=t.call(A),n,i=[],o;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return i}function os(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||Array.prototype.slice.call(e))}function T(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}function as(A){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},as(A)}var Km=/^\s+/,Tm=/\s+$/;function P(A,e){if(A=A||"",e=e||{},A instanceof P)return A;if(!(this instanceof P))return new P(A,e);var t=Nm(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}P.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,i,o,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?i=t/12.92:i=Math.pow((t+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*o+.0722*a},setAlpha:function(e){return this._a=r2(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=S1(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=S1(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=L1(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=L1(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return _1(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Pm(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(CA(this._r,255)*100)+"%",g:Math.round(CA(this._g,255)*100)+"%",b:Math.round(CA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(CA(this._r,255)*100)+"%, "+Math.round(CA(this._g,255)*100)+"%, "+Math.round(CA(this._b,255)*100)+"%)":"rgba("+Math.round(CA(this._r,255)*100)+"%, "+Math.round(CA(this._g,255)*100)+"%, "+Math.round(CA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:eC[_1(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+M1(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=P(e);r="#"+M1(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,i=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return P(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification($m,arguments)},brighten:function(){return this._applyModification(Wm,arguments)},darken:function(){return this._applyModification(Xm,arguments)},desaturate:function(){return this._applyModification(Vm,arguments)},saturate:function(){return this._applyModification(zm,arguments)},greyscale:function(){return this._applyModification(Gm,arguments)},spin:function(){return this._applyModification(Jm,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(qm,arguments)},complement:function(){return this._applyCombination(Ym,arguments)},monochromatic:function(){return this._applyCombination(AC,arguments)},splitcomplement:function(){return this._applyCombination(Zm,arguments)},triad:function(){return this._applyCombination(D1,[3])},tetrad:function(){return this._applyCombination(D1,[4])}};P.fromRatio=function(A,e){if(as(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=ui(A[r]));A=t}return P(A,e)};function Nm(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,i=null,o=!1,a=!1;return typeof A=="string"&&(A=iC(A)),as(A)=="object"&&(Ct(A.r)&&Ct(A.g)&&Ct(A.b)?(e=Rm(A.r,A.g,A.b),o=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Ct(A.h)&&Ct(A.s)&&Ct(A.v)?(r=ui(A.s),n=ui(A.v),e=jm(A.h,r,n),o=!0,a="hsv"):Ct(A.h)&&Ct(A.s)&&Ct(A.l)&&(r=ui(A.s),i=ui(A.l),e=Om(A.h,r,i),o=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=r2(t),{ok:o,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Rm(A,e,t){return{r:CA(A,255)*255,g:CA(e,255)*255,b:CA(t,255)*255}}function L1(A,e,t){A=CA(A,255),e=CA(e,255),t=CA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=(r+n)/2;if(r==n)i=o=0;else{var s=r-n;switch(o=a>.5?s/(2-r-n):s/(r+n),r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,l:a}}function Om(A,e,t){var r,n,i;A=CA(A,360),e=CA(e,100),t=CA(t,100);function o(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=i=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=o(s,a,A+1/3),n=o(s,a,A),i=o(s,a,A-1/3)}return{r:r*255,g:n*255,b:i*255}}function S1(A,e,t){A=CA(A,255),e=CA(e,255),t=CA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=r,s=r-n;if(o=r===0?0:s/r,r==n)i=0;else{switch(r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,v:a}}function jm(A,e,t){A=CA(A,360)*6,e=CA(e,100),t=CA(t,100);var r=Math.floor(A),n=A-r,i=t*(1-e),o=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,o,i,i,a,t][s],c=[a,t,t,o,i,i][s],u=[i,i,a,t,t,o][s];return{r:l*255,g:c*255,b:u*255}}function _1(A,e,t,r){var n=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Pm(A,e,t,r,n){var i=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16)),tt(n2(r))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function M1(A,e,t,r){var n=[tt(n2(r)),tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return n.join("")}P.equals=function(A,e){return!A||!e?!1:P(A).toRgbString()==P(e).toRgbString()};P.random=function(){return P.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Vm(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s-=e/100,t.s=js(t.s),P(t)}function zm(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s+=e/100,t.s=js(t.s),P(t)}function Gm(A){return P(A).desaturate(100)}function $m(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l+=e/100,t.l=js(t.l),P(t)}function Wm(A,e){e=e===0?0:e||10;var t=P(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),P(t)}function Xm(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l-=e/100,t.l=js(t.l),P(t)}function Jm(A,e){var t=P(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,P(t)}function Ym(A){var e=P(A).toHsl();return e.h=(e.h+180)%360,P(e)}function D1(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=P(A).toHsl(),r=[P(A)],n=360/e,i=1;i<e;i++)r.push(P({h:(t.h+i*n)%360,s:t.s,l:t.l}));return r}function Zm(A){var e=P(A).toHsl(),t=e.h;return[P(A),P({h:(t+72)%360,s:e.s,l:e.l}),P({h:(t+216)%360,s:e.s,l:e.l})]}function qm(A,e,t){e=e||6,t=t||30;var r=P(A).toHsl(),n=360/t,i=[P(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,i.push(P(r));return i}function AC(A,e){e=e||6;for(var t=P(A).toHsv(),r=t.h,n=t.s,i=t.v,o=[],a=1/e;e--;)o.push(P({h:r,s:n,v:i})),i=(i+a)%1;return o}P.mix=function(A,e,t){t=t===0?0:t||50;var r=P(A).toRgb(),n=P(e).toRgb(),i=t/100,o={r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a};return P(o)};P.readability=function(A,e){var t=P(A),r=P(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};P.isReadable=function(A,e,t){var r=P.readability(A,e),n,i;switch(i=!1,n=oC(t),n.level+n.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};P.mostReadable=function(A,e,t){var r=null,n=0,i,o,a,s;t=t||{},o=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)i=P.readability(A,e[l]),i>n&&(n=i,r=P(e[l]));return P.isReadable(A,r,{level:a,size:s})||!o?r:(t.includeFallbackColors=!1,P.mostReadable(A,["#fff","#000"],t))};var pu=P.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},eC=P.hexNames=tC(pu);function tC(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function r2(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function CA(A,e){rC(A)&&(A="100%");var t=nC(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function js(A){return Math.min(1,Math.max(0,A))}function Qe(A){return parseInt(A,16)}function rC(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function nC(A){return typeof A=="string"&&A.indexOf("%")!=-1}function tt(A){return A.length==1?"0"+A:""+A}function ui(A){return A<=1&&(A=A*100+"%"),A}function n2(A){return Math.round(parseFloat(A)*255).toString(16)}function K1(A){return Qe(A)/255}var Je=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ct(A){return!!Je.CSS_UNIT.exec(A)}function iC(A){A=A.replace(Km,"").replace(Tm,"").toLowerCase();var e=!1;if(pu[A])A=pu[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Je.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Je.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Je.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Je.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Je.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Je.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Je.hex8.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),a:K1(t[4]),format:e?"name":"hex8"}:(t=Je.hex6.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),format:e?"name":"hex"}:(t=Je.hex4.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),a:K1(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Je.hex3.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function oC(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}var Ue={},Ps={exports:{}},ti={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1;function aC(){if(T1)return ti;T1=1;var A=Pe,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(a,s,l){var c,u={},d=null,p=null;l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(p=s.ref);for(c in s)r.call(s,c)&&!i.hasOwnProperty(c)&&(u[c]=s[c]);if(a&&a.defaultProps)for(c in s=a.defaultProps,s)u[c]===void 0&&(u[c]=s[c]);return{$$typeof:e,type:a,key:d,ref:p,props:u,_owner:n.current}}return ti.Fragment=t,ti.jsx=o,ti.jsxs=o,ti}(function(A){A.exports=aC()})(Ps);const kn=Ps.exports.Fragment,B=Ps.exports.jsx,R=Ps.exports.jsxs;var hA="-ms-",Ii="-moz-",iA="-webkit-",i2="comm",Vs="rule",Yd="decl",sC="@import",o2="@keyframes",lC="@layer",a2=Math.abs,Zd=String.fromCharCode,hu=Object.assign;function cC(A,e){return GA(A,0)^45?(((e<<2^GA(A,0))<<2^GA(A,1))<<2^GA(A,2))<<2^GA(A,3):0}function s2(A){return A.trim()}function xt(A,e){return(A=e.exec(A))?A[0]:A}function q(A,e,t){return A.replace(e,t)}function Qa(A,e,t){return A.indexOf(e,t)}function GA(A,e){return A.charCodeAt(e)|0}function In(A,e,t){return A.slice(e,t)}function gt(A){return A.length}function l2(A){return A.length}function di(A,e){return e.push(A),A}function uC(A,e){return A.map(e).join("")}function N1(A,e){return A.filter(function(t){return!xt(t,e)})}var zs=1,Ln=1,c2=0,Ge=0,MA=0,zn="";function Gs(A,e,t,r,n,i,o,a){return{value:A,root:e,parent:t,type:r,props:n,children:i,line:zs,column:Ln,length:o,return:"",siblings:a}}function Ot(A,e){return hu(Gs("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Pr(A){for(;A.root;)A=Ot(A.root,{children:[A]});di(A,A.siblings)}function dC(){return MA}function fC(){return MA=Ge>0?GA(zn,--Ge):0,Ln--,MA===10&&(Ln=1,zs--),MA}function ot(){return MA=Ge<c2?GA(zn,Ge++):0,Ln++,MA===10&&(Ln=1,zs++),MA}function Hr(){return GA(zn,Ge)}function ya(){return Ge}function $s(A,e){return In(zn,A,e)}function Bu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gC(A){return zs=Ln=1,c2=gt(zn=A),Ge=0,[]}function pC(A){return zn="",A}function Vl(A){return s2($s(Ge-1,vu(A===91?A+2:A===40?A+1:A)))}function hC(A){for(;(MA=Hr())&&MA<33;)ot();return Bu(A)>2||Bu(MA)>3?"":" "}function BC(A,e){for(;--e&&ot()&&!(MA<48||MA>102||MA>57&&MA<65||MA>70&&MA<97););return $s(A,ya()+(e<6&&Hr()==32&&ot()==32))}function vu(A){for(;ot();)switch(MA){case A:return Ge;case 34:case 39:A!==34&&A!==39&&vu(MA);break;case 40:A===41&&vu(A);break;case 92:ot();break}return Ge}function vC(A,e){for(;ot()&&A+MA!==57&&!(A+MA===84&&Hr()===47););return"/*"+$s(e,Ge-1)+"*"+Zd(A===47?A:ot())}function wC(A){for(;!Bu(Hr());)ot();return $s(A,Ge)}function mC(A){return pC(Fa("",null,null,null,[""],A=gC(A),0,[0],A))}function Fa(A,e,t,r,n,i,o,a,s){for(var l=0,c=0,u=o,d=0,p=0,v=0,w=1,x=1,g=1,f=0,h="",C=n,F=i,m=r,y=h;x;)switch(v=f,f=ot()){case 40:if(v!=108&&GA(y,u-1)==58){Qa(y+=q(Vl(f),"&","&\f"),"&\f",a2(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:y+=Vl(f);break;case 9:case 10:case 13:case 32:y+=hC(v);break;case 92:y+=BC(ya()-1,7);continue;case 47:switch(Hr()){case 42:case 47:di(CC(vC(ot(),ya()),e,t,s),s);break;default:y+="/"}break;case 123*w:a[l++]=gt(y)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+c:g==-1&&(y=q(y,/\f/g,"")),p>0&&gt(y)-u&&di(p>32?O1(y+";",r,t,u-1,s):O1(q(y," ","")+";",r,t,u-2,s),s);break;case 59:y+=";";default:if(di(m=R1(y,e,t,l,c,n,a,h,C=[],F=[],u,i),i),f===123)if(c===0)Fa(y,e,m,m,C,i,u,a,F);else switch(d===99&&GA(y,3)===110?100:d){case 100:case 108:case 109:case 115:Fa(A,m,m,r&&di(R1(A,m,m,0,0,n,a,h,n,C=[],u,F),F),n,F,u,a,r?C:F);break;default:Fa(y,m,m,m,[""],F,0,a,F)}}l=c=p=0,w=g=1,h=y="",u=o;break;case 58:u=1+gt(y),p=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&fC()==125)continue}switch(y+=Zd(f),f*w){case 38:g=c>0?1:(y+="\f",-1);break;case 44:a[l++]=(gt(y)-1)*g,g=1;break;case 64:Hr()===45&&(y+=Vl(ot())),d=Hr(),c=u=gt(h=y+=wC(ya())),f++;break;case 45:v===45&&gt(y)==2&&(w=0)}}return i}function R1(A,e,t,r,n,i,o,a,s,l,c,u){for(var d=n-1,p=n===0?i:[""],v=l2(p),w=0,x=0,g=0;w<r;++w)for(var f=0,h=In(A,d+1,d=a2(x=o[w])),C=A;f<v;++f)(C=s2(x>0?p[f]+" "+h:q(h,/&\f/g,p[f])))&&(s[g++]=C);return Gs(A,e,t,n===0?Vs:a,s,l,c,u)}function CC(A,e,t,r){return Gs(A,e,t,i2,Zd(dC()),In(A,2,-2),0,r)}function O1(A,e,t,r,n){return Gs(A,e,t,Yd,In(A,0,r),In(A,r+1,-1),r,n)}function u2(A,e,t){switch(cC(A,e)){case 5103:return iA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return iA+A+A;case 4789:return Ii+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return iA+A+Ii+A+hA+A+A;case 5936:switch(GA(A,e+11)){case 114:return iA+A+hA+q(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return iA+A+hA+q(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return iA+A+hA+q(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return iA+A+hA+A+A;case 6165:return iA+A+hA+"flex-"+A+A;case 5187:return iA+A+q(A,/(\w+).+(:[^]+)/,iA+"box-$1$2"+hA+"flex-$1$2")+A;case 5443:return iA+A+hA+"flex-item-"+q(A,/flex-|-self/g,"")+(xt(A,/flex-|baseline/)?"":hA+"grid-row-"+q(A,/flex-|-self/g,""))+A;case 4675:return iA+A+hA+"flex-line-pack"+q(A,/align-content|flex-|-self/g,"")+A;case 5548:return iA+A+hA+q(A,"shrink","negative")+A;case 5292:return iA+A+hA+q(A,"basis","preferred-size")+A;case 6060:return iA+"box-"+q(A,"-grow","")+iA+A+hA+q(A,"grow","positive")+A;case 4554:return iA+q(A,/([^-])(transform)/g,"$1"+iA+"$2")+A;case 6187:return q(q(q(A,/(zoom-|grab)/,iA+"$1"),/(image-set)/,iA+"$1"),A,"")+A;case 5495:case 3959:return q(A,/(image-set\([^]*)/,iA+"$1$`$1");case 4968:return q(q(A,/(.+:)(flex-)?(.*)/,iA+"box-pack:$3"+hA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+iA+A+A;case 4200:if(!xt(A,/flex-|baseline/))return hA+"grid-column-align"+In(A,e)+A;break;case 2592:case 3360:return hA+q(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,xt(r.props,/grid-\w+-end/)})?~Qa(A+(t=t[e].value),"span",0)?A:hA+q(A,"-start","")+A+hA+"grid-row-span:"+(~Qa(t,"span",0)?xt(t,/\d+/):+xt(t,/\d+/)-+xt(A,/\d+/))+";":hA+q(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return xt(r.props,/grid-\w+-start/)})?A:hA+q(q(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return q(A,/(.+)-inline(.+)/,iA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(A)-1-e>6)switch(GA(A,e+1)){case 109:if(GA(A,e+4)!==45)break;case 102:return q(A,/(.+:)(.+)-([^]+)/,"$1"+iA+"$2-$3$1"+Ii+(GA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Qa(A,"stretch",0)?u2(q(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return q(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,o,a,s,l){return hA+n+":"+i+l+(o?hA+n+"-span:"+(a?s:+s-+i)+l:"")+A});case 4949:if(GA(A,e+6)===121)return q(A,":",":"+iA)+A;break;case 6444:switch(GA(A,GA(A,14)===45?18:11)){case 120:return q(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+iA+(GA(A,14)===45?"inline-":"")+"box$3$1"+iA+"$2$3$1"+hA+"$2box$3")+A;case 100:return q(A,":",":"+hA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(A,"scroll-","scroll-snap-")+A}return A}function ss(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function QC(A,e,t,r){switch(A.type){case lC:if(A.children.length)break;case sC:case Yd:return A.return=A.return||A.value;case i2:return"";case o2:return A.return=A.value+"{"+ss(A.children,r)+"}";case Vs:if(!gt(A.value=A.props.join(",")))return""}return gt(t=ss(A.children,r))?A.return=A.value+"{"+t+"}":""}function yC(A){var e=l2(A);return function(t,r,n,i){for(var o="",a=0;a<e;a++)o+=A[a](t,r,n,i)||"";return o}}function FC(A){return function(e){e.root||(e=e.return)&&A(e)}}function UC(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case Yd:A.return=u2(A.value,A.length,t);return;case o2:return ss([Ot(A,{value:q(A.value,"@","@"+iA)})],r);case Vs:if(A.length)return uC(t=A.props,function(n){switch(xt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pr(Ot(A,{props:[q(n,/:(read-\w+)/,":"+Ii+"$1")]})),Pr(Ot(A,{props:[n]})),hu(A,{props:N1(t,r)});break;case"::placeholder":Pr(Ot(A,{props:[q(n,/:(plac\w+)/,":"+iA+"input-$1")]})),Pr(Ot(A,{props:[q(n,/:(plac\w+)/,":"+Ii+"$1")]})),Pr(Ot(A,{props:[q(n,/:(plac\w+)/,hA+"input-$1")]})),Pr(Ot(A,{props:[n]})),hu(A,{props:N1(t,r)});break}return""})}}var xC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",d2="active",f2="data-styled-version",Ws="6.1.12",qd=`/*!sc*/
`,ls=typeof window<"u"&&"HTMLElement"in window,EC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Xs=Object.freeze([]),_n=Object.freeze({});function bC(A,e,t){return t===void 0&&(t=_n),A.theme!==t.theme&&A.theme||e||t.theme}var g2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),HC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kC=/(^-|-$)/g;function j1(A){return A.replace(HC,"-").replace(kC,"")}var IC=/(a)(d)/gi,Do=52,P1=function(A){return String.fromCharCode(A+(A>25?39:97))};function wu(A){var e,t="";for(e=Math.abs(A);e>Do;e=e/Do|0)t=P1(e%Do)+t;return(P1(e%Do)+t).replace(IC,"$1-$2")}var zl,p2=5381,dn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},h2=function(A){return dn(p2,A)};function LC(A){return wu(h2(A)>>>0)}function SC(A){return A.displayName||A.name||"Component"}function Gl(A){return typeof A=="string"&&!0}var B2=typeof Symbol=="function"&&Symbol.for,v2=B2?Symbol.for("react.memo"):60115,_C=B2?Symbol.for("react.forward_ref"):60112,MC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},DC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},w2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},KC=((zl={})[_C]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zl[v2]=w2,zl);function V1(A){return("type"in(e=A)&&e.type.$$typeof)===v2?w2:"$$typeof"in A?KC[A.$$typeof]:MC;var e}var TC=Object.defineProperty,NC=Object.getOwnPropertyNames,z1=Object.getOwnPropertySymbols,RC=Object.getOwnPropertyDescriptor,OC=Object.getPrototypeOf,G1=Object.prototype;function m2(A,e,t){if(typeof e!="string"){if(G1){var r=OC(e);r&&r!==G1&&m2(A,r,t)}var n=NC(e);z1&&(n=n.concat(z1(e)));for(var i=V1(A),o=V1(e),a=0;a<n.length;++a){var s=n[a];if(!(s in DC||t&&t[s]||o&&s in o||i&&s in i)){var l=RC(e,s);try{TC(A,s,l)}catch{}}}}return A}function Mn(A){return typeof A=="function"}function Af(A){return typeof A=="object"&&"styledComponentId"in A}function Fr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function $1(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function to(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function mu(A,e,t){if(t===void 0&&(t=!1),!t&&!to(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=mu(A[r],e[r]);else if(to(e))for(var r in e)A[r]=mu(A[r],e[r]);return A}function ef(A,e){Object.defineProperty(A,"toString",{value:e})}function fo(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var jC=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw fo(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(qd);return t},A}(),Ua=new Map,cs=new Map,xa=1,Ko=function(A){if(Ua.has(A))return Ua.get(A);for(;cs.has(xa);)xa++;var e=xa++;return Ua.set(A,e),cs.set(e,A),e},PC=function(A,e){xa=e+1,Ua.set(A,e),cs.set(e,A)},VC="style[".concat(Sn,"][").concat(f2,'="').concat(Ws,'"]'),zC=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),GC=function(A,e,t){for(var r,n=t.split(","),i=0,o=n.length;i<o;i++)(r=n[i])&&A.registerName(e,r)},$C=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(qd),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(zC);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(PC(c,l),GC(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},W1=function(A){for(var e=document.querySelectorAll(VC),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(Sn)!==d2&&($C(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function WC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var C2=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sn,"]")));return s[s.length-1]}(t),i=n!==void 0?n.nextSibling:null;r.setAttribute(Sn,d2),r.setAttribute(f2,Ws);var o=WC();return o&&r.setAttribute("nonce",o),t.insertBefore(r,i),r},XC=function(){function A(e){this.element=C2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var o=r[n];if(o.ownerNode===t)return o}throw fo(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),JC=function(){function A(e){this.element=C2(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),YC=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),X1=ls,ZC={isServer:!ls,useCSSOMInjection:!EC},Q2=function(){function A(e,t,r){e===void 0&&(e=_n),t===void 0&&(t={});var n=this;this.options=U(U({},ZC),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ls&&X1&&(X1=!1,W1(this)),ef(this,function(){return function(i){for(var o=i.getTag(),a=o.length,s="",l=function(u){var d=function(g){return cs.get(g)}(u);if(d===void 0)return"continue";var p=i.names.get(d),v=o.getGroup(u);if(p===void 0||!p.size||v.length===0)return"continue";var w="".concat(Sn,".g").concat(u,'[id="').concat(d,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(w,'{content:"').concat(x,'"}').concat(qd)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Ko(e)},A.prototype.rehydrate=function(){!this.server&&ls&&W1(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(U(U({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new YC(n):r?new XC(n):new JC(n)}(this.options),new jC(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Ko(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Ko(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Ko(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),qC=/&/g,A3=/^\s*\/\/.*$/gm;function y2(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=y2(t.children,e)),t})}function e3(A){var e,t,r,n=A===void 0?_n:A,i=n.options,o=i===void 0?_n:i,a=n.plugins,s=a===void 0?Xs:a,l=function(d,p,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Vs&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(qC,t).replace(r,l))}),o.prefix&&c.push(UC),c.push(QC);var u=function(d,p,v,w){p===void 0&&(p=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=d.replace(A3,""),g=mC(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);o.namespace&&(g=y2(g,o.namespace));var f=[];return ss(g,yC(c.concat(FC(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,p){return p.name||fo(15),dn(d,p.name)},p2).toString():"",u}var t3=new Q2,Cu=e3(),F2=Pe.createContext({shouldForwardProp:void 0,styleSheet:t3,stylis:Cu});F2.Consumer;Pe.createContext(void 0);function J1(){return H.useContext(F2)}var r3=function(){function A(e,t){var r=this;this.inject=function(n,i){i===void 0&&(i=Cu);var o=r.name+i.hash;n.hasNameForId(r.id,o)||n.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ef(this,function(){throw fo(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Cu),this.name+e.hash},A}(),n3=function(A){return A>="A"&&A<="Z"};function Y1(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;n3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var U2=function(A){return A==null||A===!1||A===""},x2=function(A){var e,t,r=[];for(var n in A){var i=A[n];A.hasOwnProperty(n)&&!U2(i)&&(Array.isArray(i)&&i.isCss||Mn(i)?r.push("".concat(Y1(n),":"),i,";"):to(i)?r.push.apply(r,os(os(["".concat(n," {")],x2(i),!1),["}"],!1)):r.push("".concat(Y1(n),": ").concat((e=n,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in xC||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function kr(A,e,t,r){if(U2(A))return[];if(Af(A))return[".".concat(A.styledComponentId)];if(Mn(A)){if(!Mn(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var n=A(e);return kr(n,e,t,r)}var i;return A instanceof r3?t?(A.inject(t,r),[A.getName(r)]):[A]:to(A)?x2(A):Array.isArray(A)?Array.prototype.concat.apply(Xs,A.map(function(o){return kr(o,e,t,r)})):[A.toString()]}function i3(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Mn(t)&&!Af(t))return!1}return!0}var o3=h2(Ws),a3=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&i3(e),this.componentId=t,this.baseHash=dn(o3,t),this.baseStyle=r,Q2.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Fr(n,this.staticRulesId);else{var i=$1(kr(this.rules,e,t,r)),o=wu(dn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=Fr(n,o),this.staticRulesId=o}else{for(var s=dn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=$1(kr(u,e,t,r));s=dn(s,d+c),l+=d}}if(l){var p=wu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=Fr(n,p)}}return n},A}(),E2=Pe.createContext(void 0);E2.Consumer;var $l={};function s3(A,e,t){var r=Af(A),n=A,i=!Gl(A),o=e.attrs,a=o===void 0?Xs:o,s=e.componentId,l=s===void 0?function(C,F){var m=typeof C!="string"?"sc":j1(C);$l[m]=($l[m]||0)+1;var y="".concat(m,"-").concat(LC(Ws+m+$l[m]));return F?"".concat(F,"-").concat(y):y}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Gl(C)?"styled.".concat(C):"Styled(".concat(SC(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(j1(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,F){return w(C,F)&&x(C,F)}}else v=w}var g=new a3(t,d,r?n.componentStyle:void 0);function f(C,F){return function(m,y,E){var k=m.attrs,_=m.componentStyle,Y=m.defaultProps,J=m.foldedComponentIds,$=m.styledComponentId,S=m.target,V=Pe.useContext(E2),K=J1(),Z=m.shouldForwardProp||K.shouldForwardProp,b=bC(y,V,Y)||_n,I=function(nA,sA,gA){for(var jA,wA=U(U({},sA),{className:void 0,theme:gA}),ct=0;ct<nA.length;ct+=1){var Se=Mn(jA=nA[ct])?jA(wA):jA;for(var _A in Se)wA[_A]=_A==="className"?Fr(wA[_A],Se[_A]):_A==="style"?U(U({},wA[_A]),Se[_A]):Se[_A]}return sA.className&&(wA.className=Fr(wA.className,sA.className)),wA}(k,y,b),O=I.as||S,G={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===b||(W==="forwardedAs"?G.as=I.forwardedAs:Z&&!Z(W,O)||(G[W]=I[W]));var FA=function(nA,sA){var gA=J1(),jA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return jA}(_,I),uA=Fr(J,$);return FA&&(uA+=" "+FA),I.className&&(uA+=" "+I.className),G[Gl(O)&&!g2.has(O)?"class":"className"]=uA,G.ref=E,H.createElement(O,G)}(h,C,F)}f.displayName=u;var h=Pe.forwardRef(f);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=v,h.foldedComponentIds=r?Fr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(F){for(var m=[],y=1;y<arguments.length;y++)m[y-1]=arguments[y];for(var E=0,k=m;E<k.length;E++)mu(F,k[E],!0);return F}({},n.defaultProps,C):C}}),ef(h,function(){return".".concat(h.styledComponentId)}),i&&m2(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Z1(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var q1=function(A){return Object.assign(A,{isCss:!0})};function l3(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Mn(A)||to(A))return q1(kr(Z1(Xs,os([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):q1(kr(Z1(r,e)))}function Qu(A,e,t){if(t===void 0&&(t=_n),!e)throw fo(1,e);var r=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return A(e,t,l3.apply(void 0,os([n],i,!1)))};return r.attrs=function(n){return Qu(A,e,U(U({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Qu(A,e,U(U({},t),n))},r}var b2=function(A){return Qu(s3,A)},D=b2;g2.forEach(function(A){D[A]=b2(A)});H.forwardRef(function(A,e){var t=A.placement,r=t===void 0?"rt":t,n=A.gap,i=n===void 0?8:n,o=A.offsetData,a=A.hover,s=a===void 0?!1:a,l=A.hoverShow,c=l===void 0?!1:l,u=A.innerStyle,d=A.innerClassName,p=d===void 0?"":d,v=A.content,w=A.style,x=A.className,g=x===void 0?"":x,f=A.children,h=A.zIndex,C=h===void 0?0:h,F=H.useMemo(function(){return!s&&!c},[s,c]),m=bA(H.useState(s||!c),2),y=m[0],E=m[1];return R(c3,U({ref:e,className:g,style:w,onMouseOver:function(){F||E(!s)},onMouseLeave:function(){F||E(!!s)}},{children:[f,v&&B(u3,U({className:"land-sffixContainer-inner ".concat(p),style:U({left:o!=null&&o.left||r==="lt"||r==="lb"?i:"auto",right:o!=null&&o.right||r==="rt"||r==="rb"?i:"auto",top:o!=null&&o.top||r==="lt"||r==="rt"?i:"auto",bottom:o!=null&&o.bottom||r==="lb"||r==="rb"?i:"auto",opacity:F||y?1:0},u),onClick:function(k){return k.stopPropagation()},hoverShow:c,zIndex:C},{children:v}))]}))});var c3=D.div(A0||(A0=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .land-sffixContainer-inner {
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .land-sffixContainer-inner {
  }
`]))),u3=D.div(e0||(e0=T([`
  position: absolute;
  opacity: `,`;
  font-family: inherit;
  z-index: `,`;
  transition: opacity var(--transition-15s) linear;
`],[`
  position: absolute;
  opacity: `,`;
  font-family: inherit;
  z-index: `,`;
  transition: opacity var(--transition-15s) linear;
`])),function(A){return A.hoverShow?0:1},function(A){var e;return(e=A.zIndex)!==null&&e!==void 0?e:0}),A0,e0;D.nav(t0||(t0=T([`
  .land-anchor-list{
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
      border-color: var(--color-primary-6);
    }
  }
`],[`
  .land-anchor-list{
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
      border-color: var(--color-primary-6);
    }
  }
`])));var t0,d3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"IconArrowLine ".concat(s)},{children:[B("path",{d:"M24 42V6",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 30L24 42L12 30",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},f3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M31 17L24 24L17 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M31 26L24 33L17 26",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},g3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})}))},p3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{d:"M36 19L24 31L12 19H36Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s,strokeLinejoin:"round"})}))},h3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24.0083 33.8995V6",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 22L24 34L12 22",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 42H12",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},B3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 9L42 9",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 19L42 19",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 26L24 40L42 26",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},v3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M44 20H28V4",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M4 28H20V44",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},w3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},m3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:s},{children:[B("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},C3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 6H42V15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 33V42H33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M15 42H6V33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 15V6H15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Q3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 7V16H41",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 7V16H7",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 41V32H7",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 41V32H40.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},y3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38 7L44 13L38 19",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},F3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?3:i,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"cursor-pointer ".concat(l),onClick:c},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},U3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M23.9917 6H6V42H24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 33L42 24L33 15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 23.9917H42",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},x3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 8V17H33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},E3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 9V17H14",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},b3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M19 6V42",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7 17.8994L19 5.89941",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006V6.10059",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006L41 30.1006",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},H3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18 28L10 33L4 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},k3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},I3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},L3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M42 8V24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 24L6 40",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},S3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M16 24L22 30L34 18",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},_3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:t})}))},M3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},D3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},K3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:t})}))},T3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},N3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.style,o=A.className;return B("svg",U({width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:n,strokeWidth:"2"})}))},R3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:t})}))},O3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},j3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:o})}))},P3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},V3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},z3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:o})}))},G3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},$3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",U({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},W3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?4:i,a=A.className,s=a===void 0?"IconFile":a,l=A.style;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:n,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M43 22H5",stroke:n,strokeWidth:"4",strokeLinejoin:"round"})]}))},X3=function(A){var e=A.size,t=e===void 0?16:e,r=A.fill,n=r===void 0?"currentcolor":r,i=A.className,o=i===void 0?"IconMore":i,a=A.style;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",className:o,style:a},{children:[B("circle",{cx:"12",cy:"24",r:"4",fill:n}),B("circle",{cx:"24",cy:"24",r:"4",fill:n}),B("circle",{cx:"36",cy:"24",r:"4",fill:n})]}))},J3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?4:i,a=A.className,s=a===void 0?"IconFileLine":a,l=A.style;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M7.94971 11.9497H39.9497",stroke:n,"stroke-width":o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 23.9497H39.9497",stroke:n,"stroke-width":o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 35.9497H39.9497",stroke:n,"stroke-width":o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Y3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=A.className,a=o===void 0?"IconAdd":o,s=A.style;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",className:a,style:s},{children:[B("path",{d:"M24.0605 10L24.0239 38",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M10 24L38 24",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Z3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?2:i,a=A.className,s=a===void 0?"IconClear":a,l=A.style,c=A.onClick;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l,onClick:c},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},q3=function(A){var e=A.size,t=e===void 0?20:e,r=A.fill,n=r===void 0?"currentcolor":r;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:n}),B("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:n}),B("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:n}),B("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:n}),B("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:n}),B("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:n}),B("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:n}),B("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:n}),B("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:n})]}))},A8=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?3:i,a=A.className,s=a===void 0?"":a;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",fill:"none",className:s,xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 15L24 6L15 15",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 32V6",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},e8=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?2:i;return R("svg",U({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},t8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,i=n===void 0?20:n,o=A.strokeWidth,a=o===void 0?2:o;return R("svg",U({width:i,height:i,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})]}))},r8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r;return B("svg",U({width:n,height:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{children:B("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}))},n8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,i=n===void 0?16:n,o=A.strokeWidth,a=o===void 0?2:o,s=A.className,l=s===void 0?"IconCopy":s;return R("svg",U({width:i,height:i,viewBox:"0 0 48 48",fill:"none",className:l},{children:[B("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-linecap":"round","stroke-linejoin":"round"}),B("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-width":"2","stroke-linejoin":"round"})]}))},i8=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return R("svg",U({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:t,"stroke-width":o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M19 29V42H29V29H19Z",stroke:t,strokeWidth:o,strokeLinejoin:"round"})]}))},SA=function(A){var e=A.name,t=Jd(A,["name"]);switch(e){case"arrow-line":return B(d3,U({},t));case"arrow-double":return B(f3,U({},t));case"arrow":return B(g3,U({},t));case"arrow-triangle":return B(p3,U({},t));case"arrow-to":return B(h3,U({},t));case"toggle":return B(B3,U({},t));case"collapse":return B(v3,U({},t));case"collection":return B(w3,U({},t));case"zoom-out":return B(C3,U({},t));case"zoom-in":return B(Q3,U({},t));case"loop":return B(y3,U({},t));case"download":return B(F3,U({},t));case"out":return B(U3,U({},t));case"reload":return B(x3,U({},t));case"undo":return B(E3,U({},t));case"sort":return B(b3,U({},t));case"back":return B(H3,U({},t));case"ahead":return B(k3,U({},t));case"drag":return B(I3,U({},t));case"refresh":return B(L3,U({},t));case"check-stroke":return B(S3,U({},t));case"check-fill":return B(_3,U({},t));case"check":return B(M3,U({},t));case"error-stroke":return B(D3,U({},t));case"error-fill":return B(K3,U({},t));case"error":return B(T3,U({},t));case"info-stroke":return B(N3,U({},t));case"info-fill":return B(R3,U({},t));case"info":return B(O3,U({},t));case"attention-stroke":return B(j3,U({},t));case"attention-fill":return B(P3,U({},t));case"attention":return B(V3,U({},t));case"question-stroke":return B(z3,U({},t));case"question-fill":return B(G3,U({},t));case"question":return B($3,U({},t));case"more":return B(X3,U({},t));case"more-line":return B(J3,U({},t));case"file":return B(W3,U({},t));case"add":return B(Y3,U({},t));case"clear":return B(Z3,U({},t));case"upload":return B(A8,U({},t));case"application":return B(q3,U({},t));case"close":return B(e8,U({},t));case"close-circle":return B(t8,U({},t));case"color-picker":return B(r8,U({},t));case"copy":return B(n8,U({},t));case"home":return B(i8,U({},t));case"search":return B(m3,U({},t))}},r0;(function(A){A.BG="background",A.BORDER="border"})(r0||(r0={}));var Lt=function(A){var e=A.content,t=A.theme,r=t===void 0?"light":t,n=A.placement,i=n===void 0?"top":n,o=A.style,a=A.className,s=a===void 0?"":a;return R(o8,U({className:"land-pop ".concat(r," ").concat(s),style:U({top:i==="bottom"?"100%":i==="top"?"auto":"50%",bottom:i==="top"?"100%":"",left:i==="right"?"100%":i==="left"?"auto":"50%",right:i==="left"?"100%":"",transform:"translate(".concat(i==="top"||i==="bottom"?"-50%":i==="left"?"-12px":"12px",", ").concat(i==="top"?"-12px":i==="bottom"?"12px":"-50%",")")},o)},{children:[e,B("div",{className:"land-pop-arrow",style:{left:i==="left"?"100%":i==="right"?"0":"50%",top:i==="top"?"100%":i==="bottom"?"0px":"50%",bottom:i==="bottom"?"100%":"",transform:"translate(".concat("-50%",", ").concat("-50%",") rotate(").concat(i==="top"?"45":i==="bottom"?"-135":i==="right"?"135":"-45","deg)")}})]}))},o8=D.div(n0||(n0=T([`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;
  .land-pop-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: var(--color-text-2);
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
`],[`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;
  .land-pop-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: var(--color-text-2);
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
`]))),n0;D.div(i0||(i0=T([`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .land-breadCrumb-item{
    display: flex;
    align-items: center;
    .land-breadcrumb-label{
      font-size: var(--font-content-medium);
      color: var(--color-text-4);
      white-space: nowrap;
      cursor: pointer;
      transition: all var(--transition-15) linear;
      &:hover{
        color: var(--color-text-2);
      }
    }
    svg{
      margin: 0 4px;
      color: var(--color-border-3);
    }
  }
`],[`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .land-breadCrumb-item{
    display: flex;
    align-items: center;
    .land-breadcrumb-label{
      font-size: var(--font-content-medium);
      color: var(--color-text-4);
      white-space: nowrap;
      cursor: pointer;
      transition: all var(--transition-15) linear;
      &:hover{
        color: var(--color-text-2);
      }
    }
    svg{
      margin: 0 4px;
      color: var(--color-border-3);
    }
  }
`])));var i0,Cn=function(A){var e=A.text,t=A.subText,r=A.icon,n=A.width,i=A.height,o=A.justify,a=o===void 0?"center":o,s=A.type,l=s===void 0?"border":s,c=A.status,u=c===void 0?"default":c,d=A.disabled,p=A.pop,v=A.PopProps,w=A.href,x=A.target,g=x===void 0?"_blank":x,f=A.onClick,h=A.children,C=A.style,F=A.className,m=F===void 0?"":F,y=H.useMemo(function(){if(r){if(!e&&!t)return!0}else return!1},[r,e,t]),E=H.useMemo(function(){switch(u){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[u]);return B(kn,{children:w?R(a8,U({href:w,target:g,className:"land-button ".concat(l," ").concat(u," ").concat(y?"iconOnly":""," ").concat(d?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:i,justify:a,color:E,onClick:function(k){return f==null?void 0:f(k)}},{children:[h,r,!y&&R("div",{children:[B("span",{children:e}),B("span",U({className:"subText"},{children:t}))]}),p&&B(Lt,U({content:p},v))]})):R(H2,U({className:"land-button ".concat(l," ").concat(u," ").concat(y?"iconOnly":""," ").concat(d?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:i,justify:a,color:E,onClick:function(k){return f==null?void 0:f(k)}},{children:[h,r,!y&&R("div",{children:[B("span",{children:e}),t&&B("span",U({className:"subText"},{children:t}))]}),p&&B(Lt,U({content:p},v))]}))})},H2=D.div(o0||(o0=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: `,`;
  gap: var(--gap-4);
  padding: `,`;
  width: `,`;
  height: `,`;
  color: `,`;
  &:hover {
    color: `,`;
  }
  &:active {
    color: `,`;
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    background-color: var(--color-bg-white);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `,`;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `,`;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `,`;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `,`;
    }
    &:active {
      border-color: `,`;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    background-color: `,`;
    cursor: default;
    &:hover,
    &:active{
      background-color: `,`;
    }
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: `,`;
  gap: var(--gap-4);
  padding: `,`;
  width: `,`;
  height: `,`;
  color: `,`;
  &:hover {
    color: `,`;
  }
  &:active {
    color: `,`;
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    background-color: var(--color-bg-white);
    &:hover {
      background-color: var(--color-bg-1);
    }
    &:active {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: `,`;
    &.default {
      background-color: var(--color-text-2);
      &:hover {
        background-color: var(--color-text-1);
      }
      &:active {
        background-color: var(--color-text-1);
      }
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.border {
    padding: 7px 15px;
    border: `,`;
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover {
      background-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: `,`;
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover {
      border-color: `,`;
    }
    &:active {
      border-color: `,`;
    }
  }

  &.iconOnly {
    padding: 0;
    width: 36px;
    height: 36px;
  }
  &.disabled {
    background-color: `,`;
    cursor: default;
    &:hover,
    &:active{
      background-color: `,`;
    }
  }
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"3)")},function(A){return"".concat(A.color,"3)")}),a8=D.a(a0||(a0=T([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),H2),o0,a0,s8=function(A){var e=A.checked,t=e===void 0?!1:e,r=A.text,n=r===void 0?"选项":r,i=A.pop,o=A.onChange;return R(l8,{children:[R(c8,U({onClick:function(){o==null||o()}},{children:[B(u8,U({className:"".concat(t?"checked":"")},{children:B(SA,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})})),n]})),i&&R(d8,U({className:"hover-pop"},{children:[B(SA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(Lt,{content:i,theme:"dark",style:{maxWidth:"200px"},placement:"right"})]}))]})},l8=D.div(s0||(s0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`]))),c8=D.div(l0||(l0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`]))),u8=D.div(c0||(c0=T([`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`]))),d8=D.div(u0||(u0=T([`
  position: relative;
  height: 16px;
  line-height: 16px;
`],[`
  position: relative;
  height: 16px;
  line-height: 16px;
`]))),s0,l0,c0,u0;D.div(d0||(d0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));D.div(f0||(f0=T([`
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  &.disabled{
    opacity: var(--opacity-68);
  }
`],[`
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  &.disabled{
    opacity: var(--opacity-68);
  }
`])));D.div(g0||(g0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  cursor: pointer;
`])));D.div(p0||(p0=T([`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`])));D.div(h0||(h0=T([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var d0,f0,g0,p0,h0;D.div(B0||(B0=T([`
  position: relative;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border: `,`;
    border-radius: `,`;
    opacity: `,`;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
`],[`
  position: relative;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border: `,`;
    border-radius: `,`;
    opacity: `,`;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
`])),function(A){return"-".concat(A.gap*2,"px")},function(A){return"-".concat(A.gap*2,"px")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"".concat(A.size,"px solid var(--color-primary-6)")},function(A){return"".concat(A.radius,"px")},function(A){return A.checked?1:0});var B0,go=function(A){var e=A.children,t=A.style,r=A.className,n=bA(H.useState(132),2),i=n[0],o=n[1],a=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return H.useEffect(function(){var l,c;a?l=a.getBoundingClientRect().height:l=0,s?c=s.getBoundingClientRect().height:c=0,o(l+c)}),B(f8,U({className:r,style:t,minHeight:i},{children:e}))},f8=D.main(v0||(v0=T([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.minHeight,"px)")}),v0,Li=function(A){var e=A.type,t=e===void 0?"border":e,r=A.value,n=A.inputType,i=n===void 0?"text":n,o=A.placeholder,a=o===void 0?"请输入":o,s=A.prefix,l=A.useSearch,c=l===void 0?!1:l,u=A.width,d=A.maxLength,p=A.showClear,v=p===void 0?!0:p,w=A.disabled,x=A.onChange,g=A.onFocus,f=A.className,h=A.wrapStyle,C=Jd(A,["type","value","inputType","placeholder","prefix","useSearch","width","maxLength","showClear","disabled","onChange","onFocus","className","wrapStyle"]),F=bA(H.useState(r),2),m=F[0],y=F[1];return H.useEffect(function(){return y(r)},[r]),R(g8,U({className:"land-input ".concat(w?"disabled":""," ").concat(t," ").concat(f),style:U({width:typeof u=="number"?"".concat(u,"px"):u},h)},{children:[c&&B(SA,{name:"search",stroke:"var(--color-text-5)"}),s&&B("p",U({className:"input-prefix"},{children:s})),B("input",U({placeholder:a,type:i,value:m,max:d,onClick:function(E){return E.stopPropagation()},onFocus:function(E){E.stopPropagation(),g==null||g(E)},onChange:function(E){E.stopPropagation(),x==null||x(E.target.value,E)}},C)),!!m&&v&&B(SA,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:function(){return y("")}})]}))},g8=D.div(w0||(w0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-1);
    cursor: not-allowed;
    pointer-events: none;
    input{
      opacity: var(--opacity-68);
      cursor: not-allowed;
      &::placeholder{
        opacity: var(--opacity-68);
      }
    }
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: var(--color-text-5);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    width: 0px;
    flex-shrink: 0;
  }
  &:hover{
    .land-input-clear-icon{
      width: 16px;
    }
  }
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-1);
    cursor: not-allowed;
    pointer-events: none;
    input{
      opacity: var(--opacity-68);
      cursor: not-allowed;
      &::placeholder{
        opacity: var(--opacity-68);
      }
    }
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    caret-color: var(--color-primary-6);
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &::placeholder {
      color: var(--color-text-5);
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    width: 0px;
    flex-shrink: 0;
  }
  &:hover{
    .land-input-clear-icon{
      width: 16px;
    }
  }
`]))),w0,YA=function(A){var e=A.w,t=e===void 0?"100%":e,r=A.h,n=A.column,i=A.wrap,o=A.justify,a=o===void 0?"start":o,s=A.align,l=s===void 0?"start":s,c=A.gap,u=A.bothCenter,d=A.children,p=A.style,v=A.className,w=v===void 0?"":v;return B(p8,U({className:w,style:p,width:t,height:r,direction:n?"column":"row",gap:typeof c=="number"?"".concat(c,"px"):c,wrap:i,justify:u?"center":a,align:u?"center":l},{children:d}))},p8=D.div(m0||(m0=T([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
  flex-wrap: `,`;
  justify-content: `,`;
  align-items: `,`;
  width: `,`;
  height: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
  flex-wrap: `,`;
  justify-content: `,`;
  align-items: `,`;
  width: `,`;
  height: `,`;
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height}),m0,k2=function(A){var e=A.show,t=e===void 0?!1:e,r=A.type,n=r===void 0?"default":r,i=A.text,o=i===void 0?"咕噜咕噜～":i,a=A.style,s=A.className,l=s===void 0?"":s,c=bA(H.useState(t),2),u=c[0],d=c[1];H.useEffect(function(){d(t)},[t]),H.useEffect(function(){if(u){var v=setTimeout(function(){d(!1)},1e3);return function(){return clearTimeout(v)}}},[u]);var p=H.useMemo(function(){switch(n){case"default":return{color:"white",background:"black",icon:null}}},[n]);return B(h8,U({className:"StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ".concat(u?"show":"close"," ").concat(l),style:U({color:p==null?void 0:p.color,backgroundColor:p==null?void 0:p.background},a)},{children:o}))},h8=D.div(C0||(C0=T([`
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`],[`
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`]))),C0,B8=[["#e9e9e9","#d9d9d9","#c4c4c4","#9d9d9d"],["#7b7b7b","#5c5c5c","#333333","#262626"],["#efccbd","#d39f9d","#c4726d","#ac3526"],["#f6e3bd","#ebbd6f","#df964a","#c76336"],["#fbf2d4","#f7e7ab","#f4db86","#ebbc58"],["#dee9d7","#bdd992","#9dbe56","#758d3a"],["#e7f6fd","#9dd9f8","#81bde5","#4f84eb"],["#cdc7ee","#877cda","#4249ac","#313fa4"],["#f6e6fb","#d69aeb","#b253d3","#8a31c4"]],Q0=function(A){var e,t=A.value,r=t===void 0?"#ffffff":t,n=A.size,i=n===void 0?48:n,o=A.useSelect,a=o===void 0?!0:o,s=A.showList,l=s===void 0?!1:s,c=A.defaultColorList,u=A.showOpacity,d=u===void 0?!0:u,p=A.input,v=p===void 0?!1:p,w=A.info,x=A.active,g=x===void 0?!1:x,f=A.onChange,h=A.onClick,C=A.onCardClick,F=A.children,m=A.className,y=A.style,E=bA(H.useState(!1),2),k=E[0],_=E[1],Y=bA(H.useState(r?r==="transparent"?"transparent":r:"#ffffff"),2),J=Y[0],$=Y[1],S=bA(H.useState(r.split("#")[1]),2),V=S[0],K=S[1],Z=bA(H.useState(100),2),b=Z[0],I=Z[1],O=bA(H.useState(0),2),G=O[0],W=O[1],FA=bA(H.useState(0),2),uA=FA[0],nA=FA[1],sA=bA(H.useState(0),2),gA=sA[0],jA=sA[1],wA=H.useCallback(function(X,PA){if(PA===void 0&&(PA=100),X!=="transparent"){var _e=P(X),ge=_e.toRgb(),pl=ge.r,hl=ge.g,Bl=ge.b;return"rgba(".concat(pl,", ").concat(hl,", ").concat(Bl,", ").concat(PA/100,")")}return X},[]);H.useEffect(function(){if(r)if(r==="transparent")$("transparent");else{var X=P(r).toHsv(),PA=X.h,_e=X.s,ge=X.v;W(PA),!fl&&nA(_e),!fl&&jA(ge),$(r),K(r.split("#")[1])}},[r]);var ct=H.useMemo(function(){var X=P("hsv(".concat(G,",").concat(1,",").concat(1,")")).toHex();return"#".concat(X)},[G]),Se=function(X){if(X==="transparent")$("transparent");else{var PA=P(X).toHsv();W(PA.h),nA(PA.s),jA(PA.v)}},_A=bA(H.useState(!1),2),lv=_A[0],vo=_A[1];H.useEffect(function(){var X=P("hsv(".concat(G,",").concat(uA,",").concat(gA,")")).toHex();!lv&&K(X),$("#".concat(X))},[G,uA,gA]);var ae=12,vf=bA(H.useState(!1),2),fl=vf[0],gl=vf[1],wf=function(X){var PA=X.target.getBoundingClientRect(),_e=X.clientX-PA.left,ge=X.clientY-PA.top;_e>=ae/2&&_e<=PA.width-ae?nA((_e-ae/2)/(PA.width-ae)):_e<ae/2?nA(0):nA(1),ge>=ae/2&&ge<=PA.height-ae?jA(1-(ge-ae/2)/(PA.height-ae)):ge<ae/2?jA(1):jA(0),f==null||f(wA(J,b))},mf=bA(H.useState(""),2),Cf=mf[0],cv=mf[1],Qf=function(X){navigator.clipboard.writeText(X),cv("已复制～".concat(X))};return R(v8,U({className:"land-color-picker ".concat(m),style:U({cursor:a?"pointer":"default"},y),color:r,size:typeof i=="string"?i:"".concat(i,"px")},{children:[B(k2,{show:!!Cf,text:Cf}),B("div",U({className:"land-color-trigger",onClick:function(X){X.stopPropagation(),_(!k),document.addEventListener("click",function(){_(!1)}),C==null||C()}},{children:F||R(kn,{children:[B("div",U({className:"land-color-grid hover-pop ".concat(g?"active":""),style:{backgroundColor:J==="transparent"?"transparent":wA(J,b)}},{children:w&&B(Lt,{content:w,theme:"dark"})})),typeof v!="boolean"?R("div",U({className:"land-color-label copy flex items-center justify-center",onClick:function(){return Qf==null?void 0:Qf(r)}},{children:[v,typeof v=="string"&&B(SA,{name:"copy",size:12,stroke:"var(--color-text-5)"})]})):v?B(Li,{type:"border",prefix:"#",maxLength:6,value:V,w:i,onFocus:function(){return vo(!0)},onChange:function(X){K(String(X)),Se("#".concat(X))},onBlur:function(){f==null||f(wA("#".concat(V),b)),vo(!1)},wrapStyle:{height:24,width:"calc(100% + 16px)",fontSize:"12px",padding:"0px 6px"}}):R("p",U({className:"land-color-label"},{children:["#",V]}))]})})),a&&R(w8,U({className:"land-color-drop ".concat(k?"show":""),onClick:function(X){return X.stopPropagation()}},{children:[B(m8,U({className:"StyledColorGrid",svColor:ct,onMouseMove:function(X){return fl&&wf(X)},onMouseDown:function(X){X.preventDefault(),wf(X),gl(!0)},onMouseUp:function(){gl(!1),h==null||h(wA(J,b))},onMouseLeave:function(){return gl(!1)}},{children:B("div",{className:"color-thumb",style:{left:ae/2+uA*(180-ae),top:ae/2+(86-ae)-gA*(86-ae)}})})),R(YA,U({column:!0,gap:8},{children:[B(y0,{type:"range",max:360,value:G,step:1,currentColor:J,onChange:function(X){return W(Number(X.target.value))}}),d&&B(C8,{children:B(y0,{type:"range",step:1,max:100,value:b,className:"opacity",currentColor:ct,onChange:function(X){I(X.target.value),f==null||f(wA(J,b))}})})]})),R("div",U({className:"flex gap-8"},{children:[B(Li,{type:"background",className:"flex-2",prefix:"#",maxLength:6,value:V,onFocus:function(){return vo(!0)},onChange:function(X){K(String(X)),Se("#".concat(X))},onBlur:function(){f==null||f(wA("#".concat(V),b)),vo(!1)}}),d&&B(Li,{type:"background",className:"flex-1",max:100,min:0,value:String(b),onChange:function(X){I(Number(X)),f==null||f(wA(J,Number(gA)))}})]})),l&&B(Q8,U({className:"land-colorPicker-default-list"},{children:(e=c||B8)===null||e===void 0?void 0:e.map(function(X,PA){return B(YA,U({column:!0,gap:4,style:{width:"18px"}},{children:X==null?void 0:X.map(function(_e){return B("div",{style:{backgroundColor:_e},className:"land-colorPicker-default-item",onClick:function(){var ge=P(_e).toHsv(),pl=ge.h,hl=ge.s,Bl=ge.v;nA(hl),W(pl),jA(Bl),f==null||f(wA(_e,b))}},PA)})}))})}))]}))]}))},v8=D.div(F0||(F0=T([`
  position: relative;
  width: `,`;
  .land-color-trigger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    .land-color-label {
      display: flex;
      justify-content: center;
      width: calc(100% + 16px);
      font-size: 12px;
      color: var(--color-text-3);
      &.copy{
        .IconCopy{
          width: 0;
          overflow: hidden;
          transition: width 0.2s ease;
        }
        &:hover{
          .IconCopy{
            width: 12px;
          }
        }
      }
    }
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: `,`;
    border: 8px solid var(--color-bg-3);
    border-radius: 4px;
    transition: border-color var(--transition-15) linear, background-color var(--transition-2) linear;
    will-change: border-color, background-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
    &.active {
      outline: 1px solid var(--color-primary-6);
    }
  }
`],[`
  position: relative;
  width: `,`;
  .land-color-trigger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    .land-color-label {
      display: flex;
      justify-content: center;
      width: calc(100% + 16px);
      font-size: 12px;
      color: var(--color-text-3);
      &.copy{
        .IconCopy{
          width: 0;
          overflow: hidden;
          transition: width 0.2s ease;
        }
        &:hover{
          .IconCopy{
            width: 12px;
          }
        }
      }
    }
  }
  .land-color-grid {
    width: 100%;
    aspect-ratio: 1;
    background-color: `,`;
    border: 8px solid var(--color-bg-3);
    border-radius: 4px;
    transition: border-color var(--transition-15) linear, background-color var(--transition-2) linear;
    will-change: border-color, background-color;
    &:hover {
      border-color: var(--color-bg-2);
    }
    &:active {
      border-color: var(--color-bg-3);
    }
    &.active {
      outline: 1px solid var(--color-primary-6);
    }
  }
`])),function(A){return A.size},function(A){return A.color}),w8=D.div(U0||(U0=T([`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-bg-white);
  width: 204px;
  border-radius: 4px;
  box-shadow: var(--boxshadow-medium);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity var(--transition-15) linear;
  z-index: 10;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`],[`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: var(--color-bg-white);
  width: 204px;
  border-radius: 4px;
  box-shadow: var(--boxshadow-medium);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity var(--transition-15) linear;
  z-index: 10;
  &.show {
    opacity: 1;
    pointer-events: all;
  }
`]))),m8=D.div(x0||(x0=T([`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: `,`;
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  overflow: hidden;
  .color-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-border-2);
    border-radius: 4px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`],[`
  position: relative;
  width: 100%;
  height: 86px;
  border-radius: 4px;
  background-color: `,`;
  background-image: linear-gradient(0deg, rgb(0, 0, 0), transparent),
    linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0));
  overflow: hidden;
  .color-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--color-border-2);
    border-radius: 4px;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
`])),function(A){return A.svColor}),y0=D.input(E0||(E0=T([`
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 16px;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffd600,
    #52ff00,
    #00fff0,
    #0500ff,
    #c000ff,
    #ff0000
  );
  &.opacity {
    position: absolute;
    background: `,`;
    &::-webkit-slider-thumb {
      background: transparent;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: `,`;
    border: 1px solid var(--color-border-1);
    outline: 1px solid var(--color-border-2);
    &:hover {
      cursor: ew-resize;
    }
  }
`],[`
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 16px;
  border: 0px;
  outline: none;
  object-fit: contain;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #ff0000,
    #ffd600,
    #52ff00,
    #00fff0,
    #0500ff,
    #c000ff,
    #ff0000
  );
  &.opacity {
    position: absolute;
    background: `,`;
    &::-webkit-slider-thumb {
      background: transparent;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: `,`;
    border: 1px solid var(--color-border-1);
    outline: 1px solid var(--color-border-2);
    &:hover {
      cursor: ew-resize;
    }
  }
`])),function(A){return"linear-gradient(to right, rgba(0,0,0,0), ".concat(A.currentColor,")")},function(A){return A.currentColor}),C8=D.div(b0||(b0=T([`
  padding: relative;
  width: 132px;
  height: 16px;
  border-radius: 4px;
  background-image: conic-gradient(
    var(--color-bg-2) 0 25%,
    transparent 0 50%,
    var(--color-bg-2) 0 75%,
    transparent 0
  );
  background-size: 8px 8px;
`],[`
  padding: relative;
  width: 132px;
  height: 16px;
  border-radius: 4px;
  background-image: conic-gradient(
    var(--color-bg-2) 0 25%,
    transparent 0 50%,
    var(--color-bg-2) 0 75%,
    transparent 0
  );
  background-size: 8px 8px;
`]))),Q8=D.div(H0||(H0=T([`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  .land-colorPicker-default-item{
    width: 100%;
    aspect-ratio: 1;
    border-radius: var(--radius-4);
    transition: all 0.2s;
    cursor: pointer;
    &.null {
      position: relative;
      background-color: transparent;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 10px;
        top: -4px;
        width: 2px;
        height: 30px;
        border-radius: 1px;
        background-color: var(--od-red-06);
        transform: rotate(-45deg);
      }
    }
  }
`],[`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  .land-colorPicker-default-item{
    width: 100%;
    aspect-ratio: 1;
    border-radius: var(--radius-4);
    transition: all 0.2s;
    cursor: pointer;
    &.null {
      position: relative;
      background-color: transparent;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 10px;
        top: -4px;
        width: 2px;
        height: 30px;
        border-radius: 1px;
        background-color: var(--od-red-06);
        transform: rotate(-45deg);
      }
    }
  }
`]))),F0,U0,x0,E0,b0,H0;D.a(k0||(k0=T([`
  padding: 0 12px;
  border-radius: var(--radius-6);
  transition: background-color var(--transition-15) linear;
  input{
    height: 36px;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
      outline: 0px;
    }
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    cursor: not-allowed;
  }
`],[`
  padding: 0 12px;
  border-radius: var(--radius-6);
  transition: background-color var(--transition-15) linear;
  input{
    height: 36px;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
      outline: 0px;
    }
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    cursor: not-allowed;
  }
`])));var k0,I2=function(A){var e=A.direction,t=e===void 0?"row":e,r=A.size,n=r===void 0?1:r,i=A.lang,o=i===void 0?"100%":i,a=A.margin,s=a===void 0?0:a,l=A.type,c=l===void 0?"solid":l,u=A.color,d=u===void 0?"var(--color-border-2)":u,p=A.content,v=A.align,w=v===void 0?"center":v,x=A.style,g=A.className,f=g===void 0?"":g;return R(y8,U({className:"land-divider ".concat(f),style:U({width:t==="row"?"".concat(o):"".concat(n,"px"),height:t==="column"?"".concat(o):"".concat(n,"px"),margin:t==="row"?"".concat(s,"px 0"):"0 ".concat(s,"px")},x),direction:t,gap:p?"8px":""},{children:[B("div",{style:{flex:w==="left"?"10%":w==="right"?"90%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}}),p&&R(kn,{children:[B("div",U({style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"}},{children:p})),B("div",{style:{flex:w==="left"?"90%":w==="right"?"10%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}})]})]}))},y8=D.div(I0||(I0=T([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap}),I0;D.div(L0||(L0=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`])));D.div(S0||(S0=T([`
  position: absolute;
  left: `,`;
  right: `,`;

  top: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`],[`
  position: absolute;
  left: `,`;
  right: `,`;

  top: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`])),function(A){return A.placement==="left"?"0":"unset"},function(A){return A.placement==="right"?"0":"unset"});D.ul(_0||(_0=T([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`])));D.li(M0||(M0=T([`
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`],[`
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
`])));var L0,S0,_0,M0;D.footer(D0||(D0=T([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var D0,K0;(function(A){A.ColumnFit="column-fit",A.ColumnFill="column-fill",A.RowFit="row-fit",A.RowFill="row-fill",A.ColumnRepeat="column-repeat",A.RowRepeat="row-repeat",A.Default="default"})(K0||(K0={}));var us;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(us||(us={}));var tf=function(A){var e=A.active,t=A.data,r=A.direction,n=r===void 0?"row":r,i=A.theme,o=i===void 0?{hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"}:i,a=A.border,s=a===void 0?!0:a,l=A.onChange,c=A.onDropChange,u=A.dropProps,d=A.itemStyle,p=A.itemClassName,v=p===void 0?"":p,w=A.style,x=A.className,g=x===void 0?"":x;return B(F8,U({className:"land-menu ".concat(g),style:w,column:n==="column",border:s},{children:t==null?void 0:t.map(function(f){return R("div",U({className:"land-menu-item ".concat(f.clickType===us.SIMPLE?"simple":""," ").concat(f.clickType===us.DISABLED?"disabled":""),style:d},{children:[R(U8,U({role:"button",className:"land-menu-link ".concat(e===f.key?"active":""," ").concat(v),onClick:function(){return l==null?void 0:l(f)},column:n==="column",theme:o},{children:[typeof f.icon=="string"?B("img",{src:f.icon,className:"land-menu-icon"}):f.icon,B("p",U({className:"land-menu-title","data-title":f.title},{children:f.title})),B("span",U({className:"land-menu-sub-title"},{children:f.subTitle})),f.isNew&&B("i",U({className:"land-menu-new"},{children:typeof f.isNew=="boolean"?"NEW":f.isNew}))]}),f.key),f.dropData&&B("div",U({className:"land-menu-drop-wrap ".concat(f.open?"open":"")},{children:B("div",U({className:"land-menu-drop"},{children:B(tf,U({data:f.dropData,onChange:function(h){return c==null?void 0:c(h,f)},direction:"column"},u))}))}))]}))})}))},F8=D.div(T0||(T0=T([`
  display: flex;
  flex-direction: `,`;
  gap: var(--gap-4);
  height: `,`;
  width: `,`;
  border-bottom: `,`;
  border-right: `,`;
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: `,`;
    width: 100%;
    border-radius: var(--radius-4);
    transition: all var(--transition-15) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-drop {
      padding: 8px 0px;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-15) linear;
      .land-menu-drop {
        background-color: var(--color-bg-white);
        border-radius: var(--radius-8);
        box-shadow: var(--boxshadow-medium);
      }
    }
  }
`],[`
  display: flex;
  flex-direction: `,`;
  gap: var(--gap-4);
  height: `,`;
  width: `,`;
  border-bottom: `,`;
  border-right: `,`;
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: `,`;
    width: 100%;
    border-radius: var(--radius-4);
    transition: all var(--transition-15) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-drop {
      padding: 8px 0px;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-15) linear;
      .land-menu-drop {
        background-color: var(--color-bg-white);
        border-radius: var(--radius-8);
        box-shadow: var(--boxshadow-medium);
      }
    }
  }
`])),function(A){return A.column?"column":"row"},function(A){return A.column?"":"100%"},function(A){return A.column?"100%":"fit-content"},function(A){return A.border&&!A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.column?"":"100%"}),U8=D.a(N0||(N0=T([`
  position: relative;
  padding: var(--padding-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-content-large);
  white-space: nowrap;
  box-sizing: border-box;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  color: var(--color-text-3);
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: `,`;
    bottom: `,`;
    width: `,`;
    height: `,`;
    transform: `,`;
    transform-origin: center center;
    border-radius: 1px;
    background-color: `,`;
    opacity: 0;
  }
  &:hover {
    color: `,`;
    background-color: `,`;
    .land-menu-title::before {
      color: `,`;
      font-weight: 600;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: `,`;
    background-color: `,`;
    .land-menu-title::before {
      color: `,`;
      font-weight: 600;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: 600;
    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-text-3);
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }
  .land-menu-new {
    position: absolute;
    padding: var(--padding-small);
    top: -12px;
    right: -8px;
    font-size: var(--font-content-small);
    background-color: var(--color-link-1);
    color: var(--color-link-6);
    font-weight: 600;
    border-radius: 3px;
    box-sizing: border-box;
    transform: scale(0.65);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-content-medium);
  }
`],[`
  position: relative;
  padding: var(--padding-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-content-large);
  white-space: nowrap;
  box-sizing: border-box;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  color: var(--color-text-3);
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: `,`;
    bottom: `,`;
    width: `,`;
    height: `,`;
    transform: `,`;
    transform-origin: center center;
    border-radius: 1px;
    background-color: `,`;
    opacity: 0;
  }
  &:hover {
    color: `,`;
    background-color: `,`;
    .land-menu-title::before {
      color: `,`;
      font-weight: 600;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: `,`;
    background-color: `,`;
    .land-menu-title::before {
      color: `,`;
      font-weight: 600;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: 600;
    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-text-3);
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }
  .land-menu-new {
    position: absolute;
    padding: var(--padding-small);
    top: -12px;
    right: -8px;
    font-size: var(--font-content-small);
    background-color: var(--color-link-1);
    color: var(--color-link-6);
    font-weight: 600;
    border-radius: 3px;
    box-sizing: border-box;
    transform: scale(0.65);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-content-medium);
  }
`])),function(A){return A.column?"0":"50%"},function(A){return A.column?"50%":"0"},function(A){return A.column?"2px":"12px"},function(A){return A.column?A.theme.activeBg?"100%":"calc(100% - 16px)":"2px"},function(A){return A.column?"translateY(50%)":"translateX(50%)"},function(A){return A.theme.lineColor||"var(--color-text-1)"},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverBg},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverColor},function(A){return A.theme.activeBg},function(A){return A.theme.activeColor||"var(--color-text-1)"}),T0,N0,x8=function(A){var e,t=A.h,r=t===void 0?"64px":t,n=A.fixed,i=A.filter,o=i===void 0?0:i,a=A.borderBottom,s=a===void 0?!0:a,l=A.applications,c=A.logo,u=A.name,d=A.onLogoClick,p=A.divider,v=p===void 0?!0:p,w=A.align,x=A.menuProps,g=A.rightComponent,f=A.style,h=A.className,C=h===void 0?"":h,F=bA(H.useState(!1),2),m=F[0],y=F[1];return H.useEffect(function(){window.onscroll=function(){return y(!1)},window.onresize=function(){return y(!1)}}),R(E8,U({className:"land-header ".concat(n?"fixed":""," ").concat(C),style:f,height:r,filter:o,borderBottom:s,applications:!!l},{children:[R("div",U({className:"land-header-logo",onClick:d},{children:[l&&R("button",U({className:"land-header-application",onClick:function(E){return E.stopPropagation()}},{children:[B(SA,{name:"application"}),B("div",U({className:"land-application-drop"},{children:l}))]})),typeof c=="string"?B("img",{src:c}):c,v&&c&&u&&B(I2,{direction:"column",lang:"24px"}),typeof u=="string"?B("img",{src:u}):u]})),B(b8,U({className:"land-header-nav",align:w,showMobileNav:m},{children:x&&B(tf,U({border:!1},x,{onChange:function(E){var k;(k=x.onChange)===null||k===void 0||k.call(x,E),y(!1)},onDropChange:function(E,k){var _;(_=x.onDropChange)===null||_===void 0||_.call(x,E,k),y(!1)}}))})),g&&B("div",U({className:"land-header-btns"},{children:g})),x&&x.data&&((e=x.data)===null||e===void 0?void 0:e.length)>0&&B(Cn,{icon:B(SA,{name:"more-line"}),type:"text",onClick:function(){return y(!m)}})]}))},E8=D.header(R0||(R0=T([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0 24px;
  padding-left: `,`;
  gap: var(--gap-32);
  width: 100%;
  height: `,`;
  border-bottom: `,`;
  background: `,`;
  backdrop-filter: `,`;
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    appearance: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
      pointer-events: all;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    box-shadow: var(--boxshadow-medium);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
  .land-button {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .land-button {
      display: flex;
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0 24px;
  padding-left: `,`;
  gap: var(--gap-32);
  width: 100%;
  height: `,`;
  border-bottom: `,`;
  background: `,`;
  backdrop-filter: `,`;
  box-sizing: border-box;
  z-index: 1;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    appearance: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
      pointer-events: all;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    box-shadow: var(--boxshadow-medium);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
  .land-button {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .land-button {
      display: flex;
    }
  }
`])),function(A){return A.applications?"0":""},function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""}),b8=D.div(O0||(O0=T([`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: `,`;
    .land-menu {
      flex-direction: column;
      padding: 12px 4px;
      background: #fff;
      height: fit-content;
      border: 1px solid var(--color-border-1);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: opacity 0.2 linear;
      opacity: `,`;
      .land-menu-link.active::after{
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop, 
        .land-menu-drop .land-menu{
          border: none;
          box-shadow: none;
          padding: 0;
          text-indent: 1em;
        }
      }
    }
  }
`],[`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: `,`;
    .land-menu {
      flex-direction: column;
      padding: 12px 4px;
      background: #fff;
      height: fit-content;
      border: 1px solid var(--color-border-1);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: opacity 0.2 linear;
      opacity: `,`;
      .land-menu-link.active::after{
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop, 
        .land-menu-drop .land-menu{
          border: none;
          box-shadow: none;
          padding: 0;
          text-indent: 1em;
        }
      }
    }
  }
`])),function(A){return A.align},function(A){return A.showMobileNav?"all":"none"},function(A){return A.showMobileNav?"1":"0"}),R0,O0,H8=function(A){var e=A.size,t=e===void 0?18:e,r=A.strokeSize,n=r===void 0?2:r,i=A.color,o=i===void 0?"var(--color-text-1)":i,a=A.style,s=A.className,l=s===void 0?"":s;return B(k8,{className:"land-loading-container ".concat(l),style:a,size:t,strokeSize:n,color:o})},k8=D.div(j0||(j0=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: `,`;
  width: `,`;
  -webkit-mask: `,`;
  mask: `,`;
  background-image: `,`;
  animation: spin 0.9s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: `,`;
  width: `,`;
  -webkit-mask: `,`;
  mask: `,`;
  background-image: `,`;
  animation: spin 0.9s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`])),function(A){return"".concat(A.size,"px")},function(A){return"".concat(A.size,"px")},function(A){return`radial-gradient(
      circle `.concat(A.size/2-A.strokeSize,`px,
      transparent 99%,
      #000 100%
    )`)},function(A){return`radial-gradient(
      circle `.concat(A.size/2-A.strokeSize,`px,
      transparent 99%,
      #000 100%
    )`)},function(A){return"conic-gradient(transparent 25%, ".concat(A.color,")")}),j0;D.div(P0||(P0=T([`
        position: relative;
        display: flex;
        align-items: baseline;
        gap: var(--gap-4);
        padding: 0 4px;
        height: fit-content;
        border-radius: var(--radius-4);
        background-color: var(--color-bg-2);
        overflow: auto;
        transition: background-color var(--transition-15) linear;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
        &:focus-within,
        &:hover{
          background-color: var(--color-bg-3);
        }
        textarea {
          flex: 1;
          height: fit-content;
          background-color: transparent;
          appearance: none;
          -moz-appearance: none;
          border: none;
          outline: none;
          caret-color: var(--color-primary-6);
          flex-shrink: 0;
          overflow: auto;
          resize: none;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
        &:focus-within,
        &:focus,
        &:focus-visible,
        &:active {
          border: none;
          box-shadow: none;
          background-color: transparent;
    }
        &::placeholder {
          color: var(--color-text-5);
    }
        &::selection {
          background-color: var(--color-primary-2);
    }
    .land-tagInput-number{
      font-size: var(--font-content-small);
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
      }
    }
  }
        `],[`
        position: relative;
        display: flex;
        align-items: baseline;
        gap: var(--gap-4);
        padding: 0 4px;
        height: fit-content;
        border-radius: var(--radius-4);
        background-color: var(--color-bg-2);
        overflow: auto;
        transition: background-color var(--transition-15) linear;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
        &:focus-within,
        &:hover{
          background-color: var(--color-bg-3);
        }
        textarea {
          flex: 1;
          height: fit-content;
          background-color: transparent;
          appearance: none;
          -moz-appearance: none;
          border: none;
          outline: none;
          caret-color: var(--color-primary-6);
          flex-shrink: 0;
          overflow: auto;
          resize: none;
        &::-webkit-scrollbar{
          width: 0;
          display: none;
        }
        &:focus-within,
        &:focus,
        &:focus-visible,
        &:active {
          border: none;
          box-shadow: none;
          background-color: transparent;
    }
        &::placeholder {
          color: var(--color-text-5);
    }
        &::selection {
          background-color: var(--color-primary-2);
    }
    .land-tagInput-number{
      font-size: var(--font-content-small);
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
      }
    }
  }
        `])));D.div(V0||(V0=T([`
    display: flex;
    align-items: center;
    gap: var(--gap-8);
    padding: var(--padding-small);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    cursor: pointer;
        `],[`
    display: flex;
    align-items: center;
    gap: var(--gap-8);
    padding: var(--padding-small);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    cursor: pointer;
        `])));var P0,V0;D.div(z0||(z0=T([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var z0;D.a(G0||(G0=T([`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: `,`;
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: `,`;
        &::before {
            opacity: 1;
            background-color: `,`;
        }
    }
    &:active,
    &.active {
        color: `,`;
        &::before {
            background-color: `,`;
        }
    }
    &.disabled {
        cursor: default;
        color: `,`;
        &:hover::before {
            opacity: 0;
        }
    }
`],[`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: `,`;
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: `,`;
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: `,`;
        &::before {
            opacity: 1;
            background-color: `,`;
        }
    }
    &:active,
    &.active {
        color: `,`;
        &::before {
            background-color: `,`;
        }
    }
    &.disabled {
        cursor: default;
        color: `,`;
        &:hover::before {
            opacity: 0;
        }
    }
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var G0,yu=function(A){var e=A.value,t=A.type,r=t===void 0?"border":t,n=A.step,i=n===void 0?1:n,o=A.min,a=o===void 0?0:o,s=A.max,l=s===void 0?100:s,c=A.suffix,u=A.disabled,d=A.onChange;A.className;var p=A.style,v=Jd(A,["value","type","step","min","max","suffix","disabled","onChange","className","style"]),w=bA(H.useState(e),2),x=w[0],g=w[1],f=function(h,C){C<a-i/2||C>l+i/2||(g(C),d==null||d(h,C))};return R(I8,U({className:"StyledNumberInputWrap",style:p,onClick:function(h){return h.stopPropagation()},suffix:c},{children:[B(Li,U({type:r,inputType:"number",value:x,disabled:u,onChange:function(h,C){Number(h)>l||Number(h)<a||(g(Number(h)),d==null||d(C,Number(h)))},showClear:!1,style:{paddingRight:"32px"}},v)),R("div",U({className:"land-numberInput-arrow",style:{borderLeft:r==="border"?"1px solid var(--color-border-2)":"",background:"inherit"}},{children:[B("div",U({className:"land-numberInput-add ".concat(x===l?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(x)+i)}},{children:B(SA,{name:"arrow"})})),r==="border"&&B(I2,{margin:0,lang:"32px"}),B("div",U({className:"land-numberInput-dec ".concat(x===a?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(x)-i)}},{children:B(SA,{name:"arrow"})}))]}))]}))},I8=D.div($0||($0=T([`
  position: relative;
  input{
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
      -webkit-appearance: none;
    }
  }
  .land-numberInput-arrow{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 100%;
    color: var(--color-text-4);
    
    .land-numberInput-add svg{
      transform: rotate(180deg);
    }
    .land-numberInput-add,
    .land-numberInput-dec{
      height: 18px;
      transition: color var(--transition-15) linear;
      cursor: pointer;
      &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &.disabled{
      cursor: not-allowed;
    }
    }
  }
  &::after{
    content: `,`;
    display: block;
    position: absolute;
  }
`],[`
  position: relative;
  input{
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
      -webkit-appearance: none;
    }
  }
  .land-numberInput-arrow{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 100%;
    color: var(--color-text-4);
    
    .land-numberInput-add svg{
      transform: rotate(180deg);
    }
    .land-numberInput-add,
    .land-numberInput-dec{
      height: 18px;
      transition: color var(--transition-15) linear;
      cursor: pointer;
      &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &.disabled{
      cursor: not-allowed;
    }
    }
  }
  &::after{
    content: `,`;
    display: block;
    position: absolute;
  }
`])),function(A){return A.suffix}),$0;D.div(W0||(W0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  font-size: var(--font-content-medium);
  .land-pagination-total {
    flex-shrink: 0;
    color: var(--color-text-4);
  }
  .land-pagination-page{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: var(--gap-8);
    height: fit-content;
  }
  .land-pagination-num-item,
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
    &.active{
      background-color: var(--color-primary-6);
      color: var(--color-text-light);
      border-color: var(--color-primary-6);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &:active:not(.disabled){
      color: var(--color-text-1);
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    position: relative;
    transition: opacity var(--transition-2s) linear;
    svg.arrow{
      position: absolute;
      top: 3px;
      left: 3px;
      background: inherit;
      opacity: 0;
      transition: opacity var(--transition-2s) linear;
    }
    &:hover{
      svg.arrow{
          opacity: 1;
      }
    }
  }
  .land-pagination-input{
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    color: var(--color-text-4);
    white-space: nowrap;
    flex-shrink: 0;
  }
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  font-size: var(--font-content-medium);
  .land-pagination-total {
    flex-shrink: 0;
    color: var(--color-text-4);
  }
  .land-pagination-page{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: var(--gap-8);
    height: fit-content;
  }
  .land-pagination-num-item,
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
    &.active{
      background-color: var(--color-primary-6);
      color: var(--color-text-light);
      border-color: var(--color-primary-6);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &:active:not(.disabled){
      color: var(--color-text-1);
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    position: relative;
    transition: opacity var(--transition-2s) linear;
    svg.arrow{
      position: absolute;
      top: 3px;
      left: 3px;
      background: inherit;
      opacity: 0;
      transition: opacity var(--transition-2s) linear;
    }
    &:hover{
      svg.arrow{
          opacity: 1;
      }
    }
  }
  .land-pagination-input{
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    color: var(--color-text-4);
    white-space: nowrap;
    flex-shrink: 0;
  }
`])));var W0;D.a(X0||(X0=T([`
`],[`
`])));var X0;D.div(J0||(J0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));D.div(Y0||(Y0=T([`
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  &.disabled{
    opacity: var(--opacity-68);
  }
`],[`
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  &.disabled{
    opacity: var(--opacity-68);
  }
`])));D.div(Z0||(Z0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  white-space: nowrap;
  cursor: pointer;
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  white-space: nowrap;
  cursor: pointer;
`])));D.div(q0||(q0=T([`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  flex-shrink: 0;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  flex-shrink: 0;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`])));D.div(Ag||(Ag=T([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var J0,Y0,Z0,q0,Ag,ce=function(A){var e=A.title,t=A.type,r=t===void 0?"h1":t,n=A.prefix,i=A.sub,o=A.info,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R(L8,U({className:"land-title ".concat(l),style:a,onClick:function(){return c==null?void 0:c()}},{children:[n&&B("span",U({className:"land-title-prefix"},{children:n})),r==="h1"&&B("h1",{children:e}),r==="h2"&&B("h2",{children:e}),r==="h3"&&B("h3",{children:e}),r==="p"&&B("p",{children:e}),o&&R("div",U({className:"land-title-info hover-pop"},{children:[B(SA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(Lt,{content:o,style:{maxWidth:"200px"}})]})),i&&typeof i=="string"?B("div",U({className:"land-title-sub"},{children:i})):B(kn,{children:i})]}))},L8=D.div(eg||(eg=T([`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`]))),eg,S8=function(A){var e=A.data,t=A.placeholder,r=t===void 0?"请选择":t,n=A.selected,i=n===void 0?"0":n,o=A.width,a=o===void 0?"100px":o,s=A.title,l=A.titleInfo,c=A.info,u=A.disabled,d=A.onChange,p=A.className,v=p===void 0?"":p,w=A.style,x=bA(H.useState(!1),2),g=x[0],f=x[1],h=bA(H.useState(i),2),C=h[0],F=h[1];return R(_8,U({style:U({width:typeof a=="number"?"".concat(a,"px"):a},w),className:v},{children:[s&&B(ce,{title:s,type:"p",info:l}),R(M8,U({className:"hover-pop ".concat(g?"show":""," ").concat(u?"disabled":""),onClick:function(m){u||(m.stopPropagation(),f(!g))}},{children:[B("p",U({className:"".concat(C!=="0"?"land-select-trigger":"land-select-placeholder")},{children:C==="0"?r:e==null?void 0:e.filter(function(m){return m.value===C})[0].label})),B(SA,{name:"arrow",className:"land-select-value-arrow"}),c&&B(Lt,{content:c,theme:"dark"})]})),B(D8,U({className:"land-select-results ".concat(g?"show":"")},{children:B(K8,{children:e==null?void 0:e.map(function(m){return R(T8,U({className:"".concat(m.tip?"hover-pop":""," ").concat(C===m.value?"selected":""," ").concat(m.disabled?"disabled":""),onClick:function(){m.disabled||(F(m.value),d==null||d(m),f(!1))}},{children:[B("div",U({className:"land-select-results-item-label"},{children:m.label})),m.info&&R("div",U({className:"land-select-item-info ".concat(m.info?"hover-pop":"")},{children:[B(SA,{name:"info-stroke",size:12}),m.info&&B(Lt,{content:m.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]})),m.tip&&B(Lt,{content:m.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]}),m.value)})})}))]}))},_8=D.div(tg||(tg=T([`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`],[`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`]))),M8=D.div(rg||(rg=T([`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`]))),D8=D.div(ng||(ng=T([`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`],[`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`]))),K8=D.ul(ig||(ig=T([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`]))),T8=D.li(og||(og=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`]))),tg,rg,ng,ig,og;D.div(ag||(ag=T([`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`],[`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`])));D.div(sg||(sg=T([`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: fit-content;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  .land-select-value-arrow {
    transition: transform var(--transition-15) ease;
  }
  .land-select-value-divider-arrow{
    transform: rotate(-90deg);
  }
  &.show .land-select-value-arrow {
    transform: rotate(180deg);
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: fit-content;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  .land-select-value-arrow {
    transition: transform var(--transition-15) ease;
  }
  .land-select-value-divider-arrow{
    transform: rotate(-90deg);
  }
  &.show .land-select-value-arrow {
    transform: rotate(180deg);
  }
`])));D.div(lg||(lg=T([`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`],[`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`])));D.ul(cg||(cg=T([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`])));D.li(ug||(ug=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.open{
    background-color: var(--color-bg-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }

  .land-select-item-arrow{
    transform: rotate(-90deg);
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.open{
    background-color: var(--color-bg-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }

  .land-select-item-arrow{
    transform: rotate(-90deg);
  }
`])));D.ul(dg||(dg=T([`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(8px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: var(--padding-small);
  max-height: 200px;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  transition: opacity var(--transition-15) linear;
  box-shadow: var(--boxshadow-small);
  opacity: `,`;
  pointer-events: `,`;
  &::-webkit-scrollbar{
    width: 0px;
    display: none;
  }

`],[`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(8px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: var(--padding-small);
  max-height: 200px;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  transition: opacity var(--transition-15) linear;
  box-shadow: var(--boxshadow-small);
  opacity: `,`;
  pointer-events: `,`;
  &::-webkit-scrollbar{
    width: 0px;
    display: none;
  }

`])),function(A){return A.show?1:0},function(A){return A.show?"all":"none"});var ag,sg,lg,cg,ug,dg;D.aside(fg||(fg=T([`
  padding: 24px;
  position: `,`;
  width: `,`;
  background: var(--color-bg-white);
  border-left: `,`;
  border-right: `,`;
`],[`
  padding: 24px;
  position: `,`;
  width: `,`;
  background: var(--color-bg-white);
  border-left: `,`;
  border-right: `,`;
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var fg;D.div(gg||(gg=T([`
  &::before {
    content: "";
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: `,`;
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: `,`;
  }
`],[`
  &::before {
    content: "";
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: `,`;
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: `,`;
  }
`])),function(A){return A.useDivider?`linear-gradient(to right,transparent calc(100% - 1px), var(--bg-gray-1)  calc(100% - 1px),var(--bg-gray-1) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--bg-gray-1) 0 0 / 100% 100%"):"transparent"},function(A){return A.useDivider?`linear-gradient(to right,transparent calc(100% - 1px), var(--color-gray-2)  calc(100% - 1px),var(--color-gray-2) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--color-gray-2) 0 0 / 100% 100%"):""});D.input(pg||(pg=T([`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type="range"] {
    width: calc(100% - 4px);
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 100%;
    border-radius: 6px;
    background: var(--color-bg-white);
    border: 1px solid rgba(73, 90, 122, 0.12);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
      cursor: ew-resize;
    }
  }
`],[`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type="range"] {
    width: calc(100% - 4px);
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 100%;
    border-radius: 6px;
    background: var(--color-bg-white);
    border: 1px solid rgba(73, 90, 122, 0.12);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
      cursor: ew-resize;
    }
  }
`])));var gg,pg;D.div(hg||(hg=T([`
    display: flex;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active{
      .land-steps-num{
        background-color: var(--color-primary-6);
        border-color: var(--color-primary-6);
        color: var(--color-text-light);
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
    &.finished:not(.active){
      .land-steps-num{
        border: none;
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
  }
  .land-steps-num{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: var(--font-content-small);
    color: var(--color-text-5);
    border: 1px solid var(--color-text-5);
    border-radius: 50%;
    transform: all var(--transition-15) linear;
  }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-4);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`],[`
    display: flex;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active{
      .land-steps-num{
        background-color: var(--color-primary-6);
        border-color: var(--color-primary-6);
        color: var(--color-text-light);
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
    &.finished:not(.active){
      .land-steps-num{
        border: none;
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
  }
  .land-steps-num{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: var(--font-content-small);
    color: var(--color-text-5);
    border: 1px solid var(--color-text-5);
    border-radius: 50%;
    transform: all var(--transition-15) linear;
  }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-4);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`])));var hg;D.div(Bg||(Bg=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar {
    display: flex;
    justify-content: start;
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-2);
    border-radius: 24px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover {
      background-color: var(--color-bg-2);
    }
    &:active {
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator {
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label {
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  & + .land-switch-label-info {
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked {
    .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator {
      transform: translateX(16px);
    }
  }
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar {
    display: flex;
    justify-content: start;
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-2);
    border-radius: 24px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover {
      background-color: var(--color-bg-2);
    }
    &:active {
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator {
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label {
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  & + .land-switch-label-info {
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked {
    .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator {
      transform: translateX(16px);
    }
  }
`])));var Bg;D.table(vg||(vg=T([`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`],[`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`])));var vg,L2=function(A){var e=A.desc,t=A.fileType,r=A.onUpload,n=A.children,i=A.width,o=i===void 0?"100%":i,a=A.height,s=a===void 0?"100%":a,l=A.style,c=A.className,u=c===void 0?"":c,d=A.innerClassName,p=d===void 0?"":d,v=H.useRef(null),w=bA(H.useState(),2),x=w[0],g=w[1],f=bA(H.useState(),2),h=f[0],C=f[1],F=bA(H.useState(!1),2),m=F[0],y=F[1],E=function(J,$){if(J.preventDefault(),y(!0),$){C($);var S=new FileReader;S.readAsDataURL($),g(URL.createObjectURL($)),y(!1)}};H.useEffect(function(){r==null||r(x,h)},[x]);var k=bA(H.useState(!1),2),_=k[0],Y=k[1];return R(N8,U({className:"".concat(_?"drag":""," ").concat(u),style:l,onDragOver:function(J){Y(!0),J.preventDefault()},onDrop:function(J){return E(J,J.dataTransfer.files[0])},onDragLeave:function(){return Y(!1)},width:o,height:s},{children:[B(R8,{ref:v,type:"file",accept:t,className:p,onChange:function(J){E(J,J.target.files[0])}}),n||(m?B(kn,{children:"上传中"}):R(kn,{children:[B("div",U({className:"land-uploader-icon"},{children:B(SA,{name:"upload"})})),(e||_)&&B("div",U({className:"land-uploader-desc"},{children:_?"释放即可上传":e}))]}))]}))},N8=D.label(wg||(wg=T([`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: `,`;
  height: `,`;
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &.drag,
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: var(---font-content-large);
    color: var(--color-text-5);
    transition: all var(--transition-15) linear;
  }
`],[`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: `,`;
  height: `,`;
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &.drag,
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: var(---font-content-large);
    color: var(--color-text-5);
    transition: all var(--transition-15) linear;
  }
`])),function(A){return A.width},function(A){return A.height}),R8=D.input(mg||(mg=T([`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`],[`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`]))),wg,mg;const Wl=[{key:11,title:"编织基础",open:!0,dropData:[{key:11,title:"线材"},{key:12,title:"器材"}]},{key:1,title:"插图教程",open:!0,dropData:[{key:1,title:"钩针"},{key:2,title:"棒针"}]},{key:21,title:"辅助工具",open:!0,dropData:[{key:21,title:"取色"},{key:22,title:"配色"},{key:23,title:"像素格"}]},{key:31,title:"图解收录"}],O8=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"锁针/辫子针",desc:"锁针常用于起针，也可以独立应用。",imgList:[{img_src:"./images/crochet/szhen1.jpg"},{img_src:"./images/crochet/szhen2.jpg",img_des:"1、打一个活结并按图示持线"},{img_src:"./images/crochet/szhen3.jpg",img_des:"2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"},{img_src:"./images/crochet/szhen4.jpg",img_des:"3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"},{img_src:"./images/crochet/szhen5.jpg",img_des:"4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"}]},{id:"2",title:"引拔针",desc:"引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",imgList:[{img_src:"./images/crochet/ybzhen1.jpg"},{img_src:"./images/crochet/ybzhen2.jpg",img_des:"1、如图所示为短针环钩的结尾处"},{img_src:"./images/crochet/ybzhen3.jpg",img_des:"2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"},{img_src:"./images/crochet/ybzhen4.jpg",img_des:"3、拉紧即完成连接"},{img_src:"./images/crochet/ybzhen5.jpg",img_des:"4、接着根据针法选择引拔的锁针高度、参考下图"}]},{id:"3",title:"短针",desc:"短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",imgList:[{img_src:"./images/crochet/dzhen1.jpg"},{img_src:"./images/crochet/dzhen2.jpg",img_des:"1、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/dzhen3.jpg",img_des:"2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"},{img_src:"./images/crochet/dzhen4.jpg",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织短针"},{img_src:"./images/crochet/dzhen5.jpg",img_des:"4、如图为钩织3个短针、接下来按照图解继续完成钩织"}]},{id:"4",title:"中长针",desc:"中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",imgList:[{img_src:"./images/crochet/zczhen1.jpg"},{img_src:"./images/crochet/zczhen2.jpg",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/zczhen3.jpg",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"},{img_src:"./images/crochet/zczhen4.jpg",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"}]},{id:"5",title:"长针",desc:"长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",imgList:[{img_src:"./images/crochet/czhen1.jpg"},{img_src:"./images/crochet/czhen2.jpg",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/czhen3.jpg",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"},{img_src:"./images/crochet/czhen4.jpg"},{img_src:"./images/crochet/czhen5.jpg",img_des:"3、绕线从这2个线圈中钩出，即完成一个长针"}]},{id:"6",title:"长长针",desc:"长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",imgList:[{img_src:"./images/crochet/cczhen1.jpg"},{img_src:"./images/crochet/cczhen2.jpg",img_des:"1、如图所示在钩针上绕线3圈后穿入针目"},{img_src:"./images/crochet/cczhen3.jpg",img_des:"2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"},{img_src:"./images/crochet/cczhen4.jpg"},{img_src:"./images/crochet/cczhen5.jpg"},{img_src:"./images/crochet/cczhen6.jpg",img_des:"3、钩针上只有一个线圈时即完成一个三卷长针"}]},{id:"7",title:"N卷长针",desc:`N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。
N卷长针引拔时高度等于N个锁针。
N卷长针常用于植物钩织。`,imgList:[{img_src:"./images/crochet/jczhen.jpg"}]},{id:"8",title:"加针/分针",desc:"加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",imgList:[{img_src:"./images/crochet/jiazhen.jpg"},{img_src:"./images/crochet/dzjvzhen1.jpg",img_des:"1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"},{img_src:"./images/crochet/dzjvzhen2.jpg",img_des:"2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"}]},{id:"9",title:"减针/并针",desc:"减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",imgList:[{img_des:"短针减针：",img_src:"./images/crochet/dzjazhen1.jpg"},{img_src:"./images/crochet/dzjazhen2.jpg",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/dzjazhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"./images/crochet/dzjazhen4.jpg",img_des:"3、绕线从3个线圈中一次性钩出，即完成一个短针减针"},{img_des:"短针减三针：",img_src:"./images/crochet/dzjmzhen1.jpg"},{img_src:"./images/crochet/dzjmzhen2.jpg",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/dzjmzhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"./images/crochet/dzjmzhen4.jpg",img_des:"3、继续穿过下一个针目后绕线钩出、此时钩针上有4个线圈"},{img_src:"./images/crochet/dzjmzhen5.jpg",img_des:"4、绕线从4个线圈中一次性钩出，即完成一个短针减三针"},{img_des:"中长针减针：",img_src:"./images/crochet/zczjtazhen1.jpg"},{img_src:"./images/crochet/zczjtazhen2.jpg",img_des:"1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/zczjtazhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"},{img_src:"./images/crochet/zczjtazhen4.jpg"},{img_src:"./images/crochet/zczjtazhen5.jpg",img_des:"3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"},{img_des:"长针减针：",img_src:"./images/crochet/czjfazhen1.jpg"},{img_src:"./images/crochet/czjfazhen2.jpg",img_des:"1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/czjfazhen3.jpg",img_des:"2、穿过后绕线钩出、此时钩针上有4个线圈"},{img_src:"./images/crochet/czjfazhen4.jpg",img_des:"3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"},{img_src:"./images/crochet/czjfazhen5.jpg",img_des:"4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"},{img_des:`长针、长长针、N卷长针的减针钩法类似(步骤总结)：
1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目
2、绕线从针目中钩出、钩织第2个未完成的N卷长针
3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈
4、绕线从这些个线圈中一次性钩出`}]},{id:"10",title:"内半针",desc:"内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",imgList:[{img_src:"./images/crochet/nbzhen1.jpg"},{img_src:"./images/crochet/nbzhen2.jpg",img_des:"短针内半针："}]},{id:"11",title:"外半针",desc:"外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",imgList:[{img_src:"./images/crochet/wbzhen1.jpg"},{img_src:"./images/crochet/wbzhen2.jpg",img_des:"短针外半针："}]}]},{cap_id:"2",select:"0",cap:"起针方法",contentMenuList:[{id:"21",title:"手势",desc:"钩织时有一定的绕线方式、拿线方式与拿针方式。",imgList:[{img_src:"./images/crochet/sshi1.jpg",img_des:`绕线方式：
1、如图绕线`},{img_src:"./images/crochet/sshi2.jpg",img_des:"2、左手拇指与中指按住线头/织物、食指与小指配合带线"},{img_src:"./images/crochet/sshi3.jpg",img_des:"拿针方式："},{img_src:"./images/crochet/sshi4.jpg"}]},{id:"22",title:"环起",desc:`通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
环起钩织的织物底面大致为圆形。`,imgList:[{img_src:"./images/crochet/dzhqi.jpg",img_des:"短针环起："},{img_src:"./images/crochet/zczhqi.jpg",img_des:"中长针环起："},{img_src:"./images/crochet/czhqi.jpg",img_des:"长针环起："},{img_des:"提示：环起详细教程请前往笔记页面观看视频教程。"}]},{id:"23",title:"片起",desc:"片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",imgList:[{img_src:"./images/crochet/dzpqi.jpg",img_des:"短针片起："},{img_src:"./images/crochet/zczpqi.jpg",img_des:"中长针片起："},{img_src:"./images/crochet/czpqi.jpg",img_des:"长针片起："},{img_des:"提示：片起详细教程请前往笔记页面观看视频教程。"}]},{id:"24",title:"辫子针环起",desc:`辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
辫子针环起钩织的织物底面大致为圆角矩形。`,imgList:[{img_src:"./images/crochet/dzbzzhqi.jpg",img_des:"短针-辫子针环起："},{img_src:"./images/crochet/zczbzzhqi.jpg",img_des:"中长针-辫子针环起："},{img_src:"./images/crochet/czbzzhqi.jpg",img_des:"长针-辫子针环起："},{img_des:"提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"}]},{id:"25",title:"花片环起",desc:"花片环形起针即在已有轮廓的基础上通过锁针起针，再环绕钩织，通常用于花片、发夹、花边等。",imgList:[{img_src:"./images/crochet/hbqz01.jpg"}]}]},{cap_id:"6",select:"0",cap:"附录",contentMenuList:[{id:"61",title:"钩针符号合集",imgList:[{img_src:"./images/crochet/zmfhao.jpg"}]},{id:"62",title:"英文符号合集",imgList:[{img_src:"./images/crochet/ywfhao.jpg"}]}]}],j8=[{cap_id:"1",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"上针",decs:"上针在织物纹样中对应月牙形。",imgList:[{img_src:"./images/knit/szhen1.jpg"},{img_src:"./images/knit/szhen2.jpg"},{img_src:"./images/knit/szhen3.jpg"},{img_src:"./images/knit/szhen4.jpg"},{img_src:"./images/knit/szhen5.jpg"}]},{id:"2",title:"下针",decs:"下针在织物纹样中对应 V 形。",imgList:[{img_src:"./images/knit/xzhen1.jpg"},{img_src:"./images/knit/xzhen2.jpg"},{img_src:"./images/knit/xzhen3.jpg"},{img_src:"./images/knit/xzhen4.jpg"},{img_src:"./images/knit/xzhen5.jpg"}]}]},{cap_id:"2",select:"0",cap:"起针与收针",contentMenuList:[{id:"21",title:"手势",desc:"棒织时有一定的带线、绕线方式与持针方式，主要包括右手带线和左手带线两种",imgList:[{img_src:"./images/knit/ysdxian1.jpg",img_des:"右手带线：右手如图绕线，在编织时通过右手食指前伸，带线绕过针头。右手带线是最常见的带线方式。"},{img_src:"./images/knit/sshi2.jpg",img_des:"左手带线：左手如图绕线，在编织时左手食指带线绕过针头。左手带线难于右手带线，但熟练后编织速度更快。"}]},{id:"22",title:"基础起针",imgList:[{img_src:"./images/knit/qzhen1.jpg",img_des:"1、将毛线打一个活结，并传入一根棒针。"},{img_src:"./images/knit/qzhen2.jpg",img_des:"2、右手持针，左手如图绕线，如图用棒针挑线带出，左手拉紧线圈，即起好一针。"}]},{id:"23",title:"基础收针",imgList:[{img_src:"./images/knit/shouzhen1.jpg",img_des:"方式1: 收针即右手棒针每织两针，则用左手棒针穿入右手棒针上的前一个线圈，右手棒针将后一个线圈从中带出，以此类推，知道右手剩最后一个线圈。"},{img_src:"./images/knit/shouzhen2.jpg",img_des:"方式2: 用线穿入所有线圈，收紧即可。"}]}]}],P8=[{id:1,title:"线材总述",desc:"纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",img:"./images/xc/xc.jpg",detailList:[{desc:` 
1、毛线的粗细：编织线根据其粗细、材质、形状等分为不同种类，具有相应的特点。
【特细线】编织毛线中最细的一种，轻盈柔软、富有弹力。一般不用单根特细线进行编织，而是将2-3根合成1股，合成后的线材大致与细线或中细线等粗，但更具弹力。
【极细线】比特细线略粗，一般用于编织披肩。
【中细线】是最普遍被使用的毛线品种，容易编织，结实耐用，适用范围广。
【中粗线】是编织衣物最常见的一种，常用于手工编织。
【高粗线】是编织防寒衣物用品的最佳毛线。`},{desc:`
2、线材用量的估算方法：
（1）按照与实物1:4的比例制图，以10cm为单位切分，计算出织物包含多少个单位（不足取整）
（2）以同样的花样编织10cm*10cm织片，测量出单位用量/重量
（3）线材用量 = 单位个数 x 单位用量/重量`,img:"./images/xc/xc01.jpg"},{desc:"3、线材的常见缠线方式：线球、团、绞、束、筒",img:"./images/xc/xc02.jpg"},{desc:"4、手缠线方法：市场上常见的编织线都是成卷的，但是也存在需要自己绕线成卷的情况。如果没有绕线机，可参考图示手缠线的方法整理散线。",img:"./images/xc/xc03.jpg"},{desc:"5、毛线保养提示：",img:"./images/xc/xc04.jpg"},{desc:`
新手贴示：入门时使用5/0号（3.00mm）钩针搭配四股牛奶棉学习。

`}]},{id:2,title:"棉线",desc:"棉线是用棉花纤维搓纺而成的线。棉花是在棉花植物种子周围生长的蓬松物质。大多数棉纱都很容易清洗，如果保养得当，可以非常结实，使用几十年。因此，它是家庭用品、针织袋和包袋的良好纤维。市场上的棉线名称各异，并非均为纯棉线。此处介绍几种常见的棉线。",img:"./images/xc/mx.jpg",detailList:[{desc:`
1、纯棉线：未经处理的纯棉非常适合手工染色。`,img:"./images/xc/cmx.jpg"},{desc:`2、牛奶棉：牛奶棉也称牛奶丝，牛奶蛋白纤维制品属于纺织材料的一种，属于动植物蛋白纤维系列，是将液状牛奶脱脂、去水后所得到的牛奶蛋白质，加上柔和剂，制成牛奶浆液，然后通过湿纺工艺及科学处理，纺制成牛奶蛋白纤维，再经湿纺工艺及科技处理成牛奶丝。市场上牛奶棉通常使用棉+牛奶纤维合成。
牛奶棉是新手入门最常用的线材。根据股数分为不同粗细，最常见的有4股牛奶棉、5股牛奶棉、8股牛奶棉。`,img:"./images/xc/nnm.jpg"},{desc:"【4股牛奶棉】常用于编织玩偶，搭配2-3mm钩针、2.5-3mm棒针",img:"./images/xc/nnm01.jpg"},{desc:"【5股牛奶棉】常用于玩偶、衣物、毯子等，搭配3-4mm钩针、4-4.5mm棒针",img:"./images/xc/nnm02.jpg"},{desc:"【8股牛奶棉】常用于围巾、衣物，搭配5-5.5mm棒针",img:"./images/xc/nnm03.jpg"},{desc:"3、丝光棉：棉纱可以进行丝光处理，在此过程中，它经过机械和化学处理以压缩它，将其转变为具有反光光泽且不会掉毛的超强纱线。丝光棉通常是更昂贵的选择，但它非常适合需要坚固和保持形状的，例如闪亮的晚装包、长款夏季开衫或需要定期洗涤的外套。",img:"sgm"},{desc:"4、竹棉：用于手工针织纱线的竹纤维是通过压碎茎以生产类似亚麻的纤维或通过化学处理制浆植物而生产的，在这种情况下，它被称为“竹粘胶”。 这种纤维具有类似于丝绸的光泽和手感，与其他纤维混合时编织效果最佳。竹子提高了纯棉的透气性和弹性，是夏季衣服和披肩的理想选择。",img:"./images/xc/zm.jpg"}]},{id:3,title:"羊毛线",desc:"羊毛源自各种绵羊品种，例如设得兰绵羊和青面莱斯特绵羊，制成纯毛纱或与其他纤维混合。 它是非常温暖耐用，非常理想用于冬季穿着。粗感羊毛含有短而粗的纤维，可能刺激，针织时选用较软的类型。",img:"./images/xc/ym.jpg",detailList:[{img:"./images/xc/ym01.jpg"},{desc:`
1、美利奴羊毛：这种特殊的羊毛来自美利奴绵羊，拥有绵羊品种中最好的羊毛之一。 长而有光泽的纤维产生柔软的纱线，是贴身穿着的物品的绝佳选择。 它通常与其他纤维混合，并经常进行处理以使其可机洗。`,img:"./images/xc/mln.jpg"},{desc:"2、设得兰羊毛：也称雪莱毛。设得兰是英国绵羊品种中最小的，主要分布在英国苏格兰的设得兰群岛。",img:"./images/xc/sdl.jpg"}]},{id:4,title:"羊绒线",desc:"羊绒是出自山羊身上的绒，即山羊绒，俗称开司米（Cashmere）。羊绒是生长在山羊外表皮层，掩在山羊粗毛根部的一层薄薄的细绒，入冬寒冷时长出，抵御风寒，开春转暖后脱落，自然适应气候，属于稀有的特种动物纤维。",img:"./images/xc/yrx.jpg",detailList:[{desc:`
1、开司米：这种纤维是山羊的柔软底毛，可制成超奢华、天鹅绒般柔软的纱线。 它重量轻但强度高，通常比其他纤维中的同等纱线提供更多的每克码数。 羊绒是一种生产成本高昂的纤维，通常与其他纤维混合以增加柔软度和奢华感。这种纤维只能手洗。`,img:"./images/xc/ksm.jpg"},{desc:"2、马海毛：安哥拉山羊的毛，编织起来会产生独特的天然“光环”。 使用马海毛编织具有一定挑战性，因为带有细绒使得很难看到针织结构。不建议将其用于婴儿服装，因为它在新制作时可能会掉毛，如果吸入可能会造成危险。",img:"./images/xc/mhm.jpg"}]},{id:5,title:"羊驼毛",desc:"羊驼毛(alpaca),又名阿尔帕卡.属于骆驼毛纤维。它比马海毛更细，更柔软，其色泽为白色、棕色、淡黄褐色或黑色，其强力和保暖性均远高于羊毛，非常适合制作滑雪帽、厚实舒适的毛衣和袜子。羊驼毛具有奢华的感觉，是可用于针织的最温暖的天然纤维之一。",img:"./images/xc/ytm.jpg",detailList:[{img:"./images/xc/ytm01.jpg"},{desc:`拓展（羊驼）：
羊驼有骆马、阿尔帕卡、维口纳和干纳柯四个纯种——
【骆马】羊驼毛中最粗最长，弹性较差。
【阿尔帕卡】又称秘鲁羊驼，是羊驼毛中最主要的一种，毛质柔软，长度长，有白色、灰色、黑色和褐色，光泽介于马海毛和驼毛之间，属混合毛类型。可分为两个品种：
(1)霍加耶(Huacayo或Huacaya)：体形较大，与骆马外形相似，其毛呈银光，产量较高，约占秘鲁羊驼的85%左右
(2)苏力(Suri)：体形较小，纤维顺直，毛细密而光滑，与安哥拉山羊相似，具有马海毛般的光泽
【维口纳】野生羊驼，属于混合毛，在羊驼毛中是最细的，品质接近于羊绒，强力与羊绒相似。维口纳羊躯体各部位毛的颜色不同，具有良好的光泽、柔软性和卷曲性，可制造高档的机织物、针织物和礼帽。其数量稀少，较为名贵。
【干纳柯】与维口纳毛相似，但毛略粗。

`}]},{id:6,title:"安哥拉兔毛",desc:"安哥拉兔茂密的背毛产生柔软而长的纤维。它通常与其他纤维混纺，制成具有类似于马海毛的毛茸茸“光环”效果的纱线。安哥拉兔毛编织的物品非常精致，保养讲究。",img:"./images/xc/agltm.jpg",detailList:[{img:"./images/xc/agltm01.jpg"}]},{id:7,title:"蚕丝",desc:"蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，也称天然丝，是一种天然纤维。 由于其非凡的来源，蚕丝纤维一直很昂贵。 其奢华的质地使其成为婚礼和洗礼礼物以及奢华合身针织品的理想之选。",img:"./images/xc/cs.jpg",detailList:[{img:"./images/xc/cs01.jpg"},{desc:`拓展（桑蚕丝与柞蚕丝）：
【桑蚕丝】桑蚕由人工养殖，一般产于南方，手感柔软、光滑，色泽典雅，纤维细，细腻柔美，主要用作服装面料。
【柞蚕丝】柞蚕是野生蚕，一般产于北方，强伸度强、耐腐蚀性，耐光性，吸湿性、色泽天然，纤维粗吸湿透气，蓬松保暖好。

`}]},{id:8,title:"麻线",desc:"此处介绍亚麻线、大麻线和苎麻线三种类型。",img:"./images/xc/max.jpg",detailList:[{desc:`
1、亚麻线:这种纤维通常来自亚麻植物。 结实，表面油腻、蜡质，但能制出光滑、柔软、透气的纱线，非常适合编织成轻质开衫和上衣，在温暖的天气里穿着。`,img:"./images/xc/ymx.jpg"},{desc:"2、大麻线:大麻植物的用途特别广泛，将其纤维用于针织纱线是其不太常见的应用之一。 大麻具有泥土般的粗糙感，会随着年龄和磨损而软化。 它通常以环保方式生产，强度高的纤维有利于编织镂空购物袋、餐垫和杯垫等家居用品。",img:"./images/xc/dmx.jpg"},{desc:"3、苎麻线:荨麻科的一种植物产生称为苎麻的纤维。植物的内皮被加工成有光泽但有点脆的纤维，所以它们通常在纺成纱线之前与其他纤维混合。 与其他植物纤维一样，苎麻不能很好地隔热，但能生产出透气、耐用的面料。",img:"./images/xc/zmx.jpg"}]},{id:9,title:"腈纶",desc:"腈纶纤维由乙烯制成，乙烯是从石油中提炼出来的，制造成本非常低廉。 腈纶纱线比其他合成纤维略粗糙，并且通常具有非常明亮和明亮的色调，而这些色调很难用天然纤维制成。腈纶纱线比较坚固，是玩具、新颖针织品和预算项目的理想选择。腈纶容易积聚静电。",img:"./images/xc/jl.jpg",detailList:[{img:"./images/xc/jl01.jpg"}]},{id:10,title:"尼龙",desc:"聚酰胺（俗称尼龙）是一种非常坚固且轻便的纤维。它的弹性使其非常适合针织面料，通常用于增强可能遭受严重磨损的物品的混纺纱。 与其他人造纤维一样，尼龙通过防止收缩和毡化来提高与之混合的纤维的耐洗性。",img:"./images/xc/nl.jpg",detailList:[{img:"nl01"}]},{id:11,title:"雪尼尔",desc:"雪尼尔通常由棉和合成纤维组成，中间为一根结实的芯子。 雪尼尔织物将具有奢华、天鹅绒般的感觉。 雪尼尔非常适合平纹针迹，但不太适合复杂图案和蕾丝和绳索等工作，因为它表面带绒，可以隐藏细节。",img:"./images/xc/xne.jpg",detailList:[{img:"./images/xc/xne01.jpg"}]},{id:12,title:"毛圈纱",desc:"毛圈纱也被称为“贵宾犬”纱线，其卷曲外观是由附着在实心纱线上的柔软纤维的漩涡形成的。 针织时，这些纤维环突出并营造出贵宾犬毛皮效果。这种纱线非常适合制作形状非常简单的服装，或为平纹长袜针迹针织物增添有趣的质感。",img:"./images/xc/mqs.jpg",detailList:[{img:"./images/xc/mqs01.jpg"}]},{id:13,title:"粗花呢",desc:"“粗花呢”描述了一种由羊毛制成的经典机织布，通常在布中带有对比色的斑点。原始粗花呢由来自各种彩色绵羊的未染色羊毛制成，但现在它们有多种颜色，并带有从明亮到微妙的各种斑点。 粗花呢纱线可能具有“杂色”或泥灰底色，并且在纺丝时添加了标志性的斑点，增加了纹理和颜色的趣味。",img:"./images/xc/chn.jpg",detailList:[{img:"./images/xc/chn01.jpg"}]},{id:14,title:"灌芯线",desc:"灌芯线也称为“绳”纱，通常以柔软的纤维（如羊毛或棉花）制成的纱线为芯，然后包裹在更细的纱线中，如金属线或尼龙。 弹力纱线通常以这种方式纺制，带有弹性纤维芯，包覆纱通常包裹得非常密集。",img:"./images/xc/gxx.jpg",detailList:[{img:"./images/xc/gxx01.jpg"}]},{id:15,title:"扁带线",desc:"扁带线类似于带状，通常都由合成纤维或植物纤维混纺制成，以赋予它们强度和光泽。很多扁带纱线很滑，必须特别注意针距和处理。",img:"./images/xc/bdx.jpg",detailList:[{desc:`
1、扁带线：扁带线的主要特征是其扁平的轮廓。`,img:"./images/xc/bdx01.jpg"},{desc:"2、缎带纱：带状纱的形状类似于带状纱，但通常更宽一些。 丝带纱线特别适合制作漂亮的配饰。",img:"./images/xc/dds.jpg"}]},{id:16,title:"布条线",desc:"布条线即织物条。 传统上，旧衣服和其他纺织品的织物通常制成条带绑在一起制成门垫和地毯。即也可以考虑使用织物条进行编织。针的大小将取决于条带的厚度。布条线非常流行的织法是钩织布条包。",img:"./images/xc/btx.jpg",detailList:[{desc:`
布条线的花纹或图案由织物条而定：`,img:"./images/xc/btx01.jpg"},{desc:`新手贴示：选购布条线时侧重线材是否”起球”的问题！

`}]},{id:17,title:"弹力纱",desc:"弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",img:"./images/xc/tls.jpg",detailList:[{img:"./images/xc/tls01.jpg"}]},{id:18,title:"反光纱",desc:"弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",img:"./images/xc/fgs.jpg",detailList:[{img:"./images/xc/fgs01.jpg"}]},{id:19,title:"蕾丝线",desc:"蕾丝线即100%纯棉强捻的线，是微钩主要线材。蕾丝线捻度高、有骨感、通过丝光烧毛处理后色彩更光亮，硬度更大，不容易起毛起球。",img:"./images/xc/lsx.jpg",detailList:[{desc:`
蕾丝线号数：通常号数越大线越细。常用的蕾丝线主要有3#、8#、80#等。`,img:"./images/xc/lsx01.jpg"}]},{id:20,title:"冰条线",desc:"冰条线带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",img:"./images/xc/bingtx.jpg",detailList:[{img:"./images/xc/bingtx01.jpg"},{desc:`新手贴士：使用冰条线钩织时可借助棉线起针、收圈。

`}]},{id:21,title:"软纺纱",desc:"软纺纱通常比普通纱线更透气，密度更小，多股轻柔捻合的纤维松散地合在一起制成。 它可以由棉、羊毛或混合纤维制成，针织时轻盈、有弹性且非常柔软。 通常以这种方式纺出非常粗的纱线，以防止针织服装过重或随后变形。这些粗纱适合制作厚实的、快速编织的配饰。",img:"./images/xc/rfs.jpg",detailList:[{desc:`
1、冰岛毛：冰岛毛原为冰岛羊的毛。但由于冰岛羊毛价格高昂，且并不坚韧，逐步被腈纶冰岛毛所替代。如今市场上所说的冰岛毛，大部分为腈纶冰岛毛。 
拓展（冰岛羊）：冰岛羊的历史已经超过了一千多年，它是当年北欧海盗从斯堪第纳维亚和爱尔兰带来的羊的后代，基本上没有和其它羊种杂交，是一种纯种羊。在一千多年的独特环境中，冰岛羊形成了独特的耐寒抗病的能力。冰岛羊和其它绵羊的明显区别是冰岛羊终年披着厚厚的羊毛，外面是一层厚厚的长达十几厘米的普通毛，里面则是软绒绒的绒毛。`,img:"./images/xc/bdm.jpg"},{desc:"2、羊毛粗纱：具有毛茸茸、蓬松的特点，纤维沿其长度方向相互平行。 粗纱是在纤维加工的早期阶段生产的，即在加捻形成纱线之前。 因此，羊毛粗纱在纵向拉扯时往往会被拉开；，也会脱落纤维并可能起球。 合成粗纱的纤维较长，因此具有更高的固有强度。",img:"./images/xc/ymcs.jpg"}]},{id:22,title:"长绒线",desc:"此处将各种表面带有绒毛、编织难度较大的线材统称为长绒线。",img:"./images/xc/crx.jpg",detailList:[{desc:`
1、珊瑚绒`,img:"./images/xc/shr.jpg"},{desc:"2、皮草绒",img:"./images/xc/pcr.jpg"},{desc:"3、长毛水貂绒",img:"./images/xc/sdr.jpg"},{desc:"长绒线织物示例：",img:"./images/xc/crx01.jpg"}]},{id:23,title:"仿羊毛毡线",desc:"仿羊毛毡线指表面带有微绒，针织成品类似羊毛毡效果的线材。",img:"./images/xc/fymzx.jpg",detailList:[{desc:`
织物示例：`,img:"./images/xc/fymzx01.jpg"},{desc:`新手贴士：使用仿羊毛毡线钩织时多使用记号扣！

`}]},{id:24,title:"合股线/混合线",desc:`合股线是将多股单纱捻合而成。
混合线指将多根线材混合编织以形成不同的花纹，同时增加厚度。`,img:"./images/xc/hgx.jpg",detailList:[{desc:`
1、合股线：一方面，大多数用于手编的纱线都是合股的，可以增加稳定性和厚度；另一方面，将几种颜色混合在一起形成的合股纱线会产生不同的纹理。`,img:"./images/xc/hgx01.jpg"},{desc:"2、混合线：通过将混线的方式编织可以得到很多各具特色的花纹。",img:"./images/xc/hhx.jpg"}]},{id:25,title:"合成线材",desc:"冰条线源自废石油渣，带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",img:"./images/xc/hcx.jpg",detailList:[{desc:`
1、羊毛和棉：棉的强度和柔软性为羊毛非常保暖（有时会有点扎）的特性增加了光滑度、透气性和耐洗性。该混合物非常适合皮肤敏感的人和婴儿。`,img:"./images/xc/hcx01.jpg"},{desc:"2、天然纤维和合成纤维：人造纤维通常与天然纤维混合，以带来结构、强度和耐洗性；或者出于审美原因，例如添加光泽。它们有助于将其他纱线（如马海毛和羊毛）粘合在一起，并防止脱落，还可以防止动物纤维收缩。",img:"./images/xc/hcx01.jpgg"},{desc:"3、纯合成线：制造商可以混合人造纤维以创造各种质地的线材。尽管与动物纤维相比，它们的保暖性不高，但大多数纯合成纤维混合物可以经常洗涤，有些还可以烘干。",img:"./images/xc/hcx03.jpg"}]},{id:26,title:"特殊线材",desc:"生活中许多材料都可作为钩织线材，此处简单举几例。",img:"./images/xc/tsx.jpg",detailList:[{desc:`
1、塑料线：`,img:"./images/xc/slx.jpg"},{desc:"2、塑料绳：",img:"./images/xc/sls.jpg"},{desc:"3、胶制线：",img:"./images/xc/jzx.jpg"},{desc:"4、金属线：",img:"./images/xc/jsx.jpg"}]}],V8=[{id:1,title:"新手必备",desc:"此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",img:"./images/qc/xsbbei.jpg",detailList:[{desc:`
1、钩针入门必备：钩针+记号扣+缝合针+剪刀`,img:"./images/qc/xsbbei01.jpg"},{desc:"2、棒针入门必备：棒针+剪刀+缝合针+卷尺/密度尺",img:"./images/qc/xsbbei02.jpg"},{desc:`新手贴士：以上工具指入门学习针法时必备工具，其他工具需要根据自己参照的具体织物选择，例如学习玩偶钩织时需准备填充棉。

`}]},{id:2,title:"钩针",desc:"钩针是钩织必备工具。钩针有单头和双头之分，按材质大致分为金属制、塑料制、木制和竹制（其中最常用的为金属制钩针）。钩针有多种尺寸以满足不同类型的线材和规格。",img:"./images/qc/gzhen.jpg",detailList:[{desc:`
1、钩针结构图示：如图，钩针由尖端、喉部、柄部、头部、拇指托、手柄几个基本部分组成。更尖的尖端可以更容易地进入紧密的针迹，而更圆的尖端不会分裂纱线，适合绒线与粗线钩织。拇指托帮助控制和旋转钩子，手柄有助于在钩针编织时平衡钩子。`,img:"./images/qc/gzhen01.jpg"},{desc:`2、钩针材质：钩针通常由金属或塑料制成，也存在由木头或竹子制成的钩针。
【金属钩针】光滑、坚固且经久耐用，但握感可能冰冷和僵硬。
【木制钩针】感觉温暖而有弹性，但需要精心加工才能使其表面光滑。
【塑料钩针】光滑且价格低廉，但与某些纱线一起使用时会发出吱吱声，并且相对容易弯曲或断裂。竹制钩针轻巧灵活，但容易碎裂或折断，尤其是较小的尺寸。`,img:"./images/qc/gzhen02.jpg"},{desc:`3、钩针粗细度：一般用型号表示，普通钩针从2/0号（针轴直径2.0mm）到10/0号（针轴直径6.0mm），除此之外还有更细或更粗的钩针。
新手贴士：钩针型号与线材大致对应，购买毛线时可查看或咨询其对应的钩针型号以作参考。`,img:"./images/qc/gzhen03.jpg"},{desc:"粗型钩针：",img:"./images/qc/gzhen04.jpg"},{desc:"4、钩针图例：",img:"./images/qc/gzhen05.jpg"},{desc:`新手贴示：入门时使用4/0号（2.5mm）钩针搭配四股牛奶棉学习。

`}]},{id:3,title:"棒针",desc:"棒针是棒针编织必备工具。",img:"./images/qc/bzhen.jpg",detailList:[{desc:`
1、棒针类型：棒针包括双头棒针、单头棒针、环形针、袖口针等。
【双头棒针】最常用的棒针，编织衣物的传统选择。针数较多时可能会在针头滑线，可使用堵头解决。
【单头棒针】单头棒针可以帮助固定织片线圈不易从针头滑下。
【环形针】一根软线连接两个针尖，制成一对环形针。
【袖口针】袖口针用于编织袜子等环形织物。`,img:"./images/qc/bzhen01.jpg"},{desc:`2、棒针材质：棒针通常有金属针、塑料针、竹针、木针。
【金属棒针】光滑耐用。 如果发现自己编织得太紧，使用光滑的金属棒针会帮助编织者的张力松弛。
【塑料棒针】表面平滑度介于金属和竹子之间。塑料棒针在使用过程中保持稳定的温度，这可能适合患有关节炎的人。
【竹制棒针】竹子是一种轻巧、灵活的材料，可以制作出色的织针。它有助于保持针迹有规律地间隔，从而形成具有良好张力的均匀针织面料。竹针非常适合丝绸、丝光棉和竹纱等光滑纤维。竹针会随着使用而逐渐轻微翘曲，以适合您的手部曲率。
【木制棒针】木针会选用品质较好的木料制成，使用起来感觉很豪华，价格较贵。木针通常具有蜡质表面，磨损后会变得光滑，从而形成柔软且有触感的表面。像竹针一样，它们有助于产生均匀的张力。`,img:"./images/qc/bzhen02.jpg"},{desc:"3、棒针粗细度：（新手贴士：棒针型号与线材大致对应，购买毛线时可查看或咨询其对应的棒针型号以作参考）",img:"./images/qc/bzhen03.jpg"},{desc:"4、棒针图例：",img:"./images/qc/bzhen04.jpg"}]},{id:4,title:"记号扣",desc:"记号扣也称记号别针，用于挂在针脚处，便于确认起始针目或确认行数。记号扣材质主要分为塑料和金属，最常用的为普通的塑料记号扣。",img:"./images/qc/jhkou.jpg",detailList:[{desc:`
1、记号扣类型（左图最常见、新手必备）`,img:"./images/qc/jhkou01.jpg"},{desc:"2、使用示例:标记每一圈第一针的针目。",img:"./images/qc/jhkou02.jpg"}]},{id:5,title:"缝合针",desc:"缝合针在缝合织片、缝合编织主体（例如玩偶的不同部分）或藏线头时使用。缝合针按材质分为塑料和金属（钢针）",img:"./images/qc/fhzhen.jpg",detailList:[{desc:`
1、缝合针材质：缝合针通常有金属和塑料两种材质。
【塑料缝合针】针孔通常较大，适合较粗毛线的缝合。
【金属缝合针】金属针较细，缝合时不会影响织物的结构。`,img:"./images/qc/fhzhen01.jpg"},{desc:"2、使用示例：",img:"./images/qc/fhzhen02.jpg"},{desc:`
新手贴士：可准备钢针和塑料针各一根以适用不同场景。

`}]},{id:6,title:"剪刀",desc:"钩织过程中推荐准备中型剪刀（处理常规线材）和U型剪刀（前端较尖、处理较细线材）两种类型，适用于不同场景。",img:"./images/qc/jdao.jpg",detailList:[{img:"./images/qc/jdao01.jpg"}]},{id:7,title:"卷尺",desc:"卷尺用于测量织物尺寸，计算线材用量等。",img:"./images/qc/jchi.jpg",detailList:[{img:"./images/qc/jchi01.jpg"}]},{id:8,title:"密度尺",desc:"密度尺有两个作用，一是测量织片的密度，二是用于测量棒针的针号。",img:"./images/qc/mdchi.jpg",detailList:[{desc:`
1、密度尺图例：密度尺可以是直接整体测量的正方形，也可以是单边测量的长条形。`,img:"./images/qc/mdchi01.jpg"},{desc:"2、使用示例：",img:"./images/qc/mdchi02.jpg"}]},{id:9,title:"麻花针",desc:"借助麻花针可以在棒针编织中织出各式各样的“麻花”花纹。",img:"./images/qc/mhzhen.jpg",detailList:[{desc:`
1、麻花针种类`,img:"./images/qc/mhzhen01.jpg"},{desc:"2、麻花针花纹示例：",img:"./images/qc/mhzhen02.jpg"}]},{id:10,title:"针帽/堵头",desc:"针帽套在棒针针头处防止线圈滑落。",img:"./images/qc/zmao.jpg",detailList:[{desc:`
针帽种类:`,img:"h./images/qc/zmao01.jpg"}]},{id:11,title:"计数器",desc:"计数器套在棒针针头处记录行数。",img:"./images/qc/jsqi.jpg",detailList:[{desc:`
常见计数器即左图所示，另外市场上还有用于计数的计数戒指，如右图所示，可以戴在编织者手上实时计数。`,img:"./images/qc/jsqi.jpg"}]},{id:12,title:"绕线工具",desc:"绕线工具用于将散线缠绕成团。根据线材的多少选择不同的绕线器材。",img:"./images/qc/rxgju.jpg",detailList:[{desc:`
1、伞架：将散线整理成绞或直接将绞线套在伞架上，搭配绕线器将散线绕成团。`,img:"./images/qc/rxgju01.jpg"},{desc:"2、绕线板：散线较少时可以使用绕线板简单绕线。",img:"./images/qc/rxgju02.jpg"},{desc:"3、手摇绕线器：散线较多时可以使用手摇绕线器进行绕线。",img:"./images/qc/rxgju03.jpg"}]},{id:13,title:"定位针",desc:"定位针原多用于立体剪裁，在编织中可以帮助固定织物形状及位置，便于缝合。",img:"./images/qc/dwzhen.jpg",detailList:[{desc:`
定位针种类:最常见的定位针主要有T型针和大头珠针两种，当然市场上还存在各式各样的定位针，其用途一致。`,img:"./images/qc/dwzhen01.jpg"}]},{id:14,title:"镊子",desc:"镊子可以用于往织物中塞填充棉、粘贴玩偶眼睛配件等。在微钩时镊子也常用于粘贴各种细微配件或在染色时使用。",img:"https://s2.loli.net/2022/01/25/O9pGiAseXYDP7r2.png",detailList:[{img:"https://s2.loli.net/2022/01/26/djTCY6w3AU1xOSQ.png"}]},{id:15,title:"填充棉",desc:"填充棉用于填充织物，钩织玩偶、抱枕等需要用到。",img:"./images/qc/tcmian.jpg",detailList:[{desc:`
1、填充棉种类：常见的填充棉有珍珠棉和PP棉两种类型。
【珍珠棉】高弹耐压，饱满厚实，颗粒状。
【PP棉】蓬松柔软`,img:"./images/qc/tcmian01.jpg"},{desc:"2、填充方法：织物即将钩完时留1-2圈，使用镊子或剪刀尖部向内塞填充棉。",img:"./images/qc/tcmian02.jpg"},{desc:`新手贴示：用量参考45cm*45cm抱枕的用量约为500克，实际情况根据个人对织物的柔软度喜好而异。

`}]},{id:16,title:"镊子",desc:"镊子用于塞填充棉，或者辅助微钩。",img:"./images/qc/nzi.jpg",detailList:[{img:"./images/qc/nzi01.jpg"}]},{id:17,title:"染料",desc:"染料常用于微钩中对原色织物染色，比如微钩水果、花卉等，燃料浓度较高，通常按照一定比例搭配稀释剂或清水使用。",img:"./images/qc/rliao.jpg",detailList:[{img:"./images/qc/rliao01.jpg"}]},{id:18,title:"尖钳",desc:"尖钳用于用到金属配件的织物，比如挂件、钥匙扣、需要定型的花卉、玩偶等。",img:"./images/qc/jqian.jpg",detailList:[{img:"./images/qc/jqian01.jpg"}]},{id:19,title:"热熔胶枪",desc:"热熔胶枪用于黏贴织物与配件，使用时待其冷却方可粘牢。",img:"./images/qc/jqiang.jpg",detailList:[{img:"./images/qc/jqiang01.jpg"}]}],z8=[{id:1,title:"雪花熊",desc:`钩针：4.0-6.0mm
线材：绒线200g(具体因线材而异)
填充棉：珍珠棉
成品高度：40cm`,img:"https://s2.loli.net/2022/01/26/ij7pRsyKQxeHZUa.png",detail:"https://ingenueland.online/crochet-time/images/tujie/xuehuaxiong.jpg"},{id:2,title:"粉茶兔",desc:`钩针：4.0-6.0mm
线材：绒线150g(鼻子：粉色4股牛奶棉)
填充棉：pp棉
成品高度：30cm(加上耳朵40cm)`,img:"https://s2.loli.net/2022/01/26/NmheaOdnLIlZV5C.png",detail:"https://ingenueland.online/crochet-time/images/tujie/fenchatu.jpg"},{id:3,title:"灰色长绒兔",desc:`钩针：4.0-6.0mm
线材：绒线300g
填充棉：pp棉
成品高度：30cm(加上耳朵45cm)`,img:"https://s2.loli.net/2022/01/26/GQnk54AXeqSULpE.png",detail:"https://ingenueland.online/crochet-time/images/tujie/huisechangrongtu.jpg"},{id:101,title:"水蜜桃耳环",desc:`钩针：0.5mm
线材：DMC80
染色：Rosti红色
成品大小：直径0.8cm 高度1.2cm`,img:"https://s2.loli.net/2022/01/26/eMVlaK1LfspUE2G.png",detail:"https://ingenueland.online/crochet-time/images/tujie/shuimitaoerhuan.jpg"},{id:102,title:"水蜜桃挂件",desc:`钩针：0.75mm
线材：8号蕾丝线
染色：Rosti红色
成品大小：直径2.5cm 高度2cm`,img:"https://s2.loli.net/2022/01/26/3L9fRdEloyXOk2H.png",detail:"https://ingenueland.online/crochet-time/images/tujie/shuimitaoguajian.jpg"},{id:201,title:"白熊眼罩",desc:`钩针：4.0mm
线材：仿羊毛毡`,img:"https://s2.loli.net/2022/01/26/q81UFXKWIGSlYMZ.png",detail:"https://ingenueland.online/crochet-time/images/tujie/baixiongyanzhao.jpg"},{id:202,title:"熊猫卡衣",desc:`钩针：3.0mm
线材：雪兰娇中粗羊毛线
配件：塑料卡包内芯、18mm磁扣`,img:"https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",detail:"https://ingenueland.online/crochet-time/images/tujie/xiongmaokayi.jpg"}],G8=[{id:1,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-1.png",path:["M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z","M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z","M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z","M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z","M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z"]},{id:2,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-2.png",path:["M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z","M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z","M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z","M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z","M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z"]}],$8=[{id:1,title:"萌4",colors:[{name:"#01",value:"#F3F2F0"},{name:"#02",value:"#F5F6F1"},{name:"#03",value:"#F3EADB"},{name:"#04",value:"#FAE9E1"},{name:"#01",value:"#FED5DD"},{name:"#02",value:"#FBA3C9"},{name:"#01",value:"#F67B97"},{name:"#02",value:"#FF6CBC"},{name:"#03",value:"#C52D2C"},{name:"#04",value:"#F0E4BC"},{name:"#01",value:"#FCE281"},{name:"#02",value:"#F2E15D"},{name:"#01",value:"#F6B453"},{name:"#02",value:"#DF5F3C"},{name:"#03",value:"#D5B6DC"},{name:"#04",value:"#D08BDE"},{name:"#01",value:"#E2FAE6"},{name:"#02",value:"#98CAFA"},{name:"#01",value:"#83A0E7"},{name:"#02",value:"#3850B0"},{name:"#03",value:"#272954"},{name:"#04",value:"#AEE5E2"},{name:"#01",value:"#59A3BA"},{name:"#02",value:"#DCFAD3"},{name:"#01",value:"#98BC44"},{name:"#02",value:"#415B2E"},{name:"#03",value:"#048C62"},{name:"#04",value:"#EAE1D0"},{name:"#01",value:"#F0C892"},{name:"#02",value:"#D5A268"},{name:"#01",value:"#9B734C"},{name:"#02",value:"#6D473C"},{name:"#03",value:"#A4A4A4"},{name:"#04",value:"#000000"},{name:"#01",value:"#E8CEA2"},{name:"#02",value:"#E4E4E4"},{name:"#01",value:"#FAB6AA"},{name:"#02",value:"#D5A7BE"},{name:"#03",value:"#FD780F"},{name:"#04",value:"#DAD46A"},{name:"#01",value:"#81C7C7"},{name:"#02",value:"#6783A1"},{name:"#01",value:"#F2DDD5"},{name:"#02",value:"#EEC3C4"},{name:"#03",value:"#70B8BE"},{name:"#04",value:"#196182"},{name:"#01",value:"#BDCE9E"},{name:"#02",value:"#D3B358"},{name:"#01",value:"#6A447A"},{name:"#02",value:"#7F2735"},{name:"#03",value:"#F8F8F1"},{name:"#04",value:"#F49CB7"},{name:"#01",value:"#E4AFCF"},{name:"#02",value:"#02937E"},{name:"#01",value:"#7F9351"},{name:"#02",value:"#C5B7D3"},{name:"#03",value:"#A58CBB"},{name:"#04",value:"#04A4C5"},{name:"#01",value:"#1F6F5F"},{name:"#02",value:"#995920"},{name:"#01",value:"#7D5121"},{name:"#02",value:"#944928"},{name:"#03",value:"#F5C73D"},{name:"#04",value:"#EABE8D"},{name:"#01",value:"#EEA48F"},{name:"#02",value:"#99282D"},{name:"#02",value:"#B15249"}]},{id:2,title:"lifeyarn 羽",colors:[{name:"01",value:"#F3EBE0"},{name:"01",value:"#F1E5E7"},{name:"01",value:"#E4E2E0"},{name:"01",value:"#F7BFA9"},{name:"01",value:"#ADADAD"},{name:"01",value:"#2C5238"},{name:"01",value:"#86718E"},{name:"01",value:"#CCD2BC"},{name:"01",value:"#90A77D"},{name:"01",value:"#DC7D45"},{name:"01",value:"#F3CCA4"},{name:"01",value:"#FFC459"},{name:"01",value:"#AF2728"},{name:"01",value:"#72323C"},{name:"01",value:"#D0CB8A"},{name:"01",value:"#73C26E"},{name:"01",value:"#D1E4EB"},{name:"01",value:"#78BEE8"},{name:"01",value:"#8FAEDF"},{name:"01",value:"#13193A"},{name:"01",value:"#518F7F"},{name:"01",value:"#B39FCC"},{name:"01",value:"#B19F9E"},{name:"01",value:"#6A4F49"},{name:"01",value:"#EFE5AB"},{name:"01",value:"#E7DECB"},{name:"01",value:"#CD8893"},{name:"01",value:"#E3A286"}]},{id:3,title:"superwash merino",colors:[{name:"01",value:"#FBF6F4"},{name:"01",value:"#D1CB6B"},{name:"01",value:"#6F784B"},{name:"01",value:"#61A3D2"},{name:"01",value:"#3E4B82"},{name:"01",value:"#AD251F"},{name:"01",value:"#59342E"},{name:"01",value:"#C0C0C3"}]}],W8=({style:A,className:e=""})=>Q.jsxs("svg",{width:"52%",viewBox:"0 0 2594 490",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:A,className:e,children:[Q.jsxs("g",{"clip-path":"url(#clip0_401_299)",children:[Q.jsx("rect",{width:"2594",height:"490",fill:"white"}),Q.jsx("path",{d:"M1425.6 461.505V180.477C1425.6 160.844 1458.67 161.39 1458.67 180.477V389.474C1458.67 402.522 1458.67 404.705 1456.53 418.941L1453.06 446.586C1452.78 448.781 1456.21 449.991 1457.61 448.275C1473.51 428.749 1493.52 434.856 1477.87 468.195C1466.36 492.689 1425.6 494.791 1425.6 461.505Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),Q.jsx("path",{d:"M1523.52 312.552H1366.19C1347 312.552 1347.54 278.719 1366.19 278.719H1453.12C1465.88 278.719 1468.01 278.719 1481.92 280.902L1509.09 284.476C1511.27 284.763 1512.5 281.404 1510.82 279.99C1491.46 263.694 1497.35 242.994 1530.06 259.075C1554 270.843 1556.06 312.552 1523.52 312.552Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),Q.jsx("circle",{cx:"108.274",cy:"292.525",r:"100",transform:"rotate(70.6084 108.274 292.525)",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),Q.jsx("path",{d:"M11.0642 323.563C32.1071 387.793 71.0477 430.726 166.227 439.099",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),Q.jsx("path",{d:"M15.3705 249.957C36.7982 197.89 97.3489 159.084 164.593 142.305",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),Q.jsx("path",{d:"M140.226 428.415L140.862 433.374L140.226 428.415C132.918 429.353 131.813 439.395 138.468 442.093C143.609 444.177 147.148 446.004 154.021 449.716C163.268 454.71 172.502 455.613 180.066 456.353C181.444 456.488 182.767 456.618 184.024 456.765L184.138 456.779L184.254 456.787L294.718 464.614L294.732 464.615C310.945 465.718 323.547 465.055 332.331 463.229C336.693 462.323 340.403 461.071 343.186 459.403C345.845 457.808 348.642 455.202 348.947 451.317C349.255 447.404 346.866 444.406 344.452 442.446C341.937 440.405 338.44 438.659 334.248 437.17C325.806 434.171 313.378 431.806 297.05 430.694C297.047 430.694 297.044 430.694 297.041 430.693L186.408 422.749L186.129 422.729L185.85 422.74C185.036 422.773 183.936 422.757 182.576 422.737C176.935 422.656 166.819 422.511 154.117 425.483L153.926 425.528L153.74 425.587C149.342 426.986 145.217 427.774 140.226 428.415Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),Q.jsx("path",{d:"M148.888 153.923L148.82 148.924L148.888 153.923C141.521 154.023 139.013 144.236 145.223 140.629C150.019 137.842 153.266 135.534 159.548 130.892C167.999 124.647 177.014 122.452 184.399 120.655C185.744 120.327 187.035 120.013 188.259 119.69L188.371 119.661L188.484 119.636L296.747 96.3392L296.761 96.3363C312.656 92.962 325.227 91.8444 334.18 92.4157C338.626 92.6995 342.475 93.4162 345.466 94.6764C348.323 95.8808 351.459 98.0677 352.308 101.87C353.163 105.701 351.22 109.006 349.106 111.286C346.904 113.661 343.686 115.881 339.746 117.946C331.81 122.103 319.839 126.194 303.83 129.593C303.827 129.594 303.824 129.595 303.821 129.595L195.408 153.032L195.135 153.091L194.856 153.12C194.047 153.202 192.96 153.372 191.615 153.583C186.042 154.457 176.047 156.025 163.053 154.87L162.858 154.853L162.665 154.821C158.114 154.054 153.92 153.855 148.888 153.923Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),Q.jsx("path",{d:"M400.999 329C400.999 315.4 399.132 305.4 395.399 299C391.666 292.333 384.199 289 372.999 289H368.999V281H400.999C411.132 281 418.732 282.467 423.799 285.4C429.132 288.067 432.866 292.6 434.999 299H436.999C441.799 292.867 448.199 287.667 456.199 283.4C464.466 279.133 474.066 277 484.999 277C495.666 277 503.666 279 508.999 283C513.532 286.467 518.199 292.467 522.999 301L506.999 313C504.066 309 499.799 306.067 494.199 304.2C488.599 302.067 482.199 301 474.999 301C466.999 301 459.666 302.867 452.999 306.6C446.332 310.067 440.999 314.867 436.999 321V469H400.999V329ZM630.134 473C612.001 473 596.268 468.733 582.934 460.2C569.601 451.4 559.468 439.533 552.534 424.6C545.601 409.667 542.134 393.133 542.134 375C542.134 356.867 545.601 340.333 552.534 325.4C559.468 310.467 569.601 298.733 582.934 290.2C596.268 281.4 612.001 277 630.134 277C648.268 277 664.001 281.4 677.334 290.2C690.668 298.733 700.801 310.467 707.734 325.4C714.668 340.333 718.134 356.867 718.134 375C718.134 393.133 714.668 409.667 707.734 424.6C700.801 439.533 690.668 451.4 677.334 460.2C664.001 468.733 648.268 473 630.134 473ZM630.134 457C640.001 457 648.668 453.4 656.134 446.2C663.868 439 669.734 429.133 673.734 416.6C678.001 404.067 680.134 390.2 680.134 375C680.134 359.8 678.001 345.933 673.734 333.4C669.734 320.867 663.868 311 656.134 303.8C648.668 296.6 640.001 293 630.134 293C620.268 293 611.468 296.6 603.734 303.8C596.268 311 590.401 320.867 586.134 333.4C582.134 345.933 580.134 359.8 580.134 375C580.134 390.2 582.134 404.067 586.134 416.6C590.401 429.133 596.268 439 603.734 446.2C611.468 453.4 620.268 457 630.134 457ZM841.91 473C822.71 473 806.444 468.733 793.11 460.2C780.044 451.4 770.177 439.667 763.51 425C757.11 410.067 753.91 393.4 753.91 375C753.91 356.6 757.11 340.067 763.51 325.4C770.177 310.467 780.044 298.733 793.11 290.2C806.444 281.4 822.71 277 841.91 277C871.244 277 890.577 281.667 899.911 291C904.444 295.533 907.244 301.133 908.311 307.8C909.377 314.2 909.911 325.933 909.911 343H901.911C900.844 326.467 895.644 314.067 886.31 305.8C876.977 297.267 864.844 293 849.911 293C830.71 293 816.177 300.6 806.31 315.8C796.71 331 791.91 350.733 791.91 375C791.91 399.267 796.71 419 806.31 434.2C816.177 449.4 830.71 457 849.911 457C863.511 457 874.711 454.467 883.51 449.4C892.31 444.067 900.444 435.933 907.91 425L915.91 431C907.111 445.933 896.71 456.733 884.71 463.4C872.71 469.8 858.444 473 841.91 473ZM957.737 253C957.737 239.4 955.87 229.4 952.137 223C948.403 216.333 940.937 213 929.737 213H921.737V205H957.737C967.603 205 974.937 206.333 979.737 209C984.803 211.4 988.403 215.933 990.537 222.6C992.67 229.267 993.737 239.4 993.737 253V297C999.337 291.4 1006.54 286.733 1015.34 283C1024.4 279 1034.54 277 1045.74 277C1065.74 277 1082 282.333 1094.54 293C1107.34 303.667 1113.74 322.333 1113.74 349V469H1077.74V349C1077.74 330.333 1073.47 316.733 1064.94 308.2C1056.67 299.4 1046.27 295 1033.74 295C1019.6 295 1006.27 302.067 993.737 316.2V469H957.737V253Z",fill:"#202020"}),Q.jsx("path",{d:"M2129.8 329C2129.8 315.4 2127.93 305.4 2124.2 299C2120.47 292.333 2113 289 2101.8 289H2093.8V281H2129.8C2139.67 281 2147.13 282.333 2152.2 285C2157.53 287.667 2161.4 291.667 2163.8 297H2165.8C2171.4 291.4 2178.6 286.733 2187.4 283C2196.47 279 2206.6 277 2217.8 277C2229 277 2238.6 279.133 2246.6 283.4C2254.6 287.4 2261 294.6 2265.8 305C2272.73 296.2 2281.53 289.4 2292.2 284.6C2303.13 279.533 2314.33 277 2325.8 277C2342.87 277 2356.47 282.333 2366.6 293C2376.73 303.667 2381.8 322.333 2381.8 349V469H2345.8V349C2345.8 329.8 2343.13 316.067 2337.8 307.8C2332.47 299.267 2324.47 295 2313.8 295C2306.33 295 2298.47 297.8 2290.2 303.4C2281.93 308.733 2275.8 314.6 2271.8 321C2273.13 325 2273.8 334.333 2273.8 349V469H2237.8V349C2237.8 329.8 2235.13 316.067 2229.8 307.8C2224.47 299.267 2216.47 295 2205.8 295C2191.67 295 2178.33 302.067 2165.8 316.2V469H2129.8V329Z",fill:"#202020"}),Q.jsx("path",{d:"M2439 397.002V329.878C2442.75 243.874 2588.32 245.544 2588.32 329.878L2588.74 373.492L2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492V397.002C2459.44 446.842 2536.6 469.434 2569.55 418.5C2582.75 398.097 2596.82 404.097 2585.82 425.597C2550.78 494.066 2439 471.316 2439 397.002Z",fill:"#F8F8F8"}),Q.jsx("path",{d:"M2549.11 380.589V340.733L2569.55 329.878C2569.55 273.934 2459.44 269.759 2459.44 329.878V373.492M2549.11 380.589L2588.74 373.492L2588.32 329.878C2588.32 245.544 2442.75 243.874 2439 329.878V397.002C2439 471.316 2550.78 494.066 2585.82 425.597C2596.82 404.097 2582.75 398.097 2569.55 418.5C2536.6 469.434 2459.44 446.842 2459.44 397.002V373.492M2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),Q.jsx("path",{d:"M1171 405.002V337.878C1174.75 251.874 1320.32 253.544 1320.32 337.878L1320.74 381.492L1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492V405.002C1191.44 454.842 1268.6 477.434 1301.55 426.5C1314.75 406.097 1328.82 412.097 1317.82 433.597C1282.78 502.066 1171 479.316 1171 405.002Z",fill:"#F8F8F8"}),Q.jsx("path",{d:"M1281.11 388.589V348.733L1301.55 337.878C1301.55 281.934 1191.44 277.759 1191.44 337.878V381.492M1281.11 388.589L1320.74 381.492L1320.32 337.878C1320.32 253.544 1174.75 251.874 1171 337.878V405.002C1171 479.316 1282.78 502.066 1317.82 433.597C1328.82 412.097 1314.75 406.097 1301.55 426.5C1268.6 477.434 1191.44 454.842 1191.44 405.002V381.492M1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),Q.jsx("path",{d:"M2010.8 168.462L2010.8 168.463C2009.52 171.322 2008.45 176.386 2007.62 182.146C2006.75 188.119 2006.05 195.449 2005.71 203.232C2005.03 218.574 2005.68 236.346 2009.47 249.029C2010.38 253.035 2010.89 260.159 2010.89 264.685V429.323C2010.89 443.107 2012.09 453.777 2014.02 461.169C2014.98 464.834 2016.18 467.976 2017.71 470.328C2019.11 472.496 2021.57 475.161 2025.31 475.228C2029.09 475.295 2031.63 472.653 2033.06 470.486C2034.6 468.152 2035.81 465.018 2036.77 461.364C2038.7 453.986 2039.9 443.27 2039.9 429.323V264.685C2039.9 259.632 2040.42 252.549 2041.3 249.089C2045.33 235.638 2046 218.131 2045.27 203.04C2044.89 195.413 2044.15 188.261 2043.25 182.36C2042.36 176.588 2041.27 171.645 2040.07 168.65C2038.77 165.409 2036.07 163.475 2033.53 162.408C2030.97 161.329 2028.08 160.902 2025.37 160.937C2022.65 160.972 2019.8 161.475 2017.29 162.543C2014.86 163.579 2012.17 165.41 2010.8 168.462Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),Q.jsx("ellipse",{cx:"2025.62",cy:"214.096",rx:"7.92068",ry:"37.0379",fill:"white",stroke:"#202020","stroke-width":"10"}),Q.jsx("path",{d:"M1791.99 221.788L1788.33 222.804V226.606V232.719C1788.33 232.769 1788.33 232.825 1788.33 232.887C1788.32 233.919 1788.29 236.495 1790.46 238.694C1791.21 239.524 1791.48 240.125 1791.64 240.762C1791.85 241.621 1791.93 242.759 1791.93 244.945V284.86C1791.93 286.13 1792.36 287.116 1792.61 287.599C1792.89 288.163 1793.23 288.645 1793.52 289.019C1794.11 289.774 1794.83 290.486 1795.53 291.096C1796.82 292.227 1798.73 293.597 1800.7 294.263L1813.96 298.918C1814.62 299.159 1815.05 299.358 1815.32 299.506C1815.32 299.536 1815.32 299.569 1815.32 299.603V468.972C1815.32 474.332 1817.66 478.518 1821.95 480.608C1825.73 482.449 1830.13 482.212 1833.73 481.338C1837.45 480.437 1841.17 478.663 1844.06 476.392C1846.71 474.311 1849.79 470.885 1849.79 466.455V234.157V229.947L1845.64 229.23L1827.16 226.034C1827.15 226.029 1827.14 226.022 1827.13 226.013C1827.07 225.979 1826.97 225.902 1826.82 225.743C1826.51 225.401 1826.13 224.824 1825.75 223.952C1824.99 222.241 1824.55 220.267 1824.18 218.572L1824.12 218.328L1822.98 213.187L1817.9 214.596L1791.99 221.788Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),Q.jsx("path",{d:"M1849.13 221.823L1852.67 222.904V226.606V232.719C1852.67 232.769 1852.67 232.825 1852.67 232.887C1852.68 233.919 1852.71 236.495 1850.54 238.694C1849.79 239.524 1849.52 240.125 1849.36 240.762C1849.15 241.621 1849.07 242.759 1849.07 244.945V284.86C1849.07 286.13 1848.64 287.116 1848.39 287.599C1848.11 288.163 1847.77 288.645 1847.48 289.019C1846.89 289.774 1846.17 290.486 1845.47 291.096C1844.17 292.236 1842.24 293.618 1840.25 294.278L1826.29 298.931C1825.65 299.166 1825.23 299.361 1824.96 299.506C1824.96 299.536 1824.96 299.569 1824.96 299.603V468.972C1824.96 474.332 1822.62 478.518 1818.33 480.608C1814.55 482.449 1810.15 482.212 1806.55 481.338C1802.83 480.437 1799.11 478.663 1796.22 476.392C1793.57 474.311 1790.49 470.885 1790.49 466.455V234.157V229.976L1794.6 229.236L1812.56 226.006C1812.57 226.005 1812.57 226.005 1812.57 226.004C1813.26 225.871 1814.03 225.394 1814.9 223.649C1815.68 222.097 1816.14 220.364 1816.64 218.5C1816.73 218.131 1816.83 217.757 1816.94 217.378L1818.29 212.408L1823.22 213.912L1849.13 221.823Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),Q.jsxs("mask",{id:"path-18-outside-1_401_299",maskUnits:"userSpaceOnUse",x:"1675",y:"3.97754",width:"156",height:"235",fill:"black",children:[Q.jsx("rect",{fill:"white",x:"1675",y:"3.97754",width:"156",height:"235"}),Q.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z"})]}),Q.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z",fill:"#F8F8F8"}),Q.jsx("path",{d:"M1820.68 53.281L1830.29 50.5064L1830.68 51.8659V53.281H1820.68ZM1685 97.8707H1675V97.5818L1675.02 97.2934L1685 97.8707ZM1776.41 176.982L1774.82 167.109L1774.82 167.109L1776.41 176.982ZM1793.33 184.533L1803.32 184.079L1803.33 184.306V184.533H1793.33ZM1793.33 226.606H1803.33V227.508L1803.17 228.396L1793.33 226.606ZM1713.43 116.21L1722.94 113.125L1722.94 113.125L1713.43 116.21ZM1750.86 42.4931L1753.33 52.1827L1753.33 52.1827L1750.86 42.4931ZM1830.68 53.281V220.492H1810.68V53.281H1830.68ZM1675.02 97.2934C1677.63 52.1549 1709.6 19.7858 1743.65 8.62785C1760.75 3.02685 1779.14 2.49859 1795.16 9.14055C1811.49 15.9125 1824.28 29.7202 1830.29 50.5064L1811.07 56.0556C1806.64 40.7025 1797.84 31.9008 1787.5 27.6152C1776.85 23.1996 1763.51 23.1658 1749.88 27.6334C1722.48 36.6128 1697.05 62.6778 1694.98 98.448L1675.02 97.2934ZM1778.01 186.854C1725.05 195.401 1675 152.845 1675 97.8707H1695C1695 140.707 1734.2 173.665 1774.82 167.109L1778.01 186.854ZM1783.34 184.987C1783.29 183.96 1783.12 184.11 1783.48 184.734C1783.96 185.573 1784.72 186.125 1785.24 186.339C1785.53 186.455 1785.24 186.267 1783.85 186.265C1782.51 186.263 1780.62 186.432 1778.01 186.854L1774.82 167.109C1780.53 166.188 1787.25 165.532 1792.87 167.848C1796.13 169.194 1798.94 171.487 1800.82 174.774C1802.59 177.847 1803.18 181.151 1803.32 184.079L1783.34 184.987ZM1783.33 226.606V184.533H1803.33V226.606H1783.33ZM1830.68 220.492C1830.68 226.064 1826.77 229.266 1825.56 230.197C1823.81 231.533 1821.83 232.501 1820.18 233.195C1816.76 234.632 1812.6 235.781 1808.77 236.577C1804.95 237.369 1800.81 237.946 1797.39 237.976C1795.85 237.99 1793.52 237.916 1791.27 237.201C1790.18 236.855 1788.07 236.044 1786.23 234.09C1783.96 231.676 1782.86 228.284 1783.49 224.815L1803.17 228.396C1803.4 227.12 1803.39 225.615 1802.91 224.05C1802.44 222.495 1801.63 221.275 1800.8 220.391C1799.3 218.79 1797.71 218.264 1797.32 218.14C1796.47 217.869 1796.22 217.986 1797.21 217.977C1798.85 217.963 1801.59 217.64 1804.7 216.994C1807.8 216.352 1810.61 215.523 1812.43 214.757C1813.4 214.35 1813.6 214.16 1813.39 214.322C1813.28 214.411 1812.73 214.834 1812.16 215.665C1811.56 216.527 1810.68 218.192 1810.68 220.492H1830.68ZM1787.65 133.111V69.8224H1807.65V133.111H1787.65ZM1722.94 113.125C1729.14 132.216 1746.21 142.24 1762.43 144.081C1770.55 145.002 1777.48 143.729 1781.95 141.35C1786.09 139.144 1787.65 136.407 1787.65 133.111H1807.65C1807.65 145.277 1800.6 154.079 1791.35 159.003C1782.43 163.755 1771.19 165.203 1760.17 163.953C1738.13 161.452 1713.09 147.563 1703.92 119.295L1722.94 113.125ZM1753.33 52.1827C1746 54.0533 1735.47 61.028 1728.22 72.1723C1721.23 82.9298 1717.7 96.9579 1722.94 113.125L1703.92 119.295C1696.57 96.6259 1701.64 76.3753 1711.45 61.2732C1721.02 46.558 1735.5 36.0923 1748.39 32.8034L1753.33 52.1827ZM1787.65 69.8224C1787.65 61.6117 1784.25 56.5493 1779.22 53.6691C1773.75 50.5313 1764.9 49.2314 1753.33 52.1827L1748.39 32.8034C1763.33 28.9921 1777.88 29.8497 1789.16 36.3137C1800.9 43.0353 1807.65 55.0188 1807.65 69.8224H1787.65Z",fill:"#202020",mask:"url(#path-18-outside-1_401_299)"}),Q.jsxs("mask",{id:"path-20-outside-2_401_299",maskUnits:"userSpaceOnUse",x:"1810",y:"3.68457",width:"156",height:"235",fill:"black",children:[Q.jsx("rect",{fill:"white",x:"1810",y:"3.68457",width:"156",height:"235"}),Q.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z"})]}),Q.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z",fill:"#F8F8F8"}),Q.jsx("path",{d:"M1820.32 52.9881L1810.71 50.2135L1810.32 51.573V52.9881H1820.32ZM1956 97.5778H1966V97.2889L1965.98 97.0005L1956 97.5778ZM1864.59 176.689L1866.18 166.816L1866.18 166.816L1864.59 176.689ZM1847.67 184.24L1837.68 183.786L1837.67 184.013V184.24H1847.67ZM1847.67 226.313H1837.67V227.215L1837.83 228.103L1847.67 226.313ZM1927.57 115.917L1937.08 119.002L1937.08 119.002L1927.57 115.917ZM1890.14 42.2001L1892.61 32.5104L1892.61 32.5104L1890.14 42.2001ZM1810.32 52.9881V220.2H1830.32V52.9881H1810.32ZM1965.98 97.0005C1963.37 51.862 1931.4 19.4928 1897.35 8.33489C1880.25 2.7339 1861.86 2.20564 1845.84 8.8476C1829.51 15.6195 1816.72 29.4273 1810.71 50.2135L1829.93 55.7626C1834.36 40.4096 1843.16 31.6078 1853.5 27.3222C1864.15 22.9066 1877.49 22.8728 1891.12 27.3405C1918.52 36.3198 1943.95 62.3848 1946.02 98.1551L1965.98 97.0005ZM1862.99 186.561C1915.95 195.108 1966 152.552 1966 97.5778H1946C1946 140.414 1906.8 173.372 1866.18 166.816L1862.99 186.561ZM1857.66 184.695C1857.71 183.667 1857.88 183.817 1857.52 184.441C1857.04 185.28 1856.28 185.832 1855.76 186.046C1855.47 186.162 1855.76 185.974 1857.15 185.972C1858.49 185.97 1860.38 186.139 1862.99 186.561L1866.18 166.816C1860.47 165.895 1853.75 165.239 1848.13 167.555C1844.87 168.901 1842.06 171.194 1840.18 174.481C1838.41 177.554 1837.82 180.858 1837.68 183.786L1857.66 184.695ZM1857.67 226.313V184.24H1837.67V226.313H1857.67ZM1810.32 220.2C1810.32 225.771 1814.23 228.973 1815.44 229.904C1817.19 231.24 1819.17 232.208 1820.82 232.902C1824.24 234.339 1828.4 235.488 1832.23 236.284C1836.05 237.076 1840.19 237.653 1843.61 237.683C1845.15 237.697 1847.48 237.623 1849.73 236.908C1850.82 236.562 1852.93 235.751 1854.77 233.797C1857.04 231.383 1858.14 227.991 1857.51 224.522L1837.83 228.103C1837.6 226.827 1837.61 225.322 1838.09 223.758C1838.56 222.202 1839.37 220.982 1840.2 220.098C1841.7 218.497 1843.29 217.971 1843.68 217.847C1844.53 217.576 1844.78 217.693 1843.79 217.684C1842.15 217.67 1839.41 217.348 1836.3 216.701C1833.2 216.059 1830.39 215.23 1828.57 214.464C1827.6 214.057 1827.4 213.867 1827.61 214.029C1827.72 214.118 1828.27 214.541 1828.84 215.372C1829.44 216.235 1830.32 217.899 1830.32 220.2H1810.32ZM1853.35 132.818V69.5294H1833.35V132.818H1853.35ZM1918.06 112.832C1911.86 131.923 1894.79 141.947 1878.57 143.788C1870.45 144.709 1863.52 143.436 1859.05 141.057C1854.91 138.851 1853.35 136.114 1853.35 132.818H1833.35C1833.35 144.984 1840.4 153.786 1849.65 158.71C1858.57 163.462 1869.81 164.91 1880.83 163.66C1902.87 161.159 1927.91 147.27 1937.08 119.002L1918.06 112.832ZM1887.67 51.8898C1895 53.7603 1905.53 60.735 1912.78 71.8794C1919.77 82.6368 1923.3 96.6649 1918.06 112.832L1937.08 119.002C1944.43 96.333 1939.36 76.0823 1929.55 60.9802C1919.98 46.265 1905.5 35.7993 1892.61 32.5104L1887.67 51.8898ZM1853.35 69.5294C1853.35 61.3188 1856.75 56.2563 1861.78 53.3761C1867.25 50.2384 1876.1 48.9384 1887.67 51.8898L1892.61 32.5104C1877.67 28.6991 1863.12 29.5567 1851.84 36.0208C1840.1 42.7423 1833.35 54.7259 1833.35 69.5294H1853.35Z",fill:"#202020",mask:"url(#path-20-outside-2_401_299)"}),Q.jsx("path",{d:"M1821.76 250.733C1831.67 250.733 1839.72 258.764 1839.72 268.679C1839.72 278.594 1831.67 286.624 1821.76 286.624C1811.85 286.624 1803.8 278.594 1803.8 268.679C1803.8 258.764 1811.85 250.733 1821.76 250.733Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),Q.jsx("rect",{x:"2220",y:"425",width:"81",height:"52",fill:"white"}),Q.jsx("path",{d:"M2275.31 361.418L2264.36 307.631C2262.84 300.16 2252.16 300.16 2250.64 307.631L2239.69 361.418L2197.61 376.406C2191.41 378.615 2191.41 387.385 2197.61 389.594L2239.69 404.582L2250.64 458.369C2252.16 465.84 2262.84 465.84 2264.36 458.369L2275.31 404.582L2317.39 389.594C2323.59 387.385 2323.59 378.615 2317.39 376.406L2275.31 361.418Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),Q.jsx("path",{d:"M625.293 355.198L628.599 358.113L631.906 355.198C637.183 350.545 644.15 347.967 651.639 347.967C667.478 347.967 680.539 360.312 681.199 375.846V380.367C678.702 412.324 649.424 427.534 635.921 432.737L635.896 432.747L635.87 432.757C633.712 433.616 631.247 434.007 628.599 434.007C625.951 434.007 623.486 433.616 621.328 432.757L621.302 432.747L621.277 432.737C607.774 427.534 578.496 412.324 575.999 380.367V375.846C576.66 360.312 589.72 347.967 605.559 347.967C613.048 347.967 620.015 350.545 625.293 355.198Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"})]}),Q.jsx("defs",{children:Q.jsx("clipPath",{id:"clip0_401_299",children:Q.jsx("rect",{width:"2594",height:"490",fill:"white"})})})]}),X8=({fill:A="currentcolor",size:e=20})=>Q.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:Q.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})}),J8=({size:A=16,fill:e="currentColor",onClick:t})=>Q.jsx("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:t,children:Q.jsx("path",{d:"M10.5 24L38.5 24",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});var ve=function(){return ve=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ve.apply(this,arguments)};function ds(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||Array.prototype.slice.call(e))}var BA="-ms-",Si="-moz-",oA="-webkit-",S2="comm",Js="rule",rf="decl",Y8="@import",_2="@keyframes",Z8="@layer",M2=Math.abs,nf=String.fromCharCode,Fu=Object.assign;function q8(A,e){return $A(A,0)^45?(((e<<2^$A(A,0))<<2^$A(A,1))<<2^$A(A,2))<<2^$A(A,3):0}function D2(A){return A.trim()}function Et(A,e){return(A=e.exec(A))?A[0]:A}function AA(A,e,t){return A.replace(e,t)}function Ea(A,e,t){return A.indexOf(e,t)}function $A(A,e){return A.charCodeAt(e)|0}function Dn(A,e,t){return A.slice(e,t)}function pt(A){return A.length}function K2(A){return A.length}function fi(A,e){return e.push(A),A}function AQ(A,e){return A.map(e).join("")}function Cg(A,e){return A.filter(function(t){return!Et(t,e)})}var Ys=1,Kn=1,T2=0,$e=0,DA=0,Gn="";function Zs(A,e,t,r,n,i,o,a){return{value:A,root:e,parent:t,type:r,props:n,children:i,line:Ys,column:Kn,length:o,return:"",siblings:a}}function jt(A,e){return Fu(Zs("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Vr(A){for(;A.root;)A=jt(A.root,{children:[A]});fi(A,A.siblings)}function eQ(){return DA}function tQ(){return DA=$e>0?$A(Gn,--$e):0,Kn--,DA===10&&(Kn=1,Ys--),DA}function at(){return DA=$e<T2?$A(Gn,$e++):0,Kn++,DA===10&&(Kn=1,Ys++),DA}function Ir(){return $A(Gn,$e)}function ba(){return $e}function qs(A,e){return Dn(Gn,A,e)}function Uu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rQ(A){return Ys=Kn=1,T2=pt(Gn=A),$e=0,[]}function nQ(A){return Gn="",A}function Xl(A){return D2(qs($e-1,xu(A===91?A+2:A===40?A+1:A)))}function iQ(A){for(;(DA=Ir())&&DA<33;)at();return Uu(A)>2||Uu(DA)>3?"":" "}function oQ(A,e){for(;--e&&at()&&!(DA<48||DA>102||DA>57&&DA<65||DA>70&&DA<97););return qs(A,ba()+(e<6&&Ir()==32&&at()==32))}function xu(A){for(;at();)switch(DA){case A:return $e;case 34:case 39:A!==34&&A!==39&&xu(DA);break;case 40:A===41&&xu(A);break;case 92:at();break}return $e}function aQ(A,e){for(;at()&&A+DA!==57;)if(A+DA===84&&Ir()===47)break;return"/*"+qs(e,$e-1)+"*"+nf(A===47?A:at())}function sQ(A){for(;!Uu(Ir());)at();return qs(A,$e)}function lQ(A){return nQ(Ha("",null,null,null,[""],A=rQ(A),0,[0],A))}function Ha(A,e,t,r,n,i,o,a,s){for(var l=0,c=0,u=o,d=0,p=0,v=0,w=1,x=1,g=1,f=0,h="",C=n,F=i,m=r,y=h;x;)switch(v=f,f=at()){case 40:if(v!=108&&$A(y,u-1)==58){Ea(y+=AA(Xl(f),"&","&\f"),"&\f",M2(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:y+=Xl(f);break;case 9:case 10:case 13:case 32:y+=iQ(v);break;case 92:y+=oQ(ba()-1,7);continue;case 47:switch(Ir()){case 42:case 47:fi(cQ(aQ(at(),ba()),e,t,s),s);break;default:y+="/"}break;case 123*w:a[l++]=pt(y)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+c:g==-1&&(y=AA(y,/\f/g,"")),p>0&&pt(y)-u&&fi(p>32?yg(y+";",r,t,u-1,s):yg(AA(y," ","")+";",r,t,u-2,s),s);break;case 59:y+=";";default:if(fi(m=Qg(y,e,t,l,c,n,a,h,C=[],F=[],u,i),i),f===123)if(c===0)Ha(y,e,m,m,C,i,u,a,F);else switch(d===99&&$A(y,3)===110?100:d){case 100:case 108:case 109:case 115:Ha(A,m,m,r&&fi(Qg(A,m,m,0,0,n,a,h,n,C=[],u,F),F),n,F,u,a,r?C:F);break;default:Ha(y,m,m,m,[""],F,0,a,F)}}l=c=p=0,w=g=1,h=y="",u=o;break;case 58:u=1+pt(y),p=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&tQ()==125)continue}switch(y+=nf(f),f*w){case 38:g=c>0?1:(y+="\f",-1);break;case 44:a[l++]=(pt(y)-1)*g,g=1;break;case 64:Ir()===45&&(y+=Xl(at())),d=Ir(),c=u=pt(h=y+=sQ(ba())),f++;break;case 45:v===45&&pt(y)==2&&(w=0)}}return i}function Qg(A,e,t,r,n,i,o,a,s,l,c,u){for(var d=n-1,p=n===0?i:[""],v=K2(p),w=0,x=0,g=0;w<r;++w)for(var f=0,h=Dn(A,d+1,d=M2(x=o[w])),C=A;f<v;++f)(C=D2(x>0?p[f]+" "+h:AA(h,/&\f/g,p[f])))&&(s[g++]=C);return Zs(A,e,t,n===0?Js:a,s,l,c,u)}function cQ(A,e,t,r){return Zs(A,e,t,S2,nf(eQ()),Dn(A,2,-2),0,r)}function yg(A,e,t,r,n){return Zs(A,e,t,rf,Dn(A,0,r),Dn(A,r+1,-1),r,n)}function N2(A,e,t){switch(q8(A,e)){case 5103:return oA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oA+A+A;case 4789:return Si+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return oA+A+Si+A+BA+A+A;case 5936:switch($A(A,e+11)){case 114:return oA+A+BA+AA(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return oA+A+BA+AA(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return oA+A+BA+AA(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return oA+A+BA+A+A;case 6165:return oA+A+BA+"flex-"+A+A;case 5187:return oA+A+AA(A,/(\w+).+(:[^]+)/,oA+"box-$1$2"+BA+"flex-$1$2")+A;case 5443:return oA+A+BA+"flex-item-"+AA(A,/flex-|-self/g,"")+(Et(A,/flex-|baseline/)?"":BA+"grid-row-"+AA(A,/flex-|-self/g,""))+A;case 4675:return oA+A+BA+"flex-line-pack"+AA(A,/align-content|flex-|-self/g,"")+A;case 5548:return oA+A+BA+AA(A,"shrink","negative")+A;case 5292:return oA+A+BA+AA(A,"basis","preferred-size")+A;case 6060:return oA+"box-"+AA(A,"-grow","")+oA+A+BA+AA(A,"grow","positive")+A;case 4554:return oA+AA(A,/([^-])(transform)/g,"$1"+oA+"$2")+A;case 6187:return AA(AA(AA(A,/(zoom-|grab)/,oA+"$1"),/(image-set)/,oA+"$1"),A,"")+A;case 5495:case 3959:return AA(A,/(image-set\([^]*)/,oA+"$1$`$1");case 4968:return AA(AA(A,/(.+:)(flex-)?(.*)/,oA+"box-pack:$3"+BA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oA+A+A;case 4200:if(!Et(A,/flex-|baseline/))return BA+"grid-column-align"+Dn(A,e)+A;break;case 2592:case 3360:return BA+AA(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,Et(r.props,/grid-\w+-end/)})?~Ea(A+(t=t[e].value),"span",0)?A:BA+AA(A,"-start","")+A+BA+"grid-row-span:"+(~Ea(t,"span",0)?Et(t,/\d+/):+Et(t,/\d+/)-+Et(A,/\d+/))+";":BA+AA(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return Et(r.props,/grid-\w+-start/)})?A:BA+AA(AA(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return AA(A,/(.+)-inline(.+)/,oA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(A)-1-e>6)switch($A(A,e+1)){case 109:if($A(A,e+4)!==45)break;case 102:return AA(A,/(.+:)(.+)-([^]+)/,"$1"+oA+"$2-$3$1"+Si+($A(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Ea(A,"stretch",0)?N2(AA(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return AA(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,o,a,s,l){return BA+n+":"+i+l+(o?BA+n+"-span:"+(a?s:+s-+i)+l:"")+A});case 4949:if($A(A,e+6)===121)return AA(A,":",":"+oA)+A;break;case 6444:switch($A(A,$A(A,14)===45?18:11)){case 120:return AA(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oA+($A(A,14)===45?"inline-":"")+"box$3$1"+oA+"$2$3$1"+BA+"$2box$3")+A;case 100:return AA(A,":",":"+BA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return AA(A,"scroll-","scroll-snap-")+A}return A}function fs(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function uQ(A,e,t,r){switch(A.type){case Z8:if(A.children.length)break;case Y8:case rf:return A.return=A.return||A.value;case S2:return"";case _2:return A.return=A.value+"{"+fs(A.children,r)+"}";case Js:if(!pt(A.value=A.props.join(",")))return""}return pt(t=fs(A.children,r))?A.return=A.value+"{"+t+"}":""}function dQ(A){var e=K2(A);return function(t,r,n,i){for(var o="",a=0;a<e;a++)o+=A[a](t,r,n,i)||"";return o}}function fQ(A){return function(e){e.root||(e=e.return)&&A(e)}}function gQ(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case rf:A.return=N2(A.value,A.length,t);return;case _2:return fs([jt(A,{value:AA(A.value,"@","@"+oA)})],r);case Js:if(A.length)return AQ(t=A.props,function(n){switch(Et(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(jt(A,{props:[AA(n,/:(read-\w+)/,":"+Si+"$1")]})),Vr(jt(A,{props:[n]})),Fu(A,{props:Cg(t,r)});break;case"::placeholder":Vr(jt(A,{props:[AA(n,/:(plac\w+)/,":"+oA+"input-$1")]})),Vr(jt(A,{props:[AA(n,/:(plac\w+)/,":"+Si+"$1")]})),Vr(jt(A,{props:[AA(n,/:(plac\w+)/,BA+"input-$1")]})),Vr(jt(A,{props:[n]})),Fu(A,{props:Cg(t,r)});break}return""})}}var pQ={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe={},Tn=typeof process<"u"&&xe!==void 0&&(xe.REACT_APP_SC_ATTR||xe.SC_ATTR)||"data-styled",R2="active",O2="data-styled-version",Al="6.1.8",of=`/*!sc*/
`,af=typeof window<"u"&&"HTMLElement"in window,hQ=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==""?xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.SC_DISABLE_SPEEDY!==void 0&&xe.SC_DISABLE_SPEEDY!==""&&xe.SC_DISABLE_SPEEDY!=="false"&&xe.SC_DISABLE_SPEEDY),el=Object.freeze([]),Nn=Object.freeze({});function BQ(A,e,t){return t===void 0&&(t=Nn),A.theme!==t.theme&&A.theme||e||t.theme}var j2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vQ=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wQ=/(^-|-$)/g;function Fg(A){return A.replace(vQ,"-").replace(wQ,"")}var mQ=/(a)(d)/gi,To=52,Ug=function(A){return String.fromCharCode(A+(A>25?39:97))};function Eu(A){var e,t="";for(e=Math.abs(A);e>To;e=e/To|0)t=Ug(e%To)+t;return(Ug(e%To)+t).replace(mQ,"$1-$2")}var Jl,P2=5381,fn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},V2=function(A){return fn(P2,A)};function CQ(A){return Eu(V2(A)>>>0)}function QQ(A){return A.displayName||A.name||"Component"}function Yl(A){return typeof A=="string"&&!0}var z2=typeof Symbol=="function"&&Symbol.for,G2=z2?Symbol.for("react.memo"):60115,yQ=z2?Symbol.for("react.forward_ref"):60112,FQ={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UQ={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xQ=((Jl={})[yQ]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jl[G2]=$2,Jl);function xg(A){return("type"in(e=A)&&e.type.$$typeof)===G2?$2:"$$typeof"in A?xQ[A.$$typeof]:FQ;var e}var EQ=Object.defineProperty,bQ=Object.getOwnPropertyNames,Eg=Object.getOwnPropertySymbols,HQ=Object.getOwnPropertyDescriptor,kQ=Object.getPrototypeOf,bg=Object.prototype;function W2(A,e,t){if(typeof e!="string"){if(bg){var r=kQ(e);r&&r!==bg&&W2(A,r,t)}var n=bQ(e);Eg&&(n=n.concat(Eg(e)));for(var i=xg(A),o=xg(e),a=0;a<n.length;++a){var s=n[a];if(!(s in UQ||t&&t[s]||o&&s in o||i&&s in i)){var l=HQ(e,s);try{EQ(A,s,l)}catch{}}}}return A}function Rn(A){return typeof A=="function"}function sf(A){return typeof A=="object"&&"styledComponentId"in A}function Ur(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Hg(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ro(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function bu(A,e,t){if(t===void 0&&(t=!1),!t&&!ro(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=bu(A[r],e[r]);else if(ro(e))for(var r in e)A[r]=bu(A[r],e[r]);return A}function lf(A,e){Object.defineProperty(A,"toString",{value:e})}function po(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var IQ=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw po(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(of);return t},A}(),ka=new Map,gs=new Map,Ia=1,No=function(A){if(ka.has(A))return ka.get(A);for(;gs.has(Ia);)Ia++;var e=Ia++;return ka.set(A,e),gs.set(e,A),e},LQ=function(A,e){Ia=e+1,ka.set(A,e),gs.set(e,A)},SQ="style[".concat(Tn,"][").concat(O2,'="').concat(Al,'"]'),_Q=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),MQ=function(A,e,t){for(var r,n=t.split(","),i=0,o=n.length;i<o;i++)(r=n[i])&&A.registerName(e,r)},DQ=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(of),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(_Q);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(LQ(c,l),MQ(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}};function KQ(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var X2=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Tn,"]")));return s[s.length-1]}(t),i=n!==void 0?n.nextSibling:null;r.setAttribute(Tn,R2),r.setAttribute(O2,Al);var o=KQ();return o&&r.setAttribute("nonce",o),t.insertBefore(r,i),r},TQ=function(){function A(e){this.element=X2(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var o=r[n];if(o.ownerNode===t)return o}throw po(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),NQ=function(){function A(e){this.element=X2(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),RQ=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),kg=af,OQ={isServer:!af,useCSSOMInjection:!hQ},J2=function(){function A(e,t,r){e===void 0&&(e=Nn),t===void 0&&(t={});var n=this;this.options=ve(ve({},OQ),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&af&&kg&&(kg=!1,function(i){for(var o=document.querySelectorAll(SQ),a=0,s=o.length;a<s;a++){var l=o[a];l&&l.getAttribute(Tn)!==R2&&(DQ(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),lf(this,function(){return function(i){for(var o=i.getTag(),a=o.length,s="",l=function(u){var d=function(g){return gs.get(g)}(u);if(d===void 0)return"continue";var p=i.names.get(d),v=o.getGroup(u);if(p===void 0||v.length===0)return"continue";var w="".concat(Tn,".g").concat(u,'[id="').concat(d,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(w,'{content:"').concat(x,'"}').concat(of)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return No(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(ve(ve({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new RQ(n):r?new TQ(n):new NQ(n)}(this.options),new IQ(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(No(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(No(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(No(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),jQ=/&/g,PQ=/^\s*\/\/.*$/gm;function Y2(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Y2(t.children,e)),t})}function VQ(A){var e,t,r,n=A===void 0?Nn:A,i=n.options,o=i===void 0?Nn:i,a=n.plugins,s=a===void 0?el:a,l=function(d,p,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Js&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(jQ,t).replace(r,l))}),o.prefix&&c.push(gQ),c.push(uQ);var u=function(d,p,v,w){p===void 0&&(p=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=d.replace(PQ,""),g=lQ(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);o.namespace&&(g=Y2(g,o.namespace));var f=[];return fs(g,dQ(c.concat(fQ(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,p){return p.name||po(15),fn(d,p.name)},P2).toString():"",u}var zQ=new J2,Hu=VQ(),Z2=Pe.createContext({shouldForwardProp:void 0,styleSheet:zQ,stylis:Hu});Z2.Consumer;Pe.createContext(void 0);function Ig(){return H.useContext(Z2)}var GQ=function(){function A(e,t){var r=this;this.inject=function(n,i){i===void 0&&(i=Hu);var o=r.name+i.hash;n.hasNameForId(r.id,o)||n.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,lf(this,function(){throw po(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Hu),this.name+e.hash},A}(),$Q=function(A){return A>="A"&&A<="Z"};function Lg(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;$Q(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var q2=function(A){return A==null||A===!1||A===""},A4=function(A){var e,t,r=[];for(var n in A){var i=A[n];A.hasOwnProperty(n)&&!q2(i)&&(Array.isArray(i)&&i.isCss||Rn(i)?r.push("".concat(Lg(n),":"),i,";"):ro(i)?r.push.apply(r,ds(ds(["".concat(n," {")],A4(i),!1),["}"],!1)):r.push("".concat(Lg(n),": ").concat((e=n,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in pQ||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Lr(A,e,t,r){if(q2(A))return[];if(sf(A))return[".".concat(A.styledComponentId)];if(Rn(A)){if(!Rn(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var n=A(e);return Lr(n,e,t,r)}var i;return A instanceof GQ?t?(A.inject(t,r),[A.getName(r)]):[A]:ro(A)?A4(A):Array.isArray(A)?Array.prototype.concat.apply(el,A.map(function(o){return Lr(o,e,t,r)})):[A.toString()]}function WQ(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Rn(t)&&!sf(t))return!1}return!0}var XQ=V2(Al),JQ=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&WQ(e),this.componentId=t,this.baseHash=fn(XQ,t),this.baseStyle=r,J2.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ur(n,this.staticRulesId);else{var i=Hg(Lr(this.rules,e,t,r)),o=Eu(fn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=Ur(n,o),this.staticRulesId=o}else{for(var s=fn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=Hg(Lr(u,e,t,r));s=fn(s,d+c),l+=d}}if(l){var p=Eu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=Ur(n,p)}}return n},A}(),e4=Pe.createContext(void 0);e4.Consumer;var Zl={};function YQ(A,e,t){var r=sf(A),n=A,i=!Yl(A),o=e.attrs,a=o===void 0?el:o,s=e.componentId,l=s===void 0?function(C,F){var m=typeof C!="string"?"sc":Fg(C);Zl[m]=(Zl[m]||0)+1;var y="".concat(m,"-").concat(CQ(Al+m+Zl[m]));return F?"".concat(F,"-").concat(y):y}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Yl(C)?"styled.".concat(C):"Styled(".concat(QQ(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(Fg(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,F){return w(C,F)&&x(C,F)}}else v=w}var g=new JQ(t,d,r?n.componentStyle:void 0);function f(C,F){return function(m,y,E){var k=m.attrs,_=m.componentStyle,Y=m.defaultProps,J=m.foldedComponentIds,$=m.styledComponentId,S=m.target,V=Pe.useContext(e4),K=Ig(),Z=m.shouldForwardProp||K.shouldForwardProp,b=BQ(y,V,Y)||Nn,I=function(nA,sA,gA){for(var jA,wA=ve(ve({},sA),{className:void 0,theme:gA}),ct=0;ct<nA.length;ct+=1){var Se=Rn(jA=nA[ct])?jA(wA):jA;for(var _A in Se)wA[_A]=_A==="className"?Ur(wA[_A],Se[_A]):_A==="style"?ve(ve({},wA[_A]),Se[_A]):Se[_A]}return sA.className&&(wA.className=Ur(wA.className,sA.className)),wA}(k,y,b),O=I.as||S,G={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===b||(W==="forwardedAs"?G.as=I.forwardedAs:Z&&!Z(W,O)||(G[W]=I[W]));var FA=function(nA,sA){var gA=Ig(),jA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return jA}(_,I),uA=Ur(J,$);return FA&&(uA+=" "+FA),I.className&&(uA+=" "+I.className),G[Yl(O)&&!j2.has(O)?"class":"className"]=uA,G.ref=E,H.createElement(O,G)}(h,C,F)}f.displayName=u;var h=Pe.forwardRef(f);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=v,h.foldedComponentIds=r?Ur(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(F){for(var m=[],y=1;y<arguments.length;y++)m[y-1]=arguments[y];for(var E=0,k=m;E<k.length;E++)bu(F,k[E],!0);return F}({},n.defaultProps,C):C}}),lf(h,function(){return".".concat(h.styledComponentId)}),i&&W2(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Sg(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var _g=function(A){return Object.assign(A,{isCss:!0})};function ZQ(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Rn(A)||ro(A))return _g(Lr(Sg(el,ds([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?Lr(r):_g(Lr(Sg(r,e)))}function ku(A,e,t){if(t===void 0&&(t=Nn),!e)throw po(1,e);var r=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return A(e,t,ZQ.apply(void 0,ds([n],i,!1)))};return r.attrs=function(n){return ku(A,e,ve(ve({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return ku(A,e,ve(ve({},t),n))},r}var t4=function(A){return ku(YQ,A)},We=t4;j2.forEach(function(A){We[A]=t4(A)});const Mg=({data:A=[]})=>{var c;const[e,t]=H.useState(!0),[r,n]=H.useState("0"),[i,o]=H.useState("1"),[a,s]=H.useState(!1);H.useEffect(()=>{const u=new ResizeObserver(d=>{for(let p of d)p.contentRect.width<=800?s(!0):s(!1)});return u.observe(document.body),()=>{u.disconnect()}},[]);const l=H.useMemo(()=>A==null?void 0:A.filter(u=>u.cap_id===r)[0].contentMenuList.filter(u=>u.id===i)[0],[i,r,A]);return Q.jsxs(go,{className:"flex-1 flex width-100",children:[Q.jsxs(r4,{className:`relative ${e?"open":""}`,children:[Q.jsx(tf,{data:A==null?void 0:A.map(u=>({key:u.cap_id,title:u.cap,dropData:u.contentMenuList.map(d=>({key:d.id,title:d.title})),open:!0})),direction:"column",active:r,onChange:u=>{n(u.key),o(`${Number(u.key)*10+1}`)},dropProps:{direction:"column",active:i},onDropChange:(u,d)=>{n(d.key),o(u.key)},theme:{activeBg:"var(--color-bg-3)",lineColor:"inherit"},className:"pt-24 height-100 border-right overflow-auto scrollbar-none"}),a&&Q.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:Q.jsx(SA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),Q.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:Q.jsxs(YA,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[Q.jsx(ce,{title:l.title,type:"h2"}),Q.jsxs("div",{className:"flex column gap-12",children:[l.des&&Q.jsx(ce,{title:l.des,type:"p"}),(c=l.imgList)==null?void 0:c.map(u=>Q.jsxs(YA,{column:!0,gap:8,style:{maxWidth:"400px"},children:[Q.jsx(ce,{title:u.img_des,type:"p"}),Q.jsx("img",{src:u.img_src,width:"100%"})]}))]})]})})]})},r4=We.div`
  transform: translateX(-100%);
  width: 0;
  transition: all var(--transition-15) linear;
  &.open {
    width: 148px;
    transform: translateX(0);
    .toggle-arrow {
      right: 0;
      border-radius: 12px;
    }
  }
  .toggle-arrow {
    bottom: 48px;
    right: -8px;
    transform: translate(50%, 0);
    width: 20px;
    height: 48px;
    background-color: var(--color-bg-white);
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    border: 1px solid var(--color-border-3);
    z-index: 1;
  }
  @media screen and (max-width: 800px) {
    .land-menu-link {
      font-size: 12px;
    }
  }
`,ql=({url:A,className:e,imgClassName:t,imgStyle:r,style:n,ratio:i=1/1})=>{const o=H.useRef(null),[a,s]=H.useState(!0),[l,c]=H.useState(!1),u=()=>{setTimeout(()=>{s(!1)},300)},d=()=>{s(!1),c(!0)};return H.useEffect(()=>{const p=o.current;if(p)return p.complete&&s(!1),p==null||p.addEventListener("load",u),p==null||p.addEventListener("error",d),()=>{p==null||p.removeEventListener("load",u),p==null||p.removeEventListener("error",d)}},[]),Q.jsxs("div",{className:`relative flex items-center justify-center ${a||l?"bg-gray radius-6 overflow-hidden":""} ${e}`,style:{aspectRatio:a||l?`${i}`:"auto",...n},children:[a&&Q.jsx(H8,{color:"var(--color-text-4)",size:28,style:{position:"absolute",transform:"translate(-50%,-50%)"}}),l?Q.jsx(SA,{name:"error-fill",fill:"var(--color-red-03)"}):Q.jsx("img",{src:A,alt:"",className:t,style:{zIndex:"1",...r}})]})},Ac=({data:A=[]})=>{var s,l;const[e,t]=H.useState(!0),[r,n]=H.useState(!1),[i,o]=H.useState(1),a=H.useMemo(()=>A==null?void 0:A.filter(c=>c.id===i)[0],[i,A]);return H.useEffect(()=>{const c=new ResizeObserver(u=>{for(let d of u)d.contentRect.width<=800?n(!0):n(!1)});return c.observe(document.body),()=>{c.disconnect()}},[]),Q.jsxs(go,{className:"flex-1 flex width-100",children:[Q.jsxs(r4,{className:`relative ${e?"open":""}`,children:[Q.jsx("div",{className:"height-100 width-100 overflow-auto pb-24",children:Q.jsx("div",{className:"flex column gap-12 px-12 py-24 height-100 width-100",children:A==null?void 0:A.map((c,u)=>Q.jsxs("div",{className:"flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer",style:{aspectRatio:1,flexShrink:0},onClick:()=>o(c.id),children:[Q.jsx(ql,{url:c.img,className:"radius-8 overflow-hidden",imgStyle:{width:"64px"}}),Q.jsx("div",{className:"fs-14 color-gray-3",children:c.title})]},c.id??u))})}),r&&Q.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:Q.jsx(SA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),Q.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:Q.jsxs(YA,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[Q.jsx(ce,{title:a.title,type:"h2"}),Q.jsxs(YA,{gap:12,className:"p-12 bg-gray radius-8",w:"100%",children:[a.img&&Q.jsx(ql,{url:a.img,imgStyle:{width:"100%"},className:"width-50 radius-8 shrink-0"}),a.desc&&Q.jsx("div",{className:"fs-12 color-gray-3",children:a.desc})]}),a.detail&&Q.jsx("img",{src:a.detail,width:"100%"}),((s=a.detailList)==null?void 0:s.length)>0&&Q.jsx("div",{className:"flex column gap-12",children:(l=a.detailList)==null?void 0:l.map(c=>Q.jsxs(YA,{column:!0,gap:8,children:[c.desc&&Q.jsx(ce,{title:c.desc,type:"p"}),c.img&&Q.jsx(ql,{url:c.img,imgStyle:{width:"100%"},className:"width-100 radius-8 overflow-hidden"})]}))})]})})]})};/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Iu=function(A,e){return Iu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Iu(A,e)};function lt(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Iu(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Lu=function(){return Lu=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lu.apply(this,arguments)};function se(A,e,t,r){function n(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function a(c){try{l(r.next(c))}catch(u){o(u)}}function s(c){try{l(r.throw(c))}catch(u){o(u)}}function l(c){c.done?i(c.value):n(c.value).then(a,s)}l((r=r.apply(A,e||[])).next())})}function re(A,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ro(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||e)}var Tt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),tl=function(A,e){return Tt.fromClientRect(A,e.getBoundingClientRect())},qQ=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new Tt(0,0,r,n)},rl=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},IA=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,i="";++n<t;){var o=A[n];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(n+1===t||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},Dg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",A5=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Oo=0;Oo<Dg.length;Oo++)A5[Dg.charCodeAt(Oo)]=Oo;var Kg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var jo=0;jo<Kg.length;jo++)gi[Kg.charCodeAt(jo)]=jo;var e5=function(A){var e=A.length*.75,t=A.length,r,n=0,i,o,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)i=gi[A.charCodeAt(r)],o=gi[A.charCodeAt(r+1)],a=gi[A.charCodeAt(r+2)],s=gi[A.charCodeAt(r+3)],c[n++]=i<<2|o>>4,c[n++]=(o&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},t5=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},r5=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Sr=5,cf=11,ec=2,n5=cf-Sr,n4=65536>>Sr,i5=1<<Sr,tc=i5-1,o5=1024>>Sr,a5=n4+o5,s5=a5,l5=32,c5=s5+l5,u5=65536>>cf,d5=1<<n5,f5=d5-1,Tg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},g5=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},p5=function(A,e){var t=e5(A),r=Array.isArray(t)?r5(t):new Uint32Array(t),n=Array.isArray(t)?t5(t):new Uint16Array(t),i=24,o=Tg(n,i/2,r[4]/2),a=r[5]===2?Tg(n,(i+r[4])/2):g5(r,Math.ceil((i+r[4])/4));return new h5(r[0],r[1],r[2],r[3],o,a)},h5=function(){function A(e,t,r,n,i,o){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=o}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Sr],t=(t<<ec)+(e&tc),this.data[t];if(e<=65535)return t=this.index[n4+(e-55296>>Sr)],t=(t<<ec)+(e&tc),this.data[t];if(e<this.highStart)return t=c5-u5+(e>>cf),t=this.index[t],t+=e>>Sr&f5,t=this.index[t],t=(t<<ec)+(e&tc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),Ng="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B5=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Po=0;Po<Ng.length;Po++)B5[Ng.charCodeAt(Po)]=Po;var v5="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Rg=50,w5=1,i4=2,o4=3,m5=4,C5=5,Og=7,a4=8,jg=9,Zt=10,Su=11,Pg=12,_u=13,Q5=14,pi=15,Mu=16,Vo=17,ri=18,y5=19,Vg=20,Du=21,ni=22,rc=23,zr=24,ye=25,hi=26,Bi=27,Gr=28,F5=29,mr=30,U5=31,zo=32,Go=33,Ku=34,Tu=35,Nu=36,no=37,Ru=38,La=39,Sa=40,nc=41,s4=42,x5=43,E5=[9001,65288],l4="!",eA="×",$o="÷",Ou=p5(v5),Qt=[mr,Nu],ju=[w5,i4,o4,C5],c4=[Zt,a4],zg=[Bi,hi],b5=ju.concat(c4),Gg=[Ru,La,Sa,Ku,Tu],H5=[pi,_u],k5=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(i,o){var a=Ou.get(i);if(a>Rg?(n.push(!0),a-=Rg):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return r.push(o),t.push(Mu);if(a===m5||a===Su){if(o===0)return r.push(o),t.push(mr);var s=t[o-1];return b5.indexOf(s)===-1?(r.push(r[o-1]),t.push(s)):(r.push(o),t.push(mr))}if(r.push(o),a===U5)return t.push(e==="strict"?Du:no);if(a===s4||a===F5)return t.push(mr);if(a===x5)return i>=131072&&i<=196605||i>=196608&&i<=262141?t.push(no):t.push(mr);t.push(a)}),[r,t,n]},ic=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var i=t;i<=r.length;){i++;var o=r[i];if(o===e)return!0;if(o!==Zt)break}if(n===Zt)for(var i=t;i>0;){i--;var a=r[i];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var s=t;s<=r.length;){s++;var o=r[s];if(o===e)return!0;if(o!==Zt)break}if(a!==Zt)break}return!1},$g=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===Zt)t--;else return r}return 0},I5=function(A,e,t,r,n){if(t[r]===0)return eA;var i=r-1;if(Array.isArray(n)&&n[i]===!0)return eA;var o=i-1,a=i+1,s=e[i],l=o>=0?e[o]:0,c=e[a];if(s===i4&&c===o4)return eA;if(ju.indexOf(s)!==-1)return l4;if(ju.indexOf(c)!==-1||c4.indexOf(c)!==-1)return eA;if($g(i,e)===a4)return $o;if(Ou.get(A[i])===Su||(s===zo||s===Go)&&Ou.get(A[a])===Su||s===Og||c===Og||s===jg||[Zt,_u,pi].indexOf(s)===-1&&c===jg||[Vo,ri,y5,zr,Gr].indexOf(c)!==-1||$g(i,e)===ni||ic(rc,ni,i,e)||ic([Vo,ri],Du,i,e)||ic(Pg,Pg,i,e))return eA;if(s===Zt)return $o;if(s===rc||c===rc)return eA;if(c===Mu||s===Mu)return $o;if([_u,pi,Du].indexOf(c)!==-1||s===Q5||l===Nu&&H5.indexOf(s)!==-1||s===Gr&&c===Nu||c===Vg||Qt.indexOf(c)!==-1&&s===ye||Qt.indexOf(s)!==-1&&c===ye||s===Bi&&[no,zo,Go].indexOf(c)!==-1||[no,zo,Go].indexOf(s)!==-1&&c===hi||Qt.indexOf(s)!==-1&&zg.indexOf(c)!==-1||zg.indexOf(s)!==-1&&Qt.indexOf(c)!==-1||[Bi,hi].indexOf(s)!==-1&&(c===ye||[ni,pi].indexOf(c)!==-1&&e[a+1]===ye)||[ni,pi].indexOf(s)!==-1&&c===ye||s===ye&&[ye,Gr,zr].indexOf(c)!==-1)return eA;if([ye,Gr,zr,Vo,ri].indexOf(c)!==-1)for(var u=i;u>=0;){var d=e[u];if(d===ye)return eA;if([Gr,zr].indexOf(d)!==-1)u--;else break}if([Bi,hi].indexOf(c)!==-1)for(var u=[Vo,ri].indexOf(s)!==-1?o:i;u>=0;){var d=e[u];if(d===ye)return eA;if([Gr,zr].indexOf(d)!==-1)u--;else break}if(Ru===s&&[Ru,La,Ku,Tu].indexOf(c)!==-1||[La,Ku].indexOf(s)!==-1&&[La,Sa].indexOf(c)!==-1||[Sa,Tu].indexOf(s)!==-1&&c===Sa||Gg.indexOf(s)!==-1&&[Vg,hi].indexOf(c)!==-1||Gg.indexOf(c)!==-1&&s===Bi||Qt.indexOf(s)!==-1&&Qt.indexOf(c)!==-1||s===zr&&Qt.indexOf(c)!==-1||Qt.concat(ye).indexOf(s)!==-1&&c===ni&&E5.indexOf(A[a])===-1||Qt.concat(ye).indexOf(c)!==-1&&s===ri)return eA;if(s===nc&&c===nc){for(var p=t[i],v=1;p>0&&(p--,e[p]===nc);)v++;if(v%2!==0)return eA}return s===zo&&c===Go?eA:$o},L5=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=k5(A,e.lineBreak),r=t[0],n=t[1],i=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[ye,mr,s4].indexOf(a)!==-1?no:a}));var o=e.wordBreak==="keep-all"?i.map(function(a,s){return a&&A[s]>=19968&&A[s]<=40959}):void 0;return[r,n,o]},S5=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===l4,this.start=r,this.end=n}return A.prototype.slice=function(){return IA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),_5=function(A,e){var t=rl(A),r=L5(t,e),n=r[0],i=r[1],o=r[2],a=t.length,s=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=eA;l<a&&(c=I5(t,i,n,++l,o))===eA;);if(c!==eA||l===a){var u=new S5(t,c,s,l);return s=l,{value:u,done:!1}}return{done:!0,value:null}}}},M5=1,D5=2,ho=4,Wg=8,ps=10,Xg=47,_i=92,K5=9,T5=32,Wo=34,ii=61,N5=35,R5=36,O5=37,Xo=39,Jo=40,oi=41,j5=95,pe=45,P5=33,V5=60,z5=62,G5=64,$5=91,W5=93,X5=61,J5=123,Yo=63,Y5=125,Jg=124,Z5=126,q5=128,Yg=65533,oc=42,xr=43,Ay=44,ey=58,ty=59,io=46,ry=0,ny=8,iy=11,oy=14,ay=31,sy=127,dt=-1,u4=48,d4=97,f4=101,ly=102,cy=117,uy=122,g4=65,p4=69,h4=70,dy=85,fy=90,ne=function(A){return A>=u4&&A<=57},gy=function(A){return A>=55296&&A<=57343},$r=function(A){return ne(A)||A>=g4&&A<=h4||A>=d4&&A<=ly},py=function(A){return A>=d4&&A<=uy},hy=function(A){return A>=g4&&A<=fy},By=function(A){return py(A)||hy(A)},vy=function(A){return A>=q5},Zo=function(A){return A===ps||A===K5||A===T5},hs=function(A){return By(A)||vy(A)||A===j5},Zg=function(A){return hs(A)||ne(A)||A===pe},wy=function(A){return A>=ry&&A<=ny||A===iy||A>=oy&&A<=ay||A===sy},$t=function(A,e){return A!==_i?!1:e!==ps},qo=function(A,e,t){return A===pe?hs(e)||$t(e,t):hs(A)?!0:!!(A===_i&&$t(A,e))},ac=function(A,e,t){return A===xr||A===pe?ne(e)?!0:e===io&&ne(t):ne(A===io?e:A)},my=function(A){var e=0,t=1;(A[e]===xr||A[e]===pe)&&(A[e]===pe&&(t=-1),e++);for(var r=[];ne(A[e]);)r.push(A[e++]);var n=r.length?parseInt(IA.apply(void 0,r),10):0;A[e]===io&&e++;for(var i=[];ne(A[e]);)i.push(A[e++]);var o=i.length,a=o?parseInt(IA.apply(void 0,i),10):0;(A[e]===p4||A[e]===f4)&&e++;var s=1;(A[e]===xr||A[e]===pe)&&(A[e]===pe&&(s=-1),e++);for(var l=[];ne(A[e]);)l.push(A[e++]);var c=l.length?parseInt(IA.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-o))*Math.pow(10,s*c)},Cy={type:2},Qy={type:3},yy={type:4},Fy={type:13},Uy={type:8},xy={type:21},Ey={type:9},by={type:10},Hy={type:11},ky={type:12},Iy={type:14},Aa={type:23},Ly={type:1},Sy={type:25},_y={type:24},My={type:26},Dy={type:27},Ky={type:28},Ty={type:29},Ny={type:31},Pu={type:32},B4=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(rl(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Pu;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Wo:return this.consumeStringToken(Wo);case N5:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(Zg(t)||$t(r,n)){var i=qo(t,r,n)?D5:M5,o=this.consumeName();return{type:5,value:o,flags:i}}break;case R5:if(this.peekCodePoint(0)===ii)return this.consumeCodePoint(),Fy;break;case Xo:return this.consumeStringToken(Xo);case Jo:return Cy;case oi:return Qy;case oc:if(this.peekCodePoint(0)===ii)return this.consumeCodePoint(),Iy;break;case xr:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Ay:return yy;case pe:var a=e,s=this.peekCodePoint(0),l=this.peekCodePoint(1);if(ac(a,s,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(qo(a,s,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(s===pe&&l===z5)return this.consumeCodePoint(),this.consumeCodePoint(),_y;break;case io:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Xg:if(this.peekCodePoint(0)===oc)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===oc&&(c=this.consumeCodePoint(),c===Xg))return this.consumeToken();if(c===dt)return this.consumeToken()}break;case ey:return My;case ty:return Dy;case V5:if(this.peekCodePoint(0)===P5&&this.peekCodePoint(1)===pe&&this.peekCodePoint(2)===pe)return this.consumeCodePoint(),this.consumeCodePoint(),Sy;break;case G5:var u=this.peekCodePoint(0),d=this.peekCodePoint(1),p=this.peekCodePoint(2);if(qo(u,d,p)){var o=this.consumeName();return{type:7,value:o}}break;case $5:return Ky;case _i:if($t(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case W5:return Ty;case X5:if(this.peekCodePoint(0)===ii)return this.consumeCodePoint(),Uy;break;case J5:return Hy;case Y5:return ky;case cy:case dy:var v=this.peekCodePoint(0),w=this.peekCodePoint(1);return v===xr&&($r(w)||w===Yo)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case Jg:if(this.peekCodePoint(0)===ii)return this.consumeCodePoint(),Ey;if(this.peekCodePoint(0)===Jg)return this.consumeCodePoint(),xy;break;case Z5:if(this.peekCodePoint(0)===ii)return this.consumeCodePoint(),by;break;case dt:return Pu}return Zo(e)?(this.consumeWhiteSpace(),Ny):ne(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):hs(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:IA(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();$r(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Yo&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(IA.apply(void 0,e.map(function(s){return s===Yo?u4:s})),16),i=parseInt(IA.apply(void 0,e.map(function(s){return s===Yo?h4:s})),16);return{type:30,start:n,end:i}}var o=parseInt(IA.apply(void 0,e),16);if(this.peekCodePoint(0)===pe&&$r(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];$r(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var i=parseInt(IA.apply(void 0,a),16);return{type:30,start:o,end:i}}else return{type:30,start:o,end:o}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Jo?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Jo?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===dt)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Xo||t===Wo){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===dt||this.peekCodePoint(0)===oi)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Aa)}for(;;){var n=this.consumeCodePoint();if(n===dt||n===oi)return{type:22,value:IA.apply(void 0,e)};if(Zo(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===dt||this.peekCodePoint(0)===oi?(this.consumeCodePoint(),{type:22,value:IA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),Aa);if(n===Wo||n===Xo||n===Jo||wy(n))return this.consumeBadUrlRemnants(),Aa;if(n===_i)if($t(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Aa;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Zo(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===oi||e===dt)return;$t(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=IA.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===dt||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===ps)return this._value.splice(0,r),Ly;if(n===_i){var i=this._value[r+1];i!==dt&&i!==void 0&&(i===ps?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):$t(n,i)&&(t+=this.consumeStringSlice(r),t+=IA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=ho,r=this.peekCodePoint(0);for((r===xr||r===pe)&&e.push(this.consumeCodePoint());ne(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===io&&ne(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Wg;ne(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((r===p4||r===f4)&&((n===xr||n===pe)&&ne(i)||ne(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Wg;ne(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[my(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),i=this.peekCodePoint(1),o=this.peekCodePoint(2);if(qo(n,i,o)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===O5?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if($r(e)){for(var t=IA(e);$r(this.peekCodePoint(0))&&t.length<6;)t+=IA(this.consumeCodePoint());Zo(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||gy(r)||r>1114111?Yg:r}return e===dt?Yg:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(Zg(t))e+=IA(t);else if($t(t,this.peekCodePoint(0)))e+=IA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),v4=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new B4;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||Oy(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Pu:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),Bo=function(A){return A.type===15},$n=function(A){return A.type===17},cA=function(A){return A.type===20},Ry=function(A){return A.type===0},Vu=function(A,e){return cA(A)&&A.value===e},w4=function(A){return A.type!==31},On=function(A){return A.type!==31&&A.type!==4},wt=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},Oy=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},fr=function(A){return A.type===17||A.type===15},KA=function(A){return A.type===16||fr(A)},m4=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},ZA={type:17,number:0,flags:ho},uf={type:16,number:50,flags:ho},qt={type:16,number:100,flags:ho},vi=function(A,e,t){var r=A[0],n=A[1];return[dA(r,e),dA(typeof n<"u"?n:r,t)]},dA=function(A,e){if(A.type===16)return A.number/100*e;if(Bo(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},C4="deg",Q4="grad",y4="rad",F4="turn",nl={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case C4:return Math.PI*e.number/180;case Q4:return Math.PI/200*e.number;case y4:return e.number;case F4:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},U4=function(A){return A.type===15&&(A.unit===C4||A.unit===Q4||A.unit===y4||A.unit===F4)},x4=function(A){var e=A.filter(cA).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[ZA,ZA];case"to top":case"bottom":return Re(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[ZA,qt];case"to right":case"left":return Re(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[qt,qt];case"to bottom":case"top":return Re(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[qt,ZA];case"to left":case"right":return Re(270)}return 0},Re=function(A){return Math.PI*A/180},lr={name:"color",parse:function(A,e){if(e.type===18){var t=jy[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),i=e.value.substring(2,3);return Ar(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),i=e.value.substring(2,3),o=e.value.substring(3,4);return Ar(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),parseInt(o+o,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),i=e.value.substring(4,6);return Ar(parseInt(r,16),parseInt(n,16),parseInt(i,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),i=e.value.substring(4,6),o=e.value.substring(6,8);return Ar(parseInt(r,16),parseInt(n,16),parseInt(i,16),parseInt(o,16)/255)}}if(e.type===20){var a=St[e.value.toUpperCase()];if(typeof a<"u")return a}return St.TRANSPARENT}},cr=function(A){return(255&A)===0},VA=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},Ar=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},qg=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},Ap=function(A,e){var t=e.filter(On);if(t.length===3){var r=t.map(qg),n=r[0],i=r[1],o=r[2];return Ar(n,i,o,1)}if(t.length===4){var a=t.map(qg),n=a[0],i=a[1],o=a[2],s=a[3];return Ar(n,i,o,s)}return 0};function sc(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var ep=function(A,e){var t=e.filter(On),r=t[0],n=t[1],i=t[2],o=t[3],a=(r.type===17?Re(r.number):nl.parse(A,r))/(Math.PI*2),s=KA(n)?n.number/100:0,l=KA(i)?i.number/100:0,c=typeof o<"u"&&KA(o)?dA(o,1):1;if(s===0)return Ar(l*255,l*255,l*255,1);var u=l<=.5?l*(s+1):l+s-l*s,d=l*2-u,p=sc(d,u,a+1/3),v=sc(d,u,a),w=sc(d,u,a-1/3);return Ar(p*255,v*255,w*255,c)},jy={hsl:ep,hsla:ep,rgb:Ap,rgba:Ap},Mi=function(A,e){return lr.parse(A,v4.create(e).parseComponentValue())},St={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Py={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Vy={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},il=function(A,e){var t=lr.parse(A,e[0]),r=e[1];return r&&KA(r)?{color:t,stop:r}:{color:t,stop:null}},tp=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=ZA),r.stop===null&&(r.stop=qt);for(var n=[],i=0,o=0;o<A.length;o++){var a=A[o].stop;if(a!==null){var s=dA(a,e);s>i?n.push(s):n.push(i),i=s}else n.push(null)}for(var l=null,o=0;o<n.length;o++){var c=n[o];if(c===null)l===null&&(l=o);else if(l!==null){for(var u=o-l,d=n[l-1],p=(c-d)/(u+1),v=1;v<=u;v++)n[l+v-1]=p*v;l=null}}return A.map(function(w,x){var g=w.color;return{color:g,stop:Math.max(Math.min(1,n[x]/e),0)}})},zy=function(A,e,t){var r=e/2,n=t/2,i=dA(A[0],e)-r,o=n-dA(A[1],t);return(Math.atan2(o,i)+Math.PI*2)%(Math.PI*2)},Gy=function(A,e,t){var r=typeof A=="number"?A:zy(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),i=e/2,o=t/2,a=n/2,s=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,i-l,i+l,o-s,o+s]},Ye=function(A,e){return Math.sqrt(A*A+e*e)},rp=function(A,e,t,r,n){var i=[[0,0],[0,e],[A,0],[A,e]];return i.reduce(function(o,a){var s=a[0],l=a[1],c=Ye(t-s,r-l);return(n?c<o.optimumDistance:c>o.optimumDistance)?{optimumCorner:a,optimumDistance:c}:o},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},$y=function(A,e,t,r,n){var i=0,o=0;switch(A.size){case 0:A.shape===0?i=o=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(i=Math.min(Math.abs(e),Math.abs(e-r)),o=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)i=o=Math.min(Ye(e,t),Ye(e,t-n),Ye(e-r,t),Ye(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),s=rp(r,n,e,t,!0),l=s[0],c=s[1];i=Ye(l-e,(c-t)/a),o=a*i}break;case 1:A.shape===0?i=o=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(i=Math.max(Math.abs(e),Math.abs(e-r)),o=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)i=o=Math.max(Ye(e,t),Ye(e,t-n),Ye(e-r,t),Ye(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),u=rp(r,n,e,t,!1),l=u[0],c=u[1];i=Ye(l-e,(c-t)/a),o=a*i}break}return Array.isArray(A.size)&&(i=dA(A.size[0],r),o=A.size.length===2?dA(A.size[1],n):i),[i,o]},Wy=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,i){if(i===0){var o=n[0];if(o.type===20&&o.value==="to"){t=x4(n);return}else if(U4(o)){t=nl.parse(A,o);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},ea=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,i){if(i===0){var o=n[0];if(o.type===20&&["top","left","right","bottom"].indexOf(o.value)!==-1){t=x4(n);return}else if(U4(o)){t=(nl.parse(A,o)+Re(270))%Re(360);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Xy=function(A,e){var t=Re(180),r=[],n=1,i=0,o=3,a=[];return wt(e).forEach(function(s,l){var c=s[0];if(l===0){if(cA(c)&&c.value==="linear"){n=1;return}else if(cA(c)&&c.value==="radial"){n=2;return}}if(c.type===18){if(c.name==="from"){var u=lr.parse(A,c.values[0]);r.push({stop:ZA,color:u})}else if(c.name==="to"){var u=lr.parse(A,c.values[0]);r.push({stop:qt,color:u})}else if(c.name==="color-stop"){var d=c.values.filter(On);if(d.length===2){var u=lr.parse(A,d[1]),p=d[0];$n(p)&&r.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),n===1?{angle:(t+Re(180))%Re(360),stops:r,type:n}:{size:o,shape:i,stops:r,position:a,type:n}},E4="closest-side",b4="farthest-side",H4="closest-corner",k4="farthest-corner",I4="circle",L4="ellipse",S4="cover",_4="contain",Jy=function(A,e){var t=0,r=3,n=[],i=[];return wt(e).forEach(function(o,a){var s=!0;if(a===0){var l=!1;s=o.reduce(function(u,d){if(l)if(cA(d))switch(d.value){case"center":return i.push(uf),u;case"top":case"left":return i.push(ZA),u;case"right":case"bottom":return i.push(qt),u}else(KA(d)||fr(d))&&i.push(d);else if(cA(d))switch(d.value){case I4:return t=0,!1;case L4:return t=1,!1;case"at":return l=!0,!1;case E4:return r=0,!1;case S4:case b4:return r=1,!1;case _4:case H4:return r=2,!1;case k4:return r=3,!1}else if(fr(d)||KA(d))return Array.isArray(r)||(r=[]),r.push(d),!1;return u},s)}if(s){var c=il(A,o);n.push(c)}}),{size:r,shape:t,stops:n,position:i,type:2}},ta=function(A,e){var t=0,r=3,n=[],i=[];return wt(e).forEach(function(o,a){var s=!0;if(a===0?s=o.reduce(function(c,u){if(cA(u))switch(u.value){case"center":return i.push(uf),!1;case"top":case"left":return i.push(ZA),!1;case"right":case"bottom":return i.push(qt),!1}else if(KA(u)||fr(u))return i.push(u),!1;return c},s):a===1&&(s=o.reduce(function(c,u){if(cA(u))switch(u.value){case I4:return t=0,!1;case L4:return t=1,!1;case _4:case E4:return r=0,!1;case b4:return r=1,!1;case H4:return r=2,!1;case S4:case k4:return r=3,!1}else if(fr(u)||KA(u))return Array.isArray(r)||(r=[]),r.push(u),!1;return c},s)),s){var l=il(A,o);n.push(l)}}),{size:r,shape:t,stops:n,position:i,type:2}},Yy=function(A){return A.type===1},Zy=function(A){return A.type===2},df={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=M4[e.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function qy(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!M4[A.name])}var M4={"linear-gradient":Wy,"-moz-linear-gradient":ea,"-ms-linear-gradient":ea,"-o-linear-gradient":ea,"-webkit-linear-gradient":ea,"radial-gradient":Jy,"-moz-radial-gradient":ta,"-ms-radial-gradient":ta,"-o-radial-gradient":ta,"-webkit-radial-gradient":ta,"-webkit-gradient":Xy},A6={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return On(r)&&qy(r)}).map(function(r){return df.parse(A,r)})}},e6={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},t6={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return wt(e).map(function(t){return t.filter(KA)}).map(m4)}},r6={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(cA).map(function(r){return r.value}).join(" ")}).map(n6)}},n6=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Qn;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(Qn||(Qn={}));var i6={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(o6)})}},o6=function(A){return cA(A)||KA(A)},ol=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},a6=ol("top"),s6=ol("right"),l6=ol("bottom"),c6=ol("left"),al=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return m4(t.filter(KA))}}},u6=al("top-left"),d6=al("top-right"),f6=al("bottom-right"),g6=al("bottom-left"),sl=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},p6=sl("top"),h6=sl("right"),B6=sl("bottom"),v6=sl("left"),ll=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return Bo(t)?t.number:0}}},w6=ll("top"),m6=ll("right"),C6=ll("bottom"),Q6=ll("left"),y6={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},F6={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},U6={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).reduce(function(t,r){return t|x6(r.value)},0)}},x6=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},E6={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},b6={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Bs;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Bs||(Bs={}));var H6={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Bs.STRICT;case"normal":default:return Bs.NORMAL}}},k6={name:"line-height",initialValue:"normal",prefix:!1,type:4},np=function(A,e){return cA(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:KA(A)?dA(A,e):e},I6={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:df.parse(A,e)}},L6={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},zu={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},cl=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},S6=cl("top"),_6=cl("right"),M6=cl("bottom"),D6=cl("left"),K6={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},T6={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},ul=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},N6=ul("top"),R6=ul("right"),O6=ul("bottom"),j6=ul("left"),P6={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},V6={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},z6={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Vu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:St.TRANSPARENT,offsetX:ZA,offsetY:ZA,blur:ZA},n=0,i=0;i<t.length;i++){var o=t[i];fr(o)?(n===0?r.offsetX=o:n===1?r.offsetY=o:r.blur=o,n++):r.color=lr.parse(A,o)}return r})}},G6={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},$6={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=J6[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},W6=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},X6=function(A){var e=A.filter(function(s){return s.type===17}).map(function(s){return s.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],i=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var o=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,i,o,a]:null},J6={matrix:W6,matrix3d:X6},ip={type:16,number:50,flags:ho},Y6=[ip,ip],Z6={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(KA);return t.length!==2?Y6:[t[0],t[1]]}},q6={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Di;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Di||(Di={}));var AF={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return Di.BREAK_ALL;case"keep-all":return Di.KEEP_ALL;case"normal":default:return Di.NORMAL}}},eF={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if($n(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},D4={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},tF={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return $n(e)?e.number:1}},rF={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},nF={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},iF={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},oF={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},aF={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if($n(e))return e.number;if(cA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},sF={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(cA).map(function(t){return t.value})}},lF={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},RA=function(A,e){return(A&e)!==0},cF={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},uF={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(w4),i=0;i<n.length;i++){var o=n[i],a=n[i+1];if(o.type===20){var s=a&&$n(a)?a.number:1;r.push({counter:o.value,increment:s})}}return r}},dF={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(w4),n=0;n<r.length;n++){var i=r[n],o=r[n+1];if(cA(i)&&i.value!=="none"){var a=o&&$n(o)?o.number:0;t.push({counter:i.value,reset:a})}}return t}},fF={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(Bo).map(function(t){return D4.parse(A,t)})}},gF={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(Ry);if(n.length%2!==0)return null;for(var i=0;i<n.length;i+=2){var o=n[i].value,a=n[i+1].value;r.push({open:o,close:a})}return r}},op=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},pF={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Vu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:255,offsetX:ZA,offsetY:ZA,blur:ZA,spread:ZA,inset:!1},n=0,i=0;i<t.length;i++){var o=t[i];Vu(o,"inset")?r.inset=!0:fr(o)?(n===0?r.offsetX=o:n===1?r.offsetY=o:n===2?r.blur=o:r.spread=o,n++):r.color=lr.parse(A,o)}return r})}},hF={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(cA).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},BF={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},vF={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return Bo(e)?e.number:0}},wF=function(){function A(e,t){var r,n;this.animationDuration=N(e,fF,t.animationDuration),this.backgroundClip=N(e,Py,t.backgroundClip),this.backgroundColor=N(e,Vy,t.backgroundColor),this.backgroundImage=N(e,A6,t.backgroundImage),this.backgroundOrigin=N(e,e6,t.backgroundOrigin),this.backgroundPosition=N(e,t6,t.backgroundPosition),this.backgroundRepeat=N(e,r6,t.backgroundRepeat),this.backgroundSize=N(e,i6,t.backgroundSize),this.borderTopColor=N(e,a6,t.borderTopColor),this.borderRightColor=N(e,s6,t.borderRightColor),this.borderBottomColor=N(e,l6,t.borderBottomColor),this.borderLeftColor=N(e,c6,t.borderLeftColor),this.borderTopLeftRadius=N(e,u6,t.borderTopLeftRadius),this.borderTopRightRadius=N(e,d6,t.borderTopRightRadius),this.borderBottomRightRadius=N(e,f6,t.borderBottomRightRadius),this.borderBottomLeftRadius=N(e,g6,t.borderBottomLeftRadius),this.borderTopStyle=N(e,p6,t.borderTopStyle),this.borderRightStyle=N(e,h6,t.borderRightStyle),this.borderBottomStyle=N(e,B6,t.borderBottomStyle),this.borderLeftStyle=N(e,v6,t.borderLeftStyle),this.borderTopWidth=N(e,w6,t.borderTopWidth),this.borderRightWidth=N(e,m6,t.borderRightWidth),this.borderBottomWidth=N(e,C6,t.borderBottomWidth),this.borderLeftWidth=N(e,Q6,t.borderLeftWidth),this.boxShadow=N(e,pF,t.boxShadow),this.color=N(e,y6,t.color),this.direction=N(e,F6,t.direction),this.display=N(e,U6,t.display),this.float=N(e,E6,t.cssFloat),this.fontFamily=N(e,iF,t.fontFamily),this.fontSize=N(e,oF,t.fontSize),this.fontStyle=N(e,lF,t.fontStyle),this.fontVariant=N(e,sF,t.fontVariant),this.fontWeight=N(e,aF,t.fontWeight),this.letterSpacing=N(e,b6,t.letterSpacing),this.lineBreak=N(e,H6,t.lineBreak),this.lineHeight=N(e,k6,t.lineHeight),this.listStyleImage=N(e,I6,t.listStyleImage),this.listStylePosition=N(e,L6,t.listStylePosition),this.listStyleType=N(e,zu,t.listStyleType),this.marginTop=N(e,S6,t.marginTop),this.marginRight=N(e,_6,t.marginRight),this.marginBottom=N(e,M6,t.marginBottom),this.marginLeft=N(e,D6,t.marginLeft),this.opacity=N(e,tF,t.opacity);var i=N(e,K6,t.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=N(e,T6,t.overflowWrap),this.paddingTop=N(e,N6,t.paddingTop),this.paddingRight=N(e,R6,t.paddingRight),this.paddingBottom=N(e,O6,t.paddingBottom),this.paddingLeft=N(e,j6,t.paddingLeft),this.paintOrder=N(e,hF,t.paintOrder),this.position=N(e,V6,t.position),this.textAlign=N(e,P6,t.textAlign),this.textDecorationColor=N(e,rF,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=N(e,nF,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=N(e,z6,t.textShadow),this.textTransform=N(e,G6,t.textTransform),this.transform=N(e,$6,t.transform),this.transformOrigin=N(e,Z6,t.transformOrigin),this.visibility=N(e,q6,t.visibility),this.webkitTextStrokeColor=N(e,BF,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=N(e,vF,t.webkitTextStrokeWidth),this.wordBreak=N(e,AF,t.wordBreak),this.zIndex=N(e,eF,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return cr(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return RA(this.display,4)||RA(this.display,33554432)||RA(this.display,268435456)||RA(this.display,536870912)||RA(this.display,67108864)||RA(this.display,134217728)},A}(),mF=function(){function A(e,t){this.content=N(e,cF,t.content),this.quotes=N(e,gF,t.quotes)}return A}(),ap=function(){function A(e,t){this.counterIncrement=N(e,uF,t.counterIncrement),this.counterReset=N(e,dF,t.counterReset)}return A}(),N=function(A,e,t){var r=new B4,n=t!==null&&typeof t<"u"?t.toString():e.initialValue;r.write(n);var i=new v4(r.read());switch(e.type){case 2:var o=i.parseComponentValue();return e.parse(A,cA(o)?o.value:e.initialValue);case 0:return e.parse(A,i.parseComponentValue());case 1:return e.parse(A,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(e.format){case"angle":return nl.parse(A,i.parseComponentValue());case"color":return lr.parse(A,i.parseComponentValue());case"image":return df.parse(A,i.parseComponentValue());case"length":var a=i.parseComponentValue();return fr(a)?a:ZA;case"length-percentage":var s=i.parseComponentValue();return KA(s)?s:ZA;case"time":return D4.parse(A,i.parseComponentValue())}break}},CF="data-html2canvas-debug",QF=function(A){var e=A.getAttribute(CF);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Gu=function(A,e){var t=QF(A);return t===1||e===t},mt=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Gu(t,3))debugger;this.styles=new wF(e,window.getComputedStyle(t,null)),Xu(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=tl(this.context,t),Gu(t,4)&&(this.flags|=16)}return A}(),yF="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<sp.length;ra++)wi[sp.charCodeAt(ra)]=ra;var FF=function(A){var e=A.length*.75,t=A.length,r,n=0,i,o,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)i=wi[A.charCodeAt(r)],o=wi[A.charCodeAt(r+1)],a=wi[A.charCodeAt(r+2)],s=wi[A.charCodeAt(r+3)],c[n++]=i<<2|o>>4,c[n++]=(o&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},UF=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},xF=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},_r=5,ff=11,lc=2,EF=ff-_r,K4=65536>>_r,bF=1<<_r,cc=bF-1,HF=1024>>_r,kF=K4+HF,IF=kF,LF=32,SF=IF+LF,_F=65536>>ff,MF=1<<EF,DF=MF-1,lp=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},KF=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},TF=function(A,e){var t=FF(A),r=Array.isArray(t)?xF(t):new Uint32Array(t),n=Array.isArray(t)?UF(t):new Uint16Array(t),i=24,o=lp(n,i/2,r[4]/2),a=r[5]===2?lp(n,(i+r[4])/2):KF(r,Math.ceil((i+r[4])/4));return new NF(r[0],r[1],r[2],r[3],o,a)},NF=function(){function A(e,t,r,n,i,o){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=o}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>_r],t=(t<<lc)+(e&cc),this.data[t];if(e<=65535)return t=this.index[K4+(e-55296>>_r)],t=(t<<lc)+(e&cc),this.data[t];if(e<this.highStart)return t=SF-_F+(e>>ff),t=this.index[t],t+=e>>_r&DF,t=this.index[t],t=(t<<lc)+(e&cc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),cp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",RF=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var na=0;na<cp.length;na++)RF[cp.charCodeAt(na)]=na;var OF=1,uc=2,dc=3,up=4,dp=5,jF=7,fp=8,fc=9,gc=10,gp=11,pp=12,hp=13,Bp=14,pc=15,PF=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},VF=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,i="";++n<t;){var o=A[n];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(n+1===t||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},zF=TF(yF),Me="×",hc="÷",GF=function(A){return zF.get(A)},$F=function(A,e,t){var r=t-2,n=e[r],i=e[t-1],o=e[t];if(i===uc&&o===dc)return Me;if(i===uc||i===dc||i===up||o===uc||o===dc||o===up)return hc;if(i===fp&&[fp,fc,gp,pp].indexOf(o)!==-1||(i===gp||i===fc)&&(o===fc||o===gc)||(i===pp||i===gc)&&o===gc||o===hp||o===dp||o===jF||i===OF)return Me;if(i===hp&&o===Bp){for(;n===dp;)n=e[--r];if(n===Bp)return Me}if(i===pc&&o===pc){for(var a=0;n===pc;)a++,n=e[--r];if(a%2===0)return Me}return hc},WF=function(A){var e=PF(A),t=e.length,r=0,n=0,i=e.map(GF);return{next:function(){if(r>=t)return{done:!0,value:null};for(var o=Me;r<t&&(o=$F(e,i,++r))===Me;);if(o!==Me||r===t){var a=VF.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},XF=function(A){for(var e=WF(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},JF=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),i=Math.round(n.height);if(A.body.removeChild(r),i===e)return!0}}return!1},YF=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=rl(r.data).map(function(s){return IA(s)}),i=0,o={},a=n.every(function(s,l){t.setStart(r,i),t.setEnd(r,i+s.length);var c=t.getBoundingClientRect();i+=s.length;var u=c.x>o.x||c.y>o.y;return o=c,l===0?!0:u});return A.body.removeChild(e),a},ZF=function(){return typeof new Image().crossOrigin<"u"},qF=function(){return typeof new XMLHttpRequest().responseType=="string"},AU=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},vp=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},eU=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,i=e.toDataURL();n.src=i;var o=$u(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),wp(o).then(function(a){r.drawImage(a,0,0);var s=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+i+")",l.style.height=t+"px",vp(s)?wp($u(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),vp(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},$u=function(A,e,t,r,n){var i="http://www.w3.org/2000/svg",o=document.createElementNS(i,"svg"),a=document.createElementNS(i,"foreignObject");return o.setAttributeNS(null,"width",A.toString()),o.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),o.appendChild(a),a.appendChild(n),o},wp=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},JA={get SUPPORT_RANGE_BOUNDS(){var A=JF(document);return Object.defineProperty(JA,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=JA.SUPPORT_RANGE_BOUNDS&&YF(document);return Object.defineProperty(JA,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=AU(document);return Object.defineProperty(JA,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?eU(document):Promise.resolve(!1);return Object.defineProperty(JA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=ZF();return Object.defineProperty(JA,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=qF();return Object.defineProperty(JA,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(JA,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(JA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Ki=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),tU=function(A,e,t,r){var n=iU(e,t),i=[],o=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(JA.SUPPORT_RANGE_BOUNDS){var s=mp(r,o,a.length).getClientRects();if(s.length>1){var l=gf(a),c=0;l.forEach(function(d){i.push(new Ki(d,Tt.fromDOMRectList(A,mp(r,c+o,d.length).getClientRects()))),c+=d.length})}else i.push(new Ki(a,Tt.fromDOMRectList(A,s)))}else{var u=r.splitText(a.length);i.push(new Ki(a,rU(A,r))),r=u}else JA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));o+=a.length}),i},rU=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var i=tl(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),i}}return Tt.EMPTY},mp=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},gf=function(A){if(JA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return XF(A)},nU=function(A,e){if(JA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return aU(A,e)},iU=function(A,e){return e.letterSpacing!==0?gf(A):nU(A,e)},oU=[32,160,4961,65792,65793,4153,4241],aU=function(A,e){for(var t=_5(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,i=function(){if(n.value){var o=n.value.slice(),a=rl(o),s="";a.forEach(function(l){oU.indexOf(l)===-1?s+=IA(l):(s.length&&r.push(s),r.push(IA(l)),s="")}),s.length&&r.push(s)}};!(n=t.next()).done;)i();return r},sU=function(){function A(e,t,r){this.text=lU(t.data,r.textTransform),this.textBounds=tU(e,this.text,r,t)}return A}(),lU=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(cU,uU);case 2:return A.toUpperCase();default:return A}},cU=/(^|\s|:|-|\(|\))([a-z])/g,uU=function(A,e,t){return A.length>0?e+t.toUpperCase():A},T4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(mt),N4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(mt),R4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this,i=new XMLSerializer,o=tl(t,r);return r.setAttribute("width",o.width+"px"),r.setAttribute("height",o.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(mt),O4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),Wu=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(mt),dU=[{type:15,flags:0,unit:"px",number:3}],fU=[{type:16,flags:0,number:50}],gU=function(A){return A.width>A.height?new Tt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Tt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},pU=function(A){var e=A.type===hU?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},vs="checkbox",ws="radio",hU="password",Cp=707406591,pf=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=pU(r),(n.type===vs||n.type===ws)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=gU(n.bounds)),n.type){case vs:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=dU;break;case ws:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=fU;break}return n}return e}(mt),j4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this,i=r.options[r.selectedIndex||0];return n.value=i&&i.text||"",n}return e}(mt),P4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),V4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=G4(t,r.contentWindow.document.documentElement);var i=r.contentWindow.document.documentElement?Mi(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):St.TRANSPARENT,o=r.contentWindow.document.body?Mi(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):St.TRANSPARENT;n.backgroundColor=cr(i)?cr(o)?n.styles.backgroundColor:o:i}}catch{}return n}return e}(mt),BU=["OL","UL","MENU"],_a=function(A,e,t,r){for(var n=e.firstChild,i=void 0;n;n=i)if(i=n.nextSibling,$4(n)&&n.data.trim().length>0)t.textNodes.push(new sU(A,n,t.styles));else if(gn(n))if(Y4(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return _a(A,a,t,r)});else{var o=z4(A,n);o.styles.isVisible()&&(vU(n,o,r)?o.flags|=4:wU(o.styles)&&(o.flags|=2),BU.indexOf(n.tagName)!==-1&&(o.flags|=8),t.elements.push(o),n.slot,n.shadowRoot?_a(A,n.shadowRoot,o,r):!ms(n)&&!W4(n)&&!Cs(n)&&_a(A,n,o,r))}},z4=function(A,e){return Ju(e)?new T4(A,e):X4(e)?new N4(A,e):W4(e)?new R4(A,e):mU(e)?new O4(A,e):CU(e)?new Wu(A,e):QU(e)?new pf(A,e):Cs(e)?new j4(A,e):ms(e)?new P4(A,e):J4(e)?new V4(A,e):new mt(A,e)},G4=function(A,e){var t=z4(A,e);return t.flags|=4,_a(A,e,t,t),t},vU=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||hf(A)&&t.styles.isTransparent()},wU=function(A){return A.isPositioned()||A.isFloating()},$4=function(A){return A.nodeType===Node.TEXT_NODE},gn=function(A){return A.nodeType===Node.ELEMENT_NODE},Xu=function(A){return gn(A)&&typeof A.style<"u"&&!Ma(A)},Ma=function(A){return typeof A.className=="object"},mU=function(A){return A.tagName==="LI"},CU=function(A){return A.tagName==="OL"},QU=function(A){return A.tagName==="INPUT"},yU=function(A){return A.tagName==="HTML"},W4=function(A){return A.tagName==="svg"},hf=function(A){return A.tagName==="BODY"},X4=function(A){return A.tagName==="CANVAS"},Qp=function(A){return A.tagName==="VIDEO"},Ju=function(A){return A.tagName==="IMG"},J4=function(A){return A.tagName==="IFRAME"},yp=function(A){return A.tagName==="STYLE"},FU=function(A){return A.tagName==="SCRIPT"},ms=function(A){return A.tagName==="TEXTAREA"},Cs=function(A){return A.tagName==="SELECT"},Y4=function(A){return A.tagName==="SLOT"},Fp=function(A){return A.tagName.indexOf("-")>0},UU=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,i=!0;r!==null&&r.forEach(function(a){var s=t.counters[a.counter];s&&a.increment!==0&&(i=!1,s.length||s.push(1),s[Math.max(0,s.length-1)]+=a.increment)});var o=[];return i&&n.forEach(function(a){var s=t.counters[a.counter];o.push(a.counter),s||(s=t.counters[a.counter]=[]),s.push(a.reset)}),o},A}(),Up={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},xp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},xU={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},EU={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Wr=function(A,e,t,r,n,i){return A<e||A>t?oo(A,n,i.length>0):r.integers.reduce(function(o,a,s){for(;A>=a;)A-=a,o+=r.values[s];return o},"")+i},Z4=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},kA=function(A,e,t,r,n){var i=t-e+1;return(A<0?"-":"")+(Z4(Math.abs(A),i,r,function(o){return IA(Math.floor(o%i)+e)})+n)},Br=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return Z4(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Yr=1,Pt=2,Vt=4,mi=8,yt=function(A,e,t,r,n,i){if(A<-9999||A>9999)return oo(A,4,n.length>0);var o=Math.abs(A),a=n;if(o===0)return e[0]+a;for(var s=0;o>0&&s<=4;s++){var l=o%10;l===0&&RA(i,Yr)&&a!==""?a=e[l]+a:l>1||l===1&&s===0||l===1&&s===1&&RA(i,Pt)||l===1&&s===1&&RA(i,Vt)&&A>100||l===1&&s>1&&RA(i,mi)?a=e[l]+(s>0?t[s-1]:"")+a:l===1&&s>0&&(a=t[s-1]+a),o=Math.floor(o/10)}return(A<0?r:"")+a},Ep="十百千萬",bp="拾佰仟萬",Hp="マイナス",Bc="마이너스",oo=function(A,e,t){var r=t?". ":"",n=t?"、":"",i=t?", ":"",o=t?" ":"";switch(e){case 0:return"•"+o;case 1:return"◦"+o;case 2:return"◾"+o;case 5:var a=kA(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return Br(A,"〇一二三四五六七八九",n);case 6:return Wr(A,1,3999,Up,3,r).toLowerCase();case 7:return Wr(A,1,3999,Up,3,r);case 8:return kA(A,945,969,!1,r);case 9:return kA(A,97,122,!1,r);case 10:return kA(A,65,90,!1,r);case 11:return kA(A,1632,1641,!0,r);case 12:case 49:return Wr(A,1,9999,xp,3,r);case 35:return Wr(A,1,9999,xp,3,r).toLowerCase();case 13:return kA(A,2534,2543,!0,r);case 14:case 30:return kA(A,6112,6121,!0,r);case 15:return Br(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return Br(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return yt(A,"零一二三四五六七八九",Ep,"負",n,Pt|Vt|mi);case 47:return yt(A,"零壹貳參肆伍陸柒捌玖",bp,"負",n,Yr|Pt|Vt|mi);case 42:return yt(A,"零一二三四五六七八九",Ep,"负",n,Pt|Vt|mi);case 41:return yt(A,"零壹贰叁肆伍陆柒捌玖",bp,"负",n,Yr|Pt|Vt|mi);case 26:return yt(A,"〇一二三四五六七八九","十百千万",Hp,n,0);case 25:return yt(A,"零壱弐参四伍六七八九","拾百千万",Hp,n,Yr|Pt|Vt);case 31:return yt(A,"영일이삼사오육칠팔구","십백천만",Bc,i,Yr|Pt|Vt);case 33:return yt(A,"零一二三四五六七八九","十百千萬",Bc,i,0);case 32:return yt(A,"零壹貳參四五六七八九","拾百千",Bc,i,Yr|Pt|Vt);case 18:return kA(A,2406,2415,!0,r);case 20:return Wr(A,1,19999,EU,3,r);case 21:return kA(A,2790,2799,!0,r);case 22:return kA(A,2662,2671,!0,r);case 22:return Wr(A,1,10999,xU,3,r);case 23:return Br(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Br(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return kA(A,3302,3311,!0,r);case 28:return Br(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return Br(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return kA(A,3792,3801,!0,r);case 37:return kA(A,6160,6169,!0,r);case 38:return kA(A,4160,4169,!0,r);case 39:return kA(A,2918,2927,!0,r);case 40:return kA(A,1776,1785,!0,r);case 43:return kA(A,3046,3055,!0,r);case 44:return kA(A,3174,3183,!0,r);case 45:return kA(A,3664,3673,!0,r);case 46:return kA(A,3872,3881,!0,r);case 3:default:return kA(A,48,57,!0,r)}},q4="data-html2canvas-ignore",kp=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new UU,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=bU(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var i=e.defaultView.pageXOffset,o=e.defaultView.pageYOffset,a=n.contentWindow,s=a.document,l=IU(n).then(function(){return se(r,void 0,void 0,function(){var c,u;return re(this,function(d){switch(d.label){case 0:return this.scrolledElements.forEach(MU),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:s.fonts&&s.fonts.ready?[4,s.fonts.ready]:[3,2];case 1:d.sent(),d.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,kU(s)]:[3,4];case 3:d.sent(),d.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(s,u)}).then(function(){return n})]:[2,n]}})})});return s.open(),s.write(SU(document.doctype)+"<html></html>"),_U(this.referenceElement.ownerDocument,i,o),s.replaceChild(s.adoptNode(this.documentElement),s.documentElement),s.close(),l},A.prototype.createElementClone=function(e){if(Gu(e,2))debugger;if(X4(e))return this.createCanvasClone(e);if(Qp(e))return this.createVideoClone(e);if(yp(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Ju(t)&&(Ju(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Fp(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return vc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(i,o){return o&&typeof o.cssText=="string"?i+o.cssText:i},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var i=e.getContext("2d"),o=n.getContext("2d");if(o)if(!this.options.allowTaint&&i)o.putImageData(i.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var s=a.getContextAttributes();(s==null?void 0:s.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}o.drawImage(e,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!gn(t)||!FU(t)&&!t.hasAttribute(q4)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!gn(t)||!yp(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,i=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;i;i=i.nextSibling)if(gn(i)&&Y4(i)&&typeof i.assignedNodes=="function"){var o=i.assignedNodes();o.length&&o.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,i,r)},A.prototype.cloneNode=function(e,t){if($4(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&gn(e)&&(Xu(e)||Ma(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var i=r.getComputedStyle(e),o=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&Xu(n)&&(this.clonedReferenceElement=n),hf(n)&&TU(n);var s=this.counters.parse(new ap(this.context,i)),l=this.resolvePseudoContent(e,n,o,Ti.BEFORE);Fp(e)&&(t=!0),Qp(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var c=this.resolvePseudoContent(e,n,a,Ti.AFTER);return c&&n.appendChild(c),this.counters.pop(s),(i&&(this.options.copyStyles||Ma(e))&&!J4(e)||t)&&vc(i,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(ms(e)||Cs(e))&&(ms(n)||Cs(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var i=this;if(r){var o=r.content,a=t.ownerDocument;if(!(!a||!o||o==="none"||o==="-moz-alt-content"||r.display==="none")){this.counters.parse(new ap(this.context,r));var s=new mF(this.context,r),l=a.createElement("html2canvaspseudoelement");vc(r,l),s.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var d=a.createElement("img");d.src=u.value,d.style.opacity="1",l.appendChild(d)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(cA);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var v=u.values.filter(On),w=v[0],x=v[1];if(w&&cA(w)){var g=i.counters.getCounterValue(w.value),f=x&&cA(x)?zu.parse(i.context,x.value):3;l.appendChild(a.createTextNode(oo(g,f,!1)))}}else if(u.name==="counters"){var h=u.values.filter(On),w=h[0],C=h[1],x=h[2];if(w&&cA(w)){var F=i.counters.getCounterValues(w.value),m=x&&cA(x)?zu.parse(i.context,x.value):3,y=C&&C.type===0?C.value:"",E=F.map(function(Y){return oo(Y,m,!1)}).join(y);l.appendChild(a.createTextNode(E))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(op(s.quotes,i.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(op(s.quotes,--i.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Yu+" "+Zu;var c=n===Ti.BEFORE?" "+Yu:" "+Zu;return Ma(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),Ti;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Ti||(Ti={}));var bU=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(q4,"true"),A.body.appendChild(t),t},HU=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},kU=function(A){return Promise.all([].slice.call(A.images,0).map(HU))},IU=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var i=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(i),e(A))},50)}})},LU=["all","d","content"],vc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);LU.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},SU=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},_U=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},MU=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},DU=":before",KU=":after",Yu="___html2canvas___pseudoelement_before",Zu="___html2canvas___pseudoelement_after",Ip=`{
    content: "" !important;
    display: none !important;
}`,TU=function(A){NU(A,"."+Yu+DU+Ip+`
         .`+Zu+KU+Ip)},NU=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},Av=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),RU=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(mc(e)||VU(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return se(this,void 0,void 0,function(){var t,r,n,i,o=this;return re(this,function(a){switch(a.label){case 0:return t=Av.isSameOrigin(e),r=!wc(e)&&this._options.useCORS===!0&&JA.SUPPORT_CORS_IMAGES&&!t,n=!wc(e)&&!t&&!mc(e)&&typeof this._options.proxy=="string"&&JA.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!wc(e)&&!mc(e)&&!n&&!r?[2]:(i=e,n?[4,this.proxy(i)]:[3,2]);case 1:i=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(s,l){var c=new Image;c.onload=function(){return s(c)},c.onerror=l,(zU(i)||r)&&(c.crossOrigin="anonymous"),c.src=i,c.complete===!0&&setTimeout(function(){return s(c)},500),o._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+o._options.imageTimeout+"ms) loading image")},o._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(i,o){var a=JA.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest;s.onload=function(){if(s.status===200)if(a==="text")i(s.response);else{var u=new FileReader;u.addEventListener("load",function(){return i(u.result)},!1),u.addEventListener("error",function(d){return o(d)},!1),u.readAsDataURL(s.response)}else o("Failed to proxy resource "+n+" with status code "+s.status)},s.onerror=o;var l=r.indexOf("?")>-1?"&":"?";if(s.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;s.timeout=c,s.ontimeout=function(){return o("Timed out ("+c+"ms) proxying "+n)}}s.send()})},A}(),OU=/^data:image\/svg\+xml/i,jU=/^data:image\/.*;base64,/i,PU=/^data:image\/.*/i,VU=function(A){return JA.SUPPORT_SVG_DRAWING||!GU(A)},wc=function(A){return PU.test(A)},zU=function(A){return jU.test(A)},mc=function(A){return A.substr(0,4)==="blob"},GU=function(A){return A.substr(-3).toLowerCase()==="svg"||OU.test(A)},M=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Xr=function(A,e,t){return new M(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},ia=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Xr(this.start,this.startControl,e),n=Xr(this.startControl,this.endControl,e),i=Xr(this.endControl,this.end,e),o=Xr(r,n,e),a=Xr(n,i,e),s=Xr(o,a,e);return t?new A(this.start,r,o,s):new A(s,a,i,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),Te=function(A){return A.type===1},$U=function(){function A(e){var t=e.styles,r=e.bounds,n=vi(t.borderTopLeftRadius,r.width,r.height),i=n[0],o=n[1],a=vi(t.borderTopRightRadius,r.width,r.height),s=a[0],l=a[1],c=vi(t.borderBottomRightRadius,r.width,r.height),u=c[0],d=c[1],p=vi(t.borderBottomLeftRadius,r.width,r.height),v=p[0],w=p[1],x=[];x.push((i+s)/r.width),x.push((v+u)/r.width),x.push((o+w)/r.height),x.push((l+d)/r.height);var g=Math.max.apply(Math,x);g>1&&(i/=g,o/=g,s/=g,l/=g,u/=g,d/=g,v/=g,w/=g);var f=r.width-s,h=r.height-d,C=r.width-u,F=r.height-w,m=t.borderTopWidth,y=t.borderRightWidth,E=t.borderBottomWidth,k=t.borderLeftWidth,_=dA(t.paddingTop,e.bounds.width),Y=dA(t.paddingRight,e.bounds.width),J=dA(t.paddingBottom,e.bounds.width),$=dA(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||o>0?mA(r.left+k/3,r.top+m/3,i-k/3,o-m/3,aA.TOP_LEFT):new M(r.left+k/3,r.top+m/3),this.topRightBorderDoubleOuterBox=i>0||o>0?mA(r.left+f,r.top+m/3,s-y/3,l-m/3,aA.TOP_RIGHT):new M(r.left+r.width-y/3,r.top+m/3),this.bottomRightBorderDoubleOuterBox=u>0||d>0?mA(r.left+C,r.top+h,u-y/3,d-E/3,aA.BOTTOM_RIGHT):new M(r.left+r.width-y/3,r.top+r.height-E/3),this.bottomLeftBorderDoubleOuterBox=v>0||w>0?mA(r.left+k/3,r.top+F,v-k/3,w-E/3,aA.BOTTOM_LEFT):new M(r.left+k/3,r.top+r.height-E/3),this.topLeftBorderDoubleInnerBox=i>0||o>0?mA(r.left+k*2/3,r.top+m*2/3,i-k*2/3,o-m*2/3,aA.TOP_LEFT):new M(r.left+k*2/3,r.top+m*2/3),this.topRightBorderDoubleInnerBox=i>0||o>0?mA(r.left+f,r.top+m*2/3,s-y*2/3,l-m*2/3,aA.TOP_RIGHT):new M(r.left+r.width-y*2/3,r.top+m*2/3),this.bottomRightBorderDoubleInnerBox=u>0||d>0?mA(r.left+C,r.top+h,u-y*2/3,d-E*2/3,aA.BOTTOM_RIGHT):new M(r.left+r.width-y*2/3,r.top+r.height-E*2/3),this.bottomLeftBorderDoubleInnerBox=v>0||w>0?mA(r.left+k*2/3,r.top+F,v-k*2/3,w-E*2/3,aA.BOTTOM_LEFT):new M(r.left+k*2/3,r.top+r.height-E*2/3),this.topLeftBorderStroke=i>0||o>0?mA(r.left+k/2,r.top+m/2,i-k/2,o-m/2,aA.TOP_LEFT):new M(r.left+k/2,r.top+m/2),this.topRightBorderStroke=i>0||o>0?mA(r.left+f,r.top+m/2,s-y/2,l-m/2,aA.TOP_RIGHT):new M(r.left+r.width-y/2,r.top+m/2),this.bottomRightBorderStroke=u>0||d>0?mA(r.left+C,r.top+h,u-y/2,d-E/2,aA.BOTTOM_RIGHT):new M(r.left+r.width-y/2,r.top+r.height-E/2),this.bottomLeftBorderStroke=v>0||w>0?mA(r.left+k/2,r.top+F,v-k/2,w-E/2,aA.BOTTOM_LEFT):new M(r.left+k/2,r.top+r.height-E/2),this.topLeftBorderBox=i>0||o>0?mA(r.left,r.top,i,o,aA.TOP_LEFT):new M(r.left,r.top),this.topRightBorderBox=s>0||l>0?mA(r.left+f,r.top,s,l,aA.TOP_RIGHT):new M(r.left+r.width,r.top),this.bottomRightBorderBox=u>0||d>0?mA(r.left+C,r.top+h,u,d,aA.BOTTOM_RIGHT):new M(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=v>0||w>0?mA(r.left,r.top+F,v,w,aA.BOTTOM_LEFT):new M(r.left,r.top+r.height),this.topLeftPaddingBox=i>0||o>0?mA(r.left+k,r.top+m,Math.max(0,i-k),Math.max(0,o-m),aA.TOP_LEFT):new M(r.left+k,r.top+m),this.topRightPaddingBox=s>0||l>0?mA(r.left+Math.min(f,r.width-y),r.top+m,f>r.width+y?0:Math.max(0,s-y),Math.max(0,l-m),aA.TOP_RIGHT):new M(r.left+r.width-y,r.top+m),this.bottomRightPaddingBox=u>0||d>0?mA(r.left+Math.min(C,r.width-k),r.top+Math.min(h,r.height-E),Math.max(0,u-y),Math.max(0,d-E),aA.BOTTOM_RIGHT):new M(r.left+r.width-y,r.top+r.height-E),this.bottomLeftPaddingBox=v>0||w>0?mA(r.left+k,r.top+Math.min(F,r.height-E),Math.max(0,v-k),Math.max(0,w-E),aA.BOTTOM_LEFT):new M(r.left+k,r.top+r.height-E),this.topLeftContentBox=i>0||o>0?mA(r.left+k+$,r.top+m+_,Math.max(0,i-(k+$)),Math.max(0,o-(m+_)),aA.TOP_LEFT):new M(r.left+k+$,r.top+m+_),this.topRightContentBox=s>0||l>0?mA(r.left+Math.min(f,r.width+k+$),r.top+m+_,f>r.width+k+$?0:s-k+$,l-(m+_),aA.TOP_RIGHT):new M(r.left+r.width-(y+Y),r.top+m+_),this.bottomRightContentBox=u>0||d>0?mA(r.left+Math.min(C,r.width-(k+$)),r.top+Math.min(h,r.height+m+_),Math.max(0,u-(y+Y)),d-(E+J),aA.BOTTOM_RIGHT):new M(r.left+r.width-(y+Y),r.top+r.height-(E+J)),this.bottomLeftContentBox=v>0||w>0?mA(r.left+k+$,r.top+F,Math.max(0,v-(k+$)),w-(E+J),aA.BOTTOM_LEFT):new M(r.left+k+$,r.top+r.height-(E+J))}return A}(),aA;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(aA||(aA={}));var mA=function(A,e,t,r,n){var i=4*((Math.sqrt(2)-1)/3),o=t*i,a=r*i,s=A+t,l=e+r;switch(n){case aA.TOP_LEFT:return new ia(new M(A,l),new M(A,l-a),new M(s-o,e),new M(s,e));case aA.TOP_RIGHT:return new ia(new M(A,e),new M(A+o,e),new M(s,l-a),new M(s,l));case aA.BOTTOM_RIGHT:return new ia(new M(s,e),new M(s,e+a),new M(A+o,l),new M(A,l));case aA.BOTTOM_LEFT:default:return new ia(new M(s,l),new M(s-o,l),new M(A,e+a),new M(A,e))}},Qs=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},WU=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},ys=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},XU=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),oa=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),JU=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),YU=function(A){return A.type===0},ev=function(A){return A.type===1},ZU=function(A){return A.type===2},Lp=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},qU=function(A,e,t,r,n){return A.map(function(i,o){switch(o){case 0:return i.add(e,t);case 1:return i.add(e+r,t);case 2:return i.add(e+r,t+n);case 3:return i.add(e,t+n)}return i})},tv=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),rv=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new $U(this.container),this.container.styles.opacity<1&&this.effects.push(new JU(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new XU(r,n,i))}if(this.container.styles.overflowX!==0){var o=Qs(this.curves),a=ys(this.curves);Lp(o,a)?this.effects.push(new oa(o,6)):(this.effects.push(new oa(o,2)),this.effects.push(new oa(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var i=r.effects.filter(function(s){return!ev(s)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,i),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var o=Qs(r.curves),a=ys(r.curves);Lp(o,a)||n.unshift(new oa(a,6))}}else n.unshift.apply(n,i);r=r.parent}return n.filter(function(s){return RA(s.target,e)})},A}(),qu=function(A,e,t,r){A.container.elements.forEach(function(n){var i=RA(n.flags,4),o=RA(n.flags,2),a=new rv(n,A);RA(n.styles.display,2048)&&r.push(a);var s=RA(n.flags,8)?[]:r;if(i||o){var l=i||n.styles.isPositioned()?t:e,c=new tv(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var u=n.styles.zIndex.order;if(u<0){var d=0;l.negativeZIndex.some(function(v,w){return u>v.element.container.styles.zIndex.order?(d=w,!1):d>0}),l.negativeZIndex.splice(d,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(v,w){return u>=v.element.container.styles.zIndex.order?(p=w+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else n.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);qu(a,c,i?c:t,s)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),qu(a,e,t,s);RA(n.flags,8)&&nv(n,s)})},nv=function(A,e){for(var t=A instanceof Wu?A.start:1,r=A instanceof Wu?A.reversed:!1,n=0;n<e.length;n++){var i=e[n];i.container instanceof O4&&typeof i.container.value=="number"&&i.container.value!==0&&(t=i.container.value),i.listValue=oo(t,i.container.styles.listStyleType,!0),t+=r?-1:1}},Ax=function(A){var e=new rv(A,null),t=new tv(e),r=[];return qu(e,t,t,r),nv(e.container,r),t},Sp=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},ex=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Oe(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},tx=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},rx=function(A,e){switch(e){case 0:return aa(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return aa(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return aa(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return aa(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},aa=function(A,e){var t=[];return Te(A)?t.push(A.subdivide(.5,!1)):t.push(A),Te(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Oe=function(A,e,t,r){var n=[];return Te(A)?n.push(A.subdivide(.5,!1)):n.push(A),Te(t)?n.push(t.subdivide(.5,!0)):n.push(t),Te(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),Te(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},iv=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Fs=function(A){var e=A.styles,t=A.bounds,r=dA(e.paddingLeft,t.width),n=dA(e.paddingRight,t.width),i=dA(e.paddingTop,t.width),o=dA(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,i+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+i+o))},nx=function(A,e){return A===0?e.bounds:A===2?Fs(e):iv(e)},ix=function(A,e){return A===0?e.bounds:A===2?Fs(e):iv(e)},Cc=function(A,e,t){var r=nx(Zr(A.styles.backgroundOrigin,e),A),n=ix(Zr(A.styles.backgroundClip,e),A),i=ox(Zr(A.styles.backgroundSize,e),t,r),o=i[0],a=i[1],s=vi(Zr(A.styles.backgroundPosition,e),r.width-o,r.height-a),l=ax(Zr(A.styles.backgroundRepeat,e),s,i,r,n),c=Math.round(r.left+s[0]),u=Math.round(r.top+s[1]);return[l,c,u,o,a]},Jr=function(A){return cA(A)&&A.value===Qn.AUTO},sa=function(A){return typeof A=="number"},ox=function(A,e,t){var r=e[0],n=e[1],i=e[2],o=A[0],a=A[1];if(!o)return[0,0];if(KA(o)&&a&&KA(a))return[dA(o,t.width),dA(a,t.height)];var s=sa(i);if(cA(o)&&(o.value===Qn.CONTAIN||o.value===Qn.COVER)){if(sa(i)){var l=t.width/t.height;return l<i!=(o.value===Qn.COVER)?[t.width,t.width/i]:[t.height*i,t.height]}return[t.width,t.height]}var c=sa(r),u=sa(n),d=c||u;if(Jr(o)&&(!a||Jr(a))){if(c&&u)return[r,n];if(!s&&!d)return[t.width,t.height];if(d&&s){var p=c?r:n*i,v=u?n:r/i;return[p,v]}var w=c?r:t.width,x=u?n:t.height;return[w,x]}if(s){var g=0,f=0;return KA(o)?g=dA(o,t.width):KA(a)&&(f=dA(a,t.height)),Jr(o)?g=f*i:(!a||Jr(a))&&(f=g/i),[g,f]}var h=null,C=null;if(KA(o)?h=dA(o,t.width):a&&KA(a)&&(C=dA(a,t.height)),h!==null&&(!a||Jr(a))&&(C=c&&u?h/r*n:t.height),C!==null&&Jr(o)&&(h=c&&u?C/n*r:t.width),h!==null&&C!==null)return[h,C];throw new Error("Unable to calculate background-size for element")},Zr=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},ax=function(A,e,t,r,n){var i=e[0],o=e[1],a=t[0],s=t[1];switch(A){case 2:return[new M(Math.round(r.left),Math.round(r.top+o)),new M(Math.round(r.left+r.width),Math.round(r.top+o)),new M(Math.round(r.left+r.width),Math.round(s+r.top+o)),new M(Math.round(r.left),Math.round(s+r.top+o))];case 3:return[new M(Math.round(r.left+i),Math.round(r.top)),new M(Math.round(r.left+i+a),Math.round(r.top)),new M(Math.round(r.left+i+a),Math.round(r.height+r.top)),new M(Math.round(r.left+i),Math.round(r.height+r.top))];case 1:return[new M(Math.round(r.left+i),Math.round(r.top+o)),new M(Math.round(r.left+i+a),Math.round(r.top+o)),new M(Math.round(r.left+i+a),Math.round(r.top+o+s)),new M(Math.round(r.left+i),Math.round(r.top+o+s))];default:return[new M(Math.round(n.left),Math.round(n.top)),new M(Math.round(n.left+n.width),Math.round(n.top)),new M(Math.round(n.left+n.width),Math.round(n.height+n.top)),new M(Math.round(n.left),Math.round(n.height+n.top))]}},sx="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",_p="Hidden Text",lx=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),i=this._document.createElement("span"),o=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",o.appendChild(r),n.src=sx,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",i.style.fontFamily=e,i.style.fontSize=t,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(_p)),r.appendChild(i),r.appendChild(n);var a=n.offsetTop-i.offsetTop+2;r.removeChild(i),r.appendChild(this._document.createTextNode(_p)),r.style.lineHeight="normal",n.style.verticalAlign="super";var s=n.offsetTop-r.offsetTop+2;return o.removeChild(r),{baseline:a,middle:s}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),ov=function(){function A(e,t){this.context=e,this.options=t}return A}(),cx=1e4,ux=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new lx(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),ZU(t)&&(this.ctx.globalAlpha=t.opacity),YU(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),ev(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return se(this,void 0,void 0,function(){var r;return re(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return se(this,void 0,void 0,function(){return re(this,function(r){switch(r.label){case 0:if(RA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var i=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var o=gf(t.text);o.reduce(function(a,s){return i.ctx.fillText(s,a,t.bounds.top+n),a+i.ctx.measureText(s).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(o){return o==="normal"||o==="small-caps"}).join(""),n=hx(t.fontFamily).join(", "),i=Bo(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,i,n].join(" "),n,i]},e.prototype.renderTextNode=function(t,r){return se(this,void 0,void 0,function(){var n,i,o,a,s,l,c,u,d=this;return re(this,function(p){return n=this.createFontStyle(r),i=n[0],o=n[1],a=n[2],this.ctx.font=i,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",s=this.fontMetrics.getMetrics(o,a),l=s.baseline,c=s.middle,u=r.paintOrder,t.textBounds.forEach(function(v){u.forEach(function(w){switch(w){case 0:d.ctx.fillStyle=VA(r.color),d.renderTextWithLetterSpacing(v,r.letterSpacing,l);var x=r.textShadow;x.length&&v.text.trim().length&&(x.slice(0).reverse().forEach(function(g){d.ctx.shadowColor=VA(g.color),d.ctx.shadowOffsetX=g.offsetX.number*d.options.scale,d.ctx.shadowOffsetY=g.offsetY.number*d.options.scale,d.ctx.shadowBlur=g.blur.number,d.renderTextWithLetterSpacing(v,r.letterSpacing,l)}),d.ctx.shadowColor="",d.ctx.shadowOffsetX=0,d.ctx.shadowOffsetY=0,d.ctx.shadowBlur=0),r.textDecorationLine.length&&(d.ctx.fillStyle=VA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(g){switch(g){case 1:d.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top+l),v.bounds.width,1);break;case 2:d.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top),v.bounds.width,1);break;case 3:d.ctx.fillRect(v.bounds.left,Math.ceil(v.bounds.top+c),v.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&v.text.trim().length&&(d.ctx.strokeStyle=VA(r.webkitTextStrokeColor),d.ctx.lineWidth=r.webkitTextStrokeWidth,d.ctx.lineJoin=window.chrome?"miter":"round",d.ctx.strokeText(v.text,v.bounds.left,v.bounds.top+l)),d.ctx.strokeStyle="",d.ctx.lineWidth=0,d.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var i=Fs(t),o=ys(r);this.path(o),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return se(this,void 0,void 0,function(){var r,n,i,o,a,s,f,f,l,c,u,d,C,p,v,F,w,x,g,f,h,C,F;return re(this,function(m){switch(m.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,i=r.styles,o=0,a=r.textNodes,m.label=1;case 1:return o<a.length?(s=a[o],[4,this.renderTextNode(s,i)]):[3,4];case 2:m.sent(),m.label=3;case 3:return o++,[3,1];case 4:if(!(r instanceof T4))return[3,8];m.label=5;case 5:return m.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return f=m.sent(),this.renderReplacedElement(r,n,f),[3,8];case 7:return m.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof N4&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof R4))return[3,12];m.label=9;case 9:return m.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return f=m.sent(),this.renderReplacedElement(r,n,f),[3,12];case 11:return m.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof V4&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:c=m.sent(),r.width&&r.height&&this.ctx.drawImage(c,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),m.label=14;case 14:if(r instanceof pf&&(u=Math.min(r.bounds.width,r.bounds.height),r.type===vs?r.checked&&(this.ctx.save(),this.path([new M(r.bounds.left+u*.39363,r.bounds.top+u*.79),new M(r.bounds.left+u*.16,r.bounds.top+u*.5549),new M(r.bounds.left+u*.27347,r.bounds.top+u*.44071),new M(r.bounds.left+u*.39694,r.bounds.top+u*.5649),new M(r.bounds.left+u*.72983,r.bounds.top+u*.23),new M(r.bounds.left+u*.84,r.bounds.top+u*.34085),new M(r.bounds.left+u*.39363,r.bounds.top+u*.79)]),this.ctx.fillStyle=VA(Cp),this.ctx.fill(),this.ctx.restore()):r.type===ws&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+u/2,r.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=VA(Cp),this.ctx.fill(),this.ctx.restore())),dx(r)&&r.value.length){switch(d=this.createFontStyle(i),C=d[0],p=d[1],v=this.fontMetrics.getMetrics(C,p).baseline,this.ctx.font=C,this.ctx.fillStyle=VA(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=gx(r.styles.textAlign),F=Fs(r),w=0,r.styles.textAlign){case 1:w+=F.width/2;break;case 2:w+=F.width;break}x=F.add(w,0,0,-F.height/2+1),this.ctx.save(),this.path([new M(F.left,F.top),new M(F.left+F.width,F.top),new M(F.left+F.width,F.top+F.height),new M(F.left,F.top+F.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ki(r.value,x),i.letterSpacing,v),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!RA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(g=r.styles.listStyleImage,g.type!==0)return[3,18];f=void 0,h=g.url,m.label=15;case 15:return m.trys.push([15,17,,18]),[4,this.context.cache.match(h)];case 16:return f=m.sent(),this.ctx.drawImage(f,r.bounds.left-(f.width+10),r.bounds.top),[3,18];case 17:return m.sent(),this.context.logger.error("Error loading list-style-image "+h),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(C=this.createFontStyle(i)[0],this.ctx.font=C,this.ctx.fillStyle=VA(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",F=new Tt(r.bounds.left,r.bounds.top+dA(r.styles.paddingTop,r.bounds.width),r.bounds.width,np(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ki(t.listValue,F),i.letterSpacing,np(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),m.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return se(this,void 0,void 0,function(){var r,n,g,i,o,g,a,s,g,l,c,g,u,d,g,p,v,g,w,x,g;return re(this,function(f){switch(f.label){case 0:if(RA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:f.sent(),r=0,n=t.negativeZIndex,f.label=2;case 2:return r<n.length?(g=n[r],[4,this.renderStack(g)]):[3,5];case 3:f.sent(),f.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:f.sent(),i=0,o=t.nonInlineLevel,f.label=7;case 7:return i<o.length?(g=o[i],[4,this.renderNode(g)]):[3,10];case 8:f.sent(),f.label=9;case 9:return i++,[3,7];case 10:a=0,s=t.nonPositionedFloats,f.label=11;case 11:return a<s.length?(g=s[a],[4,this.renderStack(g)]):[3,14];case 12:f.sent(),f.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,f.label=15;case 15:return l<c.length?(g=c[l],[4,this.renderStack(g)]):[3,18];case 16:f.sent(),f.label=17;case 17:return l++,[3,15];case 18:u=0,d=t.inlineLevel,f.label=19;case 19:return u<d.length?(g=d[u],[4,this.renderNode(g)]):[3,22];case 20:f.sent(),f.label=21;case 21:return u++,[3,19];case 22:p=0,v=t.zeroOrAutoZIndexOrTransformedOrOpacity,f.label=23;case 23:return p<v.length?(g=v[p],[4,this.renderStack(g)]):[3,26];case 24:f.sent(),f.label=25;case 25:return p++,[3,23];case 26:w=0,x=t.positiveZIndex,f.label=27;case 27:return w<x.length?(g=x[w],[4,this.renderStack(g)]):[3,30];case 28:f.sent(),f.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,i){var o=Te(n)?n.start:n;i===0?r.ctx.moveTo(o.x,o.y):r.ctx.lineTo(o.x,o.y),Te(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,i){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,i),this.ctx.fill(),this.ctx.translate(-n,-i)},e.prototype.resizeImage=function(t,r,n){var i;if(t.width===r&&t.height===n)return t;var o=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,a=o.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var s=a.getContext("2d");return s.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return se(this,void 0,void 0,function(){var r,n,i,o,a,s;return re(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(c){var u,d,p,_,K,Z,$,S,E,v,_,K,Z,$,S,w,x,g,f,h,C,F,m,y,E,k,_,Y,J,$,S,V,K,Z,b,I,O,G,W,FA,uA,nA;return re(this,function(sA){switch(sA.label){case 0:if(c.type!==0)return[3,5];u=void 0,d=c.url,sA.label=1;case 1:return sA.trys.push([1,3,,4]),[4,i.context.cache.match(d)];case 2:return u=sA.sent(),[3,4];case 3:return sA.sent(),i.context.logger.error("Error loading background-image "+d),[3,4];case 4:return u&&(p=Cc(t,r,[u.width,u.height,u.width/u.height]),_=p[0],K=p[1],Z=p[2],$=p[3],S=p[4],E=i.ctx.createPattern(i.resizeImage(u,$,S),"repeat"),i.renderRepeat(_,E,K,Z)),[3,6];case 5:Yy(c)?(v=Cc(t,r,[null,null,null]),_=v[0],K=v[1],Z=v[2],$=v[3],S=v[4],w=Gy(c.angle,$,S),x=w[0],g=w[1],f=w[2],h=w[3],C=w[4],F=document.createElement("canvas"),F.width=$,F.height=S,m=F.getContext("2d"),y=m.createLinearGradient(g,h,f,C),tp(c.stops,x).forEach(function(gA){return y.addColorStop(gA.stop,VA(gA.color))}),m.fillStyle=y,m.fillRect(0,0,$,S),$>0&&S>0&&(E=i.ctx.createPattern(F,"repeat"),i.renderRepeat(_,E,K,Z))):Zy(c)&&(k=Cc(t,r,[null,null,null]),_=k[0],Y=k[1],J=k[2],$=k[3],S=k[4],V=c.position.length===0?[uf]:c.position,K=dA(V[0],$),Z=dA(V[V.length-1],S),b=$y(c,K,Z,$,S),I=b[0],O=b[1],I>0&&O>0&&(G=i.ctx.createRadialGradient(Y+K,J+Z,0,Y+K,J+Z,I),tp(c.stops,I*2).forEach(function(gA){return G.addColorStop(gA.stop,VA(gA.color))}),i.path(_),i.ctx.fillStyle=G,I!==O?(W=t.bounds.left+.5*t.bounds.width,FA=t.bounds.top+.5*t.bounds.height,uA=O/I,nA=1/uA,i.ctx.save(),i.ctx.translate(W,FA),i.ctx.transform(1,0,0,uA,0,0),i.ctx.translate(-W,-FA),i.ctx.fillRect(Y,nA*(J-FA)+FA,$,S*nA),i.ctx.restore()):i.ctx.fill())),sA.label=6;case 6:return r--,[2]}})},i=this,o=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return o<a.length?(s=a[o],[5,n(s)]):[3,4];case 2:l.sent(),l.label=3;case 3:return o++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return se(this,void 0,void 0,function(){return re(this,function(i){return this.path(Sp(n,r)),this.ctx.fillStyle=VA(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,i){return se(this,void 0,void 0,function(){var o,a;return re(this,function(s){switch(s.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,i)]:[3,2];case 1:return s.sent(),[2];case 2:return o=ex(i,n),this.path(o),this.ctx.fillStyle=VA(t),this.ctx.fill(),a=tx(i,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return se(this,void 0,void 0,function(){var r,n,i,o,a,s,l,c,u=this;return re(this,function(d){switch(d.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!cr(r.backgroundColor)||r.backgroundImage.length,i=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],o=fx(Zr(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(o),this.ctx.clip(),cr(r.backgroundColor)||(this.ctx.fillStyle=VA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:d.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var v=Qs(t.curves),w=p.inset?0:cx,x=qU(v,-w+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(v),u.ctx.clip(),u.mask(x)):(u.mask(v),u.ctx.clip(),u.path(x)),u.ctx.shadowOffsetX=p.offsetX.number+w,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=VA(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?VA(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),d.label=2;case 2:a=0,s=0,l=i,d.label=3;case 3:return s<l.length?(c=l[s],c.style!==0&&!cr(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return d.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return d.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return d.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:d.sent(),d.label=11;case 11:a++,d.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,i,o){return se(this,void 0,void 0,function(){var a,s,l,c,u,d,p,v,w,x,g,f,h,C,F,m,F,m;return re(this,function(y){return this.ctx.save(),a=rx(i,n),s=Sp(i,n),o===2&&(this.path(s),this.ctx.clip()),Te(s[0])?(l=s[0].start.x,c=s[0].start.y):(l=s[0].x,c=s[0].y),Te(s[1])?(u=s[1].end.x,d=s[1].end.y):(u=s[1].x,d=s[1].y),n===0||n===2?p=Math.abs(l-u):p=Math.abs(c-d),this.ctx.beginPath(),o===3?this.formatPath(a):this.formatPath(s.slice(0,2)),v=r<3?r*3:r*2,w=r<3?r*2:r,o===3&&(v=r,w=r),x=!0,p<=v*2?x=!1:p<=v*2+w?(g=p/(2*v+w),v*=g,w*=g):(f=Math.floor((p+w)/(v+w)),h=(p-f*v)/(f-1),C=(p-(f+1)*v)/f,w=C<=0||Math.abs(w-h)<Math.abs(w-C)?h:C),x&&(o===3?this.ctx.setLineDash([0,v+w]):this.ctx.setLineDash([v,w])),o===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=VA(t),this.ctx.stroke(),this.ctx.setLineDash([]),o===2&&(Te(s[0])&&(F=s[3],m=s[0],this.ctx.beginPath(),this.formatPath([new M(F.end.x,F.end.y),new M(m.start.x,m.start.y)]),this.ctx.stroke()),Te(s[1])&&(F=s[1],m=s[2],this.ctx.beginPath(),this.formatPath([new M(F.end.x,F.end.y),new M(m.start.x,m.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return se(this,void 0,void 0,function(){var r;return re(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=VA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=Ax(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(ov),dx=function(A){return A instanceof P4||A instanceof j4?!0:A instanceof pf&&A.type!==ws&&A.type!==vs},fx=function(A,e){switch(A){case 0:return Qs(e);case 2:return WU(e);case 1:default:return ys(e)}},gx=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},px=["-apple-system","system-ui"],hx=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return px.indexOf(e)===-1}):A},Bx=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return se(this,void 0,void 0,function(){var r,n;return re(this,function(i){switch(i.label){case 0:return r=$u(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,vx(r)];case 1:return n=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=VA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(ov),vx=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},wx=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ro([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ro([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ro([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ro([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),mx=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new wx({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new RU(this,e)}return A.instanceCount=1,A}(),Cx=function(A,e){return e===void 0&&(e={}),Qx(A,e)};typeof window<"u"&&Av.setContext(window);var Qx=function(A,e){return se(void 0,void 0,void 0,function(){var t,r,n,i,o,a,s,l,c,u,d,p,v,w,x,g,f,h,C,F,y,m,y,E,k,_,Y,J,$,S,V,K,Z,b,I,O,G,W,FA,uA;return re(this,function(nA){switch(nA.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(E=e.allowTaint)!==null&&E!==void 0?E:!1,imageTimeout:(k=e.imageTimeout)!==null&&k!==void 0?k:15e3,proxy:e.proxy,useCORS:(_=e.useCORS)!==null&&_!==void 0?_:!1},i=Lu({logging:(Y=e.logging)!==null&&Y!==void 0?Y:!0,cache:e.cache},n),o={windowWidth:(J=e.windowWidth)!==null&&J!==void 0?J:r.innerWidth,windowHeight:($=e.windowHeight)!==null&&$!==void 0?$:r.innerHeight,scrollX:(S=e.scrollX)!==null&&S!==void 0?S:r.pageXOffset,scrollY:(V=e.scrollY)!==null&&V!==void 0?V:r.pageYOffset},a=new Tt(o.scrollX,o.scrollY,o.windowWidth,o.windowHeight),s=new mx(i,a),l=(K=e.foreignObjectRendering)!==null&&K!==void 0?K:!1,c={allowTaint:(Z=e.allowTaint)!==null&&Z!==void 0?Z:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},s.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new kp(s,A,c),d=u.clonedReferenceElement,d?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=nA.sent(),v=hf(d)||yU(d)?qQ(d.ownerDocument):tl(s,d),w=v.width,x=v.height,g=v.left,f=v.top,h=yx(s,d,e.backgroundColor),C={canvas:e.canvas,backgroundColor:h,scale:(I=(b=e.scale)!==null&&b!==void 0?b:r.devicePixelRatio)!==null&&I!==void 0?I:1,x:((O=e.x)!==null&&O!==void 0?O:0)+g,y:((G=e.y)!==null&&G!==void 0?G:0)+f,width:(W=e.width)!==null&&W!==void 0?W:Math.ceil(w),height:(FA=e.height)!==null&&FA!==void 0?FA:Math.ceil(x)},l?(s.logger.debug("Document cloned, using foreign object rendering"),y=new Bx(s,C),[4,y.render(d)]):[3,3];case 2:return F=nA.sent(),[3,5];case 3:return s.logger.debug("Document cloned, element located at "+g+","+f+" with size "+w+"x"+x+" using computed rendering"),s.logger.debug("Starting DOM parsing"),m=G4(s,d),h===m.styles.backgroundColor&&(m.styles.backgroundColor=St.TRANSPARENT),s.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),y=new ux(s,C),[4,y.render(m)];case 4:F=nA.sent(),nA.label=5;case 5:return(!((uA=e.removeContainer)!==null&&uA!==void 0)||uA)&&(kp.destroy(p)||s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),s.logger.debug("Finished rendering"),[2,F]}})})},yx=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?Mi(A,getComputedStyle(r.documentElement).backgroundColor):St.TRANSPARENT,i=r.body?Mi(A,getComputedStyle(r.body).backgroundColor):St.TRANSPARENT,o=typeof t=="string"?Mi(A,t):t===null?St.TRANSPARENT:4294967295;return e===r.documentElement?cr(n)?cr(i)?o:i:n:o};const Bf=(A,e,t)=>{A&&Cx(A,{scale:t,useCORS:!0}).then(function(r){r.toBlob(function(n){const i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="image.png",e&&(i.download=e),i.click(),URL.revokeObjectURL(i.href)})})},Fx=({pathData:A=[]})=>{var u,d;const[e,t]=H.useState(1),r=H.useMemo(()=>A.filter(p=>p.id===e)[0],[e]),[n,i]=H.useState(0),[o,a]=H.useState(Array.from({length:(u=r.path)==null?void 0:u.length}).map(()=>"#DDDDDD")),s=p=>{const v=o==null?void 0:o.map((w,x)=>x+1===n?p:w);a(v)},l=p=>p==="white"||p==="#fff"||p==="#FFF"||p==="#ffffff"||p==="#FFFFFF",c=H.useRef(null);return Q.jsxs(Ux,{className:"flex-1 flex column items-start gap-32 pt-24 px-16 width-100",children:[Q.jsx("div",{className:"flex column items-center gap-12 width-100",children:Q.jsxs("div",{className:"relative flex gap-12",children:[Q.jsx("div",{className:"flex column gap-8 height-100 scrollbar-none",style:{width:"72px"},children:A.map((p,v)=>Q.jsx("div",{onClick:()=>{t(p.id)},className:`flex items-center justify-center radius-6 ratio-1 ${e===p.id?"border-primary":"border"}`,style:{width:"72px"},children:Q.jsx("img",{src:p.img,width:58})},v))}),Q.jsx("div",{ref:c,className:"flex-1 ratio-1",children:Q.jsx("svg",{width:"100%",viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"radius-8 bg-gray",onClick:()=>i(0),children:(d=r.path)==null?void 0:d.map((p,v)=>Q.jsx("path",{d:p,fill:o[v]||"var(--color-bg-3)",stroke:v+1===n?"var(--color-text-3)":o[v]!=="#DDDDDD"?o[v]:"#EfEfEf",className:"transition",onClick:w=>{w.stopPropagation(),i(v+1)}},v))})}),Q.jsx("div",{className:"absolute",style:{bottom:"12px",right:"12px"},onClick:()=>{Bf(c.current,"crochet-time-color-fill-res",3)},children:Q.jsx(SA,{name:"download",stroke:"var(--color-text-4)",size:20})})]})}),Q.jsxs(xx,{className:"flex items-center justify-center fs-12 color-gray-2 width-100 border radius-8",children:[Q.jsx("input",{type:"color",onChange:p=>s==null?void 0:s(p.target.value)}),"自定义颜色"]}),Q.jsx("div",{className:"flex-1 flex column width-100 pb-24",style:{overflow:"auto"},children:$8.map(p=>{var v;return Q.jsxs(YA,{column:!0,children:[Q.jsx(ce,{title:`【${p.title}】`,type:"p",style:{margin:"12px auto"}}),Q.jsx("div",{className:"grid width-100 gap-8",style:{gridTemplateColumns:"repeat(auto-fit, minmax(36px,1fr))"},children:(v=p.colors)==null?void 0:v.map(w=>Q.jsx("div",{className:`flex items-center justify-center fs-12 color-white border radius-50 ratio-1 ${l(w.value)?"border":""}`,style:{backgroundColor:w.value},onClick:()=>s==null?void 0:s(w.value),children:w.name},w.id))})]},p.id)})})]})},Ux=We(go)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`,xx=We.label`
  height: 36px;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`;function Us(A){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Us(A)}var Ex=/^\s+/,bx=/\s+$/;function z(A,e){if(A=A||"",e=e||{},A instanceof z)return A;if(!(this instanceof z))return new z(A,e);var t=Hx(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,i,o,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?i=t/12.92:i=Math.pow((t+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*o+.0722*a},setAlpha:function(e){return this._a=av(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Dp(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Dp(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=Mp(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Mp(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Kp(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Sx(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(QA(this._r,255)*100)+"%",g:Math.round(QA(this._g,255)*100)+"%",b:Math.round(QA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%)":"rgba("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:zx[Kp(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Tp(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=z(e);r="#"+Tp(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,i=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return z(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(Kx,arguments)},brighten:function(){return this._applyModification(Tx,arguments)},darken:function(){return this._applyModification(Nx,arguments)},desaturate:function(){return this._applyModification(_x,arguments)},saturate:function(){return this._applyModification(Mx,arguments)},greyscale:function(){return this._applyModification(Dx,arguments)},spin:function(){return this._applyModification(Rx,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Px,arguments)},complement:function(){return this._applyCombination(Ox,arguments)},monochromatic:function(){return this._applyCombination(Vx,arguments)},splitcomplement:function(){return this._applyCombination(jx,arguments)},triad:function(){return this._applyCombination(Np,[3])},tetrad:function(){return this._applyCombination(Np,[4])}};z.fromRatio=function(A,e){if(Us(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=Ci(A[r]));A=t}return z(A,e)};function Hx(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,i=null,o=!1,a=!1;return typeof A=="string"&&(A=Xx(A)),Us(A)=="object"&&(Ft(A.r)&&Ft(A.g)&&Ft(A.b)?(e=kx(A.r,A.g,A.b),o=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Ft(A.h)&&Ft(A.s)&&Ft(A.v)?(r=Ci(A.s),n=Ci(A.v),e=Lx(A.h,r,n),o=!0,a="hsv"):Ft(A.h)&&Ft(A.s)&&Ft(A.l)&&(r=Ci(A.s),i=Ci(A.l),e=Ix(A.h,r,i),o=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=av(t),{ok:o,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function kx(A,e,t){return{r:QA(A,255)*255,g:QA(e,255)*255,b:QA(t,255)*255}}function Mp(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=(r+n)/2;if(r==n)i=o=0;else{var s=r-n;switch(o=a>.5?s/(2-r-n):s/(r+n),r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,l:a}}function Ix(A,e,t){var r,n,i;A=QA(A,360),e=QA(e,100),t=QA(t,100);function o(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=i=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=o(s,a,A+1/3),n=o(s,a,A),i=o(s,a,A-1/3)}return{r:r*255,g:n*255,b:i*255}}function Dp(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=r,s=r-n;if(o=r===0?0:s/r,r==n)i=0;else{switch(r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,v:a}}function Lx(A,e,t){A=QA(A,360)*6,e=QA(e,100),t=QA(t,100);var r=Math.floor(A),n=A-r,i=t*(1-e),o=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,o,i,i,a,t][s],c=[a,t,t,o,i,i][s],u=[i,i,a,t,t,o][s];return{r:l*255,g:c*255,b:u*255}}function Kp(A,e,t,r){var n=[rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Sx(A,e,t,r,n){var i=[rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16)),rt(sv(r))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Tp(A,e,t,r){var n=[rt(sv(r)),rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16))];return n.join("")}z.equals=function(A,e){return!A||!e?!1:z(A).toRgbString()==z(e).toRgbString()};z.random=function(){return z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function _x(A,e){e=e===0?0:e||10;var t=z(A).toHsl();return t.s-=e/100,t.s=dl(t.s),z(t)}function Mx(A,e){e=e===0?0:e||10;var t=z(A).toHsl();return t.s+=e/100,t.s=dl(t.s),z(t)}function Dx(A){return z(A).desaturate(100)}function Kx(A,e){e=e===0?0:e||10;var t=z(A).toHsl();return t.l+=e/100,t.l=dl(t.l),z(t)}function Tx(A,e){e=e===0?0:e||10;var t=z(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),z(t)}function Nx(A,e){e=e===0?0:e||10;var t=z(A).toHsl();return t.l-=e/100,t.l=dl(t.l),z(t)}function Rx(A,e){var t=z(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,z(t)}function Ox(A){var e=z(A).toHsl();return e.h=(e.h+180)%360,z(e)}function Np(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=z(A).toHsl(),r=[z(A)],n=360/e,i=1;i<e;i++)r.push(z({h:(t.h+i*n)%360,s:t.s,l:t.l}));return r}function jx(A){var e=z(A).toHsl(),t=e.h;return[z(A),z({h:(t+72)%360,s:e.s,l:e.l}),z({h:(t+216)%360,s:e.s,l:e.l})]}function Px(A,e,t){e=e||6,t=t||30;var r=z(A).toHsl(),n=360/t,i=[z(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,i.push(z(r));return i}function Vx(A,e){e=e||6;for(var t=z(A).toHsv(),r=t.h,n=t.s,i=t.v,o=[],a=1/e;e--;)o.push(z({h:r,s:n,v:i})),i=(i+a)%1;return o}z.mix=function(A,e,t){t=t===0?0:t||50;var r=z(A).toRgb(),n=z(e).toRgb(),i=t/100,o={r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a};return z(o)};z.readability=function(A,e){var t=z(A),r=z(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};z.isReadable=function(A,e,t){var r=z.readability(A,e),n,i;switch(i=!1,n=Jx(t),n.level+n.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};z.mostReadable=function(A,e,t){var r=null,n=0,i,o,a,s;t=t||{},o=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)i=z.readability(A,e[l]),i>n&&(n=i,r=z(e[l]));return z.isReadable(A,r,{level:a,size:s})||!o?r:(t.includeFallbackColors=!1,z.mostReadable(A,["#fff","#000"],t))};var Ad=z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},zx=z.hexNames=Gx(Ad);function Gx(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function av(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function QA(A,e){$x(A)&&(A="100%");var t=Wx(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function dl(A){return Math.min(1,Math.max(0,A))}function Fe(A){return parseInt(A,16)}function $x(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function Wx(A){return typeof A=="string"&&A.indexOf("%")!=-1}function rt(A){return A.length==1?"0"+A:""+A}function Ci(A){return A<=1&&(A=A*100+"%"),A}function sv(A){return Math.round(parseFloat(A)*255).toString(16)}function Rp(A){return Fe(A)/255}var Ze=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ft(A){return!!Ze.CSS_UNIT.exec(A)}function Xx(A){A=A.replace(Ex,"").replace(bx,"").toLowerCase();var e=!1;if(Ad[A])A=Ad[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Ze.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Ze.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Ze.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Ze.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Ze.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Ze.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Ze.hex8.exec(A))?{r:Fe(t[1]),g:Fe(t[2]),b:Fe(t[3]),a:Rp(t[4]),format:e?"name":"hex8"}:(t=Ze.hex6.exec(A))?{r:Fe(t[1]),g:Fe(t[2]),b:Fe(t[3]),format:e?"name":"hex"}:(t=Ze.hex4.exec(A))?{r:Fe(t[1]+""+t[1]),g:Fe(t[2]+""+t[2]),b:Fe(t[3]+""+t[3]),a:Rp(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Ze.hex3.exec(A))?{r:Fe(t[1]+""+t[1]),g:Fe(t[2]+""+t[2]),b:Fe(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Jx(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}const ed=({mainTitle:A,mainInfo:e,subTitle:t})=>Q.jsxs(YA,{column:!0,gap:8,children:[Q.jsx(ce,{title:A,type:"h3",info:e}),Q.jsx(ce,{title:t,type:"p",className:"color-gray-4"})]}),Yx=({align:A="right",onClick:e,children:t})=>Q.jsxs(Zx,{className:"relative",children:[t,Q.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:A==="left"?"0px":"100%"},children:Q.jsx(SA,{name:"close-fill",fill:"var(--color-red-6)"})})]}),Zx=We.div`
  .hover-icon {
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  &:hover {
    .hover-icon {
      opacity: 1;
      pointer-events: all;
    }
  }
`,qx="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg",la=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],A7=({})=>{const[A,e]=H.useState(""),t=H.useRef(null),r=H.useRef(null),[n,i]=H.useState(2),[o,a]=H.useState([]),[s,l]=H.useState({w:200,h:200,ratio:1});H.useEffect(()=>{if(!t.current)return;const S=t.current.getBoundingClientRect();l({w:S.width,h:S.height,ratio:S.width/S.height})},[A,t]),H.useEffect(()=>{if(!r.current)return;const S=new ResizeObserver(V=>{for(const K of V)i(K.contentRect.width/K.contentRect.height)});return S.observe(r.current),()=>S.disconnect()},[r]);const c=()=>{if(o.length>=0)if(o.length<8){let S="";window.EyeDropper||x(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(K=>{S=K.sRGBHex,a([...o,{id:`${S}`,value:S}])}).catch(()=>{x(!0,"出错了～")})}else x(!0,"已达上限～长按删除后重试");else x(!0,"请先上传图片～")},u=S=>{const V=o.filter(K=>K.id!==S);a(V)},[d,p]=H.useState(!1),[v,w]=H.useState(""),x=(S,V)=>{w(V),p(S);const K=setTimeout(()=>{p(!1),clearTimeout(K)},1e3)},[g,f]=H.useState(10),[h,C]=H.useState(!0);H.useEffect(()=>{g>0?C(!0):C(!1)},[g]),H.useEffect(()=>{f(h?g||10:0)},[h]);const[F,m]=H.useState(6);H.useEffect(()=>{Y(A)},[g,h,F]);const y=S=>{const V=z(`rgb(${S[0]},${S[1]},${S[2]})`).toHsv();return V.s<=g/100||V.v<=g/100};function E(S,V,K=32){if(y(S))return!0;const Z=S[0]-V[0],b=S[1]-V[1],I=S[2]-V[2];return Math.sqrt(Z*Z+b*b+I*I)<K}const k=S=>{const V=document.createElement("canvas"),K=V.getContext("2d");return V.width=S.width,V.height=S.height,K==null||K.drawImage(S,0,0,S.width,S.height),K==null?void 0:K.getImageData(0,0,S.width,S.height).data},_=S=>{const V=k(S);if(!V)return;const K=new Map;for(let I=0;I<V.length;I+=4){const G=[V[I],V[I+1],V[I+2]].join(",");K.has(G)?K.set(G,K.get(G)+1):K.set(G,1)}let Z=Array.from(K.entries()).sort((I,O)=>O[1]-I[1]).map(I=>I[0].split(",").map(O=>parseInt(O)));const b=[];for(const I of Z)if(!b.some(O=>E(I,O,32))&&!y(I)&&b.push(I),b.length>=F)break;return b},Y=S=>{const V=new Image;V.src=S,V.onload=()=>{var Z;const K=((Z=_(V))==null?void 0:Z.map(b=>({id:b[0]+b[1]+b[2],value:`#${z(`rgb(${b[0]},${b[1]},${b[2]})`).toHex()}`})))??[];a(K)}},[J,$]=H.useState(["","","","","",""]);return Q.jsxs(go,{className:"flex-1 flex column items-start gap-32 px-24 pt-32 pb-24 width-100",children:[Q.jsxs(YA,{column:!0,gap:24,children:[Q.jsx(ed,{mainTitle:"Step 01: 上传文件",subTitle:"点击或拖拽来上传图片，以像素为单位对颜色计数"}),Q.jsx("div",{className:"width-100",style:{height:"240px"},children:Q.jsx(L2,{fileType:"image/*",onUpload:S=>{e(S),a([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:A&&Q.jsx("div",{ref:r,className:"flex items-center justify-center width-100 height-100",children:Q.jsx("img",{ref:t,src:A,className:`radius-8 ${s.ratio<n?"height-100":"width-100"}`})})})})]}),Q.jsxs("div",{className:"flex column width-100",children:[Q.jsxs("div",{className:"width-100 flex column",children:[Q.jsx(ce,{title:"Step 02: 取色配置",type:"h3"}),Q.jsx(ce,{title:Q.jsxs(Q.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",Q.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",Q.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(o==null?void 0:o.length)!==0&&Q.jsxs("div",{className:"flex gap-24 mt-12",children:[Q.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[Q.jsx(s8,{text:"过滤中性色",checked:h,onChange:()=>{C(!h)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),Q.jsx(yu,{max:35,min:0,step:5,value:g,onChange:S=>f(Number(S))})]}),Q.jsx(S8,{title:"数量",width:124,data:[{value:"1",label:"4"},{value:"2",label:"6"},{value:"3",label:"8"}],selected:"2",onChange:S=>{m(Number(S.label))}})]})]}),Q.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[o.length===0&&A&&Q.jsx("div",{className:"absolute",style:{zIndex:1},children:Q.jsx(Cn,{text:"提取颜色",type:"background",status:"primary",onClick:()=>{Y(A)}})}),o.length===0?la==null?void 0:la.map((S,V)=>Q.jsx(Op,{className:"flex column relative justify-center gap-4 disabled",children:Q.jsx(Q0,{value:S.value,showList:!1})},V)):o==null?void 0:o.map((S,V)=>Q.jsx(Yx,{onClick:()=>u(S.id),children:Q.jsx(Op,{className:"flex column relative justify-center gap-4",children:Q.jsx(Q0,{value:S.value,showList:!1,onChange:K=>{const Z=o.map(b=>({id:b.id,value:b.id==S.id?`#${z(K).toHex()}`:b.value}));a(Z)}})},V)})),o.length!==0&&o.length<8&&Q.jsxs(e7,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>c(),children:[Q.jsx(X8,{}),Q.jsx(Lt,{content:"点击吸取颜色",theme:"dark"})]})]})]}),Q.jsxs(YA,{column:!0,gap:8,children:[Q.jsx(ce,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),Q.jsx(ce,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(o==null?void 0:o.length)===0?Q.jsx(jp,{className:"grid mx-32 gap-24 pb-24 disabled",length:6,children:Array.from({length:6}).map((S,V)=>Q.jsxs("div",{className:"flex column items-center gap-12",children:[Q.jsxs(Pp,{className:`StyleColorCardBox relative p-24 flex gap-4 width-100 border color-card card-${V} column`,width:s.w,height:s.h,ratio:s.ratio,children:[Q.jsx("div",{className:"color-img",children:Q.jsx("img",{src:qx})}),Q.jsx("div",{className:"color-list grid gap-4",children:(o==null?void 0:o.length)===0?la.map(K=>Q.jsxs("div",{className:"color-item flex column items-center gap-4",children:[Q.jsx("div",{style:{background:K.value},className:"width-100 flex-1"},K.id),Q.jsx("p",{children:K.value})]})):o.map(K=>Q.jsxs("div",{className:"color-item flex column items-center gap-4",children:[Q.jsx("div",{style:{background:K.value},className:"width-100 flex-1"},K.id),Q.jsx("p",{children:K.value})]}))})]}),Q.jsx(Cn,{type:"background",className:"width-100",text:"下载色卡",icon:Q.jsx(SA,{name:"download"})})]}))}):Q.jsx(jp,{className:"grid mx-32 gap-24",length:o.length,children:Array.from({length:6}).map((S,V)=>Q.jsxs("div",{className:"flex column items-center gap-12",children:[Q.jsxs(Pp,{className:`relative p-24 flex gap-4 width-100 border color-card card-${V} ${s.ratio<1?"":"column"}`,width:s.w,height:s.h,ratio:s.ratio,children:[Q.jsx("div",{className:"color-img",children:Q.jsx("img",{src:A})}),Q.jsx("div",{className:"color-list grid gap-4",children:o.map(K=>Q.jsxs("div",{className:"color-item flex column items-center gap-4",children:[Q.jsx("div",{style:{background:K.value},className:"width-100 flex-1"},K.id),Q.jsx("p",{children:K.value})]}))})]}),Q.jsxs("div",{className:"width-100 flex gap-12",children:[Q.jsx(Li,{placeholder:"自定义色卡名称",value:J[V],onChange:K=>{const Z=J.map((b,I)=>I===V?String(K):b);$(Z)},className:"flex-1"}),Q.jsx(Cn,{type:"background",className:"flex-1",text:"下载色卡",icon:Q.jsx(SA,{name:"download"}),onClick:()=>{const K=document.querySelectorAll(".color-card");Bf(K[V],J[V],4)}})]})]}))}),Q.jsx(k2,{show:d,text:v})]})},Op=We.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,e7=We.div`
  width: 48px;
  height: 48px;
  color: var(--color-text-3);
  transition: background-color 0.2s linear;
  &:hover {
    color: var(--color-text-2);
    background-color: var(--color-bg-1);
  }
  &:active {
    color: var(--color-text-1);
    background-color: var(--color-bg-2);
  }
`,jp=We.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Pp=We.div`
  box-sizing: border-box;
  min-width: 240px;
  p {
    color: var(--color-text-4);
    font-size: 8px;
  }
  &.card-0,
  &.card-1,
  &.card-2,
  &.card-3,
  &.card-4,
  &.card-5 {
    .color-img {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .color-list {
      grid-auto-flow: ${A=>A.ratio>=1?"column":"row"};
      width: ${A=>A.ratio>=1?"auto":"64px"};
      height: ${A=>A.ratio>=1?"32px":"auto"};
      flex-shrink: 0;
    }
    .color-item {
      flex-shrink: 0;
    }
  }
  &.card-1 {
    img,
    .color-item div {
      border-radius: 4px;
    }
  }
  &.card-2 {
    .card-img {
      height: 80%;
    }
    .color-item {
      height: ${A=>A.ratio>=1?"20px":"auto"};
    }
  }
  &.card-3 {
    padding-bottom: ${A=>A.ratio>=1?"60px":"24px"};
    .color-img {
      width: ${A=>A.ratio>=1?"100%":"calc(100% - 68px)"};
    }
    .color-list {
      position: absolute;
      left: ${A=>A.ratio>=1?"50%":""};
      bottom: ${A=>A.ratio>=1?"12px":""};
      right: ${A=>A.ratio>=1?"":"12px"};
      top: ${A=>A.ratio>=1?"":"50%"};
      padding: 12px;
      width: ${A=>A.ratio>=1?"60%":"120px"};
      height: ${A=>A.ratio>=1?"84px":"60%"};
      border-radius: var(--radius-4);
      background-color: var(--color-bg-white);
      transform: ${A=>A.ratio>=1?"translateX(-50%)":"translateY(-50%)"};
    }
    .color-item div {
      border-radius: 4px;
    }
    .color-item {
      position: relative;
    }
    p {
      position: absolute;
      left: 4px;
      top: 0;
      transform: ${A=>A.ratio>=1?"rotate(90deg)":""};
      transform-origin: left bottom;
      color: var(--color-text-light);
    }
  }
  &.card-4 {
    .color-item div {
      width: unset;
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
  }
  &.card-5 {
    justify-content: center;
    padding: ${A=>A.ratio>=1?"42px 24px":"24px 36px"};
    .color-img {
      width: ${A=>A.ratio>=1?"100%":"calc(100% - 44px)"};
    }
    .color-list {
      display: flex;
      justify-content: center;
      flex-direction: ${A=>A.ratio>=1?"row":"column"};
      gap: 0;
      position: absolute;
      left: ${A=>A.ratio>=1?"":"50%"};
      bottom: ${A=>A.ratio>=1?"64px":"50%"};
      height: 40px;
      width: ${A=>A.ratio>=1?"calc(100% - 48px)":"48px"};
      transform: ${A=>A.ratio>=1?"translateX(4px)":"translate(-50%,50%)"};
    }
    .color-item div {
      border-radius: 50%;
      aspect-ratio: 1;
      outline: 2px solid var(--color-bg-white);
      overflow: hidden;
    }
    .color-item {
      position: relative;
      margin-left: -4px;
      width: 40px;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--color-text-light);
    }
  }
`,t7=({})=>{const A=H.useRef(null),[e,t]=H.useState(""),[r,n]=H.useState(12),[i,o]=H.useState(12),[a,s]=H.useState(16),l=H.useMemo(()=>Array.from({length:r}).map((C,F)=>Array.from({length:i}).map((m,y)=>({key:`${F}-${y}`,value:"transparent"}))),[r,i]),[c,u]=H.useState(l);H.useEffect(()=>{const C=Array.from({length:r}).map((F,m)=>Array.from({length:i}).map((y,E)=>({key:`${m}-${E}`,value:c[m]&&c[m][E]?c[m][E].value:"transparent"})));u(C)},[r,i]);const[d,p]=H.useState(""),v=H.useRef(null),w=H.useRef(null),[x,g]=H.useState(2),[f,h]=H.useState({w:200,h:200,ratio:1});return H.useEffect(()=>{if(!v.current)return;const C=v.current.getBoundingClientRect();h({w:C.width,h:C.height,ratio:C.width/C.height})},[d,v]),H.useEffect(()=>{if(!w.current)return;const C=new ResizeObserver(F=>{for(const m of F)g(m.contentRect.width/m.contentRect.height)});return C.observe(w.current),()=>C.disconnect()}),Q.jsxs(r7,{className:"flex-1 flex column items-start gap-32 py-24 px-16 width-100",children:[Q.jsxs("div",{className:"flex gap-12 width-100 justify-end",children:[Q.jsx("div",{style:{width:"20px",height:"20px"},onClick:()=>{if(a>12){let C=a-4;s(C)}},children:Q.jsx(J8,{fill:"#999",size:20})}),Q.jsx("div",{style:{width:"20px",height:"20px"},onClick:()=>{if(a<32){let C=a+4;s(C)}},children:Q.jsx(SA,{name:"add",stroke:"#999",strokeWidth:2,size:20})})]}),Q.jsx("div",{className:"scrollbar-none",style:{width:"calc(100vw - 32px - 20px)",maxHeight:"calc(100vh - 64px - 48px - 76px - 140px - 37px - 72px - 26px)",maxWidth:"800px",margin:"0 auto",overflow:"auto"},children:Q.jsx("div",{ref:A,className:"flex flex-wrap",style:{width:`${r*a}px`,height:`${i*a}px`,margin:"auto",background:d?`url(${d}) center center/contain no-repeat`:"unset"},children:Array.from({length:r}).map((C,F)=>Q.jsx("div",{className:"flex column",style:{flexDirection:"column-reverse"},children:Array.from({length:i}).map((m,y)=>Q.jsx(n7,{className:`relative transition ${e===`${F}-${y}`?"active":""} ${F===0?"first-column":""} ${y===0?"last-row":""}`,style:{width:`${a}px`,height:`${a}px`,backgroundColor:c[F]&&c[F][y]?c[F][y].value:"transparent"},onClick:()=>t(`${F}-${y}`),children:Q.jsx("input",{type:"color",className:" opacity-0",onChange:E=>{const k=c.map(_=>_.map(Y=>Y.key===e?{key:Y.key,value:E.target.value}:Y));u(k)}})},y))},F))})}),Q.jsxs(YA,{column:!0,gap:8,children:[Q.jsx(ed,{mainTitle:"设置画布大小",mainInfo:"画布大小范围为 4x4 - 48x48"}),Q.jsxs(YA,{gap:16,bothCenter:!0,children:[Q.jsx(ce,{title:"宽:",type:"p"}),Q.jsx(yu,{value:r,onChange:(C,F)=>F>=4&&F<=48&&n(F)}),Q.jsx(ce,{title:"高:",type:"p"}),Q.jsx(yu,{value:i,onChange:(C,F)=>F>=4&&F<=48&&o(F)})]})]}),Q.jsxs(YA,{column:!0,gap:8,children:[Q.jsx(ed,{mainTitle:"导入参考图"}),Q.jsx(YA,{gap:16,bothCenter:!0,children:Q.jsx(L2,{fileType:"image/*",height:"100px",onUpload:C=>p(C),desc:"点击上传图片或将图片拖拽于此",className:"radius-12",width:"100%",children:d&&Q.jsx("div",{ref:w,className:"flex items-center justify-center width-100 height-100",children:Q.jsx("img",{ref:v,src:d,className:`radius-8 ${f.ratio<x?"height-100":"width-100"}`})})})})]}),Q.jsxs(YA,{justify:"center",gap:12,children:[Q.jsx(Cn,{text:"清空画布",onClick:()=>u(l)}),Q.jsx(Cn,{text:"立即下载",type:"background",className:"flex-1",style:{maxWidth:"200px"},onClick:()=>{Bf(A.current,"pixel-res",1)}})]})]})},r7=We(go)`
  @media screen and (max-width: 800px) {
    .land-uploader-desc {
      font-size: 12px;
    }
  }
`,n7=We.label`
  box-sizing: border-box;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-border-1);
    box-sizing: border-box;
    z-index: 0;
  }
  &.active {
    &::after {
      border-color: var(--color-text-5);
      z-index: 1;
    }
  }
  input {
    width: 0px;
    height: 0px;
    inline-size: 0px;
    padding: 0;
  }
`;function i7(){const[A,e]=H.useState(1),[t,r]=H.useState(1),[n,i]=H.useState(Wl);return H.useEffect(()=>{(document.querySelector("#root")||document.body).getBoundingClientRect().width>800?i(Wl.map(s=>({key:s.key,title:s.title,dropData:s.dropData,open:!1}))):i(Wl)},[]),Q.jsxs(YA,{column:!0,className:"height-100",children:[Q.jsx(o7,{logo:Q.jsx(W8,{}),menuProps:{data:n,active:A,onChange:o=>{r(o.key),e(o.key)},onDropChange:(o,a)=>{r(o.key),e(a.key)},dropProps:{direction:"column",active:t},theme:{lineColor:"inherit",activeBg:"var(--color-bg-2)"}},align:"end",className:"relative"}),t===1&&Q.jsx(Mg,{data:O8}),t===2&&Q.jsx(Mg,{data:j8}),t===11&&Q.jsx(Ac,{data:P8}),t===12&&Q.jsx(Ac,{data:V8}),t===21&&Q.jsx(A7,{}),t===22&&Q.jsx(Fx,{pathData:G8}),t===23&&Q.jsx(t7,{}),t===31&&Q.jsx(Ac,{data:z8})]})}const o7=We(x8)`
  &.kjXciE {
    z-index: 100;
  }
  @media screen and (max-width: 800px) {
    .land-menu {
      display: none;
    }
    .jdrwKk .land-menu {
      display: flex;
    }
  }
`;Qc.createRoot(document.getElementById("root")).render(Q.jsx(Pe.StrictMode,{children:Q.jsx(i7,{})}));
