import{S as A,D as Z,F as $,G as b,H as G,v as w,U as v,I as S,l as _,J as K,K as H,L as V,M as z,N as J,O as Q,P as q,Q as W,R as B,T as D,V as X,W as k,X as F,Y as ee,Z as re,_ as ne,u as C,n as U,$ as te,a0 as ie,a1 as ue,a2 as se,s as fe,i as L,g as ae}from"./runtime.DpzR_taH.js";function O(e,r=null,u){if(typeof e!="object"||e===null||A in e)return e;const a=V(e);if(a!==Z&&a!==$)return e;var s=new Map,p=z(e),x=b(0);p&&s.set("length",b(e.length));var h;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&G();var i=s.get(n);return i===void 0?(i=b(t.value),s.set(n,i)):w(i,O(t.value,h)),!0},deleteProperty(l,n){var t=s.get(n);if(t===void 0)n in l&&s.set(n,b(v));else{if(p&&typeof n=="string"){var i=s.get("length"),f=Number(n);Number.isInteger(f)&&f<i.v&&w(i,f)}w(t,v),Y(x)}return!0},get(l,n,t){var d;if(n===A)return e;var i=s.get(n),f=n in l;if(i===void 0&&(!f||(d=S(l,n))!=null&&d.writable)&&(i=b(O(f?l[n]:v,h)),s.set(n,i)),i!==void 0){var o=_(i);return o===v?void 0:o}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var i=s.get(n);i&&(t.value=_(i))}else if(t===void 0){var f=s.get(n),o=f==null?void 0:f.v;if(f!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return t},has(l,n){var o;if(n===A)return!0;var t=s.get(n),i=t!==void 0&&t.v!==v||Reflect.has(l,n);if(t!==void 0||K!==null&&(!i||(o=S(l,n))!=null&&o.writable)){t===void 0&&(t=b(i?O(l[n],h):v),s.set(n,t));var f=_(t);if(f===v)return!1}return i},set(l,n,t,i){var I;var f=s.get(n),o=n in l;if(p&&n==="length")for(var d=t;d<f.v;d+=1){var y=s.get(d+"");y!==void 0?w(y,v):d in l&&(y=b(v),s.set(d+"",y))}f===void 0?(!o||(I=S(l,n))!=null&&I.writable)&&(f=b(void 0),w(f,O(t,h)),s.set(n,f)):(o=f.v!==v,w(f,O(t,h)));var P=Reflect.getOwnPropertyDescriptor(l,n);if(P!=null&&P.set&&P.set.call(i,t),!o){if(p&&typeof n=="string"){var m=s.get("length"),g=Number(n);Number.isInteger(g)&&g>=m.v&&w(m,g+1)}Y(x)}return!0},ownKeys(l){_(x);var n=Reflect.ownKeys(l).filter(f=>{var o=s.get(f);return o===void 0||o.v!==v});for(var[t,i]of s)i.v!==v&&!(t in l)&&n.push(t);return n},setPrototypeOf(){H()}})}function Y(e,r=1){w(e,e.v+r)}function le(e){throw new Error("lifecycle_outside_component")}const oe={get(e,r){if(!e.exclude.includes(r))return _(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=de({get[r](){return e.props[r]}},r,q)),e.special[r](u),B(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),B(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function pe(e,r){return new Proxy({props:e,exclude:r,special:{},version:b(0)},oe)}const ce={get(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const s=S(a,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){for(let u of e.props)if(D(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){D(u)&&(u=u());for(const a in u)r.includes(a)||r.push(a)}return r}};function be(...e){return new Proxy({props:e},ce)}function j(e){for(var r=K,u=K;r!==null&&!(r.f&(X|k));)r=r.parent;try{return F(r),e()}finally{F(u)}}function de(e,r,u,a){var M;var s=(u&ee)!==0,p=(u&re)!==0,x=(u&ne)!==0,h=(u&se)!==0,l=e[r],n=(M=S(e,r))==null?void 0:M.set,t=a,i=!0,f=!1,o=()=>(f=!0,i&&(i=!1,h?t=C(a):t=a),t);l===void 0&&a!==void 0&&(n&&p&&J(),l=o(),n&&n(l));var d;if(p)d=()=>{var c=e[r];return c===void 0?o():(i=!0,f=!1,c)};else{var y=j(()=>(s?U:te)(()=>e[r]));y.f|=Q,d=()=>{var c=_(y);return c!==void 0&&(t=void 0),c===void 0?t:c}}if(!(u&q))return d;if(n){var P=e.$$legacy;return function(c,R){return arguments.length>0?((!p||!R||P)&&n(R?d():c),c):d()}}var m=!1,g=!1,I=fe(l),E=j(()=>U(()=>{var c=d(),R=_(I),N=ie;return m||c===void 0&&N.f&ue?(m=!1,g=!0,R):(g=!1,I.v=c)}));return s||(E.equals=W),function(c,R){var N=_(E);if(arguments.length>0){const T=R?_(E):p&&x?O(c):c;return E.equals(T)||(m=!0,w(I,T),f&&t!==void 0&&(t=T),_(E)),c}return N}}function we(e){L===null&&le(),L.l!==null?ve(L).m.push(e):ae(()=>{const r=C(e);if(typeof r=="function")return r})}function ve(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{O as a,pe as l,we as o,de as p,be as s};