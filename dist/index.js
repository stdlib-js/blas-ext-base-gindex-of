"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=c(function(z,f){
function p(e,r,i,t,s){var u,n,a,o;for(u=i.data,n=i.accessors[0],a=s,o=0;o<e;o++){if(n(u,a)===r)return o;a+=t}return-1}f.exports=p
});var v=c(function(A,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),b=x();function l(e,r,i,t,s){var u,n,a;if(e<=0)return-1;if(n=O(i),n.accessorProtocol)return b(e,r,n,t,s);for(u=s,a=0;a<e;a++){if(i[u]===r)return a;u+=t}return-1}d.exports=l
});var y=c(function(B,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=v();function P(e,r,i,t){return k(e,r,i,t,j(e,t))}q.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),m=v();R(g,"ndarray",m);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
