import{S as s,i as a,s as t,k as e,m as l,r,n,t as o,v as c,w as f,a as g,e as h,j as i,q as m,d as u,g as p,c as d,f as v,l as $,o as x,h as T,p as w,x as E,y as b,z as j}from"./client.748f8161.js";import{T as S}from"./Tag.76cb1290.js";import{c as y}from"./professors.52297b7f.js";function z(s,a,t){const e=s.slice();return e[2]=a[t],e[4]=t,e}function D(s){let a,t;return a=new S({props:{tag:s[2],lastOrOnlyTag:s[0].length-1===s[4],className:"mb-2"}}),{c(){e(a.$$.fragment)},l(s){l(a.$$.fragment,s)},m(s,e){r(a,s,e),t=!0},p:n,i(s){t||(o(a.$$.fragment,s),t=!0)},o(s){c(a.$$.fragment,s),t=!1},d(s){f(a,s)}}}function I(s){let a,t,e,l,r,n,f,S=s[0],y=[];for(let a=0;a<S.length;a+=1)y[a]=D(z(s,S,a));const I=s=>c(y[s],1,1,(()=>{y[s]=null}));return{c(){a=g(),t=h("div"),e=h("h1"),l=i("Tags"),r=g(),n=h("div");for(let s=0;s<y.length;s+=1)y[s].c();this.h()},l(s){m('[data-svelte="svelte-1d3glr5"]',document.head).forEach(u),a=p(s),t=d(s,"DIV",{class:!0});var o=v(t);e=d(o,"H1",{class:!0});var c=v(e);l=$(c,"Tags"),c.forEach(u),r=p(o),n=d(o,"DIV",{class:!0});var f=v(n);for(let s=0;s<y.length;s+=1)y[s].l(f);f.forEach(u),o.forEach(u),this.h()},h(){document.title="Tags | Specimen Magazine",x(e,"class","text-lg pb-2"),x(n,"class","flex flex-wrap"),x(t,"class","w-full")},m(s,o){T(s,a,o),T(s,t,o),w(t,e),w(e,l),w(t,r),w(t,n);for(let s=0;s<y.length;s+=1)y[s].m(n,null);f=!0},p(s,[a]){if(1&a){let t;for(S=s[0],t=0;t<S.length;t+=1){const e=z(s,S,t);y[t]?(y[t].p(e,a),o(y[t],1)):(y[t]=D(e),y[t].c(),o(y[t],1),y[t].m(n,null))}for(j(),t=S.length;t<y.length;t+=1)I(t);E()}},i(s){if(!f){for(let s=0;s<S.length;s+=1)o(y[s]);f=!0}},o(s){y=y.filter(Boolean);for(let s=0;s<y.length;s+=1)c(y[s]);f=!1},d(s){s&&u(a),s&&u(t),b(y,s)}}}function O(s){let a=[];y.forEach((s=>{a=a.concat(s.tags)}));return[[...new Set(a)]]}export default class extends s{constructor(s){super(),a(this,s,O,I,t,{})}}