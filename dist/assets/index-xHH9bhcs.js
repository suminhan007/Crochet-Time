(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function Fh(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var i4={exports:{}},us={},o4={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),Uh=Symbol.for("react.portal"),xh=Symbol.for("react.fragment"),Eh=Symbol.for("react.strict_mode"),Hh=Symbol.for("react.profiler"),Lh=Symbol.for("react.provider"),kh=Symbol.for("react.context"),bh=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.memo"),Mh=Symbol.for("react.lazy"),$u=Symbol.iterator;function Dh(A){return A===null||typeof A!="object"?null:(A=$u&&A[$u]||A["@@iterator"],typeof A=="function"?A:null)}var a4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s4=Object.assign,l4={};function kn(A,e,t){this.props=A,this.context=e,this.refs=l4,this.updater=t||a4}kn.prototype.isReactComponent={};kn.prototype.setState=function(A,e){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,e,"setState")};kn.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function c4(){}c4.prototype=kn.prototype;function Mc(A,e,t){this.props=A,this.context=e,this.refs=l4,this.updater=t||a4}var Dc=Mc.prototype=new c4;Dc.constructor=Mc;s4(Dc,kn.prototype);Dc.isPureReactComponent=!0;var Xu=Array.isArray,u4=Object.prototype.hasOwnProperty,Kc={current:null},d4={key:!0,ref:!0,__self:!0,__source:!0};function f4(A,e,t){var r,n={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)u4.call(e,r)&&!d4.hasOwnProperty(r)&&(n[r]=e[r]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];n.children=s}if(A&&A.defaultProps)for(r in a=A.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:Wi,type:A,key:i,ref:o,props:n,_owner:Kc.current}}function Kh(A,e){return{$$typeof:Wi,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}function _c(A){return typeof A=="object"&&A!==null&&A.$$typeof===Wi}function _h(A){var e={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(t){return e[t]})}var Ju=/\/+/g;function Js(A,e){return typeof A=="object"&&A!==null&&A.key!=null?_h(""+A.key):e.toString(36)}function Xo(A,e,t,r,n){var i=typeof A;(i==="undefined"||i==="boolean")&&(A=null);var o=!1;if(A===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(A.$$typeof){case Wi:case Uh:o=!0}}if(o)return o=A,n=n(o),A=r===""?"."+Js(o,0):r,Xu(n)?(t="",A!=null&&(t=A.replace(Ju,"$&/")+"/"),Xo(n,e,t,"",function(l){return l})):n!=null&&(_c(n)&&(n=Kh(n,t+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(Ju,"$&/")+"/")+A)),e.push(n)),1;if(o=0,r=r===""?".":r+":",Xu(A))for(var a=0;a<A.length;a++){i=A[a];var s=r+Js(i,a);o+=Xo(i,e,t,s,n)}else if(s=Dh(A),typeof s=="function")for(A=s.call(A),a=0;!(i=A.next()).done;)i=i.value,s=r+Js(i,a++),o+=Xo(i,e,t,s,n);else if(i==="object")throw e=String(A),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function no(A,e,t){if(A==null)return A;var r=[],n=0;return Xo(A,r,"","",function(i){return e.call(t,i,n++)}),r}function Th(A){if(A._status===-1){var e=A._result;e=e(),e.then(function(t){(A._status===0||A._status===-1)&&(A._status=1,A._result=t)},function(t){(A._status===0||A._status===-1)&&(A._status=2,A._result=t)}),A._status===-1&&(A._status=0,A._result=e)}if(A._status===1)return A._result.default;throw A._result}var ie={current:null},Jo={transition:null},Nh={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:Kc};Y.Children={map:no,forEach:function(A,e,t){no(A,function(){e.apply(this,arguments)},t)},count:function(A){var e=0;return no(A,function(){e++}),e},toArray:function(A){return no(A,function(e){return e})||[]},only:function(A){if(!_c(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};Y.Component=kn;Y.Fragment=xh;Y.Profiler=Hh;Y.PureComponent=Mc;Y.StrictMode=Eh;Y.Suspense=Ih;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nh;Y.cloneElement=function(A,e,t){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var r=s4({},A.props),n=A.key,i=A.ref,o=A._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Kc.current),e.key!==void 0&&(n=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(s in e)u4.call(e,s)&&!d4.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Wi,type:A.type,key:n,ref:i,props:r,_owner:o}};Y.createContext=function(A){return A={$$typeof:kh,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:Lh,_context:A},A.Consumer=A};Y.createElement=f4;Y.createFactory=function(A){var e=f4.bind(null,A);return e.type=A,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(A){return{$$typeof:bh,render:A}};Y.isValidElement=_c;Y.lazy=function(A){return{$$typeof:Mh,_payload:{_status:-1,_result:A},_init:Th}};Y.memo=function(A,e){return{$$typeof:Sh,type:A,compare:e===void 0?null:e}};Y.startTransition=function(A){var e=Jo.transition;Jo.transition={};try{A()}finally{Jo.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(A,e){return ie.current.useCallback(A,e)};Y.useContext=function(A){return ie.current.useContext(A)};Y.useDebugValue=function(){};Y.useDeferredValue=function(A){return ie.current.useDeferredValue(A)};Y.useEffect=function(A,e){return ie.current.useEffect(A,e)};Y.useId=function(){return ie.current.useId()};Y.useImperativeHandle=function(A,e,t){return ie.current.useImperativeHandle(A,e,t)};Y.useInsertionEffect=function(A,e){return ie.current.useInsertionEffect(A,e)};Y.useLayoutEffect=function(A,e){return ie.current.useLayoutEffect(A,e)};Y.useMemo=function(A,e){return ie.current.useMemo(A,e)};Y.useReducer=function(A,e,t){return ie.current.useReducer(A,e,t)};Y.useRef=function(A){return ie.current.useRef(A)};Y.useState=function(A){return ie.current.useState(A)};Y.useSyncExternalStore=function(A,e,t){return ie.current.useSyncExternalStore(A,e,t)};Y.useTransition=function(){return ie.current.useTransition()};Y.version="18.2.0";o4.exports=Y;var k=o4.exports;const Se=Fh(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh=k,Oh=Symbol.for("react.element"),Rh=Symbol.for("react.fragment"),jh=Object.prototype.hasOwnProperty,Ph=Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zh={key:!0,ref:!0,__self:!0,__source:!0};function g4(A,e,t){var r,n={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jh.call(e,r)&&!zh.hasOwnProperty(r)&&(n[r]=e[r]);if(A&&A.defaultProps)for(r in e=A.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:Oh,type:A,key:i,ref:o,props:n,_owner:Ph.current}}us.Fragment=Rh;us.jsx=g4;us.jsxs=g4;i4.exports=us;var y=i4.exports,el={},p4={exports:{}},ye={},h4={exports:{}},B4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function e(H,S){var M=H.length;H.push(S);A:for(;0<M;){var j=M-1>>>1,z=H[j];if(0<n(z,S))H[j]=S,H[M]=z,M=j;else break A}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var S=H[0],M=H.pop();if(M!==S){H[0]=M;A:for(var j=0,z=H.length,lA=z>>>1;j<lA;){var BA=2*(j+1)-1,CA=H[BA],oA=BA+1,EA=H[oA];if(0>n(CA,M))oA<z&&0>n(EA,CA)?(H[j]=EA,H[oA]=M,j=oA):(H[j]=CA,H[BA]=M,j=BA);else if(oA<z&&0>n(EA,M))H[j]=EA,H[oA]=M,j=oA;else break A}}return S}function n(H,S){var M=H.sortIndex-S.sortIndex;return M!==0?M:H.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;A.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();A.unstable_now=function(){return o.now()-a}}var s=[],l=[],c=1,u=null,d=3,g=!1,C=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(H){for(var S=t(l);S!==null;){if(S.callback===null)r(l);else if(S.startTime<=H)r(l),S.sortIndex=S.expirationTime,e(s,S);else break;S=t(l)}}function Q(H){if(v=!1,h(H),!C)if(t(s)!==null)C=!0,D(U);else{var S=t(l);S!==null&&K(Q,S.startTime-H)}}function U(H,S){C=!1,v&&(v=!1,p(x),x=-1),g=!0;var M=d;try{for(h(S),u=t(s);u!==null&&(!(u.expirationTime>S)||H&&!Z());){var j=u.callback;if(typeof j=="function"){u.callback=null,d=u.priorityLevel;var z=j(u.expirationTime<=S);S=A.unstable_now(),typeof z=="function"?u.callback=z:u===t(s)&&r(s),h(S)}else r(s);u=t(s)}if(u!==null)var lA=!0;else{var BA=t(l);BA!==null&&K(Q,BA.startTime-S),lA=!1}return lA}finally{u=null,d=M,g=!1}}var w=!1,m=null,x=-1,L=5,I=-1;function Z(){return!(A.unstable_now()-I<L)}function X(){if(m!==null){var H=A.unstable_now();I=H;var S=!0;try{S=m(!0,H)}finally{S?G():(w=!1,m=null)}}else w=!1}var G;if(typeof f=="function")G=function(){f(X)};else if(typeof MessageChannel<"u"){var AA=new MessageChannel,GA=AA.port2;AA.port1.onmessage=X,G=function(){GA.postMessage(null)}}else G=function(){E(X,0)};function D(H){m=H,w||(w=!0,G())}function K(H,S){x=E(function(){H(A.unstable_now())},S)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(H){H.callback=null},A.unstable_continueExecution=function(){C||g||(C=!0,D(U))},A.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},A.unstable_getCurrentPriorityLevel=function(){return d},A.unstable_getFirstCallbackNode=function(){return t(s)},A.unstable_next=function(H){switch(d){case 1:case 2:case 3:var S=3;break;default:S=d}var M=d;d=S;try{return H()}finally{d=M}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(H,S){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var M=d;d=H;try{return S()}finally{d=M}},A.unstable_scheduleCallback=function(H,S,M){var j=A.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?j+M:j):M=j,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=M+z,H={id:c++,callback:S,priorityLevel:H,startTime:M,expirationTime:z,sortIndex:-1},M>j?(H.sortIndex=M,e(l,H),t(s)===null&&H===t(l)&&(v?(p(x),x=-1):v=!0,K(Q,M-j))):(H.sortIndex=z,e(s,H),C||g||(C=!0,D(U))),H},A.unstable_shouldYield=Z,A.unstable_wrapCallback=function(H){var S=d;return function(){var M=d;d=S;try{return H.apply(this,arguments)}finally{d=M}}}})(B4);h4.exports=B4;var Gh=h4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C4=k,Qe=Gh;function b(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v4=new Set,Ui={};function Lr(A,e){dn(A,e),dn(A+"Capture",e)}function dn(A,e){for(Ui[A]=e,A=0;A<e.length;A++)v4.add(e[A])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Zh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yu={},qu={};function Wh(A){return tl.call(qu,A)?!0:tl.call(Yu,A)?!1:Zh.test(A)?qu[A]=!0:(Yu[A]=!0,!1)}function $h(A,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Xh(A,e,t,r){if(e===null||typeof e>"u"||$h(A,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function oe(A,e,t,r,n,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=A,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var zA={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){zA[A]=new oe(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var e=A[0];zA[e]=new oe(e,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){zA[A]=new oe(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){zA[A]=new oe(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){zA[A]=new oe(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){zA[A]=new oe(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){zA[A]=new oe(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){zA[A]=new oe(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){zA[A]=new oe(A,5,!1,A.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function Nc(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var e=A.replace(Tc,Nc);zA[e]=new oe(e,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var e=A.replace(Tc,Nc);zA[e]=new oe(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var e=A.replace(Tc,Nc);zA[e]=new oe(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){zA[A]=new oe(A,1,!1,A.toLowerCase(),null,!1,!1)});zA.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){zA[A]=new oe(A,1,!1,A.toLowerCase(),null,!0,!0)});function Vc(A,e,t,r){var n=zA.hasOwnProperty(e)?zA[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xh(e,t,n,r)&&(t=null),r||n===null?Wh(e)&&(t===null?A.removeAttribute(e):A.setAttribute(e,""+t)):n.mustUseProperty?A[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,r=n.attributeNamespace,t===null?A.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,r?A.setAttributeNS(r,e,t):A.setAttribute(e,t))))}var Et=C4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),w4=Symbol.for("react.provider"),m4=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Q4=Symbol.for("react.offscreen"),A0=Symbol.iterator;function Kn(A){return A===null||typeof A!="object"?null:(A=A0&&A[A0]||A["@@iterator"],typeof A=="function"?A:null)}var mA=Object.assign,Ys;function $n(A){if(Ys===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ys=e&&e[1]||""}return`
`+Ys+A}var qs=!1;function A1(A,e){if(!A||qs)return"";qs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(A,[],e)}else{try{e.call()}catch(l){r=l}A.call(e.prototype)}else{try{throw Error()}catch(l){r=l}A()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),i=r.stack.split(`
`),o=n.length-1,a=i.length-1;1<=o&&0<=a&&n[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(n[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||n[o]!==i[a]){var s=`
`+n[o].replace(" at new "," at ");return A.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",A.displayName)),s}while(1<=o&&0<=a);break}}}finally{qs=!1,Error.prepareStackTrace=t}return(A=A?A.displayName||A.name:"")?$n(A):""}function Jh(A){switch(A.tag){case 5:return $n(A.type);case 16:return $n("Lazy");case 13:return $n("Suspense");case 19:return $n("SuspenseList");case 0:case 2:case 15:return A=A1(A.type,!1),A;case 11:return A=A1(A.type.render,!1),A;case 1:return A=A1(A.type,!0),A;default:return""}}function ol(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case jr:return"Fragment";case Rr:return"Portal";case rl:return"Profiler";case Oc:return"StrictMode";case nl:return"Suspense";case il:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case m4:return(A.displayName||"Context")+".Consumer";case w4:return(A._context.displayName||"Context")+".Provider";case Rc:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case jc:return e=A.displayName||null,e!==null?e:ol(A.type)||"Memo";case St:e=A._payload,A=A._init;try{return ol(A(e))}catch{}}return null}function Yh(A){var e=A.type;switch(A.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=e.render,A=A.displayName||A.name||"",e.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(e);case 8:return e===Oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qt(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function y4(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qh(A){var e=y4(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),r=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,i=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function oo(A){A._valueTracker||(A._valueTracker=qh(A))}function F4(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return A&&(r=y4(A)?A.checked?"true":"false":A.value),A=r,A!==t?(e.setValue(A),!0):!1}function Qa(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function al(A,e){var t=e.checked;return mA({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??A._wrapperState.initialChecked})}function e0(A,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=qt(e.value!=null?e.value:t),A._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U4(A,e){e=e.checked,e!=null&&Vc(A,"checked",e,!1)}function sl(A,e){U4(A,e);var t=qt(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&A.value===""||A.value!=t)&&(A.value=""+t):A.value!==""+t&&(A.value=""+t);else if(r==="submit"||r==="reset"){A.removeAttribute("value");return}e.hasOwnProperty("value")?ll(A,e.type,t):e.hasOwnProperty("defaultValue")&&ll(A,e.type,qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(A.defaultChecked=!!e.defaultChecked)}function t0(A,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+A._wrapperState.initialValue,t||e===A.value||(A.value=e),A.defaultValue=e}t=A.name,t!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,t!==""&&(A.name=t)}function ll(A,e,t){(e!=="number"||Qa(A.ownerDocument)!==A)&&(t==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+t&&(A.defaultValue=""+t))}var Xn=Array.isArray;function rn(A,e,t,r){if(A=A.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<A.length;t++)n=e.hasOwnProperty("$"+A[t].value),A[t].selected!==n&&(A[t].selected=n),n&&r&&(A[t].defaultSelected=!0)}else{for(t=""+qt(t),e=null,n=0;n<A.length;n++){if(A[n].value===t){A[n].selected=!0,r&&(A[n].defaultSelected=!0);return}e!==null||A[n].disabled||(e=A[n])}e!==null&&(e.selected=!0)}}function cl(A,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return mA({},e,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function r0(A,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(b(92));if(Xn(t)){if(1<t.length)throw Error(b(93));t=t[0]}e=t}e==null&&(e=""),t=e}A._wrapperState={initialValue:qt(t)}}function x4(A,e){var t=qt(e.value),r=qt(e.defaultValue);t!=null&&(t=""+t,t!==A.value&&(A.value=t),e.defaultValue==null&&A.defaultValue!==t&&(A.defaultValue=t)),r!=null&&(A.defaultValue=""+r)}function n0(A){var e=A.textContent;e===A._wrapperState.initialValue&&e!==""&&e!==null&&(A.value=e)}function E4(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ul(A,e){return A==null||A==="http://www.w3.org/1999/xhtml"?E4(e):A==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var ao,H4=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return A(e,t,r,n)})}:A}(function(A,e){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;e.firstChild;)A.appendChild(e.firstChild)}});function xi(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AB=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(A){AB.forEach(function(e){e=e+A.charAt(0).toUpperCase()+A.substring(1),li[e]=li[A]})});function L4(A,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||li.hasOwnProperty(A)&&li[A]?(""+e).trim():e+"px"}function k4(A,e){A=A.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,n=L4(t,e[t],r);t==="float"&&(t="cssFloat"),r?A.setProperty(t,n):A[t]=n}}var eB=mA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(A,e){if(e){if(eB[A]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,A));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function fl(A,e){if(A.indexOf("-")===-1)return typeof e.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Pc(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var pl=null,nn=null,on=null;function i0(A){if(A=Ji(A)){if(typeof pl!="function")throw Error(b(280));var e=A.stateNode;e&&(e=hs(e),pl(A.stateNode,A.type,e))}}function b4(A){nn?on?on.push(A):on=[A]:nn=A}function I4(){if(nn){var A=nn,e=on;if(on=nn=null,i0(A),e)for(A=0;A<e.length;A++)i0(e[A])}}function S4(A,e){return A(e)}function M4(){}var e1=!1;function D4(A,e,t){if(e1)return A(e,t);e1=!0;try{return S4(A,e,t)}finally{e1=!1,(nn!==null||on!==null)&&(M4(),I4())}}function Ei(A,e){var t=A.stateNode;if(t===null)return null;var r=hs(t);if(r===null)return null;t=r[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(A=A.type,r=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!r;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(b(231,e,typeof t));return t}var hl=!1;if(Qt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){hl=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{hl=!1}function tB(A,e,t,r,n,i,o,a,s){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(c){this.onError(c)}}var ci=!1,ya=null,Fa=!1,Bl=null,rB={onError:function(A){ci=!0,ya=A}};function nB(A,e,t,r,n,i,o,a,s){ci=!1,ya=null,tB.apply(rB,arguments)}function iB(A,e,t,r,n,i,o,a,s){if(nB.apply(this,arguments),ci){if(ci){var l=ya;ci=!1,ya=null}else throw Error(b(198));Fa||(Fa=!0,Bl=l)}}function kr(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,e.flags&4098&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function K4(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function o0(A){if(kr(A)!==A)throw Error(b(188))}function oB(A){var e=A.alternate;if(!e){if(e=kr(A),e===null)throw Error(b(188));return e!==A?null:A}for(var t=A,r=e;;){var n=t.return;if(n===null)break;var i=n.alternate;if(i===null){if(r=n.return,r!==null){t=r;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===t)return o0(n),A;if(i===r)return o0(n),e;i=i.sibling}throw Error(b(188))}if(t.return!==r.return)t=n,r=i;else{for(var o=!1,a=n.child;a;){if(a===t){o=!0,t=n,r=i;break}if(a===r){o=!0,r=n,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=n;break}if(a===r){o=!0,r=i,t=n;break}a=a.sibling}if(!o)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?A:e}function _4(A){return A=oB(A),A!==null?T4(A):null}function T4(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var e=T4(A);if(e!==null)return e;A=A.sibling}return null}var N4=Qe.unstable_scheduleCallback,a0=Qe.unstable_cancelCallback,aB=Qe.unstable_shouldYield,sB=Qe.unstable_requestPaint,UA=Qe.unstable_now,lB=Qe.unstable_getCurrentPriorityLevel,zc=Qe.unstable_ImmediatePriority,V4=Qe.unstable_UserBlockingPriority,Ua=Qe.unstable_NormalPriority,cB=Qe.unstable_LowPriority,O4=Qe.unstable_IdlePriority,ds=null,it=null;function uB(A){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(ds,A,void 0,(A.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:gB,dB=Math.log,fB=Math.LN2;function gB(A){return A>>>=0,A===0?32:31-(dB(A)/fB|0)|0}var so=64,lo=4194304;function Jn(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function xa(A,e){var t=A.pendingLanes;if(t===0)return 0;var r=0,n=A.suspendedLanes,i=A.pingedLanes,o=t&268435455;if(o!==0){var a=o&~n;a!==0?r=Jn(a):(i&=o,i!==0&&(r=Jn(i)))}else o=t&~n,o!==0?r=Jn(o):i!==0&&(r=Jn(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,i=e&-e,n>=i||n===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=A.entangledLanes,e!==0)for(A=A.entanglements,e&=r;0<e;)t=31-Ze(e),n=1<<t,r|=A[t],e&=~n;return r}function pB(A,e){switch(A){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hB(A,e){for(var t=A.suspendedLanes,r=A.pingedLanes,n=A.expirationTimes,i=A.pendingLanes;0<i;){var o=31-Ze(i),a=1<<o,s=n[o];s===-1?(!(a&t)||a&r)&&(n[o]=pB(a,e)):s<=e&&(A.expiredLanes|=a),i&=~a}}function Cl(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function R4(){var A=so;return so<<=1,!(so&4194240)&&(so=64),A}function t1(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function $i(A,e,t){A.pendingLanes|=e,e!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,e=31-Ze(e),A[e]=t}function BB(A,e){var t=A.pendingLanes&~e;A.pendingLanes=e,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=e,A.mutableReadLanes&=e,A.entangledLanes&=e,e=A.entanglements;var r=A.eventTimes;for(A=A.expirationTimes;0<t;){var n=31-Ze(t),i=1<<n;e[n]=0,r[n]=-1,A[n]=-1,t&=~i}}function Gc(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var r=31-Ze(t),n=1<<r;n&e|A[r]&e&&(A[r]|=e),t&=~n}}var nA=0;function j4(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var P4,Zc,z4,G4,Z4,vl=!1,co=[],jt=null,Pt=null,zt=null,Hi=new Map,Li=new Map,Kt=[],CB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s0(A,e){switch(A){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function Tn(A,e,t,r,n,i){return A===null||A.nativeEvent!==i?(A={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Ji(e),e!==null&&Zc(e)),A):(A.eventSystemFlags|=r,e=A.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),A)}function vB(A,e,t,r,n){switch(e){case"focusin":return jt=Tn(jt,A,e,t,r,n),!0;case"dragenter":return Pt=Tn(Pt,A,e,t,r,n),!0;case"mouseover":return zt=Tn(zt,A,e,t,r,n),!0;case"pointerover":var i=n.pointerId;return Hi.set(i,Tn(Hi.get(i)||null,A,e,t,r,n)),!0;case"gotpointercapture":return i=n.pointerId,Li.set(i,Tn(Li.get(i)||null,A,e,t,r,n)),!0}return!1}function W4(A){var e=cr(A.target);if(e!==null){var t=kr(e);if(t!==null){if(e=t.tag,e===13){if(e=K4(t),e!==null){A.blockedOn=e,Z4(A.priority,function(){z4(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function Yo(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=wl(A.domEventName,A.eventSystemFlags,e[0],A.nativeEvent);if(t===null){t=A.nativeEvent;var r=new t.constructor(t.type,t);gl=r,t.target.dispatchEvent(r),gl=null}else return e=Ji(t),e!==null&&Zc(e),A.blockedOn=t,!1;e.shift()}return!0}function l0(A,e,t){Yo(A)&&t.delete(e)}function wB(){vl=!1,jt!==null&&Yo(jt)&&(jt=null),Pt!==null&&Yo(Pt)&&(Pt=null),zt!==null&&Yo(zt)&&(zt=null),Hi.forEach(l0),Li.forEach(l0)}function Nn(A,e){A.blockedOn===e&&(A.blockedOn=null,vl||(vl=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,wB)))}function ki(A){function e(n){return Nn(n,A)}if(0<co.length){Nn(co[0],A);for(var t=1;t<co.length;t++){var r=co[t];r.blockedOn===A&&(r.blockedOn=null)}}for(jt!==null&&Nn(jt,A),Pt!==null&&Nn(Pt,A),zt!==null&&Nn(zt,A),Hi.forEach(e),Li.forEach(e),t=0;t<Kt.length;t++)r=Kt[t],r.blockedOn===A&&(r.blockedOn=null);for(;0<Kt.length&&(t=Kt[0],t.blockedOn===null);)W4(t),t.blockedOn===null&&Kt.shift()}var an=Et.ReactCurrentBatchConfig,Ea=!0;function mB(A,e,t,r){var n=nA,i=an.transition;an.transition=null;try{nA=1,Wc(A,e,t,r)}finally{nA=n,an.transition=i}}function QB(A,e,t,r){var n=nA,i=an.transition;an.transition=null;try{nA=4,Wc(A,e,t,r)}finally{nA=n,an.transition=i}}function Wc(A,e,t,r){if(Ea){var n=wl(A,e,t,r);if(n===null)d1(A,e,r,Ha,t),s0(A,r);else if(vB(n,A,e,t,r))r.stopPropagation();else if(s0(A,r),e&4&&-1<CB.indexOf(A)){for(;n!==null;){var i=Ji(n);if(i!==null&&P4(i),i=wl(A,e,t,r),i===null&&d1(A,e,r,Ha,t),i===n)break;n=i}n!==null&&r.stopPropagation()}else d1(A,e,r,null,t)}}var Ha=null;function wl(A,e,t,r){if(Ha=null,A=Pc(r),A=cr(A),A!==null)if(e=kr(A),e===null)A=null;else if(t=e.tag,t===13){if(A=K4(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null);return Ha=A,null}function $4(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lB()){case zc:return 1;case V4:return 4;case Ua:case cB:return 16;case O4:return 536870912;default:return 16}default:return 16}}var Tt=null,$c=null,qo=null;function X4(){if(qo)return qo;var A,e=$c,t=e.length,r,n="value"in Tt?Tt.value:Tt.textContent,i=n.length;for(A=0;A<t&&e[A]===n[A];A++);var o=t-A;for(r=1;r<=o&&e[t-r]===n[i-r];r++);return qo=n.slice(A,1<r?1-r:void 0)}function Aa(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function uo(){return!0}function c0(){return!1}function Fe(A){function e(t,r,n,i,o){this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in A)A.hasOwnProperty(a)&&(t=A[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?uo:c0,this.isPropagationStopped=c0,this}return mA(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=Fe(bn),Xi=mA({},bn,{view:0,detail:0}),yB=Fe(Xi),r1,n1,Vn,fs=mA({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Vn&&(Vn&&A.type==="mousemove"?(r1=A.screenX-Vn.screenX,n1=A.screenY-Vn.screenY):n1=r1=0,Vn=A),r1)},movementY:function(A){return"movementY"in A?A.movementY:n1}}),u0=Fe(fs),FB=mA({},fs,{dataTransfer:0}),UB=Fe(FB),xB=mA({},Xi,{relatedTarget:0}),i1=Fe(xB),EB=mA({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),HB=Fe(EB),LB=mA({},bn,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),kB=Fe(LB),bB=mA({},bn,{data:0}),d0=Fe(bB),IB={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SB={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MB={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DB(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=MB[A])?!!e[A]:!1}function Jc(){return DB}var KB=mA({},Xi,{key:function(A){if(A.key){var e=IB[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=Aa(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?SB[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(A){return A.type==="keypress"?Aa(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Aa(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),_B=Fe(KB),TB=mA({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=Fe(TB),NB=mA({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),VB=Fe(NB),OB=mA({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),RB=Fe(OB),jB=mA({},fs,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),PB=Fe(jB),zB=[9,13,27,32],Yc=Qt&&"CompositionEvent"in window,ui=null;Qt&&"documentMode"in document&&(ui=document.documentMode);var GB=Qt&&"TextEvent"in window&&!ui,J4=Qt&&(!Yc||ui&&8<ui&&11>=ui),g0=" ",p0=!1;function Y4(A,e){switch(A){case"keyup":return zB.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function q4(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Pr=!1;function ZB(A,e){switch(A){case"compositionend":return q4(e);case"keypress":return e.which!==32?null:(p0=!0,g0);case"textInput":return A=e.data,A===g0&&p0?null:A;default:return null}}function WB(A,e){if(Pr)return A==="compositionend"||!Yc&&Y4(A,e)?(A=X4(),qo=$c=Tt=null,Pr=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return J4&&e.locale!=="ko"?null:e.data;default:return null}}var $B={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h0(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!$B[A.type]:e==="textarea"}function Ag(A,e,t,r){b4(r),e=La(e,"onChange"),0<e.length&&(t=new Xc("onChange","change",null,t,r),A.push({event:t,listeners:e}))}var di=null,bi=null;function XB(A){ug(A,0)}function gs(A){var e=Zr(A);if(F4(e))return A}function JB(A,e){if(A==="change")return e}var eg=!1;if(Qt){var o1;if(Qt){var a1="oninput"in document;if(!a1){var B0=document.createElement("div");B0.setAttribute("oninput","return;"),a1=typeof B0.oninput=="function"}o1=a1}else o1=!1;eg=o1&&(!document.documentMode||9<document.documentMode)}function C0(){di&&(di.detachEvent("onpropertychange",tg),bi=di=null)}function tg(A){if(A.propertyName==="value"&&gs(bi)){var e=[];Ag(e,bi,A,Pc(A)),D4(XB,e)}}function YB(A,e,t){A==="focusin"?(C0(),di=e,bi=t,di.attachEvent("onpropertychange",tg)):A==="focusout"&&C0()}function qB(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return gs(bi)}function A3(A,e){if(A==="click")return gs(e)}function e3(A,e){if(A==="input"||A==="change")return gs(e)}function t3(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var Je=typeof Object.is=="function"?Object.is:t3;function Ii(A,e){if(Je(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var n=t[r];if(!tl.call(e,n)||!Je(A[n],e[n]))return!1}return!0}function v0(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function w0(A,e){var t=v0(A);A=0;for(var r;t;){if(t.nodeType===3){if(r=A+t.textContent.length,A<=e&&r>=e)return{node:t,offset:e-A};A=r}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=v0(t)}}function rg(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?rg(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function ng(){for(var A=window,e=Qa();e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Qa(A.document)}return e}function qc(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}function r3(A){var e=ng(),t=A.focusedElem,r=A.selectionRange;if(e!==t&&t&&t.ownerDocument&&rg(t.ownerDocument.documentElement,t)){if(r!==null&&qc(t)){if(e=r.start,A=r.end,A===void 0&&(A=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(A,t.value.length);else if(A=(e=t.ownerDocument||document)&&e.defaultView||window,A.getSelection){A=A.getSelection();var n=t.textContent.length,i=Math.min(r.start,n);r=r.end===void 0?i:Math.min(r.end,n),!A.extend&&i>r&&(n=r,r=i,i=n),n=w0(t,i);var o=w0(t,r);n&&o&&(A.rangeCount!==1||A.anchorNode!==n.node||A.anchorOffset!==n.offset||A.focusNode!==o.node||A.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),A.removeAllRanges(),i>r?(A.addRange(e),A.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),A.addRange(e)))}}for(e=[],A=t;A=A.parentNode;)A.nodeType===1&&e.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)A=e[t],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var n3=Qt&&"documentMode"in document&&11>=document.documentMode,zr=null,ml=null,fi=null,Ql=!1;function m0(A,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ql||zr==null||zr!==Qa(r)||(r=zr,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Ii(fi,r)||(fi=r,r=La(ml,"onSelect"),0<r.length&&(e=new Xc("onSelect","select",null,e,t),A.push({event:e,listeners:r}),e.target=zr)))}function fo(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Gr={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},s1={},ig={};Qt&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ps(A){if(s1[A])return s1[A];if(!Gr[A])return A;var e=Gr[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in ig)return s1[A]=e[t];return A}var og=ps("animationend"),ag=ps("animationiteration"),sg=ps("animationstart"),lg=ps("transitionend"),cg=new Map,Q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(A,e){cg.set(A,e),Lr(e,[A])}for(var l1=0;l1<Q0.length;l1++){var c1=Q0[l1],i3=c1.toLowerCase(),o3=c1[0].toUpperCase()+c1.slice(1);tr(i3,"on"+o3)}tr(og,"onAnimationEnd");tr(ag,"onAnimationIteration");tr(sg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(lg,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function y0(A,e,t){var r=A.type||"unknown-event";A.currentTarget=t,iB(r,e,void 0,A),A.currentTarget=null}function ug(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var r=A[t],n=r.event;r=r.listeners;A:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,l=a.currentTarget;if(a=a.listener,s!==i&&n.isPropagationStopped())break A;y0(n,a,l),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,l=a.currentTarget,a=a.listener,s!==i&&n.isPropagationStopped())break A;y0(n,a,l),i=s}}}if(Fa)throw A=Bl,Fa=!1,Bl=null,A}function cA(A,e){var t=e[El];t===void 0&&(t=e[El]=new Set);var r=A+"__bubble";t.has(r)||(dg(e,A,2,!1),t.add(r))}function u1(A,e,t){var r=0;e&&(r|=4),dg(t,A,r,e)}var go="_reactListening"+Math.random().toString(36).slice(2);function Si(A){if(!A[go]){A[go]=!0,v4.forEach(function(t){t!=="selectionchange"&&(a3.has(t)||u1(t,!1,A),u1(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[go]||(e[go]=!0,u1("selectionchange",!1,e))}}function dg(A,e,t,r){switch($4(e)){case 1:var n=mB;break;case 4:n=QB;break;default:n=Wc}t=n.bind(null,e,t,A),n=void 0,!hl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?A.addEventListener(e,t,{capture:!0,passive:n}):A.addEventListener(e,t,!0):n!==void 0?A.addEventListener(e,t,{passive:n}):A.addEventListener(e,t,!1)}function d1(A,e,t,r,n){var i=r;if(!(e&1)&&!(e&2)&&r!==null)A:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;o=o.return}for(;a!==null;){if(o=cr(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue A}a=a.parentNode}}r=r.return}D4(function(){var l=i,c=Pc(t),u=[];A:{var d=cg.get(A);if(d!==void 0){var g=Xc,C=A;switch(A){case"keypress":if(Aa(t)===0)break A;case"keydown":case"keyup":g=_B;break;case"focusin":C="focus",g=i1;break;case"focusout":C="blur",g=i1;break;case"beforeblur":case"afterblur":g=i1;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=UB;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=VB;break;case og:case ag:case sg:g=HB;break;case lg:g=RB;break;case"scroll":g=yB;break;case"wheel":g=PB;break;case"copy":case"cut":case"paste":g=kB;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=f0}var v=(e&4)!==0,E=!v&&A==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=l,h;f!==null;){h=f;var Q=h.stateNode;if(h.tag===5&&Q!==null&&(h=Q,p!==null&&(Q=Ei(f,p),Q!=null&&v.push(Mi(f,Q,h)))),E)break;f=f.return}0<v.length&&(d=new g(d,C,null,t,c),u.push({event:d,listeners:v}))}}if(!(e&7)){A:{if(d=A==="mouseover"||A==="pointerover",g=A==="mouseout"||A==="pointerout",d&&t!==gl&&(C=t.relatedTarget||t.fromElement)&&(cr(C)||C[yt]))break A;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(C=t.relatedTarget||t.toElement,g=l,C=C?cr(C):null,C!==null&&(E=kr(C),C!==E||C.tag!==5&&C.tag!==6)&&(C=null)):(g=null,C=l),g!==C)){if(v=u0,Q="onMouseLeave",p="onMouseEnter",f="mouse",(A==="pointerout"||A==="pointerover")&&(v=f0,Q="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?d:Zr(g),h=C==null?d:Zr(C),d=new v(Q,f+"leave",g,t,c),d.target=E,d.relatedTarget=h,Q=null,cr(c)===l&&(v=new v(p,f+"enter",C,t,c),v.target=h,v.relatedTarget=E,Q=v),E=Q,g&&C)e:{for(v=g,p=C,f=0,h=v;h;h=br(h))f++;for(h=0,Q=p;Q;Q=br(Q))h++;for(;0<f-h;)v=br(v),f--;for(;0<h-f;)p=br(p),h--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break e;v=br(v),p=br(p)}v=null}else v=null;g!==null&&F0(u,d,g,v,!1),C!==null&&E!==null&&F0(u,E,C,v,!0)}}A:{if(d=l?Zr(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var U=JB;else if(h0(d))if(eg)U=e3;else{U=qB;var w=YB}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(U=A3);if(U&&(U=U(A,l))){Ag(u,U,t,c);break A}w&&w(A,d,l),A==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&ll(d,"number",d.value)}switch(w=l?Zr(l):window,A){case"focusin":(h0(w)||w.contentEditable==="true")&&(zr=w,ml=l,fi=null);break;case"focusout":fi=ml=zr=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,m0(u,t,c);break;case"selectionchange":if(n3)break;case"keydown":case"keyup":m0(u,t,c)}var m;if(Yc)A:{switch(A){case"compositionstart":var x="onCompositionStart";break A;case"compositionend":x="onCompositionEnd";break A;case"compositionupdate":x="onCompositionUpdate";break A}x=void 0}else Pr?Y4(A,t)&&(x="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(J4&&t.locale!=="ko"&&(Pr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Pr&&(m=X4()):(Tt=c,$c="value"in Tt?Tt.value:Tt.textContent,Pr=!0)),w=La(l,x),0<w.length&&(x=new d0(x,A,null,t,c),u.push({event:x,listeners:w}),m?x.data=m:(m=q4(t),m!==null&&(x.data=m)))),(m=GB?ZB(A,t):WB(A,t))&&(l=La(l,"onBeforeInput"),0<l.length&&(c=new d0("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=m))}ug(u,e)})}function Mi(A,e,t){return{instance:A,listener:e,currentTarget:t}}function La(A,e){for(var t=e+"Capture",r=[];A!==null;){var n=A,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=Ei(A,t),i!=null&&r.unshift(Mi(A,i,n)),i=Ei(A,e),i!=null&&r.push(Mi(A,i,n))),A=A.return}return r}function br(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function F0(A,e,t,r,n){for(var i=e._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,l=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&l!==null&&(a=l,n?(s=Ei(t,i),s!=null&&o.unshift(Mi(t,s,a))):n||(s=Ei(t,i),s!=null&&o.push(Mi(t,s,a)))),t=t.return}o.length!==0&&A.push({event:e,listeners:o})}var s3=/\r\n?/g,l3=/\u0000|\uFFFD/g;function U0(A){return(typeof A=="string"?A:""+A).replace(s3,`
`).replace(l3,"")}function po(A,e,t){if(e=U0(e),U0(A)!==e&&t)throw Error(b(425))}function ka(){}var yl=null,Fl=null;function Ul(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,c3=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,u3=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(A){return x0.resolve(null).then(A).catch(d3)}:xl;function d3(A){setTimeout(function(){throw A})}function f1(A,e){var t=e,r=0;do{var n=t.nextSibling;if(A.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(r===0){A.removeChild(n),ki(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=n}while(t);ki(e)}function Gt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return A}function E0(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}var In=Math.random().toString(36).slice(2),nt="__reactFiber$"+In,Di="__reactProps$"+In,yt="__reactContainer$"+In,El="__reactEvents$"+In,f3="__reactListeners$"+In,g3="__reactHandles$"+In;function cr(A){var e=A[nt];if(e)return e;for(var t=A.parentNode;t;){if(e=t[yt]||t[nt]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=E0(A);A!==null;){if(t=A[nt])return t;A=E0(A)}return e}A=t,t=A.parentNode}return null}function Ji(A){return A=A[nt]||A[yt],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function Zr(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(b(33))}function hs(A){return A[Di]||null}var Hl=[],Wr=-1;function rr(A){return{current:A}}function fA(A){0>Wr||(A.current=Hl[Wr],Hl[Wr]=null,Wr--)}function sA(A,e){Wr++,Hl[Wr]=A.current,A.current=e}var Ar={},qA=rr(Ar),de=rr(!1),Fr=Ar;function fn(A,e){var t=A.type.contextTypes;if(!t)return Ar;var r=A.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in t)n[i]=e[i];return r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=e,A.__reactInternalMemoizedMaskedChildContext=n),n}function fe(A){return A=A.childContextTypes,A!=null}function ba(){fA(de),fA(qA)}function H0(A,e,t){if(qA.current!==Ar)throw Error(b(168));sA(qA,e),sA(de,t)}function fg(A,e,t){var r=A.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(b(108,Yh(A)||"Unknown",n));return mA({},t,r)}function Ia(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||Ar,Fr=qA.current,sA(qA,A),sA(de,de.current),!0}function L0(A,e,t){var r=A.stateNode;if(!r)throw Error(b(169));t?(A=fg(A,e,Fr),r.__reactInternalMemoizedMergedChildContext=A,fA(de),fA(qA),sA(qA,A)):fA(de),sA(de,t)}var ht=null,Bs=!1,g1=!1;function gg(A){ht===null?ht=[A]:ht.push(A)}function p3(A){Bs=!0,gg(A)}function nr(){if(!g1&&ht!==null){g1=!0;var A=0,e=nA;try{var t=ht;for(nA=1;A<t.length;A++){var r=t[A];do r=r(!0);while(r!==null)}ht=null,Bs=!1}catch(n){throw ht!==null&&(ht=ht.slice(A+1)),N4(zc,nr),n}finally{nA=e,g1=!1}}return null}var $r=[],Xr=0,Sa=null,Ma=0,xe=[],Ee=0,Ur=null,Bt=1,Ct="";function ar(A,e){$r[Xr++]=Ma,$r[Xr++]=Sa,Sa=A,Ma=e}function pg(A,e,t){xe[Ee++]=Bt,xe[Ee++]=Ct,xe[Ee++]=Ur,Ur=A;var r=Bt;A=Ct;var n=32-Ze(r)-1;r&=~(1<<n),t+=1;var i=32-Ze(e)+n;if(30<i){var o=n-n%5;i=(r&(1<<o)-1).toString(32),r>>=o,n-=o,Bt=1<<32-Ze(e)+n|t<<n|r,Ct=i+A}else Bt=1<<i|t<<n|r,Ct=A}function Au(A){A.return!==null&&(ar(A,1),pg(A,1,0))}function eu(A){for(;A===Sa;)Sa=$r[--Xr],$r[Xr]=null,Ma=$r[--Xr],$r[Xr]=null;for(;A===Ur;)Ur=xe[--Ee],xe[Ee]=null,Ct=xe[--Ee],xe[Ee]=null,Bt=xe[--Ee],xe[Ee]=null}var me=null,we=null,hA=!1,ze=null;function hg(A,e){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=A,e=A.deletions,e===null?(A.deletions=[t],A.flags|=16):e.push(t)}function k0(A,e){switch(A.tag){case 5:var t=A.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(A.stateNode=e,me=A,we=Gt(e.firstChild),!0):!1;case 6:return e=A.pendingProps===""||e.nodeType!==3?null:e,e!==null?(A.stateNode=e,me=A,we=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ur!==null?{id:Bt,overflow:Ct}:null,A.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=e,t.return=A,A.child=t,me=A,we=null,!0):!1;default:return!1}}function Ll(A){return(A.mode&1)!==0&&(A.flags&128)===0}function kl(A){if(hA){var e=we;if(e){var t=e;if(!k0(A,e)){if(Ll(A))throw Error(b(418));e=Gt(t.nextSibling);var r=me;e&&k0(A,e)?hg(r,t):(A.flags=A.flags&-4097|2,hA=!1,me=A)}}else{if(Ll(A))throw Error(b(418));A.flags=A.flags&-4097|2,hA=!1,me=A}}}function b0(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;me=A}function ho(A){if(A!==me)return!1;if(!hA)return b0(A),hA=!0,!1;var e;if((e=A.tag!==3)&&!(e=A.tag!==5)&&(e=A.type,e=e!=="head"&&e!=="body"&&!Ul(A.type,A.memoizedProps)),e&&(e=we)){if(Ll(A))throw Bg(),Error(b(418));for(;e;)hg(A,e),e=Gt(e.nextSibling)}if(b0(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(b(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"){if(e===0){we=Gt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}A=A.nextSibling}we=null}}else we=me?Gt(A.stateNode.nextSibling):null;return!0}function Bg(){for(var A=we;A;)A=Gt(A.nextSibling)}function gn(){we=me=null,hA=!1}function tu(A){ze===null?ze=[A]:ze.push(A)}var h3=Et.ReactCurrentBatchConfig;function je(A,e){if(A&&A.defaultProps){e=mA({},e),A=A.defaultProps;for(var t in A)e[t]===void 0&&(e[t]=A[t]);return e}return e}var Da=rr(null),Ka=null,Jr=null,ru=null;function nu(){ru=Jr=Ka=null}function iu(A){var e=Da.current;fA(Da),A._currentValue=e}function bl(A,e,t){for(;A!==null;){var r=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),A===t)break;A=A.return}}function sn(A,e){Ka=A,ru=Jr=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&e&&(le=!0),A.firstContext=null)}function Me(A){var e=A._currentValue;if(ru!==A)if(A={context:A,memoizedValue:e,next:null},Jr===null){if(Ka===null)throw Error(b(308));Jr=A,Ka.dependencies={lanes:0,firstContext:A}}else Jr=Jr.next=A;return e}var ur=null;function ou(A){ur===null?ur=[A]:ur.push(A)}function Cg(A,e,t,r){var n=e.interleaved;return n===null?(t.next=t,ou(e)):(t.next=n.next,n.next=t),e.interleaved=t,Ft(A,r)}function Ft(A,e){A.lanes|=e;var t=A.alternate;for(t!==null&&(t.lanes|=e),t=A,A=A.return;A!==null;)A.childLanes|=e,t=A.alternate,t!==null&&(t.childLanes|=e),t=A,A=A.return;return t.tag===3?t.stateNode:null}var Mt=!1;function au(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function vt(A,e){return{eventTime:A,lane:e,tag:0,payload:null,callback:null,next:null}}function Zt(A,e,t){var r=A.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,Ft(A,t)}return n=r.interleaved,n===null?(e.next=e,ou(r)):(e.next=n.next,n.next=e),r.interleaved=e,Ft(A,t)}function ea(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,Gc(A,t)}}function I0(A,e){var t=A.updateQueue,r=A.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var n=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?n=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?n=i=e:i=i.next=e}else n=i=e;t={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:r.shared,effects:r.effects},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}function _a(A,e,t,r){var n=A.updateQueue;Mt=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,l=s.next;s.next=null,o===null?i=l:o.next=l,o=s;var c=A.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=s))}if(i!==null){var u=n.baseState;o=0,c=l=s=null,a=i;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var C=A,v=a;switch(d=e,g=t,v.tag){case 1:if(C=v.payload,typeof C=="function"){u=C.call(g,u,d);break A}u=C;break A;case 3:C.flags=C.flags&-65537|128;case 0:if(C=v.payload,d=typeof C=="function"?C.call(g,u,d):C,d==null)break A;u=mA({},u,d);break A;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(A.flags|=64,d=n.effects,d===null?n.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=g,s=u):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;d=a,a=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(!0);if(c===null&&(s=u),n.baseState=s,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else i===null&&(n.shared.lanes=0);Er|=o,A.lanes=o,A.memoizedState=u}}function S0(A,e,t){if(A=e.effects,e.effects=null,A!==null)for(e=0;e<A.length;e++){var r=A[e],n=r.callback;if(n!==null){if(r.callback=null,r=t,typeof n!="function")throw Error(b(191,n));n.call(r)}}}var wg=new C4.Component().refs;function Il(A,e,t,r){e=A.memoizedState,t=t(r,e),t=t==null?e:mA({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var Cs={isMounted:function(A){return(A=A._reactInternals)?kr(A)===A:!1},enqueueSetState:function(A,e,t){A=A._reactInternals;var r=ne(),n=$t(A),i=vt(r,n);i.payload=e,t!=null&&(i.callback=t),e=Zt(A,i,n),e!==null&&(We(e,A,n,r),ea(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var r=ne(),n=$t(A),i=vt(r,n);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=Zt(A,i,n),e!==null&&(We(e,A,n,r),ea(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=ne(),r=$t(A),n=vt(t,r);n.tag=2,e!=null&&(n.callback=e),e=Zt(A,n,r),e!==null&&(We(e,A,r,t),ea(e,A,r))}};function M0(A,e,t,r,n,i,o){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ii(t,r)||!Ii(n,i):!0}function mg(A,e,t){var r=!1,n=Ar,i=e.contextType;return typeof i=="object"&&i!==null?i=Me(i):(n=fe(e)?Fr:qA.current,r=e.contextTypes,i=(r=r!=null)?fn(A,n):Ar),e=new e(t,i),A.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cs,A.stateNode=e,e._reactInternals=A,r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=n,A.__reactInternalMemoizedMaskedChildContext=i),e}function D0(A,e,t,r){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==A&&Cs.enqueueReplaceState(e,e.state,null)}function Sl(A,e,t,r){var n=A.stateNode;n.props=t,n.state=A.memoizedState,n.refs=wg,au(A);var i=e.contextType;typeof i=="object"&&i!==null?n.context=Me(i):(i=fe(e)?Fr:qA.current,n.context=fn(A,i)),n.state=A.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Il(A,e,i,t),n.state=A.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Cs.enqueueReplaceState(n,n.state,null),_a(A,t,n,r),n.state=A.memoizedState),typeof n.componentDidMount=="function"&&(A.flags|=4194308)}function On(A,e,t){if(A=t.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,A));var n=r,i=""+A;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=n.refs;a===wg&&(a=n.refs={}),o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof A!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,A))}return A}function Bo(A,e){throw A=Object.prototype.toString.call(e),Error(b(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A))}function K0(A){var e=A._init;return e(A._payload)}function Qg(A){function e(p,f){if(A){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function t(p,f){if(!A)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function n(p,f){return p=Xt(p,f),p.index=0,p.sibling=null,p}function i(p,f,h){return p.index=h,A?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return A&&p.alternate===null&&(p.flags|=2),p}function a(p,f,h,Q){return f===null||f.tag!==6?(f=m1(h,p.mode,Q),f.return=p,f):(f=n(f,h),f.return=p,f)}function s(p,f,h,Q){var U=h.type;return U===jr?c(p,f,h.props.children,Q,h.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===St&&K0(U)===f.type)?(Q=n(f,h.props),Q.ref=On(p,f,h),Q.return=p,Q):(Q=aa(h.type,h.key,h.props,null,p.mode,Q),Q.ref=On(p,f,h),Q.return=p,Q)}function l(p,f,h,Q){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Q1(h,p.mode,Q),f.return=p,f):(f=n(f,h.children||[]),f.return=p,f)}function c(p,f,h,Q,U){return f===null||f.tag!==7?(f=Br(h,p.mode,Q,U),f.return=p,f):(f=n(f,h),f.return=p,f)}function u(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=m1(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case io:return h=aa(f.type,f.key,f.props,null,p.mode,h),h.ref=On(p,null,f),h.return=p,h;case Rr:return f=Q1(f,p.mode,h),f.return=p,f;case St:var Q=f._init;return u(p,Q(f._payload),h)}if(Xn(f)||Kn(f))return f=Br(f,p.mode,h,null),f.return=p,f;Bo(p,f)}return null}function d(p,f,h,Q){var U=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return U!==null?null:a(p,f,""+h,Q);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case io:return h.key===U?s(p,f,h,Q):null;case Rr:return h.key===U?l(p,f,h,Q):null;case St:return U=h._init,d(p,f,U(h._payload),Q)}if(Xn(h)||Kn(h))return U!==null?null:c(p,f,h,Q,null);Bo(p,h)}return null}function g(p,f,h,Q,U){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return p=p.get(h)||null,a(f,p,""+Q,U);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case io:return p=p.get(Q.key===null?h:Q.key)||null,s(f,p,Q,U);case Rr:return p=p.get(Q.key===null?h:Q.key)||null,l(f,p,Q,U);case St:var w=Q._init;return g(p,f,h,w(Q._payload),U)}if(Xn(Q)||Kn(Q))return p=p.get(h)||null,c(f,p,Q,U,null);Bo(f,Q)}return null}function C(p,f,h,Q){for(var U=null,w=null,m=f,x=f=0,L=null;m!==null&&x<h.length;x++){m.index>x?(L=m,m=null):L=m.sibling;var I=d(p,m,h[x],Q);if(I===null){m===null&&(m=L);break}A&&m&&I.alternate===null&&e(p,m),f=i(I,f,x),w===null?U=I:w.sibling=I,w=I,m=L}if(x===h.length)return t(p,m),hA&&ar(p,x),U;if(m===null){for(;x<h.length;x++)m=u(p,h[x],Q),m!==null&&(f=i(m,f,x),w===null?U=m:w.sibling=m,w=m);return hA&&ar(p,x),U}for(m=r(p,m);x<h.length;x++)L=g(m,p,x,h[x],Q),L!==null&&(A&&L.alternate!==null&&m.delete(L.key===null?x:L.key),f=i(L,f,x),w===null?U=L:w.sibling=L,w=L);return A&&m.forEach(function(Z){return e(p,Z)}),hA&&ar(p,x),U}function v(p,f,h,Q){var U=Kn(h);if(typeof U!="function")throw Error(b(150));if(h=U.call(h),h==null)throw Error(b(151));for(var w=U=null,m=f,x=f=0,L=null,I=h.next();m!==null&&!I.done;x++,I=h.next()){m.index>x?(L=m,m=null):L=m.sibling;var Z=d(p,m,I.value,Q);if(Z===null){m===null&&(m=L);break}A&&m&&Z.alternate===null&&e(p,m),f=i(Z,f,x),w===null?U=Z:w.sibling=Z,w=Z,m=L}if(I.done)return t(p,m),hA&&ar(p,x),U;if(m===null){for(;!I.done;x++,I=h.next())I=u(p,I.value,Q),I!==null&&(f=i(I,f,x),w===null?U=I:w.sibling=I,w=I);return hA&&ar(p,x),U}for(m=r(p,m);!I.done;x++,I=h.next())I=g(m,p,x,I.value,Q),I!==null&&(A&&I.alternate!==null&&m.delete(I.key===null?x:I.key),f=i(I,f,x),w===null?U=I:w.sibling=I,w=I);return A&&m.forEach(function(X){return e(p,X)}),hA&&ar(p,x),U}function E(p,f,h,Q){if(typeof h=="object"&&h!==null&&h.type===jr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case io:A:{for(var U=h.key,w=f;w!==null;){if(w.key===U){if(U=h.type,U===jr){if(w.tag===7){t(p,w.sibling),f=n(w,h.props.children),f.return=p,p=f;break A}}else if(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===St&&K0(U)===w.type){t(p,w.sibling),f=n(w,h.props),f.ref=On(p,w,h),f.return=p,p=f;break A}t(p,w);break}else e(p,w);w=w.sibling}h.type===jr?(f=Br(h.props.children,p.mode,Q,h.key),f.return=p,p=f):(Q=aa(h.type,h.key,h.props,null,p.mode,Q),Q.ref=On(p,f,h),Q.return=p,p=Q)}return o(p);case Rr:A:{for(w=h.key;f!==null;){if(f.key===w)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(p,f.sibling),f=n(f,h.children||[]),f.return=p,p=f;break A}else{t(p,f);break}else e(p,f);f=f.sibling}f=Q1(h,p.mode,Q),f.return=p,p=f}return o(p);case St:return w=h._init,E(p,f,w(h._payload),Q)}if(Xn(h))return C(p,f,h,Q);if(Kn(h))return v(p,f,h,Q);Bo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(p,f.sibling),f=n(f,h),f.return=p,p=f):(t(p,f),f=m1(h,p.mode,Q),f.return=p,p=f),o(p)):t(p,f)}return E}var pn=Qg(!0),yg=Qg(!1),Yi={},ot=rr(Yi),Ki=rr(Yi),_i=rr(Yi);function dr(A){if(A===Yi)throw Error(b(174));return A}function su(A,e){switch(sA(_i,e),sA(Ki,A),sA(ot,Yi),A=e.nodeType,A){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ul(null,"");break;default:A=A===8?e.parentNode:e,e=A.namespaceURI||null,A=A.tagName,e=ul(e,A)}fA(ot),sA(ot,e)}function hn(){fA(ot),fA(Ki),fA(_i)}function Fg(A){dr(_i.current);var e=dr(ot.current),t=ul(e,A.type);e!==t&&(sA(Ki,A),sA(ot,t))}function lu(A){Ki.current===A&&(fA(ot),fA(Ki))}var vA=rr(0);function Ta(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var p1=[];function cu(){for(var A=0;A<p1.length;A++)p1[A]._workInProgressVersionPrimary=null;p1.length=0}var ta=Et.ReactCurrentDispatcher,h1=Et.ReactCurrentBatchConfig,xr=0,wA=null,IA=null,KA=null,Na=!1,gi=!1,Ti=0,B3=0;function ZA(){throw Error(b(321))}function uu(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!Je(A[t],e[t]))return!1;return!0}function du(A,e,t,r,n,i){if(xr=i,wA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=A===null||A.memoizedState===null?m3:Q3,A=t(r,n),gi){i=0;do{if(gi=!1,Ti=0,25<=i)throw Error(b(301));i+=1,KA=IA=null,e.updateQueue=null,ta.current=y3,A=t(r,n)}while(gi)}if(ta.current=Va,e=IA!==null&&IA.next!==null,xr=0,KA=IA=wA=null,Na=!1,e)throw Error(b(300));return A}function fu(){var A=Ti!==0;return Ti=0,A}function et(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return KA===null?wA.memoizedState=KA=A:KA=KA.next=A,KA}function De(){if(IA===null){var A=wA.alternate;A=A!==null?A.memoizedState:null}else A=IA.next;var e=KA===null?wA.memoizedState:KA.next;if(e!==null)KA=e,IA=A;else{if(A===null)throw Error(b(310));IA=A,A={memoizedState:IA.memoizedState,baseState:IA.baseState,baseQueue:IA.baseQueue,queue:IA.queue,next:null},KA===null?wA.memoizedState=KA=A:KA=KA.next=A}return KA}function Ni(A,e){return typeof e=="function"?e(A):e}function B1(A){var e=De(),t=e.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=A;var r=IA,n=r.baseQueue,i=t.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}r.baseQueue=n=i,t.pending=null}if(n!==null){i=n.next,r=r.baseState;var a=o=null,s=null,l=i;do{var c=l.lane;if((xr&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:A(r,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};s===null?(a=s=u,o=r):s=s.next=u,wA.lanes|=c,Er|=c}l=l.next}while(l!==null&&l!==i);s===null?o=r:s.next=a,Je(r,e.memoizedState)||(le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=s,t.lastRenderedState=r}if(A=t.interleaved,A!==null){n=A;do i=n.lane,wA.lanes|=i,Er|=i,n=n.next;while(n!==A)}else n===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function C1(A){var e=De(),t=e.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=A;var r=t.dispatch,n=t.pending,i=e.memoizedState;if(n!==null){t.pending=null;var o=n=n.next;do i=A(i,o.action),o=o.next;while(o!==n);Je(i,e.memoizedState)||(le=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function Ug(){}function xg(A,e){var t=wA,r=De(),n=e(),i=!Je(r.memoizedState,n);if(i&&(r.memoizedState=n,le=!0),r=r.queue,gu(Lg.bind(null,t,r,A),[A]),r.getSnapshot!==e||i||KA!==null&&KA.memoizedState.tag&1){if(t.flags|=2048,Vi(9,Hg.bind(null,t,r,n,e),void 0,null),NA===null)throw Error(b(349));xr&30||Eg(t,e,n)}return n}function Eg(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=wA.updateQueue,e===null?(e={lastEffect:null,stores:null},wA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Hg(A,e,t,r){e.value=t,e.getSnapshot=r,kg(e)&&bg(A)}function Lg(A,e,t){return t(function(){kg(e)&&bg(A)})}function kg(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!Je(A,t)}catch{return!0}}function bg(A){var e=Ft(A,1);e!==null&&We(e,A,1,-1)}function _0(A){var e=et();return typeof A=="function"&&(A=A()),e.memoizedState=e.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:A},e.queue=A,A=A.dispatch=w3.bind(null,wA,A),[e.memoizedState,A]}function Vi(A,e,t,r){return A={tag:A,create:e,destroy:t,deps:r,next:null},e=wA.updateQueue,e===null?(e={lastEffect:null,stores:null},wA.updateQueue=e,e.lastEffect=A.next=A):(t=e.lastEffect,t===null?e.lastEffect=A.next=A:(r=t.next,t.next=A,A.next=r,e.lastEffect=A)),A}function Ig(){return De().memoizedState}function ra(A,e,t,r){var n=et();wA.flags|=A,n.memoizedState=Vi(1|e,t,void 0,r===void 0?null:r)}function vs(A,e,t,r){var n=De();r=r===void 0?null:r;var i=void 0;if(IA!==null){var o=IA.memoizedState;if(i=o.destroy,r!==null&&uu(r,o.deps)){n.memoizedState=Vi(e,t,i,r);return}}wA.flags|=A,n.memoizedState=Vi(1|e,t,i,r)}function T0(A,e){return ra(8390656,8,A,e)}function gu(A,e){return vs(2048,8,A,e)}function Sg(A,e){return vs(4,2,A,e)}function Mg(A,e){return vs(4,4,A,e)}function Dg(A,e){if(typeof e=="function")return A=A(),e(A),function(){e(null)};if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Kg(A,e,t){return t=t!=null?t.concat([A]):null,vs(4,4,Dg.bind(null,e,A),t)}function pu(){}function _g(A,e){var t=De();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&uu(e,r[1])?r[0]:(t.memoizedState=[A,e],A)}function Tg(A,e){var t=De();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&uu(e,r[1])?r[0]:(A=A(),t.memoizedState=[A,e],A)}function Ng(A,e,t){return xr&21?(Je(t,e)||(t=R4(),wA.lanes|=t,Er|=t,A.baseState=!0),e):(A.baseState&&(A.baseState=!1,le=!0),A.memoizedState=t)}function C3(A,e){var t=nA;nA=t!==0&&4>t?t:4,A(!0);var r=h1.transition;h1.transition={};try{A(!1),e()}finally{nA=t,h1.transition=r}}function Vg(){return De().memoizedState}function v3(A,e,t){var r=$t(A);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Og(A))Rg(e,t);else if(t=Cg(A,e,t,r),t!==null){var n=ne();We(t,A,r,n),jg(t,e,r)}}function w3(A,e,t){var r=$t(A),n={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Og(A))Rg(e,n);else{var i=A.alternate;if(A.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,t);if(n.hasEagerState=!0,n.eagerState=a,Je(a,o)){var s=e.interleaved;s===null?(n.next=n,ou(e)):(n.next=s.next,s.next=n),e.interleaved=n;return}}catch{}finally{}t=Cg(A,e,n,r),t!==null&&(n=ne(),We(t,A,r,n),jg(t,e,r))}}function Og(A){var e=A.alternate;return A===wA||e!==null&&e===wA}function Rg(A,e){gi=Na=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function jg(A,e,t){if(t&4194240){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,Gc(A,t)}}var Va={readContext:Me,useCallback:ZA,useContext:ZA,useEffect:ZA,useImperativeHandle:ZA,useInsertionEffect:ZA,useLayoutEffect:ZA,useMemo:ZA,useReducer:ZA,useRef:ZA,useState:ZA,useDebugValue:ZA,useDeferredValue:ZA,useTransition:ZA,useMutableSource:ZA,useSyncExternalStore:ZA,useId:ZA,unstable_isNewReconciler:!1},m3={readContext:Me,useCallback:function(A,e){return et().memoizedState=[A,e===void 0?null:e],A},useContext:Me,useEffect:T0,useImperativeHandle:function(A,e,t){return t=t!=null?t.concat([A]):null,ra(4194308,4,Dg.bind(null,e,A),t)},useLayoutEffect:function(A,e){return ra(4194308,4,A,e)},useInsertionEffect:function(A,e){return ra(4,2,A,e)},useMemo:function(A,e){var t=et();return e=e===void 0?null:e,A=A(),t.memoizedState=[A,e],A},useReducer:function(A,e,t){var r=et();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:e},r.queue=A,A=A.dispatch=v3.bind(null,wA,A),[r.memoizedState,A]},useRef:function(A){var e=et();return A={current:A},e.memoizedState=A},useState:_0,useDebugValue:pu,useDeferredValue:function(A){return et().memoizedState=A},useTransition:function(){var A=_0(!1),e=A[0];return A=C3.bind(null,A[1]),et().memoizedState=A,[e,A]},useMutableSource:function(){},useSyncExternalStore:function(A,e,t){var r=wA,n=et();if(hA){if(t===void 0)throw Error(b(407));t=t()}else{if(t=e(),NA===null)throw Error(b(349));xr&30||Eg(r,e,t)}n.memoizedState=t;var i={value:t,getSnapshot:e};return n.queue=i,T0(Lg.bind(null,r,i,A),[A]),r.flags|=2048,Vi(9,Hg.bind(null,r,i,t,e),void 0,null),t},useId:function(){var A=et(),e=NA.identifierPrefix;if(hA){var t=Ct,r=Bt;t=(r&~(1<<32-Ze(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ti++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=B3++,e=":"+e+"r"+t.toString(32)+":";return A.memoizedState=e},unstable_isNewReconciler:!1},Q3={readContext:Me,useCallback:_g,useContext:Me,useEffect:gu,useImperativeHandle:Kg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Tg,useReducer:B1,useRef:Ig,useState:function(){return B1(Ni)},useDebugValue:pu,useDeferredValue:function(A){var e=De();return Ng(e,IA.memoizedState,A)},useTransition:function(){var A=B1(Ni)[0],e=De().memoizedState;return[A,e]},useMutableSource:Ug,useSyncExternalStore:xg,useId:Vg,unstable_isNewReconciler:!1},y3={readContext:Me,useCallback:_g,useContext:Me,useEffect:gu,useImperativeHandle:Kg,useInsertionEffect:Sg,useLayoutEffect:Mg,useMemo:Tg,useReducer:C1,useRef:Ig,useState:function(){return C1(Ni)},useDebugValue:pu,useDeferredValue:function(A){var e=De();return IA===null?e.memoizedState=A:Ng(e,IA.memoizedState,A)},useTransition:function(){var A=C1(Ni)[0],e=De().memoizedState;return[A,e]},useMutableSource:Ug,useSyncExternalStore:xg,useId:Vg,unstable_isNewReconciler:!1};function Bn(A,e){try{var t="",r=e;do t+=Jh(r),r=r.return;while(r);var n=t}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:A,source:e,stack:n,digest:null}}function v1(A,e,t){return{value:A,source:null,stack:t??null,digest:e??null}}function Ml(A,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var F3=typeof WeakMap=="function"?WeakMap:Map;function Pg(A,e,t){t=vt(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Ra||(Ra=!0,Pl=r),Ml(A,e)},t}function zg(A,e,t){t=vt(-1,t),t.tag=3;var r=A.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;t.payload=function(){return r(n)},t.callback=function(){Ml(A,e)}}var i=A.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ml(A,e),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function N0(A,e,t){var r=A.pingCache;if(r===null){r=A.pingCache=new F3;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(t)||(n.add(t),A=T3.bind(null,A,e,t),e.then(A,A))}function V0(A){do{var e;if((e=A.tag===13)&&(e=A.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return A;A=A.return}while(A!==null);return null}function O0(A,e,t,r,n){return A.mode&1?(A.flags|=65536,A.lanes=n,A):(A===e?A.flags|=65536:(A.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=vt(-1,1),e.tag=2,Zt(t,e,1))),t.lanes|=1),A)}var U3=Et.ReactCurrentOwner,le=!1;function te(A,e,t,r){e.child=A===null?yg(e,null,t,r):pn(e,A.child,t,r)}function R0(A,e,t,r,n){t=t.render;var i=e.ref;return sn(e,n),r=du(A,e,t,r,i,n),t=fu(),A!==null&&!le?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Ut(A,e,n)):(hA&&t&&Au(e),e.flags|=1,te(A,e,r,n),e.child)}function j0(A,e,t,r,n){if(A===null){var i=t.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Gg(A,e,i,r,n)):(A=aa(t.type,null,r,e,e.mode,n),A.ref=e.ref,A.return=e,e.child=A)}if(i=A.child,!(A.lanes&n)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ii,t(o,r)&&A.ref===e.ref)return Ut(A,e,n)}return e.flags|=1,A=Xt(i,r),A.ref=e.ref,A.return=e,e.child=A}function Gg(A,e,t,r,n){if(A!==null){var i=A.memoizedProps;if(Ii(i,r)&&A.ref===e.ref)if(le=!1,e.pendingProps=r=i,(A.lanes&n)!==0)A.flags&131072&&(le=!0);else return e.lanes=A.lanes,Ut(A,e,n)}return Dl(A,e,t,r,n)}function Zg(A,e,t){var r=e.pendingProps,n=r.children,i=A!==null?A.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},sA(qr,ve),ve|=t;else{if(!(t&1073741824))return A=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:A,cachePool:null,transitions:null},e.updateQueue=null,sA(qr,ve),ve|=A,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,sA(qr,ve),ve|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,sA(qr,ve),ve|=r;return te(A,e,n,t),e.child}function Wg(A,e){var t=e.ref;(A===null&&t!==null||A!==null&&A.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Dl(A,e,t,r,n){var i=fe(t)?Fr:qA.current;return i=fn(e,i),sn(e,n),t=du(A,e,t,r,i,n),r=fu(),A!==null&&!le?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Ut(A,e,n)):(hA&&r&&Au(e),e.flags|=1,te(A,e,t,n),e.child)}function P0(A,e,t,r,n){if(fe(t)){var i=!0;Ia(e)}else i=!1;if(sn(e,n),e.stateNode===null)na(A,e),mg(e,t,r),Sl(e,t,r,n),r=!0;else if(A===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var s=o.context,l=t.contextType;typeof l=="object"&&l!==null?l=Me(l):(l=fe(t)?Fr:qA.current,l=fn(e,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==l)&&D0(e,o,r,l),Mt=!1;var d=e.memoizedState;o.state=d,_a(e,r,o,n),s=e.memoizedState,a!==r||d!==s||de.current||Mt?(typeof c=="function"&&(Il(e,t,c,r),s=e.memoizedState),(a=Mt||M0(e,t,a,r,d,s,l))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),o.props=r,o.state=s,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vg(A,e),a=e.memoizedProps,l=e.type===e.elementType?a:je(e.type,a),o.props=l,u=e.pendingProps,d=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=fe(t)?Fr:qA.current,s=fn(e,s));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||d!==s)&&D0(e,o,r,s),Mt=!1,d=e.memoizedState,o.state=d,_a(e,r,o,n);var C=e.memoizedState;a!==u||d!==C||de.current||Mt?(typeof g=="function"&&(Il(e,t,g,r),C=e.memoizedState),(l=Mt||M0(e,t,l,r,d,C,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,s)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=s,r=l):(typeof o.componentDidUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&d===A.memoizedState||(e.flags|=1024),r=!1)}return Kl(A,e,t,r,i,n)}function Kl(A,e,t,r,n,i){Wg(A,e);var o=(e.flags&128)!==0;if(!r&&!o)return n&&L0(e,t,!1),Ut(A,e,i);r=e.stateNode,U3.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,A!==null&&o?(e.child=pn(e,A.child,null,i),e.child=pn(e,null,a,i)):te(A,e,a,i),e.memoizedState=r.state,n&&L0(e,t,!0),e.child}function $g(A){var e=A.stateNode;e.pendingContext?H0(A,e.pendingContext,e.pendingContext!==e.context):e.context&&H0(A,e.context,!1),su(A,e.containerInfo)}function z0(A,e,t,r,n){return gn(),tu(n),e.flags|=256,te(A,e,t,r),e.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Tl(A){return{baseLanes:A,cachePool:null,transitions:null}}function Xg(A,e,t){var r=e.pendingProps,n=vA.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=A!==null&&A.memoizedState===null?!1:(n&2)!==0),a?(i=!0,e.flags&=-129):(A===null||A.memoizedState!==null)&&(n|=1),sA(vA,n&1),A===null)return kl(e),A=e.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(e.mode&1?A.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,A=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qs(o,r,0,null),A=Br(A,r,t,null),i.return=e,A.return=e,i.sibling=A,e.child=i,e.child.memoizedState=Tl(t),e.memoizedState=_l,A):hu(e,o));if(n=A.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return x3(A,e,o,r,a,n,t);if(i){i=r.fallback,o=e.mode,n=A.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=Xt(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?i=Xt(a,i):(i=Br(i,o,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=A.child.memoizedState,o=o===null?Tl(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=A.childLanes&~t,e.memoizedState=_l,r}return i=A.child,A=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,A!==null&&(t=e.deletions,t===null?(e.deletions=[A],e.flags|=16):t.push(A)),e.child=r,e.memoizedState=null,r}function hu(A,e){return e=Qs({mode:"visible",children:e},A.mode,0,null),e.return=A,A.child=e}function Co(A,e,t,r){return r!==null&&tu(r),pn(e,A.child,null,t),A=hu(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function x3(A,e,t,r,n,i,o){if(t)return e.flags&256?(e.flags&=-257,r=v1(Error(b(422))),Co(A,e,o,r)):e.memoizedState!==null?(e.child=A.child,e.flags|=128,null):(i=r.fallback,n=e.mode,r=Qs({mode:"visible",children:r.children},n,0,null),i=Br(i,n,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&pn(e,A.child,null,o),e.child.memoizedState=Tl(o),e.memoizedState=_l,i);if(!(e.mode&1))return Co(A,e,o,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=v1(i,r,void 0),Co(A,e,o,r)}if(a=(o&A.childLanes)!==0,le||a){if(r=NA,r!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|o)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Ft(A,n),We(r,A,n,-1))}return Qu(),r=v1(Error(b(421))),Co(A,e,o,r)}return n.data==="$?"?(e.flags|=128,e.child=A.child,e=N3.bind(null,A),n._reactRetry=e,null):(A=i.treeContext,we=Gt(n.nextSibling),me=e,hA=!0,ze=null,A!==null&&(xe[Ee++]=Bt,xe[Ee++]=Ct,xe[Ee++]=Ur,Bt=A.id,Ct=A.overflow,Ur=e),e=hu(e,r.children),e.flags|=4096,e)}function G0(A,e,t){A.lanes|=e;var r=A.alternate;r!==null&&(r.lanes|=e),bl(A.return,e,t)}function w1(A,e,t,r,n){var i=A.memoizedState;i===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=n)}function Jg(A,e,t){var r=e.pendingProps,n=r.revealOrder,i=r.tail;if(te(A,e,r.children,t),r=vA.current,r&2)r=r&1|2,e.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&G0(A,t,e);else if(A.tag===19)G0(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}r&=1}if(sA(vA,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(t=e.child,n=null;t!==null;)A=t.alternate,A!==null&&Ta(A)===null&&(n=t),t=t.sibling;t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),w1(e,!1,n,t,i);break;case"backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(A=n.alternate,A!==null&&Ta(A)===null){e.child=n;break}A=n.sibling,n.sibling=t,t=n,n=A}w1(e,!0,t,null,i);break;case"together":w1(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function na(A,e){!(e.mode&1)&&A!==null&&(A.alternate=null,e.alternate=null,e.flags|=2)}function Ut(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Er|=e.lanes,!(t&e.childLanes))return null;if(A!==null&&e.child!==A.child)throw Error(b(153));if(e.child!==null){for(A=e.child,t=Xt(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=Xt(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function E3(A,e,t){switch(e.tag){case 3:$g(e),gn();break;case 5:Fg(e);break;case 1:fe(e.type)&&Ia(e);break;case 4:su(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;sA(Da,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(sA(vA,vA.current&1),e.flags|=128,null):t&e.child.childLanes?Xg(A,e,t):(sA(vA,vA.current&1),A=Ut(A,e,t),A!==null?A.sibling:null);sA(vA,vA.current&1);break;case 19:if(r=(t&e.childLanes)!==0,A.flags&128){if(r)return Jg(A,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),sA(vA,vA.current),r)break;return null;case 22:case 23:return e.lanes=0,Zg(A,e,t)}return Ut(A,e,t)}var Yg,Nl,qg,A5;Yg=function(A,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)A.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Nl=function(){};qg=function(A,e,t,r){var n=A.memoizedProps;if(n!==r){A=e.stateNode,dr(ot.current);var i=null;switch(t){case"input":n=al(A,n),r=al(A,r),i=[];break;case"select":n=mA({},n,{value:void 0}),r=mA({},r,{value:void 0}),i=[];break;case"textarea":n=cl(A,n),r=cl(A,r),i=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(A.onclick=ka)}dl(t,r);var o;t=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var a=n[l];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ui.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var s=r[l];if(a=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(l,t)),t=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(l,s)):l==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(l)?(s!=null&&l==="onScroll"&&cA("scroll",A),i||a===s||(i=[])):(i=i||[]).push(l,s))}t&&(i=i||[]).push("style",t);var l=i;(e.updateQueue=l)&&(e.flags|=4)}};A5=function(A,e,t,r){t!==r&&(e.flags|=4)};function Rn(A,e){if(!hA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:r.sibling=null}}function WA(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,r=0;if(e)for(var n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=A,n=n.sibling;else for(n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=A,n=n.sibling;return A.subtreeFlags|=r,A.childLanes=t,e}function H3(A,e,t){var r=e.pendingProps;switch(eu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return WA(e),null;case 1:return fe(e.type)&&ba(),WA(e),null;case 3:return r=e.stateNode,hn(),fA(de),fA(qA),cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(A===null||A.child===null)&&(ho(e)?e.flags|=4:A===null||A.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ze!==null&&(Zl(ze),ze=null))),Nl(A,e),WA(e),null;case 5:lu(e);var n=dr(_i.current);if(t=e.type,A!==null&&e.stateNode!=null)qg(A,e,t,r,n),A.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return WA(e),null}if(A=dr(ot.current),ho(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[nt]=e,r[Di]=i,A=(e.mode&1)!==0,t){case"dialog":cA("cancel",r),cA("close",r);break;case"iframe":case"object":case"embed":cA("load",r);break;case"video":case"audio":for(n=0;n<Yn.length;n++)cA(Yn[n],r);break;case"source":cA("error",r);break;case"img":case"image":case"link":cA("error",r),cA("load",r);break;case"details":cA("toggle",r);break;case"input":e0(r,i),cA("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},cA("invalid",r);break;case"textarea":r0(r,i),cA("invalid",r)}dl(t,i),n=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&po(r.textContent,a,A),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&po(r.textContent,a,A),n=["children",""+a]):Ui.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&cA("scroll",r)}switch(t){case"input":oo(r),t0(r,i,!0);break;case"textarea":oo(r),n0(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ka)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=E4(t)),A==="http://www.w3.org/1999/xhtml"?t==="script"?(A=o.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof r.is=="string"?A=o.createElement(t,{is:r.is}):(A=o.createElement(t),t==="select"&&(o=A,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):A=o.createElementNS(A,t),A[nt]=e,A[Di]=r,Yg(A,e,!1,!1),e.stateNode=A;A:{switch(o=fl(t,r),t){case"dialog":cA("cancel",A),cA("close",A),n=r;break;case"iframe":case"object":case"embed":cA("load",A),n=r;break;case"video":case"audio":for(n=0;n<Yn.length;n++)cA(Yn[n],A);n=r;break;case"source":cA("error",A),n=r;break;case"img":case"image":case"link":cA("error",A),cA("load",A),n=r;break;case"details":cA("toggle",A),n=r;break;case"input":e0(A,r),n=al(A,r),cA("invalid",A);break;case"option":n=r;break;case"select":A._wrapperState={wasMultiple:!!r.multiple},n=mA({},r,{value:void 0}),cA("invalid",A);break;case"textarea":r0(A,r),n=cl(A,r),cA("invalid",A);break;default:n=r}dl(t,n),a=n;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?k4(A,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&H4(A,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&xi(A,s):typeof s=="number"&&xi(A,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ui.hasOwnProperty(i)?s!=null&&i==="onScroll"&&cA("scroll",A):s!=null&&Vc(A,i,s,o))}switch(t){case"input":oo(A),t0(A,r,!1);break;case"textarea":oo(A),n0(A);break;case"option":r.value!=null&&A.setAttribute("value",""+qt(r.value));break;case"select":A.multiple=!!r.multiple,i=r.value,i!=null?rn(A,!!r.multiple,i,!1):r.defaultValue!=null&&rn(A,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(A.onclick=ka)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break A;case"img":r=!0;break A;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return WA(e),null;case 6:if(A&&e.stateNode!=null)A5(A,e,A.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(t=dr(_i.current),dr(ot.current),ho(e)){if(r=e.stateNode,t=e.memoizedProps,r[nt]=e,(i=r.nodeValue!==t)&&(A=me,A!==null))switch(A.tag){case 3:po(r.nodeValue,t,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,t,(A.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[nt]=e,e.stateNode=r}return WA(e),null;case 13:if(fA(vA),r=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(hA&&we!==null&&e.mode&1&&!(e.flags&128))Bg(),gn(),e.flags|=98560,i=!1;else if(i=ho(e),r!==null&&r.dehydrated!==null){if(A===null){if(!i)throw Error(b(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[nt]=e}else gn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;WA(e),i=!1}else ze!==null&&(Zl(ze),ze=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(A!==null&&A.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(A===null||vA.current&1?MA===0&&(MA=3):Qu())),e.updateQueue!==null&&(e.flags|=4),WA(e),null);case 4:return hn(),Nl(A,e),A===null&&Si(e.stateNode.containerInfo),WA(e),null;case 10:return iu(e.type._context),WA(e),null;case 17:return fe(e.type)&&ba(),WA(e),null;case 19:if(fA(vA),i=e.memoizedState,i===null)return WA(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Rn(i,!1);else{if(MA!==0||A!==null&&A.flags&128)for(A=e.child;A!==null;){if(o=Ta(A),o!==null){for(e.flags|=128,Rn(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,A=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=A,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,A=o.dependencies,i.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),t=t.sibling;return sA(vA,vA.current&1|2),e.child}A=A.sibling}i.tail!==null&&UA()>Cn&&(e.flags|=128,r=!0,Rn(i,!1),e.lanes=4194304)}else{if(!r)if(A=Ta(o),A!==null){if(e.flags|=128,r=!0,t=A.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!hA)return WA(e),null}else 2*UA()-i.renderingStartTime>Cn&&t!==1073741824&&(e.flags|=128,r=!0,Rn(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=UA(),e.sibling=null,t=vA.current,sA(vA,r?t&1|2:t&1),e):(WA(e),null);case 22:case 23:return mu(),r=e.memoizedState!==null,A!==null&&A.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ve&1073741824&&(WA(e),e.subtreeFlags&6&&(e.flags|=8192)):WA(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function L3(A,e){switch(eu(e),e.tag){case 1:return fe(e.type)&&ba(),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return hn(),fA(de),fA(qA),cu(),A=e.flags,A&65536&&!(A&128)?(e.flags=A&-65537|128,e):null;case 5:return lu(e),null;case 13:if(fA(vA),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(b(340));gn()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return fA(vA),null;case 4:return hn(),null;case 10:return iu(e.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var vo=!1,JA=!1,k3=typeof WeakSet=="function"?WeakSet:Set,V=null;function Yr(A,e){var t=A.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){QA(A,e,r)}else t.current=null}function Vl(A,e,t){try{t()}catch(r){QA(A,e,r)}}var Z0=!1;function b3(A,e){if(yl=Ea,A=ng(),qc(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var n=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break A}var o=0,a=-1,s=-1,l=0,c=0,u=A,d=null;e:for(;;){for(var g;u!==t||n!==0&&u.nodeType!==3||(a=o+n),u!==i||r!==0&&u.nodeType!==3||(s=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)d=u,u=g;for(;;){if(u===A)break e;if(d===t&&++l===n&&(a=o),d===i&&++c===r&&(s=o),(g=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=g}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fl={focusedElem:A,selectionRange:t},Ea=!1,V=e;V!==null;)if(e=V,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,V=A;else for(;V!==null;){e=V;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var v=C.memoizedProps,E=C.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:je(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(Q){QA(e,e.return,Q)}if(A=e.sibling,A!==null){A.return=e.return,V=A;break}V=e.return}return C=Z0,Z0=!1,C}function pi(A,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&A)===A){var i=n.destroy;n.destroy=void 0,i!==void 0&&Vl(e,t,i)}n=n.next}while(n!==r)}}function ws(A,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Ol(A){var e=A.ref;if(e!==null){var t=A.stateNode;switch(A.tag){case 5:A=t;break;default:A=t}typeof e=="function"?e(A):e.current=A}}function e5(A){var e=A.alternate;e!==null&&(A.alternate=null,e5(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&(delete e[nt],delete e[Di],delete e[El],delete e[f3],delete e[g3])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function t5(A){return A.tag===5||A.tag===3||A.tag===4}function W0(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||t5(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function Rl(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(A,e):t.insertBefore(A,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(A,t)):(e=t,e.appendChild(A)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ka));else if(r!==4&&(A=A.child,A!==null))for(Rl(A,e,t),A=A.sibling;A!==null;)Rl(A,e,t),A=A.sibling}function jl(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(r!==4&&(A=A.child,A!==null))for(jl(A,e,t),A=A.sibling;A!==null;)jl(A,e,t),A=A.sibling}var OA=null,Pe=!1;function Ht(A,e,t){for(t=t.child;t!==null;)r5(A,e,t),t=t.sibling}function r5(A,e,t){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(ds,t)}catch{}switch(t.tag){case 5:JA||Yr(t,e);case 6:var r=OA,n=Pe;OA=null,Ht(A,e,t),OA=r,Pe=n,OA!==null&&(Pe?(A=OA,t=t.stateNode,A.nodeType===8?A.parentNode.removeChild(t):A.removeChild(t)):OA.removeChild(t.stateNode));break;case 18:OA!==null&&(Pe?(A=OA,t=t.stateNode,A.nodeType===8?f1(A.parentNode,t):A.nodeType===1&&f1(A,t),ki(A)):f1(OA,t.stateNode));break;case 4:r=OA,n=Pe,OA=t.stateNode.containerInfo,Pe=!0,Ht(A,e,t),OA=r,Pe=n;break;case 0:case 11:case 14:case 15:if(!JA&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var i=n,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vl(t,e,o),n=n.next}while(n!==r)}Ht(A,e,t);break;case 1:if(!JA&&(Yr(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){QA(t,e,a)}Ht(A,e,t);break;case 21:Ht(A,e,t);break;case 22:t.mode&1?(JA=(r=JA)||t.memoizedState!==null,Ht(A,e,t),JA=r):Ht(A,e,t);break;default:Ht(A,e,t)}}function $0(A){var e=A.updateQueue;if(e!==null){A.updateQueue=null;var t=A.stateNode;t===null&&(t=A.stateNode=new k3),e.forEach(function(r){var n=V3.bind(null,A,r);t.has(r)||(t.add(r),r.then(n,n))})}}function Ve(A,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];try{var i=A,o=e,a=o;A:for(;a!==null;){switch(a.tag){case 5:OA=a.stateNode,Pe=!1;break A;case 3:OA=a.stateNode.containerInfo,Pe=!0;break A;case 4:OA=a.stateNode.containerInfo,Pe=!0;break A}a=a.return}if(OA===null)throw Error(b(160));r5(i,o,n),OA=null,Pe=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(l){QA(n,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)n5(e,A),e=e.sibling}function n5(A,e){var t=A.alternate,r=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(Ve(e,A),qe(A),r&4){try{pi(3,A,A.return),ws(3,A)}catch(v){QA(A,A.return,v)}try{pi(5,A,A.return)}catch(v){QA(A,A.return,v)}}break;case 1:Ve(e,A),qe(A),r&512&&t!==null&&Yr(t,t.return);break;case 5:if(Ve(e,A),qe(A),r&512&&t!==null&&Yr(t,t.return),A.flags&32){var n=A.stateNode;try{xi(n,"")}catch(v){QA(A,A.return,v)}}if(r&4&&(n=A.stateNode,n!=null)){var i=A.memoizedProps,o=t!==null?t.memoizedProps:i,a=A.type,s=A.updateQueue;if(A.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&U4(n,i),fl(a,o);var l=fl(a,i);for(o=0;o<s.length;o+=2){var c=s[o],u=s[o+1];c==="style"?k4(n,u):c==="dangerouslySetInnerHTML"?H4(n,u):c==="children"?xi(n,u):Vc(n,c,u,l)}switch(a){case"input":sl(n,i);break;case"textarea":x4(n,i);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?rn(n,!!i.multiple,g,!1):d!==!!i.multiple&&(i.defaultValue!=null?rn(n,!!i.multiple,i.defaultValue,!0):rn(n,!!i.multiple,i.multiple?[]:"",!1))}n[Di]=i}catch(v){QA(A,A.return,v)}}break;case 6:if(Ve(e,A),qe(A),r&4){if(A.stateNode===null)throw Error(b(162));n=A.stateNode,i=A.memoizedProps;try{n.nodeValue=i}catch(v){QA(A,A.return,v)}}break;case 3:if(Ve(e,A),qe(A),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(v){QA(A,A.return,v)}break;case 4:Ve(e,A),qe(A);break;case 13:Ve(e,A),qe(A),n=A.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(vu=UA())),r&4&&$0(A);break;case 22:if(c=t!==null&&t.memoizedState!==null,A.mode&1?(JA=(l=JA)||c,Ve(e,A),JA=l):Ve(e,A),qe(A),r&8192){if(l=A.memoizedState!==null,(A.stateNode.isHidden=l)&&!c&&A.mode&1)for(V=A,c=A.child;c!==null;){for(u=V=c;V!==null;){switch(d=V,g=d.child,d.tag){case 0:case 11:case 14:case 15:pi(4,d,d.return);break;case 1:Yr(d,d.return);var C=d.stateNode;if(typeof C.componentWillUnmount=="function"){r=d,t=d.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(v){QA(r,t,v)}}break;case 5:Yr(d,d.return);break;case 22:if(d.memoizedState!==null){J0(u);continue}}g!==null?(g.return=d,V=g):J0(u)}c=c.sibling}A:for(c=null,u=A;;){if(u.tag===5){if(c===null){c=u;try{n=u.stateNode,l?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=u.stateNode,s=u.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=L4("display",o))}catch(v){QA(A,A.return,v)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(v){QA(A,A.return,v)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===A)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===A)break A;for(;u.sibling===null;){if(u.return===null||u.return===A)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Ve(e,A),qe(A),r&4&&$0(A);break;case 21:break;default:Ve(e,A),qe(A)}}function qe(A){var e=A.flags;if(e&2){try{A:{for(var t=A.return;t!==null;){if(t5(t)){var r=t;break A}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(xi(n,""),r.flags&=-33);var i=W0(A);jl(A,i,n);break;case 3:case 4:var o=r.stateNode.containerInfo,a=W0(A);Rl(A,a,o);break;default:throw Error(b(161))}}catch(s){QA(A,A.return,s)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function I3(A,e,t){V=A,i5(A)}function i5(A,e,t){for(var r=(A.mode&1)!==0;V!==null;){var n=V,i=n.child;if(n.tag===22&&r){var o=n.memoizedState!==null||vo;if(!o){var a=n.alternate,s=a!==null&&a.memoizedState!==null||JA;a=vo;var l=JA;if(vo=o,(JA=s)&&!l)for(V=n;V!==null;)o=V,s=o.child,o.tag===22&&o.memoizedState!==null?Y0(n):s!==null?(s.return=o,V=s):Y0(n);for(;i!==null;)V=i,i5(i),i=i.sibling;V=n,vo=a,JA=l}X0(A)}else n.subtreeFlags&8772&&i!==null?(i.return=n,V=i):X0(A)}}function X0(A){for(;V!==null;){var e=V;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:JA||ws(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!JA)if(t===null)r.componentDidMount();else{var n=e.elementType===e.type?t.memoizedProps:je(e.type,t.memoizedProps);r.componentDidUpdate(n,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&S0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}S0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&ki(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}JA||e.flags&512&&Ol(e)}catch(d){QA(e,e.return,d)}}if(e===A){V=null;break}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}}function J0(A){for(;V!==null;){var e=V;if(e===A){V=null;break}var t=e.sibling;if(t!==null){t.return=e.return,V=t;break}V=e.return}}function Y0(A){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ws(4,e)}catch(s){QA(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(s){QA(e,n,s)}}var i=e.return;try{Ol(e)}catch(s){QA(e,i,s)}break;case 5:var o=e.return;try{Ol(e)}catch(s){QA(e,o,s)}}}catch(s){QA(e,e.return,s)}if(e===A){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var S3=Math.ceil,Oa=Et.ReactCurrentDispatcher,Bu=Et.ReactCurrentOwner,Ie=Et.ReactCurrentBatchConfig,q=0,NA=null,bA=null,PA=0,ve=0,qr=rr(0),MA=0,Oi=null,Er=0,ms=0,Cu=0,hi=null,se=null,vu=0,Cn=1/0,ft=null,Ra=!1,Pl=null,Wt=null,wo=!1,Nt=null,ja=0,Bi=0,zl=null,ia=-1,oa=0;function ne(){return q&6?UA():ia!==-1?ia:ia=UA()}function $t(A){return A.mode&1?q&2&&PA!==0?PA&-PA:h3.transition!==null?(oa===0&&(oa=R4()),oa):(A=nA,A!==0||(A=window.event,A=A===void 0?16:$4(A.type)),A):1}function We(A,e,t,r){if(50<Bi)throw Bi=0,zl=null,Error(b(185));$i(A,t,r),(!(q&2)||A!==NA)&&(A===NA&&(!(q&2)&&(ms|=t),MA===4&&_t(A,PA)),ge(A,r),t===1&&q===0&&!(e.mode&1)&&(Cn=UA()+500,Bs&&nr()))}function ge(A,e){var t=A.callbackNode;hB(A,e);var r=xa(A,A===NA?PA:0);if(r===0)t!==null&&a0(t),A.callbackNode=null,A.callbackPriority=0;else if(e=r&-r,A.callbackPriority!==e){if(t!=null&&a0(t),e===1)A.tag===0?p3(q0.bind(null,A)):gg(q0.bind(null,A)),u3(function(){!(q&6)&&nr()}),t=null;else{switch(j4(r)){case 1:t=zc;break;case 4:t=V4;break;case 16:t=Ua;break;case 536870912:t=O4;break;default:t=Ua}t=f5(t,o5.bind(null,A))}A.callbackPriority=e,A.callbackNode=t}}function o5(A,e){if(ia=-1,oa=0,q&6)throw Error(b(327));var t=A.callbackNode;if(ln()&&A.callbackNode!==t)return null;var r=xa(A,A===NA?PA:0);if(r===0)return null;if(r&30||r&A.expiredLanes||e)e=Pa(A,r);else{e=r;var n=q;q|=2;var i=s5();(NA!==A||PA!==e)&&(ft=null,Cn=UA()+500,hr(A,e));do try{K3();break}catch(a){a5(A,a)}while(!0);nu(),Oa.current=i,q=n,bA!==null?e=0:(NA=null,PA=0,e=MA)}if(e!==0){if(e===2&&(n=Cl(A),n!==0&&(r=n,e=Gl(A,n))),e===1)throw t=Oi,hr(A,0),_t(A,r),ge(A,UA()),t;if(e===6)_t(A,r);else{if(n=A.current.alternate,!(r&30)&&!M3(n)&&(e=Pa(A,r),e===2&&(i=Cl(A),i!==0&&(r=i,e=Gl(A,i))),e===1))throw t=Oi,hr(A,0),_t(A,r),ge(A,UA()),t;switch(A.finishedWork=n,A.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:sr(A,se,ft);break;case 3:if(_t(A,r),(r&130023424)===r&&(e=vu+500-UA(),10<e)){if(xa(A,0)!==0)break;if(n=A.suspendedLanes,(n&r)!==r){ne(),A.pingedLanes|=A.suspendedLanes&n;break}A.timeoutHandle=xl(sr.bind(null,A,se,ft),e);break}sr(A,se,ft);break;case 4:if(_t(A,r),(r&4194240)===r)break;for(e=A.eventTimes,n=-1;0<r;){var o=31-Ze(r);i=1<<o,o=e[o],o>n&&(n=o),r&=~i}if(r=n,r=UA()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*S3(r/1960))-r,10<r){A.timeoutHandle=xl(sr.bind(null,A,se,ft),r);break}sr(A,se,ft);break;case 5:sr(A,se,ft);break;default:throw Error(b(329))}}}return ge(A,UA()),A.callbackNode===t?o5.bind(null,A):null}function Gl(A,e){var t=hi;return A.current.memoizedState.isDehydrated&&(hr(A,e).flags|=256),A=Pa(A,e),A!==2&&(e=se,se=t,e!==null&&Zl(e)),A}function Zl(A){se===null?se=A:se.push.apply(se,A)}function M3(A){for(var e=A;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var n=t[r],i=n.getSnapshot;n=n.value;try{if(!Je(i(),n))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _t(A,e){for(e&=~Cu,e&=~ms,A.suspendedLanes|=e,A.pingedLanes&=~e,A=A.expirationTimes;0<e;){var t=31-Ze(e),r=1<<t;A[t]=-1,e&=~r}}function q0(A){if(q&6)throw Error(b(327));ln();var e=xa(A,0);if(!(e&1))return ge(A,UA()),null;var t=Pa(A,e);if(A.tag!==0&&t===2){var r=Cl(A);r!==0&&(e=r,t=Gl(A,r))}if(t===1)throw t=Oi,hr(A,0),_t(A,e),ge(A,UA()),t;if(t===6)throw Error(b(345));return A.finishedWork=A.current.alternate,A.finishedLanes=e,sr(A,se,ft),ge(A,UA()),null}function wu(A,e){var t=q;q|=1;try{return A(e)}finally{q=t,q===0&&(Cn=UA()+500,Bs&&nr())}}function Hr(A){Nt!==null&&Nt.tag===0&&!(q&6)&&ln();var e=q;q|=1;var t=Ie.transition,r=nA;try{if(Ie.transition=null,nA=1,A)return A()}finally{nA=r,Ie.transition=t,q=e,!(q&6)&&nr()}}function mu(){ve=qr.current,fA(qr)}function hr(A,e){A.finishedWork=null,A.finishedLanes=0;var t=A.timeoutHandle;if(t!==-1&&(A.timeoutHandle=-1,c3(t)),bA!==null)for(t=bA.return;t!==null;){var r=t;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ba();break;case 3:hn(),fA(de),fA(qA),cu();break;case 5:lu(r);break;case 4:hn();break;case 13:fA(vA);break;case 19:fA(vA);break;case 10:iu(r.type._context);break;case 22:case 23:mu()}t=t.return}if(NA=A,bA=A=Xt(A.current,null),PA=ve=e,MA=0,Oi=null,Cu=ms=Er=0,se=hi=null,ur!==null){for(e=0;e<ur.length;e++)if(t=ur[e],r=t.interleaved,r!==null){t.interleaved=null;var n=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=n,r.next=o}t.pending=r}ur=null}return A}function a5(A,e){do{var t=bA;try{if(nu(),ta.current=Va,Na){for(var r=wA.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}Na=!1}if(xr=0,KA=IA=wA=null,gi=!1,Ti=0,Bu.current=null,t===null||t.return===null){MA=1,Oi=e,bA=null;break}A:{var i=A,o=t.return,a=t,s=e;if(e=PA,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var l=s,c=a,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=V0(o);if(g!==null){g.flags&=-257,O0(g,o,a,i,e),g.mode&1&&N0(i,l,e),e=g,s=l;var C=e.updateQueue;if(C===null){var v=new Set;v.add(s),e.updateQueue=v}else C.add(s);break A}else{if(!(e&1)){N0(i,l,e),Qu();break A}s=Error(b(426))}}else if(hA&&a.mode&1){var E=V0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),O0(E,o,a,i,e),tu(Bn(s,a));break A}}i=s=Bn(s,a),MA!==4&&(MA=2),hi===null?hi=[i]:hi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var p=Pg(i,s,e);I0(i,p);break A;case 1:a=s;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Wt===null||!Wt.has(h)))){i.flags|=65536,e&=-e,i.lanes|=e;var Q=zg(i,a,e);I0(i,Q);break A}}i=i.return}while(i!==null)}c5(t)}catch(U){e=U,bA===t&&t!==null&&(bA=t=t.return);continue}break}while(!0)}function s5(){var A=Oa.current;return Oa.current=Va,A===null?Va:A}function Qu(){(MA===0||MA===3||MA===2)&&(MA=4),NA===null||!(Er&268435455)&&!(ms&268435455)||_t(NA,PA)}function Pa(A,e){var t=q;q|=2;var r=s5();(NA!==A||PA!==e)&&(ft=null,hr(A,e));do try{D3();break}catch(n){a5(A,n)}while(!0);if(nu(),q=t,Oa.current=r,bA!==null)throw Error(b(261));return NA=null,PA=0,MA}function D3(){for(;bA!==null;)l5(bA)}function K3(){for(;bA!==null&&!aB();)l5(bA)}function l5(A){var e=d5(A.alternate,A,ve);A.memoizedProps=A.pendingProps,e===null?c5(A):bA=e,Bu.current=null}function c5(A){var e=A;do{var t=e.alternate;if(A=e.return,e.flags&32768){if(t=L3(t,e),t!==null){t.flags&=32767,bA=t;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{MA=6,bA=null;return}}else if(t=H3(t,e,ve),t!==null){bA=t;return}if(e=e.sibling,e!==null){bA=e;return}bA=e=A}while(e!==null);MA===0&&(MA=5)}function sr(A,e,t){var r=nA,n=Ie.transition;try{Ie.transition=null,nA=1,_3(A,e,t,r)}finally{Ie.transition=n,nA=r}return null}function _3(A,e,t,r){do ln();while(Nt!==null);if(q&6)throw Error(b(327));t=A.finishedWork;var n=A.finishedLanes;if(t===null)return null;if(A.finishedWork=null,A.finishedLanes=0,t===A.current)throw Error(b(177));A.callbackNode=null,A.callbackPriority=0;var i=t.lanes|t.childLanes;if(BB(A,i),A===NA&&(bA=NA=null,PA=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wo||(wo=!0,f5(Ua,function(){return ln(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var o=nA;nA=1;var a=q;q|=4,Bu.current=null,b3(A,t),n5(t,A),r3(Fl),Ea=!!yl,Fl=yl=null,A.current=t,I3(t),sB(),q=a,nA=o,Ie.transition=i}else A.current=t;if(wo&&(wo=!1,Nt=A,ja=n),i=A.pendingLanes,i===0&&(Wt=null),uB(t.stateNode),ge(A,UA()),e!==null)for(r=A.onRecoverableError,t=0;t<e.length;t++)n=e[t],r(n.value,{componentStack:n.stack,digest:n.digest});if(Ra)throw Ra=!1,A=Pl,Pl=null,A;return ja&1&&A.tag!==0&&ln(),i=A.pendingLanes,i&1?A===zl?Bi++:(Bi=0,zl=A):Bi=0,nr(),null}function ln(){if(Nt!==null){var A=j4(ja),e=Ie.transition,t=nA;try{if(Ie.transition=null,nA=16>A?16:A,Nt===null)var r=!1;else{if(A=Nt,Nt=null,ja=0,q&6)throw Error(b(331));var n=q;for(q|=4,V=A.current;V!==null;){var i=V,o=i.child;if(V.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var l=a[s];for(V=l;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:pi(8,c,i)}var u=c.child;if(u!==null)u.return=c,V=u;else for(;V!==null;){c=V;var d=c.sibling,g=c.return;if(e5(c),c===l){V=null;break}if(d!==null){d.return=g,V=d;break}V=g}}}var C=i.alternate;if(C!==null){var v=C.child;if(v!==null){C.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}V=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,V=o;else A:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pi(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,V=p;break A}V=i.return}}var f=A.current;for(V=f;V!==null;){o=V;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,V=h;else A:for(o=f;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ws(9,a)}}catch(U){QA(a,a.return,U)}if(a===o){V=null;break A}var Q=a.sibling;if(Q!==null){Q.return=a.return,V=Q;break A}V=a.return}}if(q=n,nr(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(ds,A)}catch{}r=!0}return r}finally{nA=t,Ie.transition=e}}return!1}function Ad(A,e,t){e=Bn(t,e),e=Pg(A,e,1),A=Zt(A,e,1),e=ne(),A!==null&&($i(A,1,e),ge(A,e))}function QA(A,e,t){if(A.tag===3)Ad(A,A,t);else for(;e!==null;){if(e.tag===3){Ad(e,A,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){A=Bn(t,A),A=zg(e,A,1),e=Zt(e,A,1),A=ne(),e!==null&&($i(e,1,A),ge(e,A));break}}e=e.return}}function T3(A,e,t){var r=A.pingCache;r!==null&&r.delete(e),e=ne(),A.pingedLanes|=A.suspendedLanes&t,NA===A&&(PA&t)===t&&(MA===4||MA===3&&(PA&130023424)===PA&&500>UA()-vu?hr(A,0):Cu|=t),ge(A,e)}function u5(A,e){e===0&&(A.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var t=ne();A=Ft(A,e),A!==null&&($i(A,e,t),ge(A,t))}function N3(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),u5(A,t)}function V3(A,e){var t=0;switch(A.tag){case 13:var r=A.stateNode,n=A.memoizedState;n!==null&&(t=n.retryLane);break;case 19:r=A.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),u5(A,t)}var d5;d5=function(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps||de.current)le=!0;else{if(!(A.lanes&t)&&!(e.flags&128))return le=!1,E3(A,e,t);le=!!(A.flags&131072)}else le=!1,hA&&e.flags&1048576&&pg(e,Ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;na(A,e),A=e.pendingProps;var n=fn(e,qA.current);sn(e,t),n=du(null,e,r,A,n,t);var i=fu();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fe(r)?(i=!0,Ia(e)):i=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,au(e),n.updater=Cs,e.stateNode=n,n._reactInternals=e,Sl(e,r,A,t),e=Kl(null,e,r,!0,i,t)):(e.tag=0,hA&&i&&Au(e),te(null,e,n,t),e=e.child),e;case 16:r=e.elementType;A:{switch(na(A,e),A=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=R3(r),A=je(r,A),n){case 0:e=Dl(null,e,r,A,t);break A;case 1:e=P0(null,e,r,A,t);break A;case 11:e=R0(null,e,r,A,t);break A;case 14:e=j0(null,e,r,je(r.type,A),t);break A}throw Error(b(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:je(r,n),Dl(A,e,r,n,t);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:je(r,n),P0(A,e,r,n,t);case 3:A:{if($g(e),A===null)throw Error(b(387));r=e.pendingProps,i=e.memoizedState,n=i.element,vg(A,e),_a(e,r,null,t);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){n=Bn(Error(b(423)),e),e=z0(A,e,r,t,n);break A}else if(r!==n){n=Bn(Error(b(424)),e),e=z0(A,e,r,t,n);break A}else for(we=Gt(e.stateNode.containerInfo.firstChild),me=e,hA=!0,ze=null,t=yg(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gn(),r===n){e=Ut(A,e,t);break A}te(A,e,r,t)}e=e.child}return e;case 5:return Fg(e),A===null&&kl(e),r=e.type,n=e.pendingProps,i=A!==null?A.memoizedProps:null,o=n.children,Ul(r,n)?o=null:i!==null&&Ul(r,i)&&(e.flags|=32),Wg(A,e),te(A,e,o,t),e.child;case 6:return A===null&&kl(e),null;case 13:return Xg(A,e,t);case 4:return su(e,e.stateNode.containerInfo),r=e.pendingProps,A===null?e.child=pn(e,null,r,t):te(A,e,r,t),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:je(r,n),R0(A,e,r,n,t);case 7:return te(A,e,e.pendingProps,t),e.child;case 8:return te(A,e,e.pendingProps.children,t),e.child;case 12:return te(A,e,e.pendingProps.children,t),e.child;case 10:A:{if(r=e.type._context,n=e.pendingProps,i=e.memoizedProps,o=n.value,sA(Da,r._currentValue),r._currentValue=o,i!==null)if(Je(i.value,o)){if(i.children===n.children&&!de.current){e=Ut(A,e,t);break A}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=vt(-1,t&-t),s.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),bl(i.return,t,e),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(b(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),bl(o,t,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}te(A,e,n.children,t),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,sn(e,t),n=Me(n),r=r(n),e.flags|=1,te(A,e,r,t),e.child;case 14:return r=e.type,n=je(r,e.pendingProps),n=je(r.type,n),j0(A,e,r,n,t);case 15:return Gg(A,e,e.type,e.pendingProps,t);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:je(r,n),na(A,e),e.tag=1,fe(r)?(A=!0,Ia(e)):A=!1,sn(e,t),mg(e,r,n),Sl(e,r,n,t),Kl(null,e,r,!0,A,t);case 19:return Jg(A,e,t);case 22:return Zg(A,e,t)}throw Error(b(156,e.tag))};function f5(A,e){return N4(A,e)}function O3(A,e,t,r){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(A,e,t,r){return new O3(A,e,t,r)}function yu(A){return A=A.prototype,!(!A||!A.isReactComponent)}function R3(A){if(typeof A=="function")return yu(A)?1:0;if(A!=null){if(A=A.$$typeof,A===Rc)return 11;if(A===jc)return 14}return 2}function Xt(A,e){var t=A.alternate;return t===null?(t=Le(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&14680064,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t}function aa(A,e,t,r,n,i){var o=2;if(r=A,typeof A=="function")yu(A)&&(o=1);else if(typeof A=="string")o=5;else A:switch(A){case jr:return Br(t.children,n,i,e);case Oc:o=8,n|=8;break;case rl:return A=Le(12,t,e,n|2),A.elementType=rl,A.lanes=i,A;case nl:return A=Le(13,t,e,n),A.elementType=nl,A.lanes=i,A;case il:return A=Le(19,t,e,n),A.elementType=il,A.lanes=i,A;case Q4:return Qs(t,n,i,e);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case w4:o=10;break A;case m4:o=9;break A;case Rc:o=11;break A;case jc:o=14;break A;case St:o=16,r=null;break A}throw Error(b(130,A==null?A:typeof A,""))}return e=Le(o,t,e,n),e.elementType=A,e.type=r,e.lanes=i,e}function Br(A,e,t,r){return A=Le(7,A,r,e),A.lanes=t,A}function Qs(A,e,t,r){return A=Le(22,A,r,e),A.elementType=Q4,A.lanes=t,A.stateNode={isHidden:!1},A}function m1(A,e,t){return A=Le(6,A,null,e),A.lanes=t,A}function Q1(A,e,t){return e=Le(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}function j3(A,e,t,r,n){this.tag=e,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=t1(0),this.expirationTimes=t1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=t1(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Fu(A,e,t,r,n,i,o,a,s){return A=new j3(A,e,t,a,s),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Le(3,null,null,e),A.current=i,i.stateNode=A,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(i),A}function P3(A,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:r==null?null:""+r,children:A,containerInfo:e,implementation:t}}function g5(A){if(!A)return Ar;A=A._reactInternals;A:{if(kr(A)!==A||A.tag!==1)throw Error(b(170));var e=A;do{switch(e.tag){case 3:e=e.stateNode.context;break A;case 1:if(fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break A}}e=e.return}while(e!==null);throw Error(b(171))}if(A.tag===1){var t=A.type;if(fe(t))return fg(A,t,e)}return e}function p5(A,e,t,r,n,i,o,a,s){return A=Fu(t,r,!0,A,n,i,o,a,s),A.context=g5(null),t=A.current,r=ne(),n=$t(t),i=vt(r,n),i.callback=e??null,Zt(t,i,n),A.current.lanes=n,$i(A,n,r),ge(A,r),A}function ys(A,e,t,r){var n=e.current,i=ne(),o=$t(n);return t=g5(t),e.context===null?e.context=t:e.pendingContext=t,e=vt(i,o),e.payload={element:A},r=r===void 0?null:r,r!==null&&(e.callback=r),A=Zt(n,e,o),A!==null&&(We(A,n,o,i),ea(A,n,o)),o}function za(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function ed(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function Uu(A,e){ed(A,e),(A=A.alternate)&&ed(A,e)}function z3(){return null}var h5=typeof reportError=="function"?reportError:function(A){console.error(A)};function xu(A){this._internalRoot=A}Fs.prototype.render=xu.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(b(409));ys(A,e,null,null)};Fs.prototype.unmount=xu.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Hr(function(){ys(null,A,null,null)}),e[yt]=null}};function Fs(A){this._internalRoot=A}Fs.prototype.unstable_scheduleHydration=function(A){if(A){var e=G4();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Kt.length&&e!==0&&e<Kt[t].priority;t++);Kt.splice(t,0,A),t===0&&W4(A)}};function Eu(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Us(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function td(){}function G3(A,e,t,r,n){if(n){if(typeof r=="function"){var i=r;r=function(){var l=za(o);i.call(l)}}var o=p5(e,r,A,0,null,!1,!1,"",td);return A._reactRootContainer=o,A[yt]=o.current,Si(A.nodeType===8?A.parentNode:A),Hr(),o}for(;n=A.lastChild;)A.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var l=za(s);a.call(l)}}var s=Fu(A,0,!1,null,null,!1,!1,"",td);return A._reactRootContainer=s,A[yt]=s.current,Si(A.nodeType===8?A.parentNode:A),Hr(function(){ys(e,s,t,r)}),s}function xs(A,e,t,r,n){var i=t._reactRootContainer;if(i){var o=i;if(typeof n=="function"){var a=n;n=function(){var s=za(o);a.call(s)}}ys(e,o,A,n)}else o=G3(t,e,A,n,r);return za(o)}P4=function(A){switch(A.tag){case 3:var e=A.stateNode;if(e.current.memoizedState.isDehydrated){var t=Jn(e.pendingLanes);t!==0&&(Gc(e,t|1),ge(e,UA()),!(q&6)&&(Cn=UA()+500,nr()))}break;case 13:Hr(function(){var r=Ft(A,1);if(r!==null){var n=ne();We(r,A,1,n)}}),Uu(A,1)}};Zc=function(A){if(A.tag===13){var e=Ft(A,134217728);if(e!==null){var t=ne();We(e,A,134217728,t)}Uu(A,134217728)}};z4=function(A){if(A.tag===13){var e=$t(A),t=Ft(A,e);if(t!==null){var r=ne();We(t,A,e,r)}Uu(A,e)}};G4=function(){return nA};Z4=function(A,e){var t=nA;try{return nA=A,e()}finally{nA=t}};pl=function(A,e,t){switch(e){case"input":if(sl(A,t),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==A&&r.form===A.form){var n=hs(r);if(!n)throw Error(b(90));F4(r),sl(r,n)}}}break;case"textarea":x4(A,t);break;case"select":e=t.value,e!=null&&rn(A,!!t.multiple,e,!1)}};S4=wu;M4=Hr;var Z3={usingClientEntryPoint:!1,Events:[Ji,Zr,hs,b4,I4,wu]},jn={findFiberByHostInstance:cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W3={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=_4(A),A===null?null:A.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||z3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{ds=mo.inject(W3),it=mo}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z3;ye.createPortal=function(A,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(e))throw Error(b(200));return P3(A,e,null,t)};ye.createRoot=function(A,e){if(!Eu(A))throw Error(b(299));var t=!1,r="",n=h5;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Fu(A,1,!1,null,null,t,!1,r,n),A[yt]=e.current,Si(A.nodeType===8?A.parentNode:A),new xu(e)};ye.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(b(188)):(A=Object.keys(A).join(","),Error(b(268,A)));return A=_4(e),A=A===null?null:A.stateNode,A};ye.flushSync=function(A){return Hr(A)};ye.hydrate=function(A,e,t){if(!Us(e))throw Error(b(200));return xs(null,A,e,!0,t)};ye.hydrateRoot=function(A,e,t){if(!Eu(A))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,n=!1,i="",o=h5;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=p5(e,null,A,1,t??null,n,!1,i,o),A[yt]=e.current,Si(A),r)for(A=0;A<r.length;A++)t=r[A],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);return new Fs(e)};ye.render=function(A,e,t){if(!Us(e))throw Error(b(200));return xs(null,A,e,!1,t)};ye.unmountComponentAtNode=function(A){if(!Us(A))throw Error(b(40));return A._reactRootContainer?(Hr(function(){xs(null,null,A,!1,function(){A._reactRootContainer=null,A[yt]=null})}),!0):!1};ye.unstable_batchedUpdates=wu;ye.unstable_renderSubtreeIntoContainer=function(A,e,t,r){if(!Us(t))throw Error(b(200));if(A==null||A._reactInternals===void 0)throw Error(b(38));return xs(A,e,t,!1,r)};ye.version="18.2.0-next-9e3b772b8-20220608";function B5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B5)}catch(A){console.error(A)}}B5(),p4.exports=ye;var $3=p4.exports,rd=$3;el.createRoot=rd.createRoot,el.hydrateRoot=rd.hydrateRoot;var F=function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},F.apply(this,arguments)};function Hu(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function ce(A,e){var t=typeof Symbol=="function"&&A[Symbol.iterator];if(!t)return A;var r=t.call(A),n,i=[],o;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return i}function Ga(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||Array.prototype.slice.call(e))}function R(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}var Be={},Es={exports:{}},Pn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function X3(){if(nd)return Pn;nd=1;var A=Se,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(a,s,l){var c,u={},d=null,g=null;l!==void 0&&(d=""+l),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(g=s.ref);for(c in s)r.call(s,c)&&!i.hasOwnProperty(c)&&(u[c]=s[c]);if(a&&a.defaultProps)for(c in s=a.defaultProps,s)u[c]===void 0&&(u[c]=s[c]);return{$$typeof:e,type:a,key:d,ref:g,props:u,_owner:n.current}}return Pn.Fragment=t,Pn.jsx=o,Pn.jsxs=o,Pn}(function(A){A.exports=X3()})(Es);const Ri=Es.exports.Fragment,B=Es.exports.jsx,O=Es.exports.jsxs;var uA="-ms-",Ci="-moz-",eA="-webkit-",C5="comm",Hs="rule",Lu="decl",J3="@import",v5="@keyframes",Y3="@layer",w5=Math.abs,ku=String.fromCharCode,Wl=Object.assign;function q3(A,e){return _A(A,0)^45?(((e<<2^_A(A,0))<<2^_A(A,1))<<2^_A(A,2))<<2^_A(A,3):0}function m5(A){return A.trim()}function gt(A,e){return(A=e.exec(A))?A[0]:A}function W(A,e,t){return A.replace(e,t)}function sa(A,e,t){return A.indexOf(e,t)}function _A(A,e){return A.charCodeAt(e)|0}function vn(A,e,t){return A.slice(e,t)}function tt(A){return A.length}function Q5(A){return A.length}function qn(A,e){return e.push(A),A}function A9(A,e){return A.map(e).join("")}function id(A,e){return A.filter(function(t){return!gt(t,e)})}var Ls=1,wn=1,y5=0,Ke=0,HA=0,Sn="";function ks(A,e,t,r,n,i,o,a){return{value:A,root:e,parent:t,type:r,props:n,children:i,line:Ls,column:wn,length:o,return:"",siblings:a}}function Lt(A,e){return Wl(ks("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Ir(A){for(;A.root;)A=Lt(A.root,{children:[A]});qn(A,A.siblings)}function e9(){return HA}function t9(){return HA=Ke>0?_A(Sn,--Ke):0,wn--,HA===10&&(wn=1,Ls--),HA}function $e(){return HA=Ke<y5?_A(Sn,Ke++):0,wn++,HA===10&&(wn=1,Ls++),HA}function Cr(){return _A(Sn,Ke)}function la(){return Ke}function bs(A,e){return vn(Sn,A,e)}function $l(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r9(A){return Ls=wn=1,y5=tt(Sn=A),Ke=0,[]}function n9(A){return Sn="",A}function y1(A){return m5(bs(Ke-1,Xl(A===91?A+2:A===40?A+1:A)))}function i9(A){for(;(HA=Cr())&&HA<33;)$e();return $l(A)>2||$l(HA)>3?"":" "}function o9(A,e){for(;--e&&$e()&&!(HA<48||HA>102||HA>57&&HA<65||HA>70&&HA<97););return bs(A,la()+(e<6&&Cr()==32&&$e()==32))}function Xl(A){for(;$e();)switch(HA){case A:return Ke;case 34:case 39:A!==34&&A!==39&&Xl(HA);break;case 40:A===41&&Xl(A);break;case 92:$e();break}return Ke}function a9(A,e){for(;$e()&&A+HA!==57&&!(A+HA===84&&Cr()===47););return"/*"+bs(e,Ke-1)+"*"+ku(A===47?A:$e())}function s9(A){for(;!$l(Cr());)$e();return bs(A,Ke)}function l9(A){return n9(ca("",null,null,null,[""],A=r9(A),0,[0],A))}function ca(A,e,t,r,n,i,o,a,s){for(var l=0,c=0,u=o,d=0,g=0,C=0,v=1,E=1,p=1,f=0,h="",Q=n,U=i,w=r,m=h;E;)switch(C=f,f=$e()){case 40:if(C!=108&&_A(m,u-1)==58){sa(m+=W(y1(f),"&","&\f"),"&\f",w5(l?a[l-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:m+=y1(f);break;case 9:case 10:case 13:case 32:m+=i9(C);break;case 92:m+=o9(la()-1,7);continue;case 47:switch(Cr()){case 42:case 47:qn(c9(a9($e(),la()),e,t,s),s);break;default:m+="/"}break;case 123*v:a[l++]=tt(m)*p;case 125*v:case 59:case 0:switch(f){case 0:case 125:E=0;case 59+c:p==-1&&(m=W(m,/\f/g,"")),g>0&&tt(m)-u&&qn(g>32?ad(m+";",r,t,u-1,s):ad(W(m," ","")+";",r,t,u-2,s),s);break;case 59:m+=";";default:if(qn(w=od(m,e,t,l,c,n,a,h,Q=[],U=[],u,i),i),f===123)if(c===0)ca(m,e,w,w,Q,i,u,a,U);else switch(d===99&&_A(m,3)===110?100:d){case 100:case 108:case 109:case 115:ca(A,w,w,r&&qn(od(A,w,w,0,0,n,a,h,n,Q=[],u,U),U),n,U,u,a,r?Q:U);break;default:ca(m,w,w,w,[""],U,0,a,U)}}l=c=g=0,v=p=1,h=m="",u=o;break;case 58:u=1+tt(m),g=C;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&t9()==125)continue}switch(m+=ku(f),f*v){case 38:p=c>0?1:(m+="\f",-1);break;case 44:a[l++]=(tt(m)-1)*p,p=1;break;case 64:Cr()===45&&(m+=y1($e())),d=Cr(),c=u=tt(h=m+=s9(la())),f++;break;case 45:C===45&&tt(m)==2&&(v=0)}}return i}function od(A,e,t,r,n,i,o,a,s,l,c,u){for(var d=n-1,g=n===0?i:[""],C=Q5(g),v=0,E=0,p=0;v<r;++v)for(var f=0,h=vn(A,d+1,d=w5(E=o[v])),Q=A;f<C;++f)(Q=m5(E>0?g[f]+" "+h:W(h,/&\f/g,g[f])))&&(s[p++]=Q);return ks(A,e,t,n===0?Hs:a,s,l,c,u)}function c9(A,e,t,r){return ks(A,e,t,C5,ku(e9()),vn(A,2,-2),0,r)}function ad(A,e,t,r,n){return ks(A,e,t,Lu,vn(A,0,r),vn(A,r+1,-1),r,n)}function F5(A,e,t){switch(q3(A,e)){case 5103:return eA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return eA+A+A;case 4789:return Ci+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return eA+A+Ci+A+uA+A+A;case 5936:switch(_A(A,e+11)){case 114:return eA+A+uA+W(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return eA+A+uA+W(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return eA+A+uA+W(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return eA+A+uA+A+A;case 6165:return eA+A+uA+"flex-"+A+A;case 5187:return eA+A+W(A,/(\w+).+(:[^]+)/,eA+"box-$1$2"+uA+"flex-$1$2")+A;case 5443:return eA+A+uA+"flex-item-"+W(A,/flex-|-self/g,"")+(gt(A,/flex-|baseline/)?"":uA+"grid-row-"+W(A,/flex-|-self/g,""))+A;case 4675:return eA+A+uA+"flex-line-pack"+W(A,/align-content|flex-|-self/g,"")+A;case 5548:return eA+A+uA+W(A,"shrink","negative")+A;case 5292:return eA+A+uA+W(A,"basis","preferred-size")+A;case 6060:return eA+"box-"+W(A,"-grow","")+eA+A+uA+W(A,"grow","positive")+A;case 4554:return eA+W(A,/([^-])(transform)/g,"$1"+eA+"$2")+A;case 6187:return W(W(W(A,/(zoom-|grab)/,eA+"$1"),/(image-set)/,eA+"$1"),A,"")+A;case 5495:case 3959:return W(A,/(image-set\([^]*)/,eA+"$1$`$1");case 4968:return W(W(A,/(.+:)(flex-)?(.*)/,eA+"box-pack:$3"+uA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+eA+A+A;case 4200:if(!gt(A,/flex-|baseline/))return uA+"grid-column-align"+vn(A,e)+A;break;case 2592:case 3360:return uA+W(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,gt(r.props,/grid-\w+-end/)})?~sa(A+(t=t[e].value),"span",0)?A:uA+W(A,"-start","")+A+uA+"grid-row-span:"+(~sa(t,"span",0)?gt(t,/\d+/):+gt(t,/\d+/)-+gt(A,/\d+/))+";":uA+W(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return gt(r.props,/grid-\w+-start/)})?A:uA+W(W(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return W(A,/(.+)-inline(.+)/,eA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(A)-1-e>6)switch(_A(A,e+1)){case 109:if(_A(A,e+4)!==45)break;case 102:return W(A,/(.+:)(.+)-([^]+)/,"$1"+eA+"$2-$3$1"+Ci+(_A(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~sa(A,"stretch",0)?F5(W(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return W(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,o,a,s,l){return uA+n+":"+i+l+(o?uA+n+"-span:"+(a?s:+s-+i)+l:"")+A});case 4949:if(_A(A,e+6)===121)return W(A,":",":"+eA)+A;break;case 6444:switch(_A(A,_A(A,14)===45?18:11)){case 120:return W(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+eA+(_A(A,14)===45?"inline-":"")+"box$3$1"+eA+"$2$3$1"+uA+"$2box$3")+A;case 100:return W(A,":",":"+uA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(A,"scroll-","scroll-snap-")+A}return A}function Za(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function u9(A,e,t,r){switch(A.type){case Y3:if(A.children.length)break;case J3:case Lu:return A.return=A.return||A.value;case C5:return"";case v5:return A.return=A.value+"{"+Za(A.children,r)+"}";case Hs:if(!tt(A.value=A.props.join(",")))return""}return tt(t=Za(A.children,r))?A.return=A.value+"{"+t+"}":""}function d9(A){var e=Q5(A);return function(t,r,n,i){for(var o="",a=0;a<e;a++)o+=A[a](t,r,n,i)||"";return o}}function f9(A){return function(e){e.root||(e=e.return)&&A(e)}}function g9(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case Lu:A.return=F5(A.value,A.length,t);return;case v5:return Za([Lt(A,{value:W(A.value,"@","@"+eA)})],r);case Hs:if(A.length)return A9(t=A.props,function(n){switch(gt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ir(Lt(A,{props:[W(n,/:(read-\w+)/,":"+Ci+"$1")]})),Ir(Lt(A,{props:[n]})),Wl(A,{props:id(t,r)});break;case"::placeholder":Ir(Lt(A,{props:[W(n,/:(plac\w+)/,":"+eA+"input-$1")]})),Ir(Lt(A,{props:[W(n,/:(plac\w+)/,":"+Ci+"$1")]})),Ir(Lt(A,{props:[W(n,/:(plac\w+)/,uA+"input-$1")]})),Ir(Lt(A,{props:[n]})),Wl(A,{props:id(t,r)});break}return""})}}var p9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mn=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",U5="active",x5="data-styled-version",Is="6.1.12",bu=`/*!sc*/
`,Wa=typeof window<"u"&&"HTMLElement"in window,h9=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),Ss=Object.freeze([]),Qn=Object.freeze({});function B9(A,e,t){return t===void 0&&(t=Qn),A.theme!==t.theme&&A.theme||e||t.theme}var E5=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v9=/(^-|-$)/g;function sd(A){return A.replace(C9,"-").replace(v9,"")}var w9=/(a)(d)/gi,Qo=52,ld=function(A){return String.fromCharCode(A+(A>25?39:97))};function Jl(A){var e,t="";for(e=Math.abs(A);e>Qo;e=e/Qo|0)t=ld(e%Qo)+t;return(ld(e%Qo)+t).replace(w9,"$1-$2")}var F1,H5=5381,An=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},L5=function(A){return An(H5,A)};function m9(A){return Jl(L5(A)>>>0)}function Q9(A){return A.displayName||A.name||"Component"}function U1(A){return typeof A=="string"&&!0}var k5=typeof Symbol=="function"&&Symbol.for,b5=k5?Symbol.for("react.memo"):60115,y9=k5?Symbol.for("react.forward_ref"):60112,F9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},U9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I5={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x9=((F1={})[y9]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F1[b5]=I5,F1);function cd(A){return("type"in(e=A)&&e.type.$$typeof)===b5?I5:"$$typeof"in A?x9[A.$$typeof]:F9;var e}var E9=Object.defineProperty,H9=Object.getOwnPropertyNames,ud=Object.getOwnPropertySymbols,L9=Object.getOwnPropertyDescriptor,k9=Object.getPrototypeOf,dd=Object.prototype;function S5(A,e,t){if(typeof e!="string"){if(dd){var r=k9(e);r&&r!==dd&&S5(A,r,t)}var n=H9(e);ud&&(n=n.concat(ud(e)));for(var i=cd(A),o=cd(e),a=0;a<n.length;++a){var s=n[a];if(!(s in U9||t&&t[s]||o&&s in o||i&&s in i)){var l=L9(e,s);try{E9(A,s,l)}catch{}}}}return A}function yn(A){return typeof A=="function"}function Iu(A){return typeof A=="object"&&"styledComponentId"in A}function fr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function fd(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ji(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function Yl(A,e,t){if(t===void 0&&(t=!1),!t&&!ji(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=Yl(A[r],e[r]);else if(ji(e))for(var r in e)A[r]=Yl(A[r],e[r]);return A}function Su(A,e){Object.defineProperty(A,"toString",{value:e})}function qi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var b9=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw qi(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(bu);return t},A}(),ua=new Map,$a=new Map,da=1,yo=function(A){if(ua.has(A))return ua.get(A);for(;$a.has(da);)da++;var e=da++;return ua.set(A,e),$a.set(e,A),e},I9=function(A,e){da=e+1,ua.set(A,e),$a.set(e,A)},S9="style[".concat(mn,"][").concat(x5,'="').concat(Is,'"]'),M9=new RegExp("^".concat(mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),D9=function(A,e,t){for(var r,n=t.split(","),i=0,o=n.length;i<o;i++)(r=n[i])&&A.registerName(e,r)},K9=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(bu),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(M9);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(I9(c,l),D9(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},gd=function(A){for(var e=document.querySelectorAll(S9),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(mn)!==U5&&(K9(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function _9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var M5=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(mn,"]")));return s[s.length-1]}(t),i=n!==void 0?n.nextSibling:null;r.setAttribute(mn,U5),r.setAttribute(x5,Is);var o=_9();return o&&r.setAttribute("nonce",o),t.insertBefore(r,i),r},T9=function(){function A(e){this.element=M5(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var o=r[n];if(o.ownerNode===t)return o}throw qi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),N9=function(){function A(e){this.element=M5(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),V9=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),pd=Wa,O9={isServer:!Wa,useCSSOMInjection:!h9},D5=function(){function A(e,t,r){e===void 0&&(e=Qn),t===void 0&&(t={});var n=this;this.options=F(F({},O9),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Wa&&pd&&(pd=!1,gd(this)),Su(this,function(){return function(i){for(var o=i.getTag(),a=o.length,s="",l=function(u){var d=function(p){return $a.get(p)}(u);if(d===void 0)return"continue";var g=i.names.get(d),C=o.getGroup(u);if(g===void 0||!g.size||C.length===0)return"continue";var v="".concat(mn,".g").concat(u,'[id="').concat(d,'"]'),E="";g!==void 0&&g.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),s+="".concat(C).concat(v,'{content:"').concat(E,'"}').concat(bu)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return yo(e)},A.prototype.rehydrate=function(){!this.server&&Wa&&gd(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(F(F({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new V9(n):r?new T9(n):new N9(n)}(this.options),new b9(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(yo(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(yo(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(yo(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),R9=/&/g,j9=/^\s*\/\/.*$/gm;function K5(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=K5(t.children,e)),t})}function P9(A){var e,t,r,n=A===void 0?Qn:A,i=n.options,o=i===void 0?Qn:i,a=n.plugins,s=a===void 0?Ss:a,l=function(d,g,C){return C.startsWith(t)&&C.endsWith(t)&&C.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Hs&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(R9,t).replace(r,l))}),o.prefix&&c.push(g9),c.push(u9);var u=function(d,g,C,v){g===void 0&&(g=""),C===void 0&&(C=""),v===void 0&&(v="&"),e=v,t=g,r=new RegExp("\\".concat(t,"\\b"),"g");var E=d.replace(j9,""),p=l9(C||g?"".concat(C," ").concat(g," { ").concat(E," }"):E);o.namespace&&(p=K5(p,o.namespace));var f=[];return Za(p,d9(c.concat(f9(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,g){return g.name||qi(15),An(d,g.name)},H5).toString():"",u}var z9=new D5,ql=P9(),_5=Se.createContext({shouldForwardProp:void 0,styleSheet:z9,stylis:ql});_5.Consumer;Se.createContext(void 0);function hd(){return k.useContext(_5)}var G9=function(){function A(e,t){var r=this;this.inject=function(n,i){i===void 0&&(i=ql);var o=r.name+i.hash;n.hasNameForId(r.id,o)||n.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Su(this,function(){throw qi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=ql),this.name+e.hash},A}(),Z9=function(A){return A>="A"&&A<="Z"};function Bd(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;Z9(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var T5=function(A){return A==null||A===!1||A===""},N5=function(A){var e,t,r=[];for(var n in A){var i=A[n];A.hasOwnProperty(n)&&!T5(i)&&(Array.isArray(i)&&i.isCss||yn(i)?r.push("".concat(Bd(n),":"),i,";"):ji(i)?r.push.apply(r,Ga(Ga(["".concat(n," {")],N5(i),!1),["}"],!1)):r.push("".concat(Bd(n),": ").concat((e=n,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in p9||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function vr(A,e,t,r){if(T5(A))return[];if(Iu(A))return[".".concat(A.styledComponentId)];if(yn(A)){if(!yn(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var n=A(e);return vr(n,e,t,r)}var i;return A instanceof G9?t?(A.inject(t,r),[A.getName(r)]):[A]:ji(A)?N5(A):Array.isArray(A)?Array.prototype.concat.apply(Ss,A.map(function(o){return vr(o,e,t,r)})):[A.toString()]}function W9(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(yn(t)&&!Iu(t))return!1}return!0}var $9=L5(Is),X9=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&W9(e),this.componentId=t,this.baseHash=An($9,t),this.baseStyle=r,D5.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=fr(n,this.staticRulesId);else{var i=fd(vr(this.rules,e,t,r)),o=Jl(An(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=fr(n,o),this.staticRulesId=o}else{for(var s=An(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=fd(vr(u,e,t,r));s=An(s,d+c),l+=d}}if(l){var g=Jl(s>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,r(l,".".concat(g),void 0,this.componentId)),n=fr(n,g)}}return n},A}(),V5=Se.createContext(void 0);V5.Consumer;var x1={};function J9(A,e,t){var r=Iu(A),n=A,i=!U1(A),o=e.attrs,a=o===void 0?Ss:o,s=e.componentId,l=s===void 0?function(Q,U){var w=typeof Q!="string"?"sc":sd(Q);x1[w]=(x1[w]||0)+1;var m="".concat(w,"-").concat(m9(Is+w+x1[w]));return U?"".concat(U,"-").concat(m):m}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(Q){return U1(Q)?"styled.".concat(Q):"Styled(".concat(Q9(Q),")")}(A):c,d=e.displayName&&e.componentId?"".concat(sd(e.displayName),"-").concat(e.componentId):e.componentId||l,g=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,C=e.shouldForwardProp;if(r&&n.shouldForwardProp){var v=n.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;C=function(Q,U){return v(Q,U)&&E(Q,U)}}else C=v}var p=new X9(t,d,r?n.componentStyle:void 0);function f(Q,U){return function(w,m,x){var L=w.attrs,I=w.componentStyle,Z=w.defaultProps,X=w.foldedComponentIds,G=w.styledComponentId,AA=w.target,GA=Se.useContext(V5),D=hd(),K=w.shouldForwardProp||D.shouldForwardProp,H=B9(m,GA,Z)||Qn,S=function(CA,oA,EA){for(var Ne,Ae=F(F({},oA),{className:void 0,theme:EA}),ir=0;ir<CA.length;ir+=1){var lt=yn(Ne=CA[ir])?Ne(Ae):Ne;for(var VA in lt)Ae[VA]=VA==="className"?fr(Ae[VA],lt[VA]):VA==="style"?F(F({},Ae[VA]),lt[VA]):lt[VA]}return oA.className&&(Ae.className=fr(Ae.className,oA.className)),Ae}(L,m,H),M=S.as||AA,j={};for(var z in S)S[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&S.theme===H||(z==="forwardedAs"?j.as=S.forwardedAs:K&&!K(z,M)||(j[z]=S[z]));var lA=function(CA,oA){var EA=hd(),Ne=CA.generateAndInjectStyles(oA,EA.styleSheet,EA.stylis);return Ne}(I,S),BA=fr(X,G);return lA&&(BA+=" "+lA),S.className&&(BA+=" "+S.className),j[U1(M)&&!E5.has(M)?"class":"className"]=BA,j.ref=x,k.createElement(M,j)}(h,Q,U)}f.displayName=u;var h=Se.forwardRef(f);return h.attrs=g,h.componentStyle=p,h.displayName=u,h.shouldForwardProp=C,h.foldedComponentIds=r?fr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=r?function(U){for(var w=[],m=1;m<arguments.length;m++)w[m-1]=arguments[m];for(var x=0,L=w;x<L.length;x++)Yl(U,L[x],!0);return U}({},n.defaultProps,Q):Q}}),Su(h,function(){return".".concat(h.styledComponentId)}),i&&S5(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Cd(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var vd=function(A){return Object.assign(A,{isCss:!0})};function Y9(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(yn(A)||ji(A))return vd(vr(Cd(Ss,Ga([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?vr(r):vd(vr(Cd(r,e)))}function Ac(A,e,t){if(t===void 0&&(t=Qn),!e)throw qi(1,e);var r=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return A(e,t,Y9.apply(void 0,Ga([n],i,!1)))};return r.attrs=function(n){return Ac(A,e,F(F({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Ac(A,e,F(F({},t),n))},r}var O5=function(A){return Ac(J9,A)},N=O5;E5.forEach(function(A){N[A]=O5(A)});k.forwardRef(function(A,e){var t=A.placement,r=t===void 0?"rt":t,n=A.gap,i=n===void 0?8:n,o=A.offsetData,a=A.hover,s=a===void 0?!1:a,l=A.hoverShow,c=l===void 0?!1:l,u=A.innerStyle,d=A.innerClassName,g=d===void 0?"":d,C=A.content,v=A.style,E=A.className,p=E===void 0?"":E,f=A.children,h=A.zIndex,Q=h===void 0?0:h,U=k.useMemo(function(){return!s&&!c},[s,c]),w=ce(k.useState(s||!c),2),m=w[0],x=w[1];return O(q9,F({ref:e,className:p,style:v,onMouseOver:function(){U||x(!s)},onMouseLeave:function(){U||x(!!s)}},{children:[f,C&&B(A8,F({className:"land-sffixContainer-inner ".concat(g),style:F({left:o!=null&&o.left||r==="lt"||r==="lb"?i:"auto",right:o!=null&&o.right||r==="rt"||r==="rb"?i:"auto",top:o!=null&&o.top||r==="lt"||r==="rt"?i:"auto",bottom:o!=null&&o.bottom||r==="lb"||r==="rb"?i:"auto",opacity:U||m?1:0},u),onClick:function(L){return L.stopPropagation()},hoverShow:c,zIndex:Q},{children:C}))]}))});var q9=N.div(wd||(wd=R([`
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
`]))),A8=N.div(md||(md=R([`
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
`])),function(A){return A.hoverShow?0:1},function(A){var e;return(e=A.zIndex)!==null&&e!==void 0?e:0}),wd,md;N.nav(Qd||(Qd=R([`
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
`])));var Qd,e8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"IconArrowLine ".concat(s)},{children:[B("path",{d:"M24 42V6",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 30L24 42L12 30",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},t8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M31 17L24 24L17 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M31 26L24 33L17 26",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},r8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})}))},n8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{d:"M36 19L24 31L12 19H36Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s,strokeLinejoin:"round"})}))},i8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24.0083 33.8995V6",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 22L24 34L12 22",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M36 42H12",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},o8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 9L42 9",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 19L42 19",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 26L24 40L42 26",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},a8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M44 20H28V4",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M4 28H20V44",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},s8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},l8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:s},{children:[B("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},c8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 6H42V15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 33V42H33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M15 42H6V33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 15V6H15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},u8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 7V16H41",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 7V16H7",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 41V32H7",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32 41V32H40.8995",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},d8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38 7L44 13L38 19",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},f8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?3:i,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"cursor-pointer ".concat(l),onClick:c},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},g8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M23.9917 6H6V42H24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 33L42 24L33 15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M16 23.9917H42",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},p8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 8V17H33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},h8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 9V17H14",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},B8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M19 6V42",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7 17.8994L19 5.89941",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006V6.10059",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M29 42.1006L41 30.1006",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},C8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18 28L10 33L4 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},v8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},w8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},m8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M42 8V24",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M6 24L6 40",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Q8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M16 24L22 30L34 18",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},y8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:t})}))},F8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},U8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},x8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:t})}))},E8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return B("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},H8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.style,o=A.className;return B("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:n,strokeWidth:"2"})}))},L8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:t})}))},k8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return O("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},b8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:o})}))},I8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},S8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return O("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},M8=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:B("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:o})}))},D8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,i=A.style,o=A.className;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:i,className:o},{children:B("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},K8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.size,o=i===void 0?16:i,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return O("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[B("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),B("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},_8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?4:i,a=A.className,s=a===void 0?"IconFile":a,l=A.style;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:n,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M43 22H5",stroke:n,strokeWidth:"4",strokeLinejoin:"round"})]}))},T8=function(A){var e=A.size,t=e===void 0?16:e,r=A.fill,n=r===void 0?"currentcolor":r,i=A.className,o=i===void 0?"IconMore":i,a=A.style;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:o,style:a},{children:[B("circle",{cx:"12",cy:"24",r:"4",fill:n}),B("circle",{cx:"24",cy:"24",r:"4",fill:n}),B("circle",{cx:"36",cy:"24",r:"4",fill:n})]}))},N8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?4:i,a=A.className,s=a===void 0?"IconFileLine":a,l=A.style;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[B("path",{d:"M7.94971 11.9497H39.9497",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 23.9497H39.9497",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M7.94971 35.9497H39.9497",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},V8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=A.className,a=o===void 0?"IconAdd":o,s=A.style;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:a,style:s},{children:[B("path",{d:"M24.0605 10L24.0239 38",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M10 24L38 24",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},O8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentColor":r,i=A.onClick;return B("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:i},{children:B("path",{d:"M10.5 24L38.5 24",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}))},R8=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?2:i,a=A.className,s=a===void 0?"IconClear":a,l=A.style,c=A.onClick;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l,onClick:c},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},j8=function(A){var e=A.size,t=e===void 0?20:e,r=A.fill,n=r===void 0?"currentcolor":r;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:n}),B("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:n}),B("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:n}),B("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:n}),B("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:n}),B("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:n}),B("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:n}),B("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:n}),B("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:n})]}))},P8=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?3:i,a=A.className,s=a===void 0?"":a;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",className:s,xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M6 24.0083V42H42V24",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M33 15L24 6L15 15",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M23.9917 32V6",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},z8=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,i=A.strokeWidth,o=i===void 0?2:i;return O("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M14 14L34 34",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M14 34L34 14",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},G8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,i=n===void 0?20:n,o=A.strokeWidth,a=o===void 0?2:o;return O("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[B("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"}),B("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})]}))},Z8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r;return B("svg",F({width:n,height:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{children:B("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}))},W8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,i=n===void 0?16:n,o=A.strokeWidth,a=o===void 0?2:o,s=A.className,l=s===void 0?"IconCopy":s;return O("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",className:l},{children:[B("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"})]}))},$8=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.style,s=A.className;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[B("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M19 29V42H29V29H19Z",stroke:t,strokeWidth:o,strokeLinejoin:"round"})]}))},X8=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,i=A.strokeWidth,o=i===void 0?2:i,a=A.fill,s=A.style,l=A.className,c=l===void 0?"":l;return O("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:s,className:c},{children:[B("path",{d:"M9.15039 9.15088L11.3778 11.3783",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M3 24H6.15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M9.15039 38.8495L11.3778 36.6221",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.8495 38.8495L36.6221 36.6221",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M44.9996 24H41.8496",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M38.8495 9.15088L36.6221 11.3783",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M24 3V6.15",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),B("path",{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:a||"none",stroke:a||t,strokeWidth:o,strokeLinejoin:"round"}),B("path",{d:"M24 45.0001V41.8501",stroke:t,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},J8=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,i=A.fill,o=A.strokeWidth,a=o===void 0?2:o,s=A.style,l=A.className,c=l===void 0?"":l;return B("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:s,className:c},{children:B("path",{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:i||"none",stroke:i||t,strokeWidth:a,strokeLinejoin:"round"})}))},xA=function(A){var e=A.name,t=Hu(A,["name"]);switch(e){case"arrow-line":return B(e8,F({},t));case"arrow-double":return B(t8,F({},t));case"arrow":return B(r8,F({},t));case"arrow-triangle":return B(n8,F({},t));case"arrow-to":return B(i8,F({},t));case"toggle":return B(o8,F({},t));case"collapse":return B(a8,F({},t));case"collection":return B(s8,F({},t));case"zoom-out":return B(c8,F({},t));case"zoom-in":return B(u8,F({},t));case"loop":return B(d8,F({},t));case"download":return B(f8,F({},t));case"out":return B(g8,F({},t));case"reload":return B(p8,F({},t));case"undo":return B(h8,F({},t));case"sort":return B(B8,F({},t));case"back":return B(C8,F({},t));case"ahead":return B(v8,F({},t));case"drag":return B(w8,F({},t));case"refresh":return B(m8,F({},t));case"check-stroke":return B(Q8,F({},t));case"check-fill":return B(y8,F({},t));case"check":return B(F8,F({},t));case"error-stroke":return B(U8,F({},t));case"error-fill":return B(x8,F({},t));case"error":return B(E8,F({},t));case"info-stroke":return B(H8,F({},t));case"info-fill":return B(L8,F({},t));case"info":return B(k8,F({},t));case"attention-stroke":return B(b8,F({},t));case"attention-fill":return B(I8,F({},t));case"attention":return B(S8,F({},t));case"question-stroke":return B(M8,F({},t));case"question-fill":return B(D8,F({},t));case"question":return B(K8,F({},t));case"more":return B(T8,F({},t));case"more-line":return B(N8,F({},t));case"file":return B(_8,F({},t));case"add":return B(V8,F({},t));case"dec":return B(O8,F({},t));case"clear":return B(R8,F({},t));case"upload":return B(P8,F({},t));case"application":return B(j8,F({},t));case"close":return B(z8,F({},t));case"close-circle":return B(G8,F({},t));case"color-picker":return B(Z8,F({},t));case"copy":return B(W8,F({},t));case"home":return B($8,F({},t));case"search":return B(l8,F({},t));case"light":return B(X8,F({},t));case"dark":return B(J8,F({},t))}},yd;(function(A){A.BG="background",A.BORDER="border"})(yd||(yd={}));var wt=function(A){var e=A.content,t=A.theme,r=t===void 0?"light":t,n=A.placement,i=n===void 0?"top":n,o=A.style,a=A.className,s=a===void 0?"":a;return O(Y8,F({className:"land-pop ".concat(r," ").concat(s),style:F({top:i==="bottom"?"100%":i==="top"?"auto":"50%",bottom:i==="top"?"100%":"",left:i==="right"?"100%":i==="left"?"auto":"50%",right:i==="left"?"100%":"",transform:"translate(".concat(i==="top"||i==="bottom"?"-50%":i==="left"?"-12px":"12px",", ").concat(i==="top"?"-12px":i==="bottom"?"12px":"-50%",")")},o)},{children:[e,B("div",{className:"land-pop-arrow",style:{left:i==="left"?"100%":i==="right"?"0":"50%",top:i==="top"?"100%":i==="bottom"?"0px":"50%",bottom:i==="bottom"?"100%":"",transform:"translate(".concat("-50%",", ").concat("-50%",") rotate(").concat(i==="top"?"45":i==="bottom"?"-135":i==="right"?"135":"-45","deg)")}})]}))},Y8=N.div(Fd||(Fd=R([`
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
`]))),Fd;N.div(Ud||(Ud=R([`
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
`])));var Ud,cn=function(A){var e=A.text,t=A.subText,r=A.icon,n=A.width,i=A.height,o=A.justify,a=o===void 0?"center":o,s=A.type,l=s===void 0?"border":s,c=A.status,u=c===void 0?"default":c,d=A.disabled,g=A.pop,C=A.PopProps,v=A.href,E=A.target,p=E===void 0?"_blank":E,f=A.onClick,h=A.children,Q=A.style,U=A.className,w=U===void 0?"":U,m=k.useMemo(function(){if(r){if(!e&&!t)return!0}else return!1},[r,e,t]),x=k.useMemo(function(){switch(u){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[u]);return B(Ri,{children:v?O(q8,F({href:v,target:p,className:"land-button ".concat(l," ").concat(u," ").concat(m?"iconOnly":""," ").concat(d?"disabled":""," ").concat(g?"hover-pop":""," ").concat(w),style:Q,width:n,height:i,justify:a,color:x,onClick:function(L){return f==null?void 0:f(L)}},{children:[h,r,!m&&O("div",{children:[B("span",{children:e}),B("span",F({className:"subText"},{children:t}))]}),g&&B(wt,F({content:g},C))]})):O(R5,F({className:"land-button ".concat(l," ").concat(u," ").concat(m?"iconOnly":""," ").concat(d?"disabled":""," ").concat(g?"hover-pop":""," ").concat(w),style:Q,width:n,height:i,justify:a,color:x,onClick:function(L){return f==null?void 0:f(L)}},{children:[h,r,!m&&O("div",{children:[B("span",{children:e}),t&&B("span",F({className:"subText"},{children:t}))]}),g&&B(wt,F({content:g},C))]}))})},R5=N.div(xd||(xd=R([`
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
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"3)")},function(A){return"".concat(A.color,"3)")}),q8=N.a(Ed||(Ed=R([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),R5),xd,Ed,AC=function(A){var e=A.checked,t=e===void 0?!1:e,r=A.text,n=r===void 0?"选项":r,i=A.pop,o=A.onChange;return O(eC,{children:[O(tC,F({onClick:function(){o==null||o()}},{children:[B(rC,F({className:"".concat(t?"checked":"")},{children:B(xA,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})})),n]})),i&&O(nC,F({className:"hover-pop"},{children:[B(xA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(wt,{content:i,theme:"dark",style:{maxWidth:"200px"},placement:"right"})]}))]})},eC=N.div(Hd||(Hd=R([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`]))),tC=N.div(Ld||(Ld=R([`
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
`]))),rC=N.div(kd||(kd=R([`
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
`]))),nC=N.div(bd||(bd=R([`
  position: relative;
  height: 16px;
  line-height: 16px;
`],[`
  position: relative;
  height: 16px;
  line-height: 16px;
`]))),Hd,Ld,kd,bd;N.div(Id||(Id=R([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));N.div(Sd||(Sd=R([`
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
`])));N.div(Md||(Md=R([`
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
`])));N.div(Dd||(Dd=R([`
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
`])));N.div(Kd||(Kd=R([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var Id,Sd,Md,Dd,Kd;N.div(_d||(_d=R([`
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
`])),function(A){return"-".concat(A.gap*2,"px")},function(A){return"-".concat(A.gap*2,"px")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"".concat(A.size,"px solid var(--color-primary-6)")},function(A){return"".concat(A.radius,"px")},function(A){return A.checked?1:0});var _d,Ao=function(A){var e=A.children,t=A.style,r=A.className,n=ce(k.useState(132),2),i=n[0],o=n[1],a=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return k.useEffect(function(){var l,c;a?l=a.getBoundingClientRect().height:l=0,s?c=s.getBoundingClientRect().height:c=0,o(l+c)}),B(iC,F({className:r,style:t,$minHeight:i},{children:e}))},iC=N.main(Td||(Td=R([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.$minHeight,"px)")}),Td,Nd=function(A){var e=A.value,t=e===void 0?"":e,r=A.size,n=A.border,i=n===void 0?!1:n,o=A.useSelect,a=o===void 0?!0:o,s=A.onChange,l=A.onClick,c=A.style,u=A.className,d=u===void 0?"":u,g=ce(k.useState(t),2),C=g[0],v=g[1];return k.useEffect(function(){return v(t)},[t]),B(oC,F({className:d,style:F(r?{width:typeof r=="number"?"".concat(r,"px"):r,height:typeof r=="number"?"".concat(r,"px"):r,background:C}:{background:C},c),onClick:function(){return l==null?void 0:l(C)},border:i},{children:a&&B("input",{type:"color",onChange:function(E){return s==null?void 0:s(E.target.value,E)}})}))},oC=N.label(Vd||(Vd=R([`
  border: `,`;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`],[`
  border: `,`;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`])),function(A){return A.border?"4px solid var(--color-border-1)":""}),Vd;N.a(Od||(Od=R([`
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
`])));var Od,j5=function(A){var e=A.direction,t=e===void 0?"row":e,r=A.size,n=r===void 0?1:r,i=A.lang,o=i===void 0?"100%":i,a=A.margin,s=a===void 0?0:a,l=A.type,c=l===void 0?"solid":l,u=A.color,d=u===void 0?"var(--color-border-2)":u,g=A.content,C=A.align,v=C===void 0?"center":C,E=A.style,p=A.className,f=p===void 0?"":p;return O(aC,F({className:"land-divider ".concat(f),style:F({width:t==="row"?"".concat(o):"".concat(n,"px"),height:t==="column"?"".concat(o):"".concat(n,"px"),margin:t==="row"?"".concat(s,"px 0"):"0 ".concat(s,"px")},E),direction:t,gap:g?"8px":""},{children:[B("div",{style:{flex:v==="left"?"10%":v==="right"?"90%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}}),g&&O(Ri,{children:[B("div",F({style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"}},{children:g})),B("div",{style:{flex:v==="left"?"90%":v==="right"?"10%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(d):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(d):"none"}})]})]}))},aC=N.div(Rd||(Rd=R([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap}),Rd;N.div(jd||(jd=R([`
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
`])));N.div(Pd||(Pd=R([`
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
`])),function(A){return A.placement==="left"?"0":"unset"},function(A){return A.placement==="right"?"0":"unset"});N.ul(zd||(zd=R([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`])));N.li(Gd||(Gd=R([`
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
`])));var jd,Pd,zd,Gd,YA=function(A){var e=A.w,t=e===void 0?"100%":e,r=A.h,n=A.column,i=A.wrap,o=A.justify,a=o===void 0?"start":o,s=A.align,l=s===void 0?"start":s,c=A.gap,u=A.bothCenter,d=A.children,g=A.style,C=A.className,v=C===void 0?"":C;return B(sC,F({className:v,style:g,width:t,height:r,direction:n?"column":"row",gap:typeof c=="number"?"".concat(c,"px"):c,wrap:i,justify:u?"center":a,align:u?"center":l},{children:d}))},sC=N.div(Zd||(Zd=R([`
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
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height}),Zd;N.footer(Wd||(Wd=R([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var Wd,$d;(function(A){A.ColumnFit="column-fit",A.ColumnFill="column-fill",A.RowFit="row-fit",A.RowFill="row-fill",A.ColumnRepeat="column-repeat",A.RowRepeat="row-repeat",A.Default="default"})($d||($d={}));var Xa;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(Xa||(Xa={}));var Mu=function(A){var e=A.active,t=A.data,r=A.direction,n=r===void 0?"row":r,i=A.theme,o=i===void 0?{hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"}:i,a=A.border,s=a===void 0?!0:a,l=A.onChange,c=A.onDropChange,u=A.dropProps,d=A.itemStyle,g=A.itemClassName,C=g===void 0?"":g,v=A.style,E=A.className,p=E===void 0?"":E;return B(lC,F({className:"land-menu ".concat(p),style:v,column:n==="column",border:s},{children:t==null?void 0:t.map(function(f){return O("div",F({className:"land-menu-item ".concat(f.clickType===Xa.SIMPLE?"simple":""," ").concat(f.clickType===Xa.DISABLED?"disabled":""),style:d},{children:[O(cC,F({role:"button",className:"land-menu-link ".concat(e===f.key?"active":""," ").concat(C),onClick:function(){return l==null?void 0:l(f)},column:n==="column",theme:o},{children:[typeof f.icon=="string"?B("img",{src:f.icon,className:"land-menu-icon"}):f.icon,B("p",F({className:"land-menu-title","data-title":f.title},{children:f.title})),B("span",F({className:"land-menu-sub-title"},{children:f.subTitle})),f.isNew&&B("i",F({className:"land-menu-new"},{children:typeof f.isNew=="boolean"?"NEW":f.isNew}))]}),f.key),f.dropData&&B("div",F({className:"land-menu-drop-wrap ".concat(f.open?"open":"")},{children:B("div",F({className:"land-menu-drop"},{children:B(Mu,F({data:f.dropData,onChange:function(h){return c==null?void 0:c(h,f)},direction:"column"},u))}))}))]}))})}))},lC=N.div(Xd||(Xd=R([`
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
`])),function(A){return A.column?"column":"row"},function(A){return A.column?"":"100%"},function(A){return A.column?"100%":"fit-content"},function(A){return A.border&&!A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.column?"":"100%"}),cC=N.a(Jd||(Jd=R([`
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
`])),function(A){return A.column?"0":"50%"},function(A){return A.column?"50%":"0"},function(A){return A.column?"2px":"12px"},function(A){return A.column?A.theme.activeBg?"100%":"calc(100% - 16px)":"2px"},function(A){return A.column?"translateY(50%)":"translateX(50%)"},function(A){return A.theme.lineColor||"var(--color-text-1)"},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverBg},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverColor},function(A){return A.theme.activeBg},function(A){return A.theme.activeColor||"var(--color-text-1)"}),Xd,Jd,uC=function(A){var e,t=A.h,r=t===void 0?"64px":t,n=A.fixed,i=A.filter,o=i===void 0?0:i,a=A.borderBottom,s=a===void 0?!0:a,l=A.applications,c=A.logo,u=A.name,d=A.onLogoClick,g=A.divider,C=g===void 0?!0:g,v=A.align,E=A.menuProps,p=A.rightComponent,f=A.style,h=A.className,Q=h===void 0?"":h,U=ce(k.useState(!1),2),w=U[0],m=U[1];return k.useEffect(function(){window.onscroll=function(){return m(!1)},window.onresize=function(){return m(!1)}}),O(dC,F({className:"land-header ".concat(n?"fixed":""," ").concat(Q),style:f,height:r,filter:o,borderBottom:s,applications:!!l},{children:[O("div",F({className:"land-header-logo",onClick:d},{children:[l&&O("button",F({className:"land-header-application",onClick:function(x){return x.stopPropagation()}},{children:[B(xA,{name:"application"}),B("div",F({className:"land-application-drop"},{children:l}))]})),typeof c=="string"?B("img",{src:c}):c,C&&c&&u&&B(j5,{direction:"column",lang:"24px"}),typeof u=="string"?B("img",{src:u}):u]})),B(fC,F({className:"land-header-nav",align:v,showMobileNav:w},{children:E&&B(Mu,F({border:!1},E,{onChange:function(x){var L;(L=E.onChange)===null||L===void 0||L.call(E,x),m(!1)},onDropChange:function(x,L){var I;(I=E.onDropChange)===null||I===void 0||I.call(E,x,L),m(!1)}}))})),p&&B("div",F({className:"land-header-btns"},{children:p})),E&&E.data&&((e=E.data)===null||e===void 0?void 0:e.length)>0&&B(cn,{icon:B(xA,{name:"more-line"}),type:"text",onClick:function(){return m(!w)}})]}))},dC=N.header(Yd||(Yd=R([`
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
  z-index: 1000;
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
  z-index: 1000;
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
`])),function(A){return A.applications?"0":""},function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""}),fC=N.div(qd||(qd=R([`
  display: flex;
  flex: 1;
  justify-content: `,`;
  height: 100%;
  .land-menu-item:hover .land-menu-drop-wrap {
    left: 50%;
    transform: translateX(-50%) scale(1);
  }
  .land-menu-drop-wrap {
    width: fit-content;
    &:not(.open) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: `,`;
    display: `,`;
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
      .land-menu-link.active::after {
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop,
        .land-menu-drop .land-menu {
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
  .land-menu-item:hover .land-menu-drop-wrap {
    left: 50%;
    transform: translateX(-50%) scale(1);
  }
  .land-menu-drop-wrap {
    width: fit-content;
    &:not(.open) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: `,`;
    display: `,`;
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
      .land-menu-link.active::after {
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop,
        .land-menu-drop .land-menu {
          border: none;
          box-shadow: none;
          padding: 0;
          text-indent: 1em;
        }
      }
    }
  }
`])),function(A){return A.align},function(A){return A.showMobileNav?"all":"none"},function(A){return A.showMobileNav?"block":"none"},function(A){return A.showMobileNav?"1":"0"}),Yd,qd,P5=function(A){var e=A.size,t=e===void 0?18:e,r=A.strokeSize,n=r===void 0?2:r,i=A.color,o=i===void 0?"var(--color-text-1)":i,a=A.style,s=A.className,l=s===void 0?"":s;return B(gC,{className:"land-loading-container ".concat(l),style:a,size:t,strokeSize:n,color:o})},gC=N.div(Af||(Af=R([`
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
    )`)},function(A){return"conic-gradient(transparent 25%, ".concat(A.color,")")}),Af,z5=function(A){var e=A.type,t=e===void 0?"border":e,r=A.value,n=A.inputType,i=n===void 0?"text":n,o=A.placeholder,a=o===void 0?"请输入":o,s=A.prefix,l=A.useSearch,c=l===void 0?!1:l,u=A.width,d=A.maxLength,g=A.showClear,C=g===void 0?!0:g,v=A.disabled,E=A.onChange,p=A.onFocus,f=A.className,h=A.wrapStyle,Q=Hu(A,["type","value","inputType","placeholder","prefix","useSearch","width","maxLength","showClear","disabled","onChange","onFocus","className","wrapStyle"]),U=ce(k.useState(r),2),w=U[0],m=U[1];return k.useEffect(function(){return m(r)},[r]),O(pC,F({className:"land-input ".concat(v?"disabled":""," ").concat(t," ").concat(f),style:F({width:typeof u=="number"?"".concat(u,"px"):u},h)},{children:[c&&B(xA,{name:"search",stroke:"var(--color-text-5)"}),s&&B("p",F({className:"input-prefix"},{children:s})),B("input",F({placeholder:a,type:i,value:w,max:d,onClick:function(x){return x.stopPropagation()},onFocus:function(x){x.stopPropagation(),p==null||p(x)},onChange:function(x){x.stopPropagation(),E==null||E(x.target.value,x)}},Q)),!!w&&C&&B(xA,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:function(){return m("")}})]}))},pC=N.div(ef||(ef=R([`
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
`]))),ef;N.div(tf||(tf=R([`
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
        `])));N.div(rf||(rf=R([`
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
        `])));var tf,rf;N.div(nf||(nf=R([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var nf;N.a(of||(of=R([`
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
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var of,hC=function(A){var e=A.show,t=e===void 0?!1:e,r=A.type,n=r===void 0?"default":r,i=A.text,o=i===void 0?"咕噜咕噜～":i,a=A.style,s=A.className,l=s===void 0?"":s,c=ce(k.useState(t),2),u=c[0],d=c[1];k.useEffect(function(){d(t)},[t]),k.useEffect(function(){if(u){var C=setTimeout(function(){d(!1)},1e3);return function(){return clearTimeout(C)}}},[u]);var g=k.useMemo(function(){switch(n){case"default":return{color:"white",background:"black",icon:null}}},[n]);return B(BC,F({className:"StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ".concat(u?"show":"close"," ").concat(l),style:F({color:g==null?void 0:g.color,backgroundColor:g==null?void 0:g.background},a)},{children:o}))},BC=N.div(af||(af=R([`
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
`]))),af,ec=function(A){var e=A.value,t=A.type,r=t===void 0?"border":t,n=A.step,i=n===void 0?1:n,o=A.min,a=o===void 0?0:o,s=A.max,l=s===void 0?100:s,c=A.suffix,u=A.disabled,d=A.onChange;A.className;var g=A.style,C=Hu(A,["value","type","step","min","max","suffix","disabled","onChange","className","style"]),v=ce(k.useState(e),2),E=v[0],p=v[1],f=function(h,Q){Q<a-i/2||Q>l+i/2||(p(Q),d==null||d(h,Q))};return O(CC,F({className:"StyledNumberInputWrap",style:g,onClick:function(h){return h.stopPropagation()},suffix:c},{children:[B(z5,F({type:r,inputType:"number",value:E,disabled:u,onChange:function(h,Q){Number(h)>l||Number(h)<a||(p(Number(h)),d==null||d(Q,Number(h)))},showClear:!1,style:{paddingRight:"32px"}},C)),O("div",F({className:"land-numberInput-arrow",style:{borderLeft:r==="border"?"1px solid var(--color-border-2)":"",background:"inherit"}},{children:[B("div",F({className:"land-numberInput-add ".concat(E===l?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(E)+i)}},{children:B(xA,{name:"arrow"})})),r==="border"&&B(j5,{margin:0,lang:"32px"}),B("div",F({className:"land-numberInput-dec ".concat(E===a?"disabled":""),onClick:function(h){return f==null?void 0:f(h,Number(E)-i)}},{children:B(xA,{name:"arrow"})}))]}))]}))},CC=N.div(sf||(sf=R([`
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
`])),function(A){return A.suffix}),sf;N.div(lf||(lf=R([`
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
`])));var lf;N.a(cf||(cf=R([`
`],[`
`])));var cf;N.div(uf||(uf=R([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));N.div(df||(df=R([`
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
`])));N.div(ff||(ff=R([`
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
`])));N.div(gf||(gf=R([`
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
`])));N.div(pf||(pf=R([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var uf,df,ff,gf,pf,re=function(A){var e=A.title,t=A.type,r=t===void 0?"h1":t,n=A.prefix,i=A.sub,o=A.info,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return O(vC,F({className:"land-title ".concat(l),style:a,onClick:function(){return c==null?void 0:c()}},{children:[n&&B("span",F({className:"land-title-prefix"},{children:n})),r==="h1"&&B("h1",{children:e}),r==="h2"&&B("h2",{children:e}),r==="h3"&&B("h3",{children:e}),r==="p"&&B("p",{children:e}),o&&O("div",F({className:"land-title-info hover-pop"},{children:[B(xA,{name:"info-stroke",stroke:"var(--color-text-4)"}),B(wt,{content:o,style:{maxWidth:"200px"}})]})),i&&typeof i=="string"?B("div",F({className:"land-title-sub"},{children:i})):B(Ri,{children:i})]}))},vC=N.div(hf||(hf=R([`
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
`]))),hf,wC=function(A){var e=A.data,t=A.placeholder,r=t===void 0?"请选择":t,n=A.selected,i=n===void 0?"0":n,o=A.width,a=o===void 0?"100px":o,s=A.title,l=A.titleInfo,c=A.info,u=A.disabled,d=A.onChange,g=A.className,C=g===void 0?"":g,v=A.style,E=ce(k.useState(!1),2),p=E[0],f=E[1],h=ce(k.useState(i),2),Q=h[0],U=h[1];return O(mC,F({style:F({width:typeof a=="number"?"".concat(a,"px"):a},v),className:C},{children:[s&&B(re,{title:s,type:"p",info:l}),O(QC,F({className:"hover-pop ".concat(p?"show":""," ").concat(u?"disabled":""),onClick:function(w){u||(w.stopPropagation(),f(!p))}},{children:[B("p",F({className:"".concat(Q!=="0"?"land-select-trigger":"land-select-placeholder")},{children:Q==="0"?r:e==null?void 0:e.filter(function(w){return w.value===Q})[0].label})),B(xA,{name:"arrow",className:"land-select-value-arrow"}),c&&B(wt,{content:c,theme:"dark"})]})),B(yC,F({className:"land-select-results ".concat(p?"show":"")},{children:B(FC,{children:e==null?void 0:e.map(function(w){return O(UC,F({className:"".concat(w.tip?"hover-pop":""," ").concat(Q===w.value?"selected":""," ").concat(w.disabled?"disabled":""),onClick:function(){w.disabled||(U(w.value),d==null||d(w),f(!1))}},{children:[B("div",F({className:"land-select-results-item-label"},{children:w.label})),w.info&&O("div",F({className:"land-select-item-info ".concat(w.info?"hover-pop":"")},{children:[B(xA,{name:"info-stroke",size:12}),w.info&&B(wt,{content:w.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]})),w.tip&&B(wt,{content:w.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]}),w.value)})})}))]}))},mC=N.div(Bf||(Bf=R([`
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
`]))),QC=N.div(Cf||(Cf=R([`
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
`]))),yC=N.div(vf||(vf=R([`
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
`]))),FC=N.ul(wf||(wf=R([`
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
`]))),UC=N.li(mf||(mf=R([`
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
`]))),Bf,Cf,vf,wf,mf;N.div(Qf||(Qf=R([`
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
`])));N.div(yf||(yf=R([`
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
`])));N.div(Ff||(Ff=R([`
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
`])));N.ul(Uf||(Uf=R([`
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
`])));N.li(xf||(xf=R([`
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
`])));N.ul(Ef||(Ef=R([`
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

`])),function(A){return A.show?1:0},function(A){return A.show?"all":"none"});var Qf,yf,Ff,Uf,xf,Ef;N.aside(Hf||(Hf=R([`
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
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var Hf;N.div(Lf||(Lf=R([`
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
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--color-gray-2) 0 0 / 100% 100%"):""});N.input(kf||(kf=R([`
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
`])));var Lf,kf;N.div(bf||(bf=R([`
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
`])));var bf,xC=function(A){var e=A.checked,t=A.label,r=A.checkedLabel,n=A.icon,i=A.checkedIcon,o=A.info,a=A.popProps,s=A.onChange,l=A.style,c=A.className,u=c===void 0?"":c,d=ce(k.useState(e),2),g=d[0],C=d[1];return k.useEffect(function(){return C(e)},[e]),O(YA,F({gap:8,align:"center"},{children:[O(EC,F({className:"land-switch-wrap ".concat(g?"checked":""," ").concat(u),style:l,onClick:function(){C(!g),s==null||s(g)}},{children:[B("div",F({className:"land-switch-bar"},{children:B("div",F({className:"land-switch-indicator"},{children:g?i:n}))})),(t||r)&&B("div",F({className:"land-switch-label"},{children:g?r:t}))]})),o&&O("div",F({className:"land-switch-label-info hover-pop"},{children:[B(xA,{name:"info-stroke",size:16}),B(wt,F({content:o},a))]}))]}))},EC=N.div(If||(If=R([`
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
`]))),If;N.table(Sf||(Sf=R([`
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
`])));var Sf,G5=function(A){var e=A.desc,t=A.fileType,r=A.onUpload,n=A.children,i=A.width,o=i===void 0?"100%":i,a=A.height,s=a===void 0?"100%":a,l=A.style,c=A.className,u=c===void 0?"":c,d=A.innerClassName,g=d===void 0?"":d,C=k.useRef(null),v=ce(k.useState(),2),E=v[0],p=v[1],f=ce(k.useState(),2),h=f[0],Q=f[1],U=ce(k.useState(!1),2),w=U[0],m=U[1],x=function(X,G){if(X.preventDefault(),m(!0),G){Q(G);var AA=new FileReader;AA.readAsDataURL(G),p(URL.createObjectURL(G)),m(!1)}};k.useEffect(function(){r==null||r(E,h)},[E]);var L=ce(k.useState(!1),2),I=L[0],Z=L[1];return O(HC,F({className:"".concat(I?"drag":""," ").concat(u),style:l,onDragOver:function(X){Z(!0),X.preventDefault()},onDrop:function(X){return x(X,X.dataTransfer.files[0])},onDragLeave:function(){return Z(!1)},width:o,height:s},{children:[B(LC,{ref:C,type:"file",accept:t,className:g,onChange:function(X){x(X,X.target.files[0])}}),n||(w?B(Ri,{children:"上传中"}):O(Ri,{children:[B("div",F({className:"land-uploader-icon"},{children:B(xA,{name:"upload"})})),(e||I)&&B("div",F({className:"land-uploader-desc"},{children:I?"释放即可上传":e}))]}))]}))},HC=N.label(Mf||(Mf=R([`
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
`])),function(A){return A.width},function(A){return A.height}),LC=N.input(Df||(Df=R([`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`],[`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`]))),Mf,Df;const E1=[{key:11,title:"编织基础",open:!0,dropData:[{key:11,title:"线材"},{key:12,title:"器材"}]},{key:1,title:"插图教程",open:!0,dropData:[{key:1,title:"钩针"},{key:2,title:"棒针"}]},{key:21,title:"辅助工具",open:!0,dropData:[{key:21,title:"取色"},{key:22,title:"配色"},{key:23,title:"像素格"}]},{key:31,title:"图解收录"}],kC=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"锁针/辫子针",desc:"锁针常用于起针，也可以独立应用。",imgList:[{img_src:"./images/crochet/szhen1.jpg"},{img_src:"./images/crochet/szhen2.jpg",img_des:"1、打一个活结并按图示持线"},{img_src:"./images/crochet/szhen3.jpg",img_des:"2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"},{img_src:"./images/crochet/szhen4.jpg",img_des:"3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"},{img_src:"./images/crochet/szhen5.jpg",img_des:"4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"}]},{id:"2",title:"引拔针",desc:"引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",imgList:[{img_src:"./images/crochet/ybzhen1.jpg"},{img_src:"./images/crochet/ybzhen2.jpg",img_des:"1、如图所示为短针环钩的结尾处"},{img_src:"./images/crochet/ybzhen3.jpg",img_des:"2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"},{img_src:"./images/crochet/ybzhen4.jpg",img_des:"3、拉紧即完成连接"},{img_src:"./images/crochet/ybzhen5.jpg",img_des:"4、接着根据针法选择引拔的锁针高度、参考下图"}]},{id:"3",title:"短针",desc:"短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",imgList:[{img_src:"./images/crochet/dzhen1.jpg"},{img_src:"./images/crochet/dzhen2.jpg",img_des:"1、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/dzhen3.jpg",img_des:"2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"},{img_src:"./images/crochet/dzhen4.jpg",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织短针"},{img_src:"./images/crochet/dzhen5.jpg",img_des:"4、如图为钩织3个短针、接下来按照图解继续完成钩织"}]},{id:"4",title:"中长针",desc:"中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",imgList:[{img_src:"./images/crochet/zczhen1.jpg"},{img_src:"./images/crochet/zczhen2.jpg",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/zczhen3.jpg",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"},{img_src:"./images/crochet/zczhen4.jpg",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"}]},{id:"5",title:"长针",desc:"长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",imgList:[{img_src:"./images/crochet/czhen1.jpg"},{img_src:"./images/crochet/czhen2.jpg",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"./images/crochet/czhen3.jpg",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"},{img_src:"./images/crochet/czhen4.jpg"},{img_src:"./images/crochet/czhen5.jpg",img_des:"3、绕线从这2个线圈中钩出，即完成一个长针"}]},{id:"6",title:"长长针",desc:"长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",imgList:[{img_src:"./images/crochet/cczhen1.jpg"},{img_src:"./images/crochet/cczhen2.jpg",img_des:"1、如图所示在钩针上绕线3圈后穿入针目"},{img_src:"./images/crochet/cczhen3.jpg",img_des:"2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"},{img_src:"./images/crochet/cczhen4.jpg"},{img_src:"./images/crochet/cczhen5.jpg"},{img_src:"./images/crochet/cczhen6.jpg",img_des:"3、钩针上只有一个线圈时即完成一个三卷长针"}]},{id:"7",title:"N卷长针",desc:`N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。
N卷长针引拔时高度等于N个锁针。
N卷长针常用于植物钩织。`,imgList:[{img_src:"./images/crochet/jczhen.jpg"}]},{id:"8",title:"加针/分针",desc:"加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",imgList:[{img_src:"./images/crochet/jiazhen.jpg"},{img_src:"./images/crochet/dzjvzhen1.jpg",img_des:"1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"},{img_src:"./images/crochet/dzjvzhen2.jpg",img_des:"2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"}]},{id:"9",title:"减针/并针",desc:"减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",imgList:[{img_des:"短针减针：",img_src:"./images/crochet/dzjazhen1.jpg"},{img_src:"./images/crochet/dzjazhen2.jpg",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/dzjazhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"./images/crochet/dzjazhen4.jpg",img_des:"3、绕线从3个线圈中一次性钩出，即完成一个短针减针"},{img_des:"短针减三针：",img_src:"./images/crochet/dzjmzhen1.jpg"},{img_src:"./images/crochet/dzjmzhen2.jpg",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/dzjmzhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"./images/crochet/dzjmzhen4.jpg",img_des:"3、继续穿过下一个针目后绕线钩出、此时钩针上有4个线圈"},{img_src:"./images/crochet/dzjmzhen5.jpg",img_des:"4、绕线从4个线圈中一次性钩出，即完成一个短针减三针"},{img_des:"中长针减针：",img_src:"./images/crochet/zczjtazhen1.jpg"},{img_src:"./images/crochet/zczjtazhen2.jpg",img_des:"1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/zczjtazhen3.jpg",img_des:"2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"},{img_src:"./images/crochet/zczjtazhen4.jpg"},{img_src:"./images/crochet/zczjtazhen5.jpg",img_des:"3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"},{img_des:"长针减针：",img_src:"./images/crochet/czjfazhen1.jpg"},{img_src:"./images/crochet/czjfazhen2.jpg",img_des:"1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"./images/crochet/czjfazhen3.jpg",img_des:"2、穿过后绕线钩出、此时钩针上有4个线圈"},{img_src:"./images/crochet/czjfazhen4.jpg",img_des:"3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"},{img_src:"./images/crochet/czjfazhen5.jpg",img_des:"4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"},{img_des:`长针、长长针、N卷长针的减针钩法类似(步骤总结)：
1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目
2、绕线从针目中钩出、钩织第2个未完成的N卷长针
3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈
4、绕线从这些个线圈中一次性钩出`}]},{id:"10",title:"内半针",desc:"内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",imgList:[{img_src:"./images/crochet/nbzhen1.jpg"},{img_src:"./images/crochet/nbzhen2.jpg",img_des:"短针内半针："}]},{id:"11",title:"外半针",desc:"外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",imgList:[{img_src:"./images/crochet/wbzhen1.jpg"},{img_src:"./images/crochet/wbzhen2.jpg",img_des:"短针外半针："}]}]},{cap_id:"2",select:"0",cap:"起针方法",contentMenuList:[{id:"21",title:"手势",desc:"钩织时有一定的绕线方式、拿线方式与拿针方式。",imgList:[{img_src:"./images/crochet/sshi1.jpg",img_des:`绕线方式：
1、如图绕线`},{img_src:"./images/crochet/sshi2.jpg",img_des:"2、左手拇指与中指按住线头/织物、食指与小指配合带线"},{img_src:"./images/crochet/sshi3.jpg",img_des:"拿针方式："},{img_src:"./images/crochet/sshi4.jpg"}]},{id:"22",title:"环起",desc:`通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
环起钩织的织物底面大致为圆形。`,imgList:[{img_src:"./images/crochet/dzhqi.jpg",img_des:"短针环起："},{img_src:"./images/crochet/zczhqi.jpg",img_des:"中长针环起："},{img_src:"./images/crochet/czhqi.jpg",img_des:"长针环起："},{img_des:"提示：环起详细教程请前往笔记页面观看视频教程。"}]},{id:"23",title:"片起",desc:"片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",imgList:[{img_src:"./images/crochet/dzpqi.jpg",img_des:"短针片起："},{img_src:"./images/crochet/zczpqi.jpg",img_des:"中长针片起："},{img_src:"./images/crochet/czpqi.jpg",img_des:"长针片起："},{img_des:"提示：片起详细教程请前往笔记页面观看视频教程。"}]},{id:"24",title:"辫子针环起",desc:`辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
辫子针环起钩织的织物底面大致为圆角矩形。`,imgList:[{img_src:"./images/crochet/dzbzzhqi.jpg",img_des:"短针-辫子针环起："},{img_src:"./images/crochet/zczbzzhqi.jpg",img_des:"中长针-辫子针环起："},{img_src:"./images/crochet/czbzzhqi.jpg",img_des:"长针-辫子针环起："},{img_des:"提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"}]},{id:"25",title:"花片环起",desc:"花片环形起针即在已有轮廓的基础上通过锁针起针，再环绕钩织，通常用于花片、发夹、花边等。",imgList:[{img_src:"./images/crochet/hbqz01.jpg"}]}]},{cap_id:"6",select:"0",cap:"附录",contentMenuList:[{id:"61",title:"钩针符号合集",imgList:[{img_src:"./images/crochet/zmfhao.jpg"}]},{id:"62",title:"英文符号合集",imgList:[{img_src:"./images/crochet/ywfhao.jpg"}]}]}],bC=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"上针",decs:"上针在织物纹样中对应月牙形。",imgList:[{img_src:"./images/knit/szhen1.jpg"},{img_src:"./images/knit/szhen2.jpg"},{img_src:"./images/knit/szhen3.jpg"},{img_src:"./images/knit/szhen4.jpg"},{img_src:"./images/knit/szhen5.jpg"}]},{id:"2",title:"下针",decs:"下针在织物纹样中对应 V 形。",imgList:[{img_src:"./images/knit/xzhen1.jpg"},{img_src:"./images/knit/xzhen2.jpg"},{img_src:"./images/knit/xzhen3.jpg"},{img_src:"./images/knit/xzhen4.jpg"},{img_src:"./images/knit/xzhen5.jpg"}]},{id:"3",title:"滑针",imgList:[{img_src:"./images/knit/hzhen1.jpg"},{img_src:"./images/knit/hzhen2.jpg"},{img_src:"./images/knit/hzhen3.jpg"}]},{id:"4",title:"空针",imgList:[{img_src:"./images/knit/kzhen1.jpg"},{img_src:"./images/knit/kzhen2.jpg"},{img_src:"./images/knit/kzhen3.jpg"},{img_src:"./images/knit/kzhen4.jpg"}]},{id:"5",title:"左加针",imgList:[{img_src:"./images/knit/zjzhen1.jpg"},{img_src:"./images/knit/zjzhen2.jpg"},{img_src:"./images/knit/zjzhen3.jpg"}]},{id:"6",title:"右加针",imgList:[{img_src:"./images/knit/yjzhen1.jpg"},{img_src:"./images/knit/yjzhen2.jpg"},{img_src:"./images/knit/yjzhen3.jpg"},{img_src:"./images/knit/yjzhen4.jpg"}]},{id:"7",title:"左减针",imgList:[{img_src:"./images/knit/zjianzhen1.jpg"},{img_src:"./images/knit/zjianzhen2.jpg"},{img_src:"./images/knit/zjianzhen3.jpg"},{img_src:"./images/knit/zjianzhen4.jpg"},{img_src:"./images/knit/zjianzhen5.jpg"}]},{id:"8",title:"右减针",imgList:[{img_src:"./images/knit/yjianzhen1.jpg"},{img_src:"./images/knit/yjianzhen2.jpg"},{img_src:"./images/knit/yjianzhen3.jpg"},{img_src:"./images/knit/yjianzhen4.jpg"},{img_src:"./images/knit/yjianzhen5.jpg"}]},{id:"9",title:"3针并针",imgList:[{img_src:"./images/knit/djianzhen1.jpg"},{img_src:"./images/knit/djianzhen2.jpg"},{img_src:"./images/knit/djianzhen3.jpg"}]},{id:"10",title:"加线",imgList:[{img_src:"./images/knit/jxian1.jpg"},{img_src:"./images/knit/jxian2.jpg"},{img_src:"./images/knit/jxian3.jpg"}]}]},{cap_id:"1",select:"0",cap:"起针与收针",contentMenuList:[{id:"21",title:"手势",desc:"棒织时有一定的带线、绕线方式与持针方式，主要包括右手带线和左手带线两种",imgList:[{img_src:"./images/knit/ysdxian1.jpg",img_des:"右手带线：右手如图绕线，在编织时通过右手食指前伸，带线绕过针头。右手带线是最常见的带线方式。"},{img_src:"./images/knit/sshi2.jpg",img_des:"左手带线：左手如图绕线，在编织时左手食指带线绕过针头。左手带线难于右手带线，但熟练后编织速度更快。"}]},{id:"22",title:"基础起针",imgList:[{img_src:"./images/knit/qzhen1.jpg",img_des:"1、将毛线打一个活结，并传入一根棒针。"},{img_src:"./images/knit/qzhen2.jpg",img_des:"2、右手持针，左手如图绕线，如图用棒针挑线带出，左手拉紧线圈，即起好一针。"}]},{id:"23",title:"基础收针",imgList:[{img_src:"./images/knit/shouzhen1.jpg",img_des:"方式1: 收针即右手棒针每织两针，则用左手棒针穿入右手棒针上的前一个线圈，右手棒针将后一个线圈从中带出，以此类推，知道右手剩最后一个线圈。"},{img_src:"./images/knit/shouzhen2.jpg",img_des:"方式2: 用线穿入所有线圈，收紧即可。"}]}]}],IC=[{id:1,title:"线材总述",desc:"纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",img:"./images/xc/xc.jpg",detailList:[{desc:` 
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
1、塑料线：`,img:"./images/xc/slx.jpg"},{desc:"2、塑料绳：",img:"./images/xc/sls.jpg"},{desc:"3、胶制线：",img:"./images/xc/jzx.jpg"},{desc:"4、金属线：",img:"./images/xc/jsx.jpg"}]}],SC=[{id:1,title:"新手必备",desc:"此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",img:"./images/qc/xsbbei.jpg",detailList:[{desc:`
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

`}]},{id:16,title:"镊子",desc:"镊子用于塞填充棉，或者辅助微钩。",img:"./images/qc/nzi.jpg",detailList:[{img:"./images/qc/nzi01.jpg"}]},{id:17,title:"染料",desc:"染料常用于微钩中对原色织物染色，比如微钩水果、花卉等，燃料浓度较高，通常按照一定比例搭配稀释剂或清水使用。",img:"./images/qc/rliao.jpg",detailList:[{img:"./images/qc/rliao01.jpg"}]},{id:18,title:"尖钳",desc:"尖钳用于用到金属配件的织物，比如挂件、钥匙扣、需要定型的花卉、玩偶等。",img:"./images/qc/jqian.jpg",detailList:[{img:"./images/qc/jqian01.jpg"}]},{id:19,title:"热熔胶枪",desc:"热熔胶枪用于黏贴织物与配件，使用时待其冷却方可粘牢。",img:"./images/qc/jqiang.jpg",detailList:[{img:"./images/qc/jqiang01.jpg"}]}],MC=[{id:1,title:"雪花熊",desc:`钩针：4.0-6.0mm
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
配件：塑料卡包内芯、18mm磁扣`,img:"https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",detail:"https://ingenueland.online/crochet-time/images/tujie/xiongmaokayi.jpg"}],DC=[{id:1,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-1.png",path:["M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z","M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z","M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z","M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z","M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z"]},{id:2,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-2.png",path:["M114.001 30C111.001 30 110.001 31 110.001 34V52H158.001V34C158.001 31 157.001 30 154.001 30H114.001Z","M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135C86.3066 133.553 88.6955 132.01 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189C119.292 163.634 117.59 165.109 116 166.5ZM116 166.5L115.741 166.742C115.826 166.662 115.913 166.582 116 166.5ZM111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C98.9998 124.565 100.678 123.131 102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C109.576 172.352 108.129 173.513 106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0003 143.09L77.6376 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928ZM158.001 104V95C139.394 97.1812 128.844 95.8138 110.001 94V101C128.737 104.86 139.261 107.697 158.001 104ZM162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150C137.979 150.752 136.172 151.557 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C107.769 114.458 108.435 113.243 109.001 112C109.462 110.584 109.711 109.391 109.845 108C127.438 114.64 139.28 118.633 160 113C160.374 114.5 160.955 115.932 162.007 119ZM94.0008 183L88.0003 169C84.238 161.539 81.21 159.444 72.0003 156L62.001 152L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C98.1699 180.387 96.1975 181.633 94.0008 183ZM158.001 52H110.001V59H158.001V52ZM110.001 66H158.001V73H110.001V66ZM110.001 80H158.001V87H110.001V80Z","M116 166.5L110 153C106 146.5 104 142.009 96.0001 139.009L84.0001 135L78.0001 139.009L91.0001 143C98.0001 146 100 149 104 156L111.191 170.928M116 166.5L115.741 166.742M116 166.5C115.913 166.582 115.826 166.662 115.741 166.742M111.226 171L111.191 170.928M97.0001 126L97.1062 126.035M97.1062 126.035C95.2354 127.488 93.1546 128.976 91.0001 130.442L104 135C111 138 113 143.5 115 148L121 162.189L125.5 158.487L120 144C118 139.5 116 133 109 130L97.1062 126.035ZM111.191 170.928C112.465 169.804 113.842 168.516 115.741 166.742M158.001 104C139.261 107.697 128.737 104.86 110.001 101V102C110.001 104.64 109.995 106.444 109.845 108C127.438 114.64 139.28 118.633 160 113C159.433 110.724 158.5 107.5 158.001 104ZM102 121.792L113 126C120 129 123.5 135.5 125 140L130 155.127C131.424 154.158 132.901 153.263 134.5 152.429L130 136C127.5 128.5 126 124.711 117 120L107 115.652C105.648 117.751 103.982 119.785 102 121.792ZM106 175.067L99.0001 159C95.0001 152.5 93.0001 150 85.0001 147L72.0004 143.09L66.0312 148L78.0001 152C87.2098 155.444 90.2378 157.539 94.0001 165L100 179.191C102.152 177.785 104.108 176.449 106 175.067ZM110.001 59H158.001V66H110.001V59ZM110.001 73H158.001V80H110.001V73ZM110.001 87H158.001V95C139.394 97.1812 128.844 95.8138 110.001 94V87Z","M164 125L162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150L152 146C159.815 142.843 166.895 137.053 164 125Z","M62.0005 182C70.0004 190.5 81.5561 190.748 94.0006 183L88.0002 169C84.2379 161.539 81.2099 159.444 72.0002 156L62.0009 152C54.5002 161 54.0007 172 62.0005 182Z"]},{id:3,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-sock-3.png",path:["M114.001 30C111.001 30 110.001 31 110.001 34V52H158.001V34C158.001 31 157.001 30 154.001 30H114.001Z","M86.0011 134C76.1511 140.181 69.8151 143.678 62.001 152L72.0003 156C81.21 159.444 84.238 161.539 88.0003 169L94.0008 183C98.7809 180.026 102.499 177.624 106 175.067C109.883 172.232 113.499 169.207 118.001 165C122.583 160.991 126.095 157.783 130 155.127C132.913 153.146 136.045 151.471 140.001 150C135.014 140.821 133.142 134.529 132.001 124L162.007 119C160.218 113.784 158.001 109.693 158.001 102V52H110.001V102C110.001 107 109.978 109 109.001 112C107.441 115.43 105.109 118.645 102 121.792C97.975 125.868 92.6462 129.83 86.0011 134Z","M148 61C148 64.866 144.866 68 141 68C137.134 68 134 64.866 134 61C134 57.134 137.134 54 141 54C144.866 54 148 57.134 148 61ZM111 74C114.866 74 118 70.866 118 67C118 63.134 114.866 60 111 60C110.66 60 110.326 60.0242 110 60.0709V73.9291C110.326 73.9758 110.66 74 111 74ZM155 90C151.134 90 148 86.866 148 83C148 79.134 151.134 76 155 76C156.073 76 157.09 76.2417 158 76.6736V89.3264C157.09 89.7583 156.073 90 155 90ZM134 86C134 89.866 130.866 93 127 93C123.134 93 120 89.866 120 86C120 82.134 123.134 79 127 79C130.866 79 134 82.134 134 86ZM123 105C123 108.866 119.866 112 116 112C113.453 112 111.224 110.64 110 108.608V101.392C111.224 99.3596 113.453 98 116 98C119.866 98 123 101.134 123 105ZM146 105C146 108.866 142.866 112 139 112C135.134 112 132 108.866 132 105C132 101.134 135.134 98 139 98C142.866 98 146 101.134 146 105ZM159 116C155.134 116 152 112.866 152 109C152 105.474 154.607 102.556 158 102.071C158.201 107.705 158.713 110.677 160.798 115.767C160.224 115.919 159.621 116 159 116ZM127 127C127 130.866 123.866 134 120 134C116.134 134 113 130.866 113 127C113 123.134 116.134 120 120 120C123.866 120 127 123.134 127 127ZM125 159C121.134 159 118 155.866 118 152C118 148.134 121.134 145 125 145C128.866 145 132 148.134 132 152C132 152.695 131.898 153.366 131.71 154C129.209 155.558 128.049 156.509 126.477 157.799L126.476 157.8C126.03 158.166 125.552 158.558 125 159ZM97.9996 134C101.866 134 105 130.866 105 127C105 124.769 103.956 122.782 102.33 121.5C98.5064 125.15 96.1781 127.045 91.7925 130.239C92.9614 132.474 95.3023 134 97.9996 134ZM97.9996 154C101.866 154 105 150.866 105 147C105 143.134 101.866 140 97.9996 140C94.1336 140 90.9996 143.134 90.9996 147C90.9996 150.866 94.1336 154 97.9996 154ZM71.9996 149C75.8656 149 78.9996 145.866 78.9996 142C78.9996 141.058 78.5627 140.16 78.1638 139.339C78.108 139.225 78.053 139.112 78 139C73.6273 141.622 71.4864 143.214 67.1006 147C68.3631 148.237 70.0923 149 71.9996 149ZM96.9996 172C96.9996 168.134 100.134 165 104 165C107.526 165 110.443 167.608 110.929 171C107.191 174.3 104.995 175.808 101 178.326C98.6346 177.203 96.9996 174.792 96.9996 172Z","M164 125L162.007 119L132.001 124C133.142 134.529 135.014 140.821 140.001 150L152 146C159.815 142.843 166.895 137.053 164 125Z","M62.0005 182C70.0004 190.5 81.5561 190.748 94.0006 183L88.0002 169C84.2379 161.539 81.2099 159.444 72.0002 156L62.0009 152C54.5002 161 54.0007 172 62.0005 182Z"]},{id:4,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-1.png",path:["M189 31H31V53.5714H189V31ZM189 76.1406H31V98.7121H189V76.1406ZM31 121.289H189V143.86H31V121.289ZM189 166.43H31V189.001H189V166.43Z","M31 53.5703H189V76.1417H31V53.5703ZM31 98.7109H189V121.282H31V98.7109ZM189 143.859H31V166.431H189V143.859Z"]},{id:5,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-2.png",path:["M60 60H80V80H60V60ZM60 140H80V160H60V140ZM80 100H60V120H80V100ZM100 60H120V80H100V60ZM120 140H100V160H120V140ZM100 100H120V120H100V100ZM160 60H140V80H160V60ZM140 140H160V160H140V140ZM160 100H140V120H160V100Z","M80 40H60V60H40V80H60V100H40V120H60V140H40V160H60V180H80V160H100V180H120V160H140V180H160V160H180V140H160V120H180V100H160V80H180V60H160V40H140V60H120V40H100V60H80V40ZM80 80V60H60V80H80ZM100 80V60H120V80H100ZM100 100V80H80V100H60V120H80V140H60V160H80V140H100V160H120V140H140V160H160V140H140V120H160V100H140V80H160V60H140V80H120V100H100ZM100 120H80V100H100V120ZM120 120H140V100H120V120ZM120 120H100V140H120V120Z","M60 40H40V60H60V40ZM60 120H40V140H60V120ZM40 80H60V100H40V80ZM60 160H40V180H60V160ZM80 40H100V60H80V40ZM100 120H80V140H100V120ZM80 80H100V100H80V80ZM100 160H80V180H100V160ZM120 40H140V60H120V40ZM140 120H120V140H140V120ZM120 80H140V100H120V80ZM140 160H120V180H140V160ZM160 40H180V60H160V40ZM180 120H160V140H180V120ZM160 80H180V100H160V80ZM180 160H160V180H180V160Z"]},{id:6,img:"https://ingenueland.online/crochet-time/images/color-fill/ct-color-fill-svg-grid-3.png",path:["M67 72C69.7614 72 72 69.7614 72 67C72 64.2386 69.7614 62 67 62C64.2386 62 62 64.2386 62 67C62 69.7614 64.2386 72 67 72ZM153 72C155.761 72 158 69.7614 158 67C158 64.2386 155.761 62 153 62C150.239 62 148 64.2386 148 67C148 69.7614 150.239 72 153 72ZM158 153C158 155.761 155.761 158 153 158C150.239 158 148 155.761 148 153C148 150.239 150.239 148 153 148C155.761 148 158 150.239 158 153ZM67 158C69.7614 158 72 155.761 72 153C72 150.239 69.7614 148 67 148C64.2386 148 62 150.239 62 153C62 155.761 64.2386 158 67 158Z","M 58.2087 53.9445 C 56.5506 51.9965 57.935 49 60.4932 49 H 62 H 73.5068 C 76.065 49 77.4494 51.9965 75.7913 53.9445 L 70.6841 59.9445 C 70.1141 60.6142 69.279 61 68.3997 61 H 65.6003 C 64.721 61 63.8859 60.6142 63.3159 59.9445 L 59.1071 55 L 58.2087 53.9445 Z M 58.2087 80.0555 C 56.5506 82.0035 57.935 85 60.4932 85 H 73 H 73.5068 C 76.065 85 77.4494 82.0035 75.7913 80.0555 L 70.6841 74.0555 C 70.1141 73.3858 69.279 73 68.3997 73 H 65.6003 C 64.721 73 63.8859 73.3858 63.3159 74.0555 L 58.2087 80.0555 Z M 85 73.5068 C 85 76.065 82.0035 77.4494 80.0555 75.7913 L 74.0555 70.6841 C 73.3858 70.1141 73 69.279 73 68.3997 V 65.6003 C 73 64.721 73.3858 63.8859 74.0555 63.3159 L 80.0555 58.2087 C 82.0035 56.5506 85 57.935 85 60.4932 V 61 V 73.5068 Z M 53.9445 75.7913 C 51.9965 77.4494 49 76.065 49 73.5068 V 73 V 60.4932 C 49 57.935 51.9965 56.5506 53.9445 58.2087 L 59.9445 63.3159 C 60.6142 63.8859 61 64.721 61 65.6003 V 68.3997 C 61 69.279 60.6142 70.1141 59.9445 70.6841 L 53.9445 75.7913 Z M 144.209 53.9445 C 142.551 51.9965 143.935 49 146.493 49 H 147 H 159.507 C 162.065 49 163.449 51.9965 161.791 53.9445 L 156.684 59.9445 C 156.114 60.6142 155.279 61 154.4 61 H 151.6 C 150.721 61 149.886 60.6142 149.316 59.9445 L 144.209 53.9445 Z M 144.209 80.0555 C 142.551 82.0035 143.935 85 146.493 85 H 159.507 C 162.065 85 163.449 82.0035 161.791 80.0555 L 156.684 74.0555 C 156.114 73.3858 155.279 73 154.4 73 H 151.6 C 150.721 73 149.886 73.3858 149.316 74.0555 L 144.209 80.0555 Z M 171 73.5068 C 171 76.065 168.004 77.4494 166.055 75.7913 L 160.055 70.6841 C 159.386 70.1141 159 69.279 159 68.3997 V 65.6003 C 159 64.721 159.386 63.8859 160.055 63.3159 L 166.055 58.2087 C 168.004 56.5506 171 57.935 171 60.4932 V 73.5068 Z M 139.945 75.7913 C 137.996 77.4494 135 76.065 135 73.5068 V 60.4932 C 135 57.935 137.996 56.5506 139.945 58.2087 L 145.945 63.3159 C 146.614 63.8859 147 64.721 147 65.6003 V 68.3997 C 147 69.279 146.614 70.1141 145.945 70.6841 L 139.945 75.7913 Z M 146.493 135 C 143.935 135 142.551 137.996 144.209 139.945 L 149.316 145.945 C 149.886 146.614 150.721 147 151.6 147 H 154.4 C 155.279 147 156.114 146.614 156.684 145.945 L 161.791 139.945 C 163.449 137.996 162.065 135 159.507 135 H 146.493 Z M 146.493 171 C 143.935 171 142.551 168.004 144.209 166.055 L 149.316 160.055 C 149.886 159.386 150.721 159 151.6 159 H 154.4 C 155.279 159 156.114 159.386 156.684 160.055 L 161.791 166.055 C 163.449 168.004 162.065 171 159.507 171 H 146.493 Z M 166.055 161.791 C 168.004 163.449 171 162.065 171 159.507 V 146.493 C 171 143.935 168.004 142.551 166.055 144.209 L 160.055 149.316 C 159.386 149.886 159 150.721 159 151.6 V 154.4 C 159 155.279 159.386 156.114 160.055 156.684 L 166.055 161.791 Z M 135 159.507 C 135 162.065 137.996 163.449 139.945 161.791 L 145.945 156.684 C 146.614 156.114 147 155.279 147 154.4 V 151.6 C 147 150.721 146.614 149.886 145.945 149.316 L 139.945 144.209 C 137.996 142.551 135 143.935 135 146.493 V 159.507 Z M 58.2087 139.945 C 56.5506 137.996 57.935 135 60.4932 135 H 73.5068 C 76.065 135 77.4494 137.996 75.7913 139.945 L 70.6841 145.945 C 70.1141 146.614 69.279 147 68.3997 147 H 65.6003 C 64.721 147 63.8859 146.614 63.3159 145.945 L 58.2087 139.945 Z M 58.2087 166.055 C 56.5506 168.004 57.935 171 60.4932 171 H 73.5068 C 76.065 171 77.4494 168.004 75.7913 166.055 L 70.6841 160.055 C 70.1141 159.386 69.279 159 68.3997 159 H 65.6003 C 64.721 159 63.8859 159.386 63.3159 160.055 L 58.2087 166.055 Z M 85 159.507 C 85 162.065 82.0035 163.449 80.0555 161.791 L 74.0555 156.684 C 73.3858 156.114 73 155.279 73 154.4 V 151.6 C 73 150.721 73.3858 149.886 74.0555 149.316 L 80.0555 144.209 C 82.0035 142.551 85 143.935 85 146.493 V 159.507 Z M 53.9445 161.791 C 51.9965 163.449 49 162.065 49 159.507 V 146.493 C 49 143.935 51.9965 142.551 53.9445 144.209 L 59.9445 149.316 C 60.6142 149.886 61 150.721 61 151.6 V 154.4 C 61 155.279 60.6142 156.114 59.9445 156.684 L 53.9445 161.791 Z","M 48.2419 37 C 45.7264 37 44.3278 39.9098 45.8993 41.8741 L 46 42 L 51 48 L 51.1213 48.1213 C 51.6839 48.6839 52.447 49 53.2426 49 H 54 H 56 H 56.7574 C 57.553 49 58.3161 48.6839 58.8787 48.1213 L 59 48 L 64 42 L 64.1007 41.8741 C 65.6722 39.9098 64.2736 37 61.7581 37 H 61 H 49 H 48.2419 Z M 70.1005 41.9205 C 68.4721 39.9666 69.8616 37 72.4051 37 H 73 H 85.5949 C 88.1384 37 89.5279 39.9666 87.8995 41.9206 L 82.8995 47.9206 C 82.3296 48.6045 81.4852 49 80.5949 49 H 77.4051 C 76.5148 49 75.6704 48.6045 75.1005 47.9206 L 70.1005 41.9205 Z M 70.1005 92.0795 C 68.4721 94.0334 69.8616 97 72.4051 97 H 85 H 85.5949 C 88.1384 97 89.5279 94.0334 87.8995 92.0794 L 82.8995 86.0794 C 82.3296 85.3955 81.4852 85 80.5949 85 H 77.4051 C 76.5148 85 75.6704 85.3955 75.1005 86.0794 L 70.1005 92.0795 Z M 46.1005 92.0795 C 44.4721 94.0334 45.8616 97 48.4051 97 H 61 H 61.5949 C 64.1384 97 65.5279 94.0334 63.8995 92.0794 L 58.8995 86.0794 C 58.3296 85.3955 57.4852 85 56.5949 85 H 53.4051 C 52.5148 85 51.6704 85.3955 51.1005 86.0794 L 46.1005 92.0795 Z M 97 61.5949 C 97 64.1384 94.0334 65.5279 92.0795 63.8995 L 86.0794 58.8995 C 85.3955 58.3296 85 57.4852 85 56.5949 V 53.4051 C 85 52.5148 85.3955 51.6704 86.0794 51.1005 L 92.0794 46.1005 C 94.0334 44.4721 97 45.8616 97 48.4051 V 61.5949 Z M 41.9205 63.8995 C 39.9666 65.5279 37 64.1384 37 61.5949 V 61 V 48.4051 C 37 45.8616 39.9666 44.4721 41.9206 46.1005 L 47.9206 51.1005 C 48.6045 51.6704 49 52.5148 49 53.4051 V 56.5949 C 49 57.4852 48.6045 58.3296 47.9206 58.8995 L 41.9205 63.8995 Z M 97 85.5949 C 97 88.1384 94.0334 89.5279 92.0795 87.8995 L 86.0794 82.8995 C 85.3955 82.3296 85 81.4852 85 80.5949 V 77.4051 C 85 76.5148 85.3955 75.6704 86.0794 75.1005 L 92.0794 70.1005 C 94.0334 68.4721 97 69.8616 97 72.4051 V 85.5949 Z M 41.9205 87.8995 C 39.9666 89.5279 37 88.1384 37 85.5949 V 85 V 72.4051 C 37 69.8616 39.9666 68.4721 41.9206 70.1005 L 47.9206 75.1005 C 48.6045 75.6704 49 76.5148 49 77.4051 V 80.5949 C 49 81.4852 48.6045 82.3296 47.9206 82.8995 L 41.9205 87.8995 Z M 134.405 37 C 131.862 37 130.472 39.9666 132.1 41.9205 L 137.1 47.9206 C 137.67 48.6045 138.515 49 139.405 49 H 142.595 C 143.485 49 144.33 48.6045 144.9 47.9206 L 149.9 41.9206 C 151.528 39.9666 150.138 37 147.595 37 H 134.405 Z M 156.1 41.9205 C 154.472 39.9666 155.862 37 158.405 37 H 171.595 C 174.138 37 175.528 39.9666 173.9 41.9206 L 168.9 47.9206 C 168.33 48.6045 167.485 49 166.595 49 H 163.405 C 162.515 49 161.67 48.6045 161.1 47.9206 L 156.1 41.9205 Z M 156.1 92.0795 C 154.472 94.0334 155.862 97 158.405 97 H 171 H 171.595 C 174.138 97 175.528 94.0334 173.9 92.0794 L 168.9 86.0794 C 168.33 85.3955 167.485 85 166.595 85 H 163.405 C 162.515 85 161.67 85.3955 161.1 86.0794 L 156.1 92.0795 Z M 132.1 92.0795 C 130.472 94.0334 131.862 97 134.405 97 H 147 H 147.595 C 150.138 97 151.528 94.0334 149.9 92.0794 L 144.9 86.0794 C 144.33 85.3955 143.485 85 142.595 85 H 139.405 C 138.515 85 137.67 85.3955 137.1 86.0794 L 132.1 92.0795 Z M 183 61.5949 C 183 64.1384 180.033 65.5279 178.079 63.8995 L 172.079 58.8995 C 171.395 58.3296 171 57.4852 171 56.5949 V 53.4051 C 171 52.5148 171.395 51.6704 172.079 51.1005 L 178.079 46.1005 C 180.033 44.4721 183 45.8616 183 48.4051 V 49 V 61.5949 Z M 127.921 63.8995 C 125.967 65.5279 123 64.1384 123 61.5949 V 61 V 48.4051 C 123 45.8616 125.967 44.4721 127.921 46.1005 L 133.921 51.1005 C 134.605 51.6704 135 52.5148 135 53.4051 V 56.5949 C 135 57.4852 134.605 58.3296 133.921 58.8995 L 127.921 63.8995 Z M 183 85.5949 C 183 88.1384 180.033 89.5279 178.079 87.8995 L 172.079 82.8995 C 171.395 82.3296 171 81.4852 171 80.5949 V 77.4051 C 171 76.5148 171.395 75.6704 172.079 75.1005 L 178.079 70.1005 C 180.033 68.4721 183 69.8616 183 72.4051 V 85.5949 Z M 127.921 87.8995 C 125.967 89.5279 123 88.1384 123 85.5949 V 72.4051 C 123 69.8616 125.967 68.4721 127.921 70.1005 L 133.921 75.1005 C 134.605 75.6704 135 76.5148 135 77.4051 V 80.5949 C 135 81.4852 134.605 82.3296 133.921 82.8995 L 127.921 87.8995 Z M 132.1 127.921 C 130.472 125.967 131.862 123 134.405 123 H 147.595 C 150.138 123 151.528 125.967 149.9 127.921 L 144.9 133.921 C 144.33 134.605 143.485 135 142.595 135 H 139.405 C 138.515 135 137.67 134.605 137.1 133.921 L 132.1 127.921 Z M 158.405 123 C 155.862 123 154.472 125.967 156.1 127.921 L 161.1 133.921 C 161.67 134.605 162.515 135 163.405 135 H 166.595 C 167.485 135 168.33 134.605 168.9 133.921 L 173.9 127.921 C 175.528 125.967 174.138 123 171.595 123 H 158.405 Z M 158.405 183 C 155.862 183 154.472 180.033 156.1 178.079 L 161.1 172.079 C 161.67 171.395 162.515 171 163.405 171 H 166.595 C 167.485 171 168.33 171.395 168.9 172.079 L 173.9 178.079 C 175.528 180.033 174.138 183 171.595 183 H 158.405 Z M 134.405 183 C 131.862 183 130.472 180.033 132.1 178.079 L 137.1 172.079 C 137.67 171.395 138.515 171 139.405 171 H 142.595 C 143.485 171 144.33 171.395 144.9 172.079 L 149.9 178.079 C 151.528 180.033 150.138 183 147.595 183 H 134.405 Z M 178.079 149.9 C 180.033 151.528 183 150.138 183 147.595 V 134.405 C 183 131.862 180.033 130.472 178.079 132.1 L 172.079 137.1 C 171.395 137.67 171 138.515 171 139.405 V 142.595 C 171 143.485 171.395 144.33 172.079 144.9 L 178.079 149.9 Z M 123 147.595 C 123 150.138 125.967 151.528 127.921 149.9 L 133.921 144.9 C 134.605 144.33 135 143.485 135 142.595 V 139.405 C 135 138.515 134.605 137.67 133.921 137.1 L 127.921 132.1 C 125.967 130.472 123 131.862 123 134.405 V 147.595 Z M 178.079 173.9 C 180.033 175.528 183 174.138 183 171.595 V 158.405 C 183 155.862 180.033 154.472 178.079 156.1 L 172.079 161.1 C 171.395 161.67 171 162.515 171 163.405 V 166.595 C 171 167.485 171.395 168.33 172.079 168.9 L 178.079 173.9 Z M 123 171.595 C 123 174.138 125.967 175.528 127.921 173.9 L 133.921 168.9 C 134.605 168.33 135 167.485 135 166.595 V 163.405 C 135 162.515 134.605 161.67 133.921 161.1 L 127.921 156.1 C 125.967 154.472 123 155.862 123 158.405 V 171.595 Z M 48.4051 123 C 45.8616 123 44.4721 125.967 46.1005 127.921 L 51.1005 133.921 C 51.6704 134.605 52.5148 135 53.4051 135 H 56.5949 C 57.4852 135 58.3296 134.605 58.8995 133.921 L 63.8995 127.921 C 65.5279 125.967 64.1384 123 61.5949 123 H 49 H 48.4051 Z M 70.1005 127.921 C 68.4721 125.967 69.8616 123 72.4051 123 H 85.5949 C 88.1384 123 89.5279 125.967 87.8995 127.921 L 82.8995 133.921 C 82.3296 134.605 81.4852 135 80.5949 135 H 77.4051 C 76.5148 135 75.6704 134.605 75.1005 133.921 L 70.1005 127.921 Z M 70.1005 178.079 C 68.4721 180.033 69.8616 183 72.4051 183 H 85.5949 C 88.1384 183 89.5279 180.033 87.8995 178.079 L 82.8995 172.079 C 82.3296 171.395 81.4852 171 80.5949 171 H 77.4051 C 76.5148 171 75.6704 171.395 75.1005 172.079 L 70.1005 178.079 Z M 46.1005 178.079 C 44.4721 180.033 45.8616 183 48.4051 183 H 61 H 61.5949 C 64.1384 183 65.5279 180.033 63.8995 178.079 L 58.8995 172.079 C 58.3296 171.395 57.4852 171 56.5949 171 H 53.4051 C 52.5148 171 51.6704 171.395 51.1005 172.079 L 46.1005 178.079 Z M 97 147.595 C 97 150.138 94.0334 151.528 92.0795 149.9 L 86.0794 144.9 C 85.3955 144.33 85 143.485 85 142.595 V 139.405 C 85 138.515 85.3955 137.67 86.0794 137.1 L 92.0794 132.1 C 94.0334 130.472 97 131.862 97 134.405 V 135 V 147.595 Z M 41.9205 149.9 C 39.9666 151.528 37 150.138 37 147.595 V 147 V 134.405 C 37 131.862 39.9666 130.472 41.9206 132.1 L 47.9206 137.1 C 48.6045 137.67 49 138.515 49 139.405 V 142.595 C 49 143.485 48.6045 144.33 47.9206 144.9 L 41.9205 149.9 Z M 97 171.595 C 97 174.138 94.0334 175.528 92.0795 173.9 L 86.0794 168.9 C 85.3955 168.33 85 167.485 85 166.595 V 163.405 C 85 162.515 85.3955 161.67 86.0794 161.1 L 92.0794 156.1 C 94.0334 154.472 97 155.862 97 158.405 V 171.595 Z M 41.9205 173.9 C 39.9666 175.528 37 174.138 37 171.595 V 171 V 158.405 C 37 155.862 39.9666 154.472 41.9206 156.1 L 47.9206 161.1 C 48.6045 161.67 49 162.515 49 163.405 V 166.595 C 49 167.485 48.6045 168.33 47.9206 168.9 L 41.9205 173.9 Z","M 36.4051 25 C 33.8616 25 32.4721 27.9666 34.1005 29.9205 L 39.1005 35.9206 C 39.6704 36.6045 40.5148 37 41.4051 37 H 44.5949 C 45.4852 37 46.3296 36.6045 46.8995 35.9206 L 51.8995 29.9206 C 53.5279 27.9666 52.1384 25 49.5949 25 H 37 H 36.4051 Z M 60.4051 25 C 57.8616 25 56.4721 27.9666 58.1005 29.9205 L 63.1005 35.9206 C 63.6704 36.6045 64.5148 37 65.4051 37 H 68.5949 C 69.4852 37 70.3296 36.6045 70.8995 35.9206 L 75.8995 29.9206 C 77.5279 27.9666 76.1384 25 73.5949 25 H 61 H 60.4051 Z M 82.1005 29.9205 C 80.4721 27.9666 81.8616 25 84.4051 25 H 85 H 97.5949 C 100.138 25 101.528 27.9666 99.8995 29.9206 L 94.8995 35.9206 C 94.3296 36.6045 93.4852 37 92.5949 37 H 89.4051 C 88.5148 37 87.6704 36.6045 87.1005 35.9206 L 82.1005 29.9205 Z M 82.1005 104.079 C 80.4721 106.033 81.8616 109 84.4051 109 H 97.5949 C 100.138 109 101.528 106.033 99.8995 104.079 L 94.8995 98.0794 C 94.3296 97.3955 93.4852 97 92.5949 97 H 89.4051 C 88.5148 97 87.6704 97.3955 87.1005 98.0794 L 82.1005 104.079 Z M 58.1005 104.079 C 56.4721 106.033 57.8616 109 60.4051 109 H 73.5949 C 76.1384 109 77.5279 106.033 75.8995 104.079 L 70.8995 98.0794 C 70.3296 97.3955 69.4852 97 68.5949 97 H 65.4051 C 64.5148 97 63.6704 97.3955 63.1005 98.0794 L 58.1005 104.079 Z M 34.1005 104.079 C 32.4721 106.033 33.8616 109 36.4051 109 H 49.5949 C 52.1384 109 53.5279 106.033 51.8995 104.079 L 46.8995 98.0794 C 46.3296 97.3955 45.4852 97 44.5949 97 H 41.4051 C 40.5148 97 39.6704 97.3955 39.1005 98.0794 L 34.1005 104.079 Z M 109 49.5949 C 109 52.1384 106.033 53.5279 104.079 51.8995 L 98.0794 46.8995 C 97.3955 46.3296 97 45.4852 97 44.5949 V 41.4051 C 97 40.5148 97.3955 39.6704 98.0794 39.1005 L 104.079 34.1005 C 106.033 32.4721 109 33.8616 109 36.4051 V 49.5949 Z M 29.9205 51.8995 C 27.9666 53.5279 25 52.1384 25 49.5949 V 36.4051 C 25 33.8616 27.9666 32.4721 29.9206 34.1005 L 35.9206 39.1005 C 36.6045 39.6704 37 40.5148 37 41.4051 V 44.5949 C 37 45.4852 36.6045 46.3296 35.9206 46.8995 L 29.9205 51.8995 Z M 109 73.5949 C 109 76.1384 106.033 77.5279 104.079 75.8995 L 98.0794 70.8995 C 97.3955 70.3296 97 69.4852 97 68.5949 V 65.4051 C 97 64.5148 97.3955 63.6704 98.0794 63.1005 L 104.079 58.1005 C 106.033 56.4721 109 57.8616 109 60.4051 V 73.5949 Z M 29.9205 75.8995 C 27.9666 77.5279 25 76.1384 25 73.5949 V 60.4051 C 25 57.8616 27.9666 56.4721 29.9206 58.1005 L 35.9206 63.1005 C 36.6045 63.6704 37 64.5148 37 65.4051 V 68.5949 C 37 69.4852 36.6045 70.3296 35.9206 70.8995 L 29.9205 75.8995 Z M 109 97.5949 C 109 100.138 106.033 101.528 104.079 99.8995 L 98.0794 94.8995 C 97.3955 94.3296 97 93.4852 97 92.5949 V 89.4051 C 97 88.5148 97.3955 87.6704 98.0794 87.1005 L 104.079 82.1005 C 106.033 80.4721 109 81.8616 109 84.4051 V 97.5949 Z M 29.9205 99.8995 C 27.9666 101.528 25 100.138 25 97.5949 V 84.4051 C 25 81.8616 27.9666 80.4721 29.9206 82.1005 L 35.9206 87.1005 C 36.6045 87.6704 37 88.5148 37 89.4051 V 92.5949 C 37 93.4852 36.6045 94.3296 35.9206 94.8995 L 29.9205 99.8995 Z M 122.405 25 C 119.862 25 118.472 27.9666 120.1 29.9205 L 125.1 35.9206 C 125.67 36.6045 126.515 37 127.405 37 H 130.595 C 131.485 37 132.33 36.6045 132.9 35.9206 L 137.9 29.9206 C 139.528 27.9666 138.138 25 135.595 25 H 122.405 Z M 146.405 25 C 143.862 25 142.472 27.9666 144.1 29.9205 L 149.1 35.9206 C 149.67 36.6045 150.515 37 151.405 37 H 154.595 C 155.485 37 156.33 36.6045 156.9 35.9206 L 161.9 29.9206 C 163.528 27.9666 162.138 25 159.595 25 H 146.405 Z M 168.1 29.9205 C 166.472 27.9666 167.862 25 170.405 25 H 183.595 C 186.138 25 187.528 27.9666 185.9 29.9206 L 180.9 35.9206 C 180.33 36.6045 179.485 37 178.595 37 H 175.405 C 174.515 37 173.67 36.6045 173.1 35.9206 L 168.1 29.9205 Z M 168.1 104.079 C 166.472 106.033 167.862 109 170.405 109 H 183.595 C 186.138 109 187.528 106.033 185.9 104.079 L 180.9 98.0794 C 180.33 97.3955 179.485 97 178.595 97 H 175.405 C 174.515 97 173.67 97.3955 173.1 98.0794 L 168.1 104.079 Z M 144.1 104.079 C 142.472 106.033 143.862 109 146.405 109 H 159.595 C 162.138 109 163.528 106.033 161.9 104.079 L 156.9 98.0794 C 156.33 97.3955 155.485 97 154.595 97 H 151.405 C 150.515 97 149.67 97.3955 149.1 98.0794 L 144.1 104.079 Z M 120.1 104.079 C 118.472 106.033 119.862 109 122.405 109 H 135.595 C 138.138 109 139.528 106.033 137.9 104.079 L 132.9 98.0794 C 132.33 97.3955 131.485 97 130.595 97 H 127.405 C 126.515 97 125.67 97.3955 125.1 98.0794 L 120.1 104.079 Z M 195 49.5949 C 195 52.1384 192.033 53.5279 190.079 51.8995 L 184.079 46.8995 C 183.395 46.3296 183 45.4852 183 44.5949 V 41.4051 C 183 40.5148 183.395 39.6704 184.079 39.1005 L 190.079 34.1005 C 192.033 32.4721 195 33.8616 195 36.4051 V 49.5949 Z M 115.921 51.8995 C 113.967 53.5279 111 52.1384 111 49.5949 V 36.4051 C 111 33.8616 113.967 32.4721 115.921 34.1005 L 121.921 39.1005 C 122.605 39.6704 123 40.5148 123 41.4051 V 44.5949 C 123 45.4852 122.605 46.3296 121.921 46.8995 L 115.921 51.8995 Z M 195 73.5949 C 195 76.1384 192.033 77.5279 190.079 75.8995 L 184.079 70.8995 C 183.395 70.3296 183 69.4852 183 68.5949 V 65.4051 C 183 64.5148 183.395 63.6704 184.079 63.1005 L 190.079 58.1005 C 192.033 56.4721 195 57.8616 195 60.4051 V 73.5949 Z M 115.921 75.8995 C 113.967 77.5279 111 76.1384 111 73.5949 V 60.4051 C 111 57.8616 113.967 56.4721 115.921 58.1005 L 121.921 63.1005 C 122.605 63.6704 123 64.5148 123 65.4051 V 68.5949 C 123 69.4852 122.605 70.3296 121.921 70.8995 L 115.921 75.8995 Z M 195 97.5949 C 195 100.138 192.033 101.528 190.079 99.8995 L 184.079 94.8995 C 183.395 94.3296 183 93.4852 183 92.5949 V 89.4051 C 183 88.5148 183.395 87.6704 184.079 87.1005 L 190.079 82.1005 C 192.033 80.4721 195 81.8616 195 84.4051 V 97.5949 Z M 115.921 99.8995 C 113.967 101.528 111 100.138 111 97.5949 V 84.4051 C 111 81.8616 113.967 80.4721 115.921 82.1005 L 121.921 87.1005 C 122.605 87.6704 123 88.5148 123 89.4051 V 92.5949 C 123 93.4852 122.605 94.3296 121.921 94.8995 L 115.921 99.8995 Z M 120.1 115.921 C 118.472 113.967 119.862 111 122.405 111 H 135.595 C 138.138 111 139.528 113.967 137.9 115.921 L 132.9 121.921 C 132.33 122.605 131.485 123 130.595 123 H 127.405 C 126.515 123 125.67 122.605 125.1 121.921 L 120.1 115.921 Z M 144.1 115.921 C 142.472 113.967 143.862 111 146.405 111 H 159.595 C 162.138 111 163.528 113.967 161.9 115.921 L 156.9 121.921 C 156.33 122.605 155.485 123 154.595 123 H 151.405 C 150.515 123 149.67 122.605 149.1 121.921 L 144.1 115.921 Z M 170.405 111 C 167.862 111 166.472 113.967 168.1 115.921 L 173.1 121.921 C 173.67 122.605 174.515 123 175.405 123 H 178.595 C 179.485 123 180.33 122.605 180.9 121.921 L 185.9 115.921 C 187.528 113.967 186.138 111 183.595 111 H 170.405 Z M 170.405 195 C 167.862 195 166.472 192.033 168.1 190.079 L 173.1 184.079 C 173.67 183.395 174.515 183 175.405 183 H 178.595 C 179.485 183 180.33 183.395 180.9 184.079 L 185.9 190.079 C 187.528 192.033 186.138 195 183.595 195 H 170.405 Z M 146.405 195 C 143.862 195 142.472 192.033 144.1 190.079 L 149.1 184.079 C 149.67 183.395 150.515 183 151.405 183 H 154.595 C 155.485 183 156.33 183.395 156.9 184.079 L 161.9 190.079 C 163.528 192.033 162.138 195 159.595 195 H 146.405 Z M 122.405 195 C 119.862 195 118.472 192.033 120.1 190.079 L 125.1 184.079 C 125.67 183.395 126.515 183 127.405 183 H 130.595 C 131.485 183 132.33 183.395 132.9 184.079 L 137.9 190.079 C 139.528 192.033 138.138 195 135.595 195 H 122.405 Z M 190.079 137.9 C 192.033 139.528 195 138.138 195 135.595 V 122.405 C 195 119.862 192.033 118.472 190.079 120.1 L 184.079 125.1 C 183.395 125.67 183 126.515 183 127.405 V 130.595 C 183 131.485 183.395 132.33 184.079 132.9 L 190.079 137.9 Z M 111 135.595 C 111 138.138 113.967 139.528 115.921 137.9 L 121.921 132.9 C 122.605 132.33 123 131.485 123 130.595 V 127.405 C 123 126.515 122.605 125.67 121.921 125.1 L 115.921 120.1 C 113.967 118.472 111 119.862 111 122.405 V 135.595 Z M 190.079 161.9 C 192.033 163.528 195 162.138 195 159.595 V 146.405 C 195 143.862 192.033 142.472 190.079 144.1 L 184.079 149.1 C 183.395 149.67 183 150.515 183 151.405 V 154.595 C 183 155.485 183.395 156.33 184.079 156.9 L 190.079 161.9 Z M 111 159.595 C 111 162.138 113.967 163.528 115.921 161.9 L 121.921 156.9 C 122.605 156.33 123 155.485 123 154.595 V 151.405 C 123 150.515 122.605 149.67 121.921 149.1 L 115.921 144.1 C 113.967 142.472 111 143.862 111 146.405 V 159.595 Z M 190.079 185.9 C 192.033 187.528 195 186.138 195 183.595 V 170.405 C 195 167.862 192.033 166.472 190.079 168.1 L 184.079 173.1 C 183.395 173.67 183 174.515 183 175.405 V 178.595 C 183 179.485 183.395 180.33 184.079 180.9 L 190.079 185.9 Z M 111 183.595 C 111 186.138 113.967 187.528 115.921 185.9 L 121.921 180.9 C 122.605 180.33 123 179.485 123 178.595 V 175.405 C 123 174.515 122.605 173.67 121.921 173.1 L 115.921 168.1 C 113.967 166.472 111 167.862 111 170.405 V 183.595 Z M 36.4051 111 C 33.8616 111 32.4721 113.967 34.1005 115.921 L 39.1005 121.921 C 39.6704 122.605 40.5148 123 41.4051 123 H 44.5949 C 45.4852 123 46.3296 122.605 46.8995 121.921 L 51.8995 115.921 C 53.5279 113.967 52.1384 111 49.5949 111 H 36.4051 Z M 60.4051 111 C 57.8616 111 56.4721 113.967 58.1005 115.921 L 63.1005 121.921 C 63.6704 122.605 64.5148 123 65.4051 123 H 68.5949 C 69.4852 123 70.3296 122.605 70.8995 121.921 L 75.8995 115.921 C 77.5279 113.967 76.1384 111 73.5949 111 H 60.4051 Z M 82.1005 115.921 C 80.4721 113.967 81.8616 111 84.4051 111 H 97.5949 C 100.138 111 101.528 113.967 99.8995 115.921 L 94.8995 121.921 C 94.3296 122.605 93.4852 123 92.5949 123 H 89.4051 C 88.5148 123 87.6704 122.605 87.1005 121.921 L 82.1005 115.921 Z M 82.1005 190.079 C 80.4721 192.033 81.8616 195 84.4051 195 H 97.5949 C 100.138 195 101.528 192.033 99.8995 190.079 L 94.8995 184.079 C 94.3296 183.395 93.4852 183 92.5949 183 H 89.4051 C 88.5148 183 87.6704 183.395 87.1005 184.079 L 82.1005 190.079 Z M 58.1005 190.079 C 56.4721 192.033 57.8616 195 60.4051 195 H 73.5949 C 76.1384 195 77.5279 192.033 75.8995 190.079 L 70.8995 184.079 C 70.3296 183.395 69.4852 183 68.5949 183 H 65.4051 C 64.5148 183 63.6704 183.395 63.1005 184.079 L 58.1005 190.079 Z M 34.1005 190.079 C 32.4721 192.033 33.8616 195 36.4051 195 H 49.5949 C 52.1384 195 53.5279 192.033 51.8995 190.079 L 46.8995 184.079 C 46.3296 183.395 45.4852 183 44.5949 183 H 41.4051 C 40.5148 183 39.6704 183.395 39.1005 184.079 L 34.1005 190.079 Z M 109 135.595 C 109 138.138 106.033 139.528 104.079 137.9 L 98.0794 132.9 C 97.3955 132.33 97 131.485 97 130.595 V 127.405 C 97 126.515 97.3955 125.67 98.0794 125.1 L 104.079 120.1 C 106.033 118.472 109 119.862 109 122.405 V 135.595 Z M 29.9205 137.9 C 27.9666 139.528 25 138.138 25 135.595 V 122.405 C 25 119.862 27.9666 118.472 29.9206 120.1 L 35.9206 125.1 C 36.6045 125.67 37 126.515 37 127.405 V 130.595 C 37 131.485 36.6045 132.33 35.9206 132.9 L 29.9205 137.9 Z M 109 159.595 C 109 162.138 106.033 163.528 104.079 161.9 L 98.0794 156.9 C 97.3955 156.33 97 155.485 97 154.595 V 151.405 C 97 150.515 97.3955 149.67 98.0794 149.1 L 104.079 144.1 C 106.033 142.472 109 143.862 109 146.405 V 159.595 Z M 29.9205 161.9 C 27.9666 163.528 25 162.138 25 159.595 V 146.405 C 25 143.862 27.9666 142.472 29.9206 144.1 L 35.9206 149.1 C 36.6045 149.67 37 150.515 37 151.405 V 154.595 C 37 155.485 36.6045 156.33 35.9206 156.9 L 29.9205 161.9 Z M 109 183.595 C 109 186.138 106.033 187.528 104.079 185.9 L 98.0794 180.9 C 97.3955 180.33 97 179.485 97 178.595 V 175.405 C 97 174.515 97.3955 173.67 98.0794 173.1 L 104.079 168.1 C 106.033 166.472 109 167.862 109 170.405 V 183.595 Z M 29.9205 185.9 C 27.9666 187.528 25 186.138 25 183.595 V 170.405 C 25 167.862 27.9666 166.472 29.9206 168.1 L 35.9206 173.1 C 36.6045 173.67 37 174.515 37 175.405 V 178.595 C 37 179.485 36.6045 180.33 35.9206 180.9 L 29.9205 185.9 Z","M 23 21 C 21.8954 21 21 21.8954 21 23 V 197 C 21 198.105 21.8954 199 23 199 H 197 C 198.105 199 199 198.105 199 197 V 23 C 199 21.8954 198.105 21 197 21 H 23 Z M 109 25 H 107 H 103 H 79 H 55 H 31 H 27 H 25 V 27 V 31 V 55 V 79 V 103 V 107 V 109 H 27 H 31 H 55 H 79 H 103 H 107 H 109 V 107 V 103 V 79 V 55 V 31 V 27 V 25 Z M 107 29 C 108.105 29 109 28.1046 109 27 C 109 25.8954 108.105 25 107 25 C 105.895 25 105 25.8954 105 27 C 105 25.8954 104.105 25 103 25 C 101.895 25 101 25.8954 101 27 C 101 28.1046 101.895 29 103 29 C 104.105 29 105 28.1046 105 27 C 105 28.1046 105.895 29 107 29 Z M 107 29 C 105.895 29 105 29.8954 105 31 C 105 32.1046 105.895 33 107 33 C 108.105 33 109 32.1046 109 31 C 109 29.8954 108.105 29 107 29 Z M 109 55 C 109 56.1046 108.105 57 107 57 C 105.895 57 105 56.1046 105 55 C 105 53.8954 105.895 53 107 53 C 108.105 53 109 53.8954 109 55 Z M 109 79 C 109 80.1046 108.105 81 107 81 C 105.895 81 105 80.1046 105 79 C 105 77.8954 105.895 77 107 77 C 108.105 77 109 77.8954 109 79 Z M 107 105 C 105.895 105 105 104.105 105 103 C 105 101.895 105.895 101 107 101 C 108.105 101 109 101.895 109 103 C 109 104.105 108.105 105 107 105 Z M 105 107 C 105 108.105 104.105 109 103 109 C 101.895 109 101 108.105 101 107 C 101 105.895 101.895 105 103 105 C 104.105 105 105 105.895 105 107 Z M 105 107 C 105 105.895 105.895 105 107 105 C 108.105 105 109 105.895 109 107 C 109 108.105 108.105 109 107 109 C 105.895 109 105 108.105 105 107 Z M 79 109 C 80.1046 109 81 108.105 81 107 C 81 105.895 80.1046 105 79 105 C 77.8954 105 77 105.895 77 107 C 77 108.105 77.8954 109 79 109 Z M 55 109 C 56.1046 109 57 108.105 57 107 C 57 105.895 56.1046 105 55 105 C 53.8954 105 53 105.895 53 107 C 53 108.105 53.8954 109 55 109 Z M 29 107 C 29 108.105 28.1046 109 27 109 C 25.8954 109 25 108.105 25 107 C 25 105.895 25.8954 105 27 105 C 28.1046 105 29 105.895 29 107 Z M 29 107 C 29 105.895 29.8954 105 31 105 C 32.1046 105 33 105.895 33 107 C 33 108.105 32.1046 109 31 109 C 29.8954 109 29 108.105 29 107 Z M 27 105 C 25.8954 105 25 104.105 25 103 C 25 101.895 25.8954 101 27 101 C 28.1046 101 29 101.895 29 103 C 29 104.105 28.1046 105 27 105 Z M 25 79 C 25 77.8954 25.8954 77 27 77 C 28.1046 77 29 77.8954 29 79 C 29 80.1046 28.1046 81 27 81 C 25.8954 81 25 80.1046 25 79 Z M 25 55 C 25 56.1046 25.8954 57 27 57 C 28.1046 57 29 56.1046 29 55 C 29 53.8954 28.1046 53 27 53 C 25.8954 53 25 53.8954 25 55 Z M 27 29 C 25.8954 29 25 29.8954 25 31 C 25 32.1046 25.8954 33 27 33 C 28.1046 33 29 32.1046 29 31 C 29 29.8954 28.1046 29 27 29 Z M 29 27 C 29 25.8954 28.1046 25 27 25 C 25.8954 25 25 25.8954 25 27 C 25 28.1046 25.8954 29 27 29 C 28.1046 29 29 28.1046 29 27 Z M 29 27 C 29 28.1046 29.8954 29 31 29 C 32.1046 29 33 28.1046 33 27 C 33 25.8954 32.1046 25 31 25 C 29.8954 25 29 25.8954 29 27 Z M 55 25 C 56.1046 25 57 25.8954 57 27 C 57 28.1046 56.1046 29 55 29 C 53.8954 29 53 28.1046 53 27 C 53 25.8954 53.8954 25 55 25 Z M 79 25 C 80.1046 25 81 25.8954 81 27 C 81 28.1046 80.1046 29 79 29 C 77.8954 29 77 28.1046 77 27 C 77 25.8954 77.8954 25 79 25 Z M 111 107 V 109 H 113 H 117 H 141 H 165 H 189 H 193 H 195 V 107 V 103 V 79 V 55 V 31 V 27 V 25 H 193 H 189 H 165 H 141 H 117 H 113 H 111 V 27 V 31 V 55 V 79 V 103 V 107 Z M 113 105 C 111.895 105 111 105.895 111 107 C 111 108.105 111.895 109 113 109 C 114.105 109 115 108.105 115 107 C 115 108.105 115.895 109 117 109 C 118.105 109 119 108.105 119 107 C 119 105.895 118.105 105 117 105 C 115.895 105 115 105.895 115 107 C 115 105.895 114.105 105 113 105 Z M 113 105 C 111.895 105 111 104.105 111 103 C 111 101.895 111.895 101 113 101 C 114.105 101 115 101.895 115 103 C 115 104.105 114.105 105 113 105 Z M 111 79 C 111 80.1046 111.895 81 113 81 C 114.105 81 115 80.1046 115 79 C 115 77.8954 114.105 77 113 77 C 111.895 77 111 77.8954 111 79 Z M 111 55 C 111 53.8954 111.895 53 113 53 C 114.105 53 115 53.8954 115 55 C 115 56.1046 114.105 57 113 57 C 111.895 57 111 56.1046 111 55 Z M 113 29 C 114.105 29 115 29.8954 115 31 C 115 32.1046 114.105 33 113 33 C 111.895 33 111 32.1046 111 31 C 111 29.8954 111.895 29 113 29 Z M 115 27 C 115 28.1046 115.895 29 117 29 C 118.105 29 119 28.1046 119 27 C 119 25.8954 118.105 25 117 25 C 115.895 25 115 25.8954 115 27 Z M 115 27 C 115 28.1046 114.105 29 113 29 C 111.895 29 111 28.1046 111 27 C 111 25.8954 111.895 25 113 25 C 114.105 25 115 25.8954 115 27 Z M 141 25 C 139.895 25 139 25.8954 139 27 C 139 28.1046 139.895 29 141 29 C 142.105 29 143 28.1046 143 27 C 143 25.8954 142.105 25 141 25 Z M 165 25 C 163.895 25 163 25.8954 163 27 C 163 28.1046 163.895 29 165 29 C 166.105 29 167 28.1046 167 27 C 167 25.8954 166.105 25 165 25 Z M 191 27 C 191 25.8954 191.895 25 193 25 C 194.105 25 195 25.8954 195 27 C 195 28.1046 194.105 29 193 29 C 191.895 29 191 28.1046 191 27 Z M 191 27 C 191 28.1046 190.105 29 189 29 C 187.895 29 187 28.1046 187 27 C 187 25.8954 187.895 25 189 25 C 190.105 25 191 25.8954 191 27 Z M 193 29 C 191.895 29 191 29.8954 191 31 C 191 32.1046 191.895 33 193 33 C 194.105 33 195 32.1046 195 31 C 195 29.8954 194.105 29 193 29 Z M 195 55 C 195 53.8954 194.105 53 193 53 C 191.895 53 191 53.8954 191 55 C 191 56.1046 191.895 57 193 57 C 194.105 57 195 56.1046 195 55 Z M 195 79 C 195 77.8954 194.105 77 193 77 C 191.895 77 191 77.8954 191 79 C 191 80.1046 191.895 81 193 81 C 194.105 81 195 80.1046 195 79 Z M 193 105 C 194.105 105 195 104.105 195 103 C 195 101.895 194.105 101 193 101 C 191.895 101 191 101.895 191 103 C 191 104.105 191.895 105 193 105 Z M 191 107 C 191 108.105 191.895 109 193 109 C 194.105 109 195 108.105 195 107 C 195 105.895 194.105 105 193 105 C 191.895 105 191 105.895 191 107 Z M 191 107 C 191 108.105 190.105 109 189 109 C 187.895 109 187 108.105 187 107 C 187 105.895 187.895 105 189 105 C 190.105 105 191 105.895 191 107 Z M 165 109 C 163.895 109 163 108.105 163 107 C 163 105.895 163.895 105 165 105 C 166.105 105 167 105.895 167 107 C 167 108.105 166.105 109 165 109 Z M 141 109 C 139.895 109 139 108.105 139 107 C 139 105.895 139.895 105 141 105 C 142.105 105 143 105.895 143 107 C 143 108.105 142.105 109 141 109 Z M 27 111 H 25 V 113 V 117 V 141 V 165 V 189 V 193 V 195 H 27 H 31 H 55 H 79 H 103 H 107 H 109 V 193 V 189 V 165 V 141 V 117 V 113 V 111 H 107 H 103 H 79 H 55 H 31 H 27 Z M 29 113 C 29 111.895 28.1046 111 27 111 C 25.8954 111 25 111.895 25 113 C 25 114.105 25.8954 115 27 115 C 25.8954 115 25 115.895 25 117 C 25 118.105 25.8954 119 27 119 C 28.1046 119 29 118.105 29 117 C 29 115.895 28.1046 115 27 115 C 28.1046 115 29 114.105 29 113 Z M 29 113 C 29 114.105 29.8954 115 31 115 C 32.1046 115 33 114.105 33 113 C 33 111.895 32.1046 111 31 111 C 29.8954 111 29 111.895 29 113 Z M 55 111 C 53.8954 111 53 111.895 53 113 C 53 114.105 53.8954 115 55 115 C 56.1046 115 57 114.105 57 113 C 57 111.895 56.1046 111 55 111 Z M 79 111 C 77.8954 111 77 111.895 77 113 C 77 114.105 77.8954 115 79 115 C 80.1046 115 81 114.105 81 113 C 81 111.895 80.1046 111 79 111 Z M 105 113 C 105 114.105 104.105 115 103 115 C 101.895 115 101 114.105 101 113 C 101 111.895 101.895 111 103 111 C 104.105 111 105 111.895 105 113 Z M 107 115 C 108.105 115 109 114.105 109 113 C 109 111.895 108.105 111 107 111 C 105.895 111 105 111.895 105 113 C 105 114.105 105.895 115 107 115 Z M 107 115 C 105.895 115 105 115.895 105 117 C 105 118.105 105.895 119 107 119 C 108.105 119 109 118.105 109 117 C 109 115.895 108.105 115 107 115 Z M 109 141 C 109 139.895 108.105 139 107 139 C 105.895 139 105 139.895 105 141 C 105 142.105 105.895 143 107 143 C 108.105 143 109 142.105 109 141 Z M 109 165 C 109 163.895 108.105 163 107 163 C 105.895 163 105 163.895 105 165 C 105 166.105 105.895 167 107 167 C 108.105 167 109 166.105 109 165 Z M 107 191 C 108.105 191 109 190.105 109 189 C 109 187.895 108.105 187 107 187 C 105.895 187 105 187.895 105 189 C 105 190.105 105.895 191 107 191 Z M 105 193 C 105 194.105 105.895 195 107 195 C 108.105 195 109 194.105 109 193 C 109 191.895 108.105 191 107 191 C 105.895 191 105 191.895 105 193 Z M 105 193 C 105 194.105 104.105 195 103 195 C 101.895 195 101 194.105 101 193 C 101 191.895 101.895 191 103 191 C 104.105 191 105 191.895 105 193 Z M 79 195 C 77.8954 195 77 194.105 77 193 C 77 191.895 77.8954 191 79 191 C 80.1046 191 81 191.895 81 193 C 81 194.105 80.1046 195 79 195 Z M 55 195 C 53.8954 195 53 194.105 53 193 C 53 191.895 53.8954 191 55 191 C 56.1046 191 57 191.895 57 193 C 57 194.105 56.1046 195 55 195 Z M 29 193 C 29 191.895 29.8954 191 31 191 C 32.1046 191 33 191.895 33 193 C 33 194.105 32.1046 195 31 195 C 29.8954 195 29 194.105 29 193 Z M 27 191 C 25.8954 191 25 191.895 25 193 C 25 194.105 25.8954 195 27 195 C 28.1046 195 29 194.105 29 193 C 29 191.895 28.1046 191 27 191 Z M 27 191 C 28.1046 191 29 190.105 29 189 C 29 187.895 28.1046 187 27 187 C 25.8954 187 25 187.895 25 189 C 25 190.105 25.8954 191 27 191 Z M 25 165 C 25 166.105 25.8954 167 27 167 C 28.1046 167 29 166.105 29 165 C 29 163.895 28.1046 163 27 163 C 25.8954 163 25 163.895 25 165 Z M 25 141 C 25 139.895 25.8954 139 27 139 C 28.1046 139 29 139.895 29 141 C 29 142.105 28.1046 143 27 143 C 25.8954 143 25 142.105 25 141 Z M 111 195 H 113 H 117 H 141 H 165 H 189 H 193 H 195 V 193 V 189 V 165 V 141 V 117 V 113 V 111 H 193 H 189 H 165 H 141 H 117 H 113 H 111 V 113 V 117 V 141 V 165 V 189 V 193 V 195 Z M 111 193 C 111 191.895 111.895 191 113 191 C 114.105 191 115 191.895 115 193 C 115 194.105 114.105 195 113 195 C 111.895 195 111 194.105 111 193 Z M 115 193 C 115 191.895 115.895 191 117 191 C 118.105 191 119 191.895 119 193 C 119 194.105 118.105 195 117 195 C 115.895 195 115 194.105 115 193 Z M 115 113 C 115 114.105 115.895 115 117 115 C 118.105 115 119 114.105 119 113 C 119 111.895 118.105 111 117 111 C 115.895 111 115 111.895 115 113 Z M 113 115 C 111.895 115 111 114.105 111 113 C 111 111.895 111.895 111 113 111 C 114.105 111 115 111.895 115 113 C 115 114.105 114.105 115 113 115 Z M 141 111 C 142.105 111 143 111.895 143 113 C 143 114.105 142.105 115 141 115 C 139.895 115 139 114.105 139 113 C 139 111.895 139.895 111 141 111 Z M 165 111 C 166.105 111 167 111.895 167 113 C 167 114.105 166.105 115 165 115 C 163.895 115 163 114.105 163 113 C 163 111.895 163.895 111 165 111 Z M 191 113 C 191 111.895 191.895 111 193 111 C 194.105 111 195 111.895 195 113 C 195 114.105 194.105 115 193 115 C 191.895 115 191 114.105 191 113 Z M 191 113 C 191 114.105 190.105 115 189 115 C 187.895 115 187 114.105 187 113 C 187 111.895 187.895 111 189 111 C 190.105 111 191 111.895 191 113 Z M 193 115 C 194.105 115 195 115.895 195 117 C 195 118.105 194.105 119 193 119 C 191.895 119 191 118.105 191 117 C 191 115.895 191.895 115 193 115 Z M 195 141 C 195 142.105 194.105 143 193 143 C 191.895 143 191 142.105 191 141 C 191 139.895 191.895 139 193 139 C 194.105 139 195 139.895 195 141 Z M 195 165 C 195 166.105 194.105 167 193 167 C 191.895 167 191 166.105 191 165 C 191 163.895 191.895 163 193 163 C 194.105 163 195 163.895 195 165 Z M 193 191 C 191.895 191 191 190.105 191 189 C 191 187.895 191.895 187 193 187 C 194.105 187 195 187.895 195 189 C 195 190.105 194.105 191 193 191 Z M 191 193 C 191 194.105 190.105 195 189 195 C 187.895 195 187 194.105 187 193 C 187 191.895 187.895 191 189 191 C 190.105 191 191 191.895 191 193 Z M 191 193 C 191 191.895 191.895 191 193 191 C 194.105 191 195 191.895 195 193 C 195 194.105 194.105 195 193 195 C 191.895 195 191 194.105 191 193 Z M 165 195 C 166.105 195 167 194.105 167 193 C 167 191.895 166.105 191 165 191 C 163.895 191 163 191.895 163 193 C 163 194.105 163.895 195 165 195 Z M 141 195 C 142.105 195 143 194.105 143 193 C 143 191.895 142.105 191 141 191 C 139.895 191 139 191.895 139 193 C 139 194.105 139.895 195 141 195 Z M 113 163 C 111.895 163 111 163.895 111 165 C 111 166.105 111.895 167 113 167 C 114.105 167 115 166.105 115 165 C 115 163.895 114.105 163 113 163 Z M 113 143 C 111.895 143 111 142.105 111 141 C 111 139.895 111.895 139 113 139 C 114.105 139 115 139.895 115 141 C 115 142.105 114.105 143 113 143 Z M 113 115 C 111.895 115 111 115.895 111 117 C 111 118.105 111.895 119 113 119 C 114.105 119 115 118.105 115 117 C 115 115.895 114.105 115 113 115 Z M 113 191 C 111.895 191 111 190.105 111 189 C 111 187.895 111.895 187 113 187 C 114.105 187 115 187.895 115 189 C 115 190.105 114.105 191 113 191 Z"]}],KC=[{id:1,title:"萌4",colors:[{name:"#01",value:"#F3F2F0"},{name:"#02",value:"#F5F6F1"},{name:"#03",value:"#F3EADB"},{name:"#04",value:"#FAE9E1"},{name:"#01",value:"#FED5DD"},{name:"#02",value:"#FBA3C9"},{name:"#01",value:"#F67B97"},{name:"#02",value:"#FF6CBC"},{name:"#03",value:"#C52D2C"},{name:"#04",value:"#F0E4BC"},{name:"#01",value:"#FCE281"},{name:"#02",value:"#F2E15D"},{name:"#01",value:"#F6B453"},{name:"#02",value:"#DF5F3C"},{name:"#03",value:"#D5B6DC"},{name:"#04",value:"#D08BDE"},{name:"#01",value:"#E2FAE6"},{name:"#02",value:"#98CAFA"},{name:"#01",value:"#83A0E7"},{name:"#02",value:"#3850B0"},{name:"#03",value:"#272954"},{name:"#04",value:"#AEE5E2"},{name:"#01",value:"#59A3BA"},{name:"#02",value:"#DCFAD3"},{name:"#01",value:"#98BC44"},{name:"#02",value:"#415B2E"},{name:"#03",value:"#048C62"},{name:"#04",value:"#EAE1D0"},{name:"#01",value:"#F0C892"},{name:"#02",value:"#D5A268"},{name:"#01",value:"#9B734C"},{name:"#02",value:"#6D473C"},{name:"#03",value:"#A4A4A4"},{name:"#04",value:"#000000"},{name:"#01",value:"#E8CEA2"},{name:"#02",value:"#E4E4E4"},{name:"#01",value:"#FAB6AA"},{name:"#02",value:"#D5A7BE"},{name:"#03",value:"#FD780F"},{name:"#04",value:"#DAD46A"},{name:"#01",value:"#81C7C7"},{name:"#02",value:"#6783A1"},{name:"#01",value:"#F2DDD5"},{name:"#02",value:"#EEC3C4"},{name:"#03",value:"#70B8BE"},{name:"#04",value:"#196182"},{name:"#01",value:"#BDCE9E"},{name:"#02",value:"#D3B358"},{name:"#01",value:"#6A447A"},{name:"#02",value:"#7F2735"},{name:"#03",value:"#F8F8F1"},{name:"#04",value:"#F49CB7"},{name:"#01",value:"#E4AFCF"},{name:"#02",value:"#02937E"},{name:"#01",value:"#7F9351"},{name:"#02",value:"#C5B7D3"},{name:"#03",value:"#A58CBB"},{name:"#04",value:"#04A4C5"},{name:"#01",value:"#1F6F5F"},{name:"#02",value:"#995920"},{name:"#01",value:"#7D5121"},{name:"#02",value:"#944928"},{name:"#03",value:"#F5C73D"},{name:"#04",value:"#EABE8D"},{name:"#01",value:"#EEA48F"},{name:"#02",value:"#99282D"},{name:"#02",value:"#B15249"}]},{id:2,title:"lifeyarn 羽",colors:[{name:"01",value:"#F3EBE0"},{name:"01",value:"#F1E5E7"},{name:"01",value:"#E4E2E0"},{name:"01",value:"#F7BFA9"},{name:"01",value:"#ADADAD"},{name:"01",value:"#2C5238"},{name:"01",value:"#86718E"},{name:"01",value:"#CCD2BC"},{name:"01",value:"#90A77D"},{name:"01",value:"#DC7D45"},{name:"01",value:"#F3CCA4"},{name:"01",value:"#FFC459"},{name:"01",value:"#AF2728"},{name:"01",value:"#72323C"},{name:"01",value:"#D0CB8A"},{name:"01",value:"#73C26E"},{name:"01",value:"#D1E4EB"},{name:"01",value:"#78BEE8"},{name:"01",value:"#8FAEDF"},{name:"01",value:"#13193A"},{name:"01",value:"#518F7F"},{name:"01",value:"#B39FCC"},{name:"01",value:"#B19F9E"},{name:"01",value:"#6A4F49"},{name:"01",value:"#EFE5AB"},{name:"01",value:"#E7DECB"},{name:"01",value:"#CD8893"},{name:"01",value:"#E3A286"}]},{id:3,title:"superwash merino",colors:[{name:"01",value:"#FBF6F4"},{name:"01",value:"#D1CB6B"},{name:"01",value:"#6F784B"},{name:"01",value:"#61A3D2"},{name:"01",value:"#3E4B82"},{name:"01",value:"#AD251F"},{name:"01",value:"#59342E"},{name:"01",value:"#C0C0C3"}]}],_C=({style:A,className:e=""})=>y.jsxs("svg",{width:"52%",viewBox:"0 0 2594 490",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:A,className:e,children:[y.jsxs("g",{"clip-path":"url(#clip0_401_299)",children:[y.jsx("rect",{width:"2594",height:"490",fill:"white"}),y.jsx("path",{d:"M1425.6 461.505V180.477C1425.6 160.844 1458.67 161.39 1458.67 180.477V389.474C1458.67 402.522 1458.67 404.705 1456.53 418.941L1453.06 446.586C1452.78 448.781 1456.21 449.991 1457.61 448.275C1473.51 428.749 1493.52 434.856 1477.87 468.195C1466.36 492.689 1425.6 494.791 1425.6 461.505Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),y.jsx("path",{d:"M1523.52 312.552H1366.19C1347 312.552 1347.54 278.719 1366.19 278.719H1453.12C1465.88 278.719 1468.01 278.719 1481.92 280.902L1509.09 284.476C1511.27 284.763 1512.5 281.404 1510.82 279.99C1491.46 263.694 1497.35 242.994 1530.06 259.075C1554 270.843 1556.06 312.552 1523.52 312.552Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),y.jsx("circle",{cx:"108.274",cy:"292.525",r:"100",transform:"rotate(70.6084 108.274 292.525)",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),y.jsx("path",{d:"M11.0642 323.563C32.1071 387.793 71.0477 430.726 166.227 439.099",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),y.jsx("path",{d:"M15.3705 249.957C36.7982 197.89 97.3489 159.084 164.593 142.305",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),y.jsx("path",{d:"M140.226 428.415L140.862 433.374L140.226 428.415C132.918 429.353 131.813 439.395 138.468 442.093C143.609 444.177 147.148 446.004 154.021 449.716C163.268 454.71 172.502 455.613 180.066 456.353C181.444 456.488 182.767 456.618 184.024 456.765L184.138 456.779L184.254 456.787L294.718 464.614L294.732 464.615C310.945 465.718 323.547 465.055 332.331 463.229C336.693 462.323 340.403 461.071 343.186 459.403C345.845 457.808 348.642 455.202 348.947 451.317C349.255 447.404 346.866 444.406 344.452 442.446C341.937 440.405 338.44 438.659 334.248 437.17C325.806 434.171 313.378 431.806 297.05 430.694C297.047 430.694 297.044 430.694 297.041 430.693L186.408 422.749L186.129 422.729L185.85 422.74C185.036 422.773 183.936 422.757 182.576 422.737C176.935 422.656 166.819 422.511 154.117 425.483L153.926 425.528L153.74 425.587C149.342 426.986 145.217 427.774 140.226 428.415Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),y.jsx("path",{d:"M148.888 153.923L148.82 148.924L148.888 153.923C141.521 154.023 139.013 144.236 145.223 140.629C150.019 137.842 153.266 135.534 159.548 130.892C167.999 124.647 177.014 122.452 184.399 120.655C185.744 120.327 187.035 120.013 188.259 119.69L188.371 119.661L188.484 119.636L296.747 96.3392L296.761 96.3363C312.656 92.962 325.227 91.8444 334.18 92.4157C338.626 92.6995 342.475 93.4162 345.466 94.6764C348.323 95.8808 351.459 98.0677 352.308 101.87C353.163 105.701 351.22 109.006 349.106 111.286C346.904 113.661 343.686 115.881 339.746 117.946C331.81 122.103 319.839 126.194 303.83 129.593C303.827 129.594 303.824 129.595 303.821 129.595L195.408 153.032L195.135 153.091L194.856 153.12C194.047 153.202 192.96 153.372 191.615 153.583C186.042 154.457 176.047 156.025 163.053 154.87L162.858 154.853L162.665 154.821C158.114 154.054 153.92 153.855 148.888 153.923Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),y.jsx("path",{d:"M400.999 329C400.999 315.4 399.132 305.4 395.399 299C391.666 292.333 384.199 289 372.999 289H368.999V281H400.999C411.132 281 418.732 282.467 423.799 285.4C429.132 288.067 432.866 292.6 434.999 299H436.999C441.799 292.867 448.199 287.667 456.199 283.4C464.466 279.133 474.066 277 484.999 277C495.666 277 503.666 279 508.999 283C513.532 286.467 518.199 292.467 522.999 301L506.999 313C504.066 309 499.799 306.067 494.199 304.2C488.599 302.067 482.199 301 474.999 301C466.999 301 459.666 302.867 452.999 306.6C446.332 310.067 440.999 314.867 436.999 321V469H400.999V329ZM630.134 473C612.001 473 596.268 468.733 582.934 460.2C569.601 451.4 559.468 439.533 552.534 424.6C545.601 409.667 542.134 393.133 542.134 375C542.134 356.867 545.601 340.333 552.534 325.4C559.468 310.467 569.601 298.733 582.934 290.2C596.268 281.4 612.001 277 630.134 277C648.268 277 664.001 281.4 677.334 290.2C690.668 298.733 700.801 310.467 707.734 325.4C714.668 340.333 718.134 356.867 718.134 375C718.134 393.133 714.668 409.667 707.734 424.6C700.801 439.533 690.668 451.4 677.334 460.2C664.001 468.733 648.268 473 630.134 473ZM630.134 457C640.001 457 648.668 453.4 656.134 446.2C663.868 439 669.734 429.133 673.734 416.6C678.001 404.067 680.134 390.2 680.134 375C680.134 359.8 678.001 345.933 673.734 333.4C669.734 320.867 663.868 311 656.134 303.8C648.668 296.6 640.001 293 630.134 293C620.268 293 611.468 296.6 603.734 303.8C596.268 311 590.401 320.867 586.134 333.4C582.134 345.933 580.134 359.8 580.134 375C580.134 390.2 582.134 404.067 586.134 416.6C590.401 429.133 596.268 439 603.734 446.2C611.468 453.4 620.268 457 630.134 457ZM841.91 473C822.71 473 806.444 468.733 793.11 460.2C780.044 451.4 770.177 439.667 763.51 425C757.11 410.067 753.91 393.4 753.91 375C753.91 356.6 757.11 340.067 763.51 325.4C770.177 310.467 780.044 298.733 793.11 290.2C806.444 281.4 822.71 277 841.91 277C871.244 277 890.577 281.667 899.911 291C904.444 295.533 907.244 301.133 908.311 307.8C909.377 314.2 909.911 325.933 909.911 343H901.911C900.844 326.467 895.644 314.067 886.31 305.8C876.977 297.267 864.844 293 849.911 293C830.71 293 816.177 300.6 806.31 315.8C796.71 331 791.91 350.733 791.91 375C791.91 399.267 796.71 419 806.31 434.2C816.177 449.4 830.71 457 849.911 457C863.511 457 874.711 454.467 883.51 449.4C892.31 444.067 900.444 435.933 907.91 425L915.91 431C907.111 445.933 896.71 456.733 884.71 463.4C872.71 469.8 858.444 473 841.91 473ZM957.737 253C957.737 239.4 955.87 229.4 952.137 223C948.403 216.333 940.937 213 929.737 213H921.737V205H957.737C967.603 205 974.937 206.333 979.737 209C984.803 211.4 988.403 215.933 990.537 222.6C992.67 229.267 993.737 239.4 993.737 253V297C999.337 291.4 1006.54 286.733 1015.34 283C1024.4 279 1034.54 277 1045.74 277C1065.74 277 1082 282.333 1094.54 293C1107.34 303.667 1113.74 322.333 1113.74 349V469H1077.74V349C1077.74 330.333 1073.47 316.733 1064.94 308.2C1056.67 299.4 1046.27 295 1033.74 295C1019.6 295 1006.27 302.067 993.737 316.2V469H957.737V253Z",fill:"#202020"}),y.jsx("path",{d:"M2129.8 329C2129.8 315.4 2127.93 305.4 2124.2 299C2120.47 292.333 2113 289 2101.8 289H2093.8V281H2129.8C2139.67 281 2147.13 282.333 2152.2 285C2157.53 287.667 2161.4 291.667 2163.8 297H2165.8C2171.4 291.4 2178.6 286.733 2187.4 283C2196.47 279 2206.6 277 2217.8 277C2229 277 2238.6 279.133 2246.6 283.4C2254.6 287.4 2261 294.6 2265.8 305C2272.73 296.2 2281.53 289.4 2292.2 284.6C2303.13 279.533 2314.33 277 2325.8 277C2342.87 277 2356.47 282.333 2366.6 293C2376.73 303.667 2381.8 322.333 2381.8 349V469H2345.8V349C2345.8 329.8 2343.13 316.067 2337.8 307.8C2332.47 299.267 2324.47 295 2313.8 295C2306.33 295 2298.47 297.8 2290.2 303.4C2281.93 308.733 2275.8 314.6 2271.8 321C2273.13 325 2273.8 334.333 2273.8 349V469H2237.8V349C2237.8 329.8 2235.13 316.067 2229.8 307.8C2224.47 299.267 2216.47 295 2205.8 295C2191.67 295 2178.33 302.067 2165.8 316.2V469H2129.8V329Z",fill:"#202020"}),y.jsx("path",{d:"M2439 397.002V329.878C2442.75 243.874 2588.32 245.544 2588.32 329.878L2588.74 373.492L2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492V397.002C2459.44 446.842 2536.6 469.434 2569.55 418.5C2582.75 398.097 2596.82 404.097 2585.82 425.597C2550.78 494.066 2439 471.316 2439 397.002Z",fill:"#F8F8F8"}),y.jsx("path",{d:"M2549.11 380.589V340.733L2569.55 329.878C2569.55 273.934 2459.44 269.759 2459.44 329.878V373.492M2549.11 380.589L2588.74 373.492L2588.32 329.878C2588.32 245.544 2442.75 243.874 2439 329.878V397.002C2439 471.316 2550.78 494.066 2585.82 425.597C2596.82 404.097 2582.75 398.097 2569.55 418.5C2536.6 469.434 2459.44 446.842 2459.44 397.002V373.492M2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),y.jsx("path",{d:"M1171 405.002V337.878C1174.75 251.874 1320.32 253.544 1320.32 337.878L1320.74 381.492L1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492V405.002C1191.44 454.842 1268.6 477.434 1301.55 426.5C1314.75 406.097 1328.82 412.097 1317.82 433.597C1282.78 502.066 1171 479.316 1171 405.002Z",fill:"#F8F8F8"}),y.jsx("path",{d:"M1281.11 388.589V348.733L1301.55 337.878C1301.55 281.934 1191.44 277.759 1191.44 337.878V381.492M1281.11 388.589L1320.74 381.492L1320.32 337.878C1320.32 253.544 1174.75 251.874 1171 337.878V405.002C1171 479.316 1282.78 502.066 1317.82 433.597C1328.82 412.097 1314.75 406.097 1301.55 426.5C1268.6 477.434 1191.44 454.842 1191.44 405.002V381.492M1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),y.jsx("path",{d:"M2010.8 168.462L2010.8 168.463C2009.52 171.322 2008.45 176.386 2007.62 182.146C2006.75 188.119 2006.05 195.449 2005.71 203.232C2005.03 218.574 2005.68 236.346 2009.47 249.029C2010.38 253.035 2010.89 260.159 2010.89 264.685V429.323C2010.89 443.107 2012.09 453.777 2014.02 461.169C2014.98 464.834 2016.18 467.976 2017.71 470.328C2019.11 472.496 2021.57 475.161 2025.31 475.228C2029.09 475.295 2031.63 472.653 2033.06 470.486C2034.6 468.152 2035.81 465.018 2036.77 461.364C2038.7 453.986 2039.9 443.27 2039.9 429.323V264.685C2039.9 259.632 2040.42 252.549 2041.3 249.089C2045.33 235.638 2046 218.131 2045.27 203.04C2044.89 195.413 2044.15 188.261 2043.25 182.36C2042.36 176.588 2041.27 171.645 2040.07 168.65C2038.77 165.409 2036.07 163.475 2033.53 162.408C2030.97 161.329 2028.08 160.902 2025.37 160.937C2022.65 160.972 2019.8 161.475 2017.29 162.543C2014.86 163.579 2012.17 165.41 2010.8 168.462Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),y.jsx("ellipse",{cx:"2025.62",cy:"214.096",rx:"7.92068",ry:"37.0379",fill:"white",stroke:"#202020","stroke-width":"10"}),y.jsx("path",{d:"M1791.99 221.788L1788.33 222.804V226.606V232.719C1788.33 232.769 1788.33 232.825 1788.33 232.887C1788.32 233.919 1788.29 236.495 1790.46 238.694C1791.21 239.524 1791.48 240.125 1791.64 240.762C1791.85 241.621 1791.93 242.759 1791.93 244.945V284.86C1791.93 286.13 1792.36 287.116 1792.61 287.599C1792.89 288.163 1793.23 288.645 1793.52 289.019C1794.11 289.774 1794.83 290.486 1795.53 291.096C1796.82 292.227 1798.73 293.597 1800.7 294.263L1813.96 298.918C1814.62 299.159 1815.05 299.358 1815.32 299.506C1815.32 299.536 1815.32 299.569 1815.32 299.603V468.972C1815.32 474.332 1817.66 478.518 1821.95 480.608C1825.73 482.449 1830.13 482.212 1833.73 481.338C1837.45 480.437 1841.17 478.663 1844.06 476.392C1846.71 474.311 1849.79 470.885 1849.79 466.455V234.157V229.947L1845.64 229.23L1827.16 226.034C1827.15 226.029 1827.14 226.022 1827.13 226.013C1827.07 225.979 1826.97 225.902 1826.82 225.743C1826.51 225.401 1826.13 224.824 1825.75 223.952C1824.99 222.241 1824.55 220.267 1824.18 218.572L1824.12 218.328L1822.98 213.187L1817.9 214.596L1791.99 221.788Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),y.jsx("path",{d:"M1849.13 221.823L1852.67 222.904V226.606V232.719C1852.67 232.769 1852.67 232.825 1852.67 232.887C1852.68 233.919 1852.71 236.495 1850.54 238.694C1849.79 239.524 1849.52 240.125 1849.36 240.762C1849.15 241.621 1849.07 242.759 1849.07 244.945V284.86C1849.07 286.13 1848.64 287.116 1848.39 287.599C1848.11 288.163 1847.77 288.645 1847.48 289.019C1846.89 289.774 1846.17 290.486 1845.47 291.096C1844.17 292.236 1842.24 293.618 1840.25 294.278L1826.29 298.931C1825.65 299.166 1825.23 299.361 1824.96 299.506C1824.96 299.536 1824.96 299.569 1824.96 299.603V468.972C1824.96 474.332 1822.62 478.518 1818.33 480.608C1814.55 482.449 1810.15 482.212 1806.55 481.338C1802.83 480.437 1799.11 478.663 1796.22 476.392C1793.57 474.311 1790.49 470.885 1790.49 466.455V234.157V229.976L1794.6 229.236L1812.56 226.006C1812.57 226.005 1812.57 226.005 1812.57 226.004C1813.26 225.871 1814.03 225.394 1814.9 223.649C1815.68 222.097 1816.14 220.364 1816.64 218.5C1816.73 218.131 1816.83 217.757 1816.94 217.378L1818.29 212.408L1823.22 213.912L1849.13 221.823Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),y.jsxs("mask",{id:"path-18-outside-1_401_299",maskUnits:"userSpaceOnUse",x:"1675",y:"3.97754",width:"156",height:"235",fill:"black",children:[y.jsx("rect",{fill:"white",x:"1675",y:"3.97754",width:"156",height:"235"}),y.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z"})]}),y.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z",fill:"#F8F8F8"}),y.jsx("path",{d:"M1820.68 53.281L1830.29 50.5064L1830.68 51.8659V53.281H1820.68ZM1685 97.8707H1675V97.5818L1675.02 97.2934L1685 97.8707ZM1776.41 176.982L1774.82 167.109L1774.82 167.109L1776.41 176.982ZM1793.33 184.533L1803.32 184.079L1803.33 184.306V184.533H1793.33ZM1793.33 226.606H1803.33V227.508L1803.17 228.396L1793.33 226.606ZM1713.43 116.21L1722.94 113.125L1722.94 113.125L1713.43 116.21ZM1750.86 42.4931L1753.33 52.1827L1753.33 52.1827L1750.86 42.4931ZM1830.68 53.281V220.492H1810.68V53.281H1830.68ZM1675.02 97.2934C1677.63 52.1549 1709.6 19.7858 1743.65 8.62785C1760.75 3.02685 1779.14 2.49859 1795.16 9.14055C1811.49 15.9125 1824.28 29.7202 1830.29 50.5064L1811.07 56.0556C1806.64 40.7025 1797.84 31.9008 1787.5 27.6152C1776.85 23.1996 1763.51 23.1658 1749.88 27.6334C1722.48 36.6128 1697.05 62.6778 1694.98 98.448L1675.02 97.2934ZM1778.01 186.854C1725.05 195.401 1675 152.845 1675 97.8707H1695C1695 140.707 1734.2 173.665 1774.82 167.109L1778.01 186.854ZM1783.34 184.987C1783.29 183.96 1783.12 184.11 1783.48 184.734C1783.96 185.573 1784.72 186.125 1785.24 186.339C1785.53 186.455 1785.24 186.267 1783.85 186.265C1782.51 186.263 1780.62 186.432 1778.01 186.854L1774.82 167.109C1780.53 166.188 1787.25 165.532 1792.87 167.848C1796.13 169.194 1798.94 171.487 1800.82 174.774C1802.59 177.847 1803.18 181.151 1803.32 184.079L1783.34 184.987ZM1783.33 226.606V184.533H1803.33V226.606H1783.33ZM1830.68 220.492C1830.68 226.064 1826.77 229.266 1825.56 230.197C1823.81 231.533 1821.83 232.501 1820.18 233.195C1816.76 234.632 1812.6 235.781 1808.77 236.577C1804.95 237.369 1800.81 237.946 1797.39 237.976C1795.85 237.99 1793.52 237.916 1791.27 237.201C1790.18 236.855 1788.07 236.044 1786.23 234.09C1783.96 231.676 1782.86 228.284 1783.49 224.815L1803.17 228.396C1803.4 227.12 1803.39 225.615 1802.91 224.05C1802.44 222.495 1801.63 221.275 1800.8 220.391C1799.3 218.79 1797.71 218.264 1797.32 218.14C1796.47 217.869 1796.22 217.986 1797.21 217.977C1798.85 217.963 1801.59 217.64 1804.7 216.994C1807.8 216.352 1810.61 215.523 1812.43 214.757C1813.4 214.35 1813.6 214.16 1813.39 214.322C1813.28 214.411 1812.73 214.834 1812.16 215.665C1811.56 216.527 1810.68 218.192 1810.68 220.492H1830.68ZM1787.65 133.111V69.8224H1807.65V133.111H1787.65ZM1722.94 113.125C1729.14 132.216 1746.21 142.24 1762.43 144.081C1770.55 145.002 1777.48 143.729 1781.95 141.35C1786.09 139.144 1787.65 136.407 1787.65 133.111H1807.65C1807.65 145.277 1800.6 154.079 1791.35 159.003C1782.43 163.755 1771.19 165.203 1760.17 163.953C1738.13 161.452 1713.09 147.563 1703.92 119.295L1722.94 113.125ZM1753.33 52.1827C1746 54.0533 1735.47 61.028 1728.22 72.1723C1721.23 82.9298 1717.7 96.9579 1722.94 113.125L1703.92 119.295C1696.57 96.6259 1701.64 76.3753 1711.45 61.2732C1721.02 46.558 1735.5 36.0923 1748.39 32.8034L1753.33 52.1827ZM1787.65 69.8224C1787.65 61.6117 1784.25 56.5493 1779.22 53.6691C1773.75 50.5313 1764.9 49.2314 1753.33 52.1827L1748.39 32.8034C1763.33 28.9921 1777.88 29.8497 1789.16 36.3137C1800.9 43.0353 1807.65 55.0188 1807.65 69.8224H1787.65Z",fill:"#202020",mask:"url(#path-18-outside-1_401_299)"}),y.jsxs("mask",{id:"path-20-outside-2_401_299",maskUnits:"userSpaceOnUse",x:"1810",y:"3.68457",width:"156",height:"235",fill:"black",children:[y.jsx("rect",{fill:"white",x:"1810",y:"3.68457",width:"156",height:"235"}),y.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z"})]}),y.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z",fill:"#F8F8F8"}),y.jsx("path",{d:"M1820.32 52.9881L1810.71 50.2135L1810.32 51.573V52.9881H1820.32ZM1956 97.5778H1966V97.2889L1965.98 97.0005L1956 97.5778ZM1864.59 176.689L1866.18 166.816L1866.18 166.816L1864.59 176.689ZM1847.67 184.24L1837.68 183.786L1837.67 184.013V184.24H1847.67ZM1847.67 226.313H1837.67V227.215L1837.83 228.103L1847.67 226.313ZM1927.57 115.917L1937.08 119.002L1937.08 119.002L1927.57 115.917ZM1890.14 42.2001L1892.61 32.5104L1892.61 32.5104L1890.14 42.2001ZM1810.32 52.9881V220.2H1830.32V52.9881H1810.32ZM1965.98 97.0005C1963.37 51.862 1931.4 19.4928 1897.35 8.33489C1880.25 2.7339 1861.86 2.20564 1845.84 8.8476C1829.51 15.6195 1816.72 29.4273 1810.71 50.2135L1829.93 55.7626C1834.36 40.4096 1843.16 31.6078 1853.5 27.3222C1864.15 22.9066 1877.49 22.8728 1891.12 27.3405C1918.52 36.3198 1943.95 62.3848 1946.02 98.1551L1965.98 97.0005ZM1862.99 186.561C1915.95 195.108 1966 152.552 1966 97.5778H1946C1946 140.414 1906.8 173.372 1866.18 166.816L1862.99 186.561ZM1857.66 184.695C1857.71 183.667 1857.88 183.817 1857.52 184.441C1857.04 185.28 1856.28 185.832 1855.76 186.046C1855.47 186.162 1855.76 185.974 1857.15 185.972C1858.49 185.97 1860.38 186.139 1862.99 186.561L1866.18 166.816C1860.47 165.895 1853.75 165.239 1848.13 167.555C1844.87 168.901 1842.06 171.194 1840.18 174.481C1838.41 177.554 1837.82 180.858 1837.68 183.786L1857.66 184.695ZM1857.67 226.313V184.24H1837.67V226.313H1857.67ZM1810.32 220.2C1810.32 225.771 1814.23 228.973 1815.44 229.904C1817.19 231.24 1819.17 232.208 1820.82 232.902C1824.24 234.339 1828.4 235.488 1832.23 236.284C1836.05 237.076 1840.19 237.653 1843.61 237.683C1845.15 237.697 1847.48 237.623 1849.73 236.908C1850.82 236.562 1852.93 235.751 1854.77 233.797C1857.04 231.383 1858.14 227.991 1857.51 224.522L1837.83 228.103C1837.6 226.827 1837.61 225.322 1838.09 223.758C1838.56 222.202 1839.37 220.982 1840.2 220.098C1841.7 218.497 1843.29 217.971 1843.68 217.847C1844.53 217.576 1844.78 217.693 1843.79 217.684C1842.15 217.67 1839.41 217.348 1836.3 216.701C1833.2 216.059 1830.39 215.23 1828.57 214.464C1827.6 214.057 1827.4 213.867 1827.61 214.029C1827.72 214.118 1828.27 214.541 1828.84 215.372C1829.44 216.235 1830.32 217.899 1830.32 220.2H1810.32ZM1853.35 132.818V69.5294H1833.35V132.818H1853.35ZM1918.06 112.832C1911.86 131.923 1894.79 141.947 1878.57 143.788C1870.45 144.709 1863.52 143.436 1859.05 141.057C1854.91 138.851 1853.35 136.114 1853.35 132.818H1833.35C1833.35 144.984 1840.4 153.786 1849.65 158.71C1858.57 163.462 1869.81 164.91 1880.83 163.66C1902.87 161.159 1927.91 147.27 1937.08 119.002L1918.06 112.832ZM1887.67 51.8898C1895 53.7603 1905.53 60.735 1912.78 71.8794C1919.77 82.6368 1923.3 96.6649 1918.06 112.832L1937.08 119.002C1944.43 96.333 1939.36 76.0823 1929.55 60.9802C1919.98 46.265 1905.5 35.7993 1892.61 32.5104L1887.67 51.8898ZM1853.35 69.5294C1853.35 61.3188 1856.75 56.2563 1861.78 53.3761C1867.25 50.2384 1876.1 48.9384 1887.67 51.8898L1892.61 32.5104C1877.67 28.6991 1863.12 29.5567 1851.84 36.0208C1840.1 42.7423 1833.35 54.7259 1833.35 69.5294H1853.35Z",fill:"#202020",mask:"url(#path-20-outside-2_401_299)"}),y.jsx("path",{d:"M1821.76 250.733C1831.67 250.733 1839.72 258.764 1839.72 268.679C1839.72 278.594 1831.67 286.624 1821.76 286.624C1811.85 286.624 1803.8 278.594 1803.8 268.679C1803.8 258.764 1811.85 250.733 1821.76 250.733Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),y.jsx("rect",{x:"2220",y:"425",width:"81",height:"52",fill:"white"}),y.jsx("path",{d:"M2275.31 361.418L2264.36 307.631C2262.84 300.16 2252.16 300.16 2250.64 307.631L2239.69 361.418L2197.61 376.406C2191.41 378.615 2191.41 387.385 2197.61 389.594L2239.69 404.582L2250.64 458.369C2252.16 465.84 2262.84 465.84 2264.36 458.369L2275.31 404.582L2317.39 389.594C2323.59 387.385 2323.59 378.615 2317.39 376.406L2275.31 361.418Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),y.jsx("path",{d:"M625.293 355.198L628.599 358.113L631.906 355.198C637.183 350.545 644.15 347.967 651.639 347.967C667.478 347.967 680.539 360.312 681.199 375.846V380.367C678.702 412.324 649.424 427.534 635.921 432.737L635.896 432.747L635.87 432.757C633.712 433.616 631.247 434.007 628.599 434.007C625.951 434.007 623.486 433.616 621.328 432.757L621.302 432.747L621.277 432.737C607.774 427.534 578.496 412.324 575.999 380.367V375.846C576.66 360.312 589.72 347.967 605.559 347.967C613.048 347.967 620.015 350.545 625.293 355.198Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"})]}),y.jsx("defs",{children:y.jsx("clipPath",{id:"clip0_401_299",children:y.jsx("rect",{width:"2594",height:"490",fill:"white"})})})]}),TC=({fill:A="currentcolor",size:e=20})=>y.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})}),NC=({size:A=16,fill:e="currentColor",onClick:t})=>y.jsx("svg",{width:A,height:A,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:t,children:y.jsx("path",{d:"M10.5 24L38.5 24",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});var ue=function(){return ue=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ue.apply(this,arguments)};function Ja(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||Array.prototype.slice.call(e))}var dA="-ms-",vi="-moz-",tA="-webkit-",Z5="comm",Ms="rule",Du="decl",VC="@import",W5="@keyframes",OC="@layer",$5=Math.abs,Ku=String.fromCharCode,tc=Object.assign;function RC(A,e){return TA(A,0)^45?(((e<<2^TA(A,0))<<2^TA(A,1))<<2^TA(A,2))<<2^TA(A,3):0}function X5(A){return A.trim()}function pt(A,e){return(A=e.exec(A))?A[0]:A}function $(A,e,t){return A.replace(e,t)}function fa(A,e,t){return A.indexOf(e,t)}function TA(A,e){return A.charCodeAt(e)|0}function Fn(A,e,t){return A.slice(e,t)}function rt(A){return A.length}function J5(A){return A.length}function Ai(A,e){return e.push(A),A}function jC(A,e){return A.map(e).join("")}function Kf(A,e){return A.filter(function(t){return!pt(t,e)})}var Ds=1,Un=1,Y5=0,_e=0,LA=0,Mn="";function Ks(A,e,t,r,n,i,o,a){return{value:A,root:e,parent:t,type:r,props:n,children:i,line:Ds,column:Un,length:o,return:"",siblings:a}}function kt(A,e){return tc(Ks("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Sr(A){for(;A.root;)A=kt(A.root,{children:[A]});Ai(A,A.siblings)}function PC(){return LA}function zC(){return LA=_e>0?TA(Mn,--_e):0,Un--,LA===10&&(Un=1,Ds--),LA}function Xe(){return LA=_e<Y5?TA(Mn,_e++):0,Un++,LA===10&&(Un=1,Ds++),LA}function wr(){return TA(Mn,_e)}function ga(){return _e}function _s(A,e){return Fn(Mn,A,e)}function rc(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function GC(A){return Ds=Un=1,Y5=rt(Mn=A),_e=0,[]}function ZC(A){return Mn="",A}function H1(A){return X5(_s(_e-1,nc(A===91?A+2:A===40?A+1:A)))}function WC(A){for(;(LA=wr())&&LA<33;)Xe();return rc(A)>2||rc(LA)>3?"":" "}function $C(A,e){for(;--e&&Xe()&&!(LA<48||LA>102||LA>57&&LA<65||LA>70&&LA<97););return _s(A,ga()+(e<6&&wr()==32&&Xe()==32))}function nc(A){for(;Xe();)switch(LA){case A:return _e;case 34:case 39:A!==34&&A!==39&&nc(LA);break;case 40:A===41&&nc(A);break;case 92:Xe();break}return _e}function XC(A,e){for(;Xe()&&A+LA!==57;)if(A+LA===84&&wr()===47)break;return"/*"+_s(e,_e-1)+"*"+Ku(A===47?A:Xe())}function JC(A){for(;!rc(wr());)Xe();return _s(A,_e)}function YC(A){return ZC(pa("",null,null,null,[""],A=GC(A),0,[0],A))}function pa(A,e,t,r,n,i,o,a,s){for(var l=0,c=0,u=o,d=0,g=0,C=0,v=1,E=1,p=1,f=0,h="",Q=n,U=i,w=r,m=h;E;)switch(C=f,f=Xe()){case 40:if(C!=108&&TA(m,u-1)==58){fa(m+=$(H1(f),"&","&\f"),"&\f",$5(l?a[l-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:m+=H1(f);break;case 9:case 10:case 13:case 32:m+=WC(C);break;case 92:m+=$C(ga()-1,7);continue;case 47:switch(wr()){case 42:case 47:Ai(qC(XC(Xe(),ga()),e,t,s),s);break;default:m+="/"}break;case 123*v:a[l++]=rt(m)*p;case 125*v:case 59:case 0:switch(f){case 0:case 125:E=0;case 59+c:p==-1&&(m=$(m,/\f/g,"")),g>0&&rt(m)-u&&Ai(g>32?Tf(m+";",r,t,u-1,s):Tf($(m," ","")+";",r,t,u-2,s),s);break;case 59:m+=";";default:if(Ai(w=_f(m,e,t,l,c,n,a,h,Q=[],U=[],u,i),i),f===123)if(c===0)pa(m,e,w,w,Q,i,u,a,U);else switch(d===99&&TA(m,3)===110?100:d){case 100:case 108:case 109:case 115:pa(A,w,w,r&&Ai(_f(A,w,w,0,0,n,a,h,n,Q=[],u,U),U),n,U,u,a,r?Q:U);break;default:pa(m,w,w,w,[""],U,0,a,U)}}l=c=g=0,v=p=1,h=m="",u=o;break;case 58:u=1+rt(m),g=C;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&zC()==125)continue}switch(m+=Ku(f),f*v){case 38:p=c>0?1:(m+="\f",-1);break;case 44:a[l++]=(rt(m)-1)*p,p=1;break;case 64:wr()===45&&(m+=H1(Xe())),d=wr(),c=u=rt(h=m+=JC(ga())),f++;break;case 45:C===45&&rt(m)==2&&(v=0)}}return i}function _f(A,e,t,r,n,i,o,a,s,l,c,u){for(var d=n-1,g=n===0?i:[""],C=J5(g),v=0,E=0,p=0;v<r;++v)for(var f=0,h=Fn(A,d+1,d=$5(E=o[v])),Q=A;f<C;++f)(Q=X5(E>0?g[f]+" "+h:$(h,/&\f/g,g[f])))&&(s[p++]=Q);return Ks(A,e,t,n===0?Ms:a,s,l,c,u)}function qC(A,e,t,r){return Ks(A,e,t,Z5,Ku(PC()),Fn(A,2,-2),0,r)}function Tf(A,e,t,r,n){return Ks(A,e,t,Du,Fn(A,0,r),Fn(A,r+1,-1),r,n)}function q5(A,e,t){switch(RC(A,e)){case 5103:return tA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tA+A+A;case 4789:return vi+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return tA+A+vi+A+dA+A+A;case 5936:switch(TA(A,e+11)){case 114:return tA+A+dA+$(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return tA+A+dA+$(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return tA+A+dA+$(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return tA+A+dA+A+A;case 6165:return tA+A+dA+"flex-"+A+A;case 5187:return tA+A+$(A,/(\w+).+(:[^]+)/,tA+"box-$1$2"+dA+"flex-$1$2")+A;case 5443:return tA+A+dA+"flex-item-"+$(A,/flex-|-self/g,"")+(pt(A,/flex-|baseline/)?"":dA+"grid-row-"+$(A,/flex-|-self/g,""))+A;case 4675:return tA+A+dA+"flex-line-pack"+$(A,/align-content|flex-|-self/g,"")+A;case 5548:return tA+A+dA+$(A,"shrink","negative")+A;case 5292:return tA+A+dA+$(A,"basis","preferred-size")+A;case 6060:return tA+"box-"+$(A,"-grow","")+tA+A+dA+$(A,"grow","positive")+A;case 4554:return tA+$(A,/([^-])(transform)/g,"$1"+tA+"$2")+A;case 6187:return $($($(A,/(zoom-|grab)/,tA+"$1"),/(image-set)/,tA+"$1"),A,"")+A;case 5495:case 3959:return $(A,/(image-set\([^]*)/,tA+"$1$`$1");case 4968:return $($(A,/(.+:)(flex-)?(.*)/,tA+"box-pack:$3"+dA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tA+A+A;case 4200:if(!pt(A,/flex-|baseline/))return dA+"grid-column-align"+Fn(A,e)+A;break;case 2592:case 3360:return dA+$(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,pt(r.props,/grid-\w+-end/)})?~fa(A+(t=t[e].value),"span",0)?A:dA+$(A,"-start","")+A+dA+"grid-row-span:"+(~fa(t,"span",0)?pt(t,/\d+/):+pt(t,/\d+/)-+pt(A,/\d+/))+";":dA+$(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return pt(r.props,/grid-\w+-start/)})?A:dA+$($(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return $(A,/(.+)-inline(.+)/,tA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(A)-1-e>6)switch(TA(A,e+1)){case 109:if(TA(A,e+4)!==45)break;case 102:return $(A,/(.+:)(.+)-([^]+)/,"$1"+tA+"$2-$3$1"+vi+(TA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~fa(A,"stretch",0)?q5($(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return $(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,i,o,a,s,l){return dA+n+":"+i+l+(o?dA+n+"-span:"+(a?s:+s-+i)+l:"")+A});case 4949:if(TA(A,e+6)===121)return $(A,":",":"+tA)+A;break;case 6444:switch(TA(A,TA(A,14)===45?18:11)){case 120:return $(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tA+(TA(A,14)===45?"inline-":"")+"box$3$1"+tA+"$2$3$1"+dA+"$2box$3")+A;case 100:return $(A,":",":"+dA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(A,"scroll-","scroll-snap-")+A}return A}function Ya(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function A6(A,e,t,r){switch(A.type){case OC:if(A.children.length)break;case VC:case Du:return A.return=A.return||A.value;case Z5:return"";case W5:return A.return=A.value+"{"+Ya(A.children,r)+"}";case Ms:if(!rt(A.value=A.props.join(",")))return""}return rt(t=Ya(A.children,r))?A.return=A.value+"{"+t+"}":""}function e6(A){var e=J5(A);return function(t,r,n,i){for(var o="",a=0;a<e;a++)o+=A[a](t,r,n,i)||"";return o}}function t6(A){return function(e){e.root||(e=e.return)&&A(e)}}function r6(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case Du:A.return=q5(A.value,A.length,t);return;case W5:return Ya([kt(A,{value:$(A.value,"@","@"+tA)})],r);case Ms:if(A.length)return jC(t=A.props,function(n){switch(pt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sr(kt(A,{props:[$(n,/:(read-\w+)/,":"+vi+"$1")]})),Sr(kt(A,{props:[n]})),tc(A,{props:Kf(t,r)});break;case"::placeholder":Sr(kt(A,{props:[$(n,/:(plac\w+)/,":"+tA+"input-$1")]})),Sr(kt(A,{props:[$(n,/:(plac\w+)/,":"+vi+"$1")]})),Sr(kt(A,{props:[$(n,/:(plac\w+)/,dA+"input-$1")]})),Sr(kt(A,{props:[n]})),tc(A,{props:Kf(t,r)});break}return""})}}var n6={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ce={},xn=typeof process<"u"&&Ce!==void 0&&(Ce.REACT_APP_SC_ATTR||Ce.SC_ATTR)||"data-styled",Ap="active",ep="data-styled-version",Ts="6.1.8",_u=`/*!sc*/
`,Tu=typeof window<"u"&&"HTMLElement"in window,i6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ce.REACT_APP_SC_DISABLE_SPEEDY!==""?Ce.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ce.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ce!==void 0&&Ce.SC_DISABLE_SPEEDY!==void 0&&Ce.SC_DISABLE_SPEEDY!==""&&Ce.SC_DISABLE_SPEEDY!=="false"&&Ce.SC_DISABLE_SPEEDY),Ns=Object.freeze([]),En=Object.freeze({});function o6(A,e,t){return t===void 0&&(t=En),A.theme!==t.theme&&A.theme||e||t.theme}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),a6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,s6=/(^-|-$)/g;function Nf(A){return A.replace(a6,"-").replace(s6,"")}var l6=/(a)(d)/gi,Fo=52,Vf=function(A){return String.fromCharCode(A+(A>25?39:97))};function ic(A){var e,t="";for(e=Math.abs(A);e>Fo;e=e/Fo|0)t=Vf(e%Fo)+t;return(Vf(e%Fo)+t).replace(l6,"$1-$2")}var L1,rp=5381,en=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},np=function(A){return en(rp,A)};function c6(A){return ic(np(A)>>>0)}function u6(A){return A.displayName||A.name||"Component"}function k1(A){return typeof A=="string"&&!0}var ip=typeof Symbol=="function"&&Symbol.for,op=ip?Symbol.for("react.memo"):60115,d6=ip?Symbol.for("react.forward_ref"):60112,f6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p6=((L1={})[d6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},L1[op]=ap,L1);function Of(A){return("type"in(e=A)&&e.type.$$typeof)===op?ap:"$$typeof"in A?p6[A.$$typeof]:f6;var e}var h6=Object.defineProperty,B6=Object.getOwnPropertyNames,Rf=Object.getOwnPropertySymbols,C6=Object.getOwnPropertyDescriptor,v6=Object.getPrototypeOf,jf=Object.prototype;function sp(A,e,t){if(typeof e!="string"){if(jf){var r=v6(e);r&&r!==jf&&sp(A,r,t)}var n=B6(e);Rf&&(n=n.concat(Rf(e)));for(var i=Of(A),o=Of(e),a=0;a<n.length;++a){var s=n[a];if(!(s in g6||t&&t[s]||o&&s in o||i&&s in i)){var l=C6(e,s);try{h6(A,s,l)}catch{}}}}return A}function Hn(A){return typeof A=="function"}function Nu(A){return typeof A=="object"&&"styledComponentId"in A}function gr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Pf(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function Pi(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function oc(A,e,t){if(t===void 0&&(t=!1),!t&&!Pi(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=oc(A[r],e[r]);else if(Pi(e))for(var r in e)A[r]=oc(A[r],e[r]);return A}function Vu(A,e){Object.defineProperty(A,"toString",{value:e})}function eo(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var w6=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,i=n;e>=i;)if((i<<=1)<0)throw eo(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var i=r;i<n;i++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),i=n+r,o=n;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(_u);return t},A}(),ha=new Map,qa=new Map,Ba=1,Uo=function(A){if(ha.has(A))return ha.get(A);for(;qa.has(Ba);)Ba++;var e=Ba++;return ha.set(A,e),qa.set(e,A),e},m6=function(A,e){Ba=e+1,ha.set(A,e),qa.set(e,A)},Q6="style[".concat(xn,"][").concat(ep,'="').concat(Ts,'"]'),y6=new RegExp("^".concat(xn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F6=function(A,e,t){for(var r,n=t.split(","),i=0,o=n.length;i<o;i++)(r=n[i])&&A.registerName(e,r)},U6=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(_u),n=[],i=0,o=r.length;i<o;i++){var a=r[i].trim();if(a){var s=a.match(y6);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(m6(c,l),F6(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}};function x6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lp=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(xn,"]")));return s[s.length-1]}(t),i=n!==void 0?n.nextSibling:null;r.setAttribute(xn,Ap),r.setAttribute(ep,Ts);var o=x6();return o&&r.setAttribute("nonce",o),t.insertBefore(r,i),r},E6=function(){function A(e){this.element=lp(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,i=r.length;n<i;n++){var o=r[n];if(o.ownerNode===t)return o}throw eo(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),H6=function(){function A(e){this.element=lp(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),L6=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),zf=Tu,k6={isServer:!Tu,useCSSOMInjection:!i6},cp=function(){function A(e,t,r){e===void 0&&(e=En),t===void 0&&(t={});var n=this;this.options=ue(ue({},k6),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Tu&&zf&&(zf=!1,function(i){for(var o=document.querySelectorAll(Q6),a=0,s=o.length;a<s;a++){var l=o[a];l&&l.getAttribute(xn)!==Ap&&(U6(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),Vu(this,function(){return function(i){for(var o=i.getTag(),a=o.length,s="",l=function(u){var d=function(p){return qa.get(p)}(u);if(d===void 0)return"continue";var g=i.names.get(d),C=o.getGroup(u);if(g===void 0||C.length===0)return"continue";var v="".concat(xn,".g").concat(u,'[id="').concat(d,'"]'),E="";g!==void 0&&g.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),s+="".concat(C).concat(v,'{content:"').concat(E,'"}').concat(_u)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Uo(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(ue(ue({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new L6(n):r?new E6(n):new H6(n)}(this.options),new w6(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Uo(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Uo(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Uo(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),b6=/&/g,I6=/^\s*\/\/.*$/gm;function up(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=up(t.children,e)),t})}function S6(A){var e,t,r,n=A===void 0?En:A,i=n.options,o=i===void 0?En:i,a=n.plugins,s=a===void 0?Ns:a,l=function(d,g,C){return C.startsWith(t)&&C.endsWith(t)&&C.replaceAll(t,"").length>0?".".concat(e):d},c=s.slice();c.push(function(d){d.type===Ms&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(b6,t).replace(r,l))}),o.prefix&&c.push(r6),c.push(A6);var u=function(d,g,C,v){g===void 0&&(g=""),C===void 0&&(C=""),v===void 0&&(v="&"),e=v,t=g,r=new RegExp("\\".concat(t,"\\b"),"g");var E=d.replace(I6,""),p=YC(C||g?"".concat(C," ").concat(g," { ").concat(E," }"):E);o.namespace&&(p=up(p,o.namespace));var f=[];return Ya(p,e6(c.concat(t6(function(h){return f.push(h)})))),f};return u.hash=s.length?s.reduce(function(d,g){return g.name||eo(15),en(d,g.name)},rp).toString():"",u}var M6=new cp,ac=S6(),dp=Se.createContext({shouldForwardProp:void 0,styleSheet:M6,stylis:ac});dp.Consumer;Se.createContext(void 0);function Gf(){return k.useContext(dp)}var D6=function(){function A(e,t){var r=this;this.inject=function(n,i){i===void 0&&(i=ac);var o=r.name+i.hash;n.hasNameForId(r.id,o)||n.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Vu(this,function(){throw eo(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=ac),this.name+e.hash},A}(),K6=function(A){return A>="A"&&A<="Z"};function Zf(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;K6(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var fp=function(A){return A==null||A===!1||A===""},gp=function(A){var e,t,r=[];for(var n in A){var i=A[n];A.hasOwnProperty(n)&&!fp(i)&&(Array.isArray(i)&&i.isCss||Hn(i)?r.push("".concat(Zf(n),":"),i,";"):Pi(i)?r.push.apply(r,Ja(Ja(["".concat(n," {")],gp(i),!1),["}"],!1)):r.push("".concat(Zf(n),": ").concat((e=n,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in n6||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function mr(A,e,t,r){if(fp(A))return[];if(Nu(A))return[".".concat(A.styledComponentId)];if(Hn(A)){if(!Hn(i=A)||i.prototype&&i.prototype.isReactComponent||!e)return[A];var n=A(e);return mr(n,e,t,r)}var i;return A instanceof D6?t?(A.inject(t,r),[A.getName(r)]):[A]:Pi(A)?gp(A):Array.isArray(A)?Array.prototype.concat.apply(Ns,A.map(function(o){return mr(o,e,t,r)})):[A.toString()]}function _6(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Hn(t)&&!Nu(t))return!1}return!0}var T6=np(Ts),N6=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_6(e),this.componentId=t,this.baseHash=en(T6,t),this.baseStyle=r,cp.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=gr(n,this.staticRulesId);else{var i=Pf(mr(this.rules,e,t,r)),o=ic(en(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=r(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}n=gr(n,o),this.staticRulesId=o}else{for(var s=en(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var d=Pf(mr(u,e,t,r));s=en(s,d+c),l+=d}}if(l){var g=ic(s>>>0);t.hasNameForId(this.componentId,g)||t.insertRules(this.componentId,g,r(l,".".concat(g),void 0,this.componentId)),n=gr(n,g)}}return n},A}(),pp=Se.createContext(void 0);pp.Consumer;var b1={};function V6(A,e,t){var r=Nu(A),n=A,i=!k1(A),o=e.attrs,a=o===void 0?Ns:o,s=e.componentId,l=s===void 0?function(Q,U){var w=typeof Q!="string"?"sc":Nf(Q);b1[w]=(b1[w]||0)+1;var m="".concat(w,"-").concat(c6(Ts+w+b1[w]));return U?"".concat(U,"-").concat(m):m}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(Q){return k1(Q)?"styled.".concat(Q):"Styled(".concat(u6(Q),")")}(A):c,d=e.displayName&&e.componentId?"".concat(Nf(e.displayName),"-").concat(e.componentId):e.componentId||l,g=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,C=e.shouldForwardProp;if(r&&n.shouldForwardProp){var v=n.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;C=function(Q,U){return v(Q,U)&&E(Q,U)}}else C=v}var p=new N6(t,d,r?n.componentStyle:void 0);function f(Q,U){return function(w,m,x){var L=w.attrs,I=w.componentStyle,Z=w.defaultProps,X=w.foldedComponentIds,G=w.styledComponentId,AA=w.target,GA=Se.useContext(pp),D=Gf(),K=w.shouldForwardProp||D.shouldForwardProp,H=o6(m,GA,Z)||En,S=function(CA,oA,EA){for(var Ne,Ae=ue(ue({},oA),{className:void 0,theme:EA}),ir=0;ir<CA.length;ir+=1){var lt=Hn(Ne=CA[ir])?Ne(Ae):Ne;for(var VA in lt)Ae[VA]=VA==="className"?gr(Ae[VA],lt[VA]):VA==="style"?ue(ue({},Ae[VA]),lt[VA]):lt[VA]}return oA.className&&(Ae.className=gr(Ae.className,oA.className)),Ae}(L,m,H),M=S.as||AA,j={};for(var z in S)S[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&S.theme===H||(z==="forwardedAs"?j.as=S.forwardedAs:K&&!K(z,M)||(j[z]=S[z]));var lA=function(CA,oA){var EA=Gf(),Ne=CA.generateAndInjectStyles(oA,EA.styleSheet,EA.stylis);return Ne}(I,S),BA=gr(X,G);return lA&&(BA+=" "+lA),S.className&&(BA+=" "+S.className),j[k1(M)&&!tp.has(M)?"class":"className"]=BA,j.ref=x,k.createElement(M,j)}(h,Q,U)}f.displayName=u;var h=Se.forwardRef(f);return h.attrs=g,h.componentStyle=p,h.displayName=u,h.shouldForwardProp=C,h.foldedComponentIds=r?gr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=d,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=r?function(U){for(var w=[],m=1;m<arguments.length;m++)w[m-1]=arguments[m];for(var x=0,L=w;x<L.length;x++)oc(U,L[x],!0);return U}({},n.defaultProps,Q):Q}}),Vu(h,function(){return".".concat(h.styledComponentId)}),i&&sp(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Wf(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var $f=function(A){return Object.assign(A,{isCss:!0})};function O6(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Hn(A)||Pi(A))return $f(mr(Wf(Ns,Ja([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?mr(r):$f(mr(Wf(r,e)))}function sc(A,e,t){if(t===void 0&&(t=En),!e)throw eo(1,e);var r=function(n){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return A(e,t,O6.apply(void 0,Ja([n],i,!1)))};return r.attrs=function(n){return sc(A,e,ue(ue({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return sc(A,e,ue(ue({},t),n))},r}var hp=function(A){return sc(V6,A)},Te=hp;tp.forEach(function(A){Te[A]=hp(A)});const Xf=({data:A=[]})=>{var c;const[e,t]=k.useState(!0),[r,n]=k.useState("0"),[i,o]=k.useState("1"),[a,s]=k.useState(!1);k.useEffect(()=>{const u=new ResizeObserver(d=>{for(let g of d)g.contentRect.width<=800?s(!0):s(!1)});return u.observe(document.body),()=>{u.disconnect()}},[]);const l=k.useMemo(()=>A==null?void 0:A.filter(u=>u.cap_id===r)[0].contentMenuList.filter(u=>u.id===i)[0],[i,r,A]);return y.jsxs(Ao,{className:"flex-1 flex width-100",children:[y.jsxs(Bp,{className:`relative ${e?"open":""}`,children:[y.jsx(Mu,{data:A==null?void 0:A.map(u=>({key:u.cap_id,title:u.cap,dropData:u.contentMenuList.map(d=>({key:d.id,title:d.title})),open:!0})),direction:"column",active:r,onChange:u=>{n(u.key),o(`${Number(u.key)*10+1}`)},dropProps:{direction:"column",active:i},onDropChange:(u,d)=>{n(d.key),o(u.key)},theme:{activeBg:"var(--color-bg-3)",lineColor:"inherit"},className:"pt-24 height-100 border-right overflow-auto scrollbar-none"}),a&&y.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:y.jsx(xA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),y.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:y.jsxs(YA,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[y.jsx(re,{title:l.title,type:"h2"}),y.jsxs("div",{className:"flex column gap-12",children:[l.des&&y.jsx(re,{title:l.des,type:"p"}),(c=l.imgList)==null?void 0:c.map(u=>y.jsxs(YA,{column:!0,gap:8,style:{maxWidth:"400px"},children:[y.jsx(re,{title:u.img_des,type:"p"}),y.jsx("img",{src:u.img_src,width:"100%"})]}))]})]})})]})},Bp=Te.div`
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
`,I1=({url:A,className:e,imgClassName:t,imgStyle:r,style:n,ratio:i=1/1})=>{const o=k.useRef(null),[a,s]=k.useState(!0),[l,c]=k.useState(!1),u=()=>{setTimeout(()=>{s(!1)},300)},d=()=>{s(!1),c(!0)};return k.useEffect(()=>{const g=o.current;if(g)return g.complete&&s(!1),g==null||g.addEventListener("load",u),g==null||g.addEventListener("error",d),()=>{g==null||g.removeEventListener("load",u),g==null||g.removeEventListener("error",d)}},[]),y.jsxs("div",{className:`relative flex items-center justify-center ${a||l?"bg-gray radius-6 overflow-hidden":""} ${e}`,style:{aspectRatio:a||l?`${i}`:"auto",...n},children:[a&&y.jsx(P5,{color:"var(--color-text-4)",size:28,style:{position:"absolute",transform:"translate(-50%,-50%)"}}),l?y.jsx(xA,{name:"error-fill",fill:"var(--color-red-03)"}):y.jsx("img",{src:A,alt:"",className:t,style:{zIndex:"1",...r}})]})},S1=({data:A=[]})=>{var s,l;const[e,t]=k.useState(!0),[r,n]=k.useState(!1),[i,o]=k.useState(1),a=k.useMemo(()=>A==null?void 0:A.filter(c=>c.id===i)[0],[i,A]);return k.useEffect(()=>{const c=new ResizeObserver(u=>{for(let d of u)d.contentRect.width<=800?n(!0):n(!1)});return c.observe(document.body),()=>{c.disconnect()}},[]),y.jsxs(Ao,{className:"flex-1 flex width-100",children:[y.jsxs(Bp,{className:`relative ${e?"open":""}`,children:[y.jsx("div",{className:"height-100 width-100 overflow-auto pb-24",children:y.jsx("div",{className:"flex column gap-12 px-12 py-24 height-100 width-100",children:A==null?void 0:A.map((c,u)=>y.jsxs("div",{className:"flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer",style:{aspectRatio:1,flexShrink:0},onClick:()=>o(c.id),children:[y.jsx(I1,{url:c.img,className:"radius-8 overflow-hidden",imgStyle:{width:"64px"}}),y.jsx("div",{className:"fs-14 color-gray-3",children:c.title})]},c.id??u))})}),r&&y.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:y.jsx(xA,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),y.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:y.jsxs(YA,{column:!0,gap:16,w:"fit-content",style:{maxWidth:"400px",margin:"0 auto"},children:[y.jsx(re,{title:a.title,type:"h2"}),y.jsxs(YA,{gap:12,className:"p-12 bg-gray radius-8",w:"100%",children:[a.img&&y.jsx(I1,{url:a.img,imgStyle:{width:"100%"},className:"width-50 radius-8 shrink-0"}),a.desc&&y.jsx("div",{className:"fs-12 color-gray-3",children:a.desc})]}),a.detail&&y.jsx("img",{src:a.detail,width:"100%"}),((s=a.detailList)==null?void 0:s.length)>0&&y.jsx("div",{className:"flex column gap-12",children:(l=a.detailList)==null?void 0:l.map(c=>y.jsxs(YA,{column:!0,gap:8,children:[c.desc&&y.jsx(re,{title:c.desc,type:"p"}),c.img&&y.jsx(I1,{url:c.img,imgStyle:{width:"100%"},className:"width-100 radius-8 overflow-hidden"})]}))})]})})]})};/*!
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
***************************************************************************** */var lc=function(A,e){return lc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},lc(A,e)};function Ye(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");lc(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cc=function(){return cc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},cc.apply(this,arguments)};function ee(A,e,t,r){function n(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function a(c){try{l(r.next(c))}catch(u){o(u)}}function s(c){try{l(r.throw(c))}catch(u){o(u)}}function l(c){c.done?i(c.value):n(c.value).then(a,s)}l((r=r.apply(A,e||[])).next())})}function $A(A,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function xo(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return A.concat(i||e)}var xt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),Vs=function(A,e){return xt.fromClientRect(A,e.getBoundingClientRect())},R6=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new xt(0,0,r,n)},Os=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},FA=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,i="";++n<t;){var o=A[n];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(n+1===t||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},Jf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",j6=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Eo=0;Eo<Jf.length;Eo++)j6[Jf.charCodeAt(Eo)]=Eo;var Yf="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ei=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ho=0;Ho<Yf.length;Ho++)ei[Yf.charCodeAt(Ho)]=Ho;var P6=function(A){var e=A.length*.75,t=A.length,r,n=0,i,o,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)i=ei[A.charCodeAt(r)],o=ei[A.charCodeAt(r+1)],a=ei[A.charCodeAt(r+2)],s=ei[A.charCodeAt(r+3)],c[n++]=i<<2|o>>4,c[n++]=(o&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},z6=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},G6=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Qr=5,Ou=11,M1=2,Z6=Ou-Qr,Cp=65536>>Qr,W6=1<<Qr,D1=W6-1,$6=1024>>Qr,X6=Cp+$6,J6=X6,Y6=32,q6=J6+Y6,Av=65536>>Ou,ev=1<<Z6,tv=ev-1,qf=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},rv=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},nv=function(A,e){var t=P6(A),r=Array.isArray(t)?G6(t):new Uint32Array(t),n=Array.isArray(t)?z6(t):new Uint16Array(t),i=24,o=qf(n,i/2,r[4]/2),a=r[5]===2?qf(n,(i+r[4])/2):rv(r,Math.ceil((i+r[4])/4));return new iv(r[0],r[1],r[2],r[3],o,a)},iv=function(){function A(e,t,r,n,i,o){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=o}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Qr],t=(t<<M1)+(e&D1),this.data[t];if(e<=65535)return t=this.index[Cp+(e-55296>>Qr)],t=(t<<M1)+(e&D1),this.data[t];if(e<this.highStart)return t=q6-Av+(e>>Ou),t=this.index[t],t+=e>>Qr&tv,t=this.index[t],t=(t<<M1)+(e&D1),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),A2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ov=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Lo=0;Lo<A2.length;Lo++)ov[A2.charCodeAt(Lo)]=Lo;var av="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",e2=50,sv=1,vp=2,wp=3,lv=4,cv=5,t2=7,mp=8,r2=9,Vt=10,uc=11,n2=12,dc=13,uv=14,ti=15,fc=16,ko=17,zn=18,dv=19,i2=20,gc=21,Gn=22,K1=23,Mr=24,pe=25,ri=26,ni=27,Dr=28,fv=29,lr=30,gv=31,bo=32,Io=33,pc=34,hc=35,Bc=36,zi=37,Cc=38,Ca=39,va=40,_1=41,Qp=42,pv=43,hv=[9001,65288],yp="!",J="×",So="÷",vc=nv(av),ct=[lr,Bc],wc=[sv,vp,wp,cv],Fp=[Vt,mp],o2=[ni,ri],Bv=wc.concat(Fp),a2=[Cc,Ca,va,pc,hc],Cv=[ti,dc],vv=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(i,o){var a=vc.get(i);if(a>e2?(n.push(!0),a-=e2):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return r.push(o),t.push(fc);if(a===lv||a===uc){if(o===0)return r.push(o),t.push(lr);var s=t[o-1];return Bv.indexOf(s)===-1?(r.push(r[o-1]),t.push(s)):(r.push(o),t.push(lr))}if(r.push(o),a===gv)return t.push(e==="strict"?gc:zi);if(a===Qp||a===fv)return t.push(lr);if(a===pv)return i>=131072&&i<=196605||i>=196608&&i<=262141?t.push(zi):t.push(lr);t.push(a)}),[r,t,n]},T1=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var i=t;i<=r.length;){i++;var o=r[i];if(o===e)return!0;if(o!==Vt)break}if(n===Vt)for(var i=t;i>0;){i--;var a=r[i];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var s=t;s<=r.length;){s++;var o=r[s];if(o===e)return!0;if(o!==Vt)break}if(a!==Vt)break}return!1},s2=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===Vt)t--;else return r}return 0},wv=function(A,e,t,r,n){if(t[r]===0)return J;var i=r-1;if(Array.isArray(n)&&n[i]===!0)return J;var o=i-1,a=i+1,s=e[i],l=o>=0?e[o]:0,c=e[a];if(s===vp&&c===wp)return J;if(wc.indexOf(s)!==-1)return yp;if(wc.indexOf(c)!==-1||Fp.indexOf(c)!==-1)return J;if(s2(i,e)===mp)return So;if(vc.get(A[i])===uc||(s===bo||s===Io)&&vc.get(A[a])===uc||s===t2||c===t2||s===r2||[Vt,dc,ti].indexOf(s)===-1&&c===r2||[ko,zn,dv,Mr,Dr].indexOf(c)!==-1||s2(i,e)===Gn||T1(K1,Gn,i,e)||T1([ko,zn],gc,i,e)||T1(n2,n2,i,e))return J;if(s===Vt)return So;if(s===K1||c===K1)return J;if(c===fc||s===fc)return So;if([dc,ti,gc].indexOf(c)!==-1||s===uv||l===Bc&&Cv.indexOf(s)!==-1||s===Dr&&c===Bc||c===i2||ct.indexOf(c)!==-1&&s===pe||ct.indexOf(s)!==-1&&c===pe||s===ni&&[zi,bo,Io].indexOf(c)!==-1||[zi,bo,Io].indexOf(s)!==-1&&c===ri||ct.indexOf(s)!==-1&&o2.indexOf(c)!==-1||o2.indexOf(s)!==-1&&ct.indexOf(c)!==-1||[ni,ri].indexOf(s)!==-1&&(c===pe||[Gn,ti].indexOf(c)!==-1&&e[a+1]===pe)||[Gn,ti].indexOf(s)!==-1&&c===pe||s===pe&&[pe,Dr,Mr].indexOf(c)!==-1)return J;if([pe,Dr,Mr,ko,zn].indexOf(c)!==-1)for(var u=i;u>=0;){var d=e[u];if(d===pe)return J;if([Dr,Mr].indexOf(d)!==-1)u--;else break}if([ni,ri].indexOf(c)!==-1)for(var u=[ko,zn].indexOf(s)!==-1?o:i;u>=0;){var d=e[u];if(d===pe)return J;if([Dr,Mr].indexOf(d)!==-1)u--;else break}if(Cc===s&&[Cc,Ca,pc,hc].indexOf(c)!==-1||[Ca,pc].indexOf(s)!==-1&&[Ca,va].indexOf(c)!==-1||[va,hc].indexOf(s)!==-1&&c===va||a2.indexOf(s)!==-1&&[i2,ri].indexOf(c)!==-1||a2.indexOf(c)!==-1&&s===ni||ct.indexOf(s)!==-1&&ct.indexOf(c)!==-1||s===Mr&&ct.indexOf(c)!==-1||ct.concat(pe).indexOf(s)!==-1&&c===Gn&&hv.indexOf(A[a])===-1||ct.concat(pe).indexOf(c)!==-1&&s===zn)return J;if(s===_1&&c===_1){for(var g=t[i],C=1;g>0&&(g--,e[g]===_1);)C++;if(C%2!==0)return J}return s===bo&&c===Io?J:So},mv=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=vv(A,e.lineBreak),r=t[0],n=t[1],i=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[pe,lr,Qp].indexOf(a)!==-1?zi:a}));var o=e.wordBreak==="keep-all"?i.map(function(a,s){return a&&A[s]>=19968&&A[s]<=40959}):void 0;return[r,n,o]},Qv=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===yp,this.start=r,this.end=n}return A.prototype.slice=function(){return FA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),yv=function(A,e){var t=Os(A),r=mv(t,e),n=r[0],i=r[1],o=r[2],a=t.length,s=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=J;l<a&&(c=wv(t,i,n,++l,o))===J;);if(c!==J||l===a){var u=new Qv(t,c,s,l);return s=l,{value:u,done:!1}}return{done:!0,value:null}}}},Fv=1,Uv=2,to=4,l2=8,As=10,c2=47,wi=92,xv=9,Ev=32,Mo=34,Zn=61,Hv=35,Lv=36,kv=37,Do=39,Ko=40,Wn=41,bv=95,ae=45,Iv=33,Sv=60,Mv=62,Dv=64,Kv=91,_v=93,Tv=61,Nv=123,_o=63,Vv=125,u2=124,Ov=126,Rv=128,d2=65533,N1=42,pr=43,jv=44,Pv=58,zv=59,Gi=46,Gv=0,Zv=8,Wv=11,$v=14,Xv=31,Jv=127,At=-1,Up=48,xp=97,Ep=101,Yv=102,qv=117,Aw=122,Hp=65,Lp=69,kp=70,ew=85,tw=90,XA=function(A){return A>=Up&&A<=57},rw=function(A){return A>=55296&&A<=57343},Kr=function(A){return XA(A)||A>=Hp&&A<=kp||A>=xp&&A<=Yv},nw=function(A){return A>=xp&&A<=Aw},iw=function(A){return A>=Hp&&A<=tw},ow=function(A){return nw(A)||iw(A)},aw=function(A){return A>=Rv},To=function(A){return A===As||A===xv||A===Ev},es=function(A){return ow(A)||aw(A)||A===bv},f2=function(A){return es(A)||XA(A)||A===ae},sw=function(A){return A>=Gv&&A<=Zv||A===Wv||A>=$v&&A<=Xv||A===Jv},Dt=function(A,e){return A!==wi?!1:e!==As},No=function(A,e,t){return A===ae?es(e)||Dt(e,t):es(A)?!0:!!(A===wi&&Dt(A,e))},V1=function(A,e,t){return A===pr||A===ae?XA(e)?!0:e===Gi&&XA(t):XA(A===Gi?e:A)},lw=function(A){var e=0,t=1;(A[e]===pr||A[e]===ae)&&(A[e]===ae&&(t=-1),e++);for(var r=[];XA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(FA.apply(void 0,r),10):0;A[e]===Gi&&e++;for(var i=[];XA(A[e]);)i.push(A[e++]);var o=i.length,a=o?parseInt(FA.apply(void 0,i),10):0;(A[e]===Lp||A[e]===Ep)&&e++;var s=1;(A[e]===pr||A[e]===ae)&&(A[e]===ae&&(s=-1),e++);for(var l=[];XA(A[e]);)l.push(A[e++]);var c=l.length?parseInt(FA.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-o))*Math.pow(10,s*c)},cw={type:2},uw={type:3},dw={type:4},fw={type:13},gw={type:8},pw={type:21},hw={type:9},Bw={type:10},Cw={type:11},vw={type:12},ww={type:14},Vo={type:23},mw={type:1},Qw={type:25},yw={type:24},Fw={type:26},Uw={type:27},xw={type:28},Ew={type:29},Hw={type:31},mc={type:32},bp=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(Os(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==mc;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Mo:return this.consumeStringToken(Mo);case Hv:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(f2(t)||Dt(r,n)){var i=No(t,r,n)?Uv:Fv,o=this.consumeName();return{type:5,value:o,flags:i}}break;case Lv:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),fw;break;case Do:return this.consumeStringToken(Do);case Ko:return cw;case Wn:return uw;case N1:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),ww;break;case pr:if(V1(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case jv:return dw;case ae:var a=e,s=this.peekCodePoint(0),l=this.peekCodePoint(1);if(V1(a,s,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(No(a,s,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(s===ae&&l===Mv)return this.consumeCodePoint(),this.consumeCodePoint(),yw;break;case Gi:if(V1(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case c2:if(this.peekCodePoint(0)===N1)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===N1&&(c=this.consumeCodePoint(),c===c2))return this.consumeToken();if(c===At)return this.consumeToken()}break;case Pv:return Fw;case zv:return Uw;case Sv:if(this.peekCodePoint(0)===Iv&&this.peekCodePoint(1)===ae&&this.peekCodePoint(2)===ae)return this.consumeCodePoint(),this.consumeCodePoint(),Qw;break;case Dv:var u=this.peekCodePoint(0),d=this.peekCodePoint(1),g=this.peekCodePoint(2);if(No(u,d,g)){var o=this.consumeName();return{type:7,value:o}}break;case Kv:return xw;case wi:if(Dt(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case _v:return Ew;case Tv:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),gw;break;case Nv:return Cw;case Vv:return vw;case qv:case ew:var C=this.peekCodePoint(0),v=this.peekCodePoint(1);return C===pr&&(Kr(v)||v===_o)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case u2:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),hw;if(this.peekCodePoint(0)===u2)return this.consumeCodePoint(),pw;break;case Ov:if(this.peekCodePoint(0)===Zn)return this.consumeCodePoint(),Bw;break;case At:return mc}return To(e)?(this.consumeWhiteSpace(),Hw):XA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):es(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:FA(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Kr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===_o&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(FA.apply(void 0,e.map(function(s){return s===_o?Up:s})),16),i=parseInt(FA.apply(void 0,e.map(function(s){return s===_o?kp:s})),16);return{type:30,start:n,end:i}}var o=parseInt(FA.apply(void 0,e),16);if(this.peekCodePoint(0)===ae&&Kr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Kr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var i=parseInt(FA.apply(void 0,a),16);return{type:30,start:o,end:i}}else return{type:30,start:o,end:o}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Ko?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Ko?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===At)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Do||t===Mo){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===At||this.peekCodePoint(0)===Wn)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Vo)}for(;;){var n=this.consumeCodePoint();if(n===At||n===Wn)return{type:22,value:FA.apply(void 0,e)};if(To(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===At||this.peekCodePoint(0)===Wn?(this.consumeCodePoint(),{type:22,value:FA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),Vo);if(n===Mo||n===Do||n===Ko||sw(n))return this.consumeBadUrlRemnants(),Vo;if(n===wi)if(Dt(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Vo;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;To(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Wn||e===At)return;Dt(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=FA.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===At||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===As)return this._value.splice(0,r),mw;if(n===wi){var i=this._value[r+1];i!==At&&i!==void 0&&(i===As?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):Dt(n,i)&&(t+=this.consumeStringSlice(r),t+=FA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=to,r=this.peekCodePoint(0);for((r===pr||r===ae)&&e.push(this.consumeCodePoint());XA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===Gi&&XA(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=l2;XA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((r===Lp||r===Ep)&&((n===pr||n===ae)&&XA(i)||XA(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=l2;XA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[lw(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),i=this.peekCodePoint(1),o=this.peekCodePoint(2);if(No(n,i,o)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===kv?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Kr(e)){for(var t=FA(e);Kr(this.peekCodePoint(0))&&t.length<6;)t+=FA(this.consumeCodePoint());To(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||rw(r)||r>1114111?d2:r}return e===At?d2:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(f2(t))e+=FA(t);else if(Dt(t,this.peekCodePoint(0)))e+=FA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),Ip=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new bp;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||kw(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?mc:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),ro=function(A){return A.type===15},Dn=function(A){return A.type===17},iA=function(A){return A.type===20},Lw=function(A){return A.type===0},Qc=function(A,e){return iA(A)&&A.value===e},Sp=function(A){return A.type!==31},Ln=function(A){return A.type!==31&&A.type!==4},at=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},kw=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},er=function(A){return A.type===17||A.type===15},kA=function(A){return A.type===16||er(A)},Mp=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},jA={type:17,number:0,flags:to},Ru={type:16,number:50,flags:to},Ot={type:16,number:100,flags:to},ii=function(A,e,t){var r=A[0],n=A[1];return[aA(r,e),aA(typeof n<"u"?n:r,t)]},aA=function(A,e){if(A.type===16)return A.number/100*e;if(ro(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},Dp="deg",Kp="grad",_p="rad",Tp="turn",Rs={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case Dp:return Math.PI*e.number/180;case Kp:return Math.PI/200*e.number;case _p:return e.number;case Tp:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},Np=function(A){return A.type===15&&(A.unit===Dp||A.unit===Kp||A.unit===_p||A.unit===Tp)},Vp=function(A){var e=A.filter(iA).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[jA,jA];case"to top":case"bottom":return ke(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[jA,Ot];case"to right":case"left":return ke(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Ot,Ot];case"to bottom":case"top":return ke(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Ot,jA];case"to left":case"right":return ke(270)}return 0},ke=function(A){return Math.PI*A/180},Jt={name:"color",parse:function(A,e){if(e.type===18){var t=bw[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),i=e.value.substring(2,3);return Rt(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),i=e.value.substring(2,3),o=e.value.substring(3,4);return Rt(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),parseInt(o+o,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),i=e.value.substring(4,6);return Rt(parseInt(r,16),parseInt(n,16),parseInt(i,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),i=e.value.substring(4,6),o=e.value.substring(6,8);return Rt(parseInt(r,16),parseInt(n,16),parseInt(i,16),parseInt(o,16)/255)}}if(e.type===20){var a=mt[e.value.toUpperCase()];if(typeof a<"u")return a}return mt.TRANSPARENT}},Yt=function(A){return(255&A)===0},DA=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},Rt=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},g2=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},p2=function(A,e){var t=e.filter(Ln);if(t.length===3){var r=t.map(g2),n=r[0],i=r[1],o=r[2];return Rt(n,i,o,1)}if(t.length===4){var a=t.map(g2),n=a[0],i=a[1],o=a[2],s=a[3];return Rt(n,i,o,s)}return 0};function O1(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var h2=function(A,e){var t=e.filter(Ln),r=t[0],n=t[1],i=t[2],o=t[3],a=(r.type===17?ke(r.number):Rs.parse(A,r))/(Math.PI*2),s=kA(n)?n.number/100:0,l=kA(i)?i.number/100:0,c=typeof o<"u"&&kA(o)?aA(o,1):1;if(s===0)return Rt(l*255,l*255,l*255,1);var u=l<=.5?l*(s+1):l+s-l*s,d=l*2-u,g=O1(d,u,a+1/3),C=O1(d,u,a),v=O1(d,u,a-1/3);return Rt(g*255,C*255,v*255,c)},bw={hsl:h2,hsla:h2,rgb:p2,rgba:p2},mi=function(A,e){return Jt.parse(A,Ip.create(e).parseComponentValue())},mt={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Iw={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(iA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},Sw={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},js=function(A,e){var t=Jt.parse(A,e[0]),r=e[1];return r&&kA(r)?{color:t,stop:r}:{color:t,stop:null}},B2=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=jA),r.stop===null&&(r.stop=Ot);for(var n=[],i=0,o=0;o<A.length;o++){var a=A[o].stop;if(a!==null){var s=aA(a,e);s>i?n.push(s):n.push(i),i=s}else n.push(null)}for(var l=null,o=0;o<n.length;o++){var c=n[o];if(c===null)l===null&&(l=o);else if(l!==null){for(var u=o-l,d=n[l-1],g=(c-d)/(u+1),C=1;C<=u;C++)n[l+C-1]=g*C;l=null}}return A.map(function(v,E){var p=v.color;return{color:p,stop:Math.max(Math.min(1,n[E]/e),0)}})},Mw=function(A,e,t){var r=e/2,n=t/2,i=aA(A[0],e)-r,o=n-aA(A[1],t);return(Math.atan2(o,i)+Math.PI*2)%(Math.PI*2)},Dw=function(A,e,t){var r=typeof A=="number"?A:Mw(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),i=e/2,o=t/2,a=n/2,s=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,i-l,i+l,o-s,o+s]},Oe=function(A,e){return Math.sqrt(A*A+e*e)},C2=function(A,e,t,r,n){var i=[[0,0],[0,e],[A,0],[A,e]];return i.reduce(function(o,a){var s=a[0],l=a[1],c=Oe(t-s,r-l);return(n?c<o.optimumDistance:c>o.optimumDistance)?{optimumCorner:a,optimumDistance:c}:o},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},Kw=function(A,e,t,r,n){var i=0,o=0;switch(A.size){case 0:A.shape===0?i=o=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(i=Math.min(Math.abs(e),Math.abs(e-r)),o=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)i=o=Math.min(Oe(e,t),Oe(e,t-n),Oe(e-r,t),Oe(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),s=C2(r,n,e,t,!0),l=s[0],c=s[1];i=Oe(l-e,(c-t)/a),o=a*i}break;case 1:A.shape===0?i=o=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(i=Math.max(Math.abs(e),Math.abs(e-r)),o=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)i=o=Math.max(Oe(e,t),Oe(e,t-n),Oe(e-r,t),Oe(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),u=C2(r,n,e,t,!1),l=u[0],c=u[1];i=Oe(l-e,(c-t)/a),o=a*i}break}return Array.isArray(A.size)&&(i=aA(A.size[0],r),o=A.size.length===2?aA(A.size[1],n):i),[i,o]},_w=function(A,e){var t=ke(180),r=[];return at(e).forEach(function(n,i){if(i===0){var o=n[0];if(o.type===20&&o.value==="to"){t=Vp(n);return}else if(Np(o)){t=Rs.parse(A,o);return}}var a=js(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Oo=function(A,e){var t=ke(180),r=[];return at(e).forEach(function(n,i){if(i===0){var o=n[0];if(o.type===20&&["top","left","right","bottom"].indexOf(o.value)!==-1){t=Vp(n);return}else if(Np(o)){t=(Rs.parse(A,o)+ke(270))%ke(360);return}}var a=js(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Tw=function(A,e){var t=ke(180),r=[],n=1,i=0,o=3,a=[];return at(e).forEach(function(s,l){var c=s[0];if(l===0){if(iA(c)&&c.value==="linear"){n=1;return}else if(iA(c)&&c.value==="radial"){n=2;return}}if(c.type===18){if(c.name==="from"){var u=Jt.parse(A,c.values[0]);r.push({stop:jA,color:u})}else if(c.name==="to"){var u=Jt.parse(A,c.values[0]);r.push({stop:Ot,color:u})}else if(c.name==="color-stop"){var d=c.values.filter(Ln);if(d.length===2){var u=Jt.parse(A,d[1]),g=d[0];Dn(g)&&r.push({stop:{type:16,number:g.number*100,flags:g.flags},color:u})}}}}),n===1?{angle:(t+ke(180))%ke(360),stops:r,type:n}:{size:o,shape:i,stops:r,position:a,type:n}},Op="closest-side",Rp="farthest-side",jp="closest-corner",Pp="farthest-corner",zp="circle",Gp="ellipse",Zp="cover",Wp="contain",Nw=function(A,e){var t=0,r=3,n=[],i=[];return at(e).forEach(function(o,a){var s=!0;if(a===0){var l=!1;s=o.reduce(function(u,d){if(l)if(iA(d))switch(d.value){case"center":return i.push(Ru),u;case"top":case"left":return i.push(jA),u;case"right":case"bottom":return i.push(Ot),u}else(kA(d)||er(d))&&i.push(d);else if(iA(d))switch(d.value){case zp:return t=0,!1;case Gp:return t=1,!1;case"at":return l=!0,!1;case Op:return r=0,!1;case Zp:case Rp:return r=1,!1;case Wp:case jp:return r=2,!1;case Pp:return r=3,!1}else if(er(d)||kA(d))return Array.isArray(r)||(r=[]),r.push(d),!1;return u},s)}if(s){var c=js(A,o);n.push(c)}}),{size:r,shape:t,stops:n,position:i,type:2}},Ro=function(A,e){var t=0,r=3,n=[],i=[];return at(e).forEach(function(o,a){var s=!0;if(a===0?s=o.reduce(function(c,u){if(iA(u))switch(u.value){case"center":return i.push(Ru),!1;case"top":case"left":return i.push(jA),!1;case"right":case"bottom":return i.push(Ot),!1}else if(kA(u)||er(u))return i.push(u),!1;return c},s):a===1&&(s=o.reduce(function(c,u){if(iA(u))switch(u.value){case zp:return t=0,!1;case Gp:return t=1,!1;case Wp:case Op:return r=0,!1;case Rp:return r=1,!1;case jp:return r=2,!1;case Zp:case Pp:return r=3,!1}else if(er(u)||kA(u))return Array.isArray(r)||(r=[]),r.push(u),!1;return c},s)),s){var l=js(A,o);n.push(l)}}),{size:r,shape:t,stops:n,position:i,type:2}},Vw=function(A){return A.type===1},Ow=function(A){return A.type===2},ju={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=$p[e.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function Rw(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!$p[A.name])}var $p={"linear-gradient":_w,"-moz-linear-gradient":Oo,"-ms-linear-gradient":Oo,"-o-linear-gradient":Oo,"-webkit-linear-gradient":Oo,"radial-gradient":Nw,"-moz-radial-gradient":Ro,"-ms-radial-gradient":Ro,"-o-radial-gradient":Ro,"-webkit-radial-gradient":Ro,"-webkit-gradient":Tw},jw={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return Ln(r)&&Rw(r)}).map(function(r){return ju.parse(A,r)})}},Pw={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(iA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},zw={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return at(e).map(function(t){return t.filter(kA)}).map(Mp)}},Gw={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return at(e).map(function(t){return t.filter(iA).map(function(r){return r.value}).join(" ")}).map(Zw)}},Zw=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},un;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(un||(un={}));var Ww={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return at(e).map(function(t){return t.filter($w)})}},$w=function(A){return iA(A)||kA(A)},Ps=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},Xw=Ps("top"),Jw=Ps("right"),Yw=Ps("bottom"),qw=Ps("left"),zs=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return Mp(t.filter(kA))}}},Am=zs("top-left"),em=zs("top-right"),tm=zs("bottom-right"),rm=zs("bottom-left"),Gs=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},nm=Gs("top"),im=Gs("right"),om=Gs("bottom"),am=Gs("left"),Zs=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return ro(t)?t.number:0}}},sm=Zs("top"),lm=Zs("right"),cm=Zs("bottom"),um=Zs("left"),dm={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},fm={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},gm={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(iA).reduce(function(t,r){return t|pm(r.value)},0)}},pm=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},hm={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Bm={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},ts;(function(A){A.NORMAL="normal",A.STRICT="strict"})(ts||(ts={}));var Cm={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return ts.STRICT;case"normal":default:return ts.NORMAL}}},vm={name:"line-height",initialValue:"normal",prefix:!1,type:4},v2=function(A,e){return iA(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:kA(A)?aA(A,e):e},wm={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:ju.parse(A,e)}},mm={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},yc={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Ws=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},Qm=Ws("top"),ym=Ws("right"),Fm=Ws("bottom"),Um=Ws("left"),xm={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(iA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Em={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},$s=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Hm=$s("top"),Lm=$s("right"),km=$s("bottom"),bm=$s("left"),Im={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Sm={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Mm={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Qc(e[0],"none")?[]:at(e).map(function(t){for(var r={color:mt.TRANSPARENT,offsetX:jA,offsetY:jA,blur:jA},n=0,i=0;i<t.length;i++){var o=t[i];er(o)?(n===0?r.offsetX=o:n===1?r.offsetY=o:r.blur=o,n++):r.color=Jt.parse(A,o)}return r})}},Dm={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Km={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=Nm[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},_m=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},Tm=function(A){var e=A.filter(function(s){return s.type===17}).map(function(s){return s.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],i=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var o=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,i,o,a]:null},Nm={matrix:_m,matrix3d:Tm},w2={type:16,number:50,flags:to},Vm=[w2,w2],Om={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(kA);return t.length!==2?Vm:[t[0],t[1]]}},Rm={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Qi;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Qi||(Qi={}));var jm={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return Qi.BREAK_ALL;case"keep-all":return Qi.KEEP_ALL;case"normal":default:return Qi.NORMAL}}},Pm={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(Dn(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Xp={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},zm={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return Dn(e)?e.number:1}},Gm={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Zm={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(iA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},Wm={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},$m={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Xm={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(Dn(e))return e.number;if(iA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},Jm={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(iA).map(function(t){return t.value})}},Ym={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},SA=function(A,e){return(A&e)!==0},qm={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},A7={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(Sp),i=0;i<n.length;i++){var o=n[i],a=n[i+1];if(o.type===20){var s=a&&Dn(a)?a.number:1;r.push({counter:o.value,increment:s})}}return r}},e7={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(Sp),n=0;n<r.length;n++){var i=r[n],o=r[n+1];if(iA(i)&&i.value!=="none"){var a=o&&Dn(o)?o.number:0;t.push({counter:i.value,reset:a})}}return t}},t7={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(ro).map(function(t){return Xp.parse(A,t)})}},r7={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(Lw);if(n.length%2!==0)return null;for(var i=0;i<n.length;i+=2){var o=n[i].value,a=n[i+1].value;r.push({open:o,close:a})}return r}},m2=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},n7={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Qc(e[0],"none")?[]:at(e).map(function(t){for(var r={color:255,offsetX:jA,offsetY:jA,blur:jA,spread:jA,inset:!1},n=0,i=0;i<t.length;i++){var o=t[i];Qc(o,"inset")?r.inset=!0:er(o)?(n===0?r.offsetX=o:n===1?r.offsetY=o:n===2?r.blur=o:r.spread=o,n++):r.color=Jt.parse(A,o)}return r})}},i7={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(iA).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},o7={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},a7={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return ro(e)?e.number:0}},s7=function(){function A(e,t){var r,n;this.animationDuration=T(e,t7,t.animationDuration),this.backgroundClip=T(e,Iw,t.backgroundClip),this.backgroundColor=T(e,Sw,t.backgroundColor),this.backgroundImage=T(e,jw,t.backgroundImage),this.backgroundOrigin=T(e,Pw,t.backgroundOrigin),this.backgroundPosition=T(e,zw,t.backgroundPosition),this.backgroundRepeat=T(e,Gw,t.backgroundRepeat),this.backgroundSize=T(e,Ww,t.backgroundSize),this.borderTopColor=T(e,Xw,t.borderTopColor),this.borderRightColor=T(e,Jw,t.borderRightColor),this.borderBottomColor=T(e,Yw,t.borderBottomColor),this.borderLeftColor=T(e,qw,t.borderLeftColor),this.borderTopLeftRadius=T(e,Am,t.borderTopLeftRadius),this.borderTopRightRadius=T(e,em,t.borderTopRightRadius),this.borderBottomRightRadius=T(e,tm,t.borderBottomRightRadius),this.borderBottomLeftRadius=T(e,rm,t.borderBottomLeftRadius),this.borderTopStyle=T(e,nm,t.borderTopStyle),this.borderRightStyle=T(e,im,t.borderRightStyle),this.borderBottomStyle=T(e,om,t.borderBottomStyle),this.borderLeftStyle=T(e,am,t.borderLeftStyle),this.borderTopWidth=T(e,sm,t.borderTopWidth),this.borderRightWidth=T(e,lm,t.borderRightWidth),this.borderBottomWidth=T(e,cm,t.borderBottomWidth),this.borderLeftWidth=T(e,um,t.borderLeftWidth),this.boxShadow=T(e,n7,t.boxShadow),this.color=T(e,dm,t.color),this.direction=T(e,fm,t.direction),this.display=T(e,gm,t.display),this.float=T(e,hm,t.cssFloat),this.fontFamily=T(e,Wm,t.fontFamily),this.fontSize=T(e,$m,t.fontSize),this.fontStyle=T(e,Ym,t.fontStyle),this.fontVariant=T(e,Jm,t.fontVariant),this.fontWeight=T(e,Xm,t.fontWeight),this.letterSpacing=T(e,Bm,t.letterSpacing),this.lineBreak=T(e,Cm,t.lineBreak),this.lineHeight=T(e,vm,t.lineHeight),this.listStyleImage=T(e,wm,t.listStyleImage),this.listStylePosition=T(e,mm,t.listStylePosition),this.listStyleType=T(e,yc,t.listStyleType),this.marginTop=T(e,Qm,t.marginTop),this.marginRight=T(e,ym,t.marginRight),this.marginBottom=T(e,Fm,t.marginBottom),this.marginLeft=T(e,Um,t.marginLeft),this.opacity=T(e,zm,t.opacity);var i=T(e,xm,t.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=T(e,Em,t.overflowWrap),this.paddingTop=T(e,Hm,t.paddingTop),this.paddingRight=T(e,Lm,t.paddingRight),this.paddingBottom=T(e,km,t.paddingBottom),this.paddingLeft=T(e,bm,t.paddingLeft),this.paintOrder=T(e,i7,t.paintOrder),this.position=T(e,Sm,t.position),this.textAlign=T(e,Im,t.textAlign),this.textDecorationColor=T(e,Gm,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=T(e,Zm,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=T(e,Mm,t.textShadow),this.textTransform=T(e,Dm,t.textTransform),this.transform=T(e,Km,t.transform),this.transformOrigin=T(e,Om,t.transformOrigin),this.visibility=T(e,Rm,t.visibility),this.webkitTextStrokeColor=T(e,o7,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=T(e,a7,t.webkitTextStrokeWidth),this.wordBreak=T(e,jm,t.wordBreak),this.zIndex=T(e,Pm,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return Yt(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return SA(this.display,4)||SA(this.display,33554432)||SA(this.display,268435456)||SA(this.display,536870912)||SA(this.display,67108864)||SA(this.display,134217728)},A}(),l7=function(){function A(e,t){this.content=T(e,qm,t.content),this.quotes=T(e,r7,t.quotes)}return A}(),Q2=function(){function A(e,t){this.counterIncrement=T(e,A7,t.counterIncrement),this.counterReset=T(e,e7,t.counterReset)}return A}(),T=function(A,e,t){var r=new bp,n=t!==null&&typeof t<"u"?t.toString():e.initialValue;r.write(n);var i=new Ip(r.read());switch(e.type){case 2:var o=i.parseComponentValue();return e.parse(A,iA(o)?o.value:e.initialValue);case 0:return e.parse(A,i.parseComponentValue());case 1:return e.parse(A,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(e.format){case"angle":return Rs.parse(A,i.parseComponentValue());case"color":return Jt.parse(A,i.parseComponentValue());case"image":return ju.parse(A,i.parseComponentValue());case"length":var a=i.parseComponentValue();return er(a)?a:jA;case"length-percentage":var s=i.parseComponentValue();return kA(s)?s:jA;case"time":return Xp.parse(A,i.parseComponentValue())}break}},c7="data-html2canvas-debug",u7=function(A){var e=A.getAttribute(c7);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Fc=function(A,e){var t=u7(A);return t===1||e===t},st=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,Fc(t,3))debugger;this.styles=new s7(e,window.getComputedStyle(t,null)),Ec(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Vs(this.context,t),Fc(t,4)&&(this.flags|=16)}return A}(),d7="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",y2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var jo=0;jo<y2.length;jo++)oi[y2.charCodeAt(jo)]=jo;var f7=function(A){var e=A.length*.75,t=A.length,r,n=0,i,o,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)i=oi[A.charCodeAt(r)],o=oi[A.charCodeAt(r+1)],a=oi[A.charCodeAt(r+2)],s=oi[A.charCodeAt(r+3)],c[n++]=i<<2|o>>4,c[n++]=(o&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},g7=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},p7=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},yr=5,Pu=11,R1=2,h7=Pu-yr,Jp=65536>>yr,B7=1<<yr,j1=B7-1,C7=1024>>yr,v7=Jp+C7,w7=v7,m7=32,Q7=w7+m7,y7=65536>>Pu,F7=1<<h7,U7=F7-1,F2=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},x7=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},E7=function(A,e){var t=f7(A),r=Array.isArray(t)?p7(t):new Uint32Array(t),n=Array.isArray(t)?g7(t):new Uint16Array(t),i=24,o=F2(n,i/2,r[4]/2),a=r[5]===2?F2(n,(i+r[4])/2):x7(r,Math.ceil((i+r[4])/4));return new H7(r[0],r[1],r[2],r[3],o,a)},H7=function(){function A(e,t,r,n,i,o){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=o}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>yr],t=(t<<R1)+(e&j1),this.data[t];if(e<=65535)return t=this.index[Jp+(e-55296>>yr)],t=(t<<R1)+(e&j1),this.data[t];if(e<this.highStart)return t=Q7-y7+(e>>Pu),t=this.index[t],t+=e>>yr&U7,t=this.index[t],t=(t<<R1)+(e&j1),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),U2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",L7=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Po=0;Po<U2.length;Po++)L7[U2.charCodeAt(Po)]=Po;var k7=1,P1=2,z1=3,x2=4,E2=5,b7=7,H2=8,G1=9,Z1=10,L2=11,k2=12,b2=13,I2=14,W1=15,I7=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var i=A.charCodeAt(t++);(i&64512)===56320?e.push(((n&1023)<<10)+(i&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},S7=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,i="";++n<t;){var o=A[n];o<=65535?r.push(o):(o-=65536,r.push((o>>10)+55296,o%1024+56320)),(n+1===t||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},M7=E7(d7),Ue="×",$1="÷",D7=function(A){return M7.get(A)},K7=function(A,e,t){var r=t-2,n=e[r],i=e[t-1],o=e[t];if(i===P1&&o===z1)return Ue;if(i===P1||i===z1||i===x2||o===P1||o===z1||o===x2)return $1;if(i===H2&&[H2,G1,L2,k2].indexOf(o)!==-1||(i===L2||i===G1)&&(o===G1||o===Z1)||(i===k2||i===Z1)&&o===Z1||o===b2||o===E2||o===b7||i===k7)return Ue;if(i===b2&&o===I2){for(;n===E2;)n=e[--r];if(n===I2)return Ue}if(i===W1&&o===W1){for(var a=0;n===W1;)a++,n=e[--r];if(a%2===0)return Ue}return $1},_7=function(A){var e=I7(A),t=e.length,r=0,n=0,i=e.map(D7);return{next:function(){if(r>=t)return{done:!0,value:null};for(var o=Ue;r<t&&(o=K7(e,i,++r))===Ue;);if(o!==Ue||r===t){var a=S7.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},T7=function(A){for(var e=_7(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},N7=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),i=Math.round(n.height);if(A.body.removeChild(r),i===e)return!0}}return!1},V7=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=Os(r.data).map(function(s){return FA(s)}),i=0,o={},a=n.every(function(s,l){t.setStart(r,i),t.setEnd(r,i+s.length);var c=t.getBoundingClientRect();i+=s.length;var u=c.x>o.x||c.y>o.y;return o=c,l===0?!0:u});return A.body.removeChild(e),a},O7=function(){return typeof new Image().crossOrigin<"u"},R7=function(){return typeof new XMLHttpRequest().responseType=="string"},j7=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},S2=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},P7=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,i=e.toDataURL();n.src=i;var o=Uc(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),M2(o).then(function(a){r.drawImage(a,0,0);var s=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+i+")",l.style.height=t+"px",S2(s)?M2(Uc(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),S2(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},Uc=function(A,e,t,r,n){var i="http://www.w3.org/2000/svg",o=document.createElementNS(i,"svg"),a=document.createElementNS(i,"foreignObject");return o.setAttributeNS(null,"width",A.toString()),o.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),o.appendChild(a),a.appendChild(n),o},M2=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},RA={get SUPPORT_RANGE_BOUNDS(){var A=N7(document);return Object.defineProperty(RA,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=RA.SUPPORT_RANGE_BOUNDS&&V7(document);return Object.defineProperty(RA,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=j7(document);return Object.defineProperty(RA,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?P7(document):Promise.resolve(!1);return Object.defineProperty(RA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=O7();return Object.defineProperty(RA,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=R7();return Object.defineProperty(RA,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(RA,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(RA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},yi=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),z7=function(A,e,t,r){var n=W7(e,t),i=[],o=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(RA.SUPPORT_RANGE_BOUNDS){var s=D2(r,o,a.length).getClientRects();if(s.length>1){var l=zu(a),c=0;l.forEach(function(d){i.push(new yi(d,xt.fromDOMRectList(A,D2(r,c+o,d.length).getClientRects()))),c+=d.length})}else i.push(new yi(a,xt.fromDOMRectList(A,s)))}else{var u=r.splitText(a.length);i.push(new yi(a,G7(A,r))),r=u}else RA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));o+=a.length}),i},G7=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var i=Vs(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),i}}return xt.EMPTY},D2=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},zu=function(A){if(RA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return T7(A)},Z7=function(A,e){if(RA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return X7(A,e)},W7=function(A,e){return e.letterSpacing!==0?zu(A):Z7(A,e)},$7=[32,160,4961,65792,65793,4153,4241],X7=function(A,e){for(var t=yv(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,i=function(){if(n.value){var o=n.value.slice(),a=Os(o),s="";a.forEach(function(l){$7.indexOf(l)===-1?s+=FA(l):(s.length&&r.push(s),r.push(FA(l)),s="")}),s.length&&r.push(s)}};!(n=t.next()).done;)i();return r},J7=function(){function A(e,t,r){this.text=Y7(t.data,r.textTransform),this.textBounds=z7(e,this.text,r,t)}return A}(),Y7=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(q7,AQ);case 2:return A.toUpperCase();default:return A}},q7=/(^|\s|:|-|\(|\))([a-z])/g,AQ=function(A,e,t){return A.length>0?e+t.toUpperCase():A},Yp=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(st),qp=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(st),Ah=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this,i=new XMLSerializer,o=Vs(t,r);return r.setAttribute("width",o.width+"px"),r.setAttribute("height",o.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(st),eh=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(st),xc=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(st),eQ=[{type:15,flags:0,unit:"px",number:3}],tQ=[{type:16,flags:0,number:50}],rQ=function(A){return A.width>A.height?new xt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new xt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},nQ=function(A){var e=A.type===iQ?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},rs="checkbox",ns="radio",iQ="password",K2=707406591,Gu=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=nQ(r),(n.type===rs||n.type===ns)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=rQ(n.bounds)),n.type){case rs:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=eQ;break;case ns:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=tQ;break}return n}return e}(st),th=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this,i=r.options[r.selectedIndex||0];return n.value=i&&i.text||"",n}return e}(st),rh=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(st),nh=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=oh(t,r.contentWindow.document.documentElement);var i=r.contentWindow.document.documentElement?mi(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):mt.TRANSPARENT,o=r.contentWindow.document.body?mi(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):mt.TRANSPARENT;n.backgroundColor=Yt(i)?Yt(o)?n.styles.backgroundColor:o:i}}catch{}return n}return e}(st),oQ=["OL","UL","MENU"],wa=function(A,e,t,r){for(var n=e.firstChild,i=void 0;n;n=i)if(i=n.nextSibling,ah(n)&&n.data.trim().length>0)t.textNodes.push(new J7(A,n,t.styles));else if(tn(n))if(uh(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return wa(A,a,t,r)});else{var o=ih(A,n);o.styles.isVisible()&&(aQ(n,o,r)?o.flags|=4:sQ(o.styles)&&(o.flags|=2),oQ.indexOf(n.tagName)!==-1&&(o.flags|=8),t.elements.push(o),n.slot,n.shadowRoot?wa(A,n.shadowRoot,o,r):!is(n)&&!sh(n)&&!os(n)&&wa(A,n,o,r))}},ih=function(A,e){return Hc(e)?new Yp(A,e):lh(e)?new qp(A,e):sh(e)?new Ah(A,e):lQ(e)?new eh(A,e):cQ(e)?new xc(A,e):uQ(e)?new Gu(A,e):os(e)?new th(A,e):is(e)?new rh(A,e):ch(e)?new nh(A,e):new st(A,e)},oh=function(A,e){var t=ih(A,e);return t.flags|=4,wa(A,e,t,t),t},aQ=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Zu(A)&&t.styles.isTransparent()},sQ=function(A){return A.isPositioned()||A.isFloating()},ah=function(A){return A.nodeType===Node.TEXT_NODE},tn=function(A){return A.nodeType===Node.ELEMENT_NODE},Ec=function(A){return tn(A)&&typeof A.style<"u"&&!ma(A)},ma=function(A){return typeof A.className=="object"},lQ=function(A){return A.tagName==="LI"},cQ=function(A){return A.tagName==="OL"},uQ=function(A){return A.tagName==="INPUT"},dQ=function(A){return A.tagName==="HTML"},sh=function(A){return A.tagName==="svg"},Zu=function(A){return A.tagName==="BODY"},lh=function(A){return A.tagName==="CANVAS"},_2=function(A){return A.tagName==="VIDEO"},Hc=function(A){return A.tagName==="IMG"},ch=function(A){return A.tagName==="IFRAME"},T2=function(A){return A.tagName==="STYLE"},fQ=function(A){return A.tagName==="SCRIPT"},is=function(A){return A.tagName==="TEXTAREA"},os=function(A){return A.tagName==="SELECT"},uh=function(A){return A.tagName==="SLOT"},N2=function(A){return A.tagName.indexOf("-")>0},gQ=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,i=!0;r!==null&&r.forEach(function(a){var s=t.counters[a.counter];s&&a.increment!==0&&(i=!1,s.length||s.push(1),s[Math.max(0,s.length-1)]+=a.increment)});var o=[];return i&&n.forEach(function(a){var s=t.counters[a.counter];o.push(a.counter),s||(s=t.counters[a.counter]=[]),s.push(a.reset)}),o},A}(),V2={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},O2={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},pQ={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},hQ={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},_r=function(A,e,t,r,n,i){return A<e||A>t?Zi(A,n,i.length>0):r.integers.reduce(function(o,a,s){for(;A>=a;)A-=a,o+=r.values[s];return o},"")+i},dh=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},yA=function(A,e,t,r,n){var i=t-e+1;return(A<0?"-":"")+(dh(Math.abs(A),i,r,function(o){return FA(Math.floor(o%i)+e)})+n)},or=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return dh(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Vr=1,bt=2,It=4,ai=8,ut=function(A,e,t,r,n,i){if(A<-9999||A>9999)return Zi(A,4,n.length>0);var o=Math.abs(A),a=n;if(o===0)return e[0]+a;for(var s=0;o>0&&s<=4;s++){var l=o%10;l===0&&SA(i,Vr)&&a!==""?a=e[l]+a:l>1||l===1&&s===0||l===1&&s===1&&SA(i,bt)||l===1&&s===1&&SA(i,It)&&A>100||l===1&&s>1&&SA(i,ai)?a=e[l]+(s>0?t[s-1]:"")+a:l===1&&s>0&&(a=t[s-1]+a),o=Math.floor(o/10)}return(A<0?r:"")+a},R2="十百千萬",j2="拾佰仟萬",P2="マイナス",X1="마이너스",Zi=function(A,e,t){var r=t?". ":"",n=t?"、":"",i=t?", ":"",o=t?" ":"";switch(e){case 0:return"•"+o;case 1:return"◦"+o;case 2:return"◾"+o;case 5:var a=yA(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return or(A,"〇一二三四五六七八九",n);case 6:return _r(A,1,3999,V2,3,r).toLowerCase();case 7:return _r(A,1,3999,V2,3,r);case 8:return yA(A,945,969,!1,r);case 9:return yA(A,97,122,!1,r);case 10:return yA(A,65,90,!1,r);case 11:return yA(A,1632,1641,!0,r);case 12:case 49:return _r(A,1,9999,O2,3,r);case 35:return _r(A,1,9999,O2,3,r).toLowerCase();case 13:return yA(A,2534,2543,!0,r);case 14:case 30:return yA(A,6112,6121,!0,r);case 15:return or(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return or(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return ut(A,"零一二三四五六七八九",R2,"負",n,bt|It|ai);case 47:return ut(A,"零壹貳參肆伍陸柒捌玖",j2,"負",n,Vr|bt|It|ai);case 42:return ut(A,"零一二三四五六七八九",R2,"负",n,bt|It|ai);case 41:return ut(A,"零壹贰叁肆伍陆柒捌玖",j2,"负",n,Vr|bt|It|ai);case 26:return ut(A,"〇一二三四五六七八九","十百千万",P2,n,0);case 25:return ut(A,"零壱弐参四伍六七八九","拾百千万",P2,n,Vr|bt|It);case 31:return ut(A,"영일이삼사오육칠팔구","십백천만",X1,i,Vr|bt|It);case 33:return ut(A,"零一二三四五六七八九","十百千萬",X1,i,0);case 32:return ut(A,"零壹貳參四五六七八九","拾百千",X1,i,Vr|bt|It);case 18:return yA(A,2406,2415,!0,r);case 20:return _r(A,1,19999,hQ,3,r);case 21:return yA(A,2790,2799,!0,r);case 22:return yA(A,2662,2671,!0,r);case 22:return _r(A,1,10999,pQ,3,r);case 23:return or(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return or(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return yA(A,3302,3311,!0,r);case 28:return or(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return or(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return yA(A,3792,3801,!0,r);case 37:return yA(A,6160,6169,!0,r);case 38:return yA(A,4160,4169,!0,r);case 39:return yA(A,2918,2927,!0,r);case 40:return yA(A,1776,1785,!0,r);case 43:return yA(A,3046,3055,!0,r);case 44:return yA(A,3174,3183,!0,r);case 45:return yA(A,3664,3673,!0,r);case 46:return yA(A,3872,3881,!0,r);case 3:default:return yA(A,48,57,!0,r)}},fh="data-html2canvas-ignore",z2=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new gQ,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=BQ(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var i=e.defaultView.pageXOffset,o=e.defaultView.pageYOffset,a=n.contentWindow,s=a.document,l=wQ(n).then(function(){return ee(r,void 0,void 0,function(){var c,u;return $A(this,function(d){switch(d.label){case 0:return this.scrolledElements.forEach(FQ),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:s.fonts&&s.fonts.ready?[4,s.fonts.ready]:[3,2];case 1:d.sent(),d.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,vQ(s)]:[3,4];case 3:d.sent(),d.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(s,u)}).then(function(){return n})]:[2,n]}})})});return s.open(),s.write(QQ(document.doctype)+"<html></html>"),yQ(this.referenceElement.ownerDocument,i,o),s.replaceChild(s.adoptNode(this.documentElement),s.documentElement),s.close(),l},A.prototype.createElementClone=function(e){if(Fc(e,2))debugger;if(lh(e))return this.createCanvasClone(e);if(_2(e))return this.createVideoClone(e);if(T2(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Hc(t)&&(Hc(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),N2(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return J1(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(i,o){return o&&typeof o.cssText=="string"?i+o.cssText:i},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var i=e.getContext("2d"),o=n.getContext("2d");if(o)if(!this.options.allowTaint&&i)o.putImageData(i.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var s=a.getContextAttributes();(s==null?void 0:s.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}o.drawImage(e,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!tn(t)||!fQ(t)&&!t.hasAttribute(fh)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!tn(t)||!T2(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,i=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;i;i=i.nextSibling)if(tn(i)&&uh(i)&&typeof i.assignedNodes=="function"){var o=i.assignedNodes();o.length&&o.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,i,r)},A.prototype.cloneNode=function(e,t){if(ah(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&tn(e)&&(Ec(e)||ma(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var i=r.getComputedStyle(e),o=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&Ec(n)&&(this.clonedReferenceElement=n),Zu(n)&&EQ(n);var s=this.counters.parse(new Q2(this.context,i)),l=this.resolvePseudoContent(e,n,o,Fi.BEFORE);N2(e)&&(t=!0),_2(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var c=this.resolvePseudoContent(e,n,a,Fi.AFTER);return c&&n.appendChild(c),this.counters.pop(s),(i&&(this.options.copyStyles||ma(e))&&!ch(e)||t)&&J1(i,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(is(e)||os(e))&&(is(n)||os(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var i=this;if(r){var o=r.content,a=t.ownerDocument;if(!(!a||!o||o==="none"||o==="-moz-alt-content"||r.display==="none")){this.counters.parse(new Q2(this.context,r));var s=new l7(this.context,r),l=a.createElement("html2canvaspseudoelement");J1(r,l),s.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var d=a.createElement("img");d.src=u.value,d.style.opacity="1",l.appendChild(d)}else if(u.type===18){if(u.name==="attr"){var g=u.values.filter(iA);g.length&&l.appendChild(a.createTextNode(e.getAttribute(g[0].value)||""))}else if(u.name==="counter"){var C=u.values.filter(Ln),v=C[0],E=C[1];if(v&&iA(v)){var p=i.counters.getCounterValue(v.value),f=E&&iA(E)?yc.parse(i.context,E.value):3;l.appendChild(a.createTextNode(Zi(p,f,!1)))}}else if(u.name==="counters"){var h=u.values.filter(Ln),v=h[0],Q=h[1],E=h[2];if(v&&iA(v)){var U=i.counters.getCounterValues(v.value),w=E&&iA(E)?yc.parse(i.context,E.value):3,m=Q&&Q.type===0?Q.value:"",x=U.map(function(Z){return Zi(Z,w,!1)}).join(m);l.appendChild(a.createTextNode(x))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(m2(s.quotes,i.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(m2(s.quotes,--i.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Lc+" "+kc;var c=n===Fi.BEFORE?" "+Lc:" "+kc;return ma(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),Fi;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Fi||(Fi={}));var BQ=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(fh,"true"),A.body.appendChild(t),t},CQ=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},vQ=function(A){return Promise.all([].slice.call(A.images,0).map(CQ))},wQ=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var i=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(i),e(A))},50)}})},mQ=["all","d","content"],J1=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);mQ.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},QQ=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},yQ=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},FQ=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},UQ=":before",xQ=":after",Lc="___html2canvas___pseudoelement_before",kc="___html2canvas___pseudoelement_after",G2=`{
    content: "" !important;
    display: none !important;
}`,EQ=function(A){HQ(A,"."+Lc+UQ+G2+`
         .`+kc+xQ+G2)},HQ=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},gh=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),LQ=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(q1(e)||SQ(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return ee(this,void 0,void 0,function(){var t,r,n,i,o=this;return $A(this,function(a){switch(a.label){case 0:return t=gh.isSameOrigin(e),r=!Y1(e)&&this._options.useCORS===!0&&RA.SUPPORT_CORS_IMAGES&&!t,n=!Y1(e)&&!t&&!q1(e)&&typeof this._options.proxy=="string"&&RA.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!Y1(e)&&!q1(e)&&!n&&!r?[2]:(i=e,n?[4,this.proxy(i)]:[3,2]);case 1:i=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(s,l){var c=new Image;c.onload=function(){return s(c)},c.onerror=l,(MQ(i)||r)&&(c.crossOrigin="anonymous"),c.src=i,c.complete===!0&&setTimeout(function(){return s(c)},500),o._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+o._options.imageTimeout+"ms) loading image")},o._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(i,o){var a=RA.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest;s.onload=function(){if(s.status===200)if(a==="text")i(s.response);else{var u=new FileReader;u.addEventListener("load",function(){return i(u.result)},!1),u.addEventListener("error",function(d){return o(d)},!1),u.readAsDataURL(s.response)}else o("Failed to proxy resource "+n+" with status code "+s.status)},s.onerror=o;var l=r.indexOf("?")>-1?"&":"?";if(s.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;s.timeout=c,s.ontimeout=function(){return o("Timed out ("+c+"ms) proxying "+n)}}s.send()})},A}(),kQ=/^data:image\/svg\+xml/i,bQ=/^data:image\/.*;base64,/i,IQ=/^data:image\/.*/i,SQ=function(A){return RA.SUPPORT_SVG_DRAWING||!DQ(A)},Y1=function(A){return IQ.test(A)},MQ=function(A){return bQ.test(A)},q1=function(A){return A.substr(0,4)==="blob"},DQ=function(A){return A.substr(-3).toLowerCase()==="svg"||kQ.test(A)},_=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Tr=function(A,e,t){return new _(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},zo=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Tr(this.start,this.startControl,e),n=Tr(this.startControl,this.endControl,e),i=Tr(this.endControl,this.end,e),o=Tr(r,n,e),a=Tr(n,i,e),s=Tr(o,a,e);return t?new A(this.start,r,o,s):new A(s,a,i,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),He=function(A){return A.type===1},KQ=function(){function A(e){var t=e.styles,r=e.bounds,n=ii(t.borderTopLeftRadius,r.width,r.height),i=n[0],o=n[1],a=ii(t.borderTopRightRadius,r.width,r.height),s=a[0],l=a[1],c=ii(t.borderBottomRightRadius,r.width,r.height),u=c[0],d=c[1],g=ii(t.borderBottomLeftRadius,r.width,r.height),C=g[0],v=g[1],E=[];E.push((i+s)/r.width),E.push((C+u)/r.width),E.push((o+v)/r.height),E.push((l+d)/r.height);var p=Math.max.apply(Math,E);p>1&&(i/=p,o/=p,s/=p,l/=p,u/=p,d/=p,C/=p,v/=p);var f=r.width-s,h=r.height-d,Q=r.width-u,U=r.height-v,w=t.borderTopWidth,m=t.borderRightWidth,x=t.borderBottomWidth,L=t.borderLeftWidth,I=aA(t.paddingTop,e.bounds.width),Z=aA(t.paddingRight,e.bounds.width),X=aA(t.paddingBottom,e.bounds.width),G=aA(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||o>0?gA(r.left+L/3,r.top+w/3,i-L/3,o-w/3,rA.TOP_LEFT):new _(r.left+L/3,r.top+w/3),this.topRightBorderDoubleOuterBox=i>0||o>0?gA(r.left+f,r.top+w/3,s-m/3,l-w/3,rA.TOP_RIGHT):new _(r.left+r.width-m/3,r.top+w/3),this.bottomRightBorderDoubleOuterBox=u>0||d>0?gA(r.left+Q,r.top+h,u-m/3,d-x/3,rA.BOTTOM_RIGHT):new _(r.left+r.width-m/3,r.top+r.height-x/3),this.bottomLeftBorderDoubleOuterBox=C>0||v>0?gA(r.left+L/3,r.top+U,C-L/3,v-x/3,rA.BOTTOM_LEFT):new _(r.left+L/3,r.top+r.height-x/3),this.topLeftBorderDoubleInnerBox=i>0||o>0?gA(r.left+L*2/3,r.top+w*2/3,i-L*2/3,o-w*2/3,rA.TOP_LEFT):new _(r.left+L*2/3,r.top+w*2/3),this.topRightBorderDoubleInnerBox=i>0||o>0?gA(r.left+f,r.top+w*2/3,s-m*2/3,l-w*2/3,rA.TOP_RIGHT):new _(r.left+r.width-m*2/3,r.top+w*2/3),this.bottomRightBorderDoubleInnerBox=u>0||d>0?gA(r.left+Q,r.top+h,u-m*2/3,d-x*2/3,rA.BOTTOM_RIGHT):new _(r.left+r.width-m*2/3,r.top+r.height-x*2/3),this.bottomLeftBorderDoubleInnerBox=C>0||v>0?gA(r.left+L*2/3,r.top+U,C-L*2/3,v-x*2/3,rA.BOTTOM_LEFT):new _(r.left+L*2/3,r.top+r.height-x*2/3),this.topLeftBorderStroke=i>0||o>0?gA(r.left+L/2,r.top+w/2,i-L/2,o-w/2,rA.TOP_LEFT):new _(r.left+L/2,r.top+w/2),this.topRightBorderStroke=i>0||o>0?gA(r.left+f,r.top+w/2,s-m/2,l-w/2,rA.TOP_RIGHT):new _(r.left+r.width-m/2,r.top+w/2),this.bottomRightBorderStroke=u>0||d>0?gA(r.left+Q,r.top+h,u-m/2,d-x/2,rA.BOTTOM_RIGHT):new _(r.left+r.width-m/2,r.top+r.height-x/2),this.bottomLeftBorderStroke=C>0||v>0?gA(r.left+L/2,r.top+U,C-L/2,v-x/2,rA.BOTTOM_LEFT):new _(r.left+L/2,r.top+r.height-x/2),this.topLeftBorderBox=i>0||o>0?gA(r.left,r.top,i,o,rA.TOP_LEFT):new _(r.left,r.top),this.topRightBorderBox=s>0||l>0?gA(r.left+f,r.top,s,l,rA.TOP_RIGHT):new _(r.left+r.width,r.top),this.bottomRightBorderBox=u>0||d>0?gA(r.left+Q,r.top+h,u,d,rA.BOTTOM_RIGHT):new _(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=C>0||v>0?gA(r.left,r.top+U,C,v,rA.BOTTOM_LEFT):new _(r.left,r.top+r.height),this.topLeftPaddingBox=i>0||o>0?gA(r.left+L,r.top+w,Math.max(0,i-L),Math.max(0,o-w),rA.TOP_LEFT):new _(r.left+L,r.top+w),this.topRightPaddingBox=s>0||l>0?gA(r.left+Math.min(f,r.width-m),r.top+w,f>r.width+m?0:Math.max(0,s-m),Math.max(0,l-w),rA.TOP_RIGHT):new _(r.left+r.width-m,r.top+w),this.bottomRightPaddingBox=u>0||d>0?gA(r.left+Math.min(Q,r.width-L),r.top+Math.min(h,r.height-x),Math.max(0,u-m),Math.max(0,d-x),rA.BOTTOM_RIGHT):new _(r.left+r.width-m,r.top+r.height-x),this.bottomLeftPaddingBox=C>0||v>0?gA(r.left+L,r.top+Math.min(U,r.height-x),Math.max(0,C-L),Math.max(0,v-x),rA.BOTTOM_LEFT):new _(r.left+L,r.top+r.height-x),this.topLeftContentBox=i>0||o>0?gA(r.left+L+G,r.top+w+I,Math.max(0,i-(L+G)),Math.max(0,o-(w+I)),rA.TOP_LEFT):new _(r.left+L+G,r.top+w+I),this.topRightContentBox=s>0||l>0?gA(r.left+Math.min(f,r.width+L+G),r.top+w+I,f>r.width+L+G?0:s-L+G,l-(w+I),rA.TOP_RIGHT):new _(r.left+r.width-(m+Z),r.top+w+I),this.bottomRightContentBox=u>0||d>0?gA(r.left+Math.min(Q,r.width-(L+G)),r.top+Math.min(h,r.height+w+I),Math.max(0,u-(m+Z)),d-(x+X),rA.BOTTOM_RIGHT):new _(r.left+r.width-(m+Z),r.top+r.height-(x+X)),this.bottomLeftContentBox=C>0||v>0?gA(r.left+L+G,r.top+U,Math.max(0,C-(L+G)),v-(x+X),rA.BOTTOM_LEFT):new _(r.left+L+G,r.top+r.height-(x+X))}return A}(),rA;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(rA||(rA={}));var gA=function(A,e,t,r,n){var i=4*((Math.sqrt(2)-1)/3),o=t*i,a=r*i,s=A+t,l=e+r;switch(n){case rA.TOP_LEFT:return new zo(new _(A,l),new _(A,l-a),new _(s-o,e),new _(s,e));case rA.TOP_RIGHT:return new zo(new _(A,e),new _(A+o,e),new _(s,l-a),new _(s,l));case rA.BOTTOM_RIGHT:return new zo(new _(s,e),new _(s,e+a),new _(A+o,l),new _(A,l));case rA.BOTTOM_LEFT:default:return new zo(new _(s,l),new _(s-o,l),new _(A,e+a),new _(A,e))}},as=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},_Q=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},ss=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},TQ=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),Go=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),NQ=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),VQ=function(A){return A.type===0},ph=function(A){return A.type===1},OQ=function(A){return A.type===2},Z2=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},RQ=function(A,e,t,r,n){return A.map(function(i,o){switch(o){case 0:return i.add(e,t);case 1:return i.add(e+r,t);case 2:return i.add(e+r,t+n);case 3:return i.add(e,t+n)}return i})},hh=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),Bh=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new KQ(this.container),this.container.styles.opacity<1&&this.effects.push(new NQ(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new TQ(r,n,i))}if(this.container.styles.overflowX!==0){var o=as(this.curves),a=ss(this.curves);Z2(o,a)?this.effects.push(new Go(o,6)):(this.effects.push(new Go(o,2)),this.effects.push(new Go(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var i=r.effects.filter(function(s){return!ph(s)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,i),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var o=as(r.curves),a=ss(r.curves);Z2(o,a)||n.unshift(new Go(a,6))}}else n.unshift.apply(n,i);r=r.parent}return n.filter(function(s){return SA(s.target,e)})},A}(),bc=function(A,e,t,r){A.container.elements.forEach(function(n){var i=SA(n.flags,4),o=SA(n.flags,2),a=new Bh(n,A);SA(n.styles.display,2048)&&r.push(a);var s=SA(n.flags,8)?[]:r;if(i||o){var l=i||n.styles.isPositioned()?t:e,c=new hh(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var u=n.styles.zIndex.order;if(u<0){var d=0;l.negativeZIndex.some(function(C,v){return u>C.element.container.styles.zIndex.order?(d=v,!1):d>0}),l.negativeZIndex.splice(d,0,c)}else if(u>0){var g=0;l.positiveZIndex.some(function(C,v){return u>=C.element.container.styles.zIndex.order?(g=v+1,!1):g>0}),l.positiveZIndex.splice(g,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else n.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);bc(a,c,i?c:t,s)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),bc(a,e,t,s);SA(n.flags,8)&&Ch(n,s)})},Ch=function(A,e){for(var t=A instanceof xc?A.start:1,r=A instanceof xc?A.reversed:!1,n=0;n<e.length;n++){var i=e[n];i.container instanceof eh&&typeof i.container.value=="number"&&i.container.value!==0&&(t=i.container.value),i.listValue=Zi(t,i.container.styles.listStyleType,!0),t+=r?-1:1}},jQ=function(A){var e=new Bh(A,null),t=new hh(e),r=[];return bc(e,t,t,r),Ch(e.container,r),t},W2=function(A,e){switch(e){case 0:return be(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return be(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return be(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return be(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},PQ=function(A,e){switch(e){case 0:return be(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return be(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return be(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return be(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},zQ=function(A,e){switch(e){case 0:return be(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return be(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return be(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return be(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},GQ=function(A,e){switch(e){case 0:return Zo(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return Zo(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return Zo(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return Zo(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},Zo=function(A,e){var t=[];return He(A)?t.push(A.subdivide(.5,!1)):t.push(A),He(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},be=function(A,e,t,r){var n=[];return He(A)?n.push(A.subdivide(.5,!1)):n.push(A),He(t)?n.push(t.subdivide(.5,!0)):n.push(t),He(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),He(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},vh=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},ls=function(A){var e=A.styles,t=A.bounds,r=aA(e.paddingLeft,t.width),n=aA(e.paddingRight,t.width),i=aA(e.paddingTop,t.width),o=aA(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,i+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+i+o))},ZQ=function(A,e){return A===0?e.bounds:A===2?ls(e):vh(e)},WQ=function(A,e){return A===0?e.bounds:A===2?ls(e):vh(e)},Al=function(A,e,t){var r=ZQ(Or(A.styles.backgroundOrigin,e),A),n=WQ(Or(A.styles.backgroundClip,e),A),i=$Q(Or(A.styles.backgroundSize,e),t,r),o=i[0],a=i[1],s=ii(Or(A.styles.backgroundPosition,e),r.width-o,r.height-a),l=XQ(Or(A.styles.backgroundRepeat,e),s,i,r,n),c=Math.round(r.left+s[0]),u=Math.round(r.top+s[1]);return[l,c,u,o,a]},Nr=function(A){return iA(A)&&A.value===un.AUTO},Wo=function(A){return typeof A=="number"},$Q=function(A,e,t){var r=e[0],n=e[1],i=e[2],o=A[0],a=A[1];if(!o)return[0,0];if(kA(o)&&a&&kA(a))return[aA(o,t.width),aA(a,t.height)];var s=Wo(i);if(iA(o)&&(o.value===un.CONTAIN||o.value===un.COVER)){if(Wo(i)){var l=t.width/t.height;return l<i!=(o.value===un.COVER)?[t.width,t.width/i]:[t.height*i,t.height]}return[t.width,t.height]}var c=Wo(r),u=Wo(n),d=c||u;if(Nr(o)&&(!a||Nr(a))){if(c&&u)return[r,n];if(!s&&!d)return[t.width,t.height];if(d&&s){var g=c?r:n*i,C=u?n:r/i;return[g,C]}var v=c?r:t.width,E=u?n:t.height;return[v,E]}if(s){var p=0,f=0;return kA(o)?p=aA(o,t.width):kA(a)&&(f=aA(a,t.height)),Nr(o)?p=f*i:(!a||Nr(a))&&(f=p/i),[p,f]}var h=null,Q=null;if(kA(o)?h=aA(o,t.width):a&&kA(a)&&(Q=aA(a,t.height)),h!==null&&(!a||Nr(a))&&(Q=c&&u?h/r*n:t.height),Q!==null&&Nr(o)&&(h=c&&u?Q/n*r:t.width),h!==null&&Q!==null)return[h,Q];throw new Error("Unable to calculate background-size for element")},Or=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},XQ=function(A,e,t,r,n){var i=e[0],o=e[1],a=t[0],s=t[1];switch(A){case 2:return[new _(Math.round(r.left),Math.round(r.top+o)),new _(Math.round(r.left+r.width),Math.round(r.top+o)),new _(Math.round(r.left+r.width),Math.round(s+r.top+o)),new _(Math.round(r.left),Math.round(s+r.top+o))];case 3:return[new _(Math.round(r.left+i),Math.round(r.top)),new _(Math.round(r.left+i+a),Math.round(r.top)),new _(Math.round(r.left+i+a),Math.round(r.height+r.top)),new _(Math.round(r.left+i),Math.round(r.height+r.top))];case 1:return[new _(Math.round(r.left+i),Math.round(r.top+o)),new _(Math.round(r.left+i+a),Math.round(r.top+o)),new _(Math.round(r.left+i+a),Math.round(r.top+o+s)),new _(Math.round(r.left+i),Math.round(r.top+o+s))];default:return[new _(Math.round(n.left),Math.round(n.top)),new _(Math.round(n.left+n.width),Math.round(n.top)),new _(Math.round(n.left+n.width),Math.round(n.height+n.top)),new _(Math.round(n.left),Math.round(n.height+n.top))]}},JQ="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",$2="Hidden Text",YQ=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),i=this._document.createElement("span"),o=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",o.appendChild(r),n.src=JQ,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",i.style.fontFamily=e,i.style.fontSize=t,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode($2)),r.appendChild(i),r.appendChild(n);var a=n.offsetTop-i.offsetTop+2;r.removeChild(i),r.appendChild(this._document.createTextNode($2)),r.style.lineHeight="normal",n.style.verticalAlign="super";var s=n.offsetTop-r.offsetTop+2;return o.removeChild(r),{baseline:a,middle:s}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),wh=function(){function A(e,t){this.context=e,this.options=t}return A}(),qQ=1e4,Ay=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new YQ(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),OQ(t)&&(this.ctx.globalAlpha=t.opacity),VQ(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),ph(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return ee(this,void 0,void 0,function(){var r;return $A(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return ee(this,void 0,void 0,function(){return $A(this,function(r){switch(r.label){case 0:if(SA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var i=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var o=zu(t.text);o.reduce(function(a,s){return i.ctx.fillText(s,a,t.bounds.top+n),a+i.ctx.measureText(s).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(o){return o==="normal"||o==="small-caps"}).join(""),n=iy(t.fontFamily).join(", "),i=ro(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,i,n].join(" "),n,i]},e.prototype.renderTextNode=function(t,r){return ee(this,void 0,void 0,function(){var n,i,o,a,s,l,c,u,d=this;return $A(this,function(g){return n=this.createFontStyle(r),i=n[0],o=n[1],a=n[2],this.ctx.font=i,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",s=this.fontMetrics.getMetrics(o,a),l=s.baseline,c=s.middle,u=r.paintOrder,t.textBounds.forEach(function(C){u.forEach(function(v){switch(v){case 0:d.ctx.fillStyle=DA(r.color),d.renderTextWithLetterSpacing(C,r.letterSpacing,l);var E=r.textShadow;E.length&&C.text.trim().length&&(E.slice(0).reverse().forEach(function(p){d.ctx.shadowColor=DA(p.color),d.ctx.shadowOffsetX=p.offsetX.number*d.options.scale,d.ctx.shadowOffsetY=p.offsetY.number*d.options.scale,d.ctx.shadowBlur=p.blur.number,d.renderTextWithLetterSpacing(C,r.letterSpacing,l)}),d.ctx.shadowColor="",d.ctx.shadowOffsetX=0,d.ctx.shadowOffsetY=0,d.ctx.shadowBlur=0),r.textDecorationLine.length&&(d.ctx.fillStyle=DA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(p){switch(p){case 1:d.ctx.fillRect(C.bounds.left,Math.round(C.bounds.top+l),C.bounds.width,1);break;case 2:d.ctx.fillRect(C.bounds.left,Math.round(C.bounds.top),C.bounds.width,1);break;case 3:d.ctx.fillRect(C.bounds.left,Math.ceil(C.bounds.top+c),C.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&C.text.trim().length&&(d.ctx.strokeStyle=DA(r.webkitTextStrokeColor),d.ctx.lineWidth=r.webkitTextStrokeWidth,d.ctx.lineJoin=window.chrome?"miter":"round",d.ctx.strokeText(C.text,C.bounds.left,C.bounds.top+l)),d.ctx.strokeStyle="",d.ctx.lineWidth=0,d.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var i=ls(t),o=ss(r);this.path(o),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return ee(this,void 0,void 0,function(){var r,n,i,o,a,s,f,f,l,c,u,d,Q,g,C,U,v,E,p,f,h,Q,U;return $A(this,function(w){switch(w.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,i=r.styles,o=0,a=r.textNodes,w.label=1;case 1:return o<a.length?(s=a[o],[4,this.renderTextNode(s,i)]):[3,4];case 2:w.sent(),w.label=3;case 3:return o++,[3,1];case 4:if(!(r instanceof Yp))return[3,8];w.label=5;case 5:return w.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return f=w.sent(),this.renderReplacedElement(r,n,f),[3,8];case 7:return w.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof qp&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof Ah))return[3,12];w.label=9;case 9:return w.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return f=w.sent(),this.renderReplacedElement(r,n,f),[3,12];case 11:return w.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof nh&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:c=w.sent(),r.width&&r.height&&this.ctx.drawImage(c,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),w.label=14;case 14:if(r instanceof Gu&&(u=Math.min(r.bounds.width,r.bounds.height),r.type===rs?r.checked&&(this.ctx.save(),this.path([new _(r.bounds.left+u*.39363,r.bounds.top+u*.79),new _(r.bounds.left+u*.16,r.bounds.top+u*.5549),new _(r.bounds.left+u*.27347,r.bounds.top+u*.44071),new _(r.bounds.left+u*.39694,r.bounds.top+u*.5649),new _(r.bounds.left+u*.72983,r.bounds.top+u*.23),new _(r.bounds.left+u*.84,r.bounds.top+u*.34085),new _(r.bounds.left+u*.39363,r.bounds.top+u*.79)]),this.ctx.fillStyle=DA(K2),this.ctx.fill(),this.ctx.restore()):r.type===ns&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+u/2,r.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=DA(K2),this.ctx.fill(),this.ctx.restore())),ey(r)&&r.value.length){switch(d=this.createFontStyle(i),Q=d[0],g=d[1],C=this.fontMetrics.getMetrics(Q,g).baseline,this.ctx.font=Q,this.ctx.fillStyle=DA(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=ry(r.styles.textAlign),U=ls(r),v=0,r.styles.textAlign){case 1:v+=U.width/2;break;case 2:v+=U.width;break}E=U.add(v,0,0,-U.height/2+1),this.ctx.save(),this.path([new _(U.left,U.top),new _(U.left+U.width,U.top),new _(U.left+U.width,U.top+U.height),new _(U.left,U.top+U.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new yi(r.value,E),i.letterSpacing,C),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!SA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(p=r.styles.listStyleImage,p.type!==0)return[3,18];f=void 0,h=p.url,w.label=15;case 15:return w.trys.push([15,17,,18]),[4,this.context.cache.match(h)];case 16:return f=w.sent(),this.ctx.drawImage(f,r.bounds.left-(f.width+10),r.bounds.top),[3,18];case 17:return w.sent(),this.context.logger.error("Error loading list-style-image "+h),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(Q=this.createFontStyle(i)[0],this.ctx.font=Q,this.ctx.fillStyle=DA(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",U=new xt(r.bounds.left,r.bounds.top+aA(r.styles.paddingTop,r.bounds.width),r.bounds.width,v2(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new yi(t.listValue,U),i.letterSpacing,v2(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),w.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return ee(this,void 0,void 0,function(){var r,n,p,i,o,p,a,s,p,l,c,p,u,d,p,g,C,p,v,E,p;return $A(this,function(f){switch(f.label){case 0:if(SA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:f.sent(),r=0,n=t.negativeZIndex,f.label=2;case 2:return r<n.length?(p=n[r],[4,this.renderStack(p)]):[3,5];case 3:f.sent(),f.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:f.sent(),i=0,o=t.nonInlineLevel,f.label=7;case 7:return i<o.length?(p=o[i],[4,this.renderNode(p)]):[3,10];case 8:f.sent(),f.label=9;case 9:return i++,[3,7];case 10:a=0,s=t.nonPositionedFloats,f.label=11;case 11:return a<s.length?(p=s[a],[4,this.renderStack(p)]):[3,14];case 12:f.sent(),f.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,f.label=15;case 15:return l<c.length?(p=c[l],[4,this.renderStack(p)]):[3,18];case 16:f.sent(),f.label=17;case 17:return l++,[3,15];case 18:u=0,d=t.inlineLevel,f.label=19;case 19:return u<d.length?(p=d[u],[4,this.renderNode(p)]):[3,22];case 20:f.sent(),f.label=21;case 21:return u++,[3,19];case 22:g=0,C=t.zeroOrAutoZIndexOrTransformedOrOpacity,f.label=23;case 23:return g<C.length?(p=C[g],[4,this.renderStack(p)]):[3,26];case 24:f.sent(),f.label=25;case 25:return g++,[3,23];case 26:v=0,E=t.positiveZIndex,f.label=27;case 27:return v<E.length?(p=E[v],[4,this.renderStack(p)]):[3,30];case 28:f.sent(),f.label=29;case 29:return v++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,i){var o=He(n)?n.start:n;i===0?r.ctx.moveTo(o.x,o.y):r.ctx.lineTo(o.x,o.y),He(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,i){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,i),this.ctx.fill(),this.ctx.translate(-n,-i)},e.prototype.resizeImage=function(t,r,n){var i;if(t.width===r&&t.height===n)return t;var o=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,a=o.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var s=a.getContext("2d");return s.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return ee(this,void 0,void 0,function(){var r,n,i,o,a,s;return $A(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(c){var u,d,g,I,D,K,G,AA,x,C,I,D,K,G,AA,v,E,p,f,h,Q,U,w,m,x,L,I,Z,X,G,AA,GA,D,K,H,S,M,j,z,lA,BA,CA;return $A(this,function(oA){switch(oA.label){case 0:if(c.type!==0)return[3,5];u=void 0,d=c.url,oA.label=1;case 1:return oA.trys.push([1,3,,4]),[4,i.context.cache.match(d)];case 2:return u=oA.sent(),[3,4];case 3:return oA.sent(),i.context.logger.error("Error loading background-image "+d),[3,4];case 4:return u&&(g=Al(t,r,[u.width,u.height,u.width/u.height]),I=g[0],D=g[1],K=g[2],G=g[3],AA=g[4],x=i.ctx.createPattern(i.resizeImage(u,G,AA),"repeat"),i.renderRepeat(I,x,D,K)),[3,6];case 5:Vw(c)?(C=Al(t,r,[null,null,null]),I=C[0],D=C[1],K=C[2],G=C[3],AA=C[4],v=Dw(c.angle,G,AA),E=v[0],p=v[1],f=v[2],h=v[3],Q=v[4],U=document.createElement("canvas"),U.width=G,U.height=AA,w=U.getContext("2d"),m=w.createLinearGradient(p,h,f,Q),B2(c.stops,E).forEach(function(EA){return m.addColorStop(EA.stop,DA(EA.color))}),w.fillStyle=m,w.fillRect(0,0,G,AA),G>0&&AA>0&&(x=i.ctx.createPattern(U,"repeat"),i.renderRepeat(I,x,D,K))):Ow(c)&&(L=Al(t,r,[null,null,null]),I=L[0],Z=L[1],X=L[2],G=L[3],AA=L[4],GA=c.position.length===0?[Ru]:c.position,D=aA(GA[0],G),K=aA(GA[GA.length-1],AA),H=Kw(c,D,K,G,AA),S=H[0],M=H[1],S>0&&M>0&&(j=i.ctx.createRadialGradient(Z+D,X+K,0,Z+D,X+K,S),B2(c.stops,S*2).forEach(function(EA){return j.addColorStop(EA.stop,DA(EA.color))}),i.path(I),i.ctx.fillStyle=j,S!==M?(z=t.bounds.left+.5*t.bounds.width,lA=t.bounds.top+.5*t.bounds.height,BA=M/S,CA=1/BA,i.ctx.save(),i.ctx.translate(z,lA),i.ctx.transform(1,0,0,BA,0,0),i.ctx.translate(-z,-lA),i.ctx.fillRect(Z,CA*(X-lA)+lA,G,AA*CA),i.ctx.restore()):i.ctx.fill())),oA.label=6;case 6:return r--,[2]}})},i=this,o=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return o<a.length?(s=a[o],[5,n(s)]):[3,4];case 2:l.sent(),l.label=3;case 3:return o++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return ee(this,void 0,void 0,function(){return $A(this,function(i){return this.path(W2(n,r)),this.ctx.fillStyle=DA(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,i){return ee(this,void 0,void 0,function(){var o,a;return $A(this,function(s){switch(s.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,i)]:[3,2];case 1:return s.sent(),[2];case 2:return o=PQ(i,n),this.path(o),this.ctx.fillStyle=DA(t),this.ctx.fill(),a=zQ(i,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return ee(this,void 0,void 0,function(){var r,n,i,o,a,s,l,c,u=this;return $A(this,function(d){switch(d.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!Yt(r.backgroundColor)||r.backgroundImage.length,i=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],o=ty(Or(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(o),this.ctx.clip(),Yt(r.backgroundColor)||(this.ctx.fillStyle=DA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:d.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(g){u.ctx.save();var C=as(t.curves),v=g.inset?0:qQ,E=RQ(C,-v+(g.inset?1:-1)*g.spread.number,(g.inset?1:-1)*g.spread.number,g.spread.number*(g.inset?-2:2),g.spread.number*(g.inset?-2:2));g.inset?(u.path(C),u.ctx.clip(),u.mask(E)):(u.mask(C),u.ctx.clip(),u.path(E)),u.ctx.shadowOffsetX=g.offsetX.number+v,u.ctx.shadowOffsetY=g.offsetY.number,u.ctx.shadowColor=DA(g.color),u.ctx.shadowBlur=g.blur.number,u.ctx.fillStyle=g.inset?DA(g.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),d.label=2;case 2:a=0,s=0,l=i,d.label=3;case 3:return s<l.length?(c=l[s],c.style!==0&&!Yt(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return d.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return d.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return d.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:d.sent(),d.label=11;case 11:a++,d.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,i,o){return ee(this,void 0,void 0,function(){var a,s,l,c,u,d,g,C,v,E,p,f,h,Q,U,w,U,w;return $A(this,function(m){return this.ctx.save(),a=GQ(i,n),s=W2(i,n),o===2&&(this.path(s),this.ctx.clip()),He(s[0])?(l=s[0].start.x,c=s[0].start.y):(l=s[0].x,c=s[0].y),He(s[1])?(u=s[1].end.x,d=s[1].end.y):(u=s[1].x,d=s[1].y),n===0||n===2?g=Math.abs(l-u):g=Math.abs(c-d),this.ctx.beginPath(),o===3?this.formatPath(a):this.formatPath(s.slice(0,2)),C=r<3?r*3:r*2,v=r<3?r*2:r,o===3&&(C=r,v=r),E=!0,g<=C*2?E=!1:g<=C*2+v?(p=g/(2*C+v),C*=p,v*=p):(f=Math.floor((g+v)/(C+v)),h=(g-f*C)/(f-1),Q=(g-(f+1)*C)/f,v=Q<=0||Math.abs(v-h)<Math.abs(v-Q)?h:Q),E&&(o===3?this.ctx.setLineDash([0,C+v]):this.ctx.setLineDash([C,v])),o===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=DA(t),this.ctx.stroke(),this.ctx.setLineDash([]),o===2&&(He(s[0])&&(U=s[3],w=s[0],this.ctx.beginPath(),this.formatPath([new _(U.end.x,U.end.y),new _(w.start.x,w.start.y)]),this.ctx.stroke()),He(s[1])&&(U=s[1],w=s[2],this.ctx.beginPath(),this.formatPath([new _(U.end.x,U.end.y),new _(w.start.x,w.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return ee(this,void 0,void 0,function(){var r;return $A(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=DA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=jQ(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(wh),ey=function(A){return A instanceof rh||A instanceof th?!0:A instanceof Gu&&A.type!==ns&&A.type!==rs},ty=function(A,e){switch(A){case 0:return as(e);case 2:return _Q(e);case 1:default:return ss(e)}},ry=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},ny=["-apple-system","system-ui"],iy=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return ny.indexOf(e)===-1}):A},oy=function(A){Ye(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return ee(this,void 0,void 0,function(){var r,n;return $A(this,function(i){switch(i.label){case 0:return r=Uc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,ay(r)];case 1:return n=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=DA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(wh),ay=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},sy=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,xo([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,xo([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,xo([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,xo([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),ly=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new sy({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new LQ(this,e)}return A.instanceCount=1,A}(),cy=function(A,e){return e===void 0&&(e={}),uy(A,e)};typeof window<"u"&&gh.setContext(window);var uy=function(A,e){return ee(void 0,void 0,void 0,function(){var t,r,n,i,o,a,s,l,c,u,d,g,C,v,E,p,f,h,Q,U,m,w,m,x,L,I,Z,X,G,AA,GA,D,K,H,S,M,j,z,lA,BA;return $A(this,function(CA){switch(CA.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(x=e.allowTaint)!==null&&x!==void 0?x:!1,imageTimeout:(L=e.imageTimeout)!==null&&L!==void 0?L:15e3,proxy:e.proxy,useCORS:(I=e.useCORS)!==null&&I!==void 0?I:!1},i=cc({logging:(Z=e.logging)!==null&&Z!==void 0?Z:!0,cache:e.cache},n),o={windowWidth:(X=e.windowWidth)!==null&&X!==void 0?X:r.innerWidth,windowHeight:(G=e.windowHeight)!==null&&G!==void 0?G:r.innerHeight,scrollX:(AA=e.scrollX)!==null&&AA!==void 0?AA:r.pageXOffset,scrollY:(GA=e.scrollY)!==null&&GA!==void 0?GA:r.pageYOffset},a=new xt(o.scrollX,o.scrollY,o.windowWidth,o.windowHeight),s=new ly(i,a),l=(D=e.foreignObjectRendering)!==null&&D!==void 0?D:!1,c={allowTaint:(K=e.allowTaint)!==null&&K!==void 0?K:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},s.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new z2(s,A,c),d=u.clonedReferenceElement,d?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return g=CA.sent(),C=Zu(d)||dQ(d)?R6(d.ownerDocument):Vs(s,d),v=C.width,E=C.height,p=C.left,f=C.top,h=dy(s,d,e.backgroundColor),Q={canvas:e.canvas,backgroundColor:h,scale:(S=(H=e.scale)!==null&&H!==void 0?H:r.devicePixelRatio)!==null&&S!==void 0?S:1,x:((M=e.x)!==null&&M!==void 0?M:0)+p,y:((j=e.y)!==null&&j!==void 0?j:0)+f,width:(z=e.width)!==null&&z!==void 0?z:Math.ceil(v),height:(lA=e.height)!==null&&lA!==void 0?lA:Math.ceil(E)},l?(s.logger.debug("Document cloned, using foreign object rendering"),m=new oy(s,Q),[4,m.render(d)]):[3,3];case 2:return U=CA.sent(),[3,5];case 3:return s.logger.debug("Document cloned, element located at "+p+","+f+" with size "+v+"x"+E+" using computed rendering"),s.logger.debug("Starting DOM parsing"),w=oh(s,d),h===w.styles.backgroundColor&&(w.styles.backgroundColor=mt.TRANSPARENT),s.logger.debug("Starting renderer for element at "+Q.x+","+Q.y+" with size "+Q.width+"x"+Q.height),m=new Ay(s,Q),[4,m.render(w)];case 4:U=CA.sent(),CA.label=5;case 5:return(!((BA=e.removeContainer)!==null&&BA!==void 0)||BA)&&(z2.destroy(g)||s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),s.logger.debug("Finished rendering"),[2,U]}})})},dy=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?mi(A,getComputedStyle(r.documentElement).backgroundColor):mt.TRANSPARENT,i=r.body?mi(A,getComputedStyle(r.body).backgroundColor):mt.TRANSPARENT,o=typeof t=="string"?mi(A,t):t===null?mt.TRANSPARENT:4294967295;return e===r.documentElement?Yt(n)?Yt(i)?o:i:n:o};const Wu=(A,e,t)=>{A&&cy(A,{scale:t,useCORS:!0}).then(function(r){r.toBlob(function(n){const i=document.createElement("a");i.href=URL.createObjectURL(n),i.download="image.png",e&&(i.download=e),i.click(),URL.revokeObjectURL(i.href)})})},fy=({pathData:A=[]})=>{var u,d;const[e,t]=k.useState(1),r=k.useMemo(()=>A.filter(g=>g.id===e)[0],[e]),[n,i]=k.useState(0),[o,a]=k.useState(Array.from({length:(u=r.path)==null?void 0:u.length}).map(()=>"#DDDDDD")),s=g=>{const C=o==null?void 0:o.map((v,E)=>E+1===n?g:v);a(C)},l=g=>g==="white"||g==="#fff"||g==="#FFF"||g==="#ffffff"||g==="#FFFFFF",c=k.useRef(null);return y.jsxs(gy,{className:"flex-1 flex column items-start gap-32 pt-24 px-16 width-100",children:[y.jsx("div",{className:"flex column items-center gap-12 width-100",children:y.jsxs("div",{className:"relative flex gap-12 mx-auto",style:{height:"260px"},children:[y.jsx("div",{className:"flex column gap-8 height-100 scrollbar-none",style:{width:"72px"},children:A.map((g,C)=>y.jsx("div",{onClick:()=>{t(g.id)},className:`flex items-center justify-center radius-6 ratio-1 shrink-0 ${e===g.id?"border-primary":"border"}`,style:{width:"72px"},children:y.jsx("img",{src:g.img,width:58})},C))}),y.jsx("div",{ref:c,className:"relative height-100 ratio-1",children:y.jsx("svg",{width:"100%",viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"radius-8 bg-gray",onClick:()=>i(0),children:(d=r.path)==null?void 0:d.map((g,C)=>y.jsx("path",{d:g,fill:o[C]||"var(--color-bg-3)",fillRule:"evenodd",clipRule:"evenodd",stroke:C+1===n?"var(--color-text-3)":o[C]!=="#DDDDDD"?o[C]:"#999",className:"transition",onClick:v=>{v.stopPropagation(),i(C+1)}},C))})}),y.jsx("div",{className:"absolute",style:{bottom:"12px",right:"12px"},onClick:()=>{i(0),Wu(c.current,"crochet-time-color-fill-res",3)},children:y.jsx(xA,{name:"download",stroke:"var(--color-text-4)",size:20})})]})}),y.jsxs(mh,{className:"flex items-center justify-center fs-12 color-gray-2 width-100 border radius-8",children:[y.jsx("input",{type:"color",onChange:g=>s==null?void 0:s(g.target.value)}),"自定义颜色"]}),y.jsx("div",{className:"flex-1 flex column width-100 pb-24",style:{overflow:"auto"},children:KC.map(g=>{var C;return y.jsxs(YA,{column:!0,children:[y.jsx(re,{title:`【${g.title}】`,type:"p",style:{margin:"12px auto"}}),y.jsx("div",{className:"grid width-100 gap-8",style:{gridTemplateColumns:"repeat(auto-fill, minmax(36px,1fr))"},children:(C=g.colors)==null?void 0:C.map(v=>y.jsx("div",{className:"flex column gap-4 items-center fs-12 color-gray-4",children:y.jsx("div",{className:`width-100 border radius-50 ratio-1 shrink-0 ${l(v.value)?"border":""}`,style:{backgroundColor:v.value},onClick:()=>s==null?void 0:s(v.value)})},v.id))})]},g.id)})})]})},gy=Te(Ao)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
    path {
      -webkit-tap-highlight-color: transparent;
    }
  }
`,mh=Te.label`
  height: 36px;
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`;function cs(A){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cs(A)}var py=/^\s+/,hy=/\s+$/;function P(A,e){if(A=A||"",e=e||{},A instanceof P)return A;if(!(this instanceof P))return new P(A,e);var t=By(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}P.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,i,o,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?i=t/12.92:i=Math.pow((t+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*o+.0722*a},setAlpha:function(e){return this._a=Qh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=J2(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=J2(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=X2(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=X2(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Y2(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return my(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(pA(this._r,255)*100)+"%",g:Math.round(pA(this._g,255)*100)+"%",b:Math.round(pA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(pA(this._r,255)*100)+"%, "+Math.round(pA(this._g,255)*100)+"%, "+Math.round(pA(this._b,255)*100)+"%)":"rgba("+Math.round(pA(this._r,255)*100)+"%, "+Math.round(pA(this._g,255)*100)+"%, "+Math.round(pA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Sy[Y2(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+q2(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var i=P(e);r="#"+q2(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,i=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return i?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return P(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(Uy,arguments)},brighten:function(){return this._applyModification(xy,arguments)},darken:function(){return this._applyModification(Ey,arguments)},desaturate:function(){return this._applyModification(Qy,arguments)},saturate:function(){return this._applyModification(yy,arguments)},greyscale:function(){return this._applyModification(Fy,arguments)},spin:function(){return this._applyModification(Hy,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(by,arguments)},complement:function(){return this._applyCombination(Ly,arguments)},monochromatic:function(){return this._applyCombination(Iy,arguments)},splitcomplement:function(){return this._applyCombination(ky,arguments)},triad:function(){return this._applyCombination(A4,[3])},tetrad:function(){return this._applyCombination(A4,[4])}};P.fromRatio=function(A,e){if(cs(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=si(A[r]));A=t}return P(A,e)};function By(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,i=null,o=!1,a=!1;return typeof A=="string"&&(A=_y(A)),cs(A)=="object"&&(dt(A.r)&&dt(A.g)&&dt(A.b)?(e=Cy(A.r,A.g,A.b),o=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):dt(A.h)&&dt(A.s)&&dt(A.v)?(r=si(A.s),n=si(A.v),e=wy(A.h,r,n),o=!0,a="hsv"):dt(A.h)&&dt(A.s)&&dt(A.l)&&(r=si(A.s),i=si(A.l),e=vy(A.h,r,i),o=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=Qh(t),{ok:o,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Cy(A,e,t){return{r:pA(A,255)*255,g:pA(e,255)*255,b:pA(t,255)*255}}function X2(A,e,t){A=pA(A,255),e=pA(e,255),t=pA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=(r+n)/2;if(r==n)i=o=0;else{var s=r-n;switch(o=a>.5?s/(2-r-n):s/(r+n),r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,l:a}}function vy(A,e,t){var r,n,i;A=pA(A,360),e=pA(e,100),t=pA(t,100);function o(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=i=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=o(s,a,A+1/3),n=o(s,a,A),i=o(s,a,A-1/3)}return{r:r*255,g:n*255,b:i*255}}function J2(A,e,t){A=pA(A,255),e=pA(e,255),t=pA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),i,o,a=r,s=r-n;if(o=r===0?0:s/r,r==n)i=0;else{switch(r){case A:i=(e-t)/s+(e<t?6:0);break;case e:i=(t-A)/s+2;break;case t:i=(A-e)/s+4;break}i/=6}return{h:i,s:o,v:a}}function wy(A,e,t){A=pA(A,360)*6,e=pA(e,100),t=pA(t,100);var r=Math.floor(A),n=A-r,i=t*(1-e),o=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,o,i,i,a,t][s],c=[a,t,t,o,i,i][s],u=[i,i,a,t,t,o][s];return{r:l*255,g:c*255,b:u*255}}function Y2(A,e,t,r){var n=[Ge(Math.round(A).toString(16)),Ge(Math.round(e).toString(16)),Ge(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function my(A,e,t,r,n){var i=[Ge(Math.round(A).toString(16)),Ge(Math.round(e).toString(16)),Ge(Math.round(t).toString(16)),Ge(yh(r))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function q2(A,e,t,r){var n=[Ge(yh(r)),Ge(Math.round(A).toString(16)),Ge(Math.round(e).toString(16)),Ge(Math.round(t).toString(16))];return n.join("")}P.equals=function(A,e){return!A||!e?!1:P(A).toRgbString()==P(e).toRgbString()};P.random=function(){return P.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Qy(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s-=e/100,t.s=Xs(t.s),P(t)}function yy(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.s+=e/100,t.s=Xs(t.s),P(t)}function Fy(A){return P(A).desaturate(100)}function Uy(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l+=e/100,t.l=Xs(t.l),P(t)}function xy(A,e){e=e===0?0:e||10;var t=P(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),P(t)}function Ey(A,e){e=e===0?0:e||10;var t=P(A).toHsl();return t.l-=e/100,t.l=Xs(t.l),P(t)}function Hy(A,e){var t=P(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,P(t)}function Ly(A){var e=P(A).toHsl();return e.h=(e.h+180)%360,P(e)}function A4(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=P(A).toHsl(),r=[P(A)],n=360/e,i=1;i<e;i++)r.push(P({h:(t.h+i*n)%360,s:t.s,l:t.l}));return r}function ky(A){var e=P(A).toHsl(),t=e.h;return[P(A),P({h:(t+72)%360,s:e.s,l:e.l}),P({h:(t+216)%360,s:e.s,l:e.l})]}function by(A,e,t){e=e||6,t=t||30;var r=P(A).toHsl(),n=360/t,i=[P(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,i.push(P(r));return i}function Iy(A,e){e=e||6;for(var t=P(A).toHsv(),r=t.h,n=t.s,i=t.v,o=[],a=1/e;e--;)o.push(P({h:r,s:n,v:i})),i=(i+a)%1;return o}P.mix=function(A,e,t){t=t===0?0:t||50;var r=P(A).toRgb(),n=P(e).toRgb(),i=t/100,o={r:(n.r-r.r)*i+r.r,g:(n.g-r.g)*i+r.g,b:(n.b-r.b)*i+r.b,a:(n.a-r.a)*i+r.a};return P(o)};P.readability=function(A,e){var t=P(A),r=P(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};P.isReadable=function(A,e,t){var r=P.readability(A,e),n,i;switch(i=!1,n=Ty(t),n.level+n.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};P.mostReadable=function(A,e,t){var r=null,n=0,i,o,a,s;t=t||{},o=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)i=P.readability(A,e[l]),i>n&&(n=i,r=P(e[l]));return P.isReadable(A,r,{level:a,size:s})||!o?r:(t.includeFallbackColors=!1,P.mostReadable(A,["#fff","#000"],t))};var Ic=P.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Sy=P.hexNames=My(Ic);function My(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function Qh(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function pA(A,e){Dy(A)&&(A="100%");var t=Ky(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function Xs(A){return Math.min(1,Math.max(0,A))}function he(A){return parseInt(A,16)}function Dy(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function Ky(A){return typeof A=="string"&&A.indexOf("%")!=-1}function Ge(A){return A.length==1?"0"+A:""+A}function si(A){return A<=1&&(A=A*100+"%"),A}function yh(A){return Math.round(parseFloat(A)*255).toString(16)}function e4(A){return he(A)/255}var Re=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function dt(A){return!!Re.CSS_UNIT.exec(A)}function _y(A){A=A.replace(py,"").replace(hy,"").toLowerCase();var e=!1;if(Ic[A])A=Ic[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Re.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Re.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Re.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Re.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Re.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Re.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Re.hex8.exec(A))?{r:he(t[1]),g:he(t[2]),b:he(t[3]),a:e4(t[4]),format:e?"name":"hex8"}:(t=Re.hex6.exec(A))?{r:he(t[1]),g:he(t[2]),b:he(t[3]),format:e?"name":"hex"}:(t=Re.hex4.exec(A))?{r:he(t[1]+""+t[1]),g:he(t[2]+""+t[2]),b:he(t[3]+""+t[3]),a:e4(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Re.hex3.exec(A))?{r:he(t[1]+""+t[1]),g:he(t[2]+""+t[2]),b:he(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Ty(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}const Sc=({mainTitle:A,mainInfo:e,subTitle:t})=>y.jsxs(YA,{column:!0,gap:8,children:[y.jsx(re,{title:A,type:"h3",info:e}),y.jsx(re,{title:t,type:"p",className:"color-gray-4"})]}),Ny=({align:A="right",onClick:e,children:t})=>y.jsxs(Vy,{className:"relative",children:[t,y.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:A==="left"?"0px":"100%"},children:y.jsx(xA,{name:"close-fill",fill:"var(--color-red-6)"})})]}),Vy=Te.div`
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
`,Oy="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg",$o=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],Ry=({})=>{const[A,e]=k.useState(""),t=k.useRef(null),r=k.useRef(null),[n,i]=k.useState(2),[o,a]=k.useState([]),[s,l]=k.useState({w:200,h:200,ratio:1});k.useEffect(()=>{if(!t.current)return;const D=new Image;D.onload=function(){var K=this.width,H=this.height;l({w:K,h:H,ratio:K/H})},D.src=A},[A,t]),k.useEffect(()=>{if(!r.current)return;const D=new ResizeObserver(K=>{for(const H of K)i(H.contentRect.width/H.contentRect.height)});return D.observe(r.current),console.log("设置了图片wrap尺寸"),()=>D.disconnect()},[r,A]);const c=()=>{if(o.length>=0)if(o.length<8){let D="";window.EyeDropper||E(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(H=>{D=H.sRGBHex,a([...o,{id:`${D}`,value:D}])}).catch(()=>{E(!0,"出错了～")})}else E(!0,"已达上限～长按删除后重试");else E(!0,"请先上传图片～")},u=D=>{const K=o.filter(H=>H.id!==D);a(K)},[d,g]=k.useState(!1),[C,v]=k.useState(""),E=(D,K)=>{v(K),g(D);const H=setTimeout(()=>{g(!1),clearTimeout(H)},1e3)},p=D=>{const K=P(`rgb(${D[0]},${D[1]},${D[2]})`).toHsv();return K.s<=x/100||K.v<=x/100};function f(D,K,H=32){if(p(D))return!0;const S=D[0]-K[0],M=D[1]-K[1],j=D[2]-K[2];return Math.sqrt(S*S+M*M+j*j)<H}const h=D=>{const K=document.createElement("canvas"),H=K.getContext("2d");return K.width=D.width,K.height=D.height,H==null||H.drawImage(D,0,0,D.width,D.height),H==null?void 0:H.getImageData(0,0,D.width,D.height).data},Q=D=>{const K=h(D);if(!K)return;const H=new Map;for(let j=0;j<K.length;j+=4){const lA=[K[j],K[j+1],K[j+2]].join(",");H.has(lA)?H.set(lA,H.get(lA)+1):H.set(lA,1)}let S=Array.from(H.entries()).sort((j,z)=>z[1]-j[1]).map(j=>j[0].split(",").map(z=>parseInt(z)));const M=[];for(const j of S)if(!M.some(z=>f(j,z,32))&&!p(j)&&M.push(j),M.length>=X)break;return M},[U,w]=k.useState(!1),m=D=>{const K=new Image;K.src=D,K.onload=()=>{var S;const H=((S=Q(K))==null?void 0:S.map(M=>({id:M[0]+M[1]+M[2],value:`#${P(`rgb(${M[0]},${M[1]},${M[2]})`).toHex()}`})))??[];a(H),w(!1)}},[x,L]=k.useState(10),[I,Z]=k.useState(!0);k.useEffect(()=>{x>0?Z(!0):Z(!1)},[x]),k.useEffect(()=>{L(I?x||10:0)},[I]);const[X,G]=k.useState(6);k.useEffect(()=>{m(A)},[x,I,X]);const[AA,GA]=k.useState(["","","","","",""]);return y.jsxs(Ao,{className:"flex-1 flex column items-start gap-32 pt-32 px-24 pb-24 width-100",children:[y.jsxs(YA,{column:!0,gap:24,children:[y.jsx(Sc,{mainTitle:"Step 01: 上传文件",subTitle:"点击或拖拽来上传图片，以像素为单位对颜色计数"}),y.jsx("div",{className:"width-100",style:{height:"240px"},children:y.jsx(G5,{fileType:"image/*",onUpload:D=>{e(D),a([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:A&&y.jsx("div",{ref:r,className:"flex items-center justify-center width-100 height-100",children:y.jsx("img",{ref:t,src:A,className:`radius-8 ${s.ratio<n?"height-100":"width-100"}`})})})})]}),y.jsxs("div",{className:"flex column width-100",children:[y.jsxs("div",{className:"width-100 flex column",children:[y.jsx(re,{title:"Step 02: 取色配置",type:"h3"}),y.jsx(re,{title:y.jsxs(y.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",y.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",y.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(o==null?void 0:o.length)!==0&&y.jsxs("div",{className:"flex gap-24 mt-12",children:[y.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[y.jsx(AC,{text:"过滤中性色",checked:I,onChange:()=>{Z(!I)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),y.jsx(ec,{max:35,min:0,step:5,value:x,onChange:D=>L(Number(D))})]}),y.jsx(wC,{title:"数量",width:124,data:[{value:"1",label:"4"},{value:"2",label:"6"},{value:"3",label:"8"}],selected:"2",onChange:D=>{G(Number(D.label))}})]})]}),y.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[o.length===0&&A&&y.jsx("div",{className:"absolute",style:{zIndex:1},children:U?y.jsx(P5,{}):y.jsx(cn,{text:"提取颜色",type:"background",status:"primary",onClick:()=>{m(A),w(!0)}})}),o.length===0?$o==null?void 0:$o.map((D,K)=>y.jsxs(t4,{className:"flex column items-center relative justify-center gap-4 disabled",children:[y.jsx(Nd,{value:D.value,size:36,border:!0}),y.jsx("div",{className:"fs-10 color-gray-4",children:D.value})]},K)):o==null?void 0:o.map((D,K)=>y.jsx(Ny,{onClick:()=>u(D.id),children:y.jsxs(t4,{className:"flex column items-center relative justify-center gap-4",children:[y.jsx(Nd,{value:D.value,size:36,border:!0,onChange:H=>{const S=o.map(M=>({id:M.id,value:M.id==D.id?`#${P(H).toHex()}`:M.value}));a(S)}}),y.jsx("div",{className:"fs-10 color-gray-4",children:D.value})]},K)},K)),o.length!==0&&o.length<8&&y.jsxs(jy,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>c(),children:[y.jsx(TC,{}),y.jsx(wt,{content:"点击吸取颜色",theme:"dark"})]})]})]}),y.jsxs(YA,{column:!0,gap:8,children:[y.jsx(re,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),y.jsx(re,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(o==null?void 0:o.length)===0?y.jsx(r4,{className:"grid mx-32 gap-24 pb-24 disabled",length:6,children:Array.from({length:6}).map((D,K)=>y.jsxs("div",{className:"flex column items-center gap-12",children:[y.jsxs(n4,{className:`StyleColorCardBox relative p-24 flex gap-4 width-100 border color-card card-${K} column`,width:s.w,height:s.h,ratio:s.ratio,children:[y.jsx("div",{className:"color-img",children:y.jsx("img",{src:Oy})}),y.jsx("div",{className:"color-list grid gap-4",children:(o==null?void 0:o.length)===0?$o.map(H=>y.jsxs("div",{className:"color-item flex column items-center gap-4",children:[y.jsx("div",{style:{background:H.value},className:"width-100 flex-1"}),y.jsx("p",{children:H.value})]},H.id)):o.map(H=>y.jsxs("div",{className:"color-item flex column items-center gap-4",children:[y.jsx("div",{style:{background:H.value},className:"width-100 flex-1"}),y.jsx("p",{children:H.value})]},H.id))})]}),y.jsx(cn,{type:"background",className:"width-100",text:"下载色卡",icon:y.jsx(xA,{name:"download"})})]},K))}):y.jsx(r4,{className:"grid mx-32 gap-24 pb-24",length:o.length,children:Array.from({length:6}).map((D,K)=>y.jsxs("div",{className:"flex column items-center gap-12",children:[y.jsxs(n4,{className:`relative p-24 flex gap-4 width-100 border color-card card-${K} ${s.ratio<1?"":"column"}`,width:s.w,height:s.h,ratio:s.ratio,children:[y.jsx("div",{className:"color-img",children:y.jsx("img",{src:A})}),y.jsx("div",{className:"color-list grid gap-4",children:o.map(H=>y.jsxs("div",{className:"color-item flex column items-center gap-4",children:[y.jsx("div",{style:{background:H.value},className:"width-100 flex-1"}),y.jsx("p",{children:H.value})]},H.id))})]}),y.jsxs("div",{className:"width-100 flex gap-12",children:[y.jsx(z5,{placeholder:"自定义色卡名称",value:AA[K],onChange:H=>{const S=AA.map((M,j)=>j===K?String(H):M);GA(S)},className:"flex-1"}),y.jsx(cn,{type:"background",className:"flex-1",text:"下载色卡",icon:y.jsx(xA,{name:"download"}),onClick:()=>{const H=document.querySelectorAll(".color-card");Wu(H[K],AA[K],4)}})]})]},K))}),y.jsx(hC,{show:d,text:C})]})},t4=Te.div`
  width: 48px;
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,jy=Te.div`
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
`,r4=Te.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,n4=Te.div`
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
`,Py=({})=>{const A=k.useRef(null),[e,t]=k.useState(12),[r,n]=k.useState(12),[i,o]=k.useState(16),a=k.useMemo(()=>Array.from({length:e}).map((m,x)=>Array.from({length:r}).map((L,I)=>({key:`${x}-${I}`,value:"transparent"}))),[e,r]),[s,l]=k.useState(a);k.useEffect(()=>{const m=Array.from({length:e}).map((x,L)=>Array.from({length:r}).map((I,Z)=>({key:`${L}-${Z}`,value:s[L]&&s[L][Z]?s[L][Z].value:"transparent"})));l(m)},[e,r]);const[c,u]=k.useState(""),d=k.useRef(null),g=k.useRef(null),[C,v]=k.useState(2),[E,p]=k.useState({w:200,h:200,ratio:1});k.useEffect(()=>{if(!d.current)return;const m=d.current.getBoundingClientRect();p({w:m.width,h:m.height,ratio:m.width/m.height})},[c,d]),k.useEffect(()=>{if(!g.current)return;const m=new ResizeObserver(x=>{for(const L of x)v(L.contentRect.width/L.contentRect.height)});return m.observe(g.current),()=>m.disconnect()});const[f,h]=k.useState(""),[Q,U]=k.useState(!1),w=m=>{const x=s.map(L=>L.map(I=>I.key===m?{key:I.key,value:f}:I));l(x)};return y.jsxs(zy,{className:"flex-1 flex column items-start gap-32 py-24 px-16 width-100 height-100 scrollbar-none",children:[y.jsxs("div",{className:"flex gap-12 width-100 justify-end",children:[y.jsx("div",{style:{width:"20px",height:"20px"},onClick:()=>{if(i>12){let m=i-4;o(m)}},children:y.jsx(NC,{fill:"#999",size:20})}),y.jsx("div",{style:{width:"20px",height:"20px"},onClick:()=>{if(i<32){let m=i+4;o(m)}},children:y.jsx(xA,{name:"add",stroke:"#999",strokeWidth:2,size:20})})]}),y.jsx("div",{className:"scrollbar-none",style:{width:"calc(100vw - 32px - 20px)",maxHeight:"calc(100vh - 64px - 48px - 76px - 140px - 37px - 72px - 26px)",minHeight:"192px",maxWidth:"800px",margin:"0 auto",overflow:"auto"},children:y.jsx("div",{ref:A,className:"flex flex-wrap",style:{width:`${e*i}px`,height:`${r*i}px`,margin:"auto",background:c&&Q?`url(${c}) center center/contain no-repeat`:"unset"},children:Array.from({length:e}).map((m,x)=>y.jsx("div",{className:"flex column",style:{flexDirection:"column-reverse"},children:Array.from({length:r}).map((L,I)=>y.jsx(Gy,{className:`relative transition  ${x===0?"first-column":""} ${I===0?"last-row":""}`,style:{width:`${i}px`,height:`${i}px`,backgroundColor:s[x]&&s[x][I]?s[x][I].value:"transparent"},onTouchStart:()=>{w(`${x}-${I}`)}},I))},x))})}),y.jsx(mh,{className:"flex items-center justify-center fs-12 color-gray-2 width-100 border radius-6 shrink-0",style:{background:f},children:y.jsx("input",{type:"color",onChange:m=>h==null?void 0:h(m.target.value)})}),y.jsxs(YA,{column:!0,gap:8,children:[y.jsx(Sc,{mainTitle:"设置画布大小",mainInfo:"画布大小范围为 4x4 - 48x48"}),y.jsxs(YA,{gap:16,bothCenter:!0,children:[y.jsx(re,{title:"宽:",type:"p"}),y.jsx(ec,{value:e,onChange:(m,x)=>x>=4&&x<=48&&t(x)}),y.jsx(re,{title:"高:",type:"p"}),y.jsx(ec,{value:r,onChange:(m,x)=>x>=4&&x<=48&&n(x)})]})]}),y.jsxs(YA,{column:!0,gap:8,children:[y.jsx(Sc,{mainTitle:"导入参考图"}),y.jsx(xC,{checked:Q,onChange:()=>U(!Q)}),y.jsx(YA,{gap:16,bothCenter:!0,className:"overflow-hidden",style:{height:Q?"100px":"0px"},children:y.jsx(G5,{fileType:"image/*",height:"100px",onUpload:m=>u(m),desc:"点击上传图片或将图片拖拽于此",className:"radius-12",width:"100%",children:c&&y.jsx("div",{ref:g,className:"flex items-center justify-center width-100 height-100",children:y.jsx("img",{ref:d,src:c,className:`radius-8 ${E.ratio<C?"height-100":"width-100"}`})})})})]}),y.jsxs(YA,{justify:"center",gap:12,children:[y.jsx(cn,{text:"清空画布",onClick:()=>l(a)}),y.jsx(cn,{text:"立即下载",type:"background",className:"flex-1",style:{maxWidth:"200px"},onClick:()=>{Wu(A.current,"pixel-res",3)}})]})]})},zy=Te(Ao)`
  @media screen and (max-width: 800px) {
    .land-uploader-desc {
      font-size: 12px;
    }
  }
`,Gy=Te.div`
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
`;function Zy(){const[A,e]=k.useState(1),[t,r]=k.useState(1),[n,i]=k.useState(E1);return k.useEffect(()=>{(document.querySelector("#root")||document.body).getBoundingClientRect().width>800?i(E1.map(s=>({key:s.key,title:s.title,dropData:s.dropData,open:!1}))):i(E1)},[]),y.jsxs(YA,{column:!0,className:"height-100",children:[y.jsx(Wy,{logo:y.jsx(_C,{}),menuProps:{data:n,active:A,onChange:o=>{r(o.key),e(o.key)},onDropChange:(o,a)=>{r(o.key),e(a.key)},dropProps:{direction:"column",active:t},theme:{lineColor:"inherit",activeBg:"var(--color-bg-2)"}},align:"end",className:"relative"}),t===1&&y.jsx(Xf,{data:kC}),t===2&&y.jsx(Xf,{data:bC}),t===11&&y.jsx(S1,{data:IC}),t===12&&y.jsx(S1,{data:SC}),t===21&&y.jsx(Ry,{}),t===22&&y.jsx(fy,{pathData:DC}),t===23&&y.jsx(Py,{}),t===31&&y.jsx(S1,{data:MC})]})}const Wy=Te(uC)`
  /* &.kjXciE {
    z-index: 100;
  }
  @media screen and (max-width: 800px) {
    .land-menu {
      display: none;
    }
    .jdrwKk .land-menu {
      display: flex;
    }
  } */
`;el.createRoot(document.getElementById("root")).render(y.jsx(Se.StrictMode,{children:y.jsx(Zy,{})}));
