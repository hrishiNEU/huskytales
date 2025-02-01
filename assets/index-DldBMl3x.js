(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function dA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pf={exports:{}},ul={},mf={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function fA(){if(Ny)return ke;Ny=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function E(B){return B===null||typeof B!="object"?null:(B=T&&B[T]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,V={};function k(B,Y,me){this.props=B,this.context=Y,this.refs=V,this.updater=me||S}k.prototype.isReactComponent={},k.prototype.setState=function(B,Y){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Y,"setState")},k.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function M(){}M.prototype=k.prototype;function U(B,Y,me){this.props=B,this.context=Y,this.refs=V,this.updater=me||S}var H=U.prototype=new M;H.constructor=U,N(H,k.prototype),H.isPureReactComponent=!0;var K=Array.isArray,se=Object.prototype.hasOwnProperty,oe={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(B,Y,me){var Se,Ce={},De=null,Fe=null;if(Y!=null)for(Se in Y.ref!==void 0&&(Fe=Y.ref),Y.key!==void 0&&(De=""+Y.key),Y)se.call(Y,Se)&&!P.hasOwnProperty(Se)&&(Ce[Se]=Y[Se]);var Be=arguments.length-2;if(Be===1)Ce.children=me;else if(1<Be){for(var He=Array(Be),St=0;St<Be;St++)He[St]=arguments[St+2];Ce.children=He}if(B&&B.defaultProps)for(Se in Be=B.defaultProps,Be)Ce[Se]===void 0&&(Ce[Se]=Be[Se]);return{$$typeof:n,type:B,key:De,ref:Fe,props:Ce,_owner:oe.current}}function R(B,Y){return{$$typeof:n,type:B.type,key:Y,ref:B.ref,props:B.props,_owner:B._owner}}function b(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function O(B){var Y={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(me){return Y[me]})}var F=/\/+/g;function x(B,Y){return typeof B=="object"&&B!==null&&B.key!=null?O(""+B.key):Y.toString(36)}function tt(B,Y,me,Se,Ce){var De=typeof B;(De==="undefined"||De==="boolean")&&(B=null);var Fe=!1;if(B===null)Fe=!0;else switch(De){case"string":case"number":Fe=!0;break;case"object":switch(B.$$typeof){case n:case e:Fe=!0}}if(Fe)return Fe=B,Ce=Ce(Fe),B=Se===""?"."+x(Fe,0):Se,K(Ce)?(me="",B!=null&&(me=B.replace(F,"$&/")+"/"),tt(Ce,Y,me,"",function(St){return St})):Ce!=null&&(b(Ce)&&(Ce=R(Ce,me+(!Ce.key||Fe&&Fe.key===Ce.key?"":(""+Ce.key).replace(F,"$&/")+"/")+B)),Y.push(Ce)),1;if(Fe=0,Se=Se===""?".":Se+":",K(B))for(var Be=0;Be<B.length;Be++){De=B[Be];var He=Se+x(De,Be);Fe+=tt(De,Y,me,He,Ce)}else if(He=E(B),typeof He=="function")for(B=He.call(B),Be=0;!(De=B.next()).done;)De=De.value,He=Se+x(De,Be++),Fe+=tt(De,Y,me,He,Ce);else if(De==="object")throw Y=String(B),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Fe}function mt(B,Y,me){if(B==null)return B;var Se=[],Ce=0;return tt(B,Se,"","",function(De){return Y.call(me,De,Ce++)}),Se}function gt(B){if(B._status===-1){var Y=B._result;Y=Y(),Y.then(function(me){(B._status===0||B._status===-1)&&(B._status=1,B._result=me)},function(me){(B._status===0||B._status===-1)&&(B._status=2,B._result=me)}),B._status===-1&&(B._status=0,B._result=Y)}if(B._status===1)return B._result.default;throw B._result}var Me={current:null},re={transition:null},ye={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:re,ReactCurrentOwner:oe};function le(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:mt,forEach:function(B,Y,me){mt(B,function(){Y.apply(this,arguments)},me)},count:function(B){var Y=0;return mt(B,function(){Y++}),Y},toArray:function(B){return mt(B,function(Y){return Y})||[]},only:function(B){if(!b(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},ke.Component=k,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=U,ke.StrictMode=i,ke.Suspense=f,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,ke.act=le,ke.cloneElement=function(B,Y,me){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Se=N({},B.props),Ce=B.key,De=B.ref,Fe=B._owner;if(Y!=null){if(Y.ref!==void 0&&(De=Y.ref,Fe=oe.current),Y.key!==void 0&&(Ce=""+Y.key),B.type&&B.type.defaultProps)var Be=B.type.defaultProps;for(He in Y)se.call(Y,He)&&!P.hasOwnProperty(He)&&(Se[He]=Y[He]===void 0&&Be!==void 0?Be[He]:Y[He])}var He=arguments.length-2;if(He===1)Se.children=me;else if(1<He){Be=Array(He);for(var St=0;St<He;St++)Be[St]=arguments[St+2];Se.children=Be}return{$$typeof:n,type:B.type,key:Ce,ref:De,props:Se,_owner:Fe}},ke.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},ke.createElement=A,ke.createFactory=function(B){var Y=A.bind(null,B);return Y.type=B,Y},ke.createRef=function(){return{current:null}},ke.forwardRef=function(B){return{$$typeof:d,render:B}},ke.isValidElement=b,ke.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:gt}},ke.memo=function(B,Y){return{$$typeof:g,type:B,compare:Y===void 0?null:Y}},ke.startTransition=function(B){var Y=re.transition;re.transition={};try{B()}finally{re.transition=Y}},ke.unstable_act=le,ke.useCallback=function(B,Y){return Me.current.useCallback(B,Y)},ke.useContext=function(B){return Me.current.useContext(B)},ke.useDebugValue=function(){},ke.useDeferredValue=function(B){return Me.current.useDeferredValue(B)},ke.useEffect=function(B,Y){return Me.current.useEffect(B,Y)},ke.useId=function(){return Me.current.useId()},ke.useImperativeHandle=function(B,Y,me){return Me.current.useImperativeHandle(B,Y,me)},ke.useInsertionEffect=function(B,Y){return Me.current.useInsertionEffect(B,Y)},ke.useLayoutEffect=function(B,Y){return Me.current.useLayoutEffect(B,Y)},ke.useMemo=function(B,Y){return Me.current.useMemo(B,Y)},ke.useReducer=function(B,Y,me){return Me.current.useReducer(B,Y,me)},ke.useRef=function(B){return Me.current.useRef(B)},ke.useState=function(B){return Me.current.useState(B)},ke.useSyncExternalStore=function(B,Y,me){return Me.current.useSyncExternalStore(B,Y,me)},ke.useTransition=function(){return Me.current.useTransition()},ke.version="18.3.1",ke}var by;function yp(){return by||(by=1,mf.exports=fA()),mf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function pA(){if(Dy)return ul;Dy=1;var n=yp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,g){var v,T={},E=null,S=null;g!==void 0&&(E=""+g),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(S=f.ref);for(v in f)i.call(f,v)&&!a.hasOwnProperty(v)&&(T[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)T[v]===void 0&&(T[v]=f[v]);return{$$typeof:e,type:d,key:E,ref:S,props:T,_owner:o.current}}return ul.Fragment=t,ul.jsx=c,ul.jsxs=c,ul}var Oy;function mA(){return Oy||(Oy=1,pf.exports=pA()),pf.exports}var J=mA(),q=yp();const Ye=dA(q);var cl={},Ly;function gA(){if(Ly)return cl;Ly=1,Object.defineProperty(cl,"__esModule",{value:!0}),cl.parse=c,cl.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function c(E,S){const N=new a,V=E.length;if(V<2)return N;const k=(S==null?void 0:S.decode)||v;let M=0;do{const U=E.indexOf("=",M);if(U===-1)break;const H=E.indexOf(";",M),K=H===-1?V:H;if(U>K){M=E.lastIndexOf(";",U-1)+1;continue}const se=d(E,M,U),oe=f(E,U,se),P=E.slice(se,oe);if(N[P]===void 0){let A=d(E,U+1,K),R=f(E,K,A);const b=k(E.slice(A,R));N[P]=b}M=K+1}while(M<V);return N}function d(E,S,N){do{const V=E.charCodeAt(S);if(V!==32&&V!==9)return S}while(++S<N);return N}function f(E,S,N){for(;S>N;){const V=E.charCodeAt(--S);if(V!==32&&V!==9)return S+1}return N}function g(E,S,N){const V=(N==null?void 0:N.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const k=V(S);if(!e.test(k))throw new TypeError(`argument val is invalid: ${S}`);let M=E+"="+k;if(!N)return M;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);M+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);M+="; Domain="+N.domain}if(N.path){if(!i.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);M+="; Path="+N.path}if(N.expires){if(!T(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);M+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(M+="; HttpOnly"),N.secure&&(M+="; Secure"),N.partitioned&&(M+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return M}function v(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function T(E){return o.call(E)==="[object Date]"}return cl}gA();/**
 * react-router v7.1.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vy="popstate";function yA(n={}){function e(i,o){let{pathname:a,search:c,hash:d}=i.location;return Uf("",{pathname:a,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Rl(o)}return vA(e,t,null,n)}function it(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Tr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _A(){return Math.random().toString(36).substring(2,10)}function My(n,e){return{usr:n.state,key:n.key,idx:e}}function Uf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?sa(e):e,state:t,key:e&&e.key||i||_A()}}function Rl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function sa(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function vA(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",f=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let k=v(),M=k==null?null:k-g;g=k,f&&f({action:d,location:V.location,delta:M})}function E(k,M){d="PUSH";let U=Uf(V.location,k,M);g=v()+1;let H=My(U,g),K=V.createHref(U);try{c.pushState(H,"",K)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;o.location.assign(K)}a&&f&&f({action:d,location:V.location,delta:1})}function S(k,M){d="REPLACE";let U=Uf(V.location,k,M);g=v();let H=My(U,g),K=V.createHref(U);c.replaceState(H,"",K),a&&f&&f({action:d,location:V.location,delta:0})}function N(k){let M=o.location.origin!=="null"?o.location.origin:o.location.href,U=typeof k=="string"?k:Rl(k);return U=U.replace(/ $/,"%20"),it(M,`No window.location.(origin|href) available to create URL for href: ${U}`),new URL(U,M)}let V={get action(){return d},get location(){return n(o,c)},listen(k){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Vy,T),f=k,()=>{o.removeEventListener(Vy,T),f=null}},createHref(k){return e(o,k)},createURL:N,encodeLocation(k){let M=N(k);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:E,replace:S,go(k){return c.go(k)}};return V}function Cv(n,e,t="/"){return wA(n,e,t,!1)}function wA(n,e,t,i){let o=typeof e=="string"?sa(e):e,a=ji(o.pathname||"/",t);if(a==null)return null;let c=kv(n);EA(c);let d=null;for(let f=0;d==null&&f<c.length;++f){let g=bA(a);d=xA(c[f],g,i)}return d}function kv(n,e=[],t=[],i=""){let o=(a,c,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};f.relativePath.startsWith("/")&&(it(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length));let g=$r([i,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(it(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),kv(a.children,e,v,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:kA(g,a.index),routesMeta:v})};return n.forEach((a,c)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,c);else for(let f of Pv(a.path))o(a,c,f)}),e}function Pv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=Pv(i.join("/")),d=[];return d.push(...c.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...c),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function EA(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:PA(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var TA=/^:[\w-]+$/,IA=3,AA=2,SA=1,RA=10,CA=-2,Uy=n=>n==="*";function kA(n,e){let t=n.split("/"),i=t.length;return t.some(Uy)&&(i+=CA),e&&(i+=AA),t.filter(o=>!Uy(o)).reduce((o,a)=>o+(TA.test(a)?IA:a===""?SA:RA),i)}function PA(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function xA(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let f=i[d],g=d===i.length-1,v=a==="/"?e:e.slice(a.length)||"/",T=Fc({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},v),E=f.route;if(!T&&g&&t&&!i[i.length-1].route.index&&(T=Fc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:$r([a,T.pathname]),pathnameBase:VA($r([a,T.pathnameBase])),route:E}),T.pathnameBase!=="/"&&(a=$r([a,T.pathnameBase]))}return c}function Fc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=NA(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:T},E)=>{if(v==="*"){let N=d[E]||"";c=a.slice(0,a.length-N.length).replace(/(.)\/+$/,"$1")}const S=d[E];return T&&!S?g[v]=void 0:g[v]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:c,pattern:n}}function NA(n,e=!1,t=!0){Tr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(i.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function bA(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function ji(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function DA(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?sa(n):n;return{pathname:t?t.startsWith("/")?t:OA(t,e):e,search:MA(i),hash:UA(o)}}function OA(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function gf(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LA(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function xv(n){let e=LA(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Nv(n,e,t,i=!1){let o;typeof n=="string"?o=sa(n):(o={...n},it(!o.pathname||!o.pathname.includes("?"),gf("?","pathname","search",o)),it(!o.pathname||!o.pathname.includes("#"),gf("#","pathname","hash",o)),it(!o.search||!o.search.includes("#"),gf("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),T-=1;o.pathname=E.join("/")}d=T>=0?e[T]:"/"}let f=DA(o,d),g=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(g||v)&&(f.pathname+="/"),f}var $r=n=>n.join("/").replace(/\/\/+/g,"/"),VA=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),MA=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,UA=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function FA(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var bv=["POST","PUT","PATCH","DELETE"];new Set(bv);var BA=["GET",...bv];new Set(BA);var oa=q.createContext(null);oa.displayName="DataRouter";var lh=q.createContext(null);lh.displayName="DataRouterState";var Dv=q.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var jA=q.createContext(new Map);jA.displayName="Fetchers";var zA=q.createContext(null);zA.displayName="Await";var Ar=q.createContext(null);Ar.displayName="Navigation";var Vl=q.createContext(null);Vl.displayName="Location";var ti=q.createContext({outlet:null,matches:[],isDataRoute:!1});ti.displayName="Route";var _p=q.createContext(null);_p.displayName="RouteError";function qA(n,{relative:e}={}){it(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=q.useContext(Ar),{hash:o,pathname:a,search:c}=Ul(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:$r([t,a])),i.createHref({pathname:d,search:c,hash:o})}function Ml(){return q.useContext(Vl)!=null}function Us(){return it(Ml(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(Vl).location}var Ov="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Lv(n){q.useContext(Ar).static||q.useLayoutEffect(n)}function Qo(){let{isDataRoute:n}=q.useContext(ti);return n?n0():HA()}function HA(){it(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let n=q.useContext(oa),{basename:e,navigator:t}=q.useContext(Ar),{matches:i}=q.useContext(ti),{pathname:o}=Us(),a=JSON.stringify(xv(i)),c=q.useRef(!1);return Lv(()=>{c.current=!0}),q.useCallback((f,g={})=>{if(Tr(c.current,Ov),!c.current)return;if(typeof f=="number"){t.go(f);return}let v=Nv(f,JSON.parse(a),o,g.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:$r([e,v.pathname])),(g.replace?t.replace:t.push)(v,g.state,g)},[e,t,a,o,n])}q.createContext(null);function Ul(n,{relative:e}={}){let{matches:t}=q.useContext(ti),{pathname:i}=Us(),o=JSON.stringify(xv(t));return q.useMemo(()=>Nv(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function WA(n,e){return Vv(n,e)}function Vv(n,e,t,i){var M;it(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=q.useContext(Ar),{matches:a}=q.useContext(ti),c=a[a.length-1],d=c?c.params:{},f=c?c.pathname:"/",g=c?c.pathnameBase:"/",v=c&&c.route;{let U=v&&v.path||"";Mv(f,!v||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let T=Us(),E;if(e){let U=typeof e=="string"?sa(e):e;it(g==="/"||((M=U.pathname)==null?void 0:M.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),E=U}else E=T;let S=E.pathname||"/",N=S;if(g!=="/"){let U=g.replace(/^\//,"").split("/");N="/"+S.replace(/^\//,"").split("/").slice(U.length).join("/")}let V=Cv(n,{pathname:N});Tr(v||V!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Tr(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=YA(V&&V.map(U=>Object.assign({},U,{params:Object.assign({},d,U.params),pathname:$r([g,o.encodeLocation?o.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:$r([g,o.encodeLocation?o.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),a,t,i);return e&&k?q.createElement(Vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},k):k}function $A(){let n=t0(),e=FA(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:a},"ErrorBoundary")," or"," ",q.createElement("code",{style:a},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:o},t):null,c)}var GA=q.createElement($A,null),KA=class extends q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?q.createElement(ti.Provider,{value:this.props.routeContext},q.createElement(_p.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QA({routeContext:n,match:e,children:t}){let i=q.useContext(oa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(ti.Provider,{value:n},t)}function YA(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let f=o.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);it(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(t)for(let f=0;f<o.length;f++){let g=o[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:v,errors:T}=t,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||E){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,g,v)=>{let T,E=!1,S=null,N=null;t&&(T=a&&g.route.id?a[g.route.id]:void 0,S=g.route.errorElement||GA,c&&(d<0&&v===0?(Mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,N=null):d===v&&(E=!0,N=g.route.hydrateFallbackElement||null)));let V=e.concat(o.slice(0,v+1)),k=()=>{let M;return T?M=S:E?M=N:g.route.Component?M=q.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=f,q.createElement(QA,{match:g,routeContext:{outlet:f,matches:V,isDataRoute:t!=null},children:M})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(KA,{location:t.location,revalidation:t.revalidation,component:S,error:T,children:k(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):k()},null)}function vp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XA(n){let e=q.useContext(oa);return it(e,vp(n)),e}function JA(n){let e=q.useContext(lh);return it(e,vp(n)),e}function ZA(n){let e=q.useContext(ti);return it(e,vp(n)),e}function wp(n){let e=ZA(n),t=e.matches[e.matches.length-1];return it(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function e0(){return wp("useRouteId")}function t0(){var i;let n=q.useContext(_p),e=JA("useRouteError"),t=wp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function n0(){let{router:n}=XA("useNavigate"),e=wp("useNavigate"),t=q.useRef(!1);return Lv(()=>{t.current=!0}),q.useCallback(async(o,a={})=>{Tr(t.current,Ov),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Fy={};function Mv(n,e,t){!e&&!Fy[n]&&(Fy[n]=!0,Tr(!1,t))}q.memo(r0);function r0({routes:n,future:e,state:t}){return Vv(n,void 0,t,e)}function Sc(n){it(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function i0({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){it(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=sa(t));let{pathname:f="/",search:g="",hash:v="",state:T=null,key:E="default"}=t,S=q.useMemo(()=>{let N=ji(f,c);return N==null?null:{location:{pathname:N,search:g,hash:v,state:T,key:E},navigationType:i}},[c,f,g,v,T,E,i]);return Tr(S!=null,`<Router basename="${c}"> is not able to match the URL "${f}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:q.createElement(Ar.Provider,{value:d},q.createElement(Vl.Provider,{children:e,value:S}))}function s0({children:n,location:e}){return WA(Ff(n),e)}function Ff(n,e=[]){let t=[];return q.Children.forEach(n,(i,o)=>{if(!q.isValidElement(i))return;let a=[...e,o];if(i.type===q.Fragment){t.push.apply(t,Ff(i.props.children,a));return}it(i.type===Sc,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),it(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ff(i.props.children,a)),t.push(c)}),t}var Rc="get",Cc="application/x-www-form-urlencoded";function uh(n){return n!=null&&typeof n.tagName=="string"}function o0(n){return uh(n)&&n.tagName.toLowerCase()==="button"}function a0(n){return uh(n)&&n.tagName.toLowerCase()==="form"}function l0(n){return uh(n)&&n.tagName.toLowerCase()==="input"}function u0(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function c0(n,e){return n.button===0&&(!e||e==="_self")&&!u0(n)}var mc=null;function h0(){if(mc===null)try{new FormData(document.createElement("form"),0),mc=!1}catch{mc=!0}return mc}var d0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yf(n){return n!=null&&!d0.has(n)?(Tr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cc}"`),null):n}function f0(n,e){let t,i,o,a,c;if(a0(n)){let d=n.getAttribute("action");i=d?ji(d,e):null,t=n.getAttribute("method")||Rc,o=yf(n.getAttribute("enctype"))||Cc,a=new FormData(n)}else if(o0(n)||l0(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||d.getAttribute("action");if(i=f?ji(f,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Rc,o=yf(n.getAttribute("formenctype"))||yf(d.getAttribute("enctype"))||Cc,a=new FormData(d,n),!h0()){let{name:g,type:v,value:T}=n;if(v==="image"){let E=g?`${g}.`:"";a.append(`${E}x`,"0"),a.append(`${E}y`,"0")}else g&&a.append(g,T)}}else{if(uh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Rc,i=null,o=Cc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function Ep(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function p0(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function m0(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function g0(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await p0(a,t);return c.links?c.links():[]}return[]}));return w0(i.flat(1).filter(m0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function By(n,e,t,i,o,a){let c=(f,g)=>t[g]?f.route.id!==t[g].route.id:!0,d=(f,g)=>{var v;return t[g].pathname!==f.pathname||((v=t[g].route.path)==null?void 0:v.endsWith("*"))&&t[g].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,g)=>c(f,g)||d(f,g)):a==="data"?e.filter((f,g)=>{var T;let v=i.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(c(f,g)||d(f,g))return!0;if(f.route.shouldRevalidate){let E=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function y0(n,e){return _0(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function _0(n){return[...new Set(n)]}function v0(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function w0(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(v0(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function E0(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function T0(){let n=q.useContext(oa);return Ep(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function I0(){let n=q.useContext(lh);return Ep(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tp=q.createContext(void 0);Tp.displayName="FrameworkContext";function Uv(){let n=q.useContext(Tp);return Ep(n,"You must render this element inside a <HydratedRouter> element"),n}function A0(n,e){let t=q.useContext(Tp),[i,o]=q.useState(!1),[a,c]=q.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:g,onMouseLeave:v,onTouchStart:T}=e,E=q.useRef(null);q.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let V=M=>{M.forEach(U=>{c(U.isIntersecting)})},k=new IntersectionObserver(V,{threshold:.5});return E.current&&k.observe(E.current),()=>{k.disconnect()}}},[n]),q.useEffect(()=>{if(i){let V=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(V)}}},[i]);let S=()=>{o(!0)},N=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,E,{}]:[a,E,{onFocus:hl(d,S),onBlur:hl(f,N),onMouseEnter:hl(g,S),onMouseLeave:hl(v,N),onTouchStart:hl(T,S)}]:[!1,E,{}]}function hl(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function S0({page:n,...e}){let{router:t}=T0(),i=q.useMemo(()=>Cv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?q.createElement(C0,{page:n,matches:i,...e}):null}function R0(n){let{manifest:e,routeModules:t}=Uv(),[i,o]=q.useState([]);return q.useEffect(()=>{let a=!1;return g0(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function C0({page:n,matches:e,...t}){let i=Us(),{manifest:o,routeModules:a}=Uv(),{loaderData:c,matches:d}=I0(),f=q.useMemo(()=>By(n,e,d,o,i,"data"),[n,e,d,o,i]),g=q.useMemo(()=>By(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=q.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let S=new Set,N=!1;if(e.forEach(k=>{var U;let M=o.routes[k.route.id];!M||!M.hasLoader||(!f.some(H=>H.route.id===k.route.id)&&k.route.id in c&&((U=a[k.route.id])!=null&&U.shouldRevalidate)||M.hasClientLoader?N=!0:S.add(k.route.id))}),S.size===0)return[];let V=E0(n);return N&&S.size>0&&V.searchParams.set("_routes",e.filter(k=>S.has(k.route.id)).map(k=>k.route.id).join(",")),[V.pathname+V.search]},[c,i,o,f,e,n,a]),T=q.useMemo(()=>y0(g,o),[g,o]),E=R0(g);return q.createElement(q.Fragment,null,v.map(S=>q.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),T.map(S=>q.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),E.map(({key:S,link:N})=>q.createElement("link",{key:S,...N})))}function k0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fv&&(window.__reactRouterVersion="7.1.2")}catch{}function P0({basename:n,children:e,window:t}){let i=q.useRef();i.current==null&&(i.current=yA({window:t,v5Compat:!0}));let o=i.current,[a,c]=q.useState({action:o.action,location:o.location}),d=q.useCallback(f=>{q.startTransition(()=>c(f))},[c]);return q.useLayoutEffect(()=>o.listen(d),[o,d]),q.createElement(i0,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jv=q.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:d,target:f,to:g,preventScrollReset:v,viewTransition:T,...E},S){let{basename:N}=q.useContext(Ar),V=typeof g=="string"&&Bv.test(g),k,M=!1;if(typeof g=="string"&&V&&(k=g,Fv))try{let R=new URL(window.location.href),b=g.startsWith("//")?new URL(R.protocol+g):new URL(g),O=ji(b.pathname,N);b.origin===R.origin&&O!=null?g=O+b.search+b.hash:M=!0}catch{Tr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=qA(g,{relative:o}),[H,K,se]=A0(i,E),oe=D0(g,{replace:c,state:d,target:f,preventScrollReset:v,relative:o,viewTransition:T});function P(R){e&&e(R),R.defaultPrevented||oe(R)}let A=q.createElement("a",{...E,...se,href:k||U,onClick:M||a?e:P,ref:k0(S,K),target:f,"data-discover":!V&&t==="render"?"true":void 0});return H&&!V?q.createElement(q.Fragment,null,A,q.createElement(S0,{page:U})):A});jv.displayName="Link";var x0=q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:f,...g},v){let T=Ul(c,{relative:g.relative}),E=Us(),S=q.useContext(lh),{navigator:N,basename:V}=q.useContext(Ar),k=S!=null&&U0(T)&&d===!0,M=N.encodeLocation?N.encodeLocation(T).pathname:T.pathname,U=E.pathname,H=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(U=U.toLowerCase(),H=H?H.toLowerCase():null,M=M.toLowerCase()),H&&V&&(H=ji(H,V)||H);const K=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let se=U===M||!o&&U.startsWith(M)&&U.charAt(K)==="/",oe=H!=null&&(H===M||!o&&H.startsWith(M)&&H.charAt(M.length)==="/"),P={isActive:se,isPending:oe,isTransitioning:k},A=se?e:void 0,R;typeof i=="function"?R=i(P):R=[i,se?"active":null,oe?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(P):a;return q.createElement(jv,{...g,"aria-current":A,className:R,ref:v,style:b,to:c,viewTransition:d},typeof f=="function"?f(P):f)});x0.displayName="NavLink";var N0=q.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Rc,action:d,onSubmit:f,relative:g,preventScrollReset:v,viewTransition:T,...E},S)=>{let N=V0(),V=M0(d,{relative:g}),k=c.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&Bv.test(d),U=H=>{if(f&&f(H),H.defaultPrevented)return;H.preventDefault();let K=H.nativeEvent.submitter,se=(K==null?void 0:K.getAttribute("formmethod"))||c;N(K||H.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:o,state:a,relative:g,preventScrollReset:v,viewTransition:T})};return q.createElement("form",{ref:S,method:k,action:V,onSubmit:i?f:U,...E,"data-discover":!M&&n==="render"?"true":void 0})});N0.displayName="Form";function b0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zv(n){let e=q.useContext(oa);return it(e,b0(n)),e}function D0(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let d=Qo(),f=Us(),g=Ul(n,{relative:a});return q.useCallback(v=>{if(c0(v,e)){v.preventDefault();let T=t!==void 0?t:Rl(f)===Rl(g);d(n,{replace:T,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[f,d,g,t,i,e,n,o,a,c])}var O0=0,L0=()=>`__${String(++O0)}__`;function V0(){let{router:n}=zv("useSubmit"),{basename:e}=q.useContext(Ar),t=e0();return q.useCallback(async(i,o={})=>{let{action:a,method:c,encType:d,formData:f,body:g}=f0(i,e);if(o.navigate===!1){let v=o.fetcherKey||L0();await n.fetch(v,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:g,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:g,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function M0(n,{relative:e}={}){let{basename:t}=q.useContext(Ar),i=q.useContext(ti);it(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Ul(n||".",{relative:e})},c=Us();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),f=d.getAll("index");if(f.some(v=>v==="")){d.delete("index"),f.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:$r([t,a.pathname])),Rl(a)}function U0(n,e={}){let t=q.useContext(Dv);it(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=zv("useViewTransitionState"),o=Ul(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=ji(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=ji(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Fc(o.pathname,c)!=null||Fc(o.pathname,a)!=null}new TextEncoder;var _f={exports:{}},ln={},vf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function F0(){return jy||(jy=1,function(n){function e(re,ye){var le=re.length;re.push(ye);e:for(;0<le;){var B=le-1>>>1,Y=re[B];if(0<o(Y,ye))re[B]=ye,re[le]=Y,le=B;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var ye=re[0],le=re.pop();if(le!==ye){re[0]=le;e:for(var B=0,Y=re.length,me=Y>>>1;B<me;){var Se=2*(B+1)-1,Ce=re[Se],De=Se+1,Fe=re[De];if(0>o(Ce,le))De<Y&&0>o(Fe,Ce)?(re[B]=Fe,re[De]=le,B=De):(re[B]=Ce,re[Se]=le,B=Se);else if(De<Y&&0>o(Fe,le))re[B]=Fe,re[De]=le,B=De;else break e}}return ye}function o(re,ye){var le=re.sortIndex-ye.sortIndex;return le!==0?le:re.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var f=[],g=[],v=1,T=null,E=3,S=!1,N=!1,V=!1,k=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(re){for(var ye=t(g);ye!==null;){if(ye.callback===null)i(g);else if(ye.startTime<=re)i(g),ye.sortIndex=ye.expirationTime,e(f,ye);else break;ye=t(g)}}function K(re){if(V=!1,H(re),!N)if(t(f)!==null)N=!0,gt(se);else{var ye=t(g);ye!==null&&Me(K,ye.startTime-re)}}function se(re,ye){N=!1,V&&(V=!1,M(A),A=-1),S=!0;var le=E;try{for(H(ye),T=t(f);T!==null&&(!(T.expirationTime>ye)||re&&!O());){var B=T.callback;if(typeof B=="function"){T.callback=null,E=T.priorityLevel;var Y=B(T.expirationTime<=ye);ye=n.unstable_now(),typeof Y=="function"?T.callback=Y:T===t(f)&&i(f),H(ye)}else i(f);T=t(f)}if(T!==null)var me=!0;else{var Se=t(g);Se!==null&&Me(K,Se.startTime-ye),me=!1}return me}finally{T=null,E=le,S=!1}}var oe=!1,P=null,A=-1,R=5,b=-1;function O(){return!(n.unstable_now()-b<R)}function F(){if(P!==null){var re=n.unstable_now();b=re;var ye=!0;try{ye=P(!0,re)}finally{ye?x():(oe=!1,P=null)}}else oe=!1}var x;if(typeof U=="function")x=function(){U(F)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,mt=tt.port2;tt.port1.onmessage=F,x=function(){mt.postMessage(null)}}else x=function(){k(F,0)};function gt(re){P=re,oe||(oe=!0,x())}function Me(re,ye){A=k(function(){re(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){N||S||(N=!0,gt(se))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(re){switch(E){case 1:case 2:case 3:var ye=3;break;default:ye=E}var le=E;E=ye;try{return re()}finally{E=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ye){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var le=E;E=re;try{return ye()}finally{E=le}},n.unstable_scheduleCallback=function(re,ye,le){var B=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?B+le:B):le=B,re){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=le+Y,re={id:v++,callback:ye,priorityLevel:re,startTime:le,expirationTime:Y,sortIndex:-1},le>B?(re.sortIndex=le,e(g,re),t(f)===null&&re===t(g)&&(V?(M(A),A=-1):V=!0,Me(K,le-B))):(re.sortIndex=Y,e(f,re),N||S||(N=!0,gt(se))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var ye=E;return function(){var le=E;E=ye;try{return re.apply(this,arguments)}finally{E=le}}}}(wf)),wf}var zy;function B0(){return zy||(zy=1,vf.exports=F0()),vf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy;function j0(){if(qy)return ln;qy=1;var n=yp(),e=B0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function E(r){return f.call(T,r)?!0:f.call(v,r)?!1:g.test(r)?T[r]=!0:(v[r]=!0,!1)}function S(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,s,l,h){if(s===null||typeof s>"u"||S(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function V(r,s,l,h,p,y,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=w}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){k[r]=new V(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];k[s]=new V(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){k[r]=new V(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){k[r]=new V(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){k[r]=new V(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){k[r]=new V(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){k[r]=new V(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){k[r]=new V(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){k[r]=new V(r,5,!1,r.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function U(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(M,U);k[s]=new V(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(M,U);k[s]=new V(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(M,U);k[s]=new V(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){k[r]=new V(r,1,!1,r.toLowerCase(),null,!1,!1)}),k.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){k[r]=new V(r,1,!1,r.toLowerCase(),null,!0,!0)});function H(r,s,l,h){var p=k.hasOwnProperty(s)?k[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(N(s,l,p,h)&&(l=null),h||p===null?E(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var K=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),oe=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),O=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),re=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,B;function Y(r){if(B===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);B=s&&s[1]||""}return`
`+B+r}var me=!1;function Se(r,s){if(!r||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){h=$}r.call(s.prototype)}else{try{throw Error()}catch($){h=$}r()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),y=h.stack.split(`
`),w=p.length-1,C=y.length-1;1<=w&&0<=C&&p[w]!==y[C];)C--;for(;1<=w&&0<=C;w--,C--)if(p[w]!==y[C]){if(w!==1||C!==1)do if(w--,C--,0>C||p[w]!==y[C]){var D=`
`+p[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?Y(r):""}function Ce(r){switch(r.tag){case 5:return Y(r.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case oe:return"Portal";case R:return"Profiler";case A:return"StrictMode";case x:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case F:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case mt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case gt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Fe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function St(r){var s=He(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,y.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Sr(r){r._valueTracker||(r._valueTracker=St(r))}function Ws(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=He(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function ii(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Xi(r,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function $s(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Be(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ma(r,s){s=s.checked,s!=null&&H(r,"checked",s,!1)}function ga(r,s){ma(r,s);var l=Be(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Gs(r,s.type,l):s.hasOwnProperty("defaultValue")&&Gs(r,s.type,Be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function eu(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Gs(r,s,l){(s!=="number"||ii(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Rr=Array.isArray;function Cr(r,s,l,h){if(r=r.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=s.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Be(l),s=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function ya(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ks(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Rr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Be(l)}}function Qs(r,s){var l=Be(s.value),h=Be(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function _a(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function yt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _t(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?yt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var kr,va=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,p)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=kr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function si(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zi=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(r){Zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ji[s]=Ji[r]})});function wa(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ji.hasOwnProperty(r)&&Ji[r]?(""+s).trim():s+"px"}function Ea(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=wa(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var Ta=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(r,s){if(s){if(Ta[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Aa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function Ys(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Xs=null,Sn=null,rr=null;function Js(r){if(r=Ka(r)){if(typeof Xs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=xu(s),Xs(r.stateNode,r.type,s))}}function ir(r){Sn?rr?rr.push(r):rr=[r]:Sn=r}function Sa(){if(Sn){var r=Sn,s=rr;if(rr=Sn=null,Js(r),s)for(r=0;r<s.length;r++)Js(s[r])}}function ts(r,s){return r(s)}function Ra(){}var Pr=!1;function Ca(r,s,l){if(Pr)return r(s,l);Pr=!0;try{return ts(r,s,l)}finally{Pr=!1,(Sn!==null||rr!==null)&&(Ra(),Sa())}}function lt(r,s){var l=r.stateNode;if(l===null)return null;var h=xu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Zs=!1;if(d)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Zs=!1}function ns(r,s,l,h,p,y,w,C,D){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(ee){this.onError(ee)}}var rs=!1,eo=null,Fn=!1,ka=null,jh={onError:function(r){rs=!0,eo=r}};function to(r,s,l,h,p,y,w,C,D){rs=!1,eo=null,ns.apply(jh,arguments)}function tu(r,s,l,h,p,y,w,C,D){if(to.apply(this,arguments),rs){if(rs){var $=eo;rs=!1,eo=null}else throw Error(t(198));Fn||(Fn=!0,ka=$)}}function Bn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function is(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jn(r){if(Bn(r)!==r)throw Error(t(188))}function nu(r){var s=r.alternate;if(!s){if(s=Bn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return jn(p),r;if(y===h)return jn(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var w=!1,C=p.child;C;){if(C===l){w=!0,l=p,h=y;break}if(C===h){w=!0,h=p,l=y;break}C=C.sibling}if(!w){for(C=y.child;C;){if(C===l){w=!0,l=y,h=p;break}if(C===h){w=!0,h=y,l=p;break}C=C.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function Pa(r){return r=nu(r),r!==null?no(r):null}function no(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=no(r);if(s!==null)return s;r=r.sibling}return null}var ro=e.unstable_scheduleCallback,xa=e.unstable_cancelCallback,ru=e.unstable_shouldYield,zh=e.unstable_requestPaint,We=e.unstable_now,iu=e.unstable_getCurrentPriorityLevel,ss=e.unstable_ImmediatePriority,oi=e.unstable_UserBlockingPriority,Rn=e.unstable_NormalPriority,Na=e.unstable_LowPriority,su=e.unstable_IdlePriority,os=null,pn=null;function ou(r){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(os,r,void 0,(r.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:lu,ba=Math.log,au=Math.LN2;function lu(r){return r>>>=0,r===0?32:31-(ba(r)/au|0)|0}var io=64,so=4194304;function ai(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function as(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,y=r.pingedLanes,w=l&268435455;if(w!==0){var C=w&~p;C!==0?h=ai(C):(y&=w,y!==0&&(h=ai(y)))}else w=l&~p,w!==0?h=ai(w):y!==0&&(h=ai(y));if(h===0)return 0;if(s!==0&&s!==h&&!(s&p)&&(p=h&-h,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if(h&4&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-Kt(s),p=1<<l,h|=r[l],s&=~p;return h}function qh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var w=31-Kt(y),C=1<<w,D=p[w];D===-1?(!(C&l)||C&h)&&(p[w]=qh(C,s)):D<=s&&(r.expiredLanes|=C),y&=~C}}function mn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ls(){var r=io;return io<<=1,!(io&4194240)&&(io=64),r}function li(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ui(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Kt(s),r[s]=l}function qe(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-Kt(l),y=1<<p;s[p]=0,h[p]=-1,r[p]=-1,l&=~y}}function ci(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-Kt(l),p=1<<h;p&s|r[h]&s&&(r[h]|=s),l&=~p}}var Ne=0;function hi(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var uu,oo,cu,hu,du,Da=!1,sr=[],bt=null,zn=null,qn=null,di=new Map,Cn=new Map,or=[],Hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(r,s){switch(r){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":di.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(s.pointerId)}}function en(r,s,l,h,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},s!==null&&(s=Ka(s),s!==null&&oo(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Wh(r,s,l,h,p){switch(s){case"focusin":return bt=en(bt,r,s,l,h,p),!0;case"dragenter":return zn=en(zn,r,s,l,h,p),!0;case"mouseover":return qn=en(qn,r,s,l,h,p),!0;case"pointerover":var y=p.pointerId;return di.set(y,en(di.get(y)||null,r,s,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,Cn.set(y,en(Cn.get(y)||null,r,s,l,h,p)),!0}return!1}function pu(r){var s=fs(r.target);if(s!==null){var l=Bn(s);if(l!==null){if(s=l.tag,s===13){if(s=is(l),s!==null){r.blockedOn=s,du(r.priority,function(){cu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Nr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=ao(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);es=h,l.target.dispatchEvent(h),es=null}else return s=Ka(l),s!==null&&oo(s),r.blockedOn=l,!1;s.shift()}return!0}function us(r,s,l){Nr(r)&&l.delete(s)}function mu(){Da=!1,bt!==null&&Nr(bt)&&(bt=null),zn!==null&&Nr(zn)&&(zn=null),qn!==null&&Nr(qn)&&(qn=null),di.forEach(us),Cn.forEach(us)}function Hn(r,s){r.blockedOn===s&&(r.blockedOn=null,Da||(Da=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mu)))}function Wn(r){function s(p){return Hn(p,r)}if(0<sr.length){Hn(sr[0],r);for(var l=1;l<sr.length;l++){var h=sr[l];h.blockedOn===r&&(h.blockedOn=null)}}for(bt!==null&&Hn(bt,r),zn!==null&&Hn(zn,r),qn!==null&&Hn(qn,r),di.forEach(s),Cn.forEach(s),l=0;l<or.length;l++)h=or[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<or.length&&(l=or[0],l.blockedOn===null);)pu(l),l.blockedOn===null&&or.shift()}var br=K.ReactCurrentBatchConfig,fi=!0;function Ze(r,s,l,h){var p=Ne,y=br.transition;br.transition=null;try{Ne=1,Oa(r,s,l,h)}finally{Ne=p,br.transition=y}}function $h(r,s,l,h){var p=Ne,y=br.transition;br.transition=null;try{Ne=4,Oa(r,s,l,h)}finally{Ne=p,br.transition=y}}function Oa(r,s,l,h){if(fi){var p=ao(r,s,l,h);if(p===null)rd(r,s,h,cs,l),fu(r,h);else if(Wh(p,r,s,l,h))h.stopPropagation();else if(fu(r,h),s&4&&-1<Hh.indexOf(r)){for(;p!==null;){var y=Ka(p);if(y!==null&&uu(y),y=ao(r,s,l,h),y===null&&rd(r,s,h,cs,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else rd(r,s,h,null,l)}}var cs=null;function ao(r,s,l,h){if(cs=null,r=Ys(h),r=fs(r),r!==null)if(s=Bn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=is(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return cs=r,null}function La(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iu()){case ss:return 1;case oi:return 4;case Rn:case Na:return 16;case su:return 536870912;default:return 16}default:return 16}}var gn=null,lo=null,tn=null;function Va(){if(tn)return tn;var r,s=lo,l=s.length,h,p="value"in gn?gn.value:gn.textContent,y=p.length;for(r=0;r<l&&s[r]===p[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===p[y-h];h++);return tn=p.slice(r,1<h?1-h:void 0)}function uo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ar(){return!0}function Ma(){return!1}function Dt(r){function s(l,h,p,y,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(l=r[C],this[C]=l?l(y):y[C]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?ar:Ma,this.isPropagationStopped=Ma,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=Dt($n),lr=le({},$n,{view:0,detail:0}),Gh=Dt(lr),ho,Dr,pi,hs=le({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==pi&&(pi&&r.type==="mousemove"?(ho=r.screenX-pi.screenX,Dr=r.screenY-pi.screenY):Dr=ho=0,pi=r),ho)},movementY:function(r){return"movementY"in r?r.movementY:Dr}}),fo=Dt(hs),Ua=le({},hs,{dataTransfer:0}),gu=Dt(Ua),po=le({},lr,{relatedTarget:0}),mo=Dt(po),yu=le({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Or=Dt(yu),_u=le({},$n,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),vu=Dt(_u),wu=le({},$n,{data:0}),Fa=Dt(wu),go={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Eu[r])?!!s[r]:!1}function ur(){return Tu}var u=le({},lr,{key:function(r){if(r.key){var s=go[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=uo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(r){return r.type==="keypress"?uo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?uo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Dt(u),_=le({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Dt(_),j=le({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),G=Dt(j),ie=le({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),ze=Dt(ie),vt=le({},hs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Dt(vt),Rt=[9,13,27,32],ht=d&&"CompositionEvent"in window,kn=null;d&&"documentMode"in document&&(kn=document.documentMode);var yn=d&&"TextEvent"in window&&!kn,ds=d&&(!ht||kn&&8<kn&&11>=kn),yo=" ",Sm=!1;function Rm(r,s){switch(r){case"keyup":return Rt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var _o=!1;function cI(r,s){switch(r){case"compositionend":return Cm(s);case"keypress":return s.which!==32?null:(Sm=!0,yo);case"textInput":return r=s.data,r===yo&&Sm?null:r;default:return null}}function hI(r,s){if(_o)return r==="compositionend"||!ht&&Rm(r,s)?(r=Va(),tn=lo=gn=null,_o=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ds&&s.locale!=="ko"?null:s.data;default:return null}}var dI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!dI[r.type]:s==="textarea"}function Pm(r,s,l,h){ir(h),s=Cu(s,"onChange"),0<s.length&&(l=new co("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Ba=null,ja=null;function fI(r){Gm(r,0)}function Iu(r){var s=Io(r);if(Ws(s))return r}function pI(r,s){if(r==="change")return s}var xm=!1;if(d){var Kh;if(d){var Qh="oninput"in document;if(!Qh){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),Qh=typeof Nm.oninput=="function"}Kh=Qh}else Kh=!1;xm=Kh&&(!document.documentMode||9<document.documentMode)}function bm(){Ba&&(Ba.detachEvent("onpropertychange",Dm),ja=Ba=null)}function Dm(r){if(r.propertyName==="value"&&Iu(ja)){var s=[];Pm(s,ja,r,Ys(r)),Ca(fI,s)}}function mI(r,s,l){r==="focusin"?(bm(),Ba=s,ja=l,Ba.attachEvent("onpropertychange",Dm)):r==="focusout"&&bm()}function gI(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Iu(ja)}function yI(r,s){if(r==="click")return Iu(s)}function _I(r,s){if(r==="input"||r==="change")return Iu(s)}function vI(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Gn=typeof Object.is=="function"?Object.is:vI;function za(r,s){if(Gn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!Gn(r[p],s[p]))return!1}return!0}function Om(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Lm(r,s){var l=Om(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Om(l)}}function Vm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Vm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mm(){for(var r=window,s=ii();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ii(r.document)}return s}function Yh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function wI(r){var s=Mm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Vm(l.ownerDocument.documentElement,l)){if(h!==null&&Yh(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!r.extend&&y>h&&(p=h,h=y,y=p),p=Lm(l,y);var w=Lm(l,h);p&&w&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),y>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var EI=d&&"documentMode"in document&&11>=document.documentMode,vo=null,Xh=null,qa=null,Jh=!1;function Um(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Jh||vo==null||vo!==ii(h)||(h=vo,"selectionStart"in h&&Yh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),qa&&za(qa,h)||(qa=h,h=Cu(Xh,"onSelect"),0<h.length&&(s=new co("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=vo)))}function Au(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var wo={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},Zh={},Fm={};d&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function Su(r){if(Zh[r])return Zh[r];if(!wo[r])return r;var s=wo[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Fm)return Zh[r]=s[l];return r}var Bm=Su("animationend"),jm=Su("animationiteration"),zm=Su("animationstart"),qm=Su("transitionend"),Hm=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){Hm.set(r,s),a(s,[r])}for(var ed=0;ed<Wm.length;ed++){var td=Wm[ed],TI=td.toLowerCase(),II=td[0].toUpperCase()+td.slice(1);mi(TI,"on"+II)}mi(Bm,"onAnimationEnd"),mi(jm,"onAnimationIteration"),mi(zm,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(qm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function $m(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,tu(h,s,void 0,r),r.currentTarget=null}function Gm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var y=void 0;if(s)for(var w=h.length-1;0<=w;w--){var C=h[w],D=C.instance,$=C.currentTarget;if(C=C.listener,D!==y&&p.isPropagationStopped())break e;$m(p,C,$),y=D}else for(w=0;w<h.length;w++){if(C=h[w],D=C.instance,$=C.currentTarget,C=C.listener,D!==y&&p.isPropagationStopped())break e;$m(p,C,$),y=D}}}if(Fn)throw r=ka,Fn=!1,ka=null,r}function Ge(r,s){var l=s[ud];l===void 0&&(l=s[ud]=new Set);var h=r+"__bubble";l.has(h)||(Km(s,r,2,!1),l.add(h))}function nd(r,s,l){var h=0;s&&(h|=4),Km(l,r,h,s)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Wa(r){if(!r[Ru]){r[Ru]=!0,i.forEach(function(l){l!=="selectionchange"&&(AI.has(l)||nd(l,!1,r),nd(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ru]||(s[Ru]=!0,nd("selectionchange",!1,s))}}function Km(r,s,l,h){switch(La(s)){case 1:var p=Ze;break;case 4:p=$h;break;default:p=Oa}l=p.bind(null,s,l,r),p=void 0,!Zs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(s,l,{capture:!0,passive:p}):r.addEventListener(s,l,!0):p!==void 0?r.addEventListener(s,l,{passive:p}):r.addEventListener(s,l,!1)}function rd(r,s,l,h,p){var y=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===p||C.nodeType===8&&C.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;w=w.return}for(;C!==null;){if(w=fs(C),w===null)return;if(D=w.tag,D===5||D===6){h=y=w;continue e}C=C.parentNode}}h=h.return}Ca(function(){var $=y,ee=Ys(l),te=[];e:{var Z=Hm.get(r);if(Z!==void 0){var ae=co,de=r;switch(r){case"keypress":if(uo(l)===0)break e;case"keydown":case"keyup":ae=m;break;case"focusin":de="focus",ae=mo;break;case"focusout":de="blur",ae=mo;break;case"beforeblur":case"afterblur":ae=mo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=G;break;case Bm:case jm:case zm:ae=Or;break;case qm:ae=ze;break;case"scroll":ae=Gh;break;case"wheel":ae=Oe;break;case"copy":case"cut":case"paste":ae=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=I}var fe=(s&4)!==0,ut=!fe&&r==="scroll",z=fe?Z!==null?Z+"Capture":null:Z;fe=[];for(var L=$,W;L!==null;){W=L;var ne=W.stateNode;if(W.tag===5&&ne!==null&&(W=ne,z!==null&&(ne=lt(L,z),ne!=null&&fe.push($a(L,ne,W)))),ut)break;L=L.return}0<fe.length&&(Z=new ae(Z,de,null,l,ee),te.push({event:Z,listeners:fe}))}}if(!(s&7)){e:{if(Z=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",Z&&l!==es&&(de=l.relatedTarget||l.fromElement)&&(fs(de)||de[Lr]))break e;if((ae||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,ae?(de=l.relatedTarget||l.toElement,ae=$,de=de?fs(de):null,de!==null&&(ut=Bn(de),de!==ut||de.tag!==5&&de.tag!==6)&&(de=null)):(ae=null,de=$),ae!==de)){if(fe=fo,ne="onMouseLeave",z="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(fe=I,ne="onPointerLeave",z="onPointerEnter",L="pointer"),ut=ae==null?Z:Io(ae),W=de==null?Z:Io(de),Z=new fe(ne,L+"leave",ae,l,ee),Z.target=ut,Z.relatedTarget=W,ne=null,fs(ee)===$&&(fe=new fe(z,L+"enter",de,l,ee),fe.target=W,fe.relatedTarget=ut,ne=fe),ut=ne,ae&&de)t:{for(fe=ae,z=de,L=0,W=fe;W;W=Eo(W))L++;for(W=0,ne=z;ne;ne=Eo(ne))W++;for(;0<L-W;)fe=Eo(fe),L--;for(;0<W-L;)z=Eo(z),W--;for(;L--;){if(fe===z||z!==null&&fe===z.alternate)break t;fe=Eo(fe),z=Eo(z)}fe=null}else fe=null;ae!==null&&Qm(te,Z,ae,fe,!1),de!==null&&ut!==null&&Qm(te,ut,de,fe,!0)}}e:{if(Z=$?Io($):window,ae=Z.nodeName&&Z.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Z.type==="file")var pe=pI;else if(km(Z))if(xm)pe=_I;else{pe=gI;var _e=mI}else(ae=Z.nodeName)&&ae.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(pe=yI);if(pe&&(pe=pe(r,$))){Pm(te,pe,l,ee);break e}_e&&_e(r,Z,$),r==="focusout"&&(_e=Z._wrapperState)&&_e.controlled&&Z.type==="number"&&Gs(Z,"number",Z.value)}switch(_e=$?Io($):window,r){case"focusin":(km(_e)||_e.contentEditable==="true")&&(vo=_e,Xh=$,qa=null);break;case"focusout":qa=Xh=vo=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,Um(te,l,ee);break;case"selectionchange":if(EI)break;case"keydown":case"keyup":Um(te,l,ee)}var ve;if(ht)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else _o?Rm(r,l)&&(Ee="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Ee="onCompositionStart");Ee&&(ds&&l.locale!=="ko"&&(_o||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&_o&&(ve=Va()):(gn=ee,lo="value"in gn?gn.value:gn.textContent,_o=!0)),_e=Cu($,Ee),0<_e.length&&(Ee=new Fa(Ee,r,null,l,ee),te.push({event:Ee,listeners:_e}),ve?Ee.data=ve:(ve=Cm(l),ve!==null&&(Ee.data=ve)))),(ve=yn?cI(r,l):hI(r,l))&&($=Cu($,"onBeforeInput"),0<$.length&&(ee=new Fa("onBeforeInput","beforeinput",null,l,ee),te.push({event:ee,listeners:$}),ee.data=ve))}Gm(te,s)})}function $a(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Cu(r,s){for(var l=s+"Capture",h=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=lt(r,l),y!=null&&h.unshift($a(r,y,p)),y=lt(r,s),y!=null&&h.push($a(r,y,p))),r=r.return}return h}function Eo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Qm(r,s,l,h,p){for(var y=s._reactName,w=[];l!==null&&l!==h;){var C=l,D=C.alternate,$=C.stateNode;if(D!==null&&D===h)break;C.tag===5&&$!==null&&(C=$,p?(D=lt(l,y),D!=null&&w.unshift($a(l,D,C))):p||(D=lt(l,y),D!=null&&w.push($a(l,D,C)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var SI=/\r\n?/g,RI=/\u0000|\uFFFD/g;function Ym(r){return(typeof r=="string"?r:""+r).replace(SI,`
`).replace(RI,"")}function ku(r,s,l){if(s=Ym(s),Ym(r)!==s&&l)throw Error(t(425))}function Pu(){}var id=null,sd=null;function od(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,CI=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(r){return Xm.resolve(null).then(r).catch(PI)}:ad;function PI(r){setTimeout(function(){throw r})}function ld(r,s){var l=s,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),Wn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Wn(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Jm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var To=Math.random().toString(36).slice(2),cr="__reactFiber$"+To,Ga="__reactProps$"+To,Lr="__reactContainer$"+To,ud="__reactEvents$"+To,xI="__reactListeners$"+To,NI="__reactHandles$"+To;function fs(r){var s=r[cr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Lr]||l[cr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Jm(r);r!==null;){if(l=r[cr])return l;r=Jm(r)}return s}r=l,l=r.parentNode}return null}function Ka(r){return r=r[cr]||r[Lr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function xu(r){return r[Ga]||null}var cd=[],Ao=-1;function yi(r){return{current:r}}function Ke(r){0>Ao||(r.current=cd[Ao],cd[Ao]=null,Ao--)}function $e(r,s){Ao++,cd[Ao]=r.current,r.current=s}var _i={},Ft=yi(_i),nn=yi(!1),ps=_i;function So(r,s){var l=r.type.contextTypes;if(!l)return _i;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function rn(r){return r=r.childContextTypes,r!=null}function Nu(){Ke(nn),Ke(Ft)}function Zm(r,s,l){if(Ft.current!==_i)throw Error(t(168));$e(Ft,s),$e(nn,l)}function eg(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,Fe(r)||"Unknown",p));return le({},l,h)}function bu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||_i,ps=Ft.current,$e(Ft,r),$e(nn,nn.current),!0}function tg(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=eg(r,s,ps),h.__reactInternalMemoizedMergedChildContext=r,Ke(nn),Ke(Ft),$e(Ft,r)):Ke(nn),$e(nn,l)}var Vr=null,Du=!1,hd=!1;function ng(r){Vr===null?Vr=[r]:Vr.push(r)}function bI(r){Du=!0,ng(r)}function vi(){if(!hd&&Vr!==null){hd=!0;var r=0,s=Ne;try{var l=Vr;for(Ne=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Vr=null,Du=!1}catch(p){throw Vr!==null&&(Vr=Vr.slice(r+1)),ro(ss,vi),p}finally{Ne=s,hd=!1}}return null}var Ro=[],Co=0,Ou=null,Lu=0,Pn=[],xn=0,ms=null,Mr=1,Ur="";function gs(r,s){Ro[Co++]=Lu,Ro[Co++]=Ou,Ou=r,Lu=s}function rg(r,s,l){Pn[xn++]=Mr,Pn[xn++]=Ur,Pn[xn++]=ms,ms=r;var h=Mr;r=Ur;var p=32-Kt(h)-1;h&=~(1<<p),l+=1;var y=32-Kt(s)+p;if(30<y){var w=p-p%5;y=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Mr=1<<32-Kt(s)+p|l<<p|h,Ur=y+r}else Mr=1<<y|l<<p|h,Ur=r}function dd(r){r.return!==null&&(gs(r,1),rg(r,1,0))}function fd(r){for(;r===Ou;)Ou=Ro[--Co],Ro[Co]=null,Lu=Ro[--Co],Ro[Co]=null;for(;r===ms;)ms=Pn[--xn],Pn[xn]=null,Ur=Pn[--xn],Pn[xn]=null,Mr=Pn[--xn],Pn[xn]=null}var _n=null,vn=null,et=!1,Kn=null;function ig(r,s){var l=On(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function sg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,_n=r,vn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,_n=r,vn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ms!==null?{id:Mr,overflow:Ur}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=On(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,_n=r,vn=null,!0):!1;default:return!1}}function pd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function md(r){if(et){var s=vn;if(s){var l=s;if(!sg(r,s)){if(pd(r))throw Error(t(418));s=gi(l.nextSibling);var h=_n;s&&sg(r,s)?ig(h,l):(r.flags=r.flags&-4097|2,et=!1,_n=r)}}else{if(pd(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,_n=r}}}function og(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;_n=r}function Vu(r){if(r!==_n)return!1;if(!et)return og(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!od(r.type,r.memoizedProps)),s&&(s=vn)){if(pd(r))throw ag(),Error(t(418));for(;s;)ig(r,s),s=gi(s.nextSibling)}if(og(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){vn=gi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}vn=null}}else vn=_n?gi(r.stateNode.nextSibling):null;return!0}function ag(){for(var r=vn;r;)r=gi(r.nextSibling)}function ko(){vn=_n=null,et=!1}function gd(r){Kn===null?Kn=[r]:Kn.push(r)}var DI=K.ReactCurrentBatchConfig;function Qa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(w){var C=p.refs;w===null?delete C[y]:C[y]=w},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Mu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function lg(r){var s=r._init;return s(r._payload)}function ug(r){function s(z,L){if(r){var W=z.deletions;W===null?(z.deletions=[L],z.flags|=16):W.push(L)}}function l(z,L){if(!r)return null;for(;L!==null;)s(z,L),L=L.sibling;return null}function h(z,L){for(z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function p(z,L){return z=Ci(z,L),z.index=0,z.sibling=null,z}function y(z,L,W){return z.index=W,r?(W=z.alternate,W!==null?(W=W.index,W<L?(z.flags|=2,L):W):(z.flags|=2,L)):(z.flags|=1048576,L)}function w(z){return r&&z.alternate===null&&(z.flags|=2),z}function C(z,L,W,ne){return L===null||L.tag!==6?(L=lf(W,z.mode,ne),L.return=z,L):(L=p(L,W),L.return=z,L)}function D(z,L,W,ne){var pe=W.type;return pe===P?ee(z,L,W.props.children,ne,W.key):L!==null&&(L.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===gt&&lg(pe)===L.type)?(ne=p(L,W.props),ne.ref=Qa(z,L,W),ne.return=z,ne):(ne=ac(W.type,W.key,W.props,null,z.mode,ne),ne.ref=Qa(z,L,W),ne.return=z,ne)}function $(z,L,W,ne){return L===null||L.tag!==4||L.stateNode.containerInfo!==W.containerInfo||L.stateNode.implementation!==W.implementation?(L=uf(W,z.mode,ne),L.return=z,L):(L=p(L,W.children||[]),L.return=z,L)}function ee(z,L,W,ne,pe){return L===null||L.tag!==7?(L=As(W,z.mode,ne,pe),L.return=z,L):(L=p(L,W),L.return=z,L)}function te(z,L,W){if(typeof L=="string"&&L!==""||typeof L=="number")return L=lf(""+L,z.mode,W),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case se:return W=ac(L.type,L.key,L.props,null,z.mode,W),W.ref=Qa(z,null,L),W.return=z,W;case oe:return L=uf(L,z.mode,W),L.return=z,L;case gt:var ne=L._init;return te(z,ne(L._payload),W)}if(Rr(L)||ye(L))return L=As(L,z.mode,W,null),L.return=z,L;Mu(z,L)}return null}function Z(z,L,W,ne){var pe=L!==null?L.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return pe!==null?null:C(z,L,""+W,ne);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case se:return W.key===pe?D(z,L,W,ne):null;case oe:return W.key===pe?$(z,L,W,ne):null;case gt:return pe=W._init,Z(z,L,pe(W._payload),ne)}if(Rr(W)||ye(W))return pe!==null?null:ee(z,L,W,ne,null);Mu(z,W)}return null}function ae(z,L,W,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return z=z.get(W)||null,C(L,z,""+ne,pe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case se:return z=z.get(ne.key===null?W:ne.key)||null,D(L,z,ne,pe);case oe:return z=z.get(ne.key===null?W:ne.key)||null,$(L,z,ne,pe);case gt:var _e=ne._init;return ae(z,L,W,_e(ne._payload),pe)}if(Rr(ne)||ye(ne))return z=z.get(W)||null,ee(L,z,ne,pe,null);Mu(L,ne)}return null}function de(z,L,W,ne){for(var pe=null,_e=null,ve=L,Ee=L=0,Pt=null;ve!==null&&Ee<W.length;Ee++){ve.index>Ee?(Pt=ve,ve=null):Pt=ve.sibling;var Ue=Z(z,ve,W[Ee],ne);if(Ue===null){ve===null&&(ve=Pt);break}r&&ve&&Ue.alternate===null&&s(z,ve),L=y(Ue,L,Ee),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue,ve=Pt}if(Ee===W.length)return l(z,ve),et&&gs(z,Ee),pe;if(ve===null){for(;Ee<W.length;Ee++)ve=te(z,W[Ee],ne),ve!==null&&(L=y(ve,L,Ee),_e===null?pe=ve:_e.sibling=ve,_e=ve);return et&&gs(z,Ee),pe}for(ve=h(z,ve);Ee<W.length;Ee++)Pt=ae(ve,z,Ee,W[Ee],ne),Pt!==null&&(r&&Pt.alternate!==null&&ve.delete(Pt.key===null?Ee:Pt.key),L=y(Pt,L,Ee),_e===null?pe=Pt:_e.sibling=Pt,_e=Pt);return r&&ve.forEach(function(ki){return s(z,ki)}),et&&gs(z,Ee),pe}function fe(z,L,W,ne){var pe=ye(W);if(typeof pe!="function")throw Error(t(150));if(W=pe.call(W),W==null)throw Error(t(151));for(var _e=pe=null,ve=L,Ee=L=0,Pt=null,Ue=W.next();ve!==null&&!Ue.done;Ee++,Ue=W.next()){ve.index>Ee?(Pt=ve,ve=null):Pt=ve.sibling;var ki=Z(z,ve,Ue.value,ne);if(ki===null){ve===null&&(ve=Pt);break}r&&ve&&ki.alternate===null&&s(z,ve),L=y(ki,L,Ee),_e===null?pe=ki:_e.sibling=ki,_e=ki,ve=Pt}if(Ue.done)return l(z,ve),et&&gs(z,Ee),pe;if(ve===null){for(;!Ue.done;Ee++,Ue=W.next())Ue=te(z,Ue.value,ne),Ue!==null&&(L=y(Ue,L,Ee),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue);return et&&gs(z,Ee),pe}for(ve=h(z,ve);!Ue.done;Ee++,Ue=W.next())Ue=ae(ve,z,Ee,Ue.value,ne),Ue!==null&&(r&&Ue.alternate!==null&&ve.delete(Ue.key===null?Ee:Ue.key),L=y(Ue,L,Ee),_e===null?pe=Ue:_e.sibling=Ue,_e=Ue);return r&&ve.forEach(function(hA){return s(z,hA)}),et&&gs(z,Ee),pe}function ut(z,L,W,ne){if(typeof W=="object"&&W!==null&&W.type===P&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case se:e:{for(var pe=W.key,_e=L;_e!==null;){if(_e.key===pe){if(pe=W.type,pe===P){if(_e.tag===7){l(z,_e.sibling),L=p(_e,W.props.children),L.return=z,z=L;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===gt&&lg(pe)===_e.type){l(z,_e.sibling),L=p(_e,W.props),L.ref=Qa(z,_e,W),L.return=z,z=L;break e}l(z,_e);break}else s(z,_e);_e=_e.sibling}W.type===P?(L=As(W.props.children,z.mode,ne,W.key),L.return=z,z=L):(ne=ac(W.type,W.key,W.props,null,z.mode,ne),ne.ref=Qa(z,L,W),ne.return=z,z=ne)}return w(z);case oe:e:{for(_e=W.key;L!==null;){if(L.key===_e)if(L.tag===4&&L.stateNode.containerInfo===W.containerInfo&&L.stateNode.implementation===W.implementation){l(z,L.sibling),L=p(L,W.children||[]),L.return=z,z=L;break e}else{l(z,L);break}else s(z,L);L=L.sibling}L=uf(W,z.mode,ne),L.return=z,z=L}return w(z);case gt:return _e=W._init,ut(z,L,_e(W._payload),ne)}if(Rr(W))return de(z,L,W,ne);if(ye(W))return fe(z,L,W,ne);Mu(z,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,L!==null&&L.tag===6?(l(z,L.sibling),L=p(L,W),L.return=z,z=L):(l(z,L),L=lf(W,z.mode,ne),L.return=z,z=L),w(z)):l(z,L)}return ut}var Po=ug(!0),cg=ug(!1),Uu=yi(null),Fu=null,xo=null,yd=null;function _d(){yd=xo=Fu=null}function vd(r){var s=Uu.current;Ke(Uu),r._currentValue=s}function wd(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function No(r,s){Fu=r,yd=xo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(sn=!0),r.firstContext=null)}function Nn(r){var s=r._currentValue;if(yd!==r)if(r={context:r,memoizedValue:s,next:null},xo===null){if(Fu===null)throw Error(t(308));xo=r,Fu.dependencies={lanes:0,firstContext:r}}else xo=xo.next=r;return s}var ys=null;function Ed(r){ys===null?ys=[r]:ys.push(r)}function hg(r,s,l,h){var p=s.interleaved;return p===null?(l.next=l,Ed(s)):(l.next=p.next,p.next=l),s.interleaved=l,Fr(r,h)}function Fr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var wi=!1;function Td(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Ve&2){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Fr(r,l)}return p=h.interleaved,p===null?(s.next=s,Ed(h)):(s.next=p.next,p.next=s),h.interleaved=s,Fr(r,l)}function Bu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}function fg(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=w:y=y.next=w,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function ju(r,s,l,h){var p=r.updateQueue;wi=!1;var y=p.firstBaseUpdate,w=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var D=C,$=D.next;D.next=null,w===null?y=$:w.next=$,w=D;var ee=r.alternate;ee!==null&&(ee=ee.updateQueue,C=ee.lastBaseUpdate,C!==w&&(C===null?ee.firstBaseUpdate=$:C.next=$,ee.lastBaseUpdate=D))}if(y!==null){var te=p.baseState;w=0,ee=$=D=null,C=y;do{var Z=C.lane,ae=C.eventTime;if((h&Z)===Z){ee!==null&&(ee=ee.next={eventTime:ae,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var de=r,fe=C;switch(Z=s,ae=l,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){te=de.call(ae,te,Z);break e}te=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,Z=typeof de=="function"?de.call(ae,te,Z):de,Z==null)break e;te=le({},te,Z);break e;case 2:wi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,Z=p.effects,Z===null?p.effects=[C]:Z.push(C))}else ae={eventTime:ae,lane:Z,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ee===null?($=ee=ae,D=te):ee=ee.next=ae,w|=Z;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;Z=C,C=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(ee===null&&(D=te),p.baseState=D,p.firstBaseUpdate=$,p.lastBaseUpdate=ee,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);ws|=w,r.lanes=w,r.memoizedState=te}}function pg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Ya={},hr=yi(Ya),Xa=yi(Ya),Ja=yi(Ya);function _s(r){if(r===Ya)throw Error(t(174));return r}function Id(r,s){switch($e(Ja,s),$e(Xa,r),$e(hr,Ya),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:_t(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=_t(s,r)}Ke(hr),$e(hr,s)}function bo(){Ke(hr),Ke(Xa),Ke(Ja)}function mg(r){_s(Ja.current);var s=_s(hr.current),l=_t(s,r.type);s!==l&&($e(Xa,r),$e(hr,l))}function Ad(r){Xa.current===r&&(Ke(hr),Ke(Xa))}var nt=yi(0);function zu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Sd=[];function Rd(){for(var r=0;r<Sd.length;r++)Sd[r]._workInProgressVersionPrimary=null;Sd.length=0}var qu=K.ReactCurrentDispatcher,Cd=K.ReactCurrentBatchConfig,vs=0,rt=null,wt=null,Ct=null,Hu=!1,Za=!1,el=0,OI=0;function Bt(){throw Error(t(321))}function kd(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Gn(r[l],s[l]))return!1;return!0}function Pd(r,s,l,h,p,y){if(vs=y,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,qu.current=r===null||r.memoizedState===null?UI:FI,r=l(h,p),Za){y=0;do{if(Za=!1,el=0,25<=y)throw Error(t(301));y+=1,Ct=wt=null,s.updateQueue=null,qu.current=BI,r=l(h,p)}while(Za)}if(qu.current=Gu,s=wt!==null&&wt.next!==null,vs=0,Ct=wt=rt=null,Hu=!1,s)throw Error(t(300));return r}function xd(){var r=el!==0;return el=0,r}function dr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function bn(){if(wt===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=wt.next;var s=Ct===null?rt.memoizedState:Ct.next;if(s!==null)Ct=s,wt=r;else{if(r===null)throw Error(t(310));wt=r,r={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function tl(r,s){return typeof s=="function"?s(r):s}function Nd(r){var s=bn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=wt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var w=p.next;p.next=y.next,y.next=w}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var C=w=null,D=null,$=y;do{var ee=$.lane;if((vs&ee)===ee)D!==null&&(D=D.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:r(h,$.action);else{var te={lane:ee,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};D===null?(C=D=te,w=h):D=D.next=te,rt.lanes|=ee,ws|=ee}$=$.next}while($!==null&&$!==y);D===null?w=h:D.next=C,Gn(h,s.memoizedState)||(sn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=D,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do y=p.lane,rt.lanes|=y,ws|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function bd(r){var s=bn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do y=r(y,w.action),w=w.next;while(w!==p);Gn(y,s.memoizedState)||(sn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,h]}function gg(){}function yg(r,s){var l=rt,h=bn(),p=s(),y=!Gn(h.memoizedState,p);if(y&&(h.memoizedState=p,sn=!0),h=h.queue,Dd(wg.bind(null,l,h,r),[r]),h.getSnapshot!==s||y||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,nl(9,vg.bind(null,l,h,p,s),void 0,null),kt===null)throw Error(t(349));vs&30||_g(l,s,p)}return p}function _g(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function vg(r,s,l,h){s.value=l,s.getSnapshot=h,Eg(s)&&Tg(r)}function wg(r,s,l){return l(function(){Eg(s)&&Tg(r)})}function Eg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Gn(r,l)}catch{return!0}}function Tg(r){var s=Fr(r,1);s!==null&&Jn(s,r,1,-1)}function Ig(r){var s=dr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:r},s.queue=r,r=r.dispatch=MI.bind(null,rt,r),[s.memoizedState,r]}function nl(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function Ag(){return bn().memoizedState}function Wu(r,s,l,h){var p=dr();rt.flags|=r,p.memoizedState=nl(1|s,l,void 0,h===void 0?null:h)}function $u(r,s,l,h){var p=bn();h=h===void 0?null:h;var y=void 0;if(wt!==null){var w=wt.memoizedState;if(y=w.destroy,h!==null&&kd(h,w.deps)){p.memoizedState=nl(s,l,y,h);return}}rt.flags|=r,p.memoizedState=nl(1|s,l,y,h)}function Sg(r,s){return Wu(8390656,8,r,s)}function Dd(r,s){return $u(2048,8,r,s)}function Rg(r,s){return $u(4,2,r,s)}function Cg(r,s){return $u(4,4,r,s)}function kg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Pg(r,s,l){return l=l!=null?l.concat([r]):null,$u(4,4,kg.bind(null,s,r),l)}function Od(){}function xg(r,s){var l=bn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&kd(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function Ng(r,s){var l=bn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&kd(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function bg(r,s,l){return vs&21?(Gn(l,s)||(l=ls(),rt.lanes|=l,ws|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,sn=!0),r.memoizedState=l)}function LI(r,s){var l=Ne;Ne=l!==0&&4>l?l:4,r(!0);var h=Cd.transition;Cd.transition={};try{r(!1),s()}finally{Ne=l,Cd.transition=h}}function Dg(){return bn().memoizedState}function VI(r,s,l){var h=Si(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Og(r))Lg(s,l);else if(l=hg(r,s,l,h),l!==null){var p=Xt();Jn(l,r,h,p),Vg(l,s,h)}}function MI(r,s,l){var h=Si(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Og(r))Lg(s,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var w=s.lastRenderedState,C=y(w,l);if(p.hasEagerState=!0,p.eagerState=C,Gn(C,w)){var D=s.interleaved;D===null?(p.next=p,Ed(s)):(p.next=D.next,D.next=p),s.interleaved=p;return}}catch{}finally{}l=hg(r,s,p,h),l!==null&&(p=Xt(),Jn(l,r,h,p),Vg(l,s,h))}}function Og(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function Lg(r,s){Za=Hu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Vg(r,s,l){if(l&4194240){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,ci(r,l)}}var Gu={readContext:Nn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},UI={readContext:Nn,useCallback:function(r,s){return dr().memoizedState=[r,s===void 0?null:s],r},useContext:Nn,useEffect:Sg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Wu(4194308,4,kg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Wu(4,2,r,s)},useMemo:function(r,s){var l=dr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=dr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=VI.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=dr();return r={current:r},s.memoizedState=r},useState:Ig,useDebugValue:Od,useDeferredValue:function(r){return dr().memoizedState=r},useTransition:function(){var r=Ig(!1),s=r[0];return r=LI.bind(null,r[1]),dr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=rt,p=dr();if(et){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),kt===null)throw Error(t(349));vs&30||_g(h,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,Sg(wg.bind(null,h,y,r),[r]),h.flags|=2048,nl(9,vg.bind(null,h,y,l,s),void 0,null),l},useId:function(){var r=dr(),s=kt.identifierPrefix;if(et){var l=Ur,h=Mr;l=(h&~(1<<32-Kt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=el++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=OI++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},FI={readContext:Nn,useCallback:xg,useContext:Nn,useEffect:Dd,useImperativeHandle:Pg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:Nd,useRef:Ag,useState:function(){return Nd(tl)},useDebugValue:Od,useDeferredValue:function(r){var s=bn();return bg(s,wt.memoizedState,r)},useTransition:function(){var r=Nd(tl)[0],s=bn().memoizedState;return[r,s]},useMutableSource:gg,useSyncExternalStore:yg,useId:Dg,unstable_isNewReconciler:!1},BI={readContext:Nn,useCallback:xg,useContext:Nn,useEffect:Dd,useImperativeHandle:Pg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:bd,useRef:Ag,useState:function(){return bd(tl)},useDebugValue:Od,useDeferredValue:function(r){var s=bn();return wt===null?s.memoizedState=r:bg(s,wt.memoizedState,r)},useTransition:function(){var r=bd(tl)[0],s=bn().memoizedState;return[r,s]},useMutableSource:gg,useSyncExternalStore:yg,useId:Dg,unstable_isNewReconciler:!1};function Qn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Ld(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:le({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Ku={isMounted:function(r){return(r=r._reactInternals)?Bn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Xt(),p=Si(r),y=Br(h,p);y.payload=s,l!=null&&(y.callback=l),s=Ei(r,y,p),s!==null&&(Jn(s,r,p,h),Bu(s,r,p))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Xt(),p=Si(r),y=Br(h,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Ei(r,y,p),s!==null&&(Jn(s,r,p,h),Bu(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Xt(),h=Si(r),p=Br(l,h);p.tag=2,s!=null&&(p.callback=s),s=Ei(r,p,h),s!==null&&(Jn(s,r,h,l),Bu(s,r,h))}};function Mg(r,s,l,h,p,y,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,y,w):s.prototype&&s.prototype.isPureReactComponent?!za(l,h)||!za(p,y):!0}function Ug(r,s,l){var h=!1,p=_i,y=s.contextType;return typeof y=="object"&&y!==null?y=Nn(y):(p=rn(s)?ps:Ft.current,h=s.contextTypes,y=(h=h!=null)?So(r,p):_i),s=new s(l,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ku,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),s}function Fg(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Ku.enqueueReplaceState(s,s.state,null)}function Vd(r,s,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},Td(r);var y=s.contextType;typeof y=="object"&&y!==null?p.context=Nn(y):(y=rn(s)?ps:Ft.current,p.context=So(r,y)),p.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Ld(r,s,y,l),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ku.enqueueReplaceState(p,p.state,null),ju(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function Do(r,s){try{var l="",h=s;do l+=Ce(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:p,digest:null}}function Md(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Ud(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var jI=typeof WeakMap=="function"?WeakMap:Map;function Bg(r,s,l){l=Br(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){tc||(tc=!0,Zd=h),Ud(r,s)},l}function jg(r,s,l){l=Br(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Ud(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Ud(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function zg(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new jI;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),r=tA.bind(null,r,s,l),s.then(r,r))}function qg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Hg(r,s,l,h,p){return r.mode&1?(r.flags|=65536,r.lanes=p,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Br(-1,1),s.tag=2,Ei(l,s,1))),l.lanes|=1),r)}var zI=K.ReactCurrentOwner,sn=!1;function Yt(r,s,l,h){s.child=r===null?cg(s,null,l,h):Po(s,r.child,l,h)}function Wg(r,s,l,h,p){l=l.render;var y=s.ref;return No(s,p),h=Pd(r,s,l,h,y,p),l=xd(),r!==null&&!sn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,jr(r,s,p)):(et&&l&&dd(s),s.flags|=1,Yt(r,s,h,p),s.child)}function $g(r,s,l,h,p){if(r===null){var y=l.type;return typeof y=="function"&&!af(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,Gg(r,s,y,h,p)):(r=ac(l.type,null,h,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,!(r.lanes&p)){var w=y.memoizedProps;if(l=l.compare,l=l!==null?l:za,l(w,h)&&r.ref===s.ref)return jr(r,s,p)}return s.flags|=1,r=Ci(y,h),r.ref=s.ref,r.return=s,s.child=r}function Gg(r,s,l,h,p){if(r!==null){var y=r.memoizedProps;if(za(y,h)&&r.ref===s.ref)if(sn=!1,s.pendingProps=h=y,(r.lanes&p)!==0)r.flags&131072&&(sn=!0);else return s.lanes=r.lanes,jr(r,s,p)}return Fd(r,s,l,h,p)}function Kg(r,s,l){var h=s.pendingProps,p=h.children,y=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Lo,wn),wn|=l;else{if(!(l&1073741824))return r=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,$e(Lo,wn),wn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,$e(Lo,wn),wn|=h}else y!==null?(h=y.baseLanes|l,s.memoizedState=null):h=l,$e(Lo,wn),wn|=h;return Yt(r,s,p,l),s.child}function Qg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Fd(r,s,l,h,p){var y=rn(l)?ps:Ft.current;return y=So(s,y),No(s,p),l=Pd(r,s,l,h,y,p),h=xd(),r!==null&&!sn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,jr(r,s,p)):(et&&h&&dd(s),s.flags|=1,Yt(r,s,l,p),s.child)}function Yg(r,s,l,h,p){if(rn(l)){var y=!0;bu(s)}else y=!1;if(No(s,p),s.stateNode===null)Yu(r,s),Ug(s,l,h),Vd(s,l,h,p),h=!0;else if(r===null){var w=s.stateNode,C=s.memoizedProps;w.props=C;var D=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=Nn($):($=rn(l)?ps:Ft.current,$=So(s,$));var ee=l.getDerivedStateFromProps,te=typeof ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||D!==$)&&Fg(s,w,h,$),wi=!1;var Z=s.memoizedState;w.state=Z,ju(s,h,w,p),D=s.memoizedState,C!==h||Z!==D||nn.current||wi?(typeof ee=="function"&&(Ld(s,l,ee,h),D=s.memoizedState),(C=wi||Mg(s,l,C,h,Z,D,$))?(te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=D),w.props=h,w.state=D,w.context=$,h=C):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,dg(r,s),C=s.memoizedProps,$=s.type===s.elementType?C:Qn(s.type,C),w.props=$,te=s.pendingProps,Z=w.context,D=l.contextType,typeof D=="object"&&D!==null?D=Nn(D):(D=rn(l)?ps:Ft.current,D=So(s,D));var ae=l.getDerivedStateFromProps;(ee=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==te||Z!==D)&&Fg(s,w,h,D),wi=!1,Z=s.memoizedState,w.state=Z,ju(s,h,w,p);var de=s.memoizedState;C!==te||Z!==de||nn.current||wi?(typeof ae=="function"&&(Ld(s,l,ae,h),de=s.memoizedState),($=wi||Mg(s,l,$,h,Z,de,D)||!1)?(ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,de,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,de,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=de),w.props=h,w.state=de,w.context=D,h=$):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),h=!1)}return Bd(r,s,l,h,y,p)}function Bd(r,s,l,h,p,y){Qg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return p&&tg(s,l,!1),jr(r,s,y);h=s.stateNode,zI.current=s;var C=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Po(s,r.child,null,y),s.child=Po(s,null,C,y)):Yt(r,s,C,y),s.memoizedState=h.state,p&&tg(s,l,!0),s.child}function Xg(r){var s=r.stateNode;s.pendingContext?Zm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Zm(r,s.context,!1),Id(r,s.containerInfo)}function Jg(r,s,l,h,p){return ko(),gd(p),s.flags|=256,Yt(r,s,l,h),s.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function zd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Zg(r,s,l){var h=s.pendingProps,p=nt.current,y=!1,w=(s.flags&128)!==0,C;if((C=w)||(C=r!==null&&r.memoizedState===null?!1:(p&2)!==0),C?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),$e(nt,p&1),r===null)return md(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,y?(h=s.mode,y=s.child,w={mode:"hidden",children:w},!(h&1)&&y!==null?(y.childLanes=0,y.pendingProps=w):y=lc(w,h,0,null),r=As(r,h,l,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=zd(l),s.memoizedState=jd,r):qd(s,w));if(p=r.memoizedState,p!==null&&(C=p.dehydrated,C!==null))return qI(r,s,w,h,C,p,l);if(y){y=h.fallback,w=s.mode,p=r.child,C=p.sibling;var D={mode:"hidden",children:h.children};return!(w&1)&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=D,s.deletions=null):(h=Ci(p,D),h.subtreeFlags=p.subtreeFlags&14680064),C!==null?y=Ci(C,y):(y=As(y,w,l,null),y.flags|=2),y.return=s,h.return=s,h.sibling=y,s.child=h,h=y,y=s.child,w=r.child.memoizedState,w=w===null?zd(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=r.childLanes&~l,s.memoizedState=jd,h}return y=r.child,r=y.sibling,h=Ci(y,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function qd(r,s){return s=lc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Qu(r,s,l,h){return h!==null&&gd(h),Po(s,r.child,null,l),r=qd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function qI(r,s,l,h,p,y,w){if(l)return s.flags&256?(s.flags&=-257,h=Md(Error(t(422))),Qu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=h.fallback,p=s.mode,h=lc({mode:"visible",children:h.children},p,0,null),y=As(y,p,w,null),y.flags|=2,h.return=s,y.return=s,h.sibling=y,s.child=h,s.mode&1&&Po(s,r.child,null,w),s.child.memoizedState=zd(w),s.memoizedState=jd,y);if(!(s.mode&1))return Qu(r,s,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var C=h.dgst;return h=C,y=Error(t(419)),h=Md(y,h,void 0),Qu(r,s,w,h)}if(C=(w&r.childLanes)!==0,sn||C){if(h=kt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|w)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Fr(r,p),Jn(h,r,p,-1))}return of(),h=Md(Error(t(421))),Qu(r,s,w,h)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=nA.bind(null,r),p._reactRetry=s,null):(r=y.treeContext,vn=gi(p.nextSibling),_n=s,et=!0,Kn=null,r!==null&&(Pn[xn++]=Mr,Pn[xn++]=Ur,Pn[xn++]=ms,Mr=r.id,Ur=r.overflow,ms=s),s=qd(s,h.children),s.flags|=4096,s)}function ey(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),wd(r.return,s,l)}function Hd(r,s,l,h,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function ty(r,s,l){var h=s.pendingProps,p=h.revealOrder,y=h.tail;if(Yt(r,s,h.children,l),h=nt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ey(r,l,s);else if(r.tag===19)ey(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if($e(nt,h),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)r=l.alternate,r!==null&&zu(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Hd(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&zu(r)===null){s.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Hd(s,!0,l,null,y);break;case"together":Hd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Yu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ws|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ci(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ci(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function HI(r,s,l){switch(s.tag){case 3:Xg(s),ko();break;case 5:mg(s);break;case 1:rn(s.type)&&bu(s);break;case 4:Id(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;$e(Uu,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?($e(nt,nt.current&1),s.flags|=128,null):l&s.child.childLanes?Zg(r,s,l):($e(nt,nt.current&1),r=jr(r,s,l),r!==null?r.sibling:null);$e(nt,nt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,r.flags&128){if(h)return ty(r,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),$e(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,Kg(r,s,l)}return jr(r,s,l)}var ny,Wd,ry,iy;ny=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wd=function(){},ry=function(r,s,l,h){var p=r.memoizedProps;if(p!==h){r=s.stateNode,_s(hr.current);var y=null;switch(l){case"input":p=Xi(r,p),h=Xi(r,h),y=[];break;case"select":p=le({},p,{value:void 0}),h=le({},h,{value:void 0}),y=[];break;case"textarea":p=ya(r,p),h=ya(r,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Pu)}Ia(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var C=p[$];for(w in C)C.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?y||(y=[]):(y=y||[]).push($,null));for($ in h){var D=h[$];if(C=p!=null?p[$]:void 0,h.hasOwnProperty($)&&D!==C&&(D!=null||C!=null))if($==="style")if(C){for(w in C)!C.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in D)D.hasOwnProperty(w)&&C[w]!==D[w]&&(l||(l={}),l[w]=D[w])}else l||(y||(y=[]),y.push($,l)),l=D;else $==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,C=C?C.__html:void 0,D!=null&&C!==D&&(y=y||[]).push($,D)):$==="children"?typeof D!="string"&&typeof D!="number"||(y=y||[]).push($,""+D):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(D!=null&&$==="onScroll"&&Ge("scroll",r),y||C===D||(y=[])):(y=y||[]).push($,D))}l&&(y=y||[]).push("style",l);var $=y;(s.updateQueue=$)&&(s.flags|=4)}},iy=function(r,s,l,h){l!==h&&(s.flags|=4)};function rl(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function jt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function WI(r,s,l){var h=s.pendingProps;switch(fd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(s),null;case 1:return rn(s.type)&&Nu(),jt(s),null;case 3:return h=s.stateNode,bo(),Ke(nn),Ke(Ft),Rd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Vu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Kn!==null&&(nf(Kn),Kn=null))),Wd(r,s),jt(s),null;case 5:Ad(s);var p=_s(Ja.current);if(l=s.type,r!==null&&s.stateNode!=null)ry(r,s,l,h,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return jt(s),null}if(r=_s(hr.current),Vu(s)){h=s.stateNode,l=s.type;var y=s.memoizedProps;switch(h[cr]=s,h[Ga]=y,r=(s.mode&1)!==0,l){case"dialog":Ge("cancel",h),Ge("close",h);break;case"iframe":case"object":case"embed":Ge("load",h);break;case"video":case"audio":for(p=0;p<Ha.length;p++)Ge(Ha[p],h);break;case"source":Ge("error",h);break;case"img":case"image":case"link":Ge("error",h),Ge("load",h);break;case"details":Ge("toggle",h);break;case"input":$s(h,y),Ge("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},Ge("invalid",h);break;case"textarea":Ks(h,y),Ge("invalid",h)}Ia(l,y),p=null;for(var w in y)if(y.hasOwnProperty(w)){var C=y[w];w==="children"?typeof C=="string"?h.textContent!==C&&(y.suppressHydrationWarning!==!0&&ku(h.textContent,C,r),p=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(y.suppressHydrationWarning!==!0&&ku(h.textContent,C,r),p=["children",""+C]):o.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&Ge("scroll",h)}switch(l){case"input":Sr(h),eu(h,y,!0);break;case"textarea":Sr(h),_a(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Pu)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=yt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[cr]=s,r[Ga]=h,ny(r,s,!1,!1),s.stateNode=r;e:{switch(w=Aa(l,h),l){case"dialog":Ge("cancel",r),Ge("close",r),p=h;break;case"iframe":case"object":case"embed":Ge("load",r),p=h;break;case"video":case"audio":for(p=0;p<Ha.length;p++)Ge(Ha[p],r);p=h;break;case"source":Ge("error",r),p=h;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),p=h;break;case"details":Ge("toggle",r),p=h;break;case"input":$s(r,h),p=Xi(r,h),Ge("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=le({},h,{value:void 0}),Ge("invalid",r);break;case"textarea":Ks(r,h),p=ya(r,h),Ge("invalid",r);break;default:p=h}Ia(l,p),C=p;for(y in C)if(C.hasOwnProperty(y)){var D=C[y];y==="style"?Ea(r,D):y==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&va(r,D)):y==="children"?typeof D=="string"?(l!=="textarea"||D!=="")&&si(r,D):typeof D=="number"&&si(r,""+D):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?D!=null&&y==="onScroll"&&Ge("scroll",r):D!=null&&H(r,y,D,w))}switch(l){case"input":Sr(r),eu(r,h,!1);break;case"textarea":Sr(r),_a(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Be(h.value));break;case"select":r.multiple=!!h.multiple,y=h.value,y!=null?Cr(r,!!h.multiple,y,!1):h.defaultValue!=null&&Cr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=Pu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return jt(s),null;case 6:if(r&&s.stateNode!=null)iy(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=_s(Ja.current),_s(hr.current),Vu(s)){if(h=s.stateNode,l=s.memoizedProps,h[cr]=s,(y=h.nodeValue!==l)&&(r=_n,r!==null))switch(r.tag){case 3:ku(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ku(h.nodeValue,l,(r.mode&1)!==0)}y&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[cr]=s,s.stateNode=h}return jt(s),null;case 13:if(Ke(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&vn!==null&&s.mode&1&&!(s.flags&128))ag(),ko(),s.flags|=98560,y=!1;else if(y=Vu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[cr]=s}else ko(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;jt(s),y=!1}else Kn!==null&&(nf(Kn),Kn=null),y=!0;if(!y)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||nt.current&1?Et===0&&(Et=3):of())),s.updateQueue!==null&&(s.flags|=4),jt(s),null);case 4:return bo(),Wd(r,s),r===null&&Wa(s.stateNode.containerInfo),jt(s),null;case 10:return vd(s.type._context),jt(s),null;case 17:return rn(s.type)&&Nu(),jt(s),null;case 19:if(Ke(nt),y=s.memoizedState,y===null)return jt(s),null;if(h=(s.flags&128)!==0,w=y.rendering,w===null)if(h)rl(y,!1);else{if(Et!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=zu(r),w!==null){for(s.flags|=128,rl(y,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)y=l,r=h,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,r=w.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return $e(nt,nt.current&1|2),s.child}r=r.sibling}y.tail!==null&&We()>Vo&&(s.flags|=128,h=!0,rl(y,!1),s.lanes=4194304)}else{if(!h)if(r=zu(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),rl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!et)return jt(s),null}else 2*We()-y.renderingStartTime>Vo&&l!==1073741824&&(s.flags|=128,h=!0,rl(y,!1),s.lanes=4194304);y.isBackwards?(w.sibling=s.child,s.child=w):(l=y.last,l!==null?l.sibling=w:s.child=w,y.last=w)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=We(),s.sibling=null,l=nt.current,$e(nt,h?l&1|2:l&1),s):(jt(s),null);case 22:case 23:return sf(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?wn&1073741824&&(jt(s),s.subtreeFlags&6&&(s.flags|=8192)):jt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function $I(r,s){switch(fd(s),s.tag){case 1:return rn(s.type)&&Nu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return bo(),Ke(nn),Ke(Ft),Rd(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Ad(s),null;case 13:if(Ke(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ko()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(nt),null;case 4:return bo(),null;case 10:return vd(s.type._context),null;case 22:case 23:return sf(),null;case 24:return null;default:return null}}var Xu=!1,zt=!1,GI=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Oo(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){at(r,s,h)}else l.current=null}function $d(r,s,l){try{l()}catch(h){at(r,s,h)}}var sy=!1;function KI(r,s){if(id=fi,r=Mm(),Yh(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var w=0,C=-1,D=-1,$=0,ee=0,te=r,Z=null;t:for(;;){for(var ae;te!==l||p!==0&&te.nodeType!==3||(C=w+p),te!==y||h!==0&&te.nodeType!==3||(D=w+h),te.nodeType===3&&(w+=te.nodeValue.length),(ae=te.firstChild)!==null;)Z=te,te=ae;for(;;){if(te===r)break t;if(Z===l&&++$===p&&(C=w),Z===y&&++ee===h&&(D=w),(ae=te.nextSibling)!==null)break;te=Z,Z=te.parentNode}te=ae}l=C===-1||D===-1?null:{start:C,end:D}}else l=null}l=l||{start:0,end:0}}else l=null;for(sd={focusedElem:r,selectionRange:l},fi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var de=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,ut=de.memoizedState,z=s.stateNode,L=z.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Qn(s.type,fe),ut);z.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var W=s.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){at(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return de=sy,sy=!1,de}function il(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&$d(s,l,y)}p=p.next}while(p!==h)}}function Ju(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Gd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function oy(r){var s=r.alternate;s!==null&&(r.alternate=null,oy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[cr],delete s[Ga],delete s[ud],delete s[xI],delete s[NI])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ay(r){return r.tag===5||r.tag===3||r.tag===4}function ly(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ay(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Kd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Pu));else if(h!==4&&(r=r.child,r!==null))for(Kd(r,s,l),r=r.sibling;r!==null;)Kd(r,s,l),r=r.sibling}function Qd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Qd(r,s,l),r=r.sibling;r!==null;)Qd(r,s,l),r=r.sibling}var Ot=null,Yn=!1;function Ti(r,s,l){for(l=l.child;l!==null;)uy(r,s,l),l=l.sibling}function uy(r,s,l){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(os,l)}catch{}switch(l.tag){case 5:zt||Oo(l,s);case 6:var h=Ot,p=Yn;Ot=null,Ti(r,s,l),Ot=h,Yn=p,Ot!==null&&(Yn?(r=Ot,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Ot.removeChild(l.stateNode));break;case 18:Ot!==null&&(Yn?(r=Ot,l=l.stateNode,r.nodeType===8?ld(r.parentNode,l):r.nodeType===1&&ld(r,l),Wn(r)):ld(Ot,l.stateNode));break;case 4:h=Ot,p=Yn,Ot=l.stateNode.containerInfo,Yn=!0,Ti(r,s,l),Ot=h,Yn=p;break;case 0:case 11:case 14:case 15:if(!zt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,w=y.destroy;y=y.tag,w!==void 0&&(y&2||y&4)&&$d(l,s,w),p=p.next}while(p!==h)}Ti(r,s,l);break;case 1:if(!zt&&(Oo(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(C){at(l,s,C)}Ti(r,s,l);break;case 21:Ti(r,s,l);break;case 22:l.mode&1?(zt=(h=zt)||l.memoizedState!==null,Ti(r,s,l),zt=h):Ti(r,s,l);break;default:Ti(r,s,l)}}function cy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new GI),s.forEach(function(h){var p=rA.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Xn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=r,w=s,C=w;e:for(;C!==null;){switch(C.tag){case 5:Ot=C.stateNode,Yn=!1;break e;case 3:Ot=C.stateNode.containerInfo,Yn=!0;break e;case 4:Ot=C.stateNode.containerInfo,Yn=!0;break e}C=C.return}if(Ot===null)throw Error(t(160));uy(y,w,p),Ot=null,Yn=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch($){at(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)hy(s,r),s=s.sibling}function hy(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Xn(s,r),fr(r),h&4){try{il(3,r,r.return),Ju(3,r)}catch(fe){at(r,r.return,fe)}try{il(5,r,r.return)}catch(fe){at(r,r.return,fe)}}break;case 1:Xn(s,r),fr(r),h&512&&l!==null&&Oo(l,l.return);break;case 5:if(Xn(s,r),fr(r),h&512&&l!==null&&Oo(l,l.return),r.flags&32){var p=r.stateNode;try{si(p,"")}catch(fe){at(r,r.return,fe)}}if(h&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,w=l!==null?l.memoizedProps:y,C=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{C==="input"&&y.type==="radio"&&y.name!=null&&ma(p,y),Aa(C,w);var $=Aa(C,y);for(w=0;w<D.length;w+=2){var ee=D[w],te=D[w+1];ee==="style"?Ea(p,te):ee==="dangerouslySetInnerHTML"?va(p,te):ee==="children"?si(p,te):H(p,ee,te,$)}switch(C){case"input":ga(p,y);break;case"textarea":Qs(p,y);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ae=y.value;ae!=null?Cr(p,!!y.multiple,ae,!1):Z!==!!y.multiple&&(y.defaultValue!=null?Cr(p,!!y.multiple,y.defaultValue,!0):Cr(p,!!y.multiple,y.multiple?[]:"",!1))}p[Ga]=y}catch(fe){at(r,r.return,fe)}}break;case 6:if(Xn(s,r),fr(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(fe){at(r,r.return,fe)}}break;case 3:if(Xn(s,r),fr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(fe){at(r,r.return,fe)}break;case 4:Xn(s,r),fr(r);break;case 13:Xn(s,r),fr(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Jd=We())),h&4&&cy(r);break;case 22:if(ee=l!==null&&l.memoizedState!==null,r.mode&1?(zt=($=zt)||ee,Xn(s,r),zt=$):Xn(s,r),fr(r),h&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!ee&&r.mode&1)for(ce=r,ee=r.child;ee!==null;){for(te=ce=ee;ce!==null;){switch(Z=ce,ae=Z.child,Z.tag){case 0:case 11:case 14:case 15:il(4,Z,Z.return);break;case 1:Oo(Z,Z.return);var de=Z.stateNode;if(typeof de.componentWillUnmount=="function"){h=Z,l=Z.return;try{s=h,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(fe){at(h,l,fe)}}break;case 5:Oo(Z,Z.return);break;case 22:if(Z.memoizedState!==null){py(te);continue}}ae!==null?(ae.return=Z,ce=ae):py(te)}ee=ee.sibling}e:for(ee=null,te=r;;){if(te.tag===5){if(ee===null){ee=te;try{p=te.stateNode,$?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(C=te.stateNode,D=te.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,C.style.display=wa("display",w))}catch(fe){at(r,r.return,fe)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=$?"":te.memoizedProps}catch(fe){at(r,r.return,fe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:Xn(s,r),fr(r),h&4&&cy(r);break;case 21:break;default:Xn(s,r),fr(r)}}function fr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(ay(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(si(p,""),h.flags&=-33);var y=ly(r);Qd(r,y,p);break;case 3:case 4:var w=h.stateNode.containerInfo,C=ly(r);Kd(r,C,w);break;default:throw Error(t(161))}}catch(D){at(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function QI(r,s,l){ce=r,dy(r)}function dy(r,s,l){for(var h=(r.mode&1)!==0;ce!==null;){var p=ce,y=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Xu;if(!w){var C=p.alternate,D=C!==null&&C.memoizedState!==null||zt;C=Xu;var $=zt;if(Xu=w,(zt=D)&&!$)for(ce=p;ce!==null;)w=ce,D=w.child,w.tag===22&&w.memoizedState!==null?my(p):D!==null?(D.return=w,ce=D):my(p);for(;y!==null;)ce=y,dy(y),y=y.sibling;ce=p,Xu=C,zt=$}fy(r)}else p.subtreeFlags&8772&&y!==null?(y.return=p,ce=y):fy(r)}}function fy(r){for(;ce!==null;){var s=ce;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:zt||Ju(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!zt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Qn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&pg(s,y,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}pg(s,w,l)}break;case 5:var C=s.stateNode;if(l===null&&s.flags&4){l=C;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&l.focus();break;case"img":D.src&&(l.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var ee=$.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&Wn(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&Gd(s)}catch(Z){at(s,s.return,Z)}}if(s===r){ce=null;break}if(l=s.sibling,l!==null){l.return=s.return,ce=l;break}ce=s.return}}function py(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ce=l;break}ce=s.return}}function my(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Ju(4,s)}catch(D){at(s,l,D)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(D){at(s,p,D)}}var y=s.return;try{Gd(s)}catch(D){at(s,y,D)}break;case 5:var w=s.return;try{Gd(s)}catch(D){at(s,w,D)}}}catch(D){at(s,s.return,D)}if(s===r){ce=null;break}var C=s.sibling;if(C!==null){C.return=s.return,ce=C;break}ce=s.return}}var YI=Math.ceil,Zu=K.ReactCurrentDispatcher,Yd=K.ReactCurrentOwner,Dn=K.ReactCurrentBatchConfig,Ve=0,kt=null,dt=null,Lt=0,wn=0,Lo=yi(0),Et=0,sl=null,ws=0,ec=0,Xd=0,ol=null,on=null,Jd=0,Vo=1/0,zr=null,tc=!1,Zd=null,Ii=null,nc=!1,Ai=null,rc=0,al=0,ef=null,ic=-1,sc=0;function Xt(){return Ve&6?We():ic!==-1?ic:ic=We()}function Si(r){return r.mode&1?Ve&2&&Lt!==0?Lt&-Lt:DI.transition!==null?(sc===0&&(sc=ls()),sc):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:La(r.type)),r):1}function Jn(r,s,l,h){if(50<al)throw al=0,ef=null,Error(t(185));ui(r,l,h),(!(Ve&2)||r!==kt)&&(r===kt&&(!(Ve&2)&&(ec|=l),Et===4&&Ri(r,Lt)),an(r,h),l===1&&Ve===0&&!(s.mode&1)&&(Vo=We()+500,Du&&vi()))}function an(r,s){var l=r.callbackNode;xr(r,s);var h=as(r,r===kt?Lt:0);if(h===0)l!==null&&xa(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&xa(l),s===1)r.tag===0?bI(yy.bind(null,r)):ng(yy.bind(null,r)),kI(function(){!(Ve&6)&&vi()}),l=null;else{switch(hi(h)){case 1:l=ss;break;case 4:l=oi;break;case 16:l=Rn;break;case 536870912:l=su;break;default:l=Rn}l=Sy(l,gy.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function gy(r,s){if(ic=-1,sc=0,Ve&6)throw Error(t(327));var l=r.callbackNode;if(Mo()&&r.callbackNode!==l)return null;var h=as(r,r===kt?Lt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=oc(r,h);else{s=h;var p=Ve;Ve|=2;var y=vy();(kt!==r||Lt!==s)&&(zr=null,Vo=We()+500,Ts(r,s));do try{ZI();break}catch(C){_y(r,C)}while(!0);_d(),Zu.current=y,Ve=p,dt!==null?s=0:(kt=null,Lt=0,s=Et)}if(s!==0){if(s===2&&(p=mn(r),p!==0&&(h=p,s=tf(r,p))),s===1)throw l=sl,Ts(r,0),Ri(r,h),an(r,We()),l;if(s===6)Ri(r,h);else{if(p=r.current.alternate,!(h&30)&&!XI(p)&&(s=oc(r,h),s===2&&(y=mn(r),y!==0&&(h=y,s=tf(r,y))),s===1))throw l=sl,Ts(r,0),Ri(r,h),an(r,We()),l;switch(r.finishedWork=p,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Is(r,on,zr);break;case 3:if(Ri(r,h),(h&130023424)===h&&(s=Jd+500-We(),10<s)){if(as(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){Xt(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=ad(Is.bind(null,r,on,zr),s);break}Is(r,on,zr);break;case 4:if(Ri(r,h),(h&4194240)===h)break;for(s=r.eventTimes,p=-1;0<h;){var w=31-Kt(h);y=1<<w,w=s[w],w>p&&(p=w),h&=~y}if(h=p,h=We()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*YI(h/1960))-h,10<h){r.timeoutHandle=ad(Is.bind(null,r,on,zr),h);break}Is(r,on,zr);break;case 5:Is(r,on,zr);break;default:throw Error(t(329))}}}return an(r,We()),r.callbackNode===l?gy.bind(null,r):null}function tf(r,s){var l=ol;return r.current.memoizedState.isDehydrated&&(Ts(r,s).flags|=256),r=oc(r,s),r!==2&&(s=on,on=l,s!==null&&nf(s)),r}function nf(r){on===null?on=r:on.push.apply(on,r)}function XI(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!Gn(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(r,s){for(s&=~Xd,s&=~ec,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Kt(s),h=1<<l;r[l]=-1,s&=~h}}function yy(r){if(Ve&6)throw Error(t(327));Mo();var s=as(r,0);if(!(s&1))return an(r,We()),null;var l=oc(r,s);if(r.tag!==0&&l===2){var h=mn(r);h!==0&&(s=h,l=tf(r,h))}if(l===1)throw l=sl,Ts(r,0),Ri(r,s),an(r,We()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Is(r,on,zr),an(r,We()),null}function rf(r,s){var l=Ve;Ve|=1;try{return r(s)}finally{Ve=l,Ve===0&&(Vo=We()+500,Du&&vi())}}function Es(r){Ai!==null&&Ai.tag===0&&!(Ve&6)&&Mo();var s=Ve;Ve|=1;var l=Dn.transition,h=Ne;try{if(Dn.transition=null,Ne=1,r)return r()}finally{Ne=h,Dn.transition=l,Ve=s,!(Ve&6)&&vi()}}function sf(){wn=Lo.current,Ke(Lo)}function Ts(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,CI(l)),dt!==null)for(l=dt.return;l!==null;){var h=l;switch(fd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Nu();break;case 3:bo(),Ke(nn),Ke(Ft),Rd();break;case 5:Ad(h);break;case 4:bo();break;case 13:Ke(nt);break;case 19:Ke(nt);break;case 10:vd(h.type._context);break;case 22:case 23:sf()}l=l.return}if(kt=r,dt=r=Ci(r.current,null),Lt=wn=s,Et=0,sl=null,Xd=ec=ws=0,on=ol=null,ys!==null){for(s=0;s<ys.length;s++)if(l=ys[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var w=y.next;y.next=p,h.next=w}l.pending=h}ys=null}return r}function _y(r,s){do{var l=dt;try{if(_d(),qu.current=Gu,Hu){for(var h=rt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Hu=!1}if(vs=0,Ct=wt=rt=null,Za=!1,el=0,Yd.current=null,l===null||l.return===null){Et=1,sl=s,dt=null;break}e:{var y=r,w=l.return,C=l,D=s;if(s=Lt,C.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var $=D,ee=C,te=ee.tag;if(!(ee.mode&1)&&(te===0||te===11||te===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ae=qg(w);if(ae!==null){ae.flags&=-257,Hg(ae,w,C,y,s),ae.mode&1&&zg(y,$,s),s=ae,D=$;var de=s.updateQueue;if(de===null){var fe=new Set;fe.add(D),s.updateQueue=fe}else de.add(D);break e}else{if(!(s&1)){zg(y,$,s),of();break e}D=Error(t(426))}}else if(et&&C.mode&1){var ut=qg(w);if(ut!==null){!(ut.flags&65536)&&(ut.flags|=256),Hg(ut,w,C,y,s),gd(Do(D,C));break e}}y=D=Do(D,C),Et!==4&&(Et=2),ol===null?ol=[y]:ol.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var z=Bg(y,D,s);fg(y,z);break e;case 1:C=D;var L=y.type,W=y.stateNode;if(!(y.flags&128)&&(typeof L.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Ii===null||!Ii.has(W)))){y.flags|=65536,s&=-s,y.lanes|=s;var ne=jg(y,C,s);fg(y,ne);break e}}y=y.return}while(y!==null)}Ey(l)}catch(pe){s=pe,dt===l&&l!==null&&(dt=l=l.return);continue}break}while(!0)}function vy(){var r=Zu.current;return Zu.current=Gu,r===null?Gu:r}function of(){(Et===0||Et===3||Et===2)&&(Et=4),kt===null||!(ws&268435455)&&!(ec&268435455)||Ri(kt,Lt)}function oc(r,s){var l=Ve;Ve|=2;var h=vy();(kt!==r||Lt!==s)&&(zr=null,Ts(r,s));do try{JI();break}catch(p){_y(r,p)}while(!0);if(_d(),Ve=l,Zu.current=h,dt!==null)throw Error(t(261));return kt=null,Lt=0,Et}function JI(){for(;dt!==null;)wy(dt)}function ZI(){for(;dt!==null&&!ru();)wy(dt)}function wy(r){var s=Ay(r.alternate,r,wn);r.memoizedProps=r.pendingProps,s===null?Ey(r):dt=s,Yd.current=null}function Ey(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=$I(l,s),l!==null){l.flags&=32767,dt=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,dt=null;return}}else if(l=WI(l,s,wn),l!==null){dt=l;return}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);Et===0&&(Et=5)}function Is(r,s,l){var h=Ne,p=Dn.transition;try{Dn.transition=null,Ne=1,eA(r,s,l,h)}finally{Dn.transition=p,Ne=h}return null}function eA(r,s,l,h){do Mo();while(Ai!==null);if(Ve&6)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(qe(r,y),r===kt&&(dt=kt=null,Lt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||nc||(nc=!0,Sy(Rn,function(){return Mo(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=Dn.transition,Dn.transition=null;var w=Ne;Ne=1;var C=Ve;Ve|=4,Yd.current=null,KI(r,l),hy(l,r),wI(sd),fi=!!id,sd=id=null,r.current=l,QI(l),zh(),Ve=C,Ne=w,Dn.transition=y}else r.current=l;if(nc&&(nc=!1,Ai=r,rc=p),y=r.pendingLanes,y===0&&(Ii=null),ou(l.stateNode),an(r,We()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(tc)throw tc=!1,r=Zd,Zd=null,r;return rc&1&&r.tag!==0&&Mo(),y=r.pendingLanes,y&1?r===ef?al++:(al=0,ef=r):al=0,vi(),null}function Mo(){if(Ai!==null){var r=hi(rc),s=Dn.transition,l=Ne;try{if(Dn.transition=null,Ne=16>r?16:r,Ai===null)var h=!1;else{if(r=Ai,Ai=null,rc=0,Ve&6)throw Error(t(331));var p=Ve;for(Ve|=4,ce=r.current;ce!==null;){var y=ce,w=y.child;if(ce.flags&16){var C=y.deletions;if(C!==null){for(var D=0;D<C.length;D++){var $=C[D];for(ce=$;ce!==null;){var ee=ce;switch(ee.tag){case 0:case 11:case 15:il(8,ee,y)}var te=ee.child;if(te!==null)te.return=ee,ce=te;else for(;ce!==null;){ee=ce;var Z=ee.sibling,ae=ee.return;if(oy(ee),ee===$){ce=null;break}if(Z!==null){Z.return=ae,ce=Z;break}ce=ae}}}var de=y.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var ut=fe.sibling;fe.sibling=null,fe=ut}while(fe!==null)}}ce=y}}if(y.subtreeFlags&2064&&w!==null)w.return=y,ce=w;else e:for(;ce!==null;){if(y=ce,y.flags&2048)switch(y.tag){case 0:case 11:case 15:il(9,y,y.return)}var z=y.sibling;if(z!==null){z.return=y.return,ce=z;break e}ce=y.return}}var L=r.current;for(ce=L;ce!==null;){w=ce;var W=w.child;if(w.subtreeFlags&2064&&W!==null)W.return=w,ce=W;else e:for(w=L;ce!==null;){if(C=ce,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Ju(9,C)}}catch(pe){at(C,C.return,pe)}if(C===w){ce=null;break e}var ne=C.sibling;if(ne!==null){ne.return=C.return,ce=ne;break e}ce=C.return}}if(Ve=p,vi(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(os,r)}catch{}h=!0}return h}finally{Ne=l,Dn.transition=s}}return!1}function Ty(r,s,l){s=Do(l,s),s=Bg(r,s,1),r=Ei(r,s,1),s=Xt(),r!==null&&(ui(r,1,s),an(r,s))}function at(r,s,l){if(r.tag===3)Ty(r,r,l);else for(;s!==null;){if(s.tag===3){Ty(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=Do(l,r),r=jg(s,r,1),s=Ei(s,r,1),r=Xt(),s!==null&&(ui(s,1,r),an(s,r));break}}s=s.return}}function tA(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Xt(),r.pingedLanes|=r.suspendedLanes&l,kt===r&&(Lt&l)===l&&(Et===4||Et===3&&(Lt&130023424)===Lt&&500>We()-Jd?Ts(r,0):Xd|=l),an(r,s)}function Iy(r,s){s===0&&(r.mode&1?(s=so,so<<=1,!(so&130023424)&&(so=4194304)):s=1);var l=Xt();r=Fr(r,s),r!==null&&(ui(r,s,l),an(r,l))}function nA(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),Iy(r,l)}function rA(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Iy(r,l)}var Ay;Ay=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||nn.current)sn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return sn=!1,HI(r,s,l);sn=!!(r.flags&131072)}else sn=!1,et&&s.flags&1048576&&rg(s,Lu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Yu(r,s),r=s.pendingProps;var p=So(s,Ft.current);No(s,l),p=Pd(null,s,h,r,p,l);var y=xd();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,rn(h)?(y=!0,bu(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Td(s),p.updater=Ku,s.stateNode=p,p._reactInternals=s,Vd(s,h,r,l),s=Bd(null,s,h,!0,y,l)):(s.tag=0,et&&y&&dd(s),Yt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Yu(r,s),r=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=sA(h),r=Qn(h,r),p){case 0:s=Fd(null,s,h,r,l);break e;case 1:s=Yg(null,s,h,r,l);break e;case 11:s=Wg(null,s,h,r,l);break e;case 14:s=$g(null,s,h,Qn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Qn(h,p),Fd(r,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Qn(h,p),Yg(r,s,h,p,l);case 3:e:{if(Xg(s),r===null)throw Error(t(387));h=s.pendingProps,y=s.memoizedState,p=y.element,dg(r,s),ju(s,h,null,l);var w=s.memoizedState;if(h=w.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=Do(Error(t(423)),s),s=Jg(r,s,h,l,p);break e}else if(h!==p){p=Do(Error(t(424)),s),s=Jg(r,s,h,l,p);break e}else for(vn=gi(s.stateNode.containerInfo.firstChild),_n=s,et=!0,Kn=null,l=cg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ko(),h===p){s=jr(r,s,l);break e}Yt(r,s,h,l)}s=s.child}return s;case 5:return mg(s),r===null&&md(s),h=s.type,p=s.pendingProps,y=r!==null?r.memoizedProps:null,w=p.children,od(h,p)?w=null:y!==null&&od(h,y)&&(s.flags|=32),Qg(r,s),Yt(r,s,w,l),s.child;case 6:return r===null&&md(s),null;case 13:return Zg(r,s,l);case 4:return Id(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Po(s,null,h,l):Yt(r,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Qn(h,p),Wg(r,s,h,p,l);case 7:return Yt(r,s,s.pendingProps,l),s.child;case 8:return Yt(r,s,s.pendingProps.children,l),s.child;case 12:return Yt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,y=s.memoizedProps,w=p.value,$e(Uu,h._currentValue),h._currentValue=w,y!==null)if(Gn(y.value,w)){if(y.children===p.children&&!nn.current){s=jr(r,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var C=y.dependencies;if(C!==null){w=y.child;for(var D=C.firstContext;D!==null;){if(D.context===h){if(y.tag===1){D=Br(-1,l&-l),D.tag=2;var $=y.updateQueue;if($!==null){$=$.shared;var ee=$.pending;ee===null?D.next=D:(D.next=ee.next,ee.next=D),$.pending=D}}y.lanes|=l,D=y.alternate,D!==null&&(D.lanes|=l),wd(y.return,l,s),C.lanes|=l;break}D=D.next}}else if(y.tag===10)w=y.type===s.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=l,C=w.alternate,C!==null&&(C.lanes|=l),wd(w,l,s),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===s){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}Yt(r,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,No(s,l),p=Nn(p),h=h(p),s.flags|=1,Yt(r,s,h,l),s.child;case 14:return h=s.type,p=Qn(h,s.pendingProps),p=Qn(h.type,p),$g(r,s,h,p,l);case 15:return Gg(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Qn(h,p),Yu(r,s),s.tag=1,rn(h)?(r=!0,bu(s)):r=!1,No(s,l),Ug(s,h,p),Vd(s,h,p,l),Bd(null,s,h,!0,r,l);case 19:return ty(r,s,l);case 22:return Kg(r,s,l)}throw Error(t(156,s.tag))};function Sy(r,s){return ro(r,s)}function iA(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(r,s,l,h){return new iA(r,s,l,h)}function af(r){return r=r.prototype,!(!r||!r.isReactComponent)}function sA(r){if(typeof r=="function")return af(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===mt)return 14}return 2}function Ci(r,s){var l=r.alternate;return l===null?(l=On(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function ac(r,s,l,h,p,y){var w=2;if(h=r,typeof r=="function")af(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return As(l.children,p,y,s);case A:w=8,p|=8;break;case R:return r=On(12,l,s,p|2),r.elementType=R,r.lanes=y,r;case x:return r=On(13,l,s,p),r.elementType=x,r.lanes=y,r;case tt:return r=On(19,l,s,p),r.elementType=tt,r.lanes=y,r;case Me:return lc(l,p,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case O:w=9;break e;case F:w=11;break e;case mt:w=14;break e;case gt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=On(w,l,s,p),s.elementType=r,s.type=h,s.lanes=y,s}function As(r,s,l,h){return r=On(7,r,h,s),r.lanes=l,r}function lc(r,s,l,h){return r=On(22,r,h,s),r.elementType=Me,r.lanes=l,r.stateNode={isHidden:!1},r}function lf(r,s,l){return r=On(6,r,null,s),r.lanes=l,r}function uf(r,s,l){return s=On(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function oA(r,s,l,h,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function cf(r,s,l,h,p,y,w,C,D){return r=new oA(r,s,l,C,D),s===1?(s=1,y===!0&&(s|=8)):s=0,y=On(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(y),r}function aA(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function Ry(r){if(!r)return _i;r=r._reactInternals;e:{if(Bn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(rn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(rn(l))return eg(r,l,s)}return s}function Cy(r,s,l,h,p,y,w,C,D){return r=cf(l,h,!0,r,p,y,w,C,D),r.context=Ry(null),l=r.current,h=Xt(),p=Si(l),y=Br(h,p),y.callback=s??null,Ei(l,y,p),r.current.lanes=p,ui(r,p,h),an(r,h),r}function uc(r,s,l,h){var p=s.current,y=Xt(),w=Si(p);return l=Ry(l),s.context===null?s.context=l:s.pendingContext=l,s=Br(y,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(p,s,w),r!==null&&(Jn(r,p,w,y),Bu(r,p,w)),w}function cc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ky(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function hf(r,s){ky(r,s),(r=r.alternate)&&ky(r,s)}var Py=typeof reportError=="function"?reportError:function(r){console.error(r)};function df(r){this._internalRoot=r}hc.prototype.render=df.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));uc(r,s,null,null)},hc.prototype.unmount=df.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Es(function(){uc(null,r,null,null)}),s[Lr]=null}};function hc(r){this._internalRoot=r}hc.prototype.unstable_scheduleHydration=function(r){if(r){var s=hu();r={blockedOn:null,target:r,priority:s};for(var l=0;l<or.length&&s!==0&&s<or[l].priority;l++);or.splice(l,0,r),l===0&&pu(r)}};function ff(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function dc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function xy(){}function lA(r,s,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var $=cc(w);y.call($)}}var w=Cy(s,h,r,0,null,!1,!1,"",xy);return r._reactRootContainer=w,r[Lr]=w.current,Wa(r.nodeType===8?r.parentNode:r),Es(),w}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var C=h;h=function(){var $=cc(D);C.call($)}}var D=cf(r,0,!1,null,null,!1,!1,"",xy);return r._reactRootContainer=D,r[Lr]=D.current,Wa(r.nodeType===8?r.parentNode:r),Es(function(){uc(s,D,l,h)}),D}function fc(r,s,l,h,p){var y=l._reactRootContainer;if(y){var w=y;if(typeof p=="function"){var C=p;p=function(){var D=cc(w);C.call(D)}}uc(s,w,r,p)}else w=lA(l,s,r,p,h);return cc(w)}uu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ai(s.pendingLanes);l!==0&&(ci(s,l|1),an(s,We()),!(Ve&6)&&(Vo=We()+500,vi()))}break;case 13:Es(function(){var h=Fr(r,1);if(h!==null){var p=Xt();Jn(h,r,1,p)}}),hf(r,1)}},oo=function(r){if(r.tag===13){var s=Fr(r,134217728);if(s!==null){var l=Xt();Jn(s,r,134217728,l)}hf(r,134217728)}},cu=function(r){if(r.tag===13){var s=Si(r),l=Fr(r,s);if(l!==null){var h=Xt();Jn(l,r,s,h)}hf(r,s)}},hu=function(){return Ne},du=function(r,s){var l=Ne;try{return Ne=r,s()}finally{Ne=l}},Xs=function(r,s,l){switch(s){case"input":if(ga(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var p=xu(h);if(!p)throw Error(t(90));Ws(h),ga(h,p)}}}break;case"textarea":Qs(r,l);break;case"select":s=l.value,s!=null&&Cr(r,!!l.multiple,s,!1)}},ts=rf,Ra=Es;var uA={usingClientEntryPoint:!1,Events:[Ka,Io,xu,ir,Sa,rf]},ll={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cA={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Pa(r),r===null?null:r.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{os=pc.inject(cA),pn=pc}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uA,ln.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(s))throw Error(t(200));return aA(r,s,null,l)},ln.createRoot=function(r,s){if(!ff(r))throw Error(t(299));var l=!1,h="",p=Py;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=cf(r,1,!1,null,null,l,!1,h,p),r[Lr]=s.current,Wa(r.nodeType===8?r.parentNode:r),new df(s)},ln.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Pa(s),r=r===null?null:r.stateNode,r},ln.flushSync=function(r){return Es(r)},ln.hydrate=function(r,s,l){if(!dc(s))throw Error(t(200));return fc(null,r,s,!0,l)},ln.hydrateRoot=function(r,s,l){if(!ff(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",w=Py;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Cy(s,null,r,1,l??null,p,!1,y,w),r[Lr]=s.current,Wa(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new hc(s)},ln.render=function(r,s,l){if(!dc(s))throw Error(t(200));return fc(null,r,s,!1,l)},ln.unmountComponentAtNode=function(r){if(!dc(r))throw Error(t(40));return r._reactRootContainer?(Es(function(){fc(null,null,r,!1,function(){r._reactRootContainer=null,r[Lr]=null})}),!0):!1},ln.unstable_batchedUpdates=rf,ln.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!dc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return fc(r,s,l,!1,h)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var Hy;function z0(){if(Hy)return _f.exports;Hy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),_f.exports=j0(),_f.exports}var gc={},Wy;function q0(){if(Wy)return gc;Wy=1;var n=z0();return gc.createRoot=n.createRoot,gc.hydrateRoot=n.hydrateRoot,gc}var H0=q0();const W0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=",$0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgB3ZvBa9RAFMZfrYqwFVuQ9qAiFVER9eBB9GBBBLGX3v0jPXuqFL1URBFaxHpQtBWxB1u0C7IFcX5Nxk7fziSZbHaTzQePbSazs/PlvXnvzct0QvyYNTJvZM5IR4aDrpE1I58lHieMLEgyT40dI7tGNo180zcn1DXk7gYGGgZ6Rp5KPFDG3QL9eKjL6ecBjjk3Z4wsyujIgn0ph5MF+6HAx0ambcOkc+ORJKYyKkD2nSTmF4vfRk4bOVOgLxwvGvnKb1qTXpL+tbotyRrbkfKaqAPW/1xS7fBZhv15I5fVzXUjq5LY/l8ZLzBn66zmnHYUug3h65KsX4tPRt7K+AONou0ptxGnNa06lgkTTcW6up6D8Ixq3Jb2QDvEzjFpN3q64bgMDkLZTCr8jUfHszfSUgYhDLlrRq6KP35DfEuS0NaVhqAsYbR5X7LzbB4C8RBP+ULKJRiVo8wahuxDKb6p6KT9p6UBiCXM5NGsNmHMl/i9ln5qEyb3XZDRpq5exJr0TenX7IYkRHX6eSPtb8H3rqV9a0Oshs+rawI7WZkv1+behmq7IjVrOYYwzsedrN3AZwHS7sPAtGekRsQQ1hP9kf+Vg8C/mTPOSBFDWJti0djazRlnpIghrNdp0bA0lTPOSBFDeEdd48CKaGs2Z5yRIoYwmZJ2QLdyvkNoci2BNV1rjg1hl0TWumSyH1QbYeampy+av+25tyU1g8TjjSQTQ2N5YeajJLUiV2tokZwZze2l9y6I38mtS82YkHjYXDrG22JF1IfrWL9P3IsymwcmfaS4nQNbDK/VWVlMSjn8kWQ9ouWpwDho9b0cVj/rwhE/UsakfSD06IrHsOrZ7nsv0JPD3Rp+RD/cIyZdRYlH0h8adriBKO+TdMLTce5Dlqpr0PlWRXjY0FvNEDpyGPtXfR2aTpglcs/IOYnDfPrZR7rJhG1pyJezs14xXUyY/IHykS5OzPsGrcppVQ00imZ9yQta8/mLrAf0H2XD0jDBGrwj/XPD669IuPppy8JsaoLvj6vQ8Gz6I+6Lq710YjZUFEHWeqVUVPQFX6amByFc9HhE37GDwFihSUJ0Q+Ln5h2vrEnbAYuUazAv3k7wcH3aRqMPjJxS7Tyg51JuhxU0byaBKbED6qWd8rKjQs4hgG76Gzvp98mWQidxXsrgKSm/seQ2EJYwS1t+PTgWkDOAj6x7PAKged+xA753VbIRs17z0PfAIOzWmrPWY4gse1ydym074iveh1BmvUahaOIRQ9YFyQGkCTWXMvrRB7JD30IWIVyWrAVm9UoSQqzZ6XQsfAahq4jfqAx5hAcl68J6zlrrWlkVjyrJNgYhwq0kC3yEW0sW+Ai3liwIadhFa8iCvDJtq8iCLMKtIwtChFtJFkBYJ9j2kEoboPcGuxDWRxdqPZJQMXT+/pMCwL66gZcObdbHCWxY9FZ0HcKYtD5Iba970qBzkgVAMeOsJHt8rV14vLY1LbS6KA04KTckYMXPjHQnnYbvkvz3RxNLt4PAvpv+xYVLjlegXySnrjtmwA+tSEoWhMq0kKaaaA9+jxNYq0QeW205gn8V7PTp/QnotgAAAABJRU5ErkJggg==",G0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcDSURBVHgB7VvNb9xEFH8z9kYVpMGoCQKltA6UzQohdXvrjc2ttKFduHFquPXW9AScsrnBqclf0OQfoAlqSuFS9wS3urd8VIqDElEgFW4TKWmy9vCe90Njx95sdu0la/hJ++HZsdfz/N6bN7/3hkHC0PWivp/ZK3CunBcgdCGEDgw0BkyX++FvFr7ZjDH6fOI4jikywny2+MCCBMEgAZw+N1pgCrvmglsMDvSowPMtV7gGc9ns+tN7BsSM2ASg6QWtt6f3Jl5xnA4hAXjCcJ1JR3GNuDSjbQF0YuAhsNFkZhzmTLcriLYE8E72k6LClDvQeOA2vkx8PRHMNYGDmXF7bGtxzpI76bmiXoayzlzQBIMCNp3HVwEa3nxFIzZW7s9Ai2hLAO8Of7pKji3kJxq0gVef3t7dNm3LsKEFkHad7OktuFwUmWDXo/qRIPbZ/kgr2tCWAE4Pj/4N/qdvVwc91eqgo/B27pKuAC+AYBMRjpXMYnJjaWEKjgAF2sDJgXN/4EeekRwZfLf9avuLP5/+/GDXtnYhZmxvPrW3NlfMrecr030DWUaah/8rC/8EHl/qO5WFl8+XHzV73USmwU6gohFKKcw0MNaY2Vhe+LKZ63StAGoYHL4yjk9+AgKOGIVgohAuHHZ+1wuA4GmDUB4eiC6b0IS2fMBxAfmH1wfen0cBFGW/gGF1/mT/Bxr6jZ+izk2FAAiRQgB2EYXwAoXwa9h5qTABGRHmYJdZ+UJYnMAhZfAGqYjPoBKM1aCpQr0T1v+ACVB4q/Xnfnmjf/iGdipnv3i+9AS6DFt/rTxDtX9FcYHUrIeZgs8ESH0yIvNQCm/t9aV7b0KXAiPVu/hRlJpsDNaG5CjVZwKqq16XY3v8Hms467u57OgEhdL0wrn8NiQAtPtbEDAFXLmOy33qAqCnj9PGmPwjHs9CAsBF1G3UvRJUghdih8ZRICWIGZ4/EDDta2RwkxZZtcO6AGihEXj61vrivRIkALz22IFGvDFIAOqeSoujSC2oC4ALZcJ3pismIQWwrDk7TAtqXz0BEIcXXNcT7QRJIXhDFSRiboQwLTidGy3QF08AQhW+FRXF0EmysevLnmlNV2+KOIRJnG3GISF4WkAEjQynMjuo9MaFZ//135DNnYeEUR1wYoM+ACRqcIj1KZFxdo3+n5P3D6r/zt6OASmDuqsSL1k3Axrz0NDnZ3nGVfOBvkbcdNZxQNUMTLltT90d4aj4fgG40HWh7xHgGxsDnlfx/bzciFy7AR3AmezV6y5zpzAIspHWKv22/ENis0ANRMszIQW/XOgcjUGXOylc6Yj6CyZK+KGRLZIgoBNw/CaA2n+W4434uLTMq55V6AACjrcjGSWMbXwPlwPXeJBHW139fg1SimBsQw8hdYTIUfG/AOA/Du5VZkig6AhSCop65WNKqnKcg32eEaOjrqXADoNaVnX5GNc8NkcxWIF+eUgpGPdPt0iIrpEPWPM38tQKoFp4ITeY3KvakMH9oXHK4A/7wTG5AweYn7xMGqYFul6kMRXkNsGFySk6CswEWu+J3tSZgdNTLsjHNGYauxcH4HTgZ4BEMgztvwmXi2u+BlGhyCqBEIO5QP9CmszAy3mIQM6DV3IengCQ/zfgkAxKN8MrrpJQzXkY9J1LrQ0zKN2MRjmPugAOy6B0KygHGeAebDnnURdAVAYlGD93E8LynYhZmRfwZ4dDtEAVaiKZW/BT1BYkAAWUiWC+EzPGU/4+8h3Zi7shhQW5RjU2rUIusuSMf/Nyc9mEGHFm+CpN5V/7Gl1x6/flHw25KbRGCHP2D8EfNdnCdUc2Vu7HepNJgVQfNfcxSFwjPf2NpYWhYN9QQgTVhGrrfKbAuXK3G/xBrcoFAjXMSPePhPUPFUA1PPalx8mW6MLHWQghJT4eaCxRyd7IOkGy+b7+LJEjF6VmDR1L8bWB9+apLg+OEaIGT5lnVP1vo847tE5wMHdlJliQ3E59fhIY/PBynjvK3QNPnonZjcWFsUbnNlUoicHEY+wZXCG2VJ8fN8jbI7VVgqSLpcM0ofpHMw53JjutDVVPTzFKMfhbM0++hqZrhbc2V+ZoowIESAUqSCa/0Hcqqx1lo0KroPVJ/1sffYVprRkI5y+nUStvQJM4cq1wVH1+5WLxb2uroYndaS2ZZEvF0lH1+TLINFzHnd9xdox2Nk31qshOKR5BU4DoJKpBsUvHN00N5i6PNdjEJMPAPma5XH6kMMVGft7CxZcld6husaUB5qvbbEm96dVwS167jrjtcvmqMyK1JAfZKf4gtt1pse0XaGJbWxyIfVteMpunc17hJZoHfNyuMGgR45G2yFvWaKw4kfiOES9EddW8V4xF9UgCdKpKCds+7+UpK6m6NUrYZKDHCG6xjRv/AF0bOBSDHmXQAAAAAElFTkSuQmCC",K0="/huskytales/assets/logo_icon-Bug9MN-U.png",Q0="/huskytales/assets/logo_big-Cp0kVrXR.png",Y0="/huskytales/assets/logo-9xkPj2hX.png",X0="/huskytales/assets/pic1-Cav6XP8G.png",J0="/huskytales/assets/pic2-CxFhh4uq.png",Z0="/huskytales/assets/pic3-LJNB-Dr0.png",eS="/huskytales/assets/pic4-BREKihcV.png",tS="/huskytales/assets/profile_richard-Bfd_-P-Z.png",nS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZiBcdswDEUhT6BOUG7QbBBt0G4QbVBvYI+QDdxO0Gwge4K2E1Ab2BsgQMRcFAikSEnkJe8OpxNNgl8gRMGsYAGI2NDljuzeXWtnzI2sd3Yhe6qqqodSkLia7EB2xXT+krWQk5UCJTaLYHJ655xvTUdmYAvI0c/ARBzdE0fHPUw9Gscr0JDtnSAflsfCGnBYap/A41hYhC9D9ivgb5nYQCQfUwR6BHebiHXONEctbIRbEYlNCgLqL866PIoX+yd28EEZvIdMuFSSNHODtCV/hMzgNGe7uQF7nOaMgfxCm6So4jQ3WygE52ZUVJWn4rd88Ta0QGjU/DuyRrRdqNq5QSForjMMldYrLHKy07DQb6LtCcpzEfeqUCPa/kF55JwyeKrQHsrTi3sjO7DQd4lbMj9HzM65g08CC333NLQ1fIXyzG6HLLQXbV+gPEbc/5cddkpjA+W5F/e97MBC5dbwHcrTiPvpFumpnEp+Qlsxt9X67dzhwFm0Z6tDFR7E/dnbUynzroXKvFZZTRMaUOP0gKGDjLiUs2LOU8xA7ekOkAmc1qHhaIrBXQmxOBxeSI4pDrTl2EysS7FO8W+XOOMjGu1AzOKKFwyHSt6in4clTn1imRPO/a2dCuwwDq/YKjCBoQu/+cbTpYdhz+NP8PhLUrsxXPz+AH/BwWO0w42W9vbfkAKGD7jWcHT+W0yM7JxgdmhxPR2KI6LNxTqnnG+pEeZc5+ObBsKBCIqtYCFuYjYutM3op5uzl9x1f4dj/LV00b5M6TmbG8yRBrnwiL3CRwQja9QPAb7tNC8n3s9GsmlLVaiiEgAAAABJRU5ErkJggg==",rS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAduSURBVHgB7Z0/bBtVHMe/73wJKajFI1vciU60naALShYkBmgyMCC1ohmKVImqZUMopU6JEBIDiYrE0KFBGRgYmtKNpRFLCwuBBTYuGxsuiNRpknu87ztfcrbPvj/23T3/+Sx2nXNP99Hvfu/3/tyzgCFMVWXl4AAzQqACgWkB9SpRkUBZvS8Hj1Wf1dRnNXWcAxc1KfCret2SLpy9z8QWDECgIBoi5yzgvBJzplVeWrR0gS3Xxf3SHjbqnwsHBZCr2PJ1Wd45gWvqpJfAiMwHx5VYzVtyLmLtRTlTEripzjaDIhHYlAdYfbYsNpAxmYo1Rmg7jOKlvU/FGjIiE7EGC23FOXCxsL8sNtFn+ipW59DjuKsajzkMEFJizdrDUj9zcN/ETi7KOVhKap9a9wLoa3roWSyj9OmL6raXuI4hQMldeeFfLNVWRA090JPYqY9kRU7iIfIrnfLCEc8w20tqsJCSiY/lGXcSv2D4pBIdMLxGpCSV2KlP5HvCxsMBzqdxqFjqGnmtSEHiVMATqW7jGkYI9hTrt8Q3Cb8Tn1GU6pNUbmyxzDcjcPt3o+buYzbu6FkssUPc+ielpqqFs3GqhcjGi3XqWOoh2gWdRB0YKVYX/2OpQSr/HddOutI1FUzckJcsgbsY04aarZjvNvzYUew4r0ZSO/YPTnbq+nZMBe7EOAVEUH56vPPdHBqxU2o8VVo6WsdEoMZzZ8PGc0MjVkkd59WYlErhDVmbWDZYGKeA+EjMcMak9eM2sZaILiXGNBMWtU1i9SzAOFqTExK1TWJFCdcwhLx1Cni9gkxpjdpDsaxbaR5DQnkK+OA14OcrwLaqNH90gIuph61joNwFu7r24ecTgzWz2gkt9Jwnlbyh6pvf/gIWZ5Xgv5EpOyf0vF+V7w/Fqop2oNNAUCjfM0rf+fZIKqP15S+RKapTwNmGauP9Yff1TwwgrUIJpTJS+UqpizPev5kOskZMolJfFNs6YgcxDYQJJWFSKTQPqUTuYl69rHipwMJ5rn8cBDoJJUGpX7wJXG3k2eU8O+d06YuVUq9PNZrpsifqwtl2oSQo9c78UQXw4I/8olWjXPJFvKDmsvZtvT7ASCiUt/PFs52PYQNFqbV6s1TCBmu7pzUtyWGetfcsVEyMVhb0zJFRhX03qetb+UslB7uYtVVOyLJsTkxcoeR7dZu/f897z47AKy81/z3X3BqAz1HYQuI0DAjZJELJukpelze8fPvDQrvUoqJVIzDNiC0XWREkFUqipJKiopXwiR+bj/ygANIIJRS2vOk1at+9Gy610GglyqndeI4qN9IKJUGpjNTpcufjCqZs57VkiK01hU6nPFtcqYVHq0fZRoYwB15QQq+eSy+UxJXqH2sCmYlldIZ1O5OSRKoh0apJvaI7CrbcD35HT1y+F18qMSVaicVnT5EBjByWRJSTJor4PUZgEqmmRKuiZomMxPpQDvvrcaOJXVN2Ufk9llI/XYmWSqHrsVat5kbN0o+m5wBvaQpe7zLc40vlaBSlMlLj5Gj+nwZFK3sIjqWGDLeRE93Sgy+VgypJpBoYrewgPGHj5SBnWtMD5bz6tSf17VPxpZLbjwyLVug9E7ZsFbGOKGgQhunBjzbK4Zjrnbn43+d3vnoM83CV2FIJm9JFYfjRxkhNIpWYVF4FkbbKsfWqcGTGlUEcmGOTYGRu9ajtVcWW7iBwDxUUTNKZVFOjFQ2XXs/LxX0YQFxZBkfroUsvYkvYgAEwYtdjTGsaG604cqnFMs+igLIrDFYK3fKt0dGqHDZcHg3CqIor9nOiWaJLqEed/25ytKoCdtV/eyi2bmEFhnD7cXjUGh6tTSn1aNiwKril3SYM4Ek9PGqNjlblzk8DpHlF9wGWYAiM2mBX1fRo5UZpwX83ia3zeSWDojYYoZfvwWSc1sc/22YQTIpaRqjfcch1YVtChGx3Fjr88txN+dCU5xH8aXKDxTq7t8TJ1g9DJxMZtdIyQ6zJkUq4hV/Y56GTicy1UpjRGzMZ5Wit076IHWdpnwksmDDqZTCOmjDs2B51nv5mXdshzMd4DVawbm2l67qCRgmxijHNuFitR2wuGblgY9fSzy05GOPjHLO9Z7m6Eb0SRqUEYWF2nG81Dl3UqtE7dcZaYqSnb0ZcLq/dtTDfLa8Gib12S8/jSHyIEYXXTgdxj0++aeQNeUmO2JZRqgJYqCfcCTnxakOegCcahbSgf6wihVSSeqnGRFWesVxwzKmCIYRS2a4kuf2D9LaVdFVWpDukW0krqXEbqjB6WnjME6s6lw9jDk8nQhX/x9Q19SKV9G3VVqNRu4kBjV7e+rbqwu/06edS+rZUXjdqXq1rxGxvEjiS97yFkzt9/A2aTNYZNrbwY0lWgclIbOrBFNN/EqUVY9NDhkJ9clkZy43S9J5eRU/35CDUJ9clx7o8O8BcY8ekCvLB4SqfKQsrcQZP+kVBa7kDki2cb2ydUkYfaPSWWNTf58qUXsumtBQmthX25MS+imJuTCFwWouO8WOUkmPFEttc8s/V6UWJbOV/J4waAuvSu7cAAAAASUVORK5CYII=",iS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVR4nO2aS0sVYRjHRwzTtmGBlzblLi/RouJ4apFF9QUCo2UoXhd+h26ifhItEEzzCxgGrhKsNqbVNrMg8cAvHnxfeHw7ozPvvEenOn+Yzcw8t/M+9zlRVEUVVRw5gBNAG3AduGOuInBBnkV5BVADdAPjwFtgh3jIs2XgOVAQ2jwYcAoYAT7ijw/AMNBwXCfwEPh6gIK7wDqwaq51cy8OX4AHR2nEGWChjCIlYA4YBC4CdWVo64B2YAiYNzQu5oDGShtx2fxyGtvG35s8+DWZuBIeGptAV6WMuAF8dwROA80BeLcAMw7vLcl0YbTffxLaiF/Ao6BC9uT0ORlvK9jJAGcddxI3uBmEeXl5PY6rbWaOGZOdFpyTqJgRFsAt52TmoiwwKVYjuDsdILvfkd2bpdjpOjEdXNvDdXih5H8G6n2YjDhxkTk7eejQCvxQegz6xIZuO555KjJmei+5xjx5TCg93qfqzUwDaLHrU+wMnynFZypDjSkpPtfSEEu1tXjlo0AoQwRO5nwSJYVxBT+/rIwhw4rPmzRDkc7h7TkwpNOpZbVJiNqc+KjLgSEnnTg5n4RIRlKLjYSCRoGnZS6ZBC2WY94ZTShjU/HqTkJwTxG8SyhkBX+sJJSxqmju/leGFP8C1yqkDfZSToK93ifY/430K3BcYig6fkNGFJ+lNISyTLCYz4Ehi4rP4zSEBSdOmnPUNF5J28bLBtBi/Bjb+Emlx1rWRk0Gq5boiAGcA34qPQZ8mDQ425OZimh7sA4vlfwNr1HXMOplP/qCaxsve8CRfT8Lsxqzi7WQ+tITVOPycm87tWw2BNNGpz3YrqQx7O209ILuE3A6FPMus77UJ9MfhPmf7rSj5HwDOkILKTrGYPZOrYGykw5sa8Thc4enwEuOm2H2ThM+RdMUu0knxVp3CnsSMTGjE4CFVN/Xpi/qkPE0ZmTtNO8sxnzomQ0WEylSs6wx41Ayud9+etuIUdxCnvun2IzG1JvPaLIB9MWaCXK/YhcasgGU5ZnsnQ75PC3zxJJ0scDVKM8AamWKM6tX+4eBgrmXbCiqoooqopD4DZWgAQzdjA4yAAAAAElFTkSuQmCC",sS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3dzWoUQRRA4ZFAtiZZJVka9QV8AX/ACApZ5R1EyS4afAPXYdC3EMW1P4+j7nUVOVJM1hm7u5p7uTkf9K4aqjj0DF0zdC8WkiRJkiRJkroDbgCPgFfA2ZrjFHjYzjHFDIAd4DvDfQO2jdI/yGfG+2iQvjHuMt1to/QLctQhyJFB+gU57hDk2CAGqQmvkFwwSC4YJBcMkgsGyQWD5AIcdrgPeRy9jjKALeDPhBi/gZvR6yiF1Zb6WKfR8y8JeAH8GBCijX0ePe/SgA3gFnBvzdHGbETPV5IkSZIkSdcXsA88u/zR6qqjjdmPnm9ZwCbwDvg7YLf3Ali2c6PnXw7wnvGW0fOv+DF1MSFIO3cveh1lsPo+mOpp9DrKwH+d5IJBcsEguWCQXDBILhgkFwySCwbJBW8MS26d7EavoxRWu7ZjnUfPv+r2+3LgldLGnrv9Pm+YvQE/UPkxJUmSJEmSpOgHBxz8x4MD2hgfHDBzjBPg14Dd3p/Ay1kndV0BbxjvdfT8SwG2Jz6eqZ27Fb2OMoAnTHcYvY4y8F8nuWCQXDBILhgkFwySCwbJBYPkgkFywVce5QLc6XCnfhC9jlKATxNifIief9UNxq8jYnzxxZLzvnr1QdtOB96uOdqY+756VZIkSZIkSVrM4h8rzbcQzwZwVgAAAABJRU5ErkJggg==",oS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABCCAYAAAACPxW5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAH7SURBVGhD7dq/SsNQFMfxJnYQHBxKUereIV2d3ARxc+sTCILgQ/QpdBKfIEgnH8HZoQ0FZ0cn8c9QuN5fORERmya5f865cL9LuJcM+ZBwh0M6sVgsFoutb4uuIppMJulgMOjNZrMP2jIupauEkvl8fr1cLh/H4/EB7RmX0JW7RKNukiS5pPWzUuo4z/MXWrdOAvAvrswKkhu4DldmjOQEbsKVGSFZTlGclv1+/1bjLmirqp6+7yzLsvuiKN5or3Ycp+jqtNQPfU7rjek3+K5P1y9aNsr3J1r3s/xJ45407mQ6nb7SVqN8Ar3jkC8gCw75ALLhkGsgKw65BLLjkCugCBxyARSDQ7aBonDIJlAcDtkCisQhG0CxOGQKFI1DJkDxONQWGAQOtQEGg0NNgUHhUBNgcDgkafDrpEZDp6IoHrIs29Nv8ZC2KtP37adpejocDvPFYvFJ215rPFULDdlqbBgSsvVcNBSk0eA3BKQREElHGgORZKQVIJKKtAZEEpFWgUga0joQSUI6ASIpSGdAJAHpFIi4kc6BiBPpBYi4kN6AiAPpFYh8IzlGFmo0Gl0ppe5ovTGN3Ol2u9u0bJTJ4Ne0ukOs8H4EKqvxuRr/ysUKRBVIKz/jsQPRP0grOCQCiH4hd23hkKTB7+p01aflkS1cLBaLxWKVdTrf5kX+OXj25HwAAAAASUVORK5CYII=",aS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2STQrCMBBG3wnsmUy68AAiLmq9j1RP1kUn7jyCrVeoMgVFJJBJwV0ffBCyeMwfLPyVsqXwHbULXDT61r9ZMtexd8LDB57fccJQBnbZMi+Mv7JPhNEsLVuKWGWR9Jsbq6TQC0eDbMr6yiHdrnC2Cr3QWCpsrEIXOKWFHXWGsLIuZTDI7qalKHoSqbNxwpYcJmmgj51LtuyNtqRz0s1PCVTmNheYywsBbeNMCHkbYwAAAABJRU5ErkJggg==",lS="/huskytales/assets/logo_big2-D2yOd-fQ.jpg",uS="/huskytales/assets/logo_big3-CucV_8_y.png",En={avatar_icon:W0,gallery_icon:$0,help_icon:G0,logo_big:Q0,logo_icon:K0,logo:Y0,pic1:X0,pic2:J0,pic3:Z0,pic4:eS,profile_img:tS,search_icon:nS,send_button:rS,add_icon:iS,menu_icon:sS,arrow_icon:oS,green_dot:aS,logo_big2:lS,logo_big3:uS};var $y={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},cS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,f=o+2<n.length,g=f?n[o+2]:0,v=a>>2,T=(a&3)<<4|d>>4;let E=(d&15)<<2|g>>6,S=g&63;f||(S=64,c||(E=64)),i.push(t[v],t[T],t[E],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||g==null||T==null)throw new hS;const E=a<<2|d>>4;if(i.push(E),g!==64){const S=d<<4&240|g>>2;if(i.push(S),T!==64){const N=g<<6&192|T;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dS=function(n){const e=qv(n);return Hv.encodeByteArray(e,!0)},Bc=function(n){return dS(n).replace(/\./g,"")},Wv=function(n){try{return Hv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof $y>"u")return;const n=$y.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wv(n[1]);return e&&JSON.parse(e)},ch=()=>{try{return pS()||mS()||gS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$v=n=>{var e,t;return(t=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gv=n=>{const e=$v(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Kv=()=>{var n;return(n=ch())===null||n===void 0?void 0:n.config},Qv=n=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Bc(JSON.stringify(t)),Bc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _S(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function vS(){var n;const e=(n=ch())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ES(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TS(){const n=Gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function IS(){return!vS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jv(){try{return typeof indexedDB=="object"}catch{return!1}}function Zv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}function AS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class Mn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=SS,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?RS(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Mn(o,d,i)}}function RS(n,e){return n.replace(CS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const CS=/\{\$([^}]+)}/g;function kS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yo(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(Gy(a)&&Gy(c)){if(!Yo(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Gy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function pl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function PS(n,e){const t=new xS(n,e);return t.subscribe.bind(t)}class xS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");NS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ef),o.error===void 0&&(o.error=Ef),o.complete===void 0&&(o.complete=Ef);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ef(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1e3,DS=2,OS=4*60*60*1e3,LS=.5;function Ky(n,e=bS,t=DS){const i=e*Math.pow(t,n),o=Math.round(LS*i*(Math.random()-.5)*2);return Math.min(OS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new yS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(US(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:MS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MS(n){return n===Ss?void 0:n}function US(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new VS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const BS={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},jS=Pe.INFO,zS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},qS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=zS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=jS,this._logHandler=qS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const HS=(n,e)=>e.some(t=>n instanceof t);let Qy,Yy;function WS(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $S(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ew=new WeakMap,Bf=new WeakMap,tw=new WeakMap,Tf=new WeakMap,Ip=new WeakMap;function GS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Vi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&ew.set(t,n)}).catch(()=>{}),Ip.set(e,n),e}function KS(n){if(Bf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Bf.set(n,e)}let jf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function QS(n){jf=n(jf)}function YS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(If(this),e,...t);return tw.set(i,e.sort?e.sort():[e]),Vi(i)}:$S().includes(n)?function(...e){return n.apply(If(this),e),Vi(ew.get(this))}:function(...e){return Vi(n.apply(If(this),e))}}function XS(n){return typeof n=="function"?YS(n):(n instanceof IDBTransaction&&KS(n),HS(n,WS())?new Proxy(n,jf):n)}function Vi(n){if(n instanceof IDBRequest)return GS(n);if(Tf.has(n))return Tf.get(n);const e=XS(n);return e!==n&&(Tf.set(n,e),Ip.set(e,n)),e}const If=n=>Ip.get(n);function nw(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Vi(c);return i&&c.addEventListener("upgradeneeded",f=>{i(Vi(c.result),f.oldVersion,f.newVersion,Vi(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const JS=["get","getKey","getAll","getAllKeys","count"],ZS=["put","add","delete","clear"],Af=new Map;function Xy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Af.get(e))return Af.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=ZS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||JS.includes(t)))return;const a=async function(c,...d){const f=this.transaction(c,o?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),o&&f.done]))[0]};return Af.set(e,a),a}QS(n=>({...n,get:(e,t,i)=>Xy(e,t)||n.get(e,t,i),has:(e,t)=>!!Xy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function tR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",Jy="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new hh("@firebase/app"),nR="@firebase/app-compat",rR="@firebase/analytics-compat",iR="@firebase/analytics",sR="@firebase/app-check-compat",oR="@firebase/app-check",aR="@firebase/auth",lR="@firebase/auth-compat",uR="@firebase/database",cR="@firebase/data-connect",hR="@firebase/database-compat",dR="@firebase/functions",fR="@firebase/functions-compat",pR="@firebase/installations",mR="@firebase/installations-compat",gR="@firebase/messaging",yR="@firebase/messaging-compat",_R="@firebase/performance",vR="@firebase/performance-compat",wR="@firebase/remote-config",ER="@firebase/remote-config-compat",TR="@firebase/storage",IR="@firebase/storage-compat",AR="@firebase/firestore",SR="@firebase/vertexai",RR="@firebase/firestore-compat",CR="firebase",kR="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="[DEFAULT]",PR={[zf]:"fire-core",[nR]:"fire-core-compat",[iR]:"fire-analytics",[rR]:"fire-analytics-compat",[oR]:"fire-app-check",[sR]:"fire-app-check-compat",[aR]:"fire-auth",[lR]:"fire-auth-compat",[uR]:"fire-rtdb",[cR]:"fire-data-connect",[hR]:"fire-rtdb-compat",[dR]:"fire-fn",[fR]:"fire-fn-compat",[pR]:"fire-iid",[mR]:"fire-iid-compat",[gR]:"fire-fcm",[yR]:"fire-fcm-compat",[_R]:"fire-perf",[vR]:"fire-perf-compat",[wR]:"fire-rc",[ER]:"fire-rc-compat",[TR]:"fire-gcs",[IR]:"fire-gcs-compat",[AR]:"fire-fst",[RR]:"fire-fst-compat",[SR]:"fire-vertex","fire-js":"fire-js",[CR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new Map,xR=new Map,Hf=new Map;function Zy(n,e){try{n.container.addComponent(e)}catch(t){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function er(n){const e=n.name;if(Hf.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Hf.set(e,n);for(const t of jc.values())Zy(t,n);for(const t of xR.values())Zy(t,n);return!0}function Gi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mi=new Fs("app","Firebase",NR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=kR;function rw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:qf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Mi.create("bad-app-name",{appName:String(o)});if(t||(t=Kv()),!t)throw Mi.create("no-options");const a=jc.get(o);if(a){if(Yo(t,a.options)&&Yo(i,a.config))return a;throw Mi.create("duplicate-app",{appName:o})}const c=new FS(o);for(const f of Hf.values())c.addComponent(f);const d=new bR(t,i,c);return jc.set(o,d),d}function dh(n=qf){const e=jc.get(n);if(!e&&n===qf&&Kv())return rw();if(!e)throw Mi.create("no-app",{appName:n});return e}function dn(n,e,t){var i;let o=(i=PR[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(d.join(" "));return}er(new Vn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="firebase-heartbeat-database",OR=1,Cl="firebase-heartbeat-store";let Sf=null;function iw(){return Sf||(Sf=nw(DR,OR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mi.create("idb-open",{originalErrorMessage:n.message})})),Sf}async function LR(n){try{const t=(await iw()).transaction(Cl),i=await t.objectStore(Cl).get(sw(n));return await t.done,i}catch(e){if(e instanceof Mn)Yr.warn(e.message);else{const t=Mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(t.message)}}}async function e_(n,e){try{const i=(await iw()).transaction(Cl,"readwrite");await i.objectStore(Cl).put(e,sw(n)),await i.done}catch(t){if(t instanceof Mn)Yr.warn(t.message);else{const i=Mi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yr.warn(i.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=1024,MR=30*24*60*60*1e3;class UR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new BR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=t_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=MR}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Yr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=t_(),{heartbeatsToSend:i,unsentEntries:o}=FR(this._heartbeatsCache.heartbeats),a=Bc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Yr.warn(t),""}}}function t_(){return new Date().toISOString().substring(0,10)}function FR(n,e=VR){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),n_(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),n_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class BR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jv()?Zv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await LR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return e_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return e_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function n_(n){return Bc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n){er(new Vn("platform-logger",e=>new eR(e),"PRIVATE")),er(new Vn("heartbeat",e=>new UR(e),"PRIVATE")),dn(zf,Jy,n),dn(zf,Jy,"esm2017"),dn("fire-js","")}jR("");var r_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ui,ow;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function R(){}R.prototype=A.prototype,P.D=A.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(b,O,F){for(var x=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)x[tt-2]=arguments[tt];return A.prototype[O].apply(b,x)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,A,R){R||(R=0);var b=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)b[O]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(O=0;16>O;++O)b[O]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=P.g[0],R=P.g[1],O=P.g[2];var F=P.g[3],x=A+(F^R&(O^F))+b[0]+3614090360&4294967295;A=R+(x<<7&4294967295|x>>>25),x=F+(O^A&(R^O))+b[1]+3905402710&4294967295,F=A+(x<<12&4294967295|x>>>20),x=O+(R^F&(A^R))+b[2]+606105819&4294967295,O=F+(x<<17&4294967295|x>>>15),x=R+(A^O&(F^A))+b[3]+3250441966&4294967295,R=O+(x<<22&4294967295|x>>>10),x=A+(F^R&(O^F))+b[4]+4118548399&4294967295,A=R+(x<<7&4294967295|x>>>25),x=F+(O^A&(R^O))+b[5]+1200080426&4294967295,F=A+(x<<12&4294967295|x>>>20),x=O+(R^F&(A^R))+b[6]+2821735955&4294967295,O=F+(x<<17&4294967295|x>>>15),x=R+(A^O&(F^A))+b[7]+4249261313&4294967295,R=O+(x<<22&4294967295|x>>>10),x=A+(F^R&(O^F))+b[8]+1770035416&4294967295,A=R+(x<<7&4294967295|x>>>25),x=F+(O^A&(R^O))+b[9]+2336552879&4294967295,F=A+(x<<12&4294967295|x>>>20),x=O+(R^F&(A^R))+b[10]+4294925233&4294967295,O=F+(x<<17&4294967295|x>>>15),x=R+(A^O&(F^A))+b[11]+2304563134&4294967295,R=O+(x<<22&4294967295|x>>>10),x=A+(F^R&(O^F))+b[12]+1804603682&4294967295,A=R+(x<<7&4294967295|x>>>25),x=F+(O^A&(R^O))+b[13]+4254626195&4294967295,F=A+(x<<12&4294967295|x>>>20),x=O+(R^F&(A^R))+b[14]+2792965006&4294967295,O=F+(x<<17&4294967295|x>>>15),x=R+(A^O&(F^A))+b[15]+1236535329&4294967295,R=O+(x<<22&4294967295|x>>>10),x=A+(O^F&(R^O))+b[1]+4129170786&4294967295,A=R+(x<<5&4294967295|x>>>27),x=F+(R^O&(A^R))+b[6]+3225465664&4294967295,F=A+(x<<9&4294967295|x>>>23),x=O+(A^R&(F^A))+b[11]+643717713&4294967295,O=F+(x<<14&4294967295|x>>>18),x=R+(F^A&(O^F))+b[0]+3921069994&4294967295,R=O+(x<<20&4294967295|x>>>12),x=A+(O^F&(R^O))+b[5]+3593408605&4294967295,A=R+(x<<5&4294967295|x>>>27),x=F+(R^O&(A^R))+b[10]+38016083&4294967295,F=A+(x<<9&4294967295|x>>>23),x=O+(A^R&(F^A))+b[15]+3634488961&4294967295,O=F+(x<<14&4294967295|x>>>18),x=R+(F^A&(O^F))+b[4]+3889429448&4294967295,R=O+(x<<20&4294967295|x>>>12),x=A+(O^F&(R^O))+b[9]+568446438&4294967295,A=R+(x<<5&4294967295|x>>>27),x=F+(R^O&(A^R))+b[14]+3275163606&4294967295,F=A+(x<<9&4294967295|x>>>23),x=O+(A^R&(F^A))+b[3]+4107603335&4294967295,O=F+(x<<14&4294967295|x>>>18),x=R+(F^A&(O^F))+b[8]+1163531501&4294967295,R=O+(x<<20&4294967295|x>>>12),x=A+(O^F&(R^O))+b[13]+2850285829&4294967295,A=R+(x<<5&4294967295|x>>>27),x=F+(R^O&(A^R))+b[2]+4243563512&4294967295,F=A+(x<<9&4294967295|x>>>23),x=O+(A^R&(F^A))+b[7]+1735328473&4294967295,O=F+(x<<14&4294967295|x>>>18),x=R+(F^A&(O^F))+b[12]+2368359562&4294967295,R=O+(x<<20&4294967295|x>>>12),x=A+(R^O^F)+b[5]+4294588738&4294967295,A=R+(x<<4&4294967295|x>>>28),x=F+(A^R^O)+b[8]+2272392833&4294967295,F=A+(x<<11&4294967295|x>>>21),x=O+(F^A^R)+b[11]+1839030562&4294967295,O=F+(x<<16&4294967295|x>>>16),x=R+(O^F^A)+b[14]+4259657740&4294967295,R=O+(x<<23&4294967295|x>>>9),x=A+(R^O^F)+b[1]+2763975236&4294967295,A=R+(x<<4&4294967295|x>>>28),x=F+(A^R^O)+b[4]+1272893353&4294967295,F=A+(x<<11&4294967295|x>>>21),x=O+(F^A^R)+b[7]+4139469664&4294967295,O=F+(x<<16&4294967295|x>>>16),x=R+(O^F^A)+b[10]+3200236656&4294967295,R=O+(x<<23&4294967295|x>>>9),x=A+(R^O^F)+b[13]+681279174&4294967295,A=R+(x<<4&4294967295|x>>>28),x=F+(A^R^O)+b[0]+3936430074&4294967295,F=A+(x<<11&4294967295|x>>>21),x=O+(F^A^R)+b[3]+3572445317&4294967295,O=F+(x<<16&4294967295|x>>>16),x=R+(O^F^A)+b[6]+76029189&4294967295,R=O+(x<<23&4294967295|x>>>9),x=A+(R^O^F)+b[9]+3654602809&4294967295,A=R+(x<<4&4294967295|x>>>28),x=F+(A^R^O)+b[12]+3873151461&4294967295,F=A+(x<<11&4294967295|x>>>21),x=O+(F^A^R)+b[15]+530742520&4294967295,O=F+(x<<16&4294967295|x>>>16),x=R+(O^F^A)+b[2]+3299628645&4294967295,R=O+(x<<23&4294967295|x>>>9),x=A+(O^(R|~F))+b[0]+4096336452&4294967295,A=R+(x<<6&4294967295|x>>>26),x=F+(R^(A|~O))+b[7]+1126891415&4294967295,F=A+(x<<10&4294967295|x>>>22),x=O+(A^(F|~R))+b[14]+2878612391&4294967295,O=F+(x<<15&4294967295|x>>>17),x=R+(F^(O|~A))+b[5]+4237533241&4294967295,R=O+(x<<21&4294967295|x>>>11),x=A+(O^(R|~F))+b[12]+1700485571&4294967295,A=R+(x<<6&4294967295|x>>>26),x=F+(R^(A|~O))+b[3]+2399980690&4294967295,F=A+(x<<10&4294967295|x>>>22),x=O+(A^(F|~R))+b[10]+4293915773&4294967295,O=F+(x<<15&4294967295|x>>>17),x=R+(F^(O|~A))+b[1]+2240044497&4294967295,R=O+(x<<21&4294967295|x>>>11),x=A+(O^(R|~F))+b[8]+1873313359&4294967295,A=R+(x<<6&4294967295|x>>>26),x=F+(R^(A|~O))+b[15]+4264355552&4294967295,F=A+(x<<10&4294967295|x>>>22),x=O+(A^(F|~R))+b[6]+2734768916&4294967295,O=F+(x<<15&4294967295|x>>>17),x=R+(F^(O|~A))+b[13]+1309151649&4294967295,R=O+(x<<21&4294967295|x>>>11),x=A+(O^(R|~F))+b[4]+4149444226&4294967295,A=R+(x<<6&4294967295|x>>>26),x=F+(R^(A|~O))+b[11]+3174756917&4294967295,F=A+(x<<10&4294967295|x>>>22),x=O+(A^(F|~R))+b[2]+718787259&4294967295,O=F+(x<<15&4294967295|x>>>17),x=R+(F^(O|~A))+b[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(O+(x<<21&4294967295|x>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+F&4294967295}i.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var R=A-this.blockSize,b=this.B,O=this.h,F=0;F<A;){if(O==0)for(;F<=R;)o(this,P,F),F+=this.blockSize;if(typeof P=="string"){for(;F<A;)if(b[O++]=P.charCodeAt(F++),O==this.blockSize){o(this,b),O=0;break}}else for(;F<A;)if(b[O++]=P[F++],O==this.blockSize){o(this,b),O=0;break}}this.h=O,this.o+=A},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var R=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=R&255,R/=256;for(this.u(P),P=Array(16),A=R=0;4>A;++A)for(var b=0;32>b;b+=8)P[R++]=this.g[A]>>>b&255;return P};function a(P,A){var R=d;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=A(P)}function c(P,A){this.h=A;for(var R=[],b=!0,O=P.length-1;0<=O;O--){var F=P[O]|0;b&&F==A||(R[O]=F,b=!1)}this.g=R}var d={};function f(P){return-128<=P&&128>P?a(P,function(A){return new c([A|0],0>A?-1:0)}):new c([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return k(g(-P));for(var A=[],R=1,b=0;P>=R;b++)A[b]=P/R|0,R*=4294967296;return new c(A,0)}function v(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return k(v(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(A,8)),b=T,O=0;O<P.length;O+=8){var F=Math.min(8,P.length-O),x=parseInt(P.substring(O,O+F),A);8>F?(F=g(Math.pow(A,F)),b=b.j(F).add(g(x))):(b=b.j(R),b=b.add(g(x)))}return b}var T=f(0),E=f(1),S=f(16777216);n=c.prototype,n.m=function(){if(V(this))return-k(this).m();for(var P=0,A=1,R=0;R<this.g.length;R++){var b=this.i(R);P+=(0<=b?b:4294967296+b)*A,A*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(N(this))return"0";if(V(this))return"-"+k(this).toString(P);for(var A=g(Math.pow(P,6)),R=this,b="";;){var O=K(R,A).g;R=M(R,O.j(A));var F=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=O,N(R))return F+b;for(;6>F.length;)F="0"+F;b=F+b}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function N(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function V(P){return P.h==-1}n.l=function(P){return P=M(this,P),V(P)?-1:N(P)?0:1};function k(P){for(var A=P.g.length,R=[],b=0;b<A;b++)R[b]=~P.g[b];return new c(R,~P.h).add(E)}n.abs=function(){return V(this)?k(this):this},n.add=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],b=0,O=0;O<=A;O++){var F=b+(this.i(O)&65535)+(P.i(O)&65535),x=(F>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);b=x>>>16,F&=65535,x&=65535,R[O]=x<<16|F}return new c(R,R[R.length-1]&-2147483648?-1:0)};function M(P,A){return P.add(k(A))}n.j=function(P){if(N(this)||N(P))return T;if(V(this))return V(P)?k(this).j(k(P)):k(k(this).j(P));if(V(P))return k(this.j(k(P)));if(0>this.l(S)&&0>P.l(S))return g(this.m()*P.m());for(var A=this.g.length+P.g.length,R=[],b=0;b<2*A;b++)R[b]=0;for(b=0;b<this.g.length;b++)for(var O=0;O<P.g.length;O++){var F=this.i(b)>>>16,x=this.i(b)&65535,tt=P.i(O)>>>16,mt=P.i(O)&65535;R[2*b+2*O]+=x*mt,U(R,2*b+2*O),R[2*b+2*O+1]+=F*mt,U(R,2*b+2*O+1),R[2*b+2*O+1]+=x*tt,U(R,2*b+2*O+1),R[2*b+2*O+2]+=F*tt,U(R,2*b+2*O+2)}for(b=0;b<A;b++)R[b]=R[2*b+1]<<16|R[2*b];for(b=A;b<2*A;b++)R[b]=0;return new c(R,0)};function U(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function H(P,A){this.g=P,this.h=A}function K(P,A){if(N(A))throw Error("division by zero");if(N(P))return new H(T,T);if(V(P))return A=K(k(P),A),new H(k(A.g),k(A.h));if(V(A))return A=K(P,k(A)),new H(k(A.g),A.h);if(30<P.g.length){if(V(P)||V(A))throw Error("slowDivide_ only works with positive integers.");for(var R=E,b=A;0>=b.l(P);)R=se(R),b=se(b);var O=oe(R,1),F=oe(b,1);for(b=oe(b,2),R=oe(R,2);!N(b);){var x=F.add(b);0>=x.l(P)&&(O=O.add(R),F=x),b=oe(b,1),R=oe(R,1)}return A=M(P,O.j(A)),new H(O,A)}for(O=T;0<=P.l(A);){for(R=Math.max(1,Math.floor(P.m()/A.m())),b=Math.ceil(Math.log(R)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),F=g(R),x=F.j(A);V(x)||0<x.l(P);)R-=b,F=g(R),x=F.j(A);N(F)&&(F=E),O=O.add(F),P=M(P,x)}return new H(O,P)}n.A=function(P){return K(this,P).h},n.and=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],b=0;b<A;b++)R[b]=this.i(b)&P.i(b);return new c(R,this.h&P.h)},n.or=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],b=0;b<A;b++)R[b]=this.i(b)|P.i(b);return new c(R,this.h|P.h)},n.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],b=0;b<A;b++)R[b]=this.i(b)^P.i(b);return new c(R,this.h^P.h)};function se(P){for(var A=P.g.length+1,R=[],b=0;b<A;b++)R[b]=P.i(b)<<1|P.i(b-1)>>>31;return new c(R,P.h)}function oe(P,A){var R=A>>5;A%=32;for(var b=P.g.length-R,O=[],F=0;F<b;F++)O[F]=0<A?P.i(F+R)>>>A|P.i(F+R+1)<<32-A:P.i(F+R);return new c(O,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,ow=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ui=c}).apply(typeof r_<"u"?r_:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aw,ml,lw,kc,Wf,uw,cw,hw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var j=u[I];if(!(j in _))break e;_=_[j]}u=u[u.length-1],I=_[u],m=m(I),m!=I&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,I=!1,j={next:function(){if(!I&&_<u.length){var G=_++;return{value:m(G,u[G]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function f(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function g(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function E(u,m,_){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,E.apply(null,arguments)}function S(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function N(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(I,j,G){for(var ie=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ie[ze-2]=arguments[ze];return m.prototype[j].apply(I,ie)}}function V(u){const m=u.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=u[I];return _}return[]}function k(u,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const j=u.length||0,G=I.length||0;u.length=j+G;for(let ie=0;ie<G;ie++)u[j+ie]=I[ie]}else u.push(I)}}class M{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function U(u){return/^[\s\xa0]*$/.test(u)}function H(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function K(u){return K[" "](u),u}K[" "]=function(){};var se=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function oe(u,m,_){for(const I in u)m.call(_,u[I],I,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function A(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,m){let _,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(_ in I)u[_]=I[_];for(let G=0;G<R.length;G++)_=R[G],Object.prototype.hasOwnProperty.call(I,_)&&(u[_]=I[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function F(u){d.setTimeout(()=>{throw u},0)}function x(){var u=ye;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,_){const I=mt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var mt=new M(()=>new gt,u=>u.reset());class gt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,re=!1,ye=new tt,le=()=>{const u=d.Promise.resolve(void 0);Me=()=>{u.then(B)}};var B=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(_){F(_)}var m=mt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ce(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(se){e:{try{K(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}N(Ce,me);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Fe="closure_listenable_"+(1e6*Math.random()|0),Be=0;function He(u,m,_,I,j){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=j,this.key=++Be,this.da=this.fa=!1}function St(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Sr(u){this.src=u,this.g={},this.h=0}Sr.prototype.add=function(u,m,_,I,j){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var ie=ii(u,m,I,j);return-1<ie?(m=u[ie],_||(m.fa=!1)):(m=new He(m,this.src,G,!!I,j),m.fa=_,u.push(m)),m};function Ws(u,m){var _=m.type;if(_ in u.g){var I=u.g[_],j=Array.prototype.indexOf.call(I,m,void 0),G;(G=0<=j)&&Array.prototype.splice.call(I,j,1),G&&(St(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ii(u,m,_,I){for(var j=0;j<u.length;++j){var G=u[j];if(!G.da&&G.listener==m&&G.capture==!!_&&G.ha==I)return j}return-1}var Xi="closure_lm_"+(1e6*Math.random()|0),$s={};function ma(u,m,_,I,j){if(Array.isArray(m)){for(var G=0;G<m.length;G++)ma(u,m[G],_,I,j);return null}return _=_a(_),u&&u[Fe]?u.K(m,_,g(I)?!!I.capture:!1,j):ga(u,m,_,!1,I,j)}function ga(u,m,_,I,j,G){if(!m)throw Error("Invalid event type");var ie=g(j)?!!j.capture:!!j,ze=Ks(u);if(ze||(u[Xi]=ze=new Sr(u)),_=ze.add(m,_,I,ie,G),_.proxy)return _;if(I=eu(),_.proxy=I,I.src=u,I.listener=_,u.addEventListener)Se||(j=ie),j===void 0&&(j=!1),u.addEventListener(m.toString(),I,j);else if(u.attachEvent)u.attachEvent(Cr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function eu(){function u(_){return m.call(u.src,u.listener,_)}const m=ya;return u}function Gs(u,m,_,I,j){if(Array.isArray(m))for(var G=0;G<m.length;G++)Gs(u,m[G],_,I,j);else I=g(I)?!!I.capture:!!I,_=_a(_),u&&u[Fe]?(u=u.i,m=String(m).toString(),m in u.g&&(G=u.g[m],_=ii(G,_,I,j),-1<_&&(St(G[_]),Array.prototype.splice.call(G,_,1),G.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ii(m,_,I,j)),(_=-1<u?m[u]:null)&&Rr(_))}function Rr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Fe])Ws(m.i,u);else{var _=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(_,I,u.capture):m.detachEvent?m.detachEvent(Cr(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=Ks(m))?(Ws(_,u),_.h==0&&(_.src=null,m[Xi]=null)):St(u)}}}function Cr(u){return u in $s?$s[u]:$s[u]="on"+u}function ya(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var _=u.listener,I=u.ha||u.src;u.fa&&Rr(u),u=_.call(I,m)}return u}function Ks(u){return u=u[Xi],u instanceof Sr?u:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(u){return typeof u=="function"?u:(u[Qs]||(u[Qs]=function(m){return u.handleEvent(m)}),u[Qs])}function yt(){Y.call(this),this.i=new Sr(this),this.M=this,this.F=null}N(yt,Y),yt.prototype[Fe]=!0,yt.prototype.removeEventListener=function(u,m,_,I){Gs(this,u,m,_,I)};function _t(u,m){var _,I=u.F;if(I)for(_=[];I;I=I.F)_.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var j=m;m=new me(I,u),b(m,j)}if(j=!0,_)for(var G=_.length-1;0<=G;G--){var ie=m.g=_[G];j=kr(ie,I,!0,m)&&j}if(ie=m.g=u,j=kr(ie,I,!0,m)&&j,j=kr(ie,I,!1,m)&&j,_)for(G=0;G<_.length;G++)ie=m.g=_[G],j=kr(ie,I,!1,m)&&j}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],I=0;I<_.length;I++)St(_[I]);delete u.g[m],u.h--}}this.F=null},yt.prototype.K=function(u,m,_,I){return this.i.add(String(u),m,!1,_,I)},yt.prototype.L=function(u,m,_,I){return this.i.add(String(u),m,!0,_,I)};function kr(u,m,_,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,G=0;G<m.length;++G){var ie=m[G];if(ie&&!ie.da&&ie.capture==_){var ze=ie.listener,vt=ie.ha||ie.src;ie.fa&&Ws(u.i,ie),j=ze.call(vt,I)!==!1&&j}}return j&&!I.defaultPrevented}function va(u,m,_){if(typeof u=="function")_&&(u=E(u,_));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function si(u){u.g=va(()=>{u.g=null,u.i&&(u.i=!1,si(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ji extends Y{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(u){Y.call(this),this.h=u,this.g={}}N(Zi,Y);var wa=[];function Ea(u){oe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Rr(m)},u),u.g={}}Zi.prototype.N=function(){Zi.aa.N.call(this),Ea(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=d.JSON.stringify,Ia=d.JSON.parse,Aa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function es(){}es.prototype.h=null;function Ys(u){return u.h||(u.h=u.i())}function Xs(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rr(){me.call(this,"d")}N(rr,me);function Js(){me.call(this,"c")}N(Js,me);var ir={},Sa=null;function ts(){return Sa=Sa||new yt}ir.La="serverreachability";function Ra(u){me.call(this,ir.La,u)}N(Ra,me);function Pr(u){const m=ts();_t(m,new Ra(m))}ir.STAT_EVENT="statevent";function Ca(u,m){me.call(this,ir.STAT_EVENT,u),this.stat=m}N(Ca,me);function lt(u){const m=ts();_t(m,new Ca(m,u))}ir.Ma="timingevent";function Zs(u,m){me.call(this,ir.Ma,u),this.size=m}N(Zs,me);function Un(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function ns(){this.g=!0}ns.prototype.xa=function(){this.g=!1};function rs(u,m,_,I,j,G){u.info(function(){if(u.g)if(G)for(var ie="",ze=G.split("&"),vt=0;vt<ze.length;vt++){var Oe=ze[vt].split("=");if(1<Oe.length){var Rt=Oe[0];Oe=Oe[1];var ht=Rt.split("_");ie=2<=ht.length&&ht[1]=="type"?ie+(Rt+"="+Oe+"&"):ie+(Rt+"=redacted&")}}else ie=null;else ie=G;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+m+`
`+_+`
`+ie})}function eo(u,m,_,I,j,G,ie){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+m+`
`+_+`
`+G+" "+ie})}function Fn(u,m,_,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+jh(u,_)+(I?" "+I:"")})}function ka(u,m){u.info(function(){return"TIMEOUT: "+m})}ns.prototype.info=function(){};function jh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var I=_[u];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return Ta(_)}catch{return m}}var to={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bn;function is(){}N(is,es),is.prototype.g=function(){return new XMLHttpRequest},is.prototype.i=function(){return{}},Bn=new is;function jn(u,m,_,I){this.j=u,this.i=m,this.l=_,this.R=I||1,this.U=new Zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var Pa={},no={};function ro(u,m,_){u.L=1,u.v=ci(mn(m)),u.m=_,u.P=!0,xa(u,null)}function xa(u,m){u.F=Date.now(),We(u),u.A=mn(u.v);var _=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),di(_.i,"t",I),u.C=0,_=u.j.J,u.h=new nu,u.g=wu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ji(E(u.Y,u,u.g),u.O)),m=u.U,_=u.g,I=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(wa[0]=j.toString()),j=wa);for(var G=0;G<j.length;G++){var ie=ma(_,j[G],I||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Pr(),rs(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const m=this.M;m&&tn(u)==3?m.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const ht=tn(this.g);var m=this.g.Ba();const kn=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Va(this.g)))){this.J||ht!=4||m==7||(m==8||0>=kn?Pr(3):Pr(2)),ss(this);var _=this.g.Z();this.X=_;t:if(ru(this)){var I=Va(this.g);u="";var j=I.length,G=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),oi(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(G&&m==j-1)});I.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,eo(this.i,this.u,this.A,this.l,this.R,ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,vt=this.g;if((ze=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(ze)){var Oe=ze;break t}}Oe=null}if(_=Oe)Fn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,_);else{this.o=!1,this.s=3,lt(12),Rn(this),oi(this);break e}}if(this.P){_=!0;let yn;for(;!this.J&&this.C<ie.length;)if(yn=zh(this,ie),yn==no){ht==4&&(this.s=4,lt(14),_=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Pa){this.s=4,lt(15),Fn(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Fn(this.i,this.l,yn,null),Na(this,yn);if(ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||ie.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)Fn(this.i,this.l,ie,"[Invalid Chunked Response]"),Rn(this),oi(this);else if(0<ie.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ua(Rt),Rt.M=!0,lt(11))}}else Fn(this.i,this.l,ie,null),Na(this,ie);ht==4&&Rn(this),this.o&&!this.J&&(ht==4?mo(this.j,this):(this.o=!1,We(this)))}else uo(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Rn(this),oi(this)}}}catch{}finally{}};function ru(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function zh(u,m){var _=u.C,I=m.indexOf(`
`,_);return I==-1?no:(_=Number(m.substring(_,I)),isNaN(_)?Pa:(I+=1,I+_>m.length?no:(m=m.slice(I,I+_),u.C=I+_,m)))}jn.prototype.cancel=function(){this.J=!0,Rn(this)};function We(u){u.S=Date.now()+u.I,iu(u,u.I)}function iu(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Un(E(u.ba,u),m)}function ss(u){u.B&&(d.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ka(this.i,this.A),this.L!=2&&(Pr(),lt(17)),Rn(this),this.s=2,oi(this)):iu(this,this.S-u)};function oi(u){u.j.G==0||u.J||mo(u.j,u)}function Rn(u){ss(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Ea(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Na(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Kt(_.h,u))){if(!u.K&&Kt(_.h,u)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)po(_),$n(_);else break e;fo(_),lt(18)}}else _.za=j[1],0<_.za-_.T&&37500>j[2]&&_.F&&_.v==0&&!_.C&&(_.C=Un(E(_.Za,_),6e3));if(1>=ou(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Or(_,11)}else if((u.K||_.g==u)&&po(_),!U(m))for(j=_.Da.g.parse(m),m=0;m<j.length;m++){let Oe=j[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Rt=Oe[3];Rt!=null&&(_.la=Rt,_.j.info("VER="+_.la));const ht=Oe[4];ht!=null&&(_.Aa=ht,_.j.info("SVER="+_.Aa));const kn=Oe[5];kn!=null&&typeof kn=="number"&&0<kn&&(I=1.5*kn,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const yn=u.g;if(yn){const ds=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var G=I.h;G.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(ba(G,G.h),G.h=null))}if(I.D){const yo=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;yo&&(I.ya=yo,qe(I.I,I.D,yo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var ie=u;if(I.qa=vu(I,I.J?I.ia:null,I.W),ie.K){au(I.h,ie);var ze=ie,vt=I.L;vt&&(ze.I=vt),ze.B&&(ss(ze),We(ze)),I.g=ie}else hs(I);0<_.i.length&&lr(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Or(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Or(_,7):Dt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Pr(4)}catch{}}var su=class{constructor(u,m){this.g=u,this.map=m}};function os(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ou(u){return u.h?1:u.g?u.g.size:0}function Kt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ba(u,m){u.g?u.g.add(m):u.h=m}function au(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}os.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function lu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return V(u.i)}function io(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(f(u)){for(var m=[],_=u.length,I=0;I<_;I++)m.push(u[I]);return m}m=[],_=0;for(I in u)m[_++]=u[I];return m}function so(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(f(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const I in u)m[_++]=I;return m}}}function ai(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(f(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=so(u),I=io(u),j=I.length,G=0;G<j;G++)m.call(void 0,I[G],_&&_[G],u)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var I=u[_].indexOf("="),j=null;if(0<=I){var G=u[_].substring(0,I);j=u[_].substring(I+1)}else G=u[_];m(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function xr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof xr){this.h=u.h,ls(this,u.j),this.o=u.o,this.g=u.g,li(this,u.s),this.l=u.l;var m=u.i,_=new sr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ui(this,_),this.m=u.m}else u&&(m=String(u).match(as))?(this.h=!1,ls(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),li(this,m[4]),this.l=Ne(m[5]||"",!0),ui(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}xr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(hi(m,oo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(hi(m,oo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(hi(_,_.charAt(0)=="/"?hu:cu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",hi(_,Da)),u.join("")};function mn(u){return new xr(u)}function ls(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function li(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ui(u,m,_){m instanceof sr?(u.i=m,or(u.i,u.h)):(_||(m=hi(m,du)),u.i=new sr(m,u.h))}function qe(u,m,_){u.i.set(m,_)}function ci(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,uu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function uu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oo=/[#\/\?@]/g,cu=/[#\?:]/g,hu=/[#\?]/g,du=/[#\?@]/g,Da=/#/g;function sr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&qh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=sr.prototype,n.add=function(u,m){bt(this),this.i=null,u=Cn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function zn(u,m){bt(u),m=Cn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function qn(u,m){return bt(u),m=Cn(u,m),u.g.has(m)}n.forEach=function(u,m){bt(this),this.g.forEach(function(_,I){_.forEach(function(j){u.call(m,j,I,this)},this)},this)},n.na=function(){bt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const j=u[I];for(let G=0;G<j.length;G++)_.push(m[I])}return _},n.V=function(u){bt(this);let m=[];if(typeof u=="string")qn(this,u)&&(m=m.concat(this.g.get(Cn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return bt(this),this.i=null,u=Cn(this,u),qn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function di(u,m,_){zn(u,m),0<_.length&&(u.i=null,u.g.set(Cn(u,m),V(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const G=encodeURIComponent(String(I)),ie=this.V(I);for(I=0;I<ie.length;I++){var j=G;ie[I]!==""&&(j+="="+encodeURIComponent(String(ie[I]))),u.push(j)}}return this.i=u.join("&")};function Cn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function or(u,m){m&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(_,I){var j=I.toLowerCase();I!=j&&(zn(this,I),di(this,j,_))},u)),u.j=m}function Hh(u,m){const _=new ns;if(d.Image){const I=new Image;I.onload=S(en,_,"TestLoadImage: loaded",!0,m,I),I.onerror=S(en,_,"TestLoadImage: error",!1,m,I),I.onabort=S(en,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=S(en,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function fu(u,m){const _=new ns,I=new AbortController,j=setTimeout(()=>{I.abort(),en(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(G=>{clearTimeout(j),G.ok?en(_,"TestPingServer: ok",!0,m):en(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),en(_,"TestPingServer: error",!1,m)})}function en(u,m,_,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(_)}catch{}}function Wh(){this.g=new Aa}function pu(u,m,_){const I=_||"";try{ai(u,function(j,G){let ie=j;g(j)&&(ie=Ta(j)),m.push(I+G+"="+encodeURIComponent(ie))})}catch(j){throw m.push(I+"type="+encodeURIComponent("_badmap")),j}}function Nr(u){this.l=u.Ub||null,this.j=u.eb||!1}N(Nr,es),Nr.prototype.g=function(){return new us(this.l,this.j)},Nr.prototype.i=function(u){return function(){return u}}({});function us(u,m){yt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(us,yt),n=us.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Hn(this):Wn(this),this.readyState==3&&mu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Hn(this))},n.Qa=function(u){this.g&&(this.response=u,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function br(u){let m="";return oe(u,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function fi(u,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=br(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):qe(u,m,_))}function Ze(u){yt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ze,yt);var $h=/^https?$/i,Oa=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bn.g(),this.v=this.o?Ys(this.o):Ys(Bn),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(G){cs(this,G);return}if(u=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)_.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const G of I.keys())_.set(G,I.get(G));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(G=>G.toLowerCase()=="content-type"),j=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,m,void 0))||I||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,ie]of _)this.g.setRequestHeader(G,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lo(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){cs(this,G)}};function cs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ao(u),gn(u)}function ao(u){u.A||(u.A=!0,_t(u,"complete"),_t(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,_t(this,"complete"),_t(this,"abort"),gn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?La(this):this.bb())},n.bb=function(){La(this)};function La(u){if(u.h&&typeof c<"u"&&(!u.v[1]||tn(u)!=4||u.Z()!=2)){if(u.u&&tn(u)==4)va(u.Ea,0,u);else if(_t(u,"readystatechange"),tn(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=ie===0){var j=String(u.D).match(as)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),I=!$h.test(j?j.toLowerCase():"")}_=I}if(_)_t(u,"complete"),_t(u,"success");else{u.m=6;try{var G=2<tn(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",ao(u)}}finally{gn(u)}}}}function gn(u,m){if(u.g){lo(u);const _=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||_t(u,"ready");try{_.onreadystatechange=I}catch{}}}function lo(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function tn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ia(m)}};function Va(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function uo(u){const m={};u=(u.g&&2<=tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(U(u[I]))continue;var _=O(u[I]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const G=m[j]||[];m[j]=G,G.push(_)}P(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ma(u){this.Aa=0,this.i=[],this.j=new ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,u),this.cb=ar("retryDelaySeedMs",1e4,u),this.Wa=ar("forwardChannelMaxRetries",2,u),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new os(u&&u.concurrentRequestLimit),this.Da=new Wh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ma.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,I){lt(0),this.W=u,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=vu(this,null,this.W),lr(this)};function Dt(u){if(co(u),u.G==3){var m=u.U++,_=mn(u.I);if(qe(_,"SID",u.K),qe(_,"RID",m),qe(_,"TYPE","terminate"),Dr(u,_),m=new jn(u,u.j,m),m.L=2,m.v=ci(mn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=wu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}_u(u)}function $n(u){u.g&&(Ua(u),u.g.cancel(),u.g=null)}function co(u){$n(u),u.u&&(d.clearTimeout(u.u),u.u=null),po(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function lr(u){if(!pn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Me||le(),re||(Me(),re=!0),ye.add(m,u),u.B=0}}function Gh(u,m){return ou(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Un(E(u.Ga,u,m),yu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new jn(this,this.j,u);let G=this.o;if(this.S&&(G?(G=A(G),b(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=pi(this,j,m),_=mn(this.I),qe(_,"RID",u),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),Dr(this,_),G&&(this.O?m="headers="+encodeURIComponent(String(br(G)))+"&"+m:this.m&&fi(_,this.m,G)),ba(this.h,j),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",m),qe(_,"SID","null"),j.T=!0,ro(j,_,null)):ro(j,_,m),this.G=2}}else this.G==3&&(u?ho(this,u):this.i.length==0||pn(this.h)||ho(this))};function ho(u,m){var _;m?_=m.l:_=u.U++;const I=mn(u.I);qe(I,"SID",u.K),qe(I,"RID",_),qe(I,"AID",u.T),Dr(u,I),u.m&&u.o&&fi(I,u.m,u.o),_=new jn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=pi(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ba(u.h,_),ro(_,I,m)}function Dr(u,m){u.H&&oe(u.H,function(_,I){qe(m,I,_)}),u.l&&ai({},function(_,I){qe(m,I,_)})}function pi(u,m,_){_=Math.min(u.i.length,_);var I=u.l?E(u.l.Na,u.l,u):null;e:{var j=u.i;let G=-1;for(;;){const ie=["count="+_];G==-1?0<_?(G=j[0].g,ie.push("ofs="+G)):G=0:ie.push("ofs="+G);let ze=!0;for(let vt=0;vt<_;vt++){let Oe=j[vt].g;const Rt=j[vt].map;if(Oe-=G,0>Oe)G=Math.max(0,j[vt].g-100),ze=!1;else try{pu(Rt,ie,"req"+Oe+"_")}catch{I&&I(Rt)}}if(ze){I=ie.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,I}function hs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Me||le(),re||(Me(),re=!0),ye.add(m,u),u.v=0}}function fo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Un(E(u.Fa,u),yu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Un(E(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),$n(this),gu(this))};function Ua(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function gu(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=mn(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),Dr(u,m),u.m&&u.o&&fi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ci(mn(m)),_.m=null,_.P=!0,xa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),fo(this),lt(19))};function po(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function mo(u,m){var _=null;if(u.g==m){po(u),Ua(u),u.g=null;var I=2}else if(Kt(u.h,m))_=m.D,au(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;I=ts(),_t(I,new Zs(I,_)),lr(u)}else hs(u);else if(j=m.s,j==3||j==0&&0<m.X||!(I==1&&Gh(u,m)||I==2&&fo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),j){case 1:Or(u,5);break;case 4:Or(u,10);break;case 3:Or(u,6);break;default:Or(u,2)}}}function yu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Or(u,m){if(u.j.info("Error code "+m),m==2){var _=E(u.fb,u),I=u.Xa;const j=!I;I=new xr(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ls(I,"https"),ci(I),j?Hh(I.toString(),_):fu(I.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(m),_u(u),co(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function _u(u){if(u.G=0,u.ka=[],u.l){const m=lu(u.h);(m.length!=0||u.i.length!=0)&&(k(u.ka,m),k(u.ka,u.i),u.h.i.length=0,V(u.i),u.i.length=0),u.l.ra()}}function vu(u,m,_){var I=_ instanceof xr?mn(_):new xr(_);if(I.g!="")m&&(I.g=m+"."+I.g),li(I,I.s);else{var j=d.location;I=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var G=new xr(null);I&&ls(G,I),m&&(G.g=m),j&&li(G,j),_&&(G.l=_),I=G}return _=u.D,m=u.ya,_&&m&&qe(I,_,m),qe(I,"VER",u.la),Dr(u,I),I}function wu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new Nr({eb:_})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}n=Fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function go(){}go.prototype.g=function(u,m){return new Qt(u,m)};function Qt(u,m){yt.call(this),this.g=new Ma(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!U(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!U(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ur(this)}N(Qt,yt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Dt(this.g)},Qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ta(u),u=_);m.i.push(new su(m.Ya++,u)),m.G==3&&lr(m)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Qt.aa.N.call(this)};function Eu(u){rr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}N(Eu,rr);function Tu(){Js.call(this),this.status=1}N(Tu,Js);function ur(u){this.g=u}N(ur,Fa),ur.prototype.ua=function(){_t(this.g,"a")},ur.prototype.ta=function(u){_t(this.g,new Eu(u))},ur.prototype.sa=function(u){_t(this.g,new Tu)},ur.prototype.ra=function(){_t(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,hw=function(){return new go},cw=function(){return ts()},uw=ir,Wf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,kc=to,tu.COMPLETE="complete",lw=tu,Xs.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,ml=Xs,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,aw=Ze}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const i_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new hh("@firebase/firestore");function Fo(){return xs.logLevel}function ue(n,...e){if(xs.logLevel<=Pe.DEBUG){const t=e.map(Ap);xs.debug(`Firestore (${aa}): ${n}`,...t)}}function Xr(n,...e){if(xs.logLevel<=Pe.ERROR){const t=e.map(Ap);xs.error(`Firestore (${aa}): ${n}`,...t)}}function Xo(n,...e){if(xs.logLevel<=Pe.WARN){const t=e.map(Ap);xs.warn(`Firestore (${aa}): ${n}`,...t)}}function Ap(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+n;throw Xr(e),new Error(e)}function je(n,e){n||Te()}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Mn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ht.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Gr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},d=f=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Gr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new dw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Ht(e)}}class WR{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $R{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new WR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=a=>{a.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.R;return this.R=a.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new GR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=QR(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function Jo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new It(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new It(0,0))}static max(){return new Ie(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return pr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=pr.compareSegments(e.get(o),t.get(o));if(a!==0)return a}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=pr.isNumericId(e),o=pr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?pr.extractNumericId(e).compare(pr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ui.fromString(e.substring(4,e.length-2))}}class Qe extends pr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const YR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends pr{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return YR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new he(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new he(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new he(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Qe.fromString(e))}static fromName(e){return new ge(Qe.fromString(e).popFirst(5))}static empty(){return new ge(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Qe(e.slice()))}}function XR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new It(t+1,0):new It(t,i));return new zi(o,ge.empty(),e)}function JR(n){return new zi(n.readTime,n.key,-1)}class zi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new zi(Ie.min(),ge.empty(),-1)}static max(){return new zi(Ie.max(),ge.empty(),-1)}}function ZR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==eC)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,a=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&t()},f=>i(f))}),c=!0,a===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next(v=>{c[g]=v,++d,d===a&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Q((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function nC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ua(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fh.oe=-1;function ph(n){return n==null}function zc(n){return n===0&&1/n==-1/0}function rC(n){return typeof n=="number"&&Number.isInteger(n)&&!zc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=s_(e)),e=sC(n.get(t),e);return s_(e)}function sC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function s_(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||Vt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _c(this.root,e,this.comparator,!1)}getReverseIterator(){return new _c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _c(this.root,e,this.comparator,!0)}}class _c{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Vt.RED,this.left=o??Vt.EMPTY,this.right=a??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Vt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Vt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Vt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new a_(this.data.getIterator())}getIteratorFrom(e){return new a_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class a_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Tn([])}unionWith(e){let t=new At(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Tn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new mw("Invalid base64 string: "+a):a}}(e);return new Ut(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const oC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qi(n){if(je(!!n),typeof n=="string"){let e=0;const t=oC.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hi(n){return typeof n=="string"?Ut.fromBase64String(n):Ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mh(n){const e=n.mapValue.fields.__previous_value__;return Sp(e)?mh(e):e}function kl(n){const e=qi(n.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t,i,o,a,c,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g}}class Pl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sp(n)?4:uC(n)?9007199254740991:lC(n)?10:11:Te()}function Ir(n,e){if(n===e)return!0;const t=Wi(n);if(t!==Wi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kl(n).isEqual(kl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=qi(o.timestampValue),d=qi(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Hi(o.bytesValue).isEqual(Hi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return ct(o.geoPointValue.latitude)===ct(a.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return ct(o.integerValue)===ct(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=ct(o.doubleValue),d=ct(a.doubleValue);return c===d?zc(c)===zc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Jo(n.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(o_(c)!==o_(d))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(d[f]===void 0||!Ir(c[f],d[f])))return!1;return!0}(n,e);default:return Te()}}function xl(n,e){return(n.values||[]).find(t=>Ir(t,e))!==void 0}function Zo(n,e){if(n===e)return 0;const t=Wi(n),i=Wi(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=ct(a.integerValue||a.doubleValue),f=ct(c.integerValue||c.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return l_(n.timestampValue,e.timestampValue);case 4:return l_(kl(n),kl(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(a,c){const d=Hi(a),f=Hi(c);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),f=c.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=be(d[g],f[g]);if(v!==0)return v}return be(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=be(ct(a.latitude),ct(c.latitude));return d!==0?d:be(ct(a.longitude),ct(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return u_(n.arrayValue,e.arrayValue);case 10:return function(a,c){var d,f,g,v;const T=a.fields||{},E=c.fields||{},S=(d=T.value)===null||d===void 0?void 0:d.arrayValue,N=(f=E.value)===null||f===void 0?void 0:f.arrayValue,V=be(((g=S==null?void 0:S.values)===null||g===void 0?void 0:g.length)||0,((v=N==null?void 0:N.values)===null||v===void 0?void 0:v.length)||0);return V!==0?V:u_(S,N)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===vc.mapValue&&c===vc.mapValue)return 0;if(a===vc.mapValue)return 1;if(c===vc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=c.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let T=0;T<f.length&&T<v.length;++T){const E=be(f[T],v[T]);if(E!==0)return E;const S=Zo(d[f[T]],g[v[T]]);if(S!==0)return S}return be(f.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function l_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=qi(n),i=qi(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function u_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=Zo(t[o],i[o]);if(a)return a}return be(t.length,i.length)}function ea(n){return $f(n)}function $f(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=qi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=$f(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${$f(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function Pc(n){switch(Wi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mh(n);return e?16+Pc(e):16;case 5:return 2*n.stringValue.length;case 6:return Hi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+Pc(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Ki(i.fields,(a,c)=>{o+=a.length+Pc(c)}),o}(n.mapValue);default:throw Te()}}function c_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gf(n){return!!n&&"integerValue"in n}function Rp(n){return!!n&&"arrayValue"in n}function h_(n){return!!n&&"nullValue"in n}function d_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xc(n){return!!n&&"mapValue"in n}function lC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function vl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=vl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function uC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.value=e}static empty(){return new hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vl(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=vl(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];xc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new hn(vl(this.value))}}function gw(n){const e=[];return Ki(n.fields,(t,i)=>{const o=new Mt([t]);if(xc(i)){const a=gw(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new Tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Ie.min(),Ie.min(),Ie.min(),hn.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Ie.min(),Ie.min(),hn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Ie.min(),Ie.min(),hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.position=e,this.inclusive=t}}function f_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=ge.comparator(ge.fromName(c.referenceValue),t.key):i=Zo(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function p_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ir(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t="asc"){this.field=e,this.dir=t}}function cC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{}class pt extends yw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dC(e,t,i):t==="array-contains"?new mC(e,i):t==="in"?new gC(e,i):t==="not-in"?new yC(e,i):t==="array-contains-any"?new _C(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new fC(e,i):new pC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zo(t,this.value)):t!==null&&Wi(this.value)===Wi(t)&&this.matchesComparison(Zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends yw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new tr(e,t)}matches(e){return _w(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _w(n){return n.op==="and"}function vw(n){return hC(n)&&_w(n)}function hC(n){for(const e of n.filters)if(e instanceof tr)return!1;return!0}function Kf(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+ea(n.value);if(vw(n))return n.filters.map(e=>Kf(e)).join(",");{const e=n.filters.map(t=>Kf(t)).join(",");return`${n.op}(${e})`}}function ww(n,e){return n instanceof pt?function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&Ir(i.value,o.value)}(n,e):n instanceof tr?function(i,o){return o instanceof tr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,d)=>a&&ww(c,o.filters[d]),!0):!1}(n,e):void Te()}function Ew(n){return n instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${ea(t.value)}`}(n):n instanceof tr?function(t){return t.op.toString()+" {"+t.getFilters().map(Ew).join(" ,")+"}"}(n):"Filter"}class dC extends pt{constructor(e,t,i){super(e,t,i),this.key=ge.fromName(i.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class fC extends pt{constructor(e,t){super(e,"in",t),this.keys=Tw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class pC extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Tw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ge.fromName(i.referenceValue))}class mC extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rp(t)&&xl(t.arrayValue,this.value)}}class gC extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xl(this.value.arrayValue,t)}}class yC extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!xl(this.value.arrayValue,t)}}class _C extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>xl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.ue=null}}function m_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new vC(n,e,t,i,o,a,c)}function Cp(n){const e=Ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Kf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),ph(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ea(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ea(i)).join(",")),e.ue=t}return e.ue}function kp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ww(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!p_(n.startAt,e.startAt)&&p_(n.endAt,e.endAt)}function Qf(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wC(n,e,t,i,o,a,c,d){return new Bl(n,e,t,i,o,a,c,d)}function gh(n){return new Bl(n)}function g_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iw(n){return n.collectionGroup!==null}function wl(n){const e=Ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new At(Mt.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Hc(a,i))}),t.has(Mt.keyField().canonicalString())||e.ce.push(new Hc(Mt.keyField(),i))}return e.ce}function yr(n){const e=Ae(n);return e.le||(e.le=EC(e,wl(n))),e.le}function EC(n,e){if(n.limitType==="F")return m_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Hc(o.field,a)});const t=n.endAt?new qc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new qc(n.startAt.position,n.startAt.inclusive):null;return m_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Yf(n,e){const t=n.filters.concat([e]);return new Bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Xf(n,e,t){return new Bl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yh(n,e){return kp(yr(n),yr(e))&&n.limitType===e.limitType}function Aw(n){return`${Cp(yr(n))}|lt:${n.limitType}`}function Bo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Ew(o)).join(", ")}]`),ph(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ea(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ea(o)).join(",")),`Target(${i})`}(yr(n))}; limitType=${n.limitType})`}function _h(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):ge.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of wl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,f){const g=f_(c,d,f);return c.inclusive?g<=0:g<0}(i.startAt,wl(i),o)||i.endAt&&!function(c,d,f){const g=f_(c,d,f);return c.inclusive?g>=0:g>0}(i.endAt,wl(i),o))}(n,e)}function TC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sw(n){return(e,t)=>{let i=!1;for(const o of wl(n)){const a=IC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function IC(n,e,t){const i=n.field.isKeyField()?ge.comparator(e.key,t.key):function(a,c,d){const f=c.data.field(a),g=d.data.field(a);return f!==null&&g!==null?Zo(f,g):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return pw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new st(ge.comparator);function Jr(){return AC}const Rw=new st(ge.comparator);function gl(...n){let e=Rw;for(const t of n)e=e.insert(t.key,t);return e}function Cw(n){let e=Rw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Rs(){return El()}function kw(){return El()}function El(){return new js(n=>n.toString(),(n,e)=>n.isEqual(e))}const SC=new st(ge.comparator),RC=new At(ge.comparator);function xe(...n){let e=RC;for(const t of n)e=e.add(t);return e}const CC=new At(be);function kC(){return CC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zc(e)?"-0":e}}function Pw(n){return{integerValue:""+n}}function PC(n,e){return rC(e)?Pw(e):Pp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function xC(n,e,t){return n instanceof Nl?function(o,a){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Sp(a)&&(a=mh(a)),a&&(c.fields.__previous_value__=a),{mapValue:c}}(t,e):n instanceof ta?Nw(n,e):n instanceof bl?bw(n,e):function(o,a){const c=xw(o,a),d=y_(c)+y_(o.Pe);return Gf(c)&&Gf(o.Pe)?Pw(d):Pp(o.serializer,d)}(n,e)}function NC(n,e,t){return n instanceof ta?Nw(n,e):n instanceof bl?bw(n,e):t}function xw(n,e){return n instanceof Wc?function(i){return Gf(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Nl extends vh{}class ta extends vh{constructor(e){super(),this.elements=e}}function Nw(n,e){const t=Dw(e);for(const i of n.elements)t.some(o=>Ir(o,i))||t.push(i);return{arrayValue:{values:t}}}class bl extends vh{constructor(e){super(),this.elements=e}}function bw(n,e){let t=Dw(e);for(const i of n.elements)t=t.filter(o=>!Ir(o,i));return{arrayValue:{values:t}}}class Wc extends vh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function y_(n){return ct(n.integerValue||n.doubleValue)}function Dw(n){return Rp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this.field=e,this.transform=t}}function bC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ta&&o instanceof ta||i instanceof bl&&o instanceof bl?Jo(i.elements,o.elements,Ir):i instanceof Wc&&o instanceof Wc?Ir(i.Pe,o.Pe):i instanceof Nl&&o instanceof Nl}(n.transform,e.transform)}class DC{constructor(e,t){this.version=e,this.transformResults=t}}class _r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _r}static exists(e){return new _r(void 0,e)}static updateTime(e){return new _r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wh{}function Lw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mw(n.key,_r.none()):new jl(n.key,n.data,_r.none());{const t=n.data,i=hn.empty();let o=new At(Mt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Qi(n.key,i,new Tn(o.toArray()),_r.none())}}function OC(n,e,t){n instanceof jl?function(o,a,c){const d=o.value.clone(),f=v_(o.fieldTransforms,a,c.transformResults);d.setAll(f),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Qi?function(o,a,c){if(!Nc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=v_(o.fieldTransforms,a,c.transformResults),f=a.data;f.setAll(Vw(o)),f.setAll(d),a.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Tl(n,e,t,i){return n instanceof jl?function(a,c,d,f){if(!Nc(a.precondition,c))return d;const g=a.value.clone(),v=w_(a.fieldTransforms,f,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof Qi?function(a,c,d,f){if(!Nc(a.precondition,c))return d;const g=w_(a.fieldTransforms,f,c),v=c.data;return v.setAll(Vw(a)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(a,c,d){return Nc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function LC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=xw(i.transform,o||null);a!=null&&(t===null&&(t=hn.empty()),t.set(i.field,a))}return t||null}function __(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Jo(i,o,(a,c)=>bC(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class jl extends wh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends wh{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function v_(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,NC(c,d,t[o]))}return i}function w_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,xC(a,c,e))}return i}class Mw extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VC extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&OC(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=kw();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const f=Lw(c,d);f!==null&&i.set(o.key,f),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&Jo(this.mutations,e.mutations,(t,i)=>__(t,i))&&Jo(this.baseMutations,e.baseMutations,(t,i)=>__(t,i))}}class xp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return SC}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new xp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Le;function BC(n){switch(n){default:return Te();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function Uw(n){if(n===void 0)return Xr("GRPC error has no .code"),X.UNKNOWN;switch(n){case ft.OK:return X.OK;case ft.CANCELLED:return X.CANCELLED;case ft.UNKNOWN:return X.UNKNOWN;case ft.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ft.INTERNAL:return X.INTERNAL;case ft.UNAVAILABLE:return X.UNAVAILABLE;case ft.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ft.NOT_FOUND:return X.NOT_FOUND;case ft.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ft.ABORTED:return X.ABORTED;case ft.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ft.DATA_LOSS:return X.DATA_LOSS;default:return Te()}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Ui([4294967295,4294967295],0);function E_(n){const e=jC().encode(n),t=new ow;return t.update(e),new Uint8Array(t.digest())}function T_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ui([t,i],0),new Ui([o,a],0)]}class Np{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new yl(`Invalid padding: ${t}`);if(i<0)throw new yl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new yl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ui.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ui.fromNumber(i)));return o.compare(zC)===1&&(o=new Ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=E_(e),[i,o]=T_(t);for(let a=0;a<this.hashCount;a++){const c=this.de(i,o,a);if(!this.Ee(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Np(a,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=E_(e),[i,o]=T_(t);for(let a=0;a<this.hashCount;a++){const c=this.de(i,o,a);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,zl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Eh(Ie.min(),o,new st(be),Jr(),xe())}}class zl{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new zl(i,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Fw{constructor(e,t){this.targetId=e,this.me=t}}class Bw{constructor(e,t,i=Ut.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class I_{constructor(){this.fe=0,this.ge=A_(),this.pe=Ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=xe(),t=xe(),i=xe();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new zl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=A_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qC{constructor(e){this.Be=e,this.Le=new Map,this.ke=Jr(),this.qe=wc(),this.Qe=wc(),this.Ke=new st(be)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const a=o.target;if(Qf(a))if(i===0){const c=new ge(a.path);this.We(t,c,Wt.newNoDocument(c,Ie.min()))}else je(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),f=d?this.et(d,e,c):1;if(f!==0){this.He(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Hi(i).toUint8Array()}catch(f){if(f instanceof mw)return Xo("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Np(c,o,a)}catch(f){return Xo(f instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.Be.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((a,c)=>{const d=this.Ye(c);if(d){if(a.current&&Qf(d.target)){const f=new ge(d.target.path);this.st(f).has(c)||this.ot(c,f)||this.We(c,f,Wt.newNoDocument(f,e))}a.be&&(t.set(c,a.ve()),a.Ce())}});let i=xe();this.Qe.forEach((a,c)=>{let d=!0;c.forEachWhile(f=>{const g=this.Ye(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,c)=>c.setReadTime(e));const o=new Eh(e,t,this.Ke,this.ke,i);return this.ke=Jr(),this.qe=wc(),this.Qe=wc(),this.Ke=new st(be),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new I_,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new At(be),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new At(be),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new I_),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function wc(){return new st(ge.comparator)}function A_(){return new st(ge.comparator)}const HC={asc:"ASCENDING",desc:"DESCENDING"},WC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$C={and:"AND",or:"OR"};class GC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jf(n,e){return n.useProto3Json||ph(e)?e:{value:e}}function $c(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function KC(n,e){return $c(n,e.toTimestamp())}function vr(n){return je(!!n),Ie.fromTimestamp(function(t){const i=qi(t);return new It(i.seconds,i.nanos)}(n))}function bp(n,e){return Zf(n,e).canonicalString()}function Zf(n,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zw(n){const e=Qe.fromString(n);return je(Gw(e)),e}function ep(n,e){return bp(n.databaseId,e.path)}function Rf(n,e){const t=zw(e);if(t.get(1)!==n.databaseId.projectId)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(Hw(t))}function qw(n,e){return bp(n.databaseId,e)}function QC(n){const e=zw(n);return e.length===4?Qe.emptyPath():Hw(e)}function tp(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hw(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function S_(n,e,t){return{name:ep(n,e),fields:t.value.mapValue.fields}}function YC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(g,v){return g.useProto3Json?(je(v===void 0||typeof v=="string"),Ut.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Ut.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?X.UNKNOWN:Uw(g.code);return new he(v,g.message||"")}(c);t=new Bw(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Rf(n,i.document.name),a=vr(i.document.updateTime),c=i.document.createTime?vr(i.document.createTime):Ie.min(),d=new hn({mapValue:{fields:i.document.fields}}),f=Wt.newFoundDocument(o,a,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];t=new bc(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Rf(n,i.document),a=i.readTime?vr(i.readTime):Ie.min(),c=Wt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new bc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Rf(n,i.document),a=i.removedTargetIds||[];t=new bc([],a,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new FC(o,a),d=i.targetId;t=new Fw(d,c)}}return t}function XC(n,e){let t;if(e instanceof jl)t={update:S_(n,e.key,e.value)};else if(e instanceof Mw)t={delete:ep(n,e.key)};else if(e instanceof Qi)t={update:S_(n,e.key,e.data),updateMask:ok(e.fieldMask)};else{if(!(e instanceof VC))return Te();t={verify:ep(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const d=c.transform;if(d instanceof Nl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ta)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof bl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Wc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:KC(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te()}(n,e.precondition)),t}function JC(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,a){let c=o.updateTime?vr(o.updateTime):vr(a);return c.isEqual(Ie.min())&&(c=vr(a)),new DC(c,o.transformResults||[])}(t,e))):[]}function ZC(n,e){return{documents:[qw(n,e.path)]}}function ek(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=qw(n,o);const a=function(g){if(g.length!==0)return $w(tr.create(g,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(g){if(g.length!==0)return g.map(v=>function(E){return{field:jo(E.field),direction:rk(E.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Jf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ct:t,parent:o}}function tk(n){let e=QC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(T){const E=Ww(T);return E instanceof tr&&vw(E)?E.getFilters():[E]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(E=>function(N){return new Hc(zo(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(E))}(t.orderBy));let d=null;t.limit&&(d=function(T){let E;return E=typeof T=="object"?T.value:T,ph(E)?null:E}(t.limit));let f=null;t.startAt&&(f=function(T){const E=!!T.before,S=T.values||[];return new qc(S,E)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const E=!T.before,S=T.values||[];return new qc(S,E)}(t.endAt)),wC(e,o,c,a,d,"F",f,g)}function nk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ww(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=zo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=zo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=zo(t.unaryFilter.field);return pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=zo(t.unaryFilter.field);return pt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return pt.create(zo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tr.create(t.compositeFilter.filters.map(i=>Ww(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function rk(n){return HC[n]}function ik(n){return WC[n]}function sk(n){return $C[n]}function jo(n){return{fieldPath:n.canonicalString()}}function zo(n){return Mt.fromServerFormat(n.fieldPath)}function $w(n){return n instanceof pt?function(t){if(t.op==="=="){if(d_(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(h_(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(d_(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(h_(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:ik(t.op),value:t.value}}}(n):n instanceof tr?function(t){const i=t.getFilters().map(o=>$w(o));return i.length===1?i[0]:{compositeFilter:{op:sk(t.op),filters:i}}}(n):Te()}function ok(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,i,o,a=Ie.min(),c=Ie.min(),d=Ut.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.ht=e}}function lk(n){const e=tk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.ln=new ck}addToCollectionParentIndex(e,t){return this.ln.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(zi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(zi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new At(Qe.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new At(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(41943040,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new na(0)}static Qn(){return new na(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_([n,e],[t,i]){const o=be(n,t);return o===0?be(e,i):o}class hk{constructor(e){this.Gn=e,this.buffer=new At(C_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();C_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class dk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ue("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ua(t)?ue("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await la(t)}await this.Yn(3e5)})}}class fk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(fh.oe);const i=new hk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(R_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,a,c,d,f,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(a=T,f=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(g=Date.now(),Fo()<=Pe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${T} documents in `+(g-f)+`ms
Total Duration: ${g-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function pk(n,e){return new fk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.changes=new js(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Tl(i.mutation,o,Tn.empty(),It.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,xe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=xe()){const o=Rs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=gl();return a.forEach((d,f)=>{c=c.insert(d,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Rs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,xe()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let a=Jr();const c=El(),d=function(){return El()}();return t.forEach((f,g)=>{const v=i.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof Qi)?a=a.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Tl(v.mutation,g,v.mutation.getFieldMask(),It.now())):c.set(g.key,Tn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var T;return d.set(g,new gk(v,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=El();let o=new st((c,d)=>c-d),a=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(f=>{const g=t.get(f);if(g===null)return;let v=i.get(f)||Tn.empty();v=d.applyToLocalView(g,v),i.set(f,v);const T=(o.get(d.batchId)||xe()).add(f);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,T=kw();v.forEach(E=>{if(!a.has(E)){const S=Lw(t.get(E),i.get(E));S!==null&&T.set(E,S),a=a.add(E)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return Q.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):Q.resolve(Rs());let d=-1,f=a;return c.next(g=>Q.forEach(g,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),a.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next(E=>{f=f.insert(v,E)}))).next(()=>this.populateOverlays(e,g,a)).next(()=>this.computeViews(e,f,g,xe())).next(v=>({batchId:d,changes:Cw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(i=>{let o=gl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=gl();return this.indexManager.getCollectionParents(e,a).next(d=>Q.forEach(d,f=>{const g=function(T,E){return new Bl(E,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,i,o).next(v=>{v.forEach((T,E)=>{c=c.insert(T,E)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((f,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,Wt.newInvalidDocument(v)))});let d=gl();return c.forEach((f,g)=>{const v=a.get(f);v!==void 0&&Tl(v.mutation,g,Tn.empty(),It.now()),_h(t,g)&&(d=d.insert(f,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return Q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:lk(o.bundledQuery),readTime:vr(o.readTime)}}(t)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.overlays=new st(ge.comparator),this.dr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Rs();return Q.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Tt(e,t,a)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.dr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=Rs(),a=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>i&&o.set(f.getKey(),f)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new st((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=a.get(g.largestBatchId);v===null&&(v=Rs(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Rs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=o)););return Q.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new UC(t,i));let a=this.dr.get(t);a===void 0&&(a=xe(),this.dr.set(t,a)),this.dr.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.Er=new At(xt.Ar),this.Rr=new At(xt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new xt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new xt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ge(new Qe([])),i=new xt(t,e),o=new xt(t,e+1),a=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),a.push(c.key)}),a}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ge(new Qe([])),i=new xt(t,e),o=new xt(t,e+1);let a=xe();return this.Rr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new xt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class xt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ge.comparator(e.key,t.key)||be(e.br,t.br)}static Vr(e,t){return be(e.br,t.br)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new At(xt.Ar)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new MC(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new xt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),a=o<0?0:o;return Q.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);a.push(d)}),Q.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new At(be);return t.forEach(o=>{const a=new xt(o,0),c=new xt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,c],d=>{i=i.add(d.br)})}),Q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;ge.isDocumentKey(a)||(a=a.child(""));const c=new xt(new ge(a),0);let d=new At(be);return this.vr.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===o&&(d=d.add(f.br)),!0)},c),Q.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return Q.forEach(t.mutations,o=>{const a=new xt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new xt(t,0),o=this.vr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.Nr=e,this.docs=function(){return new st(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=Jr();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Wt.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=Jr();const c=t.path,d=new ge(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||ZR(JR(v),i)<=0||(o.has(v.key)||_h(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Q.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Te()}Br(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Ik(this)}getSize(e){return Q.resolve(this.size)}}class Ik extends mk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.persistence=e,this.Lr=new js(t=>Cp(t),kp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Dp,this.targetCount=0,this.Qr=na.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),Q.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new na(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Un(t),Q.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Lr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Q.waitFor(a).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),Q.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new fh(0),this.Ur=!1,this.Ur=!0,this.Wr=new wk,this.referenceDelegate=e(this),this.Gr=new Ak(this),this.indexManager=new uk,this.remoteDocumentCache=function(o){return new Tk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new ak(t),this.jr=new _k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new Ek(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const o=new Sk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(a=>this.referenceDelegate.Jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Yr(e,t){return Q.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Sk extends tC{constructor(e){super(),this.currentSequenceNumber=e}}class Op{constructor(e){this.persistence=e,this.Zr=new Dp,this.Xr=null}static ei(e){return new Op(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ti,i=>{const o=ge.fromPath(i);return this.ni(e,o).next(a=>{a||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return Q.or([()=>Q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Gc{constructor(e,t){this.persistence=e,this.ri=new js(i=>iC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=pk(this,t)}static ei(e,t){return new Gc(e,t)}Hr(){}Jr(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return Q.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(a=>a?Q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Br(e,c=>this.ir(e,c,t).next(d=>{d||(i++,a.removeEntry(c,Ie.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pc(e.data.value)),t}ir(e,t,i){return Q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=xe(),o=xe();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Lp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return IS()?8:nC(Gt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Xi(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.es(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new Rk;return this.ts(e,t,c).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>a.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Fo()<=Pe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Q.resolve()):(Fo()<=Pe.DEBUG&&ue("QueryEngine","Query:",Bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Fo()<=Pe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):Q.resolve())}Xi(e,t){if(g_(t))return Q.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Xf(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=xe(...a);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(f=>{const g=this.rs(t,d);return this.ss(t,g,c,f.readTime)?this.Xi(e,Xf(t,null,"F")):this.os(e,g,t,f)}))})))}es(e,t,i,o){return g_(t)||o.isEqual(Ie.min())?Q.resolve(null):this.Zi.getDocuments(e,i).next(a=>{const c=this.rs(t,a);return this.ss(t,c,i,o)?Q.resolve(null):(Fo()<=Pe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Bo(t)),this.os(e,c,t,XR(o,-1)).next(d=>d))})}rs(e,t){let i=new At(Sw(e));return t.forEach((o,a)=>{_h(e,a)&&(i=i.add(a))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ts(e,t,i){return Fo()<=Pe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Bo(t)),this.Zi.getDocumentsMatchingQuery(e,t,zi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new st(be),this.cs=new js(a=>Cp(a),kp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Pk(n,e,t,i){return new kk(n,e,t,i)}async function Qw(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],d=[];let f=xe();for(const g of o){c.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(i,f).next(g=>({Ts:g,removedBatchIds:c,addedBatchIds:d}))})})}function xk(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,f,g,v){const T=g.batch,E=T.keys();let S=Q.resolve();return E.forEach(N=>{S=S.next(()=>v.getEntry(f,N)).next(V=>{const k=g.docVersions.get(N);je(k!==null),V.version.compareTo(k)<0&&(T.applyToRemoteDocument(V,g),V.isValidDocument()&&(V.setReadTime(g.commitVersion),v.addEntry(V)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(f,T))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let f=xe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Yw(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Nk(n,e){const t=Ae(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const E=o.get(T);if(!E)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,T)));let S=E.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?S=S.withResumeToken(Ut.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(v.resumeToken,i)),o=o.insert(T,S),function(V,k,M){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(E,S,v)&&d.push(t.Gr.updateTargetData(a,S))});let f=Jr(),g=xe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(bk(a,c,e.documentUpdates).next(v=>{f=v.Is,g=v.ds})),!i.isEqual(Ie.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(T=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return Q.waitFor(d).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,g)).next(()=>f)}).then(a=>(t.us=o,a))}function bk(n,e,t){let i=xe(),o=xe();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=Jr();return t.forEach((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Ie.min())?(e.removeEntry(d,f.readTime),c=c.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),c=c.insert(d,f)):ue("LocalStore","Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)}),{Is:c,ds:o}})}function Dk(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Ok(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(a=>a?(o=a,Q.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new Li(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function np(n,e,t){const i=Ae(n),o=i.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!ua(c))throw c;ue("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function k_(n,e,t){const i=Ae(n);let o=Ie.min(),a=xe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(f,g,v){const T=Ae(f),E=T.cs.get(v);return E!==void 0?Q.resolve(T.us.get(E)):T.Gr.getTargetData(g,v)}(i,c,yr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(f=>{a=f})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?a:xe())).next(d=>(Lk(i,TC(e),d),{documents:d,Es:a})))}function Lk(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.ls.set(e,i)}class P_{constructor(){this.activeTargetIds=kC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vk{constructor(){this._o=new P_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new P_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec=null;function Cf(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class Bk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}Oo(t,i,o,a,c){const d=Cf(),f=this.No(t,i.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${d}:`,f,o);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(g,a,c),this.Lo(t,f,g,o).then(v=>(ue("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Xo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",o),v})}ko(t,i,o,a,c,d){return this.Oo(t,i,o,a,c)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,c)=>t[c]=a),o&&o.headers.forEach((a,c)=>t[c]=a)}No(t,i){const o=Uk[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const a=Cf();return new Promise((c,d)=>{const f=new aw;f.setWithCredentials(!0),f.listenOnce(lw.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case kc.NO_ERROR:const v=f.getResponseJson();ue(qt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case kc.TIMEOUT:ue(qt,`RPC '${e}' ${a} timed out`),d(new he(X.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const T=f.getStatus();if(ue(qt,`RPC '${e}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let E=f.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const N=function(k){const M=k.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(M)>=0?M:X.UNKNOWN}(S.status);d(new he(N,S.message))}else d(new he(X.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new he(X.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ue(qt,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(o);ue(qt,`RPC '${e}' ${a} sending request:`,o),f.send(t,"POST",g,i,15)})}qo(e,t,i){const o=Cf(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=hw(),d=cw(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Bo(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const v=a.join("");ue(qt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const T=c.createWebChannel(v,f);let E=!1,S=!1;const N=new Fk({Eo:k=>{S?ue(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,k):(E||(ue(qt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),E=!0),ue(qt,`RPC '${e}' stream ${o} sending:`,k),T.send(k))},Ao:()=>T.close()}),V=(k,M,U)=>{k.listen(M,H=>{try{U(H)}catch(K){setTimeout(()=>{throw K},0)}})};return V(T,ml.EventType.OPEN,()=>{S||(ue(qt,`RPC '${e}' stream ${o} transport opened.`),N.So())}),V(T,ml.EventType.CLOSE,()=>{S||(S=!0,ue(qt,`RPC '${e}' stream ${o} transport closed`),N.Do())}),V(T,ml.EventType.ERROR,k=>{S||(S=!0,Xo(qt,`RPC '${e}' stream ${o} transport errored:`,k),N.Do(new he(X.UNAVAILABLE,"The operation could not be completed")))}),V(T,ml.EventType.MESSAGE,k=>{var M;if(!S){const U=k.data[0];je(!!U);const H=U,K=(H==null?void 0:H.error)||((M=H[0])===null||M===void 0?void 0:M.error);if(K){ue(qt,`RPC '${e}' stream ${o} received error:`,K);const se=K.status;let oe=function(R){const b=ft[R];if(b!==void 0)return Uw(b)}(se),P=K.message;oe===void 0&&(oe=X.INTERNAL,P="Unknown error status: "+se+" with message "+K.message),S=!0,N.Do(new he(oe,P)),T.close()}else ue(qt,`RPC '${e}' stream ${o} received:`,U),N.vo(U)}}),V(d,uw.STAT_EVENT,k=>{k.stat===Wf.PROXY?ue(qt,`RPC '${e}' stream ${o} detected buffering proxy`):k.stat===Wf.NOPROXY&&ue(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.bo()},0),N}}function kf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){return new GC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t,i=1e3,o=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,i,o,a,c,d,f){this.li=e,this.Yo=i,this.Zo=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Xw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Xr(t.toString()),Xr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new he(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jk extends Jw{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=YC(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ie.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?vr(c.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=tp(this.serializer),t.addTarget=function(a,c){let d;const f=c.target;if(d=Qf(f)?{documents:ZC(a,f)}:{query:ek(a,f).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=jw(a,c.resumeToken);const g=Jf(a,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=$c(a,c.snapshotVersion.toTimestamp());const g=Jf(a,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=nk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=tp(this.serializer),t.removeTarget=e,this.c_(t)}}class zk extends Jw{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=JC(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=tp(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>XC(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Oo(e,Zf(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(X.UNKNOWN,a.toString())})}ko(e,t,i,o,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,Zf(t,i),o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(X.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Hk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Xr(t),this.C_=!1):ue("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{zs(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=Ae(f);g.k_.add(4),await ql(g),g.K_.set("Unknown"),g.k_.delete(4),await Ih(g)}(this))})}),this.K_=new Hk(i,o)}}async function Ih(n){if(zs(n))for(const e of n.q_)await e(!0)}async function ql(n){for(const e of n.q_)await e(!1)}function Zw(n,e){const t=Ae(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Fp(t)?Up(t):ca(t).s_()&&Mp(t,e))}function Vp(n,e){const t=Ae(n),i=ca(t);t.L_.delete(e),i.s_()&&eE(t,e),t.L_.size===0&&(i.s_()?i.a_():zs(t)&&t.K_.set("Unknown"))}function Mp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ca(n).V_(e)}function eE(n,e){n.U_.xe(e),ca(n).m_(e)}function Up(n){n.U_=new qC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ca(n).start(),n.K_.F_()}function Fp(n){return zs(n)&&!ca(n).i_()&&n.L_.size>0}function zs(n){return Ae(n).k_.size===0}function tE(n){n.U_=void 0}async function $k(n){n.K_.set("Online")}async function Gk(n){n.L_.forEach((e,t)=>{Mp(n,e)})}async function Kk(n,e){tE(n),Fp(n)?(n.K_.O_(e),Up(n)):n.K_.set("Unknown")}async function Qk(n,e,t){if(n.K_.set("Online"),e instanceof Bw&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){ue("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Kc(n,i)}else if(e instanceof bc?n.U_.$e(e):e instanceof Fw?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await Yw(n.localStore);t.compareTo(i)>=0&&await function(a,c){const d=a.U_.it(c);return d.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.L_.get(g);v&&a.L_.set(g,v.withResumeToken(f.resumeToken,c))}}),d.targetMismatches.forEach((f,g)=>{const v=a.L_.get(f);if(!v)return;a.L_.set(f,v.withResumeToken(Ut.EMPTY_BYTE_STRING,v.snapshotVersion)),eE(a,f);const T=new Li(v.target,f,g,v.sequenceNumber);Mp(a,T)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ue("RemoteStore","Failed to raise snapshot:",i),await Kc(n,i)}}async function Kc(n,e,t){if(!ua(e))throw e;n.k_.add(1),await ql(n),n.K_.set("Offline"),t||(t=()=>Yw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Ih(n)})}function nE(n,e){return e().catch(t=>Kc(n,t,e))}async function Ah(n){const e=Ae(n),t=$i(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;Yk(e);)try{const o=await Dk(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,Xk(e,o)}catch(o){await Kc(e,o)}rE(e)&&iE(e)}function Yk(n){return zs(n)&&n.B_.length<10}function Xk(n,e){n.B_.push(e);const t=$i(n);t.s_()&&t.f_&&t.g_(e.mutations)}function rE(n){return zs(n)&&!$i(n).i_()&&n.B_.length>0}function iE(n){$i(n).start()}async function Jk(n){$i(n).w_()}async function Zk(n){const e=$i(n);for(const t of n.B_)e.g_(t.mutations)}async function eP(n,e,t){const i=n.B_.shift(),o=xp.from(i,e,t);await nE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Ah(n)}async function tP(n,e){e&&$i(n).f_&&await async function(i,o){if(function(c){return BC(c)&&c!==X.ABORTED}(o.code)){const a=i.B_.shift();$i(i).__(),await nE(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await Ah(i)}}(n,e),rE(n)&&iE(n)}async function N_(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const i=zs(t);t.k_.add(3),await ql(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ih(t)}async function nP(n,e){const t=Ae(n);e?(t.k_.delete(2),await Ih(t)):e||(t.k_.add(2),await ql(t),t.K_.set("Unknown"))}function ca(n){return n.W_||(n.W_=function(t,i,o){const a=Ae(t);return a.b_(),new jk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:$k.bind(null,n),mo:Gk.bind(null,n),po:Kk.bind(null,n),R_:Qk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Fp(n)?Up(n):n.K_.set("Unknown")):(await n.W_.stop(),tE(n))})),n.W_}function $i(n){return n.G_||(n.G_=function(t,i,o){const a=Ae(t);return a.b_(),new zk(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Jk.bind(null,n),po:tP.bind(null,n),p_:Zk.bind(null,n),y_:eP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Ah(n)):(await n.G_.stop(),n.B_.length>0&&(ue("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Bp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jp(n,e){if(Xr("AsyncQueue",`${e}: ${n}`),ua(n))return new he(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{static emptySet(e){return new Wo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ge.comparator(t.key,i.key):(t,i)=>ge.comparator(t.key,i.key),this.keyedMap=gl(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Wo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.z_=new st(ge.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ra{constructor(e,t,i,o,a,c,d,f,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new ra(e,t,Wo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class iP{constructor(){this.queries=D_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ae(t),a=o.queries;o.queries=D_(),a.forEach((c,d)=>{for(const f of d.J_)f.onError(i)})})(this,new he(X.ABORTED,"Firestore shutting down"))}}function D_(){return new js(n=>Aw(n),yh)}async function zp(n,e){const t=Ae(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Y_()&&e.Z_()&&(i=2):(a=new rP,i=e.Z_()?0:1);try{switch(i){case 0:a.H_=await t.onListen(o,!0);break;case 1:a.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=jp(c,`Initialization of query '${Bo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Hp(t)}async function qp(n,e){const t=Ae(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.J_.indexOf(e);c>=0&&(a.J_.splice(c,1),a.J_.length===0?o=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function sP(n,e){const t=Ae(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&Hp(t)}function oP(n,e,t){const i=Ae(n),o=i.queries.get(e);if(o)for(const a of o.J_)a.onError(t);i.queries.delete(e)}function Hp(n){n.X_.forEach(e=>{e.next()})}var rp,O_;(O_=rp||(rp={})).na="default",O_.Cache="cache";class Wp{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ra(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ra.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==rp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class aP{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=xe(),this.mutatedKeys=xe(),this.Va=Sw(e),this.ma=new Wo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new b_,o=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const E=o.get(v),S=_h(this.query,T)?T:null,N=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;E&&S?E.data.isEqual(S.data)?N!==V&&(i.track({type:3,doc:S}),k=!0):this.ya(E,S)||(i.track({type:2,doc:S}),k=!0,(f&&this.Va(S,f)>0||g&&this.Va(S,g)<0)&&(d=!0)):!E&&S?(i.track({type:0,doc:S}),k=!0):E&&!S&&(i.track({type:1,doc:E}),k=!0,(f||g)&&(d=!0)),k&&(S?(c=c.add(S),a=V?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((v,T)=>function(S,N){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return V(S)-V(N)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],f=this.Ra.size===0&&this.current&&!o?1:0,g=f!==this.Aa;return this.Aa=f,c.length!==0||g?{snapshot:new ra(this.query,e.ma,a,c,e.mutatedKeys,f===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new b_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=xe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new oE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new sE(i))}),t}va(e){this.Ea=e.Es,this.Ra=xe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ra.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class lP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class uP{constructor(e){this.key=e,this.Fa=!1}}class cP{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new js(d=>Aw(d),yh),this.Oa=new Map,this.Na=new Set,this.Ba=new st(ge.comparator),this.La=new Map,this.ka=new Dp,this.qa={},this.Qa=new Map,this.Ka=na.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function hP(n,e,t=!0){const i=dE(n);let o;const a=i.xa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Ca()):o=await aE(i,e,t,!0),o}async function dP(n,e){const t=dE(n);await aE(t,e,!0,!1)}async function aE(n,e,t,i){const o=await Ok(n.localStore,yr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await fP(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Zw(n.remoteStore,o),d}async function fP(n,e,t,i,o){n.Ua=(T,E,S)=>async function(V,k,M,U){let H=k.view.ga(M);H.ss&&(H=await k_(V.localStore,k.query,!1).then(({documents:P})=>k.view.ga(P,H)));const K=U&&U.targetChanges.get(k.targetId),se=U&&U.targetMismatches.get(k.targetId)!=null,oe=k.view.applyChanges(H,V.isPrimaryClient,K,se);return V_(V,k.targetId,oe.ba),oe.snapshot}(n,T,E,S);const a=await k_(n.localStore,e,!0),c=new aP(e,a.Es),d=c.ga(a.documents),f=zl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),g=c.applyChanges(d,n.isPrimaryClient,f);V_(n,t,g.ba);const v=new lP(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),g.snapshot}async function pP(n,e,t){const i=Ae(n),o=i.xa.get(e),a=i.Oa.get(o.targetId);if(a.length>1)return i.Oa.set(o.targetId,a.filter(c=>!yh(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await np(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Vp(i.remoteStore,o.targetId),ip(i,o.targetId)}).catch(la)):(ip(i,o.targetId),await np(i.localStore,o.targetId,!0))}async function mP(n,e){const t=Ae(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vp(t.remoteStore,i.targetId))}async function gP(n,e,t){const i=IP(n);try{const o=await function(c,d){const f=Ae(c),g=It.now(),v=d.reduce((S,N)=>S.add(N.key),xe());let T,E;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=Jr(),V=xe();return f.hs.getEntries(S,v).next(k=>{N=k,N.forEach((M,U)=>{U.isValidDocument()||(V=V.add(M))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,N)).next(k=>{T=k;const M=[];for(const U of d){const H=LC(U,T.get(U.key).overlayedDocument);H!=null&&M.push(new Qi(U.key,H,gw(H.value.mapValue),_r.exists(!0)))}return f.mutationQueue.addMutationBatch(S,g,M,d)}).next(k=>{E=k;const M=k.applyToLocalDocumentSet(T,V);return f.documentOverlayCache.saveOverlays(S,k.batchId,M)})}).then(()=>({batchId:E.batchId,changes:Cw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,f){let g=c.qa[c.currentUser.toKey()];g||(g=new st(be)),g=g.insert(d,f),c.qa[c.currentUser.toKey()]=g}(i,o.batchId,t),await Hl(i,o.changes),await Ah(i.remoteStore)}catch(o){const a=jp(o,"Failed to persist write");t.reject(a)}}async function lE(n,e){const t=Ae(n);try{const i=await Nk(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.La.get(a);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?je(c.Fa):o.removedDocuments.size>0&&(je(c.Fa),c.Fa=!1))}),await Hl(t,i,e)}catch(i){await la(i)}}function L_(n,e,t){const i=Ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((a,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const f=Ae(c);f.onlineState=d;let g=!1;f.queries.forEach((v,T)=>{for(const E of T.J_)E.ea(d)&&(g=!0)}),g&&Hp(f)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function yP(n,e,t){const i=Ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),a=o&&o.key;if(a){let c=new st(ge.comparator);c=c.insert(a,Wt.newNoDocument(a,Ie.min()));const d=xe().add(a),f=new Eh(Ie.min(),new Map,new st(be),c,d);await lE(i,f),i.Ba=i.Ba.remove(a),i.La.delete(e),$p(i)}else await np(i.localStore,e,!1).then(()=>ip(i,e,t)).catch(la)}async function _P(n,e){const t=Ae(n),i=e.batch.batchId;try{const o=await xk(t.localStore,e);cE(t,i,null),uE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Hl(t,o)}catch(o){await la(o)}}async function vP(n,e,t){const i=Ae(n);try{const o=await function(c,d){const f=Ae(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next(T=>(je(T!==null),v=T.keys(),f.mutationQueue.removeMutationBatch(g,T))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>f.localDocuments.getDocuments(g,v))})}(i.localStore,e);cE(i,e,t),uE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Hl(i,o)}catch(o){await la(o)}}function uE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function cE(n,e,t){const i=Ae(n);let o=i.qa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function ip(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||hE(n,i)})}function hE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(Vp(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),$p(n))}function V_(n,e,t){for(const i of t)i instanceof sE?(n.ka.addReference(i.key,e),wP(n,i)):i instanceof oE?(ue("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||hE(n,i.key)):Te()}function wP(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(ue("SyncEngine","New document in limbo: "+t),n.Na.add(i),$p(n))}function $p(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ge(Qe.fromString(e)),i=n.Ka.next();n.La.set(i,new uP(t)),n.Ba=n.Ba.insert(t,i),Zw(n.remoteStore,new Li(yr(gh(t.path)),i,"TargetPurposeLimboResolution",fh.oe))}}async function Hl(n,e,t){const i=Ae(n),o=[],a=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,f)=>{c.push(i.Ua(f,e,t).then(g=>{var v;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(f.targetId,T?"current":"not-current")}if(g){o.push(g);const T=Lp.zi(f.targetId,g);a.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(f,g){const v=Ae(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(g,E=>Q.forEach(E.Wi,S=>v.persistence.referenceDelegate.addReference(T,E.targetId,S)).next(()=>Q.forEach(E.Gi,S=>v.persistence.referenceDelegate.removeReference(T,E.targetId,S)))))}catch(T){if(!ua(T))throw T;ue("LocalStore","Failed to update sequence numbers: "+T)}for(const T of g){const E=T.targetId;if(!T.fromCache){const S=v.us.get(E),N=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(N);v.us=v.us.insert(E,V)}}}(i.localStore,a))}async function EP(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const i=await Qw(t.localStore,e);t.currentUser=e,function(a,c){a.Qa.forEach(d=>{d.forEach(f=>{f.reject(new he(X.CANCELLED,c))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Hl(t,i.Ts)}}function TP(n,e){const t=Ae(n),i=t.La.get(e);if(i&&i.Fa)return xe().add(i.key);{let o=xe();const a=t.Oa.get(e);if(!a)return o;for(const c of a){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function dE(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yP.bind(null,e),e.Ma.R_=sP.bind(null,e.eventManager),e.Ma.Wa=oP.bind(null,e.eventManager),e}function IP(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_P.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vP.bind(null,e),e}class Qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Pk(this.persistence,new Ck,e.initialUser,this.serializer)}ja(e){return new Kw(Op.ei,this.serializer)}za(e){return new Vk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qc.provider={build:()=>new Qc};class AP extends Qc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof Gc);const i=this.persistence.referenceDelegate.garbageCollector;return new dk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new Kw(i=>Gc.ei(i,t),this.serializer)}}class sp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>L_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=EP.bind(null,this.syncEngine),await nP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iP}()}createDatastore(e){const t=Th(e.databaseInfo.databaseId),i=function(a){return new Bk(a)}(e.databaseInfo);return function(a,c,d,f){return new qk(a,c,d,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,d){return new Wk(i,o,a,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>L_(this.syncEngine,t,0),function(){return x_.p()?new x_:new Mk}())}createSyncEngine(e,t){return function(o,a,c,d,f,g,v){const T=new cP(o,a,c,d,f,g);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Ae(o);ue("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await ql(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sp.provider={build:()=>new sp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Xr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=fw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{ue("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ue("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=jp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Pf(n,e){n.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Qw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function M_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RP(n);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>N_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>N_(e.remoteStore,o)),n._onlineComponents=e}async function RP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Xo("Error using user provided cache. Falling back to memory cache: "+t),await Pf(n,new Qc)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await Pf(n,new AP(void 0));return n._offlineComponents}async function fE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await M_(n,n._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await M_(n,new sp))),n._onlineComponents}function CP(n){return fE(n).then(e=>e.syncEngine)}async function Yc(n){const e=await fE(n),t=e.eventManager;return t.onListen=hP.bind(null,e.syncEngine),t.onUnlisten=pP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mP.bind(null,e.syncEngine),t}function kP(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,f,g){const v=new Gp({next:E=>{v.eu(),c.enqueueAndForget(()=>qp(a,T));const S=E.docs.has(d);!S&&E.fromCache?g.reject(new he(X.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&f&&f.source==="server"?g.reject(new he(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),T=new Wp(gh(d.path),v,{includeMetadataChanges:!0,ua:!0});return zp(a,T)}(await Yc(n),n.asyncQueue,e,t,i)),i.promise}function PP(n,e,t={}){const i=new Gr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,f,g){const v=new Gp({next:E=>{v.eu(),c.enqueueAndForget(()=>qp(a,T)),E.fromCache&&f.source==="server"?g.reject(new he(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),T=new Wp(d,v,{includeMetadataChanges:!0,ua:!0});return zp(a,T)}(await Yc(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n,e,t){if(!t)throw new he(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xP(n,e,t,i){if(e===!0&&i===!0)throw new he(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function F_(n){if(!ge.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function B_(n){if(ge.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sh(n);throw new he(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new zR;switch(i.type){case"firstParty":return new $R(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=U_.get(t);i&&(ue("ComponentProvider","Removing Datastore"),U_.delete(t),i.terminate())}(this),Promise.resolve()}}function NP(n,e,t,i={}){var o;const a=(n=Ln(n,Rh))._getSettings(),c=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==c&&Xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:c,ssl:!1})),i.mockUserToken){let d,f;if(typeof i.mockUserToken=="string")d=i.mockUserToken,f=Ht.MOCK_USER;else{d=Yv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new he(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ht(g)}n._authCredentials=new qR(new dw(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class $t{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Fi extends qs{constructor(e,t,i){super(e,t,gh(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new ge(e))}withConverter(e){return new Fi(this.firestore,e,this._path)}}function Dc(n,e,...t){if(n=Xe(n),mE("collection","path",e),n instanceof Rh){const i=Qe.fromString(e,...t);return B_(i),new Fi(n,null,i)}{if(!(n instanceof $t||n instanceof Fi))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return B_(i),new Fi(n.firestore,null,i)}}function Nt(n,e,...t){if(n=Xe(n),arguments.length===1&&(e=fw.newId()),mE("doc","path",e),n instanceof Rh){const i=Qe.fromString(e,...t);return F_(i),new $t(n,null,new ge(i))}{if(!(n instanceof $t||n instanceof Fi))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return F_(i),new $t(n.firestore,n instanceof Fi?n.converter:null,new ge(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Xw(this,"async_queue_retry"),this.fu=()=>{const i=kf();i&&ue("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=kf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=kf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Gr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ua(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Xr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Bp.createAndSchedule(this,e,t,i,a=>this.Su(a));return this.Eu.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function q_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Ns extends Rh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new z_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new z_(e),this._firestoreClient=void 0,await e}}}function bP(n,e){const t=typeof n=="object"?n:dh(),i=typeof n=="string"?n:"(default)",o=Gi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=Gv("firestore");a&&NP(o,...a)}return o}function Ch(n){if(n._terminated)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DP(n),n._firestoreClient}function DP(n){var e,t,i;const o=n._freezeSettings(),a=function(d,f,g,v){return new aC(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,pE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new SP(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ia(Ut.fromBase64String(e))}catch(t){throw new he(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ia(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^__.*__$/;class LP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new jl(e,this.data,t,this.fieldTransforms)}}class gE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Ph{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Xc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(yE(this.Mu)&&OP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class VP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Th(e)}$u(e,t,i,o=!1){return new Ph({Mu:e,methodName:t,Ku:i,path:Mt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(n){const e=n._freezeSettings(),t=Th(n._databaseId);return new VP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function MP(n,e,t,i,o,a={}){const c=n.$u(a.merge||a.mergeFields?2:0,e,t,o);Zp("Data must be an object, but it was:",c,i);const d=_E(i,c);let f,g;if(a.merge)f=new Tn(c.fieldMask),g=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const T of a.mergeFields){const E=op(e,T,t);if(!c.contains(E))throw new he(X.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);wE(v,E)||v.push(E)}f=new Tn(v),g=c.fieldTransforms.filter(T=>f.covers(T.field))}else f=null,g=c.fieldTransforms;return new LP(new hn(d),f,g)}class xh extends Wl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xh}}function UP(n,e,t){return new Ph({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Xp extends Wl{_toFieldTransform(e){return new Ow(e.path,new Nl)}isEqual(e){return e instanceof Xp}}class Jp extends Wl{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=UP(this,e,!0),i=this.Uu.map(a=>ha(a,t)),o=new ta(i);return new Ow(e.path,o)}isEqual(e){return e instanceof Jp&&Yo(this.Uu,e.Uu)}}function FP(n,e,t,i){const o=n.$u(1,e,t);Zp("Data must be an object, but it was:",o,i);const a=[],c=hn.empty();Ki(i,(f,g)=>{const v=em(e,f,t);g=Xe(g);const T=o.Lu(v);if(g instanceof xh)a.push(v);else{const E=ha(g,T);E!=null&&(a.push(v),c.set(v,E))}});const d=new Tn(a);return new gE(c,d,o.fieldTransforms)}function BP(n,e,t,i,o,a){const c=n.$u(1,e,t),d=[op(e,i,t)],f=[o];if(a.length%2!=0)throw new he(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)d.push(op(e,a[E])),f.push(a[E+1]);const g=[],v=hn.empty();for(let E=d.length-1;E>=0;--E)if(!wE(g,d[E])){const S=d[E];let N=f[E];N=Xe(N);const V=c.Lu(S);if(N instanceof xh)g.push(S);else{const k=ha(N,V);k!=null&&(g.push(S),v.set(S,k))}}const T=new Tn(g);return new gE(v,T,c.fieldTransforms)}function jP(n,e,t,i=!1){return ha(t,n.$u(i?4:3,e))}function ha(n,e){if(vE(n=Xe(n)))return Zp("Unsupported field value:",e,n),_E(n,e);if(n instanceof Wl)return function(i,o){if(!yE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const d of i){let f=ha(d,o.ku(c));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=Xe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return PC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=It.fromDate(i);return{timestampValue:$c(o.serializer,a)}}if(i instanceof It){const a=new It(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$c(o.serializer,a)}}if(i instanceof Kp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ia)return{bytesValue:jw(o.serializer,i._byteString)};if(i instanceof $t){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:bp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Qp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(f=>{if(typeof f!="number")throw d.qu("VectorValues must only contain numeric values.");return Pp(d.serializer,f)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Sh(i)}`)}(n,e)}function _E(n,e){const t={};return pw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,(i,o)=>{const a=ha(o,e.Ou(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function vE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof Kp||n instanceof ia||n instanceof $t||n instanceof Wl||n instanceof Qp)}function Zp(n,e,t){if(!vE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Sh(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function op(n,e,t){if((e=Xe(e))instanceof kh)return e._internalPath;if(typeof e=="string")return em(n,e);throw Xc("Field path arguments must be of type string or ",n,!1,void 0,t)}const zP=new RegExp("[~\\*/\\[\\]]");function em(n,e,t){if(e.search(zP)>=0)throw Xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kh(...e.split("."))._internalPath}catch{throw Xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||c)&&(f+=" (found",a&&(f+=` in field ${i}`),c&&(f+=` in document ${o}`),f+=")"),new he(X.INVALID_ARGUMENT,d+n+f)}function wE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qP extends EE{data(){return super.data()}}function tm(n,e){return typeof e=="string"?em(n,e):e instanceof kh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nm{}class HP extends nm{}function IE(n,e,...t){let i=[];e instanceof nm&&i.push(e),i=i.concat(t),function(a){const c=a.filter(f=>f instanceof rm).length,d=a.filter(f=>f instanceof Nh).length;if(c>1||c>0&&d>0)throw new he(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Nh extends HP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Nh(e,t,i)}_apply(e){const t=this._parse(e);return SE(e._query,t),new qs(e.firestore,e.converter,Yf(e._query,t))}_parse(e){const t=Yp(e.firestore);return function(a,c,d,f,g,v,T){let E;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new he(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){W_(T,v);const S=[];for(const N of T)S.push(H_(f,a,N));E={arrayValue:{values:S}}}else E=H_(f,a,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||W_(T,v),E=jP(d,c,T,v==="in"||v==="not-in");return pt.create(g,v,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function AE(n,e,t){const i=e,o=tm("where",n);return Nh._create(o,i,t)}class rm extends nm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:tr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const d=a.getFlattenedFilters();for(const f of d)SE(c,f),c=Yf(c,f)}(e._query,t),new qs(e.firestore,e.converter,Yf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function H_(n,e,t){if(typeof(t=Xe(t))=="string"){if(t==="")throw new he(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(e)&&t.indexOf("/")!==-1)throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!ge.isDocumentKey(i))throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return c_(n,new ge(i))}if(t instanceof $t)return c_(n,t._key);throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sh(t)}.`)}function W_(n,e){if(!Array.isArray(n)||n.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SE(n,e){const t=function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class WP{convertValue(e,t="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ct(c.doubleValue));return new Qp(a)}convertGeoPoint(e){return new Kp(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=mh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(kl(e));default:return null}}convertTimestamp(e){const t=qi(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);je(Gw(i));const o=new Pl(i.get(1),i.get(3)),a=new ge(i.popFirst(5));return o.isEqual(t)||Xr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class RE extends EE{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Oc extends RE{data(e={}){return super.data(e)}}class CE{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new _l(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Oc(this._firestore,this._userDataWriter,i.key,i,new _l(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const f=new Oc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Oc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:GP(d.type),doc:f,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function GP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){n=Ln(n,$t);const e=Ln(n.firestore,Ns);return kP(Ch(e),n._key).then(t=>NE(e,n,t))}class im extends WP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ia(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,t)}}function kE(n){n=Ln(n,qs);const e=Ln(n.firestore,Ns),t=Ch(e),i=new im(e);return TE(n._query),PP(t,n._query).then(o=>new CE(e,i,n,o))}function ap(n,e,t){n=Ln(n,$t);const i=Ln(n.firestore,Ns),o=$P(n.converter,e);return xE(i,[MP(Yp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,_r.none())])}function Zn(n,e,t,...i){n=Ln(n,$t);const o=Ln(n.firestore,Ns),a=Yp(o);let c;return c=typeof(e=Xe(e))=="string"||e instanceof kh?BP(a,"updateDoc",n._key,e,t,i):FP(a,"updateDoc",n._key,e),xE(o,[c.toMutation(n._key,_r.exists(!0))])}function PE(n,...e){var t,i,o;n=Xe(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||q_(e[c])||(a=e[c],c++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(q_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let f,g,v;if(n instanceof $t)g=Ln(n.firestore,Ns),v=gh(n._key.path),f={next:T=>{e[c]&&e[c](NE(g,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Ln(n,qs);g=Ln(T.firestore,Ns),v=T._query;const E=new im(g);f={next:S=>{e[c]&&e[c](new CE(g,E,T,S))},error:e[c+1],complete:e[c+2]},TE(n._query)}return function(E,S,N,V){const k=new Gp(V),M=new Wp(S,k,N);return E.asyncQueue.enqueueAndForget(async()=>zp(await Yc(E),M)),()=>{k.eu(),E.asyncQueue.enqueueAndForget(async()=>qp(await Yc(E),M))}}(Ch(g),v,d,f)}function xE(n,e){return function(i,o){const a=new Gr;return i.asyncQueue.enqueueAndForget(async()=>gP(await CP(i),o,a)),a.promise}(Ch(n),e)}function NE(n,e,t){const i=t.docs.get(e._key),o=new im(n);return new RE(n,o,e._key,i,new _l(t.hasPendingWrites,t.fromCache),e.converter)}function KP(){return new Xp("serverTimestamp")}function Jc(...n){return new Jp("arrayUnion",n)}(function(e,t=!0){(function(o){aa=o})(Bs),er(new Vn("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new Ns(new HR(i.getProvider("auth-internal")),new KR(i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(g.options.projectId,v)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),dn(i_,"4.7.6",e),dn(i_,"4.7.6","esm2017")})();var QP="firebase",YP="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(QP,YP,"app");const bE="@firebase/installations",sm="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=1e4,OE=`w:${sm}`,LE="FIS_v2",XP="https://firebaseinstallations.googleapis.com/v1",JP=60*60*1e3,ZP="installations",e1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bs=new Fs(ZP,e1,t1);function VE(n){return n instanceof Mn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME({projectId:n}){return`${XP}/projects/${n}/installations`}function UE(n){return{token:n.token,requestStatus:2,expiresIn:r1(n.expiresIn),creationTime:Date.now()}}async function FE(n,e){const i=(await e.json()).error;return bs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function BE({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function n1(n,{refreshToken:e}){const t=BE(n);return t.append("Authorization",i1(e)),t}async function jE(n){const e=await n();return e.status>=500&&e.status<600?n():e}function r1(n){return Number(n.replace("s","000"))}function i1(n){return`${LE} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=ME(n),o=BE(n),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const c={fid:t,authVersion:LE,appId:n.appId,sdkVersion:OE},d={method:"POST",headers:o,body:JSON.stringify(c)},f=await jE(()=>fetch(i,d));if(f.ok){const g=await f.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:UE(g.authToken)}}else throw await FE("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=/^[cdef][\w-]{21}$/,lp="";function l1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=u1(n);return a1.test(t)?t:lp}catch{return lp}}function u1(n){return o1(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Map;function HE(n,e){const t=bh(n);WE(t,e),c1(t,e)}function WE(n,e){const t=qE.get(n);if(t)for(const i of t)i(e)}function c1(n,e){const t=h1();t&&t.postMessage({key:n,fid:e}),d1()}let Cs=null;function h1(){return!Cs&&"BroadcastChannel"in self&&(Cs=new BroadcastChannel("[Firebase] FID Change"),Cs.onmessage=n=>{WE(n.data.key,n.data.fid)}),Cs}function d1(){qE.size===0&&Cs&&(Cs.close(),Cs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firebase-installations-database",p1=1,Ds="firebase-installations-store";let xf=null;function om(){return xf||(xf=nw(f1,p1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ds)}}})),xf}async function Zc(n,e){const t=bh(n),o=(await om()).transaction(Ds,"readwrite"),a=o.objectStore(Ds),c=await a.get(t);return await a.put(e,t),await o.done,(!c||c.fid!==e.fid)&&HE(n,e.fid),e}async function $E(n){const e=bh(n),i=(await om()).transaction(Ds,"readwrite");await i.objectStore(Ds).delete(e),await i.done}async function Dh(n,e){const t=bh(n),o=(await om()).transaction(Ds,"readwrite"),a=o.objectStore(Ds),c=await a.get(t),d=e(c);return d===void 0?await a.delete(t):await a.put(d,t),await o.done,d&&(!c||c.fid!==d.fid)&&HE(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(n){let e;const t=await Dh(n.appConfig,i=>{const o=m1(i),a=g1(n,o);return e=a.registrationPromise,a.installationEntry});return t.fid===lp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function m1(n){const e=n||{fid:l1(),registrationStatus:0};return GE(e)}function g1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=y1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_1(n)}:{installationEntry:e}}async function y1(n,e){try{const t=await s1(n,e);return Zc(n.appConfig,t)}catch(t){throw VE(t)&&t.customData.serverCode===409?await $E(n.appConfig):await Zc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function _1(n){let e=await $_(n.appConfig);for(;e.registrationStatus===1;)await zE(100),e=await $_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await am(n);return i||t}return e}function $_(n){return Dh(n,e=>{if(!e)throw bs.create("installation-not-found");return GE(e)})}function GE(n){return v1(n)?{fid:n.fid,registrationStatus:0}:n}function v1(n){return n.registrationStatus===1&&n.registrationTime+DE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1({appConfig:n,heartbeatServiceProvider:e},t){const i=E1(n,t),o=n1(n,t),a=e.getImmediate({optional:!0});if(a){const g=await a.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const c={installation:{sdkVersion:OE,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(c)},f=await jE(()=>fetch(i,d));if(f.ok){const g=await f.json();return UE(g)}else throw await FE("Generate Auth Token",f)}function E1(n,{fid:e}){return`${ME(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(n,e=!1){let t;const i=await Dh(n.appConfig,a=>{if(!KE(a))throw bs.create("not-registered");const c=a.authToken;if(!e&&A1(c))return a;if(c.requestStatus===1)return t=T1(n,e),a;{if(!navigator.onLine)throw bs.create("app-offline");const d=R1(a);return t=I1(n,d),d}});return t?await t:i.authToken}async function T1(n,e){let t=await G_(n.appConfig);for(;t.authToken.requestStatus===1;)await zE(100),t=await G_(n.appConfig);const i=t.authToken;return i.requestStatus===0?lm(n,e):i}function G_(n){return Dh(n,e=>{if(!KE(e))throw bs.create("not-registered");const t=e.authToken;return C1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function I1(n,e){try{const t=await w1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Zc(n.appConfig,i),t}catch(t){if(VE(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $E(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zc(n.appConfig,i)}throw t}}function KE(n){return n!==void 0&&n.registrationStatus===2}function A1(n){return n.requestStatus===2&&!S1(n)}function S1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+JP}function R1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function C1(n){return n.requestStatus===1&&n.requestTime+DE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(n){const e=n,{installationEntry:t,registrationPromise:i}=await am(e);return i?i.catch(console.error):lm(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(n,e=!1){const t=n;return await x1(t),(await lm(t,e)).token}async function x1(n){const{registrationPromise:e}=await am(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(n){if(!n||!n.options)throw Nf("App Configuration");if(!n.name)throw Nf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Nf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Nf(n){return bs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="installations",b1="installations-internal",D1=n=>{const e=n.getProvider("app").getImmediate(),t=N1(e),i=Gi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},O1=n=>{const e=n.getProvider("app").getImmediate(),t=Gi(e,QE).getImmediate();return{getId:()=>k1(t),getToken:o=>P1(t,o)}};function L1(){er(new Vn(QE,D1,"PUBLIC")),er(new Vn(b1,O1,"PRIVATE"))}L1();dn(bE,sm);dn(bE,sm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="analytics",V1="firebase_id",M1="origin",U1=60*1e3,F1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",um="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new hh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new Fs("analytics","Analytics",B1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(n){if(!n.startsWith(um)){const e=An.create("invalid-gtag-resource",{gtagURL:n});return fn.warn(e.message),""}return n}function YE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function z1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function q1(n,e){const t=z1("firebase-js-sdk-policy",{createScriptURL:j1}),i=document.createElement("script"),o=`${um}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function H1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function W1(n,e,t,i,o,a){const c=i[o];try{if(c)await e[c];else{const f=(await YE(t)).find(g=>g.measurementId===o);f&&await e[f.appId]}}catch(d){fn.error(d)}n("config",o,a)}async function $1(n,e,t,i,o){try{let a=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const d=await YE(t);for(const f of c){const g=d.find(T=>T.measurementId===f),v=g&&e[g.appId];if(v)a.push(v);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),n("event",i,o||{})}catch(a){fn.error(a)}}function G1(n,e,t,i){async function o(a,...c){try{if(a==="event"){const[d,f]=c;await $1(n,e,t,d,f)}else if(a==="config"){const[d,f]=c;await W1(n,e,t,i,d,f)}else if(a==="consent"){const[d,f]=c;n("consent",d,f)}else if(a==="get"){const[d,f,g]=c;n("get",d,f,g)}else if(a==="set"){const[d]=c;n("set",d)}else n(a,...c)}catch(d){fn.error(d)}}return o}function K1(n,e,t,i,o){let a=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=G1(a,n,e,t),{gtagCore:a,wrappedGtag:window[o]}}function Q1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(um)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=30,X1=1e3;class J1{constructor(e={},t=X1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const XE=new J1;function Z1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ex(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:Z1(i)},a=F1.replace("{app-id}",t),c=await fetch(a,o);if(c.status!==200&&c.status!==304){let d="";try{const f=await c.json();!((e=f.error)===null||e===void 0)&&e.message&&(d=f.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function tx(n,e=XE,t){const{appId:i,apiKey:o,measurementId:a}=n.options;if(!i)throw An.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:i};throw An.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new ix;return setTimeout(async()=>{d.abort()},U1),JE({appId:i,apiKey:o,measurementId:a},c,d,e)}async function JE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=XE){var a;const{appId:c,measurementId:d}=n;try{await nx(i,e)}catch(f){if(d)return fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:c,measurementId:d};throw f}try{const f=await ex(n);return o.deleteThrottleMetadata(c),f}catch(f){const g=f;if(!rx(g)){if(o.deleteThrottleMetadata(c),d)return fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw f}const v=Number((a=g==null?void 0:g.customData)===null||a===void 0?void 0:a.httpStatus)===503?Ky(t,o.intervalMillis,Y1):Ky(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(c,T),fn.debug(`Calling attemptFetch again in ${v} millis`),JE(n,T,i,o)}}function nx(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),a=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(a),i(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rx(n){if(!(n instanceof Mn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ix{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sx(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const a=await e,c=Object.assign(Object.assign({},i),{send_to:a});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(){if(Jv())try{await Zv()}catch(n){return fn.warn(An.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return fn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ax(n,e,t,i,o,a,c){var d;const f=tx(n);f.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&fn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>fn.error(S)),e.push(f);const g=ox().then(S=>{if(S)return i.getId()}),[v,T]=await Promise.all([f,g]);Q1(a)||q1(a,v.measurementId),o("js",new Date);const E=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return E[M1]="firebase",E.update=!0,T!=null&&(E[V1]=T),o("config",v.measurementId,E),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.app=e}_delete(){return delete Il[this.app.options.appId],Promise.resolve()}}let Il={},K_=[];const Q_={};let bf="dataLayer",ux="gtag",Y_,ZE,X_=!1;function cx(){const n=[];if(Xv()&&n.push("This is a browser extension environment."),AS()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=An.create("invalid-analytics-context",{errorInfo:e});fn.warn(t.message)}}function hx(n,e,t){cx();const i=n.options.appId;if(!i)throw An.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(Il[i]!=null)throw An.create("already-exists",{id:i});if(!X_){H1(bf);const{wrappedGtag:a,gtagCore:c}=K1(Il,K_,Q_,bf,ux);ZE=a,Y_=c,X_=!0}return Il[i]=ax(n,K_,Q_,e,Y_,bf,t),new lx(n)}function dx(n=dh()){n=Xe(n);const e=Gi(n,eh);return e.isInitialized()?e.getImmediate():fx(n)}function fx(n,e={}){const t=Gi(n,eh);if(t.isInitialized()){const o=t.getImmediate();if(Yo(e,t.getOptions()))return o;throw An.create("already-initialized")}return t.initialize({options:e})}function px(n,e,t,i){n=Xe(n),sx(ZE,Il[n.app.options.appId],e,t,i).catch(o=>fn.error(o))}const J_="@firebase/analytics",Z_="0.10.11";function mx(){er(new Vn(eh,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return hx(i,o,t)},"PUBLIC")),er(new Vn("analytics-internal",n,"PRIVATE")),dn(J_,Z_),dn(J_,Z_,"esm2017");function n(e){try{const t=e.getProvider(eh).getImmediate();return{logEvent:(i,o,a)=>px(t,i,o,a)}}catch(t){throw An.create("interop-component-reg-failed",{reason:t})}}}mx();function cm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function eT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gx=eT,tT=new Fs("auth","Firebase",eT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new hh("@firebase/auth");function yx(n,...e){th.logLevel<=Pe.WARN&&th.warn(`Auth (${Bs}): ${n}`,...e)}function Lc(n,...e){th.logLevel<=Pe.ERROR&&th.error(`Auth (${Bs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,...e){throw hm(n,...e)}function wr(n,...e){return hm(n,...e)}function nT(n,e,t){const i=Object.assign(Object.assign({},gx()),{[e]:t});return new Fs("auth","Firebase",i).create(e,{appName:n.name})}function Kr(n){return nT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tT.create(n,...e)}function we(n,e,...t){if(!n)throw hm(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Lc(e),new Error(e)}function Zr(n,e){n||qr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function _x(){return ev()==="http:"||ev()==="https:"}function ev(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_x()||Xv()||"connection"in navigator)?navigator.onLine:!0}function wx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zr(t>e,"Short delay should be less than long delay!"),this.isMobile=_S()||ES()}get(){return vx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n,e){Zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new $l(3e4,6e4);function ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ri(n,e,t,i,o={}){return iT(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Fl(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:f},a);return wS()||(g.referrerPolicy="no-referrer"),rT.fetch()(sT(n,n.config.apiHost,t,d),g)})}async function iT(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ex),e);try{const o=new Ax(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Tc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Tc(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw Tc(n,"user-disabled",c);const v=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw nT(n,v,g);nr(n,v)}}catch(o){if(o instanceof Mn)throw o;nr(n,"network-request-failed",{message:String(o)})}}async function Gl(n,e,t,i,o={}){const a=await ri(n,e,t,i,o);return"mfaPendingCredential"in a&&nr(n,"multi-factor-auth-required",{_serverResponse:a}),a}function sT(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?dm(n.config,o):`${n.config.apiScheme}://${o}`}function Ix(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(wr(this.auth,"network-request-failed")),Tx.get())})}}function Tc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=wr(n,e,i);return o.customData._tokenResponse=t,o}function tv(n){return n!==void 0&&n.enterprise!==void 0}class Sx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ix(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rx(n,e){return ri(n,"GET","/v2/recaptchaConfig",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(n,e){return ri(n,"POST","/v1/accounts:delete",e)}async function oT(n,e){return ri(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kx(n,e=!1){const t=Xe(n),i=await t.getIdToken(e),o=fm(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:Al(Df(o.auth_time)),issuedAtTime:Al(Df(o.iat)),expirationTime:Al(Df(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Df(n){return Number(n)*1e3}function fm(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Wv(t);return o?JSON.parse(o):(Lc("Failed to decode base64 JWT payload"),null)}catch(o){return Lc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function nv(n){const e=fm(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Mn&&Px(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Px({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Al(this.lastLoginAt),this.creationTime=Al(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Dl(n,oT(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?aT(a.providerUserInfo):[],d=bx(n.providerData,c),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new cp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function Nx(n){const e=Xe(n);await nh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bx(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function aT(n){return n.map(e=>{var{providerId:t}=e,i=cm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(n,e){const t=await iT(n,{},async()=>{const i=Fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=sT(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",rT.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ox(n,e){return ri(n,"POST","/v2/accounts:revokeToken",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=nv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await Dx(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new $o;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(we(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Hr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new cp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Dl(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return kx(this,e)}reload(){return Nx(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await nh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Dl(this,Cx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,f,g,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,E=(o=t.email)!==null&&o!==void 0?o:void 0,S=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,V=(d=t.tenantId)!==null&&d!==void 0?d:void 0,k=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,M=(g=t.createdAt)!==null&&g!==void 0?g:void 0,U=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:H,emailVerified:K,isAnonymous:se,providerData:oe,stsTokenManager:P}=t;we(H&&P,e,"internal-error");const A=$o.fromJSON(this.name,P);we(typeof H=="string",e,"internal-error"),Pi(T,e.name),Pi(E,e.name),we(typeof K=="boolean",e,"internal-error"),we(typeof se=="boolean",e,"internal-error"),Pi(S,e.name),Pi(N,e.name),Pi(V,e.name),Pi(k,e.name),Pi(M,e.name),Pi(U,e.name);const R=new Hr({uid:H,auth:e,email:E,emailVerified:K,displayName:T,isAnonymous:se,photoURL:N,phoneNumber:S,tenantId:V,stsTokenManager:A,createdAt:M,lastLoginAt:U});return oe&&Array.isArray(oe)&&(R.providerData=oe.map(b=>Object.assign({},b))),k&&(R._redirectEventId=k),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new $o;o.updateFromServerResponse(t);const a=new Hr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await nh(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?aT(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new $o;d.updateFromIdToken(i);const f=new Hr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new cp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;function Wr(n){Zr(n instanceof Function,"Expected a class definition");let e=rv.get(n);return e?(Zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lT.type="NONE";const iv=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e,t){return`firebase:${n}:${e}:${t}`}class Go{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Vc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Vc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Go(Wr(iv),e,i);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=o[0]||Wr(iv);const c=Vc(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){const T=Hr._fromJSON(e,v);g!==a&&(d=T),a=g;break}}catch{}const f=o.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Go(a,e,i):(a=f[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new Go(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pT(e))return"Blackberry";if(mT(e))return"Webos";if(cT(e))return"Safari";if((e.includes("chrome/")||hT(e))&&!e.includes("edge/"))return"Chrome";if(fT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function uT(n=Gt()){return/firefox\//i.test(n)}function cT(n=Gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hT(n=Gt()){return/crios\//i.test(n)}function dT(n=Gt()){return/iemobile/i.test(n)}function fT(n=Gt()){return/android/i.test(n)}function pT(n=Gt()){return/blackberry/i.test(n)}function mT(n=Gt()){return/webos/i.test(n)}function pm(n=Gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lx(n=Gt()){var e;return pm(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vx(){return TS()&&document.documentMode===10}function gT(n=Gt()){return pm(n)||fT(n)||mT(n)||pT(n)||/windows phone/i.test(n)||dT(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(n,e=[]){let t;switch(n){case"Browser":t=sv(Gt());break;case"Worker":t=`${sv(Gt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const f=e(a);c(f)}catch(f){d(f)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(n,e={}){return ri(n,"GET","/v2/passwordPolicy",ni(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=6;class Bx{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Fx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ov(this),this.idTokenSubscription=new ov(this),this.beforeStateQueue=new Mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Go.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oT(this,{idToken:e}),i=await Hr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mr(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Kr(this));const t=e?Xe(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ux(this),t=new Bx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ox(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yx(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Yi(n){return Xe(n)}class ov{constructor(e){this.auth=e,this.observer=null,this.addObserver=PS(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zx(n){Oh=n}function _T(n){return Oh.loadJS(n)}function qx(){return Oh.recaptchaEnterpriseScript}function Hx(){return Oh.gapiScript}function Wx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $x{constructor(){this.enterprise=new Gx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Gx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Kx="recaptcha-enterprise",vT="NO_RECAPTCHA";class Qx{constructor(e){this.type=Kx,this.auth=Yi(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{Rx(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Sx(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,c(g.siteKey)}}).catch(f=>{d(f)})})}function o(a,c,d){const f=window.grecaptcha;tv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{c(g)}).catch(()=>{c(vT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $x().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&tv(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=qx();f.length!==0&&(f+=d),_T(f).then(()=>{o(d,a,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function av(n,e,t,i=!1,o=!1){const a=new Qx(n);let c;if(o)c=vT;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function rh(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await av(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await av(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(n,e){const t=Gi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Yo(a,e??{}))return o;nr(o,"already-initialized")}return t.initialize({options:e})}function Xx(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Jx(n,e,t){const i=Yi(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=wT(e),{host:c,port:d}=Zx(e),f=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${c}${f}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),eN()}function wT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zx(n){const e=wT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:lv(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:lv(c)}}}function lv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function eN(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function tN(n,e){return ri(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(n,e){return Gl(n,"POST","/v1/accounts:signInWithPassword",ni(n,e))}async function rN(n,e){return ri(n,"POST","/v1/accounts:sendOobCode",ni(n,e))}async function iN(n,e){return rN(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(n,e){return Gl(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}async function oN(n,e){return Gl(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends mm{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ol(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ol(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,t,"signInWithPassword",nN);case"emailLink":return sN(e,{email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(e,i,"signUpPassword",tN);case"emailLink":return oN(e,{idToken:t,email:this._email,oobCode:this._password});default:nr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n,e){return Gl(n,"POST","/v1/accounts:signInWithIdp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="http://localhost";class Os extends mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=cm(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Os(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ko(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ko(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ko(e,t)}buildRequest(){const e={requestUri:aN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Fl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uN(n){const e=fl(pl(n)).link,t=e?fl(pl(e)).deep_link_id:null,i=fl(pl(n)).deep_link_id;return(i?fl(pl(i)).link:null)||i||t||e||n}class gm{constructor(e){var t,i,o,a,c,d;const f=fl(pl(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(i=f.oobCode)!==null&&i!==void 0?i:null,T=lN((o=f.mode)!==null&&o!==void 0?o:null);we(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=f.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=uN(e);try{return new gm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(e,t){return Ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=gm.parseLink(t);return we(i,"argument-error"),Ol._fromEmailAndCode(e,i.code,i.tenantId)}}da.PROVIDER_ID="password";da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends ET{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Kl{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xi.credential(e.oauthAccessToken)}catch{return null}}}xi.FACEBOOK_SIGN_IN_METHOD="facebook.com";xi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Os._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ni.credential(t,i)}catch{return null}}}Ni.GOOGLE_SIGN_IN_METHOD="google.com";Ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Kl{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Kl{constructor(){super("twitter.com")}static credential(e,t){return Os._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Di.credential(t,i)}catch{return null}}}Di.TWITTER_SIGN_IN_METHOD="twitter.com";Di.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(n,e){return Gl(n,"POST","/v1/accounts:signUp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Hr._fromIdTokenResponse(e,i,o),c=uv(i);return new Ls({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=uv(i);return new Ls({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function uv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends Mn{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ih.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new ih(e,t,i,o)}}function TT(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ih._fromErrorAndOperation(n,a,e,i):a})}async function hN(n,e,t=!1){const i=await Dl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ls._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(n,e,t=!1){const{auth:i}=n;if(mr(i.app))return Promise.reject(Kr(i));const o="reauthenticate";try{const a=await Dl(n,TT(i,o,e,n),t);we(a.idToken,i,"internal-error");const c=fm(a.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),Ls._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&nr(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(n,e,t=!1){if(mr(n.app))return Promise.reject(Kr(n));const i="signIn",o=await TT(n,i,e),a=await Ls._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function fN(n,e){return IT(Yi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(n){const e=Yi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pN(n,e,t){const i=Yi(n);await rh(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",iN)}async function mN(n,e,t){if(mr(n.app))return Promise.reject(Kr(n));const i=Yi(n),c=await rh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&AT(n),f}),d=await Ls._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function gN(n,e,t){return mr(n.app)?Promise.reject(Kr(n)):fN(Xe(n),da.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&AT(n),i})}function yN(n,e,t,i){return Xe(n).onIdTokenChanged(e,t,i)}function _N(n,e,t){return Xe(n).beforeAuthStateChanged(e,t)}function ST(n,e,t,i){return Xe(n).onAuthStateChanged(e,t,i)}function vN(n){return Xe(n).signOut()}const sh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=1e3,EN=10;class CT extends RT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,f)=>{this.notifyListeners(c,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);Vx()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,EN):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},wN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}CT.type="LOCAL";const TN=CT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends RT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kT.type="SESSION";const PT=kT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Lh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async g=>g(t.origin,a)),f=await IN(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,f)=>{const g=ym("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const E=T;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(E.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return window}function SN(n){Er().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof Er().WorkerGlobalScope<"u"&&typeof Er().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kN(){return xT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="firebaseLocalStorageDb",PN=1,oh="firebaseLocalStorage",bT="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vh(n,e){return n.transaction([oh],e?"readwrite":"readonly").objectStore(oh)}function xN(){const n=indexedDB.deleteDatabase(NT);return new Ql(n).toPromise()}function hp(){const n=indexedDB.open(NT,PN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(oh,{keyPath:bT})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(oh)?e(i):(i.close(),await xN(),e(await hp()))})})}async function cv(n,e,t){const i=Vh(n,!0).put({[bT]:e,value:t});return new Ql(i).toPromise()}async function NN(n,e){const t=Vh(n,!1).get(e),i=await new Ql(t).toPromise();return i===void 0?null:i.value}function hv(n,e){const t=Vh(n,!0).delete(e);return new Ql(t).toPromise()}const bN=800,DN=3;class DT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>DN)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lh._getInstance(kN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new AN(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await cv(e,sh,"1"),await hv(e,sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>NN(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Vh(o,!1).getAll();return new Ql(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DT.type="LOCAL";const ON=DT;new $l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n,e){return e?Wr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m extends mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function VN(n){return IT(n.auth,new _m(n),n.bypassAuthState)}function MN(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),dN(t,new _m(n),n.bypassAuthState)}async function UN(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),hN(t,new _m(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return UN;case"reauthViaPopup":case"reauthViaRedirect":return MN;default:nr(this.auth,"internal-error")}}resolve(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new $l(2e3,1e4);class Ho extends OT{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Zr(this.filter.length===1,"Popup operations only handle one event");const e=ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FN.get())};e()}}Ho.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="pendingRedirect",Mc=new Map;class jN extends OT{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Mc.get(this.auth._key());if(!e){try{const i=await zN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Mc.set(this.auth._key(),e)}return this.bypassAuthState||Mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zN(n,e){const t=WN(e),i=HN(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function qN(n,e){Mc.set(n._key(),e)}function HN(n){return Wr(n._redirectPersistence)}function WN(n){return Vc(BN,n.config.apiKey,n.name)}async function $N(n,e,t=!1){if(mr(n.app))return Promise.reject(Kr(n));const i=Yi(n),o=LN(i,e),c=await new jN(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=10*60*1e3;class KN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!LT(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(wr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GN&&this.cachedEventUids.clear(),this.cachedEventUids.has(dv(e))}saveEventToCache(e){this.cachedEventUids.add(dv(e)),this.lastProcessedEventTime=Date.now()}}function dv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function LT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(n,e={}){return ri(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JN=/^https?/;async function ZN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await YN(n);for(const t of e)try{if(eb(t))return}catch{}nr(n,"unauthorized-domain")}function eb(n){const e=up(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!JN.test(t))return!1;if(XN.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new $l(3e4,6e4);function fv(){const n=Er().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nb(n){return new Promise((e,t)=>{var i,o,a;function c(){fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fv(),t(wr(n,"network-request-failed"))},timeout:tb.get()})}if(!((o=(i=Er().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Er().gapi)===null||a===void 0)&&a.load)c();else{const d=Wx("iframefcb");return Er()[d]=()=>{gapi.load?c():t(wr(n,"network-request-failed"))},_T(`${Hx()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw Uc=null,e})}let Uc=null;function rb(n){return Uc=Uc||nb(n),Uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=new $l(5e3,15e3),sb="__/auth/iframe",ob="emulator/auth/iframe",ab={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ub(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dm(e,ob):`https://${n.config.authDomain}/${sb}`,i={apiKey:e.apiKey,appName:n.name,v:Bs},o=lb.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Fl(i).slice(1)}`}async function cb(n){const e=await rb(n),t=Er().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:ub(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ab,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=wr(n,"network-request-failed"),d=Er().setTimeout(()=>{a(c)},ib.get());function f(){Er().clearTimeout(d),o(i)}i.ping(f).then(f,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},db=500,fb=600,pb="_blank",mb="http://localhost";class pv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gb(n,e,t,i=db,o=fb){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const f=Object.assign(Object.assign({},hb),{width:i.toString(),height:o.toString(),top:a,left:c}),g=Gt().toLowerCase();t&&(d=hT(g)?pb:t),uT(g)&&(e=e||mb,f.scrollbars="yes");const v=Object.entries(f).reduce((E,[S,N])=>`${E}${S}=${N},`,"");if(Lx(g)&&d!=="_self")return yb(e||"",d),new pv(null);const T=window.open(e||"",d,v);we(T,n,"popup-blocked");try{T.focus()}catch{}return new pv(T)}function yb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="__/auth/handler",vb="emulator/auth/handler",wb=encodeURIComponent("fac");async function mv(n,e,t,i,o,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Bs,eventId:o};if(e instanceof ET){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",kS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Kl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${wb}=${encodeURIComponent(f)}`:"";return`${Eb(n)}?${Fl(d).slice(1)}${g}`}function Eb({config:n}){return n.emulator?dm(n,vb):`https://${n.authDomain}/${_b}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="webStorageSupport";class Tb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PT,this._completeRedirectFn=$N,this._overrideRedirectResult=qN}async _openPopup(e,t,i,o){var a;Zr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await mv(e,t,i,up(),o);return gb(e,c,ym())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await mv(e,t,i,up(),o);return SN(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Zr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cb(e),i=new KN(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Of,{type:Of},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Of];c!==void 0&&t(!!c),nr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gT()||cT()||pm()}}const Ib=Tb;var gv="@firebase/auth",yv="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rb(n){er(new Vn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yT(n)},g=new jx(i,o,a,f);return Xx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),er(new Vn("auth-internal",e=>{const t=Yi(e.getProvider("auth").getImmediate());return(i=>new Ab(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(gv,yv,Sb(n)),dn(gv,yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=5*60,kb=Qv("authIdTokenMaxAge")||Cb;let _v=null;const Pb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>kb)return;const o=t==null?void 0:t.token;_v!==o&&(_v=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xb(n=dh()){const e=Gi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yx(n,{popupRedirectResolver:Ib,persistence:[ON,TN,PT]}),i=Qv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=Pb(a.toString());_N(t,c,()=>c(t.currentUser)),yN(t,d=>c(d))}}const o=$v("auth");return o&&Jx(t,`http://${o}`),t}function Nb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}zx({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=wr("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",Nb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rb("Browser");function VT(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=VT(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function ks(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=VT(n))&&(i&&(i+=" "),i+=e);return i}function bb(n){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}bb(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var Yl=n=>typeof n=="number"&&!isNaN(n),Vs=n=>typeof n=="string",ei=n=>typeof n=="function",Db=n=>Vs(n)||Yl(n),dp=n=>Vs(n)||ei(n)?n:null,Ob=(n,e)=>n===!1||Yl(n)&&n>0?n:e,fp=n=>q.isValidElement(n)||Vs(n)||ei(n)||Yl(n);function Lb(n,e,t=300){let{scrollHeight:i,style:o}=n;requestAnimationFrame(()=>{o.minHeight="initial",o.height=i+"px",o.transition=`all ${t}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(e,t)})})}function Vb({enter:n,exit:e,appendPosition:t=!1,collapse:i=!0,collapseDuration:o=300}){return function({children:a,position:c,preventExitTransition:d,done:f,nodeRef:g,isIn:v,playToast:T}){let E=t?`${n}--${c}`:n,S=t?`${e}--${c}`:e,N=q.useRef(0);return q.useLayoutEffect(()=>{let V=g.current,k=E.split(" "),M=U=>{U.target===g.current&&(T(),V.removeEventListener("animationend",M),V.removeEventListener("animationcancel",M),N.current===0&&U.type!=="animationcancel"&&V.classList.remove(...k))};V.classList.add(...k),V.addEventListener("animationend",M),V.addEventListener("animationcancel",M)},[]),q.useEffect(()=>{let V=g.current,k=()=>{V.removeEventListener("animationend",k),i?Lb(V,f,o):f()};v||(d?k():(N.current=1,V.className+=` ${S}`,V.addEventListener("animationend",k)))},[v]),Ye.createElement(Ye.Fragment,null,a)}}function vv(n,e){return{content:MT(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function MT(n,e,t=!1){return q.isValidElement(n)&&!Vs(n.type)?q.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):ei(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function Mb({closeToast:n,theme:e,ariaLabel:t="close"}){return Ye.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:i=>{i.stopPropagation(),n(!0)},"aria-label":t},Ye.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ye.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ub({delay:n,isRunning:e,closeToast:t,type:i="default",hide:o,className:a,controlledProgress:c,progress:d,rtl:f,isIn:g,theme:v}){let T=o||c&&d===0,E={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};c&&(E.transform=`scaleX(${d})`);let S=ks("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),N=ei(a)?a({rtl:f,type:i,defaultClassName:S}):ks(S,a),V={[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{g&&t()}};return Ye.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":T},Ye.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${i}`}),Ye.createElement("div",{role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:N,style:E,...V}))}var Fb=1,UT=()=>`${Fb++}`;function Bb(n,e,t){let i=1,o=0,a=[],c=[],d=e,f=new Map,g=new Set,v=U=>(g.add(U),()=>g.delete(U)),T=()=>{c=Array.from(f.values()),g.forEach(U=>U())},E=({containerId:U,toastId:H,updateId:K})=>{let se=U?U!==n:n!==1,oe=f.has(H)&&K==null;return se||oe},S=(U,H)=>{f.forEach(K=>{var se;(H==null||H===K.props.toastId)&&((se=K.toggle)==null||se.call(K,U))})},N=U=>{var H,K;(K=(H=U.props)==null?void 0:H.onClose)==null||K.call(H,U.removalReason),U.isActive=!1},V=U=>{if(U==null)f.forEach(N);else{let H=f.get(U);H&&N(H)}T()},k=()=>{o-=a.length,a=[]},M=U=>{var H,K;let{toastId:se,updateId:oe}=U.props,P=oe==null;U.staleId&&f.delete(U.staleId),U.isActive=!0,f.set(se,U),T(),t(vv(U,P?"added":"updated")),P&&((K=(H=U.props).onOpen)==null||K.call(H))};return{id:n,props:d,observe:v,toggle:S,removeToast:V,toasts:f,clearQueue:k,buildToast:(U,H)=>{if(E(H))return;let{toastId:K,updateId:se,data:oe,staleId:P,delay:A}=H,R=se==null;R&&o++;let b={...d,style:d.toastStyle,key:i++,...Object.fromEntries(Object.entries(H).filter(([F,x])=>x!=null)),toastId:K,updateId:se,data:oe,isIn:!1,className:dp(H.className||d.toastClassName),progressClassName:dp(H.progressClassName||d.progressClassName),autoClose:H.isLoading?!1:Ob(H.autoClose,d.autoClose),closeToast(F){f.get(K).removalReason=F,V(K)},deleteToast(){let F=f.get(K);if(F!=null){if(t(vv(F,"removed")),f.delete(K),o--,o<0&&(o=0),a.length>0){M(a.shift());return}T()}}};b.closeButton=d.closeButton,H.closeButton===!1||fp(H.closeButton)?b.closeButton=H.closeButton:H.closeButton===!0&&(b.closeButton=fp(d.closeButton)?d.closeButton:!0);let O={content:U,props:b,staleId:P};d.limit&&d.limit>0&&o>d.limit&&R?a.push(O):Yl(A)?setTimeout(()=>{M(O)},A):M(O)},setProps(U){d=U},setToggle:(U,H)=>{let K=f.get(U);K&&(K.toggle=H)},isToastActive:U=>{var H;return(H=f.get(U))==null?void 0:H.isActive},getSnapshot:()=>c}}var Zt=new Map,Ll=[],pp=new Set,jb=n=>pp.forEach(e=>e(n)),FT=()=>Zt.size>0;function zb(){Ll.forEach(n=>jT(n.content,n.options)),Ll=[]}var qb=(n,{containerId:e})=>{var t;return(t=Zt.get(e||1))==null?void 0:t.toasts.get(n)};function BT(n,e){var t;if(e)return!!((t=Zt.get(e))!=null&&t.isToastActive(n));let i=!1;return Zt.forEach(o=>{o.isToastActive(n)&&(i=!0)}),i}function Hb(n){if(!FT()){Ll=Ll.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||Db(n))Zt.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=Zt.get(n.containerId);e?e.removeToast(n.id):Zt.forEach(t=>{t.removeToast(n.id)})}}var Wb=(n={})=>{Zt.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function jT(n,e){fp(n)&&(FT()||Ll.push({content:n,options:e}),Zt.forEach(t=>{t.buildToast(n,e)}))}function $b(n){var e;(e=Zt.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function zT(n,e){Zt.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function Gb(n){let e=n.containerId||1;return{subscribe(t){let i=Bb(e,n,jb);Zt.set(e,i);let o=i.observe(t);return zb(),()=>{o(),Zt.delete(e)}},setProps(t){var i;(i=Zt.get(e))==null||i.setProps(t)},getSnapshot(){var t;return(t=Zt.get(e))==null?void 0:t.getSnapshot()}}}function Kb(n){return pp.add(n),()=>{pp.delete(n)}}function Qb(n){return n&&(Vs(n.toastId)||Yl(n.toastId))?n.toastId:UT()}function Xl(n,e){return jT(n,e),e.toastId}function Mh(n,e){return{...e,type:e&&e.type||n,toastId:Qb(e)}}function Uh(n){return(e,t)=>Xl(e,Mh(n,t))}function Re(n,e){return Xl(n,Mh("default",e))}Re.loading=(n,e)=>Xl(n,Mh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Yb(n,{pending:e,error:t,success:i},o){let a;e&&(a=Vs(e)?Re.loading(e,o):Re.loading(e.render,{...o,...e}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(g,v,T)=>{if(v==null){Re.dismiss(a);return}let E={type:g,...c,...o,data:T},S=Vs(v)?{render:v}:v;return a?Re.update(a,{...E,...S}):Re(S.render,{...E,...S}),T},f=ei(n)?n():n;return f.then(g=>d("success",i,g)).catch(g=>d("error",t,g)),f}Re.promise=Yb;Re.success=Uh("success");Re.info=Uh("info");Re.error=Uh("error");Re.warning=Uh("warning");Re.warn=Re.warning;Re.dark=(n,e)=>Xl(n,Mh("default",{theme:"dark",...e}));function Xb(n){Hb(n)}Re.dismiss=Xb;Re.clearWaitingQueue=Wb;Re.isActive=BT;Re.update=(n,e={})=>{let t=qb(n,e);if(t){let{props:i,content:o}=t,a={delay:100,...i,...e,toastId:e.toastId||n,updateId:UT()};a.toastId!==n&&(a.staleId=n);let c=a.render||o;delete a.render,Xl(c,a)}};Re.done=n=>{Re.update(n,{progress:1})};Re.onChange=Kb;Re.play=n=>zT(!0,n);Re.pause=n=>zT(!1,n);function Jb(n){var e;let{subscribe:t,getSnapshot:i,setProps:o}=q.useRef(Gb(n)).current;o(n);let a=(e=q.useSyncExternalStore(t,i,i))==null?void 0:e.slice();function c(d){if(!a)return[];let f=new Map;return n.newestOnTop&&a.reverse(),a.forEach(g=>{let{position:v}=g.props;f.has(v)||f.set(v,[]),f.get(v).push(g)}),Array.from(f,g=>d(g[0],g[1]))}return{getToastToRender:c,isToastActive:BT,count:a==null?void 0:a.length}}function Zb(n){let[e,t]=q.useState(!1),[i,o]=q.useState(!1),a=q.useRef(null),c=q.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:f,closeToast:g,onClick:v,closeOnClick:T}=n;$b({id:n.toastId,containerId:n.containerId,fn:t}),q.useEffect(()=>{if(n.pauseOnFocusLoss)return E(),()=>{S()}},[n.pauseOnFocusLoss]);function E(){document.hasFocus()||M(),window.addEventListener("focus",k),window.addEventListener("blur",M)}function S(){window.removeEventListener("focus",k),window.removeEventListener("blur",M)}function N(P){if(n.draggable===!0||n.draggable===P.pointerType){U();let A=a.current;c.canCloseOnClick=!0,c.canDrag=!0,A.style.transition="none",n.draggableDirection==="x"?(c.start=P.clientX,c.removalDistance=A.offsetWidth*(n.draggablePercent/100)):(c.start=P.clientY,c.removalDistance=A.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function V(P){let{top:A,bottom:R,left:b,right:O}=a.current.getBoundingClientRect();P.nativeEvent.type!=="touchend"&&n.pauseOnHover&&P.clientX>=b&&P.clientX<=O&&P.clientY>=A&&P.clientY<=R?M():k()}function k(){t(!0)}function M(){t(!1)}function U(){c.didMove=!1,document.addEventListener("pointermove",K),document.addEventListener("pointerup",se)}function H(){document.removeEventListener("pointermove",K),document.removeEventListener("pointerup",se)}function K(P){let A=a.current;if(c.canDrag&&A){c.didMove=!0,e&&M(),n.draggableDirection==="x"?c.delta=P.clientX-c.start:c.delta=P.clientY-c.start,c.start!==P.clientX&&(c.canCloseOnClick=!1);let R=n.draggableDirection==="x"?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;A.style.transform=`translate3d(${R},0)`,A.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function se(){H();let P=a.current;if(c.canDrag&&c.didMove&&P){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){o(!0),n.closeToast(!0),n.collapseAll();return}P.style.transition="transform 0.2s, opacity 0.2s",P.style.removeProperty("transform"),P.style.removeProperty("opacity")}}let oe={onPointerDown:N,onPointerUp:V};return d&&f&&(oe.onMouseEnter=M,n.stacked||(oe.onMouseLeave=k)),T&&(oe.onClick=P=>{v&&v(P),c.canCloseOnClick&&g(!0)}),{playToast:k,pauseToast:M,isRunning:e,preventExitTransition:i,toastRef:a,eventHandlers:oe}}var eD=typeof window<"u"?q.useLayoutEffect:q.useEffect,Fh=({theme:n,type:e,isLoading:t,...i})=>Ye.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...i});function tD(n){return Ye.createElement(Fh,{...n},Ye.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function nD(n){return Ye.createElement(Fh,{...n},Ye.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function rD(n){return Ye.createElement(Fh,{...n},Ye.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function iD(n){return Ye.createElement(Fh,{...n},Ye.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function sD(){return Ye.createElement("div",{className:"Toastify__spinner"})}var mp={info:nD,warning:tD,success:rD,error:iD,spinner:sD},oD=n=>n in mp;function aD({theme:n,type:e,isLoading:t,icon:i}){let o=null,a={theme:n,type:e};return i===!1||(ei(i)?o=i({...a,isLoading:t}):q.isValidElement(i)?o=q.cloneElement(i,a):t?o=mp.spinner():oD(e)&&(o=mp[e](a))),o}var lD=n=>{let{isRunning:e,preventExitTransition:t,toastRef:i,eventHandlers:o,playToast:a}=Zb(n),{closeButton:c,children:d,autoClose:f,onClick:g,type:v,hideProgressBar:T,closeToast:E,transition:S,position:N,className:V,style:k,progressClassName:M,updateId:U,role:H,progress:K,rtl:se,toastId:oe,deleteToast:P,isIn:A,isLoading:R,closeOnClick:b,theme:O,ariaLabel:F}=n,x=ks("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${v}`,{"Toastify__toast--rtl":se},{"Toastify__toast--close-on-click":b}),tt=ei(V)?V({rtl:se,position:N,type:v,defaultClassName:x}):ks(x,V),mt=aD(n),gt=!!K||!f,Me={closeToast:E,type:v,theme:O},re=null;return c===!1||(ei(c)?re=c(Me):q.isValidElement(c)?re=q.cloneElement(c,Me):re=Mb(Me)),Ye.createElement(S,{isIn:A,done:P,position:N,preventExitTransition:t,nodeRef:i,playToast:a},Ye.createElement("div",{id:oe,tabIndex:0,onClick:g,"data-in":A,className:tt,...o,style:k,ref:i,...A&&{role:H,"aria-label":F}},mt!=null&&Ye.createElement("div",{className:ks("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},mt),MT(d,n,!e),re,!n.customProgressBar&&Ye.createElement(Ub,{...U&&!gt?{key:`p-${U}`}:{},rtl:se,theme:O,delay:f,isRunning:e,isIn:A,closeToast:E,hide:T,type:v,className:M,controlledProgress:gt,progress:K||0})))},uD=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),cD=Vb(uD("bounce",!0)),hD={position:"top-right",transition:cD,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function dD(n){let e={...hD,...n},t=n.stacked,[i,o]=q.useState(!0),a=q.useRef(null),{getToastToRender:c,isToastActive:d,count:f}=Jb(e),{className:g,style:v,rtl:T,containerId:E,hotKeys:S}=e;function N(k){let M=ks("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":T});return ei(g)?g({position:k,rtl:T,defaultClassName:M}):ks(M,dp(g))}function V(){t&&(o(!0),Re.play())}return eD(()=>{var k;if(t){let M=a.current.querySelectorAll('[data-in="true"]'),U=12,H=(k=e.position)==null?void 0:k.includes("top"),K=0,se=0;Array.from(M).reverse().forEach((oe,P)=>{let A=oe;A.classList.add("Toastify__toast--stacked"),P>0&&(A.dataset.collapsed=`${i}`),A.dataset.pos||(A.dataset.pos=H?"top":"bot");let R=K*(i?.2:1)+(i?0:U*P);A.style.setProperty("--y",`${H?R:R*-1}px`),A.style.setProperty("--g",`${U}`),A.style.setProperty("--s",`${1-(i?se:0)}`),K+=A.offsetHeight,se+=.025})}},[i,f,t]),q.useEffect(()=>{function k(M){var U;let H=a.current;S(M)&&((U=H.querySelector('[tabIndex="0"]'))==null||U.focus(),o(!1),Re.pause()),M.key==="Escape"&&(document.activeElement===H||H!=null&&H.contains(document.activeElement))&&(o(!0),Re.play())}return document.addEventListener("keydown",k),()=>{document.removeEventListener("keydown",k)}},[S]),Ye.createElement("section",{ref:a,className:"Toastify",id:E,onMouseEnter:()=>{t&&(o(!1),Re.pause())},onMouseLeave:V,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},c((k,M)=>{let U=M.length?{...v}:{...v,pointerEvents:"none"};return Ye.createElement("div",{tabIndex:-1,className:N(k),"data-stacked":t,style:U,key:`c-${k}`},M.map(({content:H,props:K})=>Ye.createElement(lD,{...K,stacked:t,collapseAll:V,isIn:d(K.toastId,K.containerId),key:`t-${K.key}`},H)))}))}const fD={apiKey:"AIzaSyAJQBqFci-A6yZ4EybwUr8y7oVOQhZCzQc",authDomain:"husky-chat-6c913.firebaseapp.com",projectId:"husky-chat-6c913",storageBucket:"husky-chat-6c913.firebasestorage.app",messagingSenderId:"792771293924",appId:"1:792771293924:web:f7c0f67d38caf68382b2f1",measurementId:"G-Q4QM70C8FM"},vm=rw(fD);dx(vm);const Hs=xb(vm),Tt=bP(vm),pD=async(n,e,t)=>{try{const o=(await mN(Hs,e,t)).user;await ap(Nt(Tt,"users",o.uid),{id:o.uid,username:n.toLowerCase(),email:e,name:"",avatar:"",bio:"Go Huskies",lastSeen:Date.now()}),await ap(Nt(Tt,"chats",o.uid),{chatsData:[]})}catch(i){console.error("Firebase Error:",i),Re.error(i.code.split("/")[1].split("-").join(" "))}},mD=async(n,e)=>{try{await gN(Hs,n,e)}catch(t){console.error(t),Re.error(t.code.split("/")[1].split("-").join(" "))}},wv=async()=>{try{await vN(Hs)}catch(n){console.error(n),Re.error(n.code.split("/")[1].split("-").join(" "))}},gD=async n=>{if(!n)return Re.error("Enter correct email"),null;try{const e=Dc(Tt,"users"),t=IE(e,AE("email","==",n));await kE(t)?Re.error("Email not register"):(await pN(Hs,n),Re.success("Reset email sent"))}catch(e){console.log(e),Re.error(e.message)}},fa=q.createContext(),yD=n=>{const[e,t]=q.useState(null),[i,o]=q.useState(null),[a,c]=q.useState(null),[d,f]=q.useState([]),[g,v]=q.useState(null),[T,E]=q.useState(!1),S=Qo(),N=async k=>{try{const M=Nt(Tt,"users",k),H=(await Bi(M)).data();t(H),H.avatar&&H.name?S("/chat"):S("/profile"),await Zn(M,{lastSeen:Date.now()}),setInterval(async()=>{Hs.chatUser&&await Zn(M,{lastSeen:Date.now()})},6e4)}catch{}};q.useEffect(()=>{if(e){const k=Nt(Tt,"chats",e.id),M=PE(k,async U=>{const H=U.data().chatsData,K=[];for(const se of H){const oe=Nt(Tt,"users",se.rId),A=(await Bi(oe)).data();K.push({...se,userData:A})}o(K.sort((se,oe)=>oe.updatedAt-se.updatedAt))});return()=>{M()}}},[e]);const V={userData:e,setUserData:t,chatData:i,setChatData:o,loadUserData:N,messages:d,setMessages:f,messagesId:a,setMessagesId:c,chatUser:g,setChatUser:v,chatVisible:T,setChatVisible:E};return J.jsx(fa.Provider,{value:V,children:n.children})},_D=()=>{const n=Qo(),{userData:e,chatData:t,chatUser:i,setChatUser:o,setMessagesId:a,messageId:c,chatVisible:d,setChatVisible:f}=q.useContext(fa),[g,v]=q.useState(null),[T,E]=q.useState(!1),S=async k=>{try{const M=k.target.value;if(M){E(!0);const U=Dc(Tt,"users"),H=IE(U,AE("username","==",M.toLowerCase())),K=await kE(H);if(!K.empty&&K.docs[0].data().id!==e.id){let se=!1;t.map(oe=>{oe.rId===K.docs[0].data().id&&(se=!0)}),se||v(K.docs[0].data()),v(K.docs[0].data())}else v(null)}else E(!1)}catch(M){Re.error(M.message),console.log(M)}},N=async()=>{const k=Dc(Tt,"messages"),M=Dc(Tt,"chats");try{const U=Nt(k);await ap(U,{createAt:KP(),messages:[]}),await Zn(Nt(M,g.id),{chatsData:Jc({messageId:U.id,lastMessage:"",rId:e.id,updatedAt:Date.now(),messageSeen:!0})}),await Zn(Nt(M,e.id),{chatsData:Jc({messageId:U.id,lastMessage:"",rId:g.id,updatedAt:Date.now(),messageSeen:!0})});const K=(await Bi(Nt(Tt,"users",g.id))).data();V({messageId:U.id,lastMessage:"",rId:g.id,updatedAt:Date.now(),messageSeen:!0,userData:K}),E(!1),f(!0)}catch(U){Re.error(U.message),console.error(U)}},V=async k=>{a(k.messageId),o(k);const M=Nt(Tt,"chats",e.id),H=(await Bi(M)).data(),K=H.chatsData.findIndex(se=>se.messageId===k.messageId);H.chatsData[K].messageSeen=!0,await Zn(M,{chatsData:H.chatsData}),f(!0)};return q.useEffect(()=>{(async()=>{if(i){const M=Nt(Tt,"users",i.userData.id),H=(await Bi(M)).data();o(K=>({...K,userData:H}))}})()},[t]),J.jsxs("div",{className:` ls ${d?"hidden":""}`,children:[J.jsxs("div",{className:"ls-top",children:[J.jsxs("div",{className:"ls-nav",children:[J.jsx("img",{src:En.logo,alt:"",className:"logo"}),J.jsxs("div",{className:"menu",children:[J.jsx("img",{src:En.menu_icon,alt:""}),J.jsxs("div",{className:"sub-menu",children:[J.jsx("p",{onClick:()=>n("/profile"),children:"Edit Profile"}),J.jsx("hr",{}),J.jsx("p",{children:"Log Out"})]})]})]}),J.jsxs("div",{className:"ls-search",children:[J.jsx("img",{src:En.search_icon,alt:""}),J.jsx("input",{onChange:S,type:"text",placeholder:"Search here..."})]})]}),J.jsx("div",{className:"ls-list",children:T&&g?J.jsxs("div",{onClick:N,className:"friends add-user",children:[J.jsx("img",{src:g.avatar,alt:""}),J.jsx("p",{children:g.name})]}):t.map((k,M)=>J.jsxs("div",{onClick:()=>V(k),className:`friends ${k.messageSeen||k.messageId===c?"":"border"}`,children:[J.jsx("img",{src:k.userData.avatar,alt:""}),J.jsxs("div",{children:[J.jsx("p",{children:k.userData.name}),J.jsx("span",{children:k.lastMessage})]})]},M))})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="firebasestorage.googleapis.com",HT="storageBucket",vD=2*60*1e3,wD=10*60*1e3,ED=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Mn{constructor(e,t,i=0){super(Lf(e),`Firebase Storage: ${t} (${Lf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Je;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Je||(Je={}));function Lf(n){return"storage/"+n}function wm(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(Je.UNKNOWN,n)}function TD(n){return new ot(Je.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ID(n){return new ot(Je.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(Je.UNAUTHENTICATED,n)}function SD(){return new ot(Je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RD(n){return new ot(Je.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function WT(){return new ot(Je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $T(){return new ot(Je.CANCELED,"User canceled the upload/download.")}function CD(n){return new ot(Je.INVALID_URL,"Invalid URL '"+n+"'.")}function kD(n){return new ot(Je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function PD(){return new ot(Je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+HT+"' property when initializing the app?")}function GT(){return new ot(Je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xD(){return new ot(Je.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ND(){return new ot(Je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bD(n){return new ot(Je.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gp(n){return new ot(Je.INVALID_ARGUMENT,n)}function KT(){return new ot(Je.APP_DELETED,"The Firebase app was deleted.")}function DD(n){return new ot(Je.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sl(n,e){return new ot(Je.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function dl(n){throw new ot(Je.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=In.makeFromUrl(e,t)}catch{return new In(e,"")}if(i.path==="")return i;throw kD(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function a(K){K.path.charAt(K.path.length-1)==="/"&&(K.path_=K.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),f={bucket:1,path:3};function g(K){K.path_=decodeURIComponent(K.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",S=new RegExp(`^https?://${T}/${v}/b/${o}/o${E}`,"i"),N={bucket:1,path:3},V=t===qT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",M=new RegExp(`^https?://${V}/${o}/${k}`,"i"),H=[{regex:d,indices:f,postModify:a},{regex:S,indices:N,postModify:g},{regex:M,indices:{bucket:1,path:2},postModify:g}];for(let K=0;K<H.length;K++){const se=H[K],oe=se.regex.exec(e);if(oe){const P=oe[se.indices.bucket];let A=oe[se.indices.path];A||(A=""),i=new In(P,A),se.postModify(i);break}}if(i==null)throw CD(e);return i}}class OD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n,e,t){let i=1,o=null,a=null,c=!1,d=0;function f(){return d===2}let g=!1;function v(...k){g||(g=!0,e.apply(null,k))}function T(k){o=setTimeout(()=>{o=null,n(S,f())},k)}function E(){a&&clearTimeout(a)}function S(k,...M){if(g){E();return}if(k){E(),v.call(null,k,...M);return}if(f()||c){E(),v.call(null,k,...M);return}i<64&&(i*=2);let H;d===1?(d=2,H=0):H=(i+Math.random())*1e3,T(H)}let N=!1;function V(k){N||(N=!0,E(),!g&&(o!==null?(k||(d=2),clearTimeout(o),T(0)):k||(d=1)))}return T(0),a=setTimeout(()=>{c=!0,V(!0)},t),V}function VD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(n){return n!==void 0}function UD(n){return typeof n=="function"}function FD(n){return typeof n=="object"&&!Array.isArray(n)}function Bh(n){return typeof n=="string"||n instanceof String}function Ev(n){return Em()&&n instanceof Blob}function Em(){return typeof Blob<"u"}function Tv(n,e,t,i){if(i<e)throw gp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw gp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function QT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ps;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,t,i,o,a,c,d,f,g,v,T,E=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=f,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=T,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Ic(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=d=>{const f=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,g)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const d=a.getErrorCode()===Ps.NO_ERROR,f=a.getStatus();if(!d||YT(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Ps.ABORT;i(!1,new Ic(!1,null,v));return}const g=this.successCodes_.indexOf(f)!==-1;i(!0,new Ic(g,a))})},t=(i,o)=>{const a=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());MD(f)?a(f):a()}catch(f){c(f)}else if(d!==null){const f=wm();f.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,f)):c(f)}else if(o.canceled){const f=this.appDelete_?KT():$T();c(f)}else{const f=WT();c(f)}};this.canceled_?t(!1,new Ic(!1,null,!0)):this.backoffId_=LD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ic{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function jD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function zD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function HD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function WD(n,e,t,i,o,a,c=!0){const d=QT(n.urlParams),f=n.url+d,g=Object.assign({},n.headers);return qD(g,e),jD(g,t),zD(g,a),HD(g,i),new BD(f,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GD(...n){const e=$D();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Em())return new Blob(n);throw new ot(Je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(n){if(typeof atob>"u")throw bD("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vf{constructor(e,t){this.data=e,this.contentType=t||null}}function YD(n,e){switch(n){case gr.RAW:return new Vf(XT(e));case gr.BASE64:case gr.BASE64URL:return new Vf(JT(n,e));case gr.DATA_URL:return new Vf(JD(e),ZD(e))}throw wm()}function XT(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,c=n.charCodeAt(++t);i=65536|(a&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function XD(n){let e;try{e=decodeURIComponent(n)}catch{throw Sl(gr.DATA_URL,"Malformed data URL.")}return XT(e)}function JT(n,e){switch(n){case gr.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw Sl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case gr.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw Sl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=QD(e)}catch(o){throw o.message.includes("polyfill")?o:Sl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class ZT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Sl(gr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=eO(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function JD(n){const e=new ZT(n);return e.base64?JT(gr.BASE64,e.rest):XD(e.rest)}function ZD(n){return new ZT(n).contentType}function eO(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){let i=0,o="";Ev(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ev(this.data_)){const i=this.data_,o=KD(i,e,t);return o===null?null:new Oi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Oi(i,!0)}}static getBlob(...e){if(Em()){const t=e.map(i=>i instanceof Oi?i.data_:i);return new Oi(GD.apply(null,t))}else{const t=e.map(c=>Bh(c)?YD(gr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let a=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[a++]=c[d]}),new Oi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){let e;try{e=JSON.parse(n)}catch{return null}return FD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function nO(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function tI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(n,e){return e}class Jt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||rO}}let Ac=null;function iO(n){return!Bh(n)||n.length<2?n:tI(n)}function nI(){if(Ac)return Ac;const n=[];n.push(new Jt("bucket")),n.push(new Jt("generation")),n.push(new Jt("metageneration")),n.push(new Jt("name","fullPath",!0));function e(a,c){return iO(c)}const t=new Jt("name");t.xform=e,n.push(t);function i(a,c){return c!==void 0?Number(c):c}const o=new Jt("size");return o.xform=i,n.push(o),n.push(new Jt("timeCreated")),n.push(new Jt("updated")),n.push(new Jt("md5Hash",null,!0)),n.push(new Jt("cacheControl",null,!0)),n.push(new Jt("contentDisposition",null,!0)),n.push(new Jt("contentEncoding",null,!0)),n.push(new Jt("contentLanguage",null,!0)),n.push(new Jt("contentType",null,!0)),n.push(new Jt("metadata","customMetadata",!0)),Ac=n,Ac}function sO(n,e){function t(){const i=n.bucket,o=n.fullPath,a=new In(i,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function oO(n,e,t){const i={};i.type="file";const o=t.length;for(let a=0;a<o;a++){const c=t[a];i[c.local]=c.xform(i,e[c.server])}return sO(i,n),i}function rI(n,e,t){const i=eI(e);return i===null?null:oO(n,i,t)}function aO(n,e,t,i){const o=eI(e);if(o===null||!Bh(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(g=>{const v=n.bucket,T=n.fullPath,E="/b/"+c(v)+"/o/"+c(T),S=Jl(E,t,i),N=QT({alt:"media",token:g});return S+N})[0]}function iI(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class pa{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){if(!n)throw wm()}function Tm(n,e){function t(i,o){const a=rI(n,o,e);return Qr(a!==null),a}return t}function lO(n,e){function t(i,o){const a=rI(n,o,e);return Qr(a!==null),aO(a,o,n.host,n._protocol)}return t}function Zl(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=SD():o=AD():t.getStatus()===402?o=ID(n.bucket):t.getStatus()===403?o=RD(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function sI(n){const e=Zl(n);function t(i,o){let a=e(i,o);return i.getStatus()===404&&(a=TD(n.path)),a.serverResponse=o.serverResponse,a}return t}function uO(n,e,t){const i=e.fullServerUrl(),o=Jl(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,d=new pa(o,a,Tm(n,t),c);return d.errorHandler=sI(e),d}function cO(n,e,t){const i=e.fullServerUrl(),o=Jl(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,d=new pa(o,a,lO(n,t),c);return d.errorHandler=sI(e),d}function hO(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function oI(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=hO(null,e)),i}function dO(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let H="";for(let K=0;K<2;K++)H=H+Math.random().toString().slice(2);return H}const f=d();c["Content-Type"]="multipart/related; boundary="+f;const g=oI(e,i,o),v=iI(g,t),T="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+g.contentType+`\r
\r
`,E=`\r
--`+f+"--",S=Oi.getBlob(T,i,E);if(S===null)throw GT();const N={name:g.fullPath},V=Jl(a,n.host,n._protocol),k="POST",M=n.maxUploadRetryTime,U=new pa(V,k,Tm(n,t),M);return U.urlParams=N,U.headers=c,U.body=S.uploadData(),U.errorHandler=Zl(e),U}class ah{constructor(e,t,i,o){this.current=e,this.total=t,this.finalized=!!i,this.metadata=o||null}}function Im(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Qr(!1)}return Qr(!!t&&(e||["active"]).indexOf(t)!==-1),t}function fO(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),c=oI(e,i,o),d={name:c.fullPath},f=Jl(a,n.host,n._protocol),g="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":c.contentType,"Content-Type":"application/json; charset=utf-8"},T=iI(c,t),E=n.maxUploadRetryTime;function S(V){Im(V);let k;try{k=V.getResponseHeader("X-Goog-Upload-URL")}catch{Qr(!1)}return Qr(Bh(k)),k}const N=new pa(f,g,S,E);return N.urlParams=d,N.headers=v,N.body=T,N.errorHandler=Zl(e),N}function pO(n,e,t,i){const o={"X-Goog-Upload-Command":"query"};function a(g){const v=Im(g,["active","final"]);let T=null;try{T=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Qr(!1)}T||Qr(!1);const E=Number(T);return Qr(!isNaN(E)),new ah(E,i.size(),v==="final")}const c="POST",d=n.maxUploadRetryTime,f=new pa(t,c,a,d);return f.headers=o,f.errorHandler=Zl(e),f}const Iv=256*1024;function mO(n,e,t,i,o,a,c,d){const f=new ah(0,0);if(c?(f.current=c.current,f.total=c.total):(f.current=0,f.total=i.size()),i.size()!==f.total)throw xD();const g=f.total-f.current;let v=g;o>0&&(v=Math.min(v,o));const T=f.current,E=T+v;let S="";v===0?S="finalize":g===v?S="upload, finalize":S="upload";const N={"X-Goog-Upload-Command":S,"X-Goog-Upload-Offset":`${f.current}`},V=i.slice(T,E);if(V===null)throw GT();function k(K,se){const oe=Im(K,["active","final"]),P=f.current+v,A=i.size();let R;return oe==="final"?R=Tm(e,a)(K,se):R=null,new ah(P,A,oe==="final",R)}const M="POST",U=e.maxUploadRetryTime,H=new pa(t,M,k,U);return H.headers=N,H.body=V.uploadData(),H.progressCallback=d||null,H.errorHandler=Zl(n),H}const cn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Mf(n){switch(n){case"running":case"pausing":case"canceling":return cn.RUNNING;case"paused":return cn.PAUSED;case"success":return cn.SUCCESS;case"canceled":return cn.CANCELED;case"error":return cn.ERROR;default:return cn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t,i){if(UD(e)||t!=null||i!=null)this.next=e,this.error=t??void 0,this.complete=i??void 0;else{const a=e;this.next=a.next,this.error=a.error,this.complete=a.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class yO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw dl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw dl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw dl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw dl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw dl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _O extends yO{initXhr(){this.xhr_.responseType="text"}}function qo(){return new _O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=i,this._mappings=nI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(Je.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const a=this.isExponentialBackoffExpired();if(YT(o.status,[]))if(a)o=WT();else{this.sleepTime=Math.max(this.sleepTime*2,ED),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(Je.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,a)=>{this._resolve=o,this._reject=a,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,i])=>{switch(this._state){case"running":e(t,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const i=fO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(i,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._uploadUrl=a,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,i)=>{const o=pO(this._ref.storage,this._ref._location,e,this._blob),a=this._ref.storage._makeRequest(o,qo,t,i);this._request=a,a.getPromise().then(c=>{c=c,this._request=void 0,this._updateProgress(c.current),this._needToFetchStatus=!1,c.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Iv*this._chunkMultiplier,t=new ah(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((o,a)=>{let c;try{c=mO(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(f){this._error=f,this._transition("error");return}const d=this._ref.storage._makeRequest(c,qo,o,a,!1);this._request=d,d.getPromise().then(f=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(f.current),f.finalized?(this._metadata=f.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Iv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const i=uO(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(i,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const i=dO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(i,qo,e,t);this._request=o,o.getPromise().then(a=>{this._request=void 0,this._metadata=a,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=$T(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Mf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,i,o){const a=new gO(t||void 0,i||void 0,o||void 0);return this._addObserver(a),()=>{this._removeObserver(a)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Mf(this._state)){case cn.SUCCESS:Uo(this._resolve.bind(null,this.snapshot))();break;case cn.CANCELED:case cn.ERROR:const t=this._reject;Uo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Mf(this._state)){case cn.RUNNING:case cn.PAUSED:e.next&&Uo(e.next.bind(e,this.snapshot))();break;case cn.SUCCESS:e.complete&&Uo(e.complete.bind(e))();break;case cn.CANCELED:case cn.ERROR:e.error&&Uo(e.error.bind(e,this._error))();break;default:e.error&&Uo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,t){this._service=e,t instanceof In?this._location=t:this._location=In.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ms(e,t)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tI(this._location.path)}get storage(){return this._service}get parent(){const e=tO(this._location.path);if(e===null)return null;const t=new In(this._location.bucket,e);return new Ms(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw DD(e)}}function wO(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new vO(n,new Oi(e),t)}function EO(n){n._throwIfRoot("getDownloadURL");const e=cO(n.storage,n._location,nI());return n.storage.makeRequestWithTokens(e,qo).then(t=>{if(t===null)throw ND();return t})}function TO(n,e){const t=nO(n._location.path,e),i=new In(n._location.bucket,t);return new Ms(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(n){return/^[A-Za-z]+:\/\//.test(n)}function AO(n,e){return new Ms(n,e)}function aI(n,e){if(n instanceof Am){const t=n;if(t._bucket==null)throw PD();const i=new Ms(t,t._bucket);return e!=null?aI(i,e):i}else return e!==void 0?TO(n,e):n}function SO(n,e){if(e&&IO(e)){if(n instanceof Am)return AO(n,e);throw gp("To use ref(service, url), the first argument must be a Storage instance.")}else return aI(n,e)}function Av(n,e){const t=e==null?void 0:e[HT];return t==null?null:In.makeFromBucketSpec(t,n)}function RO(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Yv(o,n.app.options.projectId))}class Am{constructor(e,t,i,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=qT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vD,this._maxUploadRetryTime=wD,this._requests=new Set,o!=null?this._bucket=In.makeFromBucketSpec(o,this._host):this._bucket=Av(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=Av(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,t,i,o,a=!0){if(this._deleted)return new OD(KT());{const c=WD(e,this._appId,i,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Sv="@firebase/storage",Rv="0.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="storage";function CO(n,e,t){return n=Xe(n),wO(n,e,t)}function kO(n){return n=Xe(n),EO(n)}function PO(n,e){return n=Xe(n),SO(n,e)}function xO(n=dh(),e){n=Xe(n);const i=Gi(n,lI).getImmediate({identifier:e}),o=Gv("storage");return o&&NO(i,...o),i}function NO(n,e,t,i={}){RO(n,e,t,i)}function bO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Am(t,i,o,e,Bs)}function DO(){er(new Vn(lI,bO,"PUBLIC").setMultipleInstances(!0)),dn(Sv,Rv,""),dn(Sv,Rv,"esm2017")}DO();const uI=async n=>{const e=xO(),t={contentType:"image/jpeg"},i=PO(e,`images/${Date.now()+n.name}`),o=CO(i,n,t);return new Promise((a,c)=>{o.on("state_changed",d=>{const f=d.bytesTransferred/d.totalBytes*100;switch(console.log("Upload is "+f+"% done"),d.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},d=>{switch(d.code){}},()=>{kO(o.snapshot.ref).then(d=>{a(d)})})})},OO=()=>{const{userData:n,messagesId:e,chatUser:t,messages:i,setMessages:o,chatVisible:a,setChatVisible:c}=q.useContext(fa),[d,f]=q.useState(""),g=async()=>{try{d&&e&&(await Zn(Nt(Tt,"messages",e),{messages:Jc({sId:n.id,text:d,createdAt:new Date})}),[t.rId,n.id].forEach(async S=>{const N=Nt(Tt,"chats",S),V=await Bi(N);if(V.exists()){const k=V.data(),M=k.chatsData.findIndex(U=>U.messageId===e);k.chatsData[M].lastMessage=d.slice(0,30),k.chatsData[M].updatedAt=Date.now(),k.chatsData[M].rId===n.id&&(k.chatsData[M].messageSeen=!1),await Zn(N,{chatsData:k.chatsData})}}))}catch(E){Re.error(E.message)}f("")},v=async E=>{try{const S=await uI(E.target.files[0]);S&&e&&(await Zn(Nt(Tt,"messages",e),{messages:Jc({sId:n.id,image:S,createdAt:new Date})}),[t.rId,n.id].forEach(async V=>{const k=Nt(Tt,"chats",V),M=await Bi(k);if(M.exists()){const U=M.data(),H=U.chatsData.findIndex(K=>K.messageId===e);U.chatsData[H].lastMessage="Image",U.chatsData[H].updatedAt=Date.now(),U.chatsData[H].rId===n.id&&(U.chatsData[H].messageSeen=!1),await Zn(k,{chatsData:U.chatsData})}}))}catch(S){Re.error(S.message)}},T=E=>{let S=E.toDate();const N=S.getHours(),V=S.getMinutes();return N>12?N-12+":"+V+" pm":N+":"+V+" am"};return q.useEffect(()=>{if(e){const E=PE(Nt(Tt,"messages",e),S=>{o(S.data().messages.reverse())});return()=>{E()}}},[e]),t?J.jsxs("div",{className:`chat-box ${a?"":"hidden"}`,children:[J.jsxs("div",{className:"chat-user",children:[J.jsx("img",{src:t.userData.avatar,alt:""}),J.jsxs("p",{children:[t.userData.name," ",Date.now-t.userData.lastMessage<=7e4?J.jsx("img",{className:"dot",src:En.green_dot,alt:""}):null]}),J.jsx("img",{src:En.help_icon,alt:"",className:"help"}),J.jsx("img",{onClick:()=>c(!1),src:En.arrow_icon,className:"arrow",alt:""})]}),J.jsx("div",{className:"chat-msg",children:i.map((E,S)=>J.jsxs("div",{className:E.sId===n.id?"s-msg":"r-msg",children:[E.image?J.jsx("img",{className:"msg-img",src:E.image,alt:""}):J.jsx("p",{className:"msg",children:E.text}),J.jsxs("div",{children:[J.jsx("img",{src:E.sId===n.id?n.avatar:t.userData.avatar,alt:""}),J.jsx("p",{children:T(E.createdAt)})]})]},S))}),J.jsxs("div",{className:"chat-input",children:[J.jsx("input",{onChange:E=>f(E.target.value),value:d,type:"text",placeholder:"Send a message"}),J.jsx("input",{onChange:v,type:"file",id:"image",accept:"image/png, image/jpeg",hidden:!0}),J.jsx("label",{htmlFor:"image",children:J.jsx("img",{src:En.gallery_icon,alt:""})}),J.jsx("img",{onClick:g,src:En.send_button,alt:""})]})]}):J.jsxs("div",{className:`chat-welcome ${a?"":"hidden"}`,children:[J.jsx("img",{src:En.logo_icon,alt:""}),J.jsx("p",{children:"Chat anytime anywhere"})]})},LO=()=>{const{chatUser:n,messages:e}=q.useContext(fa),[t,i]=q.useState([]);return q.useEffect(()=>{let o=[];e.map(a=>{a.image&&o.push(a.image)}),i(o)},[e]),n?J.jsxs("div",{className:"rs",children:[J.jsxs("div",{className:"rs-profile",children:[J.jsx("img",{src:n.userData.avatar,alt:""}),J.jsxs("h3",{children:[" ",Date.now-n.userData.lastSeen<=7e4?J.jsx("img",{src:En.green_dot,className:"dot",alt:""}):null,n.userData.name," "]}),J.jsx("p",{children:n.userData.bio})]}),J.jsx("hr",{}),J.jsxs("div",{className:"rs-media",children:[J.jsx("p",{children:"Media"}),J.jsx("div",{children:t.map((o,a)=>J.jsx("img",{onClick:()=>window.open(o),src:o,alt:""},a))})]}),J.jsx("button",{onClick:()=>wv(),children:"Logout"})]}):J.jsx("div",{className:"rs",children:J.jsx("button",{onClick:()=>wv(),children:"Logout"})})},VO=()=>{const{chatData:n,userData:e}=q.useContext(fa),[t,i]=q.useState(!0);return q.useEffect(()=>{n&&e&&i(!1)},[n,e]),J.jsx("div",{className:"chat",children:t?J.jsx("p",{className:"loading",children:"Loading..."}):J.jsxs("div",{className:"chat-container",children:[J.jsx(_D,{}),J.jsx(OO,{}),J.jsx(LO,{})]})})},MO=()=>{const[n,e]=q.useState(!1),[t,i]=q.useState(""),[o,a]=q.useState(""),[c,d]=q.useState(""),[f,g]=q.useState(""),v=Qo(),T=async E=>{E.preventDefault();try{!f&&!n&&Re.error("Upload Profile Picture");const S=Nt(Tt,"users",c);if(n){const N=await uI(n);g(N),await Zn(S,{avatar:N,bio:o,name:t})}else await Zn(S,{bio:o,name:t});v("/chat")}catch{}};return q.useEffect(()=>{ST(Hs,async E=>{if(E){d(E.uid);const S=Nt(Tt,"users",E.uid),N=await Bi(S);N.data().name&&i(N.data().name),N.data().bio&&a(N.data().bio),N.data().avatar&&g(N.data().avatar)}else Qo()})},[]),J.jsx("div",{className:"profile",children:J.jsxs("div",{className:"profile-container",children:[J.jsxs("form",{onSubmit:T,children:[J.jsx("h3",{children:"Profile Details"}),J.jsxs("label",{htmlFor:"avatar",children:[J.jsx("input",{onChange:E=>e(E.target.files[0]),type:"file",id:"avatar",accept:".png, .jpg, .jpeg",hidden:!0}),J.jsx("img",{src:n?URL.createObjectURL(n):En.avatar_icon,alt:""}),"Upload Profile Image"]}),J.jsx("input",{onChange:E=>i(E.target.value),value:t,type:"text",placeholder:"Your Name",required:!0}),J.jsx("textarea",{onChange:E=>a(E.target.value),value:o,placeholder:"Your Profile Bio",required:!0}),J.jsx("button",{type:"submit",children:"Save"})]}),J.jsx("img",{className:"profile-pic",src:n?URL.createObjectURL(n):f||En.logo_icon,alt:""})]})})},UO=()=>{const[n,e]=q.useState("Sign Up"),[t,i]=q.useState(""),[o,a]=q.useState(""),[c,d]=q.useState(""),f=g=>{g.preventDefault(),n==="Sign Up"?pD(t,o,c):mD(o,c)};return J.jsxs("div",{className:"login",children:[J.jsx("img",{src:En.logo_big3,alt:"",className:"logo"}),J.jsxs("form",{onSubmit:f,className:"login-form",children:[J.jsx("h2",{children:n}),n==="Sign Up"?J.jsx("input",{onChange:g=>i(g.target.value),value:t,type:"text",placeholder:"username: husky123",className:"form-input",required:!0}):null,J.jsx("input",{onChange:g=>a(g.target.value),value:o,type:"email",placeholder:"email: siberian@husky.com",className:"form-input",required:!0}),J.jsx("input",{onChange:g=>d(g.target.value),value:c,type:"password",placeholder:"password",className:"form-input",required:!0}),J.jsx("button",{type:"submit",children:n==="Sign Up"?"Create Account":"Login Now"}),n==="Sign Up"?J.jsxs("div",{className:"login-term",children:[J.jsx("input",{type:"checkbox"}),J.jsx("p",{children:"Agree to the terms of use & privacy policy."})]}):null,J.jsxs("div",{className:"login-forgot",children:[n==="Sign Up"?J.jsxs("p",{className:"login-toggle",children:["Already have an account?",J.jsx("span",{onClick:()=>e("Login"),children:"Login here"})]}):J.jsxs("p",{className:"login-toggle",children:["Create an Account",J.jsx("span",{onClick:()=>e("Sign Up"),children:"Sign Up Now"})]}),n==="Login"?J.jsxs("p",{className:"login-toggle",children:["Forgot Password?",J.jsx("span",{onClick:()=>gD(o),children:"reset here"})]}):null]})]})]})},FO=()=>{const n=Qo(),{loadUserData:e}=q.useContext(fa);return q.useEffect(()=>{ST(Hs,async t=>{t?(n("/chat"),await e(t.uid)):n("/")})},[]),J.jsxs(J.Fragment,{children:[J.jsx(dD,{}),J.jsxs(s0,{children:[J.jsx(Sc,{path:"/",element:J.jsx(UO,{})}),J.jsx(Sc,{path:"/chat",element:J.jsx(VO,{})}),J.jsx(Sc,{path:"/profile",element:J.jsx(MO,{})})]})]})};H0.createRoot(document.getElementById("root")).render(J.jsx(P0,{children:J.jsx(yD,{children:J.jsx(FO,{})})}));
