"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var x=c(function(z,f){
function p(e,r,a,t,s){var u,n,i,o;for(u=a.data,n=a.accessors[0],i=s,o=0;o<e;o++){if(n(u,i)===r)return o;i+=t}return-1}f.exports=p
});var v=c(function(A,d){
var O=require('@stdlib/array-base-arraylike2object/dist'),b=x();function l(e,r,a,t,s){var u,n,i;if(e<=0)return-1;if(n=O(a),n.accessorProtocol)return b(e,r,n,t,s);for(u=s,i=0;i<e;i++){if(a[u]===r)return i;u+=t}return-1}d.exports=l
});var y=c(function(B,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=v();function P(e,r,a,t){return k(e,r,a,t,j(e,t))}q.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),m=v();R(g,"ndarray",m);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
