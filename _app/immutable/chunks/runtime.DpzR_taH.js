var Sn=Array.isArray,Dn=Array.from,In=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Rn=Object.prototype,gn=Array.prototype,Vt=Object.getPrototypeOf;function On(t){return typeof t=="function"}const xn=()=>{};function Nn(t){return t()}function Gt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,it=4,M=8,Q=16,y=32,$=64,g=128,B=256,p=512,D=1024,L=2048,C=4096,H=8192,Kt=16384,ft=32768,kn=65536,$t=1<<18,_t=1<<19,at=Symbol("$state"),Cn=Symbol("");function ct(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function vt(t){return!Zt(t,this.v)}function zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function Xt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function bn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function qn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:ct,version:0}}function Mn(t){return pt(tt(t))}function nn(t,n=!1){var e;const r=tt(t);return n||(r.equals=vt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ln(t,n=!1){return pt(nn(t,n))}function pt(t){return l!==null&&l.f&T&&(E===null?hn([t]):E.push(t)),t}function Hn(t,n){return ht(t,An(()=>Bt(t))),n}function ht(t,n){return l!==null&&et()&&l.f&(T|Q)&&(E===null||!E.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),dt(t,D),et()&&u!==null&&u.f&p&&!(u.f&y)&&(c!==null&&c.includes(t)?(w(u,D),z(u)):S===null?dn([t]):S.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;i&D||!e&&o===u||(w(o,n),i&(p|g)&&(i&T?dt(o,L):z(o)))}}const Yn=1,jn=2,Bn=4,Un=8,Vn=16,Gn=1,Kn=2,$n=4,Zn=8,zn=16,Wn=1,Xn=2,en="[",sn="[!",an="]",Et={},Jn=Symbol(),Qn="http://www.w3.org/2000/svg";function yt(t){console.warn("hydration_mismatch")}let R=!1;function tr(t){R=t}let d;function U(t){if(t===null)throw yt(),Et;return d=t}function nr(){return U(O(d))}function rr(t){if(R){if(O(d)!==null)throw yt(),Et;d=t}}function er(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function sr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var ot,wt,Tt;function ar(){if(ot===void 0){ot=window;var t=Element.prototype,n=Node.prototype;wt=st(n,"firstChild").get,Tt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function At(t=""){return document.createTextNode(t)}function W(t){return wt.call(t)}function O(t){return Tt.call(t)}function or(t){if(!R)return W(t);var n=W(d);return n===null&&(n=d.appendChild(At())),U(n),n}function ur(t,n){if(!R){var r=W(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function lr(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=At();return e==null||e.before(a),U(a),a}return U(e),e}function ir(t){t.textContent=""}function on(t){var n=T|D;u===null?n|=g:u.f|=_t;const r={children:null,deps:null,equals:ct,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(l!==null&&l.f&T){var e=l;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=on(t);return n.equals=vt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?nt(e):b(e)}}}function St(t){var n,r=u;K(t.parent);try{mt(t),n=Mt(t)}finally{K(r)}return n}function Dt(t){var n=St(t),r=(x||t.f&g)&&t.deps!==null?L:p;w(t,r),t.equals(n)||(t.v=n,t.version=qt())}function nt(t){mt(t),q(t,0),w(t,H),t.v=t.children=t.deps=t.reactions=null}function It(t){u===null&&l===null&&Xt(),l!==null&&l.f&g&&Wt(),rt&&zt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&$)!==0,a=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{ut(!0),Z(o),o.f|=Kt}catch(v){throw b(o),v}finally{ut(i)}}else n!==null&&z(o);var A=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&_t)===0;if(!A&&!s&&e&&(a!==null&&un(o,a),l!==null&&l.f&T)){var _=l;(_.children??(_.children=[])).push(o)}return o}function _r(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function cr(t){It();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:l})}else{var e=Rt(t);return e}}function vr(t){return It(),ln(t)}function pr(t){const n=P($,t,!0);return()=>{b(n)}}function Rt(t){return P(it,t,!1)}function ln(t){return P(M,t,!0)}function hr(t){return fn(t)}function fn(t,n=0){return P(M|Q|n,t,!0)}function dr(t,n=!0){return P(M|y,t,!0,n)}function gt(t){var n=t.teardown;if(n!==null){const r=rt,e=l;lt(!0),G(null);try{n.call(null)}finally{lt(r),G(e)}}}function Ot(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)nt(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}Ot(t),xt(t,n&&!r),q(t,0),w(t,H);var o=t.transitions;if(o!==null)for(const A of o)A.stop();gt(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Er(t,n){var r=[];kt(t,r,!0),cn(r,()=>{b(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function kt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ft)!==0||(e.f&y)!==0;kt(e,n,a?r:!1),e=s}}}function yr(t){Ct(t,!0)}function Ct(t,n){if(t.f&C){t.f^=C,Y(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ft)!==0||(r.f&y)!==0;Ct(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,X=[];function Pt(){V=!1;const t=X.slice();X=[],Gt(t)}function wr(t){V||(V=!0,queueMicrotask(Pt)),X.push(t)}function vn(){V&&Pt()}const bt=0,pn=1;let j=bt,F=!1,N=!1,rt=!1;function ut(t){N=t}function lt(t){rt=t}let I=[],k=0;let l=null;function G(t){l=t}let u=null;function K(t){u=t}let E=null;function hn(t){E=t}let c=null,h=0,S=null;function dn(t){S=t}let Ft=0,x=!1,f=null;function qt(){return++Ft}function et(){return f!==null&&f.l===null}function Y(t){var o,i;var n=t.f;if(n&D)return!0;if(n&L){var r=t.deps,e=(n&g)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&Dt(a),e&&u!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Mt(t){var m;var n=c,r=h,e=S,s=l,a=x,o=E,i=t.f;c=null,h=0,S=null,l=i&(y|$)?null:t,x=!N&&(i&g)!==0,E=null;try{var A=(0,t.fn)(),_=t.deps;if(c!==null){var v;if(q(t,h),_!==null&&h>0)for(_.length=h+c.length,v=0;v<c.length;v++)_[h+v]=c[v];else t.deps=_=c;if(!x)for(v=h;v<_.length;v++)((m=_[v]).reactions??(m.reactions=[])).push(t)}else _!==null&&h<_.length&&(q(t,h),_.length=h);return A}finally{c=n,h=r,S=e,l=s,x=a,E=o}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(c===null||!c.includes(n))&&(w(n,L),n.f&(g|B)||(n.f^=B),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&H)){w(t,p);var r=u,e=f;u=t,f=t.ctx;try{Ot(t),n&Q?_n(t):xt(t),gt(t);var s=Mt(t);t.teardown=typeof s=="function"?s:null,t.version=Ft}catch(a){En(a)}finally{u=r,f=e}}}function Lt(){k>1e3&&(k=0,Jt()),k++}function Ht(t){var n=t.length;if(n!==0){Lt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),wn(a)}}finally{N=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|C))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function Tn(){if(F=!1,k>1001)return;const t=I;I=[],Ht(t),F||(k=0)}function z(t){j===bt&&(F||(F=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|y)){if(!(r&p))return;n.f^=p}}I.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,o=a&&(s&p)!==0;if(!o&&!(s&C))if(s&M){a?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&it&&e.push(r);var A=r.next;if(A===null){let m=r.parent;for(;m!==null;){if(t===m)break t;var _=m.next;if(_!==null){r=_;continue t}m=m.parent}}r=A}for(var v=0;v<e.length;v++)i=e[v],n.push(i),Yt(i,n)}function jt(t){var n=j,r=I;try{Lt();const s=[];j=pn,I=s,F=!1,Ht(r);var e=t==null?void 0:t();return vn(),(I.length>0||s.length>0)&&jt(),k=0,e}finally{j=n,I=r}}async function Tr(){await Promise.resolve(),jt()}function Bt(t){var i;var n=t.f,r=(n&T)!==0;if(r&&n&H){var e=St(t);return nt(t),e}if(l!==null){E!==null&&E.includes(t)&&Qt();var s=l.deps;c===null&&s!==null&&s[h]===t?h++:c===null?c=[t]:c.push(t),S!==null&&u!==null&&u.f&p&&!(u.f&y)&&S.includes(t)&&(w(u,D),z(u))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,Y(a)&&Dt(a)),t.v}function An(t){const n=l;try{return l=null,t()}finally{l=n}}const mn=~(D|L|p);function w(t,n){t.f=t.f&mn|n}function Ar(t,n=1){var r=+Bt(t);return ht(t,r+n),r}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:tt(!1)})}function Sr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=l;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];K(a.effect),G(a.reaction),Rt(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(at in t)J(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&at in r&&J(r)}}}function J(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{J(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{fr as $,or as A,rr as B,lr as C,Rn as D,ft as E,gn as F,tt as G,Fn as H,st as I,u as J,qn as K,Vt as L,Sn as M,bn as N,kn as O,$n as P,vt as Q,Ar as R,at as S,On as T,Jn as U,y as V,$ as W,K as X,Gn as Y,Kn as Z,Zn as _,nr as a,l as a0,H as a1,zn as a2,sn as a3,sr as a4,U as a5,tr as a6,yr as a7,jt as a8,In as a9,Et as aA,yt as aB,Pn as aC,pr as aD,Hn as aE,Ln as aF,er as aG,Zt as aH,Tr as aa,Mn as ab,At as ac,Bn as ad,Dn as ae,C as af,Yn as ag,rn as ah,jn as ai,Vn as aj,kt as ak,ir as al,cn as am,b as an,W as ao,an as ap,Un as aq,O as ar,Qn as as,Cn as at,Ut as au,G as av,Wn as aw,Xn as ax,ar as ay,en as az,fn as b,dr as c,d,Rt as e,vr as f,cr as g,R as h,f as i,Nn as j,Gt as k,Bt as l,Dr as m,on as n,xn as o,Er as p,wr as q,ln as r,nn as s,_r as t,An as u,ht as v,mr as w,ur as x,hr as y,Sr as z};
