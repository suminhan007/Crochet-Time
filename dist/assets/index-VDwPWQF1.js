(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function dv(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var Gp={exports:{}},Us={},jp={exports:{}},tA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),fv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Qv=Symbol.for("react.lazy"),Qf=Symbol.iterator;function yv(A){return A===null||typeof A!="object"?null:(A=Qf&&A[Qf]||A["@@iterator"],typeof A=="function"?A:null)}var zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Wp={};function Pn(A,e,t){this.props=A,this.context=e,this.refs=Wp,this.updater=t||zp}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(A,e){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,e,"setState")};Pn.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Xp(){}Xp.prototype=Pn.prototype;function td(A,e,t){this.props=A,this.context=e,this.refs=Wp,this.updater=t||zp}var rd=td.prototype=new Xp;rd.constructor=td;$p(rd,Pn.prototype);rd.isPureReactComponent=!0;var yf=Array.isArray,Yp=Object.prototype.hasOwnProperty,nd={current:null},Jp={key:!0,ref:!0,__self:!0,__source:!0};function Zp(A,e,t){var r,n={},o=null,i=null;if(e!=null)for(r in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(o=""+e.key),e)Yp.call(e,r)&&!Jp.hasOwnProperty(r)&&(n[r]=e[r]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];n.children=s}if(A&&A.defaultProps)for(r in a=A.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:si,type:A,key:o,ref:i,props:n,_owner:nd.current}}function Fv(A,e){return{$$typeof:si,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}function od(A){return typeof A=="object"&&A!==null&&A.$$typeof===si}function Uv(A){var e={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(t){return e[t]})}var Ff=/\/+/g;function vl(A,e){return typeof A=="object"&&A!==null&&A.key!=null?Uv(""+A.key):e.toString(36)}function la(A,e,t,r,n){var o=typeof A;(o==="undefined"||o==="boolean")&&(A=null);var i=!1;if(A===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(A.$$typeof){case si:case fv:i=!0}}if(i)return i=A,n=n(i),A=r===""?"."+vl(i,0):r,yf(n)?(t="",A!=null&&(t=A.replace(Ff,"$&/")+"/"),la(n,e,t,"",function(l){return l})):n!=null&&(od(n)&&(n=Fv(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(Ff,"$&/")+"/")+A)),e.push(n)),1;if(i=0,r=r===""?".":r+":",yf(A))for(var a=0;a<A.length;a++){o=A[a];var s=r+vl(o,a);i+=la(o,e,t,s,n)}else if(s=yv(A),typeof s=="function")for(A=s.call(A),a=0;!(o=A.next()).done;)o=o.value,s=r+vl(o,a++),i+=la(o,e,t,s,n);else if(o==="object")throw e=String(A),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function vi(A,e,t){if(A==null)return A;var r=[],n=0;return la(A,r,"","",function(o){return e.call(t,o,n++)}),r}function xv(A){if(A._status===-1){var e=A._result;e=e(),e.then(function(t){(A._status===0||A._status===-1)&&(A._status=1,A._result=t)},function(t){(A._status===0||A._status===-1)&&(A._status=2,A._result=t)}),A._status===-1&&(A._status=0,A._result=e)}if(A._status===1)return A._result.default;throw A._result}var ue={current:null},ca={transition:null},bv={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ca,ReactCurrentOwner:nd};tA.Children={map:vi,forEach:function(A,e,t){vi(A,function(){e.apply(this,arguments)},t)},count:function(A){var e=0;return vi(A,function(){e++}),e},toArray:function(A){return vi(A,function(e){return e})||[]},only:function(A){if(!od(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};tA.Component=Pn;tA.Fragment=gv;tA.Profiler=hv;tA.PureComponent=td;tA.StrictMode=pv;tA.Suspense=mv;tA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv;tA.cloneElement=function(A,e,t){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var r=$p({},A.props),n=A.key,o=A.ref,i=A._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,i=nd.current),e.key!==void 0&&(n=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(s in e)Yp.call(e,s)&&!Jp.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:si,type:A.type,key:n,ref:o,props:r,_owner:i}};tA.createContext=function(A){return A={$$typeof:vv,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:Bv,_context:A},A.Consumer=A};tA.createElement=Zp;tA.createFactory=function(A){var e=Zp.bind(null,A);return e.type=A,e};tA.createRef=function(){return{current:null}};tA.forwardRef=function(A){return{$$typeof:wv,render:A}};tA.isValidElement=od;tA.lazy=function(A){return{$$typeof:Qv,_payload:{_status:-1,_result:A},_init:xv}};tA.memo=function(A,e){return{$$typeof:Cv,type:A,compare:e===void 0?null:e}};tA.startTransition=function(A){var e=ca.transition;ca.transition={};try{A()}finally{ca.transition=e}};tA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};tA.useCallback=function(A,e){return ue.current.useCallback(A,e)};tA.useContext=function(A){return ue.current.useContext(A)};tA.useDebugValue=function(){};tA.useDeferredValue=function(A){return ue.current.useDeferredValue(A)};tA.useEffect=function(A,e){return ue.current.useEffect(A,e)};tA.useId=function(){return ue.current.useId()};tA.useImperativeHandle=function(A,e,t){return ue.current.useImperativeHandle(A,e,t)};tA.useInsertionEffect=function(A,e){return ue.current.useInsertionEffect(A,e)};tA.useLayoutEffect=function(A,e){return ue.current.useLayoutEffect(A,e)};tA.useMemo=function(A,e){return ue.current.useMemo(A,e)};tA.useReducer=function(A,e,t){return ue.current.useReducer(A,e,t)};tA.useRef=function(A){return ue.current.useRef(A)};tA.useState=function(A){return ue.current.useState(A)};tA.useSyncExternalStore=function(A,e,t){return ue.current.useSyncExternalStore(A,e,t)};tA.useTransition=function(){return ue.current.useTransition()};tA.version="18.2.0";jp.exports=tA;var k=jp.exports;const Ve=dv(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev=k,Hv=Symbol.for("react.element"),kv=Symbol.for("react.fragment"),Iv=Object.prototype.hasOwnProperty,Lv=Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function qp(A,e,t){var r,n={},o=null,i=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)Iv.call(e,r)&&!Sv.hasOwnProperty(r)&&(n[r]=e[r]);if(A&&A.defaultProps)for(r in e=A.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:Hv,type:A,key:o,ref:i,props:n,_owner:Lv.current}}Us.Fragment=kv;Us.jsx=qp;Us.jsxs=qp;Gp.exports=Us;var U=Gp.exports,Qc={},Ah={exports:{}},Ie={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function e(E,I){var O=E.length;E.push(I);A:for(;0<O;){var z=O-1>>>1,W=E[z];if(0<n(W,I))E[z]=I,E[O]=W,O=z;else break A}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var I=E[0],O=E.pop();if(O!==I){E[0]=O;A:for(var z=0,W=E.length,FA=W>>>1;z<FA;){var uA=2*(z+1)-1,nA=E[uA],sA=uA+1,gA=E[sA];if(0>n(nA,O))sA<W&&0>n(gA,nA)?(E[z]=gA,E[sA]=O,z=sA):(E[z]=nA,E[uA]=O,z=uA);else if(sA<W&&0>n(gA,O))E[z]=gA,E[sA]=O,z=sA;else break A}}return I}function n(E,I){var O=E.sortIndex-I.sortIndex;return O!==0?O:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;A.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();A.unstable_now=function(){return i.now()-a}}var s=[],l=[],c=1,u=null,f=3,h=!1,v=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var I=t(l);I!==null;){if(I.callback===null)r(l);else if(I.startTime<=E)r(l),I.sortIndex=I.expirationTime,e(s,I);else break;I=t(l)}}function C(E){if(m=!1,p(E),!v)if(t(s)!==null)v=!0,T(y);else{var I=t(l);I!==null&&J(C,I.startTime-E)}}function y(E,I){v=!1,m&&(m=!1,g(b),b=-1),h=!0;var O=f;try{for(p(I),u=t(s);u!==null&&(!(u.expirationTime>I)||E&&!AA());){var z=u.callback;if(typeof z=="function"){u.callback=null,f=u.priorityLevel;var W=z(u.expirationTime<=I);I=A.unstable_now(),typeof W=="function"?u.callback=W:u===t(s)&&r(s),p(I)}else r(s);u=t(s)}if(u!==null)var FA=!0;else{var uA=t(l);uA!==null&&J(C,uA.startTime-I),FA=!1}return FA}finally{u=null,f=O,h=!1}}var w=!1,Q=null,b=-1,H=5,M=-1;function AA(){return!(A.unstable_now()-M<H)}function Y(){if(Q!==null){var E=A.unstable_now();M=E;var I=!0;try{I=Q(!0,E)}finally{I?$():(w=!1,Q=null)}}else w=!1}var $;if(typeof d=="function")$=function(){d(Y)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,G=S.port2;S.port1.onmessage=Y,$=function(){G.postMessage(null)}}else $=function(){x(Y,0)};function T(E){Q=E,w||(w=!0,$())}function J(E,I){b=x(function(){E(A.unstable_now())},I)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(E){E.callback=null},A.unstable_continueExecution=function(){v||h||(v=!0,T(y))},A.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},A.unstable_getCurrentPriorityLevel=function(){return f},A.unstable_getFirstCallbackNode=function(){return t(s)},A.unstable_next=function(E){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var O=f;f=I;try{return E()}finally{f=O}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=f;f=E;try{return I()}finally{f=O}},A.unstable_scheduleCallback=function(E,I,O){var z=A.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?z+O:z):O=z,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,E={id:c++,callback:I,priorityLevel:E,startTime:O,expirationTime:W,sortIndex:-1},O>z?(E.sortIndex=O,e(l,E),t(s)===null&&E===t(l)&&(m?(g(b),b=-1):m=!0,J(C,O-z))):(E.sortIndex=W,e(s,E),v||h||(v=!0,T(y))),E},A.unstable_shouldYield=AA,A.unstable_wrapCallback=function(E){var I=f;return function(){var O=f;f=I;try{return E.apply(this,arguments)}finally{f=O}}}})(th);eh.exports=th;var Mv=eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=k,ke=Mv;function L(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Ro={};function Rr(A,e){yn(A,e),yn(A+"Capture",e)}function yn(A,e){for(Ro[A]=e,A=0;A<e.length;A++)nh.add(e[A])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uf={},xf={};function Kv(A){return yc.call(xf,A)?!0:yc.call(Uf,A)?!1:_v.test(A)?xf[A]=!0:(Uf[A]=!0,!1)}function Tv(A,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Dv(A,e,t,r){if(e===null||typeof e>"u"||Tv(A,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function de(A,e,t,r,n,o,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=A,this.type=e,this.sanitizeURL=o,this.removeEmptyString=i}var qA={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){qA[A]=new de(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var e=A[0];qA[e]=new de(e,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){qA[A]=new de(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){qA[A]=new de(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){qA[A]=new de(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){qA[A]=new de(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){qA[A]=new de(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){qA[A]=new de(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){qA[A]=new de(A,5,!1,A.toLowerCase(),null,!1,!1)});var id=/[\-:]([a-z])/g;function ad(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var e=A.replace(id,ad);qA[e]=new de(e,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var e=A.replace(id,ad);qA[e]=new de(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var e=A.replace(id,ad);qA[e]=new de(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){qA[A]=new de(A,1,!1,A.toLowerCase(),null,!1,!1)});qA.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){qA[A]=new de(A,1,!1,A.toLowerCase(),null,!0,!0)});function sd(A,e,t,r){var n=qA.hasOwnProperty(e)?qA[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dv(e,t,n,r)&&(t=null),r||n===null?Kv(e)&&(t===null?A.removeAttribute(e):A.setAttribute(e,""+t)):n.mustUseProperty?A[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,r=n.attributeNamespace,t===null?A.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,r?A.setAttributeNS(r,e,t):A.setAttribute(e,t))))}var Nt=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),qr=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),ih=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Wn(A){return A===null||typeof A!="object"?null:(A=bf&&A[bf]||A["@@iterator"],typeof A=="function"?A:null)}var bA=Object.assign,wl;function ao(A){if(wl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+A}var ml=!1;function Cl(A,e){if(!A||ml)return"";ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(A,[],e)}else{try{e.call()}catch(l){r=l}A.call(e.prototype)}else{try{throw Error()}catch(l){r=l}A()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),o=r.stack.split(`
`),i=n.length-1,a=o.length-1;1<=i&&0<=a&&n[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(n[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||n[i]!==o[a]){var s=`
`+n[i].replace(" at new "," at ");return A.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",A.displayName)),s}while(1<=i&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=t}return(A=A?A.displayName||A.name:"")?ao(A):""}function Nv(A){switch(A.tag){case 5:return ao(A.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return A=Cl(A.type,!1),A;case 11:return A=Cl(A.type.render,!1),A;case 1:return A=Cl(A.type,!0),A;default:return""}}function bc(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case An:return"Fragment";case qr:return"Portal";case Fc:return"Profiler";case ld:return"StrictMode";case Uc:return"Suspense";case xc:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case ih:return(A.displayName||"Context")+".Consumer";case oh:return(A._context.displayName||"Context")+".Provider";case cd:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case ud:return e=A.displayName||null,e!==null?e:bc(A.type)||"Memo";case jt:e=A._payload,A=A._init;try{return bc(A(e))}catch{}}return null}function Rv(A){var e=A.type;switch(A.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=e.render,A=A.displayName||A.name||"",e.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function sh(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(A){var e=sh(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),r=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,o=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function mi(A){A._valueTracker||(A._valueTracker=Ov(A))}function lh(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return A&&(r=sh(A)?A.checked?"true":"false":A.value),A=r,A!==t?(e.setValue(A),!0):!1}function _a(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function Ec(A,e){var t=e.checked;return bA({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??A._wrapperState.initialChecked})}function Ef(A,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ur(e.value!=null?e.value:t),A._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ch(A,e){e=e.checked,e!=null&&sd(A,"checked",e,!1)}function Hc(A,e){ch(A,e);var t=ur(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&A.value===""||A.value!=t)&&(A.value=""+t):A.value!==""+t&&(A.value=""+t);else if(r==="submit"||r==="reset"){A.removeAttribute("value");return}e.hasOwnProperty("value")?kc(A,e.type,t):e.hasOwnProperty("defaultValue")&&kc(A,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(A.defaultChecked=!!e.defaultChecked)}function Hf(A,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+A._wrapperState.initialValue,t||e===A.value||(A.value=e),A.defaultValue=e}t=A.name,t!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,t!==""&&(A.name=t)}function kc(A,e,t){(e!=="number"||_a(A.ownerDocument)!==A)&&(t==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+t&&(A.defaultValue=""+t))}var so=Array.isArray;function pn(A,e,t,r){if(A=A.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<A.length;t++)n=e.hasOwnProperty("$"+A[t].value),A[t].selected!==n&&(A[t].selected=n),n&&r&&(A[t].defaultSelected=!0)}else{for(t=""+ur(t),e=null,n=0;n<A.length;n++){if(A[n].value===t){A[n].selected=!0,r&&(A[n].defaultSelected=!0);return}e!==null||A[n].disabled||(e=A[n])}e!==null&&(e.selected=!0)}}function Ic(A,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return bA({},e,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function kf(A,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(L(92));if(so(t)){if(1<t.length)throw Error(L(93));t=t[0]}e=t}e==null&&(e=""),t=e}A._wrapperState={initialValue:ur(t)}}function uh(A,e){var t=ur(e.value),r=ur(e.defaultValue);t!=null&&(t=""+t,t!==A.value&&(A.value=t),e.defaultValue==null&&A.defaultValue!==t&&(A.defaultValue=t)),r!=null&&(A.defaultValue=""+r)}function If(A){var e=A.textContent;e===A._wrapperState.initialValue&&e!==""&&e!==null&&(A.value=e)}function dh(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(A,e){return A==null||A==="http://www.w3.org/1999/xhtml"?dh(e):A==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var Ci,fh=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return A(e,t,r,n)})}:A}(function(A,e){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=e;else{for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ci.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;e.firstChild;)A.appendChild(e.firstChild)}});function Oo(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pv=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(A){Pv.forEach(function(e){e=e+A.charAt(0).toUpperCase()+A.substring(1),yo[e]=yo[A]})});function gh(A,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||yo.hasOwnProperty(A)&&yo[A]?(""+e).trim():e+"px"}function ph(A,e){A=A.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,n=gh(t,e[t],r);t==="float"&&(t="cssFloat"),r?A.setProperty(t,n):A[t]=n}}var Vv=bA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(A,e){if(e){if(Vv[A]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,A));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Mc(A,e){if(A.indexOf("-")===-1)return typeof e.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function dd(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Kc=null,hn=null,Bn=null;function Lf(A){if(A=ui(A)){if(typeof Kc!="function")throw Error(L(280));var e=A.stateNode;e&&(e=ks(e),Kc(A.stateNode,A.type,e))}}function hh(A){hn?Bn?Bn.push(A):Bn=[A]:hn=A}function Bh(){if(hn){var A=hn,e=Bn;if(Bn=hn=null,Lf(A),e)for(A=0;A<e.length;A++)Lf(e[A])}}function vh(A,e){return A(e)}function wh(){}var Ql=!1;function mh(A,e,t){if(Ql)return A(e,t);Ql=!0;try{return vh(A,e,t)}finally{Ql=!1,(hn!==null||Bn!==null)&&(wh(),Bh())}}function Po(A,e){var t=A.stateNode;if(t===null)return null;var r=ks(t);if(r===null)return null;t=r[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(A=A.type,r=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!r;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(L(231,e,typeof t));return t}var Tc=!1;if(Mt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Tc=!1}function Gv(A,e,t,r,n,o,i,a,s){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(c){this.onError(c)}}var Fo=!1,Ka=null,Ta=!1,Dc=null,jv={onError:function(A){Fo=!0,Ka=A}};function zv(A,e,t,r,n,o,i,a,s){Fo=!1,Ka=null,Gv.apply(jv,arguments)}function $v(A,e,t,r,n,o,i,a,s){if(zv.apply(this,arguments),Fo){if(Fo){var l=Ka;Fo=!1,Ka=null}else throw Error(L(198));Ta||(Ta=!0,Dc=l)}}function Or(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,e.flags&4098&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function Ch(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function Sf(A){if(Or(A)!==A)throw Error(L(188))}function Wv(A){var e=A.alternate;if(!e){if(e=Or(A),e===null)throw Error(L(188));return e!==A?null:A}for(var t=A,r=e;;){var n=t.return;if(n===null)break;var o=n.alternate;if(o===null){if(r=n.return,r!==null){t=r;continue}break}if(n.child===o.child){for(o=n.child;o;){if(o===t)return Sf(n),A;if(o===r)return Sf(n),e;o=o.sibling}throw Error(L(188))}if(t.return!==r.return)t=n,r=o;else{for(var i=!1,a=n.child;a;){if(a===t){i=!0,t=n,r=o;break}if(a===r){i=!0,r=n,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=n;break}if(a===r){i=!0,r=o,t=n;break}a=a.sibling}if(!i)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?A:e}function Qh(A){return A=Wv(A),A!==null?yh(A):null}function yh(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var e=yh(A);if(e!==null)return e;A=A.sibling}return null}var Fh=ke.unstable_scheduleCallback,Mf=ke.unstable_cancelCallback,Xv=ke.unstable_shouldYield,Yv=ke.unstable_requestPaint,LA=ke.unstable_now,Jv=ke.unstable_getCurrentPriorityLevel,fd=ke.unstable_ImmediatePriority,Uh=ke.unstable_UserBlockingPriority,Da=ke.unstable_NormalPriority,Zv=ke.unstable_LowPriority,xh=ke.unstable_IdlePriority,xs=null,ht=null;function qv(A){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(xs,A,void 0,(A.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:tw,Aw=Math.log,ew=Math.LN2;function tw(A){return A>>>=0,A===0?32:31-(Aw(A)/ew|0)|0}var Qi=64,yi=4194304;function lo(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Na(A,e){var t=A.pendingLanes;if(t===0)return 0;var r=0,n=A.suspendedLanes,o=A.pingedLanes,i=t&268435455;if(i!==0){var a=i&~n;a!==0?r=lo(a):(o&=i,o!==0&&(r=lo(o)))}else i=t&~n,i!==0?r=lo(i):o!==0&&(r=lo(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,o=e&-e,n>=o||n===16&&(o&4194240)!==0))return e;if(r&4&&(r|=t&16),e=A.entangledLanes,e!==0)for(A=A.entanglements,e&=r;0<e;)t=31-rt(e),n=1<<t,r|=A[t],e&=~n;return r}function rw(A,e){switch(A){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nw(A,e){for(var t=A.suspendedLanes,r=A.pingedLanes,n=A.expirationTimes,o=A.pendingLanes;0<o;){var i=31-rt(o),a=1<<i,s=n[i];s===-1?(!(a&t)||a&r)&&(n[i]=rw(a,e)):s<=e&&(A.expiredLanes|=a),o&=~a}}function Nc(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function bh(){var A=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),A}function yl(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function li(A,e,t){A.pendingLanes|=e,e!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,e=31-rt(e),A[e]=t}function ow(A,e){var t=A.pendingLanes&~e;A.pendingLanes=e,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=e,A.mutableReadLanes&=e,A.entangledLanes&=e,e=A.entanglements;var r=A.eventTimes;for(A=A.expirationTimes;0<t;){var n=31-rt(t),o=1<<n;e[n]=0,r[n]=-1,A[n]=-1,t&=~o}}function gd(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var r=31-rt(t),n=1<<r;n&e|A[r]&e&&(A[r]|=e),t&=~n}}var lA=0;function Eh(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var Hh,pd,kh,Ih,Lh,Rc=!1,Fi=[],er=null,tr=null,rr=null,Vo=new Map,Go=new Map,Wt=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _f(A,e){switch(A){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function Yn(A,e,t,r,n,o){return A===null||A.nativeEvent!==o?(A={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[n]},e!==null&&(e=ui(e),e!==null&&pd(e)),A):(A.eventSystemFlags|=r,e=A.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),A)}function aw(A,e,t,r,n){switch(e){case"focusin":return er=Yn(er,A,e,t,r,n),!0;case"dragenter":return tr=Yn(tr,A,e,t,r,n),!0;case"mouseover":return rr=Yn(rr,A,e,t,r,n),!0;case"pointerover":var o=n.pointerId;return Vo.set(o,Yn(Vo.get(o)||null,A,e,t,r,n)),!0;case"gotpointercapture":return o=n.pointerId,Go.set(o,Yn(Go.get(o)||null,A,e,t,r,n)),!0}return!1}function Sh(A){var e=Cr(A.target);if(e!==null){var t=Or(e);if(t!==null){if(e=t.tag,e===13){if(e=Ch(t),e!==null){A.blockedOn=e,Lh(A.priority,function(){kh(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ua(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=Oc(A.domEventName,A.eventSystemFlags,e[0],A.nativeEvent);if(t===null){t=A.nativeEvent;var r=new t.constructor(t.type,t);_c=r,t.target.dispatchEvent(r),_c=null}else return e=ui(t),e!==null&&pd(e),A.blockedOn=t,!1;e.shift()}return!0}function Kf(A,e,t){ua(A)&&t.delete(e)}function sw(){Rc=!1,er!==null&&ua(er)&&(er=null),tr!==null&&ua(tr)&&(tr=null),rr!==null&&ua(rr)&&(rr=null),Vo.forEach(Kf),Go.forEach(Kf)}function Jn(A,e){A.blockedOn===e&&(A.blockedOn=null,Rc||(Rc=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,sw)))}function jo(A){function e(n){return Jn(n,A)}if(0<Fi.length){Jn(Fi[0],A);for(var t=1;t<Fi.length;t++){var r=Fi[t];r.blockedOn===A&&(r.blockedOn=null)}}for(er!==null&&Jn(er,A),tr!==null&&Jn(tr,A),rr!==null&&Jn(rr,A),Vo.forEach(e),Go.forEach(e),t=0;t<Wt.length;t++)r=Wt[t],r.blockedOn===A&&(r.blockedOn=null);for(;0<Wt.length&&(t=Wt[0],t.blockedOn===null);)Sh(t),t.blockedOn===null&&Wt.shift()}var vn=Nt.ReactCurrentBatchConfig,Ra=!0;function lw(A,e,t,r){var n=lA,o=vn.transition;vn.transition=null;try{lA=1,hd(A,e,t,r)}finally{lA=n,vn.transition=o}}function cw(A,e,t,r){var n=lA,o=vn.transition;vn.transition=null;try{lA=4,hd(A,e,t,r)}finally{lA=n,vn.transition=o}}function hd(A,e,t,r){if(Ra){var n=Oc(A,e,t,r);if(n===null)Sl(A,e,r,Oa,t),_f(A,r);else if(aw(n,A,e,t,r))r.stopPropagation();else if(_f(A,r),e&4&&-1<iw.indexOf(A)){for(;n!==null;){var o=ui(n);if(o!==null&&Hh(o),o=Oc(A,e,t,r),o===null&&Sl(A,e,r,Oa,t),o===n)break;n=o}n!==null&&r.stopPropagation()}else Sl(A,e,r,null,t)}}var Oa=null;function Oc(A,e,t,r){if(Oa=null,A=dd(r),A=Cr(A),A!==null)if(e=Or(A),e===null)A=null;else if(t=e.tag,t===13){if(A=Ch(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null);return Oa=A,null}function Mh(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case fd:return 1;case Uh:return 4;case Da:case Zv:return 16;case xh:return 536870912;default:return 16}default:return 16}}var Yt=null,Bd=null,da=null;function _h(){if(da)return da;var A,e=Bd,t=e.length,r,n="value"in Yt?Yt.value:Yt.textContent,o=n.length;for(A=0;A<t&&e[A]===n[A];A++);var i=t-A;for(r=1;r<=i&&e[t-r]===n[o-r];r++);return da=n.slice(A,1<r?1-r:void 0)}function fa(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Ui(){return!0}function Tf(){return!1}function Le(A){function e(t,r,n,o,i){this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in A)A.hasOwnProperty(a)&&(t=A[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:Tf,this.isPropagationStopped=Tf,this}return bA(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),e}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=Le(Vn),ci=bA({},Vn,{view:0,detail:0}),uw=Le(ci),Fl,Ul,Zn,bs=bA({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Zn&&(Zn&&A.type==="mousemove"?(Fl=A.screenX-Zn.screenX,Ul=A.screenY-Zn.screenY):Ul=Fl=0,Zn=A),Fl)},movementY:function(A){return"movementY"in A?A.movementY:Ul}}),Df=Le(bs),dw=bA({},bs,{dataTransfer:0}),fw=Le(dw),gw=bA({},ci,{relatedTarget:0}),xl=Le(gw),pw=bA({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),hw=Le(pw),Bw=bA({},Vn,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),vw=Le(Bw),ww=bA({},Vn,{data:0}),Nf=Le(ww),mw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yw(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=Qw[A])?!!e[A]:!1}function wd(){return yw}var Fw=bA({},ci,{key:function(A){if(A.key){var e=mw[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=fa(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?Cw[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(A){return A.type==="keypress"?fa(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?fa(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Uw=Le(Fw),xw=bA({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rf=Le(xw),bw=bA({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Ew=Le(bw),Hw=bA({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kw=Le(Hw),Iw=bA({},bs,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Lw=Le(Iw),Sw=[9,13,27,32],md=Mt&&"CompositionEvent"in window,Uo=null;Mt&&"documentMode"in document&&(Uo=document.documentMode);var Mw=Mt&&"TextEvent"in window&&!Uo,Kh=Mt&&(!md||Uo&&8<Uo&&11>=Uo),Of=" ",Pf=!1;function Th(A,e){switch(A){case"keyup":return Sw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dh(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var en=!1;function _w(A,e){switch(A){case"compositionend":return Dh(e);case"keypress":return e.which!==32?null:(Pf=!0,Of);case"textInput":return A=e.data,A===Of&&Pf?null:A;default:return null}}function Kw(A,e){if(en)return A==="compositionend"||!md&&Th(A,e)?(A=_h(),da=Bd=Yt=null,en=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kh&&e.locale!=="ko"?null:e.data;default:return null}}var Tw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!Tw[A.type]:e==="textarea"}function Nh(A,e,t,r){hh(r),e=Pa(e,"onChange"),0<e.length&&(t=new vd("onChange","change",null,t,r),A.push({event:t,listeners:e}))}var xo=null,zo=null;function Dw(A){Yh(A,0)}function Es(A){var e=nn(A);if(lh(e))return A}function Nw(A,e){if(A==="change")return e}var Rh=!1;if(Mt){var bl;if(Mt){var El="oninput"in document;if(!El){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),El=typeof Gf.oninput=="function"}bl=El}else bl=!1;Rh=bl&&(!document.documentMode||9<document.documentMode)}function jf(){xo&&(xo.detachEvent("onpropertychange",Oh),zo=xo=null)}function Oh(A){if(A.propertyName==="value"&&Es(zo)){var e=[];Nh(e,zo,A,dd(A)),mh(Dw,e)}}function Rw(A,e,t){A==="focusin"?(jf(),xo=e,zo=t,xo.attachEvent("onpropertychange",Oh)):A==="focusout"&&jf()}function Ow(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Es(zo)}function Pw(A,e){if(A==="click")return Es(e)}function Vw(A,e){if(A==="input"||A==="change")return Es(e)}function Gw(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var at=typeof Object.is=="function"?Object.is:Gw;function $o(A,e){if(at(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var n=t[r];if(!yc.call(e,n)||!at(A[n],e[n]))return!1}return!0}function zf(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function $f(A,e){var t=zf(A);A=0;for(var r;t;){if(t.nodeType===3){if(r=A+t.textContent.length,A<=e&&r>=e)return{node:t,offset:e-A};A=r}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=zf(t)}}function Ph(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Ph(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Vh(){for(var A=window,e=_a();e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=_a(A.document)}return e}function Cd(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}function jw(A){var e=Vh(),t=A.focusedElem,r=A.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ph(t.ownerDocument.documentElement,t)){if(r!==null&&Cd(t)){if(e=r.start,A=r.end,A===void 0&&(A=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(A,t.value.length);else if(A=(e=t.ownerDocument||document)&&e.defaultView||window,A.getSelection){A=A.getSelection();var n=t.textContent.length,o=Math.min(r.start,n);r=r.end===void 0?o:Math.min(r.end,n),!A.extend&&o>r&&(n=r,r=o,o=n),n=$f(t,o);var i=$f(t,r);n&&i&&(A.rangeCount!==1||A.anchorNode!==n.node||A.anchorOffset!==n.offset||A.focusNode!==i.node||A.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),A.removeAllRanges(),o>r?(A.addRange(e),A.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),A.addRange(e)))}}for(e=[],A=t;A=A.parentNode;)A.nodeType===1&&e.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)A=e[t],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var zw=Mt&&"documentMode"in document&&11>=document.documentMode,tn=null,Pc=null,bo=null,Vc=!1;function Wf(A,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Vc||tn==null||tn!==_a(r)||(r=tn,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&$o(bo,r)||(bo=r,r=Pa(Pc,"onSelect"),0<r.length&&(e=new vd("onSelect","select",null,e,t),A.push({event:e,listeners:r}),e.target=tn)))}function xi(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var rn={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},Hl={},Gh={};Mt&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Hs(A){if(Hl[A])return Hl[A];if(!rn[A])return A;var e=rn[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gh)return Hl[A]=e[t];return A}var jh=Hs("animationend"),zh=Hs("animationiteration"),$h=Hs("animationstart"),Wh=Hs("transitionend"),Xh=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(A,e){Xh.set(A,e),Rr(e,[A])}for(var kl=0;kl<Xf.length;kl++){var Il=Xf[kl],$w=Il.toLowerCase(),Ww=Il[0].toUpperCase()+Il.slice(1);gr($w,"on"+Ww)}gr(jh,"onAnimationEnd");gr(zh,"onAnimationIteration");gr($h,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Wh,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Yf(A,e,t){var r=A.type||"unknown-event";A.currentTarget=t,$v(r,e,void 0,A),A.currentTarget=null}function Yh(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var r=A[t],n=r.event;r=r.listeners;A:{var o=void 0;if(e)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,l=a.currentTarget;if(a=a.listener,s!==o&&n.isPropagationStopped())break A;Yf(n,a,l),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,l=a.currentTarget,a=a.listener,s!==o&&n.isPropagationStopped())break A;Yf(n,a,l),o=s}}}if(Ta)throw A=Dc,Ta=!1,Dc=null,A}function pA(A,e){var t=e[Wc];t===void 0&&(t=e[Wc]=new Set);var r=A+"__bubble";t.has(r)||(Jh(e,A,2,!1),t.add(r))}function Ll(A,e,t){var r=0;e&&(r|=4),Jh(t,A,r,e)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Wo(A){if(!A[bi]){A[bi]=!0,nh.forEach(function(t){t!=="selectionchange"&&(Xw.has(t)||Ll(t,!1,A),Ll(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[bi]||(e[bi]=!0,Ll("selectionchange",!1,e))}}function Jh(A,e,t,r){switch(Mh(e)){case 1:var n=lw;break;case 4:n=cw;break;default:n=hd}t=n.bind(null,e,t,A),n=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?A.addEventListener(e,t,{capture:!0,passive:n}):A.addEventListener(e,t,!0):n!==void 0?A.addEventListener(e,t,{passive:n}):A.addEventListener(e,t,!1)}function Sl(A,e,t,r,n){var o=r;if(!(e&1)&&!(e&2)&&r!==null)A:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;i=i.return}for(;a!==null;){if(i=Cr(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue A}a=a.parentNode}}r=r.return}mh(function(){var l=o,c=dd(t),u=[];A:{var f=Xh.get(A);if(f!==void 0){var h=vd,v=A;switch(A){case"keypress":if(fa(t)===0)break A;case"keydown":case"keyup":h=Uw;break;case"focusin":v="focus",h=xl;break;case"focusout":v="blur",h=xl;break;case"beforeblur":case"afterblur":h=xl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ew;break;case jh:case zh:case $h:h=hw;break;case Wh:h=kw;break;case"scroll":h=uw;break;case"wheel":h=Lw;break;case"copy":case"cut":case"paste":h=vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Rf}var m=(e&4)!==0,x=!m&&A==="scroll",g=m?f!==null?f+"Capture":null:f;m=[];for(var d=l,p;d!==null;){p=d;var C=p.stateNode;if(p.tag===5&&C!==null&&(p=C,g!==null&&(C=Po(d,g),C!=null&&m.push(Xo(d,C,p)))),x)break;d=d.return}0<m.length&&(f=new h(f,v,null,t,c),u.push({event:f,listeners:m}))}}if(!(e&7)){A:{if(f=A==="mouseover"||A==="pointerover",h=A==="mouseout"||A==="pointerout",f&&t!==_c&&(v=t.relatedTarget||t.fromElement)&&(Cr(v)||v[_t]))break A;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=t.relatedTarget||t.toElement,h=l,v=v?Cr(v):null,v!==null&&(x=Or(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=l),h!==v)){if(m=Df,C="onMouseLeave",g="onMouseEnter",d="mouse",(A==="pointerout"||A==="pointerover")&&(m=Rf,C="onPointerLeave",g="onPointerEnter",d="pointer"),x=h==null?f:nn(h),p=v==null?f:nn(v),f=new m(C,d+"leave",h,t,c),f.target=x,f.relatedTarget=p,C=null,Cr(c)===l&&(m=new m(g,d+"enter",v,t,c),m.target=p,m.relatedTarget=x,C=m),x=C,h&&v)e:{for(m=h,g=v,d=0,p=m;p;p=Pr(p))d++;for(p=0,C=g;C;C=Pr(C))p++;for(;0<d-p;)m=Pr(m),d--;for(;0<p-d;)g=Pr(g),p--;for(;d--;){if(m===g||g!==null&&m===g.alternate)break e;m=Pr(m),g=Pr(g)}m=null}else m=null;h!==null&&Jf(u,f,h,m,!1),v!==null&&x!==null&&Jf(u,x,v,m,!0)}}A:{if(f=l?nn(l):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var y=Nw;else if(Vf(f))if(Rh)y=Vw;else{y=Ow;var w=Rw}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(y=Pw);if(y&&(y=y(A,l))){Nh(u,y,t,c);break A}w&&w(A,f,l),A==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&kc(f,"number",f.value)}switch(w=l?nn(l):window,A){case"focusin":(Vf(w)||w.contentEditable==="true")&&(tn=w,Pc=l,bo=null);break;case"focusout":bo=Pc=tn=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Wf(u,t,c);break;case"selectionchange":if(zw)break;case"keydown":case"keyup":Wf(u,t,c)}var Q;if(md)A:{switch(A){case"compositionstart":var b="onCompositionStart";break A;case"compositionend":b="onCompositionEnd";break A;case"compositionupdate":b="onCompositionUpdate";break A}b=void 0}else en?Th(A,t)&&(b="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Kh&&t.locale!=="ko"&&(en||b!=="onCompositionStart"?b==="onCompositionEnd"&&en&&(Q=_h()):(Yt=c,Bd="value"in Yt?Yt.value:Yt.textContent,en=!0)),w=Pa(l,b),0<w.length&&(b=new Nf(b,A,null,t,c),u.push({event:b,listeners:w}),Q?b.data=Q:(Q=Dh(t),Q!==null&&(b.data=Q)))),(Q=Mw?_w(A,t):Kw(A,t))&&(l=Pa(l,"onBeforeInput"),0<l.length&&(c=new Nf("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=Q))}Yh(u,e)})}function Xo(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Pa(A,e){for(var t=e+"Capture",r=[];A!==null;){var n=A,o=n.stateNode;n.tag===5&&o!==null&&(n=o,o=Po(A,t),o!=null&&r.unshift(Xo(A,o,n)),o=Po(A,e),o!=null&&r.push(Xo(A,o,n))),A=A.return}return r}function Pr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function Jf(A,e,t,r,n){for(var o=e._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,l=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&l!==null&&(a=l,n?(s=Po(t,o),s!=null&&i.unshift(Xo(t,s,a))):n||(s=Po(t,o),s!=null&&i.push(Xo(t,s,a)))),t=t.return}i.length!==0&&A.push({event:e,listeners:i})}var Yw=/\r\n?/g,Jw=/\u0000|\uFFFD/g;function Zf(A){return(typeof A=="string"?A:""+A).replace(Yw,`
`).replace(Jw,"")}function Ei(A,e,t){if(e=Zf(e),Zf(A)!==e&&t)throw Error(L(425))}function Va(){}var Gc=null,jc=null;function zc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,qw=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(A){return qf.resolve(null).then(A).catch(Am)}:$c;function Am(A){setTimeout(function(){throw A})}function Ml(A,e){var t=e,r=0;do{var n=t.nextSibling;if(A.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(r===0){A.removeChild(n),jo(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=n}while(t);jo(e)}function nr(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return A}function A0(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Gn,Yo="__reactProps$"+Gn,_t="__reactContainer$"+Gn,Wc="__reactEvents$"+Gn,em="__reactListeners$"+Gn,tm="__reactHandles$"+Gn;function Cr(A){var e=A[pt];if(e)return e;for(var t=A.parentNode;t;){if(e=t[_t]||t[pt]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=A0(A);A!==null;){if(t=A[pt])return t;A=A0(A)}return e}A=t,t=A.parentNode}return null}function ui(A){return A=A[pt]||A[_t],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function nn(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(L(33))}function ks(A){return A[Yo]||null}var Xc=[],on=-1;function pr(A){return{current:A}}function vA(A){0>on||(A.current=Xc[on],Xc[on]=null,on--)}function fA(A,e){on++,Xc[on]=A.current,A.current=e}var dr={},ie=pr(dr),we=pr(!1),_r=dr;function Fn(A,e){var t=A.type.contextTypes;if(!t)return dr;var r=A.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},o;for(o in t)n[o]=e[o];return r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=e,A.__reactInternalMemoizedMaskedChildContext=n),n}function me(A){return A=A.childContextTypes,A!=null}function Ga(){vA(we),vA(ie)}function e0(A,e,t){if(ie.current!==dr)throw Error(L(168));fA(ie,e),fA(we,t)}function Zh(A,e,t){var r=A.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(L(108,Rv(A)||"Unknown",n));return bA({},t,r)}function ja(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||dr,_r=ie.current,fA(ie,A),fA(we,we.current),!0}function t0(A,e,t){var r=A.stateNode;if(!r)throw Error(L(169));t?(A=Zh(A,e,_r),r.__reactInternalMemoizedMergedChildContext=A,vA(we),vA(ie),fA(ie,A)):vA(we),fA(we,t)}var Et=null,Is=!1,_l=!1;function qh(A){Et===null?Et=[A]:Et.push(A)}function rm(A){Is=!0,qh(A)}function hr(){if(!_l&&Et!==null){_l=!0;var A=0,e=lA;try{var t=Et;for(lA=1;A<t.length;A++){var r=t[A];do r=r(!0);while(r!==null)}Et=null,Is=!1}catch(n){throw Et!==null&&(Et=Et.slice(A+1)),Fh(fd,hr),n}finally{lA=e,_l=!1}}return null}var an=[],sn=0,za=null,$a=0,Ke=[],Te=0,Kr=null,Ht=1,kt="";function vr(A,e){an[sn++]=$a,an[sn++]=za,za=A,$a=e}function A2(A,e,t){Ke[Te++]=Ht,Ke[Te++]=kt,Ke[Te++]=Kr,Kr=A;var r=Ht;A=kt;var n=32-rt(r)-1;r&=~(1<<n),t+=1;var o=32-rt(e)+n;if(30<o){var i=n-n%5;o=(r&(1<<i)-1).toString(32),r>>=i,n-=i,Ht=1<<32-rt(e)+n|t<<n|r,kt=o+A}else Ht=1<<o|t<<n|r,kt=A}function Qd(A){A.return!==null&&(vr(A,1),A2(A,1,0))}function yd(A){for(;A===za;)za=an[--sn],an[sn]=null,$a=an[--sn],an[sn]=null;for(;A===Kr;)Kr=Ke[--Te],Ke[Te]=null,kt=Ke[--Te],Ke[Te]=null,Ht=Ke[--Te],Ke[Te]=null}var He=null,Ee=null,yA=!1,At=null;function e2(A,e){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=A,e=A.deletions,e===null?(A.deletions=[t],A.flags|=16):e.push(t)}function r0(A,e){switch(A.tag){case 5:var t=A.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(A.stateNode=e,He=A,Ee=nr(e.firstChild),!0):!1;case 6:return e=A.pendingProps===""||e.nodeType!==3?null:e,e!==null?(A.stateNode=e,He=A,Ee=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Kr!==null?{id:Ht,overflow:kt}:null,A.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=e,t.return=A,A.child=t,He=A,Ee=null,!0):!1;default:return!1}}function Yc(A){return(A.mode&1)!==0&&(A.flags&128)===0}function Jc(A){if(yA){var e=Ee;if(e){var t=e;if(!r0(A,e)){if(Yc(A))throw Error(L(418));e=nr(t.nextSibling);var r=He;e&&r0(A,e)?e2(r,t):(A.flags=A.flags&-4097|2,yA=!1,He=A)}}else{if(Yc(A))throw Error(L(418));A.flags=A.flags&-4097|2,yA=!1,He=A}}}function n0(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;He=A}function Hi(A){if(A!==He)return!1;if(!yA)return n0(A),yA=!0,!1;var e;if((e=A.tag!==3)&&!(e=A.tag!==5)&&(e=A.type,e=e!=="head"&&e!=="body"&&!zc(A.type,A.memoizedProps)),e&&(e=Ee)){if(Yc(A))throw t2(),Error(L(418));for(;e;)e2(A,e),e=nr(e.nextSibling)}if(n0(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(L(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"){if(e===0){Ee=nr(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}A=A.nextSibling}Ee=null}}else Ee=He?nr(A.stateNode.nextSibling):null;return!0}function t2(){for(var A=Ee;A;)A=nr(A.nextSibling)}function Un(){Ee=He=null,yA=!1}function Fd(A){At===null?At=[A]:At.push(A)}var nm=Nt.ReactCurrentBatchConfig;function Ze(A,e){if(A&&A.defaultProps){e=bA({},e),A=A.defaultProps;for(var t in A)e[t]===void 0&&(e[t]=A[t]);return e}return e}var Wa=pr(null),Xa=null,ln=null,Ud=null;function xd(){Ud=ln=Xa=null}function bd(A){var e=Wa.current;vA(Wa),A._currentValue=e}function Zc(A,e,t){for(;A!==null;){var r=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),A===t)break;A=A.return}}function wn(A,e){Xa=A,Ud=ln=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&e&&(he=!0),A.firstContext=null)}function Ge(A){var e=A._currentValue;if(Ud!==A)if(A={context:A,memoizedValue:e,next:null},ln===null){if(Xa===null)throw Error(L(308));ln=A,Xa.dependencies={lanes:0,firstContext:A}}else ln=ln.next=A;return e}var Qr=null;function Ed(A){Qr===null?Qr=[A]:Qr.push(A)}function r2(A,e,t,r){var n=e.interleaved;return n===null?(t.next=t,Ed(e)):(t.next=n.next,n.next=t),e.interleaved=t,Kt(A,r)}function Kt(A,e){A.lanes|=e;var t=A.alternate;for(t!==null&&(t.lanes|=e),t=A,A=A.return;A!==null;)A.childLanes|=e,t=A.alternate,t!==null&&(t.childLanes|=e),t=A,A=A.return;return t.tag===3?t.stateNode:null}var zt=!1;function Hd(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n2(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function It(A,e){return{eventTime:A,lane:e,tag:0,payload:null,callback:null,next:null}}function or(A,e,t){var r=A.updateQueue;if(r===null)return null;if(r=r.shared,rA&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,Kt(A,t)}return n=r.interleaved,n===null?(e.next=e,Ed(r)):(e.next=n.next,n.next=e),r.interleaved=e,Kt(A,t)}function ga(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,gd(A,t)}}function o0(A,e){var t=A.updateQueue,r=A.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var n=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?n=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?n=o=e:o=o.next=e}else n=o=e;t={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:o,shared:r.shared,effects:r.effects},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}function Ya(A,e,t,r){var n=A.updateQueue;zt=!1;var o=n.firstBaseUpdate,i=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,l=s.next;s.next=null,i===null?o=l:i.next=l,i=s;var c=A.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==i&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=s))}if(o!==null){var u=n.baseState;i=0,c=l=s=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var v=A,m=a;switch(f=e,h=t,m.tag){case 1:if(v=m.payload,typeof v=="function"){u=v.call(h,u,f);break A}u=v;break A;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,f=typeof v=="function"?v.call(h,u,f):v,f==null)break A;u=bA({},u,f);break A;case 2:zt=!0}}a.callback!==null&&a.lane!==0&&(A.flags|=64,f=n.effects,f===null?n.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=h,s=u):c=c.next=h,i|=f;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;f=a,a=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);if(c===null&&(s=u),n.baseState=s,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do i|=n.lane,n=n.next;while(n!==e)}else o===null&&(n.shared.lanes=0);Dr|=i,A.lanes=i,A.memoizedState=u}}function i0(A,e,t){if(A=e.effects,e.effects=null,A!==null)for(e=0;e<A.length;e++){var r=A[e],n=r.callback;if(n!==null){if(r.callback=null,r=t,typeof n!="function")throw Error(L(191,n));n.call(r)}}}var o2=new rh.Component().refs;function qc(A,e,t,r){e=A.memoizedState,t=t(r,e),t=t==null?e:bA({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var Ls={isMounted:function(A){return(A=A._reactInternals)?Or(A)===A:!1},enqueueSetState:function(A,e,t){A=A._reactInternals;var r=ce(),n=ar(A),o=It(r,n);o.payload=e,t!=null&&(o.callback=t),e=or(A,o,n),e!==null&&(nt(e,A,n,r),ga(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var r=ce(),n=ar(A),o=It(r,n);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=or(A,o,n),e!==null&&(nt(e,A,n,r),ga(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=ce(),r=ar(A),n=It(t,r);n.tag=2,e!=null&&(n.callback=e),e=or(A,n,r),e!==null&&(nt(e,A,r,t),ga(e,A,r))}};function a0(A,e,t,r,n,o,i){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(r,o,i):e.prototype&&e.prototype.isPureReactComponent?!$o(t,r)||!$o(n,o):!0}function i2(A,e,t){var r=!1,n=dr,o=e.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(n=me(e)?_r:ie.current,r=e.contextTypes,o=(r=r!=null)?Fn(A,n):dr),e=new e(t,o),A.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ls,A.stateNode=e,e._reactInternals=A,r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=n,A.__reactInternalMemoizedMaskedChildContext=o),e}function s0(A,e,t,r){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==A&&Ls.enqueueReplaceState(e,e.state,null)}function Au(A,e,t,r){var n=A.stateNode;n.props=t,n.state=A.memoizedState,n.refs=o2,Hd(A);var o=e.contextType;typeof o=="object"&&o!==null?n.context=Ge(o):(o=me(e)?_r:ie.current,n.context=Fn(A,o)),n.state=A.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qc(A,e,o,t),n.state=A.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Ls.enqueueReplaceState(n,n.state,null),Ya(A,t,n,r),n.state=A.memoizedState),typeof n.componentDidMount=="function"&&(A.flags|=4194308)}function qn(A,e,t){if(A=t.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,A));var n=r,o=""+A;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(i){var a=n.refs;a===o2&&(a=n.refs={}),i===null?delete a[o]:a[o]=i},e._stringRef=o,e)}if(typeof A!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,A))}return A}function ki(A,e){throw A=Object.prototype.toString.call(e),Error(L(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A))}function l0(A){var e=A._init;return e(A._payload)}function a2(A){function e(g,d){if(A){var p=g.deletions;p===null?(g.deletions=[d],g.flags|=16):p.push(d)}}function t(g,d){if(!A)return null;for(;d!==null;)e(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function n(g,d){return g=sr(g,d),g.index=0,g.sibling=null,g}function o(g,d,p){return g.index=p,A?(p=g.alternate,p!==null?(p=p.index,p<d?(g.flags|=2,d):p):(g.flags|=2,d)):(g.flags|=1048576,d)}function i(g){return A&&g.alternate===null&&(g.flags|=2),g}function a(g,d,p,C){return d===null||d.tag!==6?(d=Pl(p,g.mode,C),d.return=g,d):(d=n(d,p),d.return=g,d)}function s(g,d,p,C){var y=p.type;return y===An?c(g,d,p.props.children,C,p.key):d!==null&&(d.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===jt&&l0(y)===d.type)?(C=n(d,p.props),C.ref=qn(g,d,p),C.return=g,C):(C=ma(p.type,p.key,p.props,null,g.mode,C),C.ref=qn(g,d,p),C.return=g,C)}function l(g,d,p,C){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Vl(p,g.mode,C),d.return=g,d):(d=n(d,p.children||[]),d.return=g,d)}function c(g,d,p,C,y){return d===null||d.tag!==7?(d=Er(p,g.mode,C,y),d.return=g,d):(d=n(d,p),d.return=g,d)}function u(g,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Pl(""+d,g.mode,p),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wi:return p=ma(d.type,d.key,d.props,null,g.mode,p),p.ref=qn(g,null,d),p.return=g,p;case qr:return d=Vl(d,g.mode,p),d.return=g,d;case jt:var C=d._init;return u(g,C(d._payload),p)}if(so(d)||Wn(d))return d=Er(d,g.mode,p,null),d.return=g,d;ki(g,d)}return null}function f(g,d,p,C){var y=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return y!==null?null:a(g,d,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wi:return p.key===y?s(g,d,p,C):null;case qr:return p.key===y?l(g,d,p,C):null;case jt:return y=p._init,f(g,d,y(p._payload),C)}if(so(p)||Wn(p))return y!==null?null:c(g,d,p,C,null);ki(g,p)}return null}function h(g,d,p,C,y){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(p)||null,a(d,g,""+C,y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case wi:return g=g.get(C.key===null?p:C.key)||null,s(d,g,C,y);case qr:return g=g.get(C.key===null?p:C.key)||null,l(d,g,C,y);case jt:var w=C._init;return h(g,d,p,w(C._payload),y)}if(so(C)||Wn(C))return g=g.get(p)||null,c(d,g,C,y,null);ki(d,C)}return null}function v(g,d,p,C){for(var y=null,w=null,Q=d,b=d=0,H=null;Q!==null&&b<p.length;b++){Q.index>b?(H=Q,Q=null):H=Q.sibling;var M=f(g,Q,p[b],C);if(M===null){Q===null&&(Q=H);break}A&&Q&&M.alternate===null&&e(g,Q),d=o(M,d,b),w===null?y=M:w.sibling=M,w=M,Q=H}if(b===p.length)return t(g,Q),yA&&vr(g,b),y;if(Q===null){for(;b<p.length;b++)Q=u(g,p[b],C),Q!==null&&(d=o(Q,d,b),w===null?y=Q:w.sibling=Q,w=Q);return yA&&vr(g,b),y}for(Q=r(g,Q);b<p.length;b++)H=h(Q,g,b,p[b],C),H!==null&&(A&&H.alternate!==null&&Q.delete(H.key===null?b:H.key),d=o(H,d,b),w===null?y=H:w.sibling=H,w=H);return A&&Q.forEach(function(AA){return e(g,AA)}),yA&&vr(g,b),y}function m(g,d,p,C){var y=Wn(p);if(typeof y!="function")throw Error(L(150));if(p=y.call(p),p==null)throw Error(L(151));for(var w=y=null,Q=d,b=d=0,H=null,M=p.next();Q!==null&&!M.done;b++,M=p.next()){Q.index>b?(H=Q,Q=null):H=Q.sibling;var AA=f(g,Q,M.value,C);if(AA===null){Q===null&&(Q=H);break}A&&Q&&AA.alternate===null&&e(g,Q),d=o(AA,d,b),w===null?y=AA:w.sibling=AA,w=AA,Q=H}if(M.done)return t(g,Q),yA&&vr(g,b),y;if(Q===null){for(;!M.done;b++,M=p.next())M=u(g,M.value,C),M!==null&&(d=o(M,d,b),w===null?y=M:w.sibling=M,w=M);return yA&&vr(g,b),y}for(Q=r(g,Q);!M.done;b++,M=p.next())M=h(Q,g,b,M.value,C),M!==null&&(A&&M.alternate!==null&&Q.delete(M.key===null?b:M.key),d=o(M,d,b),w===null?y=M:w.sibling=M,w=M);return A&&Q.forEach(function(Y){return e(g,Y)}),yA&&vr(g,b),y}function x(g,d,p,C){if(typeof p=="object"&&p!==null&&p.type===An&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wi:A:{for(var y=p.key,w=d;w!==null;){if(w.key===y){if(y=p.type,y===An){if(w.tag===7){t(g,w.sibling),d=n(w,p.props.children),d.return=g,g=d;break A}}else if(w.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===jt&&l0(y)===w.type){t(g,w.sibling),d=n(w,p.props),d.ref=qn(g,w,p),d.return=g,g=d;break A}t(g,w);break}else e(g,w);w=w.sibling}p.type===An?(d=Er(p.props.children,g.mode,C,p.key),d.return=g,g=d):(C=ma(p.type,p.key,p.props,null,g.mode,C),C.ref=qn(g,d,p),C.return=g,g=C)}return i(g);case qr:A:{for(w=p.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(g,d.sibling),d=n(d,p.children||[]),d.return=g,g=d;break A}else{t(g,d);break}else e(g,d);d=d.sibling}d=Vl(p,g.mode,C),d.return=g,g=d}return i(g);case jt:return w=p._init,x(g,d,w(p._payload),C)}if(so(p))return v(g,d,p,C);if(Wn(p))return m(g,d,p,C);ki(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(g,d.sibling),d=n(d,p),d.return=g,g=d):(t(g,d),d=Pl(p,g.mode,C),d.return=g,g=d),i(g)):t(g,d)}return x}var xn=a2(!0),s2=a2(!1),di={},Bt=pr(di),Jo=pr(di),Zo=pr(di);function yr(A){if(A===di)throw Error(L(174));return A}function kd(A,e){switch(fA(Zo,e),fA(Jo,A),fA(Bt,di),A=e.nodeType,A){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:A=A===8?e.parentNode:e,e=A.namespaceURI||null,A=A.tagName,e=Lc(e,A)}vA(Bt),fA(Bt,e)}function bn(){vA(Bt),vA(Jo),vA(Zo)}function l2(A){yr(Zo.current);var e=yr(Bt.current),t=Lc(e,A.type);e!==t&&(fA(Jo,A),fA(Bt,t))}function Id(A){Jo.current===A&&(vA(Bt),vA(Jo))}var UA=pr(0);function Ja(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kl=[];function Ld(){for(var A=0;A<Kl.length;A++)Kl[A]._workInProgressVersionPrimary=null;Kl.length=0}var pa=Nt.ReactCurrentDispatcher,Tl=Nt.ReactCurrentBatchConfig,Tr=0,xA=null,DA=null,jA=null,Za=!1,Eo=!1,qo=0,om=0;function Ae(){throw Error(L(321))}function Sd(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!at(A[t],e[t]))return!1;return!0}function Md(A,e,t,r,n,o){if(Tr=o,xA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=A===null||A.memoizedState===null?lm:cm,A=t(r,n),Eo){o=0;do{if(Eo=!1,qo=0,25<=o)throw Error(L(301));o+=1,jA=DA=null,e.updateQueue=null,pa.current=um,A=t(r,n)}while(Eo)}if(pa.current=qa,e=DA!==null&&DA.next!==null,Tr=0,jA=DA=xA=null,Za=!1,e)throw Error(L(300));return A}function _d(){var A=qo!==0;return qo=0,A}function dt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jA===null?xA.memoizedState=jA=A:jA=jA.next=A,jA}function je(){if(DA===null){var A=xA.alternate;A=A!==null?A.memoizedState:null}else A=DA.next;var e=jA===null?xA.memoizedState:jA.next;if(e!==null)jA=e,DA=A;else{if(A===null)throw Error(L(310));DA=A,A={memoizedState:DA.memoizedState,baseState:DA.baseState,baseQueue:DA.baseQueue,queue:DA.queue,next:null},jA===null?xA.memoizedState=jA=A:jA=jA.next=A}return jA}function Ai(A,e){return typeof e=="function"?e(A):e}function Dl(A){var e=je(),t=e.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=A;var r=DA,n=r.baseQueue,o=t.pending;if(o!==null){if(n!==null){var i=n.next;n.next=o.next,o.next=i}r.baseQueue=n=o,t.pending=null}if(n!==null){o=n.next,r=r.baseState;var a=i=null,s=null,l=o;do{var c=l.lane;if((Tr&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:A(r,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};s===null?(a=s=u,i=r):s=s.next=u,xA.lanes|=c,Dr|=c}l=l.next}while(l!==null&&l!==o);s===null?i=r:s.next=a,at(r,e.memoizedState)||(he=!0),e.memoizedState=r,e.baseState=i,e.baseQueue=s,t.lastRenderedState=r}if(A=t.interleaved,A!==null){n=A;do o=n.lane,xA.lanes|=o,Dr|=o,n=n.next;while(n!==A)}else n===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nl(A){var e=je(),t=e.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=A;var r=t.dispatch,n=t.pending,o=e.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do o=A(o,i.action),i=i.next;while(i!==n);at(o,e.memoizedState)||(he=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,r]}function c2(){}function u2(A,e){var t=xA,r=je(),n=e(),o=!at(r.memoizedState,n);if(o&&(r.memoizedState=n,he=!0),r=r.queue,Kd(g2.bind(null,t,r,A),[A]),r.getSnapshot!==e||o||jA!==null&&jA.memoizedState.tag&1){if(t.flags|=2048,ei(9,f2.bind(null,t,r,n,e),void 0,null),WA===null)throw Error(L(349));Tr&30||d2(t,e,n)}return n}function d2(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=xA.updateQueue,e===null?(e={lastEffect:null,stores:null},xA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function f2(A,e,t,r){e.value=t,e.getSnapshot=r,p2(e)&&h2(A)}function g2(A,e,t){return t(function(){p2(e)&&h2(A)})}function p2(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!at(A,t)}catch{return!0}}function h2(A){var e=Kt(A,1);e!==null&&nt(e,A,1,-1)}function c0(A){var e=dt();return typeof A=="function"&&(A=A()),e.memoizedState=e.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:A},e.queue=A,A=A.dispatch=sm.bind(null,xA,A),[e.memoizedState,A]}function ei(A,e,t,r){return A={tag:A,create:e,destroy:t,deps:r,next:null},e=xA.updateQueue,e===null?(e={lastEffect:null,stores:null},xA.updateQueue=e,e.lastEffect=A.next=A):(t=e.lastEffect,t===null?e.lastEffect=A.next=A:(r=t.next,t.next=A,A.next=r,e.lastEffect=A)),A}function B2(){return je().memoizedState}function ha(A,e,t,r){var n=dt();xA.flags|=A,n.memoizedState=ei(1|e,t,void 0,r===void 0?null:r)}function Ss(A,e,t,r){var n=je();r=r===void 0?null:r;var o=void 0;if(DA!==null){var i=DA.memoizedState;if(o=i.destroy,r!==null&&Sd(r,i.deps)){n.memoizedState=ei(e,t,o,r);return}}xA.flags|=A,n.memoizedState=ei(1|e,t,o,r)}function u0(A,e){return ha(8390656,8,A,e)}function Kd(A,e){return Ss(2048,8,A,e)}function v2(A,e){return Ss(4,2,A,e)}function w2(A,e){return Ss(4,4,A,e)}function m2(A,e){if(typeof e=="function")return A=A(),e(A),function(){e(null)};if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function C2(A,e,t){return t=t!=null?t.concat([A]):null,Ss(4,4,m2.bind(null,e,A),t)}function Td(){}function Q2(A,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(t.memoizedState=[A,e],A)}function y2(A,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Sd(e,r[1])?r[0]:(A=A(),t.memoizedState=[A,e],A)}function F2(A,e,t){return Tr&21?(at(t,e)||(t=bh(),xA.lanes|=t,Dr|=t,A.baseState=!0),e):(A.baseState&&(A.baseState=!1,he=!0),A.memoizedState=t)}function im(A,e){var t=lA;lA=t!==0&&4>t?t:4,A(!0);var r=Tl.transition;Tl.transition={};try{A(!1),e()}finally{lA=t,Tl.transition=r}}function U2(){return je().memoizedState}function am(A,e,t){var r=ar(A);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},x2(A))b2(e,t);else if(t=r2(A,e,t,r),t!==null){var n=ce();nt(t,A,r,n),E2(t,e,r)}}function sm(A,e,t){var r=ar(A),n={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(x2(A))b2(e,n);else{var o=A.alternate;if(A.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,a=o(i,t);if(n.hasEagerState=!0,n.eagerState=a,at(a,i)){var s=e.interleaved;s===null?(n.next=n,Ed(e)):(n.next=s.next,s.next=n),e.interleaved=n;return}}catch{}finally{}t=r2(A,e,n,r),t!==null&&(n=ce(),nt(t,A,r,n),E2(t,e,r))}}function x2(A){var e=A.alternate;return A===xA||e!==null&&e===xA}function b2(A,e){Eo=Za=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function E2(A,e,t){if(t&4194240){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,gd(A,t)}}var qa={readContext:Ge,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},lm={readContext:Ge,useCallback:function(A,e){return dt().memoizedState=[A,e===void 0?null:e],A},useContext:Ge,useEffect:u0,useImperativeHandle:function(A,e,t){return t=t!=null?t.concat([A]):null,ha(4194308,4,m2.bind(null,e,A),t)},useLayoutEffect:function(A,e){return ha(4194308,4,A,e)},useInsertionEffect:function(A,e){return ha(4,2,A,e)},useMemo:function(A,e){var t=dt();return e=e===void 0?null:e,A=A(),t.memoizedState=[A,e],A},useReducer:function(A,e,t){var r=dt();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:e},r.queue=A,A=A.dispatch=am.bind(null,xA,A),[r.memoizedState,A]},useRef:function(A){var e=dt();return A={current:A},e.memoizedState=A},useState:c0,useDebugValue:Td,useDeferredValue:function(A){return dt().memoizedState=A},useTransition:function(){var A=c0(!1),e=A[0];return A=im.bind(null,A[1]),dt().memoizedState=A,[e,A]},useMutableSource:function(){},useSyncExternalStore:function(A,e,t){var r=xA,n=dt();if(yA){if(t===void 0)throw Error(L(407));t=t()}else{if(t=e(),WA===null)throw Error(L(349));Tr&30||d2(r,e,t)}n.memoizedState=t;var o={value:t,getSnapshot:e};return n.queue=o,u0(g2.bind(null,r,o,A),[A]),r.flags|=2048,ei(9,f2.bind(null,r,o,t,e),void 0,null),t},useId:function(){var A=dt(),e=WA.identifierPrefix;if(yA){var t=kt,r=Ht;t=(r&~(1<<32-rt(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=qo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=om++,e=":"+e+"r"+t.toString(32)+":";return A.memoizedState=e},unstable_isNewReconciler:!1},cm={readContext:Ge,useCallback:Q2,useContext:Ge,useEffect:Kd,useImperativeHandle:C2,useInsertionEffect:v2,useLayoutEffect:w2,useMemo:y2,useReducer:Dl,useRef:B2,useState:function(){return Dl(Ai)},useDebugValue:Td,useDeferredValue:function(A){var e=je();return F2(e,DA.memoizedState,A)},useTransition:function(){var A=Dl(Ai)[0],e=je().memoizedState;return[A,e]},useMutableSource:c2,useSyncExternalStore:u2,useId:U2,unstable_isNewReconciler:!1},um={readContext:Ge,useCallback:Q2,useContext:Ge,useEffect:Kd,useImperativeHandle:C2,useInsertionEffect:v2,useLayoutEffect:w2,useMemo:y2,useReducer:Nl,useRef:B2,useState:function(){return Nl(Ai)},useDebugValue:Td,useDeferredValue:function(A){var e=je();return DA===null?e.memoizedState=A:F2(e,DA.memoizedState,A)},useTransition:function(){var A=Nl(Ai)[0],e=je().memoizedState;return[A,e]},useMutableSource:c2,useSyncExternalStore:u2,useId:U2,unstable_isNewReconciler:!1};function En(A,e){try{var t="",r=e;do t+=Nv(r),r=r.return;while(r);var n=t}catch(o){n=`
Error generating stack: `+o.message+`
`+o.stack}return{value:A,source:e,stack:n,digest:null}}function Rl(A,e,t){return{value:A,source:null,stack:t??null,digest:e??null}}function eu(A,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var dm=typeof WeakMap=="function"?WeakMap:Map;function H2(A,e,t){t=It(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){es||(es=!0,uu=r),eu(A,e)},t}function k2(A,e,t){t=It(-1,t),t.tag=3;var r=A.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;t.payload=function(){return r(n)},t.callback=function(){eu(A,e)}}var o=A.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){eu(A,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function d0(A,e,t){var r=A.pingCache;if(r===null){r=A.pingCache=new dm;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(t)||(n.add(t),A=xm.bind(null,A,e,t),e.then(A,A))}function f0(A){do{var e;if((e=A.tag===13)&&(e=A.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return A;A=A.return}while(A!==null);return null}function g0(A,e,t,r,n){return A.mode&1?(A.flags|=65536,A.lanes=n,A):(A===e?A.flags|=65536:(A.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=It(-1,1),e.tag=2,or(t,e,1))),t.lanes|=1),A)}var fm=Nt.ReactCurrentOwner,he=!1;function le(A,e,t,r){e.child=A===null?s2(e,null,t,r):xn(e,A.child,t,r)}function p0(A,e,t,r,n){t=t.render;var o=e.ref;return wn(e,n),r=Md(A,e,t,r,o,n),t=_d(),A!==null&&!he?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Tt(A,e,n)):(yA&&t&&Qd(e),e.flags|=1,le(A,e,r,n),e.child)}function h0(A,e,t,r,n){if(A===null){var o=t.type;return typeof o=="function"&&!jd(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,I2(A,e,o,r,n)):(A=ma(t.type,null,r,e,e.mode,n),A.ref=e.ref,A.return=e,e.child=A)}if(o=A.child,!(A.lanes&n)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:$o,t(i,r)&&A.ref===e.ref)return Tt(A,e,n)}return e.flags|=1,A=sr(o,r),A.ref=e.ref,A.return=e,e.child=A}function I2(A,e,t,r,n){if(A!==null){var o=A.memoizedProps;if($o(o,r)&&A.ref===e.ref)if(he=!1,e.pendingProps=r=o,(A.lanes&n)!==0)A.flags&131072&&(he=!0);else return e.lanes=A.lanes,Tt(A,e,n)}return tu(A,e,t,r,n)}function L2(A,e,t){var r=e.pendingProps,n=r.children,o=A!==null?A.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fA(un,be),be|=t;else{if(!(t&1073741824))return A=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:A,cachePool:null,transitions:null},e.updateQueue=null,fA(un,be),be|=A,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,fA(un,be),be|=r}else o!==null?(r=o.baseLanes|t,e.memoizedState=null):r=t,fA(un,be),be|=r;return le(A,e,n,t),e.child}function S2(A,e){var t=e.ref;(A===null&&t!==null||A!==null&&A.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tu(A,e,t,r,n){var o=me(t)?_r:ie.current;return o=Fn(e,o),wn(e,n),t=Md(A,e,t,r,o,n),r=_d(),A!==null&&!he?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Tt(A,e,n)):(yA&&r&&Qd(e),e.flags|=1,le(A,e,t,n),e.child)}function B0(A,e,t,r,n){if(me(t)){var o=!0;ja(e)}else o=!1;if(wn(e,n),e.stateNode===null)Ba(A,e),i2(e,t,r),Au(e,t,r,n),r=!0;else if(A===null){var i=e.stateNode,a=e.memoizedProps;i.props=a;var s=i.context,l=t.contextType;typeof l=="object"&&l!==null?l=Ge(l):(l=me(t)?_r:ie.current,l=Fn(e,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==l)&&s0(e,i,r,l),zt=!1;var f=e.memoizedState;i.state=f,Ya(e,r,i,n),s=e.memoizedState,a!==r||f!==s||we.current||zt?(typeof c=="function"&&(qc(e,t,c,r),s=e.memoizedState),(a=zt||a0(e,t,a,r,f,s,l))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),i.props=r,i.state=s,i.context=l,r=a):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,n2(A,e),a=e.memoizedProps,l=e.type===e.elementType?a:Ze(e.type,a),i.props=l,u=e.pendingProps,f=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=me(t)?_r:ie.current,s=Fn(e,s));var h=t.getDerivedStateFromProps;(c=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==u||f!==s)&&s0(e,i,r,s),zt=!1,f=e.memoizedState,i.state=f,Ya(e,r,i,n);var v=e.memoizedState;a!==u||f!==v||we.current||zt?(typeof h=="function"&&(qc(e,t,h,r),v=e.memoizedState),(l=zt||a0(e,t,l,r,f,v,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),i.props=r,i.state=v,i.context=s,r=l):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=1024),r=!1)}return ru(A,e,t,r,o,n)}function ru(A,e,t,r,n,o){S2(A,e);var i=(e.flags&128)!==0;if(!r&&!i)return n&&t0(e,t,!1),Tt(A,e,o);r=e.stateNode,fm.current=e;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,A!==null&&i?(e.child=xn(e,A.child,null,o),e.child=xn(e,null,a,o)):le(A,e,a,o),e.memoizedState=r.state,n&&t0(e,t,!0),e.child}function M2(A){var e=A.stateNode;e.pendingContext?e0(A,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(A,e.context,!1),kd(A,e.containerInfo)}function v0(A,e,t,r,n){return Un(),Fd(n),e.flags|=256,le(A,e,t,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ou(A){return{baseLanes:A,cachePool:null,transitions:null}}function _2(A,e,t){var r=e.pendingProps,n=UA.current,o=!1,i=(e.flags&128)!==0,a;if((a=i)||(a=A!==null&&A.memoizedState===null?!1:(n&2)!==0),a?(o=!0,e.flags&=-129):(A===null||A.memoizedState!==null)&&(n|=1),fA(UA,n&1),A===null)return Jc(e),A=e.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(e.mode&1?A.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=r.children,A=r.fallback,o?(r=e.mode,o=e.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ks(i,r,0,null),A=Er(A,r,t,null),o.return=e,A.return=e,o.sibling=A,e.child=o,e.child.memoizedState=ou(t),e.memoizedState=nu,A):Dd(e,i));if(n=A.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return gm(A,e,i,r,a,n,t);if(o){o=r.fallback,i=e.mode,n=A.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=sr(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?o=sr(a,o):(o=Er(o,i,t,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,i=A.child.memoizedState,i=i===null?ou(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=A.childLanes&~t,e.memoizedState=nu,r}return o=A.child,A=o.sibling,r=sr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,A!==null&&(t=e.deletions,t===null?(e.deletions=[A],e.flags|=16):t.push(A)),e.child=r,e.memoizedState=null,r}function Dd(A,e){return e=Ks({mode:"visible",children:e},A.mode,0,null),e.return=A,A.child=e}function Ii(A,e,t,r){return r!==null&&Fd(r),xn(e,A.child,null,t),A=Dd(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function gm(A,e,t,r,n,o,i){if(t)return e.flags&256?(e.flags&=-257,r=Rl(Error(L(422))),Ii(A,e,i,r)):e.memoizedState!==null?(e.child=A.child,e.flags|=128,null):(o=r.fallback,n=e.mode,r=Ks({mode:"visible",children:r.children},n,0,null),o=Er(o,n,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&xn(e,A.child,null,i),e.child.memoizedState=ou(i),e.memoizedState=nu,o);if(!(e.mode&1))return Ii(A,e,i,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=Rl(o,r,void 0),Ii(A,e,i,r)}if(a=(i&A.childLanes)!==0,he||a){if(r=WA,r!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|i)?0:n,n!==0&&n!==o.retryLane&&(o.retryLane=n,Kt(A,n),nt(r,A,n,-1))}return Gd(),r=Rl(Error(L(421))),Ii(A,e,i,r)}return n.data==="$?"?(e.flags|=128,e.child=A.child,e=bm.bind(null,A),n._reactRetry=e,null):(A=o.treeContext,Ee=nr(n.nextSibling),He=e,yA=!0,At=null,A!==null&&(Ke[Te++]=Ht,Ke[Te++]=kt,Ke[Te++]=Kr,Ht=A.id,kt=A.overflow,Kr=e),e=Dd(e,r.children),e.flags|=4096,e)}function w0(A,e,t){A.lanes|=e;var r=A.alternate;r!==null&&(r.lanes|=e),Zc(A.return,e,t)}function Ol(A,e,t,r,n){var o=A.memoizedState;o===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:n}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=n)}function K2(A,e,t){var r=e.pendingProps,n=r.revealOrder,o=r.tail;if(le(A,e,r.children,t),r=UA.current,r&2)r=r&1|2,e.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&w0(A,t,e);else if(A.tag===19)w0(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}r&=1}if(fA(UA,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(t=e.child,n=null;t!==null;)A=t.alternate,A!==null&&Ja(A)===null&&(n=t),t=t.sibling;t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),Ol(e,!1,n,t,o);break;case"backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(A=n.alternate,A!==null&&Ja(A)===null){e.child=n;break}A=n.sibling,n.sibling=t,t=n,n=A}Ol(e,!0,t,null,o);break;case"together":Ol(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(A,e){!(e.mode&1)&&A!==null&&(A.alternate=null,e.alternate=null,e.flags|=2)}function Tt(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Dr|=e.lanes,!(t&e.childLanes))return null;if(A!==null&&e.child!==A.child)throw Error(L(153));if(e.child!==null){for(A=e.child,t=sr(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=sr(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function pm(A,e,t){switch(e.tag){case 3:M2(e),Un();break;case 5:l2(e);break;case 1:me(e.type)&&ja(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;fA(Wa,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fA(UA,UA.current&1),e.flags|=128,null):t&e.child.childLanes?_2(A,e,t):(fA(UA,UA.current&1),A=Tt(A,e,t),A!==null?A.sibling:null);fA(UA,UA.current&1);break;case 19:if(r=(t&e.childLanes)!==0,A.flags&128){if(r)return K2(A,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),fA(UA,UA.current),r)break;return null;case 22:case 23:return e.lanes=0,L2(A,e,t)}return Tt(A,e,t)}var T2,iu,D2,N2;T2=function(A,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)A.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};iu=function(){};D2=function(A,e,t,r){var n=A.memoizedProps;if(n!==r){A=e.stateNode,yr(Bt.current);var o=null;switch(t){case"input":n=Ec(A,n),r=Ec(A,r),o=[];break;case"select":n=bA({},n,{value:void 0}),r=bA({},r,{value:void 0}),o=[];break;case"textarea":n=Ic(A,n),r=Ic(A,r),o=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(A.onclick=Va)}Sc(t,r);var i;t=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var a=n[l];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ro.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var s=r[l];if(a=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(l,t)),t=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(l,s)):l==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(l)?(s!=null&&l==="onScroll"&&pA("scroll",A),o||a===s||(o=[])):(o=o||[]).push(l,s))}t&&(o=o||[]).push("style",t);var l=o;(e.updateQueue=l)&&(e.flags|=4)}};N2=function(A,e,t,r){t!==r&&(e.flags|=4)};function Ao(A,e){if(!yA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:r.sibling=null}}function ee(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,r=0;if(e)for(var n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=A,n=n.sibling;else for(n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=A,n=n.sibling;return A.subtreeFlags|=r,A.childLanes=t,e}function hm(A,e,t){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(e),null;case 1:return me(e.type)&&Ga(),ee(e),null;case 3:return r=e.stateNode,bn(),vA(we),vA(ie),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(A===null||A.child===null)&&(Hi(e)?e.flags|=4:A===null||A.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(gu(At),At=null))),iu(A,e),ee(e),null;case 5:Id(e);var n=yr(Zo.current);if(t=e.type,A!==null&&e.stateNode!=null)D2(A,e,t,r,n),A.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ee(e),null}if(A=yr(Bt.current),Hi(e)){r=e.stateNode,t=e.type;var o=e.memoizedProps;switch(r[pt]=e,r[Yo]=o,A=(e.mode&1)!==0,t){case"dialog":pA("cancel",r),pA("close",r);break;case"iframe":case"object":case"embed":pA("load",r);break;case"video":case"audio":for(n=0;n<co.length;n++)pA(co[n],r);break;case"source":pA("error",r);break;case"img":case"image":case"link":pA("error",r),pA("load",r);break;case"details":pA("toggle",r);break;case"input":Ef(r,o),pA("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pA("invalid",r);break;case"textarea":kf(r,o),pA("invalid",r)}Sc(t,o),n=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,A),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,a,A),n=["children",""+a]):Ro.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&pA("scroll",r)}switch(t){case"input":mi(r),Hf(r,o,!0);break;case"textarea":mi(r),If(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Va)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=dh(t)),A==="http://www.w3.org/1999/xhtml"?t==="script"?(A=i.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof r.is=="string"?A=i.createElement(t,{is:r.is}):(A=i.createElement(t),t==="select"&&(i=A,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):A=i.createElementNS(A,t),A[pt]=e,A[Yo]=r,T2(A,e,!1,!1),e.stateNode=A;A:{switch(i=Mc(t,r),t){case"dialog":pA("cancel",A),pA("close",A),n=r;break;case"iframe":case"object":case"embed":pA("load",A),n=r;break;case"video":case"audio":for(n=0;n<co.length;n++)pA(co[n],A);n=r;break;case"source":pA("error",A),n=r;break;case"img":case"image":case"link":pA("error",A),pA("load",A),n=r;break;case"details":pA("toggle",A),n=r;break;case"input":Ef(A,r),n=Ec(A,r),pA("invalid",A);break;case"option":n=r;break;case"select":A._wrapperState={wasMultiple:!!r.multiple},n=bA({},r,{value:void 0}),pA("invalid",A);break;case"textarea":kf(A,r),n=Ic(A,r),pA("invalid",A);break;default:n=r}Sc(t,n),a=n;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?ph(A,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fh(A,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Oo(A,s):typeof s=="number"&&Oo(A,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ro.hasOwnProperty(o)?s!=null&&o==="onScroll"&&pA("scroll",A):s!=null&&sd(A,o,s,i))}switch(t){case"input":mi(A),Hf(A,r,!1);break;case"textarea":mi(A),If(A);break;case"option":r.value!=null&&A.setAttribute("value",""+ur(r.value));break;case"select":A.multiple=!!r.multiple,o=r.value,o!=null?pn(A,!!r.multiple,o,!1):r.defaultValue!=null&&pn(A,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(A.onclick=Va)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break A;case"img":r=!0;break A;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ee(e),null;case 6:if(A&&e.stateNode!=null)N2(A,e,A.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(t=yr(Zo.current),yr(Bt.current),Hi(e)){if(r=e.stateNode,t=e.memoizedProps,r[pt]=e,(o=r.nodeValue!==t)&&(A=He,A!==null))switch(A.tag){case 3:Ei(r.nodeValue,t,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,t,(A.mode&1)!==0)}o&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[pt]=e,e.stateNode=r}return ee(e),null;case 13:if(vA(UA),r=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(yA&&Ee!==null&&e.mode&1&&!(e.flags&128))t2(),Un(),e.flags|=98560,o=!1;else if(o=Hi(e),r!==null&&r.dehydrated!==null){if(A===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[pt]=e}else Un(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ee(e),o=!1}else At!==null&&(gu(At),At=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(A!==null&&A.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(A===null||UA.current&1?RA===0&&(RA=3):Gd())),e.updateQueue!==null&&(e.flags|=4),ee(e),null);case 4:return bn(),iu(A,e),A===null&&Wo(e.stateNode.containerInfo),ee(e),null;case 10:return bd(e.type._context),ee(e),null;case 17:return me(e.type)&&Ga(),ee(e),null;case 19:if(vA(UA),o=e.memoizedState,o===null)return ee(e),null;if(r=(e.flags&128)!==0,i=o.rendering,i===null)if(r)Ao(o,!1);else{if(RA!==0||A!==null&&A.flags&128)for(A=e.child;A!==null;){if(i=Ja(A),i!==null){for(e.flags|=128,Ao(o,!1),r=i.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)o=t,A=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=A,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,A=i.dependencies,o.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),t=t.sibling;return fA(UA,UA.current&1|2),e.child}A=A.sibling}o.tail!==null&&LA()>Hn&&(e.flags|=128,r=!0,Ao(o,!1),e.lanes=4194304)}else{if(!r)if(A=Ja(i),A!==null){if(e.flags|=128,r=!0,t=A.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!yA)return ee(e),null}else 2*LA()-o.renderingStartTime>Hn&&t!==1073741824&&(e.flags|=128,r=!0,Ao(o,!1),e.lanes=4194304);o.isBackwards?(i.sibling=e.child,e.child=i):(t=o.last,t!==null?t.sibling=i:e.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=LA(),e.sibling=null,t=UA.current,fA(UA,r?t&1|2:t&1),e):(ee(e),null);case 22:case 23:return Vd(),r=e.memoizedState!==null,A!==null&&A.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(ee(e),e.subtreeFlags&6&&(e.flags|=8192)):ee(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function Bm(A,e){switch(yd(e),e.tag){case 1:return me(e.type)&&Ga(),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return bn(),vA(we),vA(ie),Ld(),A=e.flags,A&65536&&!(A&128)?(e.flags=A&-65537|128,e):null;case 5:return Id(e),null;case 13:if(vA(UA),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Un()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return vA(UA),null;case 4:return bn(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Li=!1,ne=!1,vm=typeof WeakSet=="function"?WeakSet:Set,P=null;function cn(A,e){var t=A.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){HA(A,e,r)}else t.current=null}function au(A,e,t){try{t()}catch(r){HA(A,e,r)}}var m0=!1;function wm(A,e){if(Gc=Ra,A=Vh(),Cd(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var n=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break A}var i=0,a=-1,s=-1,l=0,c=0,u=A,f=null;e:for(;;){for(var h;u!==t||n!==0&&u.nodeType!==3||(a=i+n),u!==o||r!==0&&u.nodeType!==3||(s=i+r),u.nodeType===3&&(i+=u.nodeValue.length),(h=u.firstChild)!==null;)f=u,u=h;for(;;){if(u===A)break e;if(f===t&&++l===n&&(a=i),f===o&&++c===r&&(s=i),(h=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=h}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(jc={focusedElem:A,selectionRange:t},Ra=!1,P=e;P!==null;)if(e=P,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,P=A;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,x=v.memoizedState,g=e.stateNode,d=g.getSnapshotBeforeUpdate(e.elementType===e.type?m:Ze(e.type,m),x);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(C){HA(e,e.return,C)}if(A=e.sibling,A!==null){A.return=e.return,P=A;break}P=e.return}return v=m0,m0=!1,v}function Ho(A,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&A)===A){var o=n.destroy;n.destroy=void 0,o!==void 0&&au(e,t,o)}n=n.next}while(n!==r)}}function Ms(A,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function su(A){var e=A.ref;if(e!==null){var t=A.stateNode;switch(A.tag){case 5:A=t;break;default:A=t}typeof e=="function"?e(A):e.current=A}}function R2(A){var e=A.alternate;e!==null&&(A.alternate=null,R2(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&(delete e[pt],delete e[Yo],delete e[Wc],delete e[em],delete e[tm])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function O2(A){return A.tag===5||A.tag===3||A.tag===4}function C0(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||O2(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function lu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(A,e):t.insertBefore(A,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(A,t)):(e=t,e.appendChild(A)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Va));else if(r!==4&&(A=A.child,A!==null))for(lu(A,e,t),A=A.sibling;A!==null;)lu(A,e,t),A=A.sibling}function cu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(r!==4&&(A=A.child,A!==null))for(cu(A,e,t),A=A.sibling;A!==null;)cu(A,e,t),A=A.sibling}var XA=null,qe=!1;function Rt(A,e,t){for(t=t.child;t!==null;)P2(A,e,t),t=t.sibling}function P2(A,e,t){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(xs,t)}catch{}switch(t.tag){case 5:ne||cn(t,e);case 6:var r=XA,n=qe;XA=null,Rt(A,e,t),XA=r,qe=n,XA!==null&&(qe?(A=XA,t=t.stateNode,A.nodeType===8?A.parentNode.removeChild(t):A.removeChild(t)):XA.removeChild(t.stateNode));break;case 18:XA!==null&&(qe?(A=XA,t=t.stateNode,A.nodeType===8?Ml(A.parentNode,t):A.nodeType===1&&Ml(A,t),jo(A)):Ml(XA,t.stateNode));break;case 4:r=XA,n=qe,XA=t.stateNode.containerInfo,qe=!0,Rt(A,e,t),XA=r,qe=n;break;case 0:case 11:case 14:case 15:if(!ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var o=n,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&au(t,e,i),n=n.next}while(n!==r)}Rt(A,e,t);break;case 1:if(!ne&&(cn(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){HA(t,e,a)}Rt(A,e,t);break;case 21:Rt(A,e,t);break;case 22:t.mode&1?(ne=(r=ne)||t.memoizedState!==null,Rt(A,e,t),ne=r):Rt(A,e,t);break;default:Rt(A,e,t)}}function Q0(A){var e=A.updateQueue;if(e!==null){A.updateQueue=null;var t=A.stateNode;t===null&&(t=A.stateNode=new vm),e.forEach(function(r){var n=Em.bind(null,A,r);t.has(r)||(t.add(r),r.then(n,n))})}}function We(A,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];try{var o=A,i=e,a=i;A:for(;a!==null;){switch(a.tag){case 5:XA=a.stateNode,qe=!1;break A;case 3:XA=a.stateNode.containerInfo,qe=!0;break A;case 4:XA=a.stateNode.containerInfo,qe=!0;break A}a=a.return}if(XA===null)throw Error(L(160));P2(o,i,n),XA=null,qe=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(l){HA(n,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V2(e,A),e=e.sibling}function V2(A,e){var t=A.alternate,r=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(We(e,A),ct(A),r&4){try{Ho(3,A,A.return),Ms(3,A)}catch(m){HA(A,A.return,m)}try{Ho(5,A,A.return)}catch(m){HA(A,A.return,m)}}break;case 1:We(e,A),ct(A),r&512&&t!==null&&cn(t,t.return);break;case 5:if(We(e,A),ct(A),r&512&&t!==null&&cn(t,t.return),A.flags&32){var n=A.stateNode;try{Oo(n,"")}catch(m){HA(A,A.return,m)}}if(r&4&&(n=A.stateNode,n!=null)){var o=A.memoizedProps,i=t!==null?t.memoizedProps:o,a=A.type,s=A.updateQueue;if(A.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(n,o),Mc(a,i);var l=Mc(a,o);for(i=0;i<s.length;i+=2){var c=s[i],u=s[i+1];c==="style"?ph(n,u):c==="dangerouslySetInnerHTML"?fh(n,u):c==="children"?Oo(n,u):sd(n,c,u,l)}switch(a){case"input":Hc(n,o);break;case"textarea":uh(n,o);break;case"select":var f=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?pn(n,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?pn(n,!!o.multiple,o.defaultValue,!0):pn(n,!!o.multiple,o.multiple?[]:"",!1))}n[Yo]=o}catch(m){HA(A,A.return,m)}}break;case 6:if(We(e,A),ct(A),r&4){if(A.stateNode===null)throw Error(L(162));n=A.stateNode,o=A.memoizedProps;try{n.nodeValue=o}catch(m){HA(A,A.return,m)}}break;case 3:if(We(e,A),ct(A),r&4&&t!==null&&t.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(m){HA(A,A.return,m)}break;case 4:We(e,A),ct(A);break;case 13:We(e,A),ct(A),n=A.child,n.flags&8192&&(o=n.memoizedState!==null,n.stateNode.isHidden=o,!o||n.alternate!==null&&n.alternate.memoizedState!==null||(Od=LA())),r&4&&Q0(A);break;case 22:if(c=t!==null&&t.memoizedState!==null,A.mode&1?(ne=(l=ne)||c,We(e,A),ne=l):We(e,A),ct(A),r&8192){if(l=A.memoizedState!==null,(A.stateNode.isHidden=l)&&!c&&A.mode&1)for(P=A,c=A.child;c!==null;){for(u=P=c;P!==null;){switch(f=P,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ho(4,f,f.return);break;case 1:cn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,t=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(m){HA(r,t,m)}}break;case 5:cn(f,f.return);break;case 22:if(f.memoizedState!==null){F0(u);continue}}h!==null?(h.return=f,P=h):F0(u)}c=c.sibling}A:for(c=null,u=A;;){if(u.tag===5){if(c===null){c=u;try{n=u.stateNode,l?(o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,s=u.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=gh("display",i))}catch(m){HA(A,A.return,m)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(m){HA(A,A.return,m)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===A)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===A)break A;for(;u.sibling===null;){if(u.return===null||u.return===A)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:We(e,A),ct(A),r&4&&Q0(A);break;case 21:break;default:We(e,A),ct(A)}}function ct(A){var e=A.flags;if(e&2){try{A:{for(var t=A.return;t!==null;){if(O2(t)){var r=t;break A}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(Oo(n,""),r.flags&=-33);var o=C0(A);cu(A,o,n);break;case 3:case 4:var i=r.stateNode.containerInfo,a=C0(A);lu(A,a,i);break;default:throw Error(L(161))}}catch(s){HA(A,A.return,s)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function mm(A,e,t){P=A,G2(A)}function G2(A,e,t){for(var r=(A.mode&1)!==0;P!==null;){var n=P,o=n.child;if(n.tag===22&&r){var i=n.memoizedState!==null||Li;if(!i){var a=n.alternate,s=a!==null&&a.memoizedState!==null||ne;a=Li;var l=ne;if(Li=i,(ne=s)&&!l)for(P=n;P!==null;)i=P,s=i.child,i.tag===22&&i.memoizedState!==null?U0(n):s!==null?(s.return=i,P=s):U0(n);for(;o!==null;)P=o,G2(o),o=o.sibling;P=n,Li=a,ne=l}y0(A)}else n.subtreeFlags&8772&&o!==null?(o.return=n,P=o):y0(A)}}function y0(A){for(;P!==null;){var e=P;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ne||Ms(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ne)if(t===null)r.componentDidMount();else{var n=e.elementType===e.type?t.memoizedProps:Ze(e.type,t.memoizedProps);r.componentDidUpdate(n,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&i0(e,o,r);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}i0(e,i,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&jo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ne||e.flags&512&&su(e)}catch(f){HA(e,e.return,f)}}if(e===A){P=null;break}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}}function F0(A){for(;P!==null;){var e=P;if(e===A){P=null;break}var t=e.sibling;if(t!==null){t.return=e.return,P=t;break}P=e.return}}function U0(A){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ms(4,e)}catch(s){HA(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(s){HA(e,n,s)}}var o=e.return;try{su(e)}catch(s){HA(e,o,s)}break;case 5:var i=e.return;try{su(e)}catch(s){HA(e,i,s)}}}catch(s){HA(e,e.return,s)}if(e===A){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var Cm=Math.ceil,As=Nt.ReactCurrentDispatcher,Nd=Nt.ReactCurrentOwner,Pe=Nt.ReactCurrentBatchConfig,rA=0,WA=null,TA=null,ZA=0,be=0,un=pr(0),RA=0,ti=null,Dr=0,_s=0,Rd=0,ko=null,pe=null,Od=0,Hn=1/0,Ut=null,es=!1,uu=null,ir=null,Si=!1,Jt=null,ts=0,Io=0,du=null,va=-1,wa=0;function ce(){return rA&6?LA():va!==-1?va:va=LA()}function ar(A){return A.mode&1?rA&2&&ZA!==0?ZA&-ZA:nm.transition!==null?(wa===0&&(wa=bh()),wa):(A=lA,A!==0||(A=window.event,A=A===void 0?16:Mh(A.type)),A):1}function nt(A,e,t,r){if(50<Io)throw Io=0,du=null,Error(L(185));li(A,t,r),(!(rA&2)||A!==WA)&&(A===WA&&(!(rA&2)&&(_s|=t),RA===4&&Xt(A,ZA)),Ce(A,r),t===1&&rA===0&&!(e.mode&1)&&(Hn=LA()+500,Is&&hr()))}function Ce(A,e){var t=A.callbackNode;nw(A,e);var r=Na(A,A===WA?ZA:0);if(r===0)t!==null&&Mf(t),A.callbackNode=null,A.callbackPriority=0;else if(e=r&-r,A.callbackPriority!==e){if(t!=null&&Mf(t),e===1)A.tag===0?rm(x0.bind(null,A)):qh(x0.bind(null,A)),qw(function(){!(rA&6)&&hr()}),t=null;else{switch(Eh(r)){case 1:t=fd;break;case 4:t=Uh;break;case 16:t=Da;break;case 536870912:t=xh;break;default:t=Da}t=Z2(t,j2.bind(null,A))}A.callbackPriority=e,A.callbackNode=t}}function j2(A,e){if(va=-1,wa=0,rA&6)throw Error(L(327));var t=A.callbackNode;if(mn()&&A.callbackNode!==t)return null;var r=Na(A,A===WA?ZA:0);if(r===0)return null;if(r&30||r&A.expiredLanes||e)e=rs(A,r);else{e=r;var n=rA;rA|=2;var o=$2();(WA!==A||ZA!==e)&&(Ut=null,Hn=LA()+500,br(A,e));do try{Fm();break}catch(a){z2(A,a)}while(!0);xd(),As.current=o,rA=n,TA!==null?e=0:(WA=null,ZA=0,e=RA)}if(e!==0){if(e===2&&(n=Nc(A),n!==0&&(r=n,e=fu(A,n))),e===1)throw t=ti,br(A,0),Xt(A,r),Ce(A,LA()),t;if(e===6)Xt(A,r);else{if(n=A.current.alternate,!(r&30)&&!Qm(n)&&(e=rs(A,r),e===2&&(o=Nc(A),o!==0&&(r=o,e=fu(A,o))),e===1))throw t=ti,br(A,0),Xt(A,r),Ce(A,LA()),t;switch(A.finishedWork=n,A.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:wr(A,pe,Ut);break;case 3:if(Xt(A,r),(r&130023424)===r&&(e=Od+500-LA(),10<e)){if(Na(A,0)!==0)break;if(n=A.suspendedLanes,(n&r)!==r){ce(),A.pingedLanes|=A.suspendedLanes&n;break}A.timeoutHandle=$c(wr.bind(null,A,pe,Ut),e);break}wr(A,pe,Ut);break;case 4:if(Xt(A,r),(r&4194240)===r)break;for(e=A.eventTimes,n=-1;0<r;){var i=31-rt(r);o=1<<i,i=e[i],i>n&&(n=i),r&=~o}if(r=n,r=LA()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){A.timeoutHandle=$c(wr.bind(null,A,pe,Ut),r);break}wr(A,pe,Ut);break;case 5:wr(A,pe,Ut);break;default:throw Error(L(329))}}}return Ce(A,LA()),A.callbackNode===t?j2.bind(null,A):null}function fu(A,e){var t=ko;return A.current.memoizedState.isDehydrated&&(br(A,e).flags|=256),A=rs(A,e),A!==2&&(e=pe,pe=t,e!==null&&gu(e)),A}function gu(A){pe===null?pe=A:pe.push.apply(pe,A)}function Qm(A){for(var e=A;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var n=t[r],o=n.getSnapshot;n=n.value;try{if(!at(o(),n))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(A,e){for(e&=~Rd,e&=~_s,A.suspendedLanes|=e,A.pingedLanes&=~e,A=A.expirationTimes;0<e;){var t=31-rt(e),r=1<<t;A[t]=-1,e&=~r}}function x0(A){if(rA&6)throw Error(L(327));mn();var e=Na(A,0);if(!(e&1))return Ce(A,LA()),null;var t=rs(A,e);if(A.tag!==0&&t===2){var r=Nc(A);r!==0&&(e=r,t=fu(A,r))}if(t===1)throw t=ti,br(A,0),Xt(A,e),Ce(A,LA()),t;if(t===6)throw Error(L(345));return A.finishedWork=A.current.alternate,A.finishedLanes=e,wr(A,pe,Ut),Ce(A,LA()),null}function Pd(A,e){var t=rA;rA|=1;try{return A(e)}finally{rA=t,rA===0&&(Hn=LA()+500,Is&&hr())}}function Nr(A){Jt!==null&&Jt.tag===0&&!(rA&6)&&mn();var e=rA;rA|=1;var t=Pe.transition,r=lA;try{if(Pe.transition=null,lA=1,A)return A()}finally{lA=r,Pe.transition=t,rA=e,!(rA&6)&&hr()}}function Vd(){be=un.current,vA(un)}function br(A,e){A.finishedWork=null,A.finishedLanes=0;var t=A.timeoutHandle;if(t!==-1&&(A.timeoutHandle=-1,Zw(t)),TA!==null)for(t=TA.return;t!==null;){var r=t;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:bn(),vA(we),vA(ie),Ld();break;case 5:Id(r);break;case 4:bn();break;case 13:vA(UA);break;case 19:vA(UA);break;case 10:bd(r.type._context);break;case 22:case 23:Vd()}t=t.return}if(WA=A,TA=A=sr(A.current,null),ZA=be=e,RA=0,ti=null,Rd=_s=Dr=0,pe=ko=null,Qr!==null){for(e=0;e<Qr.length;e++)if(t=Qr[e],r=t.interleaved,r!==null){t.interleaved=null;var n=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=n,r.next=i}t.pending=r}Qr=null}return A}function z2(A,e){do{var t=TA;try{if(xd(),pa.current=qa,Za){for(var r=xA.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}Za=!1}if(Tr=0,jA=DA=xA=null,Eo=!1,qo=0,Nd.current=null,t===null||t.return===null){RA=1,ti=e,TA=null;break}A:{var o=A,i=t.return,a=t,s=e;if(e=ZA,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var l=s,c=a,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=f0(i);if(h!==null){h.flags&=-257,g0(h,i,a,o,e),h.mode&1&&d0(o,l,e),e=h,s=l;var v=e.updateQueue;if(v===null){var m=new Set;m.add(s),e.updateQueue=m}else v.add(s);break A}else{if(!(e&1)){d0(o,l,e),Gd();break A}s=Error(L(426))}}else if(yA&&a.mode&1){var x=f0(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),g0(x,i,a,o,e),Fd(En(s,a));break A}}o=s=En(s,a),RA!==4&&(RA=2),ko===null?ko=[o]:ko.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=H2(o,s,e);o0(o,g);break A;case 1:a=s;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ir===null||!ir.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var C=k2(o,a,e);o0(o,C);break A}}o=o.return}while(o!==null)}X2(t)}catch(y){e=y,TA===t&&t!==null&&(TA=t=t.return);continue}break}while(!0)}function $2(){var A=As.current;return As.current=qa,A===null?qa:A}function Gd(){(RA===0||RA===3||RA===2)&&(RA=4),WA===null||!(Dr&268435455)&&!(_s&268435455)||Xt(WA,ZA)}function rs(A,e){var t=rA;rA|=2;var r=$2();(WA!==A||ZA!==e)&&(Ut=null,br(A,e));do try{ym();break}catch(n){z2(A,n)}while(!0);if(xd(),rA=t,As.current=r,TA!==null)throw Error(L(261));return WA=null,ZA=0,RA}function ym(){for(;TA!==null;)W2(TA)}function Fm(){for(;TA!==null&&!Xv();)W2(TA)}function W2(A){var e=J2(A.alternate,A,be);A.memoizedProps=A.pendingProps,e===null?X2(A):TA=e,Nd.current=null}function X2(A){var e=A;do{var t=e.alternate;if(A=e.return,e.flags&32768){if(t=Bm(t,e),t!==null){t.flags&=32767,TA=t;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{RA=6,TA=null;return}}else if(t=hm(t,e,be),t!==null){TA=t;return}if(e=e.sibling,e!==null){TA=e;return}TA=e=A}while(e!==null);RA===0&&(RA=5)}function wr(A,e,t){var r=lA,n=Pe.transition;try{Pe.transition=null,lA=1,Um(A,e,t,r)}finally{Pe.transition=n,lA=r}return null}function Um(A,e,t,r){do mn();while(Jt!==null);if(rA&6)throw Error(L(327));t=A.finishedWork;var n=A.finishedLanes;if(t===null)return null;if(A.finishedWork=null,A.finishedLanes=0,t===A.current)throw Error(L(177));A.callbackNode=null,A.callbackPriority=0;var o=t.lanes|t.childLanes;if(ow(A,o),A===WA&&(TA=WA=null,ZA=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Si||(Si=!0,Z2(Da,function(){return mn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=lA;lA=1;var a=rA;rA|=4,Nd.current=null,wm(A,t),V2(t,A),jw(jc),Ra=!!Gc,jc=Gc=null,A.current=t,mm(t),Yv(),rA=a,lA=i,Pe.transition=o}else A.current=t;if(Si&&(Si=!1,Jt=A,ts=n),o=A.pendingLanes,o===0&&(ir=null),qv(t.stateNode),Ce(A,LA()),e!==null)for(r=A.onRecoverableError,t=0;t<e.length;t++)n=e[t],r(n.value,{componentStack:n.stack,digest:n.digest});if(es)throw es=!1,A=uu,uu=null,A;return ts&1&&A.tag!==0&&mn(),o=A.pendingLanes,o&1?A===du?Io++:(Io=0,du=A):Io=0,hr(),null}function mn(){if(Jt!==null){var A=Eh(ts),e=Pe.transition,t=lA;try{if(Pe.transition=null,lA=16>A?16:A,Jt===null)var r=!1;else{if(A=Jt,Jt=null,ts=0,rA&6)throw Error(L(331));var n=rA;for(rA|=4,P=A.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var l=a[s];for(P=l;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Ho(8,c,o)}var u=c.child;if(u!==null)u.return=c,P=u;else for(;P!==null;){c=P;var f=c.sibling,h=c.return;if(R2(c),c===l){P=null;break}if(f!==null){f.return=h,P=f;break}P=h}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else A:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ho(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break A}P=o.return}}var d=A.current;for(P=d;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else A:for(i=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ms(9,a)}}catch(y){HA(a,a.return,y)}if(a===i){P=null;break A}var C=a.sibling;if(C!==null){C.return=a.return,P=C;break A}P=a.return}}if(rA=n,hr(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(xs,A)}catch{}r=!0}return r}finally{lA=t,Pe.transition=e}}return!1}function b0(A,e,t){e=En(t,e),e=H2(A,e,1),A=or(A,e,1),e=ce(),A!==null&&(li(A,1,e),Ce(A,e))}function HA(A,e,t){if(A.tag===3)b0(A,A,t);else for(;e!==null;){if(e.tag===3){b0(e,A,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){A=En(t,A),A=k2(e,A,1),e=or(e,A,1),A=ce(),e!==null&&(li(e,1,A),Ce(e,A));break}}e=e.return}}function xm(A,e,t){var r=A.pingCache;r!==null&&r.delete(e),e=ce(),A.pingedLanes|=A.suspendedLanes&t,WA===A&&(ZA&t)===t&&(RA===4||RA===3&&(ZA&130023424)===ZA&&500>LA()-Od?br(A,0):Rd|=t),Ce(A,e)}function Y2(A,e){e===0&&(A.mode&1?(e=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):e=1);var t=ce();A=Kt(A,e),A!==null&&(li(A,e,t),Ce(A,t))}function bm(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),Y2(A,t)}function Em(A,e){var t=0;switch(A.tag){case 13:var r=A.stateNode,n=A.memoizedState;n!==null&&(t=n.retryLane);break;case 19:r=A.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),Y2(A,t)}var J2;J2=function(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps||we.current)he=!0;else{if(!(A.lanes&t)&&!(e.flags&128))return he=!1,pm(A,e,t);he=!!(A.flags&131072)}else he=!1,yA&&e.flags&1048576&&A2(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(A,e),A=e.pendingProps;var n=Fn(e,ie.current);wn(e,t),n=Md(null,e,r,A,n,t);var o=_d();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,me(r)?(o=!0,ja(e)):o=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Hd(e),n.updater=Ls,e.stateNode=n,n._reactInternals=e,Au(e,r,A,t),e=ru(null,e,r,!0,o,t)):(e.tag=0,yA&&o&&Qd(e),le(null,e,n,t),e=e.child),e;case 16:r=e.elementType;A:{switch(Ba(A,e),A=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=km(r),A=Ze(r,A),n){case 0:e=tu(null,e,r,A,t);break A;case 1:e=B0(null,e,r,A,t);break A;case 11:e=p0(null,e,r,A,t);break A;case 14:e=h0(null,e,r,Ze(r.type,A),t);break A}throw Error(L(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),tu(A,e,r,n,t);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),B0(A,e,r,n,t);case 3:A:{if(M2(e),A===null)throw Error(L(387));r=e.pendingProps,o=e.memoizedState,n=o.element,n2(A,e),Ya(e,r,null,t);var i=e.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){n=En(Error(L(423)),e),e=v0(A,e,r,t,n);break A}else if(r!==n){n=En(Error(L(424)),e),e=v0(A,e,r,t,n);break A}else for(Ee=nr(e.stateNode.containerInfo.firstChild),He=e,yA=!0,At=null,t=s2(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Un(),r===n){e=Tt(A,e,t);break A}le(A,e,r,t)}e=e.child}return e;case 5:return l2(e),A===null&&Jc(e),r=e.type,n=e.pendingProps,o=A!==null?A.memoizedProps:null,i=n.children,zc(r,n)?i=null:o!==null&&zc(r,o)&&(e.flags|=32),S2(A,e),le(A,e,i,t),e.child;case 6:return A===null&&Jc(e),null;case 13:return _2(A,e,t);case 4:return kd(e,e.stateNode.containerInfo),r=e.pendingProps,A===null?e.child=xn(e,null,r,t):le(A,e,r,t),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),p0(A,e,r,n,t);case 7:return le(A,e,e.pendingProps,t),e.child;case 8:return le(A,e,e.pendingProps.children,t),e.child;case 12:return le(A,e,e.pendingProps.children,t),e.child;case 10:A:{if(r=e.type._context,n=e.pendingProps,o=e.memoizedProps,i=n.value,fA(Wa,r._currentValue),r._currentValue=i,o!==null)if(at(o.value,i)){if(o.children===n.children&&!we.current){e=Tt(A,e,t);break A}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=It(-1,t&-t),s.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Zc(o.return,t,e),a.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===e.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(L(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Zc(i,t,e),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}le(A,e,n.children,t),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,wn(e,t),n=Ge(n),r=r(n),e.flags|=1,le(A,e,r,t),e.child;case 14:return r=e.type,n=Ze(r,e.pendingProps),n=Ze(r.type,n),h0(A,e,r,n,t);case 15:return I2(A,e,e.type,e.pendingProps,t);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),Ba(A,e),e.tag=1,me(r)?(A=!0,ja(e)):A=!1,wn(e,t),i2(e,r,n),Au(e,r,n,t),ru(null,e,r,!0,A,t);case 19:return K2(A,e,t);case 22:return L2(A,e,t)}throw Error(L(156,e.tag))};function Z2(A,e){return Fh(A,e)}function Hm(A,e,t,r){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(A,e,t,r){return new Hm(A,e,t,r)}function jd(A){return A=A.prototype,!(!A||!A.isReactComponent)}function km(A){if(typeof A=="function")return jd(A)?1:0;if(A!=null){if(A=A.$$typeof,A===cd)return 11;if(A===ud)return 14}return 2}function sr(A,e){var t=A.alternate;return t===null?(t=Ne(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&14680064,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t}function ma(A,e,t,r,n,o){var i=2;if(r=A,typeof A=="function")jd(A)&&(i=1);else if(typeof A=="string")i=5;else A:switch(A){case An:return Er(t.children,n,o,e);case ld:i=8,n|=8;break;case Fc:return A=Ne(12,t,e,n|2),A.elementType=Fc,A.lanes=o,A;case Uc:return A=Ne(13,t,e,n),A.elementType=Uc,A.lanes=o,A;case xc:return A=Ne(19,t,e,n),A.elementType=xc,A.lanes=o,A;case ah:return Ks(t,n,o,e);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case oh:i=10;break A;case ih:i=9;break A;case cd:i=11;break A;case ud:i=14;break A;case jt:i=16,r=null;break A}throw Error(L(130,A==null?A:typeof A,""))}return e=Ne(i,t,e,n),e.elementType=A,e.type=r,e.lanes=o,e}function Er(A,e,t,r){return A=Ne(7,A,r,e),A.lanes=t,A}function Ks(A,e,t,r){return A=Ne(22,A,r,e),A.elementType=ah,A.lanes=t,A.stateNode={isHidden:!1},A}function Pl(A,e,t){return A=Ne(6,A,null,e),A.lanes=t,A}function Vl(A,e,t){return e=Ne(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}function Im(A,e,t,r,n){this.tag=e,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function zd(A,e,t,r,n,o,i,a,s){return A=new Im(A,e,t,a,s),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ne(3,null,null,e),A.current=o,o.stateNode=A,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(o),A}function Lm(A,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:A,containerInfo:e,implementation:t}}function q2(A){if(!A)return dr;A=A._reactInternals;A:{if(Or(A)!==A||A.tag!==1)throw Error(L(170));var e=A;do{switch(e.tag){case 3:e=e.stateNode.context;break A;case 1:if(me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break A}}e=e.return}while(e!==null);throw Error(L(171))}if(A.tag===1){var t=A.type;if(me(t))return Zh(A,t,e)}return e}function AB(A,e,t,r,n,o,i,a,s){return A=zd(t,r,!0,A,n,o,i,a,s),A.context=q2(null),t=A.current,r=ce(),n=ar(t),o=It(r,n),o.callback=e??null,or(t,o,n),A.current.lanes=n,li(A,n,r),Ce(A,r),A}function Ts(A,e,t,r){var n=e.current,o=ce(),i=ar(n);return t=q2(t),e.context===null?e.context=t:e.pendingContext=t,e=It(o,i),e.payload={element:A},r=r===void 0?null:r,r!==null&&(e.callback=r),A=or(n,e,i),A!==null&&(nt(A,n,i,o),ga(A,n,i)),i}function ns(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function E0(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function $d(A,e){E0(A,e),(A=A.alternate)&&E0(A,e)}function Sm(){return null}var eB=typeof reportError=="function"?reportError:function(A){console.error(A)};function Wd(A){this._internalRoot=A}Ds.prototype.render=Wd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(L(409));Ts(A,e,null,null)};Ds.prototype.unmount=Wd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Nr(function(){Ts(null,A,null,null)}),e[_t]=null}};function Ds(A){this._internalRoot=A}Ds.prototype.unstable_scheduleHydration=function(A){if(A){var e=Ih();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Wt.length&&e!==0&&e<Wt[t].priority;t++);Wt.splice(t,0,A),t===0&&Sh(A)}};function Xd(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Ns(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function H0(){}function Mm(A,e,t,r,n){if(n){if(typeof r=="function"){var o=r;r=function(){var l=ns(i);o.call(l)}}var i=AB(e,r,A,0,null,!1,!1,"",H0);return A._reactRootContainer=i,A[_t]=i.current,Wo(A.nodeType===8?A.parentNode:A),Nr(),i}for(;n=A.lastChild;)A.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var l=ns(s);a.call(l)}}var s=zd(A,0,!1,null,null,!1,!1,"",H0);return A._reactRootContainer=s,A[_t]=s.current,Wo(A.nodeType===8?A.parentNode:A),Nr(function(){Ts(e,s,t,r)}),s}function Rs(A,e,t,r,n){var o=t._reactRootContainer;if(o){var i=o;if(typeof n=="function"){var a=n;n=function(){var s=ns(i);a.call(s)}}Ts(e,i,A,n)}else i=Mm(t,e,A,n,r);return ns(i)}Hh=function(A){switch(A.tag){case 3:var e=A.stateNode;if(e.current.memoizedState.isDehydrated){var t=lo(e.pendingLanes);t!==0&&(gd(e,t|1),Ce(e,LA()),!(rA&6)&&(Hn=LA()+500,hr()))}break;case 13:Nr(function(){var r=Kt(A,1);if(r!==null){var n=ce();nt(r,A,1,n)}}),$d(A,1)}};pd=function(A){if(A.tag===13){var e=Kt(A,134217728);if(e!==null){var t=ce();nt(e,A,134217728,t)}$d(A,134217728)}};kh=function(A){if(A.tag===13){var e=ar(A),t=Kt(A,e);if(t!==null){var r=ce();nt(t,A,e,r)}$d(A,e)}};Ih=function(){return lA};Lh=function(A,e){var t=lA;try{return lA=A,e()}finally{lA=t}};Kc=function(A,e,t){switch(e){case"input":if(Hc(A,t),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==A&&r.form===A.form){var n=ks(r);if(!n)throw Error(L(90));lh(r),Hc(r,n)}}}break;case"textarea":uh(A,t);break;case"select":e=t.value,e!=null&&pn(A,!!t.multiple,e,!1)}};vh=Pd;wh=Nr;var _m={usingClientEntryPoint:!1,Events:[ui,nn,ks,hh,Bh,Pd]},eo={findFiberByHostInstance:Cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Km={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=Qh(A),A===null?null:A.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||Sm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{xs=Mi.inject(Km),ht=Mi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_m;Ie.createPortal=function(A,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(L(200));return Lm(A,e,null,t)};Ie.createRoot=function(A,e){if(!Xd(A))throw Error(L(299));var t=!1,r="",n=eB;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=zd(A,1,!1,null,null,t,!1,r,n),A[_t]=e.current,Wo(A.nodeType===8?A.parentNode:A),new Wd(e)};Ie.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(L(188)):(A=Object.keys(A).join(","),Error(L(268,A)));return A=Qh(e),A=A===null?null:A.stateNode,A};Ie.flushSync=function(A){return Nr(A)};Ie.hydrate=function(A,e,t){if(!Ns(e))throw Error(L(200));return Rs(null,A,e,!0,t)};Ie.hydrateRoot=function(A,e,t){if(!Xd(A))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,n=!1,o="",i=eB;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=AB(e,null,A,1,t??null,n,!1,o,i),A[_t]=e.current,Wo(A),r)for(A=0;A<r.length;A++)t=r[A],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);return new Ds(e)};Ie.render=function(A,e,t){if(!Ns(e))throw Error(L(200));return Rs(null,A,e,!1,t)};Ie.unmountComponentAtNode=function(A){if(!Ns(A))throw Error(L(40));return A._reactRootContainer?(Nr(function(){Rs(null,null,A,!1,function(){A._reactRootContainer=null,A[_t]=null})}),!0):!1};Ie.unstable_batchedUpdates=Pd;Ie.unstable_renderSubtreeIntoContainer=function(A,e,t,r){if(!Ns(t))throw Error(L(200));if(A==null||A._reactInternals===void 0)throw Error(L(38));return Rs(A,e,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function tB(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tB)}catch(A){console.error(A)}}tB(),Ah.exports=Ie;var Tm=Ah.exports,k0=Tm;Qc.createRoot=k0.createRoot,Qc.hydrateRoot=k0.hydrateRoot;var F=function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},F.apply(this,arguments)};function Yd(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function EA(A,e){var t=typeof Symbol=="function"&&A[Symbol.iterator];if(!t)return A;var r=t.call(A),n,o=[],i;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)o.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return o}function os(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}function D(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}function is(A){"@babel/helpers - typeof";return is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},is(A)}var Dm=/^\s+/,Nm=/\s+$/;function V(A,e){if(A=A||"",e=e||{},A instanceof V)return A;if(!(this instanceof V))return new V(A,e);var t=Rm(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}V.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,o,i,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*a},setAlpha:function(e){return this._a=rB(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=L0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=L0(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=I0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=I0(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return S0(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Gm(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(CA(this._r,255)*100)+"%",g:Math.round(CA(this._g,255)*100)+"%",b:Math.round(CA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(CA(this._r,255)*100)+"%, "+Math.round(CA(this._g,255)*100)+"%, "+Math.round(CA(this._b,255)*100)+"%)":"rgba("+Math.round(CA(this._r,255)*100)+"%, "+Math.round(CA(this._g,255)*100)+"%, "+Math.round(CA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:tC[S0(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+M0(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=V(e);r="#"+M0(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return V(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(Wm,arguments)},brighten:function(){return this._applyModification(Xm,arguments)},darken:function(){return this._applyModification(Ym,arguments)},desaturate:function(){return this._applyModification(jm,arguments)},saturate:function(){return this._applyModification(zm,arguments)},greyscale:function(){return this._applyModification($m,arguments)},spin:function(){return this._applyModification(Jm,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(AC,arguments)},complement:function(){return this._applyCombination(Zm,arguments)},monochromatic:function(){return this._applyCombination(eC,arguments)},splitcomplement:function(){return this._applyCombination(qm,arguments)},triad:function(){return this._applyCombination(_0,[3])},tetrad:function(){return this._applyCombination(_0,[4])}};V.fromRatio=function(A,e){if(is(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=uo(A[r]));A=t}return V(A,e)};function Rm(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,o=null,i=!1,a=!1;return typeof A=="string"&&(A=iC(A)),is(A)=="object"&&(Ct(A.r)&&Ct(A.g)&&Ct(A.b)?(e=Om(A.r,A.g,A.b),i=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Ct(A.h)&&Ct(A.s)&&Ct(A.v)?(r=uo(A.s),n=uo(A.v),e=Vm(A.h,r,n),i=!0,a="hsv"):Ct(A.h)&&Ct(A.s)&&Ct(A.l)&&(r=uo(A.s),o=uo(A.l),e=Pm(A.h,r,o),i=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=rB(t),{ok:i,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Om(A,e,t){return{r:CA(A,255)*255,g:CA(e,255)*255,b:CA(t,255)*255}}function I0(A,e,t){A=CA(A,255),e=CA(e,255),t=CA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=(r+n)/2;if(r==n)o=i=0;else{var s=r-n;switch(i=a>.5?s/(2-r-n):s/(r+n),r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,l:a}}function Pm(A,e,t){var r,n,o;A=CA(A,360),e=CA(e,100),t=CA(t,100);function i(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=i(s,a,A+1/3),n=i(s,a,A),o=i(s,a,A-1/3)}return{r:r*255,g:n*255,b:o*255}}function L0(A,e,t){A=CA(A,255),e=CA(e,255),t=CA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=r,s=r-n;if(i=r===0?0:s/r,r==n)o=0;else{switch(r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,v:a}}function Vm(A,e,t){A=CA(A,360)*6,e=CA(e,100),t=CA(t,100);var r=Math.floor(A),n=A-r,o=t*(1-e),i=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,i,o,o,a,t][s],c=[a,t,t,i,o,o][s],u=[o,o,a,t,t,i][s];return{r:l*255,g:c*255,b:u*255}}function S0(A,e,t,r){var n=[et(Math.round(A).toString(16)),et(Math.round(e).toString(16)),et(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Gm(A,e,t,r,n){var o=[et(Math.round(A).toString(16)),et(Math.round(e).toString(16)),et(Math.round(t).toString(16)),et(nB(r))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function M0(A,e,t,r){var n=[et(nB(r)),et(Math.round(A).toString(16)),et(Math.round(e).toString(16)),et(Math.round(t).toString(16))];return n.join("")}V.equals=function(A,e){return!A||!e?!1:V(A).toRgbString()==V(e).toRgbString()};V.random=function(){return V.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function jm(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.s-=e/100,t.s=Os(t.s),V(t)}function zm(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.s+=e/100,t.s=Os(t.s),V(t)}function $m(A){return V(A).desaturate(100)}function Wm(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.l+=e/100,t.l=Os(t.l),V(t)}function Xm(A,e){e=e===0?0:e||10;var t=V(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),V(t)}function Ym(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.l-=e/100,t.l=Os(t.l),V(t)}function Jm(A,e){var t=V(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,V(t)}function Zm(A){var e=V(A).toHsl();return e.h=(e.h+180)%360,V(e)}function _0(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=V(A).toHsl(),r=[V(A)],n=360/e,o=1;o<e;o++)r.push(V({h:(t.h+o*n)%360,s:t.s,l:t.l}));return r}function qm(A){var e=V(A).toHsl(),t=e.h;return[V(A),V({h:(t+72)%360,s:e.s,l:e.l}),V({h:(t+216)%360,s:e.s,l:e.l})]}function AC(A,e,t){e=e||6,t=t||30;var r=V(A).toHsl(),n=360/t,o=[V(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,o.push(V(r));return o}function eC(A,e){e=e||6;for(var t=V(A).toHsv(),r=t.h,n=t.s,o=t.v,i=[],a=1/e;e--;)i.push(V({h:r,s:n,v:o})),o=(o+a)%1;return i}V.mix=function(A,e,t){t=t===0?0:t||50;var r=V(A).toRgb(),n=V(e).toRgb(),o=t/100,i={r:(n.r-r.r)*o+r.r,g:(n.g-r.g)*o+r.g,b:(n.b-r.b)*o+r.b,a:(n.a-r.a)*o+r.a};return V(i)};V.readability=function(A,e){var t=V(A),r=V(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};V.isReadable=function(A,e,t){var r=V.readability(A,e),n,o;switch(o=!1,n=aC(t),n.level+n.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};V.mostReadable=function(A,e,t){var r=null,n=0,o,i,a,s;t=t||{},i=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)o=V.readability(A,e[l]),o>n&&(n=o,r=V(e[l]));return V.isReadable(A,r,{level:a,size:s})||!i?r:(t.includeFallbackColors=!1,V.mostReadable(A,["#fff","#000"],t))};var pu=V.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},tC=V.hexNames=rC(pu);function rC(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function rB(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function CA(A,e){nC(A)&&(A="100%");var t=oC(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function Os(A){return Math.min(1,Math.max(0,A))}function Qe(A){return parseInt(A,16)}function nC(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function oC(A){return typeof A=="string"&&A.indexOf("%")!=-1}function et(A){return A.length==1?"0"+A:""+A}function uo(A){return A<=1&&(A=A*100+"%"),A}function nB(A){return Math.round(parseFloat(A)*255).toString(16)}function K0(A){return Qe(A)/255}var Xe=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ct(A){return!!Xe.CSS_UNIT.exec(A)}function iC(A){A=A.replace(Dm,"").replace(Nm,"").toLowerCase();var e=!1;if(pu[A])A=pu[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Xe.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Xe.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Xe.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Xe.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Xe.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Xe.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Xe.hex8.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),a:K0(t[4]),format:e?"name":"hex8"}:(t=Xe.hex6.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),format:e?"name":"hex"}:(t=Xe.hex4.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),a:K0(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Xe.hex3.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function aC(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}var Ue={},Ps={exports:{}},to={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function sC(){if(T0)return to;T0=1;var A=Ve,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(a,s,l){var c,u={},f=null,h=null;l!==void 0&&(f=""+l),s.key!==void 0&&(f=""+s.key),s.ref!==void 0&&(h=s.ref);for(c in s)r.call(s,c)&&!o.hasOwnProperty(c)&&(u[c]=s[c]);if(a&&a.defaultProps)for(c in s=a.defaultProps,s)u[c]===void 0&&(u[c]=s[c]);return{$$typeof:e,type:a,key:f,ref:h,props:u,_owner:n.current}}return to.Fragment=t,to.jsx=i,to.jsxs=i,to}(function(A){A.exports=sC()})(Ps);const kn=Ps.exports.Fragment,B=Ps.exports.jsx,R=Ps.exports.jsxs;var hA="-ms-",Lo="-moz-",oA="-webkit-",oB="comm",Vs="rule",Jd="decl",lC="@import",iB="@keyframes",cC="@layer",aB=Math.abs,Zd=String.fromCharCode,hu=Object.assign;function uC(A,e){return zA(A,0)^45?(((e<<2^zA(A,0))<<2^zA(A,1))<<2^zA(A,2))<<2^zA(A,3):0}function sB(A){return A.trim()}function xt(A,e){return(A=e.exec(A))?A[0]:A}function Z(A,e,t){return A.replace(e,t)}function Ca(A,e,t){return A.indexOf(e,t)}function zA(A,e){return A.charCodeAt(e)|0}function In(A,e,t){return A.slice(e,t)}function ft(A){return A.length}function lB(A){return A.length}function fo(A,e){return e.push(A),A}function dC(A,e){return A.map(e).join("")}function D0(A,e){return A.filter(function(t){return!xt(t,e)})}var Gs=1,Ln=1,cB=0,ze=0,MA=0,jn="";function js(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:Gs,column:Ln,length:i,return:"",siblings:a}}function Ot(A,e){return hu(js("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Vr(A){for(;A.root;)A=Ot(A.root,{children:[A]});fo(A,A.siblings)}function fC(){return MA}function gC(){return MA=ze>0?zA(jn,--ze):0,Ln--,MA===10&&(Ln=1,Gs--),MA}function ot(){return MA=ze<cB?zA(jn,ze++):0,Ln++,MA===10&&(Ln=1,Gs++),MA}function Hr(){return zA(jn,ze)}function Qa(){return ze}function zs(A,e){return In(jn,A,e)}function Bu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pC(A){return Gs=Ln=1,cB=ft(jn=A),ze=0,[]}function hC(A){return jn="",A}function Gl(A){return sB(zs(ze-1,vu(A===91?A+2:A===40?A+1:A)))}function BC(A){for(;(MA=Hr())&&MA<33;)ot();return Bu(A)>2||Bu(MA)>3?"":" "}function vC(A,e){for(;--e&&ot()&&!(MA<48||MA>102||MA>57&&MA<65||MA>70&&MA<97););return zs(A,Qa()+(e<6&&Hr()==32&&ot()==32))}function vu(A){for(;ot();)switch(MA){case A:return ze;case 34:case 39:A!==34&&A!==39&&vu(MA);break;case 40:A===41&&vu(A);break;case 92:ot();break}return ze}function wC(A,e){for(;ot()&&A+MA!==57&&!(A+MA===84&&Hr()===47););return"/*"+zs(e,ze-1)+"*"+Zd(A===47?A:ot())}function mC(A){for(;!Bu(Hr());)ot();return zs(A,ze)}function CC(A){return hC(ya("",null,null,null,[""],A=pC(A),0,[0],A))}function ya(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,f=0,h=0,v=0,m=1,x=1,g=1,d=0,p="",C=n,y=o,w=r,Q=p;x;)switch(v=d,d=ot()){case 40:if(v!=108&&zA(Q,u-1)==58){Ca(Q+=Z(Gl(d),"&","&\f"),"&\f",aB(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=Gl(d);break;case 9:case 10:case 13:case 32:Q+=BC(v);break;case 92:Q+=vC(Qa()-1,7);continue;case 47:switch(Hr()){case 42:case 47:fo(QC(wC(ot(),Qa()),e,t,s),s);break;default:Q+="/"}break;case 123*m:a[l++]=ft(Q)*g;case 125*m:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:g==-1&&(Q=Z(Q,/\f/g,"")),h>0&&ft(Q)-u&&fo(h>32?R0(Q+";",r,t,u-1,s):R0(Z(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(fo(w=N0(Q,e,t,l,c,n,a,p,C=[],y=[],u,o),o),d===123)if(c===0)ya(Q,e,w,w,C,o,u,a,y);else switch(f===99&&zA(Q,3)===110?100:f){case 100:case 108:case 109:case 115:ya(A,w,w,r&&fo(N0(A,w,w,0,0,n,a,p,n,C=[],u,y),y),n,y,u,a,r?C:y);break;default:ya(Q,w,w,w,[""],y,0,a,y)}}l=c=h=0,m=g=1,p=Q="",u=i;break;case 58:u=1+ft(Q),h=v;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&gC()==125)continue}switch(Q+=Zd(d),d*m){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(ft(Q)-1)*g,g=1;break;case 64:Hr()===45&&(Q+=Gl(ot())),f=Hr(),c=u=ft(p=Q+=mC(Qa())),d++;break;case 45:v===45&&ft(Q)==2&&(m=0)}}return o}function N0(A,e,t,r,n,o,i,a,s,l,c,u){for(var f=n-1,h=n===0?o:[""],v=lB(h),m=0,x=0,g=0;m<r;++m)for(var d=0,p=In(A,f+1,f=aB(x=i[m])),C=A;d<v;++d)(C=sB(x>0?h[d]+" "+p:Z(p,/&\f/g,h[d])))&&(s[g++]=C);return js(A,e,t,n===0?Vs:a,s,l,c,u)}function QC(A,e,t,r){return js(A,e,t,oB,Zd(fC()),In(A,2,-2),0,r)}function R0(A,e,t,r,n){return js(A,e,t,Jd,In(A,0,r),In(A,r+1,-1),r,n)}function uB(A,e,t){switch(uC(A,e)){case 5103:return oA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oA+A+A;case 4789:return Lo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return oA+A+Lo+A+hA+A+A;case 5936:switch(zA(A,e+11)){case 114:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return oA+A+hA+A+A;case 6165:return oA+A+hA+"flex-"+A+A;case 5187:return oA+A+Z(A,/(\w+).+(:[^]+)/,oA+"box-$1$2"+hA+"flex-$1$2")+A;case 5443:return oA+A+hA+"flex-item-"+Z(A,/flex-|-self/g,"")+(xt(A,/flex-|baseline/)?"":hA+"grid-row-"+Z(A,/flex-|-self/g,""))+A;case 4675:return oA+A+hA+"flex-line-pack"+Z(A,/align-content|flex-|-self/g,"")+A;case 5548:return oA+A+hA+Z(A,"shrink","negative")+A;case 5292:return oA+A+hA+Z(A,"basis","preferred-size")+A;case 6060:return oA+"box-"+Z(A,"-grow","")+oA+A+hA+Z(A,"grow","positive")+A;case 4554:return oA+Z(A,/([^-])(transform)/g,"$1"+oA+"$2")+A;case 6187:return Z(Z(Z(A,/(zoom-|grab)/,oA+"$1"),/(image-set)/,oA+"$1"),A,"")+A;case 5495:case 3959:return Z(A,/(image-set\([^]*)/,oA+"$1$`$1");case 4968:return Z(Z(A,/(.+:)(flex-)?(.*)/,oA+"box-pack:$3"+hA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oA+A+A;case 4200:if(!xt(A,/flex-|baseline/))return hA+"grid-column-align"+In(A,e)+A;break;case 2592:case 3360:return hA+Z(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,xt(r.props,/grid-\w+-end/)})?~Ca(A+(t=t[e].value),"span",0)?A:hA+Z(A,"-start","")+A+hA+"grid-row-span:"+(~Ca(t,"span",0)?xt(t,/\d+/):+xt(t,/\d+/)-+xt(A,/\d+/))+";":hA+Z(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return xt(r.props,/grid-\w+-start/)})?A:hA+Z(Z(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return Z(A,/(.+)-inline(.+)/,oA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(A)-1-e>6)switch(zA(A,e+1)){case 109:if(zA(A,e+4)!==45)break;case 102:return Z(A,/(.+:)(.+)-([^]+)/,"$1"+oA+"$2-$3$1"+Lo+(zA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Ca(A,"stretch",0)?uB(Z(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return Z(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return hA+n+":"+o+l+(i?hA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if(zA(A,e+6)===121)return Z(A,":",":"+oA)+A;break;case 6444:switch(zA(A,zA(A,14)===45?18:11)){case 120:return Z(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oA+(zA(A,14)===45?"inline-":"")+"box$3$1"+oA+"$2$3$1"+hA+"$2box$3")+A;case 100:return Z(A,":",":"+hA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(A,"scroll-","scroll-snap-")+A}return A}function as(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function yC(A,e,t,r){switch(A.type){case cC:if(A.children.length)break;case lC:case Jd:return A.return=A.return||A.value;case oB:return"";case iB:return A.return=A.value+"{"+as(A.children,r)+"}";case Vs:if(!ft(A.value=A.props.join(",")))return""}return ft(t=as(A.children,r))?A.return=A.value+"{"+t+"}":""}function FC(A){var e=lB(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function UC(A){return function(e){e.root||(e=e.return)&&A(e)}}function xC(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case Jd:A.return=uB(A.value,A.length,t);return;case iB:return as([Ot(A,{value:Z(A.value,"@","@"+oA)})],r);case Vs:if(A.length)return dC(t=A.props,function(n){switch(xt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(Ot(A,{props:[Z(n,/:(read-\w+)/,":"+Lo+"$1")]})),Vr(Ot(A,{props:[n]})),hu(A,{props:D0(t,r)});break;case"::placeholder":Vr(Ot(A,{props:[Z(n,/:(plac\w+)/,":"+oA+"input-$1")]})),Vr(Ot(A,{props:[Z(n,/:(plac\w+)/,":"+Lo+"$1")]})),Vr(Ot(A,{props:[Z(n,/:(plac\w+)/,hA+"input-$1")]})),Vr(Ot(A,{props:[n]})),hu(A,{props:D0(t,r)});break}return""})}}var bC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",dB="active",fB="data-styled-version",$s="6.1.12",qd=`/*!sc*/
`,ss=typeof window<"u"&&"HTMLElement"in window,EC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Ws=Object.freeze([]),Mn=Object.freeze({});function HC(A,e,t){return t===void 0&&(t=Mn),A.theme!==t.theme&&A.theme||e||t.theme}var gB=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),kC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,IC=/(^-|-$)/g;function O0(A){return A.replace(kC,"-").replace(IC,"")}var LC=/(a)(d)/gi,_i=52,P0=function(A){return String.fromCharCode(A+(A>25?39:97))};function wu(A){var e,t="";for(e=Math.abs(A);e>_i;e=e/_i|0)t=P0(e%_i)+t;return(P0(e%_i)+t).replace(LC,"$1-$2")}var jl,pB=5381,dn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},hB=function(A){return dn(pB,A)};function SC(A){return wu(hB(A)>>>0)}function MC(A){return A.displayName||A.name||"Component"}function zl(A){return typeof A=="string"&&!0}var BB=typeof Symbol=="function"&&Symbol.for,vB=BB?Symbol.for("react.memo"):60115,_C=BB?Symbol.for("react.forward_ref"):60112,KC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},DC=((jl={})[_C]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jl[vB]=wB,jl);function V0(A){return("type"in(e=A)&&e.type.$$typeof)===vB?wB:"$$typeof"in A?DC[A.$$typeof]:KC;var e}var NC=Object.defineProperty,RC=Object.getOwnPropertyNames,G0=Object.getOwnPropertySymbols,OC=Object.getOwnPropertyDescriptor,PC=Object.getPrototypeOf,j0=Object.prototype;function mB(A,e,t){if(typeof e!="string"){if(j0){var r=PC(e);r&&r!==j0&&mB(A,r,t)}var n=RC(e);G0&&(n=n.concat(G0(e)));for(var o=V0(A),i=V0(e),a=0;a<n.length;++a){var s=n[a];if(!(s in TC||t&&t[s]||i&&s in i||o&&s in o)){var l=OC(e,s);try{NC(A,s,l)}catch{}}}}return A}function _n(A){return typeof A=="function"}function Af(A){return typeof A=="object"&&"styledComponentId"in A}function Fr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function z0(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ri(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function mu(A,e,t){if(t===void 0&&(t=!1),!t&&!ri(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=mu(A[r],e[r]);else if(ri(e))for(var r in e)A[r]=mu(A[r],e[r]);return A}function ef(A,e){Object.defineProperty(A,"toString",{value:e})}function fi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var VC=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw fi(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(qd);return t},A}(),Fa=new Map,ls=new Map,Ua=1,Ki=function(A){if(Fa.has(A))return Fa.get(A);for(;ls.has(Ua);)Ua++;var e=Ua++;return Fa.set(A,e),ls.set(e,A),e},GC=function(A,e){Ua=e+1,Fa.set(A,e),ls.set(e,A)},jC="style[".concat(Sn,"][").concat(fB,'="').concat($s,'"]'),zC=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$C=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},WC=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(qd),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(zC);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(GC(c,l),$C(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},$0=function(A){for(var e=document.querySelectorAll(jC),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(Sn)!==dB&&(WC(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function XC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var CB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sn,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(Sn,dB),r.setAttribute(fB,$s);var i=XC();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},YC=function(){function A(e){this.element=CB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw fi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),JC=function(){function A(e){this.element=CB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),ZC=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),W0=ss,qC={isServer:!ss,useCSSOMInjection:!EC},QB=function(){function A(e,t,r){e===void 0&&(e=Mn),t===void 0&&(t={});var n=this;this.options=F(F({},qC),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ss&&W0&&(W0=!1,$0(this)),ef(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var f=function(g){return ls.get(g)}(u);if(f===void 0)return"continue";var h=o.names.get(f),v=i.getGroup(u);if(h===void 0||!h.size||v.length===0)return"continue";var m="".concat(Sn,".g").concat(u,'[id="').concat(f,'"]'),x="";h!==void 0&&h.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(m,'{content:"').concat(x,'"}').concat(qd)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Ki(e)},A.prototype.rehydrate=function(){!this.server&&ss&&$0(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(F(F({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new ZC(n):r?new YC(n):new JC(n)}(this.options),new VC(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Ki(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Ki(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Ki(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),A3=/&/g,e3=/^\s*\/\/.*$/gm;function yB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=yB(t.children,e)),t})}function t3(A){var e,t,r,n=A===void 0?Mn:A,o=n.options,i=o===void 0?Mn:o,a=n.plugins,s=a===void 0?Ws:a,l=function(f,h,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):f},c=s.slice();c.push(function(f){f.type===Vs&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(A3,t).replace(r,l))}),i.prefix&&c.push(xC),c.push(yC);var u=function(f,h,v,m){h===void 0&&(h=""),v===void 0&&(v=""),m===void 0&&(m="&"),e=m,t=h,r=new RegExp("\\".concat(t,"\\b"),"g");var x=f.replace(e3,""),g=CC(v||h?"".concat(v," ").concat(h," { ").concat(x," }"):x);i.namespace&&(g=yB(g,i.namespace));var d=[];return as(g,FC(c.concat(UC(function(p){return d.push(p)})))),d};return u.hash=s.length?s.reduce(function(f,h){return h.name||fi(15),dn(f,h.name)},pB).toString():"",u}var r3=new QB,Cu=t3(),FB=Ve.createContext({shouldForwardProp:void 0,styleSheet:r3,stylis:Cu});FB.Consumer;Ve.createContext(void 0);function X0(){return k.useContext(FB)}var n3=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=Cu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ef(this,function(){throw fi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Cu),this.name+e.hash},A}(),o3=function(A){return A>="A"&&A<="Z"};function Y0(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;o3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var UB=function(A){return A==null||A===!1||A===""},xB=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!UB(o)&&(Array.isArray(o)&&o.isCss||_n(o)?r.push("".concat(Y0(n),":"),o,";"):ri(o)?r.push.apply(r,os(os(["".concat(n," {")],xB(o),!1),["}"],!1)):r.push("".concat(Y0(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in bC||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function kr(A,e,t,r){if(UB(A))return[];if(Af(A))return[".".concat(A.styledComponentId)];if(_n(A)){if(!_n(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return kr(n,e,t,r)}var o;return A instanceof n3?t?(A.inject(t,r),[A.getName(r)]):[A]:ri(A)?xB(A):Array.isArray(A)?Array.prototype.concat.apply(Ws,A.map(function(i){return kr(i,e,t,r)})):[A.toString()]}function i3(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(_n(t)&&!Af(t))return!1}return!0}var a3=hB($s),s3=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&i3(e),this.componentId=t,this.baseHash=dn(a3,t),this.baseStyle=r,QB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Fr(n,this.staticRulesId);else{var o=z0(kr(this.rules,e,t,r)),i=wu(dn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=Fr(n,i),this.staticRulesId=i}else{for(var s=dn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var f=z0(kr(u,e,t,r));s=dn(s,f+c),l+=f}}if(l){var h=wu(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),n=Fr(n,h)}}return n},A}(),bB=Ve.createContext(void 0);bB.Consumer;var $l={};function l3(A,e,t){var r=Af(A),n=A,o=!zl(A),i=e.attrs,a=i===void 0?Ws:i,s=e.componentId,l=s===void 0?function(C,y){var w=typeof C!="string"?"sc":O0(C);$l[w]=($l[w]||0)+1;var Q="".concat(w,"-").concat(SC($s+w+$l[w]));return y?"".concat(y,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return zl(C)?"styled.".concat(C):"Styled(".concat(MC(C),")")}(A):c,f=e.displayName&&e.componentId?"".concat(O0(e.displayName),"-").concat(e.componentId):e.componentId||l,h=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var m=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,y){return m(C,y)&&x(C,y)}}else v=m}var g=new s3(t,f,r?n.componentStyle:void 0);function d(C,y){return function(w,Q,b){var H=w.attrs,M=w.componentStyle,AA=w.defaultProps,Y=w.foldedComponentIds,$=w.styledComponentId,S=w.target,G=Ve.useContext(bB),T=X0(),J=w.shouldForwardProp||T.shouldForwardProp,E=HC(Q,G,AA)||Mn,I=function(nA,sA,gA){for(var PA,wA=F(F({},sA),{className:void 0,theme:gA}),lt=0;lt<nA.length;lt+=1){var Se=_n(PA=nA[lt])?PA(wA):PA;for(var SA in Se)wA[SA]=SA==="className"?Fr(wA[SA],Se[SA]):SA==="style"?F(F({},wA[SA]),Se[SA]):Se[SA]}return sA.className&&(wA.className=Fr(wA.className,sA.className)),wA}(H,Q,E),O=I.as||S,z={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===E||(W==="forwardedAs"?z.as=I.forwardedAs:J&&!J(W,O)||(z[W]=I[W]));var FA=function(nA,sA){var gA=X0(),PA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return PA}(M,I),uA=Fr(Y,$);return FA&&(uA+=" "+FA),I.className&&(uA+=" "+I.className),z[zl(O)&&!gB.has(O)?"class":"className"]=uA,z.ref=b,k.createElement(O,z)}(p,C,y)}d.displayName=u;var p=Ve.forwardRef(d);return p.attrs=h,p.componentStyle=g,p.displayName=u,p.shouldForwardProp=v,p.foldedComponentIds=r?Fr(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=f,p.target=r?n.target:A,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(y){for(var w=[],Q=1;Q<arguments.length;Q++)w[Q-1]=arguments[Q];for(var b=0,H=w;b<H.length;b++)mu(y,H[b],!0);return y}({},n.defaultProps,C):C}}),ef(p,function(){return".".concat(p.styledComponentId)}),o&&mB(p,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function J0(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var Z0=function(A){return Object.assign(A,{isCss:!0})};function c3(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(_n(A)||ri(A))return Z0(kr(J0(Ws,os([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?kr(r):Z0(kr(J0(r,e)))}function Qu(A,e,t){if(t===void 0&&(t=Mn),!e)throw fi(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,c3.apply(void 0,os([n],o,!1)))};return r.attrs=function(n){return Qu(A,e,F(F({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Qu(A,e,F(F({},t),n))},r}var EB=function(A){return Qu(l3,A)},K=EB;gB.forEach(function(A){K[A]=EB(A)});k.forwardRef(function(A,e){var t=A.placement,r=t===void 0?"rt":t,n=A.gap,o=n===void 0?8:n,i=A.offsetData,a=A.hover,s=a===void 0?!1:a,l=A.hoverShow,c=l===void 0?!1:l,u=A.innerStyle,f=A.innerClassName,h=f===void 0?"":f,v=A.content,m=A.style,x=A.className,g=x===void 0?"":x,d=A.children,p=A.zIndex,C=p===void 0?0:p,y=k.useMemo(function(){return!s&&!c},[s,c]),w=EA(k.useState(s||!c),2),Q=w[0],b=w[1];return R(u3,F({ref:e,className:g,style:m,onMouseOver:function(){y||b(!s)},onMouseLeave:function(){y||b(!!s)}},{children:[d,v&&B(d3,F({className:"land-sffixContainer-inner ".concat(h),style:F({left:i!=null&&i.left||r==="lt"||r==="lb"?o:"auto",right:i!=null&&i.right||r==="rt"||r==="rb"?o:"auto",top:i!=null&&i.top||r==="lt"||r==="rt"?o:"auto",bottom:i!=null&&i.bottom||r==="lb"||r==="rb"?o:"auto",opacity:y||Q?1:0},u),onClick:function(H){return H.stopPropagation()},hoverShow:c,zIndex:C},{children:v}))]}))});var u3=K.div(q0||(q0=D([`
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
`]))),d3=K.div(A1||(A1=D([`
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
`])),function(A){return A.hoverShow?0:1},function(A){var e;return(e=A.zIndex)!==null&&e!==void 0?e:0}),q0,A1;K.nav(e1||(e1=D([`
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
`])));var e1,f3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"IconArrowLine ".concat(s)},{children:[B("path",{d:"M24 42V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 30L24 42L12 30",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},g3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M31 17L24 24L17 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M31 26L24 33L17 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},p3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})}))},h3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{d:"M36 19L24 31L12 19H36Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s,strokeLinejoin:"round"})}))},B3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24.0083 33.8995V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 22L24 34L12 22",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 42H12",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},v3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 9L42 9",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 19L42 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 26L24 40L42 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},w3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M44 20H28V4",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M4 28H20V44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},m3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},C3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:s},{children:[B("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Q3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 6H42V15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 33V42H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M15 42H6V33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 15V6H15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},y3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 7V16H41",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 7V16H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 41V32H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 41V32H40.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},F3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38 7L44 13L38 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},U3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?3:o,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"cursor-pointer ".concat(l),onClick:c},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},x3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M23.9917 6H6V42H24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 33L42 24L33 15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 23.9917H42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},b3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 8V17H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},E3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 9V17H14",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},H3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M19 6V42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7 17.8994L19 5.89941",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006V6.10059",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006L41 30.1006",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},k3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18 28L10 33L4 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},I3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},L3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},S3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M42 8V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 24L6 40",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},M3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M16 24L22 30L34 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},_3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:t})}))},K3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},T3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},D3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:t})}))},N3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},R3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.style,i=A.className;return B("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:n,strokeWidth:"2"})}))},O3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:t})}))},P3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},V3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},G3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},j3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},z3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},$3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},W3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},X3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFile":a,l=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:n,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M43 22H5",stroke:n,strokeWidth:"4",strokeLinejoin:"round"})]}))},Y3=function(A){var e=A.size,t=e===void 0?16:e,r=A.fill,n=r===void 0?"currentcolor":r,o=A.className,i=o===void 0?"IconMore":o,a=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:i,style:a},{children:[B("circle",{cx:"12",cy:"24",r:"4",fill:n}),B("circle",{cx:"24",cy:"24",r:"4",fill:n}),B("circle",{cx:"36",cy:"24",r:"4",fill:n})]}))},J3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFileLine":a,l=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M7.94971 11.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 23.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 35.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Z3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=A.className,a=i===void 0?"IconAdd":i,s=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:a,style:s},{children:[B("path",{d:"M24.0605 10L24.0239 38",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M10 24L38 24",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},q3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o,a=A.className,s=a===void 0?"IconClear":a,l=A.style,c=A.onClick;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l,onClick:c},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},AQ=function(A){var e=A.size,t=e===void 0?20:e,r=A.fill,n=r===void 0?"currentcolor":r;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:n}),B("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:n}),B("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:n}),B("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:n}),B("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:n}),B("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:n}),B("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:n}),B("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:n}),B("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:n})]}))},eQ=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?3:o,a=A.className,s=a===void 0?"":a;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",className:s,xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 15L24 6L15 15",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 32V6",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},tQ=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},rQ=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?20:n,i=A.strokeWidth,a=i===void 0?2:i;return R("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})]}))},nQ=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r;return B("svg",F({width:n,height:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{children:B("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}))},oQ=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?16:n,i=A.strokeWidth,a=i===void 0?2:i,s=A.className,l=s===void 0?"IconCopy":s;return R("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",className:l},{children:[B("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-linecap":"round","stroke-linejoin":"round"}),B("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-width":"2","stroke-linejoin":"round"})]}))},iQ=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:t,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M19 29V42H29V29H19Z",stroke:t,strokeWidth:i,strokeLinejoin:"round"})]}))},OA=function(A){var e=A.name,t=Yd(A,["name"]);switch(e){case"arrow-line":return B(f3,F({},t));case"arrow-double":return B(g3,F({},t));case"arrow":return B(p3,F({},t));case"arrow-triangle":return B(h3,F({},t));case"arrow-to":return B(B3,F({},t));case"toggle":return B(v3,F({},t));case"collapse":return B(w3,F({},t));case"collection":return B(m3,F({},t));case"zoom-out":return B(Q3,F({},t));case"zoom-in":return B(y3,F({},t));case"loop":return B(F3,F({},t));case"download":return B(U3,F({},t));case"out":return B(x3,F({},t));case"reload":return B(b3,F({},t));case"undo":return B(E3,F({},t));case"sort":return B(H3,F({},t));case"back":return B(k3,F({},t));case"ahead":return B(I3,F({},t));case"drag":return B(L3,F({},t));case"refresh":return B(S3,F({},t));case"check-stroke":return B(M3,F({},t));case"check-fill":return B(_3,F({},t));case"check":return B(K3,F({},t));case"error-stroke":return B(T3,F({},t));case"error-fill":return B(D3,F({},t));case"error":return B(N3,F({},t));case"info-stroke":return B(R3,F({},t));case"info-fill":return B(O3,F({},t));case"info":return B(P3,F({},t));case"attention-stroke":return B(V3,F({},t));case"attention-fill":return B(G3,F({},t));case"attention":return B(j3,F({},t));case"question-stroke":return B(z3,F({},t));case"question-fill":return B($3,F({},t));case"question":return B(W3,F({},t));case"more":return B(Y3,F({},t));case"more-line":return B(J3,F({},t));case"file":return B(X3,F({},t));case"add":return B(Z3,F({},t));case"clear":return B(q3,F({},t));case"upload":return B(eQ,F({},t));case"application":return B(AQ,F({},t));case"close":return B(tQ,F({},t));case"close-circle":return B(rQ,F({},t));case"color-picker":return B(nQ,F({},t));case"copy":return B(oQ,F({},t));case"home":return B(iQ,F({},t));case"search":return B(C3,F({},t))}},t1;(function(A){A.BG="background",A.BORDER="border"})(t1||(t1={}));var Lt=function(A){var e=A.content,t=A.theme,r=t===void 0?"light":t,n=A.placement,o=n===void 0?"top":n,i=A.style,a=A.className,s=a===void 0?"":a;return R(aQ,F({className:"land-pop ".concat(r," ").concat(s),style:F({top:o==="bottom"?"100%":o==="top"?"auto":"50%",bottom:o==="top"?"100%":"",left:o==="right"?"100%":o==="left"?"auto":"50%",right:o==="left"?"100%":"",transform:"translate(".concat(o==="top"||o==="bottom"?"-50%":o==="left"?"-12px":"12px",", ").concat(o==="top"?"-12px":o==="bottom"?"12px":"-50%",")")},i)},{children:[e,B("div",{className:"land-pop-arrow",style:{left:o==="left"?"100%":o==="right"?"0":"50%",top:o==="top"?"100%":o==="bottom"?"0px":"50%",bottom:o==="bottom"?"100%":"",transform:"translate(".concat("-50%",", ").concat("-50%",") rotate(").concat(o==="top"?"45":o==="bottom"?"-135":o==="right"?"135":"-45","deg)")}})]}))},aQ=K.div(r1||(r1=D([`
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
`]))),r1;K.div(n1||(n1=D([`
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
`])));var n1,Cn=function(A){var e=A.text,t=A.subText,r=A.icon,n=A.width,o=A.height,i=A.justify,a=i===void 0?"center":i,s=A.type,l=s===void 0?"border":s,c=A.status,u=c===void 0?"default":c,f=A.disabled,h=A.pop,v=A.PopProps,m=A.href,x=A.target,g=x===void 0?"_blank":x,d=A.onClick,p=A.children,C=A.style,y=A.className,w=y===void 0?"":y,Q=k.useMemo(function(){if(r){if(!e&&!t)return!0}else return!1},[r,e,t]),b=k.useMemo(function(){switch(u){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[u]);return B(kn,{children:m?R(sQ,F({href:m,target:g,className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(f?"disabled":""," ").concat(h?"hover-pop":""," ").concat(w),style:C,width:n,height:o,justify:a,color:b,onClick:function(H){return d==null?void 0:d(H)}},{children:[p,r,!Q&&R("div",{children:[B("span",{children:e}),B("span",F({className:"subText"},{children:t}))]}),h&&B(Lt,F({content:h},v))]})):R(HB,F({className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(f?"disabled":""," ").concat(h?"hover-pop":""," ").concat(w),style:C,width:n,height:o,justify:a,color:b,onClick:function(H){return d==null?void 0:d(H)}},{children:[p,r,!Q&&R("div",{children:[B("span",{children:e}),t&&B("span",F({className:"subText"},{children:t}))]}),h&&B(Lt,F({content:h},v))]}))})},HB=K.div(o1||(o1=D([`
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
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"3)")},function(A){return"".concat(A.color,"3)")}),sQ=K.a(i1||(i1=D([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),HB),o1,i1,lQ=function(A){var e=A.checked,t=e===void 0?!1:e,r=A.text,n=r===void 0?"选项":r,o=A.pop,i=A.onChange;return R(cQ,{children:[R(uQ,F({onClick:function(){i==null||i()}},{children:[B(dQ,F({className:"".concat(t?"checked":"")},{children:B(OA,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})})),n]})),o&&R(fQ,F({className:"hover-pop"},{children:[B(OA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(Lt,{content:o,theme:"dark",style:{maxWidth:"200px"},placement:"right"})]}))]})},cQ=K.div(a1||(a1=D([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`]))),uQ=K.div(s1||(s1=D([`
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
`]))),dQ=K.div(l1||(l1=D([`
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
`]))),fQ=K.div(c1||(c1=D([`
  position: relative;
  height: 16px;
  line-height: 16px;
`],[`
  position: relative;
  height: 16px;
  line-height: 16px;
`]))),a1,s1,l1,c1;K.div(u1||(u1=D([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));K.div(d1||(d1=D([`
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
`])));K.div(f1||(f1=D([`
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
`])));K.div(g1||(g1=D([`
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
`])));K.div(p1||(p1=D([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var u1,d1,f1,g1,p1;K.div(h1||(h1=D([`
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
`])),function(A){return"-".concat(A.gap*2,"px")},function(A){return"-".concat(A.gap*2,"px")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"".concat(A.size,"px solid var(--color-primary-6)")},function(A){return"".concat(A.radius,"px")},function(A){return A.checked?1:0});var h1,Xs=function(A){var e=A.children,t=A.style,r=A.className,n=EA(k.useState(132),2),o=n[0],i=n[1],a=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return k.useEffect(function(){var l,c;a?l=a.getBoundingClientRect().height:l=0,s?c=s.getBoundingClientRect().height:c=0,i(l+c)}),B(gQ,F({className:r,style:t,minHeight:o},{children:e}))},gQ=K.main(B1||(B1=D([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.minHeight,"px)")}),B1,So=function(A){var e=A.type,t=e===void 0?"border":e,r=A.value,n=A.inputType,o=n===void 0?"text":n,i=A.placeholder,a=i===void 0?"请输入":i,s=A.prefix,l=A.useSearch,c=l===void 0?!1:l,u=A.width,f=A.maxLength,h=A.showClear,v=h===void 0?!0:h,m=A.disabled,x=A.onChange,g=A.onFocus,d=A.className,p=A.wrapStyle,C=Yd(A,["type","value","inputType","placeholder","prefix","useSearch","width","maxLength","showClear","disabled","onChange","onFocus","className","wrapStyle"]),y=EA(k.useState(r),2),w=y[0],Q=y[1];return k.useEffect(function(){return Q(r)},[r]),R(pQ,F({className:"land-input ".concat(m?"disabled":""," ").concat(t," ").concat(d),style:F({width:typeof u=="number"?"".concat(u,"px"):u},p)},{children:[c&&B(OA,{name:"search",stroke:"var(--color-text-5)"}),s&&B("p",F({className:"input-prefix"},{children:s})),B("input",F({placeholder:a,type:o,value:w,max:f,onClick:function(b){return b.stopPropagation()},onFocus:function(b){b.stopPropagation(),g==null||g(b)},onChange:function(b){b.stopPropagation(),x==null||x(b.target.value,b)}},C)),!!w&&v&&B(OA,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:function(){return Q("")}})]}))},pQ=K.div(v1||(v1=D([`
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
`]))),v1,oe=function(A){var e=A.w,t=e===void 0?"100%":e,r=A.h,n=A.column,o=A.wrap,i=A.justify,a=i===void 0?"start":i,s=A.align,l=s===void 0?"start":s,c=A.gap,u=A.bothCenter,f=A.children,h=A.style,v=A.className,m=v===void 0?"":v;return B(hQ,F({className:m,style:h,width:t,height:r,direction:n?"column":"row",gap:typeof c=="number"?"".concat(c,"px"):c,wrap:o,justify:u?"center":a,align:u?"center":l},{children:f}))},hQ=K.div(w1||(w1=D([`
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
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height}),w1,kB=function(A){var e=A.show,t=e===void 0?!1:e,r=A.type,n=r===void 0?"default":r,o=A.text,i=o===void 0?"咕噜咕噜～":o,a=A.style,s=A.className,l=s===void 0?"":s,c=EA(k.useState(t),2),u=c[0],f=c[1];k.useEffect(function(){f(t)},[t]),k.useEffect(function(){if(u){var v=setTimeout(function(){f(!1)},1e3);return function(){return clearTimeout(v)}}},[u]);var h=k.useMemo(function(){switch(n){case"default":return{color:"white",background:"black",icon:null}}},[n]);return B(BQ,F({className:"StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ".concat(u?"show":"close"," ").concat(l),style:F({color:h==null?void 0:h.color,backgroundColor:h==null?void 0:h.background},a)},{children:i}))},BQ=K.div(m1||(m1=D([`
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
`]))),m1,vQ=[["#e9e9e9","#d9d9d9","#c4c4c4","#9d9d9d"],["#7b7b7b","#5c5c5c","#333333","#262626"],["#efccbd","#d39f9d","#c4726d","#ac3526"],["#f6e3bd","#ebbd6f","#df964a","#c76336"],["#fbf2d4","#f7e7ab","#f4db86","#ebbc58"],["#dee9d7","#bdd992","#9dbe56","#758d3a"],["#e7f6fd","#9dd9f8","#81bde5","#4f84eb"],["#cdc7ee","#877cda","#4249ac","#313fa4"],["#f6e6fb","#d69aeb","#b253d3","#8a31c4"]],C1=function(A){var e,t=A.value,r=t===void 0?"#ffffff":t,n=A.size,o=n===void 0?48:n,i=A.useSelect,a=i===void 0?!0:i,s=A.showList,l=s===void 0?!1:s,c=A.defaultColorList,u=A.showOpacity,f=u===void 0?!0:u,h=A.input,v=h===void 0?!1:h,m=A.info,x=A.active,g=x===void 0?!1:x,d=A.onChange,p=A.onClick,C=A.onCardClick,y=A.children,w=A.className,Q=A.style,b=EA(k.useState(!1),2),H=b[0],M=b[1],AA=EA(k.useState(r?r==="transparent"?"transparent":r:"#ffffff"),2),Y=AA[0],$=AA[1],S=EA(k.useState(r.split("#")[1]),2),G=S[0],T=S[1],J=EA(k.useState(100),2),E=J[0],I=J[1],O=EA(k.useState(0),2),z=O[0],W=O[1],FA=EA(k.useState(0),2),uA=FA[0],nA=FA[1],sA=EA(k.useState(0),2),gA=sA[0],PA=sA[1],wA=k.useCallback(function(X,VA){if(VA===void 0&&(VA=100),X!=="transparent"){var Me=V(X),fe=Me.toRgb(),pl=fe.r,hl=fe.g,Bl=fe.b;return"rgba(".concat(pl,", ").concat(hl,", ").concat(Bl,", ").concat(VA/100,")")}return X},[]);k.useEffect(function(){if(r)if(r==="transparent")$("transparent");else{var X=V(r).toHsv(),VA=X.h,Me=X.s,fe=X.v;W(VA),!fl&&nA(Me),!fl&&PA(fe),$(r),T(r.split("#")[1])}},[r]);var lt=k.useMemo(function(){var X=V("hsv(".concat(z,",").concat(1,",").concat(1,")")).toHex();return"#".concat(X)},[z]),Se=function(X){if(X==="transparent")$("transparent");else{var VA=V(X).toHsv();W(VA.h),nA(VA.s),PA(VA.v)}},SA=EA(k.useState(!1),2),cv=SA[0],Bi=SA[1];k.useEffect(function(){var X=V("hsv(".concat(z,",").concat(uA,",").concat(gA,")")).toHex();!cv&&T(X),$("#".concat(X))},[z,uA,gA]);var ae=12,Bf=EA(k.useState(!1),2),fl=Bf[0],gl=Bf[1],vf=function(X){var VA=X.target.getBoundingClientRect(),Me=X.clientX-VA.left,fe=X.clientY-VA.top;Me>=ae/2&&Me<=VA.width-ae?nA((Me-ae/2)/(VA.width-ae)):Me<ae/2?nA(0):nA(1),fe>=ae/2&&fe<=VA.height-ae?PA(1-(fe-ae/2)/(VA.height-ae)):fe<ae/2?PA(1):PA(0),d==null||d(wA(Y,E))},wf=EA(k.useState(""),2),mf=wf[0],uv=wf[1],Cf=function(X){navigator.clipboard.writeText(X),uv("已复制～".concat(X))};return R(wQ,F({className:"land-color-picker ".concat(w),style:F({cursor:a?"pointer":"default"},Q),color:r,size:typeof o=="string"?o:"".concat(o,"px")},{children:[B(kB,{show:!!mf,text:mf}),B("div",F({className:"land-color-trigger",onClick:function(X){X.stopPropagation(),M(!H),document.addEventListener("click",function(){M(!1)}),C==null||C()}},{children:y||R(kn,{children:[B("div",F({className:"land-color-grid hover-pop ".concat(g?"active":""),style:{backgroundColor:Y==="transparent"?"transparent":wA(Y,E)}},{children:m&&B(Lt,{content:m,theme:"dark"})})),typeof v!="boolean"?R("div",F({className:"land-color-label copy flex items-center justify-center",onClick:function(){return Cf==null?void 0:Cf(r)}},{children:[v,typeof v=="string"&&B(OA,{name:"copy",size:12,stroke:"var(--color-text-5)"})]})):v?B(So,{type:"border",prefix:"#",maxLength:6,value:G,w:o,onFocus:function(){return Bi(!0)},onChange:function(X){T(String(X)),Se("#".concat(X))},onBlur:function(){d==null||d(wA("#".concat(G),E)),Bi(!1)},wrapStyle:{height:24,width:"calc(100% + 16px)",fontSize:"12px",padding:"0px 6px"}}):R("p",F({className:"land-color-label"},{children:["#",G]}))]})})),a&&R(mQ,F({className:"land-color-drop ".concat(H?"show":""),onClick:function(X){return X.stopPropagation()}},{children:[B(CQ,F({className:"StyledColorGrid",svColor:lt,onMouseMove:function(X){return fl&&vf(X)},onMouseDown:function(X){X.preventDefault(),vf(X),gl(!0)},onMouseUp:function(){gl(!1),p==null||p(wA(Y,E))},onMouseLeave:function(){return gl(!1)}},{children:B("div",{className:"color-thumb",style:{left:ae/2+uA*(180-ae),top:ae/2+(86-ae)-gA*(86-ae)}})})),R(oe,F({column:!0,gap:8},{children:[B(Q1,{type:"range",max:360,value:z,step:1,currentColor:Y,onChange:function(X){return W(Number(X.target.value))}}),f&&B(QQ,{children:B(Q1,{type:"range",step:1,max:100,value:E,className:"opacity",currentColor:lt,onChange:function(X){I(X.target.value),d==null||d(wA(Y,E))}})})]})),R("div",F({className:"flex gap-8"},{children:[B(So,{type:"background",className:"flex-2",prefix:"#",maxLength:6,value:G,onFocus:function(){return Bi(!0)},onChange:function(X){T(String(X)),Se("#".concat(X))},onBlur:function(){d==null||d(wA("#".concat(G),E)),Bi(!1)}}),f&&B(So,{type:"background",className:"flex-1",max:100,min:0,value:String(E),onChange:function(X){I(Number(X)),d==null||d(wA(Y,Number(gA)))}})]})),l&&B(yQ,F({className:"land-colorPicker-default-list"},{children:(e=c||vQ)===null||e===void 0?void 0:e.map(function(X,VA){return B(oe,F({column:!0,gap:4,style:{width:"18px"}},{children:X==null?void 0:X.map(function(Me){return B("div",{style:{backgroundColor:Me},className:"land-colorPicker-default-item",onClick:function(){var fe=V(Me).toHsv(),pl=fe.h,hl=fe.s,Bl=fe.v;nA(hl),W(pl),PA(Bl),d==null||d(wA(Me,E))}},VA)})}))})}))]}))]}))},wQ=K.div(y1||(y1=D([`
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
`])),function(A){return A.size},function(A){return A.color}),mQ=K.div(F1||(F1=D([`
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
`]))),CQ=K.div(U1||(U1=D([`
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
`])),function(A){return A.svColor}),Q1=K.input(x1||(x1=D([`
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
`])),function(A){return"linear-gradient(to right, rgba(0,0,0,0), ".concat(A.currentColor,")")},function(A){return A.currentColor}),QQ=K.div(b1||(b1=D([`
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
`]))),yQ=K.div(E1||(E1=D([`
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
`]))),y1,F1,U1,x1,b1,E1;K.a(H1||(H1=D([`
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
`])));var H1,IB=function(A){var e=A.direction,t=e===void 0?"row":e,r=A.size,n=r===void 0?1:r,o=A.lang,i=o===void 0?"100%":o,a=A.margin,s=a===void 0?0:a,l=A.type,c=l===void 0?"solid":l,u=A.color,f=u===void 0?"var(--color-border-2)":u,h=A.content,v=A.align,m=v===void 0?"center":v,x=A.style,g=A.className,d=g===void 0?"":g;return R(FQ,F({className:"land-divider ".concat(d),style:F({width:t==="row"?"".concat(i):"".concat(n,"px"),height:t==="column"?"".concat(i):"".concat(n,"px"),margin:t==="row"?"".concat(s,"px 0"):"0 ".concat(s,"px")},x),direction:t,gap:h?"8px":""},{children:[B("div",{style:{flex:m==="left"?"10%":m==="right"?"90%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(f):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(f):"none"}}),h&&R(kn,{children:[B("div",F({style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"}},{children:h})),B("div",{style:{flex:m==="left"?"90%":m==="right"?"10%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(f):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(f):"none"}})]})]}))},FQ=K.div(k1||(k1=D([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap}),k1;K.div(I1||(I1=D([`
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
`])));K.div(L1||(L1=D([`
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
`])),function(A){return A.placement==="left"?"0":"unset"},function(A){return A.placement==="right"?"0":"unset"});K.ul(S1||(S1=D([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`])));K.li(M1||(M1=D([`
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
`])));var I1,L1,S1,M1;K.footer(_1||(_1=D([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var _1,K1;(function(A){A.ColumnFit="column-fit",A.ColumnFill="column-fill",A.RowFit="row-fit",A.RowFill="row-fill",A.ColumnRepeat="column-repeat",A.RowRepeat="row-repeat",A.Default="default"})(K1||(K1={}));var cs;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(cs||(cs={}));var tf=function(A){var e=A.active,t=A.data,r=A.direction,n=r===void 0?"row":r,o=A.theme,i=o===void 0?{hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"}:o,a=A.border,s=a===void 0?!0:a,l=A.onChange,c=A.onDropChange,u=A.dropProps,f=A.itemStyle,h=A.itemClassName,v=h===void 0?"":h,m=A.style,x=A.className,g=x===void 0?"":x;return B(UQ,F({className:"land-menu ".concat(g),style:m,column:n==="column",border:s},{children:t==null?void 0:t.map(function(d){return R("div",F({className:"land-menu-item ".concat(d.clickType===cs.SIMPLE?"simple":""," ").concat(d.clickType===cs.DISABLED?"disabled":""),style:f},{children:[R(xQ,F({role:"button",className:"land-menu-link ".concat(e===d.key?"active":""," ").concat(v),onClick:function(){return l==null?void 0:l(d)},column:n==="column",theme:i},{children:[typeof d.icon=="string"?B("img",{src:d.icon,className:"land-menu-icon"}):d.icon,B("p",F({className:"land-menu-title","data-title":d.title},{children:d.title})),B("span",F({className:"land-menu-sub-title"},{children:d.subTitle})),d.isNew&&B("i",F({className:"land-menu-new"},{children:typeof d.isNew=="boolean"?"NEW":d.isNew}))]}),d.key),d.dropData&&B("div",F({className:"land-menu-drop-wrap ".concat(d.open?"open":"")},{children:B("div",F({className:"land-menu-drop"},{children:B(tf,F({data:d.dropData,onChange:function(p){return c==null?void 0:c(p,d)},direction:"column"},u))}))}))]}))})}))},UQ=K.div(T1||(T1=D([`
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
`])),function(A){return A.column?"column":"row"},function(A){return A.column?"":"100%"},function(A){return A.column?"100%":"fit-content"},function(A){return A.border&&!A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.column?"":"100%"}),xQ=K.a(D1||(D1=D([`
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
`])),function(A){return A.column?"0":"50%"},function(A){return A.column?"50%":"0"},function(A){return A.column?"2px":"12px"},function(A){return A.column?A.theme.activeBg?"100%":"calc(100% - 16px)":"2px"},function(A){return A.column?"translateY(50%)":"translateX(50%)"},function(A){return A.theme.lineColor||"var(--color-text-1)"},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverBg},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverColor},function(A){return A.theme.activeBg},function(A){return A.theme.activeColor||"var(--color-text-1)"}),T1,D1,bQ=function(A){var e,t=A.h,r=t===void 0?"64px":t,n=A.fixed,o=A.filter,i=o===void 0?0:o,a=A.borderBottom,s=a===void 0?!0:a,l=A.applications,c=A.logo,u=A.name,f=A.onLogoClick,h=A.divider,v=h===void 0?!0:h,m=A.align,x=A.menuProps,g=A.rightComponent,d=A.style,p=A.className,C=p===void 0?"":p,y=EA(k.useState(!1),2),w=y[0],Q=y[1];return k.useEffect(function(){window.onscroll=function(){return Q(!1)},window.onresize=function(){return Q(!1)}}),R(EQ,F({className:"land-header ".concat(n?"fixed":""," ").concat(C),style:d,height:r,filter:i,borderBottom:s,applications:!!l},{children:[R("div",F({className:"land-header-logo",onClick:f},{children:[l&&R("button",F({className:"land-header-application",onClick:function(b){return b.stopPropagation()}},{children:[B(OA,{name:"application"}),B("div",F({className:"land-application-drop"},{children:l}))]})),typeof c=="string"?B("img",{src:c}):c,v&&c&&u&&B(IB,{direction:"column",lang:"24px"}),typeof u=="string"?B("img",{src:u}):u]})),B(HQ,F({className:"land-header-nav",align:m,showMobileNav:w},{children:x&&B(tf,F({border:!1},x,{onChange:function(b){var H;(H=x.onChange)===null||H===void 0||H.call(x,b),Q(!1)},onDropChange:function(b,H){var M;(M=x.onDropChange)===null||M===void 0||M.call(x,b,H),Q(!1)}}))})),g&&B("div",F({className:"land-header-btns"},{children:g})),x&&x.data&&((e=x.data)===null||e===void 0?void 0:e.length)>0&&B(Cn,{icon:B(OA,{name:"more-line"}),type:"text",onClick:function(){return Q(!w)}})]}))},EQ=K.header(N1||(N1=D([`
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
`])),function(A){return A.applications?"0":""},function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""}),HQ=K.div(R1||(R1=D([`
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
`])),function(A){return A.align},function(A){return A.showMobileNav?"all":"none"},function(A){return A.showMobileNav?"1":"0"}),N1,R1,kQ=function(A){var e=A.size,t=e===void 0?18:e,r=A.strokeSize,n=r===void 0?2:r,o=A.color,i=o===void 0?"var(--color-text-1)":o,a=A.style,s=A.className,l=s===void 0?"":s;return B(IQ,{className:"land-loading-container ".concat(l),style:a,size:t,strokeSize:n,color:i})},IQ=K.div(O1||(O1=D([`
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
    )`)},function(A){return"conic-gradient(transparent 25%, ".concat(A.color,")")}),O1;K.div(P1||(P1=D([`
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
        `])));K.div(V1||(V1=D([`
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
        `])));var P1,V1;K.div(G1||(G1=D([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var G1;K.a(j1||(j1=D([`
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
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var j1,yu=function(A){var e=A.value,t=A.type,r=t===void 0?"border":t,n=A.step,o=n===void 0?1:n,i=A.min,a=i===void 0?0:i,s=A.max,l=s===void 0?100:s,c=A.suffix,u=A.disabled,f=A.onChange;A.className;var h=A.style,v=Yd(A,["value","type","step","min","max","suffix","disabled","onChange","className","style"]),m=EA(k.useState(e),2),x=m[0],g=m[1],d=function(p,C){C<a-o/2||C>l+o/2||(g(C),f==null||f(p,C))};return R(LQ,F({className:"StyledNumberInputWrap",style:h,onClick:function(p){return p.stopPropagation()},suffix:c},{children:[B(So,F({type:r,inputType:"number",value:x,disabled:u,onChange:function(p,C){Number(p)>l||Number(p)<a||(g(Number(p)),f==null||f(C,Number(p)))},showClear:!1,style:{paddingRight:"32px"}},v)),R("div",F({className:"land-numberInput-arrow",style:{borderLeft:r==="border"?"1px solid var(--color-border-2)":"",background:"inherit"}},{children:[B("div",F({className:"land-numberInput-add ".concat(x===l?"disabled":""),onClick:function(p){return d==null?void 0:d(p,Number(x)+o)}},{children:B(OA,{name:"arrow"})})),r==="border"&&B(IB,{margin:0,lang:"32px"}),B("div",F({className:"land-numberInput-dec ".concat(x===a?"disabled":""),onClick:function(p){return d==null?void 0:d(p,Number(x)-o)}},{children:B(OA,{name:"arrow"})}))]}))]}))},LQ=K.div(z1||(z1=D([`
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
`])),function(A){return A.suffix}),z1;K.div($1||($1=D([`
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
`])));var $1;K.a(W1||(W1=D([`
`],[`
`])));var W1;K.div(X1||(X1=D([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));K.div(Y1||(Y1=D([`
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
`])));K.div(J1||(J1=D([`
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
`])));K.div(Z1||(Z1=D([`
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
`])));K.div(q1||(q1=D([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var X1,Y1,J1,Z1,q1,Be=function(A){var e=A.title,t=A.type,r=t===void 0?"h1":t,n=A.prefix,o=A.sub,i=A.info,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R(SQ,F({className:"land-title ".concat(l),style:a,onClick:function(){return c==null?void 0:c()}},{children:[n&&B("span",F({className:"land-title-prefix"},{children:n})),r==="h1"&&B("h1",{children:e}),r==="h2"&&B("h2",{children:e}),r==="h3"&&B("h3",{children:e}),r==="p"&&B("p",{children:e}),i&&R("div",F({className:"land-title-info hover-pop"},{children:[B(OA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(Lt,{content:i,style:{maxWidth:"200px"}})]})),o&&typeof o=="string"?B("div",F({className:"land-title-sub"},{children:o})):B(kn,{children:o})]}))},SQ=K.div(Ag||(Ag=D([`
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
`]))),Ag,MQ=function(A){var e=A.data,t=A.placeholder,r=t===void 0?"请选择":t,n=A.selected,o=n===void 0?"0":n,i=A.width,a=i===void 0?"100px":i,s=A.title,l=A.titleInfo,c=A.info,u=A.disabled,f=A.onChange,h=A.className,v=h===void 0?"":h,m=A.style,x=EA(k.useState(!1),2),g=x[0],d=x[1],p=EA(k.useState(o),2),C=p[0],y=p[1];return R(_Q,F({style:F({width:typeof a=="number"?"".concat(a,"px"):a},m),className:v},{children:[s&&B(Be,{title:s,type:"p",info:l}),R(KQ,F({className:"hover-pop ".concat(g?"show":""," ").concat(u?"disabled":""),onClick:function(w){u||(w.stopPropagation(),d(!g))}},{children:[B("p",F({className:"".concat(C!=="0"?"land-select-trigger":"land-select-placeholder")},{children:C==="0"?r:e==null?void 0:e.filter(function(w){return w.value===C})[0].label})),B(OA,{name:"arrow",className:"land-select-value-arrow"}),c&&B(Lt,{content:c,theme:"dark"})]})),B(TQ,F({className:"land-select-results ".concat(g?"show":"")},{children:B(DQ,{children:e==null?void 0:e.map(function(w){return R(NQ,F({className:"".concat(w.tip?"hover-pop":""," ").concat(C===w.value?"selected":""," ").concat(w.disabled?"disabled":""),onClick:function(){w.disabled||(y(w.value),f==null||f(w),d(!1))}},{children:[B("div",F({className:"land-select-results-item-label"},{children:w.label})),w.info&&R("div",F({className:"land-select-item-info ".concat(w.info?"hover-pop":"")},{children:[B(OA,{name:"info-stroke",size:12}),w.info&&B(Lt,{content:w.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]})),w.tip&&B(Lt,{content:w.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]}),w.value)})})}))]}))},_Q=K.div(eg||(eg=D([`
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
`]))),KQ=K.div(tg||(tg=D([`
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
`]))),TQ=K.div(rg||(rg=D([`
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
`]))),DQ=K.ul(ng||(ng=D([`
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
`]))),NQ=K.li(og||(og=D([`
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
`]))),eg,tg,rg,ng,og;K.div(ig||(ig=D([`
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
`])));K.div(ag||(ag=D([`
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
`])));K.div(sg||(sg=D([`
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
`])));K.ul(lg||(lg=D([`
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
`])));K.li(cg||(cg=D([`
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
`])));K.ul(ug||(ug=D([`
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

`])),function(A){return A.show?1:0},function(A){return A.show?"all":"none"});var ig,ag,sg,lg,cg,ug;K.aside(dg||(dg=D([`
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
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var dg;K.div(fg||(fg=D([`
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
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--color-gray-2) 0 0 / 100% 100%"):""});K.input(gg||(gg=D([`
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
`])));var fg,gg;K.div(pg||(pg=D([`
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
`])));var pg;K.div(hg||(hg=D([`
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
`])));var hg;K.table(Bg||(Bg=D([`
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
`])));var Bg,LB=function(A){var e=A.desc,t=A.fileType,r=A.onUpload,n=A.children,o=A.width,i=o===void 0?"100%":o,a=A.height,s=a===void 0?"100%":a,l=A.style,c=A.className,u=c===void 0?"":c,f=A.innerClassName,h=f===void 0?"":f,v=k.useRef(null),m=EA(k.useState(),2),x=m[0],g=m[1],d=EA(k.useState(),2),p=d[0],C=d[1],y=EA(k.useState(!1),2),w=y[0],Q=y[1],b=function(Y,$){if(Y.preventDefault(),Q(!0),$){C($);var S=new FileReader;S.readAsDataURL($),g(URL.createObjectURL($)),Q(!1)}};k.useEffect(function(){r==null||r(x,p)},[x]);var H=EA(k.useState(!1),2),M=H[0],AA=H[1];return R(RQ,F({className:"".concat(M?"drag":""," ").concat(u),style:l,onDragOver:function(Y){AA(!0),Y.preventDefault()},onDrop:function(Y){return b(Y,Y.dataTransfer.files[0])},onDragLeave:function(){return AA(!1)},width:i,height:s},{children:[B(OQ,{ref:v,type:"file",accept:t,className:h,onChange:function(Y){b(Y,Y.target.files[0])}}),n||(w?B(kn,{children:"上传中"}):R(kn,{children:[B("div",F({className:"land-uploader-icon"},{children:B(OA,{name:"upload"})})),(e||M)&&B("div",F({className:"land-uploader-desc"},{children:M?"释放即可上传":e}))]}))]}))},RQ=K.label(vg||(vg=D([`
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
`])),function(A){return A.width},function(A){return A.height}),OQ=K.input(wg||(wg=D([`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`],[`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`]))),vg,wg;const Wl=[{key:11,title:"基础知识",open:!0,dropData:[{key:11,title:"线材"},{key:12,title:"器材"}]},{key:1,title:"插图教程",open:!0,dropData:[{key:1,title:"钩针"},{key:2,title:"棒针"}]},{key:21,title:"辅助工具",open:!0,dropData:[{key:21,title:"取色"},{key:22,title:"配色"},{key:23,title:"像素格"}]},{key:31,title:"图解收录"}],mg=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"锁针/辫子针",desc:"锁针常用于起针，也可以独立应用。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/dlOyrFmHhYjTuqM.png"},{img_src:"https://s2.loli.net/2022/01/25/MGZPTfFQgJBSl1q.png",img_des:"1、打一个活结并按图示持线"},{img_src:"https://s2.loli.net/2022/01/25/ZwP9ISDKYzb1fiR.png",img_des:"2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"},{img_src:"https://s2.loli.net/2022/01/25/s1PDdfarAKcI36Q.png",img_des:"3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"},{img_src:"https://s2.loli.net/2022/01/25/GI6mCRxTYKFvebS.png",img_des:"4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"}]},{id:"2",title:"引拔针",desc:"引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/jx8XTHlMsdVJUQ4.png"},{img_src:"https://s2.loli.net/2022/01/25/cfMk71RoUs3NlQm.png",img_des:"1、如图所示为短针环钩的结尾处"},{img_src:"https://s2.loli.net/2022/01/25/9q5TeODLgzYGAof.png",img_des:"2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/EN59GXqoimYHwMZ.png",img_des:"3、拉紧即完成连接"},{img_src:"https://s2.loli.net/2022/01/25/tuM9S2WiRXr3lUs.png",img_des:"4、接着根据针法选择引拔的锁针高度、参考下图"}]},{id:"3",title:"短针",desc:"短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/2shOLI61PveoYd3.png"},{img_src:"https://s2.loli.net/2022/01/25/OsHmBNxkLQIpC1l.png",img_des:"1、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/MJKrzTlD2UEmPj8.png",img_des:"2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"},{img_src:"https://s2.loli.net/2022/01/25/o7iNOuqAgHc4Wmy.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织短针"},{img_src:"https://s2.loli.net/2022/01/25/D7BPxNS1wvnpZr3.png",img_des:"4、如图为钩织3个短针、接下来按照图解继续完成钩织"}]},{id:"4",title:"中长针",desc:"中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/1FHcSlgUrZhWbwE.png"},{img_src:"https://s2.loli.net/2022/01/25/hR9mj1DaiecFKp7.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/6tQAPwGxhJVBkg3.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"},{img_src:"https://s2.loli.net/2022/01/25/rOL6mqF3fxiSeGT.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"}]},{id:"5",title:"长针",desc:"长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/IY9TJOPHprkCgFc.png"},{img_src:"https://s2.loli.net/2022/01/25/OQZrax93htPWbUK.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/2E4Vgixfy6Q1GH9.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"},{img_src:"https://s2.loli.net/2022/01/25/UvhdzuosPqiaHXw.png"},{img_src:"https://s2.loli.net/2022/01/25/oiBOIWljCzwvN6J.png",img_des:"3、绕线从这2个线圈中钩出，即完成一个长针"}]},{id:"6",title:"长长针",desc:"长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TcHaDG27dUEqs1K.png"},{img_src:"https://s2.loli.net/2022/01/25/bNEBqwdrRiPAxcX.png",img_des:"1、如图所示在钩针上绕线3圈后穿入针目"},{img_src:"https://s2.loli.net/2022/01/25/bhptxHfsvAaVLBe.png",img_des:"2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/6lNJcryYhCKzQg8.png"},{img_src:"https://s2.loli.net/2022/01/25/lsP3AHnpkXOfELy.png"},{img_src:"https://s2.loli.net/2022/01/25/CPwesp4UcjndfoH.png",img_des:"3、钩针上只有一个线圈时即完成一个三卷长针"}]},{id:"7",title:"N卷长针",desc:`N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。
N卷长针引拔时高度等于N个锁针。
N卷长针常用于植物钩织。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/hM6dayTbrexlf2K.png"}]},{id:"8",title:"加针/分针",desc:"加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/N7a6UdMw2zyF4kc.png"},{img_src:"https://s2.loli.net/2022/01/25/xpgMCzHYlr3JKSu.png",img_des:"1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"},{img_src:"https://s2.loli.net/2022/01/25/msNihQ7DjXg3voz.png",img_des:"2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"}]},{id:"9",title:"减针/并针",desc:"减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",imgList:[{img_des:"短针减针：",img_src:"https://s2.loli.net/2022/01/25/DAyWndjw23bkt7v.png"},{img_src:"https://s2.loli.net/2022/01/25/MZVXQxb5yU9in7t.png",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/dLWS4NmAjitsx6Z.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/ROE9csFB2xbwnyp.png",img_des:"3、绕线从3个线圈中一次性钩出，即完成一个短针减针"},{img_des:"中长针减针：",img_src:"https://s2.loli.net/2022/01/25/mhi9ayTWpRcOE36.png"},{img_src:"https://s2.loli.net/2022/01/25/BDyIOq7sKSE9pgZ.png",img_des:"1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/vQ8atefw9xV7WkI.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/T9ELXWaHBztrcF3.png"},{img_src:"https://s2.loli.net/2022/01/25/gBSCvHJWpPnRATK.png",img_des:"3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/zczjianz.gif"},{img_des:"长针减针：",img_src:"https://s2.loli.net/2022/01/25/ItS3Torw8LcUGji.png"},{img_src:"https://s2.loli.net/2022/01/25/NWYPDVLufjBxUmZ.png",img_des:"1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/og3vxXNVumds5j9.png",img_des:"2、穿过后绕线钩出、此时钩针上有4个线圈"},{img_src:"https://s2.loli.net/2022/01/25/1cKbxvI2OXkPn3S.png",img_des:"3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/jCFLiwbVcQeTpRM.png",img_des:"4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/czjianz.gif"},{img_des:`长针、长长针、N卷长针的减针钩法类似(步骤总结)：
1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目
2、绕线从针目中钩出、钩织第2个未完成的N卷长针
3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈
4、绕线从这些个线圈中一次性钩出`}]},{id:"10",title:"内半针",desc:"内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/UidtWPLcOak6Glm.png"},{img_src:"https://s2.loli.net/2022/01/25/9VYrljNEiOyZL8t.png",img_des:"短针内半针："}]},{id:"11",title:"外半针",desc:"外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/PDZhkqa1nzIvJwb.png"},{img_src:"https://s2.loli.net/2022/01/25/jkaPw45mRst1Hd2.png",img_des:"短针外半针："}]}]},{cap_id:"2",select:"0",cap:"起针方法",contentMenuList:[{id:"21",title:"手势",desc:"钩织时有一定的绕线方式、拿线方式与拿针方式。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8tGYqI5BaEJSkHF.png",img_des:`绕线方式：
1、如图绕线`},{img_src:"https://s2.loli.net/2022/01/25/KU5uzmGVfFg461B.png",img_des:"2、左手拇指与中指按住线头/织物、食指与小指配合带线"},{img_src:"https://s2.loli.net/2022/01/25/3uXekgrcVOxnfEG.png",img_des:"拿针方式："},{img_src:"https://s2.loli.net/2022/01/25/xutBU13f5n2jI4l.png"}]},{id:"22",title:"环起",desc:`通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
环起钩织的织物底面大致为圆形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/QtpG5JZIxSglBHc.png",img_des:"短针环起："},{img_src:"https://s2.loli.net/2022/01/25/aeumSkjBUt3fXFc.png",img_des:"中长针环起："},{img_src:"https://s2.loli.net/2022/01/25/npxyWtCDcQGFwkO.png",img_des:"长针环起："},{img_des:"提示：环起详细教程请前往笔记页面观看视频教程。"}]},{id:"23",title:"片起",desc:"片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TI4OCM6FfLxcz5n.png",img_des:"短针片起："},{img_src:"https://s2.loli.net/2022/01/25/TKOugprBfzmtJWj.png",img_des:"中长针片起："},{img_src:"https://s2.loli.net/2022/01/25/ZBYboQuRdW64yrM.png",img_des:"长针片起："},{img_des:"提示：片起详细教程请前往笔记页面观看视频教程。"}]},{id:"24",title:"辫子针环起",desc:`辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
辫子针环起钩织的织物底面大致为圆角矩形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/ZCu9pOwceGLVnoU.png",img_des:"短针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/WB3JasEeX2hHK9n.png",img_des:"中长针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/RCGvhMoj6OAZQKt.png",img_des:"长针-辫子针环起："},{img_des:"提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"}]}]},{cap_id:"6",select:"0",cap:"附录",contentMenuList:[{id:"61",title:"钩针符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8W4sk2VcC6euXJw.png"}]},{id:"62",title:"英文符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/7BCuv3doyRwjJ6t.png"}]}]}],PQ=[{id:1,title:"线材总述",desc:"纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",img:"./images/xc/xc.jpg",detailList:[{desc:` 
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
1、塑料线：`,img:"./images/xc/slx.jpg"},{desc:"2、塑料绳：",img:"./images/xc/sls.jpg"},{desc:"3、胶制线：",img:"./images/xc/jzx.jpg"},{desc:"4、金属线：",img:"./images/xc/jsx.jpg"}]}],VQ=[{id:1,title:"新手必备",desc:"此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",img:"https://s2.loli.net/2022/01/25/86YFO94cuXVp13P.png",detailList:[{desc:`
1、钩针入门必备：钩针+记号扣+缝合针+剪刀`,img:"https://s2.loli.net/2022/01/26/AyDfnBhMY219rtq.png"},{desc:"2、棒针入门必备：棒针+剪刀+缝合针+卷尺/密度尺",img:"https://s2.loli.net/2022/01/26/VbW3XFdRKAauUE1.png"},{desc:`新手贴士：以上工具指入门学习针法时必备工具，其他工具需要根据自己参照的具体织物选择，例如学习玩偶钩织时需准备填充棉。

`}]},{id:2,title:"钩针",desc:"钩针是钩织必备工具。钩针有单头和双头之分，按材质大致分为金属制、塑料制、木制和竹制（其中最常用的为金属制钩针）。钩针有多种尺寸以满足不同类型的线材和规格。",img:"https://s2.loli.net/2022/01/25/7HLzFO6WBrokXGg.png",detailList:[{desc:`
1、钩针结构图示：如图，钩针由尖端、喉部、柄部、头部、拇指托、手柄几个基本部分组成。更尖的尖端可以更容易地进入紧密的针迹，而更圆的尖端不会分裂纱线，适合绒线与粗线钩织。拇指托帮助控制和旋转钩子，手柄有助于在钩针编织时平衡钩子。`,img:"https://s2.loli.net/2022/01/25/BuXChR1MUZcPxOD.png"},{desc:`2、钩针材质：钩针通常由金属或塑料制成，也存在由木头或竹子制成的钩针。
【金属钩针】光滑、坚固且经久耐用，但握感可能冰冷和僵硬。
【木制钩针】感觉温暖而有弹性，但需要精心加工才能使其表面光滑。
【塑料钩针】光滑且价格低廉，但与某些纱线一起使用时会发出吱吱声，并且相对容易弯曲或断裂。竹制钩针轻巧灵活，但容易碎裂或折断，尤其是较小的尺寸。`,img:"https://s2.loli.net/2022/01/25/sGQnm1XrTKwC5kF.png"},{desc:`3、钩针粗细度：一般用型号表示，普通钩针从2/0号（针轴直径2.0mm）到10/0号（针轴直径6.0mm），除此之外还有更细或更粗的钩针。
新手贴士：钩针型号与线材大致对应，购买毛线时可查看或咨询其对应的钩针型号以作参考。`,img:"https://s2.loli.net/2022/01/25/ULyMdzH6hlQCuT3.png"},{desc:"粗型钩针：",img:"https://s2.loli.net/2022/01/25/7TmFARVHiSsolv3.png"},{desc:"4、钩针图例：",img:"https://s2.loli.net/2022/01/25/QkTWUqFGalyMsrP.png"},{desc:`新手贴示：入门时使用4/0号（2.5mm）钩针搭配四股牛奶棉学习。

`}]},{id:3,title:"棒针",desc:"棒针是棒针编织必备工具。",img:"https://s2.loli.net/2022/01/25/lZEjgK7FBPMHL1h.png",detailList:[{desc:`
1、棒针类型：棒针包括双头棒针、单头棒针、环形针、袖口针等。
【双头棒针】最常用的棒针，编织衣物的传统选择。针数较多时可能会在针头滑线，可使用堵头解决。
【单头棒针】单头棒针可以帮助固定织片线圈不易从针头滑下。
【环形针】一根软线连接两个针尖，制成一对环形针。
【袖口针】袖口针用于编织袜子等环形织物。`,img:"https://s2.loli.net/2022/01/25/1FZiPbGMUWf3Nm9.png"},{desc:`2、棒针材质：棒针通常有金属针、塑料针、竹针、木针。
【金属棒针】光滑耐用。 如果发现自己编织得太紧，使用光滑的金属棒针会帮助编织者的张力松弛。
【塑料棒针】表面平滑度介于金属和竹子之间。塑料棒针在使用过程中保持稳定的温度，这可能适合患有关节炎的人。
【竹制棒针】竹子是一种轻巧、灵活的材料，可以制作出色的织针。它有助于保持针迹有规律地间隔，从而形成具有良好张力的均匀针织面料。竹针非常适合丝绸、丝光棉和竹纱等光滑纤维。竹针会随着使用而逐渐轻微翘曲，以适合您的手部曲率。
【木制棒针】木针会选用品质较好的木料制成，使用起来感觉很豪华，价格较贵。木针通常具有蜡质表面，磨损后会变得光滑，从而形成柔软且有触感的表面。像竹针一样，它们有助于产生均匀的张力。`,img:"https://s2.loli.net/2022/01/25/I3FTgsGrpwcVf4Q.png"},{desc:"3、棒针粗细度：（新手贴士：棒针型号与线材大致对应，购买毛线时可查看或咨询其对应的棒针型号以作参考）",img:"https://s2.loli.net/2022/01/25/LxKo49HlN5GZSkW.png"},{desc:"4、棒针图例：",img:"https://s2.loli.net/2022/01/25/cvMaCGoQ4POfdUK.png"}]},{id:4,title:"记号扣",desc:"记号扣也称记号别针，用于挂在针脚处，便于确认起始针目或确认行数。记号扣材质主要分为塑料和金属，最常用的为普通的塑料记号扣。",img:"https://s2.loli.net/2022/01/25/yCkxNKa5hFQtzuJ.png",detailList:[{desc:`
1、记号扣类型（左图最常见、新手必备）`,img:"https://s2.loli.net/2022/01/25/7OFKRYps1wVCjXZ.png"},{desc:"2、使用示例:标记每一圈第一针的针目。",img:"https://s2.loli.net/2022/01/25/WQnmVcseyHM4TNA.png"}]},{id:5,title:"缝合针",desc:"缝合针在缝合织片、缝合编织主体（例如玩偶的不同部分）或藏线头时使用。缝合针按材质分为塑料和金属（钢针）",img:"https://s2.loli.net/2022/01/25/63cpL5W7XMhSzYP.png",detailList:[{desc:`
1、缝合针材质：缝合针通常有金属和塑料两种材质。
【塑料缝合针】针孔通常较大，适合较粗毛线的缝合。
【金属缝合针】金属针较细，缝合时不会影响织物的结构。`,img:"https://s2.loli.net/2022/01/25/UwVF7AokZIK49Gd.png"},{desc:"2、使用示例：",img:"https://s2.loli.net/2022/01/25/mIf85Ui7XQGH6Me.png"},{desc:`
新手贴士：可准备钢针和塑料针各一根以适用不同场景。

`}]},{id:6,title:"剪刀",desc:"钩织过程中推荐准备中型剪刀（处理常规线材）和U型剪刀（前端较尖、处理较细线材）两种类型，适用于不同场景。",img:"https://s2.loli.net/2022/01/25/9oHI3kypTFC7l5U.png",detailList:[{img:"https://s2.loli.net/2022/01/25/SXkqeuMtRmyD8ZA.png"}]},{id:7,title:"卷尺",desc:"卷尺用于测量织物尺寸，计算线材用量等。",img:"https://s2.loli.net/2022/01/25/dkymibFM7xRE1jZ.png",detailList:[{img:"https://s2.loli.net/2022/01/26/tM5dC8J7oIgVe2W.png"}]},{id:8,title:"密度尺",desc:"密度尺有两个作用，一是测量织片的密度，二是用于测量棒针的针号。",img:"https://s2.loli.net/2022/01/25/3qRLN82pTOvQmEw.png",detailList:[{desc:`
1、密度尺图例：密度尺可以是直接整体测量的正方形，也可以是单边测量的长条形。`,img:"https://s2.loli.net/2022/01/26/Tc1i9mtxdEZDoF8.png"},{desc:"2、使用示例：",img:"https://s2.loli.net/2022/01/26/shzPWygOX2x7LIT.png"}]},{id:9,title:"麻花针",desc:"借助麻花针可以在棒针编织中织出各式各样的“麻花”花纹。",img:"https://s2.loli.net/2022/01/25/t2LFfA7HvCn51PW.png",detailList:[{desc:`
1、麻花针种类`,img:"https://s2.loli.net/2022/01/26/lh9BKrTEwtSdnX6.png"},{desc:"2、麻花针花纹示例：",img:"https://s2.loli.net/2022/01/26/Nd9QYGgjmifhEW8.png"}]},{id:10,title:"针帽/堵头",desc:"针帽套在棒针针头处防止线圈滑落。",img:"https://s2.loli.net/2022/01/25/KNoHYwRa38Ojg5S.png",detailList:[{desc:`
针帽种类:`,img:"https://s2.loli.net/2022/01/26/arvZVIlGA26Pxd3.png"}]},{id:11,title:"计数器",desc:"计数器套在棒针针头处记录行数。",img:"https://s2.loli.net/2022/01/25/ht2CTEbiAjw81V9.png",detailList:[{desc:`
常见计数器即左图所示，另外市场上还有用于计数的计数戒指，如右图所示，可以戴在编织者手上实时计数。`,img:"https://s2.loli.net/2022/01/26/YfhrwK8eQ5TMuGn.png"}]},{id:12,title:"绕线工具",desc:"绕线工具用于将散线缠绕成团。根据线材的多少选择不同的绕线器材。",img:"https://s2.loli.net/2022/01/25/itr1Ev9YXeAmFTS.png",detailList:[{desc:`
1、伞架：将散线整理成绞或直接将绞线套在伞架上，搭配绕线器将散线绕成团。`,img:"https://s2.loli.net/2022/01/26/3VMyscPio4TXJSY.png"},{desc:"2、绕线板：散线较少时可以使用绕线板简单绕线。",img:"https://s2.loli.net/2022/01/26/GWlJpPS72fHsBqc.png"},{desc:"3、绕线器：散线较多时可以使用手摇绕线器进行绕线。",img:"https://s2.loli.net/2022/01/26/ybS3vQwxIfn8HZJ.png"}]},{id:13,title:"定位针",desc:"定位针原多用于立体剪裁，在编织中可以帮助固定织物形状及位置，便于缝合。",img:"https://s2.loli.net/2022/01/25/YCl13t59EOHWpK7.png",detailList:[{desc:`
定位针种类:最常见的定位针主要有T型针和大头珠针两种，当然市场上还存在各式各样的定位针，其用途一致。`,img:"https://s2.loli.net/2022/01/25/GSzV4nQuUdv9yko.png"}]},{id:14,title:"镊子",desc:"镊子可以用于往织物中塞填充棉、粘贴玩偶眼睛配件等。在微钩时镊子也常用于粘贴各种细微配件或在染色时使用。",img:"https://s2.loli.net/2022/01/25/O9pGiAseXYDP7r2.png",detailList:[{img:"https://s2.loli.net/2022/01/26/djTCY6w3AU1xOSQ.png"}]},{id:15,title:"填充棉",desc:"填充棉用于填充织物，钩织玩偶、抱枕等需要用到。",img:"https://s2.loli.net/2022/01/25/aMymFcoqKtLsPVG.png",detailList:[{desc:`
1、填充棉种类：常见的填充棉有珍珠棉和PP棉两种类型。
【珍珠棉】高弹耐压，饱满厚实，颗粒状。
【PP棉】蓬松柔软`,img:"https://s2.loli.net/2022/01/26/cdVGSRLnDhFX823.png"},{desc:"2、填充方法：织物即将钩完时留1-2圈，使用镊子或剪刀尖部向内塞填充棉。",img:"https://s2.loli.net/2022/01/26/P6y2fsklSCRFDmu.png"},{desc:`新手贴示：用量参考45cm*45cm抱枕的用量约为500克，实际情况根据个人对织物的柔软度喜好而异。

`}]}],GQ=[{id:1,title:"雪花熊",desc:`钩针：4.0-6.0mm
线材：绒线200g(具体因线材而异)
填充棉：珍珠棉
成品高度：40cm`,img:"https://s2.loli.net/2022/01/26/ij7pRsyKQxeHZUa.png",detail:"https://s2.loli.net/2022/01/26/8SvMqzflRhdQyjH.png"},{id:2,title:"粉茶兔",desc:`钩针：4.0-6.0mm
线材：绒线150g(鼻子：粉色4股牛奶棉)
填充棉：pp棉
成品高度：30cm(加上耳朵40cm)`,img:"https://s2.loli.net/2022/01/26/NmheaOdnLIlZV5C.png",detail:"https://s2.loli.net/2022/01/26/3b2MJiC8gktWNSE.png"},{id:3,title:"灰色长绒兔",desc:`钩针：4.0-6.0mm
线材：绒线300g
填充棉：pp棉
成品高度：30cm(加上耳朵45cm)`,img:"https://s2.loli.net/2022/01/26/GQnk54AXeqSULpE.png",detail:"https://s2.loli.net/2022/01/26/R8frKTn5gF9DI1p.png"},{id:101,title:"水蜜桃耳环",desc:`钩针：0.5mm
线材：DMC80
染色：Rosti红色
成品大小：直径0.8cm 高度1.2cm`,img:"https://s2.loli.net/2022/01/26/eMVlaK1LfspUE2G.png",detail:"https://s2.loli.net/2022/01/26/8ygiUZJVbsHnwxv.png"},{id:102,title:"水蜜桃挂件",desc:`钩针：0.75mm
线材：8号蕾丝线
染色：Rosti红色
成品大小：直径2.5cm 高度2cm`,img:"https://s2.loli.net/2022/01/26/3L9fRdEloyXOk2H.png",detail:"https://s2.loli.net/2022/01/26/YD2eKB3NcfntlGM.png"},{id:201,title:"白熊眼罩",desc:`钩针：4.0mm
线材：仿羊毛毡`,img:"https://s2.loli.net/2022/01/26/q81UFXKWIGSlYMZ.png",detail:"https://s2.loli.net/2022/01/26/81dIH7uaVMAzWbD.png"},{id:202,title:"熊猫卡衣",desc:`钩针：3.0mm
线材：雪兰娇中粗羊毛线
配件：塑料卡包内芯、18mm磁扣`,img:"https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",detail:"https://s2.loli.net/2022/01/26/kzrmgGLeC2I7YMb.png"}],jQ=({style:A,className:e=""})=>U.jsxs("svg",{width:"52%",viewBox:"0 0 2594 490",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:A,className:e,children:[U.jsxs("g",{"clip-path":"url(#clip0_401_299)",children:[U.jsx("rect",{width:"2594",height:"490",fill:"white"}),U.jsx("path",{d:"M1425.6 461.505V180.477C1425.6 160.844 1458.67 161.39 1458.67 180.477V389.474C1458.67 402.522 1458.67 404.705 1456.53 418.941L1453.06 446.586C1452.78 448.781 1456.21 449.991 1457.61 448.275C1473.51 428.749 1493.52 434.856 1477.87 468.195C1466.36 492.689 1425.6 494.791 1425.6 461.505Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1523.52 312.552H1366.19C1347 312.552 1347.54 278.719 1366.19 278.719H1453.12C1465.88 278.719 1468.01 278.719 1481.92 280.902L1509.09 284.476C1511.27 284.763 1512.5 281.404 1510.82 279.99C1491.46 263.694 1497.35 242.994 1530.06 259.075C1554 270.843 1556.06 312.552 1523.52 312.552Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("circle",{cx:"108.274",cy:"292.525",r:"100",transform:"rotate(70.6084 108.274 292.525)",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M11.0642 323.563C32.1071 387.793 71.0477 430.726 166.227 439.099",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M15.3705 249.957C36.7982 197.89 97.3489 159.084 164.593 142.305",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M140.226 428.415L140.862 433.374L140.226 428.415C132.918 429.353 131.813 439.395 138.468 442.093C143.609 444.177 147.148 446.004 154.021 449.716C163.268 454.71 172.502 455.613 180.066 456.353C181.444 456.488 182.767 456.618 184.024 456.765L184.138 456.779L184.254 456.787L294.718 464.614L294.732 464.615C310.945 465.718 323.547 465.055 332.331 463.229C336.693 462.323 340.403 461.071 343.186 459.403C345.845 457.808 348.642 455.202 348.947 451.317C349.255 447.404 346.866 444.406 344.452 442.446C341.937 440.405 338.44 438.659 334.248 437.17C325.806 434.171 313.378 431.806 297.05 430.694C297.047 430.694 297.044 430.694 297.041 430.693L186.408 422.749L186.129 422.729L185.85 422.74C185.036 422.773 183.936 422.757 182.576 422.737C176.935 422.656 166.819 422.511 154.117 425.483L153.926 425.528L153.74 425.587C149.342 426.986 145.217 427.774 140.226 428.415Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M148.888 153.923L148.82 148.924L148.888 153.923C141.521 154.023 139.013 144.236 145.223 140.629C150.019 137.842 153.266 135.534 159.548 130.892C167.999 124.647 177.014 122.452 184.399 120.655C185.744 120.327 187.035 120.013 188.259 119.69L188.371 119.661L188.484 119.636L296.747 96.3392L296.761 96.3363C312.656 92.962 325.227 91.8444 334.18 92.4157C338.626 92.6995 342.475 93.4162 345.466 94.6764C348.323 95.8808 351.459 98.0677 352.308 101.87C353.163 105.701 351.22 109.006 349.106 111.286C346.904 113.661 343.686 115.881 339.746 117.946C331.81 122.103 319.839 126.194 303.83 129.593C303.827 129.594 303.824 129.595 303.821 129.595L195.408 153.032L195.135 153.091L194.856 153.12C194.047 153.202 192.96 153.372 191.615 153.583C186.042 154.457 176.047 156.025 163.053 154.87L162.858 154.853L162.665 154.821C158.114 154.054 153.92 153.855 148.888 153.923Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M400.999 329C400.999 315.4 399.132 305.4 395.399 299C391.666 292.333 384.199 289 372.999 289H368.999V281H400.999C411.132 281 418.732 282.467 423.799 285.4C429.132 288.067 432.866 292.6 434.999 299H436.999C441.799 292.867 448.199 287.667 456.199 283.4C464.466 279.133 474.066 277 484.999 277C495.666 277 503.666 279 508.999 283C513.532 286.467 518.199 292.467 522.999 301L506.999 313C504.066 309 499.799 306.067 494.199 304.2C488.599 302.067 482.199 301 474.999 301C466.999 301 459.666 302.867 452.999 306.6C446.332 310.067 440.999 314.867 436.999 321V469H400.999V329ZM630.134 473C612.001 473 596.268 468.733 582.934 460.2C569.601 451.4 559.468 439.533 552.534 424.6C545.601 409.667 542.134 393.133 542.134 375C542.134 356.867 545.601 340.333 552.534 325.4C559.468 310.467 569.601 298.733 582.934 290.2C596.268 281.4 612.001 277 630.134 277C648.268 277 664.001 281.4 677.334 290.2C690.668 298.733 700.801 310.467 707.734 325.4C714.668 340.333 718.134 356.867 718.134 375C718.134 393.133 714.668 409.667 707.734 424.6C700.801 439.533 690.668 451.4 677.334 460.2C664.001 468.733 648.268 473 630.134 473ZM630.134 457C640.001 457 648.668 453.4 656.134 446.2C663.868 439 669.734 429.133 673.734 416.6C678.001 404.067 680.134 390.2 680.134 375C680.134 359.8 678.001 345.933 673.734 333.4C669.734 320.867 663.868 311 656.134 303.8C648.668 296.6 640.001 293 630.134 293C620.268 293 611.468 296.6 603.734 303.8C596.268 311 590.401 320.867 586.134 333.4C582.134 345.933 580.134 359.8 580.134 375C580.134 390.2 582.134 404.067 586.134 416.6C590.401 429.133 596.268 439 603.734 446.2C611.468 453.4 620.268 457 630.134 457ZM841.91 473C822.71 473 806.444 468.733 793.11 460.2C780.044 451.4 770.177 439.667 763.51 425C757.11 410.067 753.91 393.4 753.91 375C753.91 356.6 757.11 340.067 763.51 325.4C770.177 310.467 780.044 298.733 793.11 290.2C806.444 281.4 822.71 277 841.91 277C871.244 277 890.577 281.667 899.911 291C904.444 295.533 907.244 301.133 908.311 307.8C909.377 314.2 909.911 325.933 909.911 343H901.911C900.844 326.467 895.644 314.067 886.31 305.8C876.977 297.267 864.844 293 849.911 293C830.71 293 816.177 300.6 806.31 315.8C796.71 331 791.91 350.733 791.91 375C791.91 399.267 796.71 419 806.31 434.2C816.177 449.4 830.71 457 849.911 457C863.511 457 874.711 454.467 883.51 449.4C892.31 444.067 900.444 435.933 907.91 425L915.91 431C907.111 445.933 896.71 456.733 884.71 463.4C872.71 469.8 858.444 473 841.91 473ZM957.737 253C957.737 239.4 955.87 229.4 952.137 223C948.403 216.333 940.937 213 929.737 213H921.737V205H957.737C967.603 205 974.937 206.333 979.737 209C984.803 211.4 988.403 215.933 990.537 222.6C992.67 229.267 993.737 239.4 993.737 253V297C999.337 291.4 1006.54 286.733 1015.34 283C1024.4 279 1034.54 277 1045.74 277C1065.74 277 1082 282.333 1094.54 293C1107.34 303.667 1113.74 322.333 1113.74 349V469H1077.74V349C1077.74 330.333 1073.47 316.733 1064.94 308.2C1056.67 299.4 1046.27 295 1033.74 295C1019.6 295 1006.27 302.067 993.737 316.2V469H957.737V253Z",fill:"#202020"}),U.jsx("path",{d:"M2129.8 329C2129.8 315.4 2127.93 305.4 2124.2 299C2120.47 292.333 2113 289 2101.8 289H2093.8V281H2129.8C2139.67 281 2147.13 282.333 2152.2 285C2157.53 287.667 2161.4 291.667 2163.8 297H2165.8C2171.4 291.4 2178.6 286.733 2187.4 283C2196.47 279 2206.6 277 2217.8 277C2229 277 2238.6 279.133 2246.6 283.4C2254.6 287.4 2261 294.6 2265.8 305C2272.73 296.2 2281.53 289.4 2292.2 284.6C2303.13 279.533 2314.33 277 2325.8 277C2342.87 277 2356.47 282.333 2366.6 293C2376.73 303.667 2381.8 322.333 2381.8 349V469H2345.8V349C2345.8 329.8 2343.13 316.067 2337.8 307.8C2332.47 299.267 2324.47 295 2313.8 295C2306.33 295 2298.47 297.8 2290.2 303.4C2281.93 308.733 2275.8 314.6 2271.8 321C2273.13 325 2273.8 334.333 2273.8 349V469H2237.8V349C2237.8 329.8 2235.13 316.067 2229.8 307.8C2224.47 299.267 2216.47 295 2205.8 295C2191.67 295 2178.33 302.067 2165.8 316.2V469H2129.8V329Z",fill:"#202020"}),U.jsx("path",{d:"M2439 397.002V329.878C2442.75 243.874 2588.32 245.544 2588.32 329.878L2588.74 373.492L2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492V397.002C2459.44 446.842 2536.6 469.434 2569.55 418.5C2582.75 398.097 2596.82 404.097 2585.82 425.597C2550.78 494.066 2439 471.316 2439 397.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M2549.11 380.589V340.733L2569.55 329.878C2569.55 273.934 2459.44 269.759 2459.44 329.878V373.492M2549.11 380.589L2588.74 373.492L2588.32 329.878C2588.32 245.544 2442.75 243.874 2439 329.878V397.002C2439 471.316 2550.78 494.066 2585.82 425.597C2596.82 404.097 2582.75 398.097 2569.55 418.5C2536.6 469.434 2459.44 446.842 2459.44 397.002V373.492M2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1171 405.002V337.878C1174.75 251.874 1320.32 253.544 1320.32 337.878L1320.74 381.492L1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492V405.002C1191.44 454.842 1268.6 477.434 1301.55 426.5C1314.75 406.097 1328.82 412.097 1317.82 433.597C1282.78 502.066 1171 479.316 1171 405.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1281.11 388.589V348.733L1301.55 337.878C1301.55 281.934 1191.44 277.759 1191.44 337.878V381.492M1281.11 388.589L1320.74 381.492L1320.32 337.878C1320.32 253.544 1174.75 251.874 1171 337.878V405.002C1171 479.316 1282.78 502.066 1317.82 433.597C1328.82 412.097 1314.75 406.097 1301.55 426.5C1268.6 477.434 1191.44 454.842 1191.44 405.002V381.492M1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M2010.8 168.462L2010.8 168.463C2009.52 171.322 2008.45 176.386 2007.62 182.146C2006.75 188.119 2006.05 195.449 2005.71 203.232C2005.03 218.574 2005.68 236.346 2009.47 249.029C2010.38 253.035 2010.89 260.159 2010.89 264.685V429.323C2010.89 443.107 2012.09 453.777 2014.02 461.169C2014.98 464.834 2016.18 467.976 2017.71 470.328C2019.11 472.496 2021.57 475.161 2025.31 475.228C2029.09 475.295 2031.63 472.653 2033.06 470.486C2034.6 468.152 2035.81 465.018 2036.77 461.364C2038.7 453.986 2039.9 443.27 2039.9 429.323V264.685C2039.9 259.632 2040.42 252.549 2041.3 249.089C2045.33 235.638 2046 218.131 2045.27 203.04C2044.89 195.413 2044.15 188.261 2043.25 182.36C2042.36 176.588 2041.27 171.645 2040.07 168.65C2038.77 165.409 2036.07 163.475 2033.53 162.408C2030.97 161.329 2028.08 160.902 2025.37 160.937C2022.65 160.972 2019.8 161.475 2017.29 162.543C2014.86 163.579 2012.17 165.41 2010.8 168.462Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("ellipse",{cx:"2025.62",cy:"214.096",rx:"7.92068",ry:"37.0379",fill:"white",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1791.99 221.788L1788.33 222.804V226.606V232.719C1788.33 232.769 1788.33 232.825 1788.33 232.887C1788.32 233.919 1788.29 236.495 1790.46 238.694C1791.21 239.524 1791.48 240.125 1791.64 240.762C1791.85 241.621 1791.93 242.759 1791.93 244.945V284.86C1791.93 286.13 1792.36 287.116 1792.61 287.599C1792.89 288.163 1793.23 288.645 1793.52 289.019C1794.11 289.774 1794.83 290.486 1795.53 291.096C1796.82 292.227 1798.73 293.597 1800.7 294.263L1813.96 298.918C1814.62 299.159 1815.05 299.358 1815.32 299.506C1815.32 299.536 1815.32 299.569 1815.32 299.603V468.972C1815.32 474.332 1817.66 478.518 1821.95 480.608C1825.73 482.449 1830.13 482.212 1833.73 481.338C1837.45 480.437 1841.17 478.663 1844.06 476.392C1846.71 474.311 1849.79 470.885 1849.79 466.455V234.157V229.947L1845.64 229.23L1827.16 226.034C1827.15 226.029 1827.14 226.022 1827.13 226.013C1827.07 225.979 1826.97 225.902 1826.82 225.743C1826.51 225.401 1826.13 224.824 1825.75 223.952C1824.99 222.241 1824.55 220.267 1824.18 218.572L1824.12 218.328L1822.98 213.187L1817.9 214.596L1791.99 221.788Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1849.13 221.823L1852.67 222.904V226.606V232.719C1852.67 232.769 1852.67 232.825 1852.67 232.887C1852.68 233.919 1852.71 236.495 1850.54 238.694C1849.79 239.524 1849.52 240.125 1849.36 240.762C1849.15 241.621 1849.07 242.759 1849.07 244.945V284.86C1849.07 286.13 1848.64 287.116 1848.39 287.599C1848.11 288.163 1847.77 288.645 1847.48 289.019C1846.89 289.774 1846.17 290.486 1845.47 291.096C1844.17 292.236 1842.24 293.618 1840.25 294.278L1826.29 298.931C1825.65 299.166 1825.23 299.361 1824.96 299.506C1824.96 299.536 1824.96 299.569 1824.96 299.603V468.972C1824.96 474.332 1822.62 478.518 1818.33 480.608C1814.55 482.449 1810.15 482.212 1806.55 481.338C1802.83 480.437 1799.11 478.663 1796.22 476.392C1793.57 474.311 1790.49 470.885 1790.49 466.455V234.157V229.976L1794.6 229.236L1812.56 226.006C1812.57 226.005 1812.57 226.005 1812.57 226.004C1813.26 225.871 1814.03 225.394 1814.9 223.649C1815.68 222.097 1816.14 220.364 1816.64 218.5C1816.73 218.131 1816.83 217.757 1816.94 217.378L1818.29 212.408L1823.22 213.912L1849.13 221.823Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsxs("mask",{id:"path-18-outside-1_401_299",maskUnits:"userSpaceOnUse",x:"1675",y:"3.97754",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1675",y:"3.97754",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.68 53.281L1830.29 50.5064L1830.68 51.8659V53.281H1820.68ZM1685 97.8707H1675V97.5818L1675.02 97.2934L1685 97.8707ZM1776.41 176.982L1774.82 167.109L1774.82 167.109L1776.41 176.982ZM1793.33 184.533L1803.32 184.079L1803.33 184.306V184.533H1793.33ZM1793.33 226.606H1803.33V227.508L1803.17 228.396L1793.33 226.606ZM1713.43 116.21L1722.94 113.125L1722.94 113.125L1713.43 116.21ZM1750.86 42.4931L1753.33 52.1827L1753.33 52.1827L1750.86 42.4931ZM1830.68 53.281V220.492H1810.68V53.281H1830.68ZM1675.02 97.2934C1677.63 52.1549 1709.6 19.7858 1743.65 8.62785C1760.75 3.02685 1779.14 2.49859 1795.16 9.14055C1811.49 15.9125 1824.28 29.7202 1830.29 50.5064L1811.07 56.0556C1806.64 40.7025 1797.84 31.9008 1787.5 27.6152C1776.85 23.1996 1763.51 23.1658 1749.88 27.6334C1722.48 36.6128 1697.05 62.6778 1694.98 98.448L1675.02 97.2934ZM1778.01 186.854C1725.05 195.401 1675 152.845 1675 97.8707H1695C1695 140.707 1734.2 173.665 1774.82 167.109L1778.01 186.854ZM1783.34 184.987C1783.29 183.96 1783.12 184.11 1783.48 184.734C1783.96 185.573 1784.72 186.125 1785.24 186.339C1785.53 186.455 1785.24 186.267 1783.85 186.265C1782.51 186.263 1780.62 186.432 1778.01 186.854L1774.82 167.109C1780.53 166.188 1787.25 165.532 1792.87 167.848C1796.13 169.194 1798.94 171.487 1800.82 174.774C1802.59 177.847 1803.18 181.151 1803.32 184.079L1783.34 184.987ZM1783.33 226.606V184.533H1803.33V226.606H1783.33ZM1830.68 220.492C1830.68 226.064 1826.77 229.266 1825.56 230.197C1823.81 231.533 1821.83 232.501 1820.18 233.195C1816.76 234.632 1812.6 235.781 1808.77 236.577C1804.95 237.369 1800.81 237.946 1797.39 237.976C1795.85 237.99 1793.52 237.916 1791.27 237.201C1790.18 236.855 1788.07 236.044 1786.23 234.09C1783.96 231.676 1782.86 228.284 1783.49 224.815L1803.17 228.396C1803.4 227.12 1803.39 225.615 1802.91 224.05C1802.44 222.495 1801.63 221.275 1800.8 220.391C1799.3 218.79 1797.71 218.264 1797.32 218.14C1796.47 217.869 1796.22 217.986 1797.21 217.977C1798.85 217.963 1801.59 217.64 1804.7 216.994C1807.8 216.352 1810.61 215.523 1812.43 214.757C1813.4 214.35 1813.6 214.16 1813.39 214.322C1813.28 214.411 1812.73 214.834 1812.16 215.665C1811.56 216.527 1810.68 218.192 1810.68 220.492H1830.68ZM1787.65 133.111V69.8224H1807.65V133.111H1787.65ZM1722.94 113.125C1729.14 132.216 1746.21 142.24 1762.43 144.081C1770.55 145.002 1777.48 143.729 1781.95 141.35C1786.09 139.144 1787.65 136.407 1787.65 133.111H1807.65C1807.65 145.277 1800.6 154.079 1791.35 159.003C1782.43 163.755 1771.19 165.203 1760.17 163.953C1738.13 161.452 1713.09 147.563 1703.92 119.295L1722.94 113.125ZM1753.33 52.1827C1746 54.0533 1735.47 61.028 1728.22 72.1723C1721.23 82.9298 1717.7 96.9579 1722.94 113.125L1703.92 119.295C1696.57 96.6259 1701.64 76.3753 1711.45 61.2732C1721.02 46.558 1735.5 36.0923 1748.39 32.8034L1753.33 52.1827ZM1787.65 69.8224C1787.65 61.6117 1784.25 56.5493 1779.22 53.6691C1773.75 50.5313 1764.9 49.2314 1753.33 52.1827L1748.39 32.8034C1763.33 28.9921 1777.88 29.8497 1789.16 36.3137C1800.9 43.0353 1807.65 55.0188 1807.65 69.8224H1787.65Z",fill:"#202020",mask:"url(#path-18-outside-1_401_299)"}),U.jsxs("mask",{id:"path-20-outside-2_401_299",maskUnits:"userSpaceOnUse",x:"1810",y:"3.68457",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1810",y:"3.68457",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.32 52.9881L1810.71 50.2135L1810.32 51.573V52.9881H1820.32ZM1956 97.5778H1966V97.2889L1965.98 97.0005L1956 97.5778ZM1864.59 176.689L1866.18 166.816L1866.18 166.816L1864.59 176.689ZM1847.67 184.24L1837.68 183.786L1837.67 184.013V184.24H1847.67ZM1847.67 226.313H1837.67V227.215L1837.83 228.103L1847.67 226.313ZM1927.57 115.917L1937.08 119.002L1937.08 119.002L1927.57 115.917ZM1890.14 42.2001L1892.61 32.5104L1892.61 32.5104L1890.14 42.2001ZM1810.32 52.9881V220.2H1830.32V52.9881H1810.32ZM1965.98 97.0005C1963.37 51.862 1931.4 19.4928 1897.35 8.33489C1880.25 2.7339 1861.86 2.20564 1845.84 8.8476C1829.51 15.6195 1816.72 29.4273 1810.71 50.2135L1829.93 55.7626C1834.36 40.4096 1843.16 31.6078 1853.5 27.3222C1864.15 22.9066 1877.49 22.8728 1891.12 27.3405C1918.52 36.3198 1943.95 62.3848 1946.02 98.1551L1965.98 97.0005ZM1862.99 186.561C1915.95 195.108 1966 152.552 1966 97.5778H1946C1946 140.414 1906.8 173.372 1866.18 166.816L1862.99 186.561ZM1857.66 184.695C1857.71 183.667 1857.88 183.817 1857.52 184.441C1857.04 185.28 1856.28 185.832 1855.76 186.046C1855.47 186.162 1855.76 185.974 1857.15 185.972C1858.49 185.97 1860.38 186.139 1862.99 186.561L1866.18 166.816C1860.47 165.895 1853.75 165.239 1848.13 167.555C1844.87 168.901 1842.06 171.194 1840.18 174.481C1838.41 177.554 1837.82 180.858 1837.68 183.786L1857.66 184.695ZM1857.67 226.313V184.24H1837.67V226.313H1857.67ZM1810.32 220.2C1810.32 225.771 1814.23 228.973 1815.44 229.904C1817.19 231.24 1819.17 232.208 1820.82 232.902C1824.24 234.339 1828.4 235.488 1832.23 236.284C1836.05 237.076 1840.19 237.653 1843.61 237.683C1845.15 237.697 1847.48 237.623 1849.73 236.908C1850.82 236.562 1852.93 235.751 1854.77 233.797C1857.04 231.383 1858.14 227.991 1857.51 224.522L1837.83 228.103C1837.6 226.827 1837.61 225.322 1838.09 223.758C1838.56 222.202 1839.37 220.982 1840.2 220.098C1841.7 218.497 1843.29 217.971 1843.68 217.847C1844.53 217.576 1844.78 217.693 1843.79 217.684C1842.15 217.67 1839.41 217.348 1836.3 216.701C1833.2 216.059 1830.39 215.23 1828.57 214.464C1827.6 214.057 1827.4 213.867 1827.61 214.029C1827.72 214.118 1828.27 214.541 1828.84 215.372C1829.44 216.235 1830.32 217.899 1830.32 220.2H1810.32ZM1853.35 132.818V69.5294H1833.35V132.818H1853.35ZM1918.06 112.832C1911.86 131.923 1894.79 141.947 1878.57 143.788C1870.45 144.709 1863.52 143.436 1859.05 141.057C1854.91 138.851 1853.35 136.114 1853.35 132.818H1833.35C1833.35 144.984 1840.4 153.786 1849.65 158.71C1858.57 163.462 1869.81 164.91 1880.83 163.66C1902.87 161.159 1927.91 147.27 1937.08 119.002L1918.06 112.832ZM1887.67 51.8898C1895 53.7603 1905.53 60.735 1912.78 71.8794C1919.77 82.6368 1923.3 96.6649 1918.06 112.832L1937.08 119.002C1944.43 96.333 1939.36 76.0823 1929.55 60.9802C1919.98 46.265 1905.5 35.7993 1892.61 32.5104L1887.67 51.8898ZM1853.35 69.5294C1853.35 61.3188 1856.75 56.2563 1861.78 53.3761C1867.25 50.2384 1876.1 48.9384 1887.67 51.8898L1892.61 32.5104C1877.67 28.6991 1863.12 29.5567 1851.84 36.0208C1840.1 42.7423 1833.35 54.7259 1833.35 69.5294H1853.35Z",fill:"#202020",mask:"url(#path-20-outside-2_401_299)"}),U.jsx("path",{d:"M1821.76 250.733C1831.67 250.733 1839.72 258.764 1839.72 268.679C1839.72 278.594 1831.67 286.624 1821.76 286.624C1811.85 286.624 1803.8 278.594 1803.8 268.679C1803.8 258.764 1811.85 250.733 1821.76 250.733Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("rect",{x:"2220",y:"425",width:"81",height:"52",fill:"white"}),U.jsx("path",{d:"M2275.31 361.418L2264.36 307.631C2262.84 300.16 2252.16 300.16 2250.64 307.631L2239.69 361.418L2197.61 376.406C2191.41 378.615 2191.41 387.385 2197.61 389.594L2239.69 404.582L2250.64 458.369C2252.16 465.84 2262.84 465.84 2264.36 458.369L2275.31 404.582L2317.39 389.594C2323.59 387.385 2323.59 378.615 2317.39 376.406L2275.31 361.418Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M625.293 355.198L628.599 358.113L631.906 355.198C637.183 350.545 644.15 347.967 651.639 347.967C667.478 347.967 680.539 360.312 681.199 375.846V380.367C678.702 412.324 649.424 427.534 635.921 432.737L635.896 432.747L635.87 432.757C633.712 433.616 631.247 434.007 628.599 434.007C625.951 434.007 623.486 433.616 621.328 432.757L621.302 432.747L621.277 432.737C607.774 427.534 578.496 412.324 575.999 380.367V375.846C576.66 360.312 589.72 347.967 605.559 347.967C613.048 347.967 620.015 350.545 625.293 355.198Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"})]}),U.jsx("defs",{children:U.jsx("clipPath",{id:"clip0_401_299",children:U.jsx("rect",{width:"2594",height:"490",fill:"white"})})})]}),zQ=({fill:A="currentcolor",size:e=20})=>U.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:U.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})});var ve=function(){return ve=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ve.apply(this,arguments)};function us(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}var BA="-ms-",Mo="-moz-",iA="-webkit-",SB="comm",Ys="rule",rf="decl",$Q="@import",MB="@keyframes",WQ="@layer",_B=Math.abs,nf=String.fromCharCode,Fu=Object.assign;function XQ(A,e){return $A(A,0)^45?(((e<<2^$A(A,0))<<2^$A(A,1))<<2^$A(A,2))<<2^$A(A,3):0}function KB(A){return A.trim()}function bt(A,e){return(A=e.exec(A))?A[0]:A}function q(A,e,t){return A.replace(e,t)}function xa(A,e,t){return A.indexOf(e,t)}function $A(A,e){return A.charCodeAt(e)|0}function Kn(A,e,t){return A.slice(e,t)}function gt(A){return A.length}function TB(A){return A.length}function go(A,e){return e.push(A),A}function YQ(A,e){return A.map(e).join("")}function Cg(A,e){return A.filter(function(t){return!bt(t,e)})}var Js=1,Tn=1,DB=0,$e=0,_A=0,zn="";function Zs(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:Js,column:Tn,length:i,return:"",siblings:a}}function Pt(A,e){return Fu(Zs("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Gr(A){for(;A.root;)A=Pt(A.root,{children:[A]});go(A,A.siblings)}function JQ(){return _A}function ZQ(){return _A=$e>0?$A(zn,--$e):0,Tn--,_A===10&&(Tn=1,Js--),_A}function it(){return _A=$e<DB?$A(zn,$e++):0,Tn++,_A===10&&(Tn=1,Js++),_A}function Ir(){return $A(zn,$e)}function ba(){return $e}function qs(A,e){return Kn(zn,A,e)}function Uu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qQ(A){return Js=Tn=1,DB=gt(zn=A),$e=0,[]}function Ay(A){return zn="",A}function Xl(A){return KB(qs($e-1,xu(A===91?A+2:A===40?A+1:A)))}function ey(A){for(;(_A=Ir())&&_A<33;)it();return Uu(A)>2||Uu(_A)>3?"":" "}function ty(A,e){for(;--e&&it()&&!(_A<48||_A>102||_A>57&&_A<65||_A>70&&_A<97););return qs(A,ba()+(e<6&&Ir()==32&&it()==32))}function xu(A){for(;it();)switch(_A){case A:return $e;case 34:case 39:A!==34&&A!==39&&xu(_A);break;case 40:A===41&&xu(A);break;case 92:it();break}return $e}function ry(A,e){for(;it()&&A+_A!==57;)if(A+_A===84&&Ir()===47)break;return"/*"+qs(e,$e-1)+"*"+nf(A===47?A:it())}function ny(A){for(;!Uu(Ir());)it();return qs(A,$e)}function oy(A){return Ay(Ea("",null,null,null,[""],A=qQ(A),0,[0],A))}function Ea(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,f=0,h=0,v=0,m=1,x=1,g=1,d=0,p="",C=n,y=o,w=r,Q=p;x;)switch(v=d,d=it()){case 40:if(v!=108&&$A(Q,u-1)==58){xa(Q+=q(Xl(d),"&","&\f"),"&\f",_B(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=Xl(d);break;case 9:case 10:case 13:case 32:Q+=ey(v);break;case 92:Q+=ty(ba()-1,7);continue;case 47:switch(Ir()){case 42:case 47:go(iy(ry(it(),ba()),e,t,s),s);break;default:Q+="/"}break;case 123*m:a[l++]=gt(Q)*g;case 125*m:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:g==-1&&(Q=q(Q,/\f/g,"")),h>0&&gt(Q)-u&&go(h>32?yg(Q+";",r,t,u-1,s):yg(q(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(go(w=Qg(Q,e,t,l,c,n,a,p,C=[],y=[],u,o),o),d===123)if(c===0)Ea(Q,e,w,w,C,o,u,a,y);else switch(f===99&&$A(Q,3)===110?100:f){case 100:case 108:case 109:case 115:Ea(A,w,w,r&&go(Qg(A,w,w,0,0,n,a,p,n,C=[],u,y),y),n,y,u,a,r?C:y);break;default:Ea(Q,w,w,w,[""],y,0,a,y)}}l=c=h=0,m=g=1,p=Q="",u=i;break;case 58:u=1+gt(Q),h=v;default:if(m<1){if(d==123)--m;else if(d==125&&m++==0&&ZQ()==125)continue}switch(Q+=nf(d),d*m){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(gt(Q)-1)*g,g=1;break;case 64:Ir()===45&&(Q+=Xl(it())),f=Ir(),c=u=gt(p=Q+=ny(ba())),d++;break;case 45:v===45&&gt(Q)==2&&(m=0)}}return o}function Qg(A,e,t,r,n,o,i,a,s,l,c,u){for(var f=n-1,h=n===0?o:[""],v=TB(h),m=0,x=0,g=0;m<r;++m)for(var d=0,p=Kn(A,f+1,f=_B(x=i[m])),C=A;d<v;++d)(C=KB(x>0?h[d]+" "+p:q(p,/&\f/g,h[d])))&&(s[g++]=C);return Zs(A,e,t,n===0?Ys:a,s,l,c,u)}function iy(A,e,t,r){return Zs(A,e,t,SB,nf(JQ()),Kn(A,2,-2),0,r)}function yg(A,e,t,r,n){return Zs(A,e,t,rf,Kn(A,0,r),Kn(A,r+1,-1),r,n)}function NB(A,e,t){switch(XQ(A,e)){case 5103:return iA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return iA+A+A;case 4789:return Mo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return iA+A+Mo+A+BA+A+A;case 5936:switch($A(A,e+11)){case 114:return iA+A+BA+q(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return iA+A+BA+q(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return iA+A+BA+q(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return iA+A+BA+A+A;case 6165:return iA+A+BA+"flex-"+A+A;case 5187:return iA+A+q(A,/(\w+).+(:[^]+)/,iA+"box-$1$2"+BA+"flex-$1$2")+A;case 5443:return iA+A+BA+"flex-item-"+q(A,/flex-|-self/g,"")+(bt(A,/flex-|baseline/)?"":BA+"grid-row-"+q(A,/flex-|-self/g,""))+A;case 4675:return iA+A+BA+"flex-line-pack"+q(A,/align-content|flex-|-self/g,"")+A;case 5548:return iA+A+BA+q(A,"shrink","negative")+A;case 5292:return iA+A+BA+q(A,"basis","preferred-size")+A;case 6060:return iA+"box-"+q(A,"-grow","")+iA+A+BA+q(A,"grow","positive")+A;case 4554:return iA+q(A,/([^-])(transform)/g,"$1"+iA+"$2")+A;case 6187:return q(q(q(A,/(zoom-|grab)/,iA+"$1"),/(image-set)/,iA+"$1"),A,"")+A;case 5495:case 3959:return q(A,/(image-set\([^]*)/,iA+"$1$`$1");case 4968:return q(q(A,/(.+:)(flex-)?(.*)/,iA+"box-pack:$3"+BA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+iA+A+A;case 4200:if(!bt(A,/flex-|baseline/))return BA+"grid-column-align"+Kn(A,e)+A;break;case 2592:case 3360:return BA+q(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,bt(r.props,/grid-\w+-end/)})?~xa(A+(t=t[e].value),"span",0)?A:BA+q(A,"-start","")+A+BA+"grid-row-span:"+(~xa(t,"span",0)?bt(t,/\d+/):+bt(t,/\d+/)-+bt(A,/\d+/))+";":BA+q(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return bt(r.props,/grid-\w+-start/)})?A:BA+q(q(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return q(A,/(.+)-inline(.+)/,iA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(A)-1-e>6)switch($A(A,e+1)){case 109:if($A(A,e+4)!==45)break;case 102:return q(A,/(.+:)(.+)-([^]+)/,"$1"+iA+"$2-$3$1"+Mo+($A(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~xa(A,"stretch",0)?NB(q(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return q(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return BA+n+":"+o+l+(i?BA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if($A(A,e+6)===121)return q(A,":",":"+iA)+A;break;case 6444:switch($A(A,$A(A,14)===45?18:11)){case 120:return q(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+iA+($A(A,14)===45?"inline-":"")+"box$3$1"+iA+"$2$3$1"+BA+"$2box$3")+A;case 100:return q(A,":",":"+BA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(A,"scroll-","scroll-snap-")+A}return A}function ds(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function ay(A,e,t,r){switch(A.type){case WQ:if(A.children.length)break;case $Q:case rf:return A.return=A.return||A.value;case SB:return"";case MB:return A.return=A.value+"{"+ds(A.children,r)+"}";case Ys:if(!gt(A.value=A.props.join(",")))return""}return gt(t=ds(A.children,r))?A.return=A.value+"{"+t+"}":""}function sy(A){var e=TB(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function ly(A){return function(e){e.root||(e=e.return)&&A(e)}}function cy(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case rf:A.return=NB(A.value,A.length,t);return;case MB:return ds([Pt(A,{value:q(A.value,"@","@"+iA)})],r);case Ys:if(A.length)return YQ(t=A.props,function(n){switch(bt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(Pt(A,{props:[q(n,/:(read-\w+)/,":"+Mo+"$1")]})),Gr(Pt(A,{props:[n]})),Fu(A,{props:Cg(t,r)});break;case"::placeholder":Gr(Pt(A,{props:[q(n,/:(plac\w+)/,":"+iA+"input-$1")]})),Gr(Pt(A,{props:[q(n,/:(plac\w+)/,":"+Mo+"$1")]})),Gr(Pt(A,{props:[q(n,/:(plac\w+)/,BA+"input-$1")]})),Gr(Pt(A,{props:[n]})),Fu(A,{props:Cg(t,r)});break}return""})}}var uy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe={},Dn=typeof process<"u"&&xe!==void 0&&(xe.REACT_APP_SC_ATTR||xe.SC_ATTR)||"data-styled",RB="active",OB="data-styled-version",Al="6.1.8",of=`/*!sc*/
`,af=typeof window<"u"&&"HTMLElement"in window,dy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==""?xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.SC_DISABLE_SPEEDY!==void 0&&xe.SC_DISABLE_SPEEDY!==""&&xe.SC_DISABLE_SPEEDY!=="false"&&xe.SC_DISABLE_SPEEDY),el=Object.freeze([]),Nn=Object.freeze({});function fy(A,e,t){return t===void 0&&(t=Nn),A.theme!==t.theme&&A.theme||e||t.theme}var PB=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,py=/(^-|-$)/g;function Fg(A){return A.replace(gy,"-").replace(py,"")}var hy=/(a)(d)/gi,Ti=52,Ug=function(A){return String.fromCharCode(A+(A>25?39:97))};function bu(A){var e,t="";for(e=Math.abs(A);e>Ti;e=e/Ti|0)t=Ug(e%Ti)+t;return(Ug(e%Ti)+t).replace(hy,"$1-$2")}var Yl,VB=5381,fn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},GB=function(A){return fn(VB,A)};function By(A){return bu(GB(A)>>>0)}function vy(A){return A.displayName||A.name||"Component"}function Jl(A){return typeof A=="string"&&!0}var jB=typeof Symbol=="function"&&Symbol.for,zB=jB?Symbol.for("react.memo"):60115,wy=jB?Symbol.for("react.forward_ref"):60112,my={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$B={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qy=((Yl={})[wy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yl[zB]=$B,Yl);function xg(A){return("type"in(e=A)&&e.type.$$typeof)===zB?$B:"$$typeof"in A?Qy[A.$$typeof]:my;var e}var yy=Object.defineProperty,Fy=Object.getOwnPropertyNames,bg=Object.getOwnPropertySymbols,Uy=Object.getOwnPropertyDescriptor,xy=Object.getPrototypeOf,Eg=Object.prototype;function WB(A,e,t){if(typeof e!="string"){if(Eg){var r=xy(e);r&&r!==Eg&&WB(A,r,t)}var n=Fy(e);bg&&(n=n.concat(bg(e)));for(var o=xg(A),i=xg(e),a=0;a<n.length;++a){var s=n[a];if(!(s in Cy||t&&t[s]||i&&s in i||o&&s in o)){var l=Uy(e,s);try{yy(A,s,l)}catch{}}}}return A}function Rn(A){return typeof A=="function"}function sf(A){return typeof A=="object"&&"styledComponentId"in A}function Ur(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Hg(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ni(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function Eu(A,e,t){if(t===void 0&&(t=!1),!t&&!ni(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=Eu(A[r],e[r]);else if(ni(e))for(var r in e)A[r]=Eu(A[r],e[r]);return A}function lf(A,e){Object.defineProperty(A,"toString",{value:e})}function gi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var by=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw gi(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(of);return t},A}(),Ha=new Map,fs=new Map,ka=1,Di=function(A){if(Ha.has(A))return Ha.get(A);for(;fs.has(ka);)ka++;var e=ka++;return Ha.set(A,e),fs.set(e,A),e},Ey=function(A,e){ka=e+1,Ha.set(A,e),fs.set(e,A)},Hy="style[".concat(Dn,"][").concat(OB,'="').concat(Al,'"]'),ky=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Iy=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},Ly=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(of),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(ky);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(Ey(c,l),Iy(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}};function Sy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var XB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Dn,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(Dn,RB),r.setAttribute(OB,Al);var i=Sy();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},My=function(){function A(e){this.element=XB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw gi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),_y=function(){function A(e){this.element=XB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),Ky=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),kg=af,Ty={isServer:!af,useCSSOMInjection:!dy},YB=function(){function A(e,t,r){e===void 0&&(e=Nn),t===void 0&&(t={});var n=this;this.options=ve(ve({},Ty),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&af&&kg&&(kg=!1,function(o){for(var i=document.querySelectorAll(Hy),a=0,s=i.length;a<s;a++){var l=i[a];l&&l.getAttribute(Dn)!==RB&&(Ly(o,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),lf(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var f=function(g){return fs.get(g)}(u);if(f===void 0)return"continue";var h=o.names.get(f),v=i.getGroup(u);if(h===void 0||v.length===0)return"continue";var m="".concat(Dn,".g").concat(u,'[id="').concat(f,'"]'),x="";h!==void 0&&h.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(m,'{content:"').concat(x,'"}').concat(of)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Di(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(ve(ve({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new Ky(n):r?new My(n):new _y(n)}(this.options),new by(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Di(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Di(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Di(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),Dy=/&/g,Ny=/^\s*\/\/.*$/gm;function JB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=JB(t.children,e)),t})}function Ry(A){var e,t,r,n=A===void 0?Nn:A,o=n.options,i=o===void 0?Nn:o,a=n.plugins,s=a===void 0?el:a,l=function(f,h,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):f},c=s.slice();c.push(function(f){f.type===Ys&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Dy,t).replace(r,l))}),i.prefix&&c.push(cy),c.push(ay);var u=function(f,h,v,m){h===void 0&&(h=""),v===void 0&&(v=""),m===void 0&&(m="&"),e=m,t=h,r=new RegExp("\\".concat(t,"\\b"),"g");var x=f.replace(Ny,""),g=oy(v||h?"".concat(v," ").concat(h," { ").concat(x," }"):x);i.namespace&&(g=JB(g,i.namespace));var d=[];return ds(g,sy(c.concat(ly(function(p){return d.push(p)})))),d};return u.hash=s.length?s.reduce(function(f,h){return h.name||gi(15),fn(f,h.name)},VB).toString():"",u}var Oy=new YB,Hu=Ry(),ZB=Ve.createContext({shouldForwardProp:void 0,styleSheet:Oy,stylis:Hu});ZB.Consumer;Ve.createContext(void 0);function Ig(){return k.useContext(ZB)}var Py=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=Hu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,lf(this,function(){throw gi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Hu),this.name+e.hash},A}(),Vy=function(A){return A>="A"&&A<="Z"};function Lg(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;Vy(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var qB=function(A){return A==null||A===!1||A===""},A4=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!qB(o)&&(Array.isArray(o)&&o.isCss||Rn(o)?r.push("".concat(Lg(n),":"),o,";"):ni(o)?r.push.apply(r,us(us(["".concat(n," {")],A4(o),!1),["}"],!1)):r.push("".concat(Lg(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in uy||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Lr(A,e,t,r){if(qB(A))return[];if(sf(A))return[".".concat(A.styledComponentId)];if(Rn(A)){if(!Rn(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return Lr(n,e,t,r)}var o;return A instanceof Py?t?(A.inject(t,r),[A.getName(r)]):[A]:ni(A)?A4(A):Array.isArray(A)?Array.prototype.concat.apply(el,A.map(function(i){return Lr(i,e,t,r)})):[A.toString()]}function Gy(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Rn(t)&&!sf(t))return!1}return!0}var jy=GB(Al),zy=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gy(e),this.componentId=t,this.baseHash=fn(jy,t),this.baseStyle=r,YB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ur(n,this.staticRulesId);else{var o=Hg(Lr(this.rules,e,t,r)),i=bu(fn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=Ur(n,i),this.staticRulesId=i}else{for(var s=fn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var f=Hg(Lr(u,e,t,r));s=fn(s,f+c),l+=f}}if(l){var h=bu(s>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,r(l,".".concat(h),void 0,this.componentId)),n=Ur(n,h)}}return n},A}(),e4=Ve.createContext(void 0);e4.Consumer;var Zl={};function $y(A,e,t){var r=sf(A),n=A,o=!Jl(A),i=e.attrs,a=i===void 0?el:i,s=e.componentId,l=s===void 0?function(C,y){var w=typeof C!="string"?"sc":Fg(C);Zl[w]=(Zl[w]||0)+1;var Q="".concat(w,"-").concat(By(Al+w+Zl[w]));return y?"".concat(y,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Jl(C)?"styled.".concat(C):"Styled(".concat(vy(C),")")}(A):c,f=e.displayName&&e.componentId?"".concat(Fg(e.displayName),"-").concat(e.componentId):e.componentId||l,h=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var m=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,y){return m(C,y)&&x(C,y)}}else v=m}var g=new zy(t,f,r?n.componentStyle:void 0);function d(C,y){return function(w,Q,b){var H=w.attrs,M=w.componentStyle,AA=w.defaultProps,Y=w.foldedComponentIds,$=w.styledComponentId,S=w.target,G=Ve.useContext(e4),T=Ig(),J=w.shouldForwardProp||T.shouldForwardProp,E=fy(Q,G,AA)||Nn,I=function(nA,sA,gA){for(var PA,wA=ve(ve({},sA),{className:void 0,theme:gA}),lt=0;lt<nA.length;lt+=1){var Se=Rn(PA=nA[lt])?PA(wA):PA;for(var SA in Se)wA[SA]=SA==="className"?Ur(wA[SA],Se[SA]):SA==="style"?ve(ve({},wA[SA]),Se[SA]):Se[SA]}return sA.className&&(wA.className=Ur(wA.className,sA.className)),wA}(H,Q,E),O=I.as||S,z={};for(var W in I)I[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&I.theme===E||(W==="forwardedAs"?z.as=I.forwardedAs:J&&!J(W,O)||(z[W]=I[W]));var FA=function(nA,sA){var gA=Ig(),PA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return PA}(M,I),uA=Ur(Y,$);return FA&&(uA+=" "+FA),I.className&&(uA+=" "+I.className),z[Jl(O)&&!PB.has(O)?"class":"className"]=uA,z.ref=b,k.createElement(O,z)}(p,C,y)}d.displayName=u;var p=Ve.forwardRef(d);return p.attrs=h,p.componentStyle=g,p.displayName=u,p.shouldForwardProp=v,p.foldedComponentIds=r?Ur(n.foldedComponentIds,n.styledComponentId):"",p.styledComponentId=f,p.target=r?n.target:A,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(y){for(var w=[],Q=1;Q<arguments.length;Q++)w[Q-1]=arguments[Q];for(var b=0,H=w;b<H.length;b++)Eu(y,H[b],!0);return y}({},n.defaultProps,C):C}}),lf(p,function(){return".".concat(p.styledComponentId)}),o&&WB(p,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Sg(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var Mg=function(A){return Object.assign(A,{isCss:!0})};function Wy(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Rn(A)||ni(A))return Mg(Lr(Sg(el,us([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?Lr(r):Mg(Lr(Sg(r,e)))}function ku(A,e,t){if(t===void 0&&(t=Nn),!e)throw gi(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,Wy.apply(void 0,us([n],o,!1)))};return r.attrs=function(n){return ku(A,e,ve(ve({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return ku(A,e,ve(ve({},t),n))},r}var t4=function(A){return ku($y,A)},vt=t4;PB.forEach(function(A){vt[A]=t4(A)});const _g=({data:A=[]})=>{var c;const[e,t]=k.useState(!0),[r,n]=k.useState("0"),[o,i]=k.useState("1"),[a,s]=k.useState(!1);k.useEffect(()=>{const u=new ResizeObserver(f=>{for(let h of f)h.contentRect.width<=800?s(!0):s(!1)});return u.observe(document.body),()=>{u.disconnect()}},[]);const l=k.useMemo(()=>A==null?void 0:A.filter(u=>u.cap_id===r)[0].contentMenuList.filter(u=>u.id===o)[0],[o,r,A]);return U.jsxs(Xs,{className:"flex-1 flex width-100",children:[U.jsxs(r4,{className:`relative ${e?"open":""}`,children:[U.jsx(tf,{data:A==null?void 0:A.map(u=>({key:u.cap_id,title:u.cap,dropData:u.contentMenuList.map(f=>({key:f.id,title:f.title})),open:!0})),direction:"column",active:r,onChange:u=>{n(u.key),i(`${Number(u.key)*10+1}`)},dropProps:{direction:"column",active:o},onDropChange:(u,f)=>{n(f.key),i(u.key)},theme:{activeBg:"var(--color-bg-3)",lineColor:"inherit"},className:"pt-24 height-100 border-right overflow-auto scrollbar-none"}),a&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx(OA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(oe,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(Be,{title:l.title,type:"h2"}),U.jsxs("div",{className:"flex column gap-12",children:[l.des&&U.jsx(Be,{title:l.des,type:"p"}),(c=l.imgList)==null?void 0:c.map(u=>U.jsxs(oe,{column:!0,gap:8,children:[U.jsx(Be,{title:u.img_des,type:"p"}),U.jsx("img",{src:u.img_src,width:"100%"})]}))]})]})})]})},r4=vt.div`
  transform: translateX(-100%);
  width: 0;
  transition: all var(--transition-15) linear;
  &.open {
    width: 120px;
    transform: translateX(0);
    .toggle-arrow {
      right: 0;
    }
  }
  .toggle-arrow {
    top: 50%;
    right: -12px;
    transform: translate(50%, -50%);
    width: 24px;
    height: 48px;
    background-color: var(--color-bg-white);
    border-radius: 12px;
    border: 1px solid var(--color-border-3);
    z-index: 1;
  }
  @media screen and (max-width: 800px) {
    .land-menu-link {
      font-size: 12px;
    }
  }
`,ql=({url:A,className:e,imgClassName:t,imgStyle:r,style:n,ratio:o=1/1})=>{const i=k.useRef(null),[a,s]=k.useState(!0),[l,c]=k.useState(!1),u=()=>{setTimeout(()=>{s(!1)},300)},f=()=>{s(!1),c(!0)};return k.useEffect(()=>{const h=i.current;if(h)return h.complete&&s(!1),h==null||h.addEventListener("load",u),h==null||h.addEventListener("error",f),()=>{h==null||h.removeEventListener("load",u),h==null||h.removeEventListener("error",f)}},[]),U.jsxs("div",{className:`relative flex items-center justify-center ${a||l?"bg-gray radius-6 overflow-hidden":""} ${e}`,style:{aspectRatio:a||l?`${o}`:"auto",...n},children:[a&&U.jsx(kQ,{color:"var(--color-text-4)",size:28,style:{position:"absolute",transform:"translate(-50%,-50%)"}}),l?U.jsx(OA,{name:"error-fill",fill:"var(--color-red-03)"}):U.jsx("img",{src:A,alt:"",className:t,style:{zIndex:"1",...r}})]})},Ac=({data:A=[]})=>{var s,l;const[e,t]=k.useState(!0),[r,n]=k.useState(!1),[o,i]=k.useState(1),a=k.useMemo(()=>A==null?void 0:A.filter(c=>c.id===o)[0],[o,A]);return k.useEffect(()=>{const c=new ResizeObserver(u=>{for(let f of u)f.contentRect.width<=800?n(!0):n(!1)});return c.observe(document.body),()=>{c.disconnect()}},[]),U.jsxs(Xs,{className:"flex-1 flex width-100",children:[U.jsxs(r4,{className:`relative ${e?"open":""}`,children:[U.jsx("div",{className:"height-100 width-100 overflow-auto pb-24",children:U.jsx("div",{className:"flex column gap-12 px-12 py-24 height-100 width-100",children:A==null?void 0:A.map((c,u)=>U.jsxs("div",{className:"flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer",style:{aspectRatio:1,flexShrink:0},onClick:()=>i(c.id),children:[U.jsx(ql,{url:c.img,className:"radius-8 overflow-hidden",imgStyle:{width:"64px"}}),U.jsx("div",{className:"fs-14 color-gray-3",children:c.title})]},c.id??u))})}),r&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx(OA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(oe,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(Be,{title:a.title,type:"h2"}),U.jsxs(oe,{gap:12,className:"p-12 bg-gray radius-8",w:"100%",children:[a.img&&U.jsx(ql,{url:a.img,imgStyle:{width:"100%"},className:"width-50 radius-8 shrink-0"}),a.desc&&U.jsx("div",{className:"fs-12 color-gray-3",children:a.desc})]}),a.detail&&U.jsx("img",{src:a.detail,width:"100%"}),((s=a.detailList)==null?void 0:s.length)>0&&U.jsx("div",{className:"flex column gap-12",children:(l=a.detailList)==null?void 0:l.map(c=>U.jsxs(oe,{column:!0,gap:8,children:[c.desc&&U.jsx(Be,{title:c.desc,type:"p"}),c.img&&U.jsx(ql,{url:c.img,imgStyle:{width:"100%"},className:"width-100 radius-8 overflow-hidden"})]}))})]})})]})};function gs(A){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gs(A)}var Xy=/^\s+/,Yy=/\s+$/;function j(A,e){if(A=A||"",e=e||{},A instanceof j)return A;if(!(this instanceof j))return new j(A,e);var t=Jy(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}j.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,o,i,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*a},setAlpha:function(e){return this._a=n4(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Tg(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Tg(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=Kg(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Kg(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Dg(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return e8(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(QA(this._r,255)*100)+"%",g:Math.round(QA(this._g,255)*100)+"%",b:Math.round(QA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%)":"rgba("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:f8[Dg(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Ng(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=j(e);r="#"+Ng(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return j(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(o8,arguments)},brighten:function(){return this._applyModification(i8,arguments)},darken:function(){return this._applyModification(a8,arguments)},desaturate:function(){return this._applyModification(t8,arguments)},saturate:function(){return this._applyModification(r8,arguments)},greyscale:function(){return this._applyModification(n8,arguments)},spin:function(){return this._applyModification(s8,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(u8,arguments)},complement:function(){return this._applyCombination(l8,arguments)},monochromatic:function(){return this._applyCombination(d8,arguments)},splitcomplement:function(){return this._applyCombination(c8,arguments)},triad:function(){return this._applyCombination(Rg,[3])},tetrad:function(){return this._applyCombination(Rg,[4])}};j.fromRatio=function(A,e){if(gs(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=po(A[r]));A=t}return j(A,e)};function Jy(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,o=null,i=!1,a=!1;return typeof A=="string"&&(A=B8(A)),gs(A)=="object"&&(Qt(A.r)&&Qt(A.g)&&Qt(A.b)?(e=Zy(A.r,A.g,A.b),i=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Qt(A.h)&&Qt(A.s)&&Qt(A.v)?(r=po(A.s),n=po(A.v),e=A8(A.h,r,n),i=!0,a="hsv"):Qt(A.h)&&Qt(A.s)&&Qt(A.l)&&(r=po(A.s),o=po(A.l),e=qy(A.h,r,o),i=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=n4(t),{ok:i,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Zy(A,e,t){return{r:QA(A,255)*255,g:QA(e,255)*255,b:QA(t,255)*255}}function Kg(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=(r+n)/2;if(r==n)o=i=0;else{var s=r-n;switch(i=a>.5?s/(2-r-n):s/(r+n),r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,l:a}}function qy(A,e,t){var r,n,o;A=QA(A,360),e=QA(e,100),t=QA(t,100);function i(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=i(s,a,A+1/3),n=i(s,a,A),o=i(s,a,A-1/3)}return{r:r*255,g:n*255,b:o*255}}function Tg(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=r,s=r-n;if(i=r===0?0:s/r,r==n)o=0;else{switch(r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,v:a}}function A8(A,e,t){A=QA(A,360)*6,e=QA(e,100),t=QA(t,100);var r=Math.floor(A),n=A-r,o=t*(1-e),i=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,i,o,o,a,t][s],c=[a,t,t,i,o,o][s],u=[o,o,a,t,t,i][s];return{r:l*255,g:c*255,b:u*255}}function Dg(A,e,t,r){var n=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function e8(A,e,t,r,n){var o=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16)),tt(o4(r))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Ng(A,e,t,r){var n=[tt(o4(r)),tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return n.join("")}j.equals=function(A,e){return!A||!e?!1:j(A).toRgbString()==j(e).toRgbString()};j.random=function(){return j.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function t8(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.s-=e/100,t.s=tl(t.s),j(t)}function r8(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.s+=e/100,t.s=tl(t.s),j(t)}function n8(A){return j(A).desaturate(100)}function o8(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.l+=e/100,t.l=tl(t.l),j(t)}function i8(A,e){e=e===0?0:e||10;var t=j(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),j(t)}function a8(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.l-=e/100,t.l=tl(t.l),j(t)}function s8(A,e){var t=j(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,j(t)}function l8(A){var e=j(A).toHsl();return e.h=(e.h+180)%360,j(e)}function Rg(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=j(A).toHsl(),r=[j(A)],n=360/e,o=1;o<e;o++)r.push(j({h:(t.h+o*n)%360,s:t.s,l:t.l}));return r}function c8(A){var e=j(A).toHsl(),t=e.h;return[j(A),j({h:(t+72)%360,s:e.s,l:e.l}),j({h:(t+216)%360,s:e.s,l:e.l})]}function u8(A,e,t){e=e||6,t=t||30;var r=j(A).toHsl(),n=360/t,o=[j(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,o.push(j(r));return o}function d8(A,e){e=e||6;for(var t=j(A).toHsv(),r=t.h,n=t.s,o=t.v,i=[],a=1/e;e--;)i.push(j({h:r,s:n,v:o})),o=(o+a)%1;return i}j.mix=function(A,e,t){t=t===0?0:t||50;var r=j(A).toRgb(),n=j(e).toRgb(),o=t/100,i={r:(n.r-r.r)*o+r.r,g:(n.g-r.g)*o+r.g,b:(n.b-r.b)*o+r.b,a:(n.a-r.a)*o+r.a};return j(i)};j.readability=function(A,e){var t=j(A),r=j(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};j.isReadable=function(A,e,t){var r=j.readability(A,e),n,o;switch(o=!1,n=v8(t),n.level+n.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};j.mostReadable=function(A,e,t){var r=null,n=0,o,i,a,s;t=t||{},i=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)o=j.readability(A,e[l]),o>n&&(n=o,r=j(e[l]));return j.isReadable(A,r,{level:a,size:s})||!i?r:(t.includeFallbackColors=!1,j.mostReadable(A,["#fff","#000"],t))};var Iu=j.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},f8=j.hexNames=g8(Iu);function g8(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function n4(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function QA(A,e){p8(A)&&(A="100%");var t=h8(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function tl(A){return Math.min(1,Math.max(0,A))}function ye(A){return parseInt(A,16)}function p8(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function h8(A){return typeof A=="string"&&A.indexOf("%")!=-1}function tt(A){return A.length==1?"0"+A:""+A}function po(A){return A<=1&&(A=A*100+"%"),A}function o4(A){return Math.round(parseFloat(A)*255).toString(16)}function Og(A){return ye(A)/255}var Ye=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Qt(A){return!!Ye.CSS_UNIT.exec(A)}function B8(A){A=A.replace(Xy,"").replace(Yy,"").toLowerCase();var e=!1;if(Iu[A])A=Iu[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Ye.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Ye.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Ye.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Ye.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Ye.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Ye.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Ye.hex8.exec(A))?{r:ye(t[1]),g:ye(t[2]),b:ye(t[3]),a:Og(t[4]),format:e?"name":"hex8"}:(t=Ye.hex6.exec(A))?{r:ye(t[1]),g:ye(t[2]),b:ye(t[3]),format:e?"name":"hex"}:(t=Ye.hex4.exec(A))?{r:ye(t[1]+""+t[1]),g:ye(t[2]+""+t[2]),b:ye(t[3]+""+t[3]),a:Og(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Ye.hex3.exec(A))?{r:ye(t[1]+""+t[1]),g:ye(t[2]+""+t[2]),b:ye(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function v8(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}const Lu=({mainTitle:A,mainInfo:e,subTitle:t})=>U.jsxs(oe,{column:!0,gap:8,children:[U.jsx(Be,{title:A,type:"h3",info:e}),U.jsx(Be,{title:t,type:"p",className:"color-gray-4"})]});/*!
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
***************************************************************************** */var Su=function(A,e){return Su=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Su(A,e)};function st(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Su(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mu=function(){return Mu=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Mu.apply(this,arguments)};function se(A,e,t,r){function n(o){return o instanceof t?o:new t(function(i){i(o)})}return new(t||(t=Promise))(function(o,i){function a(c){try{l(r.next(c))}catch(u){i(u)}}function s(c){try{l(r.throw(c))}catch(u){i(u)}}function l(c){c.done?o(c.value):n(c.value).then(a,s)}l((r=r.apply(A,e||[])).next())})}function te(A,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],n=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ni(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||e)}var Dt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),rl=function(A,e){return Dt.fromClientRect(A,e.getBoundingClientRect())},w8=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new Dt(0,0,r,n)},nl=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},IA=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},Pg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",m8=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ri=0;Ri<Pg.length;Ri++)m8[Pg.charCodeAt(Ri)]=Ri;var Vg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ho=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Oi=0;Oi<Vg.length;Oi++)ho[Vg.charCodeAt(Oi)]=Oi;var C8=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=ho[A.charCodeAt(r)],i=ho[A.charCodeAt(r+1)],a=ho[A.charCodeAt(r+2)],s=ho[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},Q8=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},y8=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Sr=5,cf=11,ec=2,F8=cf-Sr,i4=65536>>Sr,U8=1<<Sr,tc=U8-1,x8=1024>>Sr,b8=i4+x8,E8=b8,H8=32,k8=E8+H8,I8=65536>>cf,L8=1<<F8,S8=L8-1,Gg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},M8=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},_8=function(A,e){var t=C8(A),r=Array.isArray(t)?y8(t):new Uint32Array(t),n=Array.isArray(t)?Q8(t):new Uint16Array(t),o=24,i=Gg(n,o/2,r[4]/2),a=r[5]===2?Gg(n,(o+r[4])/2):M8(r,Math.ceil((o+r[4])/4));return new K8(r[0],r[1],r[2],r[3],i,a)},K8=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Sr],t=(t<<ec)+(e&tc),this.data[t];if(e<=65535)return t=this.index[i4+(e-55296>>Sr)],t=(t<<ec)+(e&tc),this.data[t];if(e<this.highStart)return t=k8-I8+(e>>cf),t=this.index[t],t+=e>>Sr&S8,t=this.index[t],t=(t<<ec)+(e&tc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),jg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",T8=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Pi=0;Pi<jg.length;Pi++)T8[jg.charCodeAt(Pi)]=Pi;var D8="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",zg=50,N8=1,a4=2,s4=3,R8=4,O8=5,$g=7,l4=8,Wg=9,Zt=10,_u=11,Xg=12,Ku=13,P8=14,Bo=15,Tu=16,Vi=17,ro=18,V8=19,Yg=20,Du=21,no=22,rc=23,jr=24,Fe=25,vo=26,wo=27,zr=28,G8=29,mr=30,j8=31,Gi=32,ji=33,Nu=34,Ru=35,Ou=36,oi=37,Pu=38,Ia=39,La=40,nc=41,c4=42,z8=43,$8=[9001,65288],u4="!",eA="×",zi="÷",Vu=_8(D8),yt=[mr,Ou],Gu=[N8,a4,s4,O8],d4=[Zt,l4],Jg=[wo,vo],W8=Gu.concat(d4),Zg=[Pu,Ia,La,Nu,Ru],X8=[Bo,Ku],Y8=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(o,i){var a=Vu.get(o);if(a>zg?(n.push(!0),a-=zg):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(o)!==-1)return r.push(i),t.push(Tu);if(a===R8||a===_u){if(i===0)return r.push(i),t.push(mr);var s=t[i-1];return W8.indexOf(s)===-1?(r.push(r[i-1]),t.push(s)):(r.push(i),t.push(mr))}if(r.push(i),a===j8)return t.push(e==="strict"?Du:oi);if(a===c4||a===G8)return t.push(mr);if(a===z8)return o>=131072&&o<=196605||o>=196608&&o<=262141?t.push(oi):t.push(mr);t.push(a)}),[r,t,n]},oc=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var o=t;o<=r.length;){o++;var i=r[o];if(i===e)return!0;if(i!==Zt)break}if(n===Zt)for(var o=t;o>0;){o--;var a=r[o];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var s=t;s<=r.length;){s++;var i=r[s];if(i===e)return!0;if(i!==Zt)break}if(a!==Zt)break}return!1},qg=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===Zt)t--;else return r}return 0},J8=function(A,e,t,r,n){if(t[r]===0)return eA;var o=r-1;if(Array.isArray(n)&&n[o]===!0)return eA;var i=o-1,a=o+1,s=e[o],l=i>=0?e[i]:0,c=e[a];if(s===a4&&c===s4)return eA;if(Gu.indexOf(s)!==-1)return u4;if(Gu.indexOf(c)!==-1||d4.indexOf(c)!==-1)return eA;if(qg(o,e)===l4)return zi;if(Vu.get(A[o])===_u||(s===Gi||s===ji)&&Vu.get(A[a])===_u||s===$g||c===$g||s===Wg||[Zt,Ku,Bo].indexOf(s)===-1&&c===Wg||[Vi,ro,V8,jr,zr].indexOf(c)!==-1||qg(o,e)===no||oc(rc,no,o,e)||oc([Vi,ro],Du,o,e)||oc(Xg,Xg,o,e))return eA;if(s===Zt)return zi;if(s===rc||c===rc)return eA;if(c===Tu||s===Tu)return zi;if([Ku,Bo,Du].indexOf(c)!==-1||s===P8||l===Ou&&X8.indexOf(s)!==-1||s===zr&&c===Ou||c===Yg||yt.indexOf(c)!==-1&&s===Fe||yt.indexOf(s)!==-1&&c===Fe||s===wo&&[oi,Gi,ji].indexOf(c)!==-1||[oi,Gi,ji].indexOf(s)!==-1&&c===vo||yt.indexOf(s)!==-1&&Jg.indexOf(c)!==-1||Jg.indexOf(s)!==-1&&yt.indexOf(c)!==-1||[wo,vo].indexOf(s)!==-1&&(c===Fe||[no,Bo].indexOf(c)!==-1&&e[a+1]===Fe)||[no,Bo].indexOf(s)!==-1&&c===Fe||s===Fe&&[Fe,zr,jr].indexOf(c)!==-1)return eA;if([Fe,zr,jr,Vi,ro].indexOf(c)!==-1)for(var u=o;u>=0;){var f=e[u];if(f===Fe)return eA;if([zr,jr].indexOf(f)!==-1)u--;else break}if([wo,vo].indexOf(c)!==-1)for(var u=[Vi,ro].indexOf(s)!==-1?i:o;u>=0;){var f=e[u];if(f===Fe)return eA;if([zr,jr].indexOf(f)!==-1)u--;else break}if(Pu===s&&[Pu,Ia,Nu,Ru].indexOf(c)!==-1||[Ia,Nu].indexOf(s)!==-1&&[Ia,La].indexOf(c)!==-1||[La,Ru].indexOf(s)!==-1&&c===La||Zg.indexOf(s)!==-1&&[Yg,vo].indexOf(c)!==-1||Zg.indexOf(c)!==-1&&s===wo||yt.indexOf(s)!==-1&&yt.indexOf(c)!==-1||s===jr&&yt.indexOf(c)!==-1||yt.concat(Fe).indexOf(s)!==-1&&c===no&&$8.indexOf(A[a])===-1||yt.concat(Fe).indexOf(c)!==-1&&s===ro)return eA;if(s===nc&&c===nc){for(var h=t[o],v=1;h>0&&(h--,e[h]===nc);)v++;if(v%2!==0)return eA}return s===Gi&&c===ji?eA:zi},Z8=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=Y8(A,e.lineBreak),r=t[0],n=t[1],o=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[Fe,mr,c4].indexOf(a)!==-1?oi:a}));var i=e.wordBreak==="keep-all"?o.map(function(a,s){return a&&A[s]>=19968&&A[s]<=40959}):void 0;return[r,n,i]},q8=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===u4,this.start=r,this.end=n}return A.prototype.slice=function(){return IA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),A5=function(A,e){var t=nl(A),r=Z8(t,e),n=r[0],o=r[1],i=r[2],a=t.length,s=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=eA;l<a&&(c=J8(t,o,n,++l,i))===eA;);if(c!==eA||l===a){var u=new q8(t,c,s,l);return s=l,{value:u,done:!1}}return{done:!0,value:null}}}},e5=1,t5=2,pi=4,Ap=8,ps=10,ep=47,_o=92,r5=9,n5=32,$i=34,oo=61,o5=35,i5=36,a5=37,Wi=39,Xi=40,io=41,s5=95,ge=45,l5=33,c5=60,u5=62,d5=64,f5=91,g5=93,p5=61,h5=123,Yi=63,B5=125,tp=124,v5=126,w5=128,rp=65533,ic=42,xr=43,m5=44,C5=58,Q5=59,ii=46,y5=0,F5=8,U5=11,x5=14,b5=31,E5=127,ut=-1,f4=48,g4=97,p4=101,H5=102,k5=117,I5=122,h4=65,B4=69,v4=70,L5=85,S5=90,re=function(A){return A>=f4&&A<=57},M5=function(A){return A>=55296&&A<=57343},$r=function(A){return re(A)||A>=h4&&A<=v4||A>=g4&&A<=H5},_5=function(A){return A>=g4&&A<=I5},K5=function(A){return A>=h4&&A<=S5},T5=function(A){return _5(A)||K5(A)},D5=function(A){return A>=w5},Ji=function(A){return A===ps||A===r5||A===n5},hs=function(A){return T5(A)||D5(A)||A===s5},np=function(A){return hs(A)||re(A)||A===ge},N5=function(A){return A>=y5&&A<=F5||A===U5||A>=x5&&A<=b5||A===E5},$t=function(A,e){return A!==_o?!1:e!==ps},Zi=function(A,e,t){return A===ge?hs(e)||$t(e,t):hs(A)?!0:!!(A===_o&&$t(A,e))},ac=function(A,e,t){return A===xr||A===ge?re(e)?!0:e===ii&&re(t):re(A===ii?e:A)},R5=function(A){var e=0,t=1;(A[e]===xr||A[e]===ge)&&(A[e]===ge&&(t=-1),e++);for(var r=[];re(A[e]);)r.push(A[e++]);var n=r.length?parseInt(IA.apply(void 0,r),10):0;A[e]===ii&&e++;for(var o=[];re(A[e]);)o.push(A[e++]);var i=o.length,a=i?parseInt(IA.apply(void 0,o),10):0;(A[e]===B4||A[e]===p4)&&e++;var s=1;(A[e]===xr||A[e]===ge)&&(A[e]===ge&&(s=-1),e++);for(var l=[];re(A[e]);)l.push(A[e++]);var c=l.length?parseInt(IA.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-i))*Math.pow(10,s*c)},O5={type:2},P5={type:3},V5={type:4},G5={type:13},j5={type:8},z5={type:21},$5={type:9},W5={type:10},X5={type:11},Y5={type:12},J5={type:14},qi={type:23},Z5={type:1},q5={type:25},AF={type:24},eF={type:26},tF={type:27},rF={type:28},nF={type:29},oF={type:31},ju={type:32},w4=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(nl(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==ju;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case $i:return this.consumeStringToken($i);case o5:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(np(t)||$t(r,n)){var o=Zi(t,r,n)?t5:e5,i=this.consumeName();return{type:5,value:i,flags:o}}break;case i5:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),G5;break;case Wi:return this.consumeStringToken(Wi);case Xi:return O5;case io:return P5;case ic:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),J5;break;case xr:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case m5:return V5;case ge:var a=e,s=this.peekCodePoint(0),l=this.peekCodePoint(1);if(ac(a,s,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(Zi(a,s,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(s===ge&&l===u5)return this.consumeCodePoint(),this.consumeCodePoint(),AF;break;case ii:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case ep:if(this.peekCodePoint(0)===ic)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===ic&&(c=this.consumeCodePoint(),c===ep))return this.consumeToken();if(c===ut)return this.consumeToken()}break;case C5:return eF;case Q5:return tF;case c5:if(this.peekCodePoint(0)===l5&&this.peekCodePoint(1)===ge&&this.peekCodePoint(2)===ge)return this.consumeCodePoint(),this.consumeCodePoint(),q5;break;case d5:var u=this.peekCodePoint(0),f=this.peekCodePoint(1),h=this.peekCodePoint(2);if(Zi(u,f,h)){var i=this.consumeName();return{type:7,value:i}}break;case f5:return rF;case _o:if($t(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case g5:return nF;case p5:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),j5;break;case h5:return X5;case B5:return Y5;case k5:case L5:var v=this.peekCodePoint(0),m=this.peekCodePoint(1);return v===xr&&($r(m)||m===Yi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case tp:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),$5;if(this.peekCodePoint(0)===tp)return this.consumeCodePoint(),z5;break;case v5:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),W5;break;case ut:return ju}return Ji(e)?(this.consumeWhiteSpace(),oF):re(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):hs(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:IA(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();$r(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Yi&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(IA.apply(void 0,e.map(function(s){return s===Yi?f4:s})),16),o=parseInt(IA.apply(void 0,e.map(function(s){return s===Yi?v4:s})),16);return{type:30,start:n,end:o}}var i=parseInt(IA.apply(void 0,e),16);if(this.peekCodePoint(0)===ge&&$r(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];$r(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var o=parseInt(IA.apply(void 0,a),16);return{type:30,start:i,end:o}}else return{type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Xi?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Xi?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===ut)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Wi||t===$i){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===ut||this.peekCodePoint(0)===io)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),qi)}for(;;){var n=this.consumeCodePoint();if(n===ut||n===io)return{type:22,value:IA.apply(void 0,e)};if(Ji(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===ut||this.peekCodePoint(0)===io?(this.consumeCodePoint(),{type:22,value:IA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),qi);if(n===$i||n===Wi||n===Xi||N5(n))return this.consumeBadUrlRemnants(),qi;if(n===_o)if($t(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),qi;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Ji(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===io||e===ut)return;$t(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=IA.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===ut||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===ps)return this._value.splice(0,r),Z5;if(n===_o){var o=this._value[r+1];o!==ut&&o!==void 0&&(o===ps?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):$t(n,o)&&(t+=this.consumeStringSlice(r),t+=IA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=pi,r=this.peekCodePoint(0);for((r===xr||r===ge)&&e.push(this.consumeCodePoint());re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===ii&&re(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Ap;re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var o=this.peekCodePoint(2);if((r===B4||r===p4)&&((n===xr||n===ge)&&re(o)||re(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Ap;re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[R5(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),o=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Zi(n,o,i)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===a5?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if($r(e)){for(var t=IA(e);$r(this.peekCodePoint(0))&&t.length<6;)t+=IA(this.consumeCodePoint());Ji(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||M5(r)||r>1114111?rp:r}return e===ut?rp:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(np(t))e+=IA(t);else if($t(t,this.peekCodePoint(0)))e+=IA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),m4=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new w4;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||aF(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?ju:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),hi=function(A){return A.type===15},$n=function(A){return A.type===17},cA=function(A){return A.type===20},iF=function(A){return A.type===0},zu=function(A,e){return cA(A)&&A.value===e},C4=function(A){return A.type!==31},On=function(A){return A.type!==31&&A.type!==4},wt=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},aF=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},fr=function(A){return A.type===17||A.type===15},KA=function(A){return A.type===16||fr(A)},Q4=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},JA={type:17,number:0,flags:pi},uf={type:16,number:50,flags:pi},qt={type:16,number:100,flags:pi},mo=function(A,e,t){var r=A[0],n=A[1];return[dA(r,e),dA(typeof n<"u"?n:r,t)]},dA=function(A,e){if(A.type===16)return A.number/100*e;if(hi(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},y4="deg",F4="grad",U4="rad",x4="turn",ol={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case y4:return Math.PI*e.number/180;case F4:return Math.PI/200*e.number;case U4:return e.number;case x4:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},b4=function(A){return A.type===15&&(A.unit===y4||A.unit===F4||A.unit===U4||A.unit===x4)},E4=function(A){var e=A.filter(cA).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[JA,JA];case"to top":case"bottom":return Re(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[JA,qt];case"to right":case"left":return Re(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[qt,qt];case"to bottom":case"top":return Re(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[qt,JA];case"to left":case"right":return Re(270)}return 0},Re=function(A){return Math.PI*A/180},lr={name:"color",parse:function(A,e){if(e.type===18){var t=sF[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3);return Ar(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3),i=e.value.substring(3,4);return Ar(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),parseInt(i+i,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6);return Ar(parseInt(r,16),parseInt(n,16),parseInt(o,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6),i=e.value.substring(6,8);return Ar(parseInt(r,16),parseInt(n,16),parseInt(o,16),parseInt(i,16)/255)}}if(e.type===20){var a=St[e.value.toUpperCase()];if(typeof a<"u")return a}return St.TRANSPARENT}},cr=function(A){return(255&A)===0},GA=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},Ar=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},op=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},ip=function(A,e){var t=e.filter(On);if(t.length===3){var r=t.map(op),n=r[0],o=r[1],i=r[2];return Ar(n,o,i,1)}if(t.length===4){var a=t.map(op),n=a[0],o=a[1],i=a[2],s=a[3];return Ar(n,o,i,s)}return 0};function sc(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var ap=function(A,e){var t=e.filter(On),r=t[0],n=t[1],o=t[2],i=t[3],a=(r.type===17?Re(r.number):ol.parse(A,r))/(Math.PI*2),s=KA(n)?n.number/100:0,l=KA(o)?o.number/100:0,c=typeof i<"u"&&KA(i)?dA(i,1):1;if(s===0)return Ar(l*255,l*255,l*255,1);var u=l<=.5?l*(s+1):l+s-l*s,f=l*2-u,h=sc(f,u,a+1/3),v=sc(f,u,a),m=sc(f,u,a-1/3);return Ar(h*255,v*255,m*255,c)},sF={hsl:ap,hsla:ap,rgb:ip,rgba:ip},Ko=function(A,e){return lr.parse(A,m4.create(e).parseComponentValue())},St={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},lF={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},cF={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},il=function(A,e){var t=lr.parse(A,e[0]),r=e[1];return r&&KA(r)?{color:t,stop:r}:{color:t,stop:null}},sp=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=JA),r.stop===null&&(r.stop=qt);for(var n=[],o=0,i=0;i<A.length;i++){var a=A[i].stop;if(a!==null){var s=dA(a,e);s>o?n.push(s):n.push(o),o=s}else n.push(null)}for(var l=null,i=0;i<n.length;i++){var c=n[i];if(c===null)l===null&&(l=i);else if(l!==null){for(var u=i-l,f=n[l-1],h=(c-f)/(u+1),v=1;v<=u;v++)n[l+v-1]=h*v;l=null}}return A.map(function(m,x){var g=m.color;return{color:g,stop:Math.max(Math.min(1,n[x]/e),0)}})},uF=function(A,e,t){var r=e/2,n=t/2,o=dA(A[0],e)-r,i=n-dA(A[1],t);return(Math.atan2(i,o)+Math.PI*2)%(Math.PI*2)},dF=function(A,e,t){var r=typeof A=="number"?A:uF(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),o=e/2,i=t/2,a=n/2,s=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,o-l,o+l,i-s,i+s]},Je=function(A,e){return Math.sqrt(A*A+e*e)},lp=function(A,e,t,r,n){var o=[[0,0],[0,e],[A,0],[A,e]];return o.reduce(function(i,a){var s=a[0],l=a[1],c=Je(t-s,r-l);return(n?c<i.optimumDistance:c>i.optimumDistance)?{optimumCorner:a,optimumDistance:c}:i},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},fF=function(A,e,t,r,n){var o=0,i=0;switch(A.size){case 0:A.shape===0?o=i=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.min(Math.abs(e),Math.abs(e-r)),i=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)o=i=Math.min(Je(e,t),Je(e,t-n),Je(e-r,t),Je(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),s=lp(r,n,e,t,!0),l=s[0],c=s[1];o=Je(l-e,(c-t)/a),i=a*o}break;case 1:A.shape===0?o=i=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.max(Math.abs(e),Math.abs(e-r)),i=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)o=i=Math.max(Je(e,t),Je(e,t-n),Je(e-r,t),Je(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),u=lp(r,n,e,t,!1),l=u[0],c=u[1];o=Je(l-e,(c-t)/a),i=a*o}break}return Array.isArray(A.size)&&(o=dA(A.size[0],r),i=A.size.length===2?dA(A.size[1],n):o),[o,i]},gF=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&i.value==="to"){t=E4(n);return}else if(b4(i)){t=ol.parse(A,i);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Aa=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&["top","left","right","bottom"].indexOf(i.value)!==-1){t=E4(n);return}else if(b4(i)){t=(ol.parse(A,i)+Re(270))%Re(360);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},pF=function(A,e){var t=Re(180),r=[],n=1,o=0,i=3,a=[];return wt(e).forEach(function(s,l){var c=s[0];if(l===0){if(cA(c)&&c.value==="linear"){n=1;return}else if(cA(c)&&c.value==="radial"){n=2;return}}if(c.type===18){if(c.name==="from"){var u=lr.parse(A,c.values[0]);r.push({stop:JA,color:u})}else if(c.name==="to"){var u=lr.parse(A,c.values[0]);r.push({stop:qt,color:u})}else if(c.name==="color-stop"){var f=c.values.filter(On);if(f.length===2){var u=lr.parse(A,f[1]),h=f[0];$n(h)&&r.push({stop:{type:16,number:h.number*100,flags:h.flags},color:u})}}}}),n===1?{angle:(t+Re(180))%Re(360),stops:r,type:n}:{size:i,shape:o,stops:r,position:a,type:n}},H4="closest-side",k4="farthest-side",I4="closest-corner",L4="farthest-corner",S4="circle",M4="ellipse",_4="cover",K4="contain",hF=function(A,e){var t=0,r=3,n=[],o=[];return wt(e).forEach(function(i,a){var s=!0;if(a===0){var l=!1;s=i.reduce(function(u,f){if(l)if(cA(f))switch(f.value){case"center":return o.push(uf),u;case"top":case"left":return o.push(JA),u;case"right":case"bottom":return o.push(qt),u}else(KA(f)||fr(f))&&o.push(f);else if(cA(f))switch(f.value){case S4:return t=0,!1;case M4:return t=1,!1;case"at":return l=!0,!1;case H4:return r=0,!1;case _4:case k4:return r=1,!1;case K4:case I4:return r=2,!1;case L4:return r=3,!1}else if(fr(f)||KA(f))return Array.isArray(r)||(r=[]),r.push(f),!1;return u},s)}if(s){var c=il(A,i);n.push(c)}}),{size:r,shape:t,stops:n,position:o,type:2}},ea=function(A,e){var t=0,r=3,n=[],o=[];return wt(e).forEach(function(i,a){var s=!0;if(a===0?s=i.reduce(function(c,u){if(cA(u))switch(u.value){case"center":return o.push(uf),!1;case"top":case"left":return o.push(JA),!1;case"right":case"bottom":return o.push(qt),!1}else if(KA(u)||fr(u))return o.push(u),!1;return c},s):a===1&&(s=i.reduce(function(c,u){if(cA(u))switch(u.value){case S4:return t=0,!1;case M4:return t=1,!1;case K4:case H4:return r=0,!1;case k4:return r=1,!1;case I4:return r=2,!1;case _4:case L4:return r=3,!1}else if(fr(u)||KA(u))return Array.isArray(r)||(r=[]),r.push(u),!1;return c},s)),s){var l=il(A,i);n.push(l)}}),{size:r,shape:t,stops:n,position:o,type:2}},BF=function(A){return A.type===1},vF=function(A){return A.type===2},df={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=T4[e.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function wF(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!T4[A.name])}var T4={"linear-gradient":gF,"-moz-linear-gradient":Aa,"-ms-linear-gradient":Aa,"-o-linear-gradient":Aa,"-webkit-linear-gradient":Aa,"radial-gradient":hF,"-moz-radial-gradient":ea,"-ms-radial-gradient":ea,"-o-radial-gradient":ea,"-webkit-radial-gradient":ea,"-webkit-gradient":pF},mF={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return On(r)&&wF(r)}).map(function(r){return df.parse(A,r)})}},CF={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},QF={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return wt(e).map(function(t){return t.filter(KA)}).map(Q4)}},yF={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(cA).map(function(r){return r.value}).join(" ")}).map(FF)}},FF=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Qn;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(Qn||(Qn={}));var UF={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(xF)})}},xF=function(A){return cA(A)||KA(A)},al=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},bF=al("top"),EF=al("right"),HF=al("bottom"),kF=al("left"),sl=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return Q4(t.filter(KA))}}},IF=sl("top-left"),LF=sl("top-right"),SF=sl("bottom-right"),MF=sl("bottom-left"),ll=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},_F=ll("top"),KF=ll("right"),TF=ll("bottom"),DF=ll("left"),cl=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return hi(t)?t.number:0}}},NF=cl("top"),RF=cl("right"),OF=cl("bottom"),PF=cl("left"),VF={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},GF={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},jF={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).reduce(function(t,r){return t|zF(r.value)},0)}},zF=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},$F={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},WF={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Bs;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Bs||(Bs={}));var XF={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Bs.STRICT;case"normal":default:return Bs.NORMAL}}},YF={name:"line-height",initialValue:"normal",prefix:!1,type:4},cp=function(A,e){return cA(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:KA(A)?dA(A,e):e},JF={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:df.parse(A,e)}},ZF={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},$u={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ul=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},qF=ul("top"),AU=ul("right"),eU=ul("bottom"),tU=ul("left"),rU={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},nU={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},dl=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},oU=dl("top"),iU=dl("right"),aU=dl("bottom"),sU=dl("left"),lU={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},cU={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},uU={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&zu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:St.TRANSPARENT,offsetX:JA,offsetY:JA,blur:JA},n=0,o=0;o<t.length;o++){var i=t[o];fr(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:r.blur=i,n++):r.color=lr.parse(A,i)}return r})}},dU={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},fU={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=hU[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},gU=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},pU=function(A){var e=A.filter(function(s){return s.type===17}).map(function(s){return s.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],o=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var i=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,o,i,a]:null},hU={matrix:gU,matrix3d:pU},up={type:16,number:50,flags:pi},BU=[up,up],vU={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(KA);return t.length!==2?BU:[t[0],t[1]]}},wU={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},To;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(To||(To={}));var mU={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return To.BREAK_ALL;case"keep-all":return To.KEEP_ALL;case"normal":default:return To.NORMAL}}},CU={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if($n(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},D4={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},QU={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return $n(e)?e.number:1}},yU={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},FU={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},UU={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},xU={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},bU={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if($n(e))return e.number;if(cA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},EU={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(cA).map(function(t){return t.value})}},HU={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},NA=function(A,e){return(A&e)!==0},kU={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},IU={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(C4),o=0;o<n.length;o++){var i=n[o],a=n[o+1];if(i.type===20){var s=a&&$n(a)?a.number:1;r.push({counter:i.value,increment:s})}}return r}},LU={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(C4),n=0;n<r.length;n++){var o=r[n],i=r[n+1];if(cA(o)&&o.value!=="none"){var a=i&&$n(i)?i.number:0;t.push({counter:o.value,reset:a})}}return t}},SU={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(hi).map(function(t){return D4.parse(A,t)})}},MU={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(iF);if(n.length%2!==0)return null;for(var o=0;o<n.length;o+=2){var i=n[o].value,a=n[o+1].value;r.push({open:i,close:a})}return r}},dp=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},_U={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&zu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:255,offsetX:JA,offsetY:JA,blur:JA,spread:JA,inset:!1},n=0,o=0;o<t.length;o++){var i=t[o];zu(i,"inset")?r.inset=!0:fr(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:n===2?r.blur=i:r.spread=i,n++):r.color=lr.parse(A,i)}return r})}},KU={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(cA).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},TU={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},DU={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return hi(e)?e.number:0}},NU=function(){function A(e,t){var r,n;this.animationDuration=N(e,SU,t.animationDuration),this.backgroundClip=N(e,lF,t.backgroundClip),this.backgroundColor=N(e,cF,t.backgroundColor),this.backgroundImage=N(e,mF,t.backgroundImage),this.backgroundOrigin=N(e,CF,t.backgroundOrigin),this.backgroundPosition=N(e,QF,t.backgroundPosition),this.backgroundRepeat=N(e,yF,t.backgroundRepeat),this.backgroundSize=N(e,UF,t.backgroundSize),this.borderTopColor=N(e,bF,t.borderTopColor),this.borderRightColor=N(e,EF,t.borderRightColor),this.borderBottomColor=N(e,HF,t.borderBottomColor),this.borderLeftColor=N(e,kF,t.borderLeftColor),this.borderTopLeftRadius=N(e,IF,t.borderTopLeftRadius),this.borderTopRightRadius=N(e,LF,t.borderTopRightRadius),this.borderBottomRightRadius=N(e,SF,t.borderBottomRightRadius),this.borderBottomLeftRadius=N(e,MF,t.borderBottomLeftRadius),this.borderTopStyle=N(e,_F,t.borderTopStyle),this.borderRightStyle=N(e,KF,t.borderRightStyle),this.borderBottomStyle=N(e,TF,t.borderBottomStyle),this.borderLeftStyle=N(e,DF,t.borderLeftStyle),this.borderTopWidth=N(e,NF,t.borderTopWidth),this.borderRightWidth=N(e,RF,t.borderRightWidth),this.borderBottomWidth=N(e,OF,t.borderBottomWidth),this.borderLeftWidth=N(e,PF,t.borderLeftWidth),this.boxShadow=N(e,_U,t.boxShadow),this.color=N(e,VF,t.color),this.direction=N(e,GF,t.direction),this.display=N(e,jF,t.display),this.float=N(e,$F,t.cssFloat),this.fontFamily=N(e,UU,t.fontFamily),this.fontSize=N(e,xU,t.fontSize),this.fontStyle=N(e,HU,t.fontStyle),this.fontVariant=N(e,EU,t.fontVariant),this.fontWeight=N(e,bU,t.fontWeight),this.letterSpacing=N(e,WF,t.letterSpacing),this.lineBreak=N(e,XF,t.lineBreak),this.lineHeight=N(e,YF,t.lineHeight),this.listStyleImage=N(e,JF,t.listStyleImage),this.listStylePosition=N(e,ZF,t.listStylePosition),this.listStyleType=N(e,$u,t.listStyleType),this.marginTop=N(e,qF,t.marginTop),this.marginRight=N(e,AU,t.marginRight),this.marginBottom=N(e,eU,t.marginBottom),this.marginLeft=N(e,tU,t.marginLeft),this.opacity=N(e,QU,t.opacity);var o=N(e,rU,t.overflow);this.overflowX=o[0],this.overflowY=o[o.length>1?1:0],this.overflowWrap=N(e,nU,t.overflowWrap),this.paddingTop=N(e,oU,t.paddingTop),this.paddingRight=N(e,iU,t.paddingRight),this.paddingBottom=N(e,aU,t.paddingBottom),this.paddingLeft=N(e,sU,t.paddingLeft),this.paintOrder=N(e,KU,t.paintOrder),this.position=N(e,cU,t.position),this.textAlign=N(e,lU,t.textAlign),this.textDecorationColor=N(e,yU,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=N(e,FU,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=N(e,uU,t.textShadow),this.textTransform=N(e,dU,t.textTransform),this.transform=N(e,fU,t.transform),this.transformOrigin=N(e,vU,t.transformOrigin),this.visibility=N(e,wU,t.visibility),this.webkitTextStrokeColor=N(e,TU,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=N(e,DU,t.webkitTextStrokeWidth),this.wordBreak=N(e,mU,t.wordBreak),this.zIndex=N(e,CU,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return cr(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return NA(this.display,4)||NA(this.display,33554432)||NA(this.display,268435456)||NA(this.display,536870912)||NA(this.display,67108864)||NA(this.display,134217728)},A}(),RU=function(){function A(e,t){this.content=N(e,kU,t.content),this.quotes=N(e,MU,t.quotes)}return A}(),fp=function(){function A(e,t){this.counterIncrement=N(e,IU,t.counterIncrement),this.counterReset=N(e,LU,t.counterReset)}return A}(),N=function(A,e,t){var r=new w4,n=t!==null&&typeof t<"u"?t.toString():e.initialValue;r.write(n);var o=new m4(r.read());switch(e.type){case 2:var i=o.parseComponentValue();return e.parse(A,cA(i)?i.value:e.initialValue);case 0:return e.parse(A,o.parseComponentValue());case 1:return e.parse(A,o.parseComponentValues());case 4:return o.parseComponentValue();case 3:switch(e.format){case"angle":return ol.parse(A,o.parseComponentValue());case"color":return lr.parse(A,o.parseComponentValue());case"image":return df.parse(A,o.parseComponentValue());case"length":var a=o.parseComponentValue();return fr(a)?a:JA;case"length-percentage":var s=o.parseComponentValue();return KA(s)?s:JA;case"time":return D4.parse(A,o.parseComponentValue())}break}},OU="data-html2canvas-debug",PU=function(A){var e=A.getAttribute(OU);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Wu=function(A,e){var t=PU(A);return t===1||e===t},mt=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Wu(t,3))debugger;this.styles=new NU(e,window.getComputedStyle(t,null)),Ju(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=rl(this.context,t),Wu(t,4)&&(this.flags|=16)}return A}(),VU="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",gp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Co=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ta=0;ta<gp.length;ta++)Co[gp.charCodeAt(ta)]=ta;var GU=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=Co[A.charCodeAt(r)],i=Co[A.charCodeAt(r+1)],a=Co[A.charCodeAt(r+2)],s=Co[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},jU=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},zU=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Mr=5,ff=11,lc=2,$U=ff-Mr,N4=65536>>Mr,WU=1<<Mr,cc=WU-1,XU=1024>>Mr,YU=N4+XU,JU=YU,ZU=32,qU=JU+ZU,A6=65536>>ff,e6=1<<$U,t6=e6-1,pp=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},r6=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},n6=function(A,e){var t=GU(A),r=Array.isArray(t)?zU(t):new Uint32Array(t),n=Array.isArray(t)?jU(t):new Uint16Array(t),o=24,i=pp(n,o/2,r[4]/2),a=r[5]===2?pp(n,(o+r[4])/2):r6(r,Math.ceil((o+r[4])/4));return new o6(r[0],r[1],r[2],r[3],i,a)},o6=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Mr],t=(t<<lc)+(e&cc),this.data[t];if(e<=65535)return t=this.index[N4+(e-55296>>Mr)],t=(t<<lc)+(e&cc),this.data[t];if(e<this.highStart)return t=qU-A6+(e>>ff),t=this.index[t],t+=e>>Mr&t6,t=this.index[t],t=(t<<lc)+(e&cc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),hp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i6=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<hp.length;ra++)i6[hp.charCodeAt(ra)]=ra;var a6=1,uc=2,dc=3,Bp=4,vp=5,s6=7,wp=8,fc=9,gc=10,mp=11,Cp=12,Qp=13,yp=14,pc=15,l6=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},c6=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},u6=n6(VU),_e="×",hc="÷",d6=function(A){return u6.get(A)},f6=function(A,e,t){var r=t-2,n=e[r],o=e[t-1],i=e[t];if(o===uc&&i===dc)return _e;if(o===uc||o===dc||o===Bp||i===uc||i===dc||i===Bp)return hc;if(o===wp&&[wp,fc,mp,Cp].indexOf(i)!==-1||(o===mp||o===fc)&&(i===fc||i===gc)||(o===Cp||o===gc)&&i===gc||i===Qp||i===vp||i===s6||o===a6)return _e;if(o===Qp&&i===yp){for(;n===vp;)n=e[--r];if(n===yp)return _e}if(o===pc&&i===pc){for(var a=0;n===pc;)a++,n=e[--r];if(a%2===0)return _e}return hc},g6=function(A){var e=l6(A),t=e.length,r=0,n=0,o=e.map(d6);return{next:function(){if(r>=t)return{done:!0,value:null};for(var i=_e;r<t&&(i=f6(e,o,++r))===_e;);if(i!==_e||r===t){var a=c6.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},p6=function(A){for(var e=g6(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},h6=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),o=Math.round(n.height);if(A.body.removeChild(r),o===e)return!0}}return!1},B6=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=nl(r.data).map(function(s){return IA(s)}),o=0,i={},a=n.every(function(s,l){t.setStart(r,o),t.setEnd(r,o+s.length);var c=t.getBoundingClientRect();o+=s.length;var u=c.x>i.x||c.y>i.y;return i=c,l===0?!0:u});return A.body.removeChild(e),a},v6=function(){return typeof new Image().crossOrigin<"u"},w6=function(){return typeof new XMLHttpRequest().responseType=="string"},m6=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},Fp=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},C6=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,o=e.toDataURL();n.src=o;var i=Xu(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),Up(i).then(function(a){r.drawImage(a,0,0);var s=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+o+")",l.style.height=t+"px",Fp(s)?Up(Xu(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),Fp(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Xu=function(A,e,t,r,n){var o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),a=document.createElementNS(o,"foreignObject");return i.setAttributeNS(null,"width",A.toString()),i.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(a),a.appendChild(n),i},Up=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},YA={get SUPPORT_RANGE_BOUNDS(){var A=h6(document);return Object.defineProperty(YA,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=YA.SUPPORT_RANGE_BOUNDS&&B6(document);return Object.defineProperty(YA,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=m6(document);return Object.defineProperty(YA,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?C6(document):Promise.resolve(!1);return Object.defineProperty(YA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=v6();return Object.defineProperty(YA,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=w6();return Object.defineProperty(YA,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(YA,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(YA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},Do=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),Q6=function(A,e,t,r){var n=U6(e,t),o=[],i=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(YA.SUPPORT_RANGE_BOUNDS){var s=xp(r,i,a.length).getClientRects();if(s.length>1){var l=gf(a),c=0;l.forEach(function(f){o.push(new Do(f,Dt.fromDOMRectList(A,xp(r,c+i,f.length).getClientRects()))),c+=f.length})}else o.push(new Do(a,Dt.fromDOMRectList(A,s)))}else{var u=r.splitText(a.length);o.push(new Do(a,y6(A,r))),r=u}else YA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));i+=a.length}),o},y6=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var o=rl(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),o}}return Dt.EMPTY},xp=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},gf=function(A){if(YA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return p6(A)},F6=function(A,e){if(YA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return b6(A,e)},U6=function(A,e){return e.letterSpacing!==0?gf(A):F6(A,e)},x6=[32,160,4961,65792,65793,4153,4241],b6=function(A,e){for(var t=A5(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,o=function(){if(n.value){var i=n.value.slice(),a=nl(i),s="";a.forEach(function(l){x6.indexOf(l)===-1?s+=IA(l):(s.length&&r.push(s),r.push(IA(l)),s="")}),s.length&&r.push(s)}};!(n=t.next()).done;)o();return r},E6=function(){function A(e,t,r){this.text=H6(t.data,r.textTransform),this.textBounds=Q6(e,this.text,r,t)}return A}(),H6=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(k6,I6);case 2:return A.toUpperCase();default:return A}},k6=/(^|\s|:|-|\(|\))([a-z])/g,I6=function(A,e,t){return A.length>0?e+t.toUpperCase():A},R4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(mt),O4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(mt),P4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=new XMLSerializer,i=rl(t,r);return r.setAttribute("width",i.width+"px"),r.setAttribute("height",i.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(o.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(mt),V4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),Yu=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(mt),L6=[{type:15,flags:0,unit:"px",number:3}],S6=[{type:16,flags:0,number:50}],M6=function(A){return A.width>A.height?new Dt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Dt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},_6=function(A){var e=A.type===K6?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},vs="checkbox",ws="radio",K6="password",bp=707406591,pf=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=_6(r),(n.type===vs||n.type===ws)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=M6(n.bounds)),n.type){case vs:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=L6;break;case ws:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=S6;break}return n}return e}(mt),G4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=r.options[r.selectedIndex||0];return n.value=o&&o.text||"",n}return e}(mt),j4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),z4=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=W4(t,r.contentWindow.document.documentElement);var o=r.contentWindow.document.documentElement?Ko(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):St.TRANSPARENT,i=r.contentWindow.document.body?Ko(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):St.TRANSPARENT;n.backgroundColor=cr(o)?cr(i)?n.styles.backgroundColor:i:o}}catch{}return n}return e}(mt),T6=["OL","UL","MENU"],Sa=function(A,e,t,r){for(var n=e.firstChild,o=void 0;n;n=o)if(o=n.nextSibling,X4(n)&&n.data.trim().length>0)t.textNodes.push(new E6(A,n,t.styles));else if(gn(n))if(q4(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return Sa(A,a,t,r)});else{var i=$4(A,n);i.styles.isVisible()&&(D6(n,i,r)?i.flags|=4:N6(i.styles)&&(i.flags|=2),T6.indexOf(n.tagName)!==-1&&(i.flags|=8),t.elements.push(i),n.slot,n.shadowRoot?Sa(A,n.shadowRoot,i,r):!ms(n)&&!Y4(n)&&!Cs(n)&&Sa(A,n,i,r))}},$4=function(A,e){return Zu(e)?new R4(A,e):J4(e)?new O4(A,e):Y4(e)?new P4(A,e):R6(e)?new V4(A,e):O6(e)?new Yu(A,e):P6(e)?new pf(A,e):Cs(e)?new G4(A,e):ms(e)?new j4(A,e):Z4(e)?new z4(A,e):new mt(A,e)},W4=function(A,e){var t=$4(A,e);return t.flags|=4,Sa(A,e,t,t),t},D6=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||hf(A)&&t.styles.isTransparent()},N6=function(A){return A.isPositioned()||A.isFloating()},X4=function(A){return A.nodeType===Node.TEXT_NODE},gn=function(A){return A.nodeType===Node.ELEMENT_NODE},Ju=function(A){return gn(A)&&typeof A.style<"u"&&!Ma(A)},Ma=function(A){return typeof A.className=="object"},R6=function(A){return A.tagName==="LI"},O6=function(A){return A.tagName==="OL"},P6=function(A){return A.tagName==="INPUT"},V6=function(A){return A.tagName==="HTML"},Y4=function(A){return A.tagName==="svg"},hf=function(A){return A.tagName==="BODY"},J4=function(A){return A.tagName==="CANVAS"},Ep=function(A){return A.tagName==="VIDEO"},Zu=function(A){return A.tagName==="IMG"},Z4=function(A){return A.tagName==="IFRAME"},Hp=function(A){return A.tagName==="STYLE"},G6=function(A){return A.tagName==="SCRIPT"},ms=function(A){return A.tagName==="TEXTAREA"},Cs=function(A){return A.tagName==="SELECT"},q4=function(A){return A.tagName==="SLOT"},kp=function(A){return A.tagName.indexOf("-")>0},j6=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,o=!0;r!==null&&r.forEach(function(a){var s=t.counters[a.counter];s&&a.increment!==0&&(o=!1,s.length||s.push(1),s[Math.max(0,s.length-1)]+=a.increment)});var i=[];return o&&n.forEach(function(a){var s=t.counters[a.counter];i.push(a.counter),s||(s=t.counters[a.counter]=[]),s.push(a.reset)}),i},A}(),Ip={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Lp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},z6={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},$6={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Wr=function(A,e,t,r,n,o){return A<e||A>t?ai(A,n,o.length>0):r.integers.reduce(function(i,a,s){for(;A>=a;)A-=a,i+=r.values[s];return i},"")+o},Av=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},kA=function(A,e,t,r,n){var o=t-e+1;return(A<0?"-":"")+(Av(Math.abs(A),o,r,function(i){return IA(Math.floor(i%o)+e)})+n)},Br=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return Av(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Jr=1,Vt=2,Gt=4,Qo=8,Ft=function(A,e,t,r,n,o){if(A<-9999||A>9999)return ai(A,4,n.length>0);var i=Math.abs(A),a=n;if(i===0)return e[0]+a;for(var s=0;i>0&&s<=4;s++){var l=i%10;l===0&&NA(o,Jr)&&a!==""?a=e[l]+a:l>1||l===1&&s===0||l===1&&s===1&&NA(o,Vt)||l===1&&s===1&&NA(o,Gt)&&A>100||l===1&&s>1&&NA(o,Qo)?a=e[l]+(s>0?t[s-1]:"")+a:l===1&&s>0&&(a=t[s-1]+a),i=Math.floor(i/10)}return(A<0?r:"")+a},Sp="十百千萬",Mp="拾佰仟萬",_p="マイナス",Bc="마이너스",ai=function(A,e,t){var r=t?". ":"",n=t?"、":"",o=t?", ":"",i=t?" ":"";switch(e){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:var a=kA(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return Br(A,"〇一二三四五六七八九",n);case 6:return Wr(A,1,3999,Ip,3,r).toLowerCase();case 7:return Wr(A,1,3999,Ip,3,r);case 8:return kA(A,945,969,!1,r);case 9:return kA(A,97,122,!1,r);case 10:return kA(A,65,90,!1,r);case 11:return kA(A,1632,1641,!0,r);case 12:case 49:return Wr(A,1,9999,Lp,3,r);case 35:return Wr(A,1,9999,Lp,3,r).toLowerCase();case 13:return kA(A,2534,2543,!0,r);case 14:case 30:return kA(A,6112,6121,!0,r);case 15:return Br(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return Br(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return Ft(A,"零一二三四五六七八九",Sp,"負",n,Vt|Gt|Qo);case 47:return Ft(A,"零壹貳參肆伍陸柒捌玖",Mp,"負",n,Jr|Vt|Gt|Qo);case 42:return Ft(A,"零一二三四五六七八九",Sp,"负",n,Vt|Gt|Qo);case 41:return Ft(A,"零壹贰叁肆伍陆柒捌玖",Mp,"负",n,Jr|Vt|Gt|Qo);case 26:return Ft(A,"〇一二三四五六七八九","十百千万",_p,n,0);case 25:return Ft(A,"零壱弐参四伍六七八九","拾百千万",_p,n,Jr|Vt|Gt);case 31:return Ft(A,"영일이삼사오육칠팔구","십백천만",Bc,o,Jr|Vt|Gt);case 33:return Ft(A,"零一二三四五六七八九","十百千萬",Bc,o,0);case 32:return Ft(A,"零壹貳參四五六七八九","拾百千",Bc,o,Jr|Vt|Gt);case 18:return kA(A,2406,2415,!0,r);case 20:return Wr(A,1,19999,$6,3,r);case 21:return kA(A,2790,2799,!0,r);case 22:return kA(A,2662,2671,!0,r);case 22:return Wr(A,1,10999,z6,3,r);case 23:return Br(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Br(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return kA(A,3302,3311,!0,r);case 28:return Br(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return Br(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return kA(A,3792,3801,!0,r);case 37:return kA(A,6160,6169,!0,r);case 38:return kA(A,4160,4169,!0,r);case 39:return kA(A,2918,2927,!0,r);case 40:return kA(A,1776,1785,!0,r);case 43:return kA(A,3046,3055,!0,r);case 44:return kA(A,3174,3183,!0,r);case 45:return kA(A,3664,3673,!0,r);case 46:return kA(A,3872,3881,!0,r);case 3:default:return kA(A,48,57,!0,r)}},ev="data-html2canvas-ignore",Kp=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new j6,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=W6(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var o=e.defaultView.pageXOffset,i=e.defaultView.pageYOffset,a=n.contentWindow,s=a.document,l=J6(n).then(function(){return se(r,void 0,void 0,function(){var c,u;return te(this,function(f){switch(f.label){case 0:return this.scrolledElements.forEach(ex),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:s.fonts&&s.fonts.ready?[4,s.fonts.ready]:[3,2];case 1:f.sent(),f.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,Y6(s)]:[3,4];case 3:f.sent(),f.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(s,u)}).then(function(){return n})]:[2,n]}})})});return s.open(),s.write(q6(document.doctype)+"<html></html>"),Ax(this.referenceElement.ownerDocument,o,i),s.replaceChild(s.adoptNode(this.documentElement),s.documentElement),s.close(),l},A.prototype.createElementClone=function(e){if(Wu(e,2))debugger;if(J4(e))return this.createCanvasClone(e);if(Ep(e))return this.createVideoClone(e);if(Hp(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Zu(t)&&(Zu(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),kp(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return vc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(o,i){return i&&typeof i.cssText=="string"?o+i.cssText:o},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(o){if(this.context.logger.error("Unable to access cssRules property",o),o.name!=="SecurityError")throw o}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var o=e.getContext("2d"),i=n.getContext("2d");if(i)if(!this.options.allowTaint&&o)i.putImageData(o.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var s=a.getContextAttributes();(s==null?void 0:s.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}i.drawImage(e,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!gn(t)||!G6(t)&&!t.hasAttribute(ev)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!gn(t)||!Hp(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,o=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;o;o=o.nextSibling)if(gn(o)&&q4(o)&&typeof o.assignedNodes=="function"){var i=o.assignedNodes();i.length&&i.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,o,r)},A.prototype.cloneNode=function(e,t){if(X4(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&gn(e)&&(Ju(e)||Ma(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var o=r.getComputedStyle(e),i=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&Ju(n)&&(this.clonedReferenceElement=n),hf(n)&&nx(n);var s=this.counters.parse(new fp(this.context,o)),l=this.resolvePseudoContent(e,n,i,No.BEFORE);kp(e)&&(t=!0),Ep(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var c=this.resolvePseudoContent(e,n,a,No.AFTER);return c&&n.appendChild(c),this.counters.pop(s),(o&&(this.options.copyStyles||Ma(e))&&!Z4(e)||t)&&vc(o,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(ms(e)||Cs(e))&&(ms(n)||Cs(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var o=this;if(r){var i=r.content,a=t.ownerDocument;if(!(!a||!i||i==="none"||i==="-moz-alt-content"||r.display==="none")){this.counters.parse(new fp(this.context,r));var s=new RU(this.context,r),l=a.createElement("html2canvaspseudoelement");vc(r,l),s.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var f=a.createElement("img");f.src=u.value,f.style.opacity="1",l.appendChild(f)}else if(u.type===18){if(u.name==="attr"){var h=u.values.filter(cA);h.length&&l.appendChild(a.createTextNode(e.getAttribute(h[0].value)||""))}else if(u.name==="counter"){var v=u.values.filter(On),m=v[0],x=v[1];if(m&&cA(m)){var g=o.counters.getCounterValue(m.value),d=x&&cA(x)?$u.parse(o.context,x.value):3;l.appendChild(a.createTextNode(ai(g,d,!1)))}}else if(u.name==="counters"){var p=u.values.filter(On),m=p[0],C=p[1],x=p[2];if(m&&cA(m)){var y=o.counters.getCounterValues(m.value),w=x&&cA(x)?$u.parse(o.context,x.value):3,Q=C&&C.type===0?C.value:"",b=y.map(function(AA){return ai(AA,w,!1)}).join(Q);l.appendChild(a.createTextNode(b))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(dp(s.quotes,o.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(dp(s.quotes,--o.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=qu+" "+Ad;var c=n===No.BEFORE?" "+qu:" "+Ad;return Ma(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),No;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(No||(No={}));var W6=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(ev,"true"),A.body.appendChild(t),t},X6=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},Y6=function(A){return Promise.all([].slice.call(A.images,0).map(X6))},J6=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var o=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(o),e(A))},50)}})},Z6=["all","d","content"],vc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);Z6.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},q6=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},Ax=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},ex=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},tx=":before",rx=":after",qu="___html2canvas___pseudoelement_before",Ad="___html2canvas___pseudoelement_after",Tp=`{
    content: "" !important;
    display: none !important;
}`,nx=function(A){ox(A,"."+qu+tx+Tp+`
         .`+Ad+rx+Tp)},ox=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},tv=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),ix=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(mc(e)||cx(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return se(this,void 0,void 0,function(){var t,r,n,o,i=this;return te(this,function(a){switch(a.label){case 0:return t=tv.isSameOrigin(e),r=!wc(e)&&this._options.useCORS===!0&&YA.SUPPORT_CORS_IMAGES&&!t,n=!wc(e)&&!t&&!mc(e)&&typeof this._options.proxy=="string"&&YA.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!wc(e)&&!mc(e)&&!n&&!r?[2]:(o=e,n?[4,this.proxy(o)]:[3,2]);case 1:o=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(s,l){var c=new Image;c.onload=function(){return s(c)},c.onerror=l,(ux(o)||r)&&(c.crossOrigin="anonymous"),c.src=o,c.complete===!0&&setTimeout(function(){return s(c)},500),i._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+i._options.imageTimeout+"ms) loading image")},i._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(o,i){var a=YA.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest;s.onload=function(){if(s.status===200)if(a==="text")o(s.response);else{var u=new FileReader;u.addEventListener("load",function(){return o(u.result)},!1),u.addEventListener("error",function(f){return i(f)},!1),u.readAsDataURL(s.response)}else i("Failed to proxy resource "+n+" with status code "+s.status)},s.onerror=i;var l=r.indexOf("?")>-1?"&":"?";if(s.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;s.timeout=c,s.ontimeout=function(){return i("Timed out ("+c+"ms) proxying "+n)}}s.send()})},A}(),ax=/^data:image\/svg\+xml/i,sx=/^data:image\/.*;base64,/i,lx=/^data:image\/.*/i,cx=function(A){return YA.SUPPORT_SVG_DRAWING||!dx(A)},wc=function(A){return lx.test(A)},ux=function(A){return sx.test(A)},mc=function(A){return A.substr(0,4)==="blob"},dx=function(A){return A.substr(-3).toLowerCase()==="svg"||ax.test(A)},_=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Xr=function(A,e,t){return new _(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},na=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Xr(this.start,this.startControl,e),n=Xr(this.startControl,this.endControl,e),o=Xr(this.endControl,this.end,e),i=Xr(r,n,e),a=Xr(n,o,e),s=Xr(i,a,e);return t?new A(this.start,r,i,s):new A(s,a,o,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),De=function(A){return A.type===1},fx=function(){function A(e){var t=e.styles,r=e.bounds,n=mo(t.borderTopLeftRadius,r.width,r.height),o=n[0],i=n[1],a=mo(t.borderTopRightRadius,r.width,r.height),s=a[0],l=a[1],c=mo(t.borderBottomRightRadius,r.width,r.height),u=c[0],f=c[1],h=mo(t.borderBottomLeftRadius,r.width,r.height),v=h[0],m=h[1],x=[];x.push((o+s)/r.width),x.push((v+u)/r.width),x.push((i+m)/r.height),x.push((l+f)/r.height);var g=Math.max.apply(Math,x);g>1&&(o/=g,i/=g,s/=g,l/=g,u/=g,f/=g,v/=g,m/=g);var d=r.width-s,p=r.height-f,C=r.width-u,y=r.height-m,w=t.borderTopWidth,Q=t.borderRightWidth,b=t.borderBottomWidth,H=t.borderLeftWidth,M=dA(t.paddingTop,e.bounds.width),AA=dA(t.paddingRight,e.bounds.width),Y=dA(t.paddingBottom,e.bounds.width),$=dA(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=o>0||i>0?mA(r.left+H/3,r.top+w/3,o-H/3,i-w/3,aA.TOP_LEFT):new _(r.left+H/3,r.top+w/3),this.topRightBorderDoubleOuterBox=o>0||i>0?mA(r.left+d,r.top+w/3,s-Q/3,l-w/3,aA.TOP_RIGHT):new _(r.left+r.width-Q/3,r.top+w/3),this.bottomRightBorderDoubleOuterBox=u>0||f>0?mA(r.left+C,r.top+p,u-Q/3,f-b/3,aA.BOTTOM_RIGHT):new _(r.left+r.width-Q/3,r.top+r.height-b/3),this.bottomLeftBorderDoubleOuterBox=v>0||m>0?mA(r.left+H/3,r.top+y,v-H/3,m-b/3,aA.BOTTOM_LEFT):new _(r.left+H/3,r.top+r.height-b/3),this.topLeftBorderDoubleInnerBox=o>0||i>0?mA(r.left+H*2/3,r.top+w*2/3,o-H*2/3,i-w*2/3,aA.TOP_LEFT):new _(r.left+H*2/3,r.top+w*2/3),this.topRightBorderDoubleInnerBox=o>0||i>0?mA(r.left+d,r.top+w*2/3,s-Q*2/3,l-w*2/3,aA.TOP_RIGHT):new _(r.left+r.width-Q*2/3,r.top+w*2/3),this.bottomRightBorderDoubleInnerBox=u>0||f>0?mA(r.left+C,r.top+p,u-Q*2/3,f-b*2/3,aA.BOTTOM_RIGHT):new _(r.left+r.width-Q*2/3,r.top+r.height-b*2/3),this.bottomLeftBorderDoubleInnerBox=v>0||m>0?mA(r.left+H*2/3,r.top+y,v-H*2/3,m-b*2/3,aA.BOTTOM_LEFT):new _(r.left+H*2/3,r.top+r.height-b*2/3),this.topLeftBorderStroke=o>0||i>0?mA(r.left+H/2,r.top+w/2,o-H/2,i-w/2,aA.TOP_LEFT):new _(r.left+H/2,r.top+w/2),this.topRightBorderStroke=o>0||i>0?mA(r.left+d,r.top+w/2,s-Q/2,l-w/2,aA.TOP_RIGHT):new _(r.left+r.width-Q/2,r.top+w/2),this.bottomRightBorderStroke=u>0||f>0?mA(r.left+C,r.top+p,u-Q/2,f-b/2,aA.BOTTOM_RIGHT):new _(r.left+r.width-Q/2,r.top+r.height-b/2),this.bottomLeftBorderStroke=v>0||m>0?mA(r.left+H/2,r.top+y,v-H/2,m-b/2,aA.BOTTOM_LEFT):new _(r.left+H/2,r.top+r.height-b/2),this.topLeftBorderBox=o>0||i>0?mA(r.left,r.top,o,i,aA.TOP_LEFT):new _(r.left,r.top),this.topRightBorderBox=s>0||l>0?mA(r.left+d,r.top,s,l,aA.TOP_RIGHT):new _(r.left+r.width,r.top),this.bottomRightBorderBox=u>0||f>0?mA(r.left+C,r.top+p,u,f,aA.BOTTOM_RIGHT):new _(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=v>0||m>0?mA(r.left,r.top+y,v,m,aA.BOTTOM_LEFT):new _(r.left,r.top+r.height),this.topLeftPaddingBox=o>0||i>0?mA(r.left+H,r.top+w,Math.max(0,o-H),Math.max(0,i-w),aA.TOP_LEFT):new _(r.left+H,r.top+w),this.topRightPaddingBox=s>0||l>0?mA(r.left+Math.min(d,r.width-Q),r.top+w,d>r.width+Q?0:Math.max(0,s-Q),Math.max(0,l-w),aA.TOP_RIGHT):new _(r.left+r.width-Q,r.top+w),this.bottomRightPaddingBox=u>0||f>0?mA(r.left+Math.min(C,r.width-H),r.top+Math.min(p,r.height-b),Math.max(0,u-Q),Math.max(0,f-b),aA.BOTTOM_RIGHT):new _(r.left+r.width-Q,r.top+r.height-b),this.bottomLeftPaddingBox=v>0||m>0?mA(r.left+H,r.top+Math.min(y,r.height-b),Math.max(0,v-H),Math.max(0,m-b),aA.BOTTOM_LEFT):new _(r.left+H,r.top+r.height-b),this.topLeftContentBox=o>0||i>0?mA(r.left+H+$,r.top+w+M,Math.max(0,o-(H+$)),Math.max(0,i-(w+M)),aA.TOP_LEFT):new _(r.left+H+$,r.top+w+M),this.topRightContentBox=s>0||l>0?mA(r.left+Math.min(d,r.width+H+$),r.top+w+M,d>r.width+H+$?0:s-H+$,l-(w+M),aA.TOP_RIGHT):new _(r.left+r.width-(Q+AA),r.top+w+M),this.bottomRightContentBox=u>0||f>0?mA(r.left+Math.min(C,r.width-(H+$)),r.top+Math.min(p,r.height+w+M),Math.max(0,u-(Q+AA)),f-(b+Y),aA.BOTTOM_RIGHT):new _(r.left+r.width-(Q+AA),r.top+r.height-(b+Y)),this.bottomLeftContentBox=v>0||m>0?mA(r.left+H+$,r.top+y,Math.max(0,v-(H+$)),m-(b+Y),aA.BOTTOM_LEFT):new _(r.left+H+$,r.top+r.height-(b+Y))}return A}(),aA;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(aA||(aA={}));var mA=function(A,e,t,r,n){var o=4*((Math.sqrt(2)-1)/3),i=t*o,a=r*o,s=A+t,l=e+r;switch(n){case aA.TOP_LEFT:return new na(new _(A,l),new _(A,l-a),new _(s-i,e),new _(s,e));case aA.TOP_RIGHT:return new na(new _(A,e),new _(A+i,e),new _(s,l-a),new _(s,l));case aA.BOTTOM_RIGHT:return new na(new _(s,e),new _(s,e+a),new _(A+i,l),new _(A,l));case aA.BOTTOM_LEFT:default:return new na(new _(s,l),new _(s-i,l),new _(A,e+a),new _(A,e))}},Qs=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},gx=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},ys=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},px=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),oa=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),hx=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),Bx=function(A){return A.type===0},rv=function(A){return A.type===1},vx=function(A){return A.type===2},Dp=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},wx=function(A,e,t,r,n){return A.map(function(o,i){switch(i){case 0:return o.add(e,t);case 1:return o.add(e+r,t);case 2:return o.add(e+r,t+n);case 3:return o.add(e,t+n)}return o})},nv=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),ov=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new fx(this.container),this.container.styles.opacity<1&&this.effects.push(new hx(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,o=this.container.styles.transform;this.effects.push(new px(r,n,o))}if(this.container.styles.overflowX!==0){var i=Qs(this.curves),a=ys(this.curves);Dp(i,a)?this.effects.push(new oa(i,6)):(this.effects.push(new oa(i,2)),this.effects.push(new oa(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var o=r.effects.filter(function(s){return!rv(s)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,o),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var i=Qs(r.curves),a=ys(r.curves);Dp(i,a)||n.unshift(new oa(a,6))}}else n.unshift.apply(n,o);r=r.parent}return n.filter(function(s){return NA(s.target,e)})},A}(),ed=function(A,e,t,r){A.container.elements.forEach(function(n){var o=NA(n.flags,4),i=NA(n.flags,2),a=new ov(n,A);NA(n.styles.display,2048)&&r.push(a);var s=NA(n.flags,8)?[]:r;if(o||i){var l=o||n.styles.isPositioned()?t:e,c=new nv(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var u=n.styles.zIndex.order;if(u<0){var f=0;l.negativeZIndex.some(function(v,m){return u>v.element.container.styles.zIndex.order?(f=m,!1):f>0}),l.negativeZIndex.splice(f,0,c)}else if(u>0){var h=0;l.positiveZIndex.some(function(v,m){return u>=v.element.container.styles.zIndex.order?(h=m+1,!1):h>0}),l.positiveZIndex.splice(h,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else n.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);ed(a,c,o?c:t,s)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),ed(a,e,t,s);NA(n.flags,8)&&iv(n,s)})},iv=function(A,e){for(var t=A instanceof Yu?A.start:1,r=A instanceof Yu?A.reversed:!1,n=0;n<e.length;n++){var o=e[n];o.container instanceof V4&&typeof o.container.value=="number"&&o.container.value!==0&&(t=o.container.value),o.listValue=ai(t,o.container.styles.listStyleType,!0),t+=r?-1:1}},mx=function(A){var e=new ov(A,null),t=new nv(e),r=[];return ed(e,t,t,r),iv(e.container,r),t},Np=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},Cx=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Oe(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},Qx=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},yx=function(A,e){switch(e){case 0:return ia(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return ia(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return ia(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return ia(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},ia=function(A,e){var t=[];return De(A)?t.push(A.subdivide(.5,!1)):t.push(A),De(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Oe=function(A,e,t,r){var n=[];return De(A)?n.push(A.subdivide(.5,!1)):n.push(A),De(t)?n.push(t.subdivide(.5,!0)):n.push(t),De(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),De(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},av=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Fs=function(A){var e=A.styles,t=A.bounds,r=dA(e.paddingLeft,t.width),n=dA(e.paddingRight,t.width),o=dA(e.paddingTop,t.width),i=dA(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,o+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+o+i))},Fx=function(A,e){return A===0?e.bounds:A===2?Fs(e):av(e)},Ux=function(A,e){return A===0?e.bounds:A===2?Fs(e):av(e)},Cc=function(A,e,t){var r=Fx(Zr(A.styles.backgroundOrigin,e),A),n=Ux(Zr(A.styles.backgroundClip,e),A),o=xx(Zr(A.styles.backgroundSize,e),t,r),i=o[0],a=o[1],s=mo(Zr(A.styles.backgroundPosition,e),r.width-i,r.height-a),l=bx(Zr(A.styles.backgroundRepeat,e),s,o,r,n),c=Math.round(r.left+s[0]),u=Math.round(r.top+s[1]);return[l,c,u,i,a]},Yr=function(A){return cA(A)&&A.value===Qn.AUTO},aa=function(A){return typeof A=="number"},xx=function(A,e,t){var r=e[0],n=e[1],o=e[2],i=A[0],a=A[1];if(!i)return[0,0];if(KA(i)&&a&&KA(a))return[dA(i,t.width),dA(a,t.height)];var s=aa(o);if(cA(i)&&(i.value===Qn.CONTAIN||i.value===Qn.COVER)){if(aa(o)){var l=t.width/t.height;return l<o!=(i.value===Qn.COVER)?[t.width,t.width/o]:[t.height*o,t.height]}return[t.width,t.height]}var c=aa(r),u=aa(n),f=c||u;if(Yr(i)&&(!a||Yr(a))){if(c&&u)return[r,n];if(!s&&!f)return[t.width,t.height];if(f&&s){var h=c?r:n*o,v=u?n:r/o;return[h,v]}var m=c?r:t.width,x=u?n:t.height;return[m,x]}if(s){var g=0,d=0;return KA(i)?g=dA(i,t.width):KA(a)&&(d=dA(a,t.height)),Yr(i)?g=d*o:(!a||Yr(a))&&(d=g/o),[g,d]}var p=null,C=null;if(KA(i)?p=dA(i,t.width):a&&KA(a)&&(C=dA(a,t.height)),p!==null&&(!a||Yr(a))&&(C=c&&u?p/r*n:t.height),C!==null&&Yr(i)&&(p=c&&u?C/n*r:t.width),p!==null&&C!==null)return[p,C];throw new Error("Unable to calculate background-size for element")},Zr=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},bx=function(A,e,t,r,n){var o=e[0],i=e[1],a=t[0],s=t[1];switch(A){case 2:return[new _(Math.round(r.left),Math.round(r.top+i)),new _(Math.round(r.left+r.width),Math.round(r.top+i)),new _(Math.round(r.left+r.width),Math.round(s+r.top+i)),new _(Math.round(r.left),Math.round(s+r.top+i))];case 3:return[new _(Math.round(r.left+o),Math.round(r.top)),new _(Math.round(r.left+o+a),Math.round(r.top)),new _(Math.round(r.left+o+a),Math.round(r.height+r.top)),new _(Math.round(r.left+o),Math.round(r.height+r.top))];case 1:return[new _(Math.round(r.left+o),Math.round(r.top+i)),new _(Math.round(r.left+o+a),Math.round(r.top+i)),new _(Math.round(r.left+o+a),Math.round(r.top+i+s)),new _(Math.round(r.left+o),Math.round(r.top+i+s))];default:return[new _(Math.round(n.left),Math.round(n.top)),new _(Math.round(n.left+n.width),Math.round(n.top)),new _(Math.round(n.left+n.width),Math.round(n.height+n.top)),new _(Math.round(n.left),Math.round(n.height+n.top))]}},Ex="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Rp="Hidden Text",Hx=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),o=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),n.src=Ex,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",o.style.fontFamily=e,o.style.fontSize=t,o.style.margin="0",o.style.padding="0",o.appendChild(this._document.createTextNode(Rp)),r.appendChild(o),r.appendChild(n);var a=n.offsetTop-o.offsetTop+2;r.removeChild(o),r.appendChild(this._document.createTextNode(Rp)),r.style.lineHeight="normal",n.style.verticalAlign="super";var s=n.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:a,middle:s}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),sv=function(){function A(e,t){this.context=e,this.options=t}return A}(),kx=1e4,Ix=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new Hx(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),vx(t)&&(this.ctx.globalAlpha=t.opacity),Bx(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),rv(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return se(this,void 0,void 0,function(){var r;return te(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return se(this,void 0,void 0,function(){return te(this,function(r){switch(r.label){case 0:if(NA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var o=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var i=gf(t.text);i.reduce(function(a,s){return o.ctx.fillText(s,a,t.bounds.top+n),a+o.ctx.measureText(s).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(i){return i==="normal"||i==="small-caps"}).join(""),n=Kx(t.fontFamily).join(", "),o=hi(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,o,n].join(" "),n,o]},e.prototype.renderTextNode=function(t,r){return se(this,void 0,void 0,function(){var n,o,i,a,s,l,c,u,f=this;return te(this,function(h){return n=this.createFontStyle(r),o=n[0],i=n[1],a=n[2],this.ctx.font=o,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",s=this.fontMetrics.getMetrics(i,a),l=s.baseline,c=s.middle,u=r.paintOrder,t.textBounds.forEach(function(v){u.forEach(function(m){switch(m){case 0:f.ctx.fillStyle=GA(r.color),f.renderTextWithLetterSpacing(v,r.letterSpacing,l);var x=r.textShadow;x.length&&v.text.trim().length&&(x.slice(0).reverse().forEach(function(g){f.ctx.shadowColor=GA(g.color),f.ctx.shadowOffsetX=g.offsetX.number*f.options.scale,f.ctx.shadowOffsetY=g.offsetY.number*f.options.scale,f.ctx.shadowBlur=g.blur.number,f.renderTextWithLetterSpacing(v,r.letterSpacing,l)}),f.ctx.shadowColor="",f.ctx.shadowOffsetX=0,f.ctx.shadowOffsetY=0,f.ctx.shadowBlur=0),r.textDecorationLine.length&&(f.ctx.fillStyle=GA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(g){switch(g){case 1:f.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top+l),v.bounds.width,1);break;case 2:f.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top),v.bounds.width,1);break;case 3:f.ctx.fillRect(v.bounds.left,Math.ceil(v.bounds.top+c),v.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&v.text.trim().length&&(f.ctx.strokeStyle=GA(r.webkitTextStrokeColor),f.ctx.lineWidth=r.webkitTextStrokeWidth,f.ctx.lineJoin=window.chrome?"miter":"round",f.ctx.strokeText(v.text,v.bounds.left,v.bounds.top+l)),f.ctx.strokeStyle="",f.ctx.lineWidth=0,f.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var o=Fs(t),i=ys(r);this.path(i),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,o.left,o.top,o.width,o.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return se(this,void 0,void 0,function(){var r,n,o,i,a,s,d,d,l,c,u,f,C,h,v,y,m,x,g,d,p,C,y;return te(this,function(w){switch(w.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,o=r.styles,i=0,a=r.textNodes,w.label=1;case 1:return i<a.length?(s=a[i],[4,this.renderTextNode(s,o)]):[3,4];case 2:w.sent(),w.label=3;case 3:return i++,[3,1];case 4:if(!(r instanceof R4))return[3,8];w.label=5;case 5:return w.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return d=w.sent(),this.renderReplacedElement(r,n,d),[3,8];case 7:return w.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof O4&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof P4))return[3,12];w.label=9;case 9:return w.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return d=w.sent(),this.renderReplacedElement(r,n,d),[3,12];case 11:return w.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof z4&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:c=w.sent(),r.width&&r.height&&this.ctx.drawImage(c,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),w.label=14;case 14:if(r instanceof pf&&(u=Math.min(r.bounds.width,r.bounds.height),r.type===vs?r.checked&&(this.ctx.save(),this.path([new _(r.bounds.left+u*.39363,r.bounds.top+u*.79),new _(r.bounds.left+u*.16,r.bounds.top+u*.5549),new _(r.bounds.left+u*.27347,r.bounds.top+u*.44071),new _(r.bounds.left+u*.39694,r.bounds.top+u*.5649),new _(r.bounds.left+u*.72983,r.bounds.top+u*.23),new _(r.bounds.left+u*.84,r.bounds.top+u*.34085),new _(r.bounds.left+u*.39363,r.bounds.top+u*.79)]),this.ctx.fillStyle=GA(bp),this.ctx.fill(),this.ctx.restore()):r.type===ws&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+u/2,r.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=GA(bp),this.ctx.fill(),this.ctx.restore())),Lx(r)&&r.value.length){switch(f=this.createFontStyle(o),C=f[0],h=f[1],v=this.fontMetrics.getMetrics(C,h).baseline,this.ctx.font=C,this.ctx.fillStyle=GA(o.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=Mx(r.styles.textAlign),y=Fs(r),m=0,r.styles.textAlign){case 1:m+=y.width/2;break;case 2:m+=y.width;break}x=y.add(m,0,0,-y.height/2+1),this.ctx.save(),this.path([new _(y.left,y.top),new _(y.left+y.width,y.top),new _(y.left+y.width,y.top+y.height),new _(y.left,y.top+y.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Do(r.value,x),o.letterSpacing,v),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!NA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(g=r.styles.listStyleImage,g.type!==0)return[3,18];d=void 0,p=g.url,w.label=15;case 15:return w.trys.push([15,17,,18]),[4,this.context.cache.match(p)];case 16:return d=w.sent(),this.ctx.drawImage(d,r.bounds.left-(d.width+10),r.bounds.top),[3,18];case 17:return w.sent(),this.context.logger.error("Error loading list-style-image "+p),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(C=this.createFontStyle(o)[0],this.ctx.font=C,this.ctx.fillStyle=GA(o.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",y=new Dt(r.bounds.left,r.bounds.top+dA(r.styles.paddingTop,r.bounds.width),r.bounds.width,cp(o.lineHeight,o.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Do(t.listValue,y),o.letterSpacing,cp(o.lineHeight,o.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),w.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return se(this,void 0,void 0,function(){var r,n,g,o,i,g,a,s,g,l,c,g,u,f,g,h,v,g,m,x,g;return te(this,function(d){switch(d.label){case 0:if(NA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:d.sent(),r=0,n=t.negativeZIndex,d.label=2;case 2:return r<n.length?(g=n[r],[4,this.renderStack(g)]):[3,5];case 3:d.sent(),d.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:d.sent(),o=0,i=t.nonInlineLevel,d.label=7;case 7:return o<i.length?(g=i[o],[4,this.renderNode(g)]):[3,10];case 8:d.sent(),d.label=9;case 9:return o++,[3,7];case 10:a=0,s=t.nonPositionedFloats,d.label=11;case 11:return a<s.length?(g=s[a],[4,this.renderStack(g)]):[3,14];case 12:d.sent(),d.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,d.label=15;case 15:return l<c.length?(g=c[l],[4,this.renderStack(g)]):[3,18];case 16:d.sent(),d.label=17;case 17:return l++,[3,15];case 18:u=0,f=t.inlineLevel,d.label=19;case 19:return u<f.length?(g=f[u],[4,this.renderNode(g)]):[3,22];case 20:d.sent(),d.label=21;case 21:return u++,[3,19];case 22:h=0,v=t.zeroOrAutoZIndexOrTransformedOrOpacity,d.label=23;case 23:return h<v.length?(g=v[h],[4,this.renderStack(g)]):[3,26];case 24:d.sent(),d.label=25;case 25:return h++,[3,23];case 26:m=0,x=t.positiveZIndex,d.label=27;case 27:return m<x.length?(g=x[m],[4,this.renderStack(g)]):[3,30];case 28:d.sent(),d.label=29;case 29:return m++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,o){var i=De(n)?n.start:n;o===0?r.ctx.moveTo(i.x,i.y):r.ctx.lineTo(i.x,i.y),De(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,o){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,o),this.ctx.fill(),this.ctx.translate(-n,-o)},e.prototype.resizeImage=function(t,r,n){var o;if(t.width===r&&t.height===n)return t;var i=(o=this.canvas.ownerDocument)!==null&&o!==void 0?o:document,a=i.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var s=a.getContext("2d");return s.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return se(this,void 0,void 0,function(){var r,n,o,i,a,s;return te(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(c){var u,f,h,M,T,J,$,S,b,v,M,T,J,$,S,m,x,g,d,p,C,y,w,Q,b,H,M,AA,Y,$,S,G,T,J,E,I,O,z,W,FA,uA,nA;return te(this,function(sA){switch(sA.label){case 0:if(c.type!==0)return[3,5];u=void 0,f=c.url,sA.label=1;case 1:return sA.trys.push([1,3,,4]),[4,o.context.cache.match(f)];case 2:return u=sA.sent(),[3,4];case 3:return sA.sent(),o.context.logger.error("Error loading background-image "+f),[3,4];case 4:return u&&(h=Cc(t,r,[u.width,u.height,u.width/u.height]),M=h[0],T=h[1],J=h[2],$=h[3],S=h[4],b=o.ctx.createPattern(o.resizeImage(u,$,S),"repeat"),o.renderRepeat(M,b,T,J)),[3,6];case 5:BF(c)?(v=Cc(t,r,[null,null,null]),M=v[0],T=v[1],J=v[2],$=v[3],S=v[4],m=dF(c.angle,$,S),x=m[0],g=m[1],d=m[2],p=m[3],C=m[4],y=document.createElement("canvas"),y.width=$,y.height=S,w=y.getContext("2d"),Q=w.createLinearGradient(g,p,d,C),sp(c.stops,x).forEach(function(gA){return Q.addColorStop(gA.stop,GA(gA.color))}),w.fillStyle=Q,w.fillRect(0,0,$,S),$>0&&S>0&&(b=o.ctx.createPattern(y,"repeat"),o.renderRepeat(M,b,T,J))):vF(c)&&(H=Cc(t,r,[null,null,null]),M=H[0],AA=H[1],Y=H[2],$=H[3],S=H[4],G=c.position.length===0?[uf]:c.position,T=dA(G[0],$),J=dA(G[G.length-1],S),E=fF(c,T,J,$,S),I=E[0],O=E[1],I>0&&O>0&&(z=o.ctx.createRadialGradient(AA+T,Y+J,0,AA+T,Y+J,I),sp(c.stops,I*2).forEach(function(gA){return z.addColorStop(gA.stop,GA(gA.color))}),o.path(M),o.ctx.fillStyle=z,I!==O?(W=t.bounds.left+.5*t.bounds.width,FA=t.bounds.top+.5*t.bounds.height,uA=O/I,nA=1/uA,o.ctx.save(),o.ctx.translate(W,FA),o.ctx.transform(1,0,0,uA,0,0),o.ctx.translate(-W,-FA),o.ctx.fillRect(AA,nA*(Y-FA)+FA,$,S*nA),o.ctx.restore()):o.ctx.fill())),sA.label=6;case 6:return r--,[2]}})},o=this,i=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return i<a.length?(s=a[i],[5,n(s)]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return se(this,void 0,void 0,function(){return te(this,function(o){return this.path(Np(n,r)),this.ctx.fillStyle=GA(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,o){return se(this,void 0,void 0,function(){var i,a;return te(this,function(s){switch(s.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,o)]:[3,2];case 1:return s.sent(),[2];case 2:return i=Cx(o,n),this.path(i),this.ctx.fillStyle=GA(t),this.ctx.fill(),a=Qx(o,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return se(this,void 0,void 0,function(){var r,n,o,i,a,s,l,c,u=this;return te(this,function(f){switch(f.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!cr(r.backgroundColor)||r.backgroundImage.length,o=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],i=Sx(Zr(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(i),this.ctx.clip(),cr(r.backgroundColor)||(this.ctx.fillStyle=GA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:f.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(h){u.ctx.save();var v=Qs(t.curves),m=h.inset?0:kx,x=wx(v,-m+(h.inset?1:-1)*h.spread.number,(h.inset?1:-1)*h.spread.number,h.spread.number*(h.inset?-2:2),h.spread.number*(h.inset?-2:2));h.inset?(u.path(v),u.ctx.clip(),u.mask(x)):(u.mask(v),u.ctx.clip(),u.path(x)),u.ctx.shadowOffsetX=h.offsetX.number+m,u.ctx.shadowOffsetY=h.offsetY.number,u.ctx.shadowColor=GA(h.color),u.ctx.shadowBlur=h.blur.number,u.ctx.fillStyle=h.inset?GA(h.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),f.label=2;case 2:a=0,s=0,l=o,f.label=3;case 3:return s<l.length?(c=l[s],c.style!==0&&!cr(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return f.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return f.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return f.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:f.sent(),f.label=11;case 11:a++,f.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,o,i){return se(this,void 0,void 0,function(){var a,s,l,c,u,f,h,v,m,x,g,d,p,C,y,w,y,w;return te(this,function(Q){return this.ctx.save(),a=yx(o,n),s=Np(o,n),i===2&&(this.path(s),this.ctx.clip()),De(s[0])?(l=s[0].start.x,c=s[0].start.y):(l=s[0].x,c=s[0].y),De(s[1])?(u=s[1].end.x,f=s[1].end.y):(u=s[1].x,f=s[1].y),n===0||n===2?h=Math.abs(l-u):h=Math.abs(c-f),this.ctx.beginPath(),i===3?this.formatPath(a):this.formatPath(s.slice(0,2)),v=r<3?r*3:r*2,m=r<3?r*2:r,i===3&&(v=r,m=r),x=!0,h<=v*2?x=!1:h<=v*2+m?(g=h/(2*v+m),v*=g,m*=g):(d=Math.floor((h+m)/(v+m)),p=(h-d*v)/(d-1),C=(h-(d+1)*v)/d,m=C<=0||Math.abs(m-p)<Math.abs(m-C)?p:C),x&&(i===3?this.ctx.setLineDash([0,v+m]):this.ctx.setLineDash([v,m])),i===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=GA(t),this.ctx.stroke(),this.ctx.setLineDash([]),i===2&&(De(s[0])&&(y=s[3],w=s[0],this.ctx.beginPath(),this.formatPath([new _(y.end.x,y.end.y),new _(w.start.x,w.start.y)]),this.ctx.stroke()),De(s[1])&&(y=s[1],w=s[2],this.ctx.beginPath(),this.formatPath([new _(y.end.x,y.end.y),new _(w.start.x,w.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return se(this,void 0,void 0,function(){var r;return te(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=GA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=mx(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(sv),Lx=function(A){return A instanceof j4||A instanceof G4?!0:A instanceof pf&&A.type!==ws&&A.type!==vs},Sx=function(A,e){switch(A){case 0:return Qs(e);case 2:return gx(e);case 1:default:return ys(e)}},Mx=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},_x=["-apple-system","system-ui"],Kx=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return _x.indexOf(e)===-1}):A},Tx=function(A){st(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return se(this,void 0,void 0,function(){var r,n;return te(this,function(o){switch(o.label){case 0:return r=Xu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,Dx(r)];case 1:return n=o.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=GA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(sv),Dx=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},Nx=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ni([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),Rx=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new Nx({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new ix(this,e)}return A.instanceCount=1,A}(),Ox=function(A,e){return e===void 0&&(e={}),Px(A,e)};typeof window<"u"&&tv.setContext(window);var Px=function(A,e){return se(void 0,void 0,void 0,function(){var t,r,n,o,i,a,s,l,c,u,f,h,v,m,x,g,d,p,C,y,Q,w,Q,b,H,M,AA,Y,$,S,G,T,J,E,I,O,z,W,FA,uA;return te(this,function(nA){switch(nA.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(b=e.allowTaint)!==null&&b!==void 0?b:!1,imageTimeout:(H=e.imageTimeout)!==null&&H!==void 0?H:15e3,proxy:e.proxy,useCORS:(M=e.useCORS)!==null&&M!==void 0?M:!1},o=Mu({logging:(AA=e.logging)!==null&&AA!==void 0?AA:!0,cache:e.cache},n),i={windowWidth:(Y=e.windowWidth)!==null&&Y!==void 0?Y:r.innerWidth,windowHeight:($=e.windowHeight)!==null&&$!==void 0?$:r.innerHeight,scrollX:(S=e.scrollX)!==null&&S!==void 0?S:r.pageXOffset,scrollY:(G=e.scrollY)!==null&&G!==void 0?G:r.pageYOffset},a=new Dt(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),s=new Rx(o,a),l=(T=e.foreignObjectRendering)!==null&&T!==void 0?T:!1,c={allowTaint:(J=e.allowTaint)!==null&&J!==void 0?J:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},s.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new Kp(s,A,c),f=u.clonedReferenceElement,f?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return h=nA.sent(),v=hf(f)||V6(f)?w8(f.ownerDocument):rl(s,f),m=v.width,x=v.height,g=v.left,d=v.top,p=Vx(s,f,e.backgroundColor),C={canvas:e.canvas,backgroundColor:p,scale:(I=(E=e.scale)!==null&&E!==void 0?E:r.devicePixelRatio)!==null&&I!==void 0?I:1,x:((O=e.x)!==null&&O!==void 0?O:0)+g,y:((z=e.y)!==null&&z!==void 0?z:0)+d,width:(W=e.width)!==null&&W!==void 0?W:Math.ceil(m),height:(FA=e.height)!==null&&FA!==void 0?FA:Math.ceil(x)},l?(s.logger.debug("Document cloned, using foreign object rendering"),Q=new Tx(s,C),[4,Q.render(f)]):[3,3];case 2:return y=nA.sent(),[3,5];case 3:return s.logger.debug("Document cloned, element located at "+g+","+d+" with size "+m+"x"+x+" using computed rendering"),s.logger.debug("Starting DOM parsing"),w=W4(s,f),p===w.styles.backgroundColor&&(w.styles.backgroundColor=St.TRANSPARENT),s.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),Q=new Ix(s,C),[4,Q.render(w)];case 4:y=nA.sent(),nA.label=5;case 5:return(!((uA=e.removeContainer)!==null&&uA!==void 0)||uA)&&(Kp.destroy(h)||s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),s.logger.debug("Finished rendering"),[2,y]}})})},Vx=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?Ko(A,getComputedStyle(r.documentElement).backgroundColor):St.TRANSPARENT,o=r.body?Ko(A,getComputedStyle(r.body).backgroundColor):St.TRANSPARENT,i=typeof t=="string"?Ko(A,t):t===null?St.TRANSPARENT:4294967295;return e===r.documentElement?cr(n)?cr(o)?i:o:n:i};const lv=(A,e,t)=>{A&&Ox(A,{scale:t,useCORS:!0}).then(function(r){r.toBlob(function(n){const o=document.createElement("a");o.href=URL.createObjectURL(n),o.download="image.png",e&&(o.download=e),o.click(),URL.revokeObjectURL(o.href)})})},Gx=({align:A="right",onClick:e,children:t})=>U.jsxs(jx,{className:"relative",children:[t,U.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:A==="left"?"0px":"100%"},children:U.jsx(OA,{name:"close-fill",fill:"var(--color-red-6)"})})]}),jx=vt.div`
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
`,zx="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg",sa=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],$x=({})=>{const[A,e]=k.useState(""),t=k.useRef(null),r=k.useRef(null),[n,o]=k.useState(2),[i,a]=k.useState([]),[s,l]=k.useState({w:200,h:200,ratio:1});k.useEffect(()=>{if(!t.current)return;const S=t.current.getBoundingClientRect();l({w:S.width,h:S.height,ratio:S.width/S.height})},[A,t]),k.useEffect(()=>{if(!r.current)return;const S=new ResizeObserver(G=>{for(const T of G)o(T.contentRect.width/T.contentRect.height)});return S.observe(r.current),()=>S.disconnect()},[r]);const c=()=>{if(i.length>=0)if(i.length<8){let S="";window.EyeDropper||x(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(T=>{S=T.sRGBHex,a([...i,{id:`${S}`,value:S}])}).catch(()=>{x(!0,"出错了～")})}else x(!0,"已达上限～长按删除后重试");else x(!0,"请先上传图片～")},u=S=>{const G=i.filter(T=>T.id!==S);a(G)},[f,h]=k.useState(!1),[v,m]=k.useState(""),x=(S,G)=>{m(G),h(S);const T=setTimeout(()=>{h(!1),clearTimeout(T)},1e3)},[g,d]=k.useState(10),[p,C]=k.useState(!0);k.useEffect(()=>{g>0?C(!0):C(!1)},[g]),k.useEffect(()=>{d(p?g||10:0)},[p]);const[y,w]=k.useState(6);k.useEffect(()=>{AA(A)},[g,p,y]);const Q=S=>{const G=j(`rgb(${S[0]},${S[1]},${S[2]})`).toHsv();return G.s<=g/100||G.v<=g/100};function b(S,G,T=32){if(Q(S))return!0;const J=S[0]-G[0],E=S[1]-G[1],I=S[2]-G[2];return Math.sqrt(J*J+E*E+I*I)<T}const H=S=>{const G=document.createElement("canvas"),T=G.getContext("2d");return G.width=S.width,G.height=S.height,T==null||T.drawImage(S,0,0,S.width,S.height),T==null?void 0:T.getImageData(0,0,S.width,S.height).data},M=S=>{const G=H(S);if(!G)return;const T=new Map;for(let I=0;I<G.length;I+=4){const z=[G[I],G[I+1],G[I+2]].join(",");T.has(z)?T.set(z,T.get(z)+1):T.set(z,1)}let J=Array.from(T.entries()).sort((I,O)=>O[1]-I[1]).map(I=>I[0].split(",").map(O=>parseInt(O)));const E=[];for(const I of J)if(!E.some(O=>b(I,O,32))&&!Q(I)&&E.push(I),E.length>=y)break;return E},AA=S=>{const G=new Image;G.src=S,G.onload=()=>{var J;const T=((J=M(G))==null?void 0:J.map(E=>({id:E[0]+E[1]+E[2],value:`#${j(`rgb(${E[0]},${E[1]},${E[2]})`).toHex()}`})))??[];a(T)}},[Y,$]=k.useState(["","","","","",""]);return U.jsxs(Xs,{className:"flex-1 flex column items-start gap-32 px-24 pt-32 pb-24 width-100",children:[U.jsxs(oe,{column:!0,gap:24,children:[U.jsx(Lu,{mainTitle:"Step 01: 上传文件",subTitle:"点击或拖拽来上传图片，以像素为单位对颜色计数"}),U.jsx("div",{className:"width-100",style:{height:"240px"},children:U.jsx(LB,{fileType:"image/*",onUpload:S=>{e(S),a([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:A&&U.jsx("div",{ref:r,className:"flex items-center justify-center width-100 height-100",children:U.jsx("img",{ref:t,src:A,className:`radius-8 ${s.ratio<n?"height-100":"width-100"}`})})})})]}),U.jsxs("div",{className:"flex column width-100",children:[U.jsxs("div",{className:"width-100 flex column",children:[U.jsx(Be,{title:"Step 02: 取色配置",type:"h3"}),U.jsx(Be,{title:U.jsxs(U.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",U.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",U.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(i==null?void 0:i.length)!==0&&U.jsxs("div",{className:"flex gap-24 mt-12",children:[U.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[U.jsx(lQ,{text:"过滤中性色",checked:p,onChange:()=>{C(!p)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),U.jsx(yu,{max:35,min:0,step:5,value:g,onChange:S=>d(Number(S))})]}),U.jsx(MQ,{title:"数量",width:124,data:[{value:"1",label:"4"},{value:"2",label:"6"},{value:"3",label:"8"}],selected:"2",onChange:S=>{w(Number(S.label))}})]})]}),U.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[i.length===0&&A&&U.jsx("div",{className:"absolute",style:{zIndex:1},children:U.jsx(Cn,{text:"提取颜色",type:"background",status:"primary",onClick:()=>{AA(A)}})}),i.length===0?sa==null?void 0:sa.map((S,G)=>U.jsx(Op,{className:"flex column relative justify-center gap-4 disabled",children:U.jsx(C1,{value:S.value,showList:!1})},G)):i==null?void 0:i.map((S,G)=>U.jsx(Gx,{onClick:()=>u(S.id),children:U.jsx(Op,{className:"flex column relative justify-center gap-4",children:U.jsx(C1,{value:S.value,showList:!1,onChange:T=>{const J=i.map(E=>({id:E.id,value:E.id==S.id?`#${j(T).toHex()}`:E.value}));a(J)}})},G)})),i.length!==0&&i.length<8&&U.jsxs(Wx,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>c(),children:[U.jsx(zQ,{}),U.jsx(Lt,{content:"点击吸取颜色",theme:"dark"})]})]})]}),U.jsxs(oe,{column:!0,gap:8,children:[U.jsx(Be,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),U.jsx(Be,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(i==null?void 0:i.length)===0?U.jsx(Pp,{className:"grid mx-32 gap-24 pb-24 disabled",length:6,children:Array.from({length:6}).map((S,G)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(Vp,{className:`StyleColorCardBox relative p-24 flex gap-4 width-100 border color-card card-${G} column`,width:s.w,height:s.h,ratio:s.ratio,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:zx})}),U.jsx("div",{className:"color-list grid gap-4",children:(i==null?void 0:i.length)===0?sa.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]})):i.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]}))})]}),U.jsx(Cn,{type:"background",className:"width-100",text:"下载色卡",icon:U.jsx(OA,{name:"download"})})]}))}):U.jsx(Pp,{className:"grid mx-32 gap-24",length:i.length,children:Array.from({length:6}).map((S,G)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(Vp,{className:`relative p-24 flex gap-4 width-100 border color-card card-${G} ${s.ratio<1?"":"column"}`,width:s.w,height:s.h,ratio:s.ratio,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:A})}),U.jsx("div",{className:"color-list grid gap-4",children:i.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]}))})]}),U.jsxs("div",{className:"width-100 flex gap-12",children:[U.jsx(So,{placeholder:"自定义色卡名称",value:Y[G],onChange:T=>{const J=Y.map((E,I)=>I===G?String(T):E);$(J)},className:"flex-1"}),U.jsx(Cn,{type:"background",className:"flex-1",text:"下载色卡",icon:U.jsx(OA,{name:"download"}),onClick:()=>{const T=document.querySelectorAll(".color-card");lv(T[G],Y[G],4)}})]})]}))}),U.jsx(kB,{show:f,text:v})]})},Op=vt.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Wx=vt.div`
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
`,Pp=vt.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Vp=vt.div`
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
`,Xx=({})=>{const A=k.useRef(null),[e,t]=k.useState(""),[r,n]=k.useState(12),[o,i]=k.useState(12),a=k.useMemo(()=>Array.from({length:r}).map((d,p)=>Array.from({length:o}).map((C,y)=>({key:`${p}-${y}`,value:"transparent"}))),[r,o]),[s,l]=k.useState(a);k.useEffect(()=>{l(a)},[r,o]);const[c,u]=k.useState(""),f=k.useRef(null),h=k.useRef(null),[v,m]=k.useState(2),[x,g]=k.useState({w:200,h:200,ratio:1});return k.useEffect(()=>{if(!f.current)return;const d=f.current.getBoundingClientRect();g({w:d.width,h:d.height,ratio:d.width/d.height})},[c,f]),k.useEffect(()=>{if(!h.current)return;const d=new ResizeObserver(p=>{for(const C of p)m(C.contentRect.width/C.contentRect.height)});return d.observe(h.current),()=>d.disconnect()},[h]),U.jsxs(Yx,{className:"flex-1 flex column items-start gap-32 py-24 px-16 width-100",children:[U.jsx("div",{className:"scrollbar-none",style:{width:"calc(100vw - 32px - 20px)",maxHeight:"calc(100vh - 64px - 48px - 76px - 140px - 37px - 72px - 26px)",maxWidth:"800px",margin:"0 auto"},children:U.jsx("div",{ref:A,className:"flex flex-wrap",style:{width:`${r*16}px`,height:`${o*16}px`,margin:"auto",background:c?`url(${c}) center center/contain no-repeat`:"unset"},children:Array.from({length:r}).map((d,p)=>U.jsx("div",{className:"flex column",style:{flexDirection:"column-reverse"},children:Array.from({length:o}).map((C,y)=>U.jsx(Jx,{className:`relative transition ${e===`${p}-${y}`?"active":""} ${p===0?"first-column":""} ${y===0?"last-row":""}`,style:{backgroundColor:s[p][y].value},onClick:()=>t(`${p}-${y}`),children:U.jsx("input",{type:"color",className:" opacity-0",onChange:w=>{const Q=s.map(b=>b.map(H=>H.key===e?{key:H.key,value:w.target.value}:H));l(Q)}})},y))},p))})}),U.jsxs(oe,{column:!0,gap:8,children:[U.jsx(Lu,{mainTitle:"设置画布大小",mainInfo:"画布大小范围为 4x4 - 48x48"}),U.jsxs(oe,{gap:16,bothCenter:!0,children:[U.jsx(Be,{title:"宽:",type:"p"}),U.jsx(yu,{value:r,onChange:(d,p)=>p>=4&&p<=48&&n(p)}),U.jsx(Be,{title:"高:",type:"p"}),U.jsx(yu,{value:o,onChange:(d,p)=>p>=4&&p<=48&&i(p)})]})]}),U.jsxs(oe,{column:!0,gap:8,children:[U.jsx(Lu,{mainTitle:"导入参考图"}),U.jsx(oe,{gap:16,bothCenter:!0,children:U.jsx(LB,{fileType:"image/*",height:"100px",onUpload:d=>u(d),desc:"点击上传图片或将图片拖拽于此",className:"radius-12",width:"100%",children:c&&U.jsx("div",{ref:h,className:"flex items-center justify-center width-100 height-100",children:U.jsx("img",{ref:f,src:c,className:`radius-8 ${x.ratio<v?"height-100":"width-100"}`})})})})]}),U.jsxs(oe,{justify:"center",gap:12,children:[U.jsx(Cn,{text:"清空画布",onClick:()=>l(a)}),U.jsx(Cn,{text:"立即下载",type:"background",className:"flex-1",onClick:()=>{lv(A.current,"pixel-res",1)}})]})]})},Yx=vt(Xs)`
  @media screen and (max-width: 800px){
    .land-uploader-desc{
      font-size: 12px;
    }
  }
`,Jx=vt.label`
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    &::after{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--color-border-1);
      box-sizing: border-box;
    }
    &.active{
      &::after{
        border-color: var(--color-text-5);
        z-index: 1;
      }
    }
    input{
      width: 0px;
      height: 0px;
      inline-size: 0px;
      padding: 0;
    }
    /* &.first-column::before{
      content: attr(data-row);
      display: block;
      position: absolute;
      right: 100%;
      top: 0;
      transform: translateX(-8px);
      font-size: 12px;
        color: var(--color-text-4);
    }
    &.last-row::before{
      content: attr(data-column);
      display: block;
      position: absolute;
      left: 0;
      top: 100%;
      transform: translateY(8px);
      font-size: 12px;
        color: var(--color-text-4);
    } */
`;function Zx(){const[A,e]=k.useState(22),[t,r]=k.useState(22),[n,o]=k.useState(Wl);return k.useEffect(()=>{(document.querySelector("#root")||document.body).getBoundingClientRect().width>800?o(Wl.map(s=>({key:s.key,title:s.title,dropData:s.dropData,open:!1}))):o(Wl)},[]),U.jsxs(oe,{column:!0,className:"height-100",children:[U.jsx(qx,{logo:U.jsx(jQ,{}),menuProps:{data:n,active:A,onChange:i=>{r(i.key),e(i.key)},onDropChange:(i,a)=>{r(i.key),e(a.key)},dropProps:{direction:"column",active:t},theme:{lineColor:"inherit",activeBg:"var(--color-bg-2)"}},align:"end",className:"relative"}),t===1&&U.jsx(_g,{data:mg}),t===2&&U.jsx(_g,{data:mg}),t===11&&U.jsx(Ac,{data:PQ}),t===12&&U.jsx(Ac,{data:VQ}),t===21&&U.jsx($x,{}),t===23&&U.jsx(Xx,{}),t===31&&U.jsx(Ac,{data:GQ})]})}const qx=vt(bQ)`
  @media screen and (max-width: 800px){
    .land-menu{
      display: none;
    }
    .jdrwKk .land-menu{
      display: flex;
    }
  }
`;Qc.createRoot(document.getElementById("root")).render(U.jsx(Ve.StrictMode,{children:U.jsx(Zx,{})}));
