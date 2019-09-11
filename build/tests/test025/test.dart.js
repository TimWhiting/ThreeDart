{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.pU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lz(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={lc:function lc(){},
kG:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hb:function(){return new P.cT("No element")},
nQ:function(){return new P.cT("Too many elements")},
e7:function(a,b,c,d,e){if(c-b<=32)H.oj(a,b,c,d,e)
else H.oi(a,b,c,d,e)},
oj:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a0()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oi:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a8(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a8(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.c(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.c(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.c(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.c(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.c(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a0()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.P(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.P()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a0()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.P()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a0()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a0()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e7(a2,a3,o-2,a5,a6)
H.e7(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.P(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.P(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.P()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e7(a2,o,n,a5,a6)}else H.e7(a2,o,n,a5,a6)},
r:function r(a){this.a=a},
fS:function fS(){},
c0:function c0(){},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
ju:function ju(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(){},
d1:function d1(){},
ei:function ei(){},
nI:function(){throw H.e(P.I("Cannot modify unmodifiable Map"))},
cp:function(a){var u,t=H.pV(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pB:function(a){return v.types[H.ac(a)]},
pI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.e(H.aY(a))
return u},
cO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oa:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.c(p,3)
u=H.N(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.C(s,q)|32)>t)return}return parseInt(a,b)},
cP:function(a){return H.o1(a)+H.lv(H.bP(a),0,null)},
o1:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ica){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cp(t.length>1&&C.b.C(t,0)===36?C.b.a9(t,1):t)},
o2:function(){if(!!self.location)return self.location.href
return},
mb:function(a){var u,t,s,r,q=J.aB(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ob:function(a){var u,t,s,r=H.d([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aM(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aY(s))}return H.mb(r)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aY(s))
if(s<0)throw H.e(H.aY(s))
if(s>65535)return H.ob(a)}return H.mb(a)},
oc:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c2:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aM(u,10))>>>0,56320|u&1023)}}throw H.e(P.ag(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var u=H.c1(a).getFullYear()+0
return u},
o7:function(a){var u=H.c1(a).getMonth()+1
return u},
o3:function(a){var u=H.c1(a).getDate()+0
return u},
o4:function(a){var u=H.c1(a).getHours()+0
return u},
o6:function(a){var u=H.c1(a).getMinutes()+0
return u},
o8:function(a){var u=H.c1(a).getSeconds()+0
return u},
o5:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
F:function(a){throw H.e(H.aY(a))},
c:function(a,b){if(a==null)J.aB(a)
throw H.e(H.cj(a,b))},
cj:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aK(!0,b,s,null)
u=H.ac(J.aB(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,s,null,u)
return P.e3(b,s)},
pw:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aK(!0,b,"end",null)},
aY:function(a){return new P.aK(!0,a,null,null)},
pr:function(a){if(typeof a!=="number")throw H.e(H.aY(a))
return a},
e:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n7})
u.name=""}else u.toString=H.n7
return u},
n7:function(){return J.ar(this.dartException)},
z:function(a){throw H.e(a)},
u:function(a){throw H.e(P.bg(a))},
bb:function(a){var u,t,s,r,q,p
a=H.n6(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mm:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.hW(a,b==null?null:b.method)},
ld:function(a,b){var u=b==null,t=u?null:b.method
return new H.he(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l_(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ld(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m6(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nb()
q=$.nc()
p=$.nd()
o=$.ne()
n=$.nh()
m=$.ni()
l=$.ng()
$.nf()
k=$.nk()
j=$.nj()
i=r.ad(u)
if(i!=null)return f.$1(H.ld(H.N(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.ld(H.N(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m6(H.N(u),i))}}return f.$1(new H.j3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aK(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e8()
return a},
cn:function(a){var u
if(a==null)return new H.eW(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eW(a)},
pA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pH:function(a,b,c,d,e,f){H.h(a,"$ibx")
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.B("Unsupported number of arguments for wrapped closure"))},
ci:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pH)
a.$identity=u
return u},
nH:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cs(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.A()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lT(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nD(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lT(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nD:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pB,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lS:H.l3
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nE:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nG(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nE(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.A()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ct
return new Function(r+H.i(q==null?$.ct=H.fz("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.A()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.ct
return new Function(r+H.i(q==null?$.ct=H.fz("self"):q)+"."+H.i(u)+"("+o+");}")()},
nF:function(a,b,c,d){var u=H.l3,t=H.lS
switch(b?-1:a){case 0:throw H.e(H.og("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nG:function(a,b){var u,t,s,r,q,p,o,n=$.ct
if(n==null)n=$.ct=H.fz("self")
u=$.lR
if(u==null)u=$.lR=H.fz("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nF(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aZ
if(typeof u!=="number")return u.A()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.A()
$.aZ=u+1
return new Function(n+u+"}")()},
lz:function(a,b,c,d,e,f,g){return H.nH(a,b,c,d,!!e,!!f,g)},
l3:function(a){return a.a},
lS:function(a){return a.c},
fz:function(a){var u,t,s,r=new H.cs("self","target","receiver","name"),q=J.la(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.pn("boolean expression must not be null")
return a},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aX(a,"String"))},
px:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"double"))},
n2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aX(a,"num"))},
lw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aX(a,"bool"))},
ac:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aX(a,"int"))},
n4:function(a,b){throw H.e(H.aX(a,H.cp(H.N(b).substring(2))))},
pO:function(a,b){throw H.e(H.nC(a,H.cp(H.N(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n4(a,b)},
A:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pO(a,b)},
qF:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.e(H.aX(a,"List<dynamic>"))},
n0:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n4(a,b)},
mW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ac(u)]
else return a.$S()}return},
fk:function(a,b){var u
if(typeof a=="function")return!0
u=H.mW(J.T(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.ls)return a
$.ls=!0
try{if(H.fk(a,b))return a
u=H.kU(b)
t=H.aX(a,u)
throw H.e(t)}finally{$.ls=!1}},
lC:function(a,b){if(a!=null&&!H.ly(a,b))H.z(H.aX(a,H.kU(b)))
return a},
aX:function(a,b){return new H.iT("TypeError: "+P.dG(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
nC:function(a,b){return new H.fA("CastError: "+P.dG(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.T(a)
if(!!t.$icv){u=H.mW(t)
if(u!=null)return H.kU(u)
return"Closure"}return H.cP(a)},
pn:function(a){throw H.e(new H.jv(a))},
pU:function(a){throw H.e(new P.fK(a))},
og:function(a){return new H.id(a)},
mY:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bP:function(a){if(a==null)return
return a.$ti},
qE:function(a,b,c){return H.co(a["$a"+H.i(c)],H.bP(b))},
cm:function(a,b,c,d){var u=H.co(a["$a"+H.i(c)],H.bP(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u=H.co(a["$a"+H.i(b)],H.bP(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bP(a)
return u==null?null:u[b]},
kU:function(a){return H.bO(a,null)},
bO:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cp(a[0].name)+H.lv(a,1,b)
if(typeof a=="function")return H.cp(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ac(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.oX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oX:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.f])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bO(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bO(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bO(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bO(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.N(n[g])
i=i+h+H.bO(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lv:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a5("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bO(p,c)}return"<"+u.i(0)+">"},
co:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lx:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bP(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mS(H.co(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lx(a,b,c,d))return a
throw H.e(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cp(b.substring(2))+H.lv(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aJ(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aJ(a[t],b,c[t],d))return!1
return!0},
qC:function(a,b,c){return a.apply(b,H.co(J.T(b)["$a"+H.i(c)],H.bP(b)))},
n_:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="O"||a===-1||a===-2||H.n_(u)}return!1},
ly:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="O"||b===-1||b===-2||H.n_(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ly(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fk(a,b)}u=J.T(a).constructor
t=H.bP(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aJ(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.ly(a,b))throw H.e(H.aX(a,H.kU(b)))
return a},
aJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aJ(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aJ("type" in a?a.type:l,b,s,d)
else if(H.aJ(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.co(r,u?a.slice(1):l)
return H.aJ(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bx"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.co(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aJ(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.aJ(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aJ(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aJ(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pM(h,b,g,d)},
pM:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aJ(c[s],d,a[s],b))return!1}return!0},
qD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pK:function(a){var u,t,s,r,q=H.N($.mZ.$1(a)),p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kK[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.N($.mR.$2(a,q))
if(q!=null){p=$.kE[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kK[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kT(u)
$.kE[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kK[q]=u
return u}if(s==="-"){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n3(a,u)
if(s==="*")throw H.e(P.j2(q))
if(v.leafTags[q]===true){r=H.kT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n3(a,u)},
n3:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kT:function(a){return J.lE(a,!1,null,!!a.$iM)},
pL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kT(u)
else return J.lE(u,c,null,null)},
pF:function(){if(!0===$.lD)return
$.lD=!0
H.pG()},
pG:function(){var u,t,s,r,q,p,o,n
$.kE=Object.create(null)
$.kK=Object.create(null)
H.pE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n5.$1(q)
if(p!=null){o=H.pL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pE:function(){var u,t,s,r,q,p,o=C.G()
o=H.ch(C.H,H.ch(C.I,H.ch(C.v,H.ch(C.v,H.ch(C.J,H.ch(C.K,H.ch(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mZ=new H.kH(r)
$.mR=new H.kI(q)
$.n5=new H.kJ(p)},
ch:function(a,b){return a(b)||b},
nS:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
pS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
py:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n6:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lH:function(a,b,c){var u=H.pT(a,b,c)
return u},
pT:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n6(b),'g'),H.py(c))},
fE:function fE(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iR:function iR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hW:function hW(a,b){this.a=a
this.b=b},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
l_:function l_(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
cv:function cv(){},
iD:function iD(){},
it:function it(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(a){this.a=a},
fA:function fA(a){this.a=a},
id:function id(a){this.a=a},
jv:function jv(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hj:function hj(a,b){this.a=a
this.$ti=b},
hk:function hk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
o0:function(a){return new Int8Array(a)},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.cj(b,a))},
oV:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pw(a,b,c))
return b},
cK:function cK(){},
bD:function bD(){},
dW:function dW(){},
cL:function cL(){},
dX:function dX(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
dY:function dY(){},
cM:function cM(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
pz:function(a){return J.lZ(a?Object.keys(a):[],null)},
pV:function(a){return v.mangledGlobalNames[a]},
pN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kF:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lD==null){H.pF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.j2("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lJ()]
if(r!=null)return r
r=H.pK(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lJ(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.l2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.ag(a,0,4294967295,"length",null))
return J.lZ(new Array(a),b)},
lZ:function(a,b){return J.la(H.d(a,[b]))},
la:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.bz.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.V)return a
return J.kF(a)},
dk:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.V)return a
return J.kF(a)},
fl:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.V)return a
return J.kF(a)},
mX:function(a){if(typeof a=="number")return J.cF.prototype
if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ca.prototype
return a},
dl:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.ca.prototype
return a},
cl:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.V)return a
return J.kF(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).p(a,b)},
lL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mX(a).B(a,b)},
dp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dk(a).j(a,b)},
l0:function(a,b,c){return J.fl(a).k(a,b,c)},
nt:function(a,b){return J.dl(a).C(a,b)},
nu:function(a,b,c){return J.cl(a).hl(a,b,c)},
nv:function(a,b,c,d){return J.cl(a).hQ(a,b,c,d)},
nw:function(a,b){return J.dl(a).V(a,b)},
l1:function(a,b){return J.mX(a).i2(a,b)},
fn:function(a,b){return J.fl(a).H(a,b)},
nx:function(a,b,c,d){return J.cl(a).ih(a,b,c,d)},
lM:function(a,b){return J.fl(a).F(a,b)},
ny:function(a){return J.cl(a).ghY(a)},
lN:function(a){return J.cl(a).gc0(a)},
dq:function(a){return J.T(a).gG(a)},
bq:function(a){return J.fl(a).gT(a)},
aB:function(a){return J.dk(a).gn(a)},
lO:function(a){return J.fl(a).iQ(a)},
nz:function(a,b){return J.cl(a).iU(a,b)},
nA:function(a,b,c){return J.dl(a).q(a,b,c)},
nB:function(a){return J.dl(a).j3(a)},
ar:function(a){return J.T(a).i(a)},
a:function a(){},
hc:function hc(){},
dK:function dK(){},
dL:function dL(){},
i_:function i_(){},
ca:function ca(){},
bA:function bA(){},
b3:function b3(a){this.$ti=a},
lb:function lb(a){this.$ti=a},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cF:function cF(){},
dJ:function dJ(){},
dI:function dI(){},
bz:function bz(){}},P={
ow:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.po()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ci(new P.jx(s),1)).observe(u,{childList:true})
return new P.jw(s,u,t)}else if(self.setImmediate!=null)return P.pp()
return P.pq()},
ox:function(a){self.scheduleImmediate(H.ci(new P.jy(H.o(a,{func:1,ret:-1})),0))},
oy:function(a){self.setImmediate(H.ci(new P.jz(H.o(a,{func:1,ret:-1})),0))},
oz:function(a){P.lh(C.o,H.o(a,{func:1,ret:-1}))},
lh:function(a,b){var u=C.d.a8(a.a,1000)
return P.oF(u<0?0:u,b)},
ml:function(a,b){var u=C.d.a8(a.a,1000)
return P.oG(u<0?0:u,b)},
oF:function(a,b){var u=new P.f1()
u.eF(a,b)
return u},
oG:function(a,b){var u=new P.f1()
u.eG(a,b)
return u},
oA:function(a,b){var u,t,s
b.a=1
try{a.e5(new P.jJ(b),new P.jK(b),null)}catch(s){u=H.ai(s)
t=H.cn(s)
P.pP(new P.jL(b,u,t))}},
mz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaI")
if(u>=4){t=b.bO()
b.a=a.a
b.c=a.c
P.d6(b,t)}else{t=H.h(b.c,"$ibd")
b.a=2
b.c=a
a.d1(t)}},
d6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$ial")
P.kv(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d6(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.h(q,"$ial")
P.kv(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.jP(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jO(u,b,q).$0()}else if((g&2)!==0)new P.jN(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.T(g).$icB){if(g.a>=4){k=H.h(o.c,"$ibd")
o.c=null
b=o.bf(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mz(g,o)
return}}j=b.b
k=H.h(j.c,"$ibd")
j.c=null
b=j.bf(k)
g=u.a
p=u.b
if(!g){H.C(p,H.q(j,0))
j.a=4
j.c=p}else{H.h(p,"$ial")
j.a=8
j.c=p}h.a=j
g=j}},
pj:function(a,b){if(H.fk(a,{func:1,args:[P.V,P.au]}))return H.o(a,{func:1,ret:null,args:[P.V,P.au]})
if(H.fk(a,{func:1,args:[P.V]}))return H.o(a,{func:1,ret:null,args:[P.V]})
throw H.e(P.l2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pi:function(){var u,t
for(;u=$.cg,u!=null;){$.dj=null
t=u.b
$.cg=t
if(t==null)$.di=null
u.a.$0()}},
pm:function(){$.lt=!0
try{P.pi()}finally{$.dj=null
$.lt=!1
if($.cg!=null)$.lK().$1(P.mT())}},
mO:function(a){var u=new P.eo(a)
if($.cg==null){$.cg=$.di=u
if(!$.lt)$.lK().$1(P.mT())}else $.di=$.di.b=u},
pl:function(a){var u,t,s=$.cg
if(s==null){P.mO(a)
$.dj=$.di
return}u=new P.eo(a)
t=$.dj
if(t==null){u.b=s
$.cg=$.dj=u}else{u.b=t.b
$.dj=t.b=u
if(u.b==null)$.di=u}},
pP:function(a){var u=null,t=$.a_
if(C.f===t){P.kx(u,u,C.f,a)
return}P.kx(u,u,t,H.o(t.bX(a),{func:1,ret:-1}))},
mk:function(a,b){var u=$.a_
if(u===C.f)return P.lh(a,H.o(b,{func:1,ret:-1}))
return P.lh(a,H.o(u.bX(b),{func:1,ret:-1}))},
om:function(a,b){var u=$.a_
if(u===C.f)return P.ml(a,H.o(b,{func:1,ret:-1,args:[P.b9]}))
return P.ml(a,H.o(u.di(b,P.b9),{func:1,ret:-1,args:[P.b9]}))},
kv:function(a,b,c,d,e){var u={}
u.a=d
P.pl(new P.kw(u,e))},
mK:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mL:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
pk:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kx:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bX(d):c.hZ(d,-1)
P.mO(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
f1:function f1(){this.c=0},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aI:function aI(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jI:function jI(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jQ:function jQ(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a){this.a=a
this.b=null},
iw:function iw(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
cU:function cU(){},
ix:function ix(){},
b9:function b9(){},
al:function al(a,b){this.a=a
this.b=b},
km:function km(){},
kw:function kw(a,b){this.a=a
this.b=b},
jW:function jW(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
nU:function(a,b){return new H.a0([a,b])},
le:function(a,b){return new H.a0([a,b])},
nW:function(a){return H.pA(a,new H.a0([null,null]))},
dO:function(a){return new P.jU([a])},
ln:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oE:function(a,b,c){var u=new P.eD(a,b,[c])
u.c=a.e
return u},
nP:function(a,b,c){var u,t
if(P.lu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
C.a.h($.aw,a)
try{P.oY(a,u)}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=P.mi(b,H.n0(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
l9:function(a,b,c){var u,t
if(P.lu(a))return b+"..."+c
u=new P.a5(b)
C.a.h($.aw,a)
try{t=u
t.a=P.mi(t.a,a,", ")}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lu:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oY:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.i(n.gI(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gI(n);++l
if(!n.v()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gI(n);++l
for(;n.v();r=q,q=p){p=n.gI(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nV:function(a,b,c){var u=P.nU(b,c)
a.F(0,new P.hl(u,b,c))
return u},
m_:function(a,b){var u,t,s=P.dO(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.C(a[t],b))
return s},
lf:function(a){var u,t={}
if(P.lu(a))return"{...}"
u=new P.a5("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lM(a,new P.hp(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.c($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jU:function jU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cc:function cc(a){this.a=a
this.c=this.b=null},
eD:function eD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
x:function x(){},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
ae:function ae(){},
ke:function ke(){},
hq:function hq(){},
ej:function ej(a,b){this.a=a
this.$ti=b},
k0:function k0(){},
eE:function eE(){},
f7:function f7(){},
oq:function(a,b,c,d){if(b instanceof Uint8Array)return P.or(!1,b,c,d)
return},
or:function(a,b,c,d){var u,t,s=$.nl()
if(s==null)return
u=0===c
if(u&&!0)return P.lk(s,b)
t=b.length
d=P.bI(c,d,t)
if(u&&d===t)return P.lk(s,b)
return P.lk(s,b.subarray(c,d))},
lk:function(a,b){if(P.ot(b))return
return P.ou(a,b)},
ou:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
ot:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
os:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
mN:function(a,b,c){var u,t,s
for(u=J.dk(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lQ:function(a,b,c,d,e,f){if(C.d.b9(f,4)!==0)throw H.e(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
fw:function fw(){},
fx:function fx(){},
bV:function bV(){},
bu:function bu(){},
fU:function fU(){},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h8:function h8(a){this.a=a},
jb:function jb(){},
jd:function jd(){},
kk:function kk(a){this.b=0
this.c=a},
jc:function jc(a){this.a=a},
kj:function kj(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fm:function(a,b,c){var u=H.oa(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.a4(a,null,null))},
nM:function(a){if(a instanceof H.cv)return a.i(0)
return"Instance of '"+H.i(H.cP(a))+"'"},
nX:function(a,b,c){var u,t=J.nR(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
m0:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bq(a);u.v();)C.a.h(s,H.C(u.gI(u),c))
if(b)return s
return H.m(J.la(s),"$ib",t,"$ab")},
cV:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib3",[P.l],"$ab3")
u=a.length
c=P.bI(b,c,u)
return H.mc(b>0||c<u?C.a.eh(a,b,c):a)}if(!!J.T(a).$icM)return H.oc(a,b,P.bI(b,c,a.length))
return P.ok(a,b,c)},
ok:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.ag(b,0,J.aB(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.ag(c,b,J.aB(a),q,q))
t=J.bq(a)
for(s=0;s<b;++s)if(!t.v())throw H.e(P.ag(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gI(t))
else for(s=b;s<c;++s){if(!t.v())throw H.e(P.ag(c,b,s,q,q))
r.push(t.gI(t))}return H.mc(r)},
oe:function(a){return new H.hd(a,H.nS(a,!1,!0,!1,!1,!1))},
mi:function(a,b,c){var u=J.bq(b)
if(!u.v())return a
if(c.length===0){do a+=H.i(u.gI(u))
while(u.v())}else{a+=H.i(u.gI(u))
for(;u.v();)a=a+c+H.i(u.gI(u))}return a},
mo:function(){var u=H.o2()
if(u!=null)return P.op(u)
throw H.e(P.I("'Uri.base' is not supported"))},
f8:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nr().b
if(typeof b!=="string")H.z(H.aY(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aq(c,"bV",0))
t=c.gig().c1(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c2(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a){return new P.bv(1000*a)},
dG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nM(a)},
ds:function(a){return new P.aK(!1,null,null,a)},
l2:function(a,b,c){return new P.aK(!0,a,b,c)},
e3:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bI:function(a,b,c){if(0>a||a>c)throw H.e(P.ag(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ag(b,a,c,"end",null))
return b}return c},
md:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.e(P.ag(a,0,null,b,null))},
X:function(a,b,c,d,e){var u=H.ac(e==null?J.aB(b):e)
return new P.ha(u,!0,a,c,"Index out of range")},
I:function(a){return new P.j4(a)},
j2:function(a){return new P.j1(a)},
mh:function(a){return new P.cT(a)},
bg:function(a){return new P.fD(a)},
B:function(a){return new P.ew(a)},
a4:function(a,b,c){return new P.h3(a,b,c)},
nY:function(a,b,c){var u,t=H.d([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lG:function(a){H.pN(a)},
op:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.C(a,4)^58)*3|C.b.C(a,0)^100|C.b.C(a,1)^97|C.b.C(a,2)^116|C.b.C(a,3)^97)>>>0
if(u===0)return P.mn(e<e?C.b.q(a,0,e):a,5,f).gea()
else if(u===32)return P.mn(C.b.q(a,5,e),0,f).gea()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.l])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.mM(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.j7()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.A()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.F(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a6(a,"..",o)))j=n>o+2&&C.b.a6(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a6(a,"file",0)){if(q<=0){if(!C.b.a6(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aS(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a6(a,"http",0)){if(t&&p+3===o&&C.b.a6(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a6(a,"https",0)){if(t&&p+4===o&&C.b.a6(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aS(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k3(a,r,q,p,o,n,m,k)}return P.oH(a,0,e,r,q,p,o,n,m,k)},
mq:function(a){var u=P.f
return C.a.il(H.d(a.split("&"),[u]),P.le(u,u),new P.j9(C.h),[P.y,P.f,P.f])},
oo:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j6(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fm(C.b.q(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.c(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fm(C.b.q(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.c(j,r)
j[r]=p
return j},
mp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j7(a),d=new P.j8(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.V(a,t)
if(p===58){if(t===b){++t
if(C.b.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gau(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.oo(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.c(l,i)
l[i]=0
f=i+1
if(f>=k)return H.c(l,f)
l[f]=0
i+=2}else{f=C.d.aM(h,8)
if(i<0||i>=k)return H.c(l,i)
l[i]=f
f=i+1
if(f>=k)return H.c(l,f)
l[f]=h&255
i+=2}}return l},
oH:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oP(a,b,d)
else{if(d===b)P.ce(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oQ(a,u,e-1):""
s=P.oM(a,e,f,!1)
if(typeof f!=="number")return f.A()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.oO(P.fm(C.b.q(a,r,g),new P.kf(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oN(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.lp(a,h+1,i,n):n
return new P.cd(j,t,s,q,p,o,i<c?P.oL(a,i+1,c):n)},
mD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ce:function(a,b,c){throw H.e(P.a4(c,a,b))},
oO:function(a,b){if(a!=null&&a===P.mD(b))return
return a},
oM:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.V(a,b)===91){if(typeof c!=="number")return c.O()
u=c-1
if(C.b.V(a,u)!==93)P.ce(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oJ(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mI(a,C.b.a6(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mp(a,t,s)
return C.b.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.F(c)
p=b
for(;p<c;++p)if(C.b.V(a,p)===58){s=C.b.bk(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mI(a,C.b.a6(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mp(a,b,s)
return"["+C.b.q(a,b,s)+q+"]"}return P.oS(a,b,c)},
oJ:function(a,b,c){var u,t=C.b.bk(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.F(c)
u=t<c}else u=!1
return u?t:c},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a5(d):null
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.V(a,u)
if(r===37){q=P.lq(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a5("")
o=l.a+=C.b.q(a,t,u)
if(p)q=C.b.q(a,u,u+3)
else if(q==="%")P.ce(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a5("")
if(t<u){l.a+=C.b.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a5("")
l.a+=C.b.q(a,t,u)
l.a+=P.lo(r)
u+=m
t=u}}}if(l==null)return C.b.q(a,b,c)
if(t<c)l.a+=C.b.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.V(a,u)
if(q===37){p=P.lq(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a5("")
n=C.b.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a5("")
if(t<u){s.a+=C.b.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.ce(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a5("")
n=C.b.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lo(q)
u+=l
t=u}}}}if(s==null)return C.b.q(a,b,c)
if(t<c){n=C.b.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oP:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.C(a,b)))P.ce(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.ce(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.q(a,b,c)
return P.oI(t?a.toLowerCase():a)},
oI:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oQ:function(a,b,c){return P.dg(a,b,c,C.W,!1)},
oN:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dg(a,b,c,C.A,!0):C.k.js(d,new P.kg(),P.f).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a3(u,"/"))u="/"+u
return P.oR(u,e,f)},
oR:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a3(a,"/"))return P.oT(a,!u||c)
return P.oU(a)},
lp:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.ds("Both query and queryParameters specified"))
return P.dg(a,b,c,C.m,!0)}if(d==null)return
u=new P.a5("")
t.a=""
d.F(0,new P.kh(new P.ki(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oL:function(a,b,c){return P.dg(a,b,c,C.m,!0)},
lq:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.V(a,b+1)
t=C.b.V(a,p)
s=H.kG(u)
r=H.kG(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aM(q,4)
if(p>=8)return H.c(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c2(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.q(a,b,b+3).toUpperCase()
return},
lo:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.C(o,a>>>4))
C.a.k(t,2,C.b.C(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.d.hz(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.C(o,p>>>4))
C.a.k(t,q+2,C.b.C(o,p&15))
q+=3}}return P.cV(t,0,null)},
dg:function(a,b,c,d,e){var u=P.mH(a,b,c,d,e)
return u==null?C.b.q(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.F(c)
if(!(o<c))break
c$0:{u=C.b.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.c(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lq(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.c(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.ce(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lo(u)}}if(m==null)m=new P.a5("")
m.a+=C.b.q(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.F(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.b.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mG:function(a){if(C.b.a3(a,"."))return!0
return C.b.dG(a,"/.")!==-1},
oU:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oT:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gau(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gau(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.k(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nt(a,0)))for(u=1;u<r;++u){t=C.b.C(a,u)
if(t===58)return C.b.q(a,0,u)+"%3A"+C.b.a9(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.c(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oK:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.ds("Invalid URL encoding"))}}return u},
lr:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.C(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.q(a,b,c)
else r=new H.r(C.b.q(a,b,c))}else{r=H.d([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.C(a,q)
if(t>127)throw H.e(P.ds("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.ds("Truncated URI"))
C.a.h(r,P.oK(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jc(!1).c1(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mn:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.C(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.a4(m,a,t))}}if(s<0&&t>b)throw H.e(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.C(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gau(l)
if(r!==44||t!==p+7||!C.b.a6(a,"base64",p+1))throw H.e(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iz(0,a,o,u)
else{n=P.mH(a,o,u,C.m,!0)
if(n!=null)a=C.b.aS(a,o,u,n)}return new P.j5(a,l,c)},
oW:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nY(22,new P.kq(),P.Q),n=new P.kp(o),m=new P.kr(),l=new P.ks(),k=H.h(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.h(n.$2(8,8),"$iQ"),"]",5)
k=H.h(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.h(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.h(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.h(n.$2(20,245),"$iQ"),"az",21)
k=H.h(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q=$.ns()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.c(q,d)
t=q[d]
s=C.b.C(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.c(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
R:function R(){},
ax:function ax(a,b){this.a=a
this.b=b},
t:function t(){},
bv:function bv(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
bw:function bw(){},
fq:function fq(){},
e_:function e_(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j4:function j4(a){this.a=a},
j1:function j1(a){this.a=a},
cT:function cT(a){this.a=a},
fD:function fD(a){this.a=a},
hZ:function hZ(){},
e8:function e8(){},
fK:function fK(a){this.a=a},
ew:function ew(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(){},
l:function l(){},
k:function k(){},
b2:function b2(){},
b:function b(){},
y:function y(){},
O:function O(){},
aa:function aa(){},
V:function V(){},
au:function au(){},
f:function f(){},
a5:function a5(a){this.a=a},
j9:function j9(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(){},
kp:function kp(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
k3:function k3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jD:function jD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pu:function(a){var u,t=J.T(a)
if(!!t.$ibi){u=t.gdm(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f6(a.data,a.height,a.width)},
pt:function(a){if(a instanceof P.f6)return{data:a.a,height:a.b,width:a.c}
return a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.le(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.N(t[r])
u.k(0,q,a[q])}return u},
ps:function(a){var u={}
a.F(0,new P.ky(u))
return u},
k5:function k5(){},
k7:function k7(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(){},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jV:function jV(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hg:function hg(){},
b7:function b7(){},
hX:function hX(){},
i3:function i3(){},
cQ:function cQ(){},
iA:function iA(){},
p:function p(){},
ba:function ba(){},
iQ:function iQ(){},
eB:function eB(){},
eC:function eC(){},
eM:function eM(){},
eN:function eN(){},
eY:function eY(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
Q:function Q(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
bS:function bS(){},
hY:function hY(){},
ep:function ep(){},
du:function du(){},
e2:function e2(){},
c4:function c4(){},
e5:function e5(){},
eb:function eb(){},
eh:function eh(){},
is:function is(){},
eU:function eU(){},
eV:function eV(){}},W={
lP:function(){var u=document.createElement("a")
return u},
l4:function(){var u=document.createElement("canvas")
return u},
nL:function(a,b,c){var u=document.body,t=(u&&C.t).ac(u,a,b,c)
t.toString
u=W.E
u=new H.d3(new W.ap(t),H.o(new W.fT(),{func:1,ret:P.R,args:[u]}),[u])
return H.h(u.gaG(u),"$iU")},
lY:function(a){H.h(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cl(a)
t=u.ge3(a)
if(typeof t==="string")r=u.ge3(a)}catch(s){H.ai(s)}return r},
nO:function(a){var u,t=document.createElement("input"),s=H.h(t,"$icE")
try{s.type=a}catch(u){H.ai(u)}return s},
jS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a,b,c,d){var u=W.jS(W.jS(W.jS(W.jS(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.mQ(new W.jH(c),W.n)
if(u!=null&&!0)J.nv(a,b,u,!1)
return new W.jG(a,b,u,!1,[e])},
mA:function(a){var u=W.lP(),t=window.location
u=new W.bN(new W.k_(u,t))
u.ev(a)
return u},
oB:function(a,b,c,d){H.h(a,"$iU")
H.N(b)
H.N(c)
H.h(d,"$ibN")
return!0},
oC:function(a,b,c,d){var u,t,s
H.h(a,"$iU")
H.N(b)
H.N(c)
u=H.h(d,"$ibN").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mC:function(){var u=P.f,t=P.m_(C.p,u),s=H.q(C.p,0),r=H.o(new W.kb(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.ka(t,P.dO(u),P.dO(u),P.dO(u),null)
t.eC(null,new H.ht(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u=$.a_
if(u===C.f)return a
return u.di(a,b)},
w:function w(){},
fo:function fo(){},
dr:function dr(){},
fp:function fp(){},
cr:function cr(){},
bT:function bT(){},
br:function br(){},
bU:function bU(){},
cu:function cu(){},
bs:function bs(){},
cw:function cw(){},
fG:function fG(){},
W:function W(){},
cx:function cx(){},
fH:function fH(){},
b0:function b0(){},
b1:function b1(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
aC:function aC(){},
fN:function fN(){},
dD:function dD(){},
dE:function dE(){},
fO:function fO(){},
fP:function fP(){},
jB:function jB(a,b){this.a=a
this.b=b},
U:function U(){},
fT:function fT(){},
n:function n(){},
j:function j(){},
aD:function aD(){},
cA:function cA(){},
fZ:function fZ(){},
h2:function h2(){},
aM:function aM(){},
h7:function h7(){},
bY:function bY(){},
bi:function bi(){},
cD:function cD(){},
cE:function cE(){},
b4:function b4(){},
dP:function dP(){},
hH:function hH(){},
cI:function cI(){},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(){},
hL:function hL(a){this.a=a},
aN:function aN(){},
hM:function hM(){},
af:function af(){},
ap:function ap(a){this.a=a},
E:function E(){},
cN:function cN(){},
aO:function aO(){},
i1:function i1(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
ie:function ie(){},
aQ:function aQ(){},
iq:function iq(){},
aR:function aR(){},
ir:function ir(){},
aS:function aS(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
aE:function aE(){},
b8:function b8(){},
e9:function e9(){},
iB:function iB(){},
iC:function iC(){},
cW:function cW(){},
aU:function aU(){},
aF:function aF(){},
iE:function iE(){},
iF:function iF(){},
iK:function iK(){},
aV:function aV(){},
aW:function aW(){},
iO:function iO(){},
iP:function iP(){},
bL:function bL(){},
ja:function ja(){},
js:function js(){},
bc:function bc(){},
d4:function d4(){},
d5:function d5(){},
jC:function jC(){},
er:function er(){},
jR:function jR(){},
eJ:function eJ(){},
k4:function k4(){},
k8:function k8(){},
jA:function jA(){},
jE:function jE(a){this.a=a},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jH:function jH(a){this.a=a},
bN:function bN(a){this.a=a},
G:function G(){},
dZ:function dZ(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(){},
k1:function k1(){},
k2:function k2(){},
ka:function ka(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kb:function kb(){},
k9:function k9(){},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
az:function az(){},
k_:function k_(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a},
kl:function kl(a){this.a=a},
eq:function eq(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
dc:function dc(){},
dd:function dd(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
de:function de(){},
df:function df(){},
f2:function f2(){},
f3:function f3(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){}},O={
l5:function(a){var u=new O.a3([a])
u.by(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
m1:function(){var u,t,s=new O.dS()
s.seO(O.l5(V.ao))
s.e.ba(s.gfo(),s.gfq())
u=new O.b6(s,"emission")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.f=u
u=new O.b6(s,"ambient")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.r=u
u=new O.b6(s,"diffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.x=u
u=new O.b6(s,"invDiffuse")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.y=u
u=new O.hA(s,"specular")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=100
s.z=u
u=new O.hw(s,"bump")
u.c=new A.am(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b6(s,"reflect")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.cx=u
u=new O.hz(s,"refract")
u.c=new A.am(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=1
s.cy=u
u=new O.hv(s,"alpha")
u.c=new A.am(!1,!1,!1)
u.f=1
s.db=u
u=new D.dN()
u.by(D.ad)
u.sex(H.d([],[D.dC]))
u.shc(H.d([],[D.e1]))
u.sey(H.d([],[D.bJ]))
u.y=u.x=null
u.cr(u.gfm(),u.gh0(),u.gh4())
s.dx=u
t=new O.hy()
t.b=new V.b_(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.a1():t
u.h(0,s.ghn())
u=s.dx
t=u.y
u=t==null?u.y=D.a1():t
u.h(0,s.geD())
s.fr=null
return s},
dS:function dS(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hv:function hv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dT:function dT(){},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(){var _=this
_.e=_.d=_.c=_.b=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bK:function bK(){}},E={
l7:function(){var u=new E.an()
u.a=""
u.b=!0
u.seu(0,O.l5(E.an))
u.y.ba(u.giA(),u.giD())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saa(0,null)
u.sb7(null)
u.saQ(null)
return u},
of:function(a,b){var u=new E.i7(a)
u.ep(a,b)
return u},
ol:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibU)return E.mj(a,!0,!0,!0,!1)
u=W.l4()
t=u.style
t.width="100%"
t.height="100%"
s.gc0(a).h(0,u)
return E.mj(u,!0,!0,!0,!1)},
mj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ed(),j=H.h(C.j.cp(a,"webgl2",P.nW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.z(P.B("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.of(j,a)
u=new T.iH(j)
u.b=H.ac(j.getParameter(3379))
H.ac(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ek(a)
t=new X.hf()
t.shf(P.dO(P.l))
u.b=t
t=new X.hN(u)
t.f=0
t.r=V.bF()
t.x=V.bF()
t.ch=t.Q=1
u.c=t
t=new X.hn(u)
t.r=0
t.x=V.bF()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iN(u)
t.f=V.bF()
t.r=V.bF()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf_(H.d([],[[P.cU,P.V]]))
t=u.z
s=document
r=W.af
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.o(u.gfC(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.o(u.gfI(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.o(u.gft(),o),!1,p))
t=u.z
n=W.b4
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.o(u.gfM(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.o(u.gfK(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.o(u.gfQ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.o(u.gfU(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.o(u.gfS(),q),!1,r))
n=u.z
W.lY(a)
m=W.bc;(n&&C.a).h(n,W.a9(a,H.N(W.lY(a)),H.o(u.gfW(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.o(u.gfE(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.o(u.gfG(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.o(u.gfY(),o),!1,p))
p=u.z
o=W.aW
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.o(u.gha(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.o(u.gh6(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.o(u.gh8(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ax(Date.now(),!1)
k.cy=0
k.d3()
return k},
fy:function fy(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ed:function ed(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iJ:function iJ(a){this.a=a}},Z={
ll:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cf(c)),35044)
a.bindBuffer(b,null)
return new Z.en(b,u)},
aH:function(a){return new Z.bM(a)},
en:function en(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jt:function jt(a){this.a=a},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a){this.a=a}},D={
a1:function(){var u=new D.bW()
u.sah(null)
u.saK(null)
u.c=null
u.d=0
return u},
fB:function fB(){},
bW:function bW(){var _=this
_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
D:function D(){this.b=null},
bZ:function bZ(a){this.b=null
this.$ti=a},
c_:function c_(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dC:function dC(){},
ad:function ad(){},
dN:function dN(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e1:function e1(){},
bJ:function bJ(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dx:function dx(a,b){this.a=a
this.b=b},dM:function dM(a,b){this.a=a
this.b=b},hf:function hf(){this.d=this.b=this.a=null},dQ:function dQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},bC:function bC(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hN:function hN(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i2:function i2(){},ef:function ef(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iN:function iN(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ek:function ek(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nN:function(a){var u=new X.h4(),t=new V.b_(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mf
if(t==null){t=V.me(0,0,1,1)
$.mf=t}u.r=t
return u},
dy:function dy(){},
h4:function h4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(){}},V={
pW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.b9(a-b,u)
return(a<0?a+u:a)+b},
S:function(a,b,c){if(a==null)return C.b.ae("null",c)
return C.b.ae(C.e.e6(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ck:function(a,b,c){var u,t,s,r,q,p=H.d([],[P.f])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.u)(a),++s){r=V.S(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.c(p,q)
C.a.k(p,q,C.b.ae(p[q],t))}return p},
lF:function(a){return C.e.j0(Math.pow(2,C.S.ca(Math.log(H.pr(a))/Math.log(2))))},
dV:function(){var u=$.m5
return u==null?$.m5=V.bk(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bk:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.bk(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m3:function(a,b,c,d){return V.bk(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m2:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bk(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bF:function(){var u=$.m9
return u==null?$.m9=new V.ab(0,0):u},
ma:function(){var u=$.bG
return u==null?$.bG=new V.a2(0,0,0):u},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e4(a,b,c,d)},
d2:function(){var u=$.mv
return u==null?$.mv=new V.J(0,0,0):u},
ov:function(){var u=$.je
return u==null?$.je=new V.J(-1,0,0):u},
mw:function(){var u=$.jf
return u==null?$.jf=new V.J(0,1,0):u},
mx:function(){var u=$.jg
return u==null?$.jg=new V.J(0,0,1):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a){this.a=a},
dU:function dU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
ab:function ab(a,b){this.a=a
this.b=b},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.B("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.i6()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.ig()
u.eq(a)
return u},
iM:function(){var u=new V.iL(),t=P.f
u.shC(new H.a0([t,V.cS]))
u.shF(new H.a0([t,V.cY]))
u.c=null
return u},
bf:function bf(){},
ay:function ay(){},
dR:function dR(){},
at:function at(){this.a=null},
i6:function i6(){this.b=this.a=null},
ig:function ig(){this.a=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.b=a
this.c=null},
iL:function iL(){this.c=this.b=this.a=null},
cZ:function cZ(a){this.b=a
this.a=this.c=null},
pQ:function(a){P.om(C.P,new V.kV(a))},
oh:function(a){var u=new V.ik()
u.es(a,!0)
return u},
bt:function bt(){},
kV:function kV(a){this.a=a},
fL:function fL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h5:function h5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i4:function i4(a){this.a=a
this.c=null},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(){this.b=this.a=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
io:function io(a){this.a=a}},U={
lU:function(){var u=new U.fC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dA:function(a){var u=new U.dz()
u.a=a
return u},
l8:function(){var u=new U.cC()
u.by(U.aj)
u.ba(u.gez(),u.gh2())
u.e=null
u.f=V.dV()
u.r=0
return u},
mr:function(a,b){var u,t,s,r=new U.el(),q=U.lU()
q.sec(0,!0)
q.sdJ(6.283185307179586)
q.sdL(0)
q.sa1(0,0)
q.sdK(100)
q.sY(0)
q.sdl(0.5)
r.b=q
u=r.gbc()
q.gw().h(0,u)
q=U.lU()
q.sec(0,!0)
q.sdJ(6.283185307179586)
q.sdL(0)
q.sa1(0,0)
q.sdK(100)
q.sY(0)
q.sdl(0.5)
r.c=q
q.gw().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bB(a,!1,!1)
s=r.d
r.d=t
q=new D.L("modifiers",s,t,[X.bB])
q.b=!0
r.X(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.L("invertX",q,!1,[P.R])
q.b=!0
r.X(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.L("invertY",q,!1,[P.R])
q.b=!0
r.X(q)}r.hX(b)
return r},
fC:function fC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){this.b=this.a=null},
cC:function cC(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
el:function el(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nZ:function(a,b){var u=a.b1,t=new A.hu(b,u)
t.er(b,u)
t.eo(a,b)
return t},
o_:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gam(a0)+a1.gam(a1)+a2.gam(a2)+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.u)(a9),++t)f+="_"+H.i(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.u)(b0),++t)f+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.u)(b1),++t)f+="_"+H.i(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
if(!a6.a)q=!1
else q=!0
if(!q)if(!a7.a)p=!1
else p=!0
else p=!0
if(!a1.a)q=!1
else q=!0
if(!q){if(!a2.a)q=!1
else q=!0
if(!q){if(!a3.a)q=!1
else q=!0
if(!q)if(!a4.a)q=!1
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a4.a
if(q)n=!1
else n=!0
m=n||u>0||p
if(!a2.a)u=!1
else u=!0
if(!u){if(!a3.a)u=!1
else u=!0
if(!u){if(q)u=!1
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a5.a)u=!1
else u=!0
k=u||p}else k=!0
if(!a5.a)j=!1
else j=!0
i=e>0
h=k||j||m||!1
g=$.bp()
if(k){u=$.bo()
g=new Z.bM(g.a|u.a)}if(j){u=$.bn()
g=new Z.bM(g.a|u.a)}if(i){u=$.bm()
g=new Z.bM(g.a|u.a)}return new A.hx(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
kt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ku:function(a,b,c){var u
A.kt(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kY(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
p1:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kt(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
oZ:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.ku(b,t,"ambient")
b.a+="\n"},
p_:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"diffuse")
t=b.a+="\n"
t+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = dot(norm, -litVec);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return diffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p2:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.ku(b,t,"invDiffuse")
t=b.a+="\n"
t+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return invDiffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p8:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.ku(b,t,"specular")
t=b.a+="\n"
t+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=t
t+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return specularColor*pow(scalar, shininess);\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p4:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u+="\n"
b.a=u
u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f.a
if(!t)s=!1
else s=!0
if(!s||t)u=b.a=u+"   return normalize(normalVec);\n"
else{u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=u
u+="   vec3 n = normalize(normalVec);\n"
b.a=u
u+="   vec3 b = normalize(binormalVec);\n"
b.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
b.a=u
u+="   b = cross(n, c);\n"
b.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=u
u+="                   -c.x, -c.y, -c.z,\n"
b.a=u
u+="                    n.x,  n.y,  n.z);\n"
b.a=u
u=b.a=u+"   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n"
b.a=u
b.a=u+"\n"},
p6:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kt(b,t,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = reflectClr;\n"
b.a=t}t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p7:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kt(b,t,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = refractClr;\n"
b.a=t}t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kY(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ag()
u=(u&1)!==0
if(u){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r=c.a=r+"   vec3 objDir;\n"}r+="   vec3 viewDir;\n"
c.a=r
r+="   vec3 color;\n"
c.a=r
r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+l+"];\n"
if(u)for(q=0;q<l;++q)r=c.a+="uniform sampler2D "+t+"sTexture2D"+q+";\n"
r+="\n"
c.a=r
p=u?", sampler2D txt2D":""
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+p+")\n"
c.a=r
c.a=r+"{\n"
r=[P.f]
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(m,"specular(norm, lit.viewDir)")
if(u){r=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
r+="   float tu = dot(offset, lit.objUp);\n"
c.a=r
r+="   float tv = dot(offset, lit.objRight);\n"
c.a=r
r+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=r
r+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=r
c.a=r+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.m(m," + ")+");\n"}else c.a+="   highLight = "+C.a.m(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(u){for(u=r,q=0;q<l;++q){c.a+="   if("+t+"Count <= "+q+") return lightAccum;\n"
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+q+"], "+t+"sTexture2D"+q+");\n"}l=u}else{l=c.a+="   for(int i = 0; i < "+l+"; ++i)\n"
l+="   {\n"
c.a=l
l+="      if(i >= "+t+"Count) break;\n"
c.a=l
l+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=l
l=c.a=l+"   }\n"}l+="   return lightAccum;\n"
c.a=l
l+="}\n"
c.a=l
c.a=l+"\n"},
p5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kY(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 point;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.ag()
q=(u&3)!==0
if(q){r+="   mat3 invViewRotMat;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&4)!==0
if(o){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+j+"];\n"
u=(u&1)!==0
if(u)for(n=0;n<j;++n)r=c.a+="uniform samplerCube "+t+"sTextureCube"+n+";\n"
r+="\n"
c.a=r
m=u?", samplerCube txtCube":""
if(p)m+=", samplerCube shadowCube"
r+="vec3 "+t+"Intensity(vec3 normDir, "+s+" lit"+m+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   float dist = length(objPos - lit.point);\n"
if(o){r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
r+="\n"
c.a=r}if(q)r=c.a=r+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(p){r+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=r
r+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=r
r+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.f]
l=H.d([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.m(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
if(!a.b.a)o=!1
else o=!0
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.m(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.m(l," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(q){for(n=0;n<j;++n){c.a+="   if("+t+"Count <= "+n+") return lightAccum;\n"
m=u?", "+t+"sTextureCube"+n:""
if(p)m+=", "+t+"sShadowCube"+n
r=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+n+"]"+m+");\n"}j=r}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+t+"Count) break;\n"
c.a=j
j+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
p9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kY(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 objPnt;\n"
c.a=r
r+="   vec3 objDir;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.ag()
q=(u&3)!==0
if(q){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r+="   float tuScalar;\n"
c.a=r
r+="   float tvScalar;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&8)!==0
if(o){r+="   float cutoff;\n"
c.a=r
r+="   float coneAngle;\n"
c.a=r}n=(u&4)!==0
if(n){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+g+"];\n"
m=(u&1)!==0
if(m)for(l=0;l<g;++l)r=c.a+=h+t+"sTexture2D"+l+";\n"
if(p)for(l=0;l<g;++l)r=c.a+=h+t+"sShadow2D"+l+";\n"
r+="\n"
c.a=r
k=m?", sampler2D txt2D":""
if(p)k+=", sampler2D shadow2D"
r+="vec3 "+t+"Intensity("+s+" lit"+k+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   vec3 dir = objPos - lit.objPnt;\n"
if((u&6)!==0){u=r+"   float dist = length(dir);\n"
c.a=u}else u=r
if(n){u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u=c.a=u+"\n"}u+="   vec3 normDir = normalize(dir);\n"
c.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=u
u=c.a=u+"   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
if(o){u+="   float angle = acos(zScale);\n"
c.a=u
u+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=u
u+="\n"
c.a=u}if(q){u+="   normDir = normDir / zScale;\n"
c.a=u
u+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=u
u+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=u
u+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=u
u=c.a=u+"\n"}if(p){u+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=u
u+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=u
u+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
c.a=u+"\n"}u=[P.f]
j=H.d([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.m(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
if(!a.b.a)r=!1
else r=!0
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
u+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(q){for(l=0;l<g;++l){c.a+="   if("+t+"Count <= "+l+") return lightAccum;\n"
k=m?", "+t+"sTexture2D"+l:""
if(p)k+=", "+t+"sShadow2D"+l
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+l+"]"+k+");\n"}g=u}else{g=c.a+="   for(int i = 0; i < "+g+"; ++i)\n"
g+="   {\n"
c.a=g
g+="      if(i >= "+t+"Count) break;\n"
c.a=g
g+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=g
g=c.a=g+"   }\n"}g+="   return lightAccum;\n"
c.a=g
g+="}\n"
c.a=g
c.a=g+"\n"},
p3:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.f])
if(!a.b.a)u=!1
else u=!0
if(u)C.a.h(t,"ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pa:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.a5("")
j.a="precision mediump float;\n"
j.a=l
u=a.k3
if(u){j.a=k
t=k}else t=l
if(a.k4){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
j.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k1){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k2?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.dx)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.p1(a,j)
A.oZ(a,j)
A.p_(a,j)
A.p2(a,j)
A.p8(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p6(a,j)
A.p7(a,j)}A.p4(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.a
if(q)r=j.a=r+"uniform float alpha;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!q)p=!1
else p=!0
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p0(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p5(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.p9(a,q[o],j)
A.p3(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.f])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(n,"lightAccum")
if(!a.b.a)u=!1
else u=!0
if(u)j.a+="   setAmbientColor();\n"
if(!a.c.a)u=!1
else u=!0
if(u)j.a+="   setDiffuseColor();\n"
if(!a.d.a)u=!1
else u=!0
if(u)j.a+="   setInvDiffuseColor();\n"
if(!a.e.a)u=!1
else u=!0
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a9(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)C.a.h(n,"emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)C.a.h(n,"reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.m(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pb:function(a,b){var u,t,s
if(!a.rx)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.y2+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k3
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.k4
u=(s?b.a=u+"vec3 bendBinm;\n":u)+"\n"
b.a=u
u+="void adjustBend(float bendVal)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(bendVal >= 0.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=u
u+="      if(index < bendMatCount)\n"
b.a=u
u+="      {\n"
b.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=u
u+="         mat4 m = bendValues[index].mat;\n"
b.a=u
u+="         weightSum += weight;\n"
b.a=u
u=b.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=u}u=(s?b.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
b.a=u
u+="   }\n"
b.a=u
u+="}\n"
b.a=u
u+="\n"
b.a=u
u+="void setupBendData()\n"
b.a=u
u+="{\n"
b.a=u
u=b.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
b.a=u
u+="   adjustBend(bendAttr.x);\n"
b.a=u
u+="   adjustBend(bendAttr.y);\n"
b.a=u
u+="   adjustBend(bendAttr.z);\n"
b.a=u
u+="   adjustBend(bendAttr.w);\n"
b.a=u
u+="   if(weightSum < 1.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      float weight = 1.0 - weightSum;\n"
b.a=u
u=b.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
b.a=u}u=(s?b.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
b.a=u
u+="   else\n"
b.a=u
u+="   {\n"
b.a=u
u+="      bendPos = bendPos/weightSum;\n"
b.a=u
u=b.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
b.a=u
b.a=u+"\n"},
pd:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
pc:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
pf:function(a,b){var u,t
if(!a.r1)return
u=a.ry
if(u)b.a+="uniform mat3 txt2DMat;\n"
t=b.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
b.a=t
t+="\n"
b.a=t
t+="vec2 getTxt2D()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=t+"   return txt2DAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
pg:function(a,b){var u,t
if(!a.r2)return
u=a.x1
if(u)b.a+="uniform mat4 txtCubeMat;\n"
t=b.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
b.a=t
t+="\n"
b.a=t
t+="vec3 getTxtCube()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=t+"   return txtCubeAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
pe:function(a,b){var u
if(!a.k1)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ph:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
kY:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.a9(a,1)},
li:function(a,b,c,d,e){var u=new A.iV(a,c,e)
u.f=d
u.shN(P.nX(d,0,P.l))
return u},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){var _=this
_.je=_.jd=_.dq=_.dn=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jr=_.jq=_.jp=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.jo=_.jn=_.dz=_.jm=_.jl=_.dw=_.dv=_.jk=_.jj=_.du=_.dt=_.ji=_.jh=_.ds=_.jg=_.jf=_.dr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aL:function aL(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=t
_.go=u
_.id=a0
_.k1=a1
_.k2=a2
_.k3=a3
_.k4=a4
_.r1=a5
_.r2=a6
_.rx=a7
_.ry=a8
_.x1=a9
_.x2=b0
_.y1=b1
_.y2=b2
_.b1=b3
_.dn=b4},
c5:function c5(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c6:function c6(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p},
cR:function cR(){},
eg:function eg(){},
j_:function j_(a){this.a=a},
aG:function aG(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lA:function(a,b,c,d){var u=F.lg()
F.dh(u,b,c,d,a,1,0,0,1)
F.dh(u,b,c,d,a,0,1,0,3)
F.dh(u,b,c,d,a,0,0,1,2)
F.dh(u,b,c,d,a,-1,0,0,0)
F.dh(u,b,c,d,a,0,-1,0,0)
F.dh(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
ko:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dh:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.J(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.J(u+a3,t+a1,s+a2)
q=new V.J(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.J(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ko(i)
l=F.ko(j.b)
k=F.lI(d,a0,new F.kn(j,F.ko(j.c),F.ko(j.d),l,m,c),b)
if(k!=null)a.b4(k)},
mV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.lg()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.av])
q=u.a
p=new V.J(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
C.a.h(r,q.hT(new V.bH(a,-1,-1,-1),new V.b_(1,1,1,1),new V.a2(0,0,c),new V.J(0,0,t),new V.ab(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.J(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.em(new V.bH(a,-1,-1,-1),null,new V.b_(i,g,h,1),new V.a2(m*k,l*k,c),new V.J(0,0,t),new V.ab(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.hR(r)
return u},
lB:function(a,b,c,d,e){return F.pv(b,c,1,new F.kz(a,e),d)},
pv:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lI(c,e,new F.kB(d),null)
if(u==null)return
u.at()
u.bV()
if(b)u.b4(F.mV(3,!1,1,new F.kC(d),e))
if(a)u.b4(F.mV(1,!0,-1,new F.kD(d),e))
return u},
pR:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kW()
t=F.lA(a,null,new F.kX(s,1),b)
t.bV()
return t},
n8:function(){return F.mU(15,30,0.5,1,new F.kZ())},
pJ:function(){return F.mU(12,120,0.3,1,new F.kL(3,2))},
mU:function(a,b,c,d,e){var u=F.lI(a,b,new F.kA(e,d,b,c),null)
if(u==null)return
u.at()
u.bV()
return u},
lI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lg()
t=H.d([],[F.av])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.em(g,g,new V.b_(p,0,0,1),g,g,new V.ab(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c2(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.em(g,g,new V.b_(j,i,h,1),g,g,new V.ab(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c2(d))}}u.d.hS(a+1,b+1,t)
return u},
cz:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.z(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.B("May not create a face with vertices attached to different shapes."))
u.bT(a)
u.bU(b)
u.hu(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nT:function(a,b){var u=new F.bj(),t=a.a
if(t==null)H.z(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.B("May not create a line with vertices attached to different shapes."))
u.bT(a)
u.bU(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lg:function(){var u=new F.e6(),t=new F.jh(u)
t.b=!1
t.shO(H.d([],[F.av]))
u.a=t
t=new F.ij(u)
t.sbM(H.d([],[F.bE]))
u.b=t
t=new F.ii(u)
t.sf6(H.d([],[F.bj]))
u.c=t
t=new F.ih(u)
t.sf0(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
em:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.av(),r=new F.jp()
r.sbM(H.d([],[F.bE]))
s.b=r
r=new F.jl()
u=[F.bj]
r.sf7(H.d([],u))
r.sf8(H.d([],u))
s.c=r
r=new F.ji()
u=[F.a8]
r.sf1(H.d([],u))
r.sf2(H.d([],u))
r.sf3(H.d([],u))
s.d=r
h=$.nm()
s.e=0
r=$.bp()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bo().a)!==0?e:t
s.x=(u&$.bn().a)!==0?b:t
s.y=(u&$.bQ().a)!==0?f:t
s.z=(u&$.bR().a)!==0?g:t
s.Q=(u&$.nn().a)!==0?c:t
s.ch=(u&$.cq().a)!==0?i:0
s.cx=(u&$.bm().a)!==0?a:t
return s},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kz:function kz(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kW:function kW(){},
kX:function kX(a,b){this.a=a
this.b=b},
kZ:function kZ(){},
kL:function kL(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(){},
ip:function ip(){},
bj:function bj(){this.b=this.a=null},
hh:function hh(){},
iU:function iU(){},
bE:function bE(){this.a=null},
e6:function e6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
av:function av(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jr:function jr(a){this.a=a},
jq:function jq(a){this.a=a},
jh:function jh(a){this.a=a
this.c=this.b=null},
ji:function ji(){this.d=this.c=this.b=null},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(){this.c=this.b=null},
jn:function jn(){},
jm:function jm(){},
jo:function jo(){},
hV:function hV(){},
jp:function jp(){this.b=null}},T={cX:function cX(){},ec:function ec(){},iG:function iG(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iH:function iH(a){var _=this
_.a=a
_.e=_.d=_.b=null},iI:function iI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
n1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.oh("Test 025"),a=W.l4()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.f]
b.df(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],u))
b.hP(H.d(["shapes"],u))
b.df(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.z(P.B("Failed to find an element with the identifier, testCanvas."))
s=E.ol(t,!0,!0,!0,!1)
r=U.l8()
r.h(0,U.dA(V.m4(0,0,-2.5)))
r.h(0,U.mr(!0,s.r))
q=new V.a7(1,1,1)
p=s.f.iw("../resources/Test.png")
o=new D.bJ()
o.r=new V.a7(1,1,1)
o.ch=1.0471975511965976
o.cx=1
o.dx=o.cy=1.5707963267948966
o.db=!0
o.dy=1
o.fx=o.fr=0
o.fy=!0
o.a=V.ma()
o.b=V.mx()
o.c=V.mw()
o.d=V.ov()
n=o.f
o.f=r
r.gw().h(0,o.gbL())
m=new D.L("mover",n,o.f,[U.aj])
m.b=!0
o.Z(m)
if(!o.r.p(0,q)){n=o.r
o.r=q
m=new D.L("color",n,q,[V.a7])
m.b=!0
o.Z(m)}m=o.x
if(m!==p){if(m!=null)m.gw().K(0,o.gbL())
n=o.x
o.x=p
p.gw().h(0,o.gbL())
p=new D.L("texture",n,o.x,[T.ec])
p.b=!0
o.Z(p)}p=o.ch
if(!(Math.abs(p-0.5)<$.K().a)){o.ch=0.5
m=1/(Math.sqrt(2)*Math.tan(o.ch))
o.z=m
o.Q=m*o.cx
p=new D.L("fov",p,o.ch,[P.t])
p.b=!0
o.Z(p)}p=o.cx
if(!(Math.abs(p-1)<$.K().a)){o.cx=1
m=o.z
if(typeof m!=="number")return m.B()
o.Q=m
p=new D.L("ratio",p,1,[P.t])
p.b=!0
o.Z(p)}p=o.cy
if(!(Math.abs(p-1.5707963267948966)<$.K().a)){o.cy=1.5707963267948966
p=new D.L("cutoff",p,1.5707963267948966,[P.t])
p.b=!0
o.Z(p)}p=o.dx
if(!(Math.abs(p-1.5707963267948966)<$.K().a)){o.dx=1.5707963267948966
p=new D.L("coneAngle",p,1.5707963267948966,[P.t])
p.b=!0
o.Z(p)}p=$.my
if(p==null){p=new V.cb(1,0.00390625,0.0000152587890625,0)
$.my=p
l=p}else l=p
if(!J.P(o.e,l)){n=o.e
o.e=l
p=new D.L("shadowAdjust",n,l,[V.cb])
p.b=!0
o.Z(p)}p=o.dy
if(!(Math.abs(p-0.5)<$.K().a)){o.dy=0.5
p=new D.L("attenuation0",p,0.5,[P.t])
p.b=!0
o.Z(p)}p=o.fr
if(!(Math.abs(p-0.05)<$.K().a)){o.fr=0.05
p=new D.L("attenuation1",p,0.05,[P.t])
p.b=!0
o.Z(p)}p=o.fx
if(!(Math.abs(p-0.05)<$.K().a)){o.fx=0.05
p=new D.L("attenuation2",p,0.05,[P.t])
p.b=!0
o.Z(p)}k=O.m1()
k.dx.h(0,o)
p=k.r
p.saO(0,new V.a7(0.05,0.05,0.05))
p=k.x
p.saO(0,new V.a7(0.7,0.7,0.7))
p=k.z
p.saO(0,new V.a7(0.3,0.3,0.3))
p=k.z
p.d5(new A.am(!0,!1,!1))
p.d6(100)
j=E.l7()
j.saa(0,F.n8())
i=E.l7()
i.saQ(U.dA(V.m3(3,3,3,1)))
p=F.lA(1,c,c,1)
p.c9()
i.saa(0,p)
h=U.l8()
h.h(0,U.mr(!1,s.r))
h.h(0,U.dA(V.m2(3.141592653589793)))
h.h(0,U.dA(V.m4(0,0,5)))
g=E.l7()
p=U.l8()
p.h(0,U.dA(V.m3(0.1,0.1,0.1,1)))
p.h(0,r)
g.saQ(p)
g.saa(0,F.lB(0,!1,!0,40,1))
p=O.m1()
m=p.f
m.saO(0,new V.a7(1,1,1))
g.sb7(p)
p=new M.dF()
p.a=!0
p.seR(0,O.l5(E.an))
p.e.ba(p.gfw(),p.gfA())
p.y=p.x=p.r=p.f=null
f=X.nN(c)
e=new X.e0()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saQ(c)
m=e.c
if(!(Math.abs(m-1.0471975511965976)<$.K().a)){e.c=1.0471975511965976
m=new D.L("fov",m,1.0471975511965976,[P.t])
m.b=!0
e.aI(m)}m=e.d
if(!(Math.abs(m-0.1)<$.K().a)){e.d=0.1
m=new D.L("near",m,0.1,[P.t])
m.b=!0
e.aI(m)}m=e.e
if(!(Math.abs(m-2000)<$.K().a)){e.e=2000
m=new D.L("far",m,2000,[P.t])
m.b=!0
e.aI(m)}m=p.b
if(m!==e){if(m!=null)m.gw().K(0,p.gap())
n=p.b
p.b=e
e.gw().h(0,p.gap())
m=new D.L("camera",n,p.b,[X.dy])
m.b=!0
p.ax(m)}m=p.c
if(m!==f){if(m!=null)m.gw().K(0,p.gap())
n=p.c
p.c=f
f.gw().h(0,p.gap())
m=new D.L("target",n,p.c,[X.ea])
m.b=!0
p.ax(m)}p.sb7(c)
p.sb7(k)
p.e.h(0,j)
p.e.h(0,i)
p.e.h(0,g)
p.b.saQ(h)
m=s.d
if(m!==p){if(m!=null)m.gw().K(0,s.gcz())
s.d=p
p.gw().h(0,s.gcz())
s.cA()}p=new V.i4("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.z("Failed to find shapes for RadioGroup")
p.aZ(0,"Cube",new L.kM(j))
p.aZ(0,"Cylinder",new L.kN(j))
p.aZ(0,"Cone",new L.kO(j))
p.aZ(0,"Sphere",new L.kP(j))
p.dd(0,"Toroid",new L.kQ(j),!0)
p.aZ(0,"Knot",new L.kR(j))
u=s.z
if(u==null)u=s.z=D.a1()
p={func:1,ret:-1,args:[D.D]}
m=H.o(new L.kS(b,k),p)
if(u.b==null)u.saK(H.d([],[p]))
u=u.b;(u&&C.a).h(u,m)
V.pQ(s)},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lc.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.i(H.cP(a))+"'"}}
J.hc.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iR:1}
J.dK.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dL.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.i_.prototype={}
J.ca.prototype={}
J.bA.prototype={
i:function(a){var u=a[$.na()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibx:1}
J.b3.prototype={
h:function(a,b){H.C(b,H.q(a,0))
if(!!a.fixed$length)H.z(P.I("add"))
a.push(b)},
e_:function(a,b){if(!!a.fixed$length)H.z(P.I("removeAt"))
if(b<0||b>=a.length)throw H.e(P.e3(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.z(P.I("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bg(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iu:function(a){return this.m(a,"")},
il:function(a,b,c,d){var u,t,s
H.C(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bg(a))}return t},
ik:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.e(P.bg(a))}throw H.e(H.hb())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
eh:function(a,b,c){if(b<0||b>a.length)throw H.e(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.q(a,0)])
return H.d(a.slice(b,c),[H.q(a,0)])},
gij:function(a){if(a.length>0)return a[0]
throw H.e(H.hb())},
gau:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.hb())},
dg:function(a,b){var u,t
H.o(b,{func:1,ret:P.R,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.bg(a))}return!1},
bw:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.z(P.I("sort"))
H.e7(a,0,a.length-1,b,u)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.l9(a,"[","]")},
gT:function(a){return new J.as(a,a.length,[H.q(a,0)])},
gG:function(a){return H.cO(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.z(P.I("set length"))
if(b<0)throw H.e(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.cj(a,b))
return a[b]},
k:function(a,b,c){H.C(c,H.q(a,0))
if(!!a.immutable$list)H.z(P.I("indexed set"))
if(b>=a.length||b<0)throw H.e(H.cj(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.lb.prototype={}
J.as.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.u(s))
u=t.c
if(u>=r){t.scR(null)
return!1}t.scR(s[u]);++t.c
return!0},
scR:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
J.cF.prototype={
i2:function(a,b){var u
H.n2(b)
if(typeof b!=="number")throw H.e(H.aY(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
j0:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.I(""+a+".toInt()"))},
ca:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.I(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.I(""+a+".round()"))},
e6:function(a,b){var u
if(b>20)throw H.e(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.B("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b9:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d8(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.d8(a,b)},
d8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aM:function(a,b){var u
if(a>0)u=this.d7(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hz:function(a,b){if(b<0)throw H.e(H.aY(b))
return this.d7(a,b)},
d7:function(a,b){return b>31?0:a>>>b},
$it:1,
$iaa:1}
J.dJ.prototype={$il:1}
J.dI.prototype={}
J.bz.prototype={
V:function(a,b){if(b<0)throw H.e(H.cj(a,b))
if(b>=a.length)H.z(H.cj(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.e(H.cj(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.e(P.l2(b,null,null))
return a+b},
aS:function(a,b,c,d){var u,t
c=P.bI(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a6(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.aY(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.e(P.e3(b,null))
if(b>c)throw H.e(P.e3(b,null))
if(c>a.length)throw H.e(P.e3(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.q(a,b,null)},
j3:function(a){return a.toLowerCase()},
B:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.B(" ",u)+a},
bk:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dG:function(a,b){return this.bk(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im7:1,
$if:1}
H.r.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.V(this.a,b)},
$ad1:function(){return[P.l]},
$ax:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fS.prototype={}
H.c0.prototype={
gT:function(a){var u=this
return new H.cG(u,u.gn(u),[H.aq(u,"c0",0)])},
bu:function(a,b){return this.ej(0,H.o(b,{func:1,ret:P.R,args:[H.aq(this,"c0",0)]}))}}
H.cG.prototype={
gI:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.dk(s),q=r.gn(s)
if(t.b!==q)throw H.e(P.bg(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.H(s,u));++t.c
return!0},
saV:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
H.hr.prototype={
gT:function(a){return new H.hs(J.bq(this.a),this.b,this.$ti)},
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ak:function(a,b){return[b]}}
H.hs.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.saV(u.c.$1(t.gI(t)))
return!0}u.saV(null)
return!1},
gI:function(a){return this.a},
saV:function(a){this.a=H.C(a,H.q(this,1))},
$ab2:function(a,b){return[b]}}
H.ht.prototype={
gn:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.fn(this.a,b))},
$ac0:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d3.prototype={
gT:function(a){return new H.ju(J.bq(this.a),this.b,this.$ti)}}
H.ju.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(H.H(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bX.prototype={}
H.d1.prototype={
k:function(a,b,c){H.C(c,H.aq(this,"d1",0))
throw H.e(P.I("Cannot modify an unmodifiable list"))}}
H.ei.prototype={}
H.fE.prototype={
i:function(a){return P.lf(this)},
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
return H.nI()},
$iy:1}
H.fF.prototype={
gn:function(a){return this.a},
bi:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bi(0,b))return
return this.cS(b)},
cS:function(a){return this.b[H.N(a)]},
F:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.C(q.cS(r),p))}}}
H.iR.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.he.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l_.prototype={
$1:function(a){if(!!J.T(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eW.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iau:1}
H.cv.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibx:1,
gj6:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.it.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cp(u)+"'"}}
H.cs.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cs))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cO(this.a)
else u=typeof t!=="object"?J.dq(t):H.cO(t)
return(u^H.cO(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cP(u))+"'")}}
H.iT.prototype={
i:function(a){return this.a}}
H.fA.prototype={
i:function(a){return this.a}}
H.id.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jv.prototype={
i:function(a){return"Assertion failed: "+P.dG(this.a)}}
H.a0.prototype={
gn:function(a){return this.a},
git:function(a){return this.a===0},
ga4:function(a){return new H.hj(this,[H.q(this,0)])},
bi:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cO(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cO(t,b)}else return s.iq(b)},
iq:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cd(u.bF(t,u.cc(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.ir(b)},
ir:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bF(r,s.cc(a))
t=s.cd(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.C(b,H.q(s,0))
H.C(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cE(u==null?s.b=s.bJ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cE(t==null?s.c=s.bJ():t,b,c)}else s.is(b,c)},
is:function(a,b){var u,t,s,r,q=this
H.C(a,H.q(q,0))
H.C(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bJ()
t=q.cc(a)
s=q.bF(u,t)
if(s==null)q.bR(u,t,[q.bK(a,b)])
else{r=q.cd(s,a)
if(r>=0)s[r].b=b
else s.push(q.bK(a,b))}},
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.bg(s))
u=u.c}},
cE:function(a,b,c){var u,t=this
H.C(b,H.q(t,0))
H.C(c,H.q(t,1))
u=t.bd(a,b)
if(u==null)t.bR(a,b,t.bK(b,c))
else u.b=c},
fe:function(){this.r=this.r+1&67108863},
bK:function(a,b){var u,t=this,s=new H.hi(H.C(a,H.q(t,0)),H.C(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fe()
return s},
cc:function(a){return J.dq(a)&0x3ffffff},
cd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.lf(this)},
bd:function(a,b){return a[b]},
bF:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
eW:function(a,b){delete a[b]},
cO:function(a,b){return this.bd(a,b)!=null},
bJ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bR(t,u,t)
this.eW(t,u)
return t}}
H.hi.prototype={}
H.hj.prototype={
gn:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hk(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hk.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scD(null)
return!1}else{u.scD(t.a)
u.c=u.c.c
return!0}}},
scD:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
H.kH.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kI.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kJ.prototype={
$1:function(a){return this.a(H.N(a))},
$S:53}
H.hd.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im7:1,
$iod:1}
H.cK.prototype={$icK:1}
H.bD.prototype={$ibD:1,$ion:1}
H.dW.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cL.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]},
k:function(a,b,c){H.px(c)
H.be(b,a,a.length)
a[b]=c},
$abX:function(){return[P.t]},
$ax:function(){return[P.t]},
$ik:1,
$ak:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dX.prototype={
k:function(a,b,c){H.ac(c)
H.be(b,a,a.length)
a[b]=c},
$abX:function(){return[P.l]},
$ax:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hO.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hP.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hQ.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.dY.prototype={
gn:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$iqh:1}
H.cM.prototype={
gn:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$icM:1,
$iQ:1}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
P.jx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jw.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jy.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f1.prototype={
eF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ci(new P.kd(this,b),0),a)
else throw H.e(P.I("`setTimeout()` not found."))},
eG:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ci(new P.kc(this,a,Date.now(),b),0),a)
else throw H.e(P.I("Periodic timer."))},
$ib9:1}
P.kd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kc.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.en(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bd.prototype={
ix:function(a){if((this.c&15)!==6)return!0
return this.b.b.cn(H.o(this.d,{func:1,ret:P.R,args:[P.V]}),a.a,P.R,P.V)},
io:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fk(u,{func:1,args:[P.V,P.au]}))return H.lC(r.iW(u,a.a,a.b,null,t,P.au),s)
else return H.lC(r.cn(H.o(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aI.prototype={
e5:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pj(b,u)}t=new P.aI($.a_,[c])
s=b==null?1:3
this.cF(new P.bd(t,s,a,b,[r,c]))
return t},
j_:function(a,b){return this.e5(a,null,b)},
cF:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.h(t.c,"$iaI")
s=u.a
if(s<4){u.cF(a)
return}t.a=s
t.c=u.c}P.kx(null,null,t.b,H.o(new P.jI(t,a),{func:1,ret:-1}))}},
d1:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iaI")
u=q.a
if(u<4){q.d1(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
P.kx(null,null,p.b,H.o(new P.jM(o,p),{func:1,ret:-1}))}},
bO:function(){var u=H.h(this.c,"$ibd")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cK:function(a){var u,t,s=this,r=H.q(s,0)
H.lC(a,{futureOr:1,type:r})
u=s.$ti
if(H.lx(a,"$icB",u,"$acB"))if(H.lx(a,"$iaI",u,null))P.mz(a,s)
else P.oA(a,s)
else{t=s.bO()
H.C(a,r)
s.a=4
s.c=a
P.d6(s,t)}},
cL:function(a,b){var u,t=this
H.h(b,"$iau")
u=t.bO()
t.a=8
t.c=new P.al(a,b)
P.d6(t,u)},
$icB:1}
P.jI.prototype={
$0:function(){P.d6(this.a,this.b)},
$S:0}
P.jM.prototype={
$0:function(){P.d6(this.b,this.a.a)},
$S:0}
P.jJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.cK(a)},
$S:18}
P.jK.prototype={
$2:function(a,b){H.h(b,"$iau")
this.a.cL(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jL.prototype={
$0:function(){this.a.cL(this.b,this.c)},
$S:0}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e2(H.o(s.d,{func:1}),null)}catch(r){u=H.ai(r)
t=H.cn(r)
if(o.d){s=H.h(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.T(n).$icB){if(n instanceof P.aI&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j_(new P.jQ(p),null)
s.a=!1}},
$S:3}
P.jQ.prototype={
$1:function(a){return this.a},
$S:46}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.C(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cn(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ai(o)
t=H.cn(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$ial")
r=m.c
if(H.H(r.ix(u))&&r.e!=null){q=m.b
q.b=r.io(u)
q.a=!1}}catch(p){t=H.ai(p)
s=H.cn(p)
r=H.h(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.eo.prototype={}
P.iw.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aI($.a_,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iy(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iz(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iy.prototype={
$1:function(a){H.C(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.q(this.b,0)]}}}
P.iz.prototype={
$0:function(){this.b.cK(this.a.a)},
$S:0}
P.cU.prototype={}
P.ix.prototype={}
P.b9.prototype={}
P.al.prototype={
i:function(a){return H.i(this.a)},
$ibw:1}
P.km.prototype={$iqw:1}
P.kw.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e_():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jW.prototype={
iX:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.ai(s)
t=H.cn(s)
P.kv(r,r,this,u,H.h(t,"$iau"))}},
iY:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.ai(s)
t=H.cn(s)
P.kv(r,r,this,u,H.h(t,"$iau"))}},
hZ:function(a,b){return new P.jY(this,H.o(a,{func:1,ret:b}),b)},
bX:function(a){return new P.jX(this,H.o(a,{func:1,ret:-1}))},
di:function(a,b){return new P.jZ(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
e2:function(a,b){H.o(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cn:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
iW:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.pk(null,null,this,a,b,c,d,e,f)}}
P.jY.prototype={
$0:function(){return this.a.e2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jX.prototype={
$0:function(){return this.a.iX(this.b)},
$S:3}
P.jZ.prototype={
$1:function(a){var u=this.c
return this.a.iY(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jU.prototype={
gT:function(a){var u=this,t=new P.eD(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icc")!=null}else{t=this.eS(b)
return t}},
eS:function(a){var u=this.d
if(u==null)return!1
return this.bD(this.cT(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.C(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cH(u==null?s.b=P.ln():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cH(t==null?s.c=P.ln():t,b)}else return s.eI(0,b)},
eI:function(a,b){var u,t,s,r=this
H.C(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.ln()
t=r.cM(b)
s=u[t]
if(s==null)u[t]=[r.bA(b)]
else{if(r.bD(s,b)>=0)return!1
s.push(r.bA(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hi(this.c,b)
else return this.hh(0,b)},
hh:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cT(r,b)
t=s.bD(u,b)
if(t<0)return!1
s.d9(u.splice(t,1)[0])
return!0},
cH:function(a,b){H.C(b,H.q(this,0))
if(H.h(a[b],"$icc")!=null)return!1
a[b]=this.bA(b)
return!0},
hi:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icc")
if(u==null)return!1
this.d9(u)
delete a[b]
return!0},
cJ:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t=this,s=new P.cc(H.C(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cJ()
return s},
d9:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cJ()},
cM:function(a){return J.dq(a)&1073741823},
cT:function(a,b){return a[this.cM(b)]},
bD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cc.prototype={}
P.eD.prototype={
gI:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bg(t))
else{t=u.c
if(t==null){u.scI(null)
return!1}else{u.scI(H.C(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
scI:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
P.hl.prototype={
$2:function(a,b){this.a.k(0,H.C(a,this.b),H.C(b,this.c))},
$S:5}
P.hm.prototype={$ik:1,$ib:1}
P.x.prototype={
gT:function(a){return new H.cG(a,this.gn(a),[H.cm(this,a,"x",0)])},
H:function(a,b){return this.j(a,b)},
j2:function(a,b){var u,t=this,s=H.d([],[H.cm(t,a,"x",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
j1:function(a){return this.j2(a,!0)},
ih:function(a,b,c,d){var u
H.C(d,H.cm(this,a,"x",0))
P.bI(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l9(a,"[","]")}}
P.ho.prototype={}
P.hp.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.ae.prototype={
F:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cm(s,a,"ae",0),H.cm(s,a,"ae",1)]})
for(u=J.bq(s.ga4(a));u.v();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aB(this.ga4(a))},
i:function(a){return P.lf(a)},
$iy:1}
P.ke.prototype={
k:function(a,b,c){H.C(b,H.q(this,0))
H.C(c,H.q(this,1))
throw H.e(P.I("Cannot modify unmodifiable map"))}}
P.hq.prototype={
j:function(a,b){return J.dp(this.a,b)},
k:function(a,b,c){J.l0(this.a,H.C(b,H.q(this,0)),H.C(c,H.q(this,1)))},
F:function(a,b){J.lM(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aB(this.a)},
i:function(a){return J.ar(this.a)},
$iy:1}
P.ej.prototype={}
P.k0.prototype={
ar:function(a,b){var u
for(u=J.bq(H.m(b,"$ik",this.$ti,"$ak"));u.v();)this.h(0,u.gI(u))},
i:function(a){return P.l9(this,"{","}")},
H:function(a,b){var u,t,s,r=this
P.md(b,"index")
for(u=P.oE(r,r.r,H.q(r,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.e(P.X(b,r,"index",null,t))},
$ik:1,
$img:1}
P.eE.prototype={}
P.f7.prototype={}
P.fw.prototype={
iz:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bI(a0,a1,b.length)
u=$.np()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.C(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kG(C.b.C(b,n))
j=H.kG(C.b.C(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.b.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a5("")
g=r.a+=C.b.q(b,s,t)
r.a=g+H.c2(m)
s=n
continue}}throw H.e(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.q(b,s,a1)
f=g.length
if(q>=0)P.lQ(b,p,a1,q,o,f)
else{e=C.d.b9(f-1,4)+1
if(e===1)throw H.e(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aS(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lQ(b,p,a1,q,o,d)
else{e=C.d.b9(d,4)
if(e===1)throw H.e(P.a4(c,b,a1))
if(e>1)b=C.b.aS(b,a1,a1,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.l],P.f]}}
P.fx.prototype={
$abu:function(){return[[P.b,P.l],P.f]}}
P.bV.prototype={}
P.bu.prototype={}
P.fU.prototype={
$abV:function(){return[P.f,[P.b,P.l]]}}
P.h9.prototype={
i:function(a){return this.a}}
P.h8.prototype={
eT:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.c(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.a5("")
if(r>b)q.a+=C.b.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nA(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abu:function(){return[P.f,P.f]}}
P.jb.prototype={
gig:function(){return C.N}}
P.jd.prototype={
c1:function(a){var u,t,s=P.bI(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kk(u)
if(t.f4(a,0,s)!==s)t.dc(J.nw(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oV(0,t.b,u.length)))},
$abu:function(){return[P.f,[P.b,P.l]]}}
P.kk.prototype={
dc:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.c(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.c(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|a&63
return!1}},
f4:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dc(r,C.b.C(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.jc.prototype={
c1:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.oq(!1,a,0,null)
if(u!=null)return u
t=P.bI(0,null,J.aB(a))
s=P.mN(a,0,t)
if(s>0){r=P.cV(a,0,s)
if(s===t)return r
q=new P.a5(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a5("")
n=new P.kj(!1,q)
n.c=o
n.i3(a,p,t)
if(n.e>0){H.z(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c2(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abu:function(){return[[P.b,P.l],P.f]}}
P.kj.prototype={
i3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dk(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ag()
if((o&192)!==128){n=P.a4(h+C.d.b8(o,16),a,p)
throw H.e(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.c(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.d.b8(u,16),a,p-s-1)
throw H.e(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.d.b8(u,16),a,p-s-1)
throw H.e(n)}if(!i.c||u!==65279)q.a+=H.c2(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cV(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.P()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.d.b8(-o,16),a,k-1)
throw H.e(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.d.b8(o,16),a,k-1)
throw H.e(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.R.prototype={}
P.ax.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.aM(u,30))&1073741823},
i:function(a){var u=this,t=P.nJ(H.o9(u)),s=P.dB(H.o7(u)),r=P.dB(H.o3(u)),q=P.dB(H.o4(u)),p=P.dB(H.o6(u)),o=P.dB(H.o8(u)),n=P.nK(H.o5(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.t.prototype={}
P.bv.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fR(),q=this.a
if(q<0)return"-"+new P.bv(0-q).i(0)
u=r.$1(C.d.a8(q,6e7)%60)
t=r.$1(C.d.a8(q,1e6)%60)
s=new P.fQ().$1(q%1e6)
return""+C.d.a8(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bw.prototype={}
P.fq.prototype={
i:function(a){return"Assertion failed"}}
P.e_.prototype={
i:function(a){return"Throw of null."}}
P.aK.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbC()+o+u
if(!q.a)return t
s=q.gbB()
r=P.dG(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.ha.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t=H.ac(this.b)
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j1.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cT.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fD.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dG(u)+"."}}
P.hZ.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.e8.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fK.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ew.prototype={
i:function(a){return"Exception: "+this.a}}
P.h3.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.C(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.V(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.b.q(f,m,n)
return h+l+j+k+"\n"+C.b.B(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bx.prototype={}
P.l.prototype={}
P.k.prototype={
bu:function(a,b){var u=H.aq(this,"k",0)
return new H.d3(this,H.o(b,{func:1,ret:P.R,args:[u]}),[u])},
gn:function(a){var u,t=this.gT(this)
for(u=0;t.v();)++u
return u},
gaG:function(a){var u,t=this.gT(this)
if(!t.v())throw H.e(H.hb())
u=t.gI(t)
if(t.v())throw H.e(H.nQ())
return u},
H:function(a,b){var u,t,s
P.md(b,"index")
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.e(P.X(b,this,"index",null,t))},
i:function(a){return P.nP(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ik:1}
P.y.prototype={}
P.O.prototype={
gG:function(a){return P.V.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
p:function(a,b){return this===b},
gG:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.i(H.cP(this))+"'"},
toString:function(){return this.i(this)}}
P.au.prototype={}
P.f.prototype={$im7:1}
P.a5.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq5:1}
P.j9.prototype={
$2:function(a,b){var u,t,s,r=P.f
H.m(a,"$iy",[r,r],"$ay")
H.N(b)
u=J.dl(b).dG(b,"=")
if(u===-1){if(b!=="")J.l0(a,P.lr(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.q(b,0,u)
s=C.b.a9(b,u+1)
r=this.a
J.l0(a,P.lr(t,0,t.length,r,!0),P.lr(s,0,s.length,r,!0))}return a},
$S:45}
P.j6.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.j7.prototype={
$2:function(a,b){throw H.e(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.j8.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fm(C.b.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cd.prototype={
geb:function(){return this.b},
gcb:function(a){var u=this.c
if(u==null)return""
if(C.b.a3(u,"["))return C.b.q(u,1,u.length-1)
return u},
gbo:function(a){var u=this.d
if(u==null)return P.mD(this.a)
return u},
gci:function(a){var u=this.f
return u==null?"":u},
gdB:function(){var u=this.r
return u==null?"":u},
e0:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iy",[P.f,null],"$ay")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a3(p,"/"))p="/"+p
n=P.lp(null,0,0,b)
return new P.cd(u,s,q,r,p,n,m.r)},
gcj:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.f
s.shg(new P.ej(P.mq(u==null?"":u),[t,t]))}return s.Q},
gdC:function(){return this.c!=null},
gdF:function(){return this.f!=null},
gdD:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.i(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.i(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.i(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$ilj)if(s.a==b.gbv())if(s.c!=null===b.gdC())if(s.b==b.geb())if(s.gcb(s)==b.gcb(b))if(s.gbo(s)==b.gbo(b))if(s.e===b.gdW(b)){u=s.f
t=u==null
if(!t===b.gdF()){if(t)u=""
if(u===b.gci(b)){u=s.r
t=u==null
if(!t===b.gdD()){if(t)u=""
u=u===b.gdB()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.b.gG(this.i(0)):u},
shg:function(a){var u=P.f
this.Q=H.m(a,"$iy",[u,u],"$ay")},
$ilj:1,
gbv:function(){return this.a},
gdW:function(a){return this.e}}
P.kf.prototype={
$1:function(a){throw H.e(P.a4("Invalid port",this.a,this.b+1))},
$S:41}
P.kg.prototype={
$1:function(a){return P.f8(C.X,a,C.h,!1)},
$S:23}
P.ki.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.f8(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.f8(C.i,b,C.h,!0))}},
$S:24}
P.kh.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.bq(H.n0(b,"$ik")),t=this.a;u.v();)t.$2(a,H.N(u.gI(u)))},
$S:40}
P.j5.prototype={
gea:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.c(o,0)
u=q.a
o=o[0]+1
t=C.b.bk(u,"?",o)
s=u.length
if(t>=0){r=P.dg(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jD("data",p,p,p,P.dg(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.c(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kq.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kp.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.nx(u,0,96,b)
return u},
$S:39}
P.kr.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.C(b,s)^96
if(r>=t)return H.c(a,r)
a[r]=c}}}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.C(b,0),t=C.b.C(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.c(a,r)
a[r]=c}}}
P.k3.prototype={
gdC:function(){return this.c>0},
gdE:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.A()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
gdF:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdD:function(){return this.r<this.a.length},
gcV:function(){return this.b===4&&C.b.a3(this.a,"http")},
gcW:function(){return this.b===5&&C.b.a3(this.a,"https")},
gbv:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcV())q=t.x="http"
else if(t.gcW()){t.x="https"
q="https"}else if(q===4&&C.b.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a3(t.a,r)){t.x=r
q=r}else{q=C.b.q(t.a,0,q)
t.x=q}return q},
geb:function(){var u=this.c,t=this.b+3
return u>t?C.b.q(this.a,t,u-1):""},
gcb:function(a){var u=this.c
return u>0?C.b.q(this.a,u,this.d):""},
gbo:function(a){var u,t=this
if(t.gdE()){u=t.d
if(typeof u!=="number")return u.A()
return P.fm(C.b.q(t.a,u+1,t.e),null,null)}if(t.gcV())return 80
if(t.gcW())return 443
return 0},
gdW:function(a){return C.b.q(this.a,this.e,this.f)},
gci:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.b.q(this.a,u+1,t):""},
gdB:function(){var u=this.r,t=this.a
return u<t.length?C.b.a9(t,u+1):""},
gcj:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.Y
t=P.f
return new P.ej(P.mq(u.gci(u)),[t,t])},
e0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iy",[P.f,null],"$ay")
u=k.gbv()
t=u==="file"
s=k.c
r=s>0?C.b.q(k.a,k.b+3,s):""
q=k.gdE()?k.gbo(k):j
s=k.c
if(s>0)p=C.b.q(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.q(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a3(o,"/"))o="/"+o
m=P.lp(j,0,0,b)
n=k.r
l=n<s.length?C.b.a9(s,n+1):j
return new P.cd(u,r,p,q,o,m,l)},
gG:function(a){var u=this.y
return u==null?this.y=C.b.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$ilj&&this.a===b.i(0)},
i:function(a){return this.a},
$ilj:1}
P.jD.prototype={}
W.w.prototype={}
W.fo.prototype={
gn:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.cr.prototype={$icr:1}
W.bT.prototype={$ibT:1}
W.br.prototype={$ibr:1}
W.bU.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.ps(c))
return a.getContext(b)},
ee:function(a,b){return this.cp(a,b,null)},
$ibU:1}
W.cu.prototype={$icu:1}
W.bs.prototype={
gn:function(a){return a.length}}
W.cw.prototype={$icw:1}
W.fG.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cx.prototype={
gn:function(a){return a.length}}
W.fH.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fI.prototype={
gn:function(a){return a.length}}
W.fJ.prototype={
gn:function(a){return a.length}}
W.fM.prototype={
gn:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.fN.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iak",[P.aa],"$aak")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ak,P.aa]]},
$ax:function(){return[[P.ak,P.aa]]},
$ik:1,
$ak:function(){return[[P.ak,P.aa]]},
$ib:1,
$ab:function(){return[[P.ak,P.aa]]},
$aG:function(){return[[P.ak,P.aa]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaF(a))+" x "+H.i(this.gaC(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&this.gaF(a)===u.gaF(b)&&this.gaC(a)===u.gaC(b)},
gG:function(a){return W.mB(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(this.gaF(a)),C.e.gG(this.gaC(a)))},
gdj:function(a){return a.bottom},
gaC:function(a){return a.height},
gbm:function(a){return a.left},
gcm:function(a){return a.right},
gbq:function(a){return a.top},
gaF:function(a){return a.width},
$iak:1,
$aak:function(){return[P.aa]}}
W.fO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.f]},
$ax:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
W.fP.prototype={
gn:function(a){return a.length}}
W.jB.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.h(u[b],"$iU")},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.j1(this)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
ghY:function(a){return new W.jE(a)},
gc0:function(a){return new W.jB(a,a.children)},
gdk:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lX
if(u==null){u=H.d([],[W.az])
t=new W.dZ(u)
C.a.h(u,W.mA(null))
C.a.h(u,W.mC())
$.lX=t
d=t}else d=u
u=$.lW
if(u==null){u=new W.f9(d)
$.lW=u
c=u}else{u.a=d
c=u}}if($.bh==null){u=document
t=u.implementation.createHTMLDocument("")
$.bh=t
$.l6=t.createRange()
t=$.bh.createElement("base")
H.h(t,"$icr")
t.href=u.baseURI
$.bh.head.appendChild(t)}u=$.bh
if(u.body==null){t=u.createElement("body")
u.body=H.h(t,"$ibr")}u=$.bh
if(!!this.$ibr)s=u.body
else{s=u.createElement(a.tagName)
$.bh.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.S(C.V,a.tagName)){$.l6.selectNodeContents(s)
r=$.l6.createContextualFragment(b)}else{s.innerHTML=b
r=$.bh.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bh.body
if(s==null?u!=null:s!==u)J.lO(s)
c.cq(r)
document.adoptNode(r)
return r},
i6:function(a,b,c){return this.ac(a,b,c,null)},
eg:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iU:1,
ge3:function(a){return a.tagName}}
W.fT.prototype={
$1:function(a){return!!J.T(H.h(a,"$iE")).$iU},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
hQ:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.eJ(a,b,c,!1)},
eJ:function(a,b,c,d){return a.addEventListener(b,H.ci(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aD.prototype={$iaD:1}
W.cA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaD")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$icA:1,
$aG:function(){return[W.aD]}}
W.fZ.prototype={
gn:function(a){return a.length}}
W.h2.prototype={
gn:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h7.prototype={
gn:function(a){return a.length}}
W.bY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibY:1,
$aG:function(){return[W.E]}}
W.bi.prototype={$ibi:1,
gdm:function(a){return a.data}}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.b4.prototype={$ib4:1}
W.dP.prototype={
i:function(a){return String(a)},
$idP:1}
W.hH.prototype={
gn:function(a){return a.length}}
W.cI.prototype={$icI:1}
W.hI.prototype={
j:function(a,b){return P.bl(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hK.prototype={
j:function(a,b){return P.bl(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.hL(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aN.prototype={$iaN:1}
W.hM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaN")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aN]},
$ax:function(){return[W.aN]},
$ik:1,
$ak:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aG:function(){return[W.aN]}}
W.af.prototype={$iaf:1}
W.ap.prototype={
gaG:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.mh("No elements"))
if(t>1)throw H.e(P.mh("More than one element"))
return u.firstChild},
ar:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.E],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.h(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dH(u,u.length,[H.cm(C.Z,u,"G",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ax:function(){return[W.E]},
$ak:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
iQ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
iU:function(a,b){var u,t
try{u=a.parentNode
J.nu(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ei(a):u},
hV:function(a,b){return a.appendChild(H.h(b,"$iE"))},
hl:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.cN.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.aO.prototype={$iaO:1,
gn:function(a){return a.length}}
W.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaO")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$ik:1,
$ak:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aG:function(){return[W.aO]}}
W.ib.prototype={
j:function(a,b){return P.bl(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.ic(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
W.ic.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ie.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.iq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaQ")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aG:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.ir.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaR")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aG:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gn:function(a){return a.length}}
W.iu.prototype={
j:function(a,b){return a.getItem(H.N(b))},
k:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new W.iv(u))
return u},
gn:function(a){return a.length},
$aae:function(){return[P.f,P.f]},
$iy:1,
$ay:function(){return[P.f,P.f]}}
W.iv.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aE.prototype={$iaE:1}
W.b8.prototype={$ib8:1}
W.e9.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=W.nL("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).ar(0,new W.ap(u))
return t}}
W.iB.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaG(u)
s.toString
u=new W.ap(s)
r=u.gaG(u)
t.toString
r.toString
new W.ap(t).ar(0,new W.ap(r))
return t}}
W.iC.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaG(u)
t.toString
s.toString
new W.ap(t).ar(0,new W.ap(s))
return t}}
W.cW.prototype={$icW:1}
W.aU.prototype={$iaU:1}
W.aF.prototype={$iaF:1}
W.iE.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaF")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aG:function(){return[W.aF]}}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaU")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aG:function(){return[W.aU]}}
W.iK.prototype={
gn:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.aW.prototype={$iaW:1}
W.iO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaV")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aG:function(){return[W.aV]}}
W.iP.prototype={
gn:function(a){return a.length}}
W.bL.prototype={}
W.ja.prototype={
i:function(a){return String(a)}}
W.js.prototype={
gn:function(a){return a.length}}
W.bc.prototype={
gi9:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.I("deltaY is not supported"))},
gi8:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.I("deltaX is not supported"))},
$ibc:1}
W.d4.prototype={
hm:function(a,b){return a.requestAnimationFrame(H.ci(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
eZ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d5.prototype={$id5:1}
W.jC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iW")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ax:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aG:function(){return[W.W]}}
W.er.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iak)return!1
return a.left===u.gbm(b)&&a.top===u.gbq(b)&&a.width===u.gaF(b)&&a.height===u.gaC(b)},
gG:function(a){return W.mB(C.e.gG(a.left),C.e.gG(a.top),C.e.gG(a.width),C.e.gG(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.jR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaM")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$ax:function(){return[W.aM]},
$ik:1,
$ak:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aG:function(){return[W.aM]}}
W.eJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.E]},
$ax:function(){return[W.E]},
$ik:1,
$ak:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aG:function(){return[W.E]}}
W.k4.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaS")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ik:1,
$ak:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aG:function(){return[W.aS]}}
W.k8.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.h(c,"$iaE")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ik:1,
$ak:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aG:function(){return[W.aE]}}
W.jA.prototype={
F:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.h(r[t],"$id5")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aae:function(){return[P.f,P.f]},
$ay:function(){return[P.f,P.f]}}
W.jE.prototype={
j:function(a,b){return this.a.getAttribute(H.N(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga4(this).length}}
W.jF.prototype={}
W.lm.prototype={}
W.jG.prototype={}
W.jH.prototype={
$1:function(a){return this.a.$1(H.h(a,"$in"))},
$S:37}
W.bN.prototype={
ev:function(a){var u
if($.d7.git($.d7)){for(u=0;u<262;++u)$.d7.k(0,C.U[u],W.pC())
for(u=0;u<12;++u)$.d7.k(0,C.q[u],W.pD())}},
aN:function(a){return $.nq().S(0,W.cy(a))},
as:function(a,b,c){var u=$.d7.j(0,H.i(W.cy(a))+"::"+b)
if(u==null)u=$.d7.j(0,"*::"+b)
if(u==null)return!1
return H.lw(u.$4(a,b,c,this))},
$iaz:1}
W.G.prototype={
gT:function(a){return new W.dH(a,this.gn(a),[H.cm(this,a,"G",0)])}}
W.dZ.prototype={
aN:function(a){return C.a.dg(this.a,new W.hU(a))},
as:function(a,b,c){return C.a.dg(this.a,new W.hT(a,b,c))},
$iaz:1}
W.hU.prototype={
$1:function(a){return H.h(a,"$iaz").aN(this.a)},
$S:29}
W.hT.prototype={
$1:function(a){return H.h(a,"$iaz").as(this.a,this.b,this.c)},
$S:29}
W.eR.prototype={
eC:function(a,b,c,d){var u,t,s
this.a.ar(0,c)
u=b.bu(0,new W.k1())
t=b.bu(0,new W.k2())
this.b.ar(0,u)
s=this.c
s.ar(0,C.x)
s.ar(0,t)},
aN:function(a){return this.a.S(0,W.cy(a))},
as:function(a,b,c){var u=this,t=W.cy(a),s=u.c
if(s.S(0,H.i(t)+"::"+b))return u.d.hU(c)
else if(s.S(0,"*::"+b))return u.d.hU(c)
else{s=u.b
if(s.S(0,H.i(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.i(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaz:1}
W.k1.prototype={
$1:function(a){return!C.a.S(C.q,H.N(a))},
$S:30}
W.k2.prototype={
$1:function(a){return C.a.S(C.q,H.N(a))},
$S:30}
W.ka.prototype={
as:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.kb.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.N(a))},
$S:23}
W.k9.prototype={
aN:function(a){var u=J.T(a)
if(!!u.$icQ)return!1
u=!!u.$ip
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.b.a3(b,"on"))return!1
return this.aN(a)},
$iaz:1}
W.dH.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scU(J.dp(u.a,t))
u.c=t
return!0}u.scU(null)
u.c=s
return!1},
gI:function(a){return this.d},
scU:function(a){this.d=H.C(a,H.q(this,0))},
$ib2:1}
W.az.prototype={}
W.k_.prototype={$iqi:1}
W.f9.prototype={
cq:function(a){new W.kl(this).$2(a,null)},
aY:function(a,b){if(b==null)J.lO(a)
else b.removeChild(a)},
hr:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ny(a)
n=o.a.getAttribute("is")
H.h(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.H(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.ar(a)}catch(r){H.ai(r)}try{s=W.cy(a)
this.hq(H.h(a,"$iU"),b,p,t,s,H.h(o,"$iy"),H.N(n))}catch(r){if(H.ai(r) instanceof P.aK)throw r
else{this.aY(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hq:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aY(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aN(a)){o.aY(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.as(a,"is",g)){o.aY(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.d(u.slice(0),[H.q(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.nB(r)
H.N(r)
if(!q.as(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$icW)o.cq(a.content)},
$iq2:1}
W.kl.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hr(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aY(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=H.h(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iE")}},
$S:35}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.de.prototype={}
W.df.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
P.k5.prototype={
dA:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
co:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iax)return new Date(a.a)
if(!!u.$iod)throw H.e(P.j2("structured clone of RegExp"))
if(!!u.$iaD)return a
if(!!u.$ibT)return a
if(!!u.$icA)return a
if(!!u.$ibi)return a
if(!!u.$icK||!!u.$ibD||!!u.$icI)return a
if(!!u.$iy){t=q.dA(a)
s=q.b
if(t>=s.length)return H.c(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.F(a,new P.k7(p,q))
return p.a}if(!!u.$ib){t=q.dA(a)
p=q.b
if(t>=p.length)return H.c(p,t)
r=p[t]
if(r!=null)return r
return q.i5(a,t)}throw H.e(P.j2("structured clone of other type"))},
i5:function(a,b){var u,t=J.dk(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.co(t.j(a,u)))
return r}}
P.k7.prototype={
$2:function(a,b){this.a.a[a]=this.b.co(b)},
$S:5}
P.f6.prototype={$ibi:1,
gdm:function(a){return this.a}}
P.ky.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k6.prototype={}
P.h_.prototype={
gbe:function(){var u=this.b,t=H.aq(u,"x",0),s=W.U
return new H.hr(new H.d3(u,H.o(new P.h0(),{func:1,ret:P.R,args:[t]}),[t]),H.o(new P.h1(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.h(c,"$iU")
u=this.gbe()
J.nz(u.b.$1(J.fn(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aB(this.gbe().a)},
j:function(a,b){var u=this.gbe()
return u.b.$1(J.fn(u.a,b))},
gT:function(a){var u=P.m0(this.gbe(),!1,W.U)
return new J.as(u,u.length,[H.q(u,0)])},
$ax:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h0.prototype={
$1:function(a){return!!J.T(H.h(a,"$iE")).$iU},
$S:27}
P.h1.prototype={
$1:function(a){return H.A(H.h(a,"$iE"),"$iU")},
$S:34}
P.jV.prototype={
gcm:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
gdj:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.C(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iak){t=p.a
if(t==u.gbm(b)){s=p.b
if(s==u.gbq(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.F(r)
q=H.q(p,0)
if(H.C(t+r,q)===u.gcm(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.F(t)
u=H.C(s+t,q)===u.gdj(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.dq(s),q=t.b,p=J.dq(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.F(o)
u=H.q(t,0)
o=C.d.gG(H.C(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.F(s)
u=C.d.gG(H.C(q+s,u))
return P.oD(P.jT(P.jT(P.jT(P.jT(0,r),p),o),u))}}
P.ak.prototype={
gbm:function(a){return this.a},
gbq:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hg.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib5")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b5]},
$ik:1,
$ak:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aG:function(){return[P.b5]}}
P.b7.prototype={$ib7:1}
P.hX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$ib7")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$ik:1,
$ak:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aG:function(){return[P.b7]}}
P.i3.prototype={
gn:function(a){return a.length}}
P.cQ.prototype={$icQ:1}
P.iA.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.N(c)
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.f]},
$ik:1,
$ak:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aG:function(){return[P.f]}}
P.p.prototype={
gc0:function(a){return new P.h_(a,new W.ap(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.az])
C.a.h(p,W.mA(null))
C.a.h(p,W.mC())
C.a.h(p,new W.k9())
c=new W.f9(new W.dZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).i6(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaG(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.ba.prototype={$iba:1}
P.iQ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.h(c,"$iba")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[P.ba]},
$ik:1,
$ak:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aG:function(){return[P.ba]}}
P.eB.prototype={}
P.eC.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.Q.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ion:1}
P.fs.prototype={
gn:function(a){return a.length}}
P.ft.prototype={
j:function(a,b){return P.bl(a.get(H.N(b)))},
F:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga4:function(a){var u=H.d([],[P.f])
this.F(a,new P.fu(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.e(P.I("Not supported"))},
$aae:function(){return[P.f,null]},
$iy:1,
$ay:function(){return[P.f,null]}}
P.fu.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fv.prototype={
gn:function(a){return a.length}}
P.bS.prototype={}
P.hY.prototype={
gn:function(a){return a.length}}
P.ep.prototype={}
P.du.prototype={$idu:1}
P.e2.prototype={$ie2:1}
P.c4.prototype={
iZ:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibi)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pt(g))
return}if(!!t.$icD)t=!0
else t=!1
if(t){this.hE(a,b,c,d,e,f,g)
return}throw H.e(P.ds("Incorrect number or type of arguments"))},
hE:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a5:function(a,b,c){return a.uniform1f(b,c)},
bt:function(a,b,c){return a.uniform1i(b,c)},
U:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
j5:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
e8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e9:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.e5.prototype={$ie5:1}
P.eb.prototype={$ieb:1}
P.eh.prototype={$ieh:1}
P.is.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.X(b,a,null,null,null))
return P.bl(a.item(b))},
k:function(a,b,c){H.h(c,"$iy")
throw H.e(P.I("Cannot assign element of immutable List."))},
H:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.y,,,]]},
$ik:1,
$ak:function(){return[[P.y,,,]]},
$ib:1,
$ab:function(){return[[P.y,,,]]},
$aG:function(){return[[P.y,,,]]}}
P.eU.prototype={}
P.eV.prototype={}
O.a3.prototype={
by:function(a){var u=this
u.sf9(H.d([],[a]))
u.sd_(null)
u.scX(null)
u.sd0(null)},
cr:function(a,b,c){var u=this,t=H.aq(u,"a3",0)
H.o(b,{func:1,ret:P.R,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sd_(b)
u.scX(a)
u.sd0(c)},
ba:function(a,b){return this.cr(a,null,b)},
h_:function(a){var u
H.m(a,"$ik",[H.aq(this,"a3",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fl:function(a,b){var u
H.m(b,"$ik",[H.aq(this,"a3",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.as(u,u.length,[H.q(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a3",0)
H.C(b,r)
r=[r]
if(H.H(s.h_(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fl(t,H.d([b],r))}},
sf9:function(a){this.a=H.m(a,"$ib",[H.aq(this,"a3",0)],"$ab")},
sd_:function(a){this.b=H.o(a,{func:1,ret:P.R,args:[[P.k,H.aq(this,"a3",0)]]})},
scX:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a3",0)]]})},
sd0:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.aq(this,"a3",0)]]})},
$ik:1}
O.cH.prototype={
gn:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.a1():u},
aH:function(){var u=this.b
if(u!=null)u.J(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gau(u)
else return V.dV()},
dY:function(a){var u=this.a
if(a==null)C.a.h(u,V.dV())
else C.a.h(u,a)
this.aH()},
cg:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbH:function(a){this.a=H.m(a,"$ib",[V.ao],"$ab")}}
E.fy.prototype={}
E.an.prototype={
cG:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();){t=u.d
if(t.f==null)t.cG()}},
saa:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().K(0,s.gdR())
u=s.c
if(u!=null)u.gw().h(0,s.gdR())
t=new D.L("shape",r,s.c,[F.e6])
t.b=!0
s.aj(t)}},
sb7:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gw().K(0,s.gdT())
u=s.f
s.f=a
if(a!=null)a.gw().h(0,s.gdT())
s.cG()
t=new D.L("technique",u,s.f,[O.bK])
t.b=!0
s.aj(t)}},
saQ:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gw().K(0,s.gdP())
if(a!=null)a.gw().h(0,s.gdP())
s.r=a
t=new D.L("mover",u,a,[U.aj])
t.b=!0
s.aj(t)}},
aw:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aU(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.ao])
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.aw(0,b)
for(r=s.y.a,r=new J.as(r,r.length,[H.q(r,0)]);r.v();)r.d.aw(0,b)},
aR:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga2(s))
else C.a.h(s.a,r.B(0,s.ga2(s)))
s.aH()
a.dZ(t.f)
s=a.dy
u=(s&&C.a).gau(s)
if(u!=null&&t.d!=null)u.iT(a,t)
for(s=t.y.a,s=new J.as(s,s.length,[H.q(s,0)]);s.v();)s.d.aR(a)
a.dX()
a.dx.cg()},
aj:function(a){var u=this.z
if(u!=null)u.J(a)},
a_:function(){return this.aj(null)},
dS:function(a){H.h(a,"$iD")
this.e=null
this.aj(a)},
iG:function(){return this.dS(null)},
dU:function(a){this.aj(H.h(a,"$iD"))},
iH:function(){return this.dU(null)},
dQ:function(a){this.aj(H.h(a,"$iD"))},
iF:function(){return this.dQ(null)},
dO:function(a){this.aj(H.h(a,"$iD"))},
iC:function(){return this.dO(null)},
iB:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.an],"$ak")
for(u=b.length,t=this.gdN(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.sah(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iE:function(a,b){var u,t
H.m(b,"$ik",[E.an],"$ak")
for(u=b.gT(b),t=this.gdN();u.v();)u.gI(u).gw().K(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seu:function(a,b){this.y=H.m(b,"$ia3",[E.an],"$aa3")},
$icJ:1}
E.i7.prototype={
ep:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ax(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.ao]
u.sbH(H.d([],t))
u.b=null
u.gw().h(0,new E.i8(s))
s.cy=u
u=new O.cH()
u.sbH(H.d([],t))
u.b=null
u.gw().h(0,new E.i9(s))
s.db=u
u=new O.cH()
u.sbH(H.d([],t))
u.b=null
u.gw().h(0,new E.ia(s))
s.dx=u
s.shD(H.d([],[O.bK]))
u=s.dy;(u&&C.a).h(u,null)
s.shy(new H.a0([P.f,A.cR]))},
giP:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.B(0,u.ga2(u))
s=u}return s},
dZ:function(a){var u=this.dy,t=a==null?(u&&C.a).gau(u):a;(u&&C.a).h(u,t)},
dX:function(){var u=this.dy
if(u.length>1)u.pop()},
shD:function(a){this.dy=H.m(a,"$ib",[O.bK],"$ab")},
shy:function(a){this.fr=H.m(a,"$iy",[P.f,A.cR],"$ay")}}
E.i8.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:10}
E.i9.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ia.prototype={
$1:function(a){var u
H.h(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ed.prototype={
cB:function(a){H.h(a,"$iD")
this.e1()},
cA:function(){return this.cB(null)},
gim:function(){var u,t=this,s=Date.now(),r=C.d.a8(P.lV(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ax(s,!1)
return u/r},
d3:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.B()
if(typeof r!=="number")return H.F(r)
u=C.e.ca(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.B()
t=C.e.ca(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mk(C.o,s.giV())}},
e1:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iJ(this),{func:1,ret:-1,args:[P.aa]})
C.E.eZ(u)
C.E.hm(u,W.mQ(t,P.aa))}},
iS:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d3()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ax(r,!1)
s.y=P.lV(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aH()
r=s.db
C.a.sn(r.a,0)
r.aH()
r=s.dx
C.a.sn(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aR(p.e)}s=p.z
if(s!=null)s.J(null)}catch(q){u=H.ai(q)
t=H.cn(q)
P.lG("Error: "+H.i(u))
P.lG("Stack: "+H.i(t))
throw H.e(u)}}}
E.iJ.prototype={
$1:function(a){var u
H.n2(a)
u=this.a
if(u.ch){u.ch=!1
u.iS()}},
$S:57}
Z.en.prototype={$ipX:1}
Z.dv.prototype={
bW:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.B('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.jt.prototype={$ipY:1}
Z.dw.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bW:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bW(a)},
j4:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aR:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sf5:function(a){this.b=H.m(a,"$ib",[Z.by],"$ab")},
$iq6:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cP(this.c))+"'")+"]"}}
Z.bM.prototype={
gct:function(a){var u=this.a,t=(u&$.bp().a)!==0?3:0
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.bQ().a)!==0)t+=2
if((u&$.bR().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cq().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
hW:function(a){var u,t=$.bp(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0)if(u===a)return t
return $.no()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bM))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.f]),t=this.a
if((t&$.bp().a)!==0)C.a.h(u,"Pos")
if((t&$.bo().a)!==0)C.a.h(u,"Norm")
if((t&$.bn().a)!==0)C.a.h(u,"Binm")
if((t&$.bQ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bR().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cq().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fB.prototype={}
D.bW.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.o(b,u)
if(this.a==null)this.sah(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.S(u,b)
if(u===!0){u=s.b
t=(u&&C.a).K(u,b)||t}return t},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.D()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.m0(u,!0,{func:1,ret:-1,args:[D.D]}),new D.fW(q))
u=r.b
if(u!=null){r.saK(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.F(u,new D.fX(q))}return!0},
ic:function(){return this.J(null)},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}},
sah:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saK:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.fW.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.fX.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.D.prototype={}
D.bZ.prototype={}
D.c_.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dx.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hf.prototype={
iM:function(a){this.d.h(0,a.a)
return!1},
iI:function(a){this.d.K(0,a.a)
return!1},
shf:function(a){this.d=H.m(a,"$img",[P.l],"$amg")}}
X.dQ.prototype={}
X.hn.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.B()
u=b.b
t=q.ch
if(typeof u!=="number")return u.B()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gbh()
r=new X.bC(a,V.bF(),q.x,t,s)
r.b=!0
q.z=new P.ax(p,!1)
q.x=s
return r},
cf:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ef()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aW(a,b))
return!0},
iN:function(a){return!1},
fP:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dQ(c,r.a.gbh(),b)
s.b=!0
t.J(s)
r.y=new P.ax(u,!1)
r.x=V.bF()}}
X.bB.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bB))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bC.prototype={}
X.hN.prototype={
bE:function(a,b,c){var u=this,t=new P.ax(Date.now(),!1),s=u.a.gbh(),r=new X.bC(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cf:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bE(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ef()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bE(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bE(a,b,!1))
return!0},
iO:function(a,b){return!1}}
X.i2.prototype={}
X.ef.prototype={}
X.iN.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ab],"$ab")
u=new P.ax(Date.now(),!1)
t=a.length>0?a[0]:V.bF()
s=q.a.gbh()
r=new X.ef(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iL:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.b
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
iJ:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.c
if(u==null)return!1
u.J(this.aW(a,!0))
return!0},
iK:function(a){var u
H.m(a,"$ib",[V.ab],"$ab")
u=this.d
if(u==null)return!1
u.J(this.aW(a,!1))
return!0}}
X.ek.prototype={
gbh:function(){var u=this.a,t=C.j.gdk(u).c
t.toString
u=C.j.gdk(u).d
u.toString
return V.me(0,0,t,u)},
cP:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dM(u,new X.bB(t,a.altKey,a.shiftKey))},
aL:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
bS:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.O()
u=t.top
if(typeof r!=="number")return r.O()
return new V.ab(s-q,r-u)},
aX:function(a){return new V.a6(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.e.al(r.pageX)
C.e.al(r.pageY)
p=o.left
C.e.al(r.pageX)
C.a.h(n,new V.ab(q-p,C.e.al(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dx(u,new X.bB(t,a.altKey,a.shiftKey))},
bI:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.O()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.O()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fJ:function(a){this.f=!0},
fu:function(a){this.f=!1},
fD:function(a){H.h(a,"$iaf")
if(H.H(this.f)&&this.bI(a))a.preventDefault()},
fN:function(a){var u
H.h(a,"$ib4")
if(!H.H(this.f))return
u=this.cP(a)
this.b.iM(u)},
fL:function(a){var u
H.h(a,"$ib4")
if(!H.H(this.f))return
u=this.cP(a)
this.b.iI(u)},
fR:function(a){var u,t,s,r,q=this
H.h(a,"$iaf")
u=q.a
u.focus()
q.f=!0
q.aL(a)
if(H.H(q.x)){t=q.ay(a)
s=q.aX(a)
if(q.d.cf(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ay(a)
r=q.aA(a)
if(q.c.cf(t,r))a.preventDefault()},
fV:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aL(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()},
fH:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bI(a)){r.aL(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b6(u,s))a.preventDefault()}},
fT:function(a){var u,t,s,r=this
H.h(a,"$iaf")
r.aL(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()},
fF:function(a){var u,t,s,r=this
H.h(a,"$iaf")
if(!r.bI(a)){r.aL(a)
u=r.ay(a)
if(H.H(r.x)){t=r.aX(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aA(a)
if(r.c.b5(u,s))a.preventDefault()}},
fX:function(a){var u,t,s=this
H.h(a,"$ibc")
s.aL(a)
u=new V.a6((a&&C.D).gi8(a),C.D.gi9(a)).t(0,180)
if(H.H(s.x)){if(s.d.iN(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aA(a)
if(s.c.iO(u,t))a.preventDefault()},
fZ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fP(u,t,r)}},
hb:function(a){var u,t=this
H.h(a,"$iaW")
t.a.focus()
t.f=!0
t.bS(a)
u=t.bN(a)
if(t.e.iL(u))a.preventDefault()},
h7:function(a){var u
H.h(a,"$iaW")
this.bS(a)
u=this.bN(a)
if(this.e.iJ(u))a.preventDefault()},
h9:function(a){var u
H.h(a,"$iaW")
this.bS(a)
u=this.bN(a)
if(this.e.iK(u))a.preventDefault()},
sf_:function(a){this.z=H.m(a,"$ib",[[P.cU,P.V]],"$ab")}}
D.dC.prototype={$iad:1,$icJ:1}
D.ad.prototype={$icJ:1}
D.dN.prototype={
Z:function(a){var u=this.x
if(u!=null)u.J(a)},
cZ:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
fO:function(){return this.cZ(null)},
h1:function(a){var u,t,s
H.m(a,"$ik",[D.ad],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.ew(s))return!1}return!0},
fn:function(a,b){var u,t,s,r,q,p,o,n=D.ad
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gcY(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.h(b[q],"$iad")
if(p instanceof D.bJ)C.a.h(this.r,p)
o=p.go
if(o==null){o=new D.bW()
o.sah(null)
o.saK(null)
o.c=null
o.d=0
p.go=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bZ([n])
n.b=!0
this.Z(n)},
h5:function(a,b){var u,t,s,r=D.ad
H.m(b,"$ik",[r],"$ak")
for(u=b.gT(b),t=this.gcY();u.v();){s=u.gI(u)
C.a.K(this.e,s)
s.gw().K(0,t)}r=new D.c_([r])
r.b=!0
this.Z(r)},
ew:function(a){var u=C.a.S(this.r,a)
return u},
sex:function(a){this.e=H.m(a,"$ib",[D.dC],"$ab")},
shc:function(a){this.f=H.m(a,"$ib",[D.e1],"$ab")},
sey:function(a){this.r=H.m(a,"$ib",[D.bJ],"$ab")},
$ak:function(){return[D.ad]},
$aa3:function(){return[D.ad]}}
D.e1.prototype={$iad:1,$icJ:1}
D.bJ.prototype={
Z:function(a){var u
H.h(a,"$iD")
u=this.go
if(u!=null)u.J(a)},
fv:function(){return this.Z(null)},
gai:function(){var u=this.x!=null?1:0
return u+4+8},
$iad:1,
$icJ:1}
V.a7.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.b_.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.fV.prototype={}
V.dU.prototype={
af:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.t])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dU))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.t],o=V.ck(H.d([q.a,q.d,q.r],p),3,0),n=V.ck(H.d([q.b,q.e,q.x],p),3,0),m=V.ck(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.c(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.c(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.c(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.c(o,1)
r=" "+o[1]+", "
if(1>=t)return H.c(n,1)
r=r+n[1]+", "
if(1>=s)return H.c(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.c(o,2)
p=" "+o[2]+", "
if(2>=t)return H.c(n,2)
p=p+n[2]+", "
if(2>=s)return H.c(m,2)
return r+(p+m[2]+"]")}}
V.ao.prototype={
af:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.t])
return t},
dH:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.dV()
u=1/b1
t=-n
s=-a0
return V.bk((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
B:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bk(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.J(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
br:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a2(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.t],n=V.ck(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.ck(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.ck(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.ck(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.c(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.c(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.c(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.c(n,1)
q=q+n[1]+", "
if(1>=t)return H.c(m,1)
q=q+m[1]+", "
if(1>=s)return H.c(l,1)
q=q+l[1]+", "
if(1>=r)return H.c(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.c(n,2)
u=u+n[2]+", "
if(2>=t)return H.c(m,2)
u=u+m[2]+", "
if(2>=s)return H.c(l,2)
u=u+l[2]+", "
if(2>=r)return H.c(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.c(n,3)
q=q+n[3]+", "
if(3>=t)return H.c(m,3)
q=q+m[3]+", "
if(3>=s)return H.c(l,3)
q=q+l[3]+", "
if(3>=r)return H.c(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.E("")}}
V.ab.prototype={
O:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.a2.prototype={
A:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
B:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.bH.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bH))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.e4.prototype={
gav:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e4))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
V.a6.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
B:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.B()
u=this.b
if(typeof u!=="number")return u.B()
return new V.a6(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.ms
return u==null?$.ms=new V.a6(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.a6(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.O()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+"]"}}
V.J.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ce:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.J(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.J(-this.a,-this.b,-this.c)},
B:function(a,b){return new V.J(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d2()
return new V.J(this.a/b,this.b/b,this.c/b)},
dI:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.S(this.a,3,0)+", "+V.S(this.b,3,0)+", "+V.S(this.c,3,0)+"]"}}
V.cb.prototype={
b2:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cb))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.S(u.a,3,0)+", "+V.S(u.b,3,0)+", "+V.S(u.c,3,0)+", "+V.S(u.d,3,0)+"]"}}
U.fC.prototype={
bz:function(a){var u=V.pW(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.a1():u},
X:function(a){var u=this.y
if(u!=null)u.J(a)},
sec:function(a,b){},
sdJ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bz(u)}s=new D.L("maximumLocation",s,t.b,[P.t])
s.b=!0
t.X(s)}},
sdL:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bz(u)}s=new D.L("minimumLocation",s,t.c,[P.t])
s.b=!0
t.X(s)}},
sa1:function(a,b){var u,t=this
b=t.bz(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.L("location",u,b,[P.t])
u.b=!0
t.X(u)}},
sdK:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.t])
r.b=!0
s.X(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.L("velocity",t,a,[P.t])
t.b=!0
u.X(t)}},
sdl:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.L("dampening",u,a,[P.t])
u.b=!0
this.X(u)}},
aw:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dz.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.a1():u},
aU:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cC.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a1():u},
X:function(a){var u
H.h(a,"$iD")
u=this.e
if(u!=null)u.J(a)},
ao:function(){return this.X(null)},
eA:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gbc(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.X(n)},
h3:function(a,b){var u,t,s=U.aj
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gbc();u.v();)u.gI(u).gw().K(0,t)
s=new D.c_([s])
s.b=!0
this.X(s)},
aU:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.as(r,r.length,[H.q(r,0)]),u=null;r.v();){q=r.d
if(q!=null){t=q.aU(0,b,c)
if(t!=null)u=u==null?t:t.B(0,u)}}s.f=u==null?V.dV():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.aj]},
$aa3:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.el.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.a1():u},
X:function(a){var u
H.h(a,"$iD")
u=this.fx
if(u!=null)u.J(a)},
ao:function(){return this.X(null)},
hX:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.gff())
u=s.a.c
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gfh())
u=s.a.c
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.gfj())
u=s.a.d
t=u.f
u=t==null?u.f=D.a1():t
u.h(0,s.gfa())
u=s.a.d
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.gfc())
u=s.a.e
t=u.b
u=t==null?u.b=D.a1():t
u.h(0,s.ghK())
u=s.a.e
t=u.d
u=t==null?u.d=D.a1():t
u.h(0,s.ghI())
u=s.a.e
t=u.c
u=t==null?u.c=D.a1():t
u.h(0,s.ghG())
return!0},
aq:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.R()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.R()
t=-t}return new V.a6(u,t)},
fg:function(a){var u=this
a=H.A(H.h(a,"$iD"),"$ibC")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fi:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibC")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.aq(new V.a6(t.a,t.b).B(0,2).t(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a6(s.a,s.b).B(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a6(t.a,t.b).B(0,2).t(0,u.gav()))}n.ao()},
fk:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ao()}},
fb:function(a){var u=this
if(H.A(H.h(a,"$iD"),"$idQ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fd:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ibC")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a6(s.a,s.b).B(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a6(t.a,t.b).B(0,2).t(0,u.gav()))
n.ao()},
hL:function(a){var u=this
H.h(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hJ:function(a){var u,t,s,r,q,p,o,n=this
a=H.A(H.h(a,"$iD"),"$ief")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.O(0,a.y)
u=new V.a6(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.O(0,a.y)
u=n.aq(new V.a6(t.a,t.b).B(0,2).t(0,u.gav()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.O(0,a.y)
r=n.aq(new V.a6(s.a,s.b).B(0,2).t(0,u.gav()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa1(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.O(0,a.z)
n.dx=n.aq(new V.a6(t.a,t.b).B(0,2).t(0,u.gav()))}n.ao()},
hH:function(a){var u,t,s,r=this
H.h(a,"$iD")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sY(-t*10*u)
r.ao()}},
aU:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.aw(0,u)
r.b.aw(0,u)
q=V.m2(r.b.d)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.B(0,V.bk(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
M.dF.prototype={
ax:function(a){var u
H.h(a,"$iD")
u=this.y
if(u!=null)u.J(a)},
eB:function(){return this.ax(null)},
fz:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.sah(null)
o.saK(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.ax(n)},
fB:function(a,b){var u,t,s=E.an
H.m(b,"$ik",[s],"$ak")
for(u=b.gT(b),t=this.gap();u.v();)u.gI(u).gw().K(0,t)
s=new D.c_([s])
s.b=!0
this.ax(s)},
sb7:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().K(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gap())
s=new D.L("technique",u,t.d,[O.bK])
s.b=!0
t.ax(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.a1():u},
aR:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dZ(a1.d)
u=a1.c
u.toString
t=a2.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.F(s)
o=C.e.al(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.e.al(p*r)
p=C.e.al(q.c*s)
a2.c=p
q=C.e.al(q.d*r)
a2.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=a1.b
t=a2.c
q=a2.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bk(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dY(i)
t=$.m8
if(t==null){t=V.ma()
q=V.mw()
p=$.mt
if(p==null)p=$.mt=new V.J(0,0,-1)
h=p.t(0,Math.sqrt(p.D(p)))
q=q.aB(h)
g=q.t(0,Math.sqrt(q.D(q)))
f=h.aB(g)
e=new V.J(t.a,t.b,t.c)
d=g.R(0).D(e)
c=f.R(0).D(e)
b=h.R(0).D(e)
t=V.bk(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m8=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.aU(0,a2,u)
if(a0!=null)a=a0.B(0,a)}a2.db.dY(a)
u=a1.d
if(u!=null)u.aw(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();)u.d.aw(0,a2)
for(u=a1.e.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();)u.d.aR(a2)
a1.b.toString
a2.cy.cg()
a2.db.cg()
a1.c.toString
a2.dX()},
seR:function(a,b){this.e=H.m(b,"$ia3",[E.an],"$aa3")},
$iq3:1}
A.dt.prototype={}
A.fr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ie:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ib:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.am.prototype={
gam:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.am))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.hu.prototype={
eo:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a5("")
t=c3.dy
if(t){u.a=c2
s=c2}else s=""
r=c3.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.pb(c3,u)
A.pd(c3,u)
A.pc(c3,u)
A.pf(c3,u)
A.pg(c3,u)
A.pe(c3,u)
A.ph(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.rx
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(c3.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.pa(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cQ(n,35633)
b8.f=b8.cQ(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.H(H.lw(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.z(P.B("Failed to link shader: "+H.i(l)))}b8.hv()
b8.hx()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.A(b8.y.W(0,"invViewMat"),"$iaA")
if(t)b8.dy=H.A(b8.y.W(0,"objMat"),"$iaA")
if(r)b8.fr=H.A(b8.y.W(0,"viewObjMat"),"$iaA")
b8.fy=H.A(b8.y.W(0,"projViewObjMat"),"$iaA")
if(c3.ry)b8.k1=H.A(b8.y.W(0,"txt2DMat"),"$id0")
if(c3.x1)b8.k2=H.A(b8.y.W(0,"txtCubeMat"),"$iaA")
if(c3.x2)b8.k3=H.A(b8.y.W(0,"colorMat"),"$iaA")
b8.seN(H.d([],[A.aA]))
t=c3.y2
if(t>0){b8.k4=H.h(b8.y.W(0,"bendMatCount"),"$iaG")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.z(P.B(c0+q+c1));(s&&C.a).h(s,H.A(j,"$iaA"))}}if(c3.a.a)b8.r2=H.A(b8.y.W(0,"emissionClr"),"$iZ")
if(c3.b.a)b8.x1=H.A(b8.y.W(0,"ambientClr"),"$iZ")
if(c3.c.a)b8.y2=H.A(b8.y.W(0,"diffuseClr"),"$iZ")
if(c3.d.a)b8.dq=H.A(b8.y.W(0,"invDiffuseClr"),"$iZ")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.ds=H.A(b8.y.W(0,"shininess"),"$iah")
if(t)b8.dr=H.A(b8.y.W(0,"specularClr"),"$iZ")}if(c3.cy){b8.dt=H.A(b8.y.W(0,"envSampler"),"$ic8")
if(c3.r.a)b8.du=H.A(b8.y.W(0,"reflectClr"),"$iZ")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dv=H.A(b8.y.W(0,"refraction"),"$iah")
if(t)b8.dw=H.A(b8.y.W(0,"refractClr"),"$iZ")}}if(c3.y.a)b8.dz=H.A(b8.y.W(0,"alpha"),"$iah")
t=P.l
s=[t,A.aG]
b8.seX(new H.a0(s))
b8.seY(new H.a0([t,[P.b,A.c5]]))
b8.shd(new H.a0(s))
b8.she(new H.a0([t,[P.b,A.c6]]))
b8.shA(new H.a0(s))
b8.shB(new H.a0([t,[P.b,A.c9]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c5],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ag()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.z(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.z(P.B(c0+d+c1))
H.A(c,"$iZ")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.z(P.B(c0+d+c1))
H.A(b,"$iZ")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.z(P.B(c0+d+c1))
H.A(j,"$iZ")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.z(P.B(c0+d+c1))
H.A(c,"$iZ")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$ic7")
a2=b}else a2=b9
C.a.h(e,new A.c5(a1,a0,a,j,c,a2))}b8.c4.k(0,g,e)
q=b8.c3
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.Q,s=t.length,r=[A.c6],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.z(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$iZ")
if(typeof g!=="number")return g.ag()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$id0")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$ic8")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$ic8")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$id_")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$iah")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$iah")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.z(P.B(c0+o+c1))
H.A(a8,"$iah")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c6(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.c6.k(0,g,e)
q=b8.c5
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}for(t=c3.ch,s=t.length,r=[A.c9],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
H.A(j,"$iZ")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.z(P.B(c0+o+c1))
H.A(c,"$iZ")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.z(P.B(c0+o+c1))
H.A(b,"$iZ")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.z(P.B(c0+o+c1))
H.A(a3,"$iZ")
if(typeof g!=="number")return g.ag()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$iZ")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.z(P.B(c0+o+c1))
H.A(a8,"$iZ")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.z(P.B(c0+o+c1))
H.A(b2,"$iah")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.z(P.B(c0+o+c1))
H.A(b3,"$iah")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$id_")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.z(P.B(c0+d+c1))
H.A(a8,"$iah")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$iah")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.z(P.B(c0+d+c1))
H.A(a8,"$iah")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.z(P.B(c0+d+c1))
H.A(b2,"$iah")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.z(P.B(c0+d+c1))
H.A(a5,"$ic7")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.z(P.B(c0+o+c1))
H.A(a5,"$ic7")
a6=a5}else a6=b9
C.a.h(e,new A.c9(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c8.k(0,g,e)
q=b8.c7
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.z(P.B(c0+o+c1))
q.k(0,g,H.h(j,"$iaG"))}}},
ht:function(a,b){},
seN:function(a){this.r1=H.m(a,"$ib",[A.aA],"$ab")},
seX:function(a){this.c3=H.m(a,"$iy",[P.l,A.aG],"$ay")},
seY:function(a){this.c4=H.m(a,"$iy",[P.l,[P.b,A.c5]],"$ay")},
shd:function(a){this.c5=H.m(a,"$iy",[P.l,A.aG],"$ay")},
she:function(a){this.c6=H.m(a,"$iy",[P.l,[P.b,A.c6]],"$ay")},
shA:function(a){this.c7=H.m(a,"$iy",[P.l,A.aG],"$ay")},
shB:function(a){this.c8=H.m(a,"$iy",[P.l,[P.b,A.c9]],"$ay")}}
A.aL.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aP.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aT.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hx.prototype={
i:function(a){return this.b1}}
A.c5.prototype={}
A.c6.prototype={}
A.c9.prototype={}
A.cR.prototype={
er:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cQ:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.lw(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.B("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hv:function(){var u,t,s,r=this,q=H.d([],[A.dt]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dt(p,t.name,s))}r.x=new A.fr(q)},
hx:function(){var u,t,s,r=this,q=H.d([],[A.eg]),p=r.a,o=H.ac(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.i7(t.type,t.size,t.name,s))}r.y=new A.j_(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.aG(u,b,c)
else return A.li(u,this.r,b,a,c)},
eU:function(a,b,c){var u=this.a
if(a===1)return new A.c7(u,b,c)
else return A.li(u,this.r,b,a,c)},
eV:function(a,b,c){var u=this.a
if(a===1)return new A.c8(u,b,c)
else return A.li(u,this.r,b,a,c)},
bg:function(a,b){return new P.ew(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
i7:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.ah(u.a,c,d)
case 35664:return new A.iW(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.d_(u.a,c,d)
case 35667:return new A.iX(u.a,c,d)
case 35668:return new A.iY(u.a,c,d)
case 35669:return new A.iZ(u.a,c,d)
case 35674:return new A.j0(u.a,c,d)
case 35675:return new A.d0(u.a,c,d)
case 35676:return new A.aA(u.a,c,d)
case 35678:return u.eU(b,c,d)
case 35680:return u.eV(b,c,d)
case 35670:throw H.e(u.bg("BOOL",c))
case 35671:throw H.e(u.bg("BOOL_VEC2",c))
case 35672:throw H.e(u.bg("BOOL_VEC3",c))
case 35673:throw H.e(u.bg("BOOL_VEC4",c))
default:throw H.e(P.B("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eg.prototype={}
A.j_.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
W:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.B("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aG.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
shN:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ah.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d_.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d0.prototype={
an:function(a){var u=new Float32Array(H.cf(H.m(a,"$ib",[P.t],"$ab")))
C.c.e8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aA.prototype={
an:function(a){var u=new Float32Array(H.cf(H.m(a,"$ib",[P.t],"$ab")))
C.c.e9(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c7.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.c8.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.kn.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ce(s.b,b).ce(s.d.ce(s.c,b),c)
a.sa1(0,new V.a2(r.a,r.b,r.c))
a.se4(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdh(new V.bH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kz.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kB.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sa1(0,new V.a2(s,u,q))
u=new V.J(s,u,q)
a.se4(u.t(0,Math.sqrt(u.D(u))))
a.sdh(new V.bH(1-c,2+c,-1,-1))},
$S:7}
F.kC.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kD.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kW.prototype={
$2:function(a,b){return 0},
$S:21}
F.kX.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).B(0,this.b+s)
a.sa1(0,new V.a2(s.a,s.b,s.c))},
$S:7}
F.kZ.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kL.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a2(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kA.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lL(n.$1(o),m)
m=J.lL(n.$1(o+3.141592653589793/p.c),m).O(0,l)
m=new V.J(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.mu
if(n==null){n=new V.J(1,0,0)
$.mu=n
t=n}else t=n
n=u.aB(!J.P(u,t)?V.mx():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.aB(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.B(0,n*m)
m=s.B(0,q*m)
a.sa1(0,l.A(0,new V.a2(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.K(u.a.a.d.b,u)
u.a.a.a_()}u.bP()
u.bQ()
u.hj()},
bT:function(a){this.a=a
C.a.h(a.d.b,this)},
bU:function(a){this.b=a
C.a.h(a.d.c,this)},
hu:function(a){this.c=a
C.a.h(a.d.d,this)},
bP:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
bQ:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
hj:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gb0:function(){return this.a==null||this.b==null||this.c==null},
eM:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d2()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.D(s)))},
eQ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.O(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.O(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.aB(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
c_:function(){var u,t=this
if(t.d!=null)return!0
u=t.eM()
if(u==null){u=t.eQ()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d2()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dI())return
return s.t(0,Math.sqrt(s.D(s)))},
eP:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.O(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.O(0,g).B(0,p).A(0,g).O(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.aB(q)
l=l.t(0,Math.sqrt(l.D(l))).aB(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
bY:function(){var u,t=this
if(t.e!=null)return!0
u=t.eL()
if(u==null){u=t.eP()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gi1:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gb0())return a+"disposed"
u=a+C.b.ae(J.ar(s.a.e),0)+", "+C.b.ae(J.ar(s.b.e),0)+", "+C.b.ae(J.ar(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fY.prototype={}
F.ip.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bj.prototype={
b_:function(){var u=this
if(!u.gb0()){C.a.K(u.a.a.c.b,u)
u.a.a.a_()}u.bP()
u.bQ()},
bT:function(a){this.a=a
C.a.h(a.c.b,this)},
bU:function(a){this.b=a
C.a.h(a.c.c,this)},
bP:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
bQ:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gb0:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb0())return a+"disposed"
return a+C.b.ae(J.ar(this.a.e),0)+", "+C.b.ae(J.ar(this.b.e),0)},
M:function(){return this.E("")}}
F.hh.prototype={}
F.iU.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.bE.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ae(J.ar(u.e),0)},
M:function(){return this.E("")}}
F.e6.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a1():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.i4())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bE()
if(n.a==null)H.z(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.J(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nT(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cz(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
at:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.at()||!1
if(!t.a.at())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
iy:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.q(o,0)])
for(o=[F.av];u.length!==0;){t=C.a.gij(u)
C.a.e_(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){C.a.h(s,q)
C.a.e_(u,r)}}if(s.length>1)b.b4(s)}}p.a.u()
p.c.ck()
p.d.ck()
p.b.iR()
p.c.cl(new F.iU())
p.d.cl(new F.ip())
o=p.e
if(o!=null)o.ak(0)},
bV:function(){this.iy(new F.jm(),new F.hV())},
c9:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.c9()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.c(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdM(new V.J(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.J(s,r,o).t(0,Math.sqrt(s*s+r*r+o*o))
if(!J.P(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.ak(0)},
i_:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bp()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bo().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bQ().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.cq().a)!==0)++s
if((t&$.bm().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.t
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dv])
for(n=0,m=0;m<s;++m){l=a3.hW(m)
k=l.gct(l)
C.a.k(o,m,new Z.dv(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].iv(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cf(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dw(new Z.en(a0,f),o,a3)
e.sf5(H.d([],[Z.by]))
if(a.b.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.ll(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.ll(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.ll(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.J(null)},
$iq4:1}
F.ih.prototype={
hR:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cz(s,p,o))}}return u},
hS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.av],"$ab")
u=H.d([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
ck:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gi1(s)
if(t)s.b_()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].c_())s=!1
return s},
bZ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bY())s=!1
return s},
c9:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.J(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.J(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.J(null)}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
sf0:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.ii.prototype={
gn:function(a){return this.b.length},
cl:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b3(0,p,n)){p.b_()
break}}}}},
ck:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.d([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.m(s,"\n")},
M:function(){return this.E("")},
sf6:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")}}
F.ij.prototype={
gn:function(a){return this.b.length},
iR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(a))
return C.a.m(r,"\n")},
M:function(){return this.E("")},
sbM:function(a){this.b=H.m(a,"$ib",[F.bE],"$ab")}}
F.av.prototype={
c2:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.em(u.cx,r,o,t,s,q,p,a,n)},
i4:function(){return this.c2(null)},
sa1:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
sdM:function(a){var u
a=a==null?null:a.t(0,Math.sqrt(a.D(a)))
if(!J.P(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
se4:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdh:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iv:function(a){var u,t,s=this
if(a.p(0,$.bp())){u=s.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bo())){u=s.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bn())){u=s.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bQ())){u=s.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bR())){u=s.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dm())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.dn())){u=s.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.cq()))return H.d([s.ch],[P.t])
else if(a.p(0,$.bm())){u=s.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
c_:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.F(0,new F.jr(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bY:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.F(0,new F.jq(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.f])
C.a.h(q,C.b.ae(J.ar(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.S(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.jr.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:6}
F.jq.prototype={
$1:function(a){var u,t
H.h(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:6}
F.jh.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.B("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
hT:function(a,b,c,d,e,f){var u=F.em(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].c_()
return!0},
bZ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bY()
return!0},
i0:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].E(a))
return C.a.m(u,"\n")},
M:function(){return this.E("")},
shO:function(a){this.c=H.m(a,"$ib",[F.av],"$ab")}}
F.ji.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
F:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.F(u.b,b)
C.a.F(u.c,new F.jj(u,b))
C.a.F(u.d,new F.jk(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf1:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sf2:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sf3:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jj.prototype={
$1:function(a){H.h(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:6}
F.jk.prototype={
$1:function(a){var u
H.h(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:6}
F.jl.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sf7:function(a){this.b=H.m(a,"$ib",[F.bj],"$ab")},
sf8:function(a){this.c=H.m(a,"$ib",[F.bj],"$ab")}}
F.jn.prototype={}
F.jm.prototype={
b3:function(a,b,c){return J.P(b.f,c.f)}}
F.jo.prototype={}
F.hV.prototype={
b4:function(a){var u,t,s,r
H.m(a,"$ib",[F.av],"$ab")
u=V.d2()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.J(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.t(0,Math.sqrt(u.D(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.u)(a),++s)a[s].sdM(u)
return}}
F.jp.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.d([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].E(""))
return C.a.m(r,"\n")},
sbM:function(a){this.b=H.m(a,"$ib",[F.bE],"$ab")}}
O.dS.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.a1():u},
ab:function(a){var u
H.h(a,"$iD")
u=this.fr
if(u!=null)u.J(a)},
eE:function(){return this.ab(null)},
d2:function(a){H.h(a,"$iD")
this.a=null
this.ab(a)},
ho:function(){return this.d2(null)},
fp:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.bZ([u])
u.b=!0
this.ab(u)},
fs:function(a,b){var u=V.ao
H.m(b,"$ik",[u],"$ak")
u=new D.c_([u])
u.b=!0
this.ab(u)},
cN:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=h.j(0,r.gai())
h.k(0,q,p==null?1:p)}o=H.d([],[A.aL])
h.F(0,new O.hB(j,o))
C.a.bw(o,new O.hC())
n=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=n.j(0,r.gai())
n.k(0,q,p==null?1:p)}m=H.d([],[A.aP])
n.F(0,new O.hD(j,m))
C.a.bw(m,new O.hE())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gai()
q=l.j(0,r.gai())
l.k(0,t,q==null?1:q)}k=H.d([],[A.aT])
l.F(0,new O.hF(j,k))
C.a.bw(k,new O.hG())
i=C.d.a8(j.e.a.length+3,4)
j.dy.e
return A.o_(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
eK:function(a,b){H.m(a,"$ib",[T.cX],"$ab")
if(b!=null)if(!C.a.S(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.as(u,u.length,[H.q(u,0)]);u.v();){t=u.d
t.toString
s=$.bG
t.a=s==null?$.bG=new V.a2(0,0,0):s
s=$.jg
t.b=s==null?$.jg=new V.J(0,0,1):s
s=$.jf
t.c=s==null?$.jf=new V.J(0,1,0):s
s=$.je
t.d=s==null?$.je=new V.J(-1,0,0):s
s=t.f
if(s!=null){r=s.aU(0,b,t)
if(r!=null){t.a=r.br(t.a)
s=r.bs(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.t(0,Math.sqrt(q*q+p*p+o*o))
o=r.bs(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.t(0,Math.sqrt(p*p+q*q+s*s))
s=r.bs(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.t(0,Math.sqrt(q*q+p*p+o*o))}}}},
iT:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cN()
u=b6.fr.j(0,b5.b1)
if(u==null){u=A.nZ(b5,b6.a)
t=u.b
if(t.length===0)H.z(P.B("May not cache a shader with no name."))
if(b6.fr.bi(0,t))H.z(P.B('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.dn
b5=b7.e
if(!(b5 instanceof Z.dw))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.at()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bZ()
p.a.bZ()
p=p.e
if(p!=null)p.ak(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.i0()
o=o.e
if(o!=null)o.ak(0)}m=b7.d.i_(new Z.jt(b6.a),r)
m.aP($.bp()).e=b4.a.Q.c
if(b5)m.aP($.bo()).e=b4.a.cx.c
if(q)m.aP($.bn()).e=b4.a.ch.c
if(s.r1)m.aP($.bQ()).e=b4.a.cy.c
if(p)m.aP($.bR()).e=b4.a.db.c
if(s.rx)m.aP($.bm()).e=b4.a.dx.c
b7.e=m}b5=T.cX
l=H.d([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.ie()
if(s.dy){q=b4.a
o=b6.dx
o=o.ga2(o)
q=q.dy
q.toString
q.an(o.af(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.ga2(o)
n=b6.dx
n=b6.cx=o.B(0,n.ga2(n))
o=n}q=q.fr
q.toString
q.an(o.af(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.giP()
n=b6.dx
n=b6.ch=o.B(0,n.ga2(n))
o=n}q=q.fy
q.toString
q.an(o.af(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.an(C.k.af(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.an(C.k.af(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.an(C.k.af(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.bt(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.c(n,j)
n=n[j]
o.toString
H.h(n,"$iao")
o=o.r1
if(j>=o.length)return H.c(o,j)
o=o[j]
i=new Float32Array(H.cf(H.m(n.af(0,!0),"$ib",q,"$ab")))
C.c.e9(o.a,o.d,!1,i)}}if(s.a.a){q=b4.a
o=b4.f.f
q=q.r2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.id){if(s.b.a){q=b4.a
o=b4.r.f
q=q.x1
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.c.a){q=b4.a
o=b4.x.f
q=q.y2
C.c.U(q.a,q.d,o.a,o.b,o.c)}if(s.d.a){q=b4.a
o=b4.y.f
q=q.dq
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.e.a
if(!q)o=!1
else o=!0
if(o){o=b4.a
n=b4.z.ch
o=o.ds
C.c.a5(o.a,o.d,n)}if(q){q=b4.a
o=b4.z.f
q=q.dr
C.c.U(q.a,q.d,o.a,o.b,o.c)}q=s.z
if(q.length>0){o=b6.db
h=o.ga2(o)
o=P.l
g=new H.a0([o,o])
for(o=b4.dx.e,n=o.length,f=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gai()
b=g.j(0,c)
if(b==null)b=0
g.k(0,c,b+1)
a=J.dp(b4.a.c4.j(0,c),b)
a0=h.bs(d.gia(d))
a1=a0.a
a2=a0.b
a3=a0.c
a3=a0.t(0,Math.sqrt(a1*a1+a2*a2+a3*a3))
a2=a.e
a1=a3.a
a0=a3.b
a3=a3.c
C.c.U(a2.a,a2.d,a1,a0,a3)
a3=d.gaO(d)
a0=a.f
C.c.U(a0.a,a0.d,a3.a,a3.b,a3.c)
d.gaT()
a0=d.gia(d)
a1=a.d
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gjt()
a1=a.b
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gcm(d)
a1=a.c
C.c.U(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaT()
H.m(l,"$ib",f,"$ab")
if(!C.a.S(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaT()
a1=a0.gbn(a0)
if(a1){a1=a.r
a1.toString
a2=a0.d
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=g.j(0,n)
if(k==null)k=0
n=b4.a.c3.j(0,n)
C.c.bt(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
h=o.ga2(o)
o=P.l
a4=new H.a0([o,o])
for(o=b4.dx.f,n=o.length,f=[b5],a0=[P.t],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gai()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dp(b4.a.c6.j(0,c),b)
a5=h.B(0,d.ga2(d))
a1=d.ga2(d)
a2=$.bG
a1=a1.br(a2==null?$.bG=new V.a2(0,0,0):a2)
a2=a.b
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.bG
a1=a5.br(a1==null?$.bG=new V.a2(0,0,0):a1)
a2=a.c
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.gaO(d)
a2=a.e
C.c.U(a2.a,a2.d,a1.a,a1.b,a1.c)
d.gaT()
a1=a5.dH(0)
a2=a1.a
a3=a1.b
a6=a1.c
a7=a1.e
a8=a1.f
a9=a1.r
b0=a1.y
b1=a1.z
a1=a1.Q
b2=a.d
b2.toString
i=new Float32Array(H.cf(H.m(new V.dU(a2,a3,a6,a7,a8,a9,b0,b1,a1).af(0,!0),"$ib",a0,"$ab")))
C.c.e8(b2.a,b2.d,!1,i)
d.gaT()
a1=d.gaT()
H.m(l,"$ib",f,"$ab")
if(!C.a.S(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gaT()
a2=a1.gbn(a1)
if(a2){a2=a.f
a2.toString
a3=a1.gbn(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.gip(a1)
a2.a.uniform1i(a2.d,a1)}}d.gcs()
a1=d.gj8()
a2=a.x
C.c.j5(a2.a,a2.d,a1.a,a1.b,a1.c,a1.d)
a1=d.gcs()
if(!C.a.S(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.gcs()
a2=a1.gbn(a1)
if(a2){a2=a.r
a2.toString
a3=a1.gbn(a1)
if(!a3)a2.a.uniform1i(a2.d,0)
else{a1=a1.gip(a1)
a2.a.uniform1i(a2.d,a1)}}if(d.gjc()){a1=d.gj9()
a2=a.y
C.c.a5(a2.a,a2.d,a1)
a1=d.gja()
a2=a.z
C.c.a5(a2.a,a2.d,a1)
a1=d.gjb()
a2=a.Q
C.c.a5(a2.a,a2.d,a1)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.c5.j(0,n)
C.c.bt(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
h=o.ga2(o)
o=P.l
b3=new H.a0([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=d.gai()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.dp(b4.a.c8.j(0,c),b)
f=d.a
a0=a.b
a1=f.a
a2=f.b
f=f.c
C.c.U(a0.a,a0.d,a1,a2,f)
f=d.b
a2=f.a
a1=f.b
a0=f.c
a0=f.t(0,Math.sqrt(a2*a2+a1*a1+a0*a0))
a1=a.c
a2=a0.a
f=a0.b
a0=a0.c
C.c.U(a1.a,a1.d,a2,f,a0)
a0=h.br(d.a)
f=a.d
C.c.U(f.a,f.d,a0.a,a0.b,a0.c)
a0=d.r
f=a.e
C.c.U(f.a,f.d,a0.a,a0.b,a0.c)
if(d.x!=null||!1){f=d.c
a0=a.f
a0.toString
a1=f.a
a2=f.b
f=f.c
C.c.U(a0.a,a0.d,a1,a2,f)
f=d.d
a2=a.r
a2.toString
a1=f.a
a0=f.b
f=f.c
C.c.U(a2.a,a2.d,a1,a0,f)
f=d.z
a0=a.x
C.c.a5(a0.a,a0.d,f)
f=d.Q
a0=a.y
C.c.a5(a0.a,a0.d,f)}f=d.x
a0=f!=null
if(a0){H.m(l,"$ib",b5,"$ab")
if(a0)if(!C.a.S(l,f)){f.a=l.length
C.a.h(l,f)}f=d.x
a0=f!=null
if(a0&&f.d){a1=a.dx
a1.toString
if(!a0||!f.d)a1.a.uniform1i(a1.d,0)
else{f=f.a
a1.a.uniform1i(a1.d,f)}}}f=d.cy
a0=a.Q
C.c.a5(a0.a,a0.d,f)
f=d.dx
a0=a.ch
C.c.a5(a0.a,a0.d,f)
f=d.dy
a0=a.cx
C.c.a5(a0.a,a0.d,f)
f=d.fr
a0=a.cy
C.c.a5(a0.a,a0.d,f)
f=d.fx
a0=a.db
C.c.a5(a0.a,a0.d,f)}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.c7.j(0,o)
C.c.bt(o.a,o.d,k)}}}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.ga2(q).dH(0)}b5=b5.id
b5.toString
b5.an(q.af(0,!0))}if(s.cy){b4.eK(l,b4.ch)
b5=b4.a
q=b4.ch
b5.ht(b5.dt,q)
if(s.r.a){b5=b4.a
q=b4.cx.f
b5=b5.du
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}b5=s.x.a
if(!b5)q=!1
else q=!0
if(q){q=b4.a
o=b4.cy.ch
q=q.dv
C.c.a5(q.a,q.d,o)}if(b5){b5=b4.a
q=b4.cy.f
b5=b5.dw
C.c.U(b5.a,b5.d,q.a,q.b,q.c)}}b5=s.y.a
q=!b5
if(q)o=!1
else o=!0
if(o){if(b5){b5=b4.a
o=b4.db.f
b5=b5.dz
C.c.a5(b5.a,b5.d,o)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){b5=l[j]
if(!b5.c&&b5.d){b5.c=!0
p.activeTexture(33984+b5.a)
p.bindTexture(3553,b5.b)}}b5=b7.e
b5.bW(b6)
b5.aR(b6)
b5.j4(b6)
if(q)b5=!1
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.ib()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cN().b1},
seO:function(a){this.e=H.m(a,"$ia3",[V.ao],"$aa3")}}
O.hB.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aL(a,C.d.a8(b+3,4)*4))},
$S:12}
O.hC.prototype={
$2:function(a,b){H.h(a,"$iaL")
H.h(b,"$iaL")
return J.l1(a.a,b.a)},
$S:50}
O.hD.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aP(a,C.d.a8(b+3,4)*4))},
$S:12}
O.hE.prototype={
$2:function(a,b){H.h(a,"$iaP")
H.h(b,"$iaP")
return J.l1(a.a,b.a)},
$S:51}
O.hF.prototype={
$2:function(a,b){H.ac(a)
H.ac(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aT(a,C.d.a8(b+3,4)*4))},
$S:12}
O.hG.prototype={
$2:function(a,b){H.h(a,"$iaT")
H.h(b,"$iaT")
return J.l1(a.a,b.a)},
$S:52}
O.hv.prototype={
az:function(){var u,t=this
t.cv()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.L(t.b,u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.dT.prototype={
az:function(){},
d5:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.ab(null)}}}
O.hw.prototype={}
O.b6.prototype={
d4:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.ab(t)}},
az:function(){this.cv()
this.d4(new V.a7(1,1,1))},
saO:function(a,b){this.d5(new A.am(!0,!1,!1))
this.d4(b)}}
O.hy.prototype={}
O.hz.prototype={
az:function(){var u,t=this
t.cw()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.L(t.b+".refraction",u,1,[P.t])
u.b=!0
t.a.ab(u)}}}
O.hA.prototype={
d6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.t])
t.b=!0
u.a.ab(t)}},
az:function(){this.cw()
this.d6(100)}}
O.bK.prototype={}
T.cX.prototype={}
T.ec.prototype={}
T.iG.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a1():u}}
T.iH.prototype={
iw:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iG()
t.a=0
t.b=q
t.d=t.c=!1
r=W.n
W.a9(u,"load",H.o(new T.iI(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hp:function(a,b,c){var u,t,s,r
b=V.lF(b)
u=V.lF(a.width)
t=V.lF(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l4()
s.width=u
s.height=t
r=H.h(C.j.ee(s,"2d"),"$icu")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pu(r.getImageData(0,0,s.width,s.height))}}}
T.iI.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hp(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.iZ(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ic()}++s.e},
$S:11}
V.bf.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"},
$iay:1}
V.ay.prototype={}
V.dR.prototype={
aD:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aD(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.m(a,"$ib",[V.ay],"$ab")},
$iay:1}
V.at.prototype={
aD:function(a,b){return!this.el(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
V.i6.prototype={
aD:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c2(this.a),t=H.c2(this.b)
return u+".."+t},
$iay:1}
V.ig.prototype={
eq:function(a){var u,t
if(a.a.length<=0)throw H.e(P.B("May not create a SetMatcher with zero characters."))
u=new H.a0([P.l,P.R])
for(t=new H.cG(a,a.gn(a),[H.aq(a,"x",0)]);t.v();)u.k(0,t.d,!0)
this.shs(u)},
aD:function(a,b){return this.a.bi(0,b)},
i:function(a){var u=this.a
return P.cV(u.ga4(u),0,null)},
shs:function(a){this.a=H.m(a,"$iy",[P.l,P.R],"$ay")},
$iay:1}
V.cS.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cZ(this.a.l(0,b))
r.sa7(H.d([],[V.ay]))
r.c=!1
C.a.h(this.c,r)
return r},
ii:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aD(0,a))return r}return},
i:function(a){return this.b},
shM:function(a){this.c=H.m(a,"$ib",[V.cZ],"$ab")}}
V.ee.prototype={
i:function(a){var u=H.lH(this.b,"\n","\\n"),t=H.lH(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cY.prototype={
aE:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shk:function(a){var u=P.f
this.c=H.m(a,"$iy",[u,u],"$ay")}}
V.iL.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cS(this,b)
u.shM(H.d([],[V.cZ]))
u.d=null
this.a.k(0,b,u)}return u},
N:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cY(a)
u=P.f
t.shk(new H.a0([u,u]))
this.b.k(0,a,t)}return t},
e7:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ee]),k=this.c,j=[P.l],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.C(a,s)
q=k.ii(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cV(i,0,m)
throw H.e(P.B("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cV(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ee(n==null?o.b:n,p,s)}++s}}},
shC:function(a){this.a=H.m(a,"$iy",[P.f,V.cS],"$ay")},
shF:function(a){this.b=H.m(a,"$iy",[P.f,V.cY],"$ay")}}
V.cZ.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
X.dy.prototype={$icJ:1}
X.h4.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.a1():u}}
X.e0.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.a1():u},
aI:function(a){var u
H.h(a,"$iD")
u=this.f
if(u!=null)u.J(a)},
eH:function(){return this.aI(null)},
saQ:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gw().K(0,s.gcC())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcC())
u=new D.L("mover",t,s.b,[U.aj])
u.b=!0
s.aI(u)}},
$icJ:1,
$idy:1}
X.ea.prototype={}
V.bt.prototype={
bb:function(a){this.b=new P.h8(C.Q)
this.c=null
this.sbG(H.d([],[[P.b,W.aC]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aC]))
u=a.split("\n")
for(l=u.length,t=[W.aC],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.N(q)
o=m.b.eT(q,0,q.length)
n=o==null?q:o
C.O.eg(p,H.lH(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gau(m.d),p)}},
dV:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbG(H.d([],[[P.b,W.aC]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bj():t).e7(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.bp(t[r])},
sbG:function(a){this.d=H.m(a,"$ib",[[P.b,W.aC]],"$ab")}}
V.kV.prototype={
$1:function(a){var u
H.h(a,"$ib9")
u=C.e.e6(this.a.gim(),2)
if(u!=="0.00")P.lG(u+" fps")},
$S:54}
V.fL.prototype={
bp:function(a){var u=this
switch(a.a){case"Class":u.L(a.b,"#551")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break
case"Type":u.L(a.b,"#B11")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bj:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iM()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bf())
t=a1.l(0,r).m(0,h)
u=V.v(new H.r("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.v(new H.r("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.v(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bf())
t=a1.l(0,r).m(0,e)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.at()
s=[V.ay]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.v(new H.r("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.at()
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.r("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.v(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.v(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.N("Num")
t=a1.l(0,n)
t.d=t.a.N("Num")
t=a1.l(0,m)
t.d=t.a.N("Symbol")
t=a1.l(0,j)
t.d=t.a.N("String")
t=a1.l(0,g)
t.d=t.a.N("String")
t=a1.l(0,c)
t.d=t.a.N(d)
t=a1.l(0,a0)
t.d=t.a.N(a0)
t=a1.l(0,q)
t=t.d=t.a.N(q)
u=[P.f]
t.aE(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aE(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aE(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h5.prototype={
bp:function(a){var u=this
switch(a.a){case"Builtin":u.L(a.b,"#411")
break
case"Comment":u.L(a.b,"#777")
break
case"Id":u.L(a.b,"#111")
break
case"Num":u.L(a.b,"#191")
break
case"Preprocess":u.L(a.b,"#737")
break
case"Reserved":u.L(a.b,"#119")
break
case"Symbol":u.L(a.b,"#611")
break
case"Type":u.L(a.b,"#171")
break
case"Whitespace":u.L(a.b,"#111")
break}},
bj:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iM()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.v(new H.r("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.Y("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.Y("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.v(new H.r(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.v(new H.r(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.v(new H.r("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.v(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bf())
t=e.l(0,j).m(0,i)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.at()
s=[V.ay]
t.sa7(H.d([],s))
C.a.h(u.a,t)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.v(new H.r("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.at()
u.sa7(H.d([],s))
C.a.h(t.a,u)
t=V.v(new H.r("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.v(new H.r("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.v(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.v(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.N("Num")
u=e.l(0,n)
u.d=u.a.N("Num")
u=e.l(0,m)
u.d=u.a.N("Symbol")
u=e.l(0,i)
u.d=u.a.N(j)
u=e.l(0,g)
u.d=u.a.N(h)
u=e.l(0,f)
u.d=u.a.N(f)
u=e.l(0,q)
u=u.d=u.a.N(q)
t=[P.f]
u.aE(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aE(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aE(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h6.prototype={
bp:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.L(a.b,"#911")
u.L("=",t)
break
case"Id":u.L(a.b,t)
break
case"Other":u.L(a.b,t)
break
case"Reserved":u.L(a.b,"#119")
break
case"String":u.L(a.b,"#171")
break
case"Symbol":u.L(a.b,"#616")
break}},
bj:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iM()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.v(new H.r("_"))
C.a.h(u.a,t)
t=V.Y("a","z")
C.a.h(u.a,t)
t=V.Y("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.v(new H.r("_"))
C.a.h(t.a,u)
u=V.Y("0","9")
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.v(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.v(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.v(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.v(new H.r('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.v(new H.r("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.v(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bf())
C.a.h(l.l(0,s).m(0,m).a,new V.bf())
u=l.l(0,m).m(0,m)
t=new V.at()
t.sa7(H.d([],[V.ay]))
C.a.h(u.a,t)
u=V.v(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.Y("a","z")
C.a.h(t.a,u)
u=V.Y("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.N("Symbol")
u=l.l(0,n)
u.d=u.a.N("String")
u=l.l(0,r)
t=u.a.N(r)
u.d=t
t.aE(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.l(0,q)
t.d=t.a.N(q)
t=l.l(0,m)
t.d=t.a.N(m)
return l}}
V.i0.prototype={
dV:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbG(H.d([],[[P.b,W.aC]]))
this.L(C.a.m(b,"\n"),"#111")},
bp:function(a){},
bj:function(){return}}
V.i4.prototype={
dd:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mo().gcj().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.da(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lN(m.c).h(0,q)
o=W.nO("radio")
o.checked=s
o.name=u
u=W.n
W.a9(o,"change",H.o(new V.i5(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lN(m.c).h(0,r.createElement("br"))},
aZ:function(a,b,c){return this.dd(a,b,c,!1)},
da:function(a){var u,t,s=P.mo(),r=P.f,q=P.nV(s.gcj(),r,r)
q.k(0,this.a,a)
u=s.e0(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k6([],[]).co(""),"",t)}}
V.i5.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.da(u.d)}},
$S:11}
V.ik.prototype={
es:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.n
W.a9(q,"scroll",H.o(new V.im(o),{func:1,ret:-1,args:[r]}),!1,r)},
df:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hw()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e7(C.a.iu(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.pS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
t.appendChild(l)}else{k=P.f8(C.y,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
ed:function(a){var u,t,s,r=new V.fL("dart")
r.bb("dart")
u=new V.h5("glsl")
u.bb("glsl")
t=new V.h6("html")
t.bb("html")
s=C.a.ik(H.d([r,u,t],[V.bt]),new V.io(a))
if(s!=null)return s
r=new V.i0("plain")
r.bb("plain")
return r},
de:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.d([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dl(r).a3(r,"+")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a3(r,"-")){C.a.k(b0,s,C.b.a9(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ed(a8)
q.dV(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f8(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lP()
i.href="#"+H.i(m)
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.c(u,s)
b=u[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.a_.hV(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.u)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gT(r);a3.v();)c.appendChild(a3.gI(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hP:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.h(r.insertCell(-1),"$ib8").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.h(r.insertCell(-1),"$ib8")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hw:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iM()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.at()
r=[V.ay]
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.r("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.v(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.at()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.r("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.v(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.at()
s.sa7(H.d([],r))
C.a.h(t.a,s)
t=V.v(new H.r("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.v(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.v(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.v(new H.r("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.v(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bf())
s=u.l(0,i).m(0,i)
t=new V.at()
t.sa7(H.d([],r))
C.a.h(s.a,t)
s=V.v(new H.r("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.N(p)
s=u.l(0,n)
s.d=s.a.N(o)
s=u.l(0,"CodeEnd")
s.d=s.a.N(m)
s=u.l(0,j)
s.d=s.a.N("Link")
s=u.l(0,i)
s.d=s.a.N(i)
this.b=u}}
V.im.prototype={
$1:function(a){P.mk(C.o,new V.il(this.a))},
$S:11}
V.il.prototype={
$0:function(){var u=C.e.al(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.io.prototype={
$1:function(a){return H.h(a,"$ibt").a===this.a},
$S:55}
L.kM.prototype={
$0:function(){this.a.saa(0,F.lA(1,null,null,1))},
$S:0}
L.kN.prototype={
$0:function(){this.a.saa(0,F.lB(1,!0,!0,40,1))},
$S:0}
L.kO.prototype={
$0:function(){this.a.saa(0,F.lB(1,!0,!1,40,0))},
$S:0}
L.kP.prototype={
$0:function(){this.a.saa(0,F.pR(6,6))},
$S:0}
L.kQ.prototype={
$0:function(){this.a.saa(0,F.n8())},
$S:0}
L.kR.prototype={
$0:function(){this.a.saa(0,F.pJ())},
$S:0}
L.kS.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.de("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.de("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.ei=u.i
u=J.dL.prototype
u.ek=u.i
u=P.k.prototype
u.ej=u.bu
u=W.U.prototype
u.bx=u.ac
u=W.eR.prototype
u.em=u.as
u=O.dT.prototype
u.cv=u.az
u=O.b6.prototype
u.cw=u.az
u=V.dR.prototype
u.el=u.aD
u.cu=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"po","ox",14)
u(P,"pp","oy",14)
u(P,"pq","oz",14)
t(P,"mT","pm",3)
s(W,"pC",4,null,["$4"],["oB"],28,0)
s(W,"pD",4,null,["$4"],["oC"],28,0)
var m
r(m=E.an.prototype,"gdR",0,0,null,["$1","$0"],["dS","iG"],1,0)
r(m,"gdT",0,0,null,["$1","$0"],["dU","iH"],1,0)
r(m,"gdP",0,0,null,["$1","$0"],["dQ","iF"],1,0)
r(m,"gdN",0,0,null,["$1","$0"],["dO","iC"],1,0)
q(m,"giA","iB",9)
q(m,"giD","iE",9)
r(m=E.ed.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],1,0)
p(m,"giV","e1",3)
o(m=X.ek.prototype,"gfI","fJ",16)
o(m,"gft","fu",16)
o(m,"gfC","fD",4)
o(m,"gfM","fN",31)
o(m,"gfK","fL",31)
o(m,"gfQ","fR",4)
o(m,"gfU","fV",4)
o(m,"gfG","fH",4)
o(m,"gfS","fT",4)
o(m,"gfE","fF",4)
o(m,"gfW","fX",36)
o(m,"gfY","fZ",16)
o(m,"gha","hb",15)
o(m,"gh6","h7",15)
o(m,"gh8","h9",15)
r(m=D.dN.prototype,"gcY",0,0,null,["$1","$0"],["cZ","fO"],1,0)
o(m,"gh0","h1",38)
q(m,"gfm","fn",26)
q(m,"gh4","h5",26)
r(D.bJ.prototype,"gbL",0,0,null,["$1","$0"],["Z","fv"],1,0)
n(V.a6.prototype,"gn","b2",13)
n(V.J.prototype,"gn","b2",13)
n(V.cb.prototype,"gn","b2",13)
r(m=U.cC.prototype,"gbc",0,0,null,["$1","$0"],["X","ao"],1,0)
q(m,"gez","eA",22)
q(m,"gh2","h3",22)
r(m=U.el.prototype,"gbc",0,0,null,["$1","$0"],["X","ao"],1,0)
o(m,"gff","fg",2)
o(m,"gfh","fi",2)
o(m,"gfj","fk",2)
o(m,"gfa","fb",2)
o(m,"gfc","fd",2)
o(m,"ghK","hL",2)
o(m,"ghI","hJ",2)
o(m,"ghG","hH",2)
r(m=M.dF.prototype,"gap",0,0,null,["$1","$0"],["ax","eB"],1,0)
q(m,"gfw","fz",9)
q(m,"gfA","fB",9)
r(m=O.dS.prototype,"geD",0,0,null,["$1","$0"],["ab","eE"],1,0)
r(m,"ghn",0,0,null,["$1","$0"],["d2","ho"],1,0)
q(m,"gfo","fp",33)
q(m,"gfq","fs",33)
r(X.e0.prototype,"gcC",0,0,null,["$1","$0"],["aI","eH"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.lc,J.a,J.as,P.eE,P.k,H.cG,P.b2,H.bX,H.d1,H.fE,H.iR,P.bw,H.cv,H.eW,P.ae,H.hi,H.hk,H.hd,P.f1,P.bd,P.aI,P.eo,P.iw,P.cU,P.ix,P.b9,P.al,P.km,P.k0,P.cc,P.eD,P.x,P.ke,P.hq,P.bV,P.h9,P.kk,P.kj,P.R,P.ax,P.aa,P.bv,P.hZ,P.e8,P.ew,P.h3,P.bx,P.b,P.y,P.O,P.au,P.f,P.a5,P.cd,P.j5,P.k3,W.fH,W.bN,W.G,W.dZ,W.eR,W.k9,W.dH,W.az,W.k_,W.f9,P.k5,P.f6,P.jV,P.Q,O.a3,O.cH,E.fy,E.an,E.i7,E.ed,Z.en,Z.jt,Z.dw,Z.by,Z.bM,D.fB,D.bW,D.D,X.dx,X.dM,X.hf,X.hn,X.bB,X.hN,X.iN,X.ek,D.dC,D.ad,D.e1,D.bJ,V.a7,V.b_,V.fV,V.dU,V.ao,V.ab,V.a2,V.bH,V.e4,V.a6,V.J,V.cb,U.el,M.dF,A.dt,A.fr,A.am,A.aL,A.aP,A.aT,A.hx,A.c5,A.c6,A.c9,A.eg,A.j_,F.a8,F.fY,F.bj,F.hh,F.bE,F.e6,F.ih,F.ii,F.ij,F.av,F.jh,F.ji,F.jl,F.jn,F.jo,F.jp,O.bK,O.dT,O.hy,T.iH,V.bf,V.ay,V.dR,V.i6,V.ig,V.cS,V.ee,V.cY,V.iL,X.dy,X.ea,X.e0,V.bt,V.i4,V.ik])
s(J.a,[J.hc,J.dK,J.dL,J.b3,J.cF,J.bz,H.cK,H.bD,W.j,W.fo,W.bT,W.cu,W.b0,W.b1,W.W,W.eq,W.fM,W.fN,W.es,W.dE,W.eu,W.fP,W.n,W.ex,W.aM,W.h7,W.ez,W.bi,W.dP,W.hH,W.eF,W.eG,W.aN,W.eH,W.eK,W.aO,W.eO,W.eQ,W.aR,W.eS,W.aS,W.eX,W.aE,W.f_,W.iK,W.aV,W.f2,W.iP,W.ja,W.fa,W.fc,W.fe,W.fg,W.fi,P.b5,P.eB,P.b7,P.eM,P.i3,P.eY,P.ba,P.f4,P.fs,P.ep,P.du,P.e2,P.c4,P.e5,P.eb,P.eh,P.eU])
s(J.dL,[J.i_,J.ca,J.bA])
t(J.lb,J.b3)
s(J.cF,[J.dJ,J.dI])
t(P.hm,P.eE)
s(P.hm,[H.ei,W.jB,W.ap,P.h_])
t(H.r,H.ei)
s(P.k,[H.fS,H.hr,H.d3])
s(H.fS,[H.c0,H.hj])
s(P.b2,[H.hs,H.ju])
t(H.ht,H.c0)
t(H.fF,H.fE)
s(P.bw,[H.hW,H.he,H.j3,H.iT,H.fA,H.id,P.fq,P.e_,P.aK,P.j4,P.j1,P.cT,P.fD,P.fK])
s(H.cv,[H.l_,H.iD,H.kH,H.kI,H.kJ,P.jx,P.jw,P.jy,P.jz,P.kd,P.kc,P.jI,P.jM,P.jJ,P.jK,P.jL,P.jP,P.jQ,P.jO,P.jN,P.iy,P.iz,P.kw,P.jY,P.jX,P.jZ,P.hl,P.hp,P.fQ,P.fR,P.j9,P.j6,P.j7,P.j8,P.kf,P.kg,P.ki,P.kh,P.kq,P.kp,P.kr,P.ks,W.fT,W.hJ,W.hL,W.ic,W.iv,W.jH,W.hU,W.hT,W.k1,W.k2,W.kb,W.kl,P.k7,P.ky,P.h0,P.h1,P.fu,E.i8,E.i9,E.ia,E.iJ,D.fW,D.fX,F.kn,F.kz,F.kB,F.kC,F.kD,F.kW,F.kX,F.kZ,F.kL,F.kA,F.jr,F.jq,F.jj,F.jk,O.hB,O.hC,O.hD,O.hE,O.hF,O.hG,T.iI,V.kV,V.i5,V.im,V.il,V.io,L.kM,L.kN,L.kO,L.kP,L.kQ,L.kR,L.kS])
s(H.iD,[H.it,H.cs])
t(H.jv,P.fq)
t(P.ho,P.ae)
s(P.ho,[H.a0,W.jA])
t(H.dW,H.bD)
s(H.dW,[H.d8,H.da])
t(H.d9,H.d8)
t(H.cL,H.d9)
t(H.db,H.da)
t(H.dX,H.db)
s(H.dX,[H.hO,H.hP,H.hQ,H.hR,H.hS,H.dY,H.cM])
t(P.jW,P.km)
t(P.jU,P.k0)
t(P.f7,P.hq)
t(P.ej,P.f7)
s(P.bV,[P.fw,P.fU])
t(P.bu,P.ix)
s(P.bu,[P.fx,P.h8,P.jd,P.jc])
t(P.jb,P.fU)
s(P.aa,[P.t,P.l])
s(P.aK,[P.c3,P.ha])
t(P.jD,P.cd)
s(W.j,[W.E,W.fZ,W.cI,W.aQ,W.dc,W.aU,W.aF,W.de,W.js,W.d4,P.fv,P.bS])
s(W.E,[W.U,W.bs,W.d5])
s(W.U,[W.w,P.p])
s(W.w,[W.dr,W.fp,W.cr,W.br,W.bU,W.aC,W.h2,W.cD,W.cE,W.ie,W.b8,W.e9,W.iB,W.iC,W.cW])
s(W.b0,[W.cw,W.fI,W.fJ])
t(W.fG,W.b1)
t(W.cx,W.eq)
t(W.et,W.es)
t(W.dD,W.et)
t(W.ev,W.eu)
t(W.fO,W.ev)
t(W.aD,W.bT)
t(W.ey,W.ex)
t(W.cA,W.ey)
t(W.eA,W.ez)
t(W.bY,W.eA)
t(W.bL,W.n)
s(W.bL,[W.b4,W.af,W.aW])
t(W.hI,W.eF)
t(W.hK,W.eG)
t(W.eI,W.eH)
t(W.hM,W.eI)
t(W.eL,W.eK)
t(W.cN,W.eL)
t(W.eP,W.eO)
t(W.i1,W.eP)
t(W.ib,W.eQ)
t(W.dd,W.dc)
t(W.iq,W.dd)
t(W.eT,W.eS)
t(W.ir,W.eT)
t(W.iu,W.eX)
t(W.f0,W.f_)
t(W.iE,W.f0)
t(W.df,W.de)
t(W.iF,W.df)
t(W.f3,W.f2)
t(W.iO,W.f3)
t(W.bc,W.af)
t(W.fb,W.fa)
t(W.jC,W.fb)
t(W.er,W.dE)
t(W.fd,W.fc)
t(W.jR,W.fd)
t(W.ff,W.fe)
t(W.eJ,W.ff)
t(W.fh,W.fg)
t(W.k4,W.fh)
t(W.fj,W.fi)
t(W.k8,W.fj)
t(W.jE,W.jA)
t(W.jF,P.iw)
t(W.lm,W.jF)
t(W.jG,P.cU)
t(W.ka,W.eR)
t(P.k6,P.k5)
t(P.ak,P.jV)
t(P.eC,P.eB)
t(P.hg,P.eC)
t(P.eN,P.eM)
t(P.hX,P.eN)
t(P.cQ,P.p)
t(P.eZ,P.eY)
t(P.iA,P.eZ)
t(P.f5,P.f4)
t(P.iQ,P.f5)
t(P.ft,P.ep)
t(P.hY,P.bS)
t(P.eV,P.eU)
t(P.is,P.eV)
s(E.fy,[Z.dv,A.cR,T.cX])
s(D.D,[D.bZ,D.c_,D.L,X.i2])
s(X.i2,[X.dQ,X.bC,X.ef])
s(O.a3,[D.dN,U.cC])
s(D.fB,[U.fC,U.aj])
t(U.dz,U.aj)
t(A.hu,A.cR)
s(A.eg,[A.aG,A.iX,A.iY,A.iZ,A.iV,A.ah,A.iW,A.Z,A.d_,A.j0,A.d0,A.aA,A.c7,A.c8])
t(F.ip,F.fY)
t(F.iU,F.hh)
t(F.jm,F.jn)
t(F.hV,F.jo)
t(O.dS,O.bK)
s(O.dT,[O.hv,O.hw,O.b6])
s(O.b6,[O.hz,O.hA])
t(T.ec,T.cX)
t(T.iG,T.ec)
s(V.dR,[V.at,V.cZ])
t(X.h4,X.ea)
s(V.bt,[V.fL,V.h5,V.h6,V.i0])
u(H.ei,H.d1)
u(H.d8,P.x)
u(H.d9,H.bX)
u(H.da,P.x)
u(H.db,H.bX)
u(P.eE,P.x)
u(P.f7,P.ke)
u(W.eq,W.fH)
u(W.es,P.x)
u(W.et,W.G)
u(W.eu,P.x)
u(W.ev,W.G)
u(W.ex,P.x)
u(W.ey,W.G)
u(W.ez,P.x)
u(W.eA,W.G)
u(W.eF,P.ae)
u(W.eG,P.ae)
u(W.eH,P.x)
u(W.eI,W.G)
u(W.eK,P.x)
u(W.eL,W.G)
u(W.eO,P.x)
u(W.eP,W.G)
u(W.eQ,P.ae)
u(W.dc,P.x)
u(W.dd,W.G)
u(W.eS,P.x)
u(W.eT,W.G)
u(W.eX,P.ae)
u(W.f_,P.x)
u(W.f0,W.G)
u(W.de,P.x)
u(W.df,W.G)
u(W.f2,P.x)
u(W.f3,W.G)
u(W.fa,P.x)
u(W.fb,W.G)
u(W.fc,P.x)
u(W.fd,W.G)
u(W.fe,P.x)
u(W.ff,W.G)
u(W.fg,P.x)
u(W.fh,W.G)
u(W.fi,P.x)
u(W.fj,W.G)
u(P.eB,P.x)
u(P.eC,W.G)
u(P.eM,P.x)
u(P.eN,W.G)
u(P.eY,P.x)
u(P.eZ,W.G)
u(P.f4,P.x)
u(P.f5,W.G)
u(P.ep,P.ae)
u(P.eU,P.x)
u(P.eV,W.G)})()
var v={mangledGlobalNames:{l:"int",t:"double",aa:"num",f:"String",R:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.af]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[F.a8]},{func:1,ret:P.O,args:[F.av,P.t,P.t]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.l,[P.k,E.an]]},{func:1,ret:P.O,args:[D.D]},{func:1,ret:P.O,args:[W.n]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.t},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[W.n]},{func:1,ret:V.a2,args:[P.t]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.f,args:[P.l]},{func:1,ret:P.t,args:[P.t]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.l,[P.k,U.aj]]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ad]]},{func:1,ret:P.R,args:[W.E]},{func:1,ret:P.R,args:[W.U,P.f,P.f,W.bN]},{func:1,ret:P.R,args:[W.az]},{func:1,ret:P.R,args:[P.f]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[P.l,[P.k,V.ao]]},{func:1,ret:W.U,args:[W.E]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:-1,args:[W.bc]},{func:1,args:[W.n]},{func:1,ret:P.R,args:[[P.k,D.ad]]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.O,args:[P.f,,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.l]},{func:1,ret:[P.y,P.f,P.f],args:[[P.y,P.f,P.f],P.f]},{func:1,ret:[P.aI,,],args:[,]},{func:1,ret:P.O,args:[,],opt:[P.au]},{func:1,ret:P.Q,args:[P.l]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aL,A.aL]},{func:1,ret:P.l,args:[A.aP,A.aP]},{func:1,ret:P.l,args:[A.aT,A.aT]},{func:1,args:[P.f]},{func:1,ret:P.O,args:[P.b9]},{func:1,ret:P.R,args:[V.bt]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.br.prototype
C.j=W.bU.prototype
C.O=W.aC.prototype
C.R=J.a.prototype
C.a=J.b3.prototype
C.S=J.dI.prototype
C.d=J.dJ.prototype
C.k=J.dK.prototype
C.e=J.cF.prototype
C.b=J.bz.prototype
C.T=J.bA.prototype
C.Z=W.cN.prototype
C.B=J.i_.prototype
C.c=P.c4.prototype
C.a_=W.b8.prototype
C.C=W.e9.prototype
C.r=J.ca.prototype
C.D=W.bc.prototype
C.E=W.d4.prototype
C.a0=new P.fx()
C.F=new P.fw()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.L=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.K=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.J=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.v=function(hooks) { return hooks; }

C.M=new P.hZ()
C.h=new P.jb()
C.N=new P.jd()
C.f=new P.jW()
C.o=new P.bv(0)
C.P=new P.bv(5e6)
C.Q=new P.h9("element",!1,!1,!1)
C.w=H.d(u([127,2047,65535,1114111]),[P.l])
C.l=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.m=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.x=H.d(u([]),[P.f])
C.W=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.q=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.Y=new H.fF(0,{},C.x,[P.f,P.f])})();(function staticFields(){$.aZ=0
$.ct=null
$.lR=null
$.ls=!1
$.mZ=null
$.mR=null
$.n5=null
$.kE=null
$.kK=null
$.lD=null
$.cg=null
$.di=null
$.dj=null
$.lt=!1
$.a_=C.f
$.aw=[]
$.bh=null
$.l6=null
$.lX=null
$.lW=null
$.d7=P.le(P.f,P.bx)
$.m5=null
$.m9=null
$.bG=null
$.mf=null
$.ms=null
$.mv=null
$.mu=null
$.je=null
$.jf=null
$.jg=null
$.mt=null
$.my=null
$.m8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q0","na",function(){return H.mY("_$dart_dartClosure")})
u($,"q1","lJ",function(){return H.mY("_$dart_js")})
u($,"q7","nb",function(){return H.bb(H.iS({
toString:function(){return"$receiver$"}}))})
u($,"q8","nc",function(){return H.bb(H.iS({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q9","nd",function(){return H.bb(H.iS(null))})
u($,"qa","ne",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qd","nh",function(){return H.bb(H.iS(void 0))})
u($,"qe","ni",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qc","ng",function(){return H.bb(H.mm(null))})
u($,"qb","nf",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qg","nk",function(){return H.bb(H.mm(void 0))})
u($,"qf","nj",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qx","lK",function(){return P.ow()})
u($,"qj","nl",function(){return P.os()})
u($,"qy","np",function(){return H.o0(H.cf(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qA","nr",function(){return P.oe("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qB","ns",function(){return P.oW()})
u($,"qz","nq",function(){return P.m_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"qq","no",function(){return Z.aH(0)})
u($,"qk","nm",function(){return Z.aH(511)})
u($,"qs","bp",function(){return Z.aH(1)})
u($,"qr","bo",function(){return Z.aH(2)})
u($,"qm","bn",function(){return Z.aH(4)})
u($,"qt","bQ",function(){return Z.aH(8)})
u($,"qu","bR",function(){return Z.aH(16)})
u($,"qn","dm",function(){return Z.aH(32)})
u($,"qo","dn",function(){return Z.aH(64)})
u($,"qp","nn",function(){return Z.aH(96)})
u($,"qv","cq",function(){return Z.aH(128)})
u($,"ql","bm",function(){return Z.aH(256)})
u($,"q_","n9",function(){return new V.fV(1e-9)})
u($,"pZ","K",function(){return $.n9()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cK,DataView:H.bD,ArrayBufferView:H.bD,Float32Array:H.cL,Float64Array:H.cL,Int16Array:H.hO,Int32Array:H.hP,Int8Array:H.hQ,Uint16Array:H.hR,Uint32Array:H.hS,Uint8ClampedArray:H.dY,CanvasPixelArray:H.dY,Uint8Array:H.cM,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fo,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fp,HTMLBaseElement:W.cr,Blob:W.bT,HTMLBodyElement:W.br,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.cu,CDATASection:W.bs,CharacterData:W.bs,Comment:W.bs,ProcessingInstruction:W.bs,Text:W.bs,CSSNumericValue:W.cw,CSSUnitValue:W.cw,CSSPerspective:W.fG,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cx,MSStyleCSSProperties:W.cx,CSS2Properties:W.cx,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fI,CSSUnparsedValue:W.fJ,DataTransferItemList:W.fM,HTMLDivElement:W.aC,DOMException:W.fN,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fO,DOMTokenList:W.fP,Element:W.U,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aD,FileList:W.cA,FileWriter:W.fZ,HTMLFormElement:W.h2,Gamepad:W.aM,History:W.h7,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.bi,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b4,Location:W.dP,MediaList:W.hH,MessagePort:W.cI,MIDIInputMap:W.hI,MIDIOutputMap:W.hK,MimeType:W.aN,MimeTypeArray:W.hM,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cN,RadioNodeList:W.cN,Plugin:W.aO,PluginArray:W.i1,RTCStatsReport:W.ib,HTMLSelectElement:W.ie,SourceBuffer:W.aQ,SourceBufferList:W.iq,SpeechGrammar:W.aR,SpeechGrammarList:W.ir,SpeechRecognitionResult:W.aS,Storage:W.iu,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,HTMLTableElement:W.e9,HTMLTableRowElement:W.iB,HTMLTableSectionElement:W.iC,HTMLTemplateElement:W.cW,TextTrack:W.aU,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iK,Touch:W.aV,TouchEvent:W.aW,TouchList:W.iO,TrackDefaultList:W.iP,CompositionEvent:W.bL,FocusEvent:W.bL,TextEvent:W.bL,UIEvent:W.bL,URL:W.ja,VideoTrackList:W.js,WheelEvent:W.bc,Window:W.d4,DOMWindow:W.d4,Attr:W.d5,CSSRuleList:W.jC,ClientRect:W.er,DOMRect:W.er,GamepadList:W.jR,NamedNodeMap:W.eJ,MozNamedAttrMap:W.eJ,SpeechRecognitionResultList:W.k4,StyleSheetList:W.k8,SVGLength:P.b5,SVGLengthList:P.hg,SVGNumber:P.b7,SVGNumberList:P.hX,SVGPointList:P.i3,SVGScriptElement:P.cQ,SVGStringList:P.iA,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.ba,SVGTransformList:P.iQ,AudioBuffer:P.fs,AudioParamMap:P.ft,AudioTrackList:P.fv,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.hY,WebGLBuffer:P.du,WebGLProgram:P.e2,WebGL2RenderingContext:P.c4,WebGLShader:P.e5,WebGLTexture:P.eb,WebGLUniformLocation:P.eh,SQLResultSetRowList:P.is})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dX.$nativeSuperclassTag="ArrayBufferView"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.n1,[])
else L.n1([])})})()
//# sourceMappingURL=test.dart.js.map
