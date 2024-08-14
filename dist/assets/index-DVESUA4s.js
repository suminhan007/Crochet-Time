(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function j4(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var Ep={exports:{}},vs={},bp={exports:{}},AA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ai=Symbol.for("react.element"),z4=Symbol.for("react.portal"),W4=Symbol.for("react.fragment"),$4=Symbol.for("react.strict_mode"),X4=Symbol.for("react.profiler"),J4=Symbol.for("react.provider"),Y4=Symbol.for("react.context"),Z4=Symbol.for("react.forward_ref"),q4=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),ev=Symbol.for("react.lazy"),cf=Symbol.iterator;function tv(A){return A===null||typeof A!="object"?null:(A=cf&&A[cf]||A["@@iterator"],typeof A=="function"?A:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,Ip={};function Kn(A,e,t){this.props=A,this.context=e,this.refs=Ip,this.updater=t||Hp}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(A,e){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,e,"setState")};Kn.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Lp(){}Lp.prototype=Kn.prototype;function ju(A,e,t){this.props=A,this.context=e,this.refs=Ip,this.updater=t||Hp}var zu=ju.prototype=new Lp;zu.constructor=ju;kp(zu,Kn.prototype);zu.isPureReactComponent=!0;var uf=Array.isArray,Sp=Object.prototype.hasOwnProperty,Wu={current:null},Dp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(A,e,t){var r,n={},o=null,i=null;if(e!=null)for(r in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(o=""+e.key),e)Sp.call(e,r)&&!Dp.hasOwnProperty(r)&&(n[r]=e[r]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];n.children=s}if(A&&A.defaultProps)for(r in a=A.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:Ai,type:A,key:o,ref:i,props:n,_owner:Wu.current}}function rv(A,e){return{$$typeof:Ai,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}function $u(A){return typeof A=="object"&&A!==null&&A.$$typeof===Ai}function nv(A){var e={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(t){return e[t]})}var df=/\/+/g;function cl(A,e){return typeof A=="object"&&A!==null&&A.key!=null?nv(""+A.key):e.toString(36)}function ea(A,e,t,r,n){var o=typeof A;(o==="undefined"||o==="boolean")&&(A=null);var i=!1;if(A===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(A.$$typeof){case Ai:case z4:i=!0}}if(i)return i=A,n=n(i),A=r===""?"."+cl(i,0):r,uf(n)?(t="",A!=null&&(t=A.replace(df,"$&/")+"/"),ea(n,e,t,"",function(l){return l})):n!=null&&($u(n)&&(n=rv(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(df,"$&/")+"/")+A)),e.push(n)),1;if(i=0,r=r===""?".":r+":",uf(A))for(var a=0;a<A.length;a++){o=A[a];var s=r+cl(o,a);i+=ea(o,e,t,s,n)}else if(s=tv(A),typeof s=="function")for(A=s.call(A),a=0;!(o=A.next()).done;)o=o.value,s=r+cl(o,a++),i+=ea(o,e,t,s,n);else if(o==="object")throw e=String(A),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function ci(A,e,t){if(A==null)return A;var r=[],n=0;return ea(A,r,"","",function(o){return e.call(t,o,n++)}),r}function ov(A){if(A._status===-1){var e=A._result;e=e(),e.then(function(t){(A._status===0||A._status===-1)&&(A._status=1,A._result=t)},function(t){(A._status===0||A._status===-1)&&(A._status=2,A._result=t)}),A._status===-1&&(A._status=0,A._result=e)}if(A._status===1)return A._result.default;throw A._result}var se={current:null},ta={transition:null},iv={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:ta,ReactCurrentOwner:Wu};function Mp(){throw Error("act(...) is not supported in production builds of React.")}AA.Children={map:ci,forEach:function(A,e,t){ci(A,function(){e.apply(this,arguments)},t)},count:function(A){var e=0;return ci(A,function(){e++}),e},toArray:function(A){return ci(A,function(e){return e})||[]},only:function(A){if(!$u(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};AA.Component=Kn;AA.Fragment=W4;AA.Profiler=X4;AA.PureComponent=ju;AA.StrictMode=$4;AA.Suspense=q4;AA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iv;AA.act=Mp;AA.cloneElement=function(A,e,t){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var r=kp({},A.props),n=A.key,o=A.ref,i=A._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,i=Wu.current),e.key!==void 0&&(n=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(s in e)Sp.call(e,s)&&!Dp.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ai,type:A.type,key:n,ref:o,props:r,_owner:i}};AA.createContext=function(A){return A={$$typeof:Y4,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:J4,_context:A},A.Consumer=A};AA.createElement=Kp;AA.createFactory=function(A){var e=Kp.bind(null,A);return e.type=A,e};AA.createRef=function(){return{current:null}};AA.forwardRef=function(A){return{$$typeof:Z4,render:A}};AA.isValidElement=$u;AA.lazy=function(A){return{$$typeof:ev,_payload:{_status:-1,_result:A},_init:ov}};AA.memo=function(A,e){return{$$typeof:Av,type:A,compare:e===void 0?null:e}};AA.startTransition=function(A){var e=ta.transition;ta.transition={};try{A()}finally{ta.transition=e}};AA.unstable_act=Mp;AA.useCallback=function(A,e){return se.current.useCallback(A,e)};AA.useContext=function(A){return se.current.useContext(A)};AA.useDebugValue=function(){};AA.useDeferredValue=function(A){return se.current.useDeferredValue(A)};AA.useEffect=function(A,e){return se.current.useEffect(A,e)};AA.useId=function(){return se.current.useId()};AA.useImperativeHandle=function(A,e,t){return se.current.useImperativeHandle(A,e,t)};AA.useInsertionEffect=function(A,e){return se.current.useInsertionEffect(A,e)};AA.useLayoutEffect=function(A,e){return se.current.useLayoutEffect(A,e)};AA.useMemo=function(A,e){return se.current.useMemo(A,e)};AA.useReducer=function(A,e,t){return se.current.useReducer(A,e,t)};AA.useRef=function(A){return se.current.useRef(A)};AA.useState=function(A){return se.current.useState(A)};AA.useSyncExternalStore=function(A,e,t){return se.current.useSyncExternalStore(A,e,t)};AA.useTransition=function(){return se.current.useTransition()};AA.version="18.3.1";bp.exports=AA;var L=bp.exports;const Oe=j4(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=L,sv=Symbol.for("react.element"),lv=Symbol.for("react.fragment"),cv=Object.prototype.hasOwnProperty,uv=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dv={key:!0,ref:!0,__self:!0,__source:!0};function Tp(A,e,t){var r,n={},o=null,i=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)cv.call(e,r)&&!dv.hasOwnProperty(r)&&(n[r]=e[r]);if(A&&A.defaultProps)for(r in e=A.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:sv,type:A,key:o,ref:i,props:n,_owner:uv.current}}vs.Fragment=lv;vs.jsx=Tp;vs.jsxs=Tp;Ep.exports=vs;var U=Ep.exports,gc={},Np={exports:{}},be={},_p={exports:{}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function e(b,k){var R=b.length;b.push(k);A:for(;0<R;){var j=R-1>>>1,W=b[j];if(0<n(W,k))b[j]=k,b[R]=W,R=j;else break A}}function t(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var k=b[0],R=b.pop();if(R!==k){b[0]=R;A:for(var j=0,W=b.length,QA=W>>>1;j<QA;){var cA=2*(j+1)-1,rA=b[cA],aA=cA+1,fA=b[aA];if(0>n(rA,R))aA<W&&0>n(fA,rA)?(b[j]=fA,b[aA]=R,j=aA):(b[j]=rA,b[cA]=R,j=cA);else if(aA<W&&0>n(fA,R))b[j]=fA,b[aA]=R,j=aA;else break A}}return k}function n(b,k){var R=b.sortIndex-k.sortIndex;return R!==0?R:b.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;A.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();A.unstable_now=function(){return i.now()-a}}var s=[],l=[],c=1,u=null,d=3,p=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var k=t(l);k!==null;){if(k.callback===null)r(l);else if(k.startTime<=b)r(l),k.sortIndex=k.expirationTime,e(s,k);else break;k=t(l)}}function C(b){if(w=!1,h(b),!v)if(t(s)!==null)v=!0,T(F);else{var k=t(l);k!==null&&J(C,k.startTime-b)}}function F(b,k){v=!1,w&&(w=!1,g(E),E=-1),p=!0;var R=d;try{for(h(k),u=t(s);u!==null&&(!(u.expirationTime>k)||b&&!q());){var j=u.callback;if(typeof j=="function"){u.callback=null,d=u.priorityLevel;var W=j(u.expirationTime<=k);k=A.unstable_now(),typeof W=="function"?u.callback=W:u===t(s)&&r(s),h(k)}else r(s);u=t(s)}if(u!==null)var QA=!0;else{var cA=t(l);cA!==null&&J(C,cA.startTime-k),QA=!1}return QA}finally{u=null,d=R,p=!1}}var m=!1,Q=null,E=-1,H=5,D=-1;function q(){return!(A.unstable_now()-D<H)}function X(){if(Q!==null){var b=A.unstable_now();D=b;var k=!0;try{k=Q(!0,b)}finally{k?z():(m=!1,Q=null)}}else m=!1}var z;if(typeof f=="function")z=function(){f(X)};else if(typeof MessageChannel<"u"){var S=new MessageChannel,G=S.port2;S.port1.onmessage=X,z=function(){G.postMessage(null)}}else z=function(){x(X,0)};function T(b){Q=b,m||(m=!0,z())}function J(b,k){E=x(function(){b(A.unstable_now())},k)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(b){b.callback=null},A.unstable_continueExecution=function(){v||p||(v=!0,T(F))},A.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<b?Math.floor(1e3/b):5},A.unstable_getCurrentPriorityLevel=function(){return d},A.unstable_getFirstCallbackNode=function(){return t(s)},A.unstable_next=function(b){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var R=d;d=k;try{return b()}finally{d=R}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(b,k){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var R=d;d=b;try{return k()}finally{d=R}},A.unstable_scheduleCallback=function(b,k,R){var j=A.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?j+R:j):R=j,b){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=R+W,b={id:c++,callback:k,priorityLevel:b,startTime:R,expirationTime:W,sortIndex:-1},R>j?(b.sortIndex=R,e(l,b),t(s)===null&&b===t(l)&&(w?(g(E),E=-1):w=!0,J(C,R-j))):(b.sortIndex=W,e(s,b),v||p||(v=!0,T(F))),b},A.unstable_shouldYield=q,A.unstable_wrapCallback=function(b){var k=d;return function(){var R=d;d=k;try{return b.apply(this,arguments)}finally{d=R}}}})(Op);_p.exports=Op;var fv=_p.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=L,Ee=fv;function I(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rp=new Set,Lo={};function Dr(A,e){hn(A,e),hn(A+"Capture",e)}function hn(A,e){for(Lo[A]=e,A=0;A<e.length;A++)Rp.add(e[A])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ff={},gf={};function hv(A){return pc.call(gf,A)?!0:pc.call(ff,A)?!1:pv.test(A)?gf[A]=!0:(ff[A]=!0,!1)}function Bv(A,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function vv(A,e,t,r){if(e===null||typeof e>"u"||Bv(A,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function le(A,e,t,r,n,o,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=A,this.type=e,this.sanitizeURL=o,this.removeEmptyString=i}var YA={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){YA[A]=new le(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var e=A[0];YA[e]=new le(e,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){YA[A]=new le(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){YA[A]=new le(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){YA[A]=new le(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){YA[A]=new le(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){YA[A]=new le(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){YA[A]=new le(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){YA[A]=new le(A,5,!1,A.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Ju(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var e=A.replace(Xu,Ju);YA[e]=new le(e,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var e=A.replace(Xu,Ju);YA[e]=new le(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var e=A.replace(Xu,Ju);YA[e]=new le(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){YA[A]=new le(A,1,!1,A.toLowerCase(),null,!1,!1)});YA.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){YA[A]=new le(A,1,!1,A.toLowerCase(),null,!0,!0)});function Yu(A,e,t,r){var n=YA.hasOwnProperty(e)?YA[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vv(e,t,n,r)&&(t=null),r||n===null?hv(e)&&(t===null?A.removeAttribute(e):A.setAttribute(e,""+t)):n.mustUseProperty?A[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,r=n.attributeNamespace,t===null?A.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,r?A.setAttributeNS(r,e,t):A.setAttribute(e,t))))}var St=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ui=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),vc=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Gp=Symbol.for("react.offscreen"),pf=Symbol.iterator;function Rn(A){return A===null||typeof A!="object"?null:(A=pf&&A[pf]||A["@@iterator"],typeof A=="function"?A:null)}var xA=Object.assign,ul;function Ao(A){if(ul===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ul=e&&e[1]||""}return`
`+ul+A}var dl=!1;function fl(A,e){if(!A||dl)return"";dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(A,[],e)}else{try{e.call()}catch(l){r=l}A.call(e.prototype)}else{try{throw Error()}catch(l){r=l}A()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),o=r.stack.split(`
`),i=n.length-1,a=o.length-1;1<=i&&0<=a&&n[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(n[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||n[i]!==o[a]){var s=`
`+n[i].replace(" at new "," at ");return A.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",A.displayName)),s}while(1<=i&&0<=a);break}}}finally{dl=!1,Error.prepareStackTrace=t}return(A=A?A.displayName||A.name:"")?Ao(A):""}function wv(A){switch(A.tag){case 5:return Ao(A.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return A=fl(A.type,!1),A;case 11:return A=fl(A.type.render,!1),A;case 1:return A=fl(A.type,!0),A;default:return""}}function wc(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case $r:return"Fragment";case Wr:return"Portal";case hc:return"Profiler";case Zu:return"StrictMode";case Bc:return"Suspense";case vc:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case Pp:return(A.displayName||"Context")+".Consumer";case Vp:return(A._context.displayName||"Context")+".Provider";case qu:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case Ad:return e=A.displayName||null,e!==null?e:wc(A.type)||"Memo";case _t:e=A._payload,A=A._init;try{return wc(A(e))}catch{}}return null}function mv(A){var e=A.type;switch(A.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=e.render,A=A.displayName||A.name||"",e.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wc(e);case 8:return e===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function jp(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cv(A){var e=jp(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),r=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,o=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function di(A){A._valueTracker||(A._valueTracker=Cv(A))}function zp(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return A&&(r=jp(A)?A.checked?"true":"false":A.value),A=r,A!==t?(e.setValue(A),!0):!1}function ba(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function mc(A,e){var t=e.checked;return xA({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??A._wrapperState.initialChecked})}function hf(A,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=or(e.value!=null?e.value:t),A._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wp(A,e){e=e.checked,e!=null&&Yu(A,"checked",e,!1)}function Cc(A,e){Wp(A,e);var t=or(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&A.value===""||A.value!=t)&&(A.value=""+t):A.value!==""+t&&(A.value=""+t);else if(r==="submit"||r==="reset"){A.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(A,e.type,t):e.hasOwnProperty("defaultValue")&&Qc(A,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(A.defaultChecked=!!e.defaultChecked)}function Bf(A,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+A._wrapperState.initialValue,t||e===A.value||(A.value=e),A.defaultValue=e}t=A.name,t!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,t!==""&&(A.name=t)}function Qc(A,e,t){(e!=="number"||ba(A.ownerDocument)!==A)&&(t==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+t&&(A.defaultValue=""+t))}var eo=Array.isArray;function ln(A,e,t,r){if(A=A.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<A.length;t++)n=e.hasOwnProperty("$"+A[t].value),A[t].selected!==n&&(A[t].selected=n),n&&r&&(A[t].defaultSelected=!0)}else{for(t=""+or(t),e=null,n=0;n<A.length;n++){if(A[n].value===t){A[n].selected=!0,r&&(A[n].defaultSelected=!0);return}e!==null||A[n].disabled||(e=A[n])}e!==null&&(e.selected=!0)}}function yc(A,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return xA({},e,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function vf(A,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(I(92));if(eo(t)){if(1<t.length)throw Error(I(93));t=t[0]}e=t}e==null&&(e=""),t=e}A._wrapperState={initialValue:or(t)}}function $p(A,e){var t=or(e.value),r=or(e.defaultValue);t!=null&&(t=""+t,t!==A.value&&(A.value=t),e.defaultValue==null&&A.defaultValue!==t&&(A.defaultValue=t)),r!=null&&(A.defaultValue=""+r)}function wf(A){var e=A.textContent;e===A._wrapperState.initialValue&&e!==""&&e!==null&&(A.value=e)}function Xp(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fc(A,e){return A==null||A==="http://www.w3.org/1999/xhtml"?Xp(e):A==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var fi,Jp=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return A(e,t,r,n)})}:A}(function(A,e){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=e;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fi.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;e.firstChild;)A.appendChild(e.firstChild)}});function So(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qv=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(A){Qv.forEach(function(e){e=e+A.charAt(0).toUpperCase()+A.substring(1),po[e]=po[A]})});function Yp(A,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||po.hasOwnProperty(A)&&po[A]?(""+e).trim():e+"px"}function Zp(A,e){A=A.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,n=Yp(t,e[t],r);t==="float"&&(t="cssFloat"),r?A.setProperty(t,n):A[t]=n}}var yv=xA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(A,e){if(e){if(yv[A]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,A));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function xc(A,e){if(A.indexOf("-")===-1)return typeof e.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=null;function ed(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var bc=null,cn=null,un=null;function mf(A){if(A=ri(A)){if(typeof bc!="function")throw Error(I(280));var e=A.stateNode;e&&(e=ys(e),bc(A.stateNode,A.type,e))}}function qp(A){cn?un?un.push(A):un=[A]:cn=A}function Ah(){if(cn){var A=cn,e=un;if(un=cn=null,mf(A),e)for(A=0;A<e.length;A++)mf(e[A])}}function eh(A,e){return A(e)}function th(){}var gl=!1;function rh(A,e,t){if(gl)return A(e,t);gl=!0;try{return eh(A,e,t)}finally{gl=!1,(cn!==null||un!==null)&&(th(),Ah())}}function Do(A,e){var t=A.stateNode;if(t===null)return null;var r=ys(t);if(r===null)return null;t=r[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(A=A.type,r=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!r;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(I(231,e,typeof t));return t}var Hc=!1;if(bt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Hc=!1}function Fv(A,e,t,r,n,o,i,a,s){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(c){this.onError(c)}}var ho=!1,Ha=null,ka=!1,kc=null,Uv={onError:function(A){ho=!0,Ha=A}};function xv(A,e,t,r,n,o,i,a,s){ho=!1,Ha=null,Fv.apply(Uv,arguments)}function Ev(A,e,t,r,n,o,i,a,s){if(xv.apply(this,arguments),ho){if(ho){var l=Ha;ho=!1,Ha=null}else throw Error(I(198));ka||(ka=!0,kc=l)}}function Kr(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,e.flags&4098&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function nh(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function Cf(A){if(Kr(A)!==A)throw Error(I(188))}function bv(A){var e=A.alternate;if(!e){if(e=Kr(A),e===null)throw Error(I(188));return e!==A?null:A}for(var t=A,r=e;;){var n=t.return;if(n===null)break;var o=n.alternate;if(o===null){if(r=n.return,r!==null){t=r;continue}break}if(n.child===o.child){for(o=n.child;o;){if(o===t)return Cf(n),A;if(o===r)return Cf(n),e;o=o.sibling}throw Error(I(188))}if(t.return!==r.return)t=n,r=o;else{for(var i=!1,a=n.child;a;){if(a===t){i=!0,t=n,r=o;break}if(a===r){i=!0,r=n,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=n;break}if(a===r){i=!0,r=o,t=n;break}a=a.sibling}if(!i)throw Error(I(189))}}if(t.alternate!==r)throw Error(I(190))}if(t.tag!==3)throw Error(I(188));return t.stateNode.current===t?A:e}function oh(A){return A=bv(A),A!==null?ih(A):null}function ih(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var e=ih(A);if(e!==null)return e;A=A.sibling}return null}var ah=Ee.unstable_scheduleCallback,Qf=Ee.unstable_cancelCallback,Hv=Ee.unstable_shouldYield,kv=Ee.unstable_requestPaint,kA=Ee.unstable_now,Iv=Ee.unstable_getCurrentPriorityLevel,td=Ee.unstable_ImmediatePriority,sh=Ee.unstable_UserBlockingPriority,Ia=Ee.unstable_NormalPriority,Lv=Ee.unstable_LowPriority,lh=Ee.unstable_IdlePriority,ws=null,dt=null;function Sv(A){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ws,A,void 0,(A.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Mv,Dv=Math.log,Kv=Math.LN2;function Mv(A){return A>>>=0,A===0?32:31-(Dv(A)/Kv|0)|0}var gi=64,pi=4194304;function to(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function La(A,e){var t=A.pendingLanes;if(t===0)return 0;var r=0,n=A.suspendedLanes,o=A.pingedLanes,i=t&268435455;if(i!==0){var a=i&~n;a!==0?r=to(a):(o&=i,o!==0&&(r=to(o)))}else i=t&~n,i!==0?r=to(i):o!==0&&(r=to(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,o=e&-e,n>=o||n===16&&(o&4194240)!==0))return e;if(r&4&&(r|=t&16),e=A.entangledLanes,e!==0)for(A=A.entanglements,e&=r;0<e;)t=31-Ze(e),n=1<<t,r|=A[t],e&=~n;return r}function Tv(A,e){switch(A){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(A,e){for(var t=A.suspendedLanes,r=A.pingedLanes,n=A.expirationTimes,o=A.pendingLanes;0<o;){var i=31-Ze(o),a=1<<i,s=n[i];s===-1?(!(a&t)||a&r)&&(n[i]=Tv(a,e)):s<=e&&(A.expiredLanes|=a),o&=~a}}function Ic(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function ch(){var A=gi;return gi<<=1,!(gi&4194240)&&(gi=64),A}function pl(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function ei(A,e,t){A.pendingLanes|=e,e!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,e=31-Ze(e),A[e]=t}function _v(A,e){var t=A.pendingLanes&~e;A.pendingLanes=e,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=e,A.mutableReadLanes&=e,A.entangledLanes&=e,e=A.entanglements;var r=A.eventTimes;for(A=A.expirationTimes;0<t;){var n=31-Ze(t),o=1<<n;e[n]=0,r[n]=-1,A[n]=-1,t&=~o}}function rd(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var r=31-Ze(t),n=1<<r;n&e|A[r]&e&&(A[r]|=e),t&=~n}}var sA=0;function uh(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var dh,nd,fh,gh,ph,Lc=!1,hi=[],Xt=null,Jt=null,Yt=null,Ko=new Map,Mo=new Map,Vt=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(A,e){switch(A){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Pn(A,e,t,r,n,o){return A===null||A.nativeEvent!==o?(A={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[n]},e!==null&&(e=ri(e),e!==null&&nd(e)),A):(A.eventSystemFlags|=r,e=A.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),A)}function Rv(A,e,t,r,n){switch(e){case"focusin":return Xt=Pn(Xt,A,e,t,r,n),!0;case"dragenter":return Jt=Pn(Jt,A,e,t,r,n),!0;case"mouseover":return Yt=Pn(Yt,A,e,t,r,n),!0;case"pointerover":var o=n.pointerId;return Ko.set(o,Pn(Ko.get(o)||null,A,e,t,r,n)),!0;case"gotpointercapture":return o=n.pointerId,Mo.set(o,Pn(Mo.get(o)||null,A,e,t,r,n)),!0}return!1}function hh(A){var e=pr(A.target);if(e!==null){var t=Kr(e);if(t!==null){if(e=t.tag,e===13){if(e=nh(t),e!==null){A.blockedOn=e,ph(A.priority,function(){fh(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ra(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=Sc(A.domEventName,A.eventSystemFlags,e[0],A.nativeEvent);if(t===null){t=A.nativeEvent;var r=new t.constructor(t.type,t);Ec=r,t.target.dispatchEvent(r),Ec=null}else return e=ri(t),e!==null&&nd(e),A.blockedOn=t,!1;e.shift()}return!0}function Ff(A,e,t){ra(A)&&t.delete(e)}function Vv(){Lc=!1,Xt!==null&&ra(Xt)&&(Xt=null),Jt!==null&&ra(Jt)&&(Jt=null),Yt!==null&&ra(Yt)&&(Yt=null),Ko.forEach(Ff),Mo.forEach(Ff)}function Gn(A,e){A.blockedOn===e&&(A.blockedOn=null,Lc||(Lc=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Vv)))}function To(A){function e(n){return Gn(n,A)}if(0<hi.length){Gn(hi[0],A);for(var t=1;t<hi.length;t++){var r=hi[t];r.blockedOn===A&&(r.blockedOn=null)}}for(Xt!==null&&Gn(Xt,A),Jt!==null&&Gn(Jt,A),Yt!==null&&Gn(Yt,A),Ko.forEach(e),Mo.forEach(e),t=0;t<Vt.length;t++)r=Vt[t],r.blockedOn===A&&(r.blockedOn=null);for(;0<Vt.length&&(t=Vt[0],t.blockedOn===null);)hh(t),t.blockedOn===null&&Vt.shift()}var dn=St.ReactCurrentBatchConfig,Sa=!0;function Pv(A,e,t,r){var n=sA,o=dn.transition;dn.transition=null;try{sA=1,od(A,e,t,r)}finally{sA=n,dn.transition=o}}function Gv(A,e,t,r){var n=sA,o=dn.transition;dn.transition=null;try{sA=4,od(A,e,t,r)}finally{sA=n,dn.transition=o}}function od(A,e,t,r){if(Sa){var n=Sc(A,e,t,r);if(n===null)Ul(A,e,r,Da,t),yf(A,r);else if(Rv(n,A,e,t,r))r.stopPropagation();else if(yf(A,r),e&4&&-1<Ov.indexOf(A)){for(;n!==null;){var o=ri(n);if(o!==null&&dh(o),o=Sc(A,e,t,r),o===null&&Ul(A,e,r,Da,t),o===n)break;n=o}n!==null&&r.stopPropagation()}else Ul(A,e,r,null,t)}}var Da=null;function Sc(A,e,t,r){if(Da=null,A=ed(r),A=pr(A),A!==null)if(e=Kr(A),e===null)A=null;else if(t=e.tag,t===13){if(A=nh(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null);return Da=A,null}function Bh(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iv()){case td:return 1;case sh:return 4;case Ia:case Lv:return 16;case lh:return 536870912;default:return 16}default:return 16}}var Gt=null,id=null,na=null;function vh(){if(na)return na;var A,e=id,t=e.length,r,n="value"in Gt?Gt.value:Gt.textContent,o=n.length;for(A=0;A<t&&e[A]===n[A];A++);var i=t-A;for(r=1;r<=i&&e[t-r]===n[o-r];r++);return na=n.slice(A,1<r?1-r:void 0)}function oa(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Bi(){return!0}function Uf(){return!1}function He(A){function e(t,r,n,o,i){this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in A)A.hasOwnProperty(a)&&(t=A[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bi:Uf,this.isPropagationStopped=Uf,this}return xA(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),e}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ad=He(Mn),ti=xA({},Mn,{view:0,detail:0}),jv=He(ti),hl,Bl,jn,ms=xA({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sd,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==jn&&(jn&&A.type==="mousemove"?(hl=A.screenX-jn.screenX,Bl=A.screenY-jn.screenY):Bl=hl=0,jn=A),hl)},movementY:function(A){return"movementY"in A?A.movementY:Bl}}),xf=He(ms),zv=xA({},ms,{dataTransfer:0}),Wv=He(zv),$v=xA({},ti,{relatedTarget:0}),vl=He($v),Xv=xA({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=He(Xv),Yv=xA({},Mn,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Zv=He(Yv),qv=xA({},Mn,{data:0}),Ef=He(qv),Aw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rw(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=tw[A])?!!e[A]:!1}function sd(){return rw}var nw=xA({},ti,{key:function(A){if(A.key){var e=Aw[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=oa(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?ew[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sd,charCode:function(A){return A.type==="keypress"?oa(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?oa(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),ow=He(nw),iw=xA({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=He(iw),aw=xA({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sd}),sw=He(aw),lw=xA({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=He(lw),uw=xA({},ms,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),dw=He(uw),fw=[9,13,27,32],ld=bt&&"CompositionEvent"in window,Bo=null;bt&&"documentMode"in document&&(Bo=document.documentMode);var gw=bt&&"TextEvent"in window&&!Bo,wh=bt&&(!ld||Bo&&8<Bo&&11>=Bo),Hf=" ",kf=!1;function mh(A,e){switch(A){case"keyup":return fw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Xr=!1;function pw(A,e){switch(A){case"compositionend":return Ch(e);case"keypress":return e.which!==32?null:(kf=!0,Hf);case"textInput":return A=e.data,A===Hf&&kf?null:A;default:return null}}function hw(A,e){if(Xr)return A==="compositionend"||!ld&&mh(A,e)?(A=vh(),na=id=Gt=null,Xr=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wh&&e.locale!=="ko"?null:e.data;default:return null}}var Bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!Bw[A.type]:e==="textarea"}function Qh(A,e,t,r){qp(r),e=Ka(e,"onChange"),0<e.length&&(t=new ad("onChange","change",null,t,r),A.push({event:t,listeners:e}))}var vo=null,No=null;function vw(A){Sh(A,0)}function Cs(A){var e=Zr(A);if(zp(e))return A}function ww(A,e){if(A==="change")return e}var yh=!1;if(bt){var wl;if(bt){var ml="oninput"in document;if(!ml){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),ml=typeof Lf.oninput=="function"}wl=ml}else wl=!1;yh=wl&&(!document.documentMode||9<document.documentMode)}function Sf(){vo&&(vo.detachEvent("onpropertychange",Fh),No=vo=null)}function Fh(A){if(A.propertyName==="value"&&Cs(No)){var e=[];Qh(e,No,A,ed(A)),rh(vw,e)}}function mw(A,e,t){A==="focusin"?(Sf(),vo=e,No=t,vo.attachEvent("onpropertychange",Fh)):A==="focusout"&&Sf()}function Cw(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Cs(No)}function Qw(A,e){if(A==="click")return Cs(e)}function yw(A,e){if(A==="input"||A==="change")return Cs(e)}function Fw(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var tt=typeof Object.is=="function"?Object.is:Fw;function _o(A,e){if(tt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var n=t[r];if(!pc.call(e,n)||!tt(A[n],e[n]))return!1}return!0}function Df(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Kf(A,e){var t=Df(A);A=0;for(var r;t;){if(t.nodeType===3){if(r=A+t.textContent.length,A<=e&&r>=e)return{node:t,offset:e-A};A=r}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Df(t)}}function Uh(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Uh(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function xh(){for(var A=window,e=ba();e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=ba(A.document)}return e}function cd(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}function Uw(A){var e=xh(),t=A.focusedElem,r=A.selectionRange;if(e!==t&&t&&t.ownerDocument&&Uh(t.ownerDocument.documentElement,t)){if(r!==null&&cd(t)){if(e=r.start,A=r.end,A===void 0&&(A=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(A,t.value.length);else if(A=(e=t.ownerDocument||document)&&e.defaultView||window,A.getSelection){A=A.getSelection();var n=t.textContent.length,o=Math.min(r.start,n);r=r.end===void 0?o:Math.min(r.end,n),!A.extend&&o>r&&(n=r,r=o,o=n),n=Kf(t,o);var i=Kf(t,r);n&&i&&(A.rangeCount!==1||A.anchorNode!==n.node||A.anchorOffset!==n.offset||A.focusNode!==i.node||A.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),A.removeAllRanges(),o>r?(A.addRange(e),A.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),A.addRange(e)))}}for(e=[],A=t;A=A.parentNode;)A.nodeType===1&&e.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)A=e[t],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var xw=bt&&"documentMode"in document&&11>=document.documentMode,Jr=null,Dc=null,wo=null,Kc=!1;function Mf(A,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Kc||Jr==null||Jr!==ba(r)||(r=Jr,"selectionStart"in r&&cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&_o(wo,r)||(wo=r,r=Ka(Dc,"onSelect"),0<r.length&&(e=new ad("onSelect","select",null,e,t),A.push({event:e,listeners:r}),e.target=Jr)))}function vi(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Yr={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},Cl={},Eh={};bt&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Qs(A){if(Cl[A])return Cl[A];if(!Yr[A])return A;var e=Yr[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Eh)return Cl[A]=e[t];return A}var bh=Qs("animationend"),Hh=Qs("animationiteration"),kh=Qs("animationstart"),Ih=Qs("transitionend"),Lh=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(A,e){Lh.set(A,e),Dr(e,[A])}for(var Ql=0;Ql<Tf.length;Ql++){var yl=Tf[Ql],Ew=yl.toLowerCase(),bw=yl[0].toUpperCase()+yl.slice(1);sr(Ew,"on"+bw)}sr(bh,"onAnimationEnd");sr(Hh,"onAnimationIteration");sr(kh,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Ih,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Nf(A,e,t){var r=A.type||"unknown-event";A.currentTarget=t,Ev(r,e,void 0,A),A.currentTarget=null}function Sh(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var r=A[t],n=r.event;r=r.listeners;A:{var o=void 0;if(e)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,l=a.currentTarget;if(a=a.listener,s!==o&&n.isPropagationStopped())break A;Nf(n,a,l),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,l=a.currentTarget,a=a.listener,s!==o&&n.isPropagationStopped())break A;Nf(n,a,l),o=s}}}if(ka)throw A=kc,ka=!1,kc=null,A}function gA(A,e){var t=e[Oc];t===void 0&&(t=e[Oc]=new Set);var r=A+"__bubble";t.has(r)||(Dh(e,A,2,!1),t.add(r))}function Fl(A,e,t){var r=0;e&&(r|=4),Dh(t,A,r,e)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Oo(A){if(!A[wi]){A[wi]=!0,Rp.forEach(function(t){t!=="selectionchange"&&(Hw.has(t)||Fl(t,!1,A),Fl(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[wi]||(e[wi]=!0,Fl("selectionchange",!1,e))}}function Dh(A,e,t,r){switch(Bh(e)){case 1:var n=Pv;break;case 4:n=Gv;break;default:n=od}t=n.bind(null,e,t,A),n=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?A.addEventListener(e,t,{capture:!0,passive:n}):A.addEventListener(e,t,!0):n!==void 0?A.addEventListener(e,t,{passive:n}):A.addEventListener(e,t,!1)}function Ul(A,e,t,r,n){var o=r;if(!(e&1)&&!(e&2)&&r!==null)A:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;i=i.return}for(;a!==null;){if(i=pr(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue A}a=a.parentNode}}r=r.return}rh(function(){var l=o,c=ed(t),u=[];A:{var d=Lh.get(A);if(d!==void 0){var p=ad,v=A;switch(A){case"keypress":if(oa(t)===0)break A;case"keydown":case"keyup":p=ow;break;case"focusin":v="focus",p=vl;break;case"focusout":v="blur",p=vl;break;case"beforeblur":case"afterblur":p=vl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sw;break;case bh:case Hh:case kh:p=Jv;break;case Ih:p=cw;break;case"scroll":p=jv;break;case"wheel":p=dw;break;case"copy":case"cut":case"paste":p=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bf}var w=(e&4)!==0,x=!w&&A==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var f=l,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=Do(f,g),C!=null&&w.push(Ro(f,C,h)))),x)break;f=f.return}0<w.length&&(d=new p(d,v,null,t,c),u.push({event:d,listeners:w}))}}if(!(e&7)){A:{if(d=A==="mouseover"||A==="pointerover",p=A==="mouseout"||A==="pointerout",d&&t!==Ec&&(v=t.relatedTarget||t.fromElement)&&(pr(v)||v[Ht]))break A;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=l,v=v?pr(v):null,v!==null&&(x=Kr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=l),p!==v)){if(w=xf,C="onMouseLeave",g="onMouseEnter",f="mouse",(A==="pointerout"||A==="pointerover")&&(w=bf,C="onPointerLeave",g="onPointerEnter",f="pointer"),x=p==null?d:Zr(p),h=v==null?d:Zr(v),d=new w(C,f+"leave",p,t,c),d.target=x,d.relatedTarget=h,C=null,pr(c)===l&&(w=new w(g,f+"enter",v,t,c),w.target=h,w.relatedTarget=x,C=w),x=C,p&&v)e:{for(w=p,g=v,f=0,h=w;h;h=Mr(h))f++;for(h=0,C=g;C;C=Mr(C))h++;for(;0<f-h;)w=Mr(w),f--;for(;0<h-f;)g=Mr(g),h--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break e;w=Mr(w),g=Mr(g)}w=null}else w=null;p!==null&&_f(u,d,p,w,!1),v!==null&&x!==null&&_f(u,x,v,w,!0)}}A:{if(d=l?Zr(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var F=ww;else if(If(d))if(yh)F=yw;else{F=Cw;var m=mw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(F=Qw);if(F&&(F=F(A,l))){Qh(u,F,t,c);break A}m&&m(A,d,l),A==="focusout"&&(m=d._wrapperState)&&m.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(m=l?Zr(l):window,A){case"focusin":(If(m)||m.contentEditable==="true")&&(Jr=m,Dc=l,wo=null);break;case"focusout":wo=Dc=Jr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Mf(u,t,c);break;case"selectionchange":if(xw)break;case"keydown":case"keyup":Mf(u,t,c)}var Q;if(ld)A:{switch(A){case"compositionstart":var E="onCompositionStart";break A;case"compositionend":E="onCompositionEnd";break A;case"compositionupdate":E="onCompositionUpdate";break A}E=void 0}else Xr?mh(A,t)&&(E="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(wh&&t.locale!=="ko"&&(Xr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xr&&(Q=vh()):(Gt=c,id="value"in Gt?Gt.value:Gt.textContent,Xr=!0)),m=Ka(l,E),0<m.length&&(E=new Ef(E,A,null,t,c),u.push({event:E,listeners:m}),Q?E.data=Q:(Q=Ch(t),Q!==null&&(E.data=Q)))),(Q=gw?pw(A,t):hw(A,t))&&(l=Ka(l,"onBeforeInput"),0<l.length&&(c=new Ef("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=Q))}Sh(u,e)})}function Ro(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Ka(A,e){for(var t=e+"Capture",r=[];A!==null;){var n=A,o=n.stateNode;n.tag===5&&o!==null&&(n=o,o=Do(A,t),o!=null&&r.unshift(Ro(A,o,n)),o=Do(A,e),o!=null&&r.push(Ro(A,o,n))),A=A.return}return r}function Mr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function _f(A,e,t,r,n){for(var o=e._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,l=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&l!==null&&(a=l,n?(s=Do(t,o),s!=null&&i.unshift(Ro(t,s,a))):n||(s=Do(t,o),s!=null&&i.push(Ro(t,s,a)))),t=t.return}i.length!==0&&A.push({event:e,listeners:i})}var kw=/\r\n?/g,Iw=/\u0000|\uFFFD/g;function Of(A){return(typeof A=="string"?A:""+A).replace(kw,`
`).replace(Iw,"")}function mi(A,e,t){if(e=Of(e),Of(A)!==e&&t)throw Error(I(425))}function Ma(){}var Mc=null,Tc=null;function Nc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(A){return Rf.resolve(null).then(A).catch(Dw)}:_c;function Dw(A){setTimeout(function(){throw A})}function xl(A,e){var t=e,r=0;do{var n=t.nextSibling;if(A.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(r===0){A.removeChild(n),To(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=n}while(t);To(e)}function Zt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return A}function Vf(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Tn,Vo="__reactProps$"+Tn,Ht="__reactContainer$"+Tn,Oc="__reactEvents$"+Tn,Kw="__reactListeners$"+Tn,Mw="__reactHandles$"+Tn;function pr(A){var e=A[ut];if(e)return e;for(var t=A.parentNode;t;){if(e=t[Ht]||t[ut]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Vf(A);A!==null;){if(t=A[ut])return t;A=Vf(A)}return e}A=t,t=A.parentNode}return null}function ri(A){return A=A[ut]||A[Ht],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function Zr(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(I(33))}function ys(A){return A[Vo]||null}var Rc=[],qr=-1;function lr(A){return{current:A}}function BA(A){0>qr||(A.current=Rc[qr],Rc[qr]=null,qr--)}function dA(A,e){qr++,Rc[qr]=A.current,A.current=e}var ir={},re=lr(ir),pe=lr(!1),Hr=ir;function Bn(A,e){var t=A.type.contextTypes;if(!t)return ir;var r=A.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},o;for(o in t)n[o]=e[o];return r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=e,A.__reactInternalMemoizedMaskedChildContext=n),n}function he(A){return A=A.childContextTypes,A!=null}function Ta(){BA(pe),BA(re)}function Pf(A,e,t){if(re.current!==ir)throw Error(I(168));dA(re,e),dA(pe,t)}function Kh(A,e,t){var r=A.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(I(108,mv(A)||"Unknown",n));return xA({},t,r)}function Na(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||ir,Hr=re.current,dA(re,A),dA(pe,pe.current),!0}function Gf(A,e,t){var r=A.stateNode;if(!r)throw Error(I(169));t?(A=Kh(A,e,Hr),r.__reactInternalMemoizedMergedChildContext=A,BA(pe),BA(re),dA(re,A)):BA(pe),dA(pe,t)}var yt=null,Fs=!1,El=!1;function Mh(A){yt===null?yt=[A]:yt.push(A)}function Tw(A){Fs=!0,Mh(A)}function cr(){if(!El&&yt!==null){El=!0;var A=0,e=sA;try{var t=yt;for(sA=1;A<t.length;A++){var r=t[A];do r=r(!0);while(r!==null)}yt=null,Fs=!1}catch(n){throw yt!==null&&(yt=yt.slice(A+1)),ah(td,cr),n}finally{sA=e,El=!1}}return null}var An=[],en=0,_a=null,Oa=0,Se=[],De=0,kr=null,Ft=1,Ut="";function dr(A,e){An[en++]=Oa,An[en++]=_a,_a=A,Oa=e}function Th(A,e,t){Se[De++]=Ft,Se[De++]=Ut,Se[De++]=kr,kr=A;var r=Ft;A=Ut;var n=32-Ze(r)-1;r&=~(1<<n),t+=1;var o=32-Ze(e)+n;if(30<o){var i=n-n%5;o=(r&(1<<i)-1).toString(32),r>>=i,n-=i,Ft=1<<32-Ze(e)+n|t<<n|r,Ut=o+A}else Ft=1<<o|t<<n|r,Ut=A}function ud(A){A.return!==null&&(dr(A,1),Th(A,1,0))}function dd(A){for(;A===_a;)_a=An[--en],An[en]=null,Oa=An[--en],An[en]=null;for(;A===kr;)kr=Se[--De],Se[De]=null,Ut=Se[--De],Se[De]=null,Ft=Se[--De],Se[De]=null}var Ue=null,ye=null,CA=!1,Je=null;function Nh(A,e){var t=Me(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=A,e=A.deletions,e===null?(A.deletions=[t],A.flags|=16):e.push(t)}function jf(A,e){switch(A.tag){case 5:var t=A.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(A.stateNode=e,Ue=A,ye=Zt(e.firstChild),!0):!1;case 6:return e=A.pendingProps===""||e.nodeType!==3?null:e,e!==null?(A.stateNode=e,Ue=A,ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=kr!==null?{id:Ft,overflow:Ut}:null,A.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Me(18,null,null,0),t.stateNode=e,t.return=A,A.child=t,Ue=A,ye=null,!0):!1;default:return!1}}function Vc(A){return(A.mode&1)!==0&&(A.flags&128)===0}function Pc(A){if(CA){var e=ye;if(e){var t=e;if(!jf(A,e)){if(Vc(A))throw Error(I(418));e=Zt(t.nextSibling);var r=Ue;e&&jf(A,e)?Nh(r,t):(A.flags=A.flags&-4097|2,CA=!1,Ue=A)}}else{if(Vc(A))throw Error(I(418));A.flags=A.flags&-4097|2,CA=!1,Ue=A}}}function zf(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;Ue=A}function Ci(A){if(A!==Ue)return!1;if(!CA)return zf(A),CA=!0,!1;var e;if((e=A.tag!==3)&&!(e=A.tag!==5)&&(e=A.type,e=e!=="head"&&e!=="body"&&!Nc(A.type,A.memoizedProps)),e&&(e=ye)){if(Vc(A))throw _h(),Error(I(418));for(;e;)Nh(A,e),e=Zt(e.nextSibling)}if(zf(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(I(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"){if(e===0){ye=Zt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}A=A.nextSibling}ye=null}}else ye=Ue?Zt(A.stateNode.nextSibling):null;return!0}function _h(){for(var A=ye;A;)A=Zt(A.nextSibling)}function vn(){ye=Ue=null,CA=!1}function fd(A){Je===null?Je=[A]:Je.push(A)}var Nw=St.ReactCurrentBatchConfig;function zn(A,e,t){if(A=t.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(I(309));var r=t.stateNode}if(!r)throw Error(I(147,A));var n=r,o=""+A;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(i){var a=n.refs;i===null?delete a[o]:a[o]=i},e._stringRef=o,e)}if(typeof A!="string")throw Error(I(284));if(!t._owner)throw Error(I(290,A))}return A}function Qi(A,e){throw A=Object.prototype.toString.call(e),Error(I(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A))}function Wf(A){var e=A._init;return e(A._payload)}function Oh(A){function e(g,f){if(A){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function t(g,f){if(!A)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function n(g,f){return g=tr(g,f),g.index=0,g.sibling=null,g}function o(g,f,h){return g.index=h,A?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function i(g){return A&&g.alternate===null&&(g.flags|=2),g}function a(g,f,h,C){return f===null||f.tag!==6?(f=Dl(h,g.mode,C),f.return=g,f):(f=n(f,h),f.return=g,f)}function s(g,f,h,C){var F=h.type;return F===$r?c(g,f,h.props.children,C,h.key):f!==null&&(f.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===_t&&Wf(F)===f.type)?(C=n(f,h.props),C.ref=zn(g,f,h),C.return=g,C):(C=da(h.type,h.key,h.props,null,g.mode,C),C.ref=zn(g,f,h),C.return=g,C)}function l(g,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Kl(h,g.mode,C),f.return=g,f):(f=n(f,h.children||[]),f.return=g,f)}function c(g,f,h,C,F){return f===null||f.tag!==7?(f=Qr(h,g.mode,C,F),f.return=g,f):(f=n(f,h),f.return=g,f)}function u(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Dl(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ui:return h=da(f.type,f.key,f.props,null,g.mode,h),h.ref=zn(g,null,f),h.return=g,h;case Wr:return f=Kl(f,g.mode,h),f.return=g,f;case _t:var C=f._init;return u(g,C(f._payload),h)}if(eo(f)||Rn(f))return f=Qr(f,g.mode,h,null),f.return=g,f;Qi(g,f)}return null}function d(g,f,h,C){var F=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return F!==null?null:a(g,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:return h.key===F?s(g,f,h,C):null;case Wr:return h.key===F?l(g,f,h,C):null;case _t:return F=h._init,d(g,f,F(h._payload),C)}if(eo(h)||Rn(h))return F!==null?null:c(g,f,h,C,null);Qi(g,h)}return null}function p(g,f,h,C,F){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,a(f,g,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ui:return g=g.get(C.key===null?h:C.key)||null,s(f,g,C,F);case Wr:return g=g.get(C.key===null?h:C.key)||null,l(f,g,C,F);case _t:var m=C._init;return p(g,f,h,m(C._payload),F)}if(eo(C)||Rn(C))return g=g.get(h)||null,c(f,g,C,F,null);Qi(f,C)}return null}function v(g,f,h,C){for(var F=null,m=null,Q=f,E=f=0,H=null;Q!==null&&E<h.length;E++){Q.index>E?(H=Q,Q=null):H=Q.sibling;var D=d(g,Q,h[E],C);if(D===null){Q===null&&(Q=H);break}A&&Q&&D.alternate===null&&e(g,Q),f=o(D,f,E),m===null?F=D:m.sibling=D,m=D,Q=H}if(E===h.length)return t(g,Q),CA&&dr(g,E),F;if(Q===null){for(;E<h.length;E++)Q=u(g,h[E],C),Q!==null&&(f=o(Q,f,E),m===null?F=Q:m.sibling=Q,m=Q);return CA&&dr(g,E),F}for(Q=r(g,Q);E<h.length;E++)H=p(Q,g,E,h[E],C),H!==null&&(A&&H.alternate!==null&&Q.delete(H.key===null?E:H.key),f=o(H,f,E),m===null?F=H:m.sibling=H,m=H);return A&&Q.forEach(function(q){return e(g,q)}),CA&&dr(g,E),F}function w(g,f,h,C){var F=Rn(h);if(typeof F!="function")throw Error(I(150));if(h=F.call(h),h==null)throw Error(I(151));for(var m=F=null,Q=f,E=f=0,H=null,D=h.next();Q!==null&&!D.done;E++,D=h.next()){Q.index>E?(H=Q,Q=null):H=Q.sibling;var q=d(g,Q,D.value,C);if(q===null){Q===null&&(Q=H);break}A&&Q&&q.alternate===null&&e(g,Q),f=o(q,f,E),m===null?F=q:m.sibling=q,m=q,Q=H}if(D.done)return t(g,Q),CA&&dr(g,E),F;if(Q===null){for(;!D.done;E++,D=h.next())D=u(g,D.value,C),D!==null&&(f=o(D,f,E),m===null?F=D:m.sibling=D,m=D);return CA&&dr(g,E),F}for(Q=r(g,Q);!D.done;E++,D=h.next())D=p(Q,g,E,D.value,C),D!==null&&(A&&D.alternate!==null&&Q.delete(D.key===null?E:D.key),f=o(D,f,E),m===null?F=D:m.sibling=D,m=D);return A&&Q.forEach(function(X){return e(g,X)}),CA&&dr(g,E),F}function x(g,f,h,C){if(typeof h=="object"&&h!==null&&h.type===$r&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ui:A:{for(var F=h.key,m=f;m!==null;){if(m.key===F){if(F=h.type,F===$r){if(m.tag===7){t(g,m.sibling),f=n(m,h.props.children),f.return=g,g=f;break A}}else if(m.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===_t&&Wf(F)===m.type){t(g,m.sibling),f=n(m,h.props),f.ref=zn(g,m,h),f.return=g,g=f;break A}t(g,m);break}else e(g,m);m=m.sibling}h.type===$r?(f=Qr(h.props.children,g.mode,C,h.key),f.return=g,g=f):(C=da(h.type,h.key,h.props,null,g.mode,C),C.ref=zn(g,f,h),C.return=g,g=C)}return i(g);case Wr:A:{for(m=h.key;f!==null;){if(f.key===m)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(g,f.sibling),f=n(f,h.children||[]),f.return=g,g=f;break A}else{t(g,f);break}else e(g,f);f=f.sibling}f=Kl(h,g.mode,C),f.return=g,g=f}return i(g);case _t:return m=h._init,x(g,f,m(h._payload),C)}if(eo(h))return v(g,f,h,C);if(Rn(h))return w(g,f,h,C);Qi(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(g,f.sibling),f=n(f,h),f.return=g,g=f):(t(g,f),f=Dl(h,g.mode,C),f.return=g,g=f),i(g)):t(g,f)}return x}var wn=Oh(!0),Rh=Oh(!1),Ra=lr(null),Va=null,tn=null,gd=null;function pd(){gd=tn=Va=null}function hd(A){var e=Ra.current;BA(Ra),A._currentValue=e}function Gc(A,e,t){for(;A!==null;){var r=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),A===t)break;A=A.return}}function fn(A,e){Va=A,gd=tn=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&e&&(fe=!0),A.firstContext=null)}function Re(A){var e=A._currentValue;if(gd!==A)if(A={context:A,memoizedValue:e,next:null},tn===null){if(Va===null)throw Error(I(308));tn=A,Va.dependencies={lanes:0,firstContext:A}}else tn=tn.next=A;return e}var hr=null;function Bd(A){hr===null?hr=[A]:hr.push(A)}function Vh(A,e,t,r){var n=e.interleaved;return n===null?(t.next=t,Bd(e)):(t.next=n.next,n.next=t),e.interleaved=t,kt(A,r)}function kt(A,e){A.lanes|=e;var t=A.alternate;for(t!==null&&(t.lanes|=e),t=A,A=A.return;A!==null;)A.childLanes|=e,t=A.alternate,t!==null&&(t.childLanes|=e),t=A,A=A.return;return t.tag===3?t.stateNode:null}var Ot=!1;function vd(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function xt(A,e){return{eventTime:A,lane:e,tag:0,payload:null,callback:null,next:null}}function qt(A,e,t){var r=A.updateQueue;if(r===null)return null;if(r=r.shared,tA&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,kt(A,t)}return n=r.interleaved,n===null?(e.next=e,Bd(r)):(e.next=n.next,n.next=e),r.interleaved=e,kt(A,t)}function ia(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,rd(A,t)}}function $f(A,e){var t=A.updateQueue,r=A.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var n=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?n=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?n=o=e:o=o.next=e}else n=o=e;t={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:o,shared:r.shared,effects:r.effects},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}function Pa(A,e,t,r){var n=A.updateQueue;Ot=!1;var o=n.firstBaseUpdate,i=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,l=s.next;s.next=null,i===null?o=l:i.next=l,i=s;var c=A.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==i&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=s))}if(o!==null){var u=n.baseState;i=0,c=l=s=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var v=A,w=a;switch(d=e,p=t,w.tag){case 1:if(v=w.payload,typeof v=="function"){u=v.call(p,u,d);break A}u=v;break A;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(p,u,d):v,d==null)break A;u=xA({},u,d);break A;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(A.flags|=64,d=n.effects,d===null?n.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,s=u):c=c.next=p,i|=d;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;d=a,a=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);if(c===null&&(s=u),n.baseState=s,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do i|=n.lane,n=n.next;while(n!==e)}else o===null&&(n.shared.lanes=0);Lr|=i,A.lanes=i,A.memoizedState=u}}function Xf(A,e,t){if(A=e.effects,e.effects=null,A!==null)for(e=0;e<A.length;e++){var r=A[e],n=r.callback;if(n!==null){if(r.callback=null,r=t,typeof n!="function")throw Error(I(191,n));n.call(r)}}}var ni={},ft=lr(ni),Po=lr(ni),Go=lr(ni);function Br(A){if(A===ni)throw Error(I(174));return A}function wd(A,e){switch(dA(Go,e),dA(Po,A),dA(ft,ni),A=e.nodeType,A){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fc(null,"");break;default:A=A===8?e.parentNode:e,e=A.namespaceURI||null,A=A.tagName,e=Fc(e,A)}BA(ft),dA(ft,e)}function mn(){BA(ft),BA(Po),BA(Go)}function Gh(A){Br(Go.current);var e=Br(ft.current),t=Fc(e,A.type);e!==t&&(dA(Po,A),dA(ft,t))}function md(A){Po.current===A&&(BA(ft),BA(Po))}var FA=lr(0);function Ga(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bl=[];function Cd(){for(var A=0;A<bl.length;A++)bl[A]._workInProgressVersionPrimary=null;bl.length=0}var aa=St.ReactCurrentDispatcher,Hl=St.ReactCurrentBatchConfig,Ir=0,UA=null,TA=null,PA=null,ja=!1,mo=!1,jo=0,_w=0;function ZA(){throw Error(I(321))}function Qd(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!tt(A[t],e[t]))return!1;return!0}function yd(A,e,t,r,n,o){if(Ir=o,UA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,aa.current=A===null||A.memoizedState===null?Pw:Gw,A=t(r,n),mo){o=0;do{if(mo=!1,jo=0,25<=o)throw Error(I(301));o+=1,PA=TA=null,e.updateQueue=null,aa.current=jw,A=t(r,n)}while(mo)}if(aa.current=za,e=TA!==null&&TA.next!==null,Ir=0,PA=TA=UA=null,ja=!1,e)throw Error(I(300));return A}function Fd(){var A=jo!==0;return jo=0,A}function st(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return PA===null?UA.memoizedState=PA=A:PA=PA.next=A,PA}function Ve(){if(TA===null){var A=UA.alternate;A=A!==null?A.memoizedState:null}else A=TA.next;var e=PA===null?UA.memoizedState:PA.next;if(e!==null)PA=e,TA=A;else{if(A===null)throw Error(I(310));TA=A,A={memoizedState:TA.memoizedState,baseState:TA.baseState,baseQueue:TA.baseQueue,queue:TA.queue,next:null},PA===null?UA.memoizedState=PA=A:PA=PA.next=A}return PA}function zo(A,e){return typeof e=="function"?e(A):e}function kl(A){var e=Ve(),t=e.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=A;var r=TA,n=r.baseQueue,o=t.pending;if(o!==null){if(n!==null){var i=n.next;n.next=o.next,o.next=i}r.baseQueue=n=o,t.pending=null}if(n!==null){o=n.next,r=r.baseState;var a=i=null,s=null,l=o;do{var c=l.lane;if((Ir&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:A(r,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};s===null?(a=s=u,i=r):s=s.next=u,UA.lanes|=c,Lr|=c}l=l.next}while(l!==null&&l!==o);s===null?i=r:s.next=a,tt(r,e.memoizedState)||(fe=!0),e.memoizedState=r,e.baseState=i,e.baseQueue=s,t.lastRenderedState=r}if(A=t.interleaved,A!==null){n=A;do o=n.lane,UA.lanes|=o,Lr|=o,n=n.next;while(n!==A)}else n===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Il(A){var e=Ve(),t=e.queue;if(t===null)throw Error(I(311));t.lastRenderedReducer=A;var r=t.dispatch,n=t.pending,o=e.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do o=A(o,i.action),i=i.next;while(i!==n);tt(o,e.memoizedState)||(fe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,r]}function jh(){}function zh(A,e){var t=UA,r=Ve(),n=e(),o=!tt(r.memoizedState,n);if(o&&(r.memoizedState=n,fe=!0),r=r.queue,Ud(Xh.bind(null,t,r,A),[A]),r.getSnapshot!==e||o||PA!==null&&PA.memoizedState.tag&1){if(t.flags|=2048,Wo(9,$h.bind(null,t,r,n,e),void 0,null),zA===null)throw Error(I(349));Ir&30||Wh(t,e,n)}return n}function Wh(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=UA.updateQueue,e===null?(e={lastEffect:null,stores:null},UA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function $h(A,e,t,r){e.value=t,e.getSnapshot=r,Jh(e)&&Yh(A)}function Xh(A,e,t){return t(function(){Jh(e)&&Yh(A)})}function Jh(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!tt(A,t)}catch{return!0}}function Yh(A){var e=kt(A,1);e!==null&&qe(e,A,1,-1)}function Jf(A){var e=st();return typeof A=="function"&&(A=A()),e.memoizedState=e.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:A},e.queue=A,A=A.dispatch=Vw.bind(null,UA,A),[e.memoizedState,A]}function Wo(A,e,t,r){return A={tag:A,create:e,destroy:t,deps:r,next:null},e=UA.updateQueue,e===null?(e={lastEffect:null,stores:null},UA.updateQueue=e,e.lastEffect=A.next=A):(t=e.lastEffect,t===null?e.lastEffect=A.next=A:(r=t.next,t.next=A,A.next=r,e.lastEffect=A)),A}function Zh(){return Ve().memoizedState}function sa(A,e,t,r){var n=st();UA.flags|=A,n.memoizedState=Wo(1|e,t,void 0,r===void 0?null:r)}function Us(A,e,t,r){var n=Ve();r=r===void 0?null:r;var o=void 0;if(TA!==null){var i=TA.memoizedState;if(o=i.destroy,r!==null&&Qd(r,i.deps)){n.memoizedState=Wo(e,t,o,r);return}}UA.flags|=A,n.memoizedState=Wo(1|e,t,o,r)}function Yf(A,e){return sa(8390656,8,A,e)}function Ud(A,e){return Us(2048,8,A,e)}function qh(A,e){return Us(4,2,A,e)}function A2(A,e){return Us(4,4,A,e)}function e2(A,e){if(typeof e=="function")return A=A(),e(A),function(){e(null)};if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function t2(A,e,t){return t=t!=null?t.concat([A]):null,Us(4,4,e2.bind(null,e,A),t)}function xd(){}function r2(A,e){var t=Ve();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(t.memoizedState=[A,e],A)}function n2(A,e){var t=Ve();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(A=A(),t.memoizedState=[A,e],A)}function o2(A,e,t){return Ir&21?(tt(t,e)||(t=ch(),UA.lanes|=t,Lr|=t,A.baseState=!0),e):(A.baseState&&(A.baseState=!1,fe=!0),A.memoizedState=t)}function Ow(A,e){var t=sA;sA=t!==0&&4>t?t:4,A(!0);var r=Hl.transition;Hl.transition={};try{A(!1),e()}finally{sA=t,Hl.transition=r}}function i2(){return Ve().memoizedState}function Rw(A,e,t){var r=er(A);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},a2(A))s2(e,t);else if(t=Vh(A,e,t,r),t!==null){var n=ae();qe(t,A,r,n),l2(t,e,r)}}function Vw(A,e,t){var r=er(A),n={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(a2(A))s2(e,n);else{var o=A.alternate;if(A.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,a=o(i,t);if(n.hasEagerState=!0,n.eagerState=a,tt(a,i)){var s=e.interleaved;s===null?(n.next=n,Bd(e)):(n.next=s.next,s.next=n),e.interleaved=n;return}}catch{}finally{}t=Vh(A,e,n,r),t!==null&&(n=ae(),qe(t,A,r,n),l2(t,e,r))}}function a2(A){var e=A.alternate;return A===UA||e!==null&&e===UA}function s2(A,e){mo=ja=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function l2(A,e,t){if(t&4194240){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,rd(A,t)}}var za={readContext:Re,useCallback:ZA,useContext:ZA,useEffect:ZA,useImperativeHandle:ZA,useInsertionEffect:ZA,useLayoutEffect:ZA,useMemo:ZA,useReducer:ZA,useRef:ZA,useState:ZA,useDebugValue:ZA,useDeferredValue:ZA,useTransition:ZA,useMutableSource:ZA,useSyncExternalStore:ZA,useId:ZA,unstable_isNewReconciler:!1},Pw={readContext:Re,useCallback:function(A,e){return st().memoizedState=[A,e===void 0?null:e],A},useContext:Re,useEffect:Yf,useImperativeHandle:function(A,e,t){return t=t!=null?t.concat([A]):null,sa(4194308,4,e2.bind(null,e,A),t)},useLayoutEffect:function(A,e){return sa(4194308,4,A,e)},useInsertionEffect:function(A,e){return sa(4,2,A,e)},useMemo:function(A,e){var t=st();return e=e===void 0?null:e,A=A(),t.memoizedState=[A,e],A},useReducer:function(A,e,t){var r=st();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:e},r.queue=A,A=A.dispatch=Rw.bind(null,UA,A),[r.memoizedState,A]},useRef:function(A){var e=st();return A={current:A},e.memoizedState=A},useState:Jf,useDebugValue:xd,useDeferredValue:function(A){return st().memoizedState=A},useTransition:function(){var A=Jf(!1),e=A[0];return A=Ow.bind(null,A[1]),st().memoizedState=A,[e,A]},useMutableSource:function(){},useSyncExternalStore:function(A,e,t){var r=UA,n=st();if(CA){if(t===void 0)throw Error(I(407));t=t()}else{if(t=e(),zA===null)throw Error(I(349));Ir&30||Wh(r,e,t)}n.memoizedState=t;var o={value:t,getSnapshot:e};return n.queue=o,Yf(Xh.bind(null,r,o,A),[A]),r.flags|=2048,Wo(9,$h.bind(null,r,o,t,e),void 0,null),t},useId:function(){var A=st(),e=zA.identifierPrefix;if(CA){var t=Ut,r=Ft;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=jo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=_w++,e=":"+e+"r"+t.toString(32)+":";return A.memoizedState=e},unstable_isNewReconciler:!1},Gw={readContext:Re,useCallback:r2,useContext:Re,useEffect:Ud,useImperativeHandle:t2,useInsertionEffect:qh,useLayoutEffect:A2,useMemo:n2,useReducer:kl,useRef:Zh,useState:function(){return kl(zo)},useDebugValue:xd,useDeferredValue:function(A){var e=Ve();return o2(e,TA.memoizedState,A)},useTransition:function(){var A=kl(zo)[0],e=Ve().memoizedState;return[A,e]},useMutableSource:jh,useSyncExternalStore:zh,useId:i2,unstable_isNewReconciler:!1},jw={readContext:Re,useCallback:r2,useContext:Re,useEffect:Ud,useImperativeHandle:t2,useInsertionEffect:qh,useLayoutEffect:A2,useMemo:n2,useReducer:Il,useRef:Zh,useState:function(){return Il(zo)},useDebugValue:xd,useDeferredValue:function(A){var e=Ve();return TA===null?e.memoizedState=A:o2(e,TA.memoizedState,A)},useTransition:function(){var A=Il(zo)[0],e=Ve().memoizedState;return[A,e]},useMutableSource:jh,useSyncExternalStore:zh,useId:i2,unstable_isNewReconciler:!1};function $e(A,e){if(A&&A.defaultProps){e=xA({},e),A=A.defaultProps;for(var t in A)e[t]===void 0&&(e[t]=A[t]);return e}return e}function jc(A,e,t,r){e=A.memoizedState,t=t(r,e),t=t==null?e:xA({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var xs={isMounted:function(A){return(A=A._reactInternals)?Kr(A)===A:!1},enqueueSetState:function(A,e,t){A=A._reactInternals;var r=ae(),n=er(A),o=xt(r,n);o.payload=e,t!=null&&(o.callback=t),e=qt(A,o,n),e!==null&&(qe(e,A,n,r),ia(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var r=ae(),n=er(A),o=xt(r,n);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=qt(A,o,n),e!==null&&(qe(e,A,n,r),ia(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=ae(),r=er(A),n=xt(t,r);n.tag=2,e!=null&&(n.callback=e),e=qt(A,n,r),e!==null&&(qe(e,A,r,t),ia(e,A,r))}};function Zf(A,e,t,r,n,o,i){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(r,o,i):e.prototype&&e.prototype.isPureReactComponent?!_o(t,r)||!_o(n,o):!0}function c2(A,e,t){var r=!1,n=ir,o=e.contextType;return typeof o=="object"&&o!==null?o=Re(o):(n=he(e)?Hr:re.current,r=e.contextTypes,o=(r=r!=null)?Bn(A,n):ir),e=new e(t,o),A.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xs,A.stateNode=e,e._reactInternals=A,r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=n,A.__reactInternalMemoizedMaskedChildContext=o),e}function qf(A,e,t,r){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==A&&xs.enqueueReplaceState(e,e.state,null)}function zc(A,e,t,r){var n=A.stateNode;n.props=t,n.state=A.memoizedState,n.refs={},vd(A);var o=e.contextType;typeof o=="object"&&o!==null?n.context=Re(o):(o=he(e)?Hr:re.current,n.context=Bn(A,o)),n.state=A.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(jc(A,e,o,t),n.state=A.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&xs.enqueueReplaceState(n,n.state,null),Pa(A,t,n,r),n.state=A.memoizedState),typeof n.componentDidMount=="function"&&(A.flags|=4194308)}function Cn(A,e){try{var t="",r=e;do t+=wv(r),r=r.return;while(r);var n=t}catch(o){n=`
Error generating stack: `+o.message+`
`+o.stack}return{value:A,source:e,stack:n,digest:null}}function Ll(A,e,t){return{value:A,source:null,stack:t??null,digest:e??null}}function Wc(A,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var zw=typeof WeakMap=="function"?WeakMap:Map;function u2(A,e,t){t=xt(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){$a||($a=!0,ru=r),Wc(A,e)},t}function d2(A,e,t){t=xt(-1,t),t.tag=3;var r=A.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;t.payload=function(){return r(n)},t.callback=function(){Wc(A,e)}}var o=A.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Wc(A,e),typeof r!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function A1(A,e,t){var r=A.pingCache;if(r===null){r=A.pingCache=new zw;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(t)||(n.add(t),A=im.bind(null,A,e,t),e.then(A,A))}function e1(A){do{var e;if((e=A.tag===13)&&(e=A.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return A;A=A.return}while(A!==null);return null}function t1(A,e,t,r,n){return A.mode&1?(A.flags|=65536,A.lanes=n,A):(A===e?A.flags|=65536:(A.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=xt(-1,1),e.tag=2,qt(t,e,1))),t.lanes|=1),A)}var Ww=St.ReactCurrentOwner,fe=!1;function ie(A,e,t,r){e.child=A===null?Rh(e,null,t,r):wn(e,A.child,t,r)}function r1(A,e,t,r,n){t=t.render;var o=e.ref;return fn(e,n),r=yd(A,e,t,r,o,n),t=Fd(),A!==null&&!fe?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,It(A,e,n)):(CA&&t&&ud(e),e.flags|=1,ie(A,e,r,n),e.child)}function n1(A,e,t,r,n){if(A===null){var o=t.type;return typeof o=="function"&&!Dd(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,f2(A,e,o,r,n)):(A=da(t.type,null,r,e,e.mode,n),A.ref=e.ref,A.return=e,e.child=A)}if(o=A.child,!(A.lanes&n)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:_o,t(i,r)&&A.ref===e.ref)return It(A,e,n)}return e.flags|=1,A=tr(o,r),A.ref=e.ref,A.return=e,e.child=A}function f2(A,e,t,r,n){if(A!==null){var o=A.memoizedProps;if(_o(o,r)&&A.ref===e.ref)if(fe=!1,e.pendingProps=r=o,(A.lanes&n)!==0)A.flags&131072&&(fe=!0);else return e.lanes=A.lanes,It(A,e,n)}return $c(A,e,t,r,n)}function g2(A,e,t){var r=e.pendingProps,n=r.children,o=A!==null?A.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dA(nn,Qe),Qe|=t;else{if(!(t&1073741824))return A=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:A,cachePool:null,transitions:null},e.updateQueue=null,dA(nn,Qe),Qe|=A,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,dA(nn,Qe),Qe|=r}else o!==null?(r=o.baseLanes|t,e.memoizedState=null):r=t,dA(nn,Qe),Qe|=r;return ie(A,e,n,t),e.child}function p2(A,e){var t=e.ref;(A===null&&t!==null||A!==null&&A.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function $c(A,e,t,r,n){var o=he(t)?Hr:re.current;return o=Bn(e,o),fn(e,n),t=yd(A,e,t,r,o,n),r=Fd(),A!==null&&!fe?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,It(A,e,n)):(CA&&r&&ud(e),e.flags|=1,ie(A,e,t,n),e.child)}function o1(A,e,t,r,n){if(he(t)){var o=!0;Na(e)}else o=!1;if(fn(e,n),e.stateNode===null)la(A,e),c2(e,t,r),zc(e,t,r,n),r=!0;else if(A===null){var i=e.stateNode,a=e.memoizedProps;i.props=a;var s=i.context,l=t.contextType;typeof l=="object"&&l!==null?l=Re(l):(l=he(t)?Hr:re.current,l=Bn(e,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==l)&&qf(e,i,r,l),Ot=!1;var d=e.memoizedState;i.state=d,Pa(e,r,i,n),s=e.memoizedState,a!==r||d!==s||pe.current||Ot?(typeof c=="function"&&(jc(e,t,c,r),s=e.memoizedState),(a=Ot||Zf(e,t,a,r,d,s,l))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),i.props=r,i.state=s,i.context=l,r=a):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,Ph(A,e),a=e.memoizedProps,l=e.type===e.elementType?a:$e(e.type,a),i.props=l,u=e.pendingProps,d=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Re(s):(s=he(t)?Hr:re.current,s=Bn(e,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==u||d!==s)&&qf(e,i,r,s),Ot=!1,d=e.memoizedState,i.state=d,Pa(e,r,i,n);var v=e.memoizedState;a!==u||d!==v||pe.current||Ot?(typeof p=="function"&&(jc(e,t,p,r),v=e.memoizedState),(l=Ot||Zf(e,t,l,r,d,v,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),i.props=r,i.state=v,i.context=s,r=l):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),r=!1)}return Xc(A,e,t,r,o,n)}function Xc(A,e,t,r,n,o){p2(A,e);var i=(e.flags&128)!==0;if(!r&&!i)return n&&Gf(e,t,!1),It(A,e,o);r=e.stateNode,Ww.current=e;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,A!==null&&i?(e.child=wn(e,A.child,null,o),e.child=wn(e,null,a,o)):ie(A,e,a,o),e.memoizedState=r.state,n&&Gf(e,t,!0),e.child}function h2(A){var e=A.stateNode;e.pendingContext?Pf(A,e.pendingContext,e.pendingContext!==e.context):e.context&&Pf(A,e.context,!1),wd(A,e.containerInfo)}function i1(A,e,t,r,n){return vn(),fd(n),e.flags|=256,ie(A,e,t,r),e.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Yc(A){return{baseLanes:A,cachePool:null,transitions:null}}function B2(A,e,t){var r=e.pendingProps,n=FA.current,o=!1,i=(e.flags&128)!==0,a;if((a=i)||(a=A!==null&&A.memoizedState===null?!1:(n&2)!==0),a?(o=!0,e.flags&=-129):(A===null||A.memoizedState!==null)&&(n|=1),dA(FA,n&1),A===null)return Pc(e),A=e.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(e.mode&1?A.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=r.children,A=r.fallback,o?(r=e.mode,o=e.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Hs(i,r,0,null),A=Qr(A,r,t,null),o.return=e,A.return=e,o.sibling=A,e.child=o,e.child.memoizedState=Yc(t),e.memoizedState=Jc,A):Ed(e,i));if(n=A.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return $w(A,e,i,r,a,n,t);if(o){o=r.fallback,i=e.mode,n=A.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=tr(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?o=tr(a,o):(o=Qr(o,i,t,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,i=A.child.memoizedState,i=i===null?Yc(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=A.childLanes&~t,e.memoizedState=Jc,r}return o=A.child,A=o.sibling,r=tr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,A!==null&&(t=e.deletions,t===null?(e.deletions=[A],e.flags|=16):t.push(A)),e.child=r,e.memoizedState=null,r}function Ed(A,e){return e=Hs({mode:"visible",children:e},A.mode,0,null),e.return=A,A.child=e}function yi(A,e,t,r){return r!==null&&fd(r),wn(e,A.child,null,t),A=Ed(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function $w(A,e,t,r,n,o,i){if(t)return e.flags&256?(e.flags&=-257,r=Ll(Error(I(422))),yi(A,e,i,r)):e.memoizedState!==null?(e.child=A.child,e.flags|=128,null):(o=r.fallback,n=e.mode,r=Hs({mode:"visible",children:r.children},n,0,null),o=Qr(o,n,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&wn(e,A.child,null,i),e.child.memoizedState=Yc(i),e.memoizedState=Jc,o);if(!(e.mode&1))return yi(A,e,i,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Ll(o,r,void 0),yi(A,e,i,r)}if(a=(i&A.childLanes)!==0,fe||a){if(r=zA,r!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|i)?0:n,n!==0&&n!==o.retryLane&&(o.retryLane=n,kt(A,n),qe(r,A,n,-1))}return Sd(),r=Ll(Error(I(421))),yi(A,e,i,r)}return n.data==="$?"?(e.flags|=128,e.child=A.child,e=am.bind(null,A),n._reactRetry=e,null):(A=o.treeContext,ye=Zt(n.nextSibling),Ue=e,CA=!0,Je=null,A!==null&&(Se[De++]=Ft,Se[De++]=Ut,Se[De++]=kr,Ft=A.id,Ut=A.overflow,kr=e),e=Ed(e,r.children),e.flags|=4096,e)}function a1(A,e,t){A.lanes|=e;var r=A.alternate;r!==null&&(r.lanes|=e),Gc(A.return,e,t)}function Sl(A,e,t,r,n){var o=A.memoizedState;o===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:n}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=n)}function v2(A,e,t){var r=e.pendingProps,n=r.revealOrder,o=r.tail;if(ie(A,e,r.children,t),r=FA.current,r&2)r=r&1|2,e.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&a1(A,t,e);else if(A.tag===19)a1(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}r&=1}if(dA(FA,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(t=e.child,n=null;t!==null;)A=t.alternate,A!==null&&Ga(A)===null&&(n=t),t=t.sibling;t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),Sl(e,!1,n,t,o);break;case"backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(A=n.alternate,A!==null&&Ga(A)===null){e.child=n;break}A=n.sibling,n.sibling=t,t=n,n=A}Sl(e,!0,t,null,o);break;case"together":Sl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(A,e){!(e.mode&1)&&A!==null&&(A.alternate=null,e.alternate=null,e.flags|=2)}function It(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Lr|=e.lanes,!(t&e.childLanes))return null;if(A!==null&&e.child!==A.child)throw Error(I(153));if(e.child!==null){for(A=e.child,t=tr(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=tr(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function Xw(A,e,t){switch(e.tag){case 3:h2(e),vn();break;case 5:Gh(e);break;case 1:he(e.type)&&Na(e);break;case 4:wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;dA(Ra,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(dA(FA,FA.current&1),e.flags|=128,null):t&e.child.childLanes?B2(A,e,t):(dA(FA,FA.current&1),A=It(A,e,t),A!==null?A.sibling:null);dA(FA,FA.current&1);break;case 19:if(r=(t&e.childLanes)!==0,A.flags&128){if(r)return v2(A,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),dA(FA,FA.current),r)break;return null;case 22:case 23:return e.lanes=0,g2(A,e,t)}return It(A,e,t)}var w2,Zc,m2,C2;w2=function(A,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)A.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zc=function(){};m2=function(A,e,t,r){var n=A.memoizedProps;if(n!==r){A=e.stateNode,Br(ft.current);var o=null;switch(t){case"input":n=mc(A,n),r=mc(A,r),o=[];break;case"select":n=xA({},n,{value:void 0}),r=xA({},r,{value:void 0}),o=[];break;case"textarea":n=yc(A,n),r=yc(A,r),o=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(A.onclick=Ma)}Uc(t,r);var i;t=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var a=n[l];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lo.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var s=r[l];if(a=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(l,t)),t=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(l,s)):l==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(l)?(s!=null&&l==="onScroll"&&gA("scroll",A),o||a===s||(o=[])):(o=o||[]).push(l,s))}t&&(o=o||[]).push("style",t);var l=o;(e.updateQueue=l)&&(e.flags|=4)}};C2=function(A,e,t,r){t!==r&&(e.flags|=4)};function Wn(A,e){if(!CA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:r.sibling=null}}function qA(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,r=0;if(e)for(var n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=A,n=n.sibling;else for(n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=A,n=n.sibling;return A.subtreeFlags|=r,A.childLanes=t,e}function Jw(A,e,t){var r=e.pendingProps;switch(dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qA(e),null;case 1:return he(e.type)&&Ta(),qA(e),null;case 3:return r=e.stateNode,mn(),BA(pe),BA(re),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(A===null||A.child===null)&&(Ci(e)?e.flags|=4:A===null||A.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Je!==null&&(iu(Je),Je=null))),Zc(A,e),qA(e),null;case 5:md(e);var n=Br(Go.current);if(t=e.type,A!==null&&e.stateNode!=null)m2(A,e,t,r,n),A.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return qA(e),null}if(A=Br(ft.current),Ci(e)){r=e.stateNode,t=e.type;var o=e.memoizedProps;switch(r[ut]=e,r[Vo]=o,A=(e.mode&1)!==0,t){case"dialog":gA("cancel",r),gA("close",r);break;case"iframe":case"object":case"embed":gA("load",r);break;case"video":case"audio":for(n=0;n<ro.length;n++)gA(ro[n],r);break;case"source":gA("error",r);break;case"img":case"image":case"link":gA("error",r),gA("load",r);break;case"details":gA("toggle",r);break;case"input":hf(r,o),gA("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},gA("invalid",r);break;case"textarea":vf(r,o),gA("invalid",r)}Uc(t,o),n=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,A),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,a,A),n=["children",""+a]):Lo.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&gA("scroll",r)}switch(t){case"input":di(r),Bf(r,o,!0);break;case"textarea":di(r),wf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ma)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=Xp(t)),A==="http://www.w3.org/1999/xhtml"?t==="script"?(A=i.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof r.is=="string"?A=i.createElement(t,{is:r.is}):(A=i.createElement(t),t==="select"&&(i=A,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):A=i.createElementNS(A,t),A[ut]=e,A[Vo]=r,w2(A,e,!1,!1),e.stateNode=A;A:{switch(i=xc(t,r),t){case"dialog":gA("cancel",A),gA("close",A),n=r;break;case"iframe":case"object":case"embed":gA("load",A),n=r;break;case"video":case"audio":for(n=0;n<ro.length;n++)gA(ro[n],A);n=r;break;case"source":gA("error",A),n=r;break;case"img":case"image":case"link":gA("error",A),gA("load",A),n=r;break;case"details":gA("toggle",A),n=r;break;case"input":hf(A,r),n=mc(A,r),gA("invalid",A);break;case"option":n=r;break;case"select":A._wrapperState={wasMultiple:!!r.multiple},n=xA({},r,{value:void 0}),gA("invalid",A);break;case"textarea":vf(A,r),n=yc(A,r),gA("invalid",A);break;default:n=r}Uc(t,n),a=n;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Zp(A,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Jp(A,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&So(A,s):typeof s=="number"&&So(A,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Lo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&gA("scroll",A):s!=null&&Yu(A,o,s,i))}switch(t){case"input":di(A),Bf(A,r,!1);break;case"textarea":di(A),wf(A);break;case"option":r.value!=null&&A.setAttribute("value",""+or(r.value));break;case"select":A.multiple=!!r.multiple,o=r.value,o!=null?ln(A,!!r.multiple,o,!1):r.defaultValue!=null&&ln(A,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(A.onclick=Ma)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break A;case"img":r=!0;break A;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qA(e),null;case 6:if(A&&e.stateNode!=null)C2(A,e,A.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(t=Br(Go.current),Br(ft.current),Ci(e)){if(r=e.stateNode,t=e.memoizedProps,r[ut]=e,(o=r.nodeValue!==t)&&(A=Ue,A!==null))switch(A.tag){case 3:mi(r.nodeValue,t,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,t,(A.mode&1)!==0)}o&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return qA(e),null;case 13:if(BA(FA),r=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(CA&&ye!==null&&e.mode&1&&!(e.flags&128))_h(),vn(),e.flags|=98560,o=!1;else if(o=Ci(e),r!==null&&r.dehydrated!==null){if(A===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[ut]=e}else vn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qA(e),o=!1}else Je!==null&&(iu(Je),Je=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(A!==null&&A.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(A===null||FA.current&1?_A===0&&(_A=3):Sd())),e.updateQueue!==null&&(e.flags|=4),qA(e),null);case 4:return mn(),Zc(A,e),A===null&&Oo(e.stateNode.containerInfo),qA(e),null;case 10:return hd(e.type._context),qA(e),null;case 17:return he(e.type)&&Ta(),qA(e),null;case 19:if(BA(FA),o=e.memoizedState,o===null)return qA(e),null;if(r=(e.flags&128)!==0,i=o.rendering,i===null)if(r)Wn(o,!1);else{if(_A!==0||A!==null&&A.flags&128)for(A=e.child;A!==null;){if(i=Ga(A),i!==null){for(e.flags|=128,Wn(o,!1),r=i.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)o=t,A=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=A,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,A=i.dependencies,o.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),t=t.sibling;return dA(FA,FA.current&1|2),e.child}A=A.sibling}o.tail!==null&&kA()>Qn&&(e.flags|=128,r=!0,Wn(o,!1),e.lanes=4194304)}else{if(!r)if(A=Ga(i),A!==null){if(e.flags|=128,r=!0,t=A.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Wn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!CA)return qA(e),null}else 2*kA()-o.renderingStartTime>Qn&&t!==1073741824&&(e.flags|=128,r=!0,Wn(o,!1),e.lanes=4194304);o.isBackwards?(i.sibling=e.child,e.child=i):(t=o.last,t!==null?t.sibling=i:e.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=kA(),e.sibling=null,t=FA.current,dA(FA,r?t&1|2:t&1),e):(qA(e),null);case 22:case 23:return Ld(),r=e.memoizedState!==null,A!==null&&A.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qe&1073741824&&(qA(e),e.subtreeFlags&6&&(e.flags|=8192)):qA(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Yw(A,e){switch(dd(e),e.tag){case 1:return he(e.type)&&Ta(),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return mn(),BA(pe),BA(re),Cd(),A=e.flags,A&65536&&!(A&128)?(e.flags=A&-65537|128,e):null;case 5:return md(e),null;case 13:if(BA(FA),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(I(340));vn()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return BA(FA),null;case 4:return mn(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Fi=!1,te=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,V=null;function rn(A,e){var t=A.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){EA(A,e,r)}else t.current=null}function qc(A,e,t){try{t()}catch(r){EA(A,e,r)}}var s1=!1;function qw(A,e){if(Mc=Sa,A=xh(),cd(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var n=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break A}var i=0,a=-1,s=-1,l=0,c=0,u=A,d=null;e:for(;;){for(var p;u!==t||n!==0&&u.nodeType!==3||(a=i+n),u!==o||r!==0&&u.nodeType!==3||(s=i+r),u.nodeType===3&&(i+=u.nodeValue.length),(p=u.firstChild)!==null;)d=u,u=p;for(;;){if(u===A)break e;if(d===t&&++l===n&&(a=i),d===o&&++c===r&&(s=i),(p=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=p}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Tc={focusedElem:A,selectionRange:t},Sa=!1,V=e;V!==null;)if(e=V,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,V=A;else for(;V!==null;){e=V;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:$e(e.type,w),x);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(C){EA(e,e.return,C)}if(A=e.sibling,A!==null){A.return=e.return,V=A;break}V=e.return}return v=s1,s1=!1,v}function Co(A,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&A)===A){var o=n.destroy;n.destroy=void 0,o!==void 0&&qc(e,t,o)}n=n.next}while(n!==r)}}function Es(A,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Au(A){var e=A.ref;if(e!==null){var t=A.stateNode;switch(A.tag){case 5:A=t;break;default:A=t}typeof e=="function"?e(A):e.current=A}}function Q2(A){var e=A.alternate;e!==null&&(A.alternate=null,Q2(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&(delete e[ut],delete e[Vo],delete e[Oc],delete e[Kw],delete e[Mw])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function y2(A){return A.tag===5||A.tag===3||A.tag===4}function l1(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||y2(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function eu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(A,e):t.insertBefore(A,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(A,t)):(e=t,e.appendChild(A)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ma));else if(r!==4&&(A=A.child,A!==null))for(eu(A,e,t),A=A.sibling;A!==null;)eu(A,e,t),A=A.sibling}function tu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(r!==4&&(A=A.child,A!==null))for(tu(A,e,t),A=A.sibling;A!==null;)tu(A,e,t),A=A.sibling}var WA=null,Xe=!1;function Dt(A,e,t){for(t=t.child;t!==null;)F2(A,e,t),t=t.sibling}function F2(A,e,t){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ws,t)}catch{}switch(t.tag){case 5:te||rn(t,e);case 6:var r=WA,n=Xe;WA=null,Dt(A,e,t),WA=r,Xe=n,WA!==null&&(Xe?(A=WA,t=t.stateNode,A.nodeType===8?A.parentNode.removeChild(t):A.removeChild(t)):WA.removeChild(t.stateNode));break;case 18:WA!==null&&(Xe?(A=WA,t=t.stateNode,A.nodeType===8?xl(A.parentNode,t):A.nodeType===1&&xl(A,t),To(A)):xl(WA,t.stateNode));break;case 4:r=WA,n=Xe,WA=t.stateNode.containerInfo,Xe=!0,Dt(A,e,t),WA=r,Xe=n;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var o=n,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&qc(t,e,i),n=n.next}while(n!==r)}Dt(A,e,t);break;case 1:if(!te&&(rn(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){EA(t,e,a)}Dt(A,e,t);break;case 21:Dt(A,e,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Dt(A,e,t),te=r):Dt(A,e,t);break;default:Dt(A,e,t)}}function c1(A){var e=A.updateQueue;if(e!==null){A.updateQueue=null;var t=A.stateNode;t===null&&(t=A.stateNode=new Zw),e.forEach(function(r){var n=sm.bind(null,A,r);t.has(r)||(t.add(r),r.then(n,n))})}}function je(A,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];try{var o=A,i=e,a=i;A:for(;a!==null;){switch(a.tag){case 5:WA=a.stateNode,Xe=!1;break A;case 3:WA=a.stateNode.containerInfo,Xe=!0;break A;case 4:WA=a.stateNode.containerInfo,Xe=!0;break A}a=a.return}if(WA===null)throw Error(I(160));F2(o,i,n),WA=null,Xe=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(l){EA(n,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U2(e,A),e=e.sibling}function U2(A,e){var t=A.alternate,r=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(je(e,A),it(A),r&4){try{Co(3,A,A.return),Es(3,A)}catch(w){EA(A,A.return,w)}try{Co(5,A,A.return)}catch(w){EA(A,A.return,w)}}break;case 1:je(e,A),it(A),r&512&&t!==null&&rn(t,t.return);break;case 5:if(je(e,A),it(A),r&512&&t!==null&&rn(t,t.return),A.flags&32){var n=A.stateNode;try{So(n,"")}catch(w){EA(A,A.return,w)}}if(r&4&&(n=A.stateNode,n!=null)){var o=A.memoizedProps,i=t!==null?t.memoizedProps:o,a=A.type,s=A.updateQueue;if(A.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Wp(n,o),xc(a,i);var l=xc(a,o);for(i=0;i<s.length;i+=2){var c=s[i],u=s[i+1];c==="style"?Zp(n,u):c==="dangerouslySetInnerHTML"?Jp(n,u):c==="children"?So(n,u):Yu(n,c,u,l)}switch(a){case"input":Cc(n,o);break;case"textarea":$p(n,o);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ln(n,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?ln(n,!!o.multiple,o.defaultValue,!0):ln(n,!!o.multiple,o.multiple?[]:"",!1))}n[Vo]=o}catch(w){EA(A,A.return,w)}}break;case 6:if(je(e,A),it(A),r&4){if(A.stateNode===null)throw Error(I(162));n=A.stateNode,o=A.memoizedProps;try{n.nodeValue=o}catch(w){EA(A,A.return,w)}}break;case 3:if(je(e,A),it(A),r&4&&t!==null&&t.memoizedState.isDehydrated)try{To(e.containerInfo)}catch(w){EA(A,A.return,w)}break;case 4:je(e,A),it(A);break;case 13:je(e,A),it(A),n=A.child,n.flags&8192&&(o=n.memoizedState!==null,n.stateNode.isHidden=o,!o||n.alternate!==null&&n.alternate.memoizedState!==null||(kd=kA())),r&4&&c1(A);break;case 22:if(c=t!==null&&t.memoizedState!==null,A.mode&1?(te=(l=te)||c,je(e,A),te=l):je(e,A),it(A),r&8192){if(l=A.memoizedState!==null,(A.stateNode.isHidden=l)&&!c&&A.mode&1)for(V=A,c=A.child;c!==null;){for(u=V=c;V!==null;){switch(d=V,p=d.child,d.tag){case 0:case 11:case 14:case 15:Co(4,d,d.return);break;case 1:rn(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,t=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){EA(r,t,w)}}break;case 5:rn(d,d.return);break;case 22:if(d.memoizedState!==null){d1(u);continue}}p!==null?(p.return=d,V=p):d1(u)}c=c.sibling}A:for(c=null,u=A;;){if(u.tag===5){if(c===null){c=u;try{n=u.stateNode,l?(o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,s=u.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Yp("display",i))}catch(w){EA(A,A.return,w)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(w){EA(A,A.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===A)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===A)break A;for(;u.sibling===null;){if(u.return===null||u.return===A)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:je(e,A),it(A),r&4&&c1(A);break;case 21:break;default:je(e,A),it(A)}}function it(A){var e=A.flags;if(e&2){try{A:{for(var t=A.return;t!==null;){if(y2(t)){var r=t;break A}t=t.return}throw Error(I(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(So(n,""),r.flags&=-33);var o=l1(A);tu(A,o,n);break;case 3:case 4:var i=r.stateNode.containerInfo,a=l1(A);eu(A,a,i);break;default:throw Error(I(161))}}catch(s){EA(A,A.return,s)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function Am(A,e,t){V=A,x2(A)}function x2(A,e,t){for(var r=(A.mode&1)!==0;V!==null;){var n=V,o=n.child;if(n.tag===22&&r){var i=n.memoizedState!==null||Fi;if(!i){var a=n.alternate,s=a!==null&&a.memoizedState!==null||te;a=Fi;var l=te;if(Fi=i,(te=s)&&!l)for(V=n;V!==null;)i=V,s=i.child,i.tag===22&&i.memoizedState!==null?f1(n):s!==null?(s.return=i,V=s):f1(n);for(;o!==null;)V=o,x2(o),o=o.sibling;V=n,Fi=a,te=l}u1(A)}else n.subtreeFlags&8772&&o!==null?(o.return=n,V=o):u1(A)}}function u1(A){for(;V!==null;){var e=V;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:te||Es(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!te)if(t===null)r.componentDidMount();else{var n=e.elementType===e.type?t.memoizedProps:$e(e.type,t.memoizedProps);r.componentDidUpdate(n,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Xf(e,o,r);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Xf(e,i,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&To(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}te||e.flags&512&&Au(e)}catch(d){EA(e,e.return,d)}}if(e===A){V=null;break}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}}function d1(A){for(;V!==null;){var e=V;if(e===A){V=null;break}var t=e.sibling;if(t!==null){t.return=e.return,V=t;break}V=e.return}}function f1(A){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Es(4,e)}catch(s){EA(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(s){EA(e,n,s)}}var o=e.return;try{Au(e)}catch(s){EA(e,o,s)}break;case 5:var i=e.return;try{Au(e)}catch(s){EA(e,i,s)}}}catch(s){EA(e,e.return,s)}if(e===A){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var em=Math.ceil,Wa=St.ReactCurrentDispatcher,bd=St.ReactCurrentOwner,_e=St.ReactCurrentBatchConfig,tA=0,zA=null,KA=null,JA=0,Qe=0,nn=lr(0),_A=0,$o=null,Lr=0,bs=0,Hd=0,Qo=null,de=null,kd=0,Qn=1/0,mt=null,$a=!1,ru=null,Ar=null,Ui=!1,jt=null,Xa=0,yo=0,nu=null,ca=-1,ua=0;function ae(){return tA&6?kA():ca!==-1?ca:ca=kA()}function er(A){return A.mode&1?tA&2&&JA!==0?JA&-JA:Nw.transition!==null?(ua===0&&(ua=ch()),ua):(A=sA,A!==0||(A=window.event,A=A===void 0?16:Bh(A.type)),A):1}function qe(A,e,t,r){if(50<yo)throw yo=0,nu=null,Error(I(185));ei(A,t,r),(!(tA&2)||A!==zA)&&(A===zA&&(!(tA&2)&&(bs|=t),_A===4&&Pt(A,JA)),Be(A,r),t===1&&tA===0&&!(e.mode&1)&&(Qn=kA()+500,Fs&&cr()))}function Be(A,e){var t=A.callbackNode;Nv(A,e);var r=La(A,A===zA?JA:0);if(r===0)t!==null&&Qf(t),A.callbackNode=null,A.callbackPriority=0;else if(e=r&-r,A.callbackPriority!==e){if(t!=null&&Qf(t),e===1)A.tag===0?Tw(g1.bind(null,A)):Mh(g1.bind(null,A)),Sw(function(){!(tA&6)&&cr()}),t=null;else{switch(uh(r)){case 1:t=td;break;case 4:t=sh;break;case 16:t=Ia;break;case 536870912:t=lh;break;default:t=Ia}t=D2(t,E2.bind(null,A))}A.callbackPriority=e,A.callbackNode=t}}function E2(A,e){if(ca=-1,ua=0,tA&6)throw Error(I(327));var t=A.callbackNode;if(gn()&&A.callbackNode!==t)return null;var r=La(A,A===zA?JA:0);if(r===0)return null;if(r&30||r&A.expiredLanes||e)e=Ja(A,r);else{e=r;var n=tA;tA|=2;var o=H2();(zA!==A||JA!==e)&&(mt=null,Qn=kA()+500,Cr(A,e));do try{nm();break}catch(a){b2(A,a)}while(!0);pd(),Wa.current=o,tA=n,KA!==null?e=0:(zA=null,JA=0,e=_A)}if(e!==0){if(e===2&&(n=Ic(A),n!==0&&(r=n,e=ou(A,n))),e===1)throw t=$o,Cr(A,0),Pt(A,r),Be(A,kA()),t;if(e===6)Pt(A,r);else{if(n=A.current.alternate,!(r&30)&&!tm(n)&&(e=Ja(A,r),e===2&&(o=Ic(A),o!==0&&(r=o,e=ou(A,o))),e===1))throw t=$o,Cr(A,0),Pt(A,r),Be(A,kA()),t;switch(A.finishedWork=n,A.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:fr(A,de,mt);break;case 3:if(Pt(A,r),(r&130023424)===r&&(e=kd+500-kA(),10<e)){if(La(A,0)!==0)break;if(n=A.suspendedLanes,(n&r)!==r){ae(),A.pingedLanes|=A.suspendedLanes&n;break}A.timeoutHandle=_c(fr.bind(null,A,de,mt),e);break}fr(A,de,mt);break;case 4:if(Pt(A,r),(r&4194240)===r)break;for(e=A.eventTimes,n=-1;0<r;){var i=31-Ze(r);o=1<<i,i=e[i],i>n&&(n=i),r&=~o}if(r=n,r=kA()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*em(r/1960))-r,10<r){A.timeoutHandle=_c(fr.bind(null,A,de,mt),r);break}fr(A,de,mt);break;case 5:fr(A,de,mt);break;default:throw Error(I(329))}}}return Be(A,kA()),A.callbackNode===t?E2.bind(null,A):null}function ou(A,e){var t=Qo;return A.current.memoizedState.isDehydrated&&(Cr(A,e).flags|=256),A=Ja(A,e),A!==2&&(e=de,de=t,e!==null&&iu(e)),A}function iu(A){de===null?de=A:de.push.apply(de,A)}function tm(A){for(var e=A;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var n=t[r],o=n.getSnapshot;n=n.value;try{if(!tt(o(),n))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pt(A,e){for(e&=~Hd,e&=~bs,A.suspendedLanes|=e,A.pingedLanes&=~e,A=A.expirationTimes;0<e;){var t=31-Ze(e),r=1<<t;A[t]=-1,e&=~r}}function g1(A){if(tA&6)throw Error(I(327));gn();var e=La(A,0);if(!(e&1))return Be(A,kA()),null;var t=Ja(A,e);if(A.tag!==0&&t===2){var r=Ic(A);r!==0&&(e=r,t=ou(A,r))}if(t===1)throw t=$o,Cr(A,0),Pt(A,e),Be(A,kA()),t;if(t===6)throw Error(I(345));return A.finishedWork=A.current.alternate,A.finishedLanes=e,fr(A,de,mt),Be(A,kA()),null}function Id(A,e){var t=tA;tA|=1;try{return A(e)}finally{tA=t,tA===0&&(Qn=kA()+500,Fs&&cr())}}function Sr(A){jt!==null&&jt.tag===0&&!(tA&6)&&gn();var e=tA;tA|=1;var t=_e.transition,r=sA;try{if(_e.transition=null,sA=1,A)return A()}finally{sA=r,_e.transition=t,tA=e,!(tA&6)&&cr()}}function Ld(){Qe=nn.current,BA(nn)}function Cr(A,e){A.finishedWork=null,A.finishedLanes=0;var t=A.timeoutHandle;if(t!==-1&&(A.timeoutHandle=-1,Lw(t)),KA!==null)for(t=KA.return;t!==null;){var r=t;switch(dd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ta();break;case 3:mn(),BA(pe),BA(re),Cd();break;case 5:md(r);break;case 4:mn();break;case 13:BA(FA);break;case 19:BA(FA);break;case 10:hd(r.type._context);break;case 22:case 23:Ld()}t=t.return}if(zA=A,KA=A=tr(A.current,null),JA=Qe=e,_A=0,$o=null,Hd=bs=Lr=0,de=Qo=null,hr!==null){for(e=0;e<hr.length;e++)if(t=hr[e],r=t.interleaved,r!==null){t.interleaved=null;var n=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=n,r.next=i}t.pending=r}hr=null}return A}function b2(A,e){do{var t=KA;try{if(pd(),aa.current=za,ja){for(var r=UA.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}ja=!1}if(Ir=0,PA=TA=UA=null,mo=!1,jo=0,bd.current=null,t===null||t.return===null){_A=1,$o=e,KA=null;break}A:{var o=A,i=t.return,a=t,s=e;if(e=JA,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var l=s,c=a,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=e1(i);if(p!==null){p.flags&=-257,t1(p,i,a,o,e),p.mode&1&&A1(o,l,e),e=p,s=l;var v=e.updateQueue;if(v===null){var w=new Set;w.add(s),e.updateQueue=w}else v.add(s);break A}else{if(!(e&1)){A1(o,l,e),Sd();break A}s=Error(I(426))}}else if(CA&&a.mode&1){var x=e1(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),t1(x,i,a,o,e),fd(Cn(s,a));break A}}o=s=Cn(s,a),_A!==4&&(_A=2),Qo===null?Qo=[o]:Qo.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=u2(o,s,e);$f(o,g);break A;case 1:a=s;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ar===null||!Ar.has(h)))){o.flags|=65536,e&=-e,o.lanes|=e;var C=d2(o,a,e);$f(o,C);break A}}o=o.return}while(o!==null)}I2(t)}catch(F){e=F,KA===t&&t!==null&&(KA=t=t.return);continue}break}while(!0)}function H2(){var A=Wa.current;return Wa.current=za,A===null?za:A}function Sd(){(_A===0||_A===3||_A===2)&&(_A=4),zA===null||!(Lr&268435455)&&!(bs&268435455)||Pt(zA,JA)}function Ja(A,e){var t=tA;tA|=2;var r=H2();(zA!==A||JA!==e)&&(mt=null,Cr(A,e));do try{rm();break}catch(n){b2(A,n)}while(!0);if(pd(),tA=t,Wa.current=r,KA!==null)throw Error(I(261));return zA=null,JA=0,_A}function rm(){for(;KA!==null;)k2(KA)}function nm(){for(;KA!==null&&!Hv();)k2(KA)}function k2(A){var e=S2(A.alternate,A,Qe);A.memoizedProps=A.pendingProps,e===null?I2(A):KA=e,bd.current=null}function I2(A){var e=A;do{var t=e.alternate;if(A=e.return,e.flags&32768){if(t=Yw(t,e),t!==null){t.flags&=32767,KA=t;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{_A=6,KA=null;return}}else if(t=Jw(t,e,Qe),t!==null){KA=t;return}if(e=e.sibling,e!==null){KA=e;return}KA=e=A}while(e!==null);_A===0&&(_A=5)}function fr(A,e,t){var r=sA,n=_e.transition;try{_e.transition=null,sA=1,om(A,e,t,r)}finally{_e.transition=n,sA=r}return null}function om(A,e,t,r){do gn();while(jt!==null);if(tA&6)throw Error(I(327));t=A.finishedWork;var n=A.finishedLanes;if(t===null)return null;if(A.finishedWork=null,A.finishedLanes=0,t===A.current)throw Error(I(177));A.callbackNode=null,A.callbackPriority=0;var o=t.lanes|t.childLanes;if(_v(A,o),A===zA&&(KA=zA=null,JA=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ui||(Ui=!0,D2(Ia,function(){return gn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=_e.transition,_e.transition=null;var i=sA;sA=1;var a=tA;tA|=4,bd.current=null,qw(A,t),U2(t,A),Uw(Tc),Sa=!!Mc,Tc=Mc=null,A.current=t,Am(t),kv(),tA=a,sA=i,_e.transition=o}else A.current=t;if(Ui&&(Ui=!1,jt=A,Xa=n),o=A.pendingLanes,o===0&&(Ar=null),Sv(t.stateNode),Be(A,kA()),e!==null)for(r=A.onRecoverableError,t=0;t<e.length;t++)n=e[t],r(n.value,{componentStack:n.stack,digest:n.digest});if($a)throw $a=!1,A=ru,ru=null,A;return Xa&1&&A.tag!==0&&gn(),o=A.pendingLanes,o&1?A===nu?yo++:(yo=0,nu=A):yo=0,cr(),null}function gn(){if(jt!==null){var A=uh(Xa),e=_e.transition,t=sA;try{if(_e.transition=null,sA=16>A?16:A,jt===null)var r=!1;else{if(A=jt,jt=null,Xa=0,tA&6)throw Error(I(331));var n=tA;for(tA|=4,V=A.current;V!==null;){var o=V,i=o.child;if(V.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var l=a[s];for(V=l;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:Co(8,c,o)}var u=c.child;if(u!==null)u.return=c,V=u;else for(;V!==null;){c=V;var d=c.sibling,p=c.return;if(Q2(c),c===l){V=null;break}if(d!==null){d.return=p,V=d;break}V=p}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}V=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,V=i;else A:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Co(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break A}V=o.return}}var f=A.current;for(V=f;V!==null;){i=V;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,V=h;else A:for(i=f;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Es(9,a)}}catch(F){EA(a,a.return,F)}if(a===i){V=null;break A}var C=a.sibling;if(C!==null){C.return=a.return,V=C;break A}V=a.return}}if(tA=n,cr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ws,A)}catch{}r=!0}return r}finally{sA=t,_e.transition=e}}return!1}function p1(A,e,t){e=Cn(t,e),e=u2(A,e,1),A=qt(A,e,1),e=ae(),A!==null&&(ei(A,1,e),Be(A,e))}function EA(A,e,t){if(A.tag===3)p1(A,A,t);else for(;e!==null;){if(e.tag===3){p1(e,A,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ar===null||!Ar.has(r))){A=Cn(t,A),A=d2(e,A,1),e=qt(e,A,1),A=ae(),e!==null&&(ei(e,1,A),Be(e,A));break}}e=e.return}}function im(A,e,t){var r=A.pingCache;r!==null&&r.delete(e),e=ae(),A.pingedLanes|=A.suspendedLanes&t,zA===A&&(JA&t)===t&&(_A===4||_A===3&&(JA&130023424)===JA&&500>kA()-kd?Cr(A,0):Hd|=t),Be(A,e)}function L2(A,e){e===0&&(A.mode&1?(e=pi,pi<<=1,!(pi&130023424)&&(pi=4194304)):e=1);var t=ae();A=kt(A,e),A!==null&&(ei(A,e,t),Be(A,t))}function am(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),L2(A,t)}function sm(A,e){var t=0;switch(A.tag){case 13:var r=A.stateNode,n=A.memoizedState;n!==null&&(t=n.retryLane);break;case 19:r=A.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),L2(A,t)}var S2;S2=function(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps||pe.current)fe=!0;else{if(!(A.lanes&t)&&!(e.flags&128))return fe=!1,Xw(A,e,t);fe=!!(A.flags&131072)}else fe=!1,CA&&e.flags&1048576&&Th(e,Oa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;la(A,e),A=e.pendingProps;var n=Bn(e,re.current);fn(e,t),n=yd(null,e,r,A,n,t);var o=Fd();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,he(r)?(o=!0,Na(e)):o=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,vd(e),n.updater=xs,e.stateNode=n,n._reactInternals=e,zc(e,r,A,t),e=Xc(null,e,r,!0,o,t)):(e.tag=0,CA&&o&&ud(e),ie(null,e,n,t),e=e.child),e;case 16:r=e.elementType;A:{switch(la(A,e),A=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=cm(r),A=$e(r,A),n){case 0:e=$c(null,e,r,A,t);break A;case 1:e=o1(null,e,r,A,t);break A;case 11:e=r1(null,e,r,A,t);break A;case 14:e=n1(null,e,r,$e(r.type,A),t);break A}throw Error(I(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:$e(r,n),$c(A,e,r,n,t);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:$e(r,n),o1(A,e,r,n,t);case 3:A:{if(h2(e),A===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,n=o.element,Ph(A,e),Pa(e,r,null,t);var i=e.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){n=Cn(Error(I(423)),e),e=i1(A,e,r,t,n);break A}else if(r!==n){n=Cn(Error(I(424)),e),e=i1(A,e,r,t,n);break A}else for(ye=Zt(e.stateNode.containerInfo.firstChild),Ue=e,CA=!0,Je=null,t=Rh(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vn(),r===n){e=It(A,e,t);break A}ie(A,e,r,t)}e=e.child}return e;case 5:return Gh(e),A===null&&Pc(e),r=e.type,n=e.pendingProps,o=A!==null?A.memoizedProps:null,i=n.children,Nc(r,n)?i=null:o!==null&&Nc(r,o)&&(e.flags|=32),p2(A,e),ie(A,e,i,t),e.child;case 6:return A===null&&Pc(e),null;case 13:return B2(A,e,t);case 4:return wd(e,e.stateNode.containerInfo),r=e.pendingProps,A===null?e.child=wn(e,null,r,t):ie(A,e,r,t),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:$e(r,n),r1(A,e,r,n,t);case 7:return ie(A,e,e.pendingProps,t),e.child;case 8:return ie(A,e,e.pendingProps.children,t),e.child;case 12:return ie(A,e,e.pendingProps.children,t),e.child;case 10:A:{if(r=e.type._context,n=e.pendingProps,o=e.memoizedProps,i=n.value,dA(Ra,r._currentValue),r._currentValue=i,o!==null)if(tt(o.value,i)){if(o.children===n.children&&!pe.current){e=It(A,e,t);break A}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=xt(-1,t&-t),s.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Gc(o.return,t,e),a.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===e.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(I(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Gc(i,t,e),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(A,e,n.children,t),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,fn(e,t),n=Re(n),r=r(n),e.flags|=1,ie(A,e,r,t),e.child;case 14:return r=e.type,n=$e(r,e.pendingProps),n=$e(r.type,n),n1(A,e,r,n,t);case 15:return f2(A,e,e.type,e.pendingProps,t);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:$e(r,n),la(A,e),e.tag=1,he(r)?(A=!0,Na(e)):A=!1,fn(e,t),c2(e,r,n),zc(e,r,n,t),Xc(null,e,r,!0,A,t);case 19:return v2(A,e,t);case 22:return g2(A,e,t)}throw Error(I(156,e.tag))};function D2(A,e){return ah(A,e)}function lm(A,e,t,r){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(A,e,t,r){return new lm(A,e,t,r)}function Dd(A){return A=A.prototype,!(!A||!A.isReactComponent)}function cm(A){if(typeof A=="function")return Dd(A)?1:0;if(A!=null){if(A=A.$$typeof,A===qu)return 11;if(A===Ad)return 14}return 2}function tr(A,e){var t=A.alternate;return t===null?(t=Me(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&14680064,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t}function da(A,e,t,r,n,o){var i=2;if(r=A,typeof A=="function")Dd(A)&&(i=1);else if(typeof A=="string")i=5;else A:switch(A){case $r:return Qr(t.children,n,o,e);case Zu:i=8,n|=8;break;case hc:return A=Me(12,t,e,n|2),A.elementType=hc,A.lanes=o,A;case Bc:return A=Me(13,t,e,n),A.elementType=Bc,A.lanes=o,A;case vc:return A=Me(19,t,e,n),A.elementType=vc,A.lanes=o,A;case Gp:return Hs(t,n,o,e);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case Vp:i=10;break A;case Pp:i=9;break A;case qu:i=11;break A;case Ad:i=14;break A;case _t:i=16,r=null;break A}throw Error(I(130,A==null?A:typeof A,""))}return e=Me(i,t,e,n),e.elementType=A,e.type=r,e.lanes=o,e}function Qr(A,e,t,r){return A=Me(7,A,r,e),A.lanes=t,A}function Hs(A,e,t,r){return A=Me(22,A,r,e),A.elementType=Gp,A.lanes=t,A.stateNode={isHidden:!1},A}function Dl(A,e,t){return A=Me(6,A,null,e),A.lanes=t,A}function Kl(A,e,t){return e=Me(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}function um(A,e,t,r,n){this.tag=e,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Kd(A,e,t,r,n,o,i,a,s){return A=new um(A,e,t,a,s),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Me(3,null,null,e),A.current=o,o.stateNode=A,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},vd(o),A}function dm(A,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:A,containerInfo:e,implementation:t}}function K2(A){if(!A)return ir;A=A._reactInternals;A:{if(Kr(A)!==A||A.tag!==1)throw Error(I(170));var e=A;do{switch(e.tag){case 3:e=e.stateNode.context;break A;case 1:if(he(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break A}}e=e.return}while(e!==null);throw Error(I(171))}if(A.tag===1){var t=A.type;if(he(t))return Kh(A,t,e)}return e}function M2(A,e,t,r,n,o,i,a,s){return A=Kd(t,r,!0,A,n,o,i,a,s),A.context=K2(null),t=A.current,r=ae(),n=er(t),o=xt(r,n),o.callback=e??null,qt(t,o,n),A.current.lanes=n,ei(A,n,r),Be(A,r),A}function ks(A,e,t,r){var n=e.current,o=ae(),i=er(n);return t=K2(t),e.context===null?e.context=t:e.pendingContext=t,e=xt(o,i),e.payload={element:A},r=r===void 0?null:r,r!==null&&(e.callback=r),A=qt(n,e,i),A!==null&&(qe(A,n,i,o),ia(A,n,i)),i}function Ya(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function h1(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function Md(A,e){h1(A,e),(A=A.alternate)&&h1(A,e)}function fm(){return null}var T2=typeof reportError=="function"?reportError:function(A){console.error(A)};function Td(A){this._internalRoot=A}Is.prototype.render=Td.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(I(409));ks(A,e,null,null)};Is.prototype.unmount=Td.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Sr(function(){ks(null,A,null,null)}),e[Ht]=null}};function Is(A){this._internalRoot=A}Is.prototype.unstable_scheduleHydration=function(A){if(A){var e=gh();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Vt.length&&e!==0&&e<Vt[t].priority;t++);Vt.splice(t,0,A),t===0&&hh(A)}};function Nd(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Ls(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function B1(){}function gm(A,e,t,r,n){if(n){if(typeof r=="function"){var o=r;r=function(){var l=Ya(i);o.call(l)}}var i=M2(e,r,A,0,null,!1,!1,"",B1);return A._reactRootContainer=i,A[Ht]=i.current,Oo(A.nodeType===8?A.parentNode:A),Sr(),i}for(;n=A.lastChild;)A.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var l=Ya(s);a.call(l)}}var s=Kd(A,0,!1,null,null,!1,!1,"",B1);return A._reactRootContainer=s,A[Ht]=s.current,Oo(A.nodeType===8?A.parentNode:A),Sr(function(){ks(e,s,t,r)}),s}function Ss(A,e,t,r,n){var o=t._reactRootContainer;if(o){var i=o;if(typeof n=="function"){var a=n;n=function(){var s=Ya(i);a.call(s)}}ks(e,i,A,n)}else i=gm(t,e,A,n,r);return Ya(i)}dh=function(A){switch(A.tag){case 3:var e=A.stateNode;if(e.current.memoizedState.isDehydrated){var t=to(e.pendingLanes);t!==0&&(rd(e,t|1),Be(e,kA()),!(tA&6)&&(Qn=kA()+500,cr()))}break;case 13:Sr(function(){var r=kt(A,1);if(r!==null){var n=ae();qe(r,A,1,n)}}),Md(A,1)}};nd=function(A){if(A.tag===13){var e=kt(A,134217728);if(e!==null){var t=ae();qe(e,A,134217728,t)}Md(A,134217728)}};fh=function(A){if(A.tag===13){var e=er(A),t=kt(A,e);if(t!==null){var r=ae();qe(t,A,e,r)}Md(A,e)}};gh=function(){return sA};ph=function(A,e){var t=sA;try{return sA=A,e()}finally{sA=t}};bc=function(A,e,t){switch(e){case"input":if(Cc(A,t),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==A&&r.form===A.form){var n=ys(r);if(!n)throw Error(I(90));zp(r),Cc(r,n)}}}break;case"textarea":$p(A,t);break;case"select":e=t.value,e!=null&&ln(A,!!t.multiple,e,!1)}};eh=Id;th=Sr;var pm={usingClientEntryPoint:!1,Events:[ri,Zr,ys,qp,Ah,Id]},$n={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hm={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=oh(A),A===null?null:A.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{ws=xi.inject(hm),dt=xi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;be.createPortal=function(A,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(I(200));return dm(A,e,null,t)};be.createRoot=function(A,e){if(!Nd(A))throw Error(I(299));var t=!1,r="",n=T2;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Kd(A,1,!1,null,null,t,!1,r,n),A[Ht]=e.current,Oo(A.nodeType===8?A.parentNode:A),new Td(e)};be.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(I(188)):(A=Object.keys(A).join(","),Error(I(268,A)));return A=oh(e),A=A===null?null:A.stateNode,A};be.flushSync=function(A){return Sr(A)};be.hydrate=function(A,e,t){if(!Ls(e))throw Error(I(200));return Ss(null,A,e,!0,t)};be.hydrateRoot=function(A,e,t){if(!Nd(A))throw Error(I(405));var r=t!=null&&t.hydratedSources||null,n=!1,o="",i=T2;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=M2(e,null,A,1,t??null,n,!1,o,i),A[Ht]=e.current,Oo(A),r)for(A=0;A<r.length;A++)t=r[A],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);return new Is(e)};be.render=function(A,e,t){if(!Ls(e))throw Error(I(200));return Ss(null,A,e,!1,t)};be.unmountComponentAtNode=function(A){if(!Ls(A))throw Error(I(40));return A._reactRootContainer?(Sr(function(){Ss(null,null,A,!1,function(){A._reactRootContainer=null,A[Ht]=null})}),!0):!1};be.unstable_batchedUpdates=Id;be.unstable_renderSubtreeIntoContainer=function(A,e,t,r){if(!Ls(t))throw Error(I(200));if(A==null||A._reactInternals===void 0)throw Error(I(38));return Ss(A,e,t,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function N2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N2)}catch(A){console.error(A)}}N2(),Np.exports=be;var Bm=Np.exports,v1=Bm;gc.createRoot=v1.createRoot,gc.hydrateRoot=v1.hydrateRoot;var y=function(){return y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},y.apply(this,arguments)};function _d(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function yA(A,e){var t=typeof Symbol=="function"&&A[Symbol.iterator];if(!t)return A;var r=t.call(A),n,o=[],i;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)o.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return o}function Za(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}function _(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}function qa(A){"@babel/helpers - typeof";return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qa(A)}var vm=/^\s+/,wm=/\s+$/;function P(A,e){if(A=A||"",e=e||{},A instanceof P)return A;if(!(this instanceof P))return new P(A,e);var t=mm(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}P.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,o,i,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*a},setAlpha:function(e){return this._a=_2(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=m1(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=m1(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=w1(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=w1(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return C1(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Fm(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(mA(this._r,255)*100)+"%",g:Math.round(mA(this._g,255)*100)+"%",b:Math.round(mA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(mA(this._r,255)*100)+"%, "+Math.round(mA(this._g,255)*100)+"%, "+Math.round(mA(this._b,255)*100)+"%)":"rgba("+Math.round(mA(this._r,255)*100)+"%, "+Math.round(mA(this._g,255)*100)+"%, "+Math.round(mA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Mm[C1(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Q1(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=P(e);r="#"+Q1(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return P(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(bm,arguments)},brighten:function(){return this._applyModification(Hm,arguments)},darken:function(){return this._applyModification(km,arguments)},desaturate:function(){return this._applyModification(Um,arguments)},saturate:function(){return this._applyModification(xm,arguments)},greyscale:function(){return this._applyModification(Em,arguments)},spin:function(){return this._applyModification(Im,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Dm,arguments)},complement:function(){return this._applyCombination(Lm,arguments)},monochromatic:function(){return this._applyCombination(Km,arguments)},splitcomplement:function(){return this._applyCombination(Sm,arguments)},triad:function(){return this._applyCombination(y1,[3])},tetrad:function(){return this._applyCombination(y1,[4])}};P.fromRatio=function(A,e){if(qa(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=no(A[r]));A=t}return P(A,e)};function mm(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,o=null,i=!1,a=!1;return typeof A=="string"&&(A=Om(A)),qa(A)=="object"&&(Bt(A.r)&&Bt(A.g)&&Bt(A.b)?(e=Cm(A.r,A.g,A.b),i=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Bt(A.h)&&Bt(A.s)&&Bt(A.v)?(r=no(A.s),n=no(A.v),e=ym(A.h,r,n),i=!0,a="hsv"):Bt(A.h)&&Bt(A.s)&&Bt(A.l)&&(r=no(A.s),o=no(A.l),e=Qm(A.h,r,o),i=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=_2(t),{ok:i,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Cm(A,e,t){return{r:mA(A,255)*255,g:mA(e,255)*255,b:mA(t,255)*255}}function w1(A,e,t){A=mA(A,255),e=mA(e,255),t=mA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=(r+n)/2;if(r==n)o=i=0;else{var s=r-n;switch(i=a>.5?s/(2-r-n):s/(r+n),r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,l:a}}function Qm(A,e,t){var r,n,o;A=mA(A,360),e=mA(e,100),t=mA(t,100);function i(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=i(s,a,A+1/3),n=i(s,a,A),o=i(s,a,A-1/3)}return{r:r*255,g:n*255,b:o*255}}function m1(A,e,t){A=mA(A,255),e=mA(e,255),t=mA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=r,s=r-n;if(i=r===0?0:s/r,r==n)o=0;else{switch(r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,v:a}}function ym(A,e,t){A=mA(A,360)*6,e=mA(e,100),t=mA(t,100);var r=Math.floor(A),n=A-r,o=t*(1-e),i=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,i,o,o,a,t][s],c=[a,t,t,i,o,o][s],u=[o,o,a,t,t,i][s];return{r:l*255,g:c*255,b:u*255}}function C1(A,e,t,r){var n=[Ye(Math.round(A).toString(16)),Ye(Math.round(e).toString(16)),Ye(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Fm(A,e,t,r,n){var o=[Ye(Math.round(A).toString(16)),Ye(Math.round(e).toString(16)),Ye(Math.round(t).toString(16)),Ye(O2(r))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Q1(A,e,t,r){var n=[Ye(O2(r)),Ye(Math.round(A).toString(16)),Ye(Math.round(e).toString(16)),Ye(Math.round(t).toString(16))];return n.join("")}P.equals=function(A,e){return!A||!e?!1:P(A).toRgbString()==P(e).toRgbString()};P.random=function(){return P.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Um(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s-=e/100,t.s=Ds(t.s),P(t)}function xm(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s+=e/100,t.s=Ds(t.s),P(t)}function Em(A){return P(A).desaturate(100)}function bm(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l+=e/100,t.l=Ds(t.l),P(t)}function Hm(A,e){e=e===0?0:e||10;var t=P(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),P(t)}function km(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l-=e/100,t.l=Ds(t.l),P(t)}function Im(A,e){var t=P(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,P(t)}function Lm(A){var e=P(A).toHsl();return e.h=(e.h+180)%360,P(e)}function y1(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=P(A).toHsl(),r=[P(A)],n=360/e,o=1;o<e;o++)r.push(P({h:(t.h+o*n)%360,s:t.s,l:t.l}));return r}function Sm(A){var e=P(A).toHsl(),t=e.h;return[P(A),P({h:(t+72)%360,s:e.s,l:e.l}),P({h:(t+216)%360,s:e.s,l:e.l})]}function Dm(A,e,t){e=e||6,t=t||30;var r=P(A).toHsl(),n=360/t,o=[P(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,o.push(P(r));return o}function Km(A,e){e=e||6;for(var t=P(A).toHsv(),r=t.h,n=t.s,o=t.v,i=[],a=1/e;e--;)i.push(P({h:r,s:n,v:o})),o=(o+a)%1;return i}P.mix=function(A,e,t){t=t===0?0:t||50;var r=P(A).toRgb(),n=P(e).toRgb(),o=t/100,i={r:(n.r-r.r)*o+r.r,g:(n.g-r.g)*o+r.g,b:(n.b-r.b)*o+r.b,a:(n.a-r.a)*o+r.a};return P(i)};P.readability=function(A,e){var t=P(A),r=P(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};P.isReadable=function(A,e,t){var r=P.readability(A,e),n,o;switch(o=!1,n=Rm(t),n.level+n.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};P.mostReadable=function(A,e,t){var r=null,n=0,o,i,a,s;t=t||{},i=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)o=P.readability(A,e[l]),o>n&&(n=o,r=P(e[l]));return P.isReadable(A,r,{level:a,size:s})||!i?r:(t.includeFallbackColors=!1,P.mostReadable(A,["#fff","#000"],t))};var au=P.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Mm=P.hexNames=Tm(au);function Tm(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function _2(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function mA(A,e){Nm(A)&&(A="100%");var t=_m(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function Ds(A){return Math.min(1,Math.max(0,A))}function ve(A){return parseInt(A,16)}function Nm(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function _m(A){return typeof A=="string"&&A.indexOf("%")!=-1}function Ye(A){return A.length==1?"0"+A:""+A}function no(A){return A<=1&&(A=A*100+"%"),A}function O2(A){return Math.round(parseFloat(A)*255).toString(16)}function F1(A){return ve(A)/255}var ze=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Bt(A){return!!ze.CSS_UNIT.exec(A)}function Om(A){A=A.replace(vm,"").replace(wm,"").toLowerCase();var e=!1;if(au[A])A=au[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=ze.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=ze.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=ze.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=ze.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=ze.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=ze.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=ze.hex8.exec(A))?{r:ve(t[1]),g:ve(t[2]),b:ve(t[3]),a:F1(t[4]),format:e?"name":"hex8"}:(t=ze.hex6.exec(A))?{r:ve(t[1]),g:ve(t[2]),b:ve(t[3]),format:e?"name":"hex"}:(t=ze.hex4.exec(A))?{r:ve(t[1]+""+t[1]),g:ve(t[2]+""+t[2]),b:ve(t[3]+""+t[3]),a:F1(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=ze.hex3.exec(A))?{r:ve(t[1]+""+t[1]),g:ve(t[2]+""+t[2]),b:ve(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Rm(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}var me={},Ks={exports:{}},Xn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function Vm(){if(U1)return Xn;U1=1;var A=Oe,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(a,s,l){var c,u={},d=null,p=null;l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(p=s.ref);for(c in s)r.call(s,c)&&!o.hasOwnProperty(c)&&(u[c]=s[c]);if(a&&a.defaultProps)for(c in s=a.defaultProps,s)u[c]===void 0&&(u[c]=s[c]);return{$$typeof:e,type:a,key:d,ref:p,props:u,_owner:n.current}}return Xn.Fragment=t,Xn.jsx=i,Xn.jsxs=i,Xn}(function(A){A.exports=Vm()})(Ks);const yn=Ks.exports.Fragment,B=Ks.exports.jsx,N=Ks.exports.jsxs;var pA="-ms-",Fo="-moz-",nA="-webkit-",R2="comm",Ms="rule",Od="decl",Pm="@import",V2="@keyframes",Gm="@layer",P2=Math.abs,Rd=String.fromCharCode,su=Object.assign;function jm(A,e){return GA(A,0)^45?(((e<<2^GA(A,0))<<2^GA(A,1))<<2^GA(A,2))<<2^GA(A,3):0}function G2(A){return A.trim()}function Ct(A,e){return(A=e.exec(A))?A[0]:A}function Y(A,e,t){return A.replace(e,t)}function fa(A,e,t){return A.indexOf(e,t)}function GA(A,e){return A.charCodeAt(e)|0}function Fn(A,e,t){return A.slice(e,t)}function lt(A){return A.length}function j2(A){return A.length}function oo(A,e){return e.push(A),A}function zm(A,e){return A.map(e).join("")}function x1(A,e){return A.filter(function(t){return!Ct(t,e)})}var Ts=1,Un=1,z2=0,Pe=0,LA=0,Nn="";function Ns(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:Ts,column:Un,length:i,return:"",siblings:a}}function Kt(A,e){return su(Ns("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Tr(A){for(;A.root;)A=Kt(A.root,{children:[A]});oo(A,A.siblings)}function Wm(){return LA}function $m(){return LA=Pe>0?GA(Nn,--Pe):0,Un--,LA===10&&(Un=1,Ts--),LA}function At(){return LA=Pe<z2?GA(Nn,Pe++):0,Un++,LA===10&&(Un=1,Ts++),LA}function yr(){return GA(Nn,Pe)}function ga(){return Pe}function _s(A,e){return Fn(Nn,A,e)}function lu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xm(A){return Ts=Un=1,z2=lt(Nn=A),Pe=0,[]}function Jm(A){return Nn="",A}function Ml(A){return G2(_s(Pe-1,cu(A===91?A+2:A===40?A+1:A)))}function Ym(A){for(;(LA=yr())&&LA<33;)At();return lu(A)>2||lu(LA)>3?"":" "}function Zm(A,e){for(;--e&&At()&&!(LA<48||LA>102||LA>57&&LA<65||LA>70&&LA<97););return _s(A,ga()+(e<6&&yr()==32&&At()==32))}function cu(A){for(;At();)switch(LA){case A:return Pe;case 34:case 39:A!==34&&A!==39&&cu(LA);break;case 40:A===41&&cu(A);break;case 92:At();break}return Pe}function qm(A,e){for(;At()&&A+LA!==57&&!(A+LA===84&&yr()===47););return"/*"+_s(e,Pe-1)+"*"+Rd(A===47?A:At())}function AC(A){for(;!lu(yr());)At();return _s(A,Pe)}function eC(A){return Jm(pa("",null,null,null,[""],A=Xm(A),0,[0],A))}function pa(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,d=0,p=0,v=0,w=1,x=1,g=1,f=0,h="",C=n,F=o,m=r,Q=h;x;)switch(v=f,f=At()){case 40:if(v!=108&&GA(Q,u-1)==58){fa(Q+=Y(Ml(f),"&","&\f"),"&\f",P2(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=Ml(f);break;case 9:case 10:case 13:case 32:Q+=Ym(v);break;case 92:Q+=Zm(ga()-1,7);continue;case 47:switch(yr()){case 42:case 47:oo(tC(qm(At(),ga()),e,t,s),s);break;default:Q+="/"}break;case 123*w:a[l++]=lt(Q)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+c:g==-1&&(Q=Y(Q,/\f/g,"")),p>0&&lt(Q)-u&&oo(p>32?b1(Q+";",r,t,u-1,s):b1(Y(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(oo(m=E1(Q,e,t,l,c,n,a,h,C=[],F=[],u,o),o),f===123)if(c===0)pa(Q,e,m,m,C,o,u,a,F);else switch(d===99&&GA(Q,3)===110?100:d){case 100:case 108:case 109:case 115:pa(A,m,m,r&&oo(E1(A,m,m,0,0,n,a,h,n,C=[],u,F),F),n,F,u,a,r?C:F);break;default:pa(Q,m,m,m,[""],F,0,a,F)}}l=c=p=0,w=g=1,h=Q="",u=i;break;case 58:u=1+lt(Q),p=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&$m()==125)continue}switch(Q+=Rd(f),f*w){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(lt(Q)-1)*g,g=1;break;case 64:yr()===45&&(Q+=Ml(At())),d=yr(),c=u=lt(h=Q+=AC(ga())),f++;break;case 45:v===45&&lt(Q)==2&&(w=0)}}return o}function E1(A,e,t,r,n,o,i,a,s,l,c,u){for(var d=n-1,p=n===0?o:[""],v=j2(p),w=0,x=0,g=0;w<r;++w)for(var f=0,h=Fn(A,d+1,d=P2(x=i[w])),C=A;f<v;++f)(C=G2(x>0?p[f]+" "+h:Y(h,/&\f/g,p[f])))&&(s[g++]=C);return Ns(A,e,t,n===0?Ms:a,s,l,c,u)}function tC(A,e,t,r){return Ns(A,e,t,R2,Rd(Wm()),Fn(A,2,-2),0,r)}function b1(A,e,t,r,n){return Ns(A,e,t,Od,Fn(A,0,r),Fn(A,r+1,-1),r,n)}function W2(A,e,t){switch(jm(A,e)){case 5103:return nA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return nA+A+A;case 4789:return Fo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return nA+A+Fo+A+pA+A+A;case 5936:switch(GA(A,e+11)){case 114:return nA+A+pA+Y(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return nA+A+pA+Y(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return nA+A+pA+Y(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return nA+A+pA+A+A;case 6165:return nA+A+pA+"flex-"+A+A;case 5187:return nA+A+Y(A,/(\w+).+(:[^]+)/,nA+"box-$1$2"+pA+"flex-$1$2")+A;case 5443:return nA+A+pA+"flex-item-"+Y(A,/flex-|-self/g,"")+(Ct(A,/flex-|baseline/)?"":pA+"grid-row-"+Y(A,/flex-|-self/g,""))+A;case 4675:return nA+A+pA+"flex-line-pack"+Y(A,/align-content|flex-|-self/g,"")+A;case 5548:return nA+A+pA+Y(A,"shrink","negative")+A;case 5292:return nA+A+pA+Y(A,"basis","preferred-size")+A;case 6060:return nA+"box-"+Y(A,"-grow","")+nA+A+pA+Y(A,"grow","positive")+A;case 4554:return nA+Y(A,/([^-])(transform)/g,"$1"+nA+"$2")+A;case 6187:return Y(Y(Y(A,/(zoom-|grab)/,nA+"$1"),/(image-set)/,nA+"$1"),A,"")+A;case 5495:case 3959:return Y(A,/(image-set\([^]*)/,nA+"$1$`$1");case 4968:return Y(Y(A,/(.+:)(flex-)?(.*)/,nA+"box-pack:$3"+pA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+nA+A+A;case 4200:if(!Ct(A,/flex-|baseline/))return pA+"grid-column-align"+Fn(A,e)+A;break;case 2592:case 3360:return pA+Y(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,Ct(r.props,/grid-\w+-end/)})?~fa(A+(t=t[e].value),"span",0)?A:pA+Y(A,"-start","")+A+pA+"grid-row-span:"+(~fa(t,"span",0)?Ct(t,/\d+/):+Ct(t,/\d+/)-+Ct(A,/\d+/))+";":pA+Y(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return Ct(r.props,/grid-\w+-start/)})?A:pA+Y(Y(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return Y(A,/(.+)-inline(.+)/,nA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(A)-1-e>6)switch(GA(A,e+1)){case 109:if(GA(A,e+4)!==45)break;case 102:return Y(A,/(.+:)(.+)-([^]+)/,"$1"+nA+"$2-$3$1"+Fo+(GA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~fa(A,"stretch",0)?W2(Y(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return Y(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return pA+n+":"+o+l+(i?pA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if(GA(A,e+6)===121)return Y(A,":",":"+nA)+A;break;case 6444:switch(GA(A,GA(A,14)===45?18:11)){case 120:return Y(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nA+(GA(A,14)===45?"inline-":"")+"box$3$1"+nA+"$2$3$1"+pA+"$2box$3")+A;case 100:return Y(A,":",":"+pA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(A,"scroll-","scroll-snap-")+A}return A}function As(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function rC(A,e,t,r){switch(A.type){case Gm:if(A.children.length)break;case Pm:case Od:return A.return=A.return||A.value;case R2:return"";case V2:return A.return=A.value+"{"+As(A.children,r)+"}";case Ms:if(!lt(A.value=A.props.join(",")))return""}return lt(t=As(A.children,r))?A.return=A.value+"{"+t+"}":""}function nC(A){var e=j2(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function oC(A){return function(e){e.root||(e=e.return)&&A(e)}}function iC(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case Od:A.return=W2(A.value,A.length,t);return;case V2:return As([Kt(A,{value:Y(A.value,"@","@"+nA)})],r);case Ms:if(A.length)return zm(t=A.props,function(n){switch(Ct(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tr(Kt(A,{props:[Y(n,/:(read-\w+)/,":"+Fo+"$1")]})),Tr(Kt(A,{props:[n]})),su(A,{props:x1(t,r)});break;case"::placeholder":Tr(Kt(A,{props:[Y(n,/:(plac\w+)/,":"+nA+"input-$1")]})),Tr(Kt(A,{props:[Y(n,/:(plac\w+)/,":"+Fo+"$1")]})),Tr(Kt(A,{props:[Y(n,/:(plac\w+)/,pA+"input-$1")]})),Tr(Kt(A,{props:[n]})),su(A,{props:x1(t,r)});break}return""})}}var aC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn=typeof process<"u"&&me!==void 0&&(me.REACT_APP_SC_ATTR||me.SC_ATTR)||"data-styled",$2="active",X2="data-styled-version",Os="6.1.12",Vd=`/*!sc*/
`,es=typeof window<"u"&&"HTMLElement"in window,sC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&me!==void 0&&me.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&me.REACT_APP_SC_DISABLE_SPEEDY!==""?me.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&me.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&me!==void 0&&me.SC_DISABLE_SPEEDY!==void 0&&me.SC_DISABLE_SPEEDY!==""&&me.SC_DISABLE_SPEEDY!=="false"&&me.SC_DISABLE_SPEEDY),Rs=Object.freeze([]),En=Object.freeze({});function lC(A,e,t){return t===void 0&&(t=En),A.theme!==t.theme&&A.theme||e||t.theme}var J2=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uC=/(^-|-$)/g;function H1(A){return A.replace(cC,"-").replace(uC,"")}var dC=/(a)(d)/gi,Ei=52,k1=function(A){return String.fromCharCode(A+(A>25?39:97))};function uu(A){var e,t="";for(e=Math.abs(A);e>Ei;e=e/Ei|0)t=k1(e%Ei)+t;return(k1(e%Ei)+t).replace(dC,"$1-$2")}var Tl,Y2=5381,on=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},Z2=function(A){return on(Y2,A)};function fC(A){return uu(Z2(A)>>>0)}function gC(A){return A.displayName||A.name||"Component"}function Nl(A){return typeof A=="string"&&!0}var q2=typeof Symbol=="function"&&Symbol.for,AB=q2?Symbol.for("react.memo"):60115,pC=q2?Symbol.for("react.forward_ref"):60112,hC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},BC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},eB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vC=((Tl={})[pC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tl[AB]=eB,Tl);function I1(A){return("type"in(e=A)&&e.type.$$typeof)===AB?eB:"$$typeof"in A?vC[A.$$typeof]:hC;var e}var wC=Object.defineProperty,mC=Object.getOwnPropertyNames,L1=Object.getOwnPropertySymbols,CC=Object.getOwnPropertyDescriptor,QC=Object.getPrototypeOf,S1=Object.prototype;function tB(A,e,t){if(typeof e!="string"){if(S1){var r=QC(e);r&&r!==S1&&tB(A,r,t)}var n=mC(e);L1&&(n=n.concat(L1(e)));for(var o=I1(A),i=I1(e),a=0;a<n.length;++a){var s=n[a];if(!(s in BC||t&&t[s]||i&&s in i||o&&s in o)){var l=CC(e,s);try{wC(A,s,l)}catch{}}}}return A}function bn(A){return typeof A=="function"}function Pd(A){return typeof A=="object"&&"styledComponentId"in A}function vr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function D1(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=A[r];return t}function Xo(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function du(A,e,t){if(t===void 0&&(t=!1),!t&&!Xo(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=du(A[r],e[r]);else if(Xo(e))for(var r in e)A[r]=du(A[r],e[r]);return A}function Gd(A,e){Object.defineProperty(A,"toString",{value:e})}function oi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yC=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw oi(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Vd);return t},A}(),ha=new Map,ts=new Map,Ba=1,bi=function(A){if(ha.has(A))return ha.get(A);for(;ts.has(Ba);)Ba++;var e=Ba++;return ha.set(A,e),ts.set(e,A),e},FC=function(A,e){Ba=e+1,ha.set(A,e),ts.set(e,A)},UC="style[".concat(xn,"][").concat(X2,'="').concat(Os,'"]'),xC=new RegExp("^".concat(xn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),EC=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},bC=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Vd),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(xC);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(FC(c,l),EC(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},K1=function(A){for(var e=document.querySelectorAll(UC),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(xn)!==$2&&(bC(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function HC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(xn,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(xn,$2),r.setAttribute(X2,Os);var i=HC();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},kC=function(){function A(e){this.element=rB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw oi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),IC=function(){function A(e){this.element=rB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),LC=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),M1=es,SC={isServer:!es,useCSSOMInjection:!sC},nB=function(){function A(e,t,r){e===void 0&&(e=En),t===void 0&&(t={});var n=this;this.options=y(y({},SC),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&es&&M1&&(M1=!1,K1(this)),Gd(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var d=function(g){return ts.get(g)}(u);if(d===void 0)return"continue";var p=o.names.get(d),v=i.getGroup(u);if(p===void 0||!p.size||v.length===0)return"continue";var w="".concat(xn,".g").concat(u,'[id="').concat(d,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(w,'{content:"').concat(x,'"}').concat(Vd)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return bi(e)},A.prototype.rehydrate=function(){!this.server&&es&&K1(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(y(y({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new LC(n):r?new kC(n):new IC(n)}(this.options),new yC(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(bi(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(bi(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(bi(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),DC=/&/g,KC=/^\s*\/\/.*$/gm;function oB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=oB(t.children,e)),t})}function MC(A){var e,t,r,n=En,o=n.options,i=o===void 0?En:o,a=n.plugins,s=a===void 0?Rs:a,l=function(d,p,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Ms&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(DC,t).replace(r,l))}),i.prefix&&c.push(iC),c.push(rC);var u=function(d,p,v,w){p===void 0&&(p=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=d.replace(KC,""),g=eC(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);i.namespace&&(g=oB(g,i.namespace));var f=[];return As(g,nC(c.concat(oC(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,p){return p.name||oi(15),on(d,p.name)},Y2).toString():"",u}var TC=new nB,fu=MC(),iB=Oe.createContext({shouldForwardProp:void 0,styleSheet:TC,stylis:fu});iB.Consumer;Oe.createContext(void 0);function T1(){return L.useContext(iB)}var NC=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=fu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Gd(this,function(){throw oi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=fu),this.name+e.hash},A}(),_C=function(A){return A>="A"&&A<="Z"};function N1(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;_C(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var aB=function(A){return A==null||A===!1||A===""},sB=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!aB(o)&&(Array.isArray(o)&&o.isCss||bn(o)?r.push("".concat(N1(n),":"),o,";"):Xo(o)?r.push.apply(r,Za(Za(["".concat(n," {")],sB(o),!1),["}"],!1)):r.push("".concat(N1(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in aC||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Fr(A,e,t,r){if(aB(A))return[];if(Pd(A))return[".".concat(A.styledComponentId)];if(bn(A)){if(!bn(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return Fr(n,e,t,r)}var o;return A instanceof NC?t?(A.inject(t,r),[A.getName(r)]):[A]:Xo(A)?sB(A):Array.isArray(A)?Array.prototype.concat.apply(Rs,A.map(function(i){return Fr(i,e,t,r)})):[A.toString()]}function OC(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(bn(t)&&!Pd(t))return!1}return!0}var RC=Z2(Os),VC=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&OC(e),this.componentId=t,this.baseHash=on(RC,t),this.baseStyle=r,nB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=vr(n,this.staticRulesId);else{var o=D1(Fr(this.rules,e,t,r)),i=uu(on(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=vr(n,i),this.staticRulesId=i}else{for(var s=on(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=D1(Fr(u,e,t,r));s=on(s,d+c),l+=d}}if(l){var p=uu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=vr(n,p)}}return n},A}(),lB=Oe.createContext(void 0);lB.Consumer;var _l={};function PC(A,e,t){var r=Pd(A),n=A,o=!Nl(A),i=e.attrs,a=i===void 0?Rs:i,s=e.componentId,l=s===void 0?function(C,F){var m=typeof C!="string"?"sc":H1(C);_l[m]=(_l[m]||0)+1;var Q="".concat(m,"-").concat(fC(Os+m+_l[m]));return F?"".concat(F,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Nl(C)?"styled.".concat(C):"Styled(".concat(gC(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(H1(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,F){return w(C,F)&&x(C,F)}}else v=w}var g=new VC(t,d,r?n.componentStyle:void 0);function f(C,F){return function(m,Q,E){var H=m.attrs,D=m.componentStyle,q=m.defaultProps,X=m.foldedComponentIds,z=m.styledComponentId,S=m.target,G=Oe.useContext(lB),T=T1(),J=m.shouldForwardProp||T.shouldForwardProp,b=lC(Q,G,q)||En,k=function(rA,aA,fA){for(var OA,vA=y(y({},aA),{className:void 0,theme:fA}),ot=0;ot<rA.length;ot+=1){var ke=bn(OA=rA[ot])?OA(vA):OA;for(var IA in ke)vA[IA]=IA==="className"?vr(vA[IA],ke[IA]):IA==="style"?y(y({},vA[IA]),ke[IA]):ke[IA]}return aA.className&&(vA.className=vr(vA.className,aA.className)),vA}(H,Q,b),R=k.as||S,j={};for(var W in k)k[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&k.theme===b||(W==="forwardedAs"?j.as=k.forwardedAs:J&&!J(W,R)||(j[W]=k[W]));var QA=function(rA,aA){var fA=T1(),OA=rA.generateAndInjectStyles(aA,fA.styleSheet,fA.stylis);return OA}(D,k),cA=vr(X,z);return QA&&(cA+=" "+QA),k.className&&(cA+=" "+k.className),j[Nl(R)&&!J2.has(R)?"class":"className"]=cA,j.ref=E,L.createElement(R,j)}(h,C,F)}f.displayName=u;var h=Oe.forwardRef(f);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=v,h.foldedComponentIds=r?vr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(F){for(var m=[],Q=1;Q<arguments.length;Q++)m[Q-1]=arguments[Q];for(var E=0,H=m;E<H.length;E++)du(F,H[E],!0);return F}({},n.defaultProps,C):C}}),Gd(h,function(){return".".concat(h.styledComponentId)}),o&&tB(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function _1(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var O1=function(A){return Object.assign(A,{isCss:!0})};function GC(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(bn(A)||Xo(A))return O1(Fr(_1(Rs,Za([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?Fr(r):O1(Fr(_1(r,e)))}function gu(A,e,t){if(t===void 0&&(t=En),!e)throw oi(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,GC.apply(void 0,Za([n],o,!1)))};return r.attrs=function(n){return gu(A,e,y(y({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return gu(A,e,y(y({},t),n))},r}var cB=function(A){return gu(PC,A)},M=cB;J2.forEach(function(A){M[A]=cB(A)});var jC=L.forwardRef(function(A,e){var t=A.placement,r=t===void 0?"rt":t,n=A.gap,o=n===void 0?8:n,i=A.offsetData,a=A.hover,s=a===void 0?!1:a,l=A.hoverShow,c=l===void 0?!1:l,u=A.innerStyle,d=A.innerClassName,p=d===void 0?"":d,v=A.content,w=A.style,x=A.className,g=x===void 0?"":x,f=A.children,h=A.zIndex,C=h===void 0?0:h,F=L.useMemo(function(){return!s&&!c},[s,c]),m=yA(L.useState(s||!c),2),Q=m[0],E=m[1];return N(zC,y({ref:e,className:g,style:w,onMouseOver:function(){F||E(!s)},onMouseLeave:function(){F||E(!!s)}},{children:[f,v&&B(WC,y({className:"land-sffixContainer-inner ".concat(p),style:y({left:i!=null&&i.left||r==="lt"||r==="lb"?o:"auto",right:i!=null&&i.right||r==="rt"||r==="rb"?o:"auto",top:i!=null&&i.top||r==="lt"||r==="rt"?o:"auto",bottom:i!=null&&i.bottom||r==="lb"||r==="rb"?o:"auto",opacity:F||Q?1:0},u),onClick:function(H){return H.stopPropagation()},hoverShow:c,zIndex:C},{children:v}))]}))}),zC=M.div(R1||(R1=_([`
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
`]))),WC=M.div(V1||(V1=_([`
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
`])),function(A){return A.hoverShow?0:1},function(A){var e;return(e=A.zIndex)!==null&&e!==void 0?e:0}),R1,V1;M.nav(P1||(P1=_([`
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
`])));var P1,$C=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"IconArrowLine ".concat(s)},{children:[B("path",{d:"M24 42V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 30L24 42L12 30",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},XC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M31 17L24 24L17 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M31 26L24 33L17 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},JC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})}))},YC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{d:"M36 19L24 31L12 19H36Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s,strokeLinejoin:"round"})}))},ZC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24.0083 33.8995V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 22L24 34L12 22",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 42H12",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},qC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 9L42 9",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 19L42 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 26L24 40L42 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},A3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M44 20H28V4",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M4 28H20V44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},e3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},t3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:s},{children:[B("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},r3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 6H42V15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 33V42H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M15 42H6V33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 15V6H15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},n3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 7V16H41",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 7V16H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 41V32H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 41V32H40.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},o3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38 7L44 13L38 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},i3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?3:o,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"cursor-pointer ".concat(l),onClick:c},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},a3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M23.9917 6H6V42H24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 33L42 24L33 15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 23.9917H42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},s3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 8V17H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},l3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 9V17H14",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},c3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M19 6V42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7 17.8994L19 5.89941",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006V6.10059",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006L41 30.1006",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},u3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18 28L10 33L4 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},d3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},f3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},g3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M42 8V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 24L6 40",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},p3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M16 24L22 30L34 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},h3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:t})}))},B3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},v3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},w3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:t})}))},m3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},C3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.style,i=A.className;return B("svg",y({width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:n,strokeWidth:"2"})}))},Q3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:t})}))},y3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return N("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},F3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},U3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},x3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return N("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},E3=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},b3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return B("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},H3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return N("svg",y({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},k3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFile":a,l=A.style;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:n,strokeWidth:i,strokeLinejoin:"round"}),B("path",{d:"M43 22H5",stroke:n,strokeWidth:"4",strokeLinejoin:"round"})]}))},I3=function(A){var e=A.size,t=e===void 0?16:e,r=A.fill,n=r===void 0?"currentcolor":r,o=A.className,i=o===void 0?"IconMore":o,a=A.style;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",className:i,style:a},{children:[B("circle",{cx:"12",cy:"24",r:"4",fill:n}),B("circle",{cx:"24",cy:"24",r:"4",fill:n}),B("circle",{cx:"36",cy:"24",r:"4",fill:n})]}))},L3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFileLine":a,l=A.style;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M7.94971 11.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 23.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 35.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},S3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=A.className,a=i===void 0?"IconAdd":i,s=A.style;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",className:a,style:s},{children:[B("path",{d:"M24.0605 10L24.0239 38",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M10 24L38 24",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},D3=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o,a=A.className,s=a===void 0?"IconClear":a,l=A.style,c=A.onClick;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l,onClick:c},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},K3=function(A){var e=A.size,t=e===void 0?20:e,r=A.fill,n=r===void 0?"currentcolor":r;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:n}),B("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:n}),B("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:n}),B("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:n}),B("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:n}),B("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:n}),B("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:n}),B("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:n}),B("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:n})]}))},M3=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?3:o,a=A.className,s=a===void 0?"":a;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",fill:"none",className:s,xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 15L24 6L15 15",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 32V6",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},T3=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o;return N("svg",y({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},N3=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?20:n,i=A.strokeWidth,a=i===void 0?2:i;return N("svg",y({width:o,height:o,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})]}))},_3=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r;return B("svg",y({width:n,height:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{children:B("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}))},O3=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?16:n,i=A.strokeWidth,a=i===void 0?2:i,s=A.className,l=s===void 0?"IconCopy":s;return N("svg",y({width:o,height:o,viewBox:"0 0 48 48",fill:"none",className:l},{children:[B("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-linecap":"round","stroke-linejoin":"round"}),B("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-width":"2","stroke-linejoin":"round"})]}))},R3=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return N("svg",y({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:t,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M19 29V42H29V29H19Z",stroke:t,strokeWidth:i,strokeLinejoin:"round"})]}))},MA=function(A){var e=A.name,t=_d(A,["name"]);switch(e){case"arrow-line":return B($C,y({},t));case"arrow-double":return B(XC,y({},t));case"arrow":return B(JC,y({},t));case"arrow-triangle":return B(YC,y({},t));case"arrow-to":return B(ZC,y({},t));case"toggle":return B(qC,y({},t));case"collapse":return B(A3,y({},t));case"collection":return B(e3,y({},t));case"zoom-out":return B(r3,y({},t));case"zoom-in":return B(n3,y({},t));case"loop":return B(o3,y({},t));case"download":return B(i3,y({},t));case"out":return B(a3,y({},t));case"reload":return B(s3,y({},t));case"undo":return B(l3,y({},t));case"sort":return B(c3,y({},t));case"back":return B(u3,y({},t));case"ahead":return B(d3,y({},t));case"drag":return B(f3,y({},t));case"refresh":return B(g3,y({},t));case"check-stroke":return B(p3,y({},t));case"check-fill":return B(h3,y({},t));case"check":return B(B3,y({},t));case"error-stroke":return B(v3,y({},t));case"error-fill":return B(w3,y({},t));case"error":return B(m3,y({},t));case"info-stroke":return B(C3,y({},t));case"info-fill":return B(Q3,y({},t));case"info":return B(y3,y({},t));case"attention-stroke":return B(F3,y({},t));case"attention-fill":return B(U3,y({},t));case"attention":return B(x3,y({},t));case"question-stroke":return B(E3,y({},t));case"question-fill":return B(b3,y({},t));case"question":return B(H3,y({},t));case"more":return B(I3,y({},t));case"more-line":return B(L3,y({},t));case"file":return B(k3,y({},t));case"add":return B(S3,y({},t));case"clear":return B(D3,y({},t));case"upload":return B(M3,y({},t));case"application":return B(K3,y({},t));case"close":return B(T3,y({},t));case"close-circle":return B(N3,y({},t));case"color-picker":return B(_3,y({},t));case"copy":return B(O3,y({},t));case"home":return B(R3,y({},t));case"search":return B(t3,y({},t))}},G1;(function(A){A.BG="background",A.BORDER="border"})(G1||(G1={}));var gt=function(A){var e=A.content,t=A.theme,r=t===void 0?"light":t,n=A.placement,o=n===void 0?"top":n,i=A.style,a=A.className,s=a===void 0?"":a;return N(V3,y({className:"land-pop ".concat(r," ").concat(s),style:y({top:o==="bottom"?"100%":o==="top"?"auto":"50%",bottom:o==="top"?"100%":"",left:o==="right"?"100%":o==="left"?"auto":"50%",right:o==="left"?"100%":"",transform:"translate(".concat(o==="top"||o==="bottom"?"-50%":o==="left"?"-12px":"12px",", ").concat(o==="top"?"-12px":o==="bottom"?"12px":"-50%",")")},i)},{children:[e,B("div",{className:"land-pop-arrow",style:{left:o==="left"?"100%":o==="right"?"0":"50%",top:o==="top"?"100%":o==="bottom"?"0px":"50%",bottom:o==="bottom"?"100%":"",transform:"translate(".concat("-50%",", ").concat("-50%",") rotate(").concat(o==="top"?"45":o==="bottom"?"-135":o==="right"?"135":"-45","deg)")}})]}))},V3=M.div(j1||(j1=_([`
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
`]))),j1;M.div(z1||(z1=_([`
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
`])));var z1,va=function(A){var e=A.text,t=A.subText,r=A.icon,n=A.width,o=A.height,i=A.justify,a=i===void 0?"center":i,s=A.type,l=s===void 0?"border":s,c=A.status,u=c===void 0?"default":c,d=A.disabled,p=A.pop,v=A.PopProps,w=A.href,x=A.target,g=x===void 0?"_blank":x,f=A.onClick,h=A.children,C=A.style,F=A.className,m=F===void 0?"":F,Q=L.useMemo(function(){if(r){if(!e&&!t)return!0}else return!1},[r,e,t]),E=L.useMemo(function(){switch(u){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[u]);return B(yn,{children:w?N(P3,y({href:w,target:g,className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(d?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:o,justify:a,color:E,onClick:function(H){return f==null?void 0:f(H)}},{children:[h,r,!Q&&N("div",{children:[B("span",{children:e}),B("span",y({className:"subText"},{children:t}))]}),p&&B(gt,y({content:p},v))]})):N(uB,y({className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(d?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:o,justify:a,color:E,onClick:function(H){return f==null?void 0:f(H)}},{children:[h,r,!Q&&N("div",{children:[B("span",{children:e}),t&&B("span",y({className:"subText"},{children:t}))]}),p&&B(gt,y({content:p},v))]}))})},uB=M.div(W1||(W1=_([`
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
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"3)")},function(A){return"".concat(A.color,"3)")}),P3=M.a($1||($1=_([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),uB),W1,$1,G3=function(A){var e=A.checked,t=e===void 0?!1:e,r=A.text,n=r===void 0?"选项":r,o=A.pop,i=A.onChange;return N(j3,{children:[N(z3,y({onClick:function(){i==null||i()}},{children:[B(W3,y({className:"".concat(t?"checked":"")},{children:B(MA,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})})),n]})),o&&N($3,y({className:"hover-pop"},{children:[B(MA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(gt,{content:o,theme:"dark",style:{maxWidth:"200px"},placement:"right"})]}))]})},j3=M.div(X1||(X1=_([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`]))),z3=M.div(J1||(J1=_([`
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
`]))),W3=M.div(Y1||(Y1=_([`
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
`]))),$3=M.div(Z1||(Z1=_([`
  position: relative;
  height: 16px;
  line-height: 16px;
`],[`
  position: relative;
  height: 16px;
  line-height: 16px;
`]))),X1,J1,Y1,Z1;M.div(q1||(q1=_([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));M.div(A0||(A0=_([`
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
`])));M.div(e0||(e0=_([`
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
`])));M.div(t0||(t0=_([`
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
`])));M.div(r0||(r0=_([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var q1,A0,e0,t0,r0;M.div(n0||(n0=_([`
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
`])),function(A){return"-".concat(A.gap*2,"px")},function(A){return"-".concat(A.gap*2,"px")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"".concat(A.size,"px solid var(--color-primary-6)")},function(A){return"".concat(A.radius,"px")},function(A){return A.checked?1:0});var n0,Vs=function(A){var e=A.children,t=A.style,r=A.className,n=yA(L.useState(132),2),o=n[0],i=n[1],a=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return L.useEffect(function(){var l,c;a?l=a.getBoundingClientRect().height:l=0,s?c=s.getBoundingClientRect().height:c=0,i(l+c)}),B(X3,y({className:r,style:t,minHeight:o},{children:e}))},X3=M.main(o0||(o0=_([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.minHeight,"px)")}),o0,Uo=function(A){var e=A.type,t=e===void 0?"border":e,r=A.value,n=A.inputType,o=n===void 0?"text":n,i=A.placeholder,a=i===void 0?"请输入":i,s=A.prefix,l=A.useSearch,c=l===void 0?!1:l,u=A.width,d=A.maxLength,p=A.showClear,v=p===void 0?!0:p,w=A.disabled,x=A.onChange,g=A.onFocus,f=A.className,h=A.wrapStyle,C=_d(A,["type","value","inputType","placeholder","prefix","useSearch","width","maxLength","showClear","disabled","onChange","onFocus","className","wrapStyle"]),F=yA(L.useState(r),2),m=F[0],Q=F[1];return L.useEffect(function(){return Q(r)},[r]),N(J3,y({className:"land-input ".concat(w?"disabled":""," ").concat(t," ").concat(f),style:y({width:typeof u=="number"?"".concat(u,"px"):u},h)},{children:[c&&B(MA,{name:"search",stroke:"var(--color-text-5)"}),s&&B("p",y({className:"input-prefix"},{children:s})),B("input",y({placeholder:a,type:o,value:m,max:d,onClick:function(E){return E.stopPropagation()},onFocus:function(E){E.stopPropagation(),g==null||g(E)},onChange:function(E){E.stopPropagation(),x==null||x(E.target.value,E)}},C)),!!m&&v&&B(MA,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:function(){return Q("")}})]}))},J3=M.div(i0||(i0=_([`
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
`]))),i0,xe=function(A){var e=A.w,t=e===void 0?"100%":e,r=A.h,n=A.column,o=A.wrap,i=A.justify,a=i===void 0?"start":i,s=A.align,l=s===void 0?"start":s,c=A.gap,u=A.bothCenter,d=A.children,p=A.style,v=A.className,w=v===void 0?"":v;return B(Y3,y({className:w,style:p,width:t,height:r,direction:n?"column":"row",gap:typeof c=="number"?"".concat(c,"px"):c,wrap:o,justify:u?"center":a,align:u?"center":l},{children:d}))},Y3=M.div(a0||(a0=_([`
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
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height}),a0,dB=function(A){var e=A.show,t=e===void 0?!1:e,r=A.type,n=r===void 0?"default":r,o=A.text,i=o===void 0?"咕噜咕噜～":o,a=A.style,s=A.className,l=s===void 0?"":s,c=yA(L.useState(t),2),u=c[0],d=c[1];L.useEffect(function(){d(t)},[t]),L.useEffect(function(){if(u){var v=setTimeout(function(){d(!1)},1e3);return function(){return clearTimeout(v)}}},[u]);var p=L.useMemo(function(){switch(n){case"default":return{color:"white",background:"black",icon:null}}},[n]);return B(Z3,y({className:"StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ".concat(u?"show":"close"," ").concat(l),style:y({color:p==null?void 0:p.color,backgroundColor:p==null?void 0:p.background},a)},{children:i}))},Z3=M.div(s0||(s0=_([`
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
`]))),s0,q3=[["#e9e9e9","#d9d9d9","#c4c4c4","#9d9d9d"],["#7b7b7b","#5c5c5c","#333333","#262626"],["#efccbd","#d39f9d","#c4726d","#ac3526"],["#f6e3bd","#ebbd6f","#df964a","#c76336"],["#fbf2d4","#f7e7ab","#f4db86","#ebbc58"],["#dee9d7","#bdd992","#9dbe56","#758d3a"],["#e7f6fd","#9dd9f8","#81bde5","#4f84eb"],["#cdc7ee","#877cda","#4249ac","#313fa4"],["#f6e6fb","#d69aeb","#b253d3","#8a31c4"]],l0=function(A){var e,t=A.value,r=t===void 0?"#ffffff":t,n=A.size,o=n===void 0?48:n,i=A.useSelect,a=i===void 0?!0:i,s=A.showList,l=s===void 0?!1:s,c=A.defaultColorList,u=A.showOpacity,d=u===void 0?!0:u,p=A.input,v=p===void 0?!1:p,w=A.info,x=A.active,g=x===void 0?!1:x,f=A.onChange,h=A.onClick,C=A.onCardClick,F=A.children,m=A.className,Q=A.style,E=yA(L.useState(!1),2),H=E[0],D=E[1],q=yA(L.useState(r?r==="transparent"?"transparent":r:"#ffffff"),2),X=q[0],z=q[1],S=yA(L.useState(r.split("#")[1]),2),G=S[0],T=S[1],J=yA(L.useState(100),2),b=J[0],k=J[1],R=yA(L.useState(0),2),j=R[0],W=R[1],QA=yA(L.useState(0),2),cA=QA[0],rA=QA[1],aA=yA(L.useState(0),2),fA=aA[0],OA=aA[1],vA=L.useCallback(function($,RA){if(RA===void 0&&(RA=100),$!=="transparent"){var Ie=P($),ce=Ie.toRgb(),al=ce.r,sl=ce.g,ll=ce.b;return"rgba(".concat(al,", ").concat(sl,", ").concat(ll,", ").concat(RA/100,")")}return $},[]);L.useEffect(function(){if(r)if(r==="transparent")z("transparent");else{var $=P(r).toHsv(),RA=$.h,Ie=$.s,ce=$.v;W(RA),!ol&&rA(Ie),!ol&&OA(ce),z(r),T(r.split("#")[1])}},[r]);var ot=L.useMemo(function(){var $=P("hsv(".concat(j,",").concat(1,",").concat(1,")")).toHex();return"#".concat($)},[j]),ke=function($){if($==="transparent")z("transparent");else{var RA=P($).toHsv();W(RA.h),rA(RA.s),OA(RA.v)}},IA=yA(L.useState(!1),2),P4=IA[0],li=IA[1];L.useEffect(function(){var $=P("hsv(".concat(j,",").concat(cA,",").concat(fA,")")).toHex();!P4&&T($),z("#".concat($))},[j,cA,fA]);var ne=12,nf=yA(L.useState(!1),2),ol=nf[0],il=nf[1],of=function($){var RA=$.target.getBoundingClientRect(),Ie=$.clientX-RA.left,ce=$.clientY-RA.top;Ie>=ne/2&&Ie<=RA.width-ne?rA((Ie-ne/2)/(RA.width-ne)):Ie<ne/2?rA(0):rA(1),ce>=ne/2&&ce<=RA.height-ne?OA(1-(ce-ne/2)/(RA.height-ne)):ce<ne/2?OA(1):OA(0),f==null||f(vA(X,b))},af=yA(L.useState(""),2),sf=af[0],G4=af[1],lf=function($){navigator.clipboard.writeText($),G4("已复制～".concat($))};return N(AQ,y({className:"land-color-picker ".concat(m),style:y({cursor:a?"pointer":"default"},Q),color:r,size:typeof o=="string"?o:"".concat(o,"px")},{children:[B(dB,{show:!!sf,text:sf}),B("div",y({className:"land-color-trigger",onClick:function($){$.stopPropagation(),D(!H),document.addEventListener("click",function(){D(!1)}),C==null||C()}},{children:F||N(yn,{children:[B("div",y({className:"land-color-grid hover-pop ".concat(g?"active":""),style:{backgroundColor:X==="transparent"?"transparent":vA(X,b)}},{children:w&&B(gt,{content:w,theme:"dark"})})),typeof v!="boolean"?N("div",y({className:"land-color-label copy flex items-center justify-center",onClick:function(){return lf==null?void 0:lf(r)}},{children:[v,typeof v=="string"&&B(MA,{name:"copy",size:12,stroke:"var(--color-text-5)"})]})):v?B(Uo,{type:"border",prefix:"#",maxLength:6,value:G,w:o,onFocus:function(){return li(!0)},onChange:function($){T(String($)),ke("#".concat($))},onBlur:function(){f==null||f(vA("#".concat(G),b)),li(!1)},wrapStyle:{height:24,width:"calc(100% + 16px)",fontSize:"12px",padding:"0px 6px"}}):N("p",y({className:"land-color-label"},{children:["#",G]}))]})})),a&&N(eQ,y({className:"land-color-drop ".concat(H?"show":""),onClick:function($){return $.stopPropagation()}},{children:[B(tQ,y({className:"StyledColorGrid",svColor:ot,onMouseMove:function($){return ol&&of($)},onMouseDown:function($){$.preventDefault(),of($),il(!0)},onMouseUp:function(){il(!1),h==null||h(vA(X,b))},onMouseLeave:function(){return il(!1)}},{children:B("div",{className:"color-thumb",style:{left:ne/2+cA*(180-ne),top:ne/2+(86-ne)-fA*(86-ne)}})})),N(xe,y({column:!0,gap:8},{children:[B(c0,{type:"range",max:360,value:j,step:1,currentColor:X,onChange:function($){return W(Number($.target.value))}}),d&&B(rQ,{children:B(c0,{type:"range",step:1,max:100,value:b,className:"opacity",currentColor:ot,onChange:function($){k($.target.value),f==null||f(vA(X,b))}})})]})),N("div",y({className:"flex gap-8"},{children:[B(Uo,{type:"background",className:"flex-2",prefix:"#",maxLength:6,value:G,onFocus:function(){return li(!0)},onChange:function($){T(String($)),ke("#".concat($))},onBlur:function(){f==null||f(vA("#".concat(G),b)),li(!1)}}),d&&B(Uo,{type:"background",className:"flex-1",max:100,min:0,value:String(b),onChange:function($){k(Number($)),f==null||f(vA(X,Number(fA)))}})]})),l&&B(nQ,y({className:"land-colorPicker-default-list"},{children:(e=c||q3)===null||e===void 0?void 0:e.map(function($,RA){return B(xe,y({column:!0,gap:4,style:{width:"18px"}},{children:$==null?void 0:$.map(function(Ie){return B("div",{style:{backgroundColor:Ie},className:"land-colorPicker-default-item",onClick:function(){var ce=P(Ie).toHsv(),al=ce.h,sl=ce.s,ll=ce.v;rA(sl),W(al),OA(ll),f==null||f(vA(Ie,b))}},RA)})}))})}))]}))]}))},AQ=M.div(u0||(u0=_([`
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
`])),function(A){return A.size},function(A){return A.color}),eQ=M.div(d0||(d0=_([`
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
`]))),tQ=M.div(f0||(f0=_([`
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
`])),function(A){return A.svColor}),c0=M.input(g0||(g0=_([`
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
`])),function(A){return"linear-gradient(to right, rgba(0,0,0,0), ".concat(A.currentColor,")")},function(A){return A.currentColor}),rQ=M.div(p0||(p0=_([`
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
`]))),nQ=M.div(h0||(h0=_([`
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
`]))),u0,d0,f0,g0,p0,h0;M.a(B0||(B0=_([`
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
`])));var B0,fB=function(A){var e=A.direction,t=e===void 0?"row":e,r=A.size,n=r===void 0?1:r,o=A.lang,i=o===void 0?"100%":o,a=A.margin,s=a===void 0?0:a,l=A.type,c=l===void 0?"solid":l,u=A.color,d=u===void 0?"var(--color-border-2)":u,p=A.content,v=A.align,w=v===void 0?"center":v,x=A.style,g=A.className,f=g===void 0?"":g;return N(oQ,y({className:"land-divider ".concat(f),style:y({width:t==="row"?"".concat(i):"".concat(n,"px"),height:t==="column"?"".concat(i):"".concat(n,"px"),margin:t==="row"?"".concat(s,"px 0"):"0 ".concat(s,"px")},x),direction:t,gap:p?"8px":""},{children:[B("div",{style:{flex:w==="left"?"10%":w==="right"?"90%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}}),p&&N(yn,{children:[B("div",y({style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"}},{children:p})),B("div",{style:{flex:w==="left"?"90%":w==="right"?"10%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}})]})]}))},oQ=M.div(v0||(v0=_([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap}),v0;M.div(w0||(w0=_([`
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
`])));M.div(m0||(m0=_([`
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
`])),function(A){return A.placement==="left"?"0":"unset"},function(A){return A.placement==="right"?"0":"unset"});M.ul(C0||(C0=_([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`])));M.li(Q0||(Q0=_([`
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
`])));var w0,m0,C0,Q0;M.footer(y0||(y0=_([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var y0,F0;(function(A){A.ColumnFit="column-fit",A.ColumnFill="column-fill",A.RowFit="row-fit",A.RowFill="row-fill",A.ColumnRepeat="column-repeat",A.RowRepeat="row-repeat",A.Default="default"})(F0||(F0={}));var rs;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(rs||(rs={}));var jd=function(A){var e=A.active,t=A.data,r=A.direction,n=r===void 0?"row":r,o=A.theme,i=o===void 0?{hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"}:o,a=A.border,s=a===void 0?!0:a,l=A.onChange,c=A.onDropChange,u=A.dropProps,d=A.itemStyle,p=A.itemClassName,v=p===void 0?"":p,w=A.style,x=A.className,g=x===void 0?"":x;return B(iQ,y({className:"land-menu ".concat(g),style:w,column:n==="column",border:s},{children:t==null?void 0:t.map(function(f){return N("div",y({className:"land-menu-item ".concat(f.clickType===rs.SIMPLE?"simple":""," ").concat(f.clickType===rs.DISABLED?"disabled":""),style:d},{children:[N(aQ,y({role:"button",className:"land-menu-link ".concat(e===f.key?"active":""," ").concat(v),onClick:function(){return l==null?void 0:l(f)},column:n==="column",theme:i},{children:[typeof f.icon=="string"?B("img",{src:f.icon,className:"land-menu-icon"}):f.icon,B("p",y({className:"land-menu-title","data-title":f.title},{children:f.title})),B("span",y({className:"land-menu-sub-title"},{children:f.subTitle})),f.isNew&&B("i",y({className:"land-menu-new"},{children:typeof f.isNew=="boolean"?"NEW":f.isNew}))]}),f.key),f.dropData&&B("div",y({className:"land-menu-drop-wrap ".concat(f.open?"open":"")},{children:B("div",y({className:"land-menu-drop"},{children:B(jd,y({data:f.dropData,onChange:function(h){return c==null?void 0:c(h,f)},direction:"column"},u))}))}))]}))})}))},iQ=M.div(U0||(U0=_([`
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
`])),function(A){return A.column?"column":"row"},function(A){return A.column?"":"100%"},function(A){return A.column?"100%":"fit-content"},function(A){return A.border&&!A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.column?"":"100%"}),aQ=M.a(x0||(x0=_([`
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
`])),function(A){return A.column?"0":"50%"},function(A){return A.column?"50%":"0"},function(A){return A.column?"2px":"12px"},function(A){return A.column?A.theme.activeBg?"100%":"calc(100% - 16px)":"2px"},function(A){return A.column?"translateY(50%)":"translateX(50%)"},function(A){return A.theme.lineColor||"var(--color-text-1)"},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverBg},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverColor},function(A){return A.theme.activeBg},function(A){return A.theme.activeColor||"var(--color-text-1)"}),U0,x0,sQ=function(A){var e,t=A.h,r=t===void 0?"64px":t,n=A.fixed,o=A.filter,i=o===void 0?0:o,a=A.borderBottom,s=a===void 0?!0:a,l=A.applications,c=A.logo,u=A.name,d=A.onLogoClick,p=A.divider,v=p===void 0?!0:p,w=A.align,x=A.menuProps,g=A.rightComponent,f=A.style,h=A.className,C=h===void 0?"":h,F=yA(L.useState(!1),2),m=F[0],Q=F[1];return L.useEffect(function(){window.onscroll=function(){return Q(!1)},window.onresize=function(){return Q(!1)}}),N(lQ,y({className:"land-header ".concat(n?"fixed":""," ").concat(C),style:f,height:r,filter:i,borderBottom:s,applications:!!l},{children:[N("div",y({className:"land-header-logo",onClick:d},{children:[l&&N("button",y({className:"land-header-application",onClick:function(E){return E.stopPropagation()}},{children:[B(MA,{name:"application"}),B("div",y({className:"land-application-drop"},{children:l}))]})),typeof c=="string"?B("img",{src:c}):c,v&&c&&u&&B(fB,{direction:"column",lang:"24px"}),typeof u=="string"?B("img",{src:u}):u]})),B(cQ,y({className:"land-header-nav",align:w,showMobileNav:m},{children:x&&B(jd,y({border:!1},x,{onChange:function(E){var H;(H=x.onChange)===null||H===void 0||H.call(x,E),Q(!1)},onDropChange:function(E,H){var D;(D=x.onDropChange)===null||D===void 0||D.call(x,E,H),Q(!1)}}))})),g&&B("div",y({className:"land-header-btns"},{children:g})),x&&x.data&&((e=x.data)===null||e===void 0?void 0:e.length)>0&&B(va,{icon:B(MA,{name:"more-line"}),type:"text",onClick:function(){return Q(!m)}})]}))},lQ=M.header(E0||(E0=_([`
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
`])),function(A){return A.applications?"0":""},function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""}),cQ=M.div(b0||(b0=_([`
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
`])),function(A){return A.align},function(A){return A.showMobileNav?"all":"none"},function(A){return A.showMobileNav?"1":"0"}),E0,b0,uQ=function(A){var e=A.size,t=e===void 0?18:e,r=A.strokeSize,n=r===void 0?2:r,o=A.color,i=o===void 0?"var(--color-text-1)":o,a=A.style,s=A.className,l=s===void 0?"":s;return B(dQ,{className:"land-loading-container ".concat(l),style:a,size:t,strokeSize:n,color:i})},dQ=M.div(H0||(H0=_([`
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
    )`)},function(A){return"conic-gradient(transparent 25%, ".concat(A.color,")")}),H0;M.div(k0||(k0=_([`
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
        `])));M.div(I0||(I0=_([`
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
        `])));var k0,I0;M.div(L0||(L0=_([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var L0;M.a(S0||(S0=_([`
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
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var S0,fQ=function(A){var e=A.value,t=A.type,r=t===void 0?"border":t,n=A.step,o=n===void 0?1:n,i=A.min,a=i===void 0?0:i,s=A.max,l=s===void 0?100:s,c=A.suffix,u=A.disabled,d=A.onChange;A.className;var p=A.style,v=_d(A,["value","type","step","min","max","suffix","disabled","onChange","className","style"]),w=yA(L.useState(e),2),x=w[0],g=w[1],f=function(h,C){C<a-o/2||C>l+o/2||(g(C),d==null||d(h,C))};return N(gQ,y({className:"StyledNumberInputWrap",style:p,onClick:function(h){return h.stopPropagation()},suffix:c},{children:[B(Uo,y({type:r,inputType:"number",value:x,disabled:u,onChange:function(h,C){Number(h)>l||Number(h)<a||(g(Number(h)),d==null||d(C,Number(h)))},showClear:!1,style:{paddingRight:"32px"}},v)),N("div",y({className:"land-numberInput-arrow",style:{borderLeft:r==="border"?"1px solid var(--color-border-2)":"",background:"inherit"}},{children:[B("div",y({className:"land-numberInput-add ".concat(x===l?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(x)+o)}},{children:B(MA,{name:"arrow"})})),r==="border"&&B(fB,{margin:0,lang:"32px"}),B("div",y({className:"land-numberInput-dec ".concat(x===a?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(x)-o)}},{children:B(MA,{name:"arrow"})}))]}))]}))},gQ=M.div(D0||(D0=_([`
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
`])),function(A){return A.suffix}),D0;M.div(K0||(K0=_([`
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
`])));var K0;M.a(M0||(M0=_([`
`],[`
`])));var M0;M.div(T0||(T0=_([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));M.div(N0||(N0=_([`
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
`])));M.div(_0||(_0=_([`
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
`])));M.div(O0||(O0=_([`
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
`])));M.div(R0||(R0=_([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var T0,N0,_0,O0,R0,Fe=function(A){var e=A.title,t=A.type,r=t===void 0?"h1":t,n=A.prefix,o=A.sub,i=A.info,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return N(pQ,y({className:"land-title ".concat(l),style:a,onClick:function(){return c==null?void 0:c()}},{children:[n&&B("span",y({className:"land-title-prefix"},{children:n})),r==="h1"&&B("h1",{children:e}),r==="h2"&&B("h2",{children:e}),r==="h3"&&B("h3",{children:e}),r==="p"&&B("p",{children:e}),i&&N("div",y({className:"land-title-info hover-pop"},{children:[B(MA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(gt,{content:i,style:{maxWidth:"200px"}})]})),o&&typeof o=="string"?B("div",y({className:"land-title-sub"},{children:o})):B(yn,{children:o})]}))},pQ=M.div(V0||(V0=_([`
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
`]))),V0,hQ=function(A){var e=A.data,t=A.placeholder,r=t===void 0?"请选择":t,n=A.selected,o=n===void 0?"0":n,i=A.width,a=i===void 0?"100px":i,s=A.title,l=A.titleInfo,c=A.info,u=A.disabled,d=A.onChange,p=A.className,v=p===void 0?"":p,w=A.style,x=yA(L.useState(!1),2),g=x[0],f=x[1],h=yA(L.useState(o),2),C=h[0],F=h[1];return N(BQ,y({style:y({width:typeof a=="number"?"".concat(a,"px"):a},w),className:v},{children:[s&&B(Fe,{title:s,type:"p",info:l}),N(vQ,y({className:"hover-pop ".concat(g?"show":""," ").concat(u?"disabled":""),onClick:function(m){u||(m.stopPropagation(),f(!g))}},{children:[B("p",y({className:"".concat(C!=="0"?"land-select-trigger":"land-select-placeholder")},{children:C==="0"?r:e==null?void 0:e.filter(function(m){return m.value===C})[0].label})),B(MA,{name:"arrow",className:"land-select-value-arrow"}),c&&B(gt,{content:c,theme:"dark"})]})),B(wQ,y({className:"land-select-results ".concat(g?"show":"")},{children:B(mQ,{children:e==null?void 0:e.map(function(m){return N(CQ,y({className:"".concat(m.tip?"hover-pop":""," ").concat(C===m.value?"selected":""," ").concat(m.disabled?"disabled":""),onClick:function(){m.disabled||(F(m.value),d==null||d(m),f(!1))}},{children:[B("div",y({className:"land-select-results-item-label"},{children:m.label})),m.info&&N("div",y({className:"land-select-item-info ".concat(m.info?"hover-pop":"")},{children:[B(MA,{name:"info-stroke",size:12}),m.info&&B(gt,{content:m.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]})),m.tip&&B(gt,{content:m.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]}),m.value)})})}))]}))},BQ=M.div(P0||(P0=_([`
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
`]))),vQ=M.div(G0||(G0=_([`
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
`]))),wQ=M.div(j0||(j0=_([`
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
`]))),mQ=M.ul(z0||(z0=_([`
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
`]))),CQ=M.li(W0||(W0=_([`
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
`]))),P0,G0,j0,z0,W0;M.div($0||($0=_([`
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
`])));M.div(X0||(X0=_([`
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
`])));M.div(J0||(J0=_([`
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
`])));M.ul(Y0||(Y0=_([`
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
`])));M.li(Z0||(Z0=_([`
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
`])));M.ul(q0||(q0=_([`
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

`])),function(A){return A.show?1:0},function(A){return A.show?"all":"none"});var $0,X0,J0,Y0,Z0,q0;M.aside(Ag||(Ag=_([`
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
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var Ag,QQ=function(A){var e=A.prefix,t=A.suffix,r=A.useDivider,n=r===void 0?!0:r,o=A.usePop,i=o===void 0?!1:o,a=A.popValue,s=A.min,l=s===void 0?0:s,c=A.max,u=c===void 0?100:c,d=A.step,p=d===void 0?1:d,v=A.value,w=v===void 0?0:v,x=A.height,g=x===void 0?36:x,f=A.onChange,h=A.className,C=L.useRef(null),F=yA(L.useState(0),2),m=F[0],Q=F[1];return L.useEffect(function(){if(C.current){var E=C.current.getClientRects()[0].width;Q(E)}},[]),N("div",y({ref:C,className:"flex items-center gap-8 width-100"},{children:[e&&B("div",y({className:"fs-12 color-gray-3"},{children:e})),N(yQ,y({useDivider:n,step:100/(u-l),className:"relative flex-1 p-2 radius-8 bg-gray hover:bg-gray transition-2s hover-pop ".concat(h||""),style:{height:"".concat(g,"px")}},{children:[B(FQ,{type:"range",value:w,min:0,max:u,step:p,onChange:function(E){f==null||f(Number(E.target.value))},style:{background:"linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ".concat((w-l)/(u-l)*100,"% 100% no-repeat")},className:"width-100 radius-6 flex justify-center"}),i&&B(gt,{content:a,style:{transform:"translateX(".concat(m*(w-(u-l)/2)/(u-l),"}px)")}})]})),t&&B("div",y({className:"fs-12 color-gray-3"},{children:t}))]}))},yQ=M.div(eg||(eg=_([`
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
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--color-gray-2) 0 0 / 100% 100%"):""}),FQ=M.input(tg||(tg=_([`
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
`]))),eg,tg;M.div(rg||(rg=_([`
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
`])));var rg;M.div(ng||(ng=_([`
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
`])));var ng;M.table(og||(og=_([`
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
`])));var og,UQ=function(A){var e=A.desc,t=A.fileType,r=A.onUpload,n=A.children,o=A.width,i=o===void 0?"100%":o,a=A.height,s=a===void 0?"100%":a,l=A.style,c=A.className,u=c===void 0?"":c,d=A.innerClassName,p=d===void 0?"":d,v=L.useRef(null),w=yA(L.useState(),2),x=w[0],g=w[1],f=yA(L.useState(),2),h=f[0],C=f[1],F=yA(L.useState(!1),2),m=F[0],Q=F[1],E=function(X,z){if(X.preventDefault(),Q(!0),z){C(z);var S=new FileReader;S.readAsDataURL(z),g(URL.createObjectURL(z)),Q(!1)}};L.useEffect(function(){r==null||r(x,h)},[x]);var H=yA(L.useState(!1),2),D=H[0],q=H[1];return N(xQ,y({className:"".concat(D?"drag":""," ").concat(u),style:l,onDragOver:function(X){q(!0),X.preventDefault()},onDrop:function(X){return E(X,X.dataTransfer.files[0])},onDragLeave:function(){return q(!1)},width:i,height:s},{children:[B(EQ,{ref:v,type:"file",accept:t,className:p,onChange:function(X){E(X,X.target.files[0])}}),n||(m?B(yn,{children:"上传中"}):N(yn,{children:[B("div",y({className:"land-uploader-icon"},{children:B(MA,{name:"upload"})})),(e||D)&&B("div",y({className:"land-uploader-desc"},{children:D?"释放即可上传":e}))]}))]}))},xQ=M.label(ig||(ig=_([`
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
`])),function(A){return A.width},function(A){return A.height}),EQ=M.input(ag||(ag=_([`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`],[`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`]))),ig,ag;const Ol=[{key:11,title:"基础知识",open:!0,dropData:[{key:11,title:"线材"},{key:12,title:"器材"}]},{key:1,title:"插图教程",open:!0,dropData:[{key:1,title:"钩针"},{key:2,title:"棒针"}]},{key:21,title:"辅助工具",open:!0,dropData:[{key:21,title:"取色"},{key:22,title:"配色"},{key:23,title:"像素格"}]},{key:31,title:"图解收录"}],sg=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"锁针/辫子针",desc:"锁针常用于起针，也可以独立应用。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/dlOyrFmHhYjTuqM.png"},{img_src:"https://s2.loli.net/2022/01/25/MGZPTfFQgJBSl1q.png",img_des:"1、打一个活结并按图示持线"},{img_src:"https://s2.loli.net/2022/01/25/ZwP9ISDKYzb1fiR.png",img_des:"2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"},{img_src:"https://s2.loli.net/2022/01/25/s1PDdfarAKcI36Q.png",img_des:"3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"},{img_src:"https://s2.loli.net/2022/01/25/GI6mCRxTYKFvebS.png",img_des:"4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"}]},{id:"2",title:"引拔针",desc:"引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/jx8XTHlMsdVJUQ4.png"},{img_src:"https://s2.loli.net/2022/01/25/cfMk71RoUs3NlQm.png",img_des:"1、如图所示为短针环钩的结尾处"},{img_src:"https://s2.loli.net/2022/01/25/9q5TeODLgzYGAof.png",img_des:"2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/EN59GXqoimYHwMZ.png",img_des:"3、拉紧即完成连接"},{img_src:"https://s2.loli.net/2022/01/25/tuM9S2WiRXr3lUs.png",img_des:"4、接着根据针法选择引拔的锁针高度、参考下图"}]},{id:"3",title:"短针",desc:"短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/2shOLI61PveoYd3.png"},{img_src:"https://s2.loli.net/2022/01/25/OsHmBNxkLQIpC1l.png",img_des:"1、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/MJKrzTlD2UEmPj8.png",img_des:"2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"},{img_src:"https://s2.loli.net/2022/01/25/o7iNOuqAgHc4Wmy.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织短针"},{img_src:"https://s2.loli.net/2022/01/25/D7BPxNS1wvnpZr3.png",img_des:"4、如图为钩织3个短针、接下来按照图解继续完成钩织"}]},{id:"4",title:"中长针",desc:"中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/1FHcSlgUrZhWbwE.png"},{img_src:"https://s2.loli.net/2022/01/25/hR9mj1DaiecFKp7.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/6tQAPwGxhJVBkg3.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"},{img_src:"https://s2.loli.net/2022/01/25/rOL6mqF3fxiSeGT.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"}]},{id:"5",title:"长针",desc:"长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/IY9TJOPHprkCgFc.png"},{img_src:"https://s2.loli.net/2022/01/25/OQZrax93htPWbUK.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/2E4Vgixfy6Q1GH9.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"},{img_src:"https://s2.loli.net/2022/01/25/UvhdzuosPqiaHXw.png"},{img_src:"https://s2.loli.net/2022/01/25/oiBOIWljCzwvN6J.png",img_des:"3、绕线从这2个线圈中钩出，即完成一个长针"}]},{id:"6",title:"长长针",desc:"长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TcHaDG27dUEqs1K.png"},{img_src:"https://s2.loli.net/2022/01/25/bNEBqwdrRiPAxcX.png",img_des:"1、如图所示在钩针上绕线3圈后穿入针目"},{img_src:"https://s2.loli.net/2022/01/25/bhptxHfsvAaVLBe.png",img_des:"2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/6lNJcryYhCKzQg8.png"},{img_src:"https://s2.loli.net/2022/01/25/lsP3AHnpkXOfELy.png"},{img_src:"https://s2.loli.net/2022/01/25/CPwesp4UcjndfoH.png",img_des:"3、钩针上只有一个线圈时即完成一个三卷长针"}]},{id:"7",title:"N卷长针",desc:`N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。
N卷长针引拔时高度等于N个锁针。
N卷长针常用于植物钩织。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/hM6dayTbrexlf2K.png"}]},{id:"8",title:"加针/分针",desc:"加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/N7a6UdMw2zyF4kc.png"},{img_src:"https://s2.loli.net/2022/01/25/xpgMCzHYlr3JKSu.png",img_des:"1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"},{img_src:"https://s2.loli.net/2022/01/25/msNihQ7DjXg3voz.png",img_des:"2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"}]},{id:"9",title:"减针/并针",desc:"减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",imgList:[{img_des:"短针减针：",img_src:"https://s2.loli.net/2022/01/25/DAyWndjw23bkt7v.png"},{img_src:"https://s2.loli.net/2022/01/25/MZVXQxb5yU9in7t.png",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/dLWS4NmAjitsx6Z.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/ROE9csFB2xbwnyp.png",img_des:"3、绕线从3个线圈中一次性钩出，即完成一个短针减针"},{img_des:"中长针减针：",img_src:"https://s2.loli.net/2022/01/25/mhi9ayTWpRcOE36.png"},{img_src:"https://s2.loli.net/2022/01/25/BDyIOq7sKSE9pgZ.png",img_des:"1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/vQ8atefw9xV7WkI.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/T9ELXWaHBztrcF3.png"},{img_src:"https://s2.loli.net/2022/01/25/gBSCvHJWpPnRATK.png",img_des:"3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/zczjianz.gif"},{img_des:"长针减针：",img_src:"https://s2.loli.net/2022/01/25/ItS3Torw8LcUGji.png"},{img_src:"https://s2.loli.net/2022/01/25/NWYPDVLufjBxUmZ.png",img_des:"1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/og3vxXNVumds5j9.png",img_des:"2、穿过后绕线钩出、此时钩针上有4个线圈"},{img_src:"https://s2.loli.net/2022/01/25/1cKbxvI2OXkPn3S.png",img_des:"3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/jCFLiwbVcQeTpRM.png",img_des:"4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/czjianz.gif"},{img_des:`长针、长长针、N卷长针的减针钩法类似(步骤总结)：
1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目
2、绕线从针目中钩出、钩织第2个未完成的N卷长针
3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈
4、绕线从这些个线圈中一次性钩出`}]},{id:"10",title:"内半针",desc:"内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/UidtWPLcOak6Glm.png"},{img_src:"https://s2.loli.net/2022/01/25/9VYrljNEiOyZL8t.png",img_des:"短针内半针："}]},{id:"11",title:"外半针",desc:"外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/PDZhkqa1nzIvJwb.png"},{img_src:"https://s2.loli.net/2022/01/25/jkaPw45mRst1Hd2.png",img_des:"短针外半针："}]}]},{cap_id:"2",select:"0",cap:"起针方法",contentMenuList:[{id:"21",title:"手势",desc:"钩织时有一定的绕线方式、拿线方式与拿针方式。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8tGYqI5BaEJSkHF.png",img_des:`绕线方式：
1、如图绕线`},{img_src:"https://s2.loli.net/2022/01/25/KU5uzmGVfFg461B.png",img_des:"2、左手拇指与中指按住线头/织物、食指与小指配合带线"},{img_src:"https://s2.loli.net/2022/01/25/3uXekgrcVOxnfEG.png",img_des:"拿针方式："},{img_src:"https://s2.loli.net/2022/01/25/xutBU13f5n2jI4l.png"}]},{id:"22",title:"环起",desc:`通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
环起钩织的织物底面大致为圆形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/QtpG5JZIxSglBHc.png",img_des:"短针环起："},{img_src:"https://s2.loli.net/2022/01/25/aeumSkjBUt3fXFc.png",img_des:"中长针环起："},{img_src:"https://s2.loli.net/2022/01/25/npxyWtCDcQGFwkO.png",img_des:"长针环起："},{img_des:"提示：环起详细教程请前往笔记页面观看视频教程。"}]},{id:"23",title:"片起",desc:"片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TI4OCM6FfLxcz5n.png",img_des:"短针片起："},{img_src:"https://s2.loli.net/2022/01/25/TKOugprBfzmtJWj.png",img_des:"中长针片起："},{img_src:"https://s2.loli.net/2022/01/25/ZBYboQuRdW64yrM.png",img_des:"长针片起："},{img_des:"提示：片起详细教程请前往笔记页面观看视频教程。"}]},{id:"24",title:"辫子针环起",desc:`辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
辫子针环起钩织的织物底面大致为圆角矩形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/ZCu9pOwceGLVnoU.png",img_des:"短针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/WB3JasEeX2hHK9n.png",img_des:"中长针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/RCGvhMoj6OAZQKt.png",img_des:"长针-辫子针环起："},{img_des:"提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"}]}]},{cap_id:"6",select:"0",cap:"附录",contentMenuList:[{id:"61",title:"钩针符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8W4sk2VcC6euXJw.png"}]},{id:"62",title:"英文符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/7BCuv3doyRwjJ6t.png"}]}]}],bQ=[{id:1,title:"线材总述",desc:"纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",img:"./images/xc/xc.jpg",detailList:[{desc:` 
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
1、塑料线：`,img:"./images/xc/slx.jpg"},{desc:"2、塑料绳：",img:"./images/xc/sls.jpg"},{desc:"3、胶制线：",img:"./images/xc/jzx.jpg"},{desc:"4、金属线：",img:"./images/xc/jsx.jpg"}]}],HQ=[{id:1,title:"新手必备",desc:"此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",img:"https://s2.loli.net/2022/01/25/86YFO94cuXVp13P.png",detailList:[{desc:`
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

`}]}],kQ=[{id:1,title:"雪花熊",desc:`钩针：4.0-6.0mm
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
配件：塑料卡包内芯、18mm磁扣`,img:"https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",detail:"https://s2.loli.net/2022/01/26/kzrmgGLeC2I7YMb.png"}],IQ=[{id:1,img:"https://ingenueland.online/crochet-time/images/ct-color-fill-svg-sock-1.jpg",path:["M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z","M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z","M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z","M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z","M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z"]}],LQ=[{id:1,title:"萌4",colors:[{name:"#01",value:"#F3F2F0"},{name:"#02",value:"#F5F6F1"},{name:"#03",value:"#F3EADB"},{name:"#04",value:"#FAE9E1"},{name:"#01",value:"#FED5DD"},{name:"#02",value:"#FBA3C9"},{name:"#01",value:"#F67B97"},{name:"#02",value:"#FF6CBC"},{name:"#03",value:"#C52D2C"},{name:"#04",value:"#F0E4BC"},{name:"#01",value:"#FCE281"},{name:"#02",value:"#F2E15D"},{name:"#01",value:"#F6B453"},{name:"#02",value:"#DF5F3C"},{name:"#03",value:"#D5B6DC"},{name:"#04",value:"#D08BDE"},{name:"#01",value:"#E2FAE6"},{name:"#02",value:"#98CAFA"},{name:"#01",value:"#83A0E7"},{name:"#02",value:"#3850B0"},{name:"#03",value:"#272954"},{name:"#04",value:"#AEE5E2"},{name:"#01",value:"#59A3BA"},{name:"#02",value:"#DCFAD3"},{name:"#01",value:"#98BC44"},{name:"#02",value:"#415B2E"},{name:"#03",value:"#048C62"},{name:"#04",value:"#EAE1D0"},{name:"#01",value:"#F0C892"},{name:"#02",value:"#D5A268"},{name:"#01",value:"#9B734C"},{name:"#02",value:"#6D473C"},{name:"#03",value:"#A4A4A4"},{name:"#04",value:"#000000"},{name:"#01",value:"#E8CEA2"},{name:"#02",value:"#E4E4E4"},{name:"#01",value:"#FAB6AA"},{name:"#02",value:"#D5A7BE"},{name:"#03",value:"#FD780F"},{name:"#04",value:"#DAD46A"},{name:"#01",value:"#81C7C7"},{name:"#02",value:"#6783A1"},{name:"#01",value:"#F2DDD5"},{name:"#02",value:"#EEC3C4"},{name:"#03",value:"#70B8BE"},{name:"#04",value:"#196182"},{name:"#01",value:"#BDCE9E"},{name:"#02",value:"#D3B358"},{name:"#01",value:"#6A447A"},{name:"#02",value:"#7F2735"},{name:"#03",value:"#F8F8F1"},{name:"#04",value:"#F49CB7"},{name:"#01",value:"#E4AFCF"},{name:"#02",value:"#02937E"},{name:"#01",value:"#7F9351"},{name:"#02",value:"#C5B7D3"},{name:"#03",value:"#A58CBB"},{name:"#04",value:"#04A4C5"},{name:"#01",value:"#1F6F5F"},{name:"#02",value:"#995920"},{name:"#01",value:"#7D5121"},{name:"#02",value:"#944928"},{name:"#03",value:"#F5C73D"},{name:"#04",value:"#EABE8D"},{name:"#01",value:"#EEA48F"},{name:"#02",value:"#99282D"},{name:"#02",value:"#B15249"}]},{id:2,title:"yarn【羽】",colors:[{name:"01",value:"#F3EBE0"},{name:"01",value:"#F1E5E7"},{name:"01",value:"#E4E2E0"},{name:"01",value:"#F7BFA9"},{name:"01",value:"#ADADAD"},{name:"01",value:"#2C5238"},{name:"01",value:"#86718E"},{name:"01",value:"#CCD2BC"},{name:"01",value:"#90A77D"},{name:"01",value:"#DC7D45"},{name:"01",value:"#F3CCA4"},{name:"01",value:"#FFC459"},{name:"01",value:"#AF2728"},{name:"01",value:"#72323C"},{name:"01",value:"#D0CB8A"},{name:"01",value:"#73C26E"},{name:"01",value:"#D1E4EB"},{name:"01",value:"#78BEE8"},{name:"01",value:"#8FAEDF"},{name:"01",value:"#13193A"},{name:"01",value:"#518F7F"},{name:"01",value:"#B39FCC"},{name:"01",value:"#B19F9E"},{name:"01",value:"#6A4F49"},{name:"01",value:"#EFE5AB"},{name:"01",value:"#E7DECB"},{name:"01",value:"#CD8893"},{name:"01",value:"#E3A286"}]},{id:3,title:"superwash merino",colors:[{name:"01",value:"#FBF6F4"},{name:"01",value:"#D1CB6B"},{name:"01",value:"#6F784B"},{name:"01",value:"#61A3D2"},{name:"01",value:"#3E4B82"},{name:"01",value:"#AD251F"},{name:"01",value:"#59342E"},{name:"01",value:"#C0C0C3"}]}],SQ=({style:A,className:e=""})=>U.jsxs("svg",{width:"52%",viewBox:"0 0 2594 490",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:A,className:e,children:[U.jsxs("g",{"clip-path":"url(#clip0_401_299)",children:[U.jsx("rect",{width:"2594",height:"490",fill:"white"}),U.jsx("path",{d:"M1425.6 461.505V180.477C1425.6 160.844 1458.67 161.39 1458.67 180.477V389.474C1458.67 402.522 1458.67 404.705 1456.53 418.941L1453.06 446.586C1452.78 448.781 1456.21 449.991 1457.61 448.275C1473.51 428.749 1493.52 434.856 1477.87 468.195C1466.36 492.689 1425.6 494.791 1425.6 461.505Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1523.52 312.552H1366.19C1347 312.552 1347.54 278.719 1366.19 278.719H1453.12C1465.88 278.719 1468.01 278.719 1481.92 280.902L1509.09 284.476C1511.27 284.763 1512.5 281.404 1510.82 279.99C1491.46 263.694 1497.35 242.994 1530.06 259.075C1554 270.843 1556.06 312.552 1523.52 312.552Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("circle",{cx:"108.274",cy:"292.525",r:"100",transform:"rotate(70.6084 108.274 292.525)",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M11.0642 323.563C32.1071 387.793 71.0477 430.726 166.227 439.099",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M15.3705 249.957C36.7982 197.89 97.3489 159.084 164.593 142.305",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M140.226 428.415L140.862 433.374L140.226 428.415C132.918 429.353 131.813 439.395 138.468 442.093C143.609 444.177 147.148 446.004 154.021 449.716C163.268 454.71 172.502 455.613 180.066 456.353C181.444 456.488 182.767 456.618 184.024 456.765L184.138 456.779L184.254 456.787L294.718 464.614L294.732 464.615C310.945 465.718 323.547 465.055 332.331 463.229C336.693 462.323 340.403 461.071 343.186 459.403C345.845 457.808 348.642 455.202 348.947 451.317C349.255 447.404 346.866 444.406 344.452 442.446C341.937 440.405 338.44 438.659 334.248 437.17C325.806 434.171 313.378 431.806 297.05 430.694C297.047 430.694 297.044 430.694 297.041 430.693L186.408 422.749L186.129 422.729L185.85 422.74C185.036 422.773 183.936 422.757 182.576 422.737C176.935 422.656 166.819 422.511 154.117 425.483L153.926 425.528L153.74 425.587C149.342 426.986 145.217 427.774 140.226 428.415Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M148.888 153.923L148.82 148.924L148.888 153.923C141.521 154.023 139.013 144.236 145.223 140.629C150.019 137.842 153.266 135.534 159.548 130.892C167.999 124.647 177.014 122.452 184.399 120.655C185.744 120.327 187.035 120.013 188.259 119.69L188.371 119.661L188.484 119.636L296.747 96.3392L296.761 96.3363C312.656 92.962 325.227 91.8444 334.18 92.4157C338.626 92.6995 342.475 93.4162 345.466 94.6764C348.323 95.8808 351.459 98.0677 352.308 101.87C353.163 105.701 351.22 109.006 349.106 111.286C346.904 113.661 343.686 115.881 339.746 117.946C331.81 122.103 319.839 126.194 303.83 129.593C303.827 129.594 303.824 129.595 303.821 129.595L195.408 153.032L195.135 153.091L194.856 153.12C194.047 153.202 192.96 153.372 191.615 153.583C186.042 154.457 176.047 156.025 163.053 154.87L162.858 154.853L162.665 154.821C158.114 154.054 153.92 153.855 148.888 153.923Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M400.999 329C400.999 315.4 399.132 305.4 395.399 299C391.666 292.333 384.199 289 372.999 289H368.999V281H400.999C411.132 281 418.732 282.467 423.799 285.4C429.132 288.067 432.866 292.6 434.999 299H436.999C441.799 292.867 448.199 287.667 456.199 283.4C464.466 279.133 474.066 277 484.999 277C495.666 277 503.666 279 508.999 283C513.532 286.467 518.199 292.467 522.999 301L506.999 313C504.066 309 499.799 306.067 494.199 304.2C488.599 302.067 482.199 301 474.999 301C466.999 301 459.666 302.867 452.999 306.6C446.332 310.067 440.999 314.867 436.999 321V469H400.999V329ZM630.134 473C612.001 473 596.268 468.733 582.934 460.2C569.601 451.4 559.468 439.533 552.534 424.6C545.601 409.667 542.134 393.133 542.134 375C542.134 356.867 545.601 340.333 552.534 325.4C559.468 310.467 569.601 298.733 582.934 290.2C596.268 281.4 612.001 277 630.134 277C648.268 277 664.001 281.4 677.334 290.2C690.668 298.733 700.801 310.467 707.734 325.4C714.668 340.333 718.134 356.867 718.134 375C718.134 393.133 714.668 409.667 707.734 424.6C700.801 439.533 690.668 451.4 677.334 460.2C664.001 468.733 648.268 473 630.134 473ZM630.134 457C640.001 457 648.668 453.4 656.134 446.2C663.868 439 669.734 429.133 673.734 416.6C678.001 404.067 680.134 390.2 680.134 375C680.134 359.8 678.001 345.933 673.734 333.4C669.734 320.867 663.868 311 656.134 303.8C648.668 296.6 640.001 293 630.134 293C620.268 293 611.468 296.6 603.734 303.8C596.268 311 590.401 320.867 586.134 333.4C582.134 345.933 580.134 359.8 580.134 375C580.134 390.2 582.134 404.067 586.134 416.6C590.401 429.133 596.268 439 603.734 446.2C611.468 453.4 620.268 457 630.134 457ZM841.91 473C822.71 473 806.444 468.733 793.11 460.2C780.044 451.4 770.177 439.667 763.51 425C757.11 410.067 753.91 393.4 753.91 375C753.91 356.6 757.11 340.067 763.51 325.4C770.177 310.467 780.044 298.733 793.11 290.2C806.444 281.4 822.71 277 841.91 277C871.244 277 890.577 281.667 899.911 291C904.444 295.533 907.244 301.133 908.311 307.8C909.377 314.2 909.911 325.933 909.911 343H901.911C900.844 326.467 895.644 314.067 886.31 305.8C876.977 297.267 864.844 293 849.911 293C830.71 293 816.177 300.6 806.31 315.8C796.71 331 791.91 350.733 791.91 375C791.91 399.267 796.71 419 806.31 434.2C816.177 449.4 830.71 457 849.911 457C863.511 457 874.711 454.467 883.51 449.4C892.31 444.067 900.444 435.933 907.91 425L915.91 431C907.111 445.933 896.71 456.733 884.71 463.4C872.71 469.8 858.444 473 841.91 473ZM957.737 253C957.737 239.4 955.87 229.4 952.137 223C948.403 216.333 940.937 213 929.737 213H921.737V205H957.737C967.603 205 974.937 206.333 979.737 209C984.803 211.4 988.403 215.933 990.537 222.6C992.67 229.267 993.737 239.4 993.737 253V297C999.337 291.4 1006.54 286.733 1015.34 283C1024.4 279 1034.54 277 1045.74 277C1065.74 277 1082 282.333 1094.54 293C1107.34 303.667 1113.74 322.333 1113.74 349V469H1077.74V349C1077.74 330.333 1073.47 316.733 1064.94 308.2C1056.67 299.4 1046.27 295 1033.74 295C1019.6 295 1006.27 302.067 993.737 316.2V469H957.737V253Z",fill:"#202020"}),U.jsx("path",{d:"M2129.8 329C2129.8 315.4 2127.93 305.4 2124.2 299C2120.47 292.333 2113 289 2101.8 289H2093.8V281H2129.8C2139.67 281 2147.13 282.333 2152.2 285C2157.53 287.667 2161.4 291.667 2163.8 297H2165.8C2171.4 291.4 2178.6 286.733 2187.4 283C2196.47 279 2206.6 277 2217.8 277C2229 277 2238.6 279.133 2246.6 283.4C2254.6 287.4 2261 294.6 2265.8 305C2272.73 296.2 2281.53 289.4 2292.2 284.6C2303.13 279.533 2314.33 277 2325.8 277C2342.87 277 2356.47 282.333 2366.6 293C2376.73 303.667 2381.8 322.333 2381.8 349V469H2345.8V349C2345.8 329.8 2343.13 316.067 2337.8 307.8C2332.47 299.267 2324.47 295 2313.8 295C2306.33 295 2298.47 297.8 2290.2 303.4C2281.93 308.733 2275.8 314.6 2271.8 321C2273.13 325 2273.8 334.333 2273.8 349V469H2237.8V349C2237.8 329.8 2235.13 316.067 2229.8 307.8C2224.47 299.267 2216.47 295 2205.8 295C2191.67 295 2178.33 302.067 2165.8 316.2V469H2129.8V329Z",fill:"#202020"}),U.jsx("path",{d:"M2439 397.002V329.878C2442.75 243.874 2588.32 245.544 2588.32 329.878L2588.74 373.492L2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492V397.002C2459.44 446.842 2536.6 469.434 2569.55 418.5C2582.75 398.097 2596.82 404.097 2585.82 425.597C2550.78 494.066 2439 471.316 2439 397.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M2549.11 380.589V340.733L2569.55 329.878C2569.55 273.934 2459.44 269.759 2459.44 329.878V373.492M2549.11 380.589L2588.74 373.492L2588.32 329.878C2588.32 245.544 2442.75 243.874 2439 329.878V397.002C2439 471.316 2550.78 494.066 2585.82 425.597C2596.82 404.097 2582.75 398.097 2569.55 418.5C2536.6 469.434 2459.44 446.842 2459.44 397.002V373.492M2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1171 405.002V337.878C1174.75 251.874 1320.32 253.544 1320.32 337.878L1320.74 381.492L1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492V405.002C1191.44 454.842 1268.6 477.434 1301.55 426.5C1314.75 406.097 1328.82 412.097 1317.82 433.597C1282.78 502.066 1171 479.316 1171 405.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1281.11 388.589V348.733L1301.55 337.878C1301.55 281.934 1191.44 277.759 1191.44 337.878V381.492M1281.11 388.589L1320.74 381.492L1320.32 337.878C1320.32 253.544 1174.75 251.874 1171 337.878V405.002C1171 479.316 1282.78 502.066 1317.82 433.597C1328.82 412.097 1314.75 406.097 1301.55 426.5C1268.6 477.434 1191.44 454.842 1191.44 405.002V381.492M1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M2010.8 168.462L2010.8 168.463C2009.52 171.322 2008.45 176.386 2007.62 182.146C2006.75 188.119 2006.05 195.449 2005.71 203.232C2005.03 218.574 2005.68 236.346 2009.47 249.029C2010.38 253.035 2010.89 260.159 2010.89 264.685V429.323C2010.89 443.107 2012.09 453.777 2014.02 461.169C2014.98 464.834 2016.18 467.976 2017.71 470.328C2019.11 472.496 2021.57 475.161 2025.31 475.228C2029.09 475.295 2031.63 472.653 2033.06 470.486C2034.6 468.152 2035.81 465.018 2036.77 461.364C2038.7 453.986 2039.9 443.27 2039.9 429.323V264.685C2039.9 259.632 2040.42 252.549 2041.3 249.089C2045.33 235.638 2046 218.131 2045.27 203.04C2044.89 195.413 2044.15 188.261 2043.25 182.36C2042.36 176.588 2041.27 171.645 2040.07 168.65C2038.77 165.409 2036.07 163.475 2033.53 162.408C2030.97 161.329 2028.08 160.902 2025.37 160.937C2022.65 160.972 2019.8 161.475 2017.29 162.543C2014.86 163.579 2012.17 165.41 2010.8 168.462Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("ellipse",{cx:"2025.62",cy:"214.096",rx:"7.92068",ry:"37.0379",fill:"white",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1791.99 221.788L1788.33 222.804V226.606V232.719C1788.33 232.769 1788.33 232.825 1788.33 232.887C1788.32 233.919 1788.29 236.495 1790.46 238.694C1791.21 239.524 1791.48 240.125 1791.64 240.762C1791.85 241.621 1791.93 242.759 1791.93 244.945V284.86C1791.93 286.13 1792.36 287.116 1792.61 287.599C1792.89 288.163 1793.23 288.645 1793.52 289.019C1794.11 289.774 1794.83 290.486 1795.53 291.096C1796.82 292.227 1798.73 293.597 1800.7 294.263L1813.96 298.918C1814.62 299.159 1815.05 299.358 1815.32 299.506C1815.32 299.536 1815.32 299.569 1815.32 299.603V468.972C1815.32 474.332 1817.66 478.518 1821.95 480.608C1825.73 482.449 1830.13 482.212 1833.73 481.338C1837.45 480.437 1841.17 478.663 1844.06 476.392C1846.71 474.311 1849.79 470.885 1849.79 466.455V234.157V229.947L1845.64 229.23L1827.16 226.034C1827.15 226.029 1827.14 226.022 1827.13 226.013C1827.07 225.979 1826.97 225.902 1826.82 225.743C1826.51 225.401 1826.13 224.824 1825.75 223.952C1824.99 222.241 1824.55 220.267 1824.18 218.572L1824.12 218.328L1822.98 213.187L1817.9 214.596L1791.99 221.788Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1849.13 221.823L1852.67 222.904V226.606V232.719C1852.67 232.769 1852.67 232.825 1852.67 232.887C1852.68 233.919 1852.71 236.495 1850.54 238.694C1849.79 239.524 1849.52 240.125 1849.36 240.762C1849.15 241.621 1849.07 242.759 1849.07 244.945V284.86C1849.07 286.13 1848.64 287.116 1848.39 287.599C1848.11 288.163 1847.77 288.645 1847.48 289.019C1846.89 289.774 1846.17 290.486 1845.47 291.096C1844.17 292.236 1842.24 293.618 1840.25 294.278L1826.29 298.931C1825.65 299.166 1825.23 299.361 1824.96 299.506C1824.96 299.536 1824.96 299.569 1824.96 299.603V468.972C1824.96 474.332 1822.62 478.518 1818.33 480.608C1814.55 482.449 1810.15 482.212 1806.55 481.338C1802.83 480.437 1799.11 478.663 1796.22 476.392C1793.57 474.311 1790.49 470.885 1790.49 466.455V234.157V229.976L1794.6 229.236L1812.56 226.006C1812.57 226.005 1812.57 226.005 1812.57 226.004C1813.26 225.871 1814.03 225.394 1814.9 223.649C1815.68 222.097 1816.14 220.364 1816.64 218.5C1816.73 218.131 1816.83 217.757 1816.94 217.378L1818.29 212.408L1823.22 213.912L1849.13 221.823Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsxs("mask",{id:"path-18-outside-1_401_299",maskUnits:"userSpaceOnUse",x:"1675",y:"3.97754",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1675",y:"3.97754",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.68 53.281L1830.29 50.5064L1830.68 51.8659V53.281H1820.68ZM1685 97.8707H1675V97.5818L1675.02 97.2934L1685 97.8707ZM1776.41 176.982L1774.82 167.109L1774.82 167.109L1776.41 176.982ZM1793.33 184.533L1803.32 184.079L1803.33 184.306V184.533H1793.33ZM1793.33 226.606H1803.33V227.508L1803.17 228.396L1793.33 226.606ZM1713.43 116.21L1722.94 113.125L1722.94 113.125L1713.43 116.21ZM1750.86 42.4931L1753.33 52.1827L1753.33 52.1827L1750.86 42.4931ZM1830.68 53.281V220.492H1810.68V53.281H1830.68ZM1675.02 97.2934C1677.63 52.1549 1709.6 19.7858 1743.65 8.62785C1760.75 3.02685 1779.14 2.49859 1795.16 9.14055C1811.49 15.9125 1824.28 29.7202 1830.29 50.5064L1811.07 56.0556C1806.64 40.7025 1797.84 31.9008 1787.5 27.6152C1776.85 23.1996 1763.51 23.1658 1749.88 27.6334C1722.48 36.6128 1697.05 62.6778 1694.98 98.448L1675.02 97.2934ZM1778.01 186.854C1725.05 195.401 1675 152.845 1675 97.8707H1695C1695 140.707 1734.2 173.665 1774.82 167.109L1778.01 186.854ZM1783.34 184.987C1783.29 183.96 1783.12 184.11 1783.48 184.734C1783.96 185.573 1784.72 186.125 1785.24 186.339C1785.53 186.455 1785.24 186.267 1783.85 186.265C1782.51 186.263 1780.62 186.432 1778.01 186.854L1774.82 167.109C1780.53 166.188 1787.25 165.532 1792.87 167.848C1796.13 169.194 1798.94 171.487 1800.82 174.774C1802.59 177.847 1803.18 181.151 1803.32 184.079L1783.34 184.987ZM1783.33 226.606V184.533H1803.33V226.606H1783.33ZM1830.68 220.492C1830.68 226.064 1826.77 229.266 1825.56 230.197C1823.81 231.533 1821.83 232.501 1820.18 233.195C1816.76 234.632 1812.6 235.781 1808.77 236.577C1804.95 237.369 1800.81 237.946 1797.39 237.976C1795.85 237.99 1793.52 237.916 1791.27 237.201C1790.18 236.855 1788.07 236.044 1786.23 234.09C1783.96 231.676 1782.86 228.284 1783.49 224.815L1803.17 228.396C1803.4 227.12 1803.39 225.615 1802.91 224.05C1802.44 222.495 1801.63 221.275 1800.8 220.391C1799.3 218.79 1797.71 218.264 1797.32 218.14C1796.47 217.869 1796.22 217.986 1797.21 217.977C1798.85 217.963 1801.59 217.64 1804.7 216.994C1807.8 216.352 1810.61 215.523 1812.43 214.757C1813.4 214.35 1813.6 214.16 1813.39 214.322C1813.28 214.411 1812.73 214.834 1812.16 215.665C1811.56 216.527 1810.68 218.192 1810.68 220.492H1830.68ZM1787.65 133.111V69.8224H1807.65V133.111H1787.65ZM1722.94 113.125C1729.14 132.216 1746.21 142.24 1762.43 144.081C1770.55 145.002 1777.48 143.729 1781.95 141.35C1786.09 139.144 1787.65 136.407 1787.65 133.111H1807.65C1807.65 145.277 1800.6 154.079 1791.35 159.003C1782.43 163.755 1771.19 165.203 1760.17 163.953C1738.13 161.452 1713.09 147.563 1703.92 119.295L1722.94 113.125ZM1753.33 52.1827C1746 54.0533 1735.47 61.028 1728.22 72.1723C1721.23 82.9298 1717.7 96.9579 1722.94 113.125L1703.92 119.295C1696.57 96.6259 1701.64 76.3753 1711.45 61.2732C1721.02 46.558 1735.5 36.0923 1748.39 32.8034L1753.33 52.1827ZM1787.65 69.8224C1787.65 61.6117 1784.25 56.5493 1779.22 53.6691C1773.75 50.5313 1764.9 49.2314 1753.33 52.1827L1748.39 32.8034C1763.33 28.9921 1777.88 29.8497 1789.16 36.3137C1800.9 43.0353 1807.65 55.0188 1807.65 69.8224H1787.65Z",fill:"#202020",mask:"url(#path-18-outside-1_401_299)"}),U.jsxs("mask",{id:"path-20-outside-2_401_299",maskUnits:"userSpaceOnUse",x:"1810",y:"3.68457",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1810",y:"3.68457",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.32 52.9881L1810.71 50.2135L1810.32 51.573V52.9881H1820.32ZM1956 97.5778H1966V97.2889L1965.98 97.0005L1956 97.5778ZM1864.59 176.689L1866.18 166.816L1866.18 166.816L1864.59 176.689ZM1847.67 184.24L1837.68 183.786L1837.67 184.013V184.24H1847.67ZM1847.67 226.313H1837.67V227.215L1837.83 228.103L1847.67 226.313ZM1927.57 115.917L1937.08 119.002L1937.08 119.002L1927.57 115.917ZM1890.14 42.2001L1892.61 32.5104L1892.61 32.5104L1890.14 42.2001ZM1810.32 52.9881V220.2H1830.32V52.9881H1810.32ZM1965.98 97.0005C1963.37 51.862 1931.4 19.4928 1897.35 8.33489C1880.25 2.7339 1861.86 2.20564 1845.84 8.8476C1829.51 15.6195 1816.72 29.4273 1810.71 50.2135L1829.93 55.7626C1834.36 40.4096 1843.16 31.6078 1853.5 27.3222C1864.15 22.9066 1877.49 22.8728 1891.12 27.3405C1918.52 36.3198 1943.95 62.3848 1946.02 98.1551L1965.98 97.0005ZM1862.99 186.561C1915.95 195.108 1966 152.552 1966 97.5778H1946C1946 140.414 1906.8 173.372 1866.18 166.816L1862.99 186.561ZM1857.66 184.695C1857.71 183.667 1857.88 183.817 1857.52 184.441C1857.04 185.28 1856.28 185.832 1855.76 186.046C1855.47 186.162 1855.76 185.974 1857.15 185.972C1858.49 185.97 1860.38 186.139 1862.99 186.561L1866.18 166.816C1860.47 165.895 1853.75 165.239 1848.13 167.555C1844.87 168.901 1842.06 171.194 1840.18 174.481C1838.41 177.554 1837.82 180.858 1837.68 183.786L1857.66 184.695ZM1857.67 226.313V184.24H1837.67V226.313H1857.67ZM1810.32 220.2C1810.32 225.771 1814.23 228.973 1815.44 229.904C1817.19 231.24 1819.17 232.208 1820.82 232.902C1824.24 234.339 1828.4 235.488 1832.23 236.284C1836.05 237.076 1840.19 237.653 1843.61 237.683C1845.15 237.697 1847.48 237.623 1849.73 236.908C1850.82 236.562 1852.93 235.751 1854.77 233.797C1857.04 231.383 1858.14 227.991 1857.51 224.522L1837.83 228.103C1837.6 226.827 1837.61 225.322 1838.09 223.758C1838.56 222.202 1839.37 220.982 1840.2 220.098C1841.7 218.497 1843.29 217.971 1843.68 217.847C1844.53 217.576 1844.78 217.693 1843.79 217.684C1842.15 217.67 1839.41 217.348 1836.3 216.701C1833.2 216.059 1830.39 215.23 1828.57 214.464C1827.6 214.057 1827.4 213.867 1827.61 214.029C1827.72 214.118 1828.27 214.541 1828.84 215.372C1829.44 216.235 1830.32 217.899 1830.32 220.2H1810.32ZM1853.35 132.818V69.5294H1833.35V132.818H1853.35ZM1918.06 112.832C1911.86 131.923 1894.79 141.947 1878.57 143.788C1870.45 144.709 1863.52 143.436 1859.05 141.057C1854.91 138.851 1853.35 136.114 1853.35 132.818H1833.35C1833.35 144.984 1840.4 153.786 1849.65 158.71C1858.57 163.462 1869.81 164.91 1880.83 163.66C1902.87 161.159 1927.91 147.27 1937.08 119.002L1918.06 112.832ZM1887.67 51.8898C1895 53.7603 1905.53 60.735 1912.78 71.8794C1919.77 82.6368 1923.3 96.6649 1918.06 112.832L1937.08 119.002C1944.43 96.333 1939.36 76.0823 1929.55 60.9802C1919.98 46.265 1905.5 35.7993 1892.61 32.5104L1887.67 51.8898ZM1853.35 69.5294C1853.35 61.3188 1856.75 56.2563 1861.78 53.3761C1867.25 50.2384 1876.1 48.9384 1887.67 51.8898L1892.61 32.5104C1877.67 28.6991 1863.12 29.5567 1851.84 36.0208C1840.1 42.7423 1833.35 54.7259 1833.35 69.5294H1853.35Z",fill:"#202020",mask:"url(#path-20-outside-2_401_299)"}),U.jsx("path",{d:"M1821.76 250.733C1831.67 250.733 1839.72 258.764 1839.72 268.679C1839.72 278.594 1831.67 286.624 1821.76 286.624C1811.85 286.624 1803.8 278.594 1803.8 268.679C1803.8 258.764 1811.85 250.733 1821.76 250.733Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("rect",{x:"2220",y:"425",width:"81",height:"52",fill:"white"}),U.jsx("path",{d:"M2275.31 361.418L2264.36 307.631C2262.84 300.16 2252.16 300.16 2250.64 307.631L2239.69 361.418L2197.61 376.406C2191.41 378.615 2191.41 387.385 2197.61 389.594L2239.69 404.582L2250.64 458.369C2252.16 465.84 2262.84 465.84 2264.36 458.369L2275.31 404.582L2317.39 389.594C2323.59 387.385 2323.59 378.615 2317.39 376.406L2275.31 361.418Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M625.293 355.198L628.599 358.113L631.906 355.198C637.183 350.545 644.15 347.967 651.639 347.967C667.478 347.967 680.539 360.312 681.199 375.846V380.367C678.702 412.324 649.424 427.534 635.921 432.737L635.896 432.747L635.87 432.757C633.712 433.616 631.247 434.007 628.599 434.007C625.951 434.007 623.486 433.616 621.328 432.757L621.302 432.747L621.277 432.737C607.774 427.534 578.496 412.324 575.999 380.367V375.846C576.66 360.312 589.72 347.967 605.559 347.967C613.048 347.967 620.015 350.545 625.293 355.198Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"})]}),U.jsx("defs",{children:U.jsx("clipPath",{id:"clip0_401_299",children:U.jsx("rect",{width:"2594",height:"490",fill:"white"})})})]}),DQ=({fill:A="currentcolor",size:e=20})=>U.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:U.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})});var ge=function(){return ge=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ge.apply(this,arguments)};function ns(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}var hA="-ms-",xo="-moz-",oA="-webkit-",gB="comm",Ps="rule",zd="decl",KQ="@import",pB="@keyframes",MQ="@layer",hB=Math.abs,Wd=String.fromCharCode,pu=Object.assign;function TQ(A,e){return jA(A,0)^45?(((e<<2^jA(A,0))<<2^jA(A,1))<<2^jA(A,2))<<2^jA(A,3):0}function BB(A){return A.trim()}function Qt(A,e){return(A=e.exec(A))?A[0]:A}function Z(A,e,t){return A.replace(e,t)}function wa(A,e,t){return A.indexOf(e,t)}function jA(A,e){return A.charCodeAt(e)|0}function Hn(A,e,t){return A.slice(e,t)}function ct(A){return A.length}function vB(A){return A.length}function io(A,e){return e.push(A),A}function NQ(A,e){return A.map(e).join("")}function lg(A,e){return A.filter(function(t){return!Qt(t,e)})}var Gs=1,kn=1,wB=0,Ge=0,SA=0,_n="";function js(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:Gs,column:kn,length:i,return:"",siblings:a}}function Mt(A,e){return pu(js("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Nr(A){for(;A.root;)A=Mt(A.root,{children:[A]});io(A,A.siblings)}function _Q(){return SA}function OQ(){return SA=Ge>0?jA(_n,--Ge):0,kn--,SA===10&&(kn=1,Gs--),SA}function et(){return SA=Ge<wB?jA(_n,Ge++):0,kn++,SA===10&&(kn=1,Gs++),SA}function Ur(){return jA(_n,Ge)}function ma(){return Ge}function zs(A,e){return Hn(_n,A,e)}function hu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RQ(A){return Gs=kn=1,wB=ct(_n=A),Ge=0,[]}function VQ(A){return _n="",A}function Rl(A){return BB(zs(Ge-1,Bu(A===91?A+2:A===40?A+1:A)))}function PQ(A){for(;(SA=Ur())&&SA<33;)et();return hu(A)>2||hu(SA)>3?"":" "}function GQ(A,e){for(;--e&&et()&&!(SA<48||SA>102||SA>57&&SA<65||SA>70&&SA<97););return zs(A,ma()+(e<6&&Ur()==32&&et()==32))}function Bu(A){for(;et();)switch(SA){case A:return Ge;case 34:case 39:A!==34&&A!==39&&Bu(SA);break;case 40:A===41&&Bu(A);break;case 92:et();break}return Ge}function jQ(A,e){for(;et()&&A+SA!==57;)if(A+SA===84&&Ur()===47)break;return"/*"+zs(e,Ge-1)+"*"+Wd(A===47?A:et())}function zQ(A){for(;!hu(Ur());)et();return zs(A,Ge)}function WQ(A){return VQ(Ca("",null,null,null,[""],A=RQ(A),0,[0],A))}function Ca(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,d=0,p=0,v=0,w=1,x=1,g=1,f=0,h="",C=n,F=o,m=r,Q=h;x;)switch(v=f,f=et()){case 40:if(v!=108&&jA(Q,u-1)==58){wa(Q+=Z(Rl(f),"&","&\f"),"&\f",hB(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=Rl(f);break;case 9:case 10:case 13:case 32:Q+=PQ(v);break;case 92:Q+=GQ(ma()-1,7);continue;case 47:switch(Ur()){case 42:case 47:io($Q(jQ(et(),ma()),e,t,s),s);break;default:Q+="/"}break;case 123*w:a[l++]=ct(Q)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:x=0;case 59+c:g==-1&&(Q=Z(Q,/\f/g,"")),p>0&&ct(Q)-u&&io(p>32?ug(Q+";",r,t,u-1,s):ug(Z(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(io(m=cg(Q,e,t,l,c,n,a,h,C=[],F=[],u,o),o),f===123)if(c===0)Ca(Q,e,m,m,C,o,u,a,F);else switch(d===99&&jA(Q,3)===110?100:d){case 100:case 108:case 109:case 115:Ca(A,m,m,r&&io(cg(A,m,m,0,0,n,a,h,n,C=[],u,F),F),n,F,u,a,r?C:F);break;default:Ca(Q,m,m,m,[""],F,0,a,F)}}l=c=p=0,w=g=1,h=Q="",u=i;break;case 58:u=1+ct(Q),p=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&OQ()==125)continue}switch(Q+=Wd(f),f*w){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(ct(Q)-1)*g,g=1;break;case 64:Ur()===45&&(Q+=Rl(et())),d=Ur(),c=u=ct(h=Q+=zQ(ma())),f++;break;case 45:v===45&&ct(Q)==2&&(w=0)}}return o}function cg(A,e,t,r,n,o,i,a,s,l,c,u){for(var d=n-1,p=n===0?o:[""],v=vB(p),w=0,x=0,g=0;w<r;++w)for(var f=0,h=Hn(A,d+1,d=hB(x=i[w])),C=A;f<v;++f)(C=BB(x>0?p[f]+" "+h:Z(h,/&\f/g,p[f])))&&(s[g++]=C);return js(A,e,t,n===0?Ps:a,s,l,c,u)}function $Q(A,e,t,r){return js(A,e,t,gB,Wd(_Q()),Hn(A,2,-2),0,r)}function ug(A,e,t,r,n){return js(A,e,t,zd,Hn(A,0,r),Hn(A,r+1,-1),r,n)}function mB(A,e,t){switch(TQ(A,e)){case 5103:return oA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oA+A+A;case 4789:return xo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return oA+A+xo+A+hA+A+A;case 5936:switch(jA(A,e+11)){case 114:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return oA+A+hA+Z(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return oA+A+hA+A+A;case 6165:return oA+A+hA+"flex-"+A+A;case 5187:return oA+A+Z(A,/(\w+).+(:[^]+)/,oA+"box-$1$2"+hA+"flex-$1$2")+A;case 5443:return oA+A+hA+"flex-item-"+Z(A,/flex-|-self/g,"")+(Qt(A,/flex-|baseline/)?"":hA+"grid-row-"+Z(A,/flex-|-self/g,""))+A;case 4675:return oA+A+hA+"flex-line-pack"+Z(A,/align-content|flex-|-self/g,"")+A;case 5548:return oA+A+hA+Z(A,"shrink","negative")+A;case 5292:return oA+A+hA+Z(A,"basis","preferred-size")+A;case 6060:return oA+"box-"+Z(A,"-grow","")+oA+A+hA+Z(A,"grow","positive")+A;case 4554:return oA+Z(A,/([^-])(transform)/g,"$1"+oA+"$2")+A;case 6187:return Z(Z(Z(A,/(zoom-|grab)/,oA+"$1"),/(image-set)/,oA+"$1"),A,"")+A;case 5495:case 3959:return Z(A,/(image-set\([^]*)/,oA+"$1$`$1");case 4968:return Z(Z(A,/(.+:)(flex-)?(.*)/,oA+"box-pack:$3"+hA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oA+A+A;case 4200:if(!Qt(A,/flex-|baseline/))return hA+"grid-column-align"+Hn(A,e)+A;break;case 2592:case 3360:return hA+Z(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,Qt(r.props,/grid-\w+-end/)})?~wa(A+(t=t[e].value),"span",0)?A:hA+Z(A,"-start","")+A+hA+"grid-row-span:"+(~wa(t,"span",0)?Qt(t,/\d+/):+Qt(t,/\d+/)-+Qt(A,/\d+/))+";":hA+Z(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return Qt(r.props,/grid-\w+-start/)})?A:hA+Z(Z(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return Z(A,/(.+)-inline(.+)/,oA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ct(A)-1-e>6)switch(jA(A,e+1)){case 109:if(jA(A,e+4)!==45)break;case 102:return Z(A,/(.+:)(.+)-([^]+)/,"$1"+oA+"$2-$3$1"+xo+(jA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~wa(A,"stretch",0)?mB(Z(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return Z(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return hA+n+":"+o+l+(i?hA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if(jA(A,e+6)===121)return Z(A,":",":"+oA)+A;break;case 6444:switch(jA(A,jA(A,14)===45?18:11)){case 120:return Z(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oA+(jA(A,14)===45?"inline-":"")+"box$3$1"+oA+"$2$3$1"+hA+"$2box$3")+A;case 100:return Z(A,":",":"+hA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(A,"scroll-","scroll-snap-")+A}return A}function os(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function XQ(A,e,t,r){switch(A.type){case MQ:if(A.children.length)break;case KQ:case zd:return A.return=A.return||A.value;case gB:return"";case pB:return A.return=A.value+"{"+os(A.children,r)+"}";case Ps:if(!ct(A.value=A.props.join(",")))return""}return ct(t=os(A.children,r))?A.return=A.value+"{"+t+"}":""}function JQ(A){var e=vB(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function YQ(A){return function(e){e.root||(e=e.return)&&A(e)}}function ZQ(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case zd:A.return=mB(A.value,A.length,t);return;case pB:return os([Mt(A,{value:Z(A.value,"@","@"+oA)})],r);case Ps:if(A.length)return NQ(t=A.props,function(n){switch(Qt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nr(Mt(A,{props:[Z(n,/:(read-\w+)/,":"+xo+"$1")]})),Nr(Mt(A,{props:[n]})),pu(A,{props:lg(t,r)});break;case"::placeholder":Nr(Mt(A,{props:[Z(n,/:(plac\w+)/,":"+oA+"input-$1")]})),Nr(Mt(A,{props:[Z(n,/:(plac\w+)/,":"+xo+"$1")]})),Nr(Mt(A,{props:[Z(n,/:(plac\w+)/,hA+"input-$1")]})),Nr(Mt(A,{props:[n]})),pu(A,{props:lg(t,r)});break}return""})}}var qQ={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},In=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",CB="active",QB="data-styled-version",Ws="6.1.12",$d=`/*!sc*/
`,is=typeof window<"u"&&"HTMLElement"in window,A8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),$s=Object.freeze([]),Ln=Object.freeze({});function e8(A,e,t){return t===void 0&&(t=Ln),A.theme!==t.theme&&A.theme||e||t.theme}var yB=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),t8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r8=/(^-|-$)/g;function dg(A){return A.replace(t8,"-").replace(r8,"")}var n8=/(a)(d)/gi,Hi=52,fg=function(A){return String.fromCharCode(A+(A>25?39:97))};function vu(A){var e,t="";for(e=Math.abs(A);e>Hi;e=e/Hi|0)t=fg(e%Hi)+t;return(fg(e%Hi)+t).replace(n8,"$1-$2")}var Vl,FB=5381,an=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},UB=function(A){return an(FB,A)};function o8(A){return vu(UB(A)>>>0)}function i8(A){return A.displayName||A.name||"Component"}function Pl(A){return typeof A=="string"&&!0}var xB=typeof Symbol=="function"&&Symbol.for,EB=xB?Symbol.for("react.memo"):60115,a8=xB?Symbol.for("react.forward_ref"):60112,s8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c8=((Vl={})[a8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vl[EB]=bB,Vl);function gg(A){return("type"in(e=A)&&e.type.$$typeof)===EB?bB:"$$typeof"in A?c8[A.$$typeof]:s8;var e}var u8=Object.defineProperty,d8=Object.getOwnPropertyNames,pg=Object.getOwnPropertySymbols,f8=Object.getOwnPropertyDescriptor,g8=Object.getPrototypeOf,hg=Object.prototype;function HB(A,e,t){if(typeof e!="string"){if(hg){var r=g8(e);r&&r!==hg&&HB(A,r,t)}var n=d8(e);pg&&(n=n.concat(pg(e)));for(var o=gg(A),i=gg(e),a=0;a<n.length;++a){var s=n[a];if(!(s in l8||t&&t[s]||i&&s in i||o&&s in o)){var l=f8(e,s);try{u8(A,s,l)}catch{}}}}return A}function Sn(A){return typeof A=="function"}function Xd(A){return typeof A=="object"&&"styledComponentId"in A}function wr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Bg(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=A[r];return t}function Jo(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function wu(A,e,t){if(t===void 0&&(t=!1),!t&&!Jo(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=wu(A[r],e[r]);else if(Jo(e))for(var r in e)A[r]=wu(A[r],e[r]);return A}function Jd(A,e){Object.defineProperty(A,"toString",{value:e})}function ii(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var p8=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw ii(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat($d);return t},A}(),Qa=new Map,as=new Map,ya=1,ki=function(A){if(Qa.has(A))return Qa.get(A);for(;as.has(ya);)ya++;var e=ya++;return Qa.set(A,e),as.set(e,A),e},h8=function(A,e){ya=e+1,Qa.set(A,e),as.set(e,A)},B8="style[".concat(In,"][").concat(QB,'="').concat(Ws,'"]'),v8=new RegExp("^".concat(In,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),w8=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},m8=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split($d),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(v8);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(h8(c,l),w8(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},vg=function(A){for(var e=document.querySelectorAll(B8),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(In)!==CB&&(m8(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function C8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(In,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(In,CB),r.setAttribute(QB,Ws);var i=C8();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},Q8=function(){function A(e){this.element=kB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw ii(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),y8=function(){function A(e){this.element=kB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),F8=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),wg=is,U8={isServer:!is,useCSSOMInjection:!A8},IB=function(){function A(e,t,r){e===void 0&&(e=Ln),t===void 0&&(t={});var n=this;this.options=ge(ge({},U8),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&is&&wg&&(wg=!1,vg(this)),Jd(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var d=function(g){return as.get(g)}(u);if(d===void 0)return"continue";var p=o.names.get(d),v=i.getGroup(u);if(p===void 0||!p.size||v.length===0)return"continue";var w="".concat(In,".g").concat(u,'[id="').concat(d,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(v).concat(w,'{content:"').concat(x,'"}').concat($d)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return ki(e)},A.prototype.rehydrate=function(){!this.server&&is&&vg(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(ge(ge({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new F8(n):r?new Q8(n):new y8(n)}(this.options),new p8(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(ki(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(ki(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(ki(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),x8=/&/g,E8=/^\s*\/\/.*$/gm;function LB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=LB(t.children,e)),t})}function b8(A){var e,t,r,n=Ln,o=n.options,i=o===void 0?Ln:o,a=n.plugins,s=a===void 0?$s:a,l=function(d,p,v){return v.startsWith(t)&&v.endsWith(t)&&v.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Ps&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(x8,t).replace(r,l))}),i.prefix&&c.push(ZQ),c.push(XQ);var u=function(d,p,v,w){p===void 0&&(p=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=d.replace(E8,""),g=WQ(v||p?"".concat(v," ").concat(p," { ").concat(x," }"):x);i.namespace&&(g=LB(g,i.namespace));var f=[];return os(g,JQ(c.concat(YQ(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,p){return p.name||ii(15),an(d,p.name)},FB).toString():"",u}var H8=new IB,mu=b8(),SB=Oe.createContext({shouldForwardProp:void 0,styleSheet:H8,stylis:mu});SB.Consumer;Oe.createContext(void 0);function mg(){return L.useContext(SB)}var k8=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=mu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Jd(this,function(){throw ii(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=mu),this.name+e.hash},A}(),I8=function(A){return A>="A"&&A<="Z"};function Cg(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;I8(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var DB=function(A){return A==null||A===!1||A===""},KB=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!DB(o)&&(Array.isArray(o)&&o.isCss||Sn(o)?r.push("".concat(Cg(n),":"),o,";"):Jo(o)?r.push.apply(r,ns(ns(["".concat(n," {")],KB(o),!1),["}"],!1)):r.push("".concat(Cg(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in qQ||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function xr(A,e,t,r){if(DB(A))return[];if(Xd(A))return[".".concat(A.styledComponentId)];if(Sn(A)){if(!Sn(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return xr(n,e,t,r)}var o;return A instanceof k8?t?(A.inject(t,r),[A.getName(r)]):[A]:Jo(A)?KB(A):Array.isArray(A)?Array.prototype.concat.apply($s,A.map(function(i){return xr(i,e,t,r)})):[A.toString()]}function L8(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Sn(t)&&!Xd(t))return!1}return!0}var S8=UB(Ws),D8=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&L8(e),this.componentId=t,this.baseHash=an(S8,t),this.baseStyle=r,IB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=wr(n,this.staticRulesId);else{var o=Bg(xr(this.rules,e,t,r)),i=vu(an(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=wr(n,i),this.staticRulesId=i}else{for(var s=an(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=Bg(xr(u,e,t,r));s=an(s,d+c),l+=d}}if(l){var p=vu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=wr(n,p)}}return n},A}(),MB=Oe.createContext(void 0);MB.Consumer;var Gl={};function K8(A,e,t){var r=Xd(A),n=A,o=!Pl(A),i=e.attrs,a=i===void 0?$s:i,s=e.componentId,l=s===void 0?function(C,F){var m=typeof C!="string"?"sc":dg(C);Gl[m]=(Gl[m]||0)+1;var Q="".concat(m,"-").concat(o8(Ws+m+Gl[m]));return F?"".concat(F,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Pl(C)?"styled.".concat(C):"Styled(".concat(i8(C),")")}(A):c,d=e.displayName&&e.componentId?"".concat(dg(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;v=function(C,F){return w(C,F)&&x(C,F)}}else v=w}var g=new D8(t,d,r?n.componentStyle:void 0);function f(C,F){return function(m,Q,E){var H=m.attrs,D=m.componentStyle,q=m.defaultProps,X=m.foldedComponentIds,z=m.styledComponentId,S=m.target,G=Oe.useContext(MB),T=mg(),J=m.shouldForwardProp||T.shouldForwardProp,b=e8(Q,G,q)||Ln,k=function(rA,aA,fA){for(var OA,vA=ge(ge({},aA),{className:void 0,theme:fA}),ot=0;ot<rA.length;ot+=1){var ke=Sn(OA=rA[ot])?OA(vA):OA;for(var IA in ke)vA[IA]=IA==="className"?wr(vA[IA],ke[IA]):IA==="style"?ge(ge({},vA[IA]),ke[IA]):ke[IA]}return aA.className&&(vA.className=wr(vA.className,aA.className)),vA}(H,Q,b),R=k.as||S,j={};for(var W in k)k[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&k.theme===b||(W==="forwardedAs"?j.as=k.forwardedAs:J&&!J(W,R)||(j[W]=k[W]));var QA=function(rA,aA){var fA=mg(),OA=rA.generateAndInjectStyles(aA,fA.styleSheet,fA.stylis);return OA}(D,k),cA=wr(X,z);return QA&&(cA+=" "+QA),k.className&&(cA+=" "+k.className),j[Pl(R)&&!yB.has(R)?"class":"className"]=cA,j.ref=E,L.createElement(R,j)}(h,C,F)}f.displayName=u;var h=Oe.forwardRef(f);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=v,h.foldedComponentIds=r?wr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(F){for(var m=[],Q=1;Q<arguments.length;Q++)m[Q-1]=arguments[Q];for(var E=0,H=m;E<H.length;E++)wu(F,H[E],!0);return F}({},n.defaultProps,C):C}}),Jd(h,function(){return".".concat(h.styledComponentId)}),o&&HB(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Qg(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var yg=function(A){return Object.assign(A,{isCss:!0})};function M8(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Sn(A)||Jo(A))return yg(xr(Qg($s,ns([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?xr(r):yg(xr(Qg(r,e)))}function Cu(A,e,t){if(t===void 0&&(t=Ln),!e)throw ii(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,M8.apply(void 0,ns([n],o,!1)))};return r.attrs=function(n){return Cu(A,e,ge(ge({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Cu(A,e,ge(ge({},t),n))},r}var TB=function(A){return Cu(K8,A)},rt=TB;yB.forEach(function(A){rt[A]=TB(A)});const Fg=({data:A=[]})=>{var c;const[e,t]=L.useState(!0),[r,n]=L.useState("0"),[o,i]=L.useState("1"),[a,s]=L.useState(!1);L.useEffect(()=>{const u=new ResizeObserver(d=>{for(let p of d)p.contentRect.width<=800?s(!0):s(!1)});return u.observe(document.body),()=>{u.disconnect()}},[]);const l=L.useMemo(()=>A==null?void 0:A.filter(u=>u.cap_id===r)[0].contentMenuList.filter(u=>u.id===o)[0],[o,r,A]);return U.jsxs(Vs,{className:"flex-1 flex width-100",children:[U.jsxs(NB,{className:`relative ${e?"open":""}`,children:[U.jsx(jd,{data:A==null?void 0:A.map(u=>({key:u.cap_id,title:u.cap,dropData:u.contentMenuList.map(d=>({key:d.id,title:d.title})),open:!0})),direction:"column",active:r,onChange:u=>{n(u.key),i(`${Number(u.key)*10+1}`)},dropProps:{direction:"column",active:o},onDropChange:(u,d)=>{n(d.key),i(u.key)},theme:{activeBg:"var(--color-bg-3)",lineColor:"inherit"},className:"pt-24 height-100 border-right overflow-auto scrollbar-none"}),a&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx(MA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(xe,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(Fe,{title:l.title,type:"h2"}),U.jsxs("div",{className:"flex column gap-12",children:[l.des&&U.jsx(Fe,{title:l.des,type:"p"}),(c=l.imgList)==null?void 0:c.map(u=>U.jsxs(xe,{column:!0,gap:8,children:[U.jsx(Fe,{title:u.img_des,type:"p"}),U.jsx("img",{src:u.img_src,width:"100%"})]}))]})]})})]})},NB=rt.div`
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
`,jl=({url:A,className:e,imgClassName:t,imgStyle:r,style:n,ratio:o=1/1})=>{const i=L.useRef(null),[a,s]=L.useState(!0),[l,c]=L.useState(!1),u=()=>{setTimeout(()=>{s(!1)},300)},d=()=>{s(!1),c(!0)};return L.useEffect(()=>{const p=i.current;if(p)return p.complete&&s(!1),p==null||p.addEventListener("load",u),p==null||p.addEventListener("error",d),()=>{p==null||p.removeEventListener("load",u),p==null||p.removeEventListener("error",d)}},[]),U.jsxs("div",{className:`relative flex items-center justify-center ${a||l?"bg-gray radius-6 overflow-hidden":""} ${e}`,style:{aspectRatio:a||l?`${o}`:"auto",...n},children:[a&&U.jsx(uQ,{color:"var(--color-text-4)",size:28,style:{position:"absolute",transform:"translate(-50%,-50%)"}}),l?U.jsx(MA,{name:"error-fill",fill:"var(--color-red-03)"}):U.jsx("img",{src:A,alt:"",className:t,style:{zIndex:"1",...r}})]})},zl=({data:A=[]})=>{var s,l;const[e,t]=L.useState(!0),[r,n]=L.useState(!1),[o,i]=L.useState(1),a=L.useMemo(()=>A==null?void 0:A.filter(c=>c.id===o)[0],[o,A]);return L.useEffect(()=>{const c=new ResizeObserver(u=>{for(let d of u)d.contentRect.width<=800?n(!0):n(!1)});return c.observe(document.body),()=>{c.disconnect()}},[]),U.jsxs(Vs,{className:"flex-1 flex width-100",children:[U.jsxs(NB,{className:`relative ${e?"open":""}`,children:[U.jsx("div",{className:"height-100 width-100 overflow-auto pb-24",children:U.jsx("div",{className:"flex column gap-12 px-12 py-24 height-100 width-100",children:A==null?void 0:A.map((c,u)=>U.jsxs("div",{className:"flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer",style:{aspectRatio:1,flexShrink:0},onClick:()=>i(c.id),children:[U.jsx(jl,{url:c.img,className:"radius-8 overflow-hidden",imgStyle:{width:"64px"}}),U.jsx("div",{className:"fs-14 color-gray-3",children:c.title})]},c.id??u))})}),r&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx(MA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(xe,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(Fe,{title:a.title,type:"h2"}),U.jsxs(xe,{gap:12,className:"p-12 bg-gray radius-8",w:"100%",children:[a.img&&U.jsx(jl,{url:a.img,imgStyle:{width:"100%"},className:"width-50 radius-8 shrink-0"}),a.desc&&U.jsx("div",{className:"fs-12 color-gray-3",children:a.desc})]}),a.detail&&U.jsx("img",{src:a.detail,width:"100%"}),((s=a.detailList)==null?void 0:s.length)>0&&U.jsx("div",{className:"flex column gap-12",children:(l=a.detailList)==null?void 0:l.map(c=>U.jsxs(xe,{column:!0,gap:8,children:[c.desc&&U.jsx(Fe,{title:c.desc,type:"p"}),c.img&&U.jsx(jl,{url:c.img,imgStyle:{width:"100%"},className:"width-100 radius-8 overflow-hidden"})]}))})]})})]})};/*!
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
***************************************************************************** */var Qu=function(A,e){return Qu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Qu(A,e)};function nt(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Qu(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yu=function(){return yu=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},yu.apply(this,arguments)};function oe(A,e,t,r){function n(o){return o instanceof t?o:new t(function(i){i(o)})}return new(t||(t=Promise))(function(o,i){function a(c){try{l(r.next(c))}catch(u){i(u)}}function s(c){try{l(r.throw(c))}catch(u){i(u)}}function l(c){c.done?o(c.value):n(c.value).then(a,s)}l((r=r.apply(A,[])).next())})}function Ae(A,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],n=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ii(A,e,t){if(arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||e)}var Lt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),Xs=function(A,e){return Lt.fromClientRect(A,e.getBoundingClientRect())},T8=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new Lt(0,0,r,n)},Js=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},HA=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},Ug="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",N8=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Li=0;Li<Ug.length;Li++)N8[Ug.charCodeAt(Li)]=Li;var xg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ao=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Si=0;Si<xg.length;Si++)ao[xg.charCodeAt(Si)]=Si;var _8=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=ao[A.charCodeAt(r)],i=ao[A.charCodeAt(r+1)],a=ao[A.charCodeAt(r+2)],s=ao[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},O8=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},R8=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Er=5,Yd=11,Wl=2,V8=Yd-Er,_B=65536>>Er,P8=1<<Er,$l=P8-1,G8=1024>>Er,j8=_B+G8,z8=j8,W8=32,$8=z8+W8,X8=65536>>Yd,J8=1<<V8,Y8=J8-1,Eg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},Z8=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},q8=function(A,e){var t=_8(A),r=Array.isArray(t)?R8(t):new Uint32Array(t),n=Array.isArray(t)?O8(t):new Uint16Array(t),o=24,i=Eg(n,o/2,r[4]/2),a=r[5]===2?Eg(n,(o+r[4])/2):Z8(r,Math.ceil((o+r[4])/4));return new A5(r[0],r[1],r[2],r[3],i,a)},A5=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Er],t=(t<<Wl)+(e&$l),this.data[t];if(e<=65535)return t=this.index[_B+(e-55296>>Er)],t=(t<<Wl)+(e&$l),this.data[t];if(e<this.highStart)return t=$8-X8+(e>>Yd),t=this.index[t],t+=e>>Er&Y8,t=this.index[t],t=(t<<Wl)+(e&$l),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),bg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e5=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Di=0;Di<bg.length;Di++)e5[bg.charCodeAt(Di)]=Di;var t5="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Hg=50,r5=1,OB=2,RB=3,n5=4,o5=5,kg=7,VB=8,Ig=9,zt=10,Fu=11,Lg=12,Uu=13,i5=14,so=15,xu=16,Ki=17,Jn=18,a5=19,Sg=20,Eu=21,Yn=22,Xl=23,_r=24,we=25,lo=26,co=27,Or=28,s5=29,gr=30,l5=31,Mi=32,Ti=33,bu=34,Hu=35,ku=36,Yo=37,Iu=38,Fa=39,Ua=40,Jl=41,PB=42,c5=43,u5=[9001,65288],GB="!",eA="×",Ni="÷",Lu=q8(t5),vt=[gr,ku],Su=[r5,OB,RB,o5],jB=[zt,VB],Dg=[co,lo],d5=Su.concat(jB),Kg=[Iu,Fa,Ua,bu,Hu],f5=[so,Uu],g5=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(o,i){var a=Lu.get(o);if(a>Hg?(n.push(!0),a-=Hg):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(o)!==-1)return r.push(i),t.push(xu);if(a===n5||a===Fu){if(i===0)return r.push(i),t.push(gr);var s=t[i-1];return d5.indexOf(s)===-1?(r.push(r[i-1]),t.push(s)):(r.push(i),t.push(gr))}if(r.push(i),a===l5)return t.push(e==="strict"?Eu:Yo);if(a===PB||a===s5)return t.push(gr);if(a===c5)return o>=131072&&o<=196605||o>=196608&&o<=262141?t.push(Yo):t.push(gr);t.push(a)}),[r,t,n]},Yl=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var o=t;o<=r.length;){o++;var i=r[o];if(i===e)return!0;if(i!==zt)break}if(n===zt)for(var o=t;o>0;){o--;var a=r[o];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var s=t;s<=r.length;){s++;var i=r[s];if(i===e)return!0;if(i!==zt)break}if(a!==zt)break}return!1},Mg=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===zt)t--;else return r}return 0},p5=function(A,e,t,r,n){if(t[r]===0)return eA;var o=r-1;if(Array.isArray(n)&&n[o]===!0)return eA;var i=o-1,a=o+1,s=e[o],l=i>=0?e[i]:0,c=e[a];if(s===OB&&c===RB)return eA;if(Su.indexOf(s)!==-1)return GB;if(Su.indexOf(c)!==-1||jB.indexOf(c)!==-1)return eA;if(Mg(o,e)===VB)return Ni;if(Lu.get(A[o])===Fu||(s===Mi||s===Ti)&&Lu.get(A[a])===Fu||s===kg||c===kg||s===Ig||[zt,Uu,so].indexOf(s)===-1&&c===Ig||[Ki,Jn,a5,_r,Or].indexOf(c)!==-1||Mg(o,e)===Yn||Yl(Xl,Yn,o,e)||Yl([Ki,Jn],Eu,o,e)||Yl(Lg,Lg,o,e))return eA;if(s===zt)return Ni;if(s===Xl||c===Xl)return eA;if(c===xu||s===xu)return Ni;if([Uu,so,Eu].indexOf(c)!==-1||s===i5||l===ku&&f5.indexOf(s)!==-1||s===Or&&c===ku||c===Sg||vt.indexOf(c)!==-1&&s===we||vt.indexOf(s)!==-1&&c===we||s===co&&[Yo,Mi,Ti].indexOf(c)!==-1||[Yo,Mi,Ti].indexOf(s)!==-1&&c===lo||vt.indexOf(s)!==-1&&Dg.indexOf(c)!==-1||Dg.indexOf(s)!==-1&&vt.indexOf(c)!==-1||[co,lo].indexOf(s)!==-1&&(c===we||[Yn,so].indexOf(c)!==-1&&e[a+1]===we)||[Yn,so].indexOf(s)!==-1&&c===we||s===we&&[we,Or,_r].indexOf(c)!==-1)return eA;if([we,Or,_r,Ki,Jn].indexOf(c)!==-1)for(var u=o;u>=0;){var d=e[u];if(d===we)return eA;if([Or,_r].indexOf(d)!==-1)u--;else break}if([co,lo].indexOf(c)!==-1)for(var u=[Ki,Jn].indexOf(s)!==-1?i:o;u>=0;){var d=e[u];if(d===we)return eA;if([Or,_r].indexOf(d)!==-1)u--;else break}if(Iu===s&&[Iu,Fa,bu,Hu].indexOf(c)!==-1||[Fa,bu].indexOf(s)!==-1&&[Fa,Ua].indexOf(c)!==-1||[Ua,Hu].indexOf(s)!==-1&&c===Ua||Kg.indexOf(s)!==-1&&[Sg,lo].indexOf(c)!==-1||Kg.indexOf(c)!==-1&&s===co||vt.indexOf(s)!==-1&&vt.indexOf(c)!==-1||s===_r&&vt.indexOf(c)!==-1||vt.concat(we).indexOf(s)!==-1&&c===Yn&&u5.indexOf(A[a])===-1||vt.concat(we).indexOf(c)!==-1&&s===Jn)return eA;if(s===Jl&&c===Jl){for(var p=t[o],v=1;p>0&&(p--,e[p]===Jl);)v++;if(v%2!==0)return eA}return s===Mi&&c===Ti?eA:Ni},h5=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=g5(A,e.lineBreak),r=t[0],n=t[1],o=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[we,gr,PB].indexOf(a)!==-1?Yo:a}));var i=e.wordBreak==="keep-all"?o.map(function(a,s){return a&&A[s]>=19968&&A[s]<=40959}):void 0;return[r,n,i]},B5=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===GB,this.start=r,this.end=n}return A.prototype.slice=function(){return HA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),v5=function(A,e){var t=Js(A),r=h5(t,e),n=r[0],o=r[1],i=r[2],a=t.length,s=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=eA;l<a&&(c=p5(t,o,n,++l,i))===eA;);if(c!==eA||l===a){var u=new B5(t,c,s,l);return s=l,{value:u,done:!1}}return{done:!0,value:null}}}},w5=1,m5=2,ai=4,Tg=8,ss=10,Ng=47,Eo=92,C5=9,Q5=32,_i=34,Zn=61,y5=35,F5=36,U5=37,Oi=39,Ri=40,qn=41,x5=95,ue=45,E5=33,b5=60,H5=62,k5=64,I5=91,L5=93,S5=61,D5=123,Vi=63,K5=125,_g=124,M5=126,T5=128,Og=65533,Zl=42,mr=43,N5=44,_5=58,O5=59,Zo=46,R5=0,V5=8,P5=11,G5=14,j5=31,z5=127,at=-1,zB=48,WB=97,$B=101,W5=102,$5=117,X5=122,XB=65,JB=69,YB=70,J5=85,Y5=90,ee=function(A){return A>=zB&&A<=57},Z5=function(A){return A>=55296&&A<=57343},Rr=function(A){return ee(A)||A>=XB&&A<=YB||A>=WB&&A<=W5},q5=function(A){return A>=WB&&A<=X5},Ay=function(A){return A>=XB&&A<=Y5},ey=function(A){return q5(A)||Ay(A)},ty=function(A){return A>=T5},Pi=function(A){return A===ss||A===C5||A===Q5},ls=function(A){return ey(A)||ty(A)||A===x5},Rg=function(A){return ls(A)||ee(A)||A===ue},ry=function(A){return A>=R5&&A<=V5||A===P5||A>=G5&&A<=j5||A===z5},Rt=function(A,e){return A!==Eo?!1:e!==ss},Gi=function(A,e,t){return A===ue?ls(e)||Rt(e,t):ls(A)?!0:!!(A===Eo&&Rt(A,e))},ql=function(A,e,t){return A===mr||A===ue?ee(e)?!0:e===Zo&&ee(t):ee(A===Zo?e:A)},ny=function(A){var e=0,t=1;(A[e]===mr||A[e]===ue)&&(A[e]===ue&&(t=-1),e++);for(var r=[];ee(A[e]);)r.push(A[e++]);var n=r.length?parseInt(HA.apply(void 0,r),10):0;A[e]===Zo&&e++;for(var o=[];ee(A[e]);)o.push(A[e++]);var i=o.length,a=i?parseInt(HA.apply(void 0,o),10):0;(A[e]===JB||A[e]===$B)&&e++;var s=1;(A[e]===mr||A[e]===ue)&&(A[e]===ue&&(s=-1),e++);for(var l=[];ee(A[e]);)l.push(A[e++]);var c=l.length?parseInt(HA.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-i))*Math.pow(10,s*c)},oy={type:2},iy={type:3},ay={type:4},sy={type:13},ly={type:8},cy={type:21},uy={type:9},dy={type:10},fy={type:11},gy={type:12},py={type:14},ji={type:23},hy={type:1},By={type:25},vy={type:24},wy={type:26},my={type:27},Cy={type:28},Qy={type:29},yy={type:31},Du={type:32},ZB=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(Js(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Du;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case _i:return this.consumeStringToken(_i);case y5:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(Rg(t)||Rt(r,n)){var o=Gi(t,r,n)?m5:w5,i=this.consumeName();return{type:5,value:i,flags:o}}break;case F5:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),sy;break;case Oi:return this.consumeStringToken(Oi);case Ri:return oy;case qn:return iy;case Zl:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),py;break;case mr:if(ql(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case N5:return ay;case ue:var a=e,s=this.peekCodePoint(0),l=this.peekCodePoint(1);if(ql(a,s,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(Gi(a,s,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(s===ue&&l===H5)return this.consumeCodePoint(),this.consumeCodePoint(),vy;break;case Zo:if(ql(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Ng:if(this.peekCodePoint(0)===Zl)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===Zl&&(c=this.consumeCodePoint(),c===Ng))return this.consumeToken();if(c===at)return this.consumeToken()}break;case _5:return wy;case O5:return my;case b5:if(this.peekCodePoint(0)===E5&&this.peekCodePoint(1)===ue&&this.peekCodePoint(2)===ue)return this.consumeCodePoint(),this.consumeCodePoint(),By;break;case k5:var u=this.peekCodePoint(0),d=this.peekCodePoint(1),p=this.peekCodePoint(2);if(Gi(u,d,p)){var i=this.consumeName();return{type:7,value:i}}break;case I5:return Cy;case Eo:if(Rt(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case L5:return Qy;case S5:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),ly;break;case D5:return fy;case K5:return gy;case $5:case J5:var v=this.peekCodePoint(0),w=this.peekCodePoint(1);return v===mr&&(Rr(w)||w===Vi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case _g:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),uy;if(this.peekCodePoint(0)===_g)return this.consumeCodePoint(),cy;break;case M5:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),dy;break;case at:return Du}return Pi(e)?(this.consumeWhiteSpace(),yy):ee(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):ls(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:HA(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Rr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Vi&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(HA.apply(void 0,e.map(function(s){return s===Vi?zB:s})),16),o=parseInt(HA.apply(void 0,e.map(function(s){return s===Vi?YB:s})),16);return{type:30,start:n,end:o}}var i=parseInt(HA.apply(void 0,e),16);if(this.peekCodePoint(0)===ue&&Rr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Rr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var o=parseInt(HA.apply(void 0,a),16);return{type:30,start:i,end:o}}else return{type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Ri?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Ri?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===at)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Oi||t===_i){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===at||this.peekCodePoint(0)===qn)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),ji)}for(;;){var n=this.consumeCodePoint();if(n===at||n===qn)return{type:22,value:HA.apply(void 0,e)};if(Pi(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===at||this.peekCodePoint(0)===qn?(this.consumeCodePoint(),{type:22,value:HA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ji);if(n===_i||n===Oi||n===Ri||ry(n))return this.consumeBadUrlRemnants(),ji;if(n===Eo)if(Rt(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ji;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Pi(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===qn||e===at)return;Rt(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=HA.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===at||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===ss)return this._value.splice(0,r),hy;if(n===Eo){var o=this._value[r+1];o!==at&&o!==void 0&&(o===ss?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):Rt(n,o)&&(t+=this.consumeStringSlice(r),t+=HA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=ai,r=this.peekCodePoint(0);for((r===mr||r===ue)&&e.push(this.consumeCodePoint());ee(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===Zo&&ee(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Tg;ee(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var o=this.peekCodePoint(2);if((r===JB||r===$B)&&((n===mr||n===ue)&&ee(o)||ee(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=Tg;ee(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[ny(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),o=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Gi(n,o,i)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===U5?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Rr(e)){for(var t=HA(e);Rr(this.peekCodePoint(0))&&t.length<6;)t+=HA(this.consumeCodePoint());Pi(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||Z5(r)||r>1114111?Og:r}return e===at?Og:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(Rg(t))e+=HA(t);else if(Rt(t,this.peekCodePoint(0)))e+=HA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),qB=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new ZB;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||Uy(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Du:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),si=function(A){return A.type===15},On=function(A){return A.type===17},lA=function(A){return A.type===20},Fy=function(A){return A.type===0},Ku=function(A,e){return lA(A)&&A.value===e},A4=function(A){return A.type!==31},Dn=function(A){return A.type!==31&&A.type!==4},pt=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},Uy=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},ar=function(A){return A.type===17||A.type===15},DA=function(A){return A.type===16||ar(A)},e4=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},XA={type:17,number:0,flags:ai},Zd={type:16,number:50,flags:ai},Wt={type:16,number:100,flags:ai},uo=function(A,e,t){var r=A[0],n=A[1];return[uA(r,e),uA(typeof n<"u"?n:r,t)]},uA=function(A,e){if(A.type===16)return A.number/100*e;if(si(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},t4="deg",r4="grad",n4="rad",o4="turn",Ys={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case t4:return Math.PI*e.number/180;case r4:return Math.PI/200*e.number;case n4:return e.number;case o4:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},i4=function(A){return A.type===15&&(A.unit===t4||A.unit===r4||A.unit===n4||A.unit===o4)},a4=function(A){var e=A.filter(lA).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[XA,XA];case"to top":case"bottom":return Te(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[XA,Wt];case"to right":case"left":return Te(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Wt,Wt];case"to bottom":case"top":return Te(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Wt,XA];case"to left":case"right":return Te(270)}return 0},Te=function(A){return Math.PI*A/180},rr={name:"color",parse:function(A,e){if(e.type===18){var t=xy[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3);return $t(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3),i=e.value.substring(3,4);return $t(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),parseInt(i+i,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6);return $t(parseInt(r,16),parseInt(n,16),parseInt(o,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6),i=e.value.substring(6,8);return $t(parseInt(r,16),parseInt(n,16),parseInt(o,16),parseInt(i,16)/255)}}if(e.type===20){var a=Et[e.value.toUpperCase()];if(typeof a<"u")return a}return Et.TRANSPARENT}},nr=function(A){return(255&A)===0},VA=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},$t=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},Vg=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},Pg=function(A,e){var t=e.filter(Dn);if(t.length===3){var r=t.map(Vg),n=r[0],o=r[1],i=r[2];return $t(n,o,i,1)}if(t.length===4){var a=t.map(Vg),n=a[0],o=a[1],i=a[2],s=a[3];return $t(n,o,i,s)}return 0};function Ac(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var Gg=function(A,e){var t=e.filter(Dn),r=t[0],n=t[1],o=t[2],i=t[3],a=(r.type===17?Te(r.number):Ys.parse(A,r))/(Math.PI*2),s=DA(n)?n.number/100:0,l=DA(o)?o.number/100:0,c=typeof i<"u"&&DA(i)?uA(i,1):1;if(s===0)return $t(l*255,l*255,l*255,1);var u=l<=.5?l*(s+1):l+s-l*s,d=l*2-u,p=Ac(d,u,a+1/3),v=Ac(d,u,a),w=Ac(d,u,a-1/3);return $t(p*255,v*255,w*255,c)},xy={hsl:Gg,hsla:Gg,rgb:Pg,rgba:Pg},bo=function(A,e){return rr.parse(A,qB.create(e).parseComponentValue())},Et={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Ey={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(lA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},by={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Zs=function(A,e){var t=rr.parse(A,e[0]),r=e[1];return r&&DA(r)?{color:t,stop:r}:{color:t,stop:null}},jg=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=XA),r.stop===null&&(r.stop=Wt);for(var n=[],o=0,i=0;i<A.length;i++){var a=A[i].stop;if(a!==null){var s=uA(a,e);s>o?n.push(s):n.push(o),o=s}else n.push(null)}for(var l=null,i=0;i<n.length;i++){var c=n[i];if(c===null)l===null&&(l=i);else if(l!==null){for(var u=i-l,d=n[l-1],p=(c-d)/(u+1),v=1;v<=u;v++)n[l+v-1]=p*v;l=null}}return A.map(function(w,x){var g=w.color;return{color:g,stop:Math.max(Math.min(1,n[x]/e),0)}})},Hy=function(A,e,t){var r=e/2,n=t/2,o=uA(A[0],e)-r,i=n-uA(A[1],t);return(Math.atan2(i,o)+Math.PI*2)%(Math.PI*2)},ky=function(A,e,t){var r=typeof A=="number"?A:Hy(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),o=e/2,i=t/2,a=n/2,s=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,o-l,o+l,i-s,i+s]},We=function(A,e){return Math.sqrt(A*A+e*e)},zg=function(A,e,t,r,n){var o=[[0,0],[0,e],[A,0],[A,e]];return o.reduce(function(i,a){var s=a[0],l=a[1],c=We(t-s,r-l);return(n?c<i.optimumDistance:c>i.optimumDistance)?{optimumCorner:a,optimumDistance:c}:i},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},Iy=function(A,e,t,r,n){var o=0,i=0;switch(A.size){case 0:A.shape===0?o=i=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.min(Math.abs(e),Math.abs(e-r)),i=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)o=i=Math.min(We(e,t),We(e,t-n),We(e-r,t),We(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),s=zg(r,n,e,t,!0),l=s[0],c=s[1];o=We(l-e,(c-t)/a),i=a*o}break;case 1:A.shape===0?o=i=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.max(Math.abs(e),Math.abs(e-r)),i=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)o=i=Math.max(We(e,t),We(e,t-n),We(e-r,t),We(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),u=zg(r,n,e,t,!1),l=u[0],c=u[1];o=We(l-e,(c-t)/a),i=a*o}break}return Array.isArray(A.size)&&(o=uA(A.size[0],r),i=A.size.length===2?uA(A.size[1],n):o),[o,i]},Ly=function(A,e){var t=Te(180),r=[];return pt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&i.value==="to"){t=a4(n);return}else if(i4(i)){t=Ys.parse(A,i);return}}var a=Zs(A,n);r.push(a)}),{angle:t,stops:r,type:1}},zi=function(A,e){var t=Te(180),r=[];return pt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&["top","left","right","bottom"].indexOf(i.value)!==-1){t=a4(n);return}else if(i4(i)){t=(Ys.parse(A,i)+Te(270))%Te(360);return}}var a=Zs(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Sy=function(A,e){var t=Te(180),r=[],n=1,o=0,i=3,a=[];return pt(e).forEach(function(s,l){var c=s[0];if(l===0){if(lA(c)&&c.value==="linear"){n=1;return}else if(lA(c)&&c.value==="radial"){n=2;return}}if(c.type===18){if(c.name==="from"){var u=rr.parse(A,c.values[0]);r.push({stop:XA,color:u})}else if(c.name==="to"){var u=rr.parse(A,c.values[0]);r.push({stop:Wt,color:u})}else if(c.name==="color-stop"){var d=c.values.filter(Dn);if(d.length===2){var u=rr.parse(A,d[1]),p=d[0];On(p)&&r.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),n===1?{angle:(t+Te(180))%Te(360),stops:r,type:n}:{size:i,shape:o,stops:r,position:a,type:n}},s4="closest-side",l4="farthest-side",c4="closest-corner",u4="farthest-corner",d4="circle",f4="ellipse",g4="cover",p4="contain",Dy=function(A,e){var t=0,r=3,n=[],o=[];return pt(e).forEach(function(i,a){var s=!0;if(a===0){var l=!1;s=i.reduce(function(u,d){if(l)if(lA(d))switch(d.value){case"center":return o.push(Zd),u;case"top":case"left":return o.push(XA),u;case"right":case"bottom":return o.push(Wt),u}else(DA(d)||ar(d))&&o.push(d);else if(lA(d))switch(d.value){case d4:return t=0,!1;case f4:return t=1,!1;case"at":return l=!0,!1;case s4:return r=0,!1;case g4:case l4:return r=1,!1;case p4:case c4:return r=2,!1;case u4:return r=3,!1}else if(ar(d)||DA(d))return Array.isArray(r)||(r=[]),r.push(d),!1;return u},s)}if(s){var c=Zs(A,i);n.push(c)}}),{size:r,shape:t,stops:n,position:o,type:2}},Wi=function(A,e){var t=0,r=3,n=[],o=[];return pt(e).forEach(function(i,a){var s=!0;if(a===0?s=i.reduce(function(c,u){if(lA(u))switch(u.value){case"center":return o.push(Zd),!1;case"top":case"left":return o.push(XA),!1;case"right":case"bottom":return o.push(Wt),!1}else if(DA(u)||ar(u))return o.push(u),!1;return c},s):a===1&&(s=i.reduce(function(c,u){if(lA(u))switch(u.value){case d4:return t=0,!1;case f4:return t=1,!1;case p4:case s4:return r=0,!1;case l4:return r=1,!1;case c4:return r=2,!1;case g4:case u4:return r=3,!1}else if(ar(u)||DA(u))return Array.isArray(r)||(r=[]),r.push(u),!1;return c},s)),s){var l=Zs(A,i);n.push(l)}}),{size:r,shape:t,stops:n,position:o,type:2}},Ky=function(A){return A.type===1},My=function(A){return A.type===2},qd={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=h4[e.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function Ty(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!h4[A.name])}var h4={"linear-gradient":Ly,"-moz-linear-gradient":zi,"-ms-linear-gradient":zi,"-o-linear-gradient":zi,"-webkit-linear-gradient":zi,"radial-gradient":Dy,"-moz-radial-gradient":Wi,"-ms-radial-gradient":Wi,"-o-radial-gradient":Wi,"-webkit-radial-gradient":Wi,"-webkit-gradient":Sy},Ny={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return Dn(r)&&Ty(r)}).map(function(r){return qd.parse(A,r)})}},_y={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(lA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Oy={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return pt(e).map(function(t){return t.filter(DA)}).map(e4)}},Ry={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return pt(e).map(function(t){return t.filter(lA).map(function(r){return r.value}).join(" ")}).map(Vy)}},Vy=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},pn;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(pn||(pn={}));var Py={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return pt(e).map(function(t){return t.filter(Gy)})}},Gy=function(A){return lA(A)||DA(A)},qs=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},jy=qs("top"),zy=qs("right"),Wy=qs("bottom"),$y=qs("left"),Al=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return e4(t.filter(DA))}}},Xy=Al("top-left"),Jy=Al("top-right"),Yy=Al("bottom-right"),Zy=Al("bottom-left"),el=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},qy=el("top"),AF=el("right"),eF=el("bottom"),tF=el("left"),tl=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return si(t)?t.number:0}}},rF=tl("top"),nF=tl("right"),oF=tl("bottom"),iF=tl("left"),aF={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},sF={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},lF={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(lA).reduce(function(t,r){return t|cF(r.value)},0)}},cF=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},uF={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},dF={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},cs;(function(A){A.NORMAL="normal",A.STRICT="strict"})(cs||(cs={}));var fF={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return cs.STRICT;case"normal":default:return cs.NORMAL}}},gF={name:"line-height",initialValue:"normal",prefix:!1,type:4},Wg=function(A,e){return lA(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:DA(A)?uA(A,e):e},pF={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:qd.parse(A,e)}},hF={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Mu={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},rl=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},BF=rl("top"),vF=rl("right"),wF=rl("bottom"),mF=rl("left"),CF={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(lA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},QF={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},nl=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},yF=nl("top"),FF=nl("right"),UF=nl("bottom"),xF=nl("left"),EF={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},bF={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},HF={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Ku(e[0],"none")?[]:pt(e).map(function(t){for(var r={color:Et.TRANSPARENT,offsetX:XA,offsetY:XA,blur:XA},n=0,o=0;o<t.length;o++){var i=t[o];ar(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:r.blur=i,n++):r.color=rr.parse(A,i)}return r})}},kF={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},IF={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=DF[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},LF=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},SF=function(A){var e=A.filter(function(s){return s.type===17}).map(function(s){return s.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],o=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var i=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,o,i,a]:null},DF={matrix:LF,matrix3d:SF},$g={type:16,number:50,flags:ai},KF=[$g,$g],MF={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(DA);return t.length!==2?KF:[t[0],t[1]]}},TF={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Ho;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Ho||(Ho={}));var NF={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return Ho.BREAK_ALL;case"keep-all":return Ho.KEEP_ALL;case"normal":default:return Ho.NORMAL}}},_F={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(On(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},B4={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},OF={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return On(e)?e.number:1}},RF={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},VF={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(lA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},PF={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},GF={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},jF={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(On(e))return e.number;if(lA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},zF={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(lA).map(function(t){return t.value})}},WF={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},NA=function(A,e){return(A&e)!==0},$F={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},XF={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(A4),o=0;o<n.length;o++){var i=n[o],a=n[o+1];if(i.type===20){var s=a&&On(a)?a.number:1;r.push({counter:i.value,increment:s})}}return r}},JF={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(A4),n=0;n<r.length;n++){var o=r[n],i=r[n+1];if(lA(o)&&o.value!=="none"){var a=i&&On(i)?i.number:0;t.push({counter:o.value,reset:a})}}return t}},YF={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(si).map(function(t){return B4.parse(A,t)})}},ZF={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(Fy);if(n.length%2!==0)return null;for(var o=0;o<n.length;o+=2){var i=n[o].value,a=n[o+1].value;r.push({open:i,close:a})}return r}},Xg=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},qF={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Ku(e[0],"none")?[]:pt(e).map(function(t){for(var r={color:255,offsetX:XA,offsetY:XA,blur:XA,spread:XA,inset:!1},n=0,o=0;o<t.length;o++){var i=t[o];Ku(i,"inset")?r.inset=!0:ar(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:n===2?r.blur=i:r.spread=i,n++):r.color=rr.parse(A,i)}return r})}},A6={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(lA).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},e6={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},t6={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return si(e)?e.number:0}},r6=function(){function A(e,t){var r,n;this.animationDuration=O(e,YF,t.animationDuration),this.backgroundClip=O(e,Ey,t.backgroundClip),this.backgroundColor=O(e,by,t.backgroundColor),this.backgroundImage=O(e,Ny,t.backgroundImage),this.backgroundOrigin=O(e,_y,t.backgroundOrigin),this.backgroundPosition=O(e,Oy,t.backgroundPosition),this.backgroundRepeat=O(e,Ry,t.backgroundRepeat),this.backgroundSize=O(e,Py,t.backgroundSize),this.borderTopColor=O(e,jy,t.borderTopColor),this.borderRightColor=O(e,zy,t.borderRightColor),this.borderBottomColor=O(e,Wy,t.borderBottomColor),this.borderLeftColor=O(e,$y,t.borderLeftColor),this.borderTopLeftRadius=O(e,Xy,t.borderTopLeftRadius),this.borderTopRightRadius=O(e,Jy,t.borderTopRightRadius),this.borderBottomRightRadius=O(e,Yy,t.borderBottomRightRadius),this.borderBottomLeftRadius=O(e,Zy,t.borderBottomLeftRadius),this.borderTopStyle=O(e,qy,t.borderTopStyle),this.borderRightStyle=O(e,AF,t.borderRightStyle),this.borderBottomStyle=O(e,eF,t.borderBottomStyle),this.borderLeftStyle=O(e,tF,t.borderLeftStyle),this.borderTopWidth=O(e,rF,t.borderTopWidth),this.borderRightWidth=O(e,nF,t.borderRightWidth),this.borderBottomWidth=O(e,oF,t.borderBottomWidth),this.borderLeftWidth=O(e,iF,t.borderLeftWidth),this.boxShadow=O(e,qF,t.boxShadow),this.color=O(e,aF,t.color),this.direction=O(e,sF,t.direction),this.display=O(e,lF,t.display),this.float=O(e,uF,t.cssFloat),this.fontFamily=O(e,PF,t.fontFamily),this.fontSize=O(e,GF,t.fontSize),this.fontStyle=O(e,WF,t.fontStyle),this.fontVariant=O(e,zF,t.fontVariant),this.fontWeight=O(e,jF,t.fontWeight),this.letterSpacing=O(e,dF,t.letterSpacing),this.lineBreak=O(e,fF,t.lineBreak),this.lineHeight=O(e,gF,t.lineHeight),this.listStyleImage=O(e,pF,t.listStyleImage),this.listStylePosition=O(e,hF,t.listStylePosition),this.listStyleType=O(e,Mu,t.listStyleType),this.marginTop=O(e,BF,t.marginTop),this.marginRight=O(e,vF,t.marginRight),this.marginBottom=O(e,wF,t.marginBottom),this.marginLeft=O(e,mF,t.marginLeft),this.opacity=O(e,OF,t.opacity);var o=O(e,CF,t.overflow);this.overflowX=o[0],this.overflowY=o[o.length>1?1:0],this.overflowWrap=O(e,QF,t.overflowWrap),this.paddingTop=O(e,yF,t.paddingTop),this.paddingRight=O(e,FF,t.paddingRight),this.paddingBottom=O(e,UF,t.paddingBottom),this.paddingLeft=O(e,xF,t.paddingLeft),this.paintOrder=O(e,A6,t.paintOrder),this.position=O(e,bF,t.position),this.textAlign=O(e,EF,t.textAlign),this.textDecorationColor=O(e,RF,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=O(e,VF,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=O(e,HF,t.textShadow),this.textTransform=O(e,kF,t.textTransform),this.transform=O(e,IF,t.transform),this.transformOrigin=O(e,MF,t.transformOrigin),this.visibility=O(e,TF,t.visibility),this.webkitTextStrokeColor=O(e,e6,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=O(e,t6,t.webkitTextStrokeWidth),this.wordBreak=O(e,NF,t.wordBreak),this.zIndex=O(e,_F,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return nr(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return NA(this.display,4)||NA(this.display,33554432)||NA(this.display,268435456)||NA(this.display,536870912)||NA(this.display,67108864)||NA(this.display,134217728)},A}(),n6=function(){function A(e,t){this.content=O(e,$F,t.content),this.quotes=O(e,ZF,t.quotes)}return A}(),Jg=function(){function A(e,t){this.counterIncrement=O(e,XF,t.counterIncrement),this.counterReset=O(e,JF,t.counterReset)}return A}(),O=function(A,e,t){var r=new ZB,n=t!==null&&typeof t<"u"?t.toString():e.initialValue;r.write(n);var o=new qB(r.read());switch(e.type){case 2:var i=o.parseComponentValue();return e.parse(A,lA(i)?i.value:e.initialValue);case 0:return e.parse(A,o.parseComponentValue());case 1:return e.parse(A,o.parseComponentValues());case 4:return o.parseComponentValue();case 3:switch(e.format){case"angle":return Ys.parse(A,o.parseComponentValue());case"color":return rr.parse(A,o.parseComponentValue());case"image":return qd.parse(A,o.parseComponentValue());case"length":var a=o.parseComponentValue();return ar(a)?a:XA;case"length-percentage":var s=o.parseComponentValue();return DA(s)?s:XA;case"time":return B4.parse(A,o.parseComponentValue())}break}},o6="data-html2canvas-debug",i6=function(A){var e=A.getAttribute(o6);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Tu=function(A,e){var t=i6(A);return t===1||e===t},ht=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Tu(t,3))debugger;this.styles=new r6(e,window.getComputedStyle(t,null)),Ou(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Xs(this.context,t),Tu(t,4)&&(this.flags|=16)}return A}(),a6="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Yg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var $i=0;$i<Yg.length;$i++)fo[Yg.charCodeAt($i)]=$i;var s6=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=fo[A.charCodeAt(r)],i=fo[A.charCodeAt(r+1)],a=fo[A.charCodeAt(r+2)],s=fo[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},l6=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},c6=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},br=5,Af=11,ec=2,u6=Af-br,v4=65536>>br,d6=1<<br,tc=d6-1,f6=1024>>br,g6=v4+f6,p6=g6,h6=32,B6=p6+h6,v6=65536>>Af,w6=1<<u6,m6=w6-1,Zg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},C6=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},Q6=function(A,e){var t=s6(A),r=Array.isArray(t)?c6(t):new Uint32Array(t),n=Array.isArray(t)?l6(t):new Uint16Array(t),o=24,i=Zg(n,o/2,r[4]/2),a=r[5]===2?Zg(n,(o+r[4])/2):C6(r,Math.ceil((o+r[4])/4));return new y6(r[0],r[1],r[2],r[3],i,a)},y6=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>br],t=(t<<ec)+(e&tc),this.data[t];if(e<=65535)return t=this.index[v4+(e-55296>>br)],t=(t<<ec)+(e&tc),this.data[t];if(e<this.highStart)return t=B6-v6+(e>>Af),t=this.index[t],t+=e>>br&m6,t=this.index[t],t=(t<<ec)+(e&tc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),qg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",F6=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Xi=0;Xi<qg.length;Xi++)F6[qg.charCodeAt(Xi)]=Xi;var U6=1,rc=2,nc=3,Ap=4,ep=5,x6=7,tp=8,oc=9,ic=10,rp=11,np=12,op=13,ip=14,ac=15,E6=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},b6=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},H6=Q6(a6),Le="×",sc="÷",k6=function(A){return H6.get(A)},I6=function(A,e,t){var r=t-2,n=e[r],o=e[t-1],i=e[t];if(o===rc&&i===nc)return Le;if(o===rc||o===nc||o===Ap||i===rc||i===nc||i===Ap)return sc;if(o===tp&&[tp,oc,rp,np].indexOf(i)!==-1||(o===rp||o===oc)&&(i===oc||i===ic)||(o===np||o===ic)&&i===ic||i===op||i===ep||i===x6||o===U6)return Le;if(o===op&&i===ip){for(;n===ep;)n=e[--r];if(n===ip)return Le}if(o===ac&&i===ac){for(var a=0;n===ac;)a++,n=e[--r];if(a%2===0)return Le}return sc},L6=function(A){var e=E6(A),t=e.length,r=0,n=0,o=e.map(k6);return{next:function(){if(r>=t)return{done:!0,value:null};for(var i=Le;r<t&&(i=I6(e,o,++r))===Le;);if(i!==Le||r===t){var a=b6.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},S6=function(A){for(var e=L6(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},D6=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),o=Math.round(n.height);if(A.body.removeChild(r),o===e)return!0}}return!1},K6=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=Js(r.data).map(function(s){return HA(s)}),o=0,i={},a=n.every(function(s,l){t.setStart(r,o),t.setEnd(r,o+s.length);var c=t.getBoundingClientRect();o+=s.length;var u=c.x>i.x||c.y>i.y;return i=c,l===0?!0:u});return A.body.removeChild(e),a},M6=function(){return typeof new Image().crossOrigin<"u"},T6=function(){return typeof new XMLHttpRequest().responseType=="string"},N6=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},ap=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},_6=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,o=e.toDataURL();n.src=o;var i=Nu(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),sp(i).then(function(a){r.drawImage(a,0,0);var s=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+o+")",l.style.height=t+"px",ap(s)?sp(Nu(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),ap(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Nu=function(A,e,t,r,n){var o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),a=document.createElementNS(o,"foreignObject");return i.setAttributeNS(null,"width",A.toString()),i.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(a),a.appendChild(n),i},sp=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},$A={get SUPPORT_RANGE_BOUNDS(){var A=D6(document);return Object.defineProperty($A,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=$A.SUPPORT_RANGE_BOUNDS&&K6(document);return Object.defineProperty($A,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=N6(document);return Object.defineProperty($A,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?_6(document):Promise.resolve(!1);return Object.defineProperty($A,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=M6();return Object.defineProperty($A,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=T6();return Object.defineProperty($A,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty($A,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty($A,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},ko=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),O6=function(A,e,t,r){var n=P6(e,t),o=[],i=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if($A.SUPPORT_RANGE_BOUNDS){var s=lp(r,i,a.length).getClientRects();if(s.length>1){var l=ef(a),c=0;l.forEach(function(d){o.push(new ko(d,Lt.fromDOMRectList(A,lp(r,c+i,d.length).getClientRects()))),c+=d.length})}else o.push(new ko(a,Lt.fromDOMRectList(A,s)))}else{var u=r.splitText(a.length);o.push(new ko(a,R6(A,r))),r=u}else $A.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));i+=a.length}),o},R6=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var o=Xs(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),o}}return Lt.EMPTY},lp=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},ef=function(A){if($A.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return S6(A)},V6=function(A,e){if($A.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return j6(A,e)},P6=function(A,e){return e.letterSpacing!==0?ef(A):V6(A,e)},G6=[32,160,4961,65792,65793,4153,4241],j6=function(A,e){for(var t=v5(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,o=function(){if(n.value){var i=n.value.slice(),a=Js(i),s="";a.forEach(function(l){G6.indexOf(l)===-1?s+=HA(l):(s.length&&r.push(s),r.push(HA(l)),s="")}),s.length&&r.push(s)}};!(n=t.next()).done;)o();return r},z6=function(){function A(e,t,r){this.text=W6(t.data,r.textTransform),this.textBounds=O6(e,this.text,r,t)}return A}(),W6=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace($6,X6);case 2:return A.toUpperCase();default:return A}},$6=/(^|\s|:|-|\(|\))([a-z])/g,X6=function(A,e,t){return A.length>0?e+t.toUpperCase():A},w4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(ht),m4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(ht),C4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=new XMLSerializer,i=Xs(t,r);return r.setAttribute("width",i.width+"px"),r.setAttribute("height",i.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(o.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(ht),Q4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(ht),_u=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(ht),J6=[{type:15,flags:0,unit:"px",number:3}],Y6=[{type:16,flags:0,number:50}],Z6=function(A){return A.width>A.height?new Lt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Lt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},q6=function(A){var e=A.type===AU?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},us="checkbox",ds="radio",AU="password",cp=707406591,tf=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=q6(r),(n.type===us||n.type===ds)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=Z6(n.bounds)),n.type){case us:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=J6;break;case ds:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=Y6;break}return n}return e}(ht),y4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=r.options[r.selectedIndex||0];return n.value=o&&o.text||"",n}return e}(ht),F4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(ht),U4=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=E4(t,r.contentWindow.document.documentElement);var o=r.contentWindow.document.documentElement?bo(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):Et.TRANSPARENT,i=r.contentWindow.document.body?bo(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):Et.TRANSPARENT;n.backgroundColor=nr(o)?nr(i)?n.styles.backgroundColor:i:o}}catch{}return n}return e}(ht),eU=["OL","UL","MENU"],xa=function(A,e,t,r){for(var n=e.firstChild,o=void 0;n;n=o)if(o=n.nextSibling,b4(n)&&n.data.trim().length>0)t.textNodes.push(new z6(A,n,t.styles));else if(sn(n))if(L4(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return xa(A,a,t,r)});else{var i=x4(A,n);i.styles.isVisible()&&(tU(n,i,r)?i.flags|=4:rU(i.styles)&&(i.flags|=2),eU.indexOf(n.tagName)!==-1&&(i.flags|=8),t.elements.push(i),n.slot,n.shadowRoot?xa(A,n.shadowRoot,i,r):!fs(n)&&!H4(n)&&!gs(n)&&xa(A,n,i,r))}},x4=function(A,e){return Ru(e)?new w4(A,e):k4(e)?new m4(A,e):H4(e)?new C4(A,e):nU(e)?new Q4(A,e):oU(e)?new _u(A,e):iU(e)?new tf(A,e):gs(e)?new y4(A,e):fs(e)?new F4(A,e):I4(e)?new U4(A,e):new ht(A,e)},E4=function(A,e){var t=x4(A,e);return t.flags|=4,xa(A,e,t,t),t},tU=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||rf(A)&&t.styles.isTransparent()},rU=function(A){return A.isPositioned()||A.isFloating()},b4=function(A){return A.nodeType===Node.TEXT_NODE},sn=function(A){return A.nodeType===Node.ELEMENT_NODE},Ou=function(A){return sn(A)&&typeof A.style<"u"&&!Ea(A)},Ea=function(A){return typeof A.className=="object"},nU=function(A){return A.tagName==="LI"},oU=function(A){return A.tagName==="OL"},iU=function(A){return A.tagName==="INPUT"},aU=function(A){return A.tagName==="HTML"},H4=function(A){return A.tagName==="svg"},rf=function(A){return A.tagName==="BODY"},k4=function(A){return A.tagName==="CANVAS"},up=function(A){return A.tagName==="VIDEO"},Ru=function(A){return A.tagName==="IMG"},I4=function(A){return A.tagName==="IFRAME"},dp=function(A){return A.tagName==="STYLE"},sU=function(A){return A.tagName==="SCRIPT"},fs=function(A){return A.tagName==="TEXTAREA"},gs=function(A){return A.tagName==="SELECT"},L4=function(A){return A.tagName==="SLOT"},fp=function(A){return A.tagName.indexOf("-")>0},lU=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,o=!0;r!==null&&r.forEach(function(a){var s=t.counters[a.counter];s&&a.increment!==0&&(o=!1,s.length||s.push(1),s[Math.max(0,s.length-1)]+=a.increment)});var i=[];return o&&n.forEach(function(a){var s=t.counters[a.counter];i.push(a.counter),s||(s=t.counters[a.counter]=[]),s.push(a.reset)}),i},A}(),gp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},pp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},cU={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},uU={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Vr=function(A,e,t,r,n,o){return A<e||A>t?qo(A,n,o.length>0):r.integers.reduce(function(i,a,s){for(;A>=a;)A-=a,i+=r.values[s];return i},"")+o},S4=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},bA=function(A,e,t,r,n){var o=t-e+1;return(A<0?"-":"")+(S4(Math.abs(A),o,r,function(i){return HA(Math.floor(i%o)+e)})+n)},ur=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return S4(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},jr=1,Tt=2,Nt=4,go=8,wt=function(A,e,t,r,n,o){if(A<-9999||A>9999)return qo(A,4,n.length>0);var i=Math.abs(A),a=n;if(i===0)return e[0]+a;for(var s=0;i>0&&s<=4;s++){var l=i%10;l===0&&NA(o,jr)&&a!==""?a=e[l]+a:l>1||l===1&&s===0||l===1&&s===1&&NA(o,Tt)||l===1&&s===1&&NA(o,Nt)&&A>100||l===1&&s>1&&NA(o,go)?a=e[l]+(s>0?t[s-1]:"")+a:l===1&&s>0&&(a=t[s-1]+a),i=Math.floor(i/10)}return(A<0?r:"")+a},hp="十百千萬",Bp="拾佰仟萬",vp="マイナス",lc="마이너스",qo=function(A,e,t){var r=t?". ":"",n=t?"、":"",o=t?", ":"",i=t?" ":"";switch(e){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:var a=bA(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return ur(A,"〇一二三四五六七八九",n);case 6:return Vr(A,1,3999,gp,3,r).toLowerCase();case 7:return Vr(A,1,3999,gp,3,r);case 8:return bA(A,945,969,!1,r);case 9:return bA(A,97,122,!1,r);case 10:return bA(A,65,90,!1,r);case 11:return bA(A,1632,1641,!0,r);case 12:case 49:return Vr(A,1,9999,pp,3,r);case 35:return Vr(A,1,9999,pp,3,r).toLowerCase();case 13:return bA(A,2534,2543,!0,r);case 14:case 30:return bA(A,6112,6121,!0,r);case 15:return ur(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return ur(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return wt(A,"零一二三四五六七八九",hp,"負",n,Tt|Nt|go);case 47:return wt(A,"零壹貳參肆伍陸柒捌玖",Bp,"負",n,jr|Tt|Nt|go);case 42:return wt(A,"零一二三四五六七八九",hp,"负",n,Tt|Nt|go);case 41:return wt(A,"零壹贰叁肆伍陆柒捌玖",Bp,"负",n,jr|Tt|Nt|go);case 26:return wt(A,"〇一二三四五六七八九","十百千万",vp,n,0);case 25:return wt(A,"零壱弐参四伍六七八九","拾百千万",vp,n,jr|Tt|Nt);case 31:return wt(A,"영일이삼사오육칠팔구","십백천만",lc,o,jr|Tt|Nt);case 33:return wt(A,"零一二三四五六七八九","十百千萬",lc,o,0);case 32:return wt(A,"零壹貳參四五六七八九","拾百千",lc,o,jr|Tt|Nt);case 18:return bA(A,2406,2415,!0,r);case 20:return Vr(A,1,19999,uU,3,r);case 21:return bA(A,2790,2799,!0,r);case 22:return bA(A,2662,2671,!0,r);case 22:return Vr(A,1,10999,cU,3,r);case 23:return ur(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return ur(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return bA(A,3302,3311,!0,r);case 28:return ur(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return ur(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return bA(A,3792,3801,!0,r);case 37:return bA(A,6160,6169,!0,r);case 38:return bA(A,4160,4169,!0,r);case 39:return bA(A,2918,2927,!0,r);case 40:return bA(A,1776,1785,!0,r);case 43:return bA(A,3046,3055,!0,r);case 44:return bA(A,3174,3183,!0,r);case 45:return bA(A,3664,3673,!0,r);case 46:return bA(A,3872,3881,!0,r);case 3:default:return bA(A,48,57,!0,r)}},D4="data-html2canvas-ignore",wp=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new lU,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=dU(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var o=e.defaultView.pageXOffset,i=e.defaultView.pageYOffset,a=n.contentWindow,s=a.document,l=pU(n).then(function(){return oe(r,void 0,void 0,function(){var c,u;return Ae(this,function(d){switch(d.label){case 0:return this.scrolledElements.forEach(wU),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:s.fonts&&s.fonts.ready?[4,s.fonts.ready]:[3,2];case 1:d.sent(),d.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,gU(s)]:[3,4];case 3:d.sent(),d.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(s,u)}).then(function(){return n})]:[2,n]}})})});return s.open(),s.write(BU(document.doctype)+"<html></html>"),vU(this.referenceElement.ownerDocument,o,i),s.replaceChild(s.adoptNode(this.documentElement),s.documentElement),s.close(),l},A.prototype.createElementClone=function(e){if(Tu(e,2))debugger;if(k4(e))return this.createCanvasClone(e);if(up(e))return this.createVideoClone(e);if(dp(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Ru(t)&&(Ru(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),fp(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return cc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(o,i){return i&&typeof i.cssText=="string"?o+i.cssText:o},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(o){if(this.context.logger.error("Unable to access cssRules property",o),o.name!=="SecurityError")throw o}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var o=e.getContext("2d"),i=n.getContext("2d");if(i)if(!this.options.allowTaint&&o)i.putImageData(o.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var s=a.getContextAttributes();(s==null?void 0:s.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}i.drawImage(e,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!sn(t)||!sU(t)&&!t.hasAttribute(D4)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!sn(t)||!dp(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,o=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;o;o=o.nextSibling)if(sn(o)&&L4(o)&&typeof o.assignedNodes=="function"){var i=o.assignedNodes();i.length&&i.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,o,r)},A.prototype.cloneNode=function(e,t){if(b4(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&sn(e)&&(Ou(e)||Ea(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var o=r.getComputedStyle(e),i=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&Ou(n)&&(this.clonedReferenceElement=n),rf(n)&&QU(n);var s=this.counters.parse(new Jg(this.context,o)),l=this.resolvePseudoContent(e,n,i,Io.BEFORE);fp(e)&&(t=!0),up(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var c=this.resolvePseudoContent(e,n,a,Io.AFTER);return c&&n.appendChild(c),this.counters.pop(s),(o&&(this.options.copyStyles||Ea(e))&&!I4(e)||t)&&cc(o,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(fs(e)||gs(e))&&(fs(n)||gs(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var o=this;if(r){var i=r.content,a=t.ownerDocument;if(!(!a||!i||i==="none"||i==="-moz-alt-content"||r.display==="none")){this.counters.parse(new Jg(this.context,r));var s=new n6(this.context,r),l=a.createElement("html2canvaspseudoelement");cc(r,l),s.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var d=a.createElement("img");d.src=u.value,d.style.opacity="1",l.appendChild(d)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(lA);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var v=u.values.filter(Dn),w=v[0],x=v[1];if(w&&lA(w)){var g=o.counters.getCounterValue(w.value),f=x&&lA(x)?Mu.parse(o.context,x.value):3;l.appendChild(a.createTextNode(qo(g,f,!1)))}}else if(u.name==="counters"){var h=u.values.filter(Dn),w=h[0],C=h[1],x=h[2];if(w&&lA(w)){var F=o.counters.getCounterValues(w.value),m=x&&lA(x)?Mu.parse(o.context,x.value):3,Q=C&&C.type===0?C.value:"",E=F.map(function(q){return qo(q,m,!1)}).join(Q);l.appendChild(a.createTextNode(E))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(Xg(s.quotes,o.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Xg(s.quotes,--o.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Vu+" "+Pu;var c=n===Io.BEFORE?" "+Vu:" "+Pu;return Ea(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),Io;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Io||(Io={}));var dU=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(D4,"true"),A.body.appendChild(t),t},fU=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},gU=function(A){return Promise.all([].slice.call(A.images,0).map(fU))},pU=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var o=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(o),e(A))},50)}})},hU=["all","d","content"],cc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);hU.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},BU=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},vU=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},wU=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},mU=":before",CU=":after",Vu="___html2canvas___pseudoelement_before",Pu="___html2canvas___pseudoelement_after",mp=`{
    content: "" !important;
    display: none !important;
}`,QU=function(A){yU(A,"."+Vu+mU+mp+`
         .`+Pu+CU+mp)},yU=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},K4=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),FU=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(dc(e)||bU(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return oe(this,void 0,void 0,function(){var t,r,n,o,i=this;return Ae(this,function(a){switch(a.label){case 0:return t=K4.isSameOrigin(e),r=!uc(e)&&this._options.useCORS===!0&&$A.SUPPORT_CORS_IMAGES&&!t,n=!uc(e)&&!t&&!dc(e)&&typeof this._options.proxy=="string"&&$A.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!uc(e)&&!dc(e)&&!n&&!r?[2]:(o=e,n?[4,this.proxy(o)]:[3,2]);case 1:o=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(s,l){var c=new Image;c.onload=function(){return s(c)},c.onerror=l,(HU(o)||r)&&(c.crossOrigin="anonymous"),c.src=o,c.complete===!0&&setTimeout(function(){return s(c)},500),i._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+i._options.imageTimeout+"ms) loading image")},i._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(o,i){var a=$A.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest;s.onload=function(){if(s.status===200)if(a==="text")o(s.response);else{var u=new FileReader;u.addEventListener("load",function(){return o(u.result)},!1),u.addEventListener("error",function(d){return i(d)},!1),u.readAsDataURL(s.response)}else i("Failed to proxy resource "+n+" with status code "+s.status)},s.onerror=i;var l=r.indexOf("?")>-1?"&":"?";if(s.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;s.timeout=c,s.ontimeout=function(){return i("Timed out ("+c+"ms) proxying "+n)}}s.send()})},A}(),UU=/^data:image\/svg\+xml/i,xU=/^data:image\/.*;base64,/i,EU=/^data:image\/.*/i,bU=function(A){return $A.SUPPORT_SVG_DRAWING||!kU(A)},uc=function(A){return EU.test(A)},HU=function(A){return xU.test(A)},dc=function(A){return A.substr(0,4)==="blob"},kU=function(A){return A.substr(-3).toLowerCase()==="svg"||UU.test(A)},K=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Pr=function(A,e,t){return new K(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},Ji=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Pr(this.start,this.startControl,e),n=Pr(this.startControl,this.endControl,e),o=Pr(this.endControl,this.end,e),i=Pr(r,n,e),a=Pr(n,o,e),s=Pr(i,a,e);return t?new A(this.start,r,i,s):new A(s,a,o,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),Ke=function(A){return A.type===1},IU=function(){function A(e){var t=e.styles,r=e.bounds,n=uo(t.borderTopLeftRadius,r.width,r.height),o=n[0],i=n[1],a=uo(t.borderTopRightRadius,r.width,r.height),s=a[0],l=a[1],c=uo(t.borderBottomRightRadius,r.width,r.height),u=c[0],d=c[1],p=uo(t.borderBottomLeftRadius,r.width,r.height),v=p[0],w=p[1],x=[];x.push((o+s)/r.width),x.push((v+u)/r.width),x.push((i+w)/r.height),x.push((l+d)/r.height);var g=Math.max.apply(Math,x);g>1&&(o/=g,i/=g,s/=g,l/=g,u/=g,d/=g,v/=g,w/=g);var f=r.width-s,h=r.height-d,C=r.width-u,F=r.height-w,m=t.borderTopWidth,Q=t.borderRightWidth,E=t.borderBottomWidth,H=t.borderLeftWidth,D=uA(t.paddingTop,e.bounds.width),q=uA(t.paddingRight,e.bounds.width),X=uA(t.paddingBottom,e.bounds.width),z=uA(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=o>0||i>0?wA(r.left+H/3,r.top+m/3,o-H/3,i-m/3,iA.TOP_LEFT):new K(r.left+H/3,r.top+m/3),this.topRightBorderDoubleOuterBox=o>0||i>0?wA(r.left+f,r.top+m/3,s-Q/3,l-m/3,iA.TOP_RIGHT):new K(r.left+r.width-Q/3,r.top+m/3),this.bottomRightBorderDoubleOuterBox=u>0||d>0?wA(r.left+C,r.top+h,u-Q/3,d-E/3,iA.BOTTOM_RIGHT):new K(r.left+r.width-Q/3,r.top+r.height-E/3),this.bottomLeftBorderDoubleOuterBox=v>0||w>0?wA(r.left+H/3,r.top+F,v-H/3,w-E/3,iA.BOTTOM_LEFT):new K(r.left+H/3,r.top+r.height-E/3),this.topLeftBorderDoubleInnerBox=o>0||i>0?wA(r.left+H*2/3,r.top+m*2/3,o-H*2/3,i-m*2/3,iA.TOP_LEFT):new K(r.left+H*2/3,r.top+m*2/3),this.topRightBorderDoubleInnerBox=o>0||i>0?wA(r.left+f,r.top+m*2/3,s-Q*2/3,l-m*2/3,iA.TOP_RIGHT):new K(r.left+r.width-Q*2/3,r.top+m*2/3),this.bottomRightBorderDoubleInnerBox=u>0||d>0?wA(r.left+C,r.top+h,u-Q*2/3,d-E*2/3,iA.BOTTOM_RIGHT):new K(r.left+r.width-Q*2/3,r.top+r.height-E*2/3),this.bottomLeftBorderDoubleInnerBox=v>0||w>0?wA(r.left+H*2/3,r.top+F,v-H*2/3,w-E*2/3,iA.BOTTOM_LEFT):new K(r.left+H*2/3,r.top+r.height-E*2/3),this.topLeftBorderStroke=o>0||i>0?wA(r.left+H/2,r.top+m/2,o-H/2,i-m/2,iA.TOP_LEFT):new K(r.left+H/2,r.top+m/2),this.topRightBorderStroke=o>0||i>0?wA(r.left+f,r.top+m/2,s-Q/2,l-m/2,iA.TOP_RIGHT):new K(r.left+r.width-Q/2,r.top+m/2),this.bottomRightBorderStroke=u>0||d>0?wA(r.left+C,r.top+h,u-Q/2,d-E/2,iA.BOTTOM_RIGHT):new K(r.left+r.width-Q/2,r.top+r.height-E/2),this.bottomLeftBorderStroke=v>0||w>0?wA(r.left+H/2,r.top+F,v-H/2,w-E/2,iA.BOTTOM_LEFT):new K(r.left+H/2,r.top+r.height-E/2),this.topLeftBorderBox=o>0||i>0?wA(r.left,r.top,o,i,iA.TOP_LEFT):new K(r.left,r.top),this.topRightBorderBox=s>0||l>0?wA(r.left+f,r.top,s,l,iA.TOP_RIGHT):new K(r.left+r.width,r.top),this.bottomRightBorderBox=u>0||d>0?wA(r.left+C,r.top+h,u,d,iA.BOTTOM_RIGHT):new K(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=v>0||w>0?wA(r.left,r.top+F,v,w,iA.BOTTOM_LEFT):new K(r.left,r.top+r.height),this.topLeftPaddingBox=o>0||i>0?wA(r.left+H,r.top+m,Math.max(0,o-H),Math.max(0,i-m),iA.TOP_LEFT):new K(r.left+H,r.top+m),this.topRightPaddingBox=s>0||l>0?wA(r.left+Math.min(f,r.width-Q),r.top+m,f>r.width+Q?0:Math.max(0,s-Q),Math.max(0,l-m),iA.TOP_RIGHT):new K(r.left+r.width-Q,r.top+m),this.bottomRightPaddingBox=u>0||d>0?wA(r.left+Math.min(C,r.width-H),r.top+Math.min(h,r.height-E),Math.max(0,u-Q),Math.max(0,d-E),iA.BOTTOM_RIGHT):new K(r.left+r.width-Q,r.top+r.height-E),this.bottomLeftPaddingBox=v>0||w>0?wA(r.left+H,r.top+Math.min(F,r.height-E),Math.max(0,v-H),Math.max(0,w-E),iA.BOTTOM_LEFT):new K(r.left+H,r.top+r.height-E),this.topLeftContentBox=o>0||i>0?wA(r.left+H+z,r.top+m+D,Math.max(0,o-(H+z)),Math.max(0,i-(m+D)),iA.TOP_LEFT):new K(r.left+H+z,r.top+m+D),this.topRightContentBox=s>0||l>0?wA(r.left+Math.min(f,r.width+H+z),r.top+m+D,f>r.width+H+z?0:s-H+z,l-(m+D),iA.TOP_RIGHT):new K(r.left+r.width-(Q+q),r.top+m+D),this.bottomRightContentBox=u>0||d>0?wA(r.left+Math.min(C,r.width-(H+z)),r.top+Math.min(h,r.height+m+D),Math.max(0,u-(Q+q)),d-(E+X),iA.BOTTOM_RIGHT):new K(r.left+r.width-(Q+q),r.top+r.height-(E+X)),this.bottomLeftContentBox=v>0||w>0?wA(r.left+H+z,r.top+F,Math.max(0,v-(H+z)),w-(E+X),iA.BOTTOM_LEFT):new K(r.left+H+z,r.top+r.height-(E+X))}return A}(),iA;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(iA||(iA={}));var wA=function(A,e,t,r,n){var o=4*((Math.sqrt(2)-1)/3),i=t*o,a=r*o,s=A+t,l=e+r;switch(n){case iA.TOP_LEFT:return new Ji(new K(A,l),new K(A,l-a),new K(s-i,e),new K(s,e));case iA.TOP_RIGHT:return new Ji(new K(A,e),new K(A+i,e),new K(s,l-a),new K(s,l));case iA.BOTTOM_RIGHT:return new Ji(new K(s,e),new K(s,e+a),new K(A+i,l),new K(A,l));case iA.BOTTOM_LEFT:default:return new Ji(new K(s,l),new K(s-i,l),new K(A,e+a),new K(A,e))}},ps=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},LU=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},hs=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},SU=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),Yi=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),DU=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),KU=function(A){return A.type===0},M4=function(A){return A.type===1},MU=function(A){return A.type===2},Cp=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},TU=function(A,e,t,r,n){return A.map(function(o,i){switch(i){case 0:return o.add(e,t);case 1:return o.add(e+r,t);case 2:return o.add(e+r,t+n);case 3:return o.add(e,t+n)}return o})},T4=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),N4=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new IU(this.container),this.container.styles.opacity<1&&this.effects.push(new DU(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,o=this.container.styles.transform;this.effects.push(new SU(r,n,o))}if(this.container.styles.overflowX!==0){var i=ps(this.curves),a=hs(this.curves);Cp(i,a)?this.effects.push(new Yi(i,6)):(this.effects.push(new Yi(i,2)),this.effects.push(new Yi(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var o=r.effects.filter(function(s){return!M4(s)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,o),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var i=ps(r.curves),a=hs(r.curves);Cp(i,a)||n.unshift(new Yi(a,6))}}else n.unshift.apply(n,o);r=r.parent}return n.filter(function(s){return NA(s.target,e)})},A}(),Gu=function(A,e,t,r){A.container.elements.forEach(function(n){var o=NA(n.flags,4),i=NA(n.flags,2),a=new N4(n,A);NA(n.styles.display,2048)&&r.push(a);var s=NA(n.flags,8)?[]:r;if(o||i){var l=o||n.styles.isPositioned()?t:e,c=new T4(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var u=n.styles.zIndex.order;if(u<0){var d=0;l.negativeZIndex.some(function(v,w){return u>v.element.container.styles.zIndex.order?(d=w,!1):d>0}),l.negativeZIndex.splice(d,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(v,w){return u>=v.element.container.styles.zIndex.order?(p=w+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else n.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Gu(a,c,o?c:t,s)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Gu(a,e,t,s);NA(n.flags,8)&&_4(n,s)})},_4=function(A,e){for(var t=A instanceof _u?A.start:1,r=A instanceof _u?A.reversed:!1,n=0;n<e.length;n++){var o=e[n];o.container instanceof Q4&&typeof o.container.value=="number"&&o.container.value!==0&&(t=o.container.value),o.listValue=qo(t,o.container.styles.listStyleType,!0),t+=r?-1:1}},NU=function(A){var e=new N4(A,null),t=new T4(e),r=[];return Gu(e,t,t,r),_4(e.container,r),t},Qp=function(A,e){switch(e){case 0:return Ne(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Ne(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Ne(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Ne(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},_U=function(A,e){switch(e){case 0:return Ne(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Ne(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Ne(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return Ne(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},OU=function(A,e){switch(e){case 0:return Ne(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Ne(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Ne(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return Ne(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},RU=function(A,e){switch(e){case 0:return Zi(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return Zi(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return Zi(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return Zi(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},Zi=function(A,e){var t=[];return Ke(A)?t.push(A.subdivide(.5,!1)):t.push(A),Ke(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Ne=function(A,e,t,r){var n=[];return Ke(A)?n.push(A.subdivide(.5,!1)):n.push(A),Ke(t)?n.push(t.subdivide(.5,!0)):n.push(t),Ke(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),Ke(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},O4=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Bs=function(A){var e=A.styles,t=A.bounds,r=uA(e.paddingLeft,t.width),n=uA(e.paddingRight,t.width),o=uA(e.paddingTop,t.width),i=uA(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,o+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+o+i))},VU=function(A,e){return A===0?e.bounds:A===2?Bs(e):O4(e)},PU=function(A,e){return A===0?e.bounds:A===2?Bs(e):O4(e)},fc=function(A,e,t){var r=VU(zr(A.styles.backgroundOrigin,e),A),n=PU(zr(A.styles.backgroundClip,e),A),o=GU(zr(A.styles.backgroundSize,e),t,r),i=o[0],a=o[1],s=uo(zr(A.styles.backgroundPosition,e),r.width-i,r.height-a),l=jU(zr(A.styles.backgroundRepeat,e),s,o,r,n),c=Math.round(r.left+s[0]),u=Math.round(r.top+s[1]);return[l,c,u,i,a]},Gr=function(A){return lA(A)&&A.value===pn.AUTO},qi=function(A){return typeof A=="number"},GU=function(A,e,t){var r=e[0],n=e[1],o=e[2],i=A[0],a=A[1];if(!i)return[0,0];if(DA(i)&&a&&DA(a))return[uA(i,t.width),uA(a,t.height)];var s=qi(o);if(lA(i)&&(i.value===pn.CONTAIN||i.value===pn.COVER)){if(qi(o)){var l=t.width/t.height;return l<o!=(i.value===pn.COVER)?[t.width,t.width/o]:[t.height*o,t.height]}return[t.width,t.height]}var c=qi(r),u=qi(n),d=c||u;if(Gr(i)&&(!a||Gr(a))){if(c&&u)return[r,n];if(!s&&!d)return[t.width,t.height];if(d&&s){var p=c?r:n*o,v=u?n:r/o;return[p,v]}var w=c?r:t.width,x=u?n:t.height;return[w,x]}if(s){var g=0,f=0;return DA(i)?g=uA(i,t.width):DA(a)&&(f=uA(a,t.height)),Gr(i)?g=f*o:(!a||Gr(a))&&(f=g/o),[g,f]}var h=null,C=null;if(DA(i)?h=uA(i,t.width):a&&DA(a)&&(C=uA(a,t.height)),h!==null&&(!a||Gr(a))&&(C=c&&u?h/r*n:t.height),C!==null&&Gr(i)&&(h=c&&u?C/n*r:t.width),h!==null&&C!==null)return[h,C];throw new Error("Unable to calculate background-size for element")},zr=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},jU=function(A,e,t,r,n){var o=e[0],i=e[1],a=t[0],s=t[1];switch(A){case 2:return[new K(Math.round(r.left),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(s+r.top+i)),new K(Math.round(r.left),Math.round(s+r.top+i))];case 3:return[new K(Math.round(r.left+o),Math.round(r.top)),new K(Math.round(r.left+o+a),Math.round(r.top)),new K(Math.round(r.left+o+a),Math.round(r.height+r.top)),new K(Math.round(r.left+o),Math.round(r.height+r.top))];case 1:return[new K(Math.round(r.left+o),Math.round(r.top+i)),new K(Math.round(r.left+o+a),Math.round(r.top+i)),new K(Math.round(r.left+o+a),Math.round(r.top+i+s)),new K(Math.round(r.left+o),Math.round(r.top+i+s))];default:return[new K(Math.round(n.left),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.height+n.top)),new K(Math.round(n.left),Math.round(n.height+n.top))]}},zU="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",yp="Hidden Text",WU=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),o=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),n.src=zU,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",o.style.fontFamily=e,o.style.fontSize=t,o.style.margin="0",o.style.padding="0",o.appendChild(this._document.createTextNode(yp)),r.appendChild(o),r.appendChild(n);var a=n.offsetTop-o.offsetTop+2;r.removeChild(o),r.appendChild(this._document.createTextNode(yp)),r.style.lineHeight="normal",n.style.verticalAlign="super";var s=n.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:a,middle:s}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),R4=function(){function A(e,t){this.context=e,this.options=t}return A}(),$U=1e4,XU=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new WU(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),MU(t)&&(this.ctx.globalAlpha=t.opacity),KU(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),M4(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return oe(this,void 0,void 0,function(){var r;return Ae(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return oe(this,void 0,void 0,function(){return Ae(this,function(r){switch(r.label){case 0:if(NA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var o=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var i=ef(t.text);i.reduce(function(a,s){return o.ctx.fillText(s,a,t.bounds.top+n),a+o.ctx.measureText(s).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(i){return i==="normal"||i==="small-caps"}).join(""),n=Ax(t.fontFamily).join(", "),o=si(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,o,n].join(" "),n,o]},e.prototype.renderTextNode=function(t,r){return oe(this,void 0,void 0,function(){var n,o,i,a,s,l,c,u,d=this;return Ae(this,function(p){return n=this.createFontStyle(r),o=n[0],i=n[1],a=n[2],this.ctx.font=o,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",s=this.fontMetrics.getMetrics(i,a),l=s.baseline,c=s.middle,u=r.paintOrder,t.textBounds.forEach(function(v){u.forEach(function(w){switch(w){case 0:d.ctx.fillStyle=VA(r.color),d.renderTextWithLetterSpacing(v,r.letterSpacing,l);var x=r.textShadow;x.length&&v.text.trim().length&&(x.slice(0).reverse().forEach(function(g){d.ctx.shadowColor=VA(g.color),d.ctx.shadowOffsetX=g.offsetX.number*d.options.scale,d.ctx.shadowOffsetY=g.offsetY.number*d.options.scale,d.ctx.shadowBlur=g.blur.number,d.renderTextWithLetterSpacing(v,r.letterSpacing,l)}),d.ctx.shadowColor="",d.ctx.shadowOffsetX=0,d.ctx.shadowOffsetY=0,d.ctx.shadowBlur=0),r.textDecorationLine.length&&(d.ctx.fillStyle=VA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(g){switch(g){case 1:d.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top+l),v.bounds.width,1);break;case 2:d.ctx.fillRect(v.bounds.left,Math.round(v.bounds.top),v.bounds.width,1);break;case 3:d.ctx.fillRect(v.bounds.left,Math.ceil(v.bounds.top+c),v.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&v.text.trim().length&&(d.ctx.strokeStyle=VA(r.webkitTextStrokeColor),d.ctx.lineWidth=r.webkitTextStrokeWidth,d.ctx.lineJoin=window.chrome?"miter":"round",d.ctx.strokeText(v.text,v.bounds.left,v.bounds.top+l)),d.ctx.strokeStyle="",d.ctx.lineWidth=0,d.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var o=Bs(t),i=hs(r);this.path(i),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,o.left,o.top,o.width,o.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return oe(this,void 0,void 0,function(){var r,n,o,i,a,s,f,f,l,c,u,d,C,p,v,F,w,x,g,f,h,C,F;return Ae(this,function(m){switch(m.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,o=r.styles,i=0,a=r.textNodes,m.label=1;case 1:return i<a.length?(s=a[i],[4,this.renderTextNode(s,o)]):[3,4];case 2:m.sent(),m.label=3;case 3:return i++,[3,1];case 4:if(!(r instanceof w4))return[3,8];m.label=5;case 5:return m.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return f=m.sent(),this.renderReplacedElement(r,n,f),[3,8];case 7:return m.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof m4&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof C4))return[3,12];m.label=9;case 9:return m.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return f=m.sent(),this.renderReplacedElement(r,n,f),[3,12];case 11:return m.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof U4&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:c=m.sent(),r.width&&r.height&&this.ctx.drawImage(c,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),m.label=14;case 14:if(r instanceof tf&&(u=Math.min(r.bounds.width,r.bounds.height),r.type===us?r.checked&&(this.ctx.save(),this.path([new K(r.bounds.left+u*.39363,r.bounds.top+u*.79),new K(r.bounds.left+u*.16,r.bounds.top+u*.5549),new K(r.bounds.left+u*.27347,r.bounds.top+u*.44071),new K(r.bounds.left+u*.39694,r.bounds.top+u*.5649),new K(r.bounds.left+u*.72983,r.bounds.top+u*.23),new K(r.bounds.left+u*.84,r.bounds.top+u*.34085),new K(r.bounds.left+u*.39363,r.bounds.top+u*.79)]),this.ctx.fillStyle=VA(cp),this.ctx.fill(),this.ctx.restore()):r.type===ds&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+u/2,r.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=VA(cp),this.ctx.fill(),this.ctx.restore())),JU(r)&&r.value.length){switch(d=this.createFontStyle(o),C=d[0],p=d[1],v=this.fontMetrics.getMetrics(C,p).baseline,this.ctx.font=C,this.ctx.fillStyle=VA(o.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=ZU(r.styles.textAlign),F=Bs(r),w=0,r.styles.textAlign){case 1:w+=F.width/2;break;case 2:w+=F.width;break}x=F.add(w,0,0,-F.height/2+1),this.ctx.save(),this.path([new K(F.left,F.top),new K(F.left+F.width,F.top),new K(F.left+F.width,F.top+F.height),new K(F.left,F.top+F.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new ko(r.value,x),o.letterSpacing,v),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!NA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(g=r.styles.listStyleImage,g.type!==0)return[3,18];f=void 0,h=g.url,m.label=15;case 15:return m.trys.push([15,17,,18]),[4,this.context.cache.match(h)];case 16:return f=m.sent(),this.ctx.drawImage(f,r.bounds.left-(f.width+10),r.bounds.top),[3,18];case 17:return m.sent(),this.context.logger.error("Error loading list-style-image "+h),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(C=this.createFontStyle(o)[0],this.ctx.font=C,this.ctx.fillStyle=VA(o.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",F=new Lt(r.bounds.left,r.bounds.top+uA(r.styles.paddingTop,r.bounds.width),r.bounds.width,Wg(o.lineHeight,o.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new ko(t.listValue,F),o.letterSpacing,Wg(o.lineHeight,o.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),m.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return oe(this,void 0,void 0,function(){var r,n,g,o,i,g,a,s,g,l,c,g,u,d,g,p,v,g,w,x,g;return Ae(this,function(f){switch(f.label){case 0:if(NA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:f.sent(),r=0,n=t.negativeZIndex,f.label=2;case 2:return r<n.length?(g=n[r],[4,this.renderStack(g)]):[3,5];case 3:f.sent(),f.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:f.sent(),o=0,i=t.nonInlineLevel,f.label=7;case 7:return o<i.length?(g=i[o],[4,this.renderNode(g)]):[3,10];case 8:f.sent(),f.label=9;case 9:return o++,[3,7];case 10:a=0,s=t.nonPositionedFloats,f.label=11;case 11:return a<s.length?(g=s[a],[4,this.renderStack(g)]):[3,14];case 12:f.sent(),f.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,f.label=15;case 15:return l<c.length?(g=c[l],[4,this.renderStack(g)]):[3,18];case 16:f.sent(),f.label=17;case 17:return l++,[3,15];case 18:u=0,d=t.inlineLevel,f.label=19;case 19:return u<d.length?(g=d[u],[4,this.renderNode(g)]):[3,22];case 20:f.sent(),f.label=21;case 21:return u++,[3,19];case 22:p=0,v=t.zeroOrAutoZIndexOrTransformedOrOpacity,f.label=23;case 23:return p<v.length?(g=v[p],[4,this.renderStack(g)]):[3,26];case 24:f.sent(),f.label=25;case 25:return p++,[3,23];case 26:w=0,x=t.positiveZIndex,f.label=27;case 27:return w<x.length?(g=x[w],[4,this.renderStack(g)]):[3,30];case 28:f.sent(),f.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,o){var i=Ke(n)?n.start:n;o===0?r.ctx.moveTo(i.x,i.y):r.ctx.lineTo(i.x,i.y),Ke(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,o){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,o),this.ctx.fill(),this.ctx.translate(-n,-o)},e.prototype.resizeImage=function(t,r,n){var o;if(t.width===r&&t.height===n)return t;var i=(o=this.canvas.ownerDocument)!==null&&o!==void 0?o:document,a=i.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var s=a.getContext("2d");return s.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return oe(this,void 0,void 0,function(){var r,n,o,i,a,s;return Ae(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(c){var u,d,p,D,T,J,z,S,E,v,D,T,J,z,S,w,x,g,f,h,C,F,m,Q,E,H,D,q,X,z,S,G,T,J,b,k,R,j,W,QA,cA,rA;return Ae(this,function(aA){switch(aA.label){case 0:if(c.type!==0)return[3,5];u=void 0,d=c.url,aA.label=1;case 1:return aA.trys.push([1,3,,4]),[4,o.context.cache.match(d)];case 2:return u=aA.sent(),[3,4];case 3:return aA.sent(),o.context.logger.error("Error loading background-image "+d),[3,4];case 4:return u&&(p=fc(t,r,[u.width,u.height,u.width/u.height]),D=p[0],T=p[1],J=p[2],z=p[3],S=p[4],E=o.ctx.createPattern(o.resizeImage(u,z,S),"repeat"),o.renderRepeat(D,E,T,J)),[3,6];case 5:Ky(c)?(v=fc(t,r,[null,null,null]),D=v[0],T=v[1],J=v[2],z=v[3],S=v[4],w=ky(c.angle,z,S),x=w[0],g=w[1],f=w[2],h=w[3],C=w[4],F=document.createElement("canvas"),F.width=z,F.height=S,m=F.getContext("2d"),Q=m.createLinearGradient(g,h,f,C),jg(c.stops,x).forEach(function(fA){return Q.addColorStop(fA.stop,VA(fA.color))}),m.fillStyle=Q,m.fillRect(0,0,z,S),z>0&&S>0&&(E=o.ctx.createPattern(F,"repeat"),o.renderRepeat(D,E,T,J))):My(c)&&(H=fc(t,r,[null,null,null]),D=H[0],q=H[1],X=H[2],z=H[3],S=H[4],G=c.position.length===0?[Zd]:c.position,T=uA(G[0],z),J=uA(G[G.length-1],S),b=Iy(c,T,J,z,S),k=b[0],R=b[1],k>0&&R>0&&(j=o.ctx.createRadialGradient(q+T,X+J,0,q+T,X+J,k),jg(c.stops,k*2).forEach(function(fA){return j.addColorStop(fA.stop,VA(fA.color))}),o.path(D),o.ctx.fillStyle=j,k!==R?(W=t.bounds.left+.5*t.bounds.width,QA=t.bounds.top+.5*t.bounds.height,cA=R/k,rA=1/cA,o.ctx.save(),o.ctx.translate(W,QA),o.ctx.transform(1,0,0,cA,0,0),o.ctx.translate(-W,-QA),o.ctx.fillRect(q,rA*(X-QA)+QA,z,S*rA),o.ctx.restore()):o.ctx.fill())),aA.label=6;case 6:return r--,[2]}})},o=this,i=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return i<a.length?(s=a[i],[5,n(s)]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return oe(this,void 0,void 0,function(){return Ae(this,function(o){return this.path(Qp(n,r)),this.ctx.fillStyle=VA(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,o){return oe(this,void 0,void 0,function(){var i,a;return Ae(this,function(s){switch(s.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,o)]:[3,2];case 1:return s.sent(),[2];case 2:return i=_U(o,n),this.path(i),this.ctx.fillStyle=VA(t),this.ctx.fill(),a=OU(o,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return oe(this,void 0,void 0,function(){var r,n,o,i,a,s,l,c,u=this;return Ae(this,function(d){switch(d.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!nr(r.backgroundColor)||r.backgroundImage.length,o=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],i=YU(zr(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(i),this.ctx.clip(),nr(r.backgroundColor)||(this.ctx.fillStyle=VA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:d.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var v=ps(t.curves),w=p.inset?0:$U,x=TU(v,-w+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(v),u.ctx.clip(),u.mask(x)):(u.mask(v),u.ctx.clip(),u.path(x)),u.ctx.shadowOffsetX=p.offsetX.number+w,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=VA(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?VA(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),d.label=2;case 2:a=0,s=0,l=o,d.label=3;case 3:return s<l.length?(c=l[s],c.style!==0&&!nr(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return d.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return d.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return d.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:d.sent(),d.label=11;case 11:a++,d.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,o,i){return oe(this,void 0,void 0,function(){var a,s,l,c,u,d,p,v,w,x,g,f,h,C,F,m,F,m;return Ae(this,function(Q){return this.ctx.save(),a=RU(o,n),s=Qp(o,n),i===2&&(this.path(s),this.ctx.clip()),Ke(s[0])?(l=s[0].start.x,c=s[0].start.y):(l=s[0].x,c=s[0].y),Ke(s[1])?(u=s[1].end.x,d=s[1].end.y):(u=s[1].x,d=s[1].y),n===0||n===2?p=Math.abs(l-u):p=Math.abs(c-d),this.ctx.beginPath(),i===3?this.formatPath(a):this.formatPath(s.slice(0,2)),v=r<3?r*3:r*2,w=r<3?r*2:r,i===3&&(v=r,w=r),x=!0,p<=v*2?x=!1:p<=v*2+w?(g=p/(2*v+w),v*=g,w*=g):(f=Math.floor((p+w)/(v+w)),h=(p-f*v)/(f-1),C=(p-(f+1)*v)/f,w=C<=0||Math.abs(w-h)<Math.abs(w-C)?h:C),x&&(i===3?this.ctx.setLineDash([0,v+w]):this.ctx.setLineDash([v,w])),i===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=VA(t),this.ctx.stroke(),this.ctx.setLineDash([]),i===2&&(Ke(s[0])&&(F=s[3],m=s[0],this.ctx.beginPath(),this.formatPath([new K(F.end.x,F.end.y),new K(m.start.x,m.start.y)]),this.ctx.stroke()),Ke(s[1])&&(F=s[1],m=s[2],this.ctx.beginPath(),this.formatPath([new K(F.end.x,F.end.y),new K(m.start.x,m.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return oe(this,void 0,void 0,function(){var r;return Ae(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=VA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=NU(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(R4),JU=function(A){return A instanceof F4||A instanceof y4?!0:A instanceof tf&&A.type!==ds&&A.type!==us},YU=function(A,e){switch(A){case 0:return ps(e);case 2:return LU(e);case 1:default:return hs(e)}},ZU=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},qU=["-apple-system","system-ui"],Ax=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return qU.indexOf(e)===-1}):A},ex=function(A){nt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return oe(this,void 0,void 0,function(){var r,n;return Ae(this,function(o){switch(o.label){case 0:return r=Nu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,tx(r)];case 1:return n=o.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=VA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(R4),tx=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},rx=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ii([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ii([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ii([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ii([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),nx=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new rx({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new FU(this,e)}return A.instanceCount=1,A}(),ox=function(A,e){return e===void 0&&(e={}),ix(A,e)};typeof window<"u"&&K4.setContext(window);var ix=function(A,e){return oe(void 0,void 0,void 0,function(){var t,r,n,o,i,a,s,l,c,u,d,p,v,w,x,g,f,h,C,F,Q,m,Q,E,H,D,q,X,z,S,G,T,J,b,k,R,j,W,QA,cA;return Ae(this,function(rA){switch(rA.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(E=e.allowTaint)!==null&&E!==void 0?E:!1,imageTimeout:(H=e.imageTimeout)!==null&&H!==void 0?H:15e3,proxy:e.proxy,useCORS:(D=e.useCORS)!==null&&D!==void 0?D:!1},o=yu({logging:(q=e.logging)!==null&&q!==void 0?q:!0,cache:e.cache},n),i={windowWidth:(X=e.windowWidth)!==null&&X!==void 0?X:r.innerWidth,windowHeight:(z=e.windowHeight)!==null&&z!==void 0?z:r.innerHeight,scrollX:(S=e.scrollX)!==null&&S!==void 0?S:r.pageXOffset,scrollY:(G=e.scrollY)!==null&&G!==void 0?G:r.pageYOffset},a=new Lt(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),s=new nx(o,a),l=(T=e.foreignObjectRendering)!==null&&T!==void 0?T:!1,c={allowTaint:(J=e.allowTaint)!==null&&J!==void 0?J:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},s.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new wp(s,A,c),d=u.clonedReferenceElement,d?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=rA.sent(),v=rf(d)||aU(d)?T8(d.ownerDocument):Xs(s,d),w=v.width,x=v.height,g=v.left,f=v.top,h=ax(s,d,e.backgroundColor),C={canvas:e.canvas,backgroundColor:h,scale:(k=(b=e.scale)!==null&&b!==void 0?b:r.devicePixelRatio)!==null&&k!==void 0?k:1,x:((R=e.x)!==null&&R!==void 0?R:0)+g,y:((j=e.y)!==null&&j!==void 0?j:0)+f,width:(W=e.width)!==null&&W!==void 0?W:Math.ceil(w),height:(QA=e.height)!==null&&QA!==void 0?QA:Math.ceil(x)},l?(s.logger.debug("Document cloned, using foreign object rendering"),Q=new ex(s,C),[4,Q.render(d)]):[3,3];case 2:return F=rA.sent(),[3,5];case 3:return s.logger.debug("Document cloned, element located at "+g+","+f+" with size "+w+"x"+x+" using computed rendering"),s.logger.debug("Starting DOM parsing"),m=E4(s,d),h===m.styles.backgroundColor&&(m.styles.backgroundColor=Et.TRANSPARENT),s.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),Q=new XU(s,C),[4,Q.render(m)];case 4:F=rA.sent(),rA.label=5;case 5:return(!((cA=e.removeContainer)!==null&&cA!==void 0)||cA)&&(wp.destroy(p)||s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),s.logger.debug("Finished rendering"),[2,F]}})})},ax=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?bo(A,getComputedStyle(r.documentElement).backgroundColor):Et.TRANSPARENT,o=r.body?bo(A,getComputedStyle(r.body).backgroundColor):Et.TRANSPARENT,i=typeof t=="string"?bo(A,t):t===null?Et.TRANSPARENT:4294967295;return e===r.documentElement?nr(n)?nr(o)?i:o:n:i};const V4=(A,e,t)=>{A&&ox(A,{scale:t,useCORS:!0}).then(function(r){r.toBlob(function(n){const o=document.createElement("a");o.href=URL.createObjectURL(n),o.download="image.png",e&&(o.download=e),o.click(),URL.revokeObjectURL(o.href)})})},sx=({pathData:A=[]})=>{var c,u;const[e,t]=L.useState(0),r=L.useMemo(()=>A.filter(d=>d.id===e)[0],[e]),[n,o]=L.useState(1),[i,a]=L.useState(Array.from({length:(c=r.path)==null?void 0:c.length}).map(()=>"var(--color-bg-3)")),s=d=>{const p=i==null?void 0:i.map((v,w)=>w+1===n?d:v);a(p)},l=d=>d==="white"||d==="#fff"||d==="#FFF"||d==="#ffffff"||d==="#FFFFFF";return U.jsxs(lx,{className:"flex-1 flex column items-start gap-32 p-24 width-100",children:[U.jsx(jC,{className:"flex both-center width-100 ratio-1",content:U.jsx(MA,{name:"download",size:32,stroke:"var(--color-text-4)",onClick:()=>{const d=document.querySelector(".colorFill-svg");console.log(d),V4(d,"crochet-time-color-fill-res")}}),placement:"rb",gap:12,children:U.jsxs("svg",{width:"100%",viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"colorFill-svg radius-8",onClick:()=>o(0),children:[U.jsx("rect",{width:"220",height:"220",fill:"var(--color-bg-1)"}),(u=r.path)==null?void 0:u.map((d,p)=>U.jsx("path",{d,fill:i[p]||"var(--color-bg-3)",stroke:p+1===n?"var(--color-text-3)":i[p]??"white",className:"transition-15",onClick:v=>{v.stopPropagation(),o(p+1)}},p))]})}),U.jsx(xe,{children:A.map((d,p)=>U.jsx("div",{onClick:()=>{t(d.id)},children:U.jsx("img",{src:d.img,width:100})},p))}),U.jsx("div",{className:"flex-1 flex column width-100",style:{overflow:"auto"},children:LQ.map(d=>{var p;return U.jsxs(xe,{column:!0,children:[U.jsx(Fe,{title:d.title,type:"h3",style:{margin:"24px auto"}}),U.jsx("div",{className:"grid width-100 gap-8",style:{gridTemplateColumns:"repeat(auto-fit, minmax(48px,1fr))"},children:(p=d.colors)==null?void 0:p.map(v=>U.jsx("div",{className:`flex items-center justify-center fs-8 color-white border radius-50 ratio-1 ${l(v.value)?"border":""}`,style:{backgroundColor:v.value},onClick:()=>s==null?void 0:s(v.value),children:v.name},v.id))})]},d.id)})})]})},lx=rt(Vs)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`,cx=({mainTitle:A,subTitle:e})=>U.jsxs(xe,{column:!0,gap:8,children:[U.jsx(Fe,{title:A,type:"h3"}),U.jsx(Fe,{title:e,type:"p",className:"color-gray-4"})]}),ux=({align:A="right",onClick:e,children:t})=>U.jsxs(dx,{className:"relative",children:[t,U.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:A==="left"?"0px":"100%"},children:U.jsx(MA,{name:"close-fill",fill:"var(--color-red-6)"})})]}),dx=rt.div`
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
`,fx="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg",Aa=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],gx=({})=>{const[A,e]=L.useState(""),t=L.useRef(null),r=L.useRef(null),[n,o]=L.useState(2),[i,a]=L.useState([]),[s,l]=L.useState({w:200,h:200,ratio:1});L.useEffect(()=>{if(!t.current)return;const S=t.current.getBoundingClientRect();l({w:S.width,h:S.height,ratio:S.width/S.height})},[A,t]),L.useEffect(()=>{if(!r.current)return;const S=new ResizeObserver(G=>{for(const T of G)o(T.contentRect.width/T.contentRect.height)});return S.observe(r.current),()=>S.disconnect()},[r]);const c=()=>{if(i.length>=0)if(i.length<8){let S="";window.EyeDropper||x(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(T=>{S=T.sRGBHex,a([...i,{id:`${S}`,value:S}])}).catch(()=>{x(!0,"出错了～")})}else x(!0,"已达上限～长按删除后重试");else x(!0,"请先上传图片～")},u=S=>{const G=i.filter(T=>T.id!==S);a(G)},[d,p]=L.useState(!1),[v,w]=L.useState(""),x=(S,G)=>{w(G),p(S);const T=setTimeout(()=>{p(!1),clearTimeout(T)},1e3)},[g,f]=L.useState(10),[h,C]=L.useState(!0);L.useEffect(()=>{g>0?C(!0):C(!1)},[g]),L.useEffect(()=>{f(h?g||10:0)},[h]);const[F,m]=L.useState(6);L.useEffect(()=>{q(A)},[g,h,F]);const Q=S=>{const G=P(`rgb(${S[0]},${S[1]},${S[2]})`).toHsv();return G.s<=g/100||G.v<=g/100};function E(S,G,T=32){if(Q(S))return!0;const J=S[0]-G[0],b=S[1]-G[1],k=S[2]-G[2];return Math.sqrt(J*J+b*b+k*k)<T}const H=S=>{const G=document.createElement("canvas"),T=G.getContext("2d");return G.width=S.width,G.height=S.height,T==null||T.drawImage(S,0,0,S.width,S.height),T==null?void 0:T.getImageData(0,0,S.width,S.height).data},D=S=>{const G=H(S);if(!G)return;const T=new Map;for(let k=0;k<G.length;k+=4){const j=[G[k],G[k+1],G[k+2]].join(",");T.has(j)?T.set(j,T.get(j)+1):T.set(j,1)}let J=Array.from(T.entries()).sort((k,R)=>R[1]-k[1]).map(k=>k[0].split(",").map(R=>parseInt(R)));const b=[];for(const k of J)if(!b.some(R=>E(k,R,32))&&!Q(k)&&b.push(k),b.length>=F)break;return b},q=S=>{const G=new Image;G.src=S,G.onload=()=>{var J;const T=((J=D(G))==null?void 0:J.map(b=>({id:b[0]+b[1]+b[2],value:`#${P(`rgb(${b[0]},${b[1]},${b[2]})`).toHex()}`})))??[];a(T)}},[X,z]=L.useState(["","","","","",""]);return U.jsxs(Vs,{className:"flex-1 flex column items-start gap-32 px-24 pt-32 pb-24 width-100",children:[U.jsxs(xe,{column:!0,gap:24,children:[U.jsx(cx,{mainTitle:"Step 01: 上传文件",subTitle:"点击或拖拽来上传图片，以像素为单位对颜色计数"}),U.jsx("div",{className:"width-100",style:{height:"240px"},children:U.jsx(UQ,{fileType:"image/*",onUpload:S=>{e(S),a([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:A&&U.jsx("div",{ref:r,className:"flex items-center justify-center width-100 height-100",children:U.jsx("img",{ref:t,src:A,className:`radius-8 ${s.ratio<n?"height-100":"width-100"}`})})})})]}),U.jsxs("div",{className:"flex column width-100",children:[U.jsxs("div",{className:"width-100 flex column",children:[U.jsx(Fe,{title:"Step 02: 取色配置",type:"h3"}),U.jsx(Fe,{title:U.jsxs(U.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",U.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",U.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(i==null?void 0:i.length)!==0&&U.jsxs("div",{className:"flex gap-24 mt-12",children:[U.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[U.jsx(G3,{text:"过滤中性色",checked:h,onChange:()=>{C(!h)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),U.jsx(fQ,{max:35,min:0,step:5,value:g,onChange:S=>f(Number(S))})]}),U.jsx(hQ,{title:"数量",width:124,data:[{value:"1",label:"4"},{value:"2",label:"6"},{value:"3",label:"8"}],selected:"2",onChange:S=>{m(Number(S.label))}})]})]}),U.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[i.length===0&&A&&U.jsx("div",{className:"absolute",style:{zIndex:1},children:U.jsx(va,{text:"提取颜色",type:"background",status:"primary",onClick:()=>{q(A)}})}),i.length===0?Aa==null?void 0:Aa.map((S,G)=>U.jsx(Fp,{className:"flex column relative justify-center gap-4 disabled",children:U.jsx(l0,{value:S.value,showList:!1})},G)):i==null?void 0:i.map((S,G)=>U.jsx(ux,{onClick:()=>u(S.id),children:U.jsx(Fp,{className:"flex column relative justify-center gap-4",children:U.jsx(l0,{value:S.value,showList:!1,onChange:T=>{const J=i.map(b=>({id:b.id,value:b.id==S.id?`#${P(T).toHex()}`:b.value}));a(J)}})},G)})),i.length!==0&&i.length<8&&U.jsxs(px,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>c(),children:[U.jsx(DQ,{}),U.jsx(gt,{content:"点击吸取颜色",theme:"dark"})]})]})]}),U.jsxs(xe,{column:!0,gap:8,children:[U.jsx(Fe,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),U.jsx(Fe,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(i==null?void 0:i.length)===0?U.jsx(Up,{className:"grid mx-32 gap-24 pb-24 disabled",length:6,children:Array.from({length:6}).map((S,G)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(xp,{className:`StyleColorCardBox relative p-24 flex gap-4 width-100 border color-card card-${G} column`,width:s.w,height:s.h,ratio:s.ratio,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:fx})}),U.jsx("div",{className:"color-list grid gap-4",children:(i==null?void 0:i.length)===0?Aa.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]})):i.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]}))})]}),U.jsx(va,{type:"background",className:"width-100",text:"下载色卡",icon:U.jsx(MA,{name:"download"})})]}))}):U.jsx(Up,{className:"grid mx-32 gap-24",length:i.length,children:Array.from({length:6}).map((S,G)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(xp,{className:`relative p-24 flex gap-4 width-100 border color-card card-${G} ${s.ratio<1?"":"column"}`,width:s.w,height:s.h,ratio:s.ratio,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:A})}),U.jsx("div",{className:"color-list grid gap-4",children:i.map(T=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:T.value},className:"width-100 flex-1"},T.id),U.jsx("p",{children:T.value})]}))})]}),U.jsxs("div",{className:"width-100 flex gap-12",children:[U.jsx(Uo,{placeholder:"自定义色卡名称",value:X[G],onChange:T=>{const J=X.map((b,k)=>k===G?String(T):b);z(J)},className:"flex-1"}),U.jsx(va,{type:"background",className:"flex-1",text:"下载色卡",icon:U.jsx(MA,{name:"download"}),onClick:()=>{const T=document.querySelectorAll(".color-card");V4(T[G],X[G],4)}})]})]}))}),U.jsx(dB,{show:d,text:v})]})},Fp=rt.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,px=rt.div`
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
`,Up=rt.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,xp=rt.div`
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
`,hx=({})=>{const[A,e]=L.useState(8);return U.jsxs(Bx,{children:[U.jsx(vx,{className:"StylePixelList flex flex-wrap",style:{width:A*48}}),U.jsx(QQ,{value:A,min:4,max:64,step:1,onChange:t=>e(t)})]})},Bx=rt.div`
    width: calc(100% - 48px);
    max-width: 960px;
    min-height: 100vh;
`,vx=rt.div`
    
`;function wx(){const[A,e]=L.useState(22),[t,r]=L.useState(22),[n,o]=L.useState(Ol);return L.useEffect(()=>{(document.querySelector("#root")||document.body).getBoundingClientRect().width>800?o(Ol.map(s=>({key:s.key,title:s.title,dropData:s.dropData,open:!1}))):o(Ol)},[]),U.jsxs(xe,{column:!0,className:"height-100",children:[U.jsx(mx,{logo:U.jsx(SQ,{}),menuProps:{data:n,active:A,onChange:i=>{r(i.key),e(i.key)},onDropChange:(i,a)=>{r(i.key),e(a.key)},dropProps:{direction:"column",active:t},theme:{lineColor:"inherit",activeBg:"var(--color-bg-2)"}},align:"end",className:"relative"}),t===1&&U.jsx(Fg,{data:sg}),t===2&&U.jsx(Fg,{data:sg}),t===11&&U.jsx(zl,{data:bQ}),t===12&&U.jsx(zl,{data:HQ}),t===21&&U.jsx(gx,{}),t===22&&U.jsx(sx,{pathData:IQ}),t===23&&U.jsx(hx,{}),t===31&&U.jsx(zl,{data:kQ})]})}const mx=rt(sQ)`
  @media screen and (max-width: 800px){
    .land-menu{
      display: none;
    }
    .jdrwKk .land-menu{
      display: flex;
    }
  }
`;gc.createRoot(document.getElementById("root")).render(U.jsx(Oe.StrictMode,{children:U.jsx(wx,{})}));
