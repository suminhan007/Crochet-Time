(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function av(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var Rg={exports:{}},xs={},Og={exports:{}},AA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),sv=Symbol.for("react.portal"),lv=Symbol.for("react.fragment"),cv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),dv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),pv=Symbol.for("react.suspense"),hv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),v1=Symbol.iterator;function vv(A){return A===null||typeof A!="object"?null:(A=v1&&A[v1]||A["@@iterator"],typeof A=="function"?A:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,Gg={};function Vn(A,e,t){this.props=A,this.context=e,this.refs=Gg,this.updater=t||Vg}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(A,e){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,e,"setState")};Vn.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function jg(){}jg.prototype=Vn.prototype;function Ad(A,e,t){this.props=A,this.context=e,this.refs=Gg,this.updater=t||Vg}var ed=Ad.prototype=new jg;ed.constructor=Ad;Pg(ed,Vn.prototype);ed.isPureReactComponent=!0;var w1=Array.isArray,zg=Object.prototype.hasOwnProperty,td={current:null},Wg={key:!0,ref:!0,__self:!0,__source:!0};function $g(A,e,t){var r,n={},o=null,i=null;if(e!=null)for(r in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(o=""+e.key),e)zg.call(e,r)&&!Wg.hasOwnProperty(r)&&(n[r]=e[r]);var a=arguments.length-2;if(a===1)n.children=t;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];n.children=s}if(A&&A.defaultProps)for(r in a=A.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:si,type:A,key:o,ref:i,props:n,_owner:td.current}}function wv(A,e){return{$$typeof:si,type:A.type,key:e,ref:A.ref,props:A.props,_owner:A._owner}}function rd(A){return typeof A=="object"&&A!==null&&A.$$typeof===si}function mv(A){var e={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(t){return e[t]})}var m1=/\/+/g;function wl(A,e){return typeof A=="object"&&A!==null&&A.key!=null?mv(""+A.key):e.toString(36)}function la(A,e,t,r,n){var o=typeof A;(o==="undefined"||o==="boolean")&&(A=null);var i=!1;if(A===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(A.$$typeof){case si:case sv:i=!0}}if(i)return i=A,n=n(i),A=r===""?"."+wl(i,0):r,w1(n)?(t="",A!=null&&(t=A.replace(m1,"$&/")+"/"),la(n,e,t,"",function(l){return l})):n!=null&&(rd(n)&&(n=wv(n,t+(!n.key||i&&i.key===n.key?"":(""+n.key).replace(m1,"$&/")+"/")+A)),e.push(n)),1;if(i=0,r=r===""?".":r+":",w1(A))for(var a=0;a<A.length;a++){o=A[a];var s=r+wl(o,a);i+=la(o,e,t,s,n)}else if(s=vv(A),typeof s=="function")for(A=s.call(A),a=0;!(o=A.next()).done;)o=o.value,s=r+wl(o,a++),i+=la(o,e,t,s,n);else if(o==="object")throw e=String(A),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function vi(A,e,t){if(A==null)return A;var r=[],n=0;return la(A,r,"","",function(o){return e.call(t,o,n++)}),r}function Cv(A){if(A._status===-1){var e=A._result;e=e(),e.then(function(t){(A._status===0||A._status===-1)&&(A._status=1,A._result=t)},function(t){(A._status===0||A._status===-1)&&(A._status=2,A._result=t)}),A._status===-1&&(A._status=0,A._result=e)}if(A._status===1)return A._result.default;throw A._result}var ce={current:null},ca={transition:null},Qv={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:ca,ReactCurrentOwner:td};AA.Children={map:vi,forEach:function(A,e,t){vi(A,function(){e.apply(this,arguments)},t)},count:function(A){var e=0;return vi(A,function(){e++}),e},toArray:function(A){return vi(A,function(e){return e})||[]},only:function(A){if(!rd(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};AA.Component=Vn;AA.Fragment=lv;AA.Profiler=uv;AA.PureComponent=Ad;AA.StrictMode=cv;AA.Suspense=pv;AA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;AA.cloneElement=function(A,e,t){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var r=Pg({},A.props),n=A.key,o=A.ref,i=A._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,i=td.current),e.key!==void 0&&(n=""+e.key),A.type&&A.type.defaultProps)var a=A.type.defaultProps;for(s in e)zg.call(e,s)&&!Wg.hasOwnProperty(s)&&(r[s]=e[s]===void 0&&a!==void 0?a[s]:e[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:si,type:A.type,key:n,ref:o,props:r,_owner:i}};AA.createContext=function(A){return A={$$typeof:fv,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:dv,_context:A},A.Consumer=A};AA.createElement=$g;AA.createFactory=function(A){var e=$g.bind(null,A);return e.type=A,e};AA.createRef=function(){return{current:null}};AA.forwardRef=function(A){return{$$typeof:gv,render:A}};AA.isValidElement=rd;AA.lazy=function(A){return{$$typeof:Bv,_payload:{_status:-1,_result:A},_init:Cv}};AA.memo=function(A,e){return{$$typeof:hv,type:A,compare:e===void 0?null:e}};AA.startTransition=function(A){var e=ca.transition;ca.transition={};try{A()}finally{ca.transition=e}};AA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};AA.useCallback=function(A,e){return ce.current.useCallback(A,e)};AA.useContext=function(A){return ce.current.useContext(A)};AA.useDebugValue=function(){};AA.useDeferredValue=function(A){return ce.current.useDeferredValue(A)};AA.useEffect=function(A,e){return ce.current.useEffect(A,e)};AA.useId=function(){return ce.current.useId()};AA.useImperativeHandle=function(A,e,t){return ce.current.useImperativeHandle(A,e,t)};AA.useInsertionEffect=function(A,e){return ce.current.useInsertionEffect(A,e)};AA.useLayoutEffect=function(A,e){return ce.current.useLayoutEffect(A,e)};AA.useMemo=function(A,e){return ce.current.useMemo(A,e)};AA.useReducer=function(A,e,t){return ce.current.useReducer(A,e,t)};AA.useRef=function(A){return ce.current.useRef(A)};AA.useState=function(A){return ce.current.useState(A)};AA.useSyncExternalStore=function(A,e,t){return ce.current.useSyncExternalStore(A,e,t)};AA.useTransition=function(){return ce.current.useTransition()};AA.version="18.2.0";Og.exports=AA;var L=Og.exports;const Pe=av(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=L,Fv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),xv=Object.prototype.hasOwnProperty,Ev=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bv={key:!0,ref:!0,__self:!0,__source:!0};function Xg(A,e,t){var r,n={},o=null,i=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)xv.call(e,r)&&!bv.hasOwnProperty(r)&&(n[r]=e[r]);if(A&&A.defaultProps)for(r in e=A.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:Fv,type:A,key:o,ref:i,props:n,_owner:Ev.current}}xs.Fragment=Uv;xs.jsx=Xg;xs.jsxs=Xg;Rg.exports=xs;var U=Rg.exports,Qc={},Yg={exports:{}},Ie={},Jg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function e(I,_){var G=I.length;I.push(_);A:for(;0<G;){var $=G-1>>>1,W=I[$];if(0<n(W,_))I[$]=_,I[G]=W,G=$;else break A}}function t(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var _=I[0],G=I.pop();if(G!==_){I[0]=G;A:for(var $=0,W=I.length,UA=W>>>1;$<UA;){var uA=2*($+1)-1,nA=I[uA],sA=uA+1,gA=I[sA];if(0>n(nA,G))sA<W&&0>n(gA,nA)?(I[$]=gA,I[sA]=G,$=sA):(I[$]=nA,I[uA]=G,$=uA);else if(sA<W&&0>n(gA,G))I[$]=gA,I[sA]=G,$=sA;else break A}}return _}function n(I,_){var G=I.sortIndex-_.sortIndex;return G!==0?G:I.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;A.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();A.unstable_now=function(){return i.now()-a}}var s=[],l=[],c=1,u=null,f=3,p=!1,B=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var _=t(l);_!==null;){if(_.callback===null)r(l);else if(_.startTime<=I)r(l),_.sortIndex=_.expirationTime,e(s,_);else break;_=t(l)}}function C(I){if(w=!1,h(I),!B)if(t(s)!==null)B=!0,eA(y);else{var _=t(l);_!==null&&tA(C,_.startTime-I)}}function y(I,_){B=!1,w&&(w=!1,g(E),E=-1),p=!0;var G=f;try{for(h(_),u=t(s);u!==null&&(!(u.expirationTime>_)||I&&!M());){var $=u.callback;if(typeof $=="function"){u.callback=null,f=u.priorityLevel;var W=$(u.expirationTime<=_);_=A.unstable_now(),typeof W=="function"?u.callback=W:u===t(s)&&r(s),h(_)}else r(s);u=t(s)}if(u!==null)var UA=!0;else{var uA=t(l);uA!==null&&tA(C,uA.startTime-_),UA=!1}return UA}finally{u=null,f=G,p=!1}}var m=!1,Q=null,E=-1,H=5,b=-1;function M(){return!(A.unstable_now()-b<H)}function S(){if(Q!==null){var I=A.unstable_now();b=I;var _=!0;try{_=Q(!0,I)}finally{_?P():(m=!1,Q=null)}}else m=!1}var P;if(typeof d=="function")P=function(){d(S)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,Z=z.port2;z.port1.onmessage=S,P=function(){Z.postMessage(null)}}else P=function(){x(S,0)};function eA(I){Q=I,m||(m=!0,P())}function tA(I,_){E=x(function(){I(A.unstable_now())},_)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(I){I.callback=null},A.unstable_continueExecution=function(){B||p||(B=!0,eA(y))},A.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},A.unstable_getCurrentPriorityLevel=function(){return f},A.unstable_getFirstCallbackNode=function(){return t(s)},A.unstable_next=function(I){switch(f){case 1:case 2:case 3:var _=3;break;default:_=f}var G=f;f=_;try{return I()}finally{f=G}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(I,_){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=f;f=I;try{return _()}finally{f=G}},A.unstable_scheduleCallback=function(I,_,G){var $=A.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?$+G:$):G=$,I){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=G+W,I={id:c++,callback:_,priorityLevel:I,startTime:G,expirationTime:W,sortIndex:-1},G>$?(I.sortIndex=G,e(l,I),t(s)===null&&I===t(l)&&(w?(g(E),E=-1):w=!0,tA(C,G-$))):(I.sortIndex=W,e(s,I),B||p||(B=!0,eA(y))),I},A.unstable_shouldYield=M,A.unstable_wrapCallback=function(I){var _=f;return function(){var G=f;f=_;try{return I.apply(this,arguments)}finally{f=G}}}})(Zg);Jg.exports=Zg;var Hv=Jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=L,ke=Hv;function k(A){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+A,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,Ro={};function Or(A,e){yn(A,e),yn(A+"Capture",e)}function yn(A,e){for(Ro[A]=e,A=0;A<e.length;A++)Ap.add(e[A])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yc=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C1={},Q1={};function Iv(A){return yc.call(Q1,A)?!0:yc.call(C1,A)?!1:kv.test(A)?Q1[A]=!0:(C1[A]=!0,!1)}function Lv(A,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Sv(A,e,t,r){if(e===null||typeof e>"u"||Lv(A,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ue(A,e,t,r,n,o,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=n,this.mustUseProperty=t,this.propertyName=A,this.type=e,this.sanitizeURL=o,this.removeEmptyString=i}var qA={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){qA[A]=new ue(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var e=A[0];qA[e]=new ue(e,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){qA[A]=new ue(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){qA[A]=new ue(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){qA[A]=new ue(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){qA[A]=new ue(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){qA[A]=new ue(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){qA[A]=new ue(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){qA[A]=new ue(A,5,!1,A.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function od(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var e=A.replace(nd,od);qA[e]=new ue(e,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var e=A.replace(nd,od);qA[e]=new ue(e,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var e=A.replace(nd,od);qA[e]=new ue(e,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){qA[A]=new ue(A,1,!1,A.toLowerCase(),null,!1,!1)});qA.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){qA[A]=new ue(A,1,!1,A.toLowerCase(),null,!0,!0)});function id(A,e,t,r){var n=qA.hasOwnProperty(e)?qA[e]:null;(n!==null?n.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sv(e,t,n,r)&&(t=null),r||n===null?Iv(e)&&(t===null?A.removeAttribute(e):A.setAttribute(e,""+t)):n.mustUseProperty?A[n.propertyName]=t===null?n.type===3?!1:"":t:(e=n.attributeName,r=n.attributeNamespace,t===null?A.removeAttribute(e):(n=n.type,t=n===3||n===4&&t===!0?"":""+t,r?A.setAttributeNS(r,e,t):A.setAttribute(e,t))))}var Nt=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),An=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),ep=Symbol.for("react.provider"),tp=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),ld=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),rp=Symbol.for("react.offscreen"),y1=Symbol.iterator;function $n(A){return A===null||typeof A!="object"?null:(A=y1&&A[y1]||A["@@iterator"],typeof A=="function"?A:null)}var bA=Object.assign,ml;function ao(A){if(ml===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);ml=e&&e[1]||""}return`
`+ml+A}var Cl=!1;function Ql(A,e){if(!A||Cl)return"";Cl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(A,[],e)}else{try{e.call()}catch(l){r=l}A.call(e.prototype)}else{try{throw Error()}catch(l){r=l}A()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var n=l.stack.split(`
`),o=r.stack.split(`
`),i=n.length-1,a=o.length-1;1<=i&&0<=a&&n[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(n[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||n[i]!==o[a]){var s=`
`+n[i].replace(" at new "," at ");return A.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",A.displayName)),s}while(1<=i&&0<=a);break}}}finally{Cl=!1,Error.prepareStackTrace=t}return(A=A?A.displayName||A.name:"")?ao(A):""}function Mv(A){switch(A.tag){case 5:return ao(A.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return A=Ql(A.type,!1),A;case 11:return A=Ql(A.type.render,!1),A;case 1:return A=Ql(A.type,!0),A;default:return""}}function Ec(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case en:return"Fragment";case An:return"Portal";case Fc:return"Profiler";case ad:return"StrictMode";case Uc:return"Suspense";case xc:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case tp:return(A.displayName||"Context")+".Consumer";case ep:return(A._context.displayName||"Context")+".Provider";case sd:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case ld:return e=A.displayName||null,e!==null?e:Ec(A.type)||"Memo";case zt:e=A._payload,A=A._init;try{return Ec(A(e))}catch{}}return null}function _v(A){var e=A.type;switch(A.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=e.render,A=A.displayName||A.name||"",e.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function np(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dv(A){var e=np(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),r=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,o=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function mi(A){A._valueTracker||(A._valueTracker=Dv(A))}function op(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return A&&(r=np(A)?A.checked?"true":"false":A.value),A=r,A!==t?(e.setValue(A),!0):!1}function Da(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function bc(A,e){var t=e.checked;return bA({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??A._wrapperState.initialChecked})}function F1(A,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=dr(e.value!=null?e.value:t),A._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ip(A,e){e=e.checked,e!=null&&id(A,"checked",e,!1)}function Hc(A,e){ip(A,e);var t=dr(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&A.value===""||A.value!=t)&&(A.value=""+t):A.value!==""+t&&(A.value=""+t);else if(r==="submit"||r==="reset"){A.removeAttribute("value");return}e.hasOwnProperty("value")?kc(A,e.type,t):e.hasOwnProperty("defaultValue")&&kc(A,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(A.defaultChecked=!!e.defaultChecked)}function U1(A,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+A._wrapperState.initialValue,t||e===A.value||(A.value=e),A.defaultValue=e}t=A.name,t!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,t!==""&&(A.name=t)}function kc(A,e,t){(e!=="number"||Da(A.ownerDocument)!==A)&&(t==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+t&&(A.defaultValue=""+t))}var so=Array.isArray;function hn(A,e,t,r){if(A=A.options,e){e={};for(var n=0;n<t.length;n++)e["$"+t[n]]=!0;for(t=0;t<A.length;t++)n=e.hasOwnProperty("$"+A[t].value),A[t].selected!==n&&(A[t].selected=n),n&&r&&(A[t].defaultSelected=!0)}else{for(t=""+dr(t),e=null,n=0;n<A.length;n++){if(A[n].value===t){A[n].selected=!0,r&&(A[n].defaultSelected=!0);return}e!==null||A[n].disabled||(e=A[n])}e!==null&&(e.selected=!0)}}function Ic(A,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return bA({},e,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function x1(A,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(k(92));if(so(t)){if(1<t.length)throw Error(k(93));t=t[0]}e=t}e==null&&(e=""),t=e}A._wrapperState={initialValue:dr(t)}}function ap(A,e){var t=dr(e.value),r=dr(e.defaultValue);t!=null&&(t=""+t,t!==A.value&&(A.value=t),e.defaultValue==null&&A.defaultValue!==t&&(A.defaultValue=t)),r!=null&&(A.defaultValue=""+r)}function E1(A){var e=A.textContent;e===A._wrapperState.initialValue&&e!==""&&e!==null&&(A.value=e)}function sp(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(A,e){return A==null||A==="http://www.w3.org/1999/xhtml"?sp(e):A==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var Ci,lp=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return A(e,t,r,n)})}:A}(function(A,e){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=e;else{for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ci.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;e.firstChild;)A.appendChild(e.firstChild)}});function Oo(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(A){Kv.forEach(function(e){e=e+A.charAt(0).toUpperCase()+A.substring(1),yo[e]=yo[A]})});function cp(A,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||yo.hasOwnProperty(A)&&yo[A]?(""+e).trim():e+"px"}function up(A,e){A=A.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,n=cp(t,e[t],r);t==="float"&&(t="cssFloat"),r?A.setProperty(t,n):A[t]=n}}var Tv=bA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(A,e){if(e){if(Tv[A]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,A));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Mc(A,e){if(A.indexOf("-")===-1)return typeof e.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function cd(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Dc=null,Bn=null,vn=null;function b1(A){if(A=ui(A)){if(typeof Dc!="function")throw Error(k(280));var e=A.stateNode;e&&(e=Is(e),Dc(A.stateNode,A.type,e))}}function dp(A){Bn?vn?vn.push(A):vn=[A]:Bn=A}function fp(){if(Bn){var A=Bn,e=vn;if(vn=Bn=null,b1(A),e)for(A=0;A<e.length;A++)b1(e[A])}}function gp(A,e){return A(e)}function pp(){}var yl=!1;function hp(A,e,t){if(yl)return A(e,t);yl=!0;try{return gp(A,e,t)}finally{yl=!1,(Bn!==null||vn!==null)&&(pp(),fp())}}function Vo(A,e){var t=A.stateNode;if(t===null)return null;var r=Is(t);if(r===null)return null;t=r[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(A=A.type,r=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!r;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(k(231,e,typeof t));return t}var Kc=!1;if(Mt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Kc=!1}function Nv(A,e,t,r,n,o,i,a,s){var l=Array.prototype.slice.call(arguments,3);try{e.apply(t,l)}catch(c){this.onError(c)}}var Fo=!1,Ka=null,Ta=!1,Tc=null,Rv={onError:function(A){Fo=!0,Ka=A}};function Ov(A,e,t,r,n,o,i,a,s){Fo=!1,Ka=null,Nv.apply(Rv,arguments)}function Vv(A,e,t,r,n,o,i,a,s){if(Ov.apply(this,arguments),Fo){if(Fo){var l=Ka;Fo=!1,Ka=null}else throw Error(k(198));Ta||(Ta=!0,Tc=l)}}function Vr(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,e.flags&4098&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function Bp(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function H1(A){if(Vr(A)!==A)throw Error(k(188))}function Pv(A){var e=A.alternate;if(!e){if(e=Vr(A),e===null)throw Error(k(188));return e!==A?null:A}for(var t=A,r=e;;){var n=t.return;if(n===null)break;var o=n.alternate;if(o===null){if(r=n.return,r!==null){t=r;continue}break}if(n.child===o.child){for(o=n.child;o;){if(o===t)return H1(n),A;if(o===r)return H1(n),e;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=n,r=o;else{for(var i=!1,a=n.child;a;){if(a===t){i=!0,t=n,r=o;break}if(a===r){i=!0,r=n,t=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===t){i=!0,t=o,r=n;break}if(a===r){i=!0,r=o,t=n;break}a=a.sibling}if(!i)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?A:e}function vp(A){return A=Pv(A),A!==null?wp(A):null}function wp(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var e=wp(A);if(e!==null)return e;A=A.sibling}return null}var mp=ke.unstable_scheduleCallback,k1=ke.unstable_cancelCallback,Gv=ke.unstable_shouldYield,jv=ke.unstable_requestPaint,LA=ke.unstable_now,zv=ke.unstable_getCurrentPriorityLevel,ud=ke.unstable_ImmediatePriority,Cp=ke.unstable_UserBlockingPriority,Na=ke.unstable_NormalPriority,Wv=ke.unstable_LowPriority,Qp=ke.unstable_IdlePriority,Es=null,Bt=null;function $v(A){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Es,A,void 0,(A.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Jv,Xv=Math.log,Yv=Math.LN2;function Jv(A){return A>>>=0,A===0?32:31-(Xv(A)/Yv|0)|0}var Qi=64,yi=4194304;function lo(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Ra(A,e){var t=A.pendingLanes;if(t===0)return 0;var r=0,n=A.suspendedLanes,o=A.pingedLanes,i=t&268435455;if(i!==0){var a=i&~n;a!==0?r=lo(a):(o&=i,o!==0&&(r=lo(o)))}else i=t&~n,i!==0?r=lo(i):o!==0&&(r=lo(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&n)&&(n=r&-r,o=e&-e,n>=o||n===16&&(o&4194240)!==0))return e;if(r&4&&(r|=t&16),e=A.entangledLanes,e!==0)for(A=A.entanglements,e&=r;0<e;)t=31-nt(e),n=1<<t,r|=A[t],e&=~n;return r}function Zv(A,e){switch(A){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qv(A,e){for(var t=A.suspendedLanes,r=A.pingedLanes,n=A.expirationTimes,o=A.pendingLanes;0<o;){var i=31-nt(o),a=1<<i,s=n[i];s===-1?(!(a&t)||a&r)&&(n[i]=Zv(a,e)):s<=e&&(A.expiredLanes|=a),o&=~a}}function Nc(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function yp(){var A=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),A}function Fl(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function li(A,e,t){A.pendingLanes|=e,e!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,e=31-nt(e),A[e]=t}function Aw(A,e){var t=A.pendingLanes&~e;A.pendingLanes=e,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=e,A.mutableReadLanes&=e,A.entangledLanes&=e,e=A.entanglements;var r=A.eventTimes;for(A=A.expirationTimes;0<t;){var n=31-nt(t),o=1<<n;e[n]=0,r[n]=-1,A[n]=-1,t&=~o}}function dd(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var r=31-nt(t),n=1<<r;n&e|A[r]&e&&(A[r]|=e),t&=~n}}var lA=0;function Fp(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var Up,fd,xp,Ep,bp,Rc=!1,Fi=[],tr=null,rr=null,nr=null,Po=new Map,Go=new Map,Xt=[],ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function I1(A,e){switch(A){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function Yn(A,e,t,r,n,o){return A===null||A.nativeEvent!==o?(A={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[n]},e!==null&&(e=ui(e),e!==null&&fd(e)),A):(A.eventSystemFlags|=r,e=A.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),A)}function tw(A,e,t,r,n){switch(e){case"focusin":return tr=Yn(tr,A,e,t,r,n),!0;case"dragenter":return rr=Yn(rr,A,e,t,r,n),!0;case"mouseover":return nr=Yn(nr,A,e,t,r,n),!0;case"pointerover":var o=n.pointerId;return Po.set(o,Yn(Po.get(o)||null,A,e,t,r,n)),!0;case"gotpointercapture":return o=n.pointerId,Go.set(o,Yn(Go.get(o)||null,A,e,t,r,n)),!0}return!1}function Hp(A){var e=Qr(A.target);if(e!==null){var t=Vr(e);if(t!==null){if(e=t.tag,e===13){if(e=Bp(t),e!==null){A.blockedOn=e,bp(A.priority,function(){xp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function ua(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=Oc(A.domEventName,A.eventSystemFlags,e[0],A.nativeEvent);if(t===null){t=A.nativeEvent;var r=new t.constructor(t.type,t);_c=r,t.target.dispatchEvent(r),_c=null}else return e=ui(t),e!==null&&fd(e),A.blockedOn=t,!1;e.shift()}return!0}function L1(A,e,t){ua(A)&&t.delete(e)}function rw(){Rc=!1,tr!==null&&ua(tr)&&(tr=null),rr!==null&&ua(rr)&&(rr=null),nr!==null&&ua(nr)&&(nr=null),Po.forEach(L1),Go.forEach(L1)}function Jn(A,e){A.blockedOn===e&&(A.blockedOn=null,Rc||(Rc=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,rw)))}function jo(A){function e(n){return Jn(n,A)}if(0<Fi.length){Jn(Fi[0],A);for(var t=1;t<Fi.length;t++){var r=Fi[t];r.blockedOn===A&&(r.blockedOn=null)}}for(tr!==null&&Jn(tr,A),rr!==null&&Jn(rr,A),nr!==null&&Jn(nr,A),Po.forEach(e),Go.forEach(e),t=0;t<Xt.length;t++)r=Xt[t],r.blockedOn===A&&(r.blockedOn=null);for(;0<Xt.length&&(t=Xt[0],t.blockedOn===null);)Hp(t),t.blockedOn===null&&Xt.shift()}var wn=Nt.ReactCurrentBatchConfig,Oa=!0;function nw(A,e,t,r){var n=lA,o=wn.transition;wn.transition=null;try{lA=1,gd(A,e,t,r)}finally{lA=n,wn.transition=o}}function ow(A,e,t,r){var n=lA,o=wn.transition;wn.transition=null;try{lA=4,gd(A,e,t,r)}finally{lA=n,wn.transition=o}}function gd(A,e,t,r){if(Oa){var n=Oc(A,e,t,r);if(n===null)Ml(A,e,r,Va,t),I1(A,r);else if(tw(n,A,e,t,r))r.stopPropagation();else if(I1(A,r),e&4&&-1<ew.indexOf(A)){for(;n!==null;){var o=ui(n);if(o!==null&&Up(o),o=Oc(A,e,t,r),o===null&&Ml(A,e,r,Va,t),o===n)break;n=o}n!==null&&r.stopPropagation()}else Ml(A,e,r,null,t)}}var Va=null;function Oc(A,e,t,r){if(Va=null,A=cd(r),A=Qr(A),A!==null)if(e=Vr(A),e===null)A=null;else if(t=e.tag,t===13){if(A=Bp(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null);return Va=A,null}function kp(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case ud:return 1;case Cp:return 4;case Na:case Wv:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var Jt=null,pd=null,da=null;function Ip(){if(da)return da;var A,e=pd,t=e.length,r,n="value"in Jt?Jt.value:Jt.textContent,o=n.length;for(A=0;A<t&&e[A]===n[A];A++);var i=t-A;for(r=1;r<=i&&e[t-r]===n[o-r];r++);return da=n.slice(A,1<r?1-r:void 0)}function fa(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Ui(){return!0}function S1(){return!1}function Le(A){function e(t,r,n,o,i){this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in A)A.hasOwnProperty(a)&&(t=A[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:S1,this.isPropagationStopped=S1,this}return bA(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),e}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Le(Pn),ci=bA({},Pn,{view:0,detail:0}),iw=Le(ci),Ul,xl,Zn,bs=bA({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Zn&&(Zn&&A.type==="mousemove"?(Ul=A.screenX-Zn.screenX,xl=A.screenY-Zn.screenY):xl=Ul=0,Zn=A),Ul)},movementY:function(A){return"movementY"in A?A.movementY:xl}}),M1=Le(bs),aw=bA({},bs,{dataTransfer:0}),sw=Le(aw),lw=bA({},ci,{relatedTarget:0}),El=Le(lw),cw=bA({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),uw=Le(cw),dw=bA({},Pn,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),fw=Le(dw),gw=bA({},Pn,{data:0}),_1=Le(gw),pw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vw(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=Bw[A])?!!e[A]:!1}function Bd(){return vw}var ww=bA({},ci,{key:function(A){if(A.key){var e=pw[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=fa(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?hw[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(A){return A.type==="keypress"?fa(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?fa(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),mw=Le(ww),Cw=bA({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D1=Le(Cw),Qw=bA({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),yw=Le(Qw),Fw=bA({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=Le(Fw),xw=bA({},bs,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Ew=Le(xw),bw=[9,13,27,32],vd=Mt&&"CompositionEvent"in window,Uo=null;Mt&&"documentMode"in document&&(Uo=document.documentMode);var Hw=Mt&&"TextEvent"in window&&!Uo,Lp=Mt&&(!vd||Uo&&8<Uo&&11>=Uo),K1=" ",T1=!1;function Sp(A,e){switch(A){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var tn=!1;function kw(A,e){switch(A){case"compositionend":return Mp(e);case"keypress":return e.which!==32?null:(T1=!0,K1);case"textInput":return A=e.data,A===K1&&T1?null:A;default:return null}}function Iw(A,e){if(tn)return A==="compositionend"||!vd&&Sp(A,e)?(A=Ip(),da=pd=Jt=null,tn=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lp&&e.locale!=="ko"?null:e.data;default:return null}}var Lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N1(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!Lw[A.type]:e==="textarea"}function _p(A,e,t,r){dp(r),e=Pa(e,"onChange"),0<e.length&&(t=new hd("onChange","change",null,t,r),A.push({event:t,listeners:e}))}var xo=null,zo=null;function Sw(A){zp(A,0)}function Hs(A){var e=on(A);if(op(e))return A}function Mw(A,e){if(A==="change")return e}var Dp=!1;if(Mt){var bl;if(Mt){var Hl="oninput"in document;if(!Hl){var R1=document.createElement("div");R1.setAttribute("oninput","return;"),Hl=typeof R1.oninput=="function"}bl=Hl}else bl=!1;Dp=bl&&(!document.documentMode||9<document.documentMode)}function O1(){xo&&(xo.detachEvent("onpropertychange",Kp),zo=xo=null)}function Kp(A){if(A.propertyName==="value"&&Hs(zo)){var e=[];_p(e,zo,A,cd(A)),hp(Sw,e)}}function _w(A,e,t){A==="focusin"?(O1(),xo=e,zo=t,xo.attachEvent("onpropertychange",Kp)):A==="focusout"&&O1()}function Dw(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Hs(zo)}function Kw(A,e){if(A==="click")return Hs(e)}function Tw(A,e){if(A==="input"||A==="change")return Hs(e)}function Nw(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var st=typeof Object.is=="function"?Object.is:Nw;function Wo(A,e){if(st(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var n=t[r];if(!yc.call(e,n)||!st(A[n],e[n]))return!1}return!0}function V1(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function P1(A,e){var t=V1(A);A=0;for(var r;t;){if(t.nodeType===3){if(r=A+t.textContent.length,A<=e&&r>=e)return{node:t,offset:e-A};A=r}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=V1(t)}}function Tp(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Tp(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Np(){for(var A=window,e=Da();e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Da(A.document)}return e}function wd(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}function Rw(A){var e=Np(),t=A.focusedElem,r=A.selectionRange;if(e!==t&&t&&t.ownerDocument&&Tp(t.ownerDocument.documentElement,t)){if(r!==null&&wd(t)){if(e=r.start,A=r.end,A===void 0&&(A=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(A,t.value.length);else if(A=(e=t.ownerDocument||document)&&e.defaultView||window,A.getSelection){A=A.getSelection();var n=t.textContent.length,o=Math.min(r.start,n);r=r.end===void 0?o:Math.min(r.end,n),!A.extend&&o>r&&(n=r,r=o,o=n),n=P1(t,o);var i=P1(t,r);n&&i&&(A.rangeCount!==1||A.anchorNode!==n.node||A.anchorOffset!==n.offset||A.focusNode!==i.node||A.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),A.removeAllRanges(),o>r?(A.addRange(e),A.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),A.addRange(e)))}}for(e=[],A=t;A=A.parentNode;)A.nodeType===1&&e.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)A=e[t],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var Ow=Mt&&"documentMode"in document&&11>=document.documentMode,rn=null,Vc=null,Eo=null,Pc=!1;function G1(A,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pc||rn==null||rn!==Da(r)||(r=rn,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Wo(Eo,r)||(Eo=r,r=Pa(Vc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,t),A.push({event:e,listeners:r}),e.target=rn)))}function xi(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var nn={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},kl={},Rp={};Mt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function ks(A){if(kl[A])return kl[A];if(!nn[A])return A;var e=nn[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Rp)return kl[A]=e[t];return A}var Op=ks("animationend"),Vp=ks("animationiteration"),Pp=ks("animationstart"),Gp=ks("transitionend"),jp=new Map,j1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(A,e){jp.set(A,e),Or(e,[A])}for(var Il=0;Il<j1.length;Il++){var Ll=j1[Il],Vw=Ll.toLowerCase(),Pw=Ll[0].toUpperCase()+Ll.slice(1);pr(Vw,"on"+Pw)}pr(Op,"onAnimationEnd");pr(Vp,"onAnimationIteration");pr(Pp,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Gp,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gw=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function z1(A,e,t){var r=A.type||"unknown-event";A.currentTarget=t,Vv(r,e,void 0,A),A.currentTarget=null}function zp(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var r=A[t],n=r.event;r=r.listeners;A:{var o=void 0;if(e)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,l=a.currentTarget;if(a=a.listener,s!==o&&n.isPropagationStopped())break A;z1(n,a,l),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,l=a.currentTarget,a=a.listener,s!==o&&n.isPropagationStopped())break A;z1(n,a,l),o=s}}}if(Ta)throw A=Tc,Ta=!1,Tc=null,A}function pA(A,e){var t=e[$c];t===void 0&&(t=e[$c]=new Set);var r=A+"__bubble";t.has(r)||(Wp(e,A,2,!1),t.add(r))}function Sl(A,e,t){var r=0;e&&(r|=4),Wp(t,A,r,e)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function $o(A){if(!A[Ei]){A[Ei]=!0,Ap.forEach(function(t){t!=="selectionchange"&&(Gw.has(t)||Sl(t,!1,A),Sl(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Ei]||(e[Ei]=!0,Sl("selectionchange",!1,e))}}function Wp(A,e,t,r){switch(kp(e)){case 1:var n=nw;break;case 4:n=ow;break;default:n=gd}t=n.bind(null,e,t,A),n=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),r?n!==void 0?A.addEventListener(e,t,{capture:!0,passive:n}):A.addEventListener(e,t,!0):n!==void 0?A.addEventListener(e,t,{passive:n}):A.addEventListener(e,t,!1)}function Ml(A,e,t,r,n){var o=r;if(!(e&1)&&!(e&2)&&r!==null)A:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===n||a.nodeType===8&&a.parentNode===n)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===n||s.nodeType===8&&s.parentNode===n))return;i=i.return}for(;a!==null;){if(i=Qr(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue A}a=a.parentNode}}r=r.return}hp(function(){var l=o,c=cd(t),u=[];A:{var f=jp.get(A);if(f!==void 0){var p=hd,B=A;switch(A){case"keypress":if(fa(t)===0)break A;case"keydown":case"keyup":p=mw;break;case"focusin":B="focus",p=El;break;case"focusout":B="blur",p=El;break;case"beforeblur":case"afterblur":p=El;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=M1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yw;break;case Op:case Vp:case Pp:p=uw;break;case Gp:p=Uw;break;case"scroll":p=iw;break;case"wheel":p=Ew;break;case"copy":case"cut":case"paste":p=fw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=D1}var w=(e&4)!==0,x=!w&&A==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var d=l,h;d!==null;){h=d;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,g!==null&&(C=Vo(d,g),C!=null&&w.push(Xo(d,C,h)))),x)break;d=d.return}0<w.length&&(f=new p(f,B,null,t,c),u.push({event:f,listeners:w}))}}if(!(e&7)){A:{if(f=A==="mouseover"||A==="pointerover",p=A==="mouseout"||A==="pointerout",f&&t!==_c&&(B=t.relatedTarget||t.fromElement)&&(Qr(B)||B[_t]))break A;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(B=t.relatedTarget||t.toElement,p=l,B=B?Qr(B):null,B!==null&&(x=Vr(B),B!==x||B.tag!==5&&B.tag!==6)&&(B=null)):(p=null,B=l),p!==B)){if(w=M1,C="onMouseLeave",g="onMouseEnter",d="mouse",(A==="pointerout"||A==="pointerover")&&(w=D1,C="onPointerLeave",g="onPointerEnter",d="pointer"),x=p==null?f:on(p),h=B==null?f:on(B),f=new w(C,d+"leave",p,t,c),f.target=x,f.relatedTarget=h,C=null,Qr(c)===l&&(w=new w(g,d+"enter",B,t,c),w.target=h,w.relatedTarget=x,C=w),x=C,p&&B)e:{for(w=p,g=B,d=0,h=w;h;h=Pr(h))d++;for(h=0,C=g;C;C=Pr(C))h++;for(;0<d-h;)w=Pr(w),d--;for(;0<h-d;)g=Pr(g),h--;for(;d--;){if(w===g||g!==null&&w===g.alternate)break e;w=Pr(w),g=Pr(g)}w=null}else w=null;p!==null&&W1(u,f,p,w,!1),B!==null&&x!==null&&W1(u,x,B,w,!0)}}A:{if(f=l?on(l):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var y=Mw;else if(N1(f))if(Dp)y=Tw;else{y=Dw;var m=_w}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(y=Kw);if(y&&(y=y(A,l))){_p(u,y,t,c);break A}m&&m(A,f,l),A==="focusout"&&(m=f._wrapperState)&&m.controlled&&f.type==="number"&&kc(f,"number",f.value)}switch(m=l?on(l):window,A){case"focusin":(N1(m)||m.contentEditable==="true")&&(rn=m,Vc=l,Eo=null);break;case"focusout":Eo=Vc=rn=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,G1(u,t,c);break;case"selectionchange":if(Ow)break;case"keydown":case"keyup":G1(u,t,c)}var Q;if(vd)A:{switch(A){case"compositionstart":var E="onCompositionStart";break A;case"compositionend":E="onCompositionEnd";break A;case"compositionupdate":E="onCompositionUpdate";break A}E=void 0}else tn?Sp(A,t)&&(E="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Lp&&t.locale!=="ko"&&(tn||E!=="onCompositionStart"?E==="onCompositionEnd"&&tn&&(Q=Ip()):(Jt=c,pd="value"in Jt?Jt.value:Jt.textContent,tn=!0)),m=Pa(l,E),0<m.length&&(E=new _1(E,A,null,t,c),u.push({event:E,listeners:m}),Q?E.data=Q:(Q=Mp(t),Q!==null&&(E.data=Q)))),(Q=Hw?kw(A,t):Iw(A,t))&&(l=Pa(l,"onBeforeInput"),0<l.length&&(c=new _1("onBeforeInput","beforeinput",null,t,c),u.push({event:c,listeners:l}),c.data=Q))}zp(u,e)})}function Xo(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Pa(A,e){for(var t=e+"Capture",r=[];A!==null;){var n=A,o=n.stateNode;n.tag===5&&o!==null&&(n=o,o=Vo(A,t),o!=null&&r.unshift(Xo(A,o,n)),o=Vo(A,e),o!=null&&r.push(Xo(A,o,n))),A=A.return}return r}function Pr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function W1(A,e,t,r,n){for(var o=e._reactName,i=[];t!==null&&t!==r;){var a=t,s=a.alternate,l=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&l!==null&&(a=l,n?(s=Vo(t,o),s!=null&&i.unshift(Xo(t,s,a))):n||(s=Vo(t,o),s!=null&&i.push(Xo(t,s,a)))),t=t.return}i.length!==0&&A.push({event:e,listeners:i})}var jw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function $1(A){return(typeof A=="string"?A:""+A).replace(jw,`
`).replace(zw,"")}function bi(A,e,t){if(e=$1(e),$1(A)!==e&&t)throw Error(k(425))}function Ga(){}var Gc=null,jc=null;function zc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,Ww=typeof clearTimeout=="function"?clearTimeout:void 0,X1=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof X1<"u"?function(A){return X1.resolve(null).then(A).catch(Xw)}:Wc;function Xw(A){setTimeout(function(){throw A})}function _l(A,e){var t=e,r=0;do{var n=t.nextSibling;if(A.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(r===0){A.removeChild(n),jo(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=n}while(t);jo(e)}function or(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return A}function Y1(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Gn,Yo="__reactProps$"+Gn,_t="__reactContainer$"+Gn,$c="__reactEvents$"+Gn,Yw="__reactListeners$"+Gn,Jw="__reactHandles$"+Gn;function Qr(A){var e=A[ht];if(e)return e;for(var t=A.parentNode;t;){if(e=t[_t]||t[ht]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Y1(A);A!==null;){if(t=A[ht])return t;A=Y1(A)}return e}A=t,t=A.parentNode}return null}function ui(A){return A=A[ht]||A[_t],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function on(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(k(33))}function Is(A){return A[Yo]||null}var Xc=[],an=-1;function hr(A){return{current:A}}function wA(A){0>an||(A.current=Xc[an],Xc[an]=null,an--)}function fA(A,e){an++,Xc[an]=A.current,A.current=e}var fr={},oe=hr(fr),ve=hr(!1),Dr=fr;function Fn(A,e){var t=A.type.contextTypes;if(!t)return fr;var r=A.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var n={},o;for(o in t)n[o]=e[o];return r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=e,A.__reactInternalMemoizedMaskedChildContext=n),n}function we(A){return A=A.childContextTypes,A!=null}function ja(){wA(ve),wA(oe)}function J1(A,e,t){if(oe.current!==fr)throw Error(k(168));fA(oe,e),fA(ve,t)}function $p(A,e,t){var r=A.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var n in r)if(!(n in e))throw Error(k(108,_v(A)||"Unknown",n));return bA({},t,r)}function za(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||fr,Dr=oe.current,fA(oe,A),fA(ve,ve.current),!0}function Z1(A,e,t){var r=A.stateNode;if(!r)throw Error(k(169));t?(A=$p(A,e,Dr),r.__reactInternalMemoizedMergedChildContext=A,wA(ve),wA(oe),fA(oe,A)):wA(ve),fA(ve,t)}var bt=null,Ls=!1,Dl=!1;function Xp(A){bt===null?bt=[A]:bt.push(A)}function Zw(A){Ls=!0,Xp(A)}function Br(){if(!Dl&&bt!==null){Dl=!0;var A=0,e=lA;try{var t=bt;for(lA=1;A<t.length;A++){var r=t[A];do r=r(!0);while(r!==null)}bt=null,Ls=!1}catch(n){throw bt!==null&&(bt=bt.slice(A+1)),mp(ud,Br),n}finally{lA=e,Dl=!1}}return null}var sn=[],ln=0,Wa=null,$a=0,De=[],Ke=0,Kr=null,Ht=1,kt="";function wr(A,e){sn[ln++]=$a,sn[ln++]=Wa,Wa=A,$a=e}function Yp(A,e,t){De[Ke++]=Ht,De[Ke++]=kt,De[Ke++]=Kr,Kr=A;var r=Ht;A=kt;var n=32-nt(r)-1;r&=~(1<<n),t+=1;var o=32-nt(e)+n;if(30<o){var i=n-n%5;o=(r&(1<<i)-1).toString(32),r>>=i,n-=i,Ht=1<<32-nt(e)+n|t<<n|r,kt=o+A}else Ht=1<<o|t<<n|r,kt=A}function md(A){A.return!==null&&(wr(A,1),Yp(A,1,0))}function Cd(A){for(;A===Wa;)Wa=sn[--ln],sn[ln]=null,$a=sn[--ln],sn[ln]=null;for(;A===Kr;)Kr=De[--Ke],De[Ke]=null,kt=De[--Ke],De[Ke]=null,Ht=De[--Ke],De[Ke]=null}var He=null,be=null,FA=!1,et=null;function Jp(A,e){var t=Ne(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=A,e=A.deletions,e===null?(A.deletions=[t],A.flags|=16):e.push(t)}function q1(A,e){switch(A.tag){case 5:var t=A.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(A.stateNode=e,He=A,be=or(e.firstChild),!0):!1;case 6:return e=A.pendingProps===""||e.nodeType!==3?null:e,e!==null?(A.stateNode=e,He=A,be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Kr!==null?{id:Ht,overflow:kt}:null,A.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ne(18,null,null,0),t.stateNode=e,t.return=A,A.child=t,He=A,be=null,!0):!1;default:return!1}}function Yc(A){return(A.mode&1)!==0&&(A.flags&128)===0}function Jc(A){if(FA){var e=be;if(e){var t=e;if(!q1(A,e)){if(Yc(A))throw Error(k(418));e=or(t.nextSibling);var r=He;e&&q1(A,e)?Jp(r,t):(A.flags=A.flags&-4097|2,FA=!1,He=A)}}else{if(Yc(A))throw Error(k(418));A.flags=A.flags&-4097|2,FA=!1,He=A}}}function Af(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;He=A}function Hi(A){if(A!==He)return!1;if(!FA)return Af(A),FA=!0,!1;var e;if((e=A.tag!==3)&&!(e=A.tag!==5)&&(e=A.type,e=e!=="head"&&e!=="body"&&!zc(A.type,A.memoizedProps)),e&&(e=be)){if(Yc(A))throw Zp(),Error(k(418));for(;e;)Jp(A,e),e=or(e.nextSibling)}if(Af(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(k(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"){if(e===0){be=or(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}A=A.nextSibling}be=null}}else be=He?or(A.stateNode.nextSibling):null;return!0}function Zp(){for(var A=be;A;)A=or(A.nextSibling)}function Un(){be=He=null,FA=!1}function Qd(A){et===null?et=[A]:et.push(A)}var qw=Nt.ReactCurrentBatchConfig;function Ze(A,e){if(A&&A.defaultProps){e=bA({},e),A=A.defaultProps;for(var t in A)e[t]===void 0&&(e[t]=A[t]);return e}return e}var Xa=hr(null),Ya=null,cn=null,yd=null;function Fd(){yd=cn=Ya=null}function Ud(A){var e=Xa.current;wA(Xa),A._currentValue=e}function Zc(A,e,t){for(;A!==null;){var r=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),A===t)break;A=A.return}}function mn(A,e){Ya=A,yd=cn=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&e&&(pe=!0),A.firstContext=null)}function Ge(A){var e=A._currentValue;if(yd!==A)if(A={context:A,memoizedValue:e,next:null},cn===null){if(Ya===null)throw Error(k(308));cn=A,Ya.dependencies={lanes:0,firstContext:A}}else cn=cn.next=A;return e}var yr=null;function xd(A){yr===null?yr=[A]:yr.push(A)}function qp(A,e,t,r){var n=e.interleaved;return n===null?(t.next=t,xd(e)):(t.next=n.next,n.next=t),e.interleaved=t,Dt(A,r)}function Dt(A,e){A.lanes|=e;var t=A.alternate;for(t!==null&&(t.lanes|=e),t=A,A=A.return;A!==null;)A.childLanes|=e,t=A.alternate,t!==null&&(t.childLanes|=e),t=A,A=A.return;return t.tag===3?t.stateNode:null}var Wt=!1;function Ed(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function It(A,e){return{eventTime:A,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(A,e,t){var r=A.updateQueue;if(r===null)return null;if(r=r.shared,rA&2){var n=r.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),r.pending=e,Dt(A,t)}return n=r.interleaved,n===null?(e.next=e,xd(r)):(e.next=n.next,n.next=e),r.interleaved=e,Dt(A,t)}function ga(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,dd(A,t)}}function ef(A,e){var t=A.updateQueue,r=A.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var n=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?n=o=i:o=o.next=i,t=t.next}while(t!==null);o===null?n=o=e:o=o.next=e}else n=o=e;t={baseState:r.baseState,firstBaseUpdate:n,lastBaseUpdate:o,shared:r.shared,effects:r.effects},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}function Ja(A,e,t,r){var n=A.updateQueue;Wt=!1;var o=n.firstBaseUpdate,i=n.lastBaseUpdate,a=n.shared.pending;if(a!==null){n.shared.pending=null;var s=a,l=s.next;s.next=null,i===null?o=l:i.next=l,i=s;var c=A.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==i&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=s))}if(o!==null){var u=n.baseState;i=0,c=l=s=null,a=o;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});A:{var B=A,w=a;switch(f=e,p=t,w.tag){case 1:if(B=w.payload,typeof B=="function"){u=B.call(p,u,f);break A}u=B;break A;case 3:B.flags=B.flags&-65537|128;case 0:if(B=w.payload,f=typeof B=="function"?B.call(p,u,f):B,f==null)break A;u=bA({},u,f);break A;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(A.flags|=64,f=n.effects,f===null?n.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=p,s=u):c=c.next=p,i|=f;if(a=a.next,a===null){if(a=n.shared.pending,a===null)break;f=a,a=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);if(c===null&&(s=u),n.baseState=s,n.firstBaseUpdate=l,n.lastBaseUpdate=c,e=n.shared.interleaved,e!==null){n=e;do i|=n.lane,n=n.next;while(n!==e)}else o===null&&(n.shared.lanes=0);Nr|=i,A.lanes=i,A.memoizedState=u}}function tf(A,e,t){if(A=e.effects,e.effects=null,A!==null)for(e=0;e<A.length;e++){var r=A[e],n=r.callback;if(n!==null){if(r.callback=null,r=t,typeof n!="function")throw Error(k(191,n));n.call(r)}}}var eh=new qg.Component().refs;function qc(A,e,t,r){e=A.memoizedState,t=t(r,e),t=t==null?e:bA({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var Ss={isMounted:function(A){return(A=A._reactInternals)?Vr(A)===A:!1},enqueueSetState:function(A,e,t){A=A._reactInternals;var r=le(),n=sr(A),o=It(r,n);o.payload=e,t!=null&&(o.callback=t),e=ir(A,o,n),e!==null&&(ot(e,A,n,r),ga(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var r=le(),n=sr(A),o=It(r,n);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=ir(A,o,n),e!==null&&(ot(e,A,n,r),ga(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=le(),r=sr(A),n=It(t,r);n.tag=2,e!=null&&(n.callback=e),e=ir(A,n,r),e!==null&&(ot(e,A,r,t),ga(e,A,r))}};function rf(A,e,t,r,n,o,i){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(r,o,i):e.prototype&&e.prototype.isPureReactComponent?!Wo(t,r)||!Wo(n,o):!0}function th(A,e,t){var r=!1,n=fr,o=e.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(n=we(e)?Dr:oe.current,r=e.contextTypes,o=(r=r!=null)?Fn(A,n):fr),e=new e(t,o),A.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ss,A.stateNode=e,e._reactInternals=A,r&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=n,A.__reactInternalMemoizedMaskedChildContext=o),e}function nf(A,e,t,r){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==A&&Ss.enqueueReplaceState(e,e.state,null)}function Au(A,e,t,r){var n=A.stateNode;n.props=t,n.state=A.memoizedState,n.refs=eh,Ed(A);var o=e.contextType;typeof o=="object"&&o!==null?n.context=Ge(o):(o=we(e)?Dr:oe.current,n.context=Fn(A,o)),n.state=A.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qc(A,e,o,t),n.state=A.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Ss.enqueueReplaceState(n,n.state,null),Ja(A,t,n,r),n.state=A.memoizedState),typeof n.componentDidMount=="function"&&(A.flags|=4194308)}function qn(A,e,t){if(A=t.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,A));var n=r,o=""+A;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(i){var a=n.refs;a===eh&&(a=n.refs={}),i===null?delete a[o]:a[o]=i},e._stringRef=o,e)}if(typeof A!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,A))}return A}function ki(A,e){throw A=Object.prototype.toString.call(e),Error(k(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A))}function of(A){var e=A._init;return e(A._payload)}function rh(A){function e(g,d){if(A){var h=g.deletions;h===null?(g.deletions=[d],g.flags|=16):h.push(d)}}function t(g,d){if(!A)return null;for(;d!==null;)e(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function n(g,d){return g=lr(g,d),g.index=0,g.sibling=null,g}function o(g,d,h){return g.index=h,A?(h=g.alternate,h!==null?(h=h.index,h<d?(g.flags|=2,d):h):(g.flags|=2,d)):(g.flags|=1048576,d)}function i(g){return A&&g.alternate===null&&(g.flags|=2),g}function a(g,d,h,C){return d===null||d.tag!==6?(d=Pl(h,g.mode,C),d.return=g,d):(d=n(d,h),d.return=g,d)}function s(g,d,h,C){var y=h.type;return y===en?c(g,d,h.props.children,C,h.key):d!==null&&(d.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zt&&of(y)===d.type)?(C=n(d,h.props),C.ref=qn(g,d,h),C.return=g,C):(C=ma(h.type,h.key,h.props,null,g.mode,C),C.ref=qn(g,d,h),C.return=g,C)}function l(g,d,h,C){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Gl(h,g.mode,C),d.return=g,d):(d=n(d,h.children||[]),d.return=g,d)}function c(g,d,h,C,y){return d===null||d.tag!==7?(d=Hr(h,g.mode,C,y),d.return=g,d):(d=n(d,h),d.return=g,d)}function u(g,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Pl(""+d,g.mode,h),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wi:return h=ma(d.type,d.key,d.props,null,g.mode,h),h.ref=qn(g,null,d),h.return=g,h;case An:return d=Gl(d,g.mode,h),d.return=g,d;case zt:var C=d._init;return u(g,C(d._payload),h)}if(so(d)||$n(d))return d=Hr(d,g.mode,h,null),d.return=g,d;ki(g,d)}return null}function f(g,d,h,C){var y=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return y!==null?null:a(g,d,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case wi:return h.key===y?s(g,d,h,C):null;case An:return h.key===y?l(g,d,h,C):null;case zt:return y=h._init,f(g,d,y(h._payload),C)}if(so(h)||$n(h))return y!==null?null:c(g,d,h,C,null);ki(g,h)}return null}function p(g,d,h,C,y){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(h)||null,a(d,g,""+C,y);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case wi:return g=g.get(C.key===null?h:C.key)||null,s(d,g,C,y);case An:return g=g.get(C.key===null?h:C.key)||null,l(d,g,C,y);case zt:var m=C._init;return p(g,d,h,m(C._payload),y)}if(so(C)||$n(C))return g=g.get(h)||null,c(d,g,C,y,null);ki(d,C)}return null}function B(g,d,h,C){for(var y=null,m=null,Q=d,E=d=0,H=null;Q!==null&&E<h.length;E++){Q.index>E?(H=Q,Q=null):H=Q.sibling;var b=f(g,Q,h[E],C);if(b===null){Q===null&&(Q=H);break}A&&Q&&b.alternate===null&&e(g,Q),d=o(b,d,E),m===null?y=b:m.sibling=b,m=b,Q=H}if(E===h.length)return t(g,Q),FA&&wr(g,E),y;if(Q===null){for(;E<h.length;E++)Q=u(g,h[E],C),Q!==null&&(d=o(Q,d,E),m===null?y=Q:m.sibling=Q,m=Q);return FA&&wr(g,E),y}for(Q=r(g,Q);E<h.length;E++)H=p(Q,g,E,h[E],C),H!==null&&(A&&H.alternate!==null&&Q.delete(H.key===null?E:H.key),d=o(H,d,E),m===null?y=H:m.sibling=H,m=H);return A&&Q.forEach(function(M){return e(g,M)}),FA&&wr(g,E),y}function w(g,d,h,C){var y=$n(h);if(typeof y!="function")throw Error(k(150));if(h=y.call(h),h==null)throw Error(k(151));for(var m=y=null,Q=d,E=d=0,H=null,b=h.next();Q!==null&&!b.done;E++,b=h.next()){Q.index>E?(H=Q,Q=null):H=Q.sibling;var M=f(g,Q,b.value,C);if(M===null){Q===null&&(Q=H);break}A&&Q&&M.alternate===null&&e(g,Q),d=o(M,d,E),m===null?y=M:m.sibling=M,m=M,Q=H}if(b.done)return t(g,Q),FA&&wr(g,E),y;if(Q===null){for(;!b.done;E++,b=h.next())b=u(g,b.value,C),b!==null&&(d=o(b,d,E),m===null?y=b:m.sibling=b,m=b);return FA&&wr(g,E),y}for(Q=r(g,Q);!b.done;E++,b=h.next())b=p(Q,g,E,b.value,C),b!==null&&(A&&b.alternate!==null&&Q.delete(b.key===null?E:b.key),d=o(b,d,E),m===null?y=b:m.sibling=b,m=b);return A&&Q.forEach(function(S){return e(g,S)}),FA&&wr(g,E),y}function x(g,d,h,C){if(typeof h=="object"&&h!==null&&h.type===en&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case wi:A:{for(var y=h.key,m=d;m!==null;){if(m.key===y){if(y=h.type,y===en){if(m.tag===7){t(g,m.sibling),d=n(m,h.props.children),d.return=g,g=d;break A}}else if(m.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===zt&&of(y)===m.type){t(g,m.sibling),d=n(m,h.props),d.ref=qn(g,m,h),d.return=g,g=d;break A}t(g,m);break}else e(g,m);m=m.sibling}h.type===en?(d=Hr(h.props.children,g.mode,C,h.key),d.return=g,g=d):(C=ma(h.type,h.key,h.props,null,g.mode,C),C.ref=qn(g,d,h),C.return=g,g=C)}return i(g);case An:A:{for(m=h.key;d!==null;){if(d.key===m)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){t(g,d.sibling),d=n(d,h.children||[]),d.return=g,g=d;break A}else{t(g,d);break}else e(g,d);d=d.sibling}d=Gl(h,g.mode,C),d.return=g,g=d}return i(g);case zt:return m=h._init,x(g,d,m(h._payload),C)}if(so(h))return B(g,d,h,C);if($n(h))return w(g,d,h,C);ki(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(t(g,d.sibling),d=n(d,h),d.return=g,g=d):(t(g,d),d=Pl(h,g.mode,C),d.return=g,g=d),i(g)):t(g,d)}return x}var xn=rh(!0),nh=rh(!1),di={},vt=hr(di),Jo=hr(di),Zo=hr(di);function Fr(A){if(A===di)throw Error(k(174));return A}function bd(A,e){switch(fA(Zo,e),fA(Jo,A),fA(vt,di),A=e.nodeType,A){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lc(null,"");break;default:A=A===8?e.parentNode:e,e=A.namespaceURI||null,A=A.tagName,e=Lc(e,A)}wA(vt),fA(vt,e)}function En(){wA(vt),wA(Jo),wA(Zo)}function oh(A){Fr(Zo.current);var e=Fr(vt.current),t=Lc(e,A.type);e!==t&&(fA(Jo,A),fA(vt,t))}function Hd(A){Jo.current===A&&(wA(vt),wA(Jo))}var xA=hr(0);function Za(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kl=[];function kd(){for(var A=0;A<Kl.length;A++)Kl[A]._workInProgressVersionPrimary=null;Kl.length=0}var pa=Nt.ReactCurrentDispatcher,Tl=Nt.ReactCurrentBatchConfig,Tr=0,EA=null,TA=null,GA=null,qa=!1,bo=!1,qo=0,A3=0;function Ae(){throw Error(k(321))}function Id(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!st(A[t],e[t]))return!1;return!0}function Ld(A,e,t,r,n,o){if(Tr=o,EA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=A===null||A.memoizedState===null?n3:o3,A=t(r,n),bo){o=0;do{if(bo=!1,qo=0,25<=o)throw Error(k(301));o+=1,GA=TA=null,e.updateQueue=null,pa.current=i3,A=t(r,n)}while(bo)}if(pa.current=As,e=TA!==null&&TA.next!==null,Tr=0,GA=TA=EA=null,qa=!1,e)throw Error(k(300));return A}function Sd(){var A=qo!==0;return qo=0,A}function ft(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return GA===null?EA.memoizedState=GA=A:GA=GA.next=A,GA}function je(){if(TA===null){var A=EA.alternate;A=A!==null?A.memoizedState:null}else A=TA.next;var e=GA===null?EA.memoizedState:GA.next;if(e!==null)GA=e,TA=A;else{if(A===null)throw Error(k(310));TA=A,A={memoizedState:TA.memoizedState,baseState:TA.baseState,baseQueue:TA.baseQueue,queue:TA.queue,next:null},GA===null?EA.memoizedState=GA=A:GA=GA.next=A}return GA}function Ai(A,e){return typeof e=="function"?e(A):e}function Nl(A){var e=je(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=A;var r=TA,n=r.baseQueue,o=t.pending;if(o!==null){if(n!==null){var i=n.next;n.next=o.next,o.next=i}r.baseQueue=n=o,t.pending=null}if(n!==null){o=n.next,r=r.baseState;var a=i=null,s=null,l=o;do{var c=l.lane;if((Tr&c)===c)s!==null&&(s=s.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:A(r,l.action);else{var u={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};s===null?(a=s=u,i=r):s=s.next=u,EA.lanes|=c,Nr|=c}l=l.next}while(l!==null&&l!==o);s===null?i=r:s.next=a,st(r,e.memoizedState)||(pe=!0),e.memoizedState=r,e.baseState=i,e.baseQueue=s,t.lastRenderedState=r}if(A=t.interleaved,A!==null){n=A;do o=n.lane,EA.lanes|=o,Nr|=o,n=n.next;while(n!==A)}else n===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Rl(A){var e=je(),t=e.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=A;var r=t.dispatch,n=t.pending,o=e.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do o=A(o,i.action),i=i.next;while(i!==n);st(o,e.memoizedState)||(pe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,r]}function ih(){}function ah(A,e){var t=EA,r=je(),n=e(),o=!st(r.memoizedState,n);if(o&&(r.memoizedState=n,pe=!0),r=r.queue,Md(ch.bind(null,t,r,A),[A]),r.getSnapshot!==e||o||GA!==null&&GA.memoizedState.tag&1){if(t.flags|=2048,ei(9,lh.bind(null,t,r,n,e),void 0,null),WA===null)throw Error(k(349));Tr&30||sh(t,e,n)}return n}function sh(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=EA.updateQueue,e===null?(e={lastEffect:null,stores:null},EA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function lh(A,e,t,r){e.value=t,e.getSnapshot=r,uh(e)&&dh(A)}function ch(A,e,t){return t(function(){uh(e)&&dh(A)})}function uh(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!st(A,t)}catch{return!0}}function dh(A){var e=Dt(A,1);e!==null&&ot(e,A,1,-1)}function af(A){var e=ft();return typeof A=="function"&&(A=A()),e.memoizedState=e.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:A},e.queue=A,A=A.dispatch=r3.bind(null,EA,A),[e.memoizedState,A]}function ei(A,e,t,r){return A={tag:A,create:e,destroy:t,deps:r,next:null},e=EA.updateQueue,e===null?(e={lastEffect:null,stores:null},EA.updateQueue=e,e.lastEffect=A.next=A):(t=e.lastEffect,t===null?e.lastEffect=A.next=A:(r=t.next,t.next=A,A.next=r,e.lastEffect=A)),A}function fh(){return je().memoizedState}function ha(A,e,t,r){var n=ft();EA.flags|=A,n.memoizedState=ei(1|e,t,void 0,r===void 0?null:r)}function Ms(A,e,t,r){var n=je();r=r===void 0?null:r;var o=void 0;if(TA!==null){var i=TA.memoizedState;if(o=i.destroy,r!==null&&Id(r,i.deps)){n.memoizedState=ei(e,t,o,r);return}}EA.flags|=A,n.memoizedState=ei(1|e,t,o,r)}function sf(A,e){return ha(8390656,8,A,e)}function Md(A,e){return Ms(2048,8,A,e)}function gh(A,e){return Ms(4,2,A,e)}function ph(A,e){return Ms(4,4,A,e)}function hh(A,e){if(typeof e=="function")return A=A(),e(A),function(){e(null)};if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Bh(A,e,t){return t=t!=null?t.concat([A]):null,Ms(4,4,hh.bind(null,e,A),t)}function _d(){}function vh(A,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(t.memoizedState=[A,e],A)}function wh(A,e){var t=je();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&Id(e,r[1])?r[0]:(A=A(),t.memoizedState=[A,e],A)}function mh(A,e,t){return Tr&21?(st(t,e)||(t=yp(),EA.lanes|=t,Nr|=t,A.baseState=!0),e):(A.baseState&&(A.baseState=!1,pe=!0),A.memoizedState=t)}function e3(A,e){var t=lA;lA=t!==0&&4>t?t:4,A(!0);var r=Tl.transition;Tl.transition={};try{A(!1),e()}finally{lA=t,Tl.transition=r}}function Ch(){return je().memoizedState}function t3(A,e,t){var r=sr(A);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qh(A))yh(e,t);else if(t=qp(A,e,t,r),t!==null){var n=le();ot(t,A,r,n),Fh(t,e,r)}}function r3(A,e,t){var r=sr(A),n={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qh(A))yh(e,n);else{var o=A.alternate;if(A.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var i=e.lastRenderedState,a=o(i,t);if(n.hasEagerState=!0,n.eagerState=a,st(a,i)){var s=e.interleaved;s===null?(n.next=n,xd(e)):(n.next=s.next,s.next=n),e.interleaved=n;return}}catch{}finally{}t=qp(A,e,n,r),t!==null&&(n=le(),ot(t,A,r,n),Fh(t,e,r))}}function Qh(A){var e=A.alternate;return A===EA||e!==null&&e===EA}function yh(A,e){bo=qa=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function Fh(A,e,t){if(t&4194240){var r=e.lanes;r&=A.pendingLanes,t|=r,e.lanes=t,dd(A,t)}}var As={readContext:Ge,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},n3={readContext:Ge,useCallback:function(A,e){return ft().memoizedState=[A,e===void 0?null:e],A},useContext:Ge,useEffect:sf,useImperativeHandle:function(A,e,t){return t=t!=null?t.concat([A]):null,ha(4194308,4,hh.bind(null,e,A),t)},useLayoutEffect:function(A,e){return ha(4194308,4,A,e)},useInsertionEffect:function(A,e){return ha(4,2,A,e)},useMemo:function(A,e){var t=ft();return e=e===void 0?null:e,A=A(),t.memoizedState=[A,e],A},useReducer:function(A,e,t){var r=ft();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:e},r.queue=A,A=A.dispatch=t3.bind(null,EA,A),[r.memoizedState,A]},useRef:function(A){var e=ft();return A={current:A},e.memoizedState=A},useState:af,useDebugValue:_d,useDeferredValue:function(A){return ft().memoizedState=A},useTransition:function(){var A=af(!1),e=A[0];return A=e3.bind(null,A[1]),ft().memoizedState=A,[e,A]},useMutableSource:function(){},useSyncExternalStore:function(A,e,t){var r=EA,n=ft();if(FA){if(t===void 0)throw Error(k(407));t=t()}else{if(t=e(),WA===null)throw Error(k(349));Tr&30||sh(r,e,t)}n.memoizedState=t;var o={value:t,getSnapshot:e};return n.queue=o,sf(ch.bind(null,r,o,A),[A]),r.flags|=2048,ei(9,lh.bind(null,r,o,t,e),void 0,null),t},useId:function(){var A=ft(),e=WA.identifierPrefix;if(FA){var t=kt,r=Ht;t=(r&~(1<<32-nt(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=qo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=A3++,e=":"+e+"r"+t.toString(32)+":";return A.memoizedState=e},unstable_isNewReconciler:!1},o3={readContext:Ge,useCallback:vh,useContext:Ge,useEffect:Md,useImperativeHandle:Bh,useInsertionEffect:gh,useLayoutEffect:ph,useMemo:wh,useReducer:Nl,useRef:fh,useState:function(){return Nl(Ai)},useDebugValue:_d,useDeferredValue:function(A){var e=je();return mh(e,TA.memoizedState,A)},useTransition:function(){var A=Nl(Ai)[0],e=je().memoizedState;return[A,e]},useMutableSource:ih,useSyncExternalStore:ah,useId:Ch,unstable_isNewReconciler:!1},i3={readContext:Ge,useCallback:vh,useContext:Ge,useEffect:Md,useImperativeHandle:Bh,useInsertionEffect:gh,useLayoutEffect:ph,useMemo:wh,useReducer:Rl,useRef:fh,useState:function(){return Rl(Ai)},useDebugValue:_d,useDeferredValue:function(A){var e=je();return TA===null?e.memoizedState=A:mh(e,TA.memoizedState,A)},useTransition:function(){var A=Rl(Ai)[0],e=je().memoizedState;return[A,e]},useMutableSource:ih,useSyncExternalStore:ah,useId:Ch,unstable_isNewReconciler:!1};function bn(A,e){try{var t="",r=e;do t+=Mv(r),r=r.return;while(r);var n=t}catch(o){n=`
Error generating stack: `+o.message+`
`+o.stack}return{value:A,source:e,stack:n,digest:null}}function Ol(A,e,t){return{value:A,source:null,stack:t??null,digest:e??null}}function eu(A,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var a3=typeof WeakMap=="function"?WeakMap:Map;function Uh(A,e,t){t=It(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ts||(ts=!0,uu=r),eu(A,e)},t}function xh(A,e,t){t=It(-1,t),t.tag=3;var r=A.type.getDerivedStateFromError;if(typeof r=="function"){var n=e.value;t.payload=function(){return r(n)},t.callback=function(){eu(A,e)}}var o=A.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){eu(A,e),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),t}function lf(A,e,t){var r=A.pingCache;if(r===null){r=A.pingCache=new a3;var n=new Set;r.set(e,n)}else n=r.get(e),n===void 0&&(n=new Set,r.set(e,n));n.has(t)||(n.add(t),A=C3.bind(null,A,e,t),e.then(A,A))}function cf(A){do{var e;if((e=A.tag===13)&&(e=A.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return A;A=A.return}while(A!==null);return null}function uf(A,e,t,r,n){return A.mode&1?(A.flags|=65536,A.lanes=n,A):(A===e?A.flags|=65536:(A.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=It(-1,1),e.tag=2,ir(t,e,1))),t.lanes|=1),A)}var s3=Nt.ReactCurrentOwner,pe=!1;function se(A,e,t,r){e.child=A===null?nh(e,null,t,r):xn(e,A.child,t,r)}function df(A,e,t,r,n){t=t.render;var o=e.ref;return mn(e,n),r=Ld(A,e,t,r,o,n),t=Sd(),A!==null&&!pe?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Kt(A,e,n)):(FA&&t&&md(e),e.flags|=1,se(A,e,r,n),e.child)}function ff(A,e,t,r,n){if(A===null){var o=t.type;return typeof o=="function"&&!Pd(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,Eh(A,e,o,r,n)):(A=ma(t.type,null,r,e,e.mode,n),A.ref=e.ref,A.return=e,e.child=A)}if(o=A.child,!(A.lanes&n)){var i=o.memoizedProps;if(t=t.compare,t=t!==null?t:Wo,t(i,r)&&A.ref===e.ref)return Kt(A,e,n)}return e.flags|=1,A=lr(o,r),A.ref=e.ref,A.return=e,e.child=A}function Eh(A,e,t,r,n){if(A!==null){var o=A.memoizedProps;if(Wo(o,r)&&A.ref===e.ref)if(pe=!1,e.pendingProps=r=o,(A.lanes&n)!==0)A.flags&131072&&(pe=!0);else return e.lanes=A.lanes,Kt(A,e,n)}return tu(A,e,t,r,n)}function bh(A,e,t){var r=e.pendingProps,n=r.children,o=A!==null?A.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fA(dn,Ee),Ee|=t;else{if(!(t&1073741824))return A=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:A,cachePool:null,transitions:null},e.updateQueue=null,fA(dn,Ee),Ee|=A,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,fA(dn,Ee),Ee|=r}else o!==null?(r=o.baseLanes|t,e.memoizedState=null):r=t,fA(dn,Ee),Ee|=r;return se(A,e,n,t),e.child}function Hh(A,e){var t=e.ref;(A===null&&t!==null||A!==null&&A.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function tu(A,e,t,r,n){var o=we(t)?Dr:oe.current;return o=Fn(e,o),mn(e,n),t=Ld(A,e,t,r,o,n),r=Sd(),A!==null&&!pe?(e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~n,Kt(A,e,n)):(FA&&r&&md(e),e.flags|=1,se(A,e,t,n),e.child)}function gf(A,e,t,r,n){if(we(t)){var o=!0;za(e)}else o=!1;if(mn(e,n),e.stateNode===null)Ba(A,e),th(e,t,r),Au(e,t,r,n),r=!0;else if(A===null){var i=e.stateNode,a=e.memoizedProps;i.props=a;var s=i.context,l=t.contextType;typeof l=="object"&&l!==null?l=Ge(l):(l=we(t)?Dr:oe.current,l=Fn(e,l));var c=t.getDerivedStateFromProps,u=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==l)&&nf(e,i,r,l),Wt=!1;var f=e.memoizedState;i.state=f,Ja(e,r,i,n),s=e.memoizedState,a!==r||f!==s||ve.current||Wt?(typeof c=="function"&&(qc(e,t,c,r),s=e.memoizedState),(a=Wt||rf(e,t,a,r,f,s,l))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=s),i.props=r,i.state=s,i.context=l,r=a):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{i=e.stateNode,Ah(A,e),a=e.memoizedProps,l=e.type===e.elementType?a:Ze(e.type,a),i.props=l,u=e.pendingProps,f=i.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=we(t)?Dr:oe.current,s=Fn(e,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==u||f!==s)&&nf(e,i,r,s),Wt=!1,f=e.memoizedState,i.state=f,Ja(e,r,i,n);var B=e.memoizedState;a!==u||f!==B||ve.current||Wt?(typeof p=="function"&&(qc(e,t,p,r),B=e.memoizedState),(l=Wt||rf(e,t,l,r,f,B,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,B,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,B,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=B),i.props=r,i.state=B,i.context=s,r=l):(typeof i.componentDidUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===A.memoizedProps&&f===A.memoizedState||(e.flags|=1024),r=!1)}return ru(A,e,t,r,o,n)}function ru(A,e,t,r,n,o){Hh(A,e);var i=(e.flags&128)!==0;if(!r&&!i)return n&&Z1(e,t,!1),Kt(A,e,o);r=e.stateNode,s3.current=e;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,A!==null&&i?(e.child=xn(e,A.child,null,o),e.child=xn(e,null,a,o)):se(A,e,a,o),e.memoizedState=r.state,n&&Z1(e,t,!0),e.child}function kh(A){var e=A.stateNode;e.pendingContext?J1(A,e.pendingContext,e.pendingContext!==e.context):e.context&&J1(A,e.context,!1),bd(A,e.containerInfo)}function pf(A,e,t,r,n){return Un(),Qd(n),e.flags|=256,se(A,e,t,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ou(A){return{baseLanes:A,cachePool:null,transitions:null}}function Ih(A,e,t){var r=e.pendingProps,n=xA.current,o=!1,i=(e.flags&128)!==0,a;if((a=i)||(a=A!==null&&A.memoizedState===null?!1:(n&2)!==0),a?(o=!0,e.flags&=-129):(A===null||A.memoizedState!==null)&&(n|=1),fA(xA,n&1),A===null)return Jc(e),A=e.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(e.mode&1?A.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=r.children,A=r.fallback,o?(r=e.mode,o=e.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ks(i,r,0,null),A=Hr(A,r,t,null),o.return=e,A.return=e,o.sibling=A,e.child=o,e.child.memoizedState=ou(t),e.memoizedState=nu,A):Dd(e,i));if(n=A.memoizedState,n!==null&&(a=n.dehydrated,a!==null))return l3(A,e,i,r,a,n,t);if(o){o=r.fallback,i=e.mode,n=A.child,a=n.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&e.child!==n?(r=e.child,r.childLanes=0,r.pendingProps=s,e.deletions=null):(r=lr(n,s),r.subtreeFlags=n.subtreeFlags&14680064),a!==null?o=lr(a,o):(o=Hr(o,i,t,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,i=A.child.memoizedState,i=i===null?ou(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=A.childLanes&~t,e.memoizedState=nu,r}return o=A.child,A=o.sibling,r=lr(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,A!==null&&(t=e.deletions,t===null?(e.deletions=[A],e.flags|=16):t.push(A)),e.child=r,e.memoizedState=null,r}function Dd(A,e){return e=Ks({mode:"visible",children:e},A.mode,0,null),e.return=A,A.child=e}function Ii(A,e,t,r){return r!==null&&Qd(r),xn(e,A.child,null,t),A=Dd(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function l3(A,e,t,r,n,o,i){if(t)return e.flags&256?(e.flags&=-257,r=Ol(Error(k(422))),Ii(A,e,i,r)):e.memoizedState!==null?(e.child=A.child,e.flags|=128,null):(o=r.fallback,n=e.mode,r=Ks({mode:"visible",children:r.children},n,0,null),o=Hr(o,n,i,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&xn(e,A.child,null,i),e.child.memoizedState=ou(i),e.memoizedState=nu,o);if(!(e.mode&1))return Ii(A,e,i,null);if(n.data==="$!"){if(r=n.nextSibling&&n.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Ol(o,r,void 0),Ii(A,e,i,r)}if(a=(i&A.childLanes)!==0,pe||a){if(r=WA,r!==null){switch(i&-i){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(r.suspendedLanes|i)?0:n,n!==0&&n!==o.retryLane&&(o.retryLane=n,Dt(A,n),ot(r,A,n,-1))}return Vd(),r=Ol(Error(k(421))),Ii(A,e,i,r)}return n.data==="$?"?(e.flags|=128,e.child=A.child,e=Q3.bind(null,A),n._reactRetry=e,null):(A=o.treeContext,be=or(n.nextSibling),He=e,FA=!0,et=null,A!==null&&(De[Ke++]=Ht,De[Ke++]=kt,De[Ke++]=Kr,Ht=A.id,kt=A.overflow,Kr=e),e=Dd(e,r.children),e.flags|=4096,e)}function hf(A,e,t){A.lanes|=e;var r=A.alternate;r!==null&&(r.lanes|=e),Zc(A.return,e,t)}function Vl(A,e,t,r,n){var o=A.memoizedState;o===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:n}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=n)}function Lh(A,e,t){var r=e.pendingProps,n=r.revealOrder,o=r.tail;if(se(A,e,r.children,t),r=xA.current,r&2)r=r&1|2,e.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&hf(A,t,e);else if(A.tag===19)hf(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}r&=1}if(fA(xA,r),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(t=e.child,n=null;t!==null;)A=t.alternate,A!==null&&Za(A)===null&&(n=t),t=t.sibling;t=n,t===null?(n=e.child,e.child=null):(n=t.sibling,t.sibling=null),Vl(e,!1,n,t,o);break;case"backwards":for(t=null,n=e.child,e.child=null;n!==null;){if(A=n.alternate,A!==null&&Za(A)===null){e.child=n;break}A=n.sibling,n.sibling=t,t=n,n=A}Vl(e,!0,t,null,o);break;case"together":Vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(A,e){!(e.mode&1)&&A!==null&&(A.alternate=null,e.alternate=null,e.flags|=2)}function Kt(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Nr|=e.lanes,!(t&e.childLanes))return null;if(A!==null&&e.child!==A.child)throw Error(k(153));if(e.child!==null){for(A=e.child,t=lr(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=lr(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function c3(A,e,t){switch(e.tag){case 3:kh(e),Un();break;case 5:oh(e);break;case 1:we(e.type)&&za(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,n=e.memoizedProps.value;fA(Xa,r._currentValue),r._currentValue=n;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fA(xA,xA.current&1),e.flags|=128,null):t&e.child.childLanes?Ih(A,e,t):(fA(xA,xA.current&1),A=Kt(A,e,t),A!==null?A.sibling:null);fA(xA,xA.current&1);break;case 19:if(r=(t&e.childLanes)!==0,A.flags&128){if(r)return Lh(A,e,t);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),fA(xA,xA.current),r)break;return null;case 22:case 23:return e.lanes=0,bh(A,e,t)}return Kt(A,e,t)}var Sh,iu,Mh,_h;Sh=function(A,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)A.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};iu=function(){};Mh=function(A,e,t,r){var n=A.memoizedProps;if(n!==r){A=e.stateNode,Fr(vt.current);var o=null;switch(t){case"input":n=bc(A,n),r=bc(A,r),o=[];break;case"select":n=bA({},n,{value:void 0}),r=bA({},r,{value:void 0}),o=[];break;case"textarea":n=Ic(A,n),r=Ic(A,r),o=[];break;default:typeof n.onClick!="function"&&typeof r.onClick=="function"&&(A.onclick=Ga)}Sc(t,r);var i;t=null;for(l in n)if(!r.hasOwnProperty(l)&&n.hasOwnProperty(l)&&n[l]!=null)if(l==="style"){var a=n[l];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ro.hasOwnProperty(l)?o||(o=[]):(o=o||[]).push(l,null));for(l in r){var s=r[l];if(a=n!=null?n[l]:void 0,r.hasOwnProperty(l)&&s!==a&&(s!=null||a!=null))if(l==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(t||(t={}),t[i]=s[i])}else t||(o||(o=[]),o.push(l,t)),t=s;else l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(l,s)):l==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(l,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(l)?(s!=null&&l==="onScroll"&&pA("scroll",A),o||a===s||(o=[])):(o=o||[]).push(l,s))}t&&(o=o||[]).push("style",t);var l=o;(e.updateQueue=l)&&(e.flags|=4)}};_h=function(A,e,t,r){t!==r&&(e.flags|=4)};function Ao(A,e){if(!FA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:r.sibling=null}}function ee(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,r=0;if(e)for(var n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags&14680064,r|=n.flags&14680064,n.return=A,n=n.sibling;else for(n=A.child;n!==null;)t|=n.lanes|n.childLanes,r|=n.subtreeFlags,r|=n.flags,n.return=A,n=n.sibling;return A.subtreeFlags|=r,A.childLanes=t,e}function u3(A,e,t){var r=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(e),null;case 1:return we(e.type)&&ja(),ee(e),null;case 3:return r=e.stateNode,En(),wA(ve),wA(oe),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(A===null||A.child===null)&&(Hi(e)?e.flags|=4:A===null||A.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,et!==null&&(gu(et),et=null))),iu(A,e),ee(e),null;case 5:Hd(e);var n=Fr(Zo.current);if(t=e.type,A!==null&&e.stateNode!=null)Mh(A,e,t,r,n),A.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ee(e),null}if(A=Fr(vt.current),Hi(e)){r=e.stateNode,t=e.type;var o=e.memoizedProps;switch(r[ht]=e,r[Yo]=o,A=(e.mode&1)!==0,t){case"dialog":pA("cancel",r),pA("close",r);break;case"iframe":case"object":case"embed":pA("load",r);break;case"video":case"audio":for(n=0;n<co.length;n++)pA(co[n],r);break;case"source":pA("error",r);break;case"img":case"image":case"link":pA("error",r),pA("load",r);break;case"details":pA("toggle",r);break;case"input":F1(r,o),pA("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pA("invalid",r);break;case"textarea":x1(r,o),pA("invalid",r)}Sc(t,o),n=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,A),n=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&bi(r.textContent,a,A),n=["children",""+a]):Ro.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&pA("scroll",r)}switch(t){case"input":mi(r),U1(r,o,!0);break;case"textarea":mi(r),E1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ga)}r=n,e.updateQueue=r,r!==null&&(e.flags|=4)}else{i=n.nodeType===9?n:n.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=sp(t)),A==="http://www.w3.org/1999/xhtml"?t==="script"?(A=i.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof r.is=="string"?A=i.createElement(t,{is:r.is}):(A=i.createElement(t),t==="select"&&(i=A,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):A=i.createElementNS(A,t),A[ht]=e,A[Yo]=r,Sh(A,e,!1,!1),e.stateNode=A;A:{switch(i=Mc(t,r),t){case"dialog":pA("cancel",A),pA("close",A),n=r;break;case"iframe":case"object":case"embed":pA("load",A),n=r;break;case"video":case"audio":for(n=0;n<co.length;n++)pA(co[n],A);n=r;break;case"source":pA("error",A),n=r;break;case"img":case"image":case"link":pA("error",A),pA("load",A),n=r;break;case"details":pA("toggle",A),n=r;break;case"input":F1(A,r),n=bc(A,r),pA("invalid",A);break;case"option":n=r;break;case"select":A._wrapperState={wasMultiple:!!r.multiple},n=bA({},r,{value:void 0}),pA("invalid",A);break;case"textarea":x1(A,r),n=Ic(A,r),pA("invalid",A);break;default:n=r}Sc(t,n),a=n;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?up(A,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&lp(A,s)):o==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Oo(A,s):typeof s=="number"&&Oo(A,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ro.hasOwnProperty(o)?s!=null&&o==="onScroll"&&pA("scroll",A):s!=null&&id(A,o,s,i))}switch(t){case"input":mi(A),U1(A,r,!1);break;case"textarea":mi(A),E1(A);break;case"option":r.value!=null&&A.setAttribute("value",""+dr(r.value));break;case"select":A.multiple=!!r.multiple,o=r.value,o!=null?hn(A,!!r.multiple,o,!1):r.defaultValue!=null&&hn(A,!!r.multiple,r.defaultValue,!0);break;default:typeof n.onClick=="function"&&(A.onclick=Ga)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break A;case"img":r=!0;break A;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ee(e),null;case 6:if(A&&e.stateNode!=null)_h(A,e,A.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(t=Fr(Zo.current),Fr(vt.current),Hi(e)){if(r=e.stateNode,t=e.memoizedProps,r[ht]=e,(o=r.nodeValue!==t)&&(A=He,A!==null))switch(A.tag){case 3:bi(r.nodeValue,t,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&bi(r.nodeValue,t,(A.mode&1)!==0)}o&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return ee(e),null;case 13:if(wA(xA),r=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(FA&&be!==null&&e.mode&1&&!(e.flags&128))Zp(),Un(),e.flags|=98560,o=!1;else if(o=Hi(e),r!==null&&r.dehydrated!==null){if(A===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ht]=e}else Un(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ee(e),o=!1}else et!==null&&(gu(et),et=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(A!==null&&A.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(A===null||xA.current&1?RA===0&&(RA=3):Vd())),e.updateQueue!==null&&(e.flags|=4),ee(e),null);case 4:return En(),iu(A,e),A===null&&$o(e.stateNode.containerInfo),ee(e),null;case 10:return Ud(e.type._context),ee(e),null;case 17:return we(e.type)&&ja(),ee(e),null;case 19:if(wA(xA),o=e.memoizedState,o===null)return ee(e),null;if(r=(e.flags&128)!==0,i=o.rendering,i===null)if(r)Ao(o,!1);else{if(RA!==0||A!==null&&A.flags&128)for(A=e.child;A!==null;){if(i=Za(A),i!==null){for(e.flags|=128,Ao(o,!1),r=i.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)o=t,A=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=A,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,A=i.dependencies,o.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),t=t.sibling;return fA(xA,xA.current&1|2),e.child}A=A.sibling}o.tail!==null&&LA()>Hn&&(e.flags|=128,r=!0,Ao(o,!1),e.lanes=4194304)}else{if(!r)if(A=Za(i),A!==null){if(e.flags|=128,r=!0,t=A.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!FA)return ee(e),null}else 2*LA()-o.renderingStartTime>Hn&&t!==1073741824&&(e.flags|=128,r=!0,Ao(o,!1),e.lanes=4194304);o.isBackwards?(i.sibling=e.child,e.child=i):(t=o.last,t!==null?t.sibling=i:e.child=i,o.last=i)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=LA(),e.sibling=null,t=xA.current,fA(xA,r?t&1|2:t&1),e):(ee(e),null);case 22:case 23:return Od(),r=e.memoizedState!==null,A!==null&&A.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ee&1073741824&&(ee(e),e.subtreeFlags&6&&(e.flags|=8192)):ee(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function d3(A,e){switch(Cd(e),e.tag){case 1:return we(e.type)&&ja(),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return En(),wA(ve),wA(oe),kd(),A=e.flags,A&65536&&!(A&128)?(e.flags=A&-65537|128,e):null;case 5:return Hd(e),null;case 13:if(wA(xA),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Un()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return wA(xA),null;case 4:return En(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Li=!1,ne=!1,f3=typeof WeakSet=="function"?WeakSet:Set,O=null;function un(A,e){var t=A.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){HA(A,e,r)}else t.current=null}function au(A,e,t){try{t()}catch(r){HA(A,e,r)}}var Bf=!1;function g3(A,e){if(Gc=Oa,A=Np(),wd(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var n=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break A}var i=0,a=-1,s=-1,l=0,c=0,u=A,f=null;e:for(;;){for(var p;u!==t||n!==0&&u.nodeType!==3||(a=i+n),u!==o||r!==0&&u.nodeType!==3||(s=i+r),u.nodeType===3&&(i+=u.nodeValue.length),(p=u.firstChild)!==null;)f=u,u=p;for(;;){if(u===A)break e;if(f===t&&++l===n&&(a=i),f===o&&++c===r&&(s=i),(p=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=p}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(jc={focusedElem:A,selectionRange:t},Oa=!1,O=e;O!==null;)if(e=O,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,O=A;else for(;O!==null;){e=O;try{var B=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var w=B.memoizedProps,x=B.memoizedState,g=e.stateNode,d=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:Ze(e.type,w),x);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(C){HA(e,e.return,C)}if(A=e.sibling,A!==null){A.return=e.return,O=A;break}O=e.return}return B=Bf,Bf=!1,B}function Ho(A,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&A)===A){var o=n.destroy;n.destroy=void 0,o!==void 0&&au(e,t,o)}n=n.next}while(n!==r)}}function _s(A,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function su(A){var e=A.ref;if(e!==null){var t=A.stateNode;switch(A.tag){case 5:A=t;break;default:A=t}typeof e=="function"?e(A):e.current=A}}function Dh(A){var e=A.alternate;e!==null&&(A.alternate=null,Dh(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&(delete e[ht],delete e[Yo],delete e[$c],delete e[Yw],delete e[Jw])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function Kh(A){return A.tag===5||A.tag===3||A.tag===4}function vf(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Kh(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function lu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(A,e):t.insertBefore(A,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(A,t)):(e=t,e.appendChild(A)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ga));else if(r!==4&&(A=A.child,A!==null))for(lu(A,e,t),A=A.sibling;A!==null;)lu(A,e,t),A=A.sibling}function cu(A,e,t){var r=A.tag;if(r===5||r===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(r!==4&&(A=A.child,A!==null))for(cu(A,e,t),A=A.sibling;A!==null;)cu(A,e,t),A=A.sibling}var XA=null,At=!1;function Ot(A,e,t){for(t=t.child;t!==null;)Th(A,e,t),t=t.sibling}function Th(A,e,t){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Es,t)}catch{}switch(t.tag){case 5:ne||un(t,e);case 6:var r=XA,n=At;XA=null,Ot(A,e,t),XA=r,At=n,XA!==null&&(At?(A=XA,t=t.stateNode,A.nodeType===8?A.parentNode.removeChild(t):A.removeChild(t)):XA.removeChild(t.stateNode));break;case 18:XA!==null&&(At?(A=XA,t=t.stateNode,A.nodeType===8?_l(A.parentNode,t):A.nodeType===1&&_l(A,t),jo(A)):_l(XA,t.stateNode));break;case 4:r=XA,n=At,XA=t.stateNode.containerInfo,At=!0,Ot(A,e,t),XA=r,At=n;break;case 0:case 11:case 14:case 15:if(!ne&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){n=r=r.next;do{var o=n,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&au(t,e,i),n=n.next}while(n!==r)}Ot(A,e,t);break;case 1:if(!ne&&(un(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){HA(t,e,a)}Ot(A,e,t);break;case 21:Ot(A,e,t);break;case 22:t.mode&1?(ne=(r=ne)||t.memoizedState!==null,Ot(A,e,t),ne=r):Ot(A,e,t);break;default:Ot(A,e,t)}}function wf(A){var e=A.updateQueue;if(e!==null){A.updateQueue=null;var t=A.stateNode;t===null&&(t=A.stateNode=new f3),e.forEach(function(r){var n=y3.bind(null,A,r);t.has(r)||(t.add(r),r.then(n,n))})}}function $e(A,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var n=t[r];try{var o=A,i=e,a=i;A:for(;a!==null;){switch(a.tag){case 5:XA=a.stateNode,At=!1;break A;case 3:XA=a.stateNode.containerInfo,At=!0;break A;case 4:XA=a.stateNode.containerInfo,At=!0;break A}a=a.return}if(XA===null)throw Error(k(160));Th(o,i,n),XA=null,At=!1;var s=n.alternate;s!==null&&(s.return=null),n.return=null}catch(l){HA(n,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nh(e,A),e=e.sibling}function Nh(A,e){var t=A.alternate,r=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if($e(e,A),ut(A),r&4){try{Ho(3,A,A.return),_s(3,A)}catch(w){HA(A,A.return,w)}try{Ho(5,A,A.return)}catch(w){HA(A,A.return,w)}}break;case 1:$e(e,A),ut(A),r&512&&t!==null&&un(t,t.return);break;case 5:if($e(e,A),ut(A),r&512&&t!==null&&un(t,t.return),A.flags&32){var n=A.stateNode;try{Oo(n,"")}catch(w){HA(A,A.return,w)}}if(r&4&&(n=A.stateNode,n!=null)){var o=A.memoizedProps,i=t!==null?t.memoizedProps:o,a=A.type,s=A.updateQueue;if(A.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ip(n,o),Mc(a,i);var l=Mc(a,o);for(i=0;i<s.length;i+=2){var c=s[i],u=s[i+1];c==="style"?up(n,u):c==="dangerouslySetInnerHTML"?lp(n,u):c==="children"?Oo(n,u):id(n,c,u,l)}switch(a){case"input":Hc(n,o);break;case"textarea":ap(n,o);break;case"select":var f=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?hn(n,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?hn(n,!!o.multiple,o.defaultValue,!0):hn(n,!!o.multiple,o.multiple?[]:"",!1))}n[Yo]=o}catch(w){HA(A,A.return,w)}}break;case 6:if($e(e,A),ut(A),r&4){if(A.stateNode===null)throw Error(k(162));n=A.stateNode,o=A.memoizedProps;try{n.nodeValue=o}catch(w){HA(A,A.return,w)}}break;case 3:if($e(e,A),ut(A),r&4&&t!==null&&t.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(w){HA(A,A.return,w)}break;case 4:$e(e,A),ut(A);break;case 13:$e(e,A),ut(A),n=A.child,n.flags&8192&&(o=n.memoizedState!==null,n.stateNode.isHidden=o,!o||n.alternate!==null&&n.alternate.memoizedState!==null||(Nd=LA())),r&4&&wf(A);break;case 22:if(c=t!==null&&t.memoizedState!==null,A.mode&1?(ne=(l=ne)||c,$e(e,A),ne=l):$e(e,A),ut(A),r&8192){if(l=A.memoizedState!==null,(A.stateNode.isHidden=l)&&!c&&A.mode&1)for(O=A,c=A.child;c!==null;){for(u=O=c;O!==null;){switch(f=O,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ho(4,f,f.return);break;case 1:un(f,f.return);var B=f.stateNode;if(typeof B.componentWillUnmount=="function"){r=f,t=f.return;try{e=r,B.props=e.memoizedProps,B.state=e.memoizedState,B.componentWillUnmount()}catch(w){HA(r,t,w)}}break;case 5:un(f,f.return);break;case 22:if(f.memoizedState!==null){Cf(u);continue}}p!==null?(p.return=f,O=p):Cf(u)}c=c.sibling}A:for(c=null,u=A;;){if(u.tag===5){if(c===null){c=u;try{n=u.stateNode,l?(o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,s=u.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=cp("display",i))}catch(w){HA(A,A.return,w)}}}else if(u.tag===6){if(c===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(w){HA(A,A.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===A)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===A)break A;for(;u.sibling===null;){if(u.return===null||u.return===A)break A;c===u&&(c=null),u=u.return}c===u&&(c=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:$e(e,A),ut(A),r&4&&wf(A);break;case 21:break;default:$e(e,A),ut(A)}}function ut(A){var e=A.flags;if(e&2){try{A:{for(var t=A.return;t!==null;){if(Kh(t)){var r=t;break A}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var n=r.stateNode;r.flags&32&&(Oo(n,""),r.flags&=-33);var o=vf(A);cu(A,o,n);break;case 3:case 4:var i=r.stateNode.containerInfo,a=vf(A);lu(A,a,i);break;default:throw Error(k(161))}}catch(s){HA(A,A.return,s)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function p3(A,e,t){O=A,Rh(A)}function Rh(A,e,t){for(var r=(A.mode&1)!==0;O!==null;){var n=O,o=n.child;if(n.tag===22&&r){var i=n.memoizedState!==null||Li;if(!i){var a=n.alternate,s=a!==null&&a.memoizedState!==null||ne;a=Li;var l=ne;if(Li=i,(ne=s)&&!l)for(O=n;O!==null;)i=O,s=i.child,i.tag===22&&i.memoizedState!==null?Qf(n):s!==null?(s.return=i,O=s):Qf(n);for(;o!==null;)O=o,Rh(o),o=o.sibling;O=n,Li=a,ne=l}mf(A)}else n.subtreeFlags&8772&&o!==null?(o.return=n,O=o):mf(A)}}function mf(A){for(;O!==null;){var e=O;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ne||_s(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ne)if(t===null)r.componentDidMount();else{var n=e.elementType===e.type?t.memoizedProps:Ze(e.type,t.memoizedProps);r.componentDidUpdate(n,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&tf(e,o,r);break;case 3:var i=e.updateQueue;if(i!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}tf(e,i,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var s=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var u=c.dehydrated;u!==null&&jo(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ne||e.flags&512&&su(e)}catch(f){HA(e,e.return,f)}}if(e===A){O=null;break}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}}function Cf(A){for(;O!==null;){var e=O;if(e===A){O=null;break}var t=e.sibling;if(t!==null){t.return=e.return,O=t;break}O=e.return}}function Qf(A){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{_s(4,e)}catch(s){HA(e,t,s)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var n=e.return;try{r.componentDidMount()}catch(s){HA(e,n,s)}}var o=e.return;try{su(e)}catch(s){HA(e,o,s)}break;case 5:var i=e.return;try{su(e)}catch(s){HA(e,i,s)}}}catch(s){HA(e,e.return,s)}if(e===A){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var h3=Math.ceil,es=Nt.ReactCurrentDispatcher,Kd=Nt.ReactCurrentOwner,Ve=Nt.ReactCurrentBatchConfig,rA=0,WA=null,KA=null,ZA=0,Ee=0,dn=hr(0),RA=0,ti=null,Nr=0,Ds=0,Td=0,ko=null,ge=null,Nd=0,Hn=1/0,Ut=null,ts=!1,uu=null,ar=null,Si=!1,Zt=null,rs=0,Io=0,du=null,va=-1,wa=0;function le(){return rA&6?LA():va!==-1?va:va=LA()}function sr(A){return A.mode&1?rA&2&&ZA!==0?ZA&-ZA:qw.transition!==null?(wa===0&&(wa=yp()),wa):(A=lA,A!==0||(A=window.event,A=A===void 0?16:kp(A.type)),A):1}function ot(A,e,t,r){if(50<Io)throw Io=0,du=null,Error(k(185));li(A,t,r),(!(rA&2)||A!==WA)&&(A===WA&&(!(rA&2)&&(Ds|=t),RA===4&&Yt(A,ZA)),me(A,r),t===1&&rA===0&&!(e.mode&1)&&(Hn=LA()+500,Ls&&Br()))}function me(A,e){var t=A.callbackNode;qv(A,e);var r=Ra(A,A===WA?ZA:0);if(r===0)t!==null&&k1(t),A.callbackNode=null,A.callbackPriority=0;else if(e=r&-r,A.callbackPriority!==e){if(t!=null&&k1(t),e===1)A.tag===0?Zw(yf.bind(null,A)):Xp(yf.bind(null,A)),$w(function(){!(rA&6)&&Br()}),t=null;else{switch(Fp(r)){case 1:t=ud;break;case 4:t=Cp;break;case 16:t=Na;break;case 536870912:t=Qp;break;default:t=Na}t=$h(t,Oh.bind(null,A))}A.callbackPriority=e,A.callbackNode=t}}function Oh(A,e){if(va=-1,wa=0,rA&6)throw Error(k(327));var t=A.callbackNode;if(Cn()&&A.callbackNode!==t)return null;var r=Ra(A,A===WA?ZA:0);if(r===0)return null;if(r&30||r&A.expiredLanes||e)e=ns(A,r);else{e=r;var n=rA;rA|=2;var o=Ph();(WA!==A||ZA!==e)&&(Ut=null,Hn=LA()+500,br(A,e));do try{w3();break}catch(a){Vh(A,a)}while(!0);Fd(),es.current=o,rA=n,KA!==null?e=0:(WA=null,ZA=0,e=RA)}if(e!==0){if(e===2&&(n=Nc(A),n!==0&&(r=n,e=fu(A,n))),e===1)throw t=ti,br(A,0),Yt(A,r),me(A,LA()),t;if(e===6)Yt(A,r);else{if(n=A.current.alternate,!(r&30)&&!B3(n)&&(e=ns(A,r),e===2&&(o=Nc(A),o!==0&&(r=o,e=fu(A,o))),e===1))throw t=ti,br(A,0),Yt(A,r),me(A,LA()),t;switch(A.finishedWork=n,A.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:mr(A,ge,Ut);break;case 3:if(Yt(A,r),(r&130023424)===r&&(e=Nd+500-LA(),10<e)){if(Ra(A,0)!==0)break;if(n=A.suspendedLanes,(n&r)!==r){le(),A.pingedLanes|=A.suspendedLanes&n;break}A.timeoutHandle=Wc(mr.bind(null,A,ge,Ut),e);break}mr(A,ge,Ut);break;case 4:if(Yt(A,r),(r&4194240)===r)break;for(e=A.eventTimes,n=-1;0<r;){var i=31-nt(r);o=1<<i,i=e[i],i>n&&(n=i),r&=~o}if(r=n,r=LA()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*h3(r/1960))-r,10<r){A.timeoutHandle=Wc(mr.bind(null,A,ge,Ut),r);break}mr(A,ge,Ut);break;case 5:mr(A,ge,Ut);break;default:throw Error(k(329))}}}return me(A,LA()),A.callbackNode===t?Oh.bind(null,A):null}function fu(A,e){var t=ko;return A.current.memoizedState.isDehydrated&&(br(A,e).flags|=256),A=ns(A,e),A!==2&&(e=ge,ge=t,e!==null&&gu(e)),A}function gu(A){ge===null?ge=A:ge.push.apply(ge,A)}function B3(A){for(var e=A;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var n=t[r],o=n.getSnapshot;n=n.value;try{if(!st(o(),n))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(A,e){for(e&=~Td,e&=~Ds,A.suspendedLanes|=e,A.pingedLanes&=~e,A=A.expirationTimes;0<e;){var t=31-nt(e),r=1<<t;A[t]=-1,e&=~r}}function yf(A){if(rA&6)throw Error(k(327));Cn();var e=Ra(A,0);if(!(e&1))return me(A,LA()),null;var t=ns(A,e);if(A.tag!==0&&t===2){var r=Nc(A);r!==0&&(e=r,t=fu(A,r))}if(t===1)throw t=ti,br(A,0),Yt(A,e),me(A,LA()),t;if(t===6)throw Error(k(345));return A.finishedWork=A.current.alternate,A.finishedLanes=e,mr(A,ge,Ut),me(A,LA()),null}function Rd(A,e){var t=rA;rA|=1;try{return A(e)}finally{rA=t,rA===0&&(Hn=LA()+500,Ls&&Br())}}function Rr(A){Zt!==null&&Zt.tag===0&&!(rA&6)&&Cn();var e=rA;rA|=1;var t=Ve.transition,r=lA;try{if(Ve.transition=null,lA=1,A)return A()}finally{lA=r,Ve.transition=t,rA=e,!(rA&6)&&Br()}}function Od(){Ee=dn.current,wA(dn)}function br(A,e){A.finishedWork=null,A.finishedLanes=0;var t=A.timeoutHandle;if(t!==-1&&(A.timeoutHandle=-1,Ww(t)),KA!==null)for(t=KA.return;t!==null;){var r=t;switch(Cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ja();break;case 3:En(),wA(ve),wA(oe),kd();break;case 5:Hd(r);break;case 4:En();break;case 13:wA(xA);break;case 19:wA(xA);break;case 10:Ud(r.type._context);break;case 22:case 23:Od()}t=t.return}if(WA=A,KA=A=lr(A.current,null),ZA=Ee=e,RA=0,ti=null,Td=Ds=Nr=0,ge=ko=null,yr!==null){for(e=0;e<yr.length;e++)if(t=yr[e],r=t.interleaved,r!==null){t.interleaved=null;var n=r.next,o=t.pending;if(o!==null){var i=o.next;o.next=n,r.next=i}t.pending=r}yr=null}return A}function Vh(A,e){do{var t=KA;try{if(Fd(),pa.current=As,qa){for(var r=EA.memoizedState;r!==null;){var n=r.queue;n!==null&&(n.pending=null),r=r.next}qa=!1}if(Tr=0,GA=TA=EA=null,bo=!1,qo=0,Kd.current=null,t===null||t.return===null){RA=1,ti=e,KA=null;break}A:{var o=A,i=t.return,a=t,s=e;if(e=ZA,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var l=s,c=a,u=c.tag;if(!(c.mode&1)&&(u===0||u===11||u===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=cf(i);if(p!==null){p.flags&=-257,uf(p,i,a,o,e),p.mode&1&&lf(o,l,e),e=p,s=l;var B=e.updateQueue;if(B===null){var w=new Set;w.add(s),e.updateQueue=w}else B.add(s);break A}else{if(!(e&1)){lf(o,l,e),Vd();break A}s=Error(k(426))}}else if(FA&&a.mode&1){var x=cf(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),uf(x,i,a,o,e),Qd(bn(s,a));break A}}o=s=bn(s,a),RA!==4&&(RA=2),ko===null?ko=[o]:ko.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=Uh(o,s,e);ef(o,g);break A;case 1:a=s;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ar===null||!ar.has(h)))){o.flags|=65536,e&=-e,o.lanes|=e;var C=xh(o,a,e);ef(o,C);break A}}o=o.return}while(o!==null)}jh(t)}catch(y){e=y,KA===t&&t!==null&&(KA=t=t.return);continue}break}while(!0)}function Ph(){var A=es.current;return es.current=As,A===null?As:A}function Vd(){(RA===0||RA===3||RA===2)&&(RA=4),WA===null||!(Nr&268435455)&&!(Ds&268435455)||Yt(WA,ZA)}function ns(A,e){var t=rA;rA|=2;var r=Ph();(WA!==A||ZA!==e)&&(Ut=null,br(A,e));do try{v3();break}catch(n){Vh(A,n)}while(!0);if(Fd(),rA=t,es.current=r,KA!==null)throw Error(k(261));return WA=null,ZA=0,RA}function v3(){for(;KA!==null;)Gh(KA)}function w3(){for(;KA!==null&&!Gv();)Gh(KA)}function Gh(A){var e=Wh(A.alternate,A,Ee);A.memoizedProps=A.pendingProps,e===null?jh(A):KA=e,Kd.current=null}function jh(A){var e=A;do{var t=e.alternate;if(A=e.return,e.flags&32768){if(t=d3(t,e),t!==null){t.flags&=32767,KA=t;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{RA=6,KA=null;return}}else if(t=u3(t,e,Ee),t!==null){KA=t;return}if(e=e.sibling,e!==null){KA=e;return}KA=e=A}while(e!==null);RA===0&&(RA=5)}function mr(A,e,t){var r=lA,n=Ve.transition;try{Ve.transition=null,lA=1,m3(A,e,t,r)}finally{Ve.transition=n,lA=r}return null}function m3(A,e,t,r){do Cn();while(Zt!==null);if(rA&6)throw Error(k(327));t=A.finishedWork;var n=A.finishedLanes;if(t===null)return null;if(A.finishedWork=null,A.finishedLanes=0,t===A.current)throw Error(k(177));A.callbackNode=null,A.callbackPriority=0;var o=t.lanes|t.childLanes;if(Aw(A,o),A===WA&&(KA=WA=null,ZA=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Si||(Si=!0,$h(Na,function(){return Cn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var i=lA;lA=1;var a=rA;rA|=4,Kd.current=null,g3(A,t),Nh(t,A),Rw(jc),Oa=!!Gc,jc=Gc=null,A.current=t,p3(t),jv(),rA=a,lA=i,Ve.transition=o}else A.current=t;if(Si&&(Si=!1,Zt=A,rs=n),o=A.pendingLanes,o===0&&(ar=null),$v(t.stateNode),me(A,LA()),e!==null)for(r=A.onRecoverableError,t=0;t<e.length;t++)n=e[t],r(n.value,{componentStack:n.stack,digest:n.digest});if(ts)throw ts=!1,A=uu,uu=null,A;return rs&1&&A.tag!==0&&Cn(),o=A.pendingLanes,o&1?A===du?Io++:(Io=0,du=A):Io=0,Br(),null}function Cn(){if(Zt!==null){var A=Fp(rs),e=Ve.transition,t=lA;try{if(Ve.transition=null,lA=16>A?16:A,Zt===null)var r=!1;else{if(A=Zt,Zt=null,rs=0,rA&6)throw Error(k(331));var n=rA;for(rA|=4,O=A.current;O!==null;){var o=O,i=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var l=a[s];for(O=l;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Ho(8,c,o)}var u=c.child;if(u!==null)u.return=c,O=u;else for(;O!==null;){c=O;var f=c.sibling,p=c.return;if(Dh(c),c===l){O=null;break}if(f!==null){f.return=p,O=f;break}O=p}}}var B=o.alternate;if(B!==null){var w=B.child;if(w!==null){B.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,O=i;else A:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ho(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,O=g;break A}O=o.return}}var d=A.current;for(O=d;O!==null;){i=O;var h=i.child;if(i.subtreeFlags&2064&&h!==null)h.return=i,O=h;else A:for(i=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_s(9,a)}}catch(y){HA(a,a.return,y)}if(a===i){O=null;break A}var C=a.sibling;if(C!==null){C.return=a.return,O=C;break A}O=a.return}}if(rA=n,Br(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Es,A)}catch{}r=!0}return r}finally{lA=t,Ve.transition=e}}return!1}function Ff(A,e,t){e=bn(t,e),e=Uh(A,e,1),A=ir(A,e,1),e=le(),A!==null&&(li(A,1,e),me(A,e))}function HA(A,e,t){if(A.tag===3)Ff(A,A,t);else for(;e!==null;){if(e.tag===3){Ff(e,A,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){A=bn(t,A),A=xh(e,A,1),e=ir(e,A,1),A=le(),e!==null&&(li(e,1,A),me(e,A));break}}e=e.return}}function C3(A,e,t){var r=A.pingCache;r!==null&&r.delete(e),e=le(),A.pingedLanes|=A.suspendedLanes&t,WA===A&&(ZA&t)===t&&(RA===4||RA===3&&(ZA&130023424)===ZA&&500>LA()-Nd?br(A,0):Td|=t),me(A,e)}function zh(A,e){e===0&&(A.mode&1?(e=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):e=1);var t=le();A=Dt(A,e),A!==null&&(li(A,e,t),me(A,t))}function Q3(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),zh(A,t)}function y3(A,e){var t=0;switch(A.tag){case 13:var r=A.stateNode,n=A.memoizedState;n!==null&&(t=n.retryLane);break;case 19:r=A.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),zh(A,t)}var Wh;Wh=function(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps||ve.current)pe=!0;else{if(!(A.lanes&t)&&!(e.flags&128))return pe=!1,c3(A,e,t);pe=!!(A.flags&131072)}else pe=!1,FA&&e.flags&1048576&&Yp(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(A,e),A=e.pendingProps;var n=Fn(e,oe.current);mn(e,t),n=Ld(null,e,r,A,n,t);var o=Sd();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,we(r)?(o=!0,za(e)):o=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Ed(e),n.updater=Ss,e.stateNode=n,n._reactInternals=e,Au(e,r,A,t),e=ru(null,e,r,!0,o,t)):(e.tag=0,FA&&o&&md(e),se(null,e,n,t),e=e.child),e;case 16:r=e.elementType;A:{switch(Ba(A,e),A=e.pendingProps,n=r._init,r=n(r._payload),e.type=r,n=e.tag=U3(r),A=Ze(r,A),n){case 0:e=tu(null,e,r,A,t);break A;case 1:e=gf(null,e,r,A,t);break A;case 11:e=df(null,e,r,A,t);break A;case 14:e=ff(null,e,r,Ze(r.type,A),t);break A}throw Error(k(306,r,""))}return e;case 0:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),tu(A,e,r,n,t);case 1:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),gf(A,e,r,n,t);case 3:A:{if(kh(e),A===null)throw Error(k(387));r=e.pendingProps,o=e.memoizedState,n=o.element,Ah(A,e),Ja(e,r,null,t);var i=e.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){n=bn(Error(k(423)),e),e=pf(A,e,r,t,n);break A}else if(r!==n){n=bn(Error(k(424)),e),e=pf(A,e,r,t,n);break A}else for(be=or(e.stateNode.containerInfo.firstChild),He=e,FA=!0,et=null,t=nh(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Un(),r===n){e=Kt(A,e,t);break A}se(A,e,r,t)}e=e.child}return e;case 5:return oh(e),A===null&&Jc(e),r=e.type,n=e.pendingProps,o=A!==null?A.memoizedProps:null,i=n.children,zc(r,n)?i=null:o!==null&&zc(r,o)&&(e.flags|=32),Hh(A,e),se(A,e,i,t),e.child;case 6:return A===null&&Jc(e),null;case 13:return Ih(A,e,t);case 4:return bd(e,e.stateNode.containerInfo),r=e.pendingProps,A===null?e.child=xn(e,null,r,t):se(A,e,r,t),e.child;case 11:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),df(A,e,r,n,t);case 7:return se(A,e,e.pendingProps,t),e.child;case 8:return se(A,e,e.pendingProps.children,t),e.child;case 12:return se(A,e,e.pendingProps.children,t),e.child;case 10:A:{if(r=e.type._context,n=e.pendingProps,o=e.memoizedProps,i=n.value,fA(Xa,r._currentValue),r._currentValue=i,o!==null)if(st(o.value,i)){if(o.children===n.children&&!ve.current){e=Kt(A,e,t);break A}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=It(-1,t&-t),s.tag=2;var l=o.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?s.next=s:(s.next=c.next,c.next=s),l.pending=s}}o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Zc(o.return,t,e),a.lanes|=t;break}s=s.next}}else if(o.tag===10)i=o.type===e.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(k(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),Zc(i,t,e),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}se(A,e,n.children,t),e=e.child}return e;case 9:return n=e.type,r=e.pendingProps.children,mn(e,t),n=Ge(n),r=r(n),e.flags|=1,se(A,e,r,t),e.child;case 14:return r=e.type,n=Ze(r,e.pendingProps),n=Ze(r.type,n),ff(A,e,r,n,t);case 15:return Eh(A,e,e.type,e.pendingProps,t);case 17:return r=e.type,n=e.pendingProps,n=e.elementType===r?n:Ze(r,n),Ba(A,e),e.tag=1,we(r)?(A=!0,za(e)):A=!1,mn(e,t),th(e,r,n),Au(e,r,n,t),ru(null,e,r,!0,A,t);case 19:return Lh(A,e,t);case 22:return bh(A,e,t)}throw Error(k(156,e.tag))};function $h(A,e){return mp(A,e)}function F3(A,e,t,r){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(A,e,t,r){return new F3(A,e,t,r)}function Pd(A){return A=A.prototype,!(!A||!A.isReactComponent)}function U3(A){if(typeof A=="function")return Pd(A)?1:0;if(A!=null){if(A=A.$$typeof,A===sd)return 11;if(A===ld)return 14}return 2}function lr(A,e){var t=A.alternate;return t===null?(t=Ne(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&14680064,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t}function ma(A,e,t,r,n,o){var i=2;if(r=A,typeof A=="function")Pd(A)&&(i=1);else if(typeof A=="string")i=5;else A:switch(A){case en:return Hr(t.children,n,o,e);case ad:i=8,n|=8;break;case Fc:return A=Ne(12,t,e,n|2),A.elementType=Fc,A.lanes=o,A;case Uc:return A=Ne(13,t,e,n),A.elementType=Uc,A.lanes=o,A;case xc:return A=Ne(19,t,e,n),A.elementType=xc,A.lanes=o,A;case rp:return Ks(t,n,o,e);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case ep:i=10;break A;case tp:i=9;break A;case sd:i=11;break A;case ld:i=14;break A;case zt:i=16,r=null;break A}throw Error(k(130,A==null?A:typeof A,""))}return e=Ne(i,t,e,n),e.elementType=A,e.type=r,e.lanes=o,e}function Hr(A,e,t,r){return A=Ne(7,A,r,e),A.lanes=t,A}function Ks(A,e,t,r){return A=Ne(22,A,r,e),A.elementType=rp,A.lanes=t,A.stateNode={isHidden:!1},A}function Pl(A,e,t){return A=Ne(6,A,null,e),A.lanes=t,A}function Gl(A,e,t){return e=Ne(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}function x3(A,e,t,r,n){this.tag=e,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fl(0),this.expirationTimes=Fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.identifierPrefix=r,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Gd(A,e,t,r,n,o,i,a,s){return A=new x3(A,e,t,a,s),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ne(3,null,null,e),A.current=o,o.stateNode=A,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(o),A}function E3(A,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:A,containerInfo:e,implementation:t}}function Xh(A){if(!A)return fr;A=A._reactInternals;A:{if(Vr(A)!==A||A.tag!==1)throw Error(k(170));var e=A;do{switch(e.tag){case 3:e=e.stateNode.context;break A;case 1:if(we(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break A}}e=e.return}while(e!==null);throw Error(k(171))}if(A.tag===1){var t=A.type;if(we(t))return $p(A,t,e)}return e}function Yh(A,e,t,r,n,o,i,a,s){return A=Gd(t,r,!0,A,n,o,i,a,s),A.context=Xh(null),t=A.current,r=le(),n=sr(t),o=It(r,n),o.callback=e??null,ir(t,o,n),A.current.lanes=n,li(A,n,r),me(A,r),A}function Ts(A,e,t,r){var n=e.current,o=le(),i=sr(n);return t=Xh(t),e.context===null?e.context=t:e.pendingContext=t,e=It(o,i),e.payload={element:A},r=r===void 0?null:r,r!==null&&(e.callback=r),A=ir(n,e,i),A!==null&&(ot(A,n,i,o),ga(A,n,i)),i}function os(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function Uf(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function jd(A,e){Uf(A,e),(A=A.alternate)&&Uf(A,e)}function b3(){return null}var Jh=typeof reportError=="function"?reportError:function(A){console.error(A)};function zd(A){this._internalRoot=A}Ns.prototype.render=zd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(k(409));Ts(A,e,null,null)};Ns.prototype.unmount=zd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Rr(function(){Ts(null,A,null,null)}),e[_t]=null}};function Ns(A){this._internalRoot=A}Ns.prototype.unstable_scheduleHydration=function(A){if(A){var e=Ep();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Xt.length&&e!==0&&e<Xt[t].priority;t++);Xt.splice(t,0,A),t===0&&Hp(A)}};function Wd(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Rs(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function xf(){}function H3(A,e,t,r,n){if(n){if(typeof r=="function"){var o=r;r=function(){var l=os(i);o.call(l)}}var i=Yh(e,r,A,0,null,!1,!1,"",xf);return A._reactRootContainer=i,A[_t]=i.current,$o(A.nodeType===8?A.parentNode:A),Rr(),i}for(;n=A.lastChild;)A.removeChild(n);if(typeof r=="function"){var a=r;r=function(){var l=os(s);a.call(l)}}var s=Gd(A,0,!1,null,null,!1,!1,"",xf);return A._reactRootContainer=s,A[_t]=s.current,$o(A.nodeType===8?A.parentNode:A),Rr(function(){Ts(e,s,t,r)}),s}function Os(A,e,t,r,n){var o=t._reactRootContainer;if(o){var i=o;if(typeof n=="function"){var a=n;n=function(){var s=os(i);a.call(s)}}Ts(e,i,A,n)}else i=H3(t,e,A,n,r);return os(i)}Up=function(A){switch(A.tag){case 3:var e=A.stateNode;if(e.current.memoizedState.isDehydrated){var t=lo(e.pendingLanes);t!==0&&(dd(e,t|1),me(e,LA()),!(rA&6)&&(Hn=LA()+500,Br()))}break;case 13:Rr(function(){var r=Dt(A,1);if(r!==null){var n=le();ot(r,A,1,n)}}),jd(A,1)}};fd=function(A){if(A.tag===13){var e=Dt(A,134217728);if(e!==null){var t=le();ot(e,A,134217728,t)}jd(A,134217728)}};xp=function(A){if(A.tag===13){var e=sr(A),t=Dt(A,e);if(t!==null){var r=le();ot(t,A,e,r)}jd(A,e)}};Ep=function(){return lA};bp=function(A,e){var t=lA;try{return lA=A,e()}finally{lA=t}};Dc=function(A,e,t){switch(e){case"input":if(Hc(A,t),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==A&&r.form===A.form){var n=Is(r);if(!n)throw Error(k(90));op(r),Hc(r,n)}}}break;case"textarea":ap(A,t);break;case"select":e=t.value,e!=null&&hn(A,!!t.multiple,e,!1)}};gp=Rd;pp=Rr;var k3={usingClientEntryPoint:!1,Events:[ui,on,Is,dp,fp,Rd]},eo={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I3={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=vp(A),A===null?null:A.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||b3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Es=Mi.inject(I3),Bt=Mi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k3;Ie.createPortal=function(A,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(k(200));return E3(A,e,null,t)};Ie.createRoot=function(A,e){if(!Wd(A))throw Error(k(299));var t=!1,r="",n=Jh;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Gd(A,1,!1,null,null,t,!1,r,n),A[_t]=e.current,$o(A.nodeType===8?A.parentNode:A),new zd(e)};Ie.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(k(188)):(A=Object.keys(A).join(","),Error(k(268,A)));return A=vp(e),A=A===null?null:A.stateNode,A};Ie.flushSync=function(A){return Rr(A)};Ie.hydrate=function(A,e,t){if(!Rs(e))throw Error(k(200));return Os(null,A,e,!0,t)};Ie.hydrateRoot=function(A,e,t){if(!Wd(A))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,n=!1,o="",i=Jh;if(t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),e=Yh(e,null,A,1,t??null,n,!1,o,i),A[_t]=e.current,$o(A),r)for(A=0;A<r.length;A++)t=r[A],n=t._getVersion,n=n(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n);return new Ns(e)};Ie.render=function(A,e,t){if(!Rs(e))throw Error(k(200));return Os(null,A,e,!1,t)};Ie.unmountComponentAtNode=function(A){if(!Rs(A))throw Error(k(40));return A._reactRootContainer?(Rr(function(){Os(null,null,A,!1,function(){A._reactRootContainer=null,A[_t]=null})}),!0):!1};Ie.unstable_batchedUpdates=Rd;Ie.unstable_renderSubtreeIntoContainer=function(A,e,t,r){if(!Rs(t))throw Error(k(200));if(A==null||A._reactInternals===void 0)throw Error(k(38));return Os(A,e,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function Zh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zh)}catch(A){console.error(A)}}Zh(),Yg.exports=Ie;var L3=Yg.exports,Ef=L3;Qc.createRoot=Ef.createRoot,Qc.hydrateRoot=Ef.hydrateRoot;var F=function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},F.apply(this,arguments)};function qh(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function vA(A,e){var t=typeof Symbol=="function"&&A[Symbol.iterator];if(!t)return A;var r=t.call(A),n,o=[],i;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)o.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return o}function is(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}function T(A,e){return Object.defineProperty?Object.defineProperty(A,"raw",{value:e}):A.raw=e,A}function as(A){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},as(A)}var S3=/^\s+/,M3=/\s+$/;function V(A,e){if(A=A||"",e=e||{},A instanceof V)return A;if(!(this instanceof V))return new V(A,e);var t=_3(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}V.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,o,i,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*a},setAlpha:function(e){return this._a=AB(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Hf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Hf(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=bf(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=bf(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return kf(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return N3(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(QA(this._r,255)*100)+"%",g:Math.round(QA(this._g,255)*100)+"%",b:Math.round(QA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%)":"rgba("+Math.round(QA(this._r,255)*100)+"%, "+Math.round(QA(this._g,255)*100)+"%, "+Math.round(QA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:J3[kf(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+If(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=V(e);r="#"+If(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return V(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(P3,arguments)},brighten:function(){return this._applyModification(G3,arguments)},darken:function(){return this._applyModification(j3,arguments)},desaturate:function(){return this._applyModification(R3,arguments)},saturate:function(){return this._applyModification(O3,arguments)},greyscale:function(){return this._applyModification(V3,arguments)},spin:function(){return this._applyModification(z3,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(X3,arguments)},complement:function(){return this._applyCombination(W3,arguments)},monochromatic:function(){return this._applyCombination(Y3,arguments)},splitcomplement:function(){return this._applyCombination($3,arguments)},triad:function(){return this._applyCombination(Lf,[3])},tetrad:function(){return this._applyCombination(Lf,[4])}};V.fromRatio=function(A,e){if(as(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=uo(A[r]));A=t}return V(A,e)};function _3(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,o=null,i=!1,a=!1;return typeof A=="string"&&(A=em(A)),as(A)=="object"&&(Ct(A.r)&&Ct(A.g)&&Ct(A.b)?(e=D3(A.r,A.g,A.b),i=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Ct(A.h)&&Ct(A.s)&&Ct(A.v)?(r=uo(A.s),n=uo(A.v),e=T3(A.h,r,n),i=!0,a="hsv"):Ct(A.h)&&Ct(A.s)&&Ct(A.l)&&(r=uo(A.s),o=uo(A.l),e=K3(A.h,r,o),i=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=AB(t),{ok:i,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function D3(A,e,t){return{r:QA(A,255)*255,g:QA(e,255)*255,b:QA(t,255)*255}}function bf(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=(r+n)/2;if(r==n)o=i=0;else{var s=r-n;switch(i=a>.5?s/(2-r-n):s/(r+n),r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,l:a}}function K3(A,e,t){var r,n,o;A=QA(A,360),e=QA(e,100),t=QA(t,100);function i(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=i(s,a,A+1/3),n=i(s,a,A),o=i(s,a,A-1/3)}return{r:r*255,g:n*255,b:o*255}}function Hf(A,e,t){A=QA(A,255),e=QA(e,255),t=QA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=r,s=r-n;if(i=r===0?0:s/r,r==n)o=0;else{switch(r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,v:a}}function T3(A,e,t){A=QA(A,360)*6,e=QA(e,100),t=QA(t,100);var r=Math.floor(A),n=A-r,o=t*(1-e),i=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,i,o,o,a,t][s],c=[a,t,t,i,o,o][s],u=[o,o,a,t,t,i][s];return{r:l*255,g:c*255,b:u*255}}function kf(A,e,t,r){var n=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function N3(A,e,t,r,n){var o=[tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16)),tt(eB(r))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function If(A,e,t,r){var n=[tt(eB(r)),tt(Math.round(A).toString(16)),tt(Math.round(e).toString(16)),tt(Math.round(t).toString(16))];return n.join("")}V.equals=function(A,e){return!A||!e?!1:V(A).toRgbString()==V(e).toRgbString()};V.random=function(){return V.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function R3(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.s-=e/100,t.s=Vs(t.s),V(t)}function O3(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.s+=e/100,t.s=Vs(t.s),V(t)}function V3(A){return V(A).desaturate(100)}function P3(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.l+=e/100,t.l=Vs(t.l),V(t)}function G3(A,e){e=e===0?0:e||10;var t=V(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),V(t)}function j3(A,e){e=e===0?0:e||10;var t=V(A).toHsl();return t.l-=e/100,t.l=Vs(t.l),V(t)}function z3(A,e){var t=V(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,V(t)}function W3(A){var e=V(A).toHsl();return e.h=(e.h+180)%360,V(e)}function Lf(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=V(A).toHsl(),r=[V(A)],n=360/e,o=1;o<e;o++)r.push(V({h:(t.h+o*n)%360,s:t.s,l:t.l}));return r}function $3(A){var e=V(A).toHsl(),t=e.h;return[V(A),V({h:(t+72)%360,s:e.s,l:e.l}),V({h:(t+216)%360,s:e.s,l:e.l})]}function X3(A,e,t){e=e||6,t=t||30;var r=V(A).toHsl(),n=360/t,o=[V(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,o.push(V(r));return o}function Y3(A,e){e=e||6;for(var t=V(A).toHsv(),r=t.h,n=t.s,o=t.v,i=[],a=1/e;e--;)i.push(V({h:r,s:n,v:o})),o=(o+a)%1;return i}V.mix=function(A,e,t){t=t===0?0:t||50;var r=V(A).toRgb(),n=V(e).toRgb(),o=t/100,i={r:(n.r-r.r)*o+r.r,g:(n.g-r.g)*o+r.g,b:(n.b-r.b)*o+r.b,a:(n.a-r.a)*o+r.a};return V(i)};V.readability=function(A,e){var t=V(A),r=V(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};V.isReadable=function(A,e,t){var r=V.readability(A,e),n,o;switch(o=!1,n=tm(t),n.level+n.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};V.mostReadable=function(A,e,t){var r=null,n=0,o,i,a,s;t=t||{},i=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)o=V.readability(A,e[l]),o>n&&(n=o,r=V(e[l]));return V.isReadable(A,r,{level:a,size:s})||!i?r:(t.includeFallbackColors=!1,V.mostReadable(A,["#fff","#000"],t))};var pu=V.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},J3=V.hexNames=Z3(pu);function Z3(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function AB(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function QA(A,e){q3(A)&&(A="100%");var t=Am(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function Vs(A){return Math.min(1,Math.max(0,A))}function Qe(A){return parseInt(A,16)}function q3(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function Am(A){return typeof A=="string"&&A.indexOf("%")!=-1}function tt(A){return A.length==1?"0"+A:""+A}function uo(A){return A<=1&&(A=A*100+"%"),A}function eB(A){return Math.round(parseFloat(A)*255).toString(16)}function Sf(A){return Qe(A)/255}var Xe=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ct(A){return!!Xe.CSS_UNIT.exec(A)}function em(A){A=A.replace(S3,"").replace(M3,"").toLowerCase();var e=!1;if(pu[A])A=pu[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Xe.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Xe.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Xe.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Xe.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Xe.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Xe.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Xe.hex8.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),a:Sf(t[4]),format:e?"name":"hex8"}:(t=Xe.hex6.exec(A))?{r:Qe(t[1]),g:Qe(t[2]),b:Qe(t[3]),format:e?"name":"hex"}:(t=Xe.hex4.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),a:Sf(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Xe.hex3.exec(A))?{r:Qe(t[1]+""+t[1]),g:Qe(t[2]+""+t[2]),b:Qe(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function tm(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}var Ue={},Ps={exports:{}},to={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function rm(){if(Mf)return to;Mf=1;var A=Pe,e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(a,s,l){var c,u={},f=null,p=null;l!==void 0&&(f=""+l),s.key!==void 0&&(f=""+s.key),s.ref!==void 0&&(p=s.ref);for(c in s)r.call(s,c)&&!o.hasOwnProperty(c)&&(u[c]=s[c]);if(a&&a.defaultProps)for(c in s=a.defaultProps,s)u[c]===void 0&&(u[c]=s[c]);return{$$typeof:e,type:a,key:f,ref:p,props:u,_owner:n.current}}return to.Fragment=t,to.jsx=i,to.jsxs=i,to}(function(A){A.exports=rm()})(Ps);const kn=Ps.exports.Fragment,v=Ps.exports.jsx,R=Ps.exports.jsxs;var hA="-ms-",Lo="-moz-",oA="-webkit-",tB="comm",Gs="rule",$d="decl",nm="@import",rB="@keyframes",om="@layer",nB=Math.abs,Xd=String.fromCharCode,hu=Object.assign;function im(A,e){return jA(A,0)^45?(((e<<2^jA(A,0))<<2^jA(A,1))<<2^jA(A,2))<<2^jA(A,3):0}function oB(A){return A.trim()}function xt(A,e){return(A=e.exec(A))?A[0]:A}function Y(A,e,t){return A.replace(e,t)}function Ca(A,e,t){return A.indexOf(e,t)}function jA(A,e){return A.charCodeAt(e)|0}function In(A,e,t){return A.slice(e,t)}function gt(A){return A.length}function iB(A){return A.length}function fo(A,e){return e.push(A),A}function am(A,e){return A.map(e).join("")}function _f(A,e){return A.filter(function(t){return!xt(t,e)})}var js=1,Ln=1,aB=0,ze=0,MA=0,jn="";function zs(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:js,column:Ln,length:i,return:"",siblings:a}}function Vt(A,e){return hu(zs("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function Gr(A){for(;A.root;)A=Vt(A.root,{children:[A]});fo(A,A.siblings)}function sm(){return MA}function lm(){return MA=ze>0?jA(jn,--ze):0,Ln--,MA===10&&(Ln=1,js--),MA}function it(){return MA=ze<aB?jA(jn,ze++):0,Ln++,MA===10&&(Ln=1,js++),MA}function kr(){return jA(jn,ze)}function Qa(){return ze}function Ws(A,e){return In(jn,A,e)}function Bu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cm(A){return js=Ln=1,aB=gt(jn=A),ze=0,[]}function um(A){return jn="",A}function jl(A){return oB(Ws(ze-1,vu(A===91?A+2:A===40?A+1:A)))}function dm(A){for(;(MA=kr())&&MA<33;)it();return Bu(A)>2||Bu(MA)>3?"":" "}function fm(A,e){for(;--e&&it()&&!(MA<48||MA>102||MA>57&&MA<65||MA>70&&MA<97););return Ws(A,Qa()+(e<6&&kr()==32&&it()==32))}function vu(A){for(;it();)switch(MA){case A:return ze;case 34:case 39:A!==34&&A!==39&&vu(MA);break;case 40:A===41&&vu(A);break;case 92:it();break}return ze}function gm(A,e){for(;it()&&A+MA!==57&&!(A+MA===84&&kr()===47););return"/*"+Ws(e,ze-1)+"*"+Xd(A===47?A:it())}function pm(A){for(;!Bu(kr());)it();return Ws(A,ze)}function hm(A){return um(ya("",null,null,null,[""],A=cm(A),0,[0],A))}function ya(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,f=0,p=0,B=0,w=1,x=1,g=1,d=0,h="",C=n,y=o,m=r,Q=h;x;)switch(B=d,d=it()){case 40:if(B!=108&&jA(Q,u-1)==58){Ca(Q+=Y(jl(d),"&","&\f"),"&\f",nB(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=jl(d);break;case 9:case 10:case 13:case 32:Q+=dm(B);break;case 92:Q+=fm(Qa()-1,7);continue;case 47:switch(kr()){case 42:case 47:fo(Bm(gm(it(),Qa()),e,t,s),s);break;default:Q+="/"}break;case 123*w:a[l++]=gt(Q)*g;case 125*w:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:g==-1&&(Q=Y(Q,/\f/g,"")),p>0&&gt(Q)-u&&fo(p>32?Kf(Q+";",r,t,u-1,s):Kf(Y(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(fo(m=Df(Q,e,t,l,c,n,a,h,C=[],y=[],u,o),o),d===123)if(c===0)ya(Q,e,m,m,C,o,u,a,y);else switch(f===99&&jA(Q,3)===110?100:f){case 100:case 108:case 109:case 115:ya(A,m,m,r&&fo(Df(A,m,m,0,0,n,a,h,n,C=[],u,y),y),n,y,u,a,r?C:y);break;default:ya(Q,m,m,m,[""],y,0,a,y)}}l=c=p=0,w=g=1,h=Q="",u=i;break;case 58:u=1+gt(Q),p=B;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&lm()==125)continue}switch(Q+=Xd(d),d*w){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(gt(Q)-1)*g,g=1;break;case 64:kr()===45&&(Q+=jl(it())),f=kr(),c=u=gt(h=Q+=pm(Qa())),d++;break;case 45:B===45&&gt(Q)==2&&(w=0)}}return o}function Df(A,e,t,r,n,o,i,a,s,l,c,u){for(var f=n-1,p=n===0?o:[""],B=iB(p),w=0,x=0,g=0;w<r;++w)for(var d=0,h=In(A,f+1,f=nB(x=i[w])),C=A;d<B;++d)(C=oB(x>0?p[d]+" "+h:Y(h,/&\f/g,p[d])))&&(s[g++]=C);return zs(A,e,t,n===0?Gs:a,s,l,c,u)}function Bm(A,e,t,r){return zs(A,e,t,tB,Xd(sm()),In(A,2,-2),0,r)}function Kf(A,e,t,r,n){return zs(A,e,t,$d,In(A,0,r),In(A,r+1,-1),r,n)}function sB(A,e,t){switch(im(A,e)){case 5103:return oA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return oA+A+A;case 4789:return Lo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return oA+A+Lo+A+hA+A+A;case 5936:switch(jA(A,e+11)){case 114:return oA+A+hA+Y(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return oA+A+hA+Y(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return oA+A+hA+Y(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return oA+A+hA+A+A;case 6165:return oA+A+hA+"flex-"+A+A;case 5187:return oA+A+Y(A,/(\w+).+(:[^]+)/,oA+"box-$1$2"+hA+"flex-$1$2")+A;case 5443:return oA+A+hA+"flex-item-"+Y(A,/flex-|-self/g,"")+(xt(A,/flex-|baseline/)?"":hA+"grid-row-"+Y(A,/flex-|-self/g,""))+A;case 4675:return oA+A+hA+"flex-line-pack"+Y(A,/align-content|flex-|-self/g,"")+A;case 5548:return oA+A+hA+Y(A,"shrink","negative")+A;case 5292:return oA+A+hA+Y(A,"basis","preferred-size")+A;case 6060:return oA+"box-"+Y(A,"-grow","")+oA+A+hA+Y(A,"grow","positive")+A;case 4554:return oA+Y(A,/([^-])(transform)/g,"$1"+oA+"$2")+A;case 6187:return Y(Y(Y(A,/(zoom-|grab)/,oA+"$1"),/(image-set)/,oA+"$1"),A,"")+A;case 5495:case 3959:return Y(A,/(image-set\([^]*)/,oA+"$1$`$1");case 4968:return Y(Y(A,/(.+:)(flex-)?(.*)/,oA+"box-pack:$3"+hA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+oA+A+A;case 4200:if(!xt(A,/flex-|baseline/))return hA+"grid-column-align"+In(A,e)+A;break;case 2592:case 3360:return hA+Y(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,xt(r.props,/grid-\w+-end/)})?~Ca(A+(t=t[e].value),"span",0)?A:hA+Y(A,"-start","")+A+hA+"grid-row-span:"+(~Ca(t,"span",0)?xt(t,/\d+/):+xt(t,/\d+/)-+xt(A,/\d+/))+";":hA+Y(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return xt(r.props,/grid-\w+-start/)})?A:hA+Y(Y(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return Y(A,/(.+)-inline(.+)/,oA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(A)-1-e>6)switch(jA(A,e+1)){case 109:if(jA(A,e+4)!==45)break;case 102:return Y(A,/(.+:)(.+)-([^]+)/,"$1"+oA+"$2-$3$1"+Lo+(jA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Ca(A,"stretch",0)?sB(Y(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return Y(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return hA+n+":"+o+l+(i?hA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if(jA(A,e+6)===121)return Y(A,":",":"+oA)+A;break;case 6444:switch(jA(A,jA(A,14)===45?18:11)){case 120:return Y(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+oA+(jA(A,14)===45?"inline-":"")+"box$3$1"+oA+"$2$3$1"+hA+"$2box$3")+A;case 100:return Y(A,":",":"+hA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(A,"scroll-","scroll-snap-")+A}return A}function ss(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function vm(A,e,t,r){switch(A.type){case om:if(A.children.length)break;case nm:case $d:return A.return=A.return||A.value;case tB:return"";case rB:return A.return=A.value+"{"+ss(A.children,r)+"}";case Gs:if(!gt(A.value=A.props.join(",")))return""}return gt(t=ss(A.children,r))?A.return=A.value+"{"+t+"}":""}function wm(A){var e=iB(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function mm(A){return function(e){e.root||(e=e.return)&&A(e)}}function Cm(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case $d:A.return=sB(A.value,A.length,t);return;case rB:return ss([Vt(A,{value:Y(A.value,"@","@"+oA)})],r);case Gs:if(A.length)return am(t=A.props,function(n){switch(xt(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gr(Vt(A,{props:[Y(n,/:(read-\w+)/,":"+Lo+"$1")]})),Gr(Vt(A,{props:[n]})),hu(A,{props:_f(t,r)});break;case"::placeholder":Gr(Vt(A,{props:[Y(n,/:(plac\w+)/,":"+oA+"input-$1")]})),Gr(Vt(A,{props:[Y(n,/:(plac\w+)/,":"+Lo+"$1")]})),Gr(Vt(A,{props:[Y(n,/:(plac\w+)/,hA+"input-$1")]})),Gr(Vt(A,{props:[n]})),hu(A,{props:_f(t,r)});break}return""})}}var Qm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sn=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",lB="active",cB="data-styled-version",$s="6.1.12",Yd=`/*!sc*/
`,ls=typeof window<"u"&&"HTMLElement"in window,ym=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Xs=Object.freeze([]),Mn=Object.freeze({});function Fm(A,e,t){return t===void 0&&(t=Mn),A.theme!==t.theme&&A.theme||e||t.theme}var uB=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Um=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xm=/(^-|-$)/g;function Tf(A){return A.replace(Um,"-").replace(xm,"")}var Em=/(a)(d)/gi,_i=52,Nf=function(A){return String.fromCharCode(A+(A>25?39:97))};function wu(A){var e,t="";for(e=Math.abs(A);e>_i;e=e/_i|0)t=Nf(e%_i)+t;return(Nf(e%_i)+t).replace(Em,"$1-$2")}var zl,dB=5381,fn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},fB=function(A){return fn(dB,A)};function bm(A){return wu(fB(A)>>>0)}function Hm(A){return A.displayName||A.name||"Component"}function Wl(A){return typeof A=="string"&&!0}var gB=typeof Symbol=="function"&&Symbol.for,pB=gB?Symbol.for("react.memo"):60115,km=gB?Symbol.for("react.forward_ref"):60112,Im={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sm=((zl={})[km]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zl[pB]=hB,zl);function Rf(A){return("type"in(e=A)&&e.type.$$typeof)===pB?hB:"$$typeof"in A?Sm[A.$$typeof]:Im;var e}var Mm=Object.defineProperty,_m=Object.getOwnPropertyNames,Of=Object.getOwnPropertySymbols,Dm=Object.getOwnPropertyDescriptor,Km=Object.getPrototypeOf,Vf=Object.prototype;function BB(A,e,t){if(typeof e!="string"){if(Vf){var r=Km(e);r&&r!==Vf&&BB(A,r,t)}var n=_m(e);Of&&(n=n.concat(Of(e)));for(var o=Rf(A),i=Rf(e),a=0;a<n.length;++a){var s=n[a];if(!(s in Lm||t&&t[s]||i&&s in i||o&&s in o)){var l=Dm(e,s);try{Mm(A,s,l)}catch{}}}}return A}function _n(A){return typeof A=="function"}function Jd(A){return typeof A=="object"&&"styledComponentId"in A}function Ur(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function Pf(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ri(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function mu(A,e,t){if(t===void 0&&(t=!1),!t&&!ri(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=mu(A[r],e[r]);else if(ri(e))for(var r in e)A[r]=mu(A[r],e[r]);return A}function Zd(A,e){Object.defineProperty(A,"toString",{value:e})}function fi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Tm=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw fi(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Yd);return t},A}(),Fa=new Map,cs=new Map,Ua=1,Di=function(A){if(Fa.has(A))return Fa.get(A);for(;cs.has(Ua);)Ua++;var e=Ua++;return Fa.set(A,e),cs.set(e,A),e},Nm=function(A,e){Ua=e+1,Fa.set(A,e),cs.set(e,A)},Rm="style[".concat(Sn,"][").concat(cB,'="').concat($s,'"]'),Om=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vm=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},Pm=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Yd),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(Om);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(Nm(c,l),Vm(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}},Gf=function(A){for(var e=document.querySelectorAll(Rm),t=0,r=e.length;t<r;t++){var n=e[t];n&&n.getAttribute(Sn)!==lB&&(Pm(A,n),n.parentNode&&n.parentNode.removeChild(n))}};function Gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Sn,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(Sn,lB),r.setAttribute(cB,$s);var i=Gm();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},jm=function(){function A(e){this.element=vB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw fi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),zm=function(){function A(e){this.element=vB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),Wm=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),jf=ls,$m={isServer:!ls,useCSSOMInjection:!ym},wB=function(){function A(e,t,r){e===void 0&&(e=Mn),t===void 0&&(t={});var n=this;this.options=F(F({},$m),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ls&&jf&&(jf=!1,Gf(this)),Zd(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var f=function(g){return cs.get(g)}(u);if(f===void 0)return"continue";var p=o.names.get(f),B=i.getGroup(u);if(p===void 0||!p.size||B.length===0)return"continue";var w="".concat(Sn,".g").concat(u,'[id="').concat(f,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(B).concat(w,'{content:"').concat(x,'"}').concat(Yd)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Di(e)},A.prototype.rehydrate=function(){!this.server&&ls&&Gf(this)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(F(F({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new Wm(n):r?new jm(n):new zm(n)}(this.options),new Tm(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Di(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Di(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Di(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),Xm=/&/g,Ym=/^\s*\/\/.*$/gm;function mB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=mB(t.children,e)),t})}function Jm(A){var e,t,r,n=A===void 0?Mn:A,o=n.options,i=o===void 0?Mn:o,a=n.plugins,s=a===void 0?Xs:a,l=function(f,p,B){return B.startsWith(t)&&B.endsWith(t)&&B.replaceAll(t,"").length>0?".".concat(e):f},c=s.slice();c.push(function(f){f.type===Gs&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Xm,t).replace(r,l))}),i.prefix&&c.push(Cm),c.push(vm);var u=function(f,p,B,w){p===void 0&&(p=""),B===void 0&&(B=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=f.replace(Ym,""),g=hm(B||p?"".concat(B," ").concat(p," { ").concat(x," }"):x);i.namespace&&(g=mB(g,i.namespace));var d=[];return ss(g,wm(c.concat(mm(function(h){return d.push(h)})))),d};return u.hash=s.length?s.reduce(function(f,p){return p.name||fi(15),fn(f,p.name)},dB).toString():"",u}var Zm=new wB,Cu=Jm(),CB=Pe.createContext({shouldForwardProp:void 0,styleSheet:Zm,stylis:Cu});CB.Consumer;Pe.createContext(void 0);function zf(){return L.useContext(CB)}var qm=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=Cu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zd(this,function(){throw fi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=Cu),this.name+e.hash},A}(),AC=function(A){return A>="A"&&A<="Z"};function Wf(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;AC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var QB=function(A){return A==null||A===!1||A===""},yB=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!QB(o)&&(Array.isArray(o)&&o.isCss||_n(o)?r.push("".concat(Wf(n),":"),o,";"):ri(o)?r.push.apply(r,is(is(["".concat(n," {")],yB(o),!1),["}"],!1)):r.push("".concat(Wf(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Qm||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Ir(A,e,t,r){if(QB(A))return[];if(Jd(A))return[".".concat(A.styledComponentId)];if(_n(A)){if(!_n(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return Ir(n,e,t,r)}var o;return A instanceof qm?t?(A.inject(t,r),[A.getName(r)]):[A]:ri(A)?yB(A):Array.isArray(A)?Array.prototype.concat.apply(Xs,A.map(function(i){return Ir(i,e,t,r)})):[A.toString()]}function eC(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(_n(t)&&!Jd(t))return!1}return!0}var tC=fB($s),rC=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&eC(e),this.componentId=t,this.baseHash=fn(tC,t),this.baseStyle=r,wB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ur(n,this.staticRulesId);else{var o=Pf(Ir(this.rules,e,t,r)),i=wu(fn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=Ur(n,i),this.staticRulesId=i}else{for(var s=fn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var f=Pf(Ir(u,e,t,r));s=fn(s,f+c),l+=f}}if(l){var p=wu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=Ur(n,p)}}return n},A}(),FB=Pe.createContext(void 0);FB.Consumer;var $l={};function nC(A,e,t){var r=Jd(A),n=A,o=!Wl(A),i=e.attrs,a=i===void 0?Xs:i,s=e.componentId,l=s===void 0?function(C,y){var m=typeof C!="string"?"sc":Tf(C);$l[m]=($l[m]||0)+1;var Q="".concat(m,"-").concat(bm($s+m+$l[m]));return y?"".concat(y,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Wl(C)?"styled.".concat(C):"Styled(".concat(Hm(C),")")}(A):c,f=e.displayName&&e.componentId?"".concat(Tf(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,B=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;B=function(C,y){return w(C,y)&&x(C,y)}}else B=w}var g=new rC(t,f,r?n.componentStyle:void 0);function d(C,y){return function(m,Q,E){var H=m.attrs,b=m.componentStyle,M=m.defaultProps,S=m.foldedComponentIds,P=m.styledComponentId,z=m.target,Z=Pe.useContext(FB),eA=zf(),tA=m.shouldForwardProp||eA.shouldForwardProp,I=Fm(Q,Z,M)||Mn,_=function(nA,sA,gA){for(var OA,mA=F(F({},sA),{className:void 0,theme:gA}),ct=0;ct<nA.length;ct+=1){var Se=_n(OA=nA[ct])?OA(mA):OA;for(var SA in Se)mA[SA]=SA==="className"?Ur(mA[SA],Se[SA]):SA==="style"?F(F({},mA[SA]),Se[SA]):Se[SA]}return sA.className&&(mA.className=Ur(mA.className,sA.className)),mA}(H,Q,I),G=_.as||z,$={};for(var W in _)_[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&_.theme===I||(W==="forwardedAs"?$.as=_.forwardedAs:tA&&!tA(W,G)||($[W]=_[W]));var UA=function(nA,sA){var gA=zf(),OA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return OA}(b,_),uA=Ur(S,P);return UA&&(uA+=" "+UA),_.className&&(uA+=" "+_.className),$[Wl(G)&&!uB.has(G)?"class":"className"]=uA,$.ref=E,L.createElement(G,$)}(h,C,y)}d.displayName=u;var h=Pe.forwardRef(d);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=B,h.foldedComponentIds=r?Ur(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=f,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(y){for(var m=[],Q=1;Q<arguments.length;Q++)m[Q-1]=arguments[Q];for(var E=0,H=m;E<H.length;E++)mu(y,H[E],!0);return y}({},n.defaultProps,C):C}}),Zd(h,function(){return".".concat(h.styledComponentId)}),o&&BB(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function $f(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var Xf=function(A){return Object.assign(A,{isCss:!0})};function oC(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(_n(A)||ri(A))return Xf(Ir($f(Xs,is([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ir(r):Xf(Ir($f(r,e)))}function Qu(A,e,t){if(t===void 0&&(t=Mn),!e)throw fi(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,oC.apply(void 0,is([n],o,!1)))};return r.attrs=function(n){return Qu(A,e,F(F({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Qu(A,e,F(F({},t),n))},r}var UB=function(A){return Qu(nC,A)},K=UB;uB.forEach(function(A){K[A]=UB(A)});var iC=L.forwardRef(function(A,e){var t=A.placement,r=t===void 0?"rt":t,n=A.gap,o=n===void 0?8:n,i=A.offsetData,a=A.hover,s=a===void 0?!1:a,l=A.hoverShow,c=l===void 0?!1:l,u=A.innerStyle,f=A.innerClassName,p=f===void 0?"":f,B=A.content,w=A.style,x=A.className,g=x===void 0?"":x,d=A.children,h=L.useMemo(function(){return!s&&!c},[s,c]),C=vA(L.useState(s||!c),2),y=C[0],m=C[1];return R(aC,F({ref:e,className:g,style:w,onMouseOver:function(){h||m(!s)},onMouseLeave:function(){h||m(!!s)}},{children:[d,B&&v(sC,F({className:"land-sffixContainer-inner ".concat(p),style:F({left:i!=null&&i.left||r==="lt"||r==="lb"?o:"auto",right:i!=null&&i.right||r==="rt"||r==="rb"?o:"auto",top:i!=null&&i.top||r==="lt"||r==="rt"?o:"auto",bottom:i!=null&&i.bottom||r==="lb"||r==="rb"?o:"auto",opacity:h||y?1:0},u),onClick:function(Q){return Q.stopPropagation()},hoverShow:c},{children:B}))]}))}),aC=K.div(Yf||(Yf=T([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .land-sffixContainer-inner{
    
  }
`],[`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .land-sffixContainer-inner{
    
  }
`]))),sC=K.div(Jf||(Jf=T([`
  position: absolute;
  opacity: `,`;
  font-family: inherit;
  z-index: 100;
  transition: opacity var(--transition-15s) linear;
  `],[`
  position: absolute;
  opacity: `,`;
  font-family: inherit;
  z-index: 100;
  transition: opacity var(--transition-15s) linear;
  `])),function(A){return A.hoverShow?0:1}),Yf,Jf;K.nav(Zf||(Zf=T([`
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
`])));var Zf,lC=function(A){var e=A.type,t=e===void 0?"img":e,r=A.url,n=A.className,o=A.style,i=A.wrapClassName,a=A.onChange,s=L.useRef(null),l=L.useRef(null),c=L.useRef(null),u=vA(L.useState({w:200,h:200,ratio:1}),2),f=u[0],p=u[1];L.useEffect(function(){if(l.current){var g=l.current.getBoundingClientRect();p({w:g.width,h:g.height,ratio:g.width/g.height})}if(c.current){var d=c.current.getBoundingClientRect();p({w:d.width,h:d.height,ratio:d.width/d.height})}a==null||a(f.w,f.h)});var B=vA(L.useState("s"),2),w=B[0],x=B[1];return L.useEffect(function(){if(s.current){var g=function(h){h.forEach(function(C){var y=C.contentRect,m=y.width,Q=y.height;m/Q>f.ratio?x("h"):m/Q<f.ratio?x("v"):x("s")})},d=new ResizeObserver(g);return d.observe(s.current),function(){return d.disconnect()}}}),v("div",F({ref:s,className:"flex items-center justify-center width-100 height-100 ".concat(i)},{children:t==="img"?v("img",{ref:l,src:r,className:"".concat(w==="h"?"height-100":"width-100"," ").concat(n),style:o}):v("video",{src:r,ref:c,preload:"auto",muted:!0,autoPlay:!0,disablePictureInPicture:!0,"x-webkit-airplay":"deny",className:"".concat(w==="h"?"height-100":"width-100"," ").concat(n),style:o})}))},cC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"IconArrowLine ".concat(s)},{children:[v("path",{d:"M24 42V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M36 30L24 42L12 30",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},uC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M31 17L24 24L17 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M31 26L24 33L17 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},dC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:v("path",{d:"M36 18L24 30L12 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})}))},fC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return v("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:v("path",{d:"M36 19L24 31L12 19H36Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s,strokeLinejoin:"round"})}))},gC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M24.0083 33.8995V6",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M36 22L24 34L12 22",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M36 42H12",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},pC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M6 9L42 9",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 19L42 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 26L24 40L42 26",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},hC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M44 20H28V4",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M4 28H20V44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},BC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},vC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:s},{children:[v("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),v("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},wC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M33 6H42V15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M42 33V42H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M15 42H6V33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 15V6H15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},mC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M6 6L16 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 41.8995L16 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M42.0001 41.8995L32.1006 32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M41.8995 6L32 15.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M32 7V16H41",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M16 7V16H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M16 41V32H7",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M32 41V32H40.8995",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},CC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M38 7L44 13L38 19",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},QC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?3:o,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:"cursor-pointer ".concat(l),onClick:c},{children:[v("path",{d:"M6 24.0083V42H42V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M33 23L24 32L15 23",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M23.9917 6V32",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},yC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M23.9917 6H6V42H24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M33 33L42 24L33 15",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M16 23.9917H42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},FC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M42 8V17H33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},UC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 9V17H14",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},xC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M19 6V42",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M7 17.8994L19 5.89941",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M29 42.1006V6.10059",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M29 42.1006L41 30.1006",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},EC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M18 28L10 33L4 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},bC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},HC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M30 28L38 33L44 25",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},kC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M42 8V24",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M6 24L6 40",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},IC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),v("path",{d:"M16 24L22 30L34 18",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},LC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:t})}))},SC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return v("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},MC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:t,strokeWidth:i,strokeLinejoin:"round"}),v("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:t,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},_C=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:t})}))},DC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return v("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})}))},KC=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.style,i=A.className;return v("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:n,strokeWidth:"2"})}))},TC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:t})}))},NC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[v("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),v("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},RC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:v("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},OC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},VC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[v("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),v("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},PC=function(A){var e=A.stroke,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:v("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:t,strokeWidth:i})}))},GC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?16:r,o=A.style,i=A.className;return v("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:o,className:i},{children:v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:t})}))},jC=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.size,i=o===void 0?16:o,a=A.strokeWidth,s=a===void 0?2:a,l=A.style,c=A.className;return R("svg",F({width:i,height:i,viewBox:"0 0 48 48",fill:"none",style:l,className:c},{children:[v("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s}),v("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:s===0?t:"none",stroke:s===0?"none":n,strokeWidth:s})]}))},zC=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFile":a,l=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[v("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:n,strokeWidth:i,strokeLinejoin:"round"}),v("path",{d:"M43 22H5",stroke:n,strokeWidth:"4",strokeLinejoin:"round"})]}))},WC=function(A){var e=A.size,t=e===void 0?16:e,r=A.fill,n=r===void 0?"currentcolor":r,o=A.className,i=o===void 0?"IconMore":o,a=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:i,style:a},{children:[v("circle",{cx:"12",cy:"24",r:"4",fill:n}),v("circle",{cx:"24",cy:"24",r:"4",fill:n}),v("circle",{cx:"36",cy:"24",r:"4",fill:n})]}))},$C=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?4:o,a=A.className,s=a===void 0?"IconFileLine":a,l=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l},{children:[v("path",{d:"M7.94971 11.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M7.94971 23.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M7.94971 35.9497H39.9497",stroke:n,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},XC=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=A.className,a=i===void 0?"IconAdd":i,s=A.style;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:a,style:s},{children:[v("path",{d:"M24.0605 10L24.0239 38",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M10 24L38 24",stroke:n,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}))},YC=function(A){var e=A.size,t=e===void 0?16:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o,a=A.className,s=a===void 0?"IconClear":a,l=A.style,c=A.onClick;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",className:s,style:l,onClick:c},{children:[v("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},JC=function(A){var e=A.size,t=e===void 0?20:e,r=A.fill,n=r===void 0?"currentcolor":r;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[v("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:n}),v("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:n}),v("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:n}),v("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:n}),v("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:n}),v("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:n}),v("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:n}),v("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:n}),v("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:n})]}))},ZC=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?3:o,a=A.className,s=a===void 0?"":a;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",className:s,xmlns:"http://www.w3.org/2000/svg"},{children:[v("path",{d:"M6 24.0083V42H42V24",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M33 15L24 6L15 15",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M23.9917 32V6",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},qC=function(A){var e=A.size,t=e===void 0?20:e,r=A.stroke,n=r===void 0?"currentcolor":r,o=A.strokeWidth,i=o===void 0?2:o;return R("svg",F({width:t,height:t,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[v("path",{d:"M14 14L34 34",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M14 34L34 14",stroke:n,strokeWidth:i,strokeLinecap:"round",strokeLinejoin:"round"})]}))},A8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?20:n,i=A.strokeWidth,a=i===void 0?2:i;return R("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[v("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:a,strokeLinejoin:"round"}),v("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round"})]}))},e8=function(A){var e=A.fill,t=e===void 0?"currentcolor":e,r=A.size,n=r===void 0?20:r;return v("svg",F({width:n,height:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},{children:v("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:t})}))},t8=function(A){var e=A.fill,t=A.stroke,r=t===void 0?"currentcolor":t,n=A.size,o=n===void 0?16:n,i=A.strokeWidth,a=i===void 0?2:i,s=A.className,l=s===void 0?"IconCopy":s;return R("svg",F({width:o,height:o,viewBox:"0 0 48 48",fill:"none",className:l},{children:[v("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-linecap":"round","stroke-linejoin":"round"}),v("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:a,"stroke-width":"2","stroke-linejoin":"round"})]}))},r8=function(A){var e=A.stroke,t=e===void 0?"currentColor":e,r=A.size,n=r===void 0?24:r,o=A.strokeWidth,i=o===void 0?2:o,a=A.style,s=A.className;return R("svg",F({width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:s},{children:[v("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:t,"stroke-width":i,strokeLinecap:"round",strokeLinejoin:"round"}),v("path",{d:"M19 29V42H29V29H19Z",stroke:t,strokeWidth:i,strokeLinejoin:"round"})]}))},$A=function(A){var e=A.name,t=qh(A,["name"]);switch(e){case"arrow-line":return v(cC,F({},t));case"arrow-double":return v(uC,F({},t));case"arrow":return v(dC,F({},t));case"arrow-triangle":return v(fC,F({},t));case"arrow-to":return v(gC,F({},t));case"toggle":return v(pC,F({},t));case"collapse":return v(hC,F({},t));case"collection":return v(BC,F({},t));case"zoom-out":return v(wC,F({},t));case"zoom-in":return v(mC,F({},t));case"loop":return v(CC,F({},t));case"download":return v(QC,F({},t));case"out":return v(yC,F({},t));case"reload":return v(FC,F({},t));case"undo":return v(UC,F({},t));case"sort":return v(xC,F({},t));case"back":return v(EC,F({},t));case"ahead":return v(bC,F({},t));case"drag":return v(HC,F({},t));case"refresh":return v(kC,F({},t));case"check-stroke":return v(IC,F({},t));case"check-fill":return v(LC,F({},t));case"check":return v(SC,F({},t));case"error-stroke":return v(MC,F({},t));case"error-fill":return v(_C,F({},t));case"error":return v(DC,F({},t));case"info-stroke":return v(KC,F({},t));case"info-fill":return v(TC,F({},t));case"info":return v(NC,F({},t));case"attention-stroke":return v(RC,F({},t));case"attention-fill":return v(OC,F({},t));case"attention":return v(VC,F({},t));case"question-stroke":return v(PC,F({},t));case"question-fill":return v(GC,F({},t));case"question":return v(jC,F({},t));case"more":return v(WC,F({},t));case"more-line":return v($C,F({},t));case"file":return v(zC,F({},t));case"add":return v(XC,F({},t));case"clear":return v(YC,F({},t));case"upload":return v(ZC,F({},t));case"application":return v(JC,F({},t));case"close":return v(qC,F({},t));case"close-circle":return v(A8,F({},t));case"color-picker":return v(e8,F({},t));case"copy":return v(t8,F({},t));case"home":return v(r8,F({},t));case"search":return v(vC,F({},t))}},qf;(function(A){A.BG="background",A.BORDER="border"})(qf||(qf={}));var Lt=function(A){var e=A.content,t=A.theme,r=t===void 0?"light":t,n=A.placement,o=n===void 0?"top":n,i=A.style,a=A.className,s=a===void 0?"":a;return R(n8,F({className:"land-pop ".concat(r," ").concat(s),style:F({top:o==="bottom"?"100%":o==="top"?"auto":"50%",bottom:o==="top"?"100%":"",left:o==="right"?"100%":o==="left"?"auto":"50%",right:o==="left"?"100%":"",transform:"translate(".concat(o==="top"||o==="bottom"?"-50%":o==="left"?"-12px":"12px",", ").concat(o==="top"?"-12px":o==="bottom"?"12px":"-50%",")")},i)},{children:[e,v("div",{className:"land-pop-arrow",style:{left:o==="left"?"100%":o==="right"?"0":"50%",top:o==="top"?"100%":o==="bottom"?"0px":"50%",bottom:o==="bottom"?"100%":"",transform:"translate(".concat("-50%",", ").concat("-50%",") rotate(").concat(o==="top"?"45":o==="bottom"?"-135":o==="right"?"135":"-45","deg)")}})]}))},n8=K.div(A0||(A0=T([`
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
`]))),A0;K.div(e0||(e0=T([`
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
`])));var e0,xa=function(A){var e=A.text,t=A.subText,r=A.icon,n=A.width,o=A.height,i=A.justify,a=i===void 0?"center":i,s=A.type,l=s===void 0?"border":s,c=A.status,u=c===void 0?"default":c,f=A.disabled,p=A.pop,B=A.PopProps,w=A.href,x=A.target,g=x===void 0?"_blank":x,d=A.onClick,h=A.children,C=A.style,y=A.className,m=y===void 0?"":y,Q=L.useMemo(function(){if(r){if(!e&&!t)return!0}else return!1},[r,e,t]),E=L.useMemo(function(){switch(u){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[u]);return v(kn,{children:w?R(o8,F({href:w,target:g,className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(f?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:o,justify:a,color:E,onClick:function(H){return d==null?void 0:d(H)}},{children:[h,r,!Q&&R("div",{children:[v("span",{children:e}),v("span",F({className:"subText"},{children:t}))]}),p&&v(Lt,F({content:p},B))]})):R(xB,F({className:"land-button ".concat(l," ").concat(u," ").concat(Q?"iconOnly":""," ").concat(f?"disabled":""," ").concat(p?"hover-pop":""," ").concat(m),style:C,width:n,height:o,justify:a,color:E,onClick:function(H){return d==null?void 0:d(H)}},{children:[h,r,!Q&&R("div",{children:[v("span",{children:e}),t&&v("span",F({className:"subText"},{children:t}))]}),p&&v(Lt,F({content:p},B))]}))})},xB=K.div(t0||(t0=T([`
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
`])),function(A){return A.justify},function(A){return A.width&&A.width!=="100%"?"":"var(--padding-medium)"},function(A){return A.width?A.width:"fit-content"},function(A){return A.height?A.height:"fit-content"},function(A){return A.color?"".concat(A.color,"6)"):"var(--color-text-2)"},function(A){return A.color?"".concat(A.color,"5)"):"var(--color-text-3)"},function(A){return A.color?"".concat(A.color,"7)"):"var(--color-text-1)"},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"var(--border-1) solid ".concat(A.color,"4)")},function(A){return"".concat(A.color,"1)")},function(A){return"".concat(A.color,"2)")},function(A){return"".concat(A.color,"4)")},function(A){return"".concat(A.color,"5)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"3)")},function(A){return"".concat(A.color,"3)")}),o8=K.a(r0||(r0=T([`
  `,`;
  text-decoration: none;
`],[`
  `,`;
  text-decoration: none;
`])),xB),t0,r0,i8=function(A){var e=A.checked,t=e===void 0?!1:e,r=A.text,n=r===void 0?"选项":r,o=A.pop,i=A.onChange;return R(a8,{children:[R(s8,F({onClick:function(){i==null||i()}},{children:[v(l8,F({className:"".concat(t?"checked":"")},{children:v($A,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})})),n]})),o&&R(c8,F({className:"hover-pop"},{children:[v($A,{name:"info-stroke",stroke:"var(--color-text-4)"}),v(Lt,{content:o,theme:"dark",style:{maxWidth:"200px"},placement:"right"})]}))]})},a8=K.div(n0||(n0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-4);
`]))),s8=K.div(o0||(o0=T([`
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
`]))),l8=K.div(i0||(i0=T([`
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
`]))),c8=K.div(a0||(a0=T([`
  position: relative;
  height: 16px;
  line-height: 16px;
`],[`
  position: relative;
  height: 16px;
  line-height: 16px;
`]))),n0,o0,i0,a0;K.div(s0||(s0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));K.div(l0||(l0=T([`
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
`])));K.div(c0||(c0=T([`
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
`])));K.div(u0||(u0=T([`
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
`])));K.div(d0||(d0=T([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var s0,l0,c0,u0,d0;K.div(f0||(f0=T([`
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
`])),function(A){return"-".concat(A.gap*2,"px")},function(A){return"-".concat(A.gap*2,"px")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"calc(100% + ".concat(A.gap*4,"px)")},function(A){return"".concat(A.size,"px solid var(--color-primary-6)")},function(A){return"".concat(A.radius,"px")},function(A){return A.checked?1:0});var f0,Ys=function(A){var e=A.children,t=A.style,r=A.className,n=vA(L.useState(132),2),o=n[0],i=n[1],a=document.querySelector(".land-header"),s=document.querySelector(".land-footer");return L.useEffect(function(){var l,c;a?l=a.getBoundingClientRect().height:l=0,s?c=s.getBoundingClientRect().height:c=0,i(l+c)}),v(u8,F({className:r,style:t,minHeight:o},{children:e}))},u8=K.main(g0||(g0=T([`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`],[`
  flex: 1;
  min-height: `,`;
  background: var(--color-bg-white);
`])),function(A){return"calc(100vh - ".concat(A.minHeight,"px)")}),g0,So=function(A){var e=A.type,t=e===void 0?"border":e,r=A.value,n=A.inputType,o=n===void 0?"text":n,i=A.placeholder,a=i===void 0?"请输入":i,s=A.prefix,l=A.useSearch,c=l===void 0?!1:l,u=A.width,f=A.maxLength,p=A.showClear,B=p===void 0?!0:p,w=A.disabled,x=A.onChange,g=A.onFocus,d=A.className,h=A.wrapStyle,C=qh(A,["type","value","inputType","placeholder","prefix","useSearch","width","maxLength","showClear","disabled","onChange","onFocus","className","wrapStyle"]),y=vA(L.useState(r),2),m=y[0],Q=y[1];return L.useEffect(function(){return Q(r)},[r]),R(d8,F({className:"land-input ".concat(w?"disabled":""," ").concat(t," ").concat(d),style:F({width:typeof u=="number"?"".concat(u,"px"):u},h)},{children:[c&&v($A,{name:"search",stroke:"var(--color-text-5)"}),s&&v("p",F({className:"input-prefix"},{children:s})),v("input",F({placeholder:a,type:o,value:m,max:f,onClick:function(E){return E.stopPropagation()},onFocus:function(E){E.stopPropagation(),g==null||g(E)},onChange:function(E){E.stopPropagation(),x==null||x(E.target.value,E)}},C)),!!m&&B&&v($A,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:function(){return Q("")}})]}))},d8=K.div(p0||(p0=T([`
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
`]))),p0,Ce=function(A){var e=A.w,t=e===void 0?"100%":e,r=A.h,n=A.column,o=A.wrap,i=A.justify,a=i===void 0?"start":i,s=A.align,l=s===void 0?"start":s,c=A.gap,u=A.bothCenter,f=A.children,p=A.style,B=A.className,w=B===void 0?"":B;return v(f8,F({className:w,style:p,width:t,height:r,direction:n?"column":"row",gap:typeof c=="number"?"".concat(c,"px"):c,wrap:o,justify:u?"center":a,align:u?"center":l},{children:f}))},f8=K.div(h0||(h0=T([`
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
`])),function(A){return A.direction},function(A){return A.gap},function(A){return A.wrap?"wrap":""},function(A){return A.justify},function(A){return A.align},function(A){return A.width},function(A){return A.height}),h0,EB=function(A){var e=A.show,t=e===void 0?!1:e,r=A.type,n=r===void 0?"default":r,o=A.text,i=o===void 0?"咕噜咕噜～":o,a=A.style,s=A.className,l=s===void 0?"":s,c=vA(L.useState(t),2),u=c[0],f=c[1];L.useEffect(function(){f(t)},[t]),L.useEffect(function(){if(u){var B=setTimeout(function(){f(!1)},1e3);return function(){return clearTimeout(B)}}},[u]);var p=L.useMemo(function(){switch(n){case"default":return{color:"white",background:"black",icon:null}}},[n]);return v(g8,F({className:"StyleToastContainer fixed radius-6 px-12 py-4 fs-14 ".concat(u?"show":"close"," ").concat(l),style:F({color:p==null?void 0:p.color,backgroundColor:p==null?void 0:p.background},a)},{children:i}))},g8=K.div(B0||(B0=T([`
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
`]))),B0,p8=[["#e9e9e9","#d9d9d9","#c4c4c4","#9d9d9d"],["#7b7b7b","#5c5c5c","#333333","#262626"],["#efccbd","#d39f9d","#c4726d","#ac3526"],["#f6e3bd","#ebbd6f","#df964a","#c76336"],["#fbf2d4","#f7e7ab","#f4db86","#ebbc58"],["#dee9d7","#bdd992","#9dbe56","#758d3a"],["#e7f6fd","#9dd9f8","#81bde5","#4f84eb"],["#cdc7ee","#877cda","#4249ac","#313fa4"],["#f6e6fb","#d69aeb","#b253d3","#8a31c4"]],v0=function(A){var e,t=A.value,r=t===void 0?"#ffffff":t,n=A.size,o=n===void 0?48:n,i=A.useSelect,a=i===void 0?!0:i,s=A.showList,l=s===void 0?!1:s,c=A.defaultColorList,u=A.showOpacity,f=u===void 0?!0:u,p=A.input,B=p===void 0?!1:p,w=A.info,x=A.active,g=x===void 0?!1:x,d=A.onChange,h=A.onClick,C=A.onCardClick,y=A.children,m=A.className,Q=A.style,E=vA(L.useState(!1),2),H=E[0],b=E[1],M=vA(L.useState(r?r==="transparent"?"transparent":r:"#ffffff"),2),S=M[0],P=M[1],z=vA(L.useState(r.split("#")[1]),2),Z=z[0],eA=z[1],tA=vA(L.useState(100),2),I=tA[0],_=tA[1],G=vA(L.useState(0),2),$=G[0],W=G[1],UA=vA(L.useState(0),2),uA=UA[0],nA=UA[1],sA=vA(L.useState(0),2),gA=sA[0],OA=sA[1],mA=L.useCallback(function(X,VA){if(VA===void 0&&(VA=100),X!=="transparent"){var Me=V(X),de=Me.toRgb(),hl=de.r,Bl=de.g,vl=de.b;return"rgba(".concat(hl,", ").concat(Bl,", ").concat(vl,", ").concat(VA/100,")")}return X},[]);L.useEffect(function(){if(r)if(r==="transparent")P("transparent");else{var X=V(r).toHsv(),VA=X.h,Me=X.s,de=X.v;W(VA),!gl&&nA(Me),!gl&&OA(de),P(r),eA(r.split("#")[1])}},[r]);var ct=L.useMemo(function(){var X=V("hsv(".concat($,",").concat(1,",").concat(1,")")).toHex();return"#".concat(X)},[$]),Se=function(X){if(X==="transparent")P("transparent");else{var VA=V(X).toHsv();W(VA.h),nA(VA.s),OA(VA.v)}},SA=vA(L.useState(!1),2),ov=SA[0],Bi=SA[1];L.useEffect(function(){var X=V("hsv(".concat($,",").concat(uA,",").concat(gA,")")).toHex();!ov&&eA(X),P("#".concat(X))},[$,uA,gA]);var ie=12,f1=vA(L.useState(!1),2),gl=f1[0],pl=f1[1],g1=function(X){var VA=X.target.getBoundingClientRect(),Me=X.clientX-VA.left,de=X.clientY-VA.top;Me>=ie/2&&Me<=VA.width-ie?nA((Me-ie/2)/(VA.width-ie)):Me<ie/2?nA(0):nA(1),de>=ie/2&&de<=VA.height-ie?OA(1-(de-ie/2)/(VA.height-ie)):de<ie/2?OA(1):OA(0),d==null||d(mA(S,I))},p1=vA(L.useState(""),2),h1=p1[0],iv=p1[1],B1=function(X){navigator.clipboard.writeText(X),iv("已复制～".concat(X))};return R(h8,F({className:"land-color-picker ".concat(m),style:F({cursor:a?"pointer":"default"},Q),color:r,size:typeof o=="string"?o:"".concat(o,"px")},{children:[v(EB,{show:!!h1,text:h1}),v("div",F({className:"land-color-trigger",onClick:function(X){X.stopPropagation(),b(!H),document.addEventListener("click",function(){b(!1)}),C==null||C()}},{children:y||R(kn,{children:[v("div",F({className:"land-color-grid hover-pop ".concat(g?"active":""),style:{backgroundColor:S==="transparent"?"transparent":mA(S,I)}},{children:w&&v(Lt,{content:w,theme:"dark"})})),typeof B!="boolean"?R("div",F({className:"land-color-label copy flex items-center justify-center",onClick:function(){return B1==null?void 0:B1(r)}},{children:[B,typeof B=="string"&&v($A,{name:"copy",size:12,stroke:"var(--color-text-5)"})]})):B?v(So,{type:"border",prefix:"#",maxLength:6,value:Z,w:o,onFocus:function(){return Bi(!0)},onChange:function(X){eA(String(X)),Se("#".concat(X))},onBlur:function(){d==null||d(mA("#".concat(Z),I)),Bi(!1)},wrapStyle:{height:24,width:"calc(100% + 16px)",fontSize:"12px",padding:"0px 6px"}}):R("p",F({className:"land-color-label"},{children:["#",Z]}))]})})),a&&R(B8,F({className:"land-color-drop ".concat(H?"show":""),onClick:function(X){return X.stopPropagation()}},{children:[v(v8,F({className:"StyledColorGrid",svColor:ct,onMouseMove:function(X){return gl&&g1(X)},onMouseDown:function(X){X.preventDefault(),g1(X),pl(!0)},onMouseUp:function(){pl(!1),h==null||h(mA(S,I))},onMouseLeave:function(){return pl(!1)}},{children:v("div",{className:"color-thumb",style:{left:ie/2+uA*(180-ie),top:ie/2+(86-ie)-gA*(86-ie)}})})),R(Ce,F({column:!0,gap:8},{children:[v(w0,{type:"range",max:360,value:$,step:1,currentColor:S,onChange:function(X){return W(Number(X.target.value))}}),f&&v(w8,{children:v(w0,{type:"range",step:1,max:100,value:I,className:"opacity",currentColor:ct,onChange:function(X){_(X.target.value),d==null||d(mA(S,I))}})})]})),R("div",F({className:"flex gap-8"},{children:[v(So,{type:"background",className:"flex-2",prefix:"#",maxLength:6,value:Z,onFocus:function(){return Bi(!0)},onChange:function(X){eA(String(X)),Se("#".concat(X))},onBlur:function(){d==null||d(mA("#".concat(Z),I)),Bi(!1)}}),f&&v(So,{type:"background",className:"flex-1",max:100,min:0,value:String(I),onChange:function(X){_(Number(X)),d==null||d(mA(S,Number(gA)))}})]})),l&&v(m8,F({className:"land-colorPicker-default-list"},{children:(e=c||p8)===null||e===void 0?void 0:e.map(function(X,VA){return v(Ce,F({column:!0,gap:4,style:{width:"18px"}},{children:X==null?void 0:X.map(function(Me){return v("div",{style:{backgroundColor:Me},className:"land-colorPicker-default-item",onClick:function(){var de=V(Me).toHsv(),hl=de.h,Bl=de.s,vl=de.v;nA(Bl),W(hl),OA(vl),d==null||d(mA(Me,I))}},VA)})}))})}))]}))]}))},h8=K.div(m0||(m0=T([`
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
`])),function(A){return A.size},function(A){return A.color}),B8=K.div(C0||(C0=T([`
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
`]))),v8=K.div(Q0||(Q0=T([`
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
`])),function(A){return A.svColor}),w0=K.input(y0||(y0=T([`
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
`])),function(A){return"linear-gradient(to right, rgba(0,0,0,0), ".concat(A.currentColor,")")},function(A){return A.currentColor}),w8=K.div(F0||(F0=T([`
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
`]))),m8=K.div(U0||(U0=T([`
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
`]))),m0,C0,Q0,y0,F0,U0;K.a(x0||(x0=T([`
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
`])));var x0,C8=function(A){var e=A.direction,t=e===void 0?"row":e,r=A.size,n=r===void 0?1:r,o=A.lang,i=o===void 0?"100%":o,a=A.margin,s=a===void 0?0:a,l=A.type,c=l===void 0?"solid":l,u=A.color,f=u===void 0?"var(--color-border-2)":u,p=A.content,B=A.align,w=B===void 0?"center":B,x=A.style,g=A.className,d=g===void 0?"":g;return R(Q8,F({className:"land-divider ".concat(d),style:F({width:t==="row"?"".concat(i):"".concat(n,"px"),height:t==="column"?"".concat(i):"".concat(n,"px"),margin:t==="row"?"".concat(s,"px 0"):"0 ".concat(s,"px")},x),direction:t,gap:p?"8px":""},{children:[v("div",{style:{flex:w==="left"?"10%":w==="right"?"90%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(f):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(f):"none"}}),p&&R(kn,{children:[v("div",F({style:{fontSize:"12px",color:"#999",writingMode:t==="column"?"vertical-rl":"unset",textOrientation:t==="column"?"upright":"unset"}},{children:p})),v("div",{style:{flex:w==="left"?"90%":w==="right"?"10%":1,height:"0px",borderBottom:t==="row"?"".concat(n,"px ").concat(c," ").concat(f):"none",borderLeft:t==="column"?"".concat(n,"px ").concat(c," ").concat(f):"none"}})]})]}))},Q8=K.div(E0||(E0=T([`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`],[`
  display: flex;
  flex-direction: `,`;
  align-items: center;
  gap: `,`;
`])),function(A){return A.direction},function(A){return A.gap}),E0;K.div(b0||(b0=T([`
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
`])));K.div(H0||(H0=T([`
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
`])),function(A){return A.placement==="left"?"0":"unset"},function(A){return A.placement==="right"?"0":"unset"});K.ul(k0||(k0=T([`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`],[`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
`])));K.li(I0||(I0=T([`
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
`])));var b0,H0,k0,I0;K.footer(L0||(L0=T([`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`],[`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`])));var L0,qe;(function(A){A.ColumnFit="column-fit",A.ColumnFill="column-fill",A.RowFit="row-fit",A.RowFill="row-fill",A.ColumnRepeat="column-repeat",A.RowRepeat="row-repeat",A.Default="default"})(qe||(qe={}));var y8=function(A){var e=A.type,t=e===void 0?qe.Default:e,r=A.autoSize,n=r===void 0?100:r,o=A.repeatNum,i=o===void 0?1:o,a=A.gap,s=a===void 0?8:a,l=A.children,c=A.style,u=A.className,f=u===void 0?"":u,p=L.useMemo(function(){var B={display:"grid",columnGap:typeof s=="number"?s:s[0],rowGap:typeof s=="number"?s:s[1]};if(t===qe.Default)return Object.assign(B,c);switch(t){case qe.ColumnFit:return Object.assign(B,{gridTemplateColumns:"repeat(auto-fit, minmax(".concat(n,", 1fr))")});case qe.ColumnFill:return Object.assign(B,{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(n,", 1fr))")});case qe.RowFit:return Object.assign(B,{gridTemplateRows:"repeat(auto-fit, minmax(".concat(n,", 1fr))")});case qe.RowFill:return Object.assign(B,{gridTemplateRows:"repeat(auto-fill, minmax(".concat(n,", 1fr))")});case qe.ColumnRepeat:return Object.assign(B,{gridTemplateColumns:"repeat(".concat(i,", 1fr)")});case qe.RowRepeat:return Object.assign(B,{gridTemplateRows:"repeat(".concat(i,", 1fr)")});default:return Object.assign(B,c)}},[t,n,i,s,c]);return v("div",F({className:"land-grid ".concat(f),style:p},{children:l}))},us;(function(A){A.SELF="self",A.OTHERS="others",A.SIMPLE="simple",A.DISABLED="disabled"})(us||(us={}));var qd=function(A){var e=A.active,t=A.data,r=A.direction,n=r===void 0?"row":r,o=A.theme,i=o===void 0?{hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"}:o,a=A.border,s=a===void 0?!0:a,l=A.onChange,c=A.onDropChange,u=A.dropProps,f=A.itemStyle,p=A.itemClassName,B=p===void 0?"":p,w=A.style,x=A.className,g=x===void 0?"":x;return v(F8,F({className:"land-menu ".concat(g),style:w,column:n==="column",border:s},{children:t==null?void 0:t.map(function(d){return R("div",F({className:"land-menu-item ".concat(d.clickType===us.SIMPLE?"simple":""," ").concat(d.clickType===us.DISABLED?"disabled":""),style:f},{children:[R(U8,F({role:"button",className:"land-menu-link ".concat(e===d.key?"active":""," ").concat(B),onClick:function(){return l==null?void 0:l(d)},column:n==="column",theme:i},{children:[typeof d.icon=="string"?v("img",{src:d.icon,className:"land-menu-icon"}):d.icon,v("p",F({className:"land-menu-title","data-title":d.title},{children:d.title})),v("span",F({className:"land-menu-sub-title"},{children:d.subTitle})),d.isNew&&v("i",F({className:"land-menu-new"},{children:typeof d.isNew=="boolean"?"NEW":d.isNew}))]}),d.key),d.dropData&&v("div",F({className:"land-menu-drop-wrap ".concat(d.open?"open":"")},{children:v("div",F({className:"land-menu-drop"},{children:v(qd,F({data:d.dropData,onChange:function(h){return c==null?void 0:c(h,d)},direction:"column"},u))}))}))]}))})}))},F8=K.div(S0||(S0=T([`
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
`])),function(A){return A.column?"column":"row"},function(A){return A.column?"":"100%"},function(A){return A.column?"100%":"fit-content"},function(A){return A.border&&!A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.border&&A.column?"var(--border-1) solid var(--color-border-1)":""},function(A){return A.column?"":"100%"}),U8=K.a(M0||(M0=T([`
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
`])),function(A){return A.column?"0":"50%"},function(A){return A.column?"50%":"0"},function(A){return A.column?"2px":"12px"},function(A){return A.column?A.theme.activeBg?"100%":"calc(100% - 16px)":"2px"},function(A){return A.column?"translateY(50%)":"translateX(50%)"},function(A){return A.theme.lineColor||"var(--color-text-1)"},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverBg},function(A){return A.theme.hoverColor},function(A){return A.theme.hoverColor},function(A){return A.theme.activeBg},function(A){return A.theme.activeColor||"var(--color-text-1)"}),S0,M0,x8=function(A){var e,t=A.h,r=t===void 0?"64px":t,n=A.fixed,o=A.filter,i=o===void 0?0:o,a=A.borderBottom,s=a===void 0?!0:a,l=A.applications,c=A.logo,u=A.name,f=A.onLogoClick,p=A.divider,B=p===void 0?!0:p,w=A.align,x=A.menuProps,g=A.rightComponent,d=A.style,h=A.className,C=h===void 0?"":h,y=vA(L.useState(!1),2),m=y[0],Q=y[1];return L.useEffect(function(){window.onscroll=function(){return Q(!1)},window.onresize=function(){return Q(!1)}}),R(E8,F({className:"land-header ".concat(n?"fixed":""," ").concat(C),style:d,height:r,filter:i,borderBottom:s,applications:!!l},{children:[R("div",F({className:"land-header-logo",onClick:f},{children:[l&&R("button",F({className:"land-header-application",onClick:function(E){return E.stopPropagation()}},{children:[v($A,{name:"application"}),v("div",F({className:"land-application-drop"},{children:l}))]})),typeof c=="string"?v("img",{src:c}):c,B&&c&&u&&v(C8,{direction:"column",lang:"24px"}),typeof u=="string"?v("img",{src:u}):u]})),v(b8,F({className:"land-header-nav",align:w,showMobileNav:m},{children:x&&v(qd,F({border:!1},x,{onChange:function(E){var H;(H=x.onChange)===null||H===void 0||H.call(x,E),Q(!1)},onDropChange:function(E,H){var b;(b=x.onDropChange)===null||b===void 0||b.call(x,E,H),Q(!1)}}))})),g&&v("div",F({className:"land-header-btns"},{children:g})),x&&x.data&&((e=x.data)===null||e===void 0?void 0:e.length)>0&&v(xa,{icon:v($A,{name:"more-line"}),type:"text",onClick:function(){return Q(!m)}})]}))},E8=K.header(_0||(_0=T([`
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
`])),function(A){return A.applications?"0":""},function(A){return A.height},function(A){return A.borderBottom?"1px solid var(--color-border-2)":""},function(A){return A.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"},function(A){return A.filter?"var(--blur-small)":""}),b8=K.div(D0||(D0=T([`
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
`])),function(A){return A.align},function(A){return A.showMobileNav?"all":"none"},function(A){return A.showMobileNav?"1":"0"}),_0,D0,H8=function(A){var e=A.size,t=e===void 0?18:e,r=A.strokeSize,n=r===void 0?2:r,o=A.color,i=o===void 0?"var(--color-text-1)":o,a=A.style,s=A.className,l=s===void 0?"":s;return v(k8,{className:"land-loading-container ".concat(l),style:a,size:t,strokeSize:n,color:i})},k8=K.div(K0||(K0=T([`
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
    )`)},function(A){return"conic-gradient(transparent 25%, ".concat(A.color,")")}),K0,Xl=function(A){var e=A.url,t=A.errorUrl,r=A.alt,n=A.ratio,o=n===void 0?1:n,i=A.width,a=i===void 0?"100%":i,s=A.loadingComponent,l=A.style,c=A.className,u=c===void 0?"":c,f=L.useRef(null),p=vA(L.useState(!0),2),B=p[0],w=p[1],x=vA(L.useState(!1),2),g=x[0],d=x[1],h=function(){setTimeout(function(){w(!1)},300)},C=function(){w(!1),d(!0)};return L.useEffect(function(){var y=f.current;if(y)return y.complete&&w(!1),y==null||y.addEventListener("load",h),y==null||y.addEventListener("error",C),function(){y==null||y.removeEventListener("load",h),y==null||y.removeEventListener("error",C)}},[]),R("div",F({className:"flex items-center justify-center bg-gray radius-6",style:{width:typeof a=="number"?"".concat(a,"px"):a,aspectRatio:B?"".concat(o):"auto"}},{children:[B&&(s||v(H8,{color:"var(--color-text-3)",className:"absolute position-center"})),g?t?v("img",{ref:f,src:t,alt:r,style:F({width:typeof a=="number"?"".concat(a,"px"):a},l),className:u}):v($A,{name:"error-fill",fill:"var(--color-red-3)",size:32}):v("img",{ref:f,src:e,alt:r,style:F({width:typeof a=="number"?"".concat(a,"px"):a},l),className:u})]}))};K.div(T0||(T0=T([`
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
        `])));K.div(N0||(N0=T([`
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
        `])));var T0,N0;K.div(R0||(R0=T([`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`],[`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`])));var R0;K.a(O0||(O0=T([`
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
`])),function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"6)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"7)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"8)")},function(A){return"".concat(A.color,"2)")});var O0;K.div(V0||(V0=T([`
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
`])),function(A){return A.suffix});var V0;K.div(P0||(P0=T([`
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
`])));var P0;K.a(G0||(G0=T([`
`],[`
`])));var G0;K.div(j0||(j0=T([`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`],[`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`])));K.div(z0||(z0=T([`
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
`])));K.div(W0||(W0=T([`
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
`])));K.div($0||($0=T([`
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
`])));K.div(X0||(X0=T([`
  position: relative;
  height: 12px;
  line-height: 12px;
`],[`
  position: relative;
  height: 12px;
  line-height: 12px;
`])));var j0,z0,W0,$0,X0,he=function(A){var e=A.title,t=A.type,r=t===void 0?"h1":t,n=A.prefix,o=A.sub,i=A.info,a=A.style,s=A.className,l=s===void 0?"":s,c=A.onClick;return R(I8,F({className:"land-title ".concat(l),style:a,onClick:function(){return c==null?void 0:c()}},{children:[n&&v("span",F({className:"land-title-prefix"},{children:n})),r==="h1"&&v("h1",{children:e}),r==="h2"&&v("h2",{children:e}),r==="h3"&&v("h3",{children:e}),r==="p"&&v("p",{children:e}),i&&R("div",F({className:"land-title-info hover-pop"},{children:[v($A,{name:"info-stroke",stroke:"var(--color-text-4)"}),v(Lt,{content:i,style:{maxWidth:"200px"}})]})),o&&typeof o=="string"?v("div",F({className:"land-title-sub"},{children:o})):v(kn,{children:o})]}))},I8=K.div(Y0||(Y0=T([`
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
`]))),Y0,L8=function(A){var e=A.data,t=A.placeholder,r=t===void 0?"请选择":t,n=A.selected,o=n===void 0?"0":n,i=A.width,a=i===void 0?"100px":i,s=A.title,l=A.titleInfo,c=A.info,u=A.disabled,f=A.onChange,p=A.className,B=p===void 0?"":p,w=A.style,x=vA(L.useState(!1),2),g=x[0],d=x[1],h=vA(L.useState(o),2),C=h[0],y=h[1];return R(S8,F({style:F({width:typeof a=="number"?"".concat(a,"px"):a},w),className:B},{children:[s&&v(he,{title:s,type:"p",info:l}),R(M8,F({className:"hover-pop ".concat(g?"show":""," ").concat(u?"disabled":""),onClick:function(m){u||(m.stopPropagation(),d(!g))}},{children:[v("p",F({className:"".concat(C!=="0"?"land-select-trigger":"land-select-placeholder")},{children:C==="0"?r:e==null?void 0:e.filter(function(m){return m.value===C})[0].label})),v($A,{name:"arrow",className:"land-select-value-arrow"}),c&&v(Lt,{content:c,theme:"dark"})]})),v(_8,F({className:"land-select-results ".concat(g?"show":"")},{children:v(D8,{children:e==null?void 0:e.map(function(m){return R(K8,F({className:"".concat(m.tip?"hover-pop":""," ").concat(C===m.value?"selected":""," ").concat(m.disabled?"disabled":""),onClick:function(){m.disabled||(y(m.value),f==null||f(m),d(!1))}},{children:[v("div",F({className:"land-select-results-item-label"},{children:m.label})),m.info&&R("div",F({className:"land-select-item-info ".concat(m.info?"hover-pop":"")},{children:[v($A,{name:"info-stroke",size:12}),m.info&&v(Lt,{content:m.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]})),m.tip&&v(Lt,{content:m.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]}),m.value)})})}))]}))},S8=K.div(J0||(J0=T([`
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
`]))),M8=K.div(Z0||(Z0=T([`
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
`]))),_8=K.div(q0||(q0=T([`
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
`]))),D8=K.ul(A2||(A2=T([`
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
`]))),K8=K.li(e2||(e2=T([`
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
`]))),J0,Z0,q0,A2,e2;K.div(t2||(t2=T([`
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
`])));K.div(r2||(r2=T([`
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
`])));K.div(n2||(n2=T([`
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
`])));K.ul(o2||(o2=T([`
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
`])));K.li(i2||(i2=T([`
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
`])));K.ul(a2||(a2=T([`
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

`])),function(A){return A.show?1:0},function(A){return A.show?"all":"none"});var t2,r2,n2,o2,i2,a2;K.aside(s2||(s2=T([`
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
`])),function(A){return A.fixed?"fixed":""},function(A){return A.collapsed?"0px":A.width},function(A){return A.placement==="right"?"var(--border-1) solid var(--color-border-2)":""},function(A){return A.placement==="left"?"var(--border-1) solid var(--color-border-2)":""});var s2;K.div(l2||(l2=T([`
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
          linear-gradient(to right,transparent calc(100% - 1px), var(--border-3) calc(100% - 1px),var(--border-3) 100%) 0 0 / `.concat(A.step,"% 100%,var(--color-gray-2) 0 0 / 100% 100%"):""});K.input(c2||(c2=T([`
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
`])));var l2,c2;K.div(u2||(u2=T([`
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
`])));var u2;K.div(d2||(d2=T([`
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
`])));var d2;K.table(f2||(f2=T([`
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
`])));var f2,T8=function(A){var e=A.desc,t=A.fileType,r=A.onUpload,n=A.children,o=A.width,i=o===void 0?"100%":o,a=A.height,s=a===void 0?"100%":a,l=A.style,c=A.className,u=c===void 0?"":c,f=A.innerClassName,p=f===void 0?"":f,B=L.useRef(null),w=vA(L.useState(),2),x=w[0],g=w[1],d=vA(L.useState(),2),h=d[0],C=d[1],y=vA(L.useState(!1),2),m=y[0],Q=y[1],E=function(S,P){if(S.preventDefault(),Q(!0),P){C(P);var z=new FileReader;z.readAsDataURL(P),g(URL.createObjectURL(P)),Q(!1)}};L.useEffect(function(){r==null||r(x,h)},[x]);var H=vA(L.useState(!1),2),b=H[0],M=H[1];return R(N8,F({className:"".concat(b?"drag":""," ").concat(u),style:l,onDragOver:function(S){M(!0),S.preventDefault()},onDrop:function(S){return E(S,S.dataTransfer.files[0])},onDragLeave:function(){return M(!1)},width:i,height:s},{children:[v(R8,{ref:B,type:"file",accept:t,className:p,onChange:function(S){E(S,S.target.files[0])}}),n||(m?v(kn,{children:"上传中"}):R(kn,{children:[v("div",F({className:"land-uploader-icon"},{children:v($A,{name:"upload"})})),(e||b)&&v("div",F({className:"land-uploader-desc"},{children:b?"释放即可上传":e}))]}))]}))},N8=K.label(g2||(g2=T([`
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
`])),function(A){return A.width},function(A){return A.height}),R8=K.input(p2||(p2=T([`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`],[`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`]))),g2,p2,Be=function(){return Be=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Be.apply(this,arguments)};function ds(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||Array.prototype.slice.call(e))}var BA="-ms-",Mo="-moz-",iA="-webkit-",bB="comm",Js="rule",A1="decl",O8="@import",HB="@keyframes",V8="@layer",kB=Math.abs,e1=String.fromCharCode,yu=Object.assign;function P8(A,e){return zA(A,0)^45?(((e<<2^zA(A,0))<<2^zA(A,1))<<2^zA(A,2))<<2^zA(A,3):0}function IB(A){return A.trim()}function Et(A,e){return(A=e.exec(A))?A[0]:A}function J(A,e,t){return A.replace(e,t)}function Ea(A,e,t){return A.indexOf(e,t)}function zA(A,e){return A.charCodeAt(e)|0}function Dn(A,e,t){return A.slice(e,t)}function pt(A){return A.length}function LB(A){return A.length}function go(A,e){return e.push(A),A}function G8(A,e){return A.map(e).join("")}function h2(A,e){return A.filter(function(t){return!Et(t,e)})}var Zs=1,Kn=1,SB=0,We=0,_A=0,zn="";function qs(A,e,t,r,n,o,i,a){return{value:A,root:e,parent:t,type:r,props:n,children:o,line:Zs,column:Kn,length:i,return:"",siblings:a}}function Pt(A,e){return yu(qs("",null,null,"",null,null,0,A.siblings),A,{length:-A.length},e)}function jr(A){for(;A.root;)A=Pt(A.root,{children:[A]});go(A,A.siblings)}function j8(){return _A}function z8(){return _A=We>0?zA(zn,--We):0,Kn--,_A===10&&(Kn=1,Zs--),_A}function at(){return _A=We<SB?zA(zn,We++):0,Kn++,_A===10&&(Kn=1,Zs++),_A}function Lr(){return zA(zn,We)}function ba(){return We}function Al(A,e){return Dn(zn,A,e)}function Fu(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W8(A){return Zs=Kn=1,SB=pt(zn=A),We=0,[]}function $8(A){return zn="",A}function Yl(A){return IB(Al(We-1,Uu(A===91?A+2:A===40?A+1:A)))}function X8(A){for(;(_A=Lr())&&_A<33;)at();return Fu(A)>2||Fu(_A)>3?"":" "}function Y8(A,e){for(;--e&&at()&&!(_A<48||_A>102||_A>57&&_A<65||_A>70&&_A<97););return Al(A,ba()+(e<6&&Lr()==32&&at()==32))}function Uu(A){for(;at();)switch(_A){case A:return We;case 34:case 39:A!==34&&A!==39&&Uu(_A);break;case 40:A===41&&Uu(A);break;case 92:at();break}return We}function J8(A,e){for(;at()&&A+_A!==57;)if(A+_A===84&&Lr()===47)break;return"/*"+Al(e,We-1)+"*"+e1(A===47?A:at())}function Z8(A){for(;!Fu(Lr());)at();return Al(A,We)}function q8(A){return $8(Ha("",null,null,null,[""],A=W8(A),0,[0],A))}function Ha(A,e,t,r,n,o,i,a,s){for(var l=0,c=0,u=i,f=0,p=0,B=0,w=1,x=1,g=1,d=0,h="",C=n,y=o,m=r,Q=h;x;)switch(B=d,d=at()){case 40:if(B!=108&&zA(Q,u-1)==58){Ea(Q+=J(Yl(d),"&","&\f"),"&\f",kB(l?a[l-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:Q+=Yl(d);break;case 9:case 10:case 13:case 32:Q+=X8(B);break;case 92:Q+=Y8(ba()-1,7);continue;case 47:switch(Lr()){case 42:case 47:go(A5(J8(at(),ba()),e,t,s),s);break;default:Q+="/"}break;case 123*w:a[l++]=pt(Q)*g;case 125*w:case 59:case 0:switch(d){case 0:case 125:x=0;case 59+c:g==-1&&(Q=J(Q,/\f/g,"")),p>0&&pt(Q)-u&&go(p>32?v2(Q+";",r,t,u-1,s):v2(J(Q," ","")+";",r,t,u-2,s),s);break;case 59:Q+=";";default:if(go(m=B2(Q,e,t,l,c,n,a,h,C=[],y=[],u,o),o),d===123)if(c===0)Ha(Q,e,m,m,C,o,u,a,y);else switch(f===99&&zA(Q,3)===110?100:f){case 100:case 108:case 109:case 115:Ha(A,m,m,r&&go(B2(A,m,m,0,0,n,a,h,n,C=[],u,y),y),n,y,u,a,r?C:y);break;default:Ha(Q,m,m,m,[""],y,0,a,y)}}l=c=p=0,w=g=1,h=Q="",u=i;break;case 58:u=1+pt(Q),p=B;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&z8()==125)continue}switch(Q+=e1(d),d*w){case 38:g=c>0?1:(Q+="\f",-1);break;case 44:a[l++]=(pt(Q)-1)*g,g=1;break;case 64:Lr()===45&&(Q+=Yl(at())),f=Lr(),c=u=pt(h=Q+=Z8(ba())),d++;break;case 45:B===45&&pt(Q)==2&&(w=0)}}return o}function B2(A,e,t,r,n,o,i,a,s,l,c,u){for(var f=n-1,p=n===0?o:[""],B=LB(p),w=0,x=0,g=0;w<r;++w)for(var d=0,h=Dn(A,f+1,f=kB(x=i[w])),C=A;d<B;++d)(C=IB(x>0?p[d]+" "+h:J(h,/&\f/g,p[d])))&&(s[g++]=C);return qs(A,e,t,n===0?Js:a,s,l,c,u)}function A5(A,e,t,r){return qs(A,e,t,bB,e1(j8()),Dn(A,2,-2),0,r)}function v2(A,e,t,r,n){return qs(A,e,t,A1,Dn(A,0,r),Dn(A,r+1,-1),r,n)}function MB(A,e,t){switch(P8(A,e)){case 5103:return iA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return iA+A+A;case 4789:return Mo+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return iA+A+Mo+A+BA+A+A;case 5936:switch(zA(A,e+11)){case 114:return iA+A+BA+J(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return iA+A+BA+J(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return iA+A+BA+J(A,/[svh]\w+-[tblr]{2}/,"lr")+A}case 6828:case 4268:case 2903:return iA+A+BA+A+A;case 6165:return iA+A+BA+"flex-"+A+A;case 5187:return iA+A+J(A,/(\w+).+(:[^]+)/,iA+"box-$1$2"+BA+"flex-$1$2")+A;case 5443:return iA+A+BA+"flex-item-"+J(A,/flex-|-self/g,"")+(Et(A,/flex-|baseline/)?"":BA+"grid-row-"+J(A,/flex-|-self/g,""))+A;case 4675:return iA+A+BA+"flex-line-pack"+J(A,/align-content|flex-|-self/g,"")+A;case 5548:return iA+A+BA+J(A,"shrink","negative")+A;case 5292:return iA+A+BA+J(A,"basis","preferred-size")+A;case 6060:return iA+"box-"+J(A,"-grow","")+iA+A+BA+J(A,"grow","positive")+A;case 4554:return iA+J(A,/([^-])(transform)/g,"$1"+iA+"$2")+A;case 6187:return J(J(J(A,/(zoom-|grab)/,iA+"$1"),/(image-set)/,iA+"$1"),A,"")+A;case 5495:case 3959:return J(A,/(image-set\([^]*)/,iA+"$1$`$1");case 4968:return J(J(A,/(.+:)(flex-)?(.*)/,iA+"box-pack:$3"+BA+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+iA+A+A;case 4200:if(!Et(A,/flex-|baseline/))return BA+"grid-column-align"+Dn(A,e)+A;break;case 2592:case 3360:return BA+J(A,"template-","")+A;case 4384:case 3616:return t&&t.some(function(r,n){return e=n,Et(r.props,/grid-\w+-end/)})?~Ea(A+(t=t[e].value),"span",0)?A:BA+J(A,"-start","")+A+BA+"grid-row-span:"+(~Ea(t,"span",0)?Et(t,/\d+/):+Et(t,/\d+/)-+Et(A,/\d+/))+";":BA+J(A,"-start","")+A;case 4896:case 4128:return t&&t.some(function(r){return Et(r.props,/grid-\w+-start/)})?A:BA+J(J(A,"-end","-span"),"span ","")+A;case 4095:case 3583:case 4068:case 2532:return J(A,/(.+)-inline(.+)/,iA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(A)-1-e>6)switch(zA(A,e+1)){case 109:if(zA(A,e+4)!==45)break;case 102:return J(A,/(.+:)(.+)-([^]+)/,"$1"+iA+"$2-$3$1"+Mo+(zA(A,e+3)==108?"$3":"$2-$3"))+A;case 115:return~Ea(A,"stretch",0)?MB(J(A,"stretch","fill-available"),e,t)+A:A}break;case 5152:case 5920:return J(A,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,n,o,i,a,s,l){return BA+n+":"+o+l+(i?BA+n+"-span:"+(a?s:+s-+o)+l:"")+A});case 4949:if(zA(A,e+6)===121)return J(A,":",":"+iA)+A;break;case 6444:switch(zA(A,zA(A,14)===45?18:11)){case 120:return J(A,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+iA+(zA(A,14)===45?"inline-":"")+"box$3$1"+iA+"$2$3$1"+BA+"$2box$3")+A;case 100:return J(A,":",":"+BA)+A}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(A,"scroll-","scroll-snap-")+A}return A}function fs(A,e){for(var t="",r=0;r<A.length;r++)t+=e(A[r],r,A,e)||"";return t}function e5(A,e,t,r){switch(A.type){case V8:if(A.children.length)break;case O8:case A1:return A.return=A.return||A.value;case bB:return"";case HB:return A.return=A.value+"{"+fs(A.children,r)+"}";case Js:if(!pt(A.value=A.props.join(",")))return""}return pt(t=fs(A.children,r))?A.return=A.value+"{"+t+"}":""}function t5(A){var e=LB(A);return function(t,r,n,o){for(var i="",a=0;a<e;a++)i+=A[a](t,r,n,o)||"";return i}}function r5(A){return function(e){e.root||(e=e.return)&&A(e)}}function n5(A,e,t,r){if(A.length>-1&&!A.return)switch(A.type){case A1:A.return=MB(A.value,A.length,t);return;case HB:return fs([Pt(A,{value:J(A.value,"@","@"+iA)})],r);case Js:if(A.length)return G8(t=A.props,function(n){switch(Et(n,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Pt(A,{props:[J(n,/:(read-\w+)/,":"+Mo+"$1")]})),jr(Pt(A,{props:[n]})),yu(A,{props:h2(t,r)});break;case"::placeholder":jr(Pt(A,{props:[J(n,/:(plac\w+)/,":"+iA+"input-$1")]})),jr(Pt(A,{props:[J(n,/:(plac\w+)/,":"+Mo+"$1")]})),jr(Pt(A,{props:[J(n,/:(plac\w+)/,BA+"input-$1")]})),jr(Pt(A,{props:[n]})),yu(A,{props:h2(t,r)});break}return""})}}var o5={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe={},Tn=typeof process<"u"&&xe!==void 0&&(xe.REACT_APP_SC_ATTR||xe.SC_ATTR)||"data-styled",_B="active",DB="data-styled-version",el="6.1.8",t1=`/*!sc*/
`,r1=typeof window<"u"&&"HTMLElement"in window,i5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==""?xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.SC_DISABLE_SPEEDY!==void 0&&xe.SC_DISABLE_SPEEDY!==""&&xe.SC_DISABLE_SPEEDY!=="false"&&xe.SC_DISABLE_SPEEDY),tl=Object.freeze([]),Nn=Object.freeze({});function a5(A,e,t){return t===void 0&&(t=Nn),A.theme!==t.theme&&A.theme||e||t.theme}var KB=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),s5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,l5=/(^-|-$)/g;function w2(A){return A.replace(s5,"-").replace(l5,"")}var c5=/(a)(d)/gi,Ki=52,m2=function(A){return String.fromCharCode(A+(A>25?39:97))};function xu(A){var e,t="";for(e=Math.abs(A);e>Ki;e=e/Ki|0)t=m2(e%Ki)+t;return(m2(e%Ki)+t).replace(c5,"$1-$2")}var Jl,TB=5381,gn=function(A,e){for(var t=e.length;t;)A=33*A^e.charCodeAt(--t);return A},NB=function(A){return gn(TB,A)};function u5(A){return xu(NB(A)>>>0)}function d5(A){return A.displayName||A.name||"Component"}function Zl(A){return typeof A=="string"&&!0}var RB=typeof Symbol=="function"&&Symbol.for,OB=RB?Symbol.for("react.memo"):60115,f5=RB?Symbol.for("react.forward_ref"):60112,g5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},VB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h5=((Jl={})[f5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jl[OB]=VB,Jl);function C2(A){return("type"in(e=A)&&e.type.$$typeof)===OB?VB:"$$typeof"in A?h5[A.$$typeof]:g5;var e}var B5=Object.defineProperty,v5=Object.getOwnPropertyNames,Q2=Object.getOwnPropertySymbols,w5=Object.getOwnPropertyDescriptor,m5=Object.getPrototypeOf,y2=Object.prototype;function PB(A,e,t){if(typeof e!="string"){if(y2){var r=m5(e);r&&r!==y2&&PB(A,r,t)}var n=v5(e);Q2&&(n=n.concat(Q2(e)));for(var o=C2(A),i=C2(e),a=0;a<n.length;++a){var s=n[a];if(!(s in p5||t&&t[s]||i&&s in i||o&&s in o)){var l=w5(e,s);try{B5(A,s,l)}catch{}}}}return A}function Rn(A){return typeof A=="function"}function n1(A){return typeof A=="object"&&"styledComponentId"in A}function xr(A,e){return A&&e?"".concat(A," ").concat(e):A||e||""}function F2(A,e){if(A.length===0)return"";for(var t=A[0],r=1;r<A.length;r++)t+=e?e+A[r]:A[r];return t}function ni(A){return A!==null&&typeof A=="object"&&A.constructor.name===Object.name&&!("props"in A&&A.$$typeof)}function Eu(A,e,t){if(t===void 0&&(t=!1),!t&&!ni(A)&&!Array.isArray(A))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)A[r]=Eu(A[r],e[r]);else if(ni(e))for(var r in e)A[r]=Eu(A[r],e[r]);return A}function o1(A,e){Object.defineProperty(A,"toString",{value:e})}function gi(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(A," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var C5=function(){function A(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return A.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},A.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw gi(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var i=n;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},A.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},A.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,i=n;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(t1);return t},A}(),ka=new Map,gs=new Map,Ia=1,Ti=function(A){if(ka.has(A))return ka.get(A);for(;gs.has(Ia);)Ia++;var e=Ia++;return ka.set(A,e),gs.set(e,A),e},Q5=function(A,e){Ia=e+1,ka.set(A,e),gs.set(e,A)},y5="style[".concat(Tn,"][").concat(DB,'="').concat(el,'"]'),F5=new RegExp("^".concat(Tn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U5=function(A,e,t){for(var r,n=t.split(","),o=0,i=n.length;o<i;o++)(r=n[o])&&A.registerName(e,r)},x5=function(A,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(t1),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(F5);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(Q5(c,l),U5(A,c,s[3]),A.getTag().insertRules(l,n)),n.length=0}else n.push(a)}}};function E5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var GB=function(A){var e=document.head,t=A||e,r=document.createElement("style"),n=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Tn,"]")));return s[s.length-1]}(t),o=n!==void 0?n.nextSibling:null;r.setAttribute(Tn,_B),r.setAttribute(DB,el);var i=E5();return i&&r.setAttribute("nonce",i),t.insertBefore(r,o),r},b5=function(){function A(e){this.element=GB(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,n=0,o=r.length;n<o;n++){var i=r[n];if(i.ownerNode===t)return i}throw gi(17)}(this.element),this.length=0}return A.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},A.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},A.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},A}(),H5=function(){function A(e){this.element=GB(e),this.nodes=this.element.childNodes,this.length=0}return A.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},A.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},A.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},A}(),k5=function(){function A(e){this.rules=[],this.length=0}return A.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},A.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},A.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},A}(),U2=r1,I5={isServer:!r1,useCSSOMInjection:!i5},jB=function(){function A(e,t,r){e===void 0&&(e=Nn),t===void 0&&(t={});var n=this;this.options=Be(Be({},I5),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&r1&&U2&&(U2=!1,function(o){for(var i=document.querySelectorAll(y5),a=0,s=i.length;a<s;a++){var l=i[a];l&&l.getAttribute(Tn)!==_B&&(x5(o,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),o1(this,function(){return function(o){for(var i=o.getTag(),a=i.length,s="",l=function(u){var f=function(g){return gs.get(g)}(u);if(f===void 0)return"continue";var p=o.names.get(f),B=i.getGroup(u);if(p===void 0||B.length===0)return"continue";var w="".concat(Tn,".g").concat(u,'[id="').concat(f,'"]'),x="";p!==void 0&&p.forEach(function(g){g.length>0&&(x+="".concat(g,","))}),s+="".concat(B).concat(w,'{content:"').concat(x,'"}').concat(t1)},c=0;c<a;c++)l(c);return s}(n)})}return A.registerId=function(e){return Ti(e)},A.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new A(Be(Be({},this.options),e),this.gs,t&&this.names||void 0)},A.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},A.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,n=t.target;return t.isServer?new k5(n):r?new b5(n):new H5(n)}(this.options),new C5(e)));var e},A.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},A.prototype.registerName=function(e,t){if(Ti(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},A.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Ti(e),r)},A.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},A.prototype.clearRules=function(e){this.getTag().clearGroup(Ti(e)),this.clearNames(e)},A.prototype.clearTag=function(){this.tag=void 0},A}(),L5=/&/g,S5=/^\s*\/\/.*$/gm;function zB(A,e){return A.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=zB(t.children,e)),t})}function M5(A){var e,t,r,n=A===void 0?Nn:A,o=n.options,i=o===void 0?Nn:o,a=n.plugins,s=a===void 0?tl:a,l=function(f,p,B){return B.startsWith(t)&&B.endsWith(t)&&B.replaceAll(t,"").length>0?".".concat(e):f},c=s.slice();c.push(function(f){f.type===Js&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(L5,t).replace(r,l))}),i.prefix&&c.push(n5),c.push(e5);var u=function(f,p,B,w){p===void 0&&(p=""),B===void 0&&(B=""),w===void 0&&(w="&"),e=w,t=p,r=new RegExp("\\".concat(t,"\\b"),"g");var x=f.replace(S5,""),g=q8(B||p?"".concat(B," ").concat(p," { ").concat(x," }"):x);i.namespace&&(g=zB(g,i.namespace));var d=[];return fs(g,t5(c.concat(r5(function(h){return d.push(h)})))),d};return u.hash=s.length?s.reduce(function(f,p){return p.name||gi(15),gn(f,p.name)},TB).toString():"",u}var _5=new jB,bu=M5(),WB=Pe.createContext({shouldForwardProp:void 0,styleSheet:_5,stylis:bu});WB.Consumer;Pe.createContext(void 0);function x2(){return L.useContext(WB)}var D5=function(){function A(e,t){var r=this;this.inject=function(n,o){o===void 0&&(o=bu);var i=r.name+o.hash;n.hasNameForId(r.id,i)||n.insertRules(r.id,i,o(r.rules,i,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,o1(this,function(){throw gi(12,String(r.name))})}return A.prototype.getName=function(e){return e===void 0&&(e=bu),this.name+e.hash},A}(),K5=function(A){return A>="A"&&A<="Z"};function E2(A){for(var e="",t=0;t<A.length;t++){var r=A[t];if(t===1&&r==="-"&&A[0]==="-")return A;K5(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $B=function(A){return A==null||A===!1||A===""},XB=function(A){var e,t,r=[];for(var n in A){var o=A[n];A.hasOwnProperty(n)&&!$B(o)&&(Array.isArray(o)&&o.isCss||Rn(o)?r.push("".concat(E2(n),":"),o,";"):ni(o)?r.push.apply(r,ds(ds(["".concat(n," {")],XB(o),!1),["}"],!1)):r.push("".concat(E2(n),": ").concat((e=n,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in o5||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function Sr(A,e,t,r){if($B(A))return[];if(n1(A))return[".".concat(A.styledComponentId)];if(Rn(A)){if(!Rn(o=A)||o.prototype&&o.prototype.isReactComponent||!e)return[A];var n=A(e);return Sr(n,e,t,r)}var o;return A instanceof D5?t?(A.inject(t,r),[A.getName(r)]):[A]:ni(A)?XB(A):Array.isArray(A)?Array.prototype.concat.apply(tl,A.map(function(i){return Sr(i,e,t,r)})):[A.toString()]}function T5(A){for(var e=0;e<A.length;e+=1){var t=A[e];if(Rn(t)&&!n1(t))return!1}return!0}var N5=NB(el),R5=function(){function A(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&T5(e),this.componentId=t,this.baseHash=gn(N5,t),this.baseStyle=r,jB.registerId(t)}return A.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=xr(n,this.staticRulesId);else{var o=F2(Sr(this.rules,e,t,r)),i=xu(gn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=r(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}n=xr(n,i),this.staticRulesId=i}else{for(var s=gn(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if(typeof u=="string")l+=u;else if(u){var f=F2(Sr(u,e,t,r));s=gn(s,f+c),l+=f}}if(l){var p=xu(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),n=xr(n,p)}}return n},A}(),YB=Pe.createContext(void 0);YB.Consumer;var ql={};function O5(A,e,t){var r=n1(A),n=A,o=!Zl(A),i=e.attrs,a=i===void 0?tl:i,s=e.componentId,l=s===void 0?function(C,y){var m=typeof C!="string"?"sc":w2(C);ql[m]=(ql[m]||0)+1;var Q="".concat(m,"-").concat(u5(el+m+ql[m]));return y?"".concat(y,"-").concat(Q):Q}(e.displayName,e.parentComponentId):s,c=e.displayName,u=c===void 0?function(C){return Zl(C)?"styled.".concat(C):"Styled(".concat(d5(C),")")}(A):c,f=e.displayName&&e.componentId?"".concat(w2(e.displayName),"-").concat(e.componentId):e.componentId||l,p=r&&n.attrs?n.attrs.concat(a).filter(Boolean):a,B=e.shouldForwardProp;if(r&&n.shouldForwardProp){var w=n.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;B=function(C,y){return w(C,y)&&x(C,y)}}else B=w}var g=new R5(t,f,r?n.componentStyle:void 0);function d(C,y){return function(m,Q,E){var H=m.attrs,b=m.componentStyle,M=m.defaultProps,S=m.foldedComponentIds,P=m.styledComponentId,z=m.target,Z=Pe.useContext(YB),eA=x2(),tA=m.shouldForwardProp||eA.shouldForwardProp,I=a5(Q,Z,M)||Nn,_=function(nA,sA,gA){for(var OA,mA=Be(Be({},sA),{className:void 0,theme:gA}),ct=0;ct<nA.length;ct+=1){var Se=Rn(OA=nA[ct])?OA(mA):OA;for(var SA in Se)mA[SA]=SA==="className"?xr(mA[SA],Se[SA]):SA==="style"?Be(Be({},mA[SA]),Se[SA]):Se[SA]}return sA.className&&(mA.className=xr(mA.className,sA.className)),mA}(H,Q,I),G=_.as||z,$={};for(var W in _)_[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&_.theme===I||(W==="forwardedAs"?$.as=_.forwardedAs:tA&&!tA(W,G)||($[W]=_[W]));var UA=function(nA,sA){var gA=x2(),OA=nA.generateAndInjectStyles(sA,gA.styleSheet,gA.stylis);return OA}(b,_),uA=xr(S,P);return UA&&(uA+=" "+UA),_.className&&(uA+=" "+_.className),$[Zl(G)&&!KB.has(G)?"class":"className"]=uA,$.ref=E,L.createElement(G,$)}(h,C,y)}d.displayName=u;var h=Pe.forwardRef(d);return h.attrs=p,h.componentStyle=g,h.displayName=u,h.shouldForwardProp=B,h.foldedComponentIds=r?xr(n.foldedComponentIds,n.styledComponentId):"",h.styledComponentId=f,h.target=r?n.target:A,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(y){for(var m=[],Q=1;Q<arguments.length;Q++)m[Q-1]=arguments[Q];for(var E=0,H=m;E<H.length;E++)Eu(y,H[E],!0);return y}({},n.defaultProps,C):C}}),o1(h,function(){return".".concat(h.styledComponentId)}),o&&PB(h,A,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function b2(A,e){for(var t=[A[0]],r=0,n=e.length;r<n;r+=1)t.push(e[r],A[r+1]);return t}var H2=function(A){return Object.assign(A,{isCss:!0})};function V5(A){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Rn(A)||ni(A))return H2(Sr(b2(tl,ds([A],e,!0))));var r=A;return e.length===0&&r.length===1&&typeof r[0]=="string"?Sr(r):H2(Sr(b2(r,e)))}function Hu(A,e,t){if(t===void 0&&(t=Nn),!e)throw gi(1,e);var r=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return A(e,t,V5.apply(void 0,ds([n],o,!1)))};return r.attrs=function(n){return Hu(A,e,Be(Be({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},r.withConfig=function(n){return Hu(A,e,Be(Be({},t),n))},r}var JB=function(A){return Hu(O5,A)},Rt=JB;KB.forEach(function(A){Rt[A]=JB(A)});const k2=[{cap_id:"0",select:"0",cap:"基础针法",contentMenuList:[{id:"1",title:"锁针/辫子针",desc:"锁针常用于起针，也可以独立应用。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/dlOyrFmHhYjTuqM.png"},{img_src:"https://s2.loli.net/2022/01/25/MGZPTfFQgJBSl1q.png",img_des:"1、打一个活结并按图示持线"},{img_src:"https://s2.loli.net/2022/01/25/ZwP9ISDKYzb1fiR.png",img_des:"2、钩针穿入活结线圈内、绕线按箭头方向钩出（即为1个锁针）"},{img_src:"https://s2.loli.net/2022/01/25/s1PDdfarAKcI36Q.png",img_des:"3、同理重复前面的动作再次绕线、继续钩织锁针（如图为5个锁针、最开始与最后钩针上的线圈不计入）"},{img_src:"https://s2.loli.net/2022/01/25/GI6mCRxTYKFvebS.png",img_des:"4、提示：锁针起针方法中挑针的对象为锁针的里山（倒 n ch表示从倒数第n个里山开始起针、与引拔作用相同）"}]},{id:"2",title:"引拔针",desc:"引拔针是一种过渡针法，常见于环形结构的织物，用于环钩结尾处。也可用于织片边缘，加上一圈引拔针后更加平整。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/jx8XTHlMsdVJUQ4.png"},{img_src:"https://s2.loli.net/2022/01/25/cfMk71RoUs3NlQm.png",img_des:"1、如图所示为短针环钩的结尾处"},{img_src:"https://s2.loli.net/2022/01/25/9q5TeODLgzYGAof.png",img_des:"2、将钩针从第一个针目穿过、绕线钩出、并按箭头方向直接从钩针上的线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/EN59GXqoimYHwMZ.png",img_des:"3、拉紧即完成连接"},{img_src:"https://s2.loli.net/2022/01/25/tuM9S2WiRXr3lUs.png",img_des:"4、接着根据针法选择引拔的锁针高度、参考下图"}]},{id:"3",title:"短针",desc:"短针是非常基础的针法，短针钩法为钩针穿入针目、绕线钩出、再次绕线从钩针上2个线圈中钩出。引拔时高度为1个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/2shOLI61PveoYd3.png"},{img_src:"https://s2.loli.net/2022/01/25/OsHmBNxkLQIpC1l.png",img_des:"1、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/MJKrzTlD2UEmPj8.png",img_des:"2、绕线钩出、此时钩针上有2个线圈、再次绕线从两个线圈中钩出，即完成1个短针"},{img_src:"https://s2.loli.net/2022/01/25/o7iNOuqAgHc4Wmy.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织短针"},{img_src:"https://s2.loli.net/2022/01/25/D7BPxNS1wvnpZr3.png",img_des:"4、如图为钩织3个短针、接下来按照图解继续完成钩织"}]},{id:"4",title:"中长针",desc:"中长针在入针目前绕线1圈、每次绕线从钩针上3个线圈中一次性钩出。引拔时高度等于2个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/1FHcSlgUrZhWbwE.png"},{img_src:"https://s2.loli.net/2022/01/25/hR9mj1DaiecFKp7.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/6tQAPwGxhJVBkg3.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从3个线圈中一次性钩出，即完成1个中长针"},{img_src:"https://s2.loli.net/2022/01/25/rOL6mqF3fxiSeGT.png",img_des:"3、同理重复前面的动作、穿过下一个里山、继续钩织中长针"}]},{id:"5",title:"长针",desc:"长针在入针目前绕线1圈、每次绕线从前2个线圈中钩出。引拔时高度等于3个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/IY9TJOPHprkCgFc.png"},{img_src:"https://s2.loli.net/2022/01/25/OQZrax93htPWbUK.png",img_des:"1、绕线、按箭头方向穿过锁针里山（或其他针目）"},{img_src:"https://s2.loli.net/2022/01/25/2E4Vgixfy6Q1GH9.png",img_des:"2、绕线钩出、此时钩针上有3个线圈、再次绕线从前2个线圈中钩出、此时钩针上还有2个线圈"},{img_src:"https://s2.loli.net/2022/01/25/UvhdzuosPqiaHXw.png"},{img_src:"https://s2.loli.net/2022/01/25/oiBOIWljCzwvN6J.png",img_des:"3、绕线从这2个线圈中钩出，即完成一个长针"}]},{id:"6",title:"长长针",desc:"长长针即在入针目前绕线2圈、每次绕线从前2个线圈中钩出。引拔时高度等于4个锁针。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TcHaDG27dUEqs1K.png"},{img_src:"https://s2.loli.net/2022/01/25/bNEBqwdrRiPAxcX.png",img_des:"1、如图所示在钩针上绕线3圈后穿入针目"},{img_src:"https://s2.loli.net/2022/01/25/bhptxHfsvAaVLBe.png",img_des:"2、绕线钩出、此时钩针上有5个线圈绕线每次从前2个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/6lNJcryYhCKzQg8.png"},{img_src:"https://s2.loli.net/2022/01/25/lsP3AHnpkXOfELy.png"},{img_src:"https://s2.loli.net/2022/01/25/CPwesp4UcjndfoH.png",img_des:"3、钩针上只有一个线圈时即完成一个三卷长针"}]},{id:"7",title:"N卷长针",desc:`N卷长针即在入针目前绕线N圈（长针绕线1圈、长长针绕线2圈）、穿入针目、绕线钩出、此时钩针上有N+2个线圈、绕线每次穿过2个线圈、直到钩针上只剩1个线圈即完成一个N卷长针。（钩法参考长针、此处不再演示）。
N卷长针引拔时高度等于N个锁针。
N卷长针常用于植物钩织。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/hM6dayTbrexlf2K.png"}]},{id:"8",title:"加针/分针",desc:"加针即在同一个针目中钩多针，一般情况下加针表示一个针目中钩2针（最常用）、其他加针数量需说明。以下图示为短针加针演示，其他针法类似。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/N7a6UdMw2zyF4kc.png"},{img_src:"https://s2.loli.net/2022/01/25/xpgMCzHYlr3JKSu.png",img_des:"1、如图所示在一个针目中已经钩好1个短针、下一针依然从同一针目入针"},{img_src:"https://s2.loli.net/2022/01/25/msNihQ7DjXg3voz.png",img_des:"2、在同一针目中钩2个短针即为短针加针。同理短针加3针即在同一针目中钩3个短针、以此类推"}]},{id:"9",title:"减针/并针",desc:"减针即将多针合并为一针，一般情况下减针表示2针合并为1针（最常用）、其他减针数量需说明。",imgList:[{img_des:"短针减针：",img_src:"https://s2.loli.net/2022/01/25/DAyWndjw23bkt7v.png"},{img_src:"https://s2.loli.net/2022/01/25/MZVXQxb5yU9in7t.png",img_des:"1、如图所示为短针的最后一步、此时不绕线钩出、钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/dLWS4NmAjitsx6Z.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/ROE9csFB2xbwnyp.png",img_des:"3、绕线从3个线圈中一次性钩出，即完成一个短针减针"},{img_des:"中长针减针：",img_src:"https://s2.loli.net/2022/01/25/mhi9ayTWpRcOE36.png"},{img_src:"https://s2.loli.net/2022/01/25/BDyIOq7sKSE9pgZ.png",img_des:"1、如图所示为中长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/vQ8atefw9xV7WkI.png",img_des:"2、穿过针目后绕线钩出、此时钩针上有4个线圈、绕线从前3个线圈中钩出"},{img_src:"https://s2.loli.net/2022/01/25/T9ELXWaHBztrcF3.png"},{img_src:"https://s2.loli.net/2022/01/25/gBSCvHJWpPnRATK.png",img_des:"3、钩出后钩针上有2个线圈、绕线从这2个线圈中钩出，即完成一个中长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/zczjianz.gif"},{img_des:"长针减针：",img_src:"https://s2.loli.net/2022/01/25/ItS3Torw8LcUGji.png"},{img_src:"https://s2.loli.net/2022/01/25/NWYPDVLufjBxUmZ.png",img_des:"1、如图所示为长针的最后一步。接下来钩针穿过下一个针目（不饶线直接穿入）"},{img_src:"https://s2.loli.net/2022/01/25/og3vxXNVumds5j9.png",img_des:"2、穿过后绕线钩出、此时钩针上有4个线圈"},{img_src:"https://s2.loli.net/2022/01/25/1cKbxvI2OXkPn3S.png",img_des:"3、绕线从前2个线圈中钩出、相当于完成第二个半长针、此时钩针上有3个线圈"},{img_src:"https://s2.loli.net/2022/01/25/jCFLiwbVcQeTpRM.png",img_des:"4、绕线从这3个线圈中一次性钩出，即完成一个长针减针"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/czjianz.gif"},{img_des:`长针、长长针、N卷长针的减针钩法类似(步骤总结)：
1、停留在对应针法的最后一步（即未完成的N卷长针）、绕线（绕线圈数于对应针法一致、例如三卷长针绕三圈）穿入下一个针目
2、绕线从针目中钩出、钩织第2个未完成的N卷长针
3、减几针就钩织几个未完成的N卷长针、此时钩针上有N+1个线圈
4、绕线从这些个线圈中一次性钩出`}]},{id:"10",title:"内半针",desc:"内半针指织片反面一侧的针目、即手持织片时远离自己的一侧。内半针可钩织出’边线‘效果，常用于包袋不同面之间的过渡。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/UidtWPLcOak6Glm.png"},{img_src:"https://s2.loli.net/2022/01/25/9VYrljNEiOyZL8t.png",img_des:"短针内半针："}]},{id:"11",title:"外半针",desc:"外半针指织片正面一侧的针目、即手持织片时靠近自己的一侧。在外半针上减针可使织物更平整，根据实际钩织情况选择。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/PDZhkqa1nzIvJwb.png"},{img_src:"https://s2.loli.net/2022/01/25/jkaPw45mRst1Hd2.png",img_des:"短针外半针："}]}]},{cap_id:"2",select:"0",cap:"起针方法",contentMenuList:[{id:"21",title:"手势",desc:"钩织时有一定的绕线方式、拿线方式与拿针方式。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8tGYqI5BaEJSkHF.png",img_des:`绕线方式：
1、如图绕线`},{img_src:"https://s2.loli.net/2022/01/25/KU5uzmGVfFg461B.png",img_des:"2、左手拇指与中指按住线头/织物、食指与小指配合带线"},{img_src:"https://s2.loli.net/2022/01/25/3uXekgrcVOxnfEG.png",img_des:"拿针方式："},{img_src:"https://s2.loli.net/2022/01/25/xutBU13f5n2jI4l.png"}]},{id:"22",title:"环起",desc:`通常说的环起即在一个线圈中钩织而起针。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
环起钩织的织物底面大致为圆形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/QtpG5JZIxSglBHc.png",img_des:"短针环起："},{img_src:"https://s2.loli.net/2022/01/25/aeumSkjBUt3fXFc.png",img_des:"中长针环起："},{img_src:"https://s2.loli.net/2022/01/25/npxyWtCDcQGFwkO.png",img_des:"长针环起："},{img_des:"提示：环起详细教程请前往笔记页面观看视频教程。"}]},{id:"23",title:"片起",desc:"片起即在辫子针的基础上来回钩织。钩织到每排结尾处需要引拔并翻转织片继续钩织下一排。",imgList:[{img_src:"https://s2.loli.net/2022/01/25/TI4OCM6FfLxcz5n.png",img_des:"短针片起："},{img_src:"https://s2.loli.net/2022/01/25/TKOugprBfzmtJWj.png",img_des:"中长针片起："},{img_src:"https://s2.loli.net/2022/01/25/ZBYboQuRdW64yrM.png",img_des:"长针片起："},{img_des:"提示：片起详细教程请前往笔记页面观看视频教程。"}]},{id:"24",title:"辫子针环起",desc:`辫子针环起即围绕辫子针边缘进行环钩。钩织到每圈结尾处需要连接引拔、螺旋环钩不需要引拔。
辫子针环起钩织的织物底面大致为圆角矩形。`,imgList:[{img_src:"https://s2.loli.net/2022/01/25/ZCu9pOwceGLVnoU.png",img_des:"短针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/WB3JasEeX2hHK9n.png",img_des:"中长针-辫子针环起："},{img_src:"https://s2.loli.net/2022/01/25/RCGvhMoj6OAZQKt.png",img_des:"长针-辫子针环起："},{img_des:"提示：辫子针-环起详细教程请前往笔记页面观看视频教程。"}]}]},{cap_id:"4",select:"0",cap:"钩织技巧",contentMenuList:[{id:"41",title:"无痕引拔",desc:"普通引拔方式钩织的织片在引拔的地方会有痕迹，影响织物的平整与美观，可通过如下两种方式优化。",imgList:[{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/whyb01.gif",img_des:"方法1：引拔时尽量拉紧"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/whyb02.gif",img_des:"方法2：反向引拔"}]},{id:"42",title:"隐形加减针",desc:"普通加减针方式钩织的织片在加减针的地方会有痕迹，影响织物的平整与美观，可通过在外半针钩织的方法优化。",imgList:[{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxjiaz.gif",img_des:"隐形加针：第一针钩内半针，第二针钩整个针目。"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxjianz.gif",img_des:"隐形减针：两针均钩外半针。"}]},{id:"43",title:"隐形换线",desc:"普通引拔方式钩织的织片在引拔的地方会有痕迹，影响织物的平整与美观，可通过如下两种方式优化。",imgList:[{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxhx01.gif",img_des:"接线：停留在最后一步，此时钩针上有两个线圈，换另一个颜色的线钩出。"},{img_src:"https://suumhan007.oss-cn-hangzhou.aliyuncs.com/gif/yxhx02.gif",img_des:"换线：从针目穿入时绕原始线钩出，然后绕所换线钩出。"}]}]},{cap_id:"6",select:"0",cap:"附录",contentMenuList:[{id:"61",title:"钩针符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/8W4sk2VcC6euXJw.png"}]},{id:"62",title:"英文符号合集",imgList:[{img_src:"https://s2.loli.net/2022/01/25/7BCuv3doyRwjJ6t.png"}]}]}],P5=[{id:1,title:"线材总述",desc:"纱线由纤维制成，可以由羊毛等单一纤维制成，也可以与其他纤维混合以增强其性能，另外出于美学原因，很多各具特色的混合纱线应势而生。毛线通常指羊毛纺成的纱，也有不同种类化纤材质纺成的线。此处整理常见的线材种类供大家参考。",img:"https://s2.loli.net/2022/01/25/oF9sdLS84a1VAhN.png",detailList:[{desc:` 
1、毛线的粗细：编织线根据其粗细、材质、形状等分为不同种类，具有相应的特点。
【特细线】编织毛线中最细的一种，轻盈柔软、富有弹力。一般不用单根特细线进行编织，而是将2-3根合成1股，合成后的线材大致与细线或中细线等粗，但更具弹力。
【极细线】比特细线略粗，一般用于编织披肩。
【中细线】是最普遍被使用的毛线品种，容易编织，结实耐用，适用范围广。
【中粗线】是编织衣物最常见的一种，常用于手工编织。
【高粗线】是编织防寒衣物用品的最佳毛线。`},{desc:`
2、线材用量的估算方法：
（1）按照与实物1:4的比例制图，以10cm为单位切分，计算出织物包含多少个单位（不足取整）
（2）以同样的花样编织10cm*10cm织片，测量出单位用量/重量
（3）线材用量 = 单位个数 x 单位用量/重量`,img:"https://s2.loli.net/2022/01/25/ASE5wxC9UpZFivR.png"},{desc:"3、线材的常见缠线方式：线球、团、绞、束、筒",img:"https://s2.loli.net/2022/01/25/YRVmGirHJCNtjoA.png"},{desc:"4、手缠线方法：市场上常见的编织线都是成卷的，但是也存在需要自己绕线成卷的情况。如果没有绕线机，可参考图示手缠线的方法整理散线。",img:"https://s2.loli.net/2022/01/25/4MGbrpEeZcvRJio.png"},{desc:`
新手贴示：入门时使用5/0号（3.00mm）钩针搭配四股牛奶棉学习。

`}]},{id:2,title:"棉线",desc:"棉线是用棉花纤维搓纺而成的线。棉花是在棉花植物种子周围生长的蓬松物质。大多数棉纱都很容易清洗，如果保养得当，可以非常结实，使用几十年。因此，它是家庭用品、针织袋和包袋的良好纤维。市场上的棉线名称各异，并非均为纯棉线。此处介绍几种常见的棉线。",img:"https://s2.loli.net/2022/01/25/EPBGVcaHt8hqUmM.png",detailList:[{desc:`
1、纯棉线：未经处理的纯棉非常适合手工染色。`,img:"https://s2.loli.net/2022/01/25/HCFbUrJ4fghsDlW.png"},{desc:`2、牛奶棉：牛奶棉也称牛奶丝，牛奶蛋白纤维制品属于纺织材料的一种，属于动植物蛋白纤维系列，是将液状牛奶脱脂、去水后所得到的牛奶蛋白质，加上柔和剂，制成牛奶浆液，然后通过湿纺工艺及科学处理，纺制成牛奶蛋白纤维，再经湿纺工艺及科技处理成牛奶丝。市场上牛奶棉通常使用棉+牛奶纤维合成。
牛奶棉是新手入门最常用的线材。根据股数分为不同粗细，最常见的有4股牛奶棉、5股牛奶棉、8股牛奶棉。`,img:"https://s2.loli.net/2022/01/25/Ah48aHczMqDwRTk.png"},{desc:"【4股牛奶棉】常用于编织玩偶，搭配2-3mm钩针、2.5-3mm棒针",img:"https://s2.loli.net/2022/01/25/ltX94d7Yw6UeK1g.png"},{desc:"【5股牛奶棉】常用于玩偶、衣物、毯子等，搭配3-4mm钩针、4-4.5mm棒针",img:"https://s2.loli.net/2022/01/25/LpBWFTE7esUXuAr.png"},{desc:"【8股牛奶棉】常用于围巾、衣物，搭配5-5.5mm棒针",img:"https://s2.loli.net/2022/01/25/cX8p7ZmlKP52nxs.png"},{desc:"3、丝光棉：棉纱可以进行丝光处理，在此过程中，它经过机械和化学处理以压缩它，将其转变为具有反光光泽且不会掉毛的超强纱线。丝光棉通常是更昂贵的选择，但它非常适合需要坚固和保持形状的，例如闪亮的晚装包、长款夏季开衫或需要定期洗涤的外套。",img:"https://s2.loli.net/2022/01/25/A9dYxhferw3DJGa.png"},{desc:"4、竹棉：用于手工针织纱线的竹纤维是通过压碎茎以生产类似亚麻的纤维或通过化学处理制浆植物而生产的，在这种情况下，它被称为“竹粘胶”。 这种纤维具有类似于丝绸的光泽和手感，与其他纤维混合时编织效果最佳。竹子提高了纯棉的透气性和弹性，是夏季衣服和披肩的理想选择。",img:"https://s2.loli.net/2022/01/25/L5CwJSm2IdGNDea.png"}]},{id:3,title:"羊毛线",desc:"羊毛源自各种绵羊品种，例如设得兰绵羊和青面莱斯特绵羊，制成纯毛纱或与其他纤维混合。 它是非常温暖耐用，非常理想用于冬季穿着。粗感羊毛含有短而粗的纤维，可能刺激，针织时选用较软的类型。",img:"https://s2.loli.net/2022/01/25/wMc8y4HODFXRskN.png",detailList:[{desc:`
1、美利奴羊毛：这种特殊的羊毛来自美利奴绵羊，拥有绵羊品种中最好的羊毛之一。 长而有光泽的纤维产生柔软的纱线，是贴身穿着的物品的绝佳选择。 它通常与其他纤维混合，并经常进行处理以使其可机洗。`,img:"https://s2.loli.net/2022/01/25/vpoaYSKZEr967jA.png"},{desc:"2、设得兰羊毛：也称雪莱毛。设得兰是英国绵羊品种中最小的，主要分布在英国苏格兰的设得兰群岛。",img:"https://s2.loli.net/2022/01/25/GPFTHXKj5khvA1d.png"}]},{id:4,title:"羊绒线",desc:"羊绒是出自山羊身上的绒，即山羊绒，俗称开司米（Cashmere）。羊绒是生长在山羊外表皮层，掩在山羊粗毛根部的一层薄薄的细绒，入冬寒冷时长出，抵御风寒，开春转暖后脱落，自然适应气候，属于稀有的特种动物纤维。",img:"https://s2.loli.net/2022/01/25/1wZrXmVJQHAqnjd.png",detailList:[{desc:`
1、开司米：这种纤维是山羊的柔软底毛，可制成超奢华、天鹅绒般柔软的纱线。 它重量轻但强度高，通常比其他纤维中的同等纱线提供更多的每克码数。 羊绒是一种生产成本高昂的纤维，通常与其他纤维混合以增加柔软度和奢华感。这种纤维只能手洗。`,img:"https://s2.loli.net/2022/01/25/uXS25gWpBwmOT1J.png"},{desc:"2、马海毛：安哥拉山羊的毛，编织起来会产生独特的天然“光环”。 使用马海毛编织具有一定挑战性，因为带有细绒使得很难看到针织结构。不建议将其用于婴儿服装，因为它在新制作时可能会掉毛，如果吸入可能会造成危险。",img:"https://s2.loli.net/2022/01/25/lYx3cm8pv6VMIfP.png"}]},{id:5,title:"羊驼毛",desc:"羊驼毛(alpaca),又名阿尔帕卡.属于骆驼毛纤维。它比马海毛更细，更柔软，其色泽为白色、棕色、淡黄褐色或黑色，其强力和保暖性均远高于羊毛，非常适合制作滑雪帽、厚实舒适的毛衣和袜子。羊驼毛具有奢华的感觉，是可用于针织的最温暖的天然纤维之一。",img:"https://s2.loli.net/2022/01/25/YxRkGDKtuXlIOTJ.png",detailList:[{img:"https://s2.loli.net/2022/01/25/kV296XjuStdIe3n.png"},{desc:`拓展（羊驼）：
羊驼有骆马、阿尔帕卡、维口纳和干纳柯四个纯种——
【骆马】羊驼毛中最粗最长，弹性较差。
【阿尔帕卡】又称秘鲁羊驼，是羊驼毛中最主要的一种，毛质柔软，长度长，有白色、灰色、黑色和褐色，光泽介于马海毛和驼毛之间，属混合毛类型。可分为两个品种：
(1)霍加耶(Huacayo或Huacaya)：体形较大，与骆马外形相似，其毛呈银光，产量较高，约占秘鲁羊驼的85%左右
(2)苏力(Suri)：体形较小，纤维顺直，毛细密而光滑，与安哥拉山羊相似，具有马海毛般的光泽
【维口纳】野生羊驼，属于混合毛，在羊驼毛中是最细的，品质接近于羊绒，强力与羊绒相似。维口纳羊躯体各部位毛的颜色不同，具有良好的光泽、柔软性和卷曲性，可制造高档的机织物、针织物和礼帽。其数量稀少，较为名贵。
【干纳柯】与维口纳毛相似，但毛略粗。

`}]},{id:6,title:"安哥拉兔毛",desc:"安哥拉兔茂密的背毛产生柔软而长的纤维。它通常与其他纤维混纺，制成具有类似于马海毛的毛茸茸“光环”效果的纱线。安哥拉兔毛编织的物品非常精致，保养讲究。",img:"https://s2.loli.net/2022/01/25/MXzrAR3xiCJaPw1.png",detailList:[{img:"https://s2.loli.net/2022/01/25/ZMlI7fqNCAWBU9V.png"}]},{id:7,title:"蚕丝",desc:"蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，也称天然丝，是一种天然纤维。 由于其非凡的来源，蚕丝纤维一直很昂贵。 其奢华的质地使其成为婚礼和洗礼礼物以及奢华合身针织品的理想之选。",img:"https://s2.loli.net/2022/01/25/NErtZw4DliGpWHo.png",detailList:[{img:"https://s2.loli.net/2022/01/25/8uwmpJxZSYhtcjC.png"},{desc:`拓展（桑蚕丝与柞蚕丝）：
【桑蚕丝】桑蚕由人工养殖，一般产于南方，手感柔软、光滑，色泽典雅，纤维细，细腻柔美，主要用作服装面料。
【柞蚕丝】柞蚕是野生蚕，一般产于北方，强伸度强、耐腐蚀性，耐光性，吸湿性、色泽天然，纤维粗吸湿透气，蓬松保暖好。

`}]},{id:8,title:"麻线",desc:"此处介绍亚麻线、大麻线和苎麻线三种类型。",img:"https://s2.loli.net/2022/01/25/MPNeDh4wY2F6Qbr.png",detailList:[{desc:`
1、亚麻线:这种纤维通常来自亚麻植物。 结实，表面油腻、蜡质，但能制出光滑、柔软、透气的纱线，非常适合编织成轻质开衫和上衣，在温暖的天气里穿着。`,img:"https://s2.loli.net/2022/01/25/lNCWsG4YJHy7SBV.png"},{desc:"2、大麻线:大麻植物的用途特别广泛，将其纤维用于针织纱线是其不太常见的应用之一。 大麻具有泥土般的粗糙感，会随着年龄和磨损而软化。 它通常以环保方式生产，强度高的纤维有利于编织镂空购物袋、餐垫和杯垫等家居用品。",img:"https://s2.loli.net/2022/01/25/YXU9NnjElLApeFi.png"},{desc:"3、苎麻线:荨麻科的一种植物产生称为苎麻的纤维。植物的内皮被加工成有光泽但有点脆的纤维，所以它们通常在纺成纱线之前与其他纤维混合。 与其他植物纤维一样，苎麻不能很好地隔热，但能生产出透气、耐用的面料。",img:"https://s2.loli.net/2022/01/25/7WYIlQx6JU9Vavo.png"}]},{id:9,title:"腈纶",desc:"腈纶纤维由乙烯制成，乙烯是从石油中提炼出来的，制造成本非常低廉。 腈纶纱线比其他合成纤维略粗糙，并且通常具有非常明亮和明亮的色调，而这些色调很难用天然纤维制成。腈纶纱线比较坚固，是玩具、新颖针织品和预算项目的理想选择。腈纶容易积聚静电。",img:"https://s2.loli.net/2022/01/25/E2qRwWNcdMGBkvu.png",detailList:[{img:"https://s2.loli.net/2022/01/25/eQ8FDaYmlPf9qSc.png"}]},{id:10,title:"尼龙",desc:"聚酰胺（俗称尼龙）是一种非常坚固且轻便的纤维。它的弹性使其非常适合针织面料，通常用于增强可能遭受严重磨损的物品的混纺纱。 与其他人造纤维一样，尼龙通过防止收缩和毡化来提高与之混合的纤维的耐洗性。",img:"https://s2.loli.net/2022/01/25/gjPC1Usb3rxn6N8.png",detailList:[{img:"https://s2.loli.net/2022/01/25/BnoFlr4f3yqmDsb.png"}]},{id:11,title:"雪尼尔",desc:"雪尼尔通常由棉和合成纤维组成，中间为一根结实的芯子。 雪尼尔织物将具有奢华、天鹅绒般的感觉。 雪尼尔非常适合平纹针迹，但不太适合复杂图案和蕾丝和绳索等工作，因为它表面带绒，可以隐藏细节。",img:"https://s2.loli.net/2022/01/25/w1pyflIxKYSoCVH.png",detailList:[{img:"https://s2.loli.net/2022/01/25/8RqUzuyZCt2JXi1.png"}]},{id:12,title:"毛圈纱",desc:"毛圈纱也被称为“贵宾犬”纱线，其卷曲外观是由附着在实心纱线上的柔软纤维的漩涡形成的。 针织时，这些纤维环突出并营造出贵宾犬毛皮效果。这种纱线非常适合制作形状非常简单的服装，或为平纹长袜针迹针织物增添有趣的质感。",img:"https://s2.loli.net/2022/01/25/mgupIwTP72sRkqy.png",detailList:[{img:"https://s2.loli.net/2022/01/25/GlBsSFoAcNwmkWz.png"}]},{id:13,title:"粗花呢",desc:"“粗花呢”描述了一种由羊毛制成的经典机织布，通常在布中带有对比色的斑点。原始粗花呢由来自各种彩色绵羊的未染色羊毛制成，但现在它们有多种颜色，并带有从明亮到微妙的各种斑点。 粗花呢纱线可能具有“杂色”或泥灰底色，并且在纺丝时添加了标志性的斑点，增加了纹理和颜色的趣味。",img:"https://s2.loli.net/2022/01/25/fpM5VBvQU4I7uL6.png",detailList:[{img:"https://s2.loli.net/2022/01/25/UPrC8AamKbSDgGq.png"}]},{id:14,title:"灌芯线",desc:"灌芯线也称为“绳”纱，通常以柔软的纤维（如羊毛或棉花）制成的纱线为芯，然后包裹在更细的纱线中，如金属线或尼龙。 弹力纱线通常以这种方式纺制，带有弹性纤维芯，包覆纱通常包裹得非常密集。",img:"https://s2.loli.net/2022/01/25/VH4awB8RS1AxEft.png",detailList:[{img:"https://s2.loli.net/2022/01/25/7OQBSmdIjl28yY4.png"}]},{id:15,title:"扁带线",desc:"扁带线类似于带状，通常都由合成纤维或植物纤维混纺制成，以赋予它们强度和光泽。很多扁带纱线很滑，必须特别注意针距和处理。",img:"https://s2.loli.net/2022/01/25/BjPRKr14yeVnhum.png",detailList:[{desc:`
1、扁带线：扁带线的主要特征是其扁平的轮廓。`,img:"https://s2.loli.net/2022/01/25/VZBlsueOMhNdGKk.png"},{desc:"2、缎带纱：带状纱的形状类似于带状纱，但通常更宽一些。 丝带纱线特别适合制作漂亮的配饰。",img:"https://s2.loli.net/2022/01/25/ukXfrDbEjRq2Cyp.png"}]},{id:16,title:"布条线",desc:"布条线即织物条。 传统上，旧衣服和其他纺织品的织物通常制成条带绑在一起制成门垫和地毯。即也可以考虑使用织物条进行编织。针的大小将取决于条带的厚度。布条线非常流行的织法是钩织布条包。",img:"https://s2.loli.net/2022/01/25/akO7DeQG4Y5t62M.png",detailList:[{desc:`
布条线的花纹或图案由织物条而定：`,img:"https://s2.loli.net/2022/01/25/SZDzcYBofOhyGt7.png"},{desc:`新手贴示：选购布条线时侧重线材是否”起球”的问题！

`}]},{id:17,title:"弹力纱",desc:"弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",img:"https://s2.loli.net/2022/01/25/vj2qVMbyZdXeHpn.png",detailList:[{img:"https://s2.loli.net/2022/01/25/L1yjxqOVrF7zp9a.png"}]},{id:18,title:"反光纱",desc:"弹力纱含有少量弹性弹性纤维，可增强所得织物的自然回弹。 主要纤维可以是天然的（例如棉），也可以是混纺的或全合成的。弹力纱是夏季沙滩装和运动装的理想选择。",img:"https://s2.loli.net/2022/01/25/A81VjgNMauqviI4.png",detailList:[{img:"https://s2.loli.net/2022/01/25/nBMP4KhsVueqAvi.png"}]},{id:19,title:"蕾丝线",desc:"蕾丝线即100%纯棉强捻的线，是微钩主要线材。蕾丝线捻度高、有骨感、通过丝光烧毛处理后色彩更光亮，硬度更大，不容易起毛起球。",img:"https://s2.loli.net/2022/01/25/CuHs3QLcWgb9Ezw.png",detailList:[{desc:`
蕾丝线号数：通常号数越大线越细。常用的蕾丝线主要有3#、8#、80#等。`,img:"https://s2.loli.net/2022/01/25/nZNwy95vVjaoeRq.png"}]},{id:20,title:"冰条线",desc:"冰条线带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",img:"https://s2.loli.net/2022/01/25/RpQBurSPcVjif5w.png",detailList:[{img:"https://s2.loli.net/2022/01/25/2H3nJBb4s6mjKaX.png"},{desc:`新手贴士：使用冰条线钩织时可借助棉线起针、收圈。

`}]},{id:21,title:"软纺纱",desc:"软纺纱通常比普通纱线更透气，密度更小，多股轻柔捻合的纤维松散地合在一起制成。 它可以由棉、羊毛或混合纤维制成，针织时轻盈、有弹性且非常柔软。 通常以这种方式纺出非常粗的纱线，以防止针织服装过重或随后变形。这些粗纱适合制作厚实的、快速编织的配饰。",img:"https://s2.loli.net/2022/01/25/BfRQaqjEVbeiPWL.png",detailList:[{desc:`
1、冰岛毛：冰岛毛原为冰岛羊的毛。但由于冰岛羊毛价格高昂，且并不坚韧，逐步被腈纶冰岛毛所替代。如今市场上所说的冰岛毛，大部分为腈纶冰岛毛。 
拓展（冰岛羊）：冰岛羊的历史已经超过了一千多年，它是当年北欧海盗从斯堪第纳维亚和爱尔兰带来的羊的后代，基本上没有和其它羊种杂交，是一种纯种羊。在一千多年的独特环境中，冰岛羊形成了独特的耐寒抗病的能力。冰岛羊和其它绵羊的明显区别是冰岛羊终年披着厚厚的羊毛，外面是一层厚厚的长达十几厘米的普通毛，里面则是软绒绒的绒毛。`,img:"https://s2.loli.net/2022/01/25/Q5gWocKLCVj6p3O.png"},{desc:"2、羊毛粗纱：具有毛茸茸、蓬松的特点，纤维沿其长度方向相互平行。 粗纱是在纤维加工的早期阶段生产的，即在加捻形成纱线之前。 因此，羊毛粗纱在纵向拉扯时往往会被拉开；，也会脱落纤维并可能起球。 合成粗纱的纤维较长，因此具有更高的固有强度。",img:"https://s2.loli.net/2022/01/25/DyKIkGoCm5YqAgT.png"}]},{id:22,title:"长绒线",desc:"此处将各种表面带有绒毛、编织难度较大的线材统称为长绒线。",img:"https://s2.loli.net/2022/01/25/BDZyPaLpherEK36.png",detailList:[{desc:`
1、珊瑚绒`,img:"https://s2.loli.net/2022/01/25/JqScLpIDUrAxEv2.png"},{desc:"2、皮草绒",img:"https://s2.loli.net/2022/01/25/VJkTpNIM6f8zoCg.png"},{desc:"3、长毛水貂绒",img:"https://s2.loli.net/2022/01/25/AdXnqzy9jtoV5S8.png"},{desc:"长绒线织物示例：",img:"https://s2.loli.net/2022/01/25/IqHVlJ2OaSBMAg3.png"}]},{id:23,title:"仿羊毛毡线",desc:"仿羊毛毡线指表面带有微绒，针织成品类似羊毛毡效果的线材。",img:"https://s2.loli.net/2022/01/25/L1bZIx37WmCahMz.png",detailList:[{desc:`
织物示例：`,img:"https://s2.loli.net/2022/01/25/OHRYepUQls6uvoc.png"},{desc:`新手贴士：使用仿羊毛毡线钩织时多使用记号扣！

`}]},{id:24,title:"合股线/混合线",desc:`合股线是将多股单纱捻合而成。
混合线指将多根线材混合编织以形成不同的花纹，同时增加厚度。`,img:"https://s2.loli.net/2022/01/25/uARKnrW3oJlfPjz.png",detailList:[{desc:`
1、合股线：一方面，大多数用于手编的纱线都是合股的，可以增加稳定性和厚度；另一方面，将几种颜色混合在一起形成的合股纱线会产生不同的纹理。`,img:"https://s2.loli.net/2022/01/25/w5Hu2cv4zSDbVlQ.png"},{desc:"2、混合线：通过将混线的方式编织可以得到很多各具特色的花纹。",img:"https://s2.loli.net/2022/01/25/B9oDZIRl73OTW2z.png"}]},{id:25,title:"合成线材",desc:"冰条线源自废石油渣，带有毛绒质感，是钩织围巾、毛线鞋等保暖物品很好的选择。",img:"https://s2.loli.net/2022/01/25/2UMYEwj3uZabSgH.png",detailList:[{desc:`
1、羊毛和棉：棉的强度和柔软性为羊毛非常保暖（有时会有点扎）的特性增加了光滑度、透气性和耐洗性。该混合物非常适合皮肤敏感的人和婴儿。`,img:"https://s2.loli.net/2022/01/25/6yNhfiPFjegQ4zE.png"},{desc:"2、天然纤维和合成纤维：人造纤维通常与天然纤维混合，以带来结构、强度和耐洗性；或者出于审美原因，例如添加光泽。它们有助于将其他纱线（如马海毛和羊毛）粘合在一起，并防止脱落，还可以防止动物纤维收缩。",img:"https://s2.loli.net/2022/01/25/TARIvLwu9Qi721e.png"},{desc:"3、纯合成线：制造商可以混合人造纤维以创造各种质地的线材。尽管与动物纤维相比，它们的保暖性不高，但大多数纯合成纤维混合物可以经常洗涤，有些还可以烘干。",img:"https://s2.loli.net/2022/01/25/JKmhErpZSaPeMtX.png"}]},{id:26,title:"特殊线材",desc:"生活中许多材料都可作为钩织线材，此处简单举几例。",img:"https://s2.loli.net/2022/01/25/eSq1aXbhLvjYBtK.png",detailList:[{desc:`
1、塑料线：`,img:"https://s2.loli.net/2022/01/25/kzVxQyKT9f7mLhN.png"},{desc:"2、塑料绳：",img:"https://s2.loli.net/2022/01/25/6ZsPRpYnO2Dfmj5.png"},{desc:"3、胶制线：",img:"https://s2.loli.net/2022/01/25/q83USGb6L1plXV2.png"},{desc:"4、金属线：",img:"https://s2.loli.net/2022/01/25/9KLmRBQowyjItOS.png"}]}],G5=[{id:1,title:"新手必备",desc:"此处列出新手入门学习钩针编织/棒针编织的必备工具套装。其他器材可后期根据自己的需要准备。",img:"https://s2.loli.net/2022/01/25/86YFO94cuXVp13P.png",detailList:[{desc:`
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

`}]}],j5=[{id:1,title:"雪花熊",desc:`钩针：4.0-6.0mm
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
配件：塑料卡包内芯、18mm磁扣`,img:"https://s2.loli.net/2022/01/26/nYe3KQg4kMc7IGR.png",detail:"https://s2.loli.net/2022/01/26/kzrmgGLeC2I7YMb.png"}],z5=[{id:1,img:"https://ingenueland.online/crochet-time/images/ct-color-fill-svg-sock-1.jpg",path:["M110.41 35C110.41 34.2374 110.411 33.6534 110.48 33.1816C110.547 32.7203 110.672 32.4299 110.872 32.2218C111.076 32.01 111.418 31.8225 112.043 31.6927C112.669 31.5625 113.532 31.5 114.725 31.5H154.725C156.323 31.5 156.85 31.7659 157.09 32.1437C157.226 32.3571 157.316 32.6698 157.363 33.1574C157.41 33.6438 157.41 34.2416 157.41 35V52.5H110.41V35Z","M157.411 53.5V103C157.411 108.959 158.732 112.251 160.141 115.758C160.512 116.681 160.888 117.618 161.248 118.623L131.985 124.475L109.513 112.751C110.393 109.88 110.41 107.772 110.41 103V53.5H157.411Z","M132.457 125.4L161.575 119.577L163.428 125.138C164.839 131.033 163.805 135.335 161.518 138.546C159.215 141.779 155.599 143.969 151.737 145.531L140.15 149.393C135.411 140.622 133.579 135.416 132.457 125.4Z","M94.1402 182.268L88.3691 168.803L88.363 168.789L88.356 168.775C86.4589 165.013 84.7215 162.552 82.263 160.602C79.8185 158.663 76.6946 157.256 72.09 155.534L62.7794 151.809C69.4398 144.836 75.07 141.336 82.9589 136.43C83.9902 135.789 85.0602 135.124 86.176 134.424C92.8365 130.244 98.2014 126.258 102.265 122.144C102.485 121.921 102.701 121.703 102.914 121.489C105.556 118.823 107.658 116.702 109.14 113.684L131.442 125.32C132.572 135.553 134.429 140.888 139.198 149.735C135.454 151.171 132.44 152.801 129.628 154.713C126.219 157.033 123.105 159.77 119.365 163.058C118.786 163.566 118.193 164.088 117.581 164.624L117.575 164.629L117.569 164.635C113.078 168.831 109.478 171.842 105.615 174.663C102.25 177.12 98.6808 179.436 94.1402 182.268Z","M71.7245 156.464L71.7244 156.464L71.735 156.468C76.3371 158.189 79.3307 159.552 81.6422 161.385C83.9378 163.206 85.5944 165.52 87.4567 169.211L93.2808 182.801C87.2472 186.485 81.4256 188.243 76.1647 188.093C70.8156 187.941 66.0103 185.817 62.1021 181.672C58.1732 176.754 56.3985 171.622 56.5044 166.636C56.6083 161.747 58.5209 156.954 62.0638 152.6L71.7245 156.464Z"],numPath:["M133.67 39.432L132.87 39.68C132.79 39.6267 132.71 39.552 132.63 39.456C132.55 39.36 132.51 39.2267 132.51 39.056C132.51 38.736 132.704 38.512 133.094 38.384L133.99 38.08H134.286C134.515 38.08 134.696 38.1467 134.83 38.28C134.963 38.4133 135.03 38.5947 135.03 38.824V42.992C134.971 43.0027 134.883 43.016 134.766 43.032C134.654 43.0533 134.539 43.064 134.422 43.064C134.304 43.064 134.198 43.056 134.102 43.04C134.011 43.024 133.934 42.992 133.87 42.944C133.806 42.896 133.755 42.832 133.718 42.752C133.686 42.6667 133.67 42.5573 133.67 42.424V39.432Z","M133.838 82.016C134.142 82.016 134.411 82.056 134.646 82.136C134.881 82.2107 135.081 82.3147 135.246 82.448C135.411 82.5813 135.537 82.7387 135.622 82.92C135.707 83.1013 135.75 83.296 135.75 83.504C135.75 84.064 135.433 84.5973 134.798 85.104L133.75 85.944H135.67C135.702 86.0027 135.731 86.0773 135.758 86.168C135.79 86.2587 135.806 86.3573 135.806 86.464C135.806 86.656 135.763 86.7947 135.678 86.88C135.593 86.96 135.481 87 135.342 87H132.566C132.449 86.92 132.355 86.8187 132.286 86.696C132.222 86.568 132.19 86.4187 132.19 86.248C132.19 86.0667 132.227 85.9147 132.302 85.792C132.377 85.664 132.459 85.5627 132.55 85.488L133.654 84.544C133.793 84.4267 133.907 84.3227 133.998 84.232C134.089 84.136 134.161 84.0507 134.214 83.976C134.273 83.9013 134.313 83.832 134.334 83.768C134.361 83.704 134.374 83.6427 134.374 83.584C134.374 83.4347 134.307 83.3173 134.174 83.232C134.046 83.1467 133.886 83.104 133.694 83.104C133.481 83.104 133.289 83.1387 133.118 83.208C132.953 83.272 132.814 83.3413 132.702 83.416C132.611 83.352 132.537 83.272 132.478 83.176C132.419 83.08 132.39 82.968 132.39 82.84C132.39 82.5627 132.521 82.3573 132.782 82.224C133.043 82.0853 133.395 82.016 133.838 82.016Z","M106.794 142.016C107.407 142.016 107.874 142.144 108.194 142.4C108.514 142.651 108.674 142.989 108.674 143.416C108.674 143.672 108.604 143.891 108.466 144.072C108.332 144.248 108.172 144.381 107.986 144.472C108.098 144.515 108.202 144.568 108.298 144.632C108.394 144.696 108.479 144.776 108.554 144.872C108.628 144.968 108.687 145.08 108.73 145.208C108.772 145.336 108.794 145.485 108.794 145.656C108.794 145.885 108.743 146.091 108.642 146.272C108.546 146.453 108.41 146.608 108.234 146.736C108.058 146.864 107.847 146.96 107.602 147.024C107.362 147.093 107.098 147.128 106.81 147.128C106.255 147.128 105.836 147.051 105.554 146.896C105.271 146.741 105.13 146.544 105.13 146.304C105.13 146.16 105.164 146.037 105.234 145.936C105.303 145.829 105.388 145.747 105.49 145.688C105.596 145.763 105.738 145.843 105.914 145.928C106.095 146.008 106.33 146.048 106.618 146.048C106.89 146.048 107.09 146 107.218 145.904C107.351 145.808 107.418 145.683 107.418 145.528C107.418 145.373 107.364 145.256 107.258 145.176C107.156 145.096 106.978 145.056 106.722 145.056H105.97C105.932 144.997 105.9 144.925 105.874 144.84C105.847 144.755 105.834 144.653 105.834 144.536C105.834 144.413 105.844 144.309 105.866 144.224C105.892 144.133 105.927 144.059 105.97 144H106.722C107.106 144 107.298 143.853 107.298 143.56C107.298 143.421 107.236 143.309 107.114 143.224C106.991 143.139 106.807 143.096 106.562 143.096C106.343 143.096 106.151 143.123 105.986 143.176C105.82 143.224 105.684 143.285 105.578 143.36C105.487 143.296 105.412 143.219 105.354 143.128C105.295 143.032 105.266 142.92 105.266 142.792C105.266 142.525 105.404 142.331 105.682 142.208C105.959 142.08 106.33 142.016 106.794 142.016Z","M147.862 129.192C147.964 129.16 148.078 129.133 148.206 129.112C148.34 129.091 148.46 129.08 148.566 129.08C148.689 129.08 148.806 129.093 148.918 129.12C149.036 129.141 149.14 129.181 149.23 129.24C149.321 129.293 149.393 129.368 149.446 129.464C149.5 129.56 149.526 129.68 149.526 129.824V131.952H150.238C150.27 132.011 150.302 132.088 150.334 132.184C150.366 132.28 150.382 132.381 150.382 132.488C150.382 132.691 150.337 132.835 150.246 132.92C150.156 133.005 150.041 133.048 149.902 133.048H149.526V133.992C149.468 134.003 149.38 134.016 149.262 134.032C149.145 134.053 149.033 134.064 148.926 134.064C148.809 134.064 148.705 134.059 148.614 134.048C148.524 134.037 148.446 134.013 148.382 133.976C148.324 133.933 148.278 133.875 148.246 133.8C148.214 133.725 148.198 133.624 148.198 133.496V133.048H146.19C146.068 132.984 145.961 132.891 145.87 132.768C145.785 132.64 145.742 132.485 145.742 132.304C145.742 132.203 145.756 132.091 145.782 131.968C145.809 131.845 145.854 131.739 145.918 131.648L147.862 129.192ZM148.27 130.448H148.246L147.182 131.952H148.27V130.448Z","M71.9102 174.128C71.6648 174.128 71.4408 174.109 71.2382 174.072C71.0408 174.035 70.8702 173.979 70.7262 173.904C70.5822 173.829 70.4702 173.739 70.3902 173.632C70.3102 173.52 70.2702 173.392 70.2702 173.248C70.2702 173.099 70.3128 172.973 70.3982 172.872C70.4835 172.771 70.5795 172.691 70.6862 172.632C70.8355 172.744 70.9955 172.843 71.1662 172.928C71.3368 173.008 71.5528 173.048 71.8142 173.048C72.0648 173.048 72.2435 172.992 72.3502 172.88C72.4568 172.768 72.5102 172.632 72.5102 172.472C72.5102 172.317 72.4622 172.189 72.3662 172.088C72.2755 171.987 72.1155 171.936 71.8862 171.936C71.7422 171.936 71.6222 171.952 71.5262 171.984C71.4302 172.016 71.3208 172.061 71.1982 172.12C70.9368 172.109 70.7288 172.04 70.5742 171.912C70.4248 171.779 70.3502 171.576 70.3502 171.304C70.3502 171.288 70.3502 171.269 70.3502 171.248C70.3502 171.221 70.3528 171.171 70.3582 171.096L70.4542 169.88C70.4702 169.651 70.5422 169.469 70.6702 169.336C70.7982 169.203 70.9768 169.136 71.2062 169.136H73.5102C73.5422 169.195 73.5742 169.272 73.6062 169.368C73.6382 169.464 73.6542 169.565 73.6542 169.672C73.6542 169.875 73.6088 170.019 73.5182 170.104C73.4275 170.189 73.3128 170.232 73.1742 170.232H71.6382L71.5822 170.984C71.6835 170.957 71.7848 170.933 71.8862 170.912C71.9928 170.891 72.1262 170.88 72.2862 170.88C72.5635 170.88 72.8035 170.923 73.0062 171.008C73.2088 171.088 73.3742 171.2 73.5022 171.344C73.6355 171.488 73.7315 171.656 73.7902 171.848C73.8542 172.04 73.8862 172.245 73.8862 172.464C73.8862 172.683 73.8488 172.893 73.7742 173.096C73.6995 173.299 73.5822 173.477 73.4222 173.632C73.2622 173.781 73.0568 173.901 72.8062 173.992C72.5608 174.083 72.2622 174.128 71.9102 174.128Z"]}],W5=[{id:1,title:"萌4",colors:[{name:"#01",value:"#F3F2F0"},{name:"#02",value:"#F5F6F1"},{name:"#03",value:"#F3EADB"},{name:"#04",value:"#FAE9E1"},{name:"#01",value:"#FED5DD"},{name:"#02",value:"#FBA3C9"},{name:"#01",value:"#F67B97"},{name:"#02",value:"#FF6CBC"},{name:"#03",value:"#C52D2C"},{name:"#04",value:"#F0E4BC"},{name:"#01",value:"#FCE281"},{name:"#02",value:"#F2E15D"},{name:"#01",value:"#F6B453"},{name:"#02",value:"#DF5F3C"},{name:"#03",value:"#D5B6DC"},{name:"#04",value:"#D08BDE"},{name:"#01",value:"#E2FAE6"},{name:"#02",value:"#98CAFA"},{name:"#01",value:"#83A0E7"},{name:"#02",value:"#3850B0"},{name:"#03",value:"#272954"},{name:"#04",value:"#AEE5E2"},{name:"#01",value:"#59A3BA"},{name:"#02",value:"#DCFAD3"},{name:"#01",value:"#98BC44"},{name:"#02",value:"#415B2E"},{name:"#03",value:"#048C62"},{name:"#04",value:"#EAE1D0"},{name:"#01",value:"#F0C892"},{name:"#02",value:"#D5A268"},{name:"#01",value:"#9B734C"},{name:"#02",value:"#6D473C"},{name:"#03",value:"#A4A4A4"},{name:"#04",value:"#000000"},{name:"#01",value:"#E8CEA2"},{name:"#02",value:"#E4E4E4"},{name:"#01",value:"#FAB6AA"},{name:"#02",value:"#D5A7BE"},{name:"#03",value:"#FD780F"},{name:"#04",value:"#DAD46A"},{name:"#01",value:"#81C7C7"},{name:"#02",value:"#6783A1"},{name:"#01",value:"#F2DDD5"},{name:"#02",value:"#EEC3C4"},{name:"#03",value:"#70B8BE"},{name:"#04",value:"#196182"},{name:"#01",value:"#BDCE9E"},{name:"#02",value:"#D3B358"},{name:"#01",value:"#6A447A"},{name:"#02",value:"#7F2735"},{name:"#03",value:"#F8F8F1"},{name:"#04",value:"#F49CB7"},{name:"#01",value:"#E4AFCF"},{name:"#02",value:"#02937E"},{name:"#01",value:"#7F9351"},{name:"#02",value:"#C5B7D3"},{name:"#03",value:"#A58CBB"},{name:"#04",value:"#04A4C5"},{name:"#01",value:"#1F6F5F"},{name:"#02",value:"#995920"},{name:"#01",value:"#7D5121"},{name:"#02",value:"#944928"},{name:"#03",value:"#F5C73D"},{name:"#04",value:"#EABE8D"},{name:"#01",value:"#EEA48F"},{name:"#02",value:"#99282D"},{name:"#02",value:"#B15249"}]},{id:2,title:"yarn【羽】",colors:[{name:"01",value:"#F3EBE0"},{name:"01",value:"#F1E5E7"},{name:"01",value:"#E4E2E0"},{name:"01",value:"#F7BFA9"},{name:"01",value:"#ADADAD"},{name:"01",value:"#2C5238"},{name:"01",value:"#86718E"},{name:"01",value:"#CCD2BC"},{name:"01",value:"#90A77D"},{name:"01",value:"#DC7D45"},{name:"01",value:"#F3CCA4"},{name:"01",value:"#FFC459"},{name:"01",value:"#AF2728"},{name:"01",value:"#72323C"},{name:"01",value:"#D0CB8A"},{name:"01",value:"#73C26E"},{name:"01",value:"#D1E4EB"},{name:"01",value:"#78BEE8"},{name:"01",value:"#8FAEDF"},{name:"01",value:"#13193A"},{name:"01",value:"#518F7F"},{name:"01",value:"#B39FCC"},{name:"01",value:"#B19F9E"},{name:"01",value:"#6A4F49"},{name:"01",value:"#EFE5AB"},{name:"01",value:"#E7DECB"},{name:"01",value:"#CD8893"},{name:"01",value:"#E3A286"}]},{id:3,title:"superwash merino",colors:[{name:"01",value:"#FBF6F4"},{name:"01",value:"#D1CB6B"},{name:"01",value:"#6F784B"},{name:"01",value:"#61A3D2"},{name:"01",value:"#3E4B82"},{name:"01",value:"#AD251F"},{name:"01",value:"#59342E"},{name:"01",value:"#C0C0C3"}]}],$5=({style:A,className:e=""})=>U.jsxs("svg",{width:"40%",viewBox:"0 0 2594 490",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:A,className:e,children:[U.jsxs("g",{"clip-path":"url(#clip0_401_299)",children:[U.jsx("rect",{width:"2594",height:"490",fill:"white"}),U.jsx("path",{d:"M1425.6 461.505V180.477C1425.6 160.844 1458.67 161.39 1458.67 180.477V389.474C1458.67 402.522 1458.67 404.705 1456.53 418.941L1453.06 446.586C1452.78 448.781 1456.21 449.991 1457.61 448.275C1473.51 428.749 1493.52 434.856 1477.87 468.195C1466.36 492.689 1425.6 494.791 1425.6 461.505Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1523.52 312.552H1366.19C1347 312.552 1347.54 278.719 1366.19 278.719H1453.12C1465.88 278.719 1468.01 278.719 1481.92 280.902L1509.09 284.476C1511.27 284.763 1512.5 281.404 1510.82 279.99C1491.46 263.694 1497.35 242.994 1530.06 259.075C1554 270.843 1556.06 312.552 1523.52 312.552Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("circle",{cx:"108.274",cy:"292.525",r:"100",transform:"rotate(70.6084 108.274 292.525)",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M11.0642 323.563C32.1071 387.793 71.0477 430.726 166.227 439.099",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M15.3705 249.957C36.7982 197.89 97.3489 159.084 164.593 142.305",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M140.226 428.415L140.862 433.374L140.226 428.415C132.918 429.353 131.813 439.395 138.468 442.093C143.609 444.177 147.148 446.004 154.021 449.716C163.268 454.71 172.502 455.613 180.066 456.353C181.444 456.488 182.767 456.618 184.024 456.765L184.138 456.779L184.254 456.787L294.718 464.614L294.732 464.615C310.945 465.718 323.547 465.055 332.331 463.229C336.693 462.323 340.403 461.071 343.186 459.403C345.845 457.808 348.642 455.202 348.947 451.317C349.255 447.404 346.866 444.406 344.452 442.446C341.937 440.405 338.44 438.659 334.248 437.17C325.806 434.171 313.378 431.806 297.05 430.694C297.047 430.694 297.044 430.694 297.041 430.693L186.408 422.749L186.129 422.729L185.85 422.74C185.036 422.773 183.936 422.757 182.576 422.737C176.935 422.656 166.819 422.511 154.117 425.483L153.926 425.528L153.74 425.587C149.342 426.986 145.217 427.774 140.226 428.415Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M148.888 153.923L148.82 148.924L148.888 153.923C141.521 154.023 139.013 144.236 145.223 140.629C150.019 137.842 153.266 135.534 159.548 130.892C167.999 124.647 177.014 122.452 184.399 120.655C185.744 120.327 187.035 120.013 188.259 119.69L188.371 119.661L188.484 119.636L296.747 96.3392L296.761 96.3363C312.656 92.962 325.227 91.8444 334.18 92.4157C338.626 92.6995 342.475 93.4162 345.466 94.6764C348.323 95.8808 351.459 98.0677 352.308 101.87C353.163 105.701 351.22 109.006 349.106 111.286C346.904 113.661 343.686 115.881 339.746 117.946C331.81 122.103 319.839 126.194 303.83 129.593C303.827 129.594 303.824 129.595 303.821 129.595L195.408 153.032L195.135 153.091L194.856 153.12C194.047 153.202 192.96 153.372 191.615 153.583C186.042 154.457 176.047 156.025 163.053 154.87L162.858 154.853L162.665 154.821C158.114 154.054 153.92 153.855 148.888 153.923Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10","stroke-linecap":"round"}),U.jsx("path",{d:"M400.999 329C400.999 315.4 399.132 305.4 395.399 299C391.666 292.333 384.199 289 372.999 289H368.999V281H400.999C411.132 281 418.732 282.467 423.799 285.4C429.132 288.067 432.866 292.6 434.999 299H436.999C441.799 292.867 448.199 287.667 456.199 283.4C464.466 279.133 474.066 277 484.999 277C495.666 277 503.666 279 508.999 283C513.532 286.467 518.199 292.467 522.999 301L506.999 313C504.066 309 499.799 306.067 494.199 304.2C488.599 302.067 482.199 301 474.999 301C466.999 301 459.666 302.867 452.999 306.6C446.332 310.067 440.999 314.867 436.999 321V469H400.999V329ZM630.134 473C612.001 473 596.268 468.733 582.934 460.2C569.601 451.4 559.468 439.533 552.534 424.6C545.601 409.667 542.134 393.133 542.134 375C542.134 356.867 545.601 340.333 552.534 325.4C559.468 310.467 569.601 298.733 582.934 290.2C596.268 281.4 612.001 277 630.134 277C648.268 277 664.001 281.4 677.334 290.2C690.668 298.733 700.801 310.467 707.734 325.4C714.668 340.333 718.134 356.867 718.134 375C718.134 393.133 714.668 409.667 707.734 424.6C700.801 439.533 690.668 451.4 677.334 460.2C664.001 468.733 648.268 473 630.134 473ZM630.134 457C640.001 457 648.668 453.4 656.134 446.2C663.868 439 669.734 429.133 673.734 416.6C678.001 404.067 680.134 390.2 680.134 375C680.134 359.8 678.001 345.933 673.734 333.4C669.734 320.867 663.868 311 656.134 303.8C648.668 296.6 640.001 293 630.134 293C620.268 293 611.468 296.6 603.734 303.8C596.268 311 590.401 320.867 586.134 333.4C582.134 345.933 580.134 359.8 580.134 375C580.134 390.2 582.134 404.067 586.134 416.6C590.401 429.133 596.268 439 603.734 446.2C611.468 453.4 620.268 457 630.134 457ZM841.91 473C822.71 473 806.444 468.733 793.11 460.2C780.044 451.4 770.177 439.667 763.51 425C757.11 410.067 753.91 393.4 753.91 375C753.91 356.6 757.11 340.067 763.51 325.4C770.177 310.467 780.044 298.733 793.11 290.2C806.444 281.4 822.71 277 841.91 277C871.244 277 890.577 281.667 899.911 291C904.444 295.533 907.244 301.133 908.311 307.8C909.377 314.2 909.911 325.933 909.911 343H901.911C900.844 326.467 895.644 314.067 886.31 305.8C876.977 297.267 864.844 293 849.911 293C830.71 293 816.177 300.6 806.31 315.8C796.71 331 791.91 350.733 791.91 375C791.91 399.267 796.71 419 806.31 434.2C816.177 449.4 830.71 457 849.911 457C863.511 457 874.711 454.467 883.51 449.4C892.31 444.067 900.444 435.933 907.91 425L915.91 431C907.111 445.933 896.71 456.733 884.71 463.4C872.71 469.8 858.444 473 841.91 473ZM957.737 253C957.737 239.4 955.87 229.4 952.137 223C948.403 216.333 940.937 213 929.737 213H921.737V205H957.737C967.603 205 974.937 206.333 979.737 209C984.803 211.4 988.403 215.933 990.537 222.6C992.67 229.267 993.737 239.4 993.737 253V297C999.337 291.4 1006.54 286.733 1015.34 283C1024.4 279 1034.54 277 1045.74 277C1065.74 277 1082 282.333 1094.54 293C1107.34 303.667 1113.74 322.333 1113.74 349V469H1077.74V349C1077.74 330.333 1073.47 316.733 1064.94 308.2C1056.67 299.4 1046.27 295 1033.74 295C1019.6 295 1006.27 302.067 993.737 316.2V469H957.737V253Z",fill:"#202020"}),U.jsx("path",{d:"M2129.8 329C2129.8 315.4 2127.93 305.4 2124.2 299C2120.47 292.333 2113 289 2101.8 289H2093.8V281H2129.8C2139.67 281 2147.13 282.333 2152.2 285C2157.53 287.667 2161.4 291.667 2163.8 297H2165.8C2171.4 291.4 2178.6 286.733 2187.4 283C2196.47 279 2206.6 277 2217.8 277C2229 277 2238.6 279.133 2246.6 283.4C2254.6 287.4 2261 294.6 2265.8 305C2272.73 296.2 2281.53 289.4 2292.2 284.6C2303.13 279.533 2314.33 277 2325.8 277C2342.87 277 2356.47 282.333 2366.6 293C2376.73 303.667 2381.8 322.333 2381.8 349V469H2345.8V349C2345.8 329.8 2343.13 316.067 2337.8 307.8C2332.47 299.267 2324.47 295 2313.8 295C2306.33 295 2298.47 297.8 2290.2 303.4C2281.93 308.733 2275.8 314.6 2271.8 321C2273.13 325 2273.8 334.333 2273.8 349V469H2237.8V349C2237.8 329.8 2235.13 316.067 2229.8 307.8C2224.47 299.267 2216.47 295 2205.8 295C2191.67 295 2178.33 302.067 2165.8 316.2V469H2129.8V329Z",fill:"#202020"}),U.jsx("path",{d:"M2439 397.002V329.878C2442.75 243.874 2588.32 245.544 2588.32 329.878L2588.74 373.492L2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492V397.002C2459.44 446.842 2536.6 469.434 2569.55 418.5C2582.75 398.097 2596.82 404.097 2585.82 425.597C2550.78 494.066 2439 471.316 2439 397.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M2549.11 380.589V340.733L2569.55 329.878C2569.55 273.934 2459.44 269.759 2459.44 329.878V373.492M2549.11 380.589L2588.74 373.492L2588.32 329.878C2588.32 245.544 2442.75 243.874 2439 329.878V397.002C2439 471.316 2550.78 494.066 2585.82 425.597C2596.82 404.097 2582.75 398.097 2569.55 418.5C2536.6 469.434 2459.44 446.842 2459.44 397.002V373.492M2549.11 380.589C2526.59 383.929 2489.47 383.512 2459.44 373.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M1171 405.002V337.878C1174.75 251.874 1320.32 253.544 1320.32 337.878L1320.74 381.492L1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492V405.002C1191.44 454.842 1268.6 477.434 1301.55 426.5C1314.75 406.097 1328.82 412.097 1317.82 433.597C1282.78 502.066 1171 479.316 1171 405.002Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1281.11 388.589V348.733L1301.55 337.878C1301.55 281.934 1191.44 277.759 1191.44 337.878V381.492M1281.11 388.589L1320.74 381.492L1320.32 337.878C1320.32 253.544 1174.75 251.874 1171 337.878V405.002C1171 479.316 1282.78 502.066 1317.82 433.597C1328.82 412.097 1314.75 406.097 1301.55 426.5C1268.6 477.434 1191.44 454.842 1191.44 405.002V381.492M1281.11 388.589C1258.59 391.929 1221.47 391.512 1191.44 381.492",stroke:"#202020","stroke-width":"10","stroke-linejoin":"round"}),U.jsx("path",{d:"M2010.8 168.462L2010.8 168.463C2009.52 171.322 2008.45 176.386 2007.62 182.146C2006.75 188.119 2006.05 195.449 2005.71 203.232C2005.03 218.574 2005.68 236.346 2009.47 249.029C2010.38 253.035 2010.89 260.159 2010.89 264.685V429.323C2010.89 443.107 2012.09 453.777 2014.02 461.169C2014.98 464.834 2016.18 467.976 2017.71 470.328C2019.11 472.496 2021.57 475.161 2025.31 475.228C2029.09 475.295 2031.63 472.653 2033.06 470.486C2034.6 468.152 2035.81 465.018 2036.77 461.364C2038.7 453.986 2039.9 443.27 2039.9 429.323V264.685C2039.9 259.632 2040.42 252.549 2041.3 249.089C2045.33 235.638 2046 218.131 2045.27 203.04C2044.89 195.413 2044.15 188.261 2043.25 182.36C2042.36 176.588 2041.27 171.645 2040.07 168.65C2038.77 165.409 2036.07 163.475 2033.53 162.408C2030.97 161.329 2028.08 160.902 2025.37 160.937C2022.65 160.972 2019.8 161.475 2017.29 162.543C2014.86 163.579 2012.17 165.41 2010.8 168.462Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("ellipse",{cx:"2025.62",cy:"214.096",rx:"7.92068",ry:"37.0379",fill:"white",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1791.99 221.788L1788.33 222.804V226.606V232.719C1788.33 232.769 1788.33 232.825 1788.33 232.887C1788.32 233.919 1788.29 236.495 1790.46 238.694C1791.21 239.524 1791.48 240.125 1791.64 240.762C1791.85 241.621 1791.93 242.759 1791.93 244.945V284.86C1791.93 286.13 1792.36 287.116 1792.61 287.599C1792.89 288.163 1793.23 288.645 1793.52 289.019C1794.11 289.774 1794.83 290.486 1795.53 291.096C1796.82 292.227 1798.73 293.597 1800.7 294.263L1813.96 298.918C1814.62 299.159 1815.05 299.358 1815.32 299.506C1815.32 299.536 1815.32 299.569 1815.32 299.603V468.972C1815.32 474.332 1817.66 478.518 1821.95 480.608C1825.73 482.449 1830.13 482.212 1833.73 481.338C1837.45 480.437 1841.17 478.663 1844.06 476.392C1846.71 474.311 1849.79 470.885 1849.79 466.455V234.157V229.947L1845.64 229.23L1827.16 226.034C1827.15 226.029 1827.14 226.022 1827.13 226.013C1827.07 225.979 1826.97 225.902 1826.82 225.743C1826.51 225.401 1826.13 224.824 1825.75 223.952C1824.99 222.241 1824.55 220.267 1824.18 218.572L1824.12 218.328L1822.98 213.187L1817.9 214.596L1791.99 221.788Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M1849.13 221.823L1852.67 222.904V226.606V232.719C1852.67 232.769 1852.67 232.825 1852.67 232.887C1852.68 233.919 1852.71 236.495 1850.54 238.694C1849.79 239.524 1849.52 240.125 1849.36 240.762C1849.15 241.621 1849.07 242.759 1849.07 244.945V284.86C1849.07 286.13 1848.64 287.116 1848.39 287.599C1848.11 288.163 1847.77 288.645 1847.48 289.019C1846.89 289.774 1846.17 290.486 1845.47 291.096C1844.17 292.236 1842.24 293.618 1840.25 294.278L1826.29 298.931C1825.65 299.166 1825.23 299.361 1824.96 299.506C1824.96 299.536 1824.96 299.569 1824.96 299.603V468.972C1824.96 474.332 1822.62 478.518 1818.33 480.608C1814.55 482.449 1810.15 482.212 1806.55 481.338C1802.83 480.437 1799.11 478.663 1796.22 476.392C1793.57 474.311 1790.49 470.885 1790.49 466.455V234.157V229.976L1794.6 229.236L1812.56 226.006C1812.57 226.005 1812.57 226.005 1812.57 226.004C1813.26 225.871 1814.03 225.394 1814.9 223.649C1815.68 222.097 1816.14 220.364 1816.64 218.5C1816.73 218.131 1816.83 217.757 1816.94 217.378L1818.29 212.408L1823.22 213.912L1849.13 221.823Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsxs("mask",{id:"path-18-outside-1_401_299",maskUnits:"userSpaceOnUse",x:"1675",y:"3.97754",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1675",y:"3.97754",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.68 220.492V53.281C1799.81 -18.9975 1689.68 16.962 1685 97.8707C1685 146.776 1729.63 184.533 1776.41 176.982C1787.93 175.123 1792.97 176.622 1793.33 184.533V226.606C1792.61 230.561 1820.68 225.167 1820.68 220.492ZM1797.65 69.8224V133.111C1797.65 164.036 1728.79 163.569 1713.43 116.21C1700.84 77.3739 1730.64 47.6525 1750.86 42.4931C1777.37 35.7304 1797.65 46.8082 1797.65 69.8224Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.68 53.281L1830.29 50.5064L1830.68 51.8659V53.281H1820.68ZM1685 97.8707H1675V97.5818L1675.02 97.2934L1685 97.8707ZM1776.41 176.982L1774.82 167.109L1774.82 167.109L1776.41 176.982ZM1793.33 184.533L1803.32 184.079L1803.33 184.306V184.533H1793.33ZM1793.33 226.606H1803.33V227.508L1803.17 228.396L1793.33 226.606ZM1713.43 116.21L1722.94 113.125L1722.94 113.125L1713.43 116.21ZM1750.86 42.4931L1753.33 52.1827L1753.33 52.1827L1750.86 42.4931ZM1830.68 53.281V220.492H1810.68V53.281H1830.68ZM1675.02 97.2934C1677.63 52.1549 1709.6 19.7858 1743.65 8.62785C1760.75 3.02685 1779.14 2.49859 1795.16 9.14055C1811.49 15.9125 1824.28 29.7202 1830.29 50.5064L1811.07 56.0556C1806.64 40.7025 1797.84 31.9008 1787.5 27.6152C1776.85 23.1996 1763.51 23.1658 1749.88 27.6334C1722.48 36.6128 1697.05 62.6778 1694.98 98.448L1675.02 97.2934ZM1778.01 186.854C1725.05 195.401 1675 152.845 1675 97.8707H1695C1695 140.707 1734.2 173.665 1774.82 167.109L1778.01 186.854ZM1783.34 184.987C1783.29 183.96 1783.12 184.11 1783.48 184.734C1783.96 185.573 1784.72 186.125 1785.24 186.339C1785.53 186.455 1785.24 186.267 1783.85 186.265C1782.51 186.263 1780.62 186.432 1778.01 186.854L1774.82 167.109C1780.53 166.188 1787.25 165.532 1792.87 167.848C1796.13 169.194 1798.94 171.487 1800.82 174.774C1802.59 177.847 1803.18 181.151 1803.32 184.079L1783.34 184.987ZM1783.33 226.606V184.533H1803.33V226.606H1783.33ZM1830.68 220.492C1830.68 226.064 1826.77 229.266 1825.56 230.197C1823.81 231.533 1821.83 232.501 1820.18 233.195C1816.76 234.632 1812.6 235.781 1808.77 236.577C1804.95 237.369 1800.81 237.946 1797.39 237.976C1795.85 237.99 1793.52 237.916 1791.27 237.201C1790.18 236.855 1788.07 236.044 1786.23 234.09C1783.96 231.676 1782.86 228.284 1783.49 224.815L1803.17 228.396C1803.4 227.12 1803.39 225.615 1802.91 224.05C1802.44 222.495 1801.63 221.275 1800.8 220.391C1799.3 218.79 1797.71 218.264 1797.32 218.14C1796.47 217.869 1796.22 217.986 1797.21 217.977C1798.85 217.963 1801.59 217.64 1804.7 216.994C1807.8 216.352 1810.61 215.523 1812.43 214.757C1813.4 214.35 1813.6 214.16 1813.39 214.322C1813.28 214.411 1812.73 214.834 1812.16 215.665C1811.56 216.527 1810.68 218.192 1810.68 220.492H1830.68ZM1787.65 133.111V69.8224H1807.65V133.111H1787.65ZM1722.94 113.125C1729.14 132.216 1746.21 142.24 1762.43 144.081C1770.55 145.002 1777.48 143.729 1781.95 141.35C1786.09 139.144 1787.65 136.407 1787.65 133.111H1807.65C1807.65 145.277 1800.6 154.079 1791.35 159.003C1782.43 163.755 1771.19 165.203 1760.17 163.953C1738.13 161.452 1713.09 147.563 1703.92 119.295L1722.94 113.125ZM1753.33 52.1827C1746 54.0533 1735.47 61.028 1728.22 72.1723C1721.23 82.9298 1717.7 96.9579 1722.94 113.125L1703.92 119.295C1696.57 96.6259 1701.64 76.3753 1711.45 61.2732C1721.02 46.558 1735.5 36.0923 1748.39 32.8034L1753.33 52.1827ZM1787.65 69.8224C1787.65 61.6117 1784.25 56.5493 1779.22 53.6691C1773.75 50.5313 1764.9 49.2314 1753.33 52.1827L1748.39 32.8034C1763.33 28.9921 1777.88 29.8497 1789.16 36.3137C1800.9 43.0353 1807.65 55.0188 1807.65 69.8224H1787.65Z",fill:"#202020",mask:"url(#path-18-outside-1_401_299)"}),U.jsxs("mask",{id:"path-20-outside-2_401_299",maskUnits:"userSpaceOnUse",x:"1810",y:"3.68457",width:"156",height:"235",fill:"black",children:[U.jsx("rect",{fill:"white",x:"1810",y:"3.68457",width:"156",height:"235"}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z"})]}),U.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1820.32 220.2V52.9881C1841.19 -19.2905 1951.32 16.669 1956 97.5778C1956 146.483 1911.37 184.24 1864.59 176.689C1853.07 174.83 1848.03 176.329 1847.67 184.24V226.313C1848.39 230.268 1820.32 224.874 1820.32 220.2ZM1843.35 69.5294V132.818C1843.35 163.743 1912.21 163.276 1927.57 115.917C1940.16 77.0809 1910.36 47.3595 1890.14 42.2001C1863.63 35.4374 1843.35 46.5152 1843.35 69.5294Z",fill:"#F8F8F8"}),U.jsx("path",{d:"M1820.32 52.9881L1810.71 50.2135L1810.32 51.573V52.9881H1820.32ZM1956 97.5778H1966V97.2889L1965.98 97.0005L1956 97.5778ZM1864.59 176.689L1866.18 166.816L1866.18 166.816L1864.59 176.689ZM1847.67 184.24L1837.68 183.786L1837.67 184.013V184.24H1847.67ZM1847.67 226.313H1837.67V227.215L1837.83 228.103L1847.67 226.313ZM1927.57 115.917L1937.08 119.002L1937.08 119.002L1927.57 115.917ZM1890.14 42.2001L1892.61 32.5104L1892.61 32.5104L1890.14 42.2001ZM1810.32 52.9881V220.2H1830.32V52.9881H1810.32ZM1965.98 97.0005C1963.37 51.862 1931.4 19.4928 1897.35 8.33489C1880.25 2.7339 1861.86 2.20564 1845.84 8.8476C1829.51 15.6195 1816.72 29.4273 1810.71 50.2135L1829.93 55.7626C1834.36 40.4096 1843.16 31.6078 1853.5 27.3222C1864.15 22.9066 1877.49 22.8728 1891.12 27.3405C1918.52 36.3198 1943.95 62.3848 1946.02 98.1551L1965.98 97.0005ZM1862.99 186.561C1915.95 195.108 1966 152.552 1966 97.5778H1946C1946 140.414 1906.8 173.372 1866.18 166.816L1862.99 186.561ZM1857.66 184.695C1857.71 183.667 1857.88 183.817 1857.52 184.441C1857.04 185.28 1856.28 185.832 1855.76 186.046C1855.47 186.162 1855.76 185.974 1857.15 185.972C1858.49 185.97 1860.38 186.139 1862.99 186.561L1866.18 166.816C1860.47 165.895 1853.75 165.239 1848.13 167.555C1844.87 168.901 1842.06 171.194 1840.18 174.481C1838.41 177.554 1837.82 180.858 1837.68 183.786L1857.66 184.695ZM1857.67 226.313V184.24H1837.67V226.313H1857.67ZM1810.32 220.2C1810.32 225.771 1814.23 228.973 1815.44 229.904C1817.19 231.24 1819.17 232.208 1820.82 232.902C1824.24 234.339 1828.4 235.488 1832.23 236.284C1836.05 237.076 1840.19 237.653 1843.61 237.683C1845.15 237.697 1847.48 237.623 1849.73 236.908C1850.82 236.562 1852.93 235.751 1854.77 233.797C1857.04 231.383 1858.14 227.991 1857.51 224.522L1837.83 228.103C1837.6 226.827 1837.61 225.322 1838.09 223.758C1838.56 222.202 1839.37 220.982 1840.2 220.098C1841.7 218.497 1843.29 217.971 1843.68 217.847C1844.53 217.576 1844.78 217.693 1843.79 217.684C1842.15 217.67 1839.41 217.348 1836.3 216.701C1833.2 216.059 1830.39 215.23 1828.57 214.464C1827.6 214.057 1827.4 213.867 1827.61 214.029C1827.72 214.118 1828.27 214.541 1828.84 215.372C1829.44 216.235 1830.32 217.899 1830.32 220.2H1810.32ZM1853.35 132.818V69.5294H1833.35V132.818H1853.35ZM1918.06 112.832C1911.86 131.923 1894.79 141.947 1878.57 143.788C1870.45 144.709 1863.52 143.436 1859.05 141.057C1854.91 138.851 1853.35 136.114 1853.35 132.818H1833.35C1833.35 144.984 1840.4 153.786 1849.65 158.71C1858.57 163.462 1869.81 164.91 1880.83 163.66C1902.87 161.159 1927.91 147.27 1937.08 119.002L1918.06 112.832ZM1887.67 51.8898C1895 53.7603 1905.53 60.735 1912.78 71.8794C1919.77 82.6368 1923.3 96.6649 1918.06 112.832L1937.08 119.002C1944.43 96.333 1939.36 76.0823 1929.55 60.9802C1919.98 46.265 1905.5 35.7993 1892.61 32.5104L1887.67 51.8898ZM1853.35 69.5294C1853.35 61.3188 1856.75 56.2563 1861.78 53.3761C1867.25 50.2384 1876.1 48.9384 1887.67 51.8898L1892.61 32.5104C1877.67 28.6991 1863.12 29.5567 1851.84 36.0208C1840.1 42.7423 1833.35 54.7259 1833.35 69.5294H1853.35Z",fill:"#202020",mask:"url(#path-20-outside-2_401_299)"}),U.jsx("path",{d:"M1821.76 250.733C1831.67 250.733 1839.72 258.764 1839.72 268.679C1839.72 278.594 1831.67 286.624 1821.76 286.624C1811.85 286.624 1803.8 278.594 1803.8 268.679C1803.8 258.764 1811.85 250.733 1821.76 250.733Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("rect",{x:"2220",y:"425",width:"81",height:"52",fill:"white"}),U.jsx("path",{d:"M2275.31 361.418L2264.36 307.631C2262.84 300.16 2252.16 300.16 2250.64 307.631L2239.69 361.418L2197.61 376.406C2191.41 378.615 2191.41 387.385 2197.61 389.594L2239.69 404.582L2250.64 458.369C2252.16 465.84 2262.84 465.84 2264.36 458.369L2275.31 404.582L2317.39 389.594C2323.59 387.385 2323.59 378.615 2317.39 376.406L2275.31 361.418Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"}),U.jsx("path",{d:"M625.293 355.198L628.599 358.113L631.906 355.198C637.183 350.545 644.15 347.967 651.639 347.967C667.478 347.967 680.539 360.312 681.199 375.846V380.367C678.702 412.324 649.424 427.534 635.921 432.737L635.896 432.747L635.87 432.757C633.712 433.616 631.247 434.007 628.599 434.007C625.951 434.007 623.486 433.616 621.328 432.757L621.302 432.747L621.277 432.737C607.774 427.534 578.496 412.324 575.999 380.367V375.846C576.66 360.312 589.72 347.967 605.559 347.967C613.048 347.967 620.015 350.545 625.293 355.198Z",fill:"#F8F8F8",stroke:"#202020","stroke-width":"10"})]}),U.jsx("defs",{children:U.jsx("clipPath",{id:"clip0_401_299",children:U.jsx("rect",{width:"2594",height:"490",fill:"white"})})})]}),X5=({fill:A="currentcolor",size:e=20})=>U.jsx("svg",{width:e,height:e,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:U.jsx("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:A})}),I2=({data:A=[]})=>{var c;const[e,t]=L.useState(!0),[r,n]=L.useState("0"),[o,i]=L.useState("1"),[a,s]=L.useState(!1);L.useEffect(()=>{const u=new ResizeObserver(f=>{for(let p of f)p.contentRect.width<=800?s(!0):s(!1)});return u.observe(document.body),()=>{u.disconnect()}},[]);const l=L.useMemo(()=>A==null?void 0:A.filter(u=>u.cap_id===r)[0].contentMenuList.filter(u=>u.id===o)[0],[o,r,A]);return U.jsxs(Ys,{className:"flex-1 flex width-100",children:[U.jsxs(ZB,{className:`relative ${e?"open":""}`,children:[U.jsx(qd,{data:A==null?void 0:A.map(u=>({key:u.cap_id,title:u.cap,dropData:u.contentMenuList.map(f=>({key:f.id,title:f.title})),open:!0})),direction:"column",active:r,onChange:u=>{n(u.key),i(`${Number(u.key)*10+1}`)},dropProps:{direction:"column",active:o},onDropChange:(u,f)=>{n(f.key),i(u.key)},theme:{activeBg:"var(--color-bg-3)",lineColor:"inherit"},className:"pt-24 height-100 border-right overflow-auto scrollbar-none"}),a&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx($A,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(Ce,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(he,{title:l.title,type:"h2"}),U.jsxs("div",{className:"flex column gap-12",children:[l.des&&U.jsx(he,{title:l.des,type:"p"}),(c=l.imgList)==null?void 0:c.map(u=>U.jsxs(Ce,{column:!0,gap:8,children:[U.jsx(he,{title:u.img_des,type:"p"}),U.jsx("img",{src:u.img_src,width:"100%"})]}))]})]})})]})},ZB=Rt.div`
  transform: translateX(-100%);
  width: 0;
  transition: all var(--transition-15) linear;
  &.open {
    width: 160px;
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
`,Ac=({data:A=[]})=>{var s,l;const[e,t]=L.useState(!0),[r,n]=L.useState(!1),[o,i]=L.useState(1),a=L.useMemo(()=>A==null?void 0:A.filter(c=>c.id===o)[0],[o,A]);return L.useEffect(()=>{const c=new ResizeObserver(u=>{for(let f of u)f.contentRect.width<=800?n(!0):n(!1)});return c.observe(document.body),()=>{c.disconnect()}},[]),U.jsxs(Ys,{className:"flex-1 flex width-100",children:[U.jsxs(ZB,{className:`relative ${e?"open":""}`,children:[U.jsx("div",{className:"height-100 width-100 overflow-auto pb-24",children:U.jsx("div",{className:"flex column gap-12 px-12 py-24 height-100 width-100",children:A==null?void 0:A.map((c,u)=>U.jsxs("div",{className:"flex column items-center justify-center gap-8 py-12 w-fit-content bg-gray radius-12 cursor-pointer",style:{aspectRatio:1,flexShrink:0},onClick:()=>i(c.id),children:[U.jsx(Xl,{url:c.img,width:64,className:"radius-8"}),U.jsx("div",{className:"fs-14",children:c.title})]},c.id??u))})}),r&&U.jsx("div",{className:"toggle-arrow absolute flex items-center jusity-center border",onClick:()=>t(!e),children:U.jsx($A,{name:"arrow",className:`${e?"rotate-90":"-rotate-90"}`})})]}),U.jsx("div",{className:"p-24 flex-1  height-100 overflow-auto scrollbar-none shrink-0",children:U.jsxs(Ce,{column:!0,gap:16,w:"fit-content",style:{margin:"0 auto"},children:[U.jsx(he,{title:a.title,type:"h2"}),U.jsxs(Ce,{gap:12,className:"p-12 bg-gray radius-8",w:"100%",children:[a.img&&U.jsx(Xl,{url:a.img,width:"50%",className:"radius-8 shrink-0"}),a.desc&&U.jsx("div",{className:"fs-12 color-gray-3",children:a.desc})]}),a.detail&&U.jsx("img",{src:a.detail,width:"100%"}),((s=a.detailList)==null?void 0:s.length)>0&&U.jsx("div",{className:"flex column gap-12",children:(l=a.detailList)==null?void 0:l.map(c=>U.jsxs(Ce,{column:!0,gap:8,children:[U.jsx(he,{title:c.desc,type:"p"}),U.jsx(Xl,{url:c.img,className:"width-100 radius-8"})]}))})]})})]})};/*!
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
***************************************************************************** */var ku=function(A,e){return ku=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},ku(A,e)};function lt(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ku(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Iu=function(){return Iu=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Iu.apply(this,arguments)};function ae(A,e,t,r){function n(o){return o instanceof t?o:new t(function(i){i(o)})}return new(t||(t=Promise))(function(o,i){function a(c){try{l(r.next(c))}catch(u){i(u)}}function s(c){try{l(r.throw(c))}catch(u){i(u)}}function l(c){c.done?o(c.value):n(c.value).then(a,s)}l((r=r.apply(A,e||[])).next())})}function te(A,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(c){return s([l,c])}}function s(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(c){l=[6,c],n=0}finally{r=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ni(A,e,t){if(t||arguments.length===2)for(var r=0,n=e.length,o;r<n;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return A.concat(o||e)}var Tt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),rl=function(A,e){return Tt.fromClientRect(A,e.getBoundingClientRect())},Y5=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new Tt(0,0,r,n)},nl=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},IA=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},L2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J5=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ri=0;Ri<L2.length;Ri++)J5[L2.charCodeAt(Ri)]=Ri;var S2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",po=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Oi=0;Oi<S2.length;Oi++)po[S2.charCodeAt(Oi)]=Oi;var Z5=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=po[A.charCodeAt(r)],i=po[A.charCodeAt(r+1)],a=po[A.charCodeAt(r+2)],s=po[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},q5=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},AQ=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},Mr=5,i1=11,ec=2,eQ=i1-Mr,qB=65536>>Mr,tQ=1<<Mr,tc=tQ-1,rQ=1024>>Mr,nQ=qB+rQ,oQ=nQ,iQ=32,aQ=oQ+iQ,sQ=65536>>i1,lQ=1<<eQ,cQ=lQ-1,M2=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},uQ=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},dQ=function(A,e){var t=Z5(A),r=Array.isArray(t)?AQ(t):new Uint32Array(t),n=Array.isArray(t)?q5(t):new Uint16Array(t),o=24,i=M2(n,o/2,r[4]/2),a=r[5]===2?M2(n,(o+r[4])/2):uQ(r,Math.ceil((o+r[4])/4));return new fQ(r[0],r[1],r[2],r[3],i,a)},fQ=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Mr],t=(t<<ec)+(e&tc),this.data[t];if(e<=65535)return t=this.index[qB+(e-55296>>Mr)],t=(t<<ec)+(e&tc),this.data[t];if(e<this.highStart)return t=aQ-sQ+(e>>i1),t=this.index[t],t+=e>>Mr&cQ,t=this.index[t],t=(t<<ec)+(e&tc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),_2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gQ=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vi=0;Vi<_2.length;Vi++)gQ[_2.charCodeAt(Vi)]=Vi;var pQ="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",D2=50,hQ=1,A4=2,e4=3,BQ=4,vQ=5,K2=7,t4=8,T2=9,qt=10,Lu=11,N2=12,Su=13,wQ=14,ho=15,Mu=16,Pi=17,ro=18,mQ=19,R2=20,_u=21,no=22,rc=23,zr=24,ye=25,Bo=26,vo=27,Wr=28,CQ=29,Cr=30,QQ=31,Gi=32,ji=33,Du=34,Ku=35,Tu=36,oi=37,Nu=38,La=39,Sa=40,nc=41,r4=42,yQ=43,FQ=[9001,65288],n4="!",q="×",zi="÷",Ru=dQ(pQ),Qt=[Cr,Tu],Ou=[hQ,A4,e4,vQ],o4=[qt,t4],O2=[vo,Bo],UQ=Ou.concat(o4),V2=[Nu,La,Sa,Du,Ku],xQ=[ho,Su],EQ=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(o,i){var a=Ru.get(o);if(a>D2?(n.push(!0),a-=D2):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(o)!==-1)return r.push(i),t.push(Mu);if(a===BQ||a===Lu){if(i===0)return r.push(i),t.push(Cr);var s=t[i-1];return UQ.indexOf(s)===-1?(r.push(r[i-1]),t.push(s)):(r.push(i),t.push(Cr))}if(r.push(i),a===QQ)return t.push(e==="strict"?_u:oi);if(a===r4||a===CQ)return t.push(Cr);if(a===yQ)return o>=131072&&o<=196605||o>=196608&&o<=262141?t.push(oi):t.push(Cr);t.push(a)}),[r,t,n]},oc=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var o=t;o<=r.length;){o++;var i=r[o];if(i===e)return!0;if(i!==qt)break}if(n===qt)for(var o=t;o>0;){o--;var a=r[o];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var s=t;s<=r.length;){s++;var i=r[s];if(i===e)return!0;if(i!==qt)break}if(a!==qt)break}return!1},P2=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===qt)t--;else return r}return 0},bQ=function(A,e,t,r,n){if(t[r]===0)return q;var o=r-1;if(Array.isArray(n)&&n[o]===!0)return q;var i=o-1,a=o+1,s=e[o],l=i>=0?e[i]:0,c=e[a];if(s===A4&&c===e4)return q;if(Ou.indexOf(s)!==-1)return n4;if(Ou.indexOf(c)!==-1||o4.indexOf(c)!==-1)return q;if(P2(o,e)===t4)return zi;if(Ru.get(A[o])===Lu||(s===Gi||s===ji)&&Ru.get(A[a])===Lu||s===K2||c===K2||s===T2||[qt,Su,ho].indexOf(s)===-1&&c===T2||[Pi,ro,mQ,zr,Wr].indexOf(c)!==-1||P2(o,e)===no||oc(rc,no,o,e)||oc([Pi,ro],_u,o,e)||oc(N2,N2,o,e))return q;if(s===qt)return zi;if(s===rc||c===rc)return q;if(c===Mu||s===Mu)return zi;if([Su,ho,_u].indexOf(c)!==-1||s===wQ||l===Tu&&xQ.indexOf(s)!==-1||s===Wr&&c===Tu||c===R2||Qt.indexOf(c)!==-1&&s===ye||Qt.indexOf(s)!==-1&&c===ye||s===vo&&[oi,Gi,ji].indexOf(c)!==-1||[oi,Gi,ji].indexOf(s)!==-1&&c===Bo||Qt.indexOf(s)!==-1&&O2.indexOf(c)!==-1||O2.indexOf(s)!==-1&&Qt.indexOf(c)!==-1||[vo,Bo].indexOf(s)!==-1&&(c===ye||[no,ho].indexOf(c)!==-1&&e[a+1]===ye)||[no,ho].indexOf(s)!==-1&&c===ye||s===ye&&[ye,Wr,zr].indexOf(c)!==-1)return q;if([ye,Wr,zr,Pi,ro].indexOf(c)!==-1)for(var u=o;u>=0;){var f=e[u];if(f===ye)return q;if([Wr,zr].indexOf(f)!==-1)u--;else break}if([vo,Bo].indexOf(c)!==-1)for(var u=[Pi,ro].indexOf(s)!==-1?i:o;u>=0;){var f=e[u];if(f===ye)return q;if([Wr,zr].indexOf(f)!==-1)u--;else break}if(Nu===s&&[Nu,La,Du,Ku].indexOf(c)!==-1||[La,Du].indexOf(s)!==-1&&[La,Sa].indexOf(c)!==-1||[Sa,Ku].indexOf(s)!==-1&&c===Sa||V2.indexOf(s)!==-1&&[R2,Bo].indexOf(c)!==-1||V2.indexOf(c)!==-1&&s===vo||Qt.indexOf(s)!==-1&&Qt.indexOf(c)!==-1||s===zr&&Qt.indexOf(c)!==-1||Qt.concat(ye).indexOf(s)!==-1&&c===no&&FQ.indexOf(A[a])===-1||Qt.concat(ye).indexOf(c)!==-1&&s===ro)return q;if(s===nc&&c===nc){for(var p=t[o],B=1;p>0&&(p--,e[p]===nc);)B++;if(B%2!==0)return q}return s===Gi&&c===ji?q:zi},HQ=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=EQ(A,e.lineBreak),r=t[0],n=t[1],o=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[ye,Cr,r4].indexOf(a)!==-1?oi:a}));var i=e.wordBreak==="keep-all"?o.map(function(a,s){return a&&A[s]>=19968&&A[s]<=40959}):void 0;return[r,n,i]},kQ=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===n4,this.start=r,this.end=n}return A.prototype.slice=function(){return IA.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),IQ=function(A,e){var t=nl(A),r=HQ(t,e),n=r[0],o=r[1],i=r[2],a=t.length,s=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var c=q;l<a&&(c=bQ(t,o,n,++l,i))===q;);if(c!==q||l===a){var u=new kQ(t,c,s,l);return s=l,{value:u,done:!1}}return{done:!0,value:null}}}},LQ=1,SQ=2,pi=4,G2=8,ps=10,j2=47,_o=92,MQ=9,_Q=32,Wi=34,oo=61,DQ=35,KQ=36,TQ=37,$i=39,Xi=40,io=41,NQ=95,fe=45,RQ=33,OQ=60,VQ=62,PQ=64,GQ=91,jQ=93,zQ=61,WQ=123,Yi=63,$Q=125,z2=124,XQ=126,YQ=128,W2=65533,ic=42,Er=43,JQ=44,ZQ=58,qQ=59,ii=46,A6=0,e6=8,t6=11,r6=14,n6=31,o6=127,dt=-1,i4=48,a4=97,s4=101,i6=102,a6=117,s6=122,l4=65,c4=69,u4=70,l6=85,c6=90,re=function(A){return A>=i4&&A<=57},u6=function(A){return A>=55296&&A<=57343},$r=function(A){return re(A)||A>=l4&&A<=u4||A>=a4&&A<=i6},d6=function(A){return A>=a4&&A<=s6},f6=function(A){return A>=l4&&A<=c6},g6=function(A){return d6(A)||f6(A)},p6=function(A){return A>=YQ},Ji=function(A){return A===ps||A===MQ||A===_Q},hs=function(A){return g6(A)||p6(A)||A===NQ},$2=function(A){return hs(A)||re(A)||A===fe},h6=function(A){return A>=A6&&A<=e6||A===t6||A>=r6&&A<=n6||A===o6},$t=function(A,e){return A!==_o?!1:e!==ps},Zi=function(A,e,t){return A===fe?hs(e)||$t(e,t):hs(A)?!0:!!(A===_o&&$t(A,e))},ac=function(A,e,t){return A===Er||A===fe?re(e)?!0:e===ii&&re(t):re(A===ii?e:A)},B6=function(A){var e=0,t=1;(A[e]===Er||A[e]===fe)&&(A[e]===fe&&(t=-1),e++);for(var r=[];re(A[e]);)r.push(A[e++]);var n=r.length?parseInt(IA.apply(void 0,r),10):0;A[e]===ii&&e++;for(var o=[];re(A[e]);)o.push(A[e++]);var i=o.length,a=i?parseInt(IA.apply(void 0,o),10):0;(A[e]===c4||A[e]===s4)&&e++;var s=1;(A[e]===Er||A[e]===fe)&&(A[e]===fe&&(s=-1),e++);for(var l=[];re(A[e]);)l.push(A[e++]);var c=l.length?parseInt(IA.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-i))*Math.pow(10,s*c)},v6={type:2},w6={type:3},m6={type:4},C6={type:13},Q6={type:8},y6={type:21},F6={type:9},U6={type:10},x6={type:11},E6={type:12},b6={type:14},qi={type:23},H6={type:1},k6={type:25},I6={type:24},L6={type:26},S6={type:27},M6={type:28},_6={type:29},D6={type:31},Vu={type:32},d4=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(nl(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==Vu;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Wi:return this.consumeStringToken(Wi);case DQ:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if($2(t)||$t(r,n)){var o=Zi(t,r,n)?SQ:LQ,i=this.consumeName();return{type:5,value:i,flags:o}}break;case KQ:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),C6;break;case $i:return this.consumeStringToken($i);case Xi:return v6;case io:return w6;case ic:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),b6;break;case Er:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case JQ:return m6;case fe:var a=e,s=this.peekCodePoint(0),l=this.peekCodePoint(1);if(ac(a,s,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(Zi(a,s,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(s===fe&&l===VQ)return this.consumeCodePoint(),this.consumeCodePoint(),I6;break;case ii:if(ac(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case j2:if(this.peekCodePoint(0)===ic)for(this.consumeCodePoint();;){var c=this.consumeCodePoint();if(c===ic&&(c=this.consumeCodePoint(),c===j2))return this.consumeToken();if(c===dt)return this.consumeToken()}break;case ZQ:return L6;case qQ:return S6;case OQ:if(this.peekCodePoint(0)===RQ&&this.peekCodePoint(1)===fe&&this.peekCodePoint(2)===fe)return this.consumeCodePoint(),this.consumeCodePoint(),k6;break;case PQ:var u=this.peekCodePoint(0),f=this.peekCodePoint(1),p=this.peekCodePoint(2);if(Zi(u,f,p)){var i=this.consumeName();return{type:7,value:i}}break;case GQ:return M6;case _o:if($t(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case jQ:return _6;case zQ:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),Q6;break;case WQ:return x6;case $Q:return E6;case a6:case l6:var B=this.peekCodePoint(0),w=this.peekCodePoint(1);return B===Er&&($r(w)||w===Yi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case z2:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),F6;if(this.peekCodePoint(0)===z2)return this.consumeCodePoint(),y6;break;case XQ:if(this.peekCodePoint(0)===oo)return this.consumeCodePoint(),U6;break;case dt:return Vu}return Ji(e)?(this.consumeWhiteSpace(),D6):re(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):hs(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:IA(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();$r(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Yi&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(IA.apply(void 0,e.map(function(s){return s===Yi?i4:s})),16),o=parseInt(IA.apply(void 0,e.map(function(s){return s===Yi?u4:s})),16);return{type:30,start:n,end:o}}var i=parseInt(IA.apply(void 0,e),16);if(this.peekCodePoint(0)===fe&&$r(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];$r(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var o=parseInt(IA.apply(void 0,a),16);return{type:30,start:i,end:o}}else return{type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Xi?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Xi?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===dt)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===$i||t===Wi){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===dt||this.peekCodePoint(0)===io)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),qi)}for(;;){var n=this.consumeCodePoint();if(n===dt||n===io)return{type:22,value:IA.apply(void 0,e)};if(Ji(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===dt||this.peekCodePoint(0)===io?(this.consumeCodePoint(),{type:22,value:IA.apply(void 0,e)}):(this.consumeBadUrlRemnants(),qi);if(n===Wi||n===$i||n===Xi||h6(n))return this.consumeBadUrlRemnants(),qi;if(n===_o)if($t(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),qi;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Ji(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===io||e===dt)return;$t(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=IA.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===dt||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===ps)return this._value.splice(0,r),H6;if(n===_o){var o=this._value[r+1];o!==dt&&o!==void 0&&(o===ps?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):$t(n,o)&&(t+=this.consumeStringSlice(r),t+=IA(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=pi,r=this.peekCodePoint(0);for((r===Er||r===fe)&&e.push(this.consumeCodePoint());re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===ii&&re(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=G2;re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var o=this.peekCodePoint(2);if((r===c4||r===s4)&&((n===Er||n===fe)&&re(o)||re(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=G2;re(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[B6(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),o=this.peekCodePoint(1),i=this.peekCodePoint(2);if(Zi(n,o,i)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===TQ?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if($r(e)){for(var t=IA(e);$r(this.peekCodePoint(0))&&t.length<6;)t+=IA(this.consumeCodePoint());Ji(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||u6(r)||r>1114111?W2:r}return e===dt?W2:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if($2(t))e+=IA(t);else if($t(t,this.peekCodePoint(0)))e+=IA(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),f4=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new d4;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||T6(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?Vu:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),hi=function(A){return A.type===15},Wn=function(A){return A.type===17},cA=function(A){return A.type===20},K6=function(A){return A.type===0},Pu=function(A,e){return cA(A)&&A.value===e},g4=function(A){return A.type!==31},On=function(A){return A.type!==31&&A.type!==4},wt=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},T6=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},gr=function(A){return A.type===17||A.type===15},DA=function(A){return A.type===16||gr(A)},p4=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},JA={type:17,number:0,flags:pi},a1={type:16,number:50,flags:pi},Ar={type:16,number:100,flags:pi},wo=function(A,e,t){var r=A[0],n=A[1];return[dA(r,e),dA(typeof n<"u"?n:r,t)]},dA=function(A,e){if(A.type===16)return A.number/100*e;if(hi(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},h4="deg",B4="grad",v4="rad",w4="turn",ol={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case h4:return Math.PI*e.number/180;case B4:return Math.PI/200*e.number;case v4:return e.number;case w4:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},m4=function(A){return A.type===15&&(A.unit===h4||A.unit===B4||A.unit===v4||A.unit===w4)},C4=function(A){var e=A.filter(cA).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[JA,JA];case"to top":case"bottom":return Re(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[JA,Ar];case"to right":case"left":return Re(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Ar,Ar];case"to bottom":case"top":return Re(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Ar,JA];case"to left":case"right":return Re(270)}return 0},Re=function(A){return Math.PI*A/180},cr={name:"color",parse:function(A,e){if(e.type===18){var t=N6[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3);return er(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),o=e.value.substring(2,3),i=e.value.substring(3,4);return er(parseInt(r+r,16),parseInt(n+n,16),parseInt(o+o,16),parseInt(i+i,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6);return er(parseInt(r,16),parseInt(n,16),parseInt(o,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),o=e.value.substring(4,6),i=e.value.substring(6,8);return er(parseInt(r,16),parseInt(n,16),parseInt(o,16),parseInt(i,16)/255)}}if(e.type===20){var a=St[e.value.toUpperCase()];if(typeof a<"u")return a}return St.TRANSPARENT}},ur=function(A){return(255&A)===0},PA=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},er=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},X2=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},Y2=function(A,e){var t=e.filter(On);if(t.length===3){var r=t.map(X2),n=r[0],o=r[1],i=r[2];return er(n,o,i,1)}if(t.length===4){var a=t.map(X2),n=a[0],o=a[1],i=a[2],s=a[3];return er(n,o,i,s)}return 0};function sc(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var J2=function(A,e){var t=e.filter(On),r=t[0],n=t[1],o=t[2],i=t[3],a=(r.type===17?Re(r.number):ol.parse(A,r))/(Math.PI*2),s=DA(n)?n.number/100:0,l=DA(o)?o.number/100:0,c=typeof i<"u"&&DA(i)?dA(i,1):1;if(s===0)return er(l*255,l*255,l*255,1);var u=l<=.5?l*(s+1):l+s-l*s,f=l*2-u,p=sc(f,u,a+1/3),B=sc(f,u,a),w=sc(f,u,a-1/3);return er(p*255,B*255,w*255,c)},N6={hsl:J2,hsla:J2,rgb:Y2,rgba:Y2},Do=function(A,e){return cr.parse(A,f4.create(e).parseComponentValue())},St={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},R6={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},O6={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},il=function(A,e){var t=cr.parse(A,e[0]),r=e[1];return r&&DA(r)?{color:t,stop:r}:{color:t,stop:null}},Z2=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=JA),r.stop===null&&(r.stop=Ar);for(var n=[],o=0,i=0;i<A.length;i++){var a=A[i].stop;if(a!==null){var s=dA(a,e);s>o?n.push(s):n.push(o),o=s}else n.push(null)}for(var l=null,i=0;i<n.length;i++){var c=n[i];if(c===null)l===null&&(l=i);else if(l!==null){for(var u=i-l,f=n[l-1],p=(c-f)/(u+1),B=1;B<=u;B++)n[l+B-1]=p*B;l=null}}return A.map(function(w,x){var g=w.color;return{color:g,stop:Math.max(Math.min(1,n[x]/e),0)}})},V6=function(A,e,t){var r=e/2,n=t/2,o=dA(A[0],e)-r,i=n-dA(A[1],t);return(Math.atan2(i,o)+Math.PI*2)%(Math.PI*2)},P6=function(A,e,t){var r=typeof A=="number"?A:V6(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),o=e/2,i=t/2,a=n/2,s=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,o-l,o+l,i-s,i+s]},Ye=function(A,e){return Math.sqrt(A*A+e*e)},q2=function(A,e,t,r,n){var o=[[0,0],[0,e],[A,0],[A,e]];return o.reduce(function(i,a){var s=a[0],l=a[1],c=Ye(t-s,r-l);return(n?c<i.optimumDistance:c>i.optimumDistance)?{optimumCorner:a,optimumDistance:c}:i},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},G6=function(A,e,t,r,n){var o=0,i=0;switch(A.size){case 0:A.shape===0?o=i=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.min(Math.abs(e),Math.abs(e-r)),i=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)o=i=Math.min(Ye(e,t),Ye(e,t-n),Ye(e-r,t),Ye(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),s=q2(r,n,e,t,!0),l=s[0],c=s[1];o=Ye(l-e,(c-t)/a),i=a*o}break;case 1:A.shape===0?o=i=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(o=Math.max(Math.abs(e),Math.abs(e-r)),i=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)o=i=Math.max(Ye(e,t),Ye(e,t-n),Ye(e-r,t),Ye(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),u=q2(r,n,e,t,!1),l=u[0],c=u[1];o=Ye(l-e,(c-t)/a),i=a*o}break}return Array.isArray(A.size)&&(o=dA(A.size[0],r),i=A.size.length===2?dA(A.size[1],n):o),[o,i]},j6=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&i.value==="to"){t=C4(n);return}else if(m4(i)){t=ol.parse(A,i);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Aa=function(A,e){var t=Re(180),r=[];return wt(e).forEach(function(n,o){if(o===0){var i=n[0];if(i.type===20&&["top","left","right","bottom"].indexOf(i.value)!==-1){t=C4(n);return}else if(m4(i)){t=(ol.parse(A,i)+Re(270))%Re(360);return}}var a=il(A,n);r.push(a)}),{angle:t,stops:r,type:1}},z6=function(A,e){var t=Re(180),r=[],n=1,o=0,i=3,a=[];return wt(e).forEach(function(s,l){var c=s[0];if(l===0){if(cA(c)&&c.value==="linear"){n=1;return}else if(cA(c)&&c.value==="radial"){n=2;return}}if(c.type===18){if(c.name==="from"){var u=cr.parse(A,c.values[0]);r.push({stop:JA,color:u})}else if(c.name==="to"){var u=cr.parse(A,c.values[0]);r.push({stop:Ar,color:u})}else if(c.name==="color-stop"){var f=c.values.filter(On);if(f.length===2){var u=cr.parse(A,f[1]),p=f[0];Wn(p)&&r.push({stop:{type:16,number:p.number*100,flags:p.flags},color:u})}}}}),n===1?{angle:(t+Re(180))%Re(360),stops:r,type:n}:{size:i,shape:o,stops:r,position:a,type:n}},Q4="closest-side",y4="farthest-side",F4="closest-corner",U4="farthest-corner",x4="circle",E4="ellipse",b4="cover",H4="contain",W6=function(A,e){var t=0,r=3,n=[],o=[];return wt(e).forEach(function(i,a){var s=!0;if(a===0){var l=!1;s=i.reduce(function(u,f){if(l)if(cA(f))switch(f.value){case"center":return o.push(a1),u;case"top":case"left":return o.push(JA),u;case"right":case"bottom":return o.push(Ar),u}else(DA(f)||gr(f))&&o.push(f);else if(cA(f))switch(f.value){case x4:return t=0,!1;case E4:return t=1,!1;case"at":return l=!0,!1;case Q4:return r=0,!1;case b4:case y4:return r=1,!1;case H4:case F4:return r=2,!1;case U4:return r=3,!1}else if(gr(f)||DA(f))return Array.isArray(r)||(r=[]),r.push(f),!1;return u},s)}if(s){var c=il(A,i);n.push(c)}}),{size:r,shape:t,stops:n,position:o,type:2}},ea=function(A,e){var t=0,r=3,n=[],o=[];return wt(e).forEach(function(i,a){var s=!0;if(a===0?s=i.reduce(function(c,u){if(cA(u))switch(u.value){case"center":return o.push(a1),!1;case"top":case"left":return o.push(JA),!1;case"right":case"bottom":return o.push(Ar),!1}else if(DA(u)||gr(u))return o.push(u),!1;return c},s):a===1&&(s=i.reduce(function(c,u){if(cA(u))switch(u.value){case x4:return t=0,!1;case E4:return t=1,!1;case H4:case Q4:return r=0,!1;case y4:return r=1,!1;case F4:return r=2,!1;case b4:case U4:return r=3,!1}else if(gr(u)||DA(u))return Array.isArray(r)||(r=[]),r.push(u),!1;return c},s)),s){var l=il(A,i);n.push(l)}}),{size:r,shape:t,stops:n,position:o,type:2}},$6=function(A){return A.type===1},X6=function(A){return A.type===2},s1={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=k4[e.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function Y6(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!k4[A.name])}var k4={"linear-gradient":j6,"-moz-linear-gradient":Aa,"-ms-linear-gradient":Aa,"-o-linear-gradient":Aa,"-webkit-linear-gradient":Aa,"radial-gradient":W6,"-moz-radial-gradient":ea,"-ms-radial-gradient":ea,"-o-radial-gradient":ea,"-webkit-radial-gradient":ea,"-webkit-gradient":z6},J6={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return On(r)&&Y6(r)}).map(function(r){return s1.parse(A,r)})}},Z6={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(cA(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},q6={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return wt(e).map(function(t){return t.filter(DA)}).map(p4)}},Ay={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(cA).map(function(r){return r.value}).join(" ")}).map(ey)}},ey=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Qn;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(Qn||(Qn={}));var ty={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return wt(e).map(function(t){return t.filter(ry)})}},ry=function(A){return cA(A)||DA(A)},al=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},ny=al("top"),oy=al("right"),iy=al("bottom"),ay=al("left"),sl=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return p4(t.filter(DA))}}},sy=sl("top-left"),ly=sl("top-right"),cy=sl("bottom-right"),uy=sl("bottom-left"),ll=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},dy=ll("top"),fy=ll("right"),gy=ll("bottom"),py=ll("left"),cl=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return hi(t)?t.number:0}}},hy=cl("top"),By=cl("right"),vy=cl("bottom"),wy=cl("left"),my={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Cy={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},Qy={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).reduce(function(t,r){return t|yy(r.value)},0)}},yy=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Fy={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Uy={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Bs;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Bs||(Bs={}));var xy={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Bs.STRICT;case"normal":default:return Bs.NORMAL}}},Ey={name:"line-height",initialValue:"normal",prefix:!1,type:4},Ag=function(A,e){return cA(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:DA(A)?dA(A,e):e},by={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:s1.parse(A,e)}},Hy={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},Gu={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ul=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},ky=ul("top"),Iy=ul("right"),Ly=ul("bottom"),Sy=ul("left"),My={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},_y={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},dl=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Dy=dl("top"),Ky=dl("right"),Ty=dl("bottom"),Ny=dl("left"),Ry={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Oy={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Vy={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Pu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:St.TRANSPARENT,offsetX:JA,offsetY:JA,blur:JA},n=0,o=0;o<t.length;o++){var i=t[o];gr(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:r.blur=i,n++):r.color=cr.parse(A,i)}return r})}},Py={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Gy={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=Wy[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},jy=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},zy=function(A){var e=A.filter(function(s){return s.type===17}).map(function(s){return s.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],o=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var i=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,o,i,a]:null},Wy={matrix:jy,matrix3d:zy},eg={type:16,number:50,flags:pi},$y=[eg,eg],Xy={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(DA);return t.length!==2?$y:[t[0],t[1]]}},Yy={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Ko;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Ko||(Ko={}));var Jy={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return Ko.BREAK_ALL;case"keep-all":return Ko.KEEP_ALL;case"normal":default:return Ko.NORMAL}}},Zy={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(Wn(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},I4={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},qy={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return Wn(e)?e.number:1}},AF={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},eF={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(cA).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},tF={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},rF={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},nF={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(Wn(e))return e.number;if(cA(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},oF={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(cA).map(function(t){return t.value})}},iF={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},NA=function(A,e){return(A&e)!==0},aF={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},sF={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(g4),o=0;o<n.length;o++){var i=n[o],a=n[o+1];if(i.type===20){var s=a&&Wn(a)?a.number:1;r.push({counter:i.value,increment:s})}}return r}},lF={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(g4),n=0;n<r.length;n++){var o=r[n],i=r[n+1];if(cA(o)&&o.value!=="none"){var a=i&&Wn(i)?i.number:0;t.push({counter:o.value,reset:a})}}return t}},cF={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(hi).map(function(t){return I4.parse(A,t)})}},uF={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(K6);if(n.length%2!==0)return null;for(var o=0;o<n.length;o+=2){var i=n[o].value,a=n[o+1].value;r.push({open:i,close:a})}return r}},tg=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},dF={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&Pu(e[0],"none")?[]:wt(e).map(function(t){for(var r={color:255,offsetX:JA,offsetY:JA,blur:JA,spread:JA,inset:!1},n=0,o=0;o<t.length;o++){var i=t[o];Pu(i,"inset")?r.inset=!0:gr(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:n===2?r.blur=i:r.spread=i,n++):r.color=cr.parse(A,i)}return r})}},fF={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(cA).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},gF={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},pF={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return hi(e)?e.number:0}},hF=function(){function A(e,t){var r,n;this.animationDuration=N(e,cF,t.animationDuration),this.backgroundClip=N(e,R6,t.backgroundClip),this.backgroundColor=N(e,O6,t.backgroundColor),this.backgroundImage=N(e,J6,t.backgroundImage),this.backgroundOrigin=N(e,Z6,t.backgroundOrigin),this.backgroundPosition=N(e,q6,t.backgroundPosition),this.backgroundRepeat=N(e,Ay,t.backgroundRepeat),this.backgroundSize=N(e,ty,t.backgroundSize),this.borderTopColor=N(e,ny,t.borderTopColor),this.borderRightColor=N(e,oy,t.borderRightColor),this.borderBottomColor=N(e,iy,t.borderBottomColor),this.borderLeftColor=N(e,ay,t.borderLeftColor),this.borderTopLeftRadius=N(e,sy,t.borderTopLeftRadius),this.borderTopRightRadius=N(e,ly,t.borderTopRightRadius),this.borderBottomRightRadius=N(e,cy,t.borderBottomRightRadius),this.borderBottomLeftRadius=N(e,uy,t.borderBottomLeftRadius),this.borderTopStyle=N(e,dy,t.borderTopStyle),this.borderRightStyle=N(e,fy,t.borderRightStyle),this.borderBottomStyle=N(e,gy,t.borderBottomStyle),this.borderLeftStyle=N(e,py,t.borderLeftStyle),this.borderTopWidth=N(e,hy,t.borderTopWidth),this.borderRightWidth=N(e,By,t.borderRightWidth),this.borderBottomWidth=N(e,vy,t.borderBottomWidth),this.borderLeftWidth=N(e,wy,t.borderLeftWidth),this.boxShadow=N(e,dF,t.boxShadow),this.color=N(e,my,t.color),this.direction=N(e,Cy,t.direction),this.display=N(e,Qy,t.display),this.float=N(e,Fy,t.cssFloat),this.fontFamily=N(e,tF,t.fontFamily),this.fontSize=N(e,rF,t.fontSize),this.fontStyle=N(e,iF,t.fontStyle),this.fontVariant=N(e,oF,t.fontVariant),this.fontWeight=N(e,nF,t.fontWeight),this.letterSpacing=N(e,Uy,t.letterSpacing),this.lineBreak=N(e,xy,t.lineBreak),this.lineHeight=N(e,Ey,t.lineHeight),this.listStyleImage=N(e,by,t.listStyleImage),this.listStylePosition=N(e,Hy,t.listStylePosition),this.listStyleType=N(e,Gu,t.listStyleType),this.marginTop=N(e,ky,t.marginTop),this.marginRight=N(e,Iy,t.marginRight),this.marginBottom=N(e,Ly,t.marginBottom),this.marginLeft=N(e,Sy,t.marginLeft),this.opacity=N(e,qy,t.opacity);var o=N(e,My,t.overflow);this.overflowX=o[0],this.overflowY=o[o.length>1?1:0],this.overflowWrap=N(e,_y,t.overflowWrap),this.paddingTop=N(e,Dy,t.paddingTop),this.paddingRight=N(e,Ky,t.paddingRight),this.paddingBottom=N(e,Ty,t.paddingBottom),this.paddingLeft=N(e,Ny,t.paddingLeft),this.paintOrder=N(e,fF,t.paintOrder),this.position=N(e,Oy,t.position),this.textAlign=N(e,Ry,t.textAlign),this.textDecorationColor=N(e,AF,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=N(e,eF,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=N(e,Vy,t.textShadow),this.textTransform=N(e,Py,t.textTransform),this.transform=N(e,Gy,t.transform),this.transformOrigin=N(e,Xy,t.transformOrigin),this.visibility=N(e,Yy,t.visibility),this.webkitTextStrokeColor=N(e,gF,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=N(e,pF,t.webkitTextStrokeWidth),this.wordBreak=N(e,Jy,t.wordBreak),this.zIndex=N(e,Zy,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return ur(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return NA(this.display,4)||NA(this.display,33554432)||NA(this.display,268435456)||NA(this.display,536870912)||NA(this.display,67108864)||NA(this.display,134217728)},A}(),BF=function(){function A(e,t){this.content=N(e,aF,t.content),this.quotes=N(e,uF,t.quotes)}return A}(),rg=function(){function A(e,t){this.counterIncrement=N(e,sF,t.counterIncrement),this.counterReset=N(e,lF,t.counterReset)}return A}(),N=function(A,e,t){var r=new d4,n=t!==null&&typeof t<"u"?t.toString():e.initialValue;r.write(n);var o=new f4(r.read());switch(e.type){case 2:var i=o.parseComponentValue();return e.parse(A,cA(i)?i.value:e.initialValue);case 0:return e.parse(A,o.parseComponentValue());case 1:return e.parse(A,o.parseComponentValues());case 4:return o.parseComponentValue();case 3:switch(e.format){case"angle":return ol.parse(A,o.parseComponentValue());case"color":return cr.parse(A,o.parseComponentValue());case"image":return s1.parse(A,o.parseComponentValue());case"length":var a=o.parseComponentValue();return gr(a)?a:JA;case"length-percentage":var s=o.parseComponentValue();return DA(s)?s:JA;case"time":return I4.parse(A,o.parseComponentValue())}break}},vF="data-html2canvas-debug",wF=function(A){var e=A.getAttribute(vF);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},ju=function(A,e){var t=wF(A);return t===1||e===t},mt=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,ju(t,3))debugger;this.styles=new hF(e,window.getComputedStyle(t,null)),$u(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=rl(this.context,t),ju(t,4)&&(this.flags|=16)}return A}(),mF="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",ng="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",mo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ta=0;ta<ng.length;ta++)mo[ng.charCodeAt(ta)]=ta;var CF=function(A){var e=A.length*.75,t=A.length,r,n=0,o,i,a,s;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),c=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)o=mo[A.charCodeAt(r)],i=mo[A.charCodeAt(r+1)],a=mo[A.charCodeAt(r+2)],s=mo[A.charCodeAt(r+3)],c[n++]=o<<2|i>>4,c[n++]=(i&15)<<4|a>>2,c[n++]=(a&3)<<6|s&63;return l},QF=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},yF=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},_r=5,l1=11,lc=2,FF=l1-_r,L4=65536>>_r,UF=1<<_r,cc=UF-1,xF=1024>>_r,EF=L4+xF,bF=EF,HF=32,kF=bF+HF,IF=65536>>l1,LF=1<<FF,SF=LF-1,og=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},MF=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},_F=function(A,e){var t=CF(A),r=Array.isArray(t)?yF(t):new Uint32Array(t),n=Array.isArray(t)?QF(t):new Uint16Array(t),o=24,i=og(n,o/2,r[4]/2),a=r[5]===2?og(n,(o+r[4])/2):MF(r,Math.ceil((o+r[4])/4));return new DF(r[0],r[1],r[2],r[3],i,a)},DF=function(){function A(e,t,r,n,o,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=o,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>_r],t=(t<<lc)+(e&cc),this.data[t];if(e<=65535)return t=this.index[L4+(e-55296>>_r)],t=(t<<lc)+(e&cc),this.data[t];if(e<this.highStart)return t=kF-IF+(e>>l1),t=this.index[t],t+=e>>_r&SF,t=this.index[t],t=(t<<lc)+(e&cc),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),ig="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",KF=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ra=0;ra<ig.length;ra++)KF[ig.charCodeAt(ra)]=ra;var TF=1,uc=2,dc=3,ag=4,sg=5,NF=7,lg=8,fc=9,gc=10,cg=11,ug=12,dg=13,fg=14,pc=15,RF=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var o=A.charCodeAt(t++);(o&64512)===56320?e.push(((n&1023)<<10)+(o&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},OF=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,o="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(o+=String.fromCharCode.apply(String,r),r.length=0)}return o},VF=_F(mF),_e="×",hc="÷",PF=function(A){return VF.get(A)},GF=function(A,e,t){var r=t-2,n=e[r],o=e[t-1],i=e[t];if(o===uc&&i===dc)return _e;if(o===uc||o===dc||o===ag||i===uc||i===dc||i===ag)return hc;if(o===lg&&[lg,fc,cg,ug].indexOf(i)!==-1||(o===cg||o===fc)&&(i===fc||i===gc)||(o===ug||o===gc)&&i===gc||i===dg||i===sg||i===NF||o===TF)return _e;if(o===dg&&i===fg){for(;n===sg;)n=e[--r];if(n===fg)return _e}if(o===pc&&i===pc){for(var a=0;n===pc;)a++,n=e[--r];if(a%2===0)return _e}return hc},jF=function(A){var e=RF(A),t=e.length,r=0,n=0,o=e.map(PF);return{next:function(){if(r>=t)return{done:!0,value:null};for(var i=_e;r<t&&(i=GF(e,o,++r))===_e;);if(i!==_e||r===t){var a=OF.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},zF=function(A){for(var e=jF(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},WF=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),o=Math.round(n.height);if(A.body.removeChild(r),o===e)return!0}}return!1},$F=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=nl(r.data).map(function(s){return IA(s)}),o=0,i={},a=n.every(function(s,l){t.setStart(r,o),t.setEnd(r,o+s.length);var c=t.getBoundingClientRect();o+=s.length;var u=c.x>i.x||c.y>i.y;return i=c,l===0?!0:u});return A.body.removeChild(e),a},XF=function(){return typeof new Image().crossOrigin<"u"},YF=function(){return typeof new XMLHttpRequest().responseType=="string"},JF=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},gg=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},ZF=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,o=e.toDataURL();n.src=o;var i=zu(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),pg(i).then(function(a){r.drawImage(a,0,0);var s=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+o+")",l.style.height=t+"px",gg(s)?pg(zu(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),gg(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},zu=function(A,e,t,r,n){var o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"svg"),a=document.createElementNS(o,"foreignObject");return i.setAttributeNS(null,"width",A.toString()),i.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(a),a.appendChild(n),i},pg=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},YA={get SUPPORT_RANGE_BOUNDS(){var A=WF(document);return Object.defineProperty(YA,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=YA.SUPPORT_RANGE_BOUNDS&&$F(document);return Object.defineProperty(YA,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=JF(document);return Object.defineProperty(YA,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?ZF(document):Promise.resolve(!1);return Object.defineProperty(YA,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=XF();return Object.defineProperty(YA,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=YF();return Object.defineProperty(YA,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(YA,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(YA,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},To=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),qF=function(A,e,t,r){var n=t7(e,t),o=[],i=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(YA.SUPPORT_RANGE_BOUNDS){var s=hg(r,i,a.length).getClientRects();if(s.length>1){var l=c1(a),c=0;l.forEach(function(f){o.push(new To(f,Tt.fromDOMRectList(A,hg(r,c+i,f.length).getClientRects()))),c+=f.length})}else o.push(new To(a,Tt.fromDOMRectList(A,s)))}else{var u=r.splitText(a.length);o.push(new To(a,A7(A,r))),r=u}else YA.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));i+=a.length}),o},A7=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var o=rl(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),o}}return Tt.EMPTY},hg=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},c1=function(A){if(YA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return zF(A)},e7=function(A,e){if(YA.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return n7(A,e)},t7=function(A,e){return e.letterSpacing!==0?c1(A):e7(A,e)},r7=[32,160,4961,65792,65793,4153,4241],n7=function(A,e){for(var t=IQ(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,o=function(){if(n.value){var i=n.value.slice(),a=nl(i),s="";a.forEach(function(l){r7.indexOf(l)===-1?s+=IA(l):(s.length&&r.push(s),r.push(IA(l)),s="")}),s.length&&r.push(s)}};!(n=t.next()).done;)o();return r},o7=function(){function A(e,t,r){this.text=i7(t.data,r.textTransform),this.textBounds=qF(e,this.text,r,t)}return A}(),i7=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(a7,s7);case 2:return A.toUpperCase();default:return A}},a7=/(^|\s|:|-|\(|\))([a-z])/g,s7=function(A,e,t){return A.length>0?e+t.toUpperCase():A},S4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(mt),M4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(mt),_4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=new XMLSerializer,i=rl(t,r);return r.setAttribute("width",i.width+"px"),r.setAttribute("height",i.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(o.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(mt),D4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),Wu=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(mt),l7=[{type:15,flags:0,unit:"px",number:3}],c7=[{type:16,flags:0,number:50}],u7=function(A){return A.width>A.height?new Tt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Tt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},d7=function(A){var e=A.type===f7?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},vs="checkbox",ws="radio",f7="password",Bg=707406591,u1=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=d7(r),(n.type===vs||n.type===ws)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=u7(n.bounds)),n.type){case vs:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=l7;break;case ws:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=c7;break}return n}return e}(mt),K4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this,o=r.options[r.selectedIndex||0];return n.value=o&&o.text||"",n}return e}(mt),T4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(mt),N4=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=O4(t,r.contentWindow.document.documentElement);var o=r.contentWindow.document.documentElement?Do(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):St.TRANSPARENT,i=r.contentWindow.document.body?Do(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):St.TRANSPARENT;n.backgroundColor=ur(o)?ur(i)?n.styles.backgroundColor:i:o}}catch{}return n}return e}(mt),g7=["OL","UL","MENU"],Ma=function(A,e,t,r){for(var n=e.firstChild,o=void 0;n;n=o)if(o=n.nextSibling,V4(n)&&n.data.trim().length>0)t.textNodes.push(new o7(A,n,t.styles));else if(pn(n))if(z4(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return Ma(A,a,t,r)});else{var i=R4(A,n);i.styles.isVisible()&&(p7(n,i,r)?i.flags|=4:h7(i.styles)&&(i.flags|=2),g7.indexOf(n.tagName)!==-1&&(i.flags|=8),t.elements.push(i),n.slot,n.shadowRoot?Ma(A,n.shadowRoot,i,r):!ms(n)&&!P4(n)&&!Cs(n)&&Ma(A,n,i,r))}},R4=function(A,e){return Xu(e)?new S4(A,e):G4(e)?new M4(A,e):P4(e)?new _4(A,e):B7(e)?new D4(A,e):v7(e)?new Wu(A,e):w7(e)?new u1(A,e):Cs(e)?new K4(A,e):ms(e)?new T4(A,e):j4(e)?new N4(A,e):new mt(A,e)},O4=function(A,e){var t=R4(A,e);return t.flags|=4,Ma(A,e,t,t),t},p7=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||d1(A)&&t.styles.isTransparent()},h7=function(A){return A.isPositioned()||A.isFloating()},V4=function(A){return A.nodeType===Node.TEXT_NODE},pn=function(A){return A.nodeType===Node.ELEMENT_NODE},$u=function(A){return pn(A)&&typeof A.style<"u"&&!_a(A)},_a=function(A){return typeof A.className=="object"},B7=function(A){return A.tagName==="LI"},v7=function(A){return A.tagName==="OL"},w7=function(A){return A.tagName==="INPUT"},m7=function(A){return A.tagName==="HTML"},P4=function(A){return A.tagName==="svg"},d1=function(A){return A.tagName==="BODY"},G4=function(A){return A.tagName==="CANVAS"},vg=function(A){return A.tagName==="VIDEO"},Xu=function(A){return A.tagName==="IMG"},j4=function(A){return A.tagName==="IFRAME"},wg=function(A){return A.tagName==="STYLE"},C7=function(A){return A.tagName==="SCRIPT"},ms=function(A){return A.tagName==="TEXTAREA"},Cs=function(A){return A.tagName==="SELECT"},z4=function(A){return A.tagName==="SLOT"},mg=function(A){return A.tagName.indexOf("-")>0},Q7=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,o=!0;r!==null&&r.forEach(function(a){var s=t.counters[a.counter];s&&a.increment!==0&&(o=!1,s.length||s.push(1),s[Math.max(0,s.length-1)]+=a.increment)});var i=[];return o&&n.forEach(function(a){var s=t.counters[a.counter];i.push(a.counter),s||(s=t.counters[a.counter]=[]),s.push(a.reset)}),i},A}(),Cg={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Qg={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},y7={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},F7={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Xr=function(A,e,t,r,n,o){return A<e||A>t?ai(A,n,o.length>0):r.integers.reduce(function(i,a,s){for(;A>=a;)A-=a,i+=r.values[s];return i},"")+o},W4=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},kA=function(A,e,t,r,n){var o=t-e+1;return(A<0?"-":"")+(W4(Math.abs(A),o,r,function(i){return IA(Math.floor(i%o)+e)})+n)},vr=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return W4(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Zr=1,Gt=2,jt=4,Co=8,yt=function(A,e,t,r,n,o){if(A<-9999||A>9999)return ai(A,4,n.length>0);var i=Math.abs(A),a=n;if(i===0)return e[0]+a;for(var s=0;i>0&&s<=4;s++){var l=i%10;l===0&&NA(o,Zr)&&a!==""?a=e[l]+a:l>1||l===1&&s===0||l===1&&s===1&&NA(o,Gt)||l===1&&s===1&&NA(o,jt)&&A>100||l===1&&s>1&&NA(o,Co)?a=e[l]+(s>0?t[s-1]:"")+a:l===1&&s>0&&(a=t[s-1]+a),i=Math.floor(i/10)}return(A<0?r:"")+a},yg="十百千萬",Fg="拾佰仟萬",Ug="マイナス",Bc="마이너스",ai=function(A,e,t){var r=t?". ":"",n=t?"、":"",o=t?", ":"",i=t?" ":"";switch(e){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:var a=kA(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return vr(A,"〇一二三四五六七八九",n);case 6:return Xr(A,1,3999,Cg,3,r).toLowerCase();case 7:return Xr(A,1,3999,Cg,3,r);case 8:return kA(A,945,969,!1,r);case 9:return kA(A,97,122,!1,r);case 10:return kA(A,65,90,!1,r);case 11:return kA(A,1632,1641,!0,r);case 12:case 49:return Xr(A,1,9999,Qg,3,r);case 35:return Xr(A,1,9999,Qg,3,r).toLowerCase();case 13:return kA(A,2534,2543,!0,r);case 14:case 30:return kA(A,6112,6121,!0,r);case 15:return vr(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return vr(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return yt(A,"零一二三四五六七八九",yg,"負",n,Gt|jt|Co);case 47:return yt(A,"零壹貳參肆伍陸柒捌玖",Fg,"負",n,Zr|Gt|jt|Co);case 42:return yt(A,"零一二三四五六七八九",yg,"负",n,Gt|jt|Co);case 41:return yt(A,"零壹贰叁肆伍陆柒捌玖",Fg,"负",n,Zr|Gt|jt|Co);case 26:return yt(A,"〇一二三四五六七八九","十百千万",Ug,n,0);case 25:return yt(A,"零壱弐参四伍六七八九","拾百千万",Ug,n,Zr|Gt|jt);case 31:return yt(A,"영일이삼사오육칠팔구","십백천만",Bc,o,Zr|Gt|jt);case 33:return yt(A,"零一二三四五六七八九","十百千萬",Bc,o,0);case 32:return yt(A,"零壹貳參四五六七八九","拾百千",Bc,o,Zr|Gt|jt);case 18:return kA(A,2406,2415,!0,r);case 20:return Xr(A,1,19999,F7,3,r);case 21:return kA(A,2790,2799,!0,r);case 22:return kA(A,2662,2671,!0,r);case 22:return Xr(A,1,10999,y7,3,r);case 23:return vr(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return vr(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return kA(A,3302,3311,!0,r);case 28:return vr(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return vr(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return kA(A,3792,3801,!0,r);case 37:return kA(A,6160,6169,!0,r);case 38:return kA(A,4160,4169,!0,r);case 39:return kA(A,2918,2927,!0,r);case 40:return kA(A,1776,1785,!0,r);case 43:return kA(A,3046,3055,!0,r);case 44:return kA(A,3174,3183,!0,r);case 45:return kA(A,3664,3673,!0,r);case 46:return kA(A,3872,3881,!0,r);case 3:default:return kA(A,48,57,!0,r)}},$4="data-html2canvas-ignore",xg=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new Q7,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=U7(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var o=e.defaultView.pageXOffset,i=e.defaultView.pageYOffset,a=n.contentWindow,s=a.document,l=b7(n).then(function(){return ae(r,void 0,void 0,function(){var c,u;return te(this,function(f){switch(f.label){case 0:return this.scrolledElements.forEach(L7),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),c=this.options.onclone,u=this.clonedReferenceElement,typeof u>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:s.fonts&&s.fonts.ready?[4,s.fonts.ready]:[3,2];case 1:f.sent(),f.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,E7(s)]:[3,4];case 3:f.sent(),f.label=4;case 4:return typeof c=="function"?[2,Promise.resolve().then(function(){return c(s,u)}).then(function(){return n})]:[2,n]}})})});return s.open(),s.write(k7(document.doctype)+"<html></html>"),I7(this.referenceElement.ownerDocument,o,i),s.replaceChild(s.adoptNode(this.documentElement),s.documentElement),s.close(),l},A.prototype.createElementClone=function(e){if(ju(e,2))debugger;if(G4(e))return this.createCanvasClone(e);if(vg(e))return this.createVideoClone(e);if(wg(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return Xu(t)&&(Xu(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),mg(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return vc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(o,i){return i&&typeof i.cssText=="string"?o+i.cssText:o},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(o){if(this.context.logger.error("Unable to access cssRules property",o),o.name!=="SecurityError")throw o}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var o=e.getContext("2d"),i=n.getContext("2d");if(i)if(!this.options.allowTaint&&o)i.putImageData(o.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var s=a.getContextAttributes();(s==null?void 0:s.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}i.drawImage(e,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!pn(t)||!C7(t)&&!t.hasAttribute($4)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!pn(t)||!wg(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,o=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;o;o=o.nextSibling)if(pn(o)&&z4(o)&&typeof o.assignedNodes=="function"){var i=o.assignedNodes();i.length&&i.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,o,r)},A.prototype.cloneNode=function(e,t){if(V4(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&pn(e)&&($u(e)||_a(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var o=r.getComputedStyle(e),i=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&$u(n)&&(this.clonedReferenceElement=n),d1(n)&&_7(n);var s=this.counters.parse(new rg(this.context,o)),l=this.resolvePseudoContent(e,n,i,No.BEFORE);mg(e)&&(t=!0),vg(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var c=this.resolvePseudoContent(e,n,a,No.AFTER);return c&&n.appendChild(c),this.counters.pop(s),(o&&(this.options.copyStyles||_a(e))&&!j4(e)||t)&&vc(o,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(ms(e)||Cs(e))&&(ms(n)||Cs(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var o=this;if(r){var i=r.content,a=t.ownerDocument;if(!(!a||!i||i==="none"||i==="-moz-alt-content"||r.display==="none")){this.counters.parse(new rg(this.context,r));var s=new BF(this.context,r),l=a.createElement("html2canvaspseudoelement");vc(r,l),s.content.forEach(function(u){if(u.type===0)l.appendChild(a.createTextNode(u.value));else if(u.type===22){var f=a.createElement("img");f.src=u.value,f.style.opacity="1",l.appendChild(f)}else if(u.type===18){if(u.name==="attr"){var p=u.values.filter(cA);p.length&&l.appendChild(a.createTextNode(e.getAttribute(p[0].value)||""))}else if(u.name==="counter"){var B=u.values.filter(On),w=B[0],x=B[1];if(w&&cA(w)){var g=o.counters.getCounterValue(w.value),d=x&&cA(x)?Gu.parse(o.context,x.value):3;l.appendChild(a.createTextNode(ai(g,d,!1)))}}else if(u.name==="counters"){var h=u.values.filter(On),w=h[0],C=h[1],x=h[2];if(w&&cA(w)){var y=o.counters.getCounterValues(w.value),m=x&&cA(x)?Gu.parse(o.context,x.value):3,Q=C&&C.type===0?C.value:"",E=y.map(function(M){return ai(M,m,!1)}).join(Q);l.appendChild(a.createTextNode(E))}}}else if(u.type===20)switch(u.value){case"open-quote":l.appendChild(a.createTextNode(tg(s.quotes,o.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(tg(s.quotes,--o.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(u.value))}}),l.className=Yu+" "+Ju;var c=n===No.BEFORE?" "+Yu:" "+Ju;return _a(t)?t.className.baseValue+=c:t.className+=c,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),No;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(No||(No={}));var U7=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute($4,"true"),A.body.appendChild(t),t},x7=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},E7=function(A){return Promise.all([].slice.call(A.images,0).map(x7))},b7=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var o=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(o),e(A))},50)}})},H7=["all","d","content"],vc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);H7.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},k7=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},I7=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},L7=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},S7=":before",M7=":after",Yu="___html2canvas___pseudoelement_before",Ju="___html2canvas___pseudoelement_after",Eg=`{
    content: "" !important;
    display: none !important;
}`,_7=function(A){D7(A,"."+Yu+S7+Eg+`
         .`+Ju+M7+Eg)},D7=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},X4=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),K7=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(mc(e)||O7(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return ae(this,void 0,void 0,function(){var t,r,n,o,i=this;return te(this,function(a){switch(a.label){case 0:return t=X4.isSameOrigin(e),r=!wc(e)&&this._options.useCORS===!0&&YA.SUPPORT_CORS_IMAGES&&!t,n=!wc(e)&&!t&&!mc(e)&&typeof this._options.proxy=="string"&&YA.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!wc(e)&&!mc(e)&&!n&&!r?[2]:(o=e,n?[4,this.proxy(o)]:[3,2]);case 1:o=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(s,l){var c=new Image;c.onload=function(){return s(c)},c.onerror=l,(V7(o)||r)&&(c.crossOrigin="anonymous"),c.src=o,c.complete===!0&&setTimeout(function(){return s(c)},500),i._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+i._options.imageTimeout+"ms) loading image")},i._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(o,i){var a=YA.SUPPORT_RESPONSE_TYPE?"blob":"text",s=new XMLHttpRequest;s.onload=function(){if(s.status===200)if(a==="text")o(s.response);else{var u=new FileReader;u.addEventListener("load",function(){return o(u.result)},!1),u.addEventListener("error",function(f){return i(f)},!1),u.readAsDataURL(s.response)}else i("Failed to proxy resource "+n+" with status code "+s.status)},s.onerror=i;var l=r.indexOf("?")>-1?"&":"?";if(s.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=a),t._options.imageTimeout){var c=t._options.imageTimeout;s.timeout=c,s.ontimeout=function(){return i("Timed out ("+c+"ms) proxying "+n)}}s.send()})},A}(),T7=/^data:image\/svg\+xml/i,N7=/^data:image\/.*;base64,/i,R7=/^data:image\/.*/i,O7=function(A){return YA.SUPPORT_SVG_DRAWING||!P7(A)},wc=function(A){return R7.test(A)},V7=function(A){return N7.test(A)},mc=function(A){return A.substr(0,4)==="blob"},P7=function(A){return A.substr(-3).toLowerCase()==="svg"||T7.test(A)},D=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Yr=function(A,e,t){return new D(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},na=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Yr(this.start,this.startControl,e),n=Yr(this.startControl,this.endControl,e),o=Yr(this.endControl,this.end,e),i=Yr(r,n,e),a=Yr(n,o,e),s=Yr(i,a,e);return t?new A(this.start,r,i,s):new A(s,a,o,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),Te=function(A){return A.type===1},G7=function(){function A(e){var t=e.styles,r=e.bounds,n=wo(t.borderTopLeftRadius,r.width,r.height),o=n[0],i=n[1],a=wo(t.borderTopRightRadius,r.width,r.height),s=a[0],l=a[1],c=wo(t.borderBottomRightRadius,r.width,r.height),u=c[0],f=c[1],p=wo(t.borderBottomLeftRadius,r.width,r.height),B=p[0],w=p[1],x=[];x.push((o+s)/r.width),x.push((B+u)/r.width),x.push((i+w)/r.height),x.push((l+f)/r.height);var g=Math.max.apply(Math,x);g>1&&(o/=g,i/=g,s/=g,l/=g,u/=g,f/=g,B/=g,w/=g);var d=r.width-s,h=r.height-f,C=r.width-u,y=r.height-w,m=t.borderTopWidth,Q=t.borderRightWidth,E=t.borderBottomWidth,H=t.borderLeftWidth,b=dA(t.paddingTop,e.bounds.width),M=dA(t.paddingRight,e.bounds.width),S=dA(t.paddingBottom,e.bounds.width),P=dA(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=o>0||i>0?CA(r.left+H/3,r.top+m/3,o-H/3,i-m/3,aA.TOP_LEFT):new D(r.left+H/3,r.top+m/3),this.topRightBorderDoubleOuterBox=o>0||i>0?CA(r.left+d,r.top+m/3,s-Q/3,l-m/3,aA.TOP_RIGHT):new D(r.left+r.width-Q/3,r.top+m/3),this.bottomRightBorderDoubleOuterBox=u>0||f>0?CA(r.left+C,r.top+h,u-Q/3,f-E/3,aA.BOTTOM_RIGHT):new D(r.left+r.width-Q/3,r.top+r.height-E/3),this.bottomLeftBorderDoubleOuterBox=B>0||w>0?CA(r.left+H/3,r.top+y,B-H/3,w-E/3,aA.BOTTOM_LEFT):new D(r.left+H/3,r.top+r.height-E/3),this.topLeftBorderDoubleInnerBox=o>0||i>0?CA(r.left+H*2/3,r.top+m*2/3,o-H*2/3,i-m*2/3,aA.TOP_LEFT):new D(r.left+H*2/3,r.top+m*2/3),this.topRightBorderDoubleInnerBox=o>0||i>0?CA(r.left+d,r.top+m*2/3,s-Q*2/3,l-m*2/3,aA.TOP_RIGHT):new D(r.left+r.width-Q*2/3,r.top+m*2/3),this.bottomRightBorderDoubleInnerBox=u>0||f>0?CA(r.left+C,r.top+h,u-Q*2/3,f-E*2/3,aA.BOTTOM_RIGHT):new D(r.left+r.width-Q*2/3,r.top+r.height-E*2/3),this.bottomLeftBorderDoubleInnerBox=B>0||w>0?CA(r.left+H*2/3,r.top+y,B-H*2/3,w-E*2/3,aA.BOTTOM_LEFT):new D(r.left+H*2/3,r.top+r.height-E*2/3),this.topLeftBorderStroke=o>0||i>0?CA(r.left+H/2,r.top+m/2,o-H/2,i-m/2,aA.TOP_LEFT):new D(r.left+H/2,r.top+m/2),this.topRightBorderStroke=o>0||i>0?CA(r.left+d,r.top+m/2,s-Q/2,l-m/2,aA.TOP_RIGHT):new D(r.left+r.width-Q/2,r.top+m/2),this.bottomRightBorderStroke=u>0||f>0?CA(r.left+C,r.top+h,u-Q/2,f-E/2,aA.BOTTOM_RIGHT):new D(r.left+r.width-Q/2,r.top+r.height-E/2),this.bottomLeftBorderStroke=B>0||w>0?CA(r.left+H/2,r.top+y,B-H/2,w-E/2,aA.BOTTOM_LEFT):new D(r.left+H/2,r.top+r.height-E/2),this.topLeftBorderBox=o>0||i>0?CA(r.left,r.top,o,i,aA.TOP_LEFT):new D(r.left,r.top),this.topRightBorderBox=s>0||l>0?CA(r.left+d,r.top,s,l,aA.TOP_RIGHT):new D(r.left+r.width,r.top),this.bottomRightBorderBox=u>0||f>0?CA(r.left+C,r.top+h,u,f,aA.BOTTOM_RIGHT):new D(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=B>0||w>0?CA(r.left,r.top+y,B,w,aA.BOTTOM_LEFT):new D(r.left,r.top+r.height),this.topLeftPaddingBox=o>0||i>0?CA(r.left+H,r.top+m,Math.max(0,o-H),Math.max(0,i-m),aA.TOP_LEFT):new D(r.left+H,r.top+m),this.topRightPaddingBox=s>0||l>0?CA(r.left+Math.min(d,r.width-Q),r.top+m,d>r.width+Q?0:Math.max(0,s-Q),Math.max(0,l-m),aA.TOP_RIGHT):new D(r.left+r.width-Q,r.top+m),this.bottomRightPaddingBox=u>0||f>0?CA(r.left+Math.min(C,r.width-H),r.top+Math.min(h,r.height-E),Math.max(0,u-Q),Math.max(0,f-E),aA.BOTTOM_RIGHT):new D(r.left+r.width-Q,r.top+r.height-E),this.bottomLeftPaddingBox=B>0||w>0?CA(r.left+H,r.top+Math.min(y,r.height-E),Math.max(0,B-H),Math.max(0,w-E),aA.BOTTOM_LEFT):new D(r.left+H,r.top+r.height-E),this.topLeftContentBox=o>0||i>0?CA(r.left+H+P,r.top+m+b,Math.max(0,o-(H+P)),Math.max(0,i-(m+b)),aA.TOP_LEFT):new D(r.left+H+P,r.top+m+b),this.topRightContentBox=s>0||l>0?CA(r.left+Math.min(d,r.width+H+P),r.top+m+b,d>r.width+H+P?0:s-H+P,l-(m+b),aA.TOP_RIGHT):new D(r.left+r.width-(Q+M),r.top+m+b),this.bottomRightContentBox=u>0||f>0?CA(r.left+Math.min(C,r.width-(H+P)),r.top+Math.min(h,r.height+m+b),Math.max(0,u-(Q+M)),f-(E+S),aA.BOTTOM_RIGHT):new D(r.left+r.width-(Q+M),r.top+r.height-(E+S)),this.bottomLeftContentBox=B>0||w>0?CA(r.left+H+P,r.top+y,Math.max(0,B-(H+P)),w-(E+S),aA.BOTTOM_LEFT):new D(r.left+H+P,r.top+r.height-(E+S))}return A}(),aA;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(aA||(aA={}));var CA=function(A,e,t,r,n){var o=4*((Math.sqrt(2)-1)/3),i=t*o,a=r*o,s=A+t,l=e+r;switch(n){case aA.TOP_LEFT:return new na(new D(A,l),new D(A,l-a),new D(s-i,e),new D(s,e));case aA.TOP_RIGHT:return new na(new D(A,e),new D(A+i,e),new D(s,l-a),new D(s,l));case aA.BOTTOM_RIGHT:return new na(new D(s,e),new D(s,e+a),new D(A+i,l),new D(A,l));case aA.BOTTOM_LEFT:default:return new na(new D(s,l),new D(s-i,l),new D(A,e+a),new D(A,e))}},Qs=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},j7=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},ys=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},z7=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),oa=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),W7=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),$7=function(A){return A.type===0},Y4=function(A){return A.type===1},X7=function(A){return A.type===2},bg=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},Y7=function(A,e,t,r,n){return A.map(function(o,i){switch(i){case 0:return o.add(e,t);case 1:return o.add(e+r,t);case 2:return o.add(e+r,t+n);case 3:return o.add(e,t+n)}return o})},J4=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),Z4=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new G7(this.container),this.container.styles.opacity<1&&this.effects.push(new W7(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,o=this.container.styles.transform;this.effects.push(new z7(r,n,o))}if(this.container.styles.overflowX!==0){var i=Qs(this.curves),a=ys(this.curves);bg(i,a)?this.effects.push(new oa(i,6)):(this.effects.push(new oa(i,2)),this.effects.push(new oa(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var o=r.effects.filter(function(s){return!Y4(s)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,o),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var i=Qs(r.curves),a=ys(r.curves);bg(i,a)||n.unshift(new oa(a,6))}}else n.unshift.apply(n,o);r=r.parent}return n.filter(function(s){return NA(s.target,e)})},A}(),Zu=function(A,e,t,r){A.container.elements.forEach(function(n){var o=NA(n.flags,4),i=NA(n.flags,2),a=new Z4(n,A);NA(n.styles.display,2048)&&r.push(a);var s=NA(n.flags,8)?[]:r;if(o||i){var l=o||n.styles.isPositioned()?t:e,c=new J4(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var u=n.styles.zIndex.order;if(u<0){var f=0;l.negativeZIndex.some(function(B,w){return u>B.element.container.styles.zIndex.order?(f=w,!1):f>0}),l.negativeZIndex.splice(f,0,c)}else if(u>0){var p=0;l.positiveZIndex.some(function(B,w){return u>=B.element.container.styles.zIndex.order?(p=w+1,!1):p>0}),l.positiveZIndex.splice(p,0,c)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c)}else n.styles.isFloating()?l.nonPositionedFloats.push(c):l.nonPositionedInlineLevel.push(c);Zu(a,c,o?c:t,s)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),Zu(a,e,t,s);NA(n.flags,8)&&q4(n,s)})},q4=function(A,e){for(var t=A instanceof Wu?A.start:1,r=A instanceof Wu?A.reversed:!1,n=0;n<e.length;n++){var o=e[n];o.container instanceof D4&&typeof o.container.value=="number"&&o.container.value!==0&&(t=o.container.value),o.listValue=ai(t,o.container.styles.listStyleType,!0),t+=r?-1:1}},J7=function(A){var e=new Z4(A,null),t=new J4(e),r=[];return Zu(e,t,t,r),q4(e.container,r),t},Hg=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},Z7=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return Oe(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return Oe(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return Oe(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},q7=function(A,e){switch(e){case 0:return Oe(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return Oe(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return Oe(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return Oe(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},AU=function(A,e){switch(e){case 0:return ia(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return ia(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return ia(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return ia(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},ia=function(A,e){var t=[];return Te(A)?t.push(A.subdivide(.5,!1)):t.push(A),Te(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},Oe=function(A,e,t,r){var n=[];return Te(A)?n.push(A.subdivide(.5,!1)):n.push(A),Te(t)?n.push(t.subdivide(.5,!0)):n.push(t),Te(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),Te(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},Av=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Fs=function(A){var e=A.styles,t=A.bounds,r=dA(e.paddingLeft,t.width),n=dA(e.paddingRight,t.width),o=dA(e.paddingTop,t.width),i=dA(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,o+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+o+i))},eU=function(A,e){return A===0?e.bounds:A===2?Fs(e):Av(e)},tU=function(A,e){return A===0?e.bounds:A===2?Fs(e):Av(e)},Cc=function(A,e,t){var r=eU(qr(A.styles.backgroundOrigin,e),A),n=tU(qr(A.styles.backgroundClip,e),A),o=rU(qr(A.styles.backgroundSize,e),t,r),i=o[0],a=o[1],s=wo(qr(A.styles.backgroundPosition,e),r.width-i,r.height-a),l=nU(qr(A.styles.backgroundRepeat,e),s,o,r,n),c=Math.round(r.left+s[0]),u=Math.round(r.top+s[1]);return[l,c,u,i,a]},Jr=function(A){return cA(A)&&A.value===Qn.AUTO},aa=function(A){return typeof A=="number"},rU=function(A,e,t){var r=e[0],n=e[1],o=e[2],i=A[0],a=A[1];if(!i)return[0,0];if(DA(i)&&a&&DA(a))return[dA(i,t.width),dA(a,t.height)];var s=aa(o);if(cA(i)&&(i.value===Qn.CONTAIN||i.value===Qn.COVER)){if(aa(o)){var l=t.width/t.height;return l<o!=(i.value===Qn.COVER)?[t.width,t.width/o]:[t.height*o,t.height]}return[t.width,t.height]}var c=aa(r),u=aa(n),f=c||u;if(Jr(i)&&(!a||Jr(a))){if(c&&u)return[r,n];if(!s&&!f)return[t.width,t.height];if(f&&s){var p=c?r:n*o,B=u?n:r/o;return[p,B]}var w=c?r:t.width,x=u?n:t.height;return[w,x]}if(s){var g=0,d=0;return DA(i)?g=dA(i,t.width):DA(a)&&(d=dA(a,t.height)),Jr(i)?g=d*o:(!a||Jr(a))&&(d=g/o),[g,d]}var h=null,C=null;if(DA(i)?h=dA(i,t.width):a&&DA(a)&&(C=dA(a,t.height)),h!==null&&(!a||Jr(a))&&(C=c&&u?h/r*n:t.height),C!==null&&Jr(i)&&(h=c&&u?C/n*r:t.width),h!==null&&C!==null)return[h,C];throw new Error("Unable to calculate background-size for element")},qr=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},nU=function(A,e,t,r,n){var o=e[0],i=e[1],a=t[0],s=t[1];switch(A){case 2:return[new D(Math.round(r.left),Math.round(r.top+i)),new D(Math.round(r.left+r.width),Math.round(r.top+i)),new D(Math.round(r.left+r.width),Math.round(s+r.top+i)),new D(Math.round(r.left),Math.round(s+r.top+i))];case 3:return[new D(Math.round(r.left+o),Math.round(r.top)),new D(Math.round(r.left+o+a),Math.round(r.top)),new D(Math.round(r.left+o+a),Math.round(r.height+r.top)),new D(Math.round(r.left+o),Math.round(r.height+r.top))];case 1:return[new D(Math.round(r.left+o),Math.round(r.top+i)),new D(Math.round(r.left+o+a),Math.round(r.top+i)),new D(Math.round(r.left+o+a),Math.round(r.top+i+s)),new D(Math.round(r.left+o),Math.round(r.top+i+s))];default:return[new D(Math.round(n.left),Math.round(n.top)),new D(Math.round(n.left+n.width),Math.round(n.top)),new D(Math.round(n.left+n.width),Math.round(n.height+n.top)),new D(Math.round(n.left),Math.round(n.height+n.top))]}},oU="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",kg="Hidden Text",iU=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),o=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),n.src=oU,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",o.style.fontFamily=e,o.style.fontSize=t,o.style.margin="0",o.style.padding="0",o.appendChild(this._document.createTextNode(kg)),r.appendChild(o),r.appendChild(n);var a=n.offsetTop-o.offsetTop+2;r.removeChild(o),r.appendChild(this._document.createTextNode(kg)),r.style.lineHeight="normal",n.style.verticalAlign="super";var s=n.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:a,middle:s}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),ev=function(){function A(e,t){this.context=e,this.options=t}return A}(),aU=1e4,sU=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new iU(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),X7(t)&&(this.ctx.globalAlpha=t.opacity),$7(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),Y4(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return ae(this,void 0,void 0,function(){var r;return te(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return ae(this,void 0,void 0,function(){return te(this,function(r){switch(r.label){case 0:if(NA(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var o=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var i=c1(t.text);i.reduce(function(a,s){return o.ctx.fillText(s,a,t.bounds.top+n),a+o.ctx.measureText(s).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(i){return i==="normal"||i==="small-caps"}).join(""),n=fU(t.fontFamily).join(", "),o=hi(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,o,n].join(" "),n,o]},e.prototype.renderTextNode=function(t,r){return ae(this,void 0,void 0,function(){var n,o,i,a,s,l,c,u,f=this;return te(this,function(p){return n=this.createFontStyle(r),o=n[0],i=n[1],a=n[2],this.ctx.font=o,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",s=this.fontMetrics.getMetrics(i,a),l=s.baseline,c=s.middle,u=r.paintOrder,t.textBounds.forEach(function(B){u.forEach(function(w){switch(w){case 0:f.ctx.fillStyle=PA(r.color),f.renderTextWithLetterSpacing(B,r.letterSpacing,l);var x=r.textShadow;x.length&&B.text.trim().length&&(x.slice(0).reverse().forEach(function(g){f.ctx.shadowColor=PA(g.color),f.ctx.shadowOffsetX=g.offsetX.number*f.options.scale,f.ctx.shadowOffsetY=g.offsetY.number*f.options.scale,f.ctx.shadowBlur=g.blur.number,f.renderTextWithLetterSpacing(B,r.letterSpacing,l)}),f.ctx.shadowColor="",f.ctx.shadowOffsetX=0,f.ctx.shadowOffsetY=0,f.ctx.shadowBlur=0),r.textDecorationLine.length&&(f.ctx.fillStyle=PA(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(g){switch(g){case 1:f.ctx.fillRect(B.bounds.left,Math.round(B.bounds.top+l),B.bounds.width,1);break;case 2:f.ctx.fillRect(B.bounds.left,Math.round(B.bounds.top),B.bounds.width,1);break;case 3:f.ctx.fillRect(B.bounds.left,Math.ceil(B.bounds.top+c),B.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&B.text.trim().length&&(f.ctx.strokeStyle=PA(r.webkitTextStrokeColor),f.ctx.lineWidth=r.webkitTextStrokeWidth,f.ctx.lineJoin=window.chrome?"miter":"round",f.ctx.strokeText(B.text,B.bounds.left,B.bounds.top+l)),f.ctx.strokeStyle="",f.ctx.lineWidth=0,f.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var o=Fs(t),i=ys(r);this.path(i),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,o.left,o.top,o.width,o.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return ae(this,void 0,void 0,function(){var r,n,o,i,a,s,d,d,l,c,u,f,C,p,B,y,w,x,g,d,h,C,y;return te(this,function(m){switch(m.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,o=r.styles,i=0,a=r.textNodes,m.label=1;case 1:return i<a.length?(s=a[i],[4,this.renderTextNode(s,o)]):[3,4];case 2:m.sent(),m.label=3;case 3:return i++,[3,1];case 4:if(!(r instanceof S4))return[3,8];m.label=5;case 5:return m.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return d=m.sent(),this.renderReplacedElement(r,n,d),[3,8];case 7:return m.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof M4&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof _4))return[3,12];m.label=9;case 9:return m.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return d=m.sent(),this.renderReplacedElement(r,n,d),[3,12];case 11:return m.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof N4&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:c=m.sent(),r.width&&r.height&&this.ctx.drawImage(c,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),m.label=14;case 14:if(r instanceof u1&&(u=Math.min(r.bounds.width,r.bounds.height),r.type===vs?r.checked&&(this.ctx.save(),this.path([new D(r.bounds.left+u*.39363,r.bounds.top+u*.79),new D(r.bounds.left+u*.16,r.bounds.top+u*.5549),new D(r.bounds.left+u*.27347,r.bounds.top+u*.44071),new D(r.bounds.left+u*.39694,r.bounds.top+u*.5649),new D(r.bounds.left+u*.72983,r.bounds.top+u*.23),new D(r.bounds.left+u*.84,r.bounds.top+u*.34085),new D(r.bounds.left+u*.39363,r.bounds.top+u*.79)]),this.ctx.fillStyle=PA(Bg),this.ctx.fill(),this.ctx.restore()):r.type===ws&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+u/2,r.bounds.top+u/2,u/4,0,Math.PI*2,!0),this.ctx.fillStyle=PA(Bg),this.ctx.fill(),this.ctx.restore())),lU(r)&&r.value.length){switch(f=this.createFontStyle(o),C=f[0],p=f[1],B=this.fontMetrics.getMetrics(C,p).baseline,this.ctx.font=C,this.ctx.fillStyle=PA(o.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=uU(r.styles.textAlign),y=Fs(r),w=0,r.styles.textAlign){case 1:w+=y.width/2;break;case 2:w+=y.width;break}x=y.add(w,0,0,-y.height/2+1),this.ctx.save(),this.path([new D(y.left,y.top),new D(y.left+y.width,y.top),new D(y.left+y.width,y.top+y.height),new D(y.left,y.top+y.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new To(r.value,x),o.letterSpacing,B),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!NA(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(g=r.styles.listStyleImage,g.type!==0)return[3,18];d=void 0,h=g.url,m.label=15;case 15:return m.trys.push([15,17,,18]),[4,this.context.cache.match(h)];case 16:return d=m.sent(),this.ctx.drawImage(d,r.bounds.left-(d.width+10),r.bounds.top),[3,18];case 17:return m.sent(),this.context.logger.error("Error loading list-style-image "+h),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(C=this.createFontStyle(o)[0],this.ctx.font=C,this.ctx.fillStyle=PA(o.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",y=new Tt(r.bounds.left,r.bounds.top+dA(r.styles.paddingTop,r.bounds.width),r.bounds.width,Ag(o.lineHeight,o.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new To(t.listValue,y),o.letterSpacing,Ag(o.lineHeight,o.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),m.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return ae(this,void 0,void 0,function(){var r,n,g,o,i,g,a,s,g,l,c,g,u,f,g,p,B,g,w,x,g;return te(this,function(d){switch(d.label){case 0:if(NA(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:d.sent(),r=0,n=t.negativeZIndex,d.label=2;case 2:return r<n.length?(g=n[r],[4,this.renderStack(g)]):[3,5];case 3:d.sent(),d.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:d.sent(),o=0,i=t.nonInlineLevel,d.label=7;case 7:return o<i.length?(g=i[o],[4,this.renderNode(g)]):[3,10];case 8:d.sent(),d.label=9;case 9:return o++,[3,7];case 10:a=0,s=t.nonPositionedFloats,d.label=11;case 11:return a<s.length?(g=s[a],[4,this.renderStack(g)]):[3,14];case 12:d.sent(),d.label=13;case 13:return a++,[3,11];case 14:l=0,c=t.nonPositionedInlineLevel,d.label=15;case 15:return l<c.length?(g=c[l],[4,this.renderStack(g)]):[3,18];case 16:d.sent(),d.label=17;case 17:return l++,[3,15];case 18:u=0,f=t.inlineLevel,d.label=19;case 19:return u<f.length?(g=f[u],[4,this.renderNode(g)]):[3,22];case 20:d.sent(),d.label=21;case 21:return u++,[3,19];case 22:p=0,B=t.zeroOrAutoZIndexOrTransformedOrOpacity,d.label=23;case 23:return p<B.length?(g=B[p],[4,this.renderStack(g)]):[3,26];case 24:d.sent(),d.label=25;case 25:return p++,[3,23];case 26:w=0,x=t.positiveZIndex,d.label=27;case 27:return w<x.length?(g=x[w],[4,this.renderStack(g)]):[3,30];case 28:d.sent(),d.label=29;case 29:return w++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,o){var i=Te(n)?n.start:n;o===0?r.ctx.moveTo(i.x,i.y):r.ctx.lineTo(i.x,i.y),Te(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,o){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,o),this.ctx.fill(),this.ctx.translate(-n,-o)},e.prototype.resizeImage=function(t,r,n){var o;if(t.width===r&&t.height===n)return t;var i=(o=this.canvas.ownerDocument)!==null&&o!==void 0?o:document,a=i.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var s=a.getContext("2d");return s.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return ae(this,void 0,void 0,function(){var r,n,o,i,a,s;return te(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(c){var u,f,p,b,eA,tA,P,z,E,B,b,eA,tA,P,z,w,x,g,d,h,C,y,m,Q,E,H,b,M,S,P,z,Z,eA,tA,I,_,G,$,W,UA,uA,nA;return te(this,function(sA){switch(sA.label){case 0:if(c.type!==0)return[3,5];u=void 0,f=c.url,sA.label=1;case 1:return sA.trys.push([1,3,,4]),[4,o.context.cache.match(f)];case 2:return u=sA.sent(),[3,4];case 3:return sA.sent(),o.context.logger.error("Error loading background-image "+f),[3,4];case 4:return u&&(p=Cc(t,r,[u.width,u.height,u.width/u.height]),b=p[0],eA=p[1],tA=p[2],P=p[3],z=p[4],E=o.ctx.createPattern(o.resizeImage(u,P,z),"repeat"),o.renderRepeat(b,E,eA,tA)),[3,6];case 5:$6(c)?(B=Cc(t,r,[null,null,null]),b=B[0],eA=B[1],tA=B[2],P=B[3],z=B[4],w=P6(c.angle,P,z),x=w[0],g=w[1],d=w[2],h=w[3],C=w[4],y=document.createElement("canvas"),y.width=P,y.height=z,m=y.getContext("2d"),Q=m.createLinearGradient(g,h,d,C),Z2(c.stops,x).forEach(function(gA){return Q.addColorStop(gA.stop,PA(gA.color))}),m.fillStyle=Q,m.fillRect(0,0,P,z),P>0&&z>0&&(E=o.ctx.createPattern(y,"repeat"),o.renderRepeat(b,E,eA,tA))):X6(c)&&(H=Cc(t,r,[null,null,null]),b=H[0],M=H[1],S=H[2],P=H[3],z=H[4],Z=c.position.length===0?[a1]:c.position,eA=dA(Z[0],P),tA=dA(Z[Z.length-1],z),I=G6(c,eA,tA,P,z),_=I[0],G=I[1],_>0&&G>0&&($=o.ctx.createRadialGradient(M+eA,S+tA,0,M+eA,S+tA,_),Z2(c.stops,_*2).forEach(function(gA){return $.addColorStop(gA.stop,PA(gA.color))}),o.path(b),o.ctx.fillStyle=$,_!==G?(W=t.bounds.left+.5*t.bounds.width,UA=t.bounds.top+.5*t.bounds.height,uA=G/_,nA=1/uA,o.ctx.save(),o.ctx.translate(W,UA),o.ctx.transform(1,0,0,uA,0,0),o.ctx.translate(-W,-UA),o.ctx.fillRect(M,nA*(S-UA)+UA,P,z*nA),o.ctx.restore()):o.ctx.fill())),sA.label=6;case 6:return r--,[2]}})},o=this,i=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return i<a.length?(s=a[i],[5,n(s)]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return ae(this,void 0,void 0,function(){return te(this,function(o){return this.path(Hg(n,r)),this.ctx.fillStyle=PA(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,o){return ae(this,void 0,void 0,function(){var i,a;return te(this,function(s){switch(s.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,o)]:[3,2];case 1:return s.sent(),[2];case 2:return i=Z7(o,n),this.path(i),this.ctx.fillStyle=PA(t),this.ctx.fill(),a=q7(o,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return ae(this,void 0,void 0,function(){var r,n,o,i,a,s,l,c,u=this;return te(this,function(f){switch(f.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!ur(r.backgroundColor)||r.backgroundImage.length,o=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],i=cU(qr(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(i),this.ctx.clip(),ur(r.backgroundColor)||(this.ctx.fillStyle=PA(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:f.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(p){u.ctx.save();var B=Qs(t.curves),w=p.inset?0:aU,x=Y7(B,-w+(p.inset?1:-1)*p.spread.number,(p.inset?1:-1)*p.spread.number,p.spread.number*(p.inset?-2:2),p.spread.number*(p.inset?-2:2));p.inset?(u.path(B),u.ctx.clip(),u.mask(x)):(u.mask(B),u.ctx.clip(),u.path(x)),u.ctx.shadowOffsetX=p.offsetX.number+w,u.ctx.shadowOffsetY=p.offsetY.number,u.ctx.shadowColor=PA(p.color),u.ctx.shadowBlur=p.blur.number,u.ctx.fillStyle=p.inset?PA(p.color):"rgba(0,0,0,1)",u.ctx.fill(),u.ctx.restore()}),f.label=2;case 2:a=0,s=0,l=o,f.label=3;case 3:return s<l.length?(c=l[s],c.style!==0&&!ur(c.color)&&c.width>0?c.style!==2?[3,5]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return f.sent(),[3,11];case 5:return c.style!==3?[3,7]:[4,this.renderDashedDottedBorder(c.color,c.width,a,t.curves,3)];case 6:return f.sent(),[3,11];case 7:return c.style!==4?[3,9]:[4,this.renderDoubleBorder(c.color,c.width,a,t.curves)];case 8:return f.sent(),[3,11];case 9:return[4,this.renderSolidBorder(c.color,a,t.curves)];case 10:f.sent(),f.label=11;case 11:a++,f.label=12;case 12:return s++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,o,i){return ae(this,void 0,void 0,function(){var a,s,l,c,u,f,p,B,w,x,g,d,h,C,y,m,y,m;return te(this,function(Q){return this.ctx.save(),a=AU(o,n),s=Hg(o,n),i===2&&(this.path(s),this.ctx.clip()),Te(s[0])?(l=s[0].start.x,c=s[0].start.y):(l=s[0].x,c=s[0].y),Te(s[1])?(u=s[1].end.x,f=s[1].end.y):(u=s[1].x,f=s[1].y),n===0||n===2?p=Math.abs(l-u):p=Math.abs(c-f),this.ctx.beginPath(),i===3?this.formatPath(a):this.formatPath(s.slice(0,2)),B=r<3?r*3:r*2,w=r<3?r*2:r,i===3&&(B=r,w=r),x=!0,p<=B*2?x=!1:p<=B*2+w?(g=p/(2*B+w),B*=g,w*=g):(d=Math.floor((p+w)/(B+w)),h=(p-d*B)/(d-1),C=(p-(d+1)*B)/d,w=C<=0||Math.abs(w-h)<Math.abs(w-C)?h:C),x&&(i===3?this.ctx.setLineDash([0,B+w]):this.ctx.setLineDash([B,w])),i===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=PA(t),this.ctx.stroke(),this.ctx.setLineDash([]),i===2&&(Te(s[0])&&(y=s[3],m=s[0],this.ctx.beginPath(),this.formatPath([new D(y.end.x,y.end.y),new D(m.start.x,m.start.y)]),this.ctx.stroke()),Te(s[1])&&(y=s[1],m=s[2],this.ctx.beginPath(),this.formatPath([new D(y.end.x,y.end.y),new D(m.start.x,m.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return ae(this,void 0,void 0,function(){var r;return te(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=PA(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=J7(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(ev),lU=function(A){return A instanceof T4||A instanceof K4?!0:A instanceof u1&&A.type!==ws&&A.type!==vs},cU=function(A,e){switch(A){case 0:return Qs(e);case 2:return j7(e);case 1:default:return ys(e)}},uU=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},dU=["-apple-system","system-ui"],fU=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return dU.indexOf(e)===-1}):A},gU=function(A){lt(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return ae(this,void 0,void 0,function(){var r,n;return te(this,function(o){switch(o.label){case 0:return r=zu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,pU(r)];case 1:return n=o.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=PA(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(ev),pU=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},hU=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ni([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ni([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),BU=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new hU({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new K7(this,e)}return A.instanceCount=1,A}(),vU=function(A,e){return e===void 0&&(e={}),wU(A,e)};typeof window<"u"&&X4.setContext(window);var wU=function(A,e){return ae(void 0,void 0,void 0,function(){var t,r,n,o,i,a,s,l,c,u,f,p,B,w,x,g,d,h,C,y,Q,m,Q,E,H,b,M,S,P,z,Z,eA,tA,I,_,G,$,W,UA,uA;return te(this,function(nA){switch(nA.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(E=e.allowTaint)!==null&&E!==void 0?E:!1,imageTimeout:(H=e.imageTimeout)!==null&&H!==void 0?H:15e3,proxy:e.proxy,useCORS:(b=e.useCORS)!==null&&b!==void 0?b:!1},o=Iu({logging:(M=e.logging)!==null&&M!==void 0?M:!0,cache:e.cache},n),i={windowWidth:(S=e.windowWidth)!==null&&S!==void 0?S:r.innerWidth,windowHeight:(P=e.windowHeight)!==null&&P!==void 0?P:r.innerHeight,scrollX:(z=e.scrollX)!==null&&z!==void 0?z:r.pageXOffset,scrollY:(Z=e.scrollY)!==null&&Z!==void 0?Z:r.pageYOffset},a=new Tt(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),s=new BU(o,a),l=(eA=e.foreignObjectRendering)!==null&&eA!==void 0?eA:!1,c={allowTaint:(tA=e.allowTaint)!==null&&tA!==void 0?tA:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},s.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),u=new xg(s,A,c),f=u.clonedReferenceElement,f?[4,u.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return p=nA.sent(),B=d1(f)||m7(f)?Y5(f.ownerDocument):rl(s,f),w=B.width,x=B.height,g=B.left,d=B.top,h=mU(s,f,e.backgroundColor),C={canvas:e.canvas,backgroundColor:h,scale:(_=(I=e.scale)!==null&&I!==void 0?I:r.devicePixelRatio)!==null&&_!==void 0?_:1,x:((G=e.x)!==null&&G!==void 0?G:0)+g,y:(($=e.y)!==null&&$!==void 0?$:0)+d,width:(W=e.width)!==null&&W!==void 0?W:Math.ceil(w),height:(UA=e.height)!==null&&UA!==void 0?UA:Math.ceil(x)},l?(s.logger.debug("Document cloned, using foreign object rendering"),Q=new gU(s,C),[4,Q.render(f)]):[3,3];case 2:return y=nA.sent(),[3,5];case 3:return s.logger.debug("Document cloned, element located at "+g+","+d+" with size "+w+"x"+x+" using computed rendering"),s.logger.debug("Starting DOM parsing"),m=O4(s,f),h===m.styles.backgroundColor&&(m.styles.backgroundColor=St.TRANSPARENT),s.logger.debug("Starting renderer for element at "+C.x+","+C.y+" with size "+C.width+"x"+C.height),Q=new sU(s,C),[4,Q.render(m)];case 4:y=nA.sent(),nA.label=5;case 5:return(!((uA=e.removeContainer)!==null&&uA!==void 0)||uA)&&(xg.destroy(p)||s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),s.logger.debug("Finished rendering"),[2,y]}})})},mU=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?Do(A,getComputedStyle(r.documentElement).backgroundColor):St.TRANSPARENT,o=r.body?Do(A,getComputedStyle(r.body).backgroundColor):St.TRANSPARENT,i=typeof t=="string"?Do(A,t):t===null?St.TRANSPARENT:4294967295;return e===r.documentElement?ur(n)?ur(o)?i:o:n:i};const tv=(A,e,t)=>{A&&vU(A,{scale:t,useCORS:!0}).then(function(r){r.toBlob(function(n){const o=document.createElement("a");o.href=URL.createObjectURL(n),o.download="image.png",e&&(o.download=e),o.click(),URL.revokeObjectURL(o.href)})})},CU=({pathData:A=[]})=>{var c,u,f;const[e,t]=L.useState(1),r=L.useMemo(()=>A.filter(p=>p.id===e)[0],[e]),[n,o]=L.useState(1),[i,a]=L.useState(Array.from({length:(c=r.path)==null?void 0:c.length}).map(()=>"var(--color-bg-3)")),s=p=>{const B=i==null?void 0:i.map((w,x)=>x+1===n?p:w);a(B)},l=p=>p==="white"||p==="#fff"||p==="#FFF"||p==="#ffffff"||p==="#FFFFFF";return U.jsxs(QU,{className:"flex-1 flex column items-start gap-32 p-24 width-100",children:[U.jsx(iC,{className:"flex both-center width-100 ratio-1",content:U.jsx($A,{name:"download",size:32,stroke:"var(--color-text-4)",onClick:()=>{const p=document.querySelector(".colorFill-svg");tv(p,"crochet-time-color-fill-res")}}),placement:"rb",gap:12,children:U.jsxs("svg",{width:"100%",viewBox:"0 0 220 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"colorFill-svg radius-8",onClick:()=>o(0),children:[U.jsx("rect",{width:"220",height:"220",fill:"var(--color-bg-1)"}),(u=r.path)==null?void 0:u.map((p,B)=>U.jsx("path",{d:p,fill:i[B]||"var(--color-bg-3)",stroke:B+1===n?"var(--color-primary-6)":"white",className:"transition-15",onClick:w=>{w.stopPropagation(),o(B+1)}},B)),(f=r.numPath)==null?void 0:f.map((p,B)=>U.jsx(U.Fragment,{children:i[B]==="var(--color-bg-3)"&&U.jsx("path",{d:p,fill:"white"},B)}))]})}),U.jsx(Ce,{children:A.map((p,B)=>U.jsx("div",{onClick:()=>{t(p.id)},children:U.jsx("img",{src:p.img,width:100})},B))}),U.jsx(Ce,{className:"flex-1 flex flex-column",style:{overflow:"auto"},children:W5.map(p=>{var B;return U.jsxs(Ce,{column:!0,gap:12,children:[U.jsx(he,{title:p.title,type:"h3",style:{margin:"0 auto"}}),U.jsx(y8,{type:qe.ColumnFit,autoSize:48,className:"width-100",children:(B=p.colors)==null?void 0:B.map(w=>U.jsx("div",{className:`flex items-center justify-center fs-8 color-white border radius-50 ratio-1 ${l(w.value)?"border":""}`,style:{backgroundColor:w.value},onClick:()=>s==null?void 0:s(w.value),children:w.name},w.id))})]},p.id)})})]})},QU=Rt(Ys)`
  overflow: auto;
  @media screen and (max-width: 800px) {
    gap: 16px;
  }
`;function Us(A){"@babel/helpers - typeof";return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Us(A)}var yU=/^\s+/,FU=/\s+$/;function j(A,e){if(A=A||"",e=e||{},A instanceof j)return A;if(!(this instanceof j))return new j(A,e);var t=UU(A);this._originalInput=A,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}j.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,n,o,i,a;return t=e.r/255,r=e.g/255,n=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),.2126*o+.7152*i+.0722*a},setAlpha:function(e){return this._a=rv(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Lg(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Lg(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=Ig(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ig(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),n=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return Sg(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return HU(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(yA(this._r,255)*100)+"%",g:Math.round(yA(this._g,255)*100)+"%",b:Math.round(yA(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(yA(this._r,255)*100)+"%, "+Math.round(yA(this._g,255)*100)+"%, "+Math.round(yA(this._b,255)*100)+"%)":"rgba("+Math.round(yA(this._r,255)*100)+"%, "+Math.round(yA(this._g,255)*100)+"%, "+Math.round(yA(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:OU[Sg(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Mg(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=j(e);r="#"+Mg(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0,o=!t&&n&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return j(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(SU,arguments)},brighten:function(){return this._applyModification(MU,arguments)},darken:function(){return this._applyModification(_U,arguments)},desaturate:function(){return this._applyModification(kU,arguments)},saturate:function(){return this._applyModification(IU,arguments)},greyscale:function(){return this._applyModification(LU,arguments)},spin:function(){return this._applyModification(DU,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(NU,arguments)},complement:function(){return this._applyCombination(KU,arguments)},monochromatic:function(){return this._applyCombination(RU,arguments)},splitcomplement:function(){return this._applyCombination(TU,arguments)},triad:function(){return this._applyCombination(_g,[3])},tetrad:function(){return this._applyCombination(_g,[4])}};j.fromRatio=function(A,e){if(Us(A)=="object"){var t={};for(var r in A)A.hasOwnProperty(r)&&(r==="a"?t[r]=A[r]:t[r]=Qo(A[r]));A=t}return j(A,e)};function UU(A){var e={r:0,g:0,b:0},t=1,r=null,n=null,o=null,i=!1,a=!1;return typeof A=="string"&&(A=jU(A)),Us(A)=="object"&&(Ft(A.r)&&Ft(A.g)&&Ft(A.b)?(e=xU(A.r,A.g,A.b),i=!0,a=String(A.r).substr(-1)==="%"?"prgb":"rgb"):Ft(A.h)&&Ft(A.s)&&Ft(A.v)?(r=Qo(A.s),n=Qo(A.v),e=bU(A.h,r,n),i=!0,a="hsv"):Ft(A.h)&&Ft(A.s)&&Ft(A.l)&&(r=Qo(A.s),o=Qo(A.l),e=EU(A.h,r,o),i=!0,a="hsl"),A.hasOwnProperty("a")&&(t=A.a)),t=rv(t),{ok:i,format:A.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function xU(A,e,t){return{r:yA(A,255)*255,g:yA(e,255)*255,b:yA(t,255)*255}}function Ig(A,e,t){A=yA(A,255),e=yA(e,255),t=yA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=(r+n)/2;if(r==n)o=i=0;else{var s=r-n;switch(i=a>.5?s/(2-r-n):s/(r+n),r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,l:a}}function EU(A,e,t){var r,n,o;A=yA(A,360),e=yA(e,100),t=yA(t,100);function i(l,c,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?l+(c-l)*6*u:u<1/2?c:u<2/3?l+(c-l)*(2/3-u)*6:l}if(e===0)r=n=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,s=2*t-a;r=i(s,a,A+1/3),n=i(s,a,A),o=i(s,a,A-1/3)}return{r:r*255,g:n*255,b:o*255}}function Lg(A,e,t){A=yA(A,255),e=yA(e,255),t=yA(t,255);var r=Math.max(A,e,t),n=Math.min(A,e,t),o,i,a=r,s=r-n;if(i=r===0?0:s/r,r==n)o=0;else{switch(r){case A:o=(e-t)/s+(e<t?6:0);break;case e:o=(t-A)/s+2;break;case t:o=(A-e)/s+4;break}o/=6}return{h:o,s:i,v:a}}function bU(A,e,t){A=yA(A,360)*6,e=yA(e,100),t=yA(t,100);var r=Math.floor(A),n=A-r,o=t*(1-e),i=t*(1-n*e),a=t*(1-(1-n)*e),s=r%6,l=[t,i,o,o,a,t][s],c=[a,t,t,i,o,o][s],u=[o,o,a,t,t,i][s];return{r:l*255,g:c*255,b:u*255}}function Sg(A,e,t,r){var n=[rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function HU(A,e,t,r,n){var o=[rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16)),rt(nv(r))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Mg(A,e,t,r){var n=[rt(nv(r)),rt(Math.round(A).toString(16)),rt(Math.round(e).toString(16)),rt(Math.round(t).toString(16))];return n.join("")}j.equals=function(A,e){return!A||!e?!1:j(A).toRgbString()==j(e).toRgbString()};j.random=function(){return j.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function kU(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.s-=e/100,t.s=fl(t.s),j(t)}function IU(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.s+=e/100,t.s=fl(t.s),j(t)}function LU(A){return j(A).desaturate(100)}function SU(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.l+=e/100,t.l=fl(t.l),j(t)}function MU(A,e){e=e===0?0:e||10;var t=j(A).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),j(t)}function _U(A,e){e=e===0?0:e||10;var t=j(A).toHsl();return t.l-=e/100,t.l=fl(t.l),j(t)}function DU(A,e){var t=j(A).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,j(t)}function KU(A){var e=j(A).toHsl();return e.h=(e.h+180)%360,j(e)}function _g(A,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=j(A).toHsl(),r=[j(A)],n=360/e,o=1;o<e;o++)r.push(j({h:(t.h+o*n)%360,s:t.s,l:t.l}));return r}function TU(A){var e=j(A).toHsl(),t=e.h;return[j(A),j({h:(t+72)%360,s:e.s,l:e.l}),j({h:(t+216)%360,s:e.s,l:e.l})]}function NU(A,e,t){e=e||6,t=t||30;var r=j(A).toHsl(),n=360/t,o=[j(A)];for(r.h=(r.h-(n*e>>1)+720)%360;--e;)r.h=(r.h+n)%360,o.push(j(r));return o}function RU(A,e){e=e||6;for(var t=j(A).toHsv(),r=t.h,n=t.s,o=t.v,i=[],a=1/e;e--;)i.push(j({h:r,s:n,v:o})),o=(o+a)%1;return i}j.mix=function(A,e,t){t=t===0?0:t||50;var r=j(A).toRgb(),n=j(e).toRgb(),o=t/100,i={r:(n.r-r.r)*o+r.r,g:(n.g-r.g)*o+r.g,b:(n.b-r.b)*o+r.b,a:(n.a-r.a)*o+r.a};return j(i)};j.readability=function(A,e){var t=j(A),r=j(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};j.isReadable=function(A,e,t){var r=j.readability(A,e),n,o;switch(o=!1,n=zU(t),n.level+n.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};j.mostReadable=function(A,e,t){var r=null,n=0,o,i,a,s;t=t||{},i=t.includeFallbackColors,a=t.level,s=t.size;for(var l=0;l<e.length;l++)o=j.readability(A,e[l]),o>n&&(n=o,r=j(e[l]));return j.isReadable(A,r,{level:a,size:s})||!i?r:(t.includeFallbackColors=!1,j.mostReadable(A,["#fff","#000"],t))};var qu=j.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},OU=j.hexNames=VU(qu);function VU(A){var e={};for(var t in A)A.hasOwnProperty(t)&&(e[A[t]]=t);return e}function rv(A){return A=parseFloat(A),(isNaN(A)||A<0||A>1)&&(A=1),A}function yA(A,e){PU(A)&&(A="100%");var t=GU(A);return A=Math.min(e,Math.max(0,parseFloat(A))),t&&(A=parseInt(A*e,10)/100),Math.abs(A-e)<1e-6?1:A%e/parseFloat(e)}function fl(A){return Math.min(1,Math.max(0,A))}function Fe(A){return parseInt(A,16)}function PU(A){return typeof A=="string"&&A.indexOf(".")!=-1&&parseFloat(A)===1}function GU(A){return typeof A=="string"&&A.indexOf("%")!=-1}function rt(A){return A.length==1?"0"+A:""+A}function Qo(A){return A<=1&&(A=A*100+"%"),A}function nv(A){return Math.round(parseFloat(A)*255).toString(16)}function Dg(A){return Fe(A)/255}var Je=function(){var A="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+A+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ft(A){return!!Je.CSS_UNIT.exec(A)}function jU(A){A=A.replace(yU,"").replace(FU,"").toLowerCase();var e=!1;if(qu[A])A=qu[A],e=!0;else if(A=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Je.rgb.exec(A))?{r:t[1],g:t[2],b:t[3]}:(t=Je.rgba.exec(A))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Je.hsl.exec(A))?{h:t[1],s:t[2],l:t[3]}:(t=Je.hsla.exec(A))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Je.hsv.exec(A))?{h:t[1],s:t[2],v:t[3]}:(t=Je.hsva.exec(A))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Je.hex8.exec(A))?{r:Fe(t[1]),g:Fe(t[2]),b:Fe(t[3]),a:Dg(t[4]),format:e?"name":"hex8"}:(t=Je.hex6.exec(A))?{r:Fe(t[1]),g:Fe(t[2]),b:Fe(t[3]),format:e?"name":"hex"}:(t=Je.hex4.exec(A))?{r:Fe(t[1]+""+t[1]),g:Fe(t[2]+""+t[2]),b:Fe(t[3]+""+t[3]),a:Dg(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Je.hex3.exec(A))?{r:Fe(t[1]+""+t[1]),g:Fe(t[2]+""+t[2]),b:Fe(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function zU(A){var e,t;return A=A||{level:"AA",size:"small"},e=(A.level||"AA").toUpperCase(),t=(A.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}const WU=({mainTitle:A,subTitle:e})=>U.jsxs(Ce,{column:!0,gap:8,children:[U.jsx(he,{title:A,type:"h3"}),U.jsx(he,{title:e,type:"p",className:"color-gray-4"})]}),$U=({align:A="right",onClick:e,children:t})=>U.jsxs(XU,{className:"relative",children:[t,U.jsx("div",{className:"absolute cursor-pointer top-0 hover-icon",onClick:e,style:{left:A==="left"?"0px":"100%"},children:U.jsx($A,{name:"close-fill",fill:"var(--color-red-6)"})})]}),XU=Rt.div`
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
`,YU="https://ingenueland.online/crochet-time/images/colorcard_default.jpeg",sa=[{id:"1",value:"#b9a78f"},{id:"2",value:"#7e6d5b"},{id:"3",value:"#e5e6eb"},{id:"4",value:"#473f3c"},{id:"5",value:"#623726"},{id:"6",value:"#cab8ba"}],JU=({})=>{const[A,e]=L.useState(""),[t,r]=L.useState([]),[n,o]=L.useState();L.useEffect(()=>{let b={w:200,h:200,ratio:1},M=new Image;M.src=A,b={w:M.width,h:M.height,ratio:M.width/M.height},o(b)},[A]);const i=()=>{if(t.length>=0)if(t.length<8){let b="";window.EyeDropper||f(!0,"你的浏览器不支持此功能"),new EyeDropper().open().then(S=>{b=S.sRGBHex,r([...t,{id:`${b}`,value:b}])}).catch(()=>{f(!0,"出错了～")})}else f(!0,"已达上限～长按删除后重试");else f(!0,"请先上传图片～")},a=b=>{const M=t.filter(S=>S.id!==b);r(M)},[s,l]=L.useState(!1),[c,u]=L.useState(""),f=(b,M)=>{u(M),l(b);const S=setTimeout(()=>{l(!1),clearTimeout(S)},1e3)},[p,B]=L.useState(10),[w,x]=L.useState(!0);L.useEffect(()=>{p>0?x(!0):x(!1)},[p]),L.useEffect(()=>{B(w?p||10:0)},[w]);const[g,d]=L.useState(6);L.useEffect(()=>{Q(A)},[p,w,g]);const h=b=>{const M=j(`rgb(${b[0]},${b[1]},${b[2]})`).toHsv();return M.s<=p/100||M.v<=p/100};function C(b,M,S=32){if(h(b))return!0;const P=b[0]-M[0],z=b[1]-M[1],Z=b[2]-M[2];return Math.sqrt(P*P+z*z+Z*Z)<S}const y=b=>{const M=document.createElement("canvas"),S=M.getContext("2d");return M.width=b.width,M.height=b.height,S==null||S.drawImage(b,0,0,b.width,b.height),S==null?void 0:S.getImageData(0,0,b.width,b.height).data},m=b=>{const M=y(b);if(!M)return;const S=new Map;for(let Z=0;Z<M.length;Z+=4){const tA=[M[Z],M[Z+1],M[Z+2]].join(",");S.has(tA)?S.set(tA,S.get(tA)+1):S.set(tA,1)}let P=Array.from(S.entries()).sort((Z,eA)=>eA[1]-Z[1]).map(Z=>Z[0].split(",").map(eA=>parseInt(eA)));const z=[];for(const Z of P)if(!z.some(eA=>C(Z,eA,32))&&!h(Z)&&z.push(Z),z.length>=g)break;return z},Q=b=>{const M=new Image;M.src=b,M.onload=()=>{var P;const S=(P=m(M))==null?void 0:P.map(z=>({id:z[0]+z[1]+z[2],value:`#${j(`rgb(${z[0]},${z[1]},${z[2]})`).toHex()}`}));r(S)}},[E,H]=L.useState(["","","","","",""]);return U.jsxs(Ys,{className:"flex-1 flex column items-start gap-32 px-24 pt-32 pb-24 width-100",children:[U.jsxs(Ce,{column:!0,gap:24,children:[U.jsx(WU,{mainTitle:"Step 01: 上传文件",subTitle:"点击或拖拽来上传图片，以像素为单位对颜色计数"}),U.jsx("div",{className:"width-100",style:{height:"240px"},children:U.jsx(T8,{fileType:"image/*",onUpload:b=>{e(b),r([])},desc:"点击上传图片或将图片拖拽于此",className:"radius-12",children:A&&U.jsx(lC,{url:A})})})]}),U.jsxs("div",{className:"flex flex-wrap width-100",children:[U.jsxs("div",{children:[U.jsx(he,{title:"Step 02: 取色配置",type:"h3"}),U.jsx(he,{title:U.jsxs(U.Fragment,{children:["【过滤颜色】设置过滤中性色的范围",U.jsx("br",{}),"【提取数量】可一次提取6、8、10个颜色",U.jsx("br",{}),"【编辑颜色】支持删除、添加、修改提取的颜色列表"]}),type:"p",className:"color-gray-4 mt-8"}),(t==null?void 0:t.length)!==0&&U.jsxs("div",{className:"flex gap-24 mt-12",children:[U.jsxs("div",{className:"flex column gap-8",style:{width:"124px"},children:[U.jsx(i8,{text:"过滤中性色",checked:w,onChange:()=>{x(!w)},pop:"勾选后将自动过滤饱和度或纯度低于 10 的颜色<br/>支持输入自定义过滤范围（≤35）"}),U.jsx(So,{type:"number",max:35,min:0,step:5,value:String(p),onChange:b=>B(Number(b))})]}),U.jsx(L8,{title:"数量",width:124,data:[{id:"1",value:"4"},{id:"2",value:"6"},{id:"3",value:"8"}],selected:"2",onChange:b=>{d(Number(b.value))}})]})]}),U.jsxs("div",{className:"relative flex items-center justify-center flex-wrap gap-12 p-24 flex-1",style:{minWidth:"325px"},children:[t.length===0&&A&&U.jsx("div",{className:"absolute",style:{zIndex:1},children:U.jsx(xa,{text:"提取颜色",type:"background",status:"primary",onClick:()=>{Q(A)}})}),t.length===0?sa==null?void 0:sa.map((b,M)=>U.jsx(Kg,{className:"flex column relative justify-center gap-4 disabled",children:U.jsx(v0,{value:b.value,showDrop:!1})},M)):t==null?void 0:t.map((b,M)=>U.jsx($U,{onClick:()=>a(b.id),children:U.jsx(Kg,{className:"flex column relative justify-center gap-4",children:U.jsx(v0,{value:b.value,showDrop:!1,onChange:S=>{const P=t.map(z=>({id:z.id,value:z.id==b.id?`#${j(S).toHex()}`:z.value}));r(P)}})},M)})),t.length!==0&&t.length<8&&U.jsxs(ZU,{className:"StyleAddColorBtn relative flex both-center border radius-50 cursor-pointer hover-pop",onClick:()=>i(),children:[U.jsx(X5,{}),U.jsx(Lt,{content:"点击吸取颜色",theme:"dark"})]})]})]}),U.jsxs(Ce,{column:!0,gap:8,children:[U.jsx(he,{title:"Step 03: 下载 & 保存色卡",type:"h3"}),U.jsx(he,{title:"调整颜色至满意值后，点击下载色卡，即可保存到本地",type:"p",className:"color-gray-4"})]}),(t==null?void 0:t.length)===0?U.jsx(Tg,{className:"grid mx-32 gap-24 mb-24 disabled",length:6,children:Array.from({length:6}).map((b,M)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(Ng,{className:`relative p-24 flex gap-4 width-100 border color-card card-${M} column`,width:1e3,height:667,ratio:1.5,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:YU})}),U.jsx("div",{className:"color-list grid gap-4",children:(t==null?void 0:t.length)===0?sa.map(S=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:S.value},className:"width-100 flex-1"},S.id),U.jsx("p",{children:S.value})]})):t.map(S=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:S.value},className:"width-100 flex-1"},S.id),U.jsx("p",{children:S.value})]}))})]}),U.jsx(xa,{type:"background",className:"width-100",text:"下载色卡",icon:U.jsx($A,{name:"download"})})]}))}):U.jsx(Tg,{className:"grid mx-32 gap-24",length:t.length,children:Array.from({length:6}).map((b,M)=>U.jsxs("div",{className:"flex column items-center gap-12",children:[U.jsxs(Ng,{className:`relative p-24 flex gap-4 width-100 border color-card card-${M} ${n.ratio<1?"":"column"}`,width:n.w,height:n.h,ratio:n.ratio,children:[U.jsx("div",{className:"color-img",children:U.jsx("img",{src:A})}),U.jsx("div",{className:"color-list grid gap-4",children:t.map(S=>U.jsxs("div",{className:"color-item flex column items-center gap-4",children:[U.jsx("div",{style:{background:S.value},className:"width-100 flex-1"},S.id),U.jsx("p",{children:S.value})]}))})]}),U.jsxs("div",{className:"width-100 flex gap-12",children:[U.jsx(So,{placeholder:"自定义色卡名称",value:E[M],onChange:S=>{const P=E.map((z,Z)=>Z===M?S:z);H(P)},className:"flex-1"}),U.jsx(xa,{type:"background",className:"flex-1",text:"下载色卡",icon:U.jsx($A,{name:"download"}),onClick:()=>{const S=document.querySelectorAll(".color-card");tv(S[M],E[M],4)}})]})]}))}),U.jsx(EB,{show:s,text:c})]})},Kg=Rt.div`
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,ZU=Rt.div`
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
`,Tg=Rt.div`
  width: 100%;
  grid-template-columns: ${A=>`repeat(auto-fit, minmax(${A.length*40+48}px, 1fr))`};
  &.disabled {
    opacity: var(--opacity-02);
    pointer-events: none;
  }
`,Ng=Rt.div`
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
`;function qU(){const[A,e]=L.useState(22),[t,r]=L.useState(22);return U.jsxs(A9,{column:!0,className:"height-100",children:[U.jsx(x8,{name:U.jsx(he,{title:"Crochet Time"}),logo:U.jsx($5,{}),menuProps:{data:[{key:11,title:"基础知识",open:!0,dropData:[{key:11,title:"线材"},{key:12,title:"器材"}]},{key:1,title:"插图教程",open:!0,dropData:[{key:1,title:"钩针"},{key:2,title:"棒针"}]},{key:21,title:"工具",open:!0,dropData:[{key:21,title:"取色"},{key:22,title:"配色"}]},{key:31,title:"图解"}],active:A,onChange:n=>{r(n.key),e(n.key)},onDropChange:(n,o)=>{r(n.key),e(o.key)},dropProps:{direction:"column",active:t},theme:{lineColor:"inherit",activeBg:"var(--color-bg-2)"}},align:"end"}),t===1&&U.jsx(I2,{data:k2}),t===2&&U.jsx(I2,{data:k2}),t===11&&U.jsx(Ac,{data:P5}),t===12&&U.jsx(Ac,{data:G5}),t===21&&U.jsx(JU,{}),t===22&&U.jsx(CU,{pathData:z5}),t===31&&U.jsx(Ac,{data:j5})]})}const A9=Rt(Ce)`
  .land-menu {
    z-index: 1000;
  }
  @media screen and (max-width: 800px) {
    .land-header .land-header-logo .land-title,
    .land-header .land-header-logo .land-divider {
      display: none;
    }
    .land-menu-drop-wrap.open .land-menu-drop {
      padding: 0;
      .land-menu {
        position: static;
        border: none;
        padding: 0;
        pointer-events: none;
      }
    }
    .land-header-nav.jMaKte .land-menu {
      pointer-events: all;
    }
  }
`;Qc.createRoot(document.getElementById("root")).render(U.jsx(Pe.StrictMode,{children:U.jsx(qU,{})}));
