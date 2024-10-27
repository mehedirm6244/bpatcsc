import{d as Ee,i as Ae,e as X,f as Ne,n as ke,g as we,a as Q,j as Te,c as be}from"./disclose-version.BPlvFVQN.js";import{ac as fe,b as le,ad as oe,h as w,a5 as R,a as L,M as ye,ae as ue,a3 as Ie,a4 as Z,a6 as M,d as I,a7 as B,c as W,p as ce,af as H,q as P,J as z,ag as q,ah as j,ai as G,aj as Ce,s as Se,G as m,ak as xe,al as Re,am as Me,an as ve,ao as de,ap as Le,aq as Oe,ar as De,E as He,as as _e,at as ze,L as $,au as Be,w as We,y as ee,z as Pe,A as qe,C as Ge,B as Ve,x as Ye,l as ae}from"./runtime.DpzR_taH.js";import{i as Fe}from"./lifecycle.C0pJTP1F.js";import{l as re,p as C}from"./index-client.B8aLcYnx.js";let S=null;function se(a){S=a}function Ue(a,e){return e}function Je(a,e,r,l){for(var c=[],v=e.length,u=0;u<v;u++)xe(e[u].e,c,!0);var o=v>0&&c.length===0&&r!==null;if(o){var N=r.parentNode;Re(N),N.append(r),l.clear(),y(a,e[0].prev,e[v-1].next)}Me(c,()=>{for(var _=0;_<v;_++){var A=e[_];o||(l.delete(A.k),y(a,A.prev,A.next)),ve(A.e,!o)}})}function Ke(a,e,r,l,c,v=null){var u=a,o={flags:e,items:new Map,first:null},N=(e&oe)!==0;if(N){var _=a;u=w?R(de(_)):_.appendChild(fe())}w&&L();var A=null,i=!1;le(()=>{var p=r(),n=ye(p)?p:p==null?[]:ue(p),h=n.length;if(i&&h===0)return;i=h===0;let E=!1;if(w){var g=u.data===Ie;g!==(h===0)&&(u=Z(),R(u),M(!1),E=!0)}if(w){for(var f=null,t,s=0;s<h;s++){if(I.nodeType===8&&I.data===Le){u=I,E=!0,M(!1);break}var d=n[s],k=l(d,s);t=he(I,o,f,null,d,k,s,c,e),o.items.set(k,t),f=t}h>0&&R(Z())}w||Xe(n,o,u,c,e,l),v!==null&&(h===0?A?B(A):A=W(()=>v(u)):A!==null&&ce(A,()=>{A=null})),E&&M(!0),r()}),w&&(u=I)}function Xe(a,e,r,l,c,v){var Y,F,U,J;var u=(c&Oe)!==0,o=(c&(q|G))!==0,N=a.length,_=e.items,A=e.first,i=A,p,n=null,h,E=[],g=[],f,t,s,d;if(u)for(d=0;d<N;d+=1)f=a[d],t=v(f,d),s=_.get(t),s!==void 0&&((Y=s.a)==null||Y.measure(),(h??(h=new Set)).add(s));for(d=0;d<N;d+=1){if(f=a[d],t=v(f,d),s=_.get(t),s===void 0){var k=i?i.e.nodes_start:r;n=he(k,e,n,n===null?e.first:n.next,f,t,d,l,c),_.set(t,n),E=[],g=[],i=n.next;continue}if(o&&Qe(s,f,d,c),s.e.f&H&&(B(s.e),u&&((F=s.a)==null||F.unfix(),(h??(h=new Set)).delete(s))),s!==i){if(p!==void 0&&p.has(s)){if(E.length<g.length){var b=g[0],T;n=b.prev;var V=E[0],O=E[E.length-1];for(T=0;T<E.length;T+=1)ie(E[T],b,r);for(T=0;T<g.length;T+=1)p.delete(g[T]);y(e,V.prev,O.next),y(e,n,V),y(e,O,b),i=b,n=O,d-=1,E=[],g=[]}else p.delete(s),ie(s,i,r),y(e,s.prev,s.next),y(e,s,n===null?e.first:n.next),y(e,n,s),n=s;continue}for(E=[],g=[];i!==null&&i.k!==t;)i.e.f&H||(p??(p=new Set)).add(i),g.push(i),i=i.next;if(i===null)continue;s=i}E.push(s),n=s,i=s.next}if(i!==null||p!==void 0){for(var x=p===void 0?[]:ue(p);i!==null;)i.e.f&H||x.push(i),i=i.next;var D=x.length;if(D>0){var pe=c&oe&&N===0?r:null;if(u){for(d=0;d<D;d+=1)(U=x[d].a)==null||U.measure();for(d=0;d<D;d+=1)(J=x[d].a)==null||J.fix()}Je(e,x,pe,_)}}u&&P(()=>{var K;if(h!==void 0)for(s of h)(K=s.a)==null||K.apply()}),z.first=e.first&&e.first.e,z.last=n&&n.e}function Qe(a,e,r,l){l&q&&j(a.v,e),l&G?j(a.i,r):a.i=r}function he(a,e,r,l,c,v,u,o,N){var _=S;try{var A=(N&q)!==0,i=(N&Ce)===0,p=A?i?Se(c):m(c):c,n=N&G?m(u):u,h={i:n,v:p,k:v,a:null,e:null,prev:r,next:l};return S=h,h.e=W(()=>o(a,p,n),w),h.e.prev=r&&r.e,h.e.next=l&&l.e,r===null?e.first=h:(r.next=h,r.e.next=h.e),l!==null&&(l.prev=h,l.e.prev=h.e),h}finally{S=_}}function ie(a,e,r){for(var l=a.next?a.next.e.nodes_start:r,c=e?e.e.nodes_start:r,v=a.e.nodes_start;v!==l;){var u=De(v);c.before(v),v=u}}function y(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function Ze(a,e,r,l,c){var o;w&&L();var v=(o=e.$$slots)==null?void 0:o[r],u=!1;v===!0&&(v=e.children,u=!0),v===void 0||v(a,u?()=>l:l)}function je(a,e,r,l,c,v){let u=w;w&&L();var o,N,_=null;w&&I.nodeType===1&&(_=I,L());var A=w?I:a,i,p=S;le(()=>{const n=e()||null;var h=_e;if(n!==o){var E=S;se(p),i&&(n===null?ce(i,()=>{i=null,N=null}):n===N?B(i):ve(i)),n&&n!==N&&(i=W(()=>{if(_=w?_:document.createElementNS(h,n),Ee(_,_),l){var g=w?de(_):_.appendChild(fe());w&&(g===null?M(!1):R(g)),l(_,g)}z.nodes_end=_,A.before(_)})),o=n,o&&(N=o),se(E)}},He),u&&(M(!0),R(A))}function me(a,e){if(e){const r=document.body;a.autofocus=!0,P(()=>{document.activeElement===r&&a.focus()})}}function $e(a,e,r,l){var c=a.__attributes??(a.__attributes={});w&&(c[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||c[e]!==(c[e]=r)&&(e==="loading"&&(a[ze]=r),r==null?a.removeAttribute(e):typeof r!="string"&&ge(a).includes(e)?a[e]=r:a.setAttribute(e,r))}function ne(a,e,r,l,c=!1,v=!1,u=!1){var o=e||{},N=a.tagName==="OPTION";for(var _ in e)_ in r||(r[_]=null);var A=ge(a),i=a.__attributes??(a.__attributes={}),p=[];for(const f in r){let t=r[f];if(N&&f==="value"&&t==null){a.value=a.__value="",o[f]=t;continue}var n=o[f];if(t!==n){o[f]=t;var h=f[0]+f[1];if(h!=="$$")if(h==="on"){const s={},d="$$"+f;let k=f.slice(2);var E=we(k);if(Ae(k)&&(k=k.slice(0,-7),s.capture=!0),!E&&n){if(t!=null)continue;a.removeEventListener(k,o[d],s),o[d]=null}if(t!=null)if(E)a[`__${k}`]=t,Ne([k]);else{let b=function(T){o[f].call(this,T)};e?o[d]=X(k,a,b,s):p.push([f,t,()=>o[d]=X(k,a,b,s)])}}else if(f==="style"&&t!=null)a.style.cssText=t+"";else if(f==="autofocus")me(a,!!t);else if(f==="__value"||f==="value"&&t!=null)a.value=a[f]=a.__value=t;else{var g=f;c||(g=ke(g)),t==null&&!v?(i[f]=null,a.removeAttribute(f)):A.includes(g)&&(v||typeof t!="string")?a[g]=t:typeof t!="function"&&(w&&(g==="src"||g==="href"||g==="srcset")||$e(a,g,t))}}}return e||P(()=>{if(a.isConnected)for(const[f,t,s]of p)o[f]===t&&s()}),o}var te=new Map;function ge(a){var e=te.get(a.nodeName);if(e)return e;te.set(a.nodeName,e=[]);for(var r,l=$(a),c=Element.prototype;c!==l;){r=Be(l);for(var v in r)r[v].set&&e.push(v);l=$(l)}return e}/**
 * @license lucide-svelte v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var aa=Te("<svg><!><!></svg>");function ta(a,e){const r=re(e,["children","$$slots","$$events","$$legacy"]),l=re(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);We(e,!1);let c=C(e,"name",8,void 0),v=C(e,"color",8,"currentColor"),u=C(e,"size",8,24),o=C(e,"strokeWidth",8,2),N=C(e,"absoluteStrokeWidth",8,!1),_=C(e,"iconNode",24,()=>[]);const A=(...E)=>E.filter((g,f,t)=>!!g&&t.indexOf(g)===f).join(" ");Fe();var i=aa();let p;var n=qe(i);Ke(n,1,_,Ue,(E,g)=>{let f=()=>ae(g)[0],t=()=>ae(g)[1];var s=be(),d=Ye(s);je(d,f,!0,(k,b)=>{let T;ee(()=>T=ne(k,T,{...t()},void 0,k.namespaceURI!==_e,k.nodeName.includes("-")))}),Q(E,s)});var h=Ge(n);Ze(h,e,"default",{}),Ve(i),ee(()=>p=ne(i,p,{...ea,...l,width:u(),height:u(),stroke:v(),"stroke-width":N()?Number(o())*24/Number(u()):o(),class:A("lucide-icon","lucide",c()?`lucide-${c()}`:"",r.class)},void 0,!0)),Q(a,i),Pe()}export{ta as I,$e as a,Ke as e,Ue as i,Ze as s};