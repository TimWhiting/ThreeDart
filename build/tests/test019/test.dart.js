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
a[c]=function(){a[c]=function(){H.mM(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jz(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jn:function jn(){},
jk:function(){return new P.bY("No element")},
lc:function(){return new P.bY("Too many elements")},
d1:function(a,b,c,d){if(c-b<=32)H.ly(a,b,c,d)
else H.lx(a,b,c,d)},
ly:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a_()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
lx:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
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
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a_()
if(a1>0){p=q
q=r
r=p}C.a.n(a2,d,u)
C.a.n(a2,b,s)
C.a.n(a2,c,q)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.n(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.n(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.L(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.a8()
if(k<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a_()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.a8()
if(g<0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a_()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a_()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a3,a2[a1])
C.a.n(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.c(a2,a1)
C.a.n(a2,a4,a2[a1])
C.a.n(a2,a1,r)
H.d1(a2,a3,o-2,a5)
H.d1(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.c(a2,o)
if(!J.L(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.c(a2,n)
if(!J.L(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.c(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.c(a2,o)
C.a.n(a2,m,a2[o])
C.a.n(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.c(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.c(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a8()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.c(a2,o)
C.a.n(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.c(a2,n)
C.a.n(a2,o,a2[n])
C.a.n(a2,n,l)
o=i}else{if(n>=a1)return H.c(a2,n)
C.a.n(a2,m,a2[n])
C.a.n(a2,n,l)}n=j
break}}}H.d1(a2,o,n,a5)}else H.d1(a2,o,n,a5)},
m:function m(a){this.a=a},
eP:function eP(){},
cL:function cL(){},
bN:function bN(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b){this.a=null
this.b=a
this.c=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a,b){this.a=a
this.b=b},
cA:function cA(){},
hZ:function hZ(){},
dh:function dh(){},
el:function(a){var u,t=H.mN(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mv:function(a){return v.types[a]},
mC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iv},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a0(a)
if(typeof u!=="string")throw H.f(H.b9(a))
return u},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bW:function(a){return H.lk(a)+H.kt(H.cj(a),0,null)},
lk:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibt){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.el(t.length>1&&C.b.aF(t,0)===36?C.b.am(t,1):t)},
k9:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ls:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b9(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.b5(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b9(s))}return H.k9(r)},
ka:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b9(s))
if(s<0)throw H.f(H.b9(s))
if(s>65535)return H.ls(a)}return H.k9(a)},
jp:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.b5(u,10))>>>0,56320|u&1023)}throw H.f(P.an(a,0,1114111,null,null))},
bp:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lr:function(a){var u=H.bp(a).getFullYear()+0
return u},
lp:function(a){var u=H.bp(a).getMonth()+1
return u},
ll:function(a){var u=H.bp(a).getDate()+0
return u},
lm:function(a){var u=H.bp(a).getHours()+0
return u},
lo:function(a){var u=H.bp(a).getMinutes()+0
return u},
lq:function(a){var u=H.bp(a).getSeconds()+0
return u},
ln:function(a){var u=H.bp(a).getMilliseconds()+0
return u},
u:function(a){throw H.f(H.b9(a))},
c:function(a,b){if(a==null)J.bd(a)
throw H.f(H.by(a,b))},
by:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ac(!0,b,s,null)
u=J.bd(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.G(b,a,s,null,u)
return P.h2(b,s)},
mo:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bq(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bq(a,c,!0,b,"end",u)
return new P.ac(!0,b,"end",null)},
b9:function(a){return new P.ac(!0,a,null,null)},
mk:function(a){if(typeof a!=="number")throw H.f(H.b9(a))
return a},
f:function(a){var u
if(a==null)a=new P.cV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kE})
u.name=""}else u.toString=H.kE
return u},
kE:function(){return J.a0(this.dartException)},
t:function(a){throw H.f(a)},
n:function(a){throw H.f(P.aL(a))},
ao:function(a){var u,t,s,r,q,p
a=H.kD(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hP:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k4:function(a,b){return new H.fS(a,b==null?null:b.method)},
jo:function(a,b){var u=b==null,t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
aF:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.b5(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jo(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k4(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kH()
q=$.kI()
p=$.kJ()
o=$.kK()
n=$.kN()
m=$.kO()
l=$.kM()
$.kL()
k=$.kQ()
j=$.kP()
i=r.ab(u)
if(i!=null)return f.$1(H.jo(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.jo(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k4(u,i))}}return f.$1(new H.hY(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ac(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d3()
return a},
jE:function(a){var u
if(a==null)return new H.dZ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dZ(a)},
ms:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
mB:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mB)
a.$identity=u
return u},
l6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hp().constructor.prototype):Object.create(new H.bB(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.C()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jR(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l2(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jR(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l2:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jQ:H.ja
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
l3:function(a,b,c,d){var u=H.ja
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jR:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l3(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.C()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.ew("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.C()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bC
return new Function(r+H.e(q==null?$.bC=H.ew("self"):q)+"."+H.e(u)+"("+o+");}")()},
l4:function(a,b,c,d){var u=H.ja,t=H.jQ
switch(b?-1:a){case 0:throw H.f(H.lv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l5:function(a,b){var u,t,s,r,q,p,o,n=$.bC
if(n==null)n=$.bC=H.ew("self")
u=$.jP
if(u==null)u=$.jP=H.ew("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l4(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ah
if(typeof u!=="number")return u.C()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.C()
$.ah=u+1
return new Function(n+u+"}")()},
jz:function(a,b,c,d,e,f,g){return H.l6(a,b,c,d,!!e,!!f,g)},
ja:function(a){return a.a},
jQ:function(a){return a.c},
ew:function(a){var u,t,s,r=new H.bB("self","target","receiver","name"),q=J.jl(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mG:function(a,b){throw H.f(H.l1(a,H.el(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mG(a,b)},
mq:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l1:function(a,b){return new H.ex("CastError: "+P.jh(a)+": type '"+H.e(H.mg(a))+"' is not a subtype of type '"+b+"'")},
mg:function(a){var u,t=J.N(a)
if(!!t.$ibE){u=H.mq(t)
if(u!=null)return H.mH(u)
return"Closure"}return H.bW(a)},
mM:function(a){throw H.f(new P.eH(a))},
lv:function(a){return new H.h9(a)},
ky:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cj:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.j5(a["$a"+H.e(c)],H.cj(b))},
mu:function(a,b,c,d){var u=H.j5(a["$a"+H.e(c)],H.cj(b))
return u==null?null:u[d]},
jD:function(a,b,c){var u=H.j5(a["$a"+H.e(b)],H.cj(a))
return u==null?null:u[c]},
ck:function(a,b){var u=H.cj(a)
return u==null?null:u[b]},
mH:function(a){return H.b8(a,null)},
b8:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.el(a[0].name)+H.kt(a,1,b)
if(typeof a=="function")return H.el(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.e(b[t])}if('func' in a)return H.lP(a,b)
if('futureOr' in a)return"FutureOr<"+H.b8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lP:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.q])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.b.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.b8(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b8(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b8(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b8(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mr(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b8(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kt:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aA("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b8(p,c)}return"<"+u.h(0)+">"},
j5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nh:function(a,b,c){return a.apply(b,H.j5(J.N(b)["$a"+H.e(c)],H.cj(b)))},
ni:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mD:function(a){var u,t,s,r,q=$.kz.$1(a),p=$.iW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kw.$2(a,q)
if(q!=null){p=$.iW[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j1[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j3(u)
$.iW[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j1[q]=u
return u}if(s==="-"){r=H.j3(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kB(a,u)
if(s==="*")throw H.f(P.kl(q))
if(v.leafTags[q]===true){r=H.j3(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kB(a,u)},
kB:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j3:function(a){return J.jG(a,!1,null,!!a.$iv)},
mE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j3(u)
else return J.jG(u,c,null,null)},
mz:function(){if(!0===$.jF)return
$.jF=!0
H.mA()},
mA:function(){var u,t,s,r,q,p,o,n
$.iW=Object.create(null)
$.j1=Object.create(null)
H.my()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kC.$1(q)
if(p!=null){o=H.mE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
my:function(){var u,t,s,r,q,p,o=C.x()
o=H.bw(C.y,H.bw(C.z,H.bw(C.p,H.bw(C.p,H.bw(C.A,H.bw(C.B,H.bw(C.C(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kz=new H.iZ(r)
$.kw=new H.j_(q)
$.kC=new H.j0(p)},
bw:function(a,b){return a(b)||b},
le:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.f0("Illegal RegExp pattern ("+String(p)+")",a))},
mJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mp:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jJ:function(a,b,c){var u=H.mK(a,b,c)
return u},
mK:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kD(b),'g'),H.mp(c))},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fS:function fS(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
j7:function j7(a){this.a=a},
dZ:function dZ(a){this.a=a
this.b=null},
bE:function bE(){},
hx:function hx(){},
hp:function hp(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a){this.a=a},
h9:function h9(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
fc:function fc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.by(b,a))},
lO:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mo(a,b,c))
return b},
bS:function bS(){},
cQ:function cQ(){},
bR:function bR(){},
cR:function cR(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
cS:function cS(){},
fP:function fP(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
mr:function(a){return J.jY(a?Object.keys(a):[],null)},
mN:function(a){return v.mangledGlobalNames[a]},
mF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jF==null){H.mz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kl("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jK()]
if(r!=null)return r
r=H.mD(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jK(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
ld:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.an(a,0,4294967295,"length",null))
return J.jY(new Array(a),b)},
jY:function(a,b){return J.jl(H.b(a,[b]))},
jl:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cE.prototype
return J.cD.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.cF.prototype
if(typeof a=="boolean")return J.fb.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.U)return a
return J.iY(a)},
jA:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.U)return a
return J.iY(a)},
iX:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.U)return a
return J.iY(a)},
mt:function(a){if(typeof a=="number")return J.bL.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bt.prototype
return a},
jB:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bt.prototype
return a},
jC:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.U)return a
return J.iY(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).q(a,b)},
em:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jA(a).i(a,b)},
kW:function(a,b,c,d){return J.jC(a).fo(a,b,c,d)},
j8:function(a,b){return J.mt(a).fC(a,b)},
j9:function(a,b){return J.iX(a).D(a,b)},
kX:function(a,b){return J.iX(a).J(a,b)},
kY:function(a){return J.jC(a).gfz(a)},
bb:function(a){return J.N(a).gG(a)},
bc:function(a){return J.iX(a).gO(a)},
bd:function(a){return J.jA(a).gl(a)},
jM:function(a){return J.iX(a).hc(a)},
kZ:function(a,b,c){return J.jB(a).b1(a,b,c)},
l_:function(a){return J.jB(a).hm(a)},
a0:function(a){return J.N(a).h(a)},
a:function a(){},
fb:function fb(){},
cF:function cF(){},
cG:function cG(){},
fW:function fW(){},
bt:function bt(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jm:function jm(a){this.$ti=a},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bL:function bL(){},
cE:function cE(){},
cD:function cD(){},
aU:function aU(){}},P={
lE:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mh()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bx(new P.ij(s),1)).observe(u,{childList:true})
return new P.ii(s,u,t)}else if(self.setImmediate!=null)return P.mi()
return P.mj()},
lF:function(a){self.scheduleImmediate(H.bx(new P.ik(a),0))},
lG:function(a){self.setImmediate(H.bx(new P.il(a),0))},
lH:function(a){P.js(C.i,a)},
js:function(a,b){var u=C.d.a1(a.a,1000)
return P.lM(u<0?0:u,b)},
kj:function(a,b){var u=C.d.a1(a.a,1000)
return P.lN(u<0?0:u,b)},
lM:function(a,b){var u=new P.e4()
u.dQ(a,b)
return u},
lN:function(a,b){var u=new P.e4()
u.dR(a,b)
return u},
ma:function(){var u,t
for(;u=$.bv,u!=null;){$.ci=null
t=u.b
$.bv=t
if(t==null)$.ch=null
u.a.$0()}},
mf:function(){$.jx=!0
try{P.ma()}finally{$.ci=null
$.jx=!1
if($.bv!=null)$.jL().$1(P.kx())}},
md:function(a){var u=new P.dq(a)
if($.bv==null){$.bv=$.ch=u
if(!$.jx)$.jL().$1(P.kx())}else $.ch=$.ch.b=u},
me:function(a){var u,t,s=$.bv
if(s==null){P.md(a)
$.ci=$.ch
return}u=new P.dq(a)
t=$.ci
if(t==null){u.b=s
$.bv=$.ci=u}else{u.b=t.b
$.ci=t.b=u
if(u.b==null)$.ch=u}},
ki:function(a,b){var u=$.af
if(u===C.e)return P.js(a,b)
return P.js(a,u.fA(b))},
lB:function(a,b){var u=$.af
if(u===C.e)return P.kj(a,b)
return P.kj(a,u.cM(b,P.da))},
ku:function(a,b,c,d,e){var u={}
u.a=d
P.me(new P.iU(u,e))},
mb:function(a,b,c,d){var u,t=$.af
if(t===c)return d.$0()
$.af=c
u=t
try{t=d.$0()
return t}finally{$.af=u}},
mc:function(a,b,c,d,e){var u,t=$.af
if(t===c)return d.$1(e)
$.af=c
u=t
try{t=d.$1(e)
return t}finally{$.af=u}},
ij:function ij(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
e4:function e4(){this.c=0},
iM:function iM(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a){this.a=a
this.b=null},
d5:function d5(){},
hs:function hs(){},
da:function da(){},
iP:function iP(){},
iU:function iU(a,b){this.a=a
this.b=b},
iz:function iz(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function(a,b){return new H.K([a,b])},
lg:function(a){return H.ms(a,new H.K([null,null]))},
cK:function(a){return new P.iw([a])},
jw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lL:function(a,b){var u=new P.dG(a,b)
u.c=a.e
return u},
lb:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.q])
$.a_.push(a)
try{P.lQ(a,u)}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=P.kg(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jj:function(a,b,c){var u,t
if(P.jy(a))return b+"..."+c
u=new P.aA(b)
$.a_.push(a)
try{t=u
t.a=P.kg(t.a,a,", ")}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=$.a_.length,t=0;t<u;++t)if(a===$.a_[t])return!0
return!1},
lQ:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gE(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.u();r=q,q=p){p=n.gE(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
k_:function(a,b){var u,t,s=P.cK(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.m(0,a[t])
return s},
k1:function(a){var u,t={}
if(P.jy(a))return"{...}"
u=new P.aA("")
try{$.a_.push(a)
u.a+="{"
t.a=!0
J.kX(a,new P.fm(t,u))
u.a+="}"}finally{if(0>=$.a_.length)return H.c($.a_,-1)
$.a_.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iw:function iw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ix:function ix(a){this.a=a
this.c=this.b=null},
dG:function dG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fi:function fi(){},
p:function p(){},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
au:function au(){},
iD:function iD(){},
dH:function dH(){},
ez:function ez(){},
eC:function eC(){},
eR:function eR(){},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f6:function f6(a){this.a=a},
i1:function i1(){},
i2:function i2(){},
iN:function iN(a){this.b=0
this.c=a},
la:function(a){if(a instanceof H.bE)return a.h(0)
return"Instance of '"+H.e(H.bW(a))+"'"},
lh:function(a,b,c){var u,t,s=J.ld(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k0:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bc(a);u.u();)t.push(u.gE(u))
if(b)return t
return J.jl(t)},
jr:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.kc(0,null,u)
return H.ka(t<u?C.a.dB(a,0,t):a)}return P.lz(a,0,null)},
lz:function(a,b,c){var u,t,s=J.bc(a)
for(u=0;u<b;++u)if(!s.u())throw H.f(P.an(b,0,u,null,null))
t=[]
for(;s.u();)t.push(s.gE(s))
return H.ka(t)},
lt:function(a){return new H.fc(a,H.le(a,!1,!0,!1,!1,!1))},
kg:function(a,b,c){var u=J.bc(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.u())}else{a+=H.e(u.gE(u))
for(;u.u();)a=a+c+H.e(u.gE(u))}return a},
ks:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.kV().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.fD(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jp(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l7:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cv:function(a){if(a>=10)return""+a
return"0"+a},
jT:function(a){return new P.aM(1000*a)},
jh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a0(a)
if(typeof a==="string")return JSON.stringify(a)
return P.la(a)},
l0:function(a){return new P.ac(!1,null,null,a)},
jO:function(a,b,c){return new P.ac(!0,a,b,c)},
h2:function(a,b){return new P.bq(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bq(b,c,!0,a,d,"Invalid value")},
kc:function(a,b,c){if(0>a||a>c)throw H.f(P.an(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.an(b,a,c,"end",null))
return b}return c},
kb:function(a,b){if(typeof a!=="number")return a.a8()
if(a<0)throw H.f(P.an(a,0,null,b,null))},
G:function(a,b,c,d,e){var u=e==null?J.bd(b):e
return new P.f9(u,!0,a,c,"Index out of range")},
a4:function(a){return new P.i_(a)},
kl:function(a){return new P.hX(a)},
kf:function(a){return new P.bY(a)},
aL:function(a){return new P.eB(a)},
r:function(a){return new P.dy(a)},
jI:function(a){H.mF(a)},
ap:function ap(){},
a7:function a7(a,b){this.a=a
this.b=b},
J:function J(){},
aM:function aM(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
bi:function bi(){},
cV:function cV(){},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f9:function f9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i_:function i_(a){this.a=a},
hX:function hX(a){this.a=a},
bY:function bY(a){this.a=a},
eB:function eB(a){this.a=a},
fV:function fV(){},
d3:function d3(){},
eH:function eH(a){this.a=a},
dy:function dy(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
f2:function f2(){},
x:function x(){},
h:function h(){},
fa:function fa(){},
aj:function aj(){},
cN:function cN(){},
aY:function aY(){},
ab:function ab(){},
U:function U(){},
q:function q(){},
aA:function aA(a){this.a=a},
mn:function(a){var u,t=J.N(a)
if(!!t.$iaQ){u=t.gcS(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e9(a.data,a.height,a.width)},
mm:function(a){if(a instanceof P.e9)return{data:a.a,height:a.b,width:a.c}
return a},
aE:function(a){var u,t,s,r,q
if(a==null)return
u=P.jZ(P.q,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.n(0,q,a[q])}return u},
ml:function(a){var u={}
a.J(0,new P.iV(u))
return u},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
eY:function eY(){},
eZ:function eZ(){},
iv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lK:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iy:function iy(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bm:function bm(){},
ff:function ff(){},
bo:function bo(){},
fT:function fT(){},
h0:function h0(){},
bX:function bX(){},
ht:function ht(){},
j:function j(){},
bs:function bs(){},
hN:function hN(){},
dE:function dE(){},
dF:function dF(){},
dP:function dP(){},
dQ:function dQ(){},
e0:function e0(){},
e1:function e1(){},
e7:function e7(){},
e8:function e8(){},
er:function er(){},
es:function es(){},
et:function et(a){this.a=a},
eu:function eu(){},
be:function be(){},
fU:function fU(){},
dr:function dr(){},
cZ:function cZ(){},
ho:function ho(){},
dX:function dX(){},
dY:function dY(){}},W={
jN:function(){var u=document.createElement("a")
return u},
jc:function(){var u=document.createElement("canvas")
return u},
l9:function(a,b,c){var u=document.body,t=(u&&C.n).aa(u,a,b,c)
t.toString
u=new H.c4(new W.X(t),new W.eQ(),[W.H])
return u.gaB(u)},
jf:function(a){return"wheel"},
bG:function(a){var u,t,s,r="element tag unavailable"
try{u=J.jC(a)
t=u.gdl(a)
if(typeof t==="string")r=u.gdl(a)}catch(s){H.aF(s)}return r},
jX:function(a){var u=document.createElement("img")
u.src=a
return u},
iu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kq:function(a,b,c,d){var u=W.iu(W.iu(W.iu(W.iu(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Q:function(a,b,c,d){var u=W.kv(new W.is(c),W.i)
if(u!=null&&!0)J.kW(a,b,u,!1)
return new W.ir(a,b,u,!1)},
kp:function(a){var u=W.jN(),t=window.location
u=new W.c6(new W.iC(u,t))
u.dM(a)
return u},
lI:function(a,b,c,d){return!0},
lJ:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kr:function(){var u=P.q,t=P.k_(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iJ(t,P.cK(u),P.cK(u),P.cK(u),null)
t.dP(null,new H.fp(C.k,new W.iK(),[H.ck(C.k,0),u]),s,null)
return t},
kv:function(a,b){var u=$.af
if(u===C.e)return a
return u.cM(a,b)},
l:function l(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
co:function co(){},
bf:function bf(){},
bg:function bg(){},
aK:function aK(){},
eD:function eD(){},
E:function E(){},
bF:function bF(){},
eE:function eE(){},
a6:function a6(){},
ai:function ai(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
ad:function ad(){},
eK:function eK(){},
cx:function cx(){},
cy:function cy(){},
eL:function eL(){},
eM:function eM(){},
io:function io(a,b){this.a=a
this.b=b},
O:function O(){},
eQ:function eQ(){},
i:function i(){},
d:function d(){},
aO:function aO(){},
eV:function eV(){},
eW:function eW(){},
f_:function f_(){},
aP:function aP(){},
f5:function f5(){},
bJ:function bJ(){},
aQ:function aQ(){},
bK:function bK(){},
bl:function bl(){},
fj:function fj(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
fG:function fG(){},
fH:function fH(a){this.a=a},
aX:function aX(){},
fI:function fI(){},
am:function am(){},
X:function X(a){this.a=a},
H:function H(){},
cT:function cT(){},
aZ:function aZ(){},
fY:function fY(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
ha:function ha(){},
b_:function b_(){},
hl:function hl(){},
b0:function b0(){},
hm:function hm(){},
b1:function b1(){},
hq:function hq(){},
hr:function hr(a){this.a=a},
aB:function aB(){},
d6:function d6(){},
hu:function hu(){},
hv:function hv(){},
bZ:function bZ(){},
b2:function b2(){},
aC:function aC(){},
hy:function hy(){},
hz:function hz(){},
hH:function hH(){},
b3:function b3(){},
br:function br(){},
hL:function hL(){},
hM:function hM(){},
b4:function b4(){},
i0:function i0(){},
ig:function ig(){},
b6:function b6(){},
c5:function c5(){},
ip:function ip(){},
dt:function dt(){},
it:function it(){},
dM:function dM(){},
iG:function iG(){},
iH:function iH(){},
im:function im(){},
iq:function iq(a){this.a=a},
ir:function ir(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
is:function is(a){this.a=a},
c6:function c6(a){this.a=a},
F:function F(){},
cU:function cU(a){this.a=a},
fR:function fR(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(){},
iE:function iE(){},
iF:function iF(){},
iJ:function iJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iK:function iK(){},
iI:function iI(){},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ax:function ax(){},
iC:function iC(a,b){this.a=a
this.b=b},
ea:function ea(a){this.a=a},
iO:function iO(a){this.a=a},
ds:function ds(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
cb:function cb(){},
cc:function cc(){},
dV:function dV(){},
dW:function dW(){},
e_:function e_(){},
e2:function e2(){},
e3:function e3(){},
cd:function cd(){},
ce:function ce(){},
e5:function e5(){},
e6:function e6(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){}},T={
I:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aF(a,0)
t=C.b.aF(b,0)
s=new T.h1()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
o:function(a){var u=new T.hb()
u.dK(a)
return u},
aq:function aq(){},
cC:function cC(){},
aW:function aW(){},
Z:function Z(){this.a=null},
h1:function h1(){this.b=this.a=null},
hb:function hb(){this.a=null},
d8:function d8(){},
hA:function hA(){},
hB:function hB(){var _=this
_.y=_.d=_.c=_.b=_.a=null},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
hF:function hF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hE:function hE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
hJ:function(){var u=new R.hI(),t=P.q
u.a=new H.K([t,R.d4])
u.b=new H.K([t,R.dc])
return u},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a){this.b=a
this.c=null},
hI:function hI(){this.c=this.b=this.a=null},
de:function de(a){this.b=a
this.a=this.c=null}},O={
jd:function(a){var u=new O.ar([a])
u.b3(a)
return u},
ar:function ar(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bP:function bP(){this.b=this.a=null},
cO:function cO(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fr:function fr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bO:function bO(){},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fu:function fu(){var _=this
_.e=_.d=_.c=_.b=null},
fv:function fv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fw:function fw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){}},E={
jW:function(){var u,t=new E.at()
t.a=""
t.b=!0
u=O.jd(E.at)
t.y=u
u.aM(t.gfY(),t.gh0())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbj(0,null)
return t},
lu:function(a,b){var u=new E.h3(a)
u.dJ(a,b)
return u},
lA:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibg)return E.kh(a,!0,!0,!0,!1)
u=W.jc()
t=u.style
t.width="100%"
t.height="100%"
s.gcP(a).m(0,u)
return E.kh(u,!0,!0,!0,!1)},
kh:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d9(),p=C.f.c9(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lu(p,a)
u=new T.hD(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.di(a)
t=new X.fe()
t.c=new X.a8(!1,!1,!1)
t.d=P.cK(P.x)
u.b=t
t=new X.fJ(u)
t.f=0
t.r=V.ay()
t.x=V.ay()
t.ch=t.Q=1
u.c=t
t=new X.fk(u)
t.r=0
t.x=V.ay()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hK(u)
t.f=V.ay()
t.r=V.ay()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d5,P.U]])
u.z=t
s=document
t.push(W.Q(s,"contextmenu",u.ges(),!1))
u.z.push(W.Q(a,"focus",u.gez(),!1))
u.z.push(W.Q(a,"blur",u.gek(),!1))
u.z.push(W.Q(s,"keyup",u.geD(),!1))
u.z.push(W.Q(s,"keydown",u.geB(),!1))
u.z.push(W.Q(a,"mousedown",u.geH(),!1))
u.z.push(W.Q(a,"mouseup",u.geL(),!1))
u.z.push(W.Q(a,r,u.geJ(),!1))
t=u.z
W.jf(a)
W.jf(a)
t.push(W.Q(a,W.jf(a),u.geN(),!1))
u.z.push(W.Q(s,r,u.gev(),!1))
u.z.push(W.Q(s,"mouseup",u.gex(),!1))
u.z.push(W.Q(s,"pointerlockchange",u.geP(),!1))
u.z.push(W.Q(a,"touchstart",u.gf4(),!1))
u.z.push(W.Q(a,"touchend",u.gf0(),!1))
u.z.push(W.Q(a,"touchmove",u.gf2(),!1))
q.r=u
q.Q=!0
q.ch=!1
q.cx=new P.a7(Date.now(),!1)
q.cy=0
q.cB()
return q},
ev:function ev(){},
at:function at(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
d9:function d9(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hG:function hG(a){this.a=a}},Z={
jv:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.dn(b,u)},
aa:function(a){return new Z.aD(a)},
dn:function dn(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dp:function dp(a){this.a=a},
bD:function bD(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a}},D={
z:function(){var u=new D.bj()
u.d=0
return u},
ey:function ey(){},
bj:function bj(){var _=this
_.d=_.c=_.b=_.a=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
P:function P(){this.b=null},
aR:function aR(){this.b=null},
aS:function aS(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bh:function bh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a1:function a1(){},
cI:function cI(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fZ:function fZ(){},
hn:function hn(){}},X={cq:function cq(a,b){this.a=a
this.b=b},cH:function cH(a,b){this.a=a
this.b=b},fe:function fe(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fk:function fk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},aw:function aw(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fJ:function fJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bQ:function bQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h_:function h_(){},dd:function dd(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hK:function hK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},di:function di(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ji:function(a){var u=new X.f1(),t=new V.a5(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ke
if(t==null){t=V.kd(0,0,1,1)
$.ke=t}u.r=t
return u},
k5:function(a){var u,t,s=new X.cW()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().m(0,s.gem())
t=new D.w("mover",u,s.b)
t.b=!0
s.aj(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.A().a)){s.c=1.0471975511965976
t=new D.w("fov",t,1.0471975511965976)
t.b=!0
s.aj(t)}t=s.d
if(!(Math.abs(t-0.1)<$.A().a)){s.d=0.1
t=new D.w("near",t,0.1)
t.b=!0
s.aj(t)}t=s.e
if(!(Math.abs(t-2000)<$.A().a)){s.e=2000
t=new D.w("far",t,2000)
t.b=!0
s.aj(t)}return s},
jb:function jb(){},
f1:function f1(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(){this.b=this.a=null},
cW:function cW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){}},V={
mO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dt(a-b,u)
return(a<0?a+u:a)+b},
C:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.c.dn(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bz:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.q])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.C(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.b.ac(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
jH:function(a){return C.c.hj(Math.pow(2,C.J.bT(Math.log(H.mk(a))/Math.log(2))))},
bn:function(){var u=$.k3
return u==null?$.k3=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k2:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.aW(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.aW(s),q=new V.y(a.a,a.b,a.c),p=s.N(0).B(q),o=r.N(0).B(q),n=u.N(0).B(q)
return V.al(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ay:function(){var u=$.k7
return u==null?$.k7=new V.V(0,0):u},
k8:function(){var u=$.bU
return u==null?$.bU=new V.W(0,0,0):u},
kd:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cY(a,b,c,d)},
dm:function(){var u=$.ko
return u==null?$.ko=new V.y(0,0,0):u},
lC:function(){var u=$.i3
return u==null?$.i3=new V.y(-1,0,0):u},
ju:function(){var u=$.i4
return u==null?$.i4=new V.y(0,1,0):u},
lD:function(){var u=$.i5
return u==null?$.i5=new V.y(0,0,1):u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
cP:function cP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function(a){P.lB(C.G,new V.j4(a))},
lw:function(a){var u=new V.hg()
u.dL(a,!0)
return u},
cr:function cr(){},
j4:function j4(a){this.a=a},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f3:function f3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(){this.b=this.a=null},
hi:function hi(a){this.a=a},
hh:function hh(a){this.a=a},
hj:function hj(a){this.a=a}},U={
je:function(){var u=new U.eA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jS:function(a){var u=new U.ct()
u.a=a
return u},
eA:function eA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){this.b=this.a=null},
bI:function bI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dj:function dj(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cs:function cs(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cu:function cu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cz:function cz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ae:function ae(){}},A={
li:function(a,b){var u=a.as,t=new A.fq(b,u)
t.cg(b,u)
t.dI(a,b)
return t},
lj:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gah(a0)+a1.gah(a1)+a2.gah(a2)+a3.gah(a3)+a4.gah(a4)+a5.gah(a5)+a6.gah(a6)+a7.gah(a7)+a8.gah(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.n)(a9),++t)f+="_"+H.e(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.n)(b0),++t)f+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.n)(b1),++t)f+="_"+H.e(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
p=a6.a||a6.b||!1||a7.a||a7.b||!1
if(!(a1.a||a1.b||!1))if(!(a2.a||a2.b||!1)){q=a3.a||a3.b||!1||a4.a||a4.b||!1
o=q}else o=!0
else o=!0
q=!a4.a
n=!q||a4.b||!1||u>0||p
if(!(a2.a||a2.b||!1))m=a3.a||a3.b||!1||!q||a4.b||!1
else m=!0
if(!m)l=a5.a||a5.b||!1||p
else l=!0
k=a5.a||a5.b||!1
j=a0.b||a1.b||a2.b||a3.b||a4.b||a5.b||a6.b||a7.b||a8.b
i=e>0
h=l||k||n||!1
a=a&&j
g=$.ag()
if(l){u=$.aI()
g=new Z.aD(g.a|u.a)}if(k){u=$.aH()
g=new Z.aD(g.a|u.a)}if(j){u=$.aJ()
g=new Z.aD(g.a|u.a)}if(i){u=$.aG()
g=new Z.aD(g.a|u.a)}return new A.ft(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,m,p,r,h,!0,!1,!1,o,r,n,l,k,j,!1,i,a,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
iS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iT:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iS(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.j6(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
lU:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iS(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.b){t=u+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
lR:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iT(b,t,"ambient")
b.a+="\n"},
lS:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iT(b,t,"diffuse")
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
lV:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iT(b,t,"invDiffuse")
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
m0:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iT(b,t,"specular")
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
lX:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f
s=t.b
if(s){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=t.a
if(!(t||s||!1)||t)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(s?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
lZ:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iS(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
m_:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iS(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
lT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.j6(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.al()
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
r=[P.q]
o=H.b([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(r.a||r.b||!1)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.k(m," + ")+");\n"}else c.a+="   highLight = "+C.a.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
lY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.j6(t)
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
if(typeof u!=="number")return u.al()
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
c.a=r+"\n"}r=[P.q]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.k(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
o=a.b
if(o.a||o.b||!1)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.k(l," + ")+");\n"
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
m1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.j6(t)
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
if(typeof u!=="number")return u.al()
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
c.a=u+"\n"}u=[P.q]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.k(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
r=a.b
if(r.a||r.b||!1)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
lW:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.q])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
m2:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aA("")
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
A.lU(a,j)
A.lR(a,j)
A.lS(a,j)
A.lV(a,j)
A.m0(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lZ(a,j)
A.m_(a,j)}A.lX(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
j.a=r}q=q.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!(p||q||!1))r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(p){if(q){r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
j.a=r}}else if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}else if(p){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.lT(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.lY(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.n)(q),++o)A.m1(a,q[o],j)
A.lW(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.q])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.am(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.am(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.n)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.am(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
m3:function(a,b){var u,t,s
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
m5:function(a,b){var u
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
m4:function(a,b){var u
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
m7:function(a,b){var u,t
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
m8:function(a,b){var u,t
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
m6:function(a,b){var u
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
m9:function(a,b){var u
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
j6:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.am(a,1)},
jt:function(a,b,c,d,e){var u=new A.hQ(a,c,e)
u.f=d
P.lh(d,0,P.x)
return u},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a,b){var _=this
_.hs=_.cY=_.cX=_.cW=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hA=_.hz=_.hy=_.bS=_.bR=_.bQ=_.bP=_.bO=_.bN=_.hx=_.d9=_.d8=_.hw=_.d7=_.d6=_.d5=_.hv=_.d4=_.d3=_.d2=_.hu=_.d1=_.d0=_.ht=_.d_=_.cZ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cw:function cw(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.as=b3
_.cW=b4},
c0:function c0(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c2:function c2(a,b,c,d,e,f,g,h,i,j){var _=this
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
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d_:function d_(){},
hk:function hk(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
df:function df(){},
hV:function hV(a){this.a=a},
dg:function dg(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
c1:function c1(a,b,c){this.a=a
this.c=b
this.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
b5:function b5(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iR:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cf:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.y(u+a3,t+a1,s+a2)
q=new V.y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iR(i)
l=F.iR(j.b)
k=F.mL(d,a0,new F.iQ(j,F.iR(j.c),F.iR(j.d),l,m,c),b)
if(k!=null)a.fX(k)},
mL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jq()
t=H.b([],[F.bu])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i6(g,g,new V.a5(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.m(0,o)
c.$3(o,r,0)
t.push(o.bL(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i6(g,g,new V.a5(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.m(0,o)
c.$3(o,r,n)
t.push(o.bL(d))}}u.d.fq(a+1,b+1,t)
return u},
bH:function(a,b,c){var u=new F.aN(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
lf:function(a,b){var u=new F.bM(),t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
jq:function(){var u=new F.hc(),t=new F.i7(u)
t.b=!1
t.c=H.b([],[F.bu])
u.a=t
t=new F.hf(u)
t.b=H.b([],[F.bT])
u.b=t
t=new F.he(u)
t.b=H.b([],[F.bM])
u.c=t
t=new F.hd(u)
t.b=H.b([],[F.aN])
u.d=t
u.e=null
return u},
i6:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bu(),r=new F.ic()
r.b=H.b([],[F.bT])
s.b=r
r=new F.ib()
u=[F.bM]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i8()
u=[F.aN]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kR()
s.e=0
r=$.ag()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aI().a)!==0?e:t
s.x=(u&$.aH().a)!==0?b:t
s.y=(u&$.aJ().a)!==0?f:t
s.z=(u&$.ba().a)!==0?g:t
s.Q=(u&$.kS().a)!==0?c:t
s.ch=(u&$.bA().a)!==0?i:0
s.cx=(u&$.aG().a)!==0?a:t
return s},
iQ:function iQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aN:function aN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(){this.b=this.a=null},
bT:function bT(){this.a=null},
hc:function hc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a
this.b=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
bu:function bu(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
i8:function i8(){this.d=this.c=this.b=null},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){this.c=this.b=null},
ic:function ic(){this.b=null}},Q={
kA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.lw("Test 019"),b0=W.jc()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.q]
a9.cJ(H.b(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],u))
a9.cJ(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lA(t,!0,!0,!0,!1)
r=E.jW()
q=F.jq()
F.cf(q,a6,a6,1,1,1,0,0,1)
F.cf(q,a6,a6,1,1,0,1,0,3)
F.cf(q,a6,a6,1,1,0,0,1,2)
F.cf(q,a6,a6,1,1,-1,0,0,0)
F.cf(q,a6,a6,1,1,0,-1,0,0)
F.cf(q,a6,a6,1,1,0,0,-1,3)
q.ar()
r.sbj(0,q)
p=X.ji(a6)
if(p.b){p.b=!1
u=new D.w("clearColor",!0,!1)
u.b=!0
p.aj(u)}u=s.f
o=u.a
n=o.createTexture()
o.bindTexture(a7,n)
o.texParameteri(a7,10242,10497)
o.texParameteri(a7,10243,10497)
o.texParameteri(a7,10241,9729)
o.texParameteri(a7,10240,9729)
o.bindTexture(a7,a6)
m=new T.hC()
m.a=0
m.b=n
m.c=!1
m.d=0
u.aH(m,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aH(m,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aH(m,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aH(m,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aH(m,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aH(m,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
l=s.f.fW("../resources/AlphaWeave.png")
k=new O.cO()
u=O.jd(V.av)
k.e=u
u.aM(k.geg(),k.gei())
u=new O.ak(k,"emission")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
k.f=u
u=new O.ak(k,"ambient")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
k.r=u
u=new O.ak(k,"diffuse")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
k.x=u
u=new O.ak(k,"invDiffuse")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
k.y=u
u=new O.fw(k,"specular")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
u.ch=100
k.z=u
u=new O.fs(k,"bump")
u.c=new A.T(!1,!1,!1)
k.Q=u
k.ch=null
u=new O.ak(k,"reflect")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
k.cx=u
u=new O.fv(k,"refract")
u.c=new A.T(!1,!1,!1)
u.f=new V.R(0,0,0)
u.ch=1
k.cy=u
u=new O.fr(k,"alpha")
u.c=new A.T(!1,!1,!1)
u.f=1
k.db=u
u=new D.cI()
u.b3(D.a1)
u.e=H.b([],[D.bh])
u.f=H.b([],[D.fZ])
u.r=H.b([],[D.hn])
u.y=u.x=null
u.cb(u.gee(),u.geR(),u.geV())
k.dx=u
o=new O.fu()
o.b=new V.a5(0,0,0,0)
o.c=1
o.d=10
o.e=!1
k.dy=o
o=u.x
u=o==null?u.x=D.z():o
u.m(0,k.gf9())
u=k.dx
o=u.y
u=o==null?u.y=D.z():o
u.m(0,k.gaE())
k.fr=null
u=k.dx
j=V.ju()
o=U.jS(V.k2(V.k8(),j,new V.y(1,-2,-3)))
i=new V.R(1,1,1)
h=new D.bh()
h.c=new V.R(1,1,1)
h.a=V.lD()
h.d=V.ju()
h.e=V.lC()
g=h.b
h.b=o
o.gp().m(0,h.gdN())
o=new D.w("mover",g,h.b)
o.b=!0
h.an(o)
if(!h.c.q(0,i)){g=h.c
h.c=i
o=new D.w("color",g,i)
o.b=!0
h.an(o)}u.m(0,h)
u=k.r
u.sb8(0,new V.R(0.5,0.5,0.5))
u=k.x
u.sb8(0,new V.R(0.6,0.6,0.6))
k.r.sc5(l)
k.x.sc5(l)
k.db.sc5(l)
f=new U.bI()
f.b3(U.a2)
f.aM(f.gec(),f.geT())
f.e=null
f.f=V.bn()
f.r=0
u=s.r
o=new U.dk()
h=U.je()
h.sc8(0,!0)
h.sbZ(6.283185307179586)
h.sc0(0)
h.sa4(0,0)
h.sc_(100)
h.sR(0)
h.sbM(0.5)
o.b=h
e=o.gaD()
h.gp().m(0,e)
h=U.je()
h.sc8(0,!0)
h.sbZ(6.283185307179586)
h.sc0(0)
h.sa4(0,0)
h.sc_(100)
h.sR(0)
h.sbM(0.5)
o.c=h
h.gp().m(0,e)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
d=new X.a8(!1,!1,!1)
g=o.d
o.d=d
h=new D.w(a8,g,d)
h.b=!0
o.M(h)
h=o.f
if(h!==!1){o.f=!1
h=new D.w("invertX",h,!1)
h.b=!0
o.M(h)}h=o.r
if(h!==!1){o.r=!1
h=new D.w("invertY",h,!1)
h.b=!0
o.M(h)}o.aT(u)
f.m(0,o)
u=s.r
o=new U.dj()
h=U.je()
h.sc8(0,!0)
h.sbZ(6.283185307179586)
h.sc0(0)
h.sa4(0,0)
h.sc_(100)
h.sR(0)
h.sbM(0.2)
o.b=h
h.gp().m(0,o.gaD())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
d=new X.a8(!0,!1,!1)
g=o.c
o.c=d
h=new D.w(a8,g,d)
h.b=!0
o.M(h)
o.aT(u)
f.m(0,o)
u=s.r
o=new U.dl()
o.c=0.01
o.e=o.d=0
d=new X.a8(!1,!1,!1)
o.b=d
h=new D.w(a8,a6,d)
h.b=!0
o.M(h)
o.aT(u)
f.m(0,o)
f.m(0,U.jS(V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.k5(f)
b=new M.cu()
b.a=!0
u=E.jW()
q=F.jq()
o=q.a
h=new V.y(-1,-1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a=o.b7(new V.az(1,2,4,6),new V.a5(1,0,0,1),new V.W(-1,-1,0),new V.V(0,1),h,a6)
o=q.a
h=new V.y(1,-1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a0=o.b7(new V.az(0,3,4,6),new V.a5(0,0,1,1),new V.W(1,-1,0),new V.V(1,1),h,a6)
o=q.a
h=new V.y(1,1,1)
h=h.t(0,Math.sqrt(h.B(h)))
a1=o.b7(new V.az(0,2,5,6),new V.a5(0,1,0,1),new V.W(1,1,0),new V.V(1,0),h,a6)
o=q.a
h=V.ay()
e=new V.y(-1,1,1)
e=e.t(0,Math.sqrt(e.B(e)))
a2=o.b7(new V.az(0,2,4,7),new V.a5(1,1,0,1),new V.W(-1,1,0),h,e,a6)
q.d.fp(H.b([a,a0,a1,a2],[F.bu]))
q.ar()
u.sbj(0,q)
b.e=u
b.saU(a6)
b.saZ(0,a6)
b.sb_(a6)
u=new O.d0()
u.b=1.0471975511965976
u.d=new V.R(1,1,1)
g=u.c
u.c=m
m.gp().m(0,u.gaE())
o=new D.w("boxTexture",g,u.c)
o.b=!0
u.T(o)
b.sb_(u)
b.saZ(0,p)
b.saU(c)
a3=new M.cz()
a3.a=!0
u=O.jd(E.at)
a3.e=u
u.aM(a3.geo(),a3.geq())
a3.y=a3.x=a3.r=a3.f=null
a4=X.ji(a6)
a3.saU(a6)
a3.saZ(0,a4)
a3.sb_(a6)
a3.saU(c)
a3.sb_(k)
a3.saZ(0,p)
a3.e.m(0,r)
u=M.ae
o=H.b([b,a3],[u])
h=new M.cs()
h.b3(u)
h.e=!0
h.f=!1
h.r=null
h.aM(h.geX(),h.geZ())
h.a2(0,o)
u=s.d
if(u!==h){if(u!=null)u.gp().S(0,s.gcj())
s.d=h
h.gp().m(0,s.gcj())
s.ck()}u=s.z
if(u==null)u=s.z=D.z()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.P]}]):o
u.push(new Q.j2(a9,k))
V.mI(s)},
j2:function j2(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jn.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.bV(a)},
h:function(a){return"Instance of '"+H.e(H.bW(a))+"'"}}
J.fb.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iap:1}
J.cF.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.cG.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.fW.prototype={}
J.bt.prototype={}
J.aV.prototype={
h:function(a){var u=a[$.kG()]
if(u==null)return this.dF(a)
return"JavaScript function for "+H.e(J.a0(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aT.prototype={
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.a4("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
a2:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.a4("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.aL(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
fU:function(a){return this.k(a,"")},
fQ:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.f(P.aL(a))}throw H.f(H.jk())},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dB:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.an(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.ck(a,0)])
return H.b(a.slice(b,c),[H.ck(a,0)])},
gbb:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jk())},
cL:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.f(P.aL(a))}return!1},
bk:function(a,b){if(!!a.immutable$list)H.t(P.a4("sort"))
H.d1(a,0,a.length-1,b)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
h:function(a){return P.jj(a,"[","]")},
gO:function(a){return new J.Y(a,a.length)},
gG:function(a){return H.bV(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.a4("set length"))
if(b<0)throw H.f(P.an(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.f(H.by(a,b))
return a[b]},
n:function(a,b,c){if(!!a.immutable$list)H.t(P.a4("indexed set"))
if(b>=a.length||b<0)throw H.f(H.by(a,b))
a[b]=c},
$ih:1}
J.jm.prototype={}
J.Y.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bL.prototype={
fC:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gba(b)
if(this.gba(a)===u)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
hj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a4(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a4(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a4(""+a+".round()"))},
dn:function(a,b){var u
if(b>20)throw H.f(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dt:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cF(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cF(a,b)},
cF:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a4("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b5:function(a,b){var u
if(a>0)u=this.fh(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fh:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iab:1}
J.cE.prototype={$ix:1}
J.cD.prototype={}
J.aU.prototype={
bK:function(a,b){if(b<0)throw H.f(H.by(a,b))
if(b>=a.length)H.t(H.by(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.f(H.by(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.f(P.jO(b,null,null))
return a+b},
bl:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.h2(b,null))
if(b>c)throw H.f(P.h2(b,null))
if(c>a.length)throw H.f(P.h2(c,null))
return a.substring(b,c)},
am:function(a,b){return this.b1(a,b,null)},
hm:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
h:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iq:1}
H.m.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.bK(this.a,b)},
$ap:function(){return[P.x]},
$ah:function(){return[P.x]}}
H.eP.prototype={}
H.cL.prototype={
gO:function(a){return new H.bN(this,this.gl(this))},
bi:function(a,b){return this.dE(0,b)}}
H.bN.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.jA(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.aL(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.fn.prototype={
gO:function(a){return new H.fo(J.bc(this.a),this.b)},
gl:function(a){return J.bd(this.a)},
D:function(a,b){return this.b.$1(J.j9(this.a,b))},
$ah:function(a,b){return[b]}}
H.fo.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.fp.prototype={
gl:function(a){return J.bd(this.a)},
D:function(a,b){return this.b.$1(J.j9(this.a,b))},
$acL:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.c4.prototype={
gO:function(a){return new H.ih(J.bc(this.a),this.b)}}
H.ih.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.cA.prototype={}
H.hZ.prototype={}
H.dh.prototype={}
H.hO.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fS.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hY.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j7.prototype={
$1:function(a){if(!!J.N(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dZ.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bE.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hx.prototype={}
H.hp.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.el(u)+"'"}}
H.bB.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bB))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bV(this.a)
else u=typeof t!=="object"?J.bb(t):H.bV(t)
return(u^H.bV(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bW(u))+"'")}}
H.ex.prototype={
h:function(a){return this.a}}
H.h9.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.K.prototype={
gl:function(a){return this.a},
ga3:function(a){return new H.cJ(this,[H.ck(this,0)])},
cR:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cr(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cr(t,b)}else return s.fS(b)},
fS:function(a){var u=this.d
if(u==null)return!1
return this.bU(this.bt(u,J.bb(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b4(r,b)
s=t==null?null:t.b
return s}else return q.fT(b)},
fT:function(a){var u,t,s=this.d
if(s==null)return
u=this.bt(s,J.bb(a)&0x3ffffff)
t=this.bU(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.bC():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.bC():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bC()
r=J.bb(b)&0x3ffffff
q=o.bt(s,r)
if(q==null)o.bF(s,r,[o.bD(b,c)])
else{p=o.bU(q,b)
if(p>=0)q[p].b=c
else q.push(o.bD(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.aL(u))
t=t.c}},
cm:function(a,b,c){var u=this.b4(a,b)
if(u==null)this.bF(a,b,this.bD(b,c))
else u.b=c},
e9:function(){this.r=this.r+1&67108863},
bD:function(a,b){var u,t=this,s=new H.fg(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e9()
return s},
bU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
h:function(a){return P.k1(this)},
b4:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
bF:function(a,b,c){a[b]=c},
e2:function(a,b){delete a[b]},
cr:function(a,b){return this.b4(a,b)!=null},
bC:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bF(t,u,t)
this.e2(t,u)
return t}}
H.fg.prototype={}
H.cJ.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fh(u,u.r)
t.c=u.e
return t}}
H.fh.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j0.prototype={
$1:function(a){return this.a(a)}}
H.fc.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bS.prototype={}
H.cQ.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bR.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ap:function(){return[P.J]},
$ih:1,
$ah:function(){return[P.J]}}
H.cR.prototype={
$ap:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]}}
H.fK.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fL.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fM.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fN.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fO.prototype={
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.cS.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.fP.prototype={
gl:function(a){return a.length},
i:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.c7.prototype={}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
P.ij.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.ii.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ik.prototype={
$0:function(){this.a.$0()}}
P.il.prototype={
$0:function(){this.a.$0()}}
P.e4.prototype={
dQ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bx(new P.iM(this,b),0),a)
else throw H.f(P.a4("`setTimeout()` not found."))},
dR:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bx(new P.iL(this,a,Date.now(),b),0),a)
else throw H.f(P.a4("Periodic timer."))},
$ida:1}
P.iM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.dH(u,q)}s.c=r
t.d.$1(s)}}
P.dq.prototype={}
P.d5.prototype={}
P.hs.prototype={}
P.da.prototype={}
P.iP.prototype={}
P.iU.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cV():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u}}
P.iz.prototype={
hf:function(a){var u,t,s,r=null
try{if(C.e===$.af){a.$0()
return}P.mb(r,r,this,a)}catch(s){u=H.aF(s)
t=H.jE(s)
P.ku(r,r,this,u,t)}},
hg:function(a,b){var u,t,s,r=null
try{if(C.e===$.af){a.$1(b)
return}P.mc(r,r,this,a,b)}catch(s){u=H.aF(s)
t=H.jE(s)
P.ku(r,r,this,u,t)}},
hh:function(a,b){return this.hg(a,b,null)},
fA:function(a){return new P.iA(this,a)},
cM:function(a,b){return new P.iB(this,a,b)}}
P.iA.prototype={
$0:function(){return this.a.hf(this.b)}}
P.iB.prototype={
$1:function(a){return this.a.hh(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iw.prototype={
gO:function(a){var u=new P.dG(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dY(b)
return t}},
dY:function(a){var u=this.d
if(u==null)return!1
return this.br(this.cu(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cn(u==null?s.b=P.jw():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cn(t==null?s.c=P.jw():t,b)}else return s.dS(0,b)},
dS:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jw()
u=s.cp(b)
t=r[u]
if(t==null)r[u]=[s.bo(b)]
else{if(s.br(t,b)>=0)return!1
t.push(s.bo(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f7(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cu(r,b)
t=s.br(u,b)
if(t<0)return!1
s.cG(u.splice(t,1)[0])
return!0},
cn:function(a,b){if(a[b]!=null)return!1
a[b]=this.bo(b)
return!0},
f7:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cG(u)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bo:function(a){var u,t=this,s=new P.ix(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.co()
return s},
cG:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.co()},
cp:function(a){return J.bb(a)&1073741823},
cu:function(a,b){return a[this.cp(b)]},
br:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.ix.prototype={}
P.dG.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aL(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fi.prototype={$ih:1}
P.p.prototype={
gO:function(a){return new H.bN(a,this.gl(a))},
D:function(a,b){return this.i(a,b)},
hl:function(a,b){var u,t,s=this,r=H.b([],[H.mu(s,a,"p",0)])
C.a.sl(r,s.gl(a))
for(u=0;u<s.gl(a);++u){t=s.i(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t}return r},
hk:function(a){return this.hl(a,!0)},
h:function(a){return P.jj(a,"[","]")}}
P.fl.prototype={}
P.fm.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.au.prototype={
J:function(a,b){var u,t
for(u=J.bc(this.ga3(a));u.u();){t=u.gE(u)
b.$2(t,this.i(a,t))}},
gl:function(a){return J.bd(this.ga3(a))},
h:function(a){return P.k1(a)}}
P.iD.prototype={
a2:function(a,b){var u
for(u=J.bc(b);u.u();)this.m(0,u.gE(u))},
h:function(a){return P.jj(this,"{","}")},
D:function(a,b){var u,t,s
P.kb(b,"index")
for(u=P.lL(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.f(P.G(b,this,"index",null,t))},
$ih:1}
P.dH.prototype={}
P.ez.prototype={}
P.eC.prototype={}
P.eR.prototype={}
P.f7.prototype={
h:function(a){return this.a}}
P.f6.prototype={
e_:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aA("")
if(r>b)q.a+=C.b.b1(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i1.prototype={}
P.i2.prototype={
fD:function(a){var u,t,s=P.kc(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iN(u)
if(t.e4(a,0,s)!==s)t.cH(C.b.bK(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lO(0,t.b,u.length)))}}
P.iN.prototype={
cH:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e4:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bK(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aF(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cH(r,C.b.aF(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ap.prototype={}
P.a7.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.b5(u,30))&1073741823},
h:function(a){var u=this,t=P.l7(H.lr(u)),s=P.cv(H.lp(u)),r=P.cv(H.ll(u)),q=P.cv(H.lm(u)),p=P.cv(H.lo(u)),o=P.cv(H.lq(u)),n=P.l8(H.ln(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aM.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
h:function(a){var u,t,s,r=new P.eO(),q=this.a
if(q<0)return"-"+new P.aM(0-q).h(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.eN().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bi.prototype={}
P.cV.prototype={
h:function(a){return"Throw of null."}}
P.ac.prototype={
gbq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbp:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbq()+o+u
if(!q.a)return t
s=q.gbp()
r=P.jh(q.b)
return t+s+": "+r}}
P.bq.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.f9.prototype={
gbq:function(){return"RangeError"},
gbp:function(){var u,t=this.b
if(typeof t!=="number")return t.a8()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.i_.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bY.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eB.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jh(u)+"."}}
P.fV.prototype={
h:function(a){return"Out of Memory"},
$ibi:1}
P.d3.prototype={
h:function(a){return"Stack Overflow"},
$ibi:1}
P.eH.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dy.prototype={
h:function(a){return"Exception: "+this.a}}
P.f0.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b1(s,0,75)+"...":s
return t+"\n"+r}}
P.f2.prototype={}
P.x.prototype={}
P.h.prototype={
bi:function(a,b){return new H.c4(this,b,[H.jD(this,"h",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.u();)++u
return u},
gaB:function(a){var u,t=this.gO(this)
if(!t.u())throw H.f(H.jk())
u=t.gE(t)
if(t.u())throw H.f(H.lc())
return u},
D:function(a,b){var u,t,s
P.kb(b,"index")
for(u=this.gO(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.f(P.G(b,this,"index",null,t))},
h:function(a){return P.lb(this,"(",")")}}
P.fa.prototype={}
P.aj.prototype={$ih:1}
P.cN.prototype={}
P.aY.prototype={
gG:function(a){return P.U.prototype.gG.call(this,this)},
h:function(a){return"null"}}
P.ab.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
q:function(a,b){return this===b},
gG:function(a){return H.bV(this)},
h:function(a){return"Instance of '"+H.e(H.bW(this))+"'"},
toString:function(){return this.h(this)}}
P.q.prototype={}
P.aA.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.en.prototype={
gl:function(a){return a.length}}
W.eo.prototype={
h:function(a){return String(a)}}
W.ep.prototype={
h:function(a){return String(a)}}
W.co.prototype={}
W.bf.prototype={$ibf:1}
W.bg.prototype={
c9:function(a,b,c){if(c!=null)return a.getContext(b,P.ml(c))
return a.getContext(b)},
ds:function(a,b){return this.c9(a,b,null)},
$ibg:1}
W.aK.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bF.prototype={
gl:function(a){return a.length}}
W.eE.prototype={}
W.a6.prototype={}
W.ai.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.eK.prototype={
h:function(a){return String(a)}}
W.cx.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.a9,P.ab]]},
$ap:function(){return[[P.a9,P.ab]]},
$ih:1,
$ah:function(){return[[P.a9,P.ab]]}}
W.cy.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaA(a))+" x "+H.e(this.gau(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&this.gaA(a)===u.gaA(b)&&this.gau(a)===u.gau(b)},
gG:function(a){return W.kq(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gaA(a)),C.c.gG(this.gau(a)))},
gcN:function(a){return a.bottom},
gau:function(a){return a.height},
gbc:function(a){return a.left},
gc4:function(a){return a.right},
gbg:function(a){return a.top},
gaA:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ab]}}
W.eL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.q]},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]}}
W.eM.prototype={
gl:function(a){return a.length}}
W.io.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.hk(this)
return new J.Y(u,u.length)},
$ap:function(){return[W.O]},
$ah:function(){return[W.O]}}
W.O.prototype={
gfz:function(a){return new W.iq(a)},
gcP:function(a){return new W.io(a,a.children)},
gcQ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a8()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a8()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ab])},
h:function(a){return a.localName},
aa:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jV
if(u==null){u=H.b([],[W.ax])
t=new W.cU(u)
u.push(W.kp(null))
u.push(W.kr())
$.jV=t
d=t}else d=u
u=$.jU
if(u==null){u=new W.ea(d)
$.jU=u
c=u}else{u.a=d
c=u}}if($.as==null){u=document
t=u.implementation.createHTMLDocument("")
$.as=t
$.jg=t.createRange()
s=$.as.createElement("base")
s.href=u.baseURI
$.as.head.appendChild(s)}u=$.as
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.as
if(!!this.$ibf)r=u.body
else{r=u.createElement(a.tagName)
$.as.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.M,a.tagName)){$.jg.selectNodeContents(r)
q=$.jg.createContextualFragment(b)}else{r.innerHTML=b
q=$.as.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.as.body
if(r==null?u!=null:r!==u)J.jM(r)
c.ca(q)
document.adoptNode(q)
return q},
fF:function(a,b,c){return this.aa(a,b,c,null)},
dv:function(a,b){a.textContent=null
a.appendChild(this.aa(a,b,null,null))},
$iO:1,
gdl:function(a){return a.tagName}}
W.eQ.prototype={
$1:function(a){return!!J.N(a).$iO}}
W.i.prototype={$ii:1}
W.d.prototype={
fo:function(a,b,c,d){if(c!=null)this.dT(a,b,c,!1)},
dT:function(a,b,c,d){return a.addEventListener(b,H.bx(c,1),!1)}}
W.aO.prototype={$iaO:1}
W.eV.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aO]},
$ap:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]}}
W.eW.prototype={
gl:function(a){return a.length}}
W.f_.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.f5.prototype={
gl:function(a){return a.length}}
W.bJ.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]}}
W.aQ.prototype={$iaQ:1,
gcS:function(a){return a.data}}
W.bK.prototype={$ibK:1}
W.bl.prototype={$ibl:1}
W.fj.prototype={
h:function(a){return String(a)}}
W.fD.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
i:function(a,b){return P.aE(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.q])
this.J(a,new W.fF(u))
return u},
gl:function(a){return a.size}}
W.fF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fG.prototype={
i:function(a,b){return P.aE(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.q])
this.J(a,new W.fH(u))
return u},
gl:function(a){return a.size}}
W.fH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aX.prototype={$iaX:1}
W.fI.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aX]},
$ap:function(){return[W.aX]},
$ih:1,
$ah:function(){return[W.aX]}}
W.am.prototype={$iam:1}
W.X.prototype={
gaB:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kf("No elements"))
if(t>1)throw H.f(P.kf("More than one element"))
return u.firstChild},
a2:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cB(u,u.length)},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.H]},
$ah:function(){return[W.H]}}
W.H.prototype={
hc:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.dD(a):u},
$iH:1}
W.cT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.fY.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aZ]},
$ap:function(){return[W.aZ]},
$ih:1,
$ah:function(){return[W.aZ]}}
W.h7.prototype={
i:function(a,b){return P.aE(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.q])
this.J(a,new W.h8(u))
return u},
gl:function(a){return a.size}}
W.h8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ha.prototype={
gl:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.hl.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b_]},
$ap:function(){return[W.b_]},
$ih:1,
$ah:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.hm.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b0]},
$ap:function(){return[W.b0]},
$ih:1,
$ah:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gl:function(a){return a.length}}
W.hq.prototype={
i:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.q])
this.J(a,new W.hr(u))
return u},
gl:function(a){return a.length}}
W.hr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.d6.prototype={
aa:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=W.l9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.X(t).a2(0,new W.X(u))
return t}}
W.hu.prototype={
aa:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.X(u)
s=u.gaB(u)
s.toString
u=new W.X(s)
r=u.gaB(u)
t.toString
r.toString
new W.X(t).a2(0,new W.X(r))
return t}}
W.hv.prototype={
aa:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bm(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.X(u)
s=u.gaB(u)
t.toString
s.toString
new W.X(t).a2(0,new W.X(s))
return t}}
W.bZ.prototype={$ibZ:1}
W.b2.prototype={$ib2:1}
W.aC.prototype={$iaC:1}
W.hy.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aC]},
$ap:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]}}
W.hz.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b2]},
$ap:function(){return[W.b2]},
$ih:1,
$ah:function(){return[W.b2]}}
W.hH.prototype={
gl:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.br.prototype={$ibr:1}
W.hL.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b3]},
$ap:function(){return[W.b3]},
$ih:1,
$ah:function(){return[W.b3]}}
W.hM.prototype={
gl:function(a){return a.length}}
W.b4.prototype={}
W.i0.prototype={
h:function(a){return String(a)}}
W.ig.prototype={
gl:function(a){return a.length}}
W.b6.prototype={
gfI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a4("deltaY is not supported"))},
gfH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a4("deltaX is not supported"))},
$ib6:1}
W.c5.prototype={
f8:function(a,b){return a.requestAnimationFrame(H.bx(b,1))},
e3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ip.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.E]},
$ap:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]}}
W.dt.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.N(b)
if(!u.$ia9)return!1
return a.left===u.gbc(b)&&a.top===u.gbg(b)&&a.width===u.gaA(b)&&a.height===u.gau(b)},
gG:function(a){return W.kq(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gau:function(a){return a.height},
gaA:function(a){return a.width}}
W.it.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aP]},
$ap:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]}}
W.dM.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.H]},
$ap:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]}}
W.iG.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.b1]},
$ap:function(){return[W.b1]},
$ih:1,
$ah:function(){return[W.b1]}}
W.iH.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.aB]},
$ap:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]}}
W.im.prototype={
J:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.q])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q}}
W.iq.prototype={
i:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.ga3(this).length}}
W.ir.prototype={}
W.is.prototype={
$1:function(a){return this.a.$1(a)}}
W.c6.prototype={
dM:function(a){var u
if($.dB.a===0){for(u=0;u<262;++u)$.dB.n(0,C.L[u],W.mw())
for(u=0;u<12;++u)$.dB.n(0,C.l[u],W.mx())}},
aJ:function(a){return $.kU().P(0,W.bG(a))},
ak:function(a,b,c){var u=$.dB.i(0,H.e(W.bG(a))+"::"+b)
if(u==null)u=$.dB.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iax:1}
W.F.prototype={
gO:function(a){return new W.cB(a,this.gl(a))}}
W.cU.prototype={
aJ:function(a){return C.a.cL(this.a,new W.fR(a))},
ak:function(a,b,c){return C.a.cL(this.a,new W.fQ(a,b,c))},
$iax:1}
W.fR.prototype={
$1:function(a){return a.aJ(this.a)}}
W.fQ.prototype={
$1:function(a){return a.ak(this.a,this.b,this.c)}}
W.dU.prototype={
dP:function(a,b,c,d){var u,t,s
this.a.a2(0,c)
u=b.bi(0,new W.iE())
t=b.bi(0,new W.iF())
this.b.a2(0,u)
s=this.c
s.a2(0,C.N)
s.a2(0,t)},
aJ:function(a){return this.a.P(0,W.bG(a))},
ak:function(a,b,c){var u=this,t=W.bG(a),s=u.c
if(s.P(0,H.e(t)+"::"+b))return u.d.fs(c)
else if(s.P(0,"*::"+b))return u.d.fs(c)
else{s=u.b
if(s.P(0,H.e(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.e(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iax:1}
W.iE.prototype={
$1:function(a){return!C.a.P(C.l,a)}}
W.iF.prototype={
$1:function(a){return C.a.P(C.l,a)}}
W.iJ.prototype={
ak:function(a,b,c){if(this.dG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.iK.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.iI.prototype={
aJ:function(a){var u=J.N(a)
if(!!u.$ibX)return!1
u=!!u.$ij
if(u&&W.bG(a)==="foreignObject")return!1
if(u)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.b.bl(b,"on"))return!1
return this.aJ(a)},
$iax:1}
W.cB.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.em(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.ax.prototype={}
W.iC.prototype={}
W.ea.prototype={
ca:function(a){new W.iO(this).$2(a,null)},
aS:function(a,b){if(b==null)J.jM(a)
else b.removeChild(a)},
fc:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kY(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aF(r)}t="element unprintable"
try{t=J.a0(a)}catch(r){H.aF(r)}try{s=W.bG(a)
this.fb(a,b,p,t,s,o,n)}catch(r){if(H.aF(r) instanceof P.ac)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aJ(a)){p.aS(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ak(a,"is",g)){p.aS(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.ck(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
if(!p.a.ak(a,J.l_(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$ibZ)p.ca(a.content)}}
W.iO.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fc(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aF(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.ds.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e_.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.cd.prototype={}
W.ce.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
P.e9.prototype={$iaQ:1,
gcS:function(a){return this.a}}
P.iV.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eX.prototype={
gbu:function(){var u=this.b,t=H.jD(u,"p",0)
return new H.fn(new H.c4(u,new P.eY(),[t]),new P.eZ(),[t,W.O])},
m:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bd(this.gbu().a)},
i:function(a,b){var u=this.gbu()
return u.b.$1(J.j9(u.a,b))},
gO:function(a){var u=P.k0(this.gbu(),!1,W.O)
return new J.Y(u,u.length)},
$ap:function(){return[W.O]},
$ah:function(){return[W.O]}}
P.eY.prototype={
$1:function(a){return!!J.N(a).$iO}}
P.eZ.prototype={
$1:function(a){return H.k(a,"$iO")}}
P.iy.prototype={
gc4:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
gcN:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia9){t=q.a
if(t==u.gbc(b)){s=q.b
if(s==u.gbg(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gc4(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcN(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.bb(t),r=u.b,q=J.bb(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.u(p)
p=C.d.gG(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.u(t)
t=C.d.gG(r+t)
return P.lK(P.iv(P.iv(P.iv(P.iv(0,s),q),p),t))}}
P.a9.prototype={
gbc:function(a){return this.a},
gbg:function(a){return this.b},
gaA:function(a){return this.c},
gau:function(a){return this.d}}
P.bm.prototype={$ibm:1}
P.ff.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bm]},
$ih:1,
$ah:function(){return[P.bm]}}
P.bo.prototype={$ibo:1}
P.fT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bo]},
$ih:1,
$ah:function(){return[P.bo]}}
P.h0.prototype={
gl:function(a){return a.length}}
P.bX.prototype={$ibX:1}
P.ht.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ap:function(){return[P.q]},
$ih:1,
$ah:function(){return[P.q]}}
P.j.prototype={
gcP:function(a){return new P.eX(a,new W.X(a))},
aa:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ax])
p.push(W.kp(null))
p.push(W.kr())
p.push(new W.iI())
c=new W.ea(new W.cU(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fF(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.X(s)
q=p.gaB(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bs.prototype={$ibs:1}
P.hN.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.i(a,b)},
$ap:function(){return[P.bs]},
$ih:1,
$ah:function(){return[P.bs]}}
P.dE.prototype={}
P.dF.prototype={}
P.dP.prototype={}
P.dQ.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.er.prototype={
gl:function(a){return a.length}}
P.es.prototype={
i:function(a,b){return P.aE(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.q])
this.J(a,new P.et(u))
return u},
gl:function(a){return a.size}}
P.et.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eu.prototype={
gl:function(a){return a.length}}
P.be.prototype={}
P.fU.prototype={
gl:function(a){return a.length}}
P.dr.prototype={}
P.cZ.prototype={
dm:function(a,b,c,d,e,f,g){var u,t=J.N(g)
if(!!t.$iaQ)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mm(g))
return}if(!!t.$ibK)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.l0("Incorrect number or type of arguments"))}}
P.ho.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return P.aE(a.item(b))},
D:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.cN,,,]]},
$ih:1,
$ah:function(){return[[P.cN,,,]]}}
P.dX.prototype={}
P.dY.prototype={}
T.aq.prototype={
av:function(a,b){return!0},
h:function(a){return"all"}}
T.cC.prototype={
av:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].av(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.aW.prototype={}
T.Z.prototype={
av:function(a,b){return!this.dC(0,b)},
h:function(a){return"!["+this.cd(0)+"]"}}
T.h1.prototype={
av:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var u=H.jp(this.a),t=H.jp(this.b)
return u+".."+t}}
T.hb.prototype={
dK:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a Set with zero characters."))
u=new H.K([P.x,P.ap])
for(t=new H.bN(a,a.gl(a));t.u();)u.n(0,t.d,!0)
this.a=u},
av:function(a,b){return this.a.cR(0,b)},
h:function(a){var u=this.a
return P.jr(new H.cJ(u,[H.ck(u,0)]))}}
R.d4.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.de(this.a.j(0,b))
r.a=H.b([],[T.aW])
r.c=!1
this.c.push(r)
return r},
fP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.av(0,a))return r}return},
h:function(a){return this.b}}
R.db.prototype={
h:function(a){var u=H.jJ(this.b,"\n","\\n"),t=H.jJ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.dc.prototype={
ax:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.n(0,s,b)}},
h:function(a){return this.b}}
R.hI.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d4(this,b)
u.c=H.b([],[R.de])
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.dc(a)
u=P.q
t.c=new H.K([u,u])
this.b.n(0,a,t)}return t},
dq:function(a){var u,t,s,r,q,p,o,n,m=H.b([],[R.db]),l=this.c,k=[P.x],j=H.b([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.b.aF(a,s)
q=l.fP(r)
if(q==null){if(t==null){j.push(r)
p=P.jr(j)
throw H.f(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.b([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.jr(j)
o=l.d
n=o.c.i(0,p)
t=new R.db(n==null?o.b:n,p,s)}++s}}}}
R.de.prototype={
h:function(a){return this.b.b+": "+this.cd(0)}}
O.ar.prototype={
b3:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cb:function(a,b,c){this.b=b
this.c=a},
aM:function(a,b){return this.cb(a,null,b)},
cz:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.Y(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.jD(s,"ar",0)]
if(s.cz(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
a2:function(a,b){var u,t
if(this.cz(b)){u=this.a
t=u.length
C.a.a2(u,b)
this.ci(t,b)}},
$ih:1}
O.bP.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.z():u},
aC:function(){var u=this.b
if(u!=null)u.w(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gbb(u)
else return V.bn()},
bf:function(a){var u=this.a
if(a==null)u.push(V.bn())
else u.push(a)
this.aC()},
aw:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}}}
E.ev.prototype={}
E.at.prototype={
sbj:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().S(0,s.gdg())
u=s.c
if(u!=null)u.gp().m(0,s.gdg())
t=new D.w("shape",r,s.c)
t.b=!0
s.bd(t)}},
ag:function(a,b){var u
for(u=this.y.a,u=new J.Y(u,u.length);u.u();)u.d.ag(0,b)},
a6:function(a){var u,t=this,s=a.dx
s.a.push(s.gY(s))
s.aC()
a.c3(t.f)
s=a.dy
u=(s&&C.a).gbb(s)
if(u!=null&&t.d!=null)u.dj(a,t)
for(s=t.y.a,s=new J.Y(s,s.length);s.u();)s.d.a6(a)
a.c2()
a.dx.aw()},
bd:function(a){var u=this.z
if(u!=null)u.w(a)},
Z:function(){return this.bd(null)},
dh:function(a){this.e=null
this.bd(a)},
h2:function(){return this.dh(null)},
df:function(a){this.bd(a)},
h_:function(){return this.df(null)},
fZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gde(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bj()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
h1:function(a,b){var u,t
for(u=b.gO(b),t=this.gde();u.u();)u.gE(u).gp().S(0,t)
this.Z()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h3.prototype={
dJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bP()
t=[V.av]
u.a=H.b([],t)
u.gp().m(0,new E.h4(s))
s.cy=u
u=new O.bP()
u.a=H.b([],t)
u.gp().m(0,new E.h5(s))
s.db=u
u=new O.bP()
u.a=H.b([],t)
u.gp().m(0,new E.h6(s))
s.dx=u
u=H.b([],[O.d7])
s.dy=u
u.push(null)
s.fr=new H.K([P.q,A.d_])},
ghb:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.v(0,u.gY(u))
s=u}return s},
c3:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbb(u):a)},
c2:function(){var u=this.dy
if(u.length>1)u.pop()},
cK:function(a){var u=a.b
if(u.length===0)throw H.f(P.r("May not cache a shader with no name."))
if(this.fr.cR(0,u))throw H.f(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)}}
E.h4.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h5.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h6.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d9.prototype={
cl:function(a){this.dk()},
ck:function(){return this.cl(null)},
gfR:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.jT(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.a7(s,!1)
return u/r},
cB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.u(r)
u=C.c.bT(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.c.bT(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ki(C.i,s.ghe())}},
dk:function(){if(!this.ch){this.ch=!0
var u=window
C.w.e3(u)
C.w.f8(u,W.kv(new E.hG(this),P.ab))}},
hd:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cB()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jT(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aC()
r=s.db
C.a.sl(r.a,0)
r.aC()
r=s.dx
C.a.sl(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.a6(p.e)}s=p.z
if(s!=null)s.w(null)}catch(q){u=H.aF(q)
t=H.jE(q)
P.jI("Error: "+H.e(u))
P.jI("Stack: "+H.e(t))
throw H.f(u)}}}
E.hG.prototype={
$1:function(a){var u=this.a
if(u.ch){u.ch=!1
u.hd()}}}
Z.dn.prototype={}
Z.cp.prototype={
X:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aF(s)
t=P.r('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.f(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dp.prototype={}
Z.bD.prototype={
at:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].X(a)},
b0:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a6:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.q],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a0(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bk.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bW(this.c))+"'")+"]"}}
Z.aD.prototype={
gcc:function(a){var u=this.a,t=(u&$.ag().a)!==0?3:0
if((u&$.aI().a)!==0)t+=3
if((u&$.aH().a)!==0)t+=3
if((u&$.aJ().a)!==0)t+=2
if((u&$.ba().a)!==0)t+=3
if((u&$.cl().a)!==0)t+=3
if((u&$.cm().a)!==0)t+=4
if((u&$.bA().a)!==0)++t
return(u&$.aG().a)!==0?t+4:t},
ft:function(a){var u,t=$.ag(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aG()
if((s&t.a)!==0)if(u===a)return t
return $.kT()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aD))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.q]),t=this.a
if((t&$.ag().a)!==0)u.push("Pos")
if((t&$.aI().a)!==0)u.push("Norm")
if((t&$.aH().a)!==0)u.push("Binm")
if((t&$.aJ().a)!==0)u.push("Txt2D")
if((t&$.ba().a)!==0)u.push("TxtCube")
if((t&$.cl().a)!==0)u.push("Clr3")
if((t&$.cm().a)!==0)u.push("Clr4")
if((t&$.bA().a)!==0)u.push("Weight")
if((t&$.aG().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ey.prototype={}
D.bj.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.P]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.P(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.P(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.P()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.k0(u,!0,{func:1,ret:-1,args:[D.P]}),new D.eT(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.P]}])
C.a.J(u,new D.eU(q))}return!0},
cV:function(){return this.w(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.eT.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eU.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.P.prototype={}
D.aR.prototype={}
D.aS.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cq.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cH.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cH))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.fe.prototype={
h7:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
h3:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cM.prototype={}
X.fk.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.aw(a,V.ay(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
c1:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.du()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aQ(a,b))
return!0},
h8:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.bQ(new V.B(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
eG:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cM(c,r.a.gaK(),b)
s.b=!0
t.w(s)
r.y=new P.a7(u,!1)
r.x=V.ay()}}
X.a8.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aw.prototype={}
X.fJ.prototype={
bs:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaK(),r=new X.aw(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bs(a,b,!0))
return!0},
aY:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.du()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bs(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bs(a,b,!1))
return!0},
h9:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.bQ(new V.B(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gcU:function(){var u=this.b
return u==null?this.b=D.z():u},
gc7:function(){var u=this.c
return u==null?this.c=D.z():u},
gdd:function(){var u=this.d
return u==null?this.d=D.z():u}}
X.bQ.prototype={}
X.h_.prototype={}
X.dd.prototype={}
X.hK.prototype={
aQ:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.ay(),r=u.a.gaK(),q=new X.dd(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h6:function(a){var u=this.b
if(u==null)return!1
u.w(this.aQ(a,!0))
return!0},
h4:function(a){var u=this.c
if(u==null)return!1
u.w(this.aQ(a,!0))
return!0},
h5:function(a){var u=this.d
if(u==null)return!1
u.w(this.aQ(a,!1))
return!0}}
X.di.prototype={
gaK:function(){var u=this.a,t=C.f.gcQ(u).c
t.toString
u=C.f.gcQ(u).d
u.toString
return V.kd(0,0,t,u)},
cs:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cH(u,new X.a8(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
bG:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
aq:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.V(s-q,r-u)},
aR:function(a){return new V.B(a.movementX,a.movementY)},
bE:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.c.af(r.pageX)
C.c.af(r.pageY)
p=o.left
C.c.af(r.pageX)
n.push(new V.V(q-p,C.c.af(r.pageY)-o.top))}return n},
ao:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.a8(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eA:function(a){this.f=!0},
el:function(a){this.f=!1},
eu:function(a){if(this.f&&this.bv(a))a.preventDefault()},
eE:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.h7(u)},
eC:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.h3(u)},
eI:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aI(a)
if(r.x){u=r.ao(a)
t=r.aR(a)
if(r.d.c1(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ao(a)
s=r.aq(a)
if(r.c.c1(u,s))a.preventDefault()},
eM:function(a){var u,t,s,r=this
r.aI(a)
u=r.ao(a)
if(r.x){t=r.aR(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.aq(a)
if(r.c.aY(u,s))a.preventDefault()},
ey:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aI(a)
u=r.ao(a)
if(r.x){t=r.aR(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.aq(a)
if(r.c.aY(u,s))a.preventDefault()}},
eK:function(a){var u,t,s,r=this
r.aI(a)
u=r.ao(a)
if(r.x){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.aq(a)
if(r.c.aX(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
if(!r.bv(a)){r.aI(a)
u=r.ao(a)
if(r.x){t=r.aR(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.aq(a)
if(r.c.aX(u,s))a.preventDefault()}},
eO:function(a){var u,t,s=this
s.aI(a)
u=new V.B((a&&C.v).gfH(a),C.v.gfI(a)).t(0,180)
if(s.x){if(s.d.h8(u))a.preventDefault()
return}if(s.r)return
t=s.aq(a)
if(s.c.h9(u,t))a.preventDefault()},
eQ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ao(s.y)
t=s.aq(s.y)
s.d.eG(u,t,r)}},
f5:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bG(a)
u=t.bE(a)
if(t.e.h6(u))a.preventDefault()},
f1:function(a){var u
this.bG(a)
u=this.bE(a)
if(this.e.h4(u))a.preventDefault()},
f3:function(a){var u
this.bG(a)
u=this.bE(a)
if(this.e.h5(u))a.preventDefault()}}
D.bh.prototype={
an:function(a){var u=this.r
if(u!=null)u.w(a)},
dO:function(){return this.an(null)},
$ia1:1}
D.a1.prototype={}
D.cI.prototype={
an:function(a){var u=this.x
if(u!=null)u.w(a)},
cw:function(a){var u=this.y
if(u!=null)u.w(a)},
eF:function(){return this.cw(null)},
eS:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.dZ(s))return!1}return!0},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcv(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bh)this.e.push(q)
p=q.r
if(p==null){p=new D.bj()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.aR()
u.b=!0
this.an(u)},
eW:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcv();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gp().S(0,t)}u=new D.aS()
u.b=!0
this.an(u)},
dZ:function(a){var u=C.a.P(this.e,a)
return u},
$ah:function(){return[D.a1]},
$aar:function(){return[D.a1]}}
D.fZ.prototype={$ia1:1}
D.hn.prototype={$ia1:1}
V.R.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.a5.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.eS.prototype={}
V.cP.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cP))return!1
u=b.a
t=$.A().a
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
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bz(H.b([q.a,q.d,q.r],p),3,0),n=V.bz(H.b([q.b,q.e,q.x],p),3,0),m=V.bz(H.b([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
a7:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bV:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.bn()
u=1/b1
t=-n
s=-a0
return V.al((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.al(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bh:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.W(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.A().a
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
h:function(a){return this.K()},
A:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bz(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bz(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bz(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bz(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.V.prototype={
H:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.W.prototype={
H:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.az.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.cY.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cY))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.C(u.a,3,0)+", "+V.C(u.b,3,0)+", "+V.C(u.c,3,0)+", "+V.C(u.d,3,0)+"]"}}
V.B.prototype={
bW:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.B(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.km
return u==null?$.km=new V.B(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.B(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.y.prototype={
bW:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bX:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.A().a)return V.dm()
return new V.y(this.a/b,this.b/b,this.c/b)},
dc:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.eA.prototype={
bn:function(a){var u=V.mO(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.z():u},
M:function(a){var u=this.y
if(u!=null)u.w(a)},
sc8:function(a,b){},
sbZ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bn(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sc0:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bn(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa4:function(a,b){var u,t=this
b=t.bn(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.M(u)}},
sc_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.M(t)}},
sbM:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.M(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa4(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.ct.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.z():u},
aL:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
return J.L(this.a,b.a)},
h:function(a){return"Constant: "+this.a.A("          ")}}
U.bI.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.z():u},
M:function(a){var u=this.e
if(u!=null)u.w(a)},
a0:function(){return this.M(null)},
ed:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaD(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aR()
u.b=!0
this.M(u)},
eU:function(a,b){var u,t
for(u=b.gO(b),t=this.gaD();u.u();)u.gE(u).gp().S(0,t)
u=new D.aS()
u.b=!0
this.M(u)},
aL:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a8()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.Y(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aL(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bn():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.L(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$ah:function(){return[U.a2]},
$aar:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dj.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.z():u},
M:function(a){var u=this.cy
if(u!=null)u.w(a)},
a0:function(){return this.M(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcU().m(0,u.gbw())
u.a.c.gdd().m(0,u.gby())
u.a.c.gc7().m(0,u.gbA())
return!0},
bx:function(a){var u=this
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bz:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaw")
if(!n.y)return
if(n.x){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.H(0,a.y)
u=new V.B(t.a,t.b).v(0,2).t(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.B(s.a,s.b).v(0,2).t(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa4(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.B(t.a,t.b).v(0,2).t(0,u.ga5())}n.a0()},
bB:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sR(t*10*s)
r.a0()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a8()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.al(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.dk.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.z():u},
M:function(a){var u=this.fx
if(u!=null)u.w(a)},
a0:function(){return this.M(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcU().m(0,s.gbw())
s.a.c.gdd().m(0,s.gby())
s.a.c.gc7().m(0,s.gbA())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.m(0,s.ge5())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.m(0,s.ge7())
u=s.a.e
t=u.b
u=t==null?u.b=D.z():t
u.m(0,s.gfm())
u=s.a.e
t=u.d
u=t==null?u.d=D.z():t
u.m(0,s.gfk())
u=s.a.e
t=u.c
u=t==null?u.c=D.z():t
u.m(0,s.gfi())
return!0},
ai:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.B(u,t)},
bx:function(a){var u=this
H.k(a,"$iaw")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bz:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaw")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ai(new V.B(t.a,t.b).v(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ai(new V.B(s.a,s.b).v(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ai(new V.B(t.a,t.b).v(0,2).t(0,u.ga5()))}n.a0()},
bB:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.a0()}},
e6:function(a){var u=this
if(H.k(a,"$icM").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e8:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaw")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ai(new V.B(s.a,s.b).v(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ai(new V.B(t.a,t.b).v(0,2).t(0,u.ga5()))
n.a0()},
fn:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fl:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idd")
if(!n.cx)return
if(n.ch){u=a.d.H(0,a.y)
u=new V.B(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.H(0,a.y)
u=n.ai(new V.B(t.a,t.b).v(0,2).t(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ai(new V.B(s.a,s.b).v(0,2).t(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa4(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ai(new V.B(t.a,t.b).v(0,2).t(0,u.ga5()))}n.a0()},
fj:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sR(-t*10*u)
r.a0()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a8()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.al(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.al(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia2:1}
U.dl.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.z():u},
M:function(a){var u=this.r
if(u!=null)u.w(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.gea()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).m(0,t)
return!0},
eb:function(a){var u,t,s,r,q=this
if(!J.L(q.b,q.a.b.c))return
H.k(a,"$ibQ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.M(u)}},
aL:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.al(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia2:1}
M.cs.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.z():u},
V:function(a){var u=this.r
if(u!=null)u.w(a)},
aO:function(){return this.V(null)},
eY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aR()
u.b=!0
this.V(u)},
f_:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.u();)u.gE(u).gp().S(0,t)
u=new D.aS()
u.b=!0
this.V(u)},
a6:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.Y(u,u.length);u.u();){t=u.d
if(t!=null)t.a6(a)}s.f=!1},
$ah:function(){return[M.ae]},
$aar:function(){return[M.ae]},
$iae:1}
M.cu.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.z():u},
V:function(a){var u=this.r
if(u!=null)u.w(a)},
aO:function(){return this.V(null)},
saU:function(a){var u,t,s=this
if(a==null)a=new X.f8()
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gU())
t=s.b
s.b=a
a.gp().m(0,s.gU())
u=new D.w("camera",t,s.b)
u.b=!0
s.V(u)}},
saZ:function(a,b){var u,t,s=this
if(b==null)b=X.ji(null)
u=s.c
if(u!==b){if(u!=null)u.gp().S(0,s.gU())
t=s.c
s.c=b
b.gp().m(0,s.gU())
u=new D.w("target",t,s.c)
u.b=!0
s.V(u)}},
sb_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().m(0,t.gU())
s=new D.w("technique",u,t.d)
s.b=!0
t.V(s)}},
a6:function(a){var u=this
a.c3(u.d)
u.c.X(a)
u.b.X(a)
u.e.ag(0,a)
u.e.a6(a)
u.b.b0(a)
u.c.toString
a.c2()},
$iae:1}
M.cz.prototype={
V:function(a){var u=this.y
if(u!=null)u.w(a)},
aO:function(){return this.V(null)},
ep:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bj()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.aR()
u.b=!0
this.V(u)},
er:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.u();)u.gE(u).gp().S(0,t)
u=new D.aS()
u.b=!0
this.V(u)},
saU:function(a){var u,t,s=this
if(a==null)a=X.k5(null)
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gU())
t=s.b
s.b=a
a.gp().m(0,s.gU())
u=new D.w("camera",t,s.b)
u.b=!0
s.V(u)}},
saZ:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().S(0,t.gU())
u=t.c
t.c=b
b.gp().m(0,t.gU())
s=new D.w("target",u,t.c)
s.b=!0
t.V(s)}},
sb_:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().m(0,t.gU())
s=new D.w("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.z():u},
a6:function(a){var u,t=this
a.c3(t.d)
t.c.X(a)
t.b.X(a)
u=t.d
if(u!=null)u.ag(0,a)
for(u=t.e.a,u=new J.Y(u,u.length);u.u();)u.d.ag(0,a)
for(u=t.e.a,u=new J.Y(u,u.length);u.u();)u.d.a6(a)
t.b.toString
a.cy.aw()
a.db.aw()
t.c.toString
a.c2()},
$iae:1}
M.ae.prototype={}
A.cn.prototype={}
A.eq.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fN:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.T.prototype={
gah:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
h:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.T))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fq.prototype={
dI:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aA("")
t=c0.dy
if(t){u.a=b9
s=b9}else s=""
r=c0.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.m3(c0,u)
A.m5(c0,u)
A.m4(c0,u)
A.m7(c0,u)
A.m8(c0,u)
A.m6(c0,u)
A.m9(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.rx
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
u.a=s}if(c0.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.da(0,s.charCodeAt(0)==0?s:s,A.m2(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.k(b5.y.F(0,"invViewMat"),"$ia3")
if(t)b5.dy=H.k(b5.y.F(0,"objMat"),"$ia3")
if(r)b5.fr=H.k(b5.y.F(0,"viewObjMat"),"$ia3")
b5.fy=H.k(b5.y.F(0,"projViewObjMat"),"$ia3")
if(c0.ry)b5.k1=H.k(b5.y.F(0,"txt2DMat"),"$ic1")
if(c0.x1)b5.k2=H.k(b5.y.F(0,"txtCubeMat"),"$ia3")
if(c0.x2)b5.k3=H.k(b5.y.F(0,"colorMat"),"$ia3")
b5.r1=H.b([],[A.a3])
t=c0.y2
if(t>0){b5.k4=b5.y.F(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.t(P.r(b7+q+b8))
s.push(H.k(m,"$ia3"))}}t=c0.a
if(t.a)b5.r2=H.k(b5.y.F(0,"emissionClr"),"$iD")
if(t.b)b5.rx=H.k(b5.y.F(0,"emissionTxt"),"$iS")
t=c0.b
if(t.a)b5.x1=H.k(b5.y.F(0,"ambientClr"),"$iD")
if(t.b)b5.x2=H.k(b5.y.F(0,"ambientTxt"),"$iS")
t=c0.c
if(t.a)b5.y2=H.k(b5.y.F(0,"diffuseClr"),"$iD")
if(t.b)b5.as=H.k(b5.y.F(0,"diffuseTxt"),"$iS")
t=c0.d
if(t.a)b5.cX=H.k(b5.y.F(0,"invDiffuseClr"),"$iD")
if(t.b)b5.cY=H.k(b5.y.F(0,"invDiffuseTxt"),"$iS")
t=c0.e
s=t.a
if(s||t.b||!1){b5.d0=H.k(b5.y.F(0,"shininess"),"$iM")
if(s)b5.cZ=H.k(b5.y.F(0,"specularClr"),"$iD")
if(t.b)b5.d_=H.k(b5.y.F(0,"specularTxt"),"$iS")}if(c0.f.b)b5.d1=H.k(b5.y.F(0,"bumpTxt"),"$iS")
if(c0.cy){b5.d2=H.k(b5.y.F(0,"envSampler"),"$ib5")
t=c0.r
if(t.a)b5.d3=H.k(b5.y.F(0,"reflectClr"),"$iD")
if(t.b)b5.d4=H.k(b5.y.F(0,"reflectTxt"),"$iS")
t=c0.x
s=t.a
if(s||t.b||!1){b5.d5=H.k(b5.y.F(0,"refraction"),"$iM")
if(s)b5.d6=H.k(b5.y.F(0,"refractClr"),"$iD")
if(t.b)b5.d7=H.k(b5.y.F(0,"refractTxt"),"$iS")}}t=c0.y
if(t.a)b5.d8=H.k(b5.y.F(0,"alpha"),"$iM")
if(t.b)b5.d9=H.k(b5.y.F(0,"alphaTxt"),"$iS")
t=P.x
s=[t,A.dg]
b5.bN=new H.K(s)
b5.bO=new H.K([t,[P.aj,A.c0]])
b5.bP=new H.K(s)
b5.bQ=new H.K([t,[P.aj,A.c2]])
b5.bR=new H.K(s)
b5.bS=new H.K([t,[P.aj,A.c3]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.c0],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.al()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.k(m,"$iD")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.k(f,"$iD")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.t(P.r(b7+g+b8))
H.k(e,"$iD")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.t(P.r(b7+g+b8))
H.k(m,"$iD")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.t(P.r(b7+g+b8))
H.k(f,"$iD")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.k(e,"$iS")
a=e}else a=b6
h.push(new A.c0(b,c,d,m,f,a))}b5.bO.n(0,j,h)
q=b5.bN
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}for(t=c0.Q,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.k(m,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.k(f,"$iD")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.k(e,"$iD")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.k(a0,"$ic1")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.k(a0,"$ib5")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.k(a0,"$ib5")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.k(a2,"$ic_")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.k(a0,"$iM")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.k(a2,"$iM")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.k(a5,"$iM")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.c2(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bQ.n(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}for(t=c0.ch,s=t.length,r=[A.c3],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.k(m,"$iD")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.k(f,"$iD")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.k(e,"$iD")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.t(P.r(b7+o+b8))
H.k(a0,"$iD")
if(typeof j!=="number")return j.al()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.k(a2,"$iD")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.t(P.r(b7+o+b8))
H.k(a5,"$iD")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.t(P.r(b7+o+b8))
H.k(a9,"$iM")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.t(P.r(b7+o+b8))
H.k(b0,"$iM")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.k(a2,"$ic_")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.k(a2,"$iM")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.k(a5,"$iM")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.k(a2,"$iM")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.t(P.r(b7+g+b8))
H.k(a5,"$iM")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.t(P.r(b7+g+b8))
H.k(a9,"$iM")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.t(P.r(b7+g+b8))
H.k(a2,"$iS")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.t(P.r(b7+o+b8))
H.k(a2,"$iS")
a3=a2}else a3=b6
h.push(new A.c3(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bS.n(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.n(0,j,m)}}},
ae:function(a,b){if(b!=null&&b.d)a.dw(b)},
fd:function(a,b){}}
A.cw.prototype={
h:function(a){return"dirLight"+H.e(this.a)}}
A.cX.prototype={
h:function(a){return"pointLight"+H.e(this.a)}}
A.d2.prototype={
h:function(a){return"spotLight"+H.e(this.a)}}
A.ft.prototype={
h:function(a){return this.as}}
A.c0.prototype={}
A.c2.prototype={}
A.c3.prototype={}
A.d_.prototype={
cg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
da:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.ct(b,35633)
r.f=r.ct(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.e(s)))}r.fe()
r.fg()},
X:function(a){a.a.useProgram(this.r)
this.x.fN()},
ct:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.r("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fe:function(){var u,t,s,r=this,q=H.b([],[A.cn]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cn(p,t.name,s))}r.x=new A.eq(q)},
fg:function(){var u,t,s,r=this,q=H.b([],[A.df]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fG(t.type,t.size,t.name,s))}r.y=new A.hV(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.dg(u,b,c)
else return A.jt(u,this.r,b,a,c)},
e0:function(a,b,c){var u=this.a
if(a===1)return new A.S(u,b,c)
else return A.jt(u,this.r,b,a,c)},
e1:function(a,b,c){var u=this.a
if(a===1)return new A.b5(u,b,c)
else return A.jt(u,this.r,b,a,c)},
b6:function(a,b){return new P.dy(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fG:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hR(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.c_(u.a,c,d)
case 35667:return new A.hS(u.a,c,d)
case 35668:return new A.hT(u.a,c,d)
case 35669:return new A.hU(u.a,c,d)
case 35674:return new A.hW(u.a,c,d)
case 35675:return new A.c1(u.a,c,d)
case 35676:return new A.a3(u.a,c,d)
case 35678:return u.e0(b,c,d)
case 35680:return u.e1(b,c,d)
case 35670:throw H.f(u.b6("BOOL",c))
case 35671:throw H.f(u.b6("BOOL_VEC2",c))
case 35672:throw H.f(u.b6("BOOL_VEC3",c))
case 35673:throw H.f(u.b6("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hk.prototype={}
A.df.prototype={}
A.hV.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.i(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.dg.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hS.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hT.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hU.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hQ.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.M.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hR.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.D.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c_.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hW.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c1.prototype={
ad:function(a){var u=new Float32Array(H.cg(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a3.prototype={
ad:function(a){var u=new Float32Array(H.cg(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.S.prototype={
dw:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.b5.prototype={
dz:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iQ.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bX(s.b,b).bX(s.d.bX(s.c,b),c)
s=new V.W(r.a,r.b,r.c)
if(!J.L(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Z()}a.shi(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.az(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.L(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Z()}}}
F.aN.prototype={
dV:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dm()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dc())return
return s.t(0,Math.sqrt(s.B(s)))},
dX:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.H(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aW(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.dV()
if(u==null){u=t.dX()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
dU:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dm()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dc())return
return s.t(0,Math.sqrt(s.B(s)))},
dW:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.H(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.W(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.aW(q)
l=l.t(0,Math.sqrt(l.B(l))).aW(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bH:function(){var u,t=this
if(t.e!=null)return!0
u=t.dU()
if(u==null){u=t.dW()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ac(J.a0(s.e),0)+", "+C.b.ac(J.a0(t.b.e),0)+", "+C.b.ac(J.a0(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.h(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.h(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.bM.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ac(J.a0(u.e),0)+", "+C.b.ac(J.a0(this.b.e),0)},
K:function(){return this.A("")}}
F.bT.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ac(J.a0(u.e),0)},
K:function(){return this.A("")}}
F.hc.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.z():u},
fX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.W()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.m(0,r.fE())}h.a.W()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.m(0,n)
o=new F.bT()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.m(0,l)
p.a.m(0,k)
F.lf(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.m(0,l)
o.a.m(0,k)
o.a.m(0,i)
F.bH(l,k,i)}g=h.e
if(g!=null)g.ay(0)},
ar:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ar()||!1
if(!t.a.ar())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
cO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ag()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aI().a)!==0)++s
if((t&$.aH().a)!==0)++s
if((t&$.aJ().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.cl().a)!==0)++s
if((t&$.cm().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.aG().a)!==0)++s
r=a4.gcc(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cp])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ft(m)
k=l.gcc(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cp(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].fV(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cg(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bD(new Z.dn(a1,d),o,a4)
c.b=H.b([],[Z.bk])
if(a0.b.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bk(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bk(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.W()
b.push(t.e)}a=Z.jv(u,34963,b)
c.b.push(new Z.bk(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.q])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.k(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.w(null)}}
F.hd.prototype={
fp:function(a){var u,t,s,r,q=H.b([],[F.aN]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.m(0,p)
u.a.m(0,s)
u.a.m(0,r)
q.push(F.bH(p,s,r))}return q},
fq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aN])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.c(c,s)
m=c[s];++s
if(s>=n)return H.c(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.c(c,k)
j=c[k]
if(t<0||t>=n)return H.c(c,t)
i=c[t]
n=u.a
if(p){n.m(0,m)
u.a.m(0,l)
u.a.m(0,j)
h.push(F.bH(m,l,j))
u.a.m(0,m)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.bH(m,j,i))}else{n.m(0,l)
u.a.m(0,j)
u.a.m(0,i)
h.push(F.bH(l,j,i))
u.a.m(0,l)
u.a.m(0,i)
u.a.m(0,m)
h.push(F.bH(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
ar:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bJ())s=!1
return s},
bI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bH())s=!1
return s},
h:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
K:function(){return this.A("")}}
F.he.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
A:function(a){var u,t,s=H.b([],[P.q]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.k(s,"\n")},
K:function(){return this.A("")}}
F.hf.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
A:function(a){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
K:function(){return this.A("")}}
F.bu.prototype={
bL:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i6(u.cx,r,o,t,s,q,p,a,n)},
fE:function(){return this.bL(null)},
shi:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
fV:function(a){var u,t,s=this
if(a.q(0,$.ag())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aI())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aH())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aJ())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.ba())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cl())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cm())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bA()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aG())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dm()
t.d.J(0,new F.ie(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
bH:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dm()
t.d.J(0,new F.id(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.q])
q.push(C.b.ac(J.a0(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.C(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.ie.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.id.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.i7.prototype={
W:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
b7:function(a,b,c,d,e,f){var u=F.i6(a,null,b,c,null,d,e,f,0)
this.m(0,u)
return u},
gl:function(a){return this.c.length},
ar:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bJ()
return!0},
bI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bH()
return!0},
fB:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
h:function(a){return this.K()},
A:function(a){var u,t,s,r
this.W()
u=H.b([],[P.q])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].A(a))
return C.a.k(u,"\n")},
K:function(){return this.A("")}}
F.i8.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.i9(u,b))
C.a.J(u.d,new F.ia(u,b))},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.i9.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.ia.prototype={
$1:function(a){var u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)}}
F.ib.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.ic.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.b([],[P.q])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
O.cO.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.z():u},
T:function(a){var u=this.fr
if(u!=null)u.w(a)},
aP:function(){return this.T(null)},
cA:function(a){this.a=null
this.T(a)},
fa:function(){return this.cA(null)},
eh:function(a,b){var u=new D.aR()
u.b=!0
this.T(u)},
ej:function(a,b){var u=new D.aS()
u.b=!0
this.T(u)},
cq:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=h.i(0,0)
h.n(0,0,r==null?1:r)}q=H.b([],[A.cw])
h.J(0,new O.fx(j,q))
C.a.bk(q,new O.fy())
p=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){o=u[s]
r=o.gaV()
n=p.i(0,o.gaV())
p.n(0,r,n==null?1:n)}m=H.b([],[A.cX])
p.J(0,new O.fz(j,m))
C.a.bk(m,new O.fA())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){o=i[s]
t=o.gaV()
r=l.i(0,o.gaV())
l.n(0,t,r==null?1:r)}k=H.b([],[A.d2])
l.J(0,new O.fB(j,k))
C.a.bk(k,new O.fC())
i=C.d.a1(j.e.a.length+3,4)
j.dy.e
return A.lj(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a9:function(a,b){if(b!=null)if(!C.a.P(a,b)){b.a=a.length
a.push(b)}},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.Y(u,u.length);u.u();){t=u.d
t.toString
s=$.i5
if(s==null)s=$.i5=new V.y(0,0,1)
t.a=s
r=$.i4
t.d=r==null?$.i4=new V.y(0,1,0):r
r=$.i3
t.e=r==null?$.i3=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
dj:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cq()
u=b1.fr.i(0,b0.as)
if(u==null){u=A.li(b0,b1.a)
b1.cK(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.cW
b0=b2.e
if(!(b0 instanceof Z.bD))b0=b2.e=null
if(b0==null||!b0.d.q(0,s)){b0=t.k3
if(b0)b2.d.ar()
r=t.k4
if(r){q=b2.d
p=q.e
if(p!=null)++p.d
q.d.bI()
q.a.bI()
q=q.e
if(q!=null)q.ay(0)}q=t.r2
if(q){p=b2.d
o=p.e
if(o!=null)++o.d
p.a.fB()
p=p.e
if(p!=null)p.ay(0)}n=b2.d.cO(new Z.dp(b1.a),s)
n.at($.ag()).e=a9.a.Q.c
if(b0)n.at($.aI()).e=a9.a.cx.c
if(r)n.at($.aH()).e=a9.a.ch.c
if(t.r1)n.at($.aJ()).e=a9.a.cy.c
if(q)n.at($.ba()).e=a9.a.db.c
if(t.rx)n.at($.aG()).e=a9.a.dx.c
b2.e=n}m=H.b([],[T.d8])
a9.a.X(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.gY(r)
b0=b0.dy
b0.toString
b0.ad(r.a7(0,!0))}if(t.fr){b0=a9.a
r=b1.cx
if(r==null){r=b1.db
r=r.gY(r)
q=b1.dx
q=b1.cx=r.v(0,q.gY(q))
r=q}b0=b0.fr
b0.toString
b0.ad(r.a7(0,!0))}b0=a9.a
r=b1.ch
if(r==null){r=b1.ghb()
q=b1.dx
q=b1.ch=r.v(0,q.gY(q))
r=q}b0=b0.fy
b0.toString
b0.ad(r.a7(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.ad(C.j.a7(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.ad(C.j.a7(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.ad(C.j.a7(r,!0))}if(t.y2>0){l=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,l)
for(k=0;k<l;++k){b0=a9.a
r=a9.e.a
if(k>=r.length)return H.c(r,k)
r=r[k]
b0=b0.r1
if(k>=b0.length)return H.c(b0,k)
b0=b0[k]
j=new Float32Array(H.cg(r.a7(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,j)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.f.d)
b0=a9.a
r=a9.f.d
b0.ae(b0.rx,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.r.d)
b0=a9.a
r=a9.r.d
b0.ae(b0.x2,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.x.d)
b0=a9.a
r=a9.x.d
b0.ae(b0.as,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.cX
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.y.d)
b0=a9.a
r=a9.y.d
b0.ae(b0.cY,r)}b0=t.e
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.z.ch
q=q.d0
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.z.f
r=r.cZ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.z.d)
b0=a9.a
r=a9.z.d
b0.ae(b0.d_,r)}b0=t.z
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
h=new H.K([r,r])
for(r=a9.dx.e,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=h.i(0,0)
if(e==null)e=0
h.n(0,0,e+1)
d=J.em(a9.a.bO.i(0,0),e)
p=i.bh(f.a)
o=p.a
c=p.b
b=p.c
b=p.t(0,Math.sqrt(o*o+c*c+b*b))
c=d.e
o=b.a
p=b.b
b=b.c
c.a.uniform3f(c.d,o,p,b)
b=f.c
p=d.f
p.a.uniform3f(p.d,b.a,b.b,b.c)}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=h.i(0,q)
if(l==null)l=0
q=a9.a.bN.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.Q
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
a=new H.K([r,r])
for(r=a9.dx.f,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
a0=f.gaV()
e=a.i(0,a0)
if(e==null)e=0
a.n(0,a0,e+1)
d=J.em(a9.a.bQ.i(0,a0),e)
a1=i.v(0,f.gY(f))
p=f.gY(f)
o=$.bU
p=p.c6(o==null?$.bU=new V.W(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.bU
p=a1.c6(p==null?$.bU=new V.W(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb8(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaz()
p=a1.bV(0)
o=p.a
c=p.b
b=p.c
a2=p.e
a3=p.f
a4=p.r
a5=p.y
a6=p.z
p=p.Q
a7=d.d
a7.toString
j=new Float32Array(H.cg(new V.cP(o,c,b,a2,a3,a4,a5,a6,p).a7(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,j)
f.gaz()
p=f.gaz()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaz()
o=p.gbY(p)
if(o){o=d.f
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaN()
p=f.gdA()
o=d.x
o.toString
c=p.gfK(p)
b=p.gfL(p)
a2=p.gfM()
p=p.gfJ()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaN()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaN()
o=p.gbY(p)
if(o){o=d.r
o.toString
c=p.d
if(c<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.gfO()){p=f.gfu()
o=d.y
o.a.uniform1f(o.d,p)
p=f.gfv()
o=d.z
o.a.uniform1f(o.d,p)
p=f.gfw()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=a.i(0,q)
if(l==null)l=0
q=a9.a.bP.i(0,q)
q.a.uniform1i(q.d,l)}}b0=t.ch
if(b0.length>0){r=b1.db
i=r.gY(r)
r=P.x
a8=new H.K([r,r])
for(r=a9.dx.r,q=r.length,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
a0=f.gaV()
e=a8.i(0,a0)
if(e==null)e=0
a8.n(0,a0,e+1)
d=J.em(a9.a.bS.i(0,a0),e)
p=f.gha(f)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghq(f).hB()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=i.c6(f.gha(f))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gb8(f)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
f.gaz()
p=f.gc7()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.gc4(f)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=f.ghC()
o=d.x
o.a.uniform1f(o.d,p)
p=f.ghD()
o=d.y
o.a.uniform1f(o.d,p)
f.gaz()
p=f.gaz()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaz()
o=p.gbY(p)
if(o){o=d.dx
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}f.gaN()
p=f.gdA()
o=d.z
o.toString
c=p.gfK(p)
b=p.gfL(p)
a2=p.gfM()
p=p.gfJ()
o.a.uniform4f(o.d,c,b,a2,p)
p=f.gaN()
if(!C.a.P(m,p)){p.a=m.length
m.push(p)}p=f.gaN()
o=p.gbY(p)
if(o){o=d.dy
o.toString
c=p.d
if(!c)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(f.ghr()){p=f.ghp()
o=d.Q
o.a.uniform1f(o.d,p)
p=f.gho()
o=d.ch
o.a.uniform1f(o.d,p)}if(f.gfO()){p=f.gfu()
o=d.cx
o.a.uniform1f(o.d,p)
p=f.gfv()
o=d.cy
o.a.uniform1f(o.d,p)
p=f.gfw()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b0.length,g=0;g<b0.length;b0.length===r||(0,H.n)(b0),++g){q=b0[g].a
l=a8.i(0,q)
if(l==null)l=0
q=a9.a.bR.i(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){a9.a9(m,a9.Q.d)
b0=a9.a
r=a9.Q.d
b0.ae(b0.d1,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gY(r).bV(0)}b0=b0.id
b0.toString
b0.ad(r.a7(0,!0))}if(t.cy){a9.a9(m,a9.ch)
b0=a9.a
r=a9.ch
b0.fd(b0.d2,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.d3
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.cx.d)
b0=a9.a
r=a9.cx.d
b0.ae(b0.d4,r)}b0=t.x
r=b0.a
if(r||b0.b||!1){q=a9.a
p=a9.cy.ch
q=q.d5
q.a.uniform1f(q.d,p)}if(r){r=a9.a
q=a9.cy.f
r=r.d6
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.b){a9.a9(m,a9.cy.d)
b0=a9.a
r=a9.cy.d
b0.ae(b0.d7,r)}}b0=t.y
r=b0.a
q=!r
if(!q||b0.b||!1){if(r){r=a9.a
p=a9.db.f
r=r.d8
r.a.uniform1f(r.d,p)}if(b0.b){a9.a9(m,a9.db.d)
r=a9.a
p=a9.db.d
r.ae(r.d9,p)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b1.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b2.e
p.X(b1)
p.a6(b1)
p.b0(b1)
if(!q||b0.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b0=m[k]
if(b0.c){b0.c=!1
r.activeTexture(33984+b0.a)
r.bindTexture(3553,null)}}b0=a9.a
b0.toString
r.useProgram(null)
b0.x.cT()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.cq().as}}
O.fx.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cw(a,C.d.a1(b+3,4)*4))}}
O.fy.prototype={
$2:function(a,b){return J.j8(a.a,b.a)}}
O.fz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cX(a,C.d.a1(b+3,4)*4))}}
O.fA.prototype={
$2:function(a,b){return J.j8(a.a,b.a)}}
O.fB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.d2(a,C.d.a1(b+3,4)*4))}}
O.fC.prototype={
$2:function(a,b){return J.j8(a.a,b.a)}}
O.fr.prototype={
ap:function(){var u,t=this
t.ce()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.w(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bO.prototype={
T:function(a){return this.a.T(a)},
aP:function(){return this.T(null)},
ap:function(){},
cE:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ap()
u=s.a
u.a=null
u.T(null)}},
sc5:function(a){var u,t=this,s=t.c
if(!s.b)t.cE(new A.T(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gp().S(0,t.gaE())
u=t.d
t.d=a
a.gp().m(0,t.gaE())
s=new D.w(t.b+".texture2D",u,t.d)
s.b=!0
t.a.T(s)}}}
O.fs.prototype={}
O.ak.prototype={
cD:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
ap:function(){this.ce()
this.cD(new V.R(1,1,1))},
sb8:function(a,b){this.cE(new A.T(!0,this.c.b,!1))
this.cD(b)}}
O.fu.prototype={}
O.fv.prototype={
ap:function(){var u,t=this
t.cf()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fw.prototype={
ap:function(){var u,t=this
t.cf()
u=t.ch
if(!(Math.abs(u-100)<$.A().a)){t.ch=100
u=new D.w(t.b+".shininess",u,100)
u.b=!0
t.a.T(u)}}}
O.d0.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.z():u},
T:function(a){var u=this.e
if(u!=null)u.w(a)},
aP:function(){return this.T(null)},
dj:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.i(0,n)
if(u==null){t=a.a
u=new A.hk(t,n)
u.cg(t,n)
u.da(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.i(0,"posAttr")
u.Q=H.k(u.y.i(0,"fov"),"$iM")
u.ch=H.k(u.y.i(0,"ratio"),"$iM")
u.cx=H.k(u.y.i(0,"boxClr"),"$iD")
u.cy=H.k(u.y.i(0,"boxTxt"),"$ib5")
u.db=H.k(u.y.i(0,"viewMat"),"$ia3")
a.cK(u)}o.a=u}if(b.e==null){t=b.d.cO(new Z.dp(a.a),$.ag())
t.at($.ag()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.X(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dz(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gY(s).bV(0)
r=r.db
r.toString
r.ad(s.a7(0,!0))
t=b.e
if(t instanceof Z.bD){t.X(a)
t.a6(a)
t.b0(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.cT()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.d7.prototype={}
T.d8.prototype={}
T.hA.prototype={}
T.hB.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.z():u}}
T.hC.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.z():u}}
T.hD.prototype={
fW:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.jX(a)
t=new T.hB()
t.a=0
t.b=q
t.d=t.c=!1
W.Q(u,"load",new T.hF(this,t,u,!1,q,!1,!1),!1)
return t},
aH:function(a,b,c,d,e,f){var u=W.jX(c);++this.d
W.Q(u,"load",new T.hE(this,u,!1,b,!1,d,a),!1)},
cC:function(a,b,c){var u,t,s,r
b=V.jH(b)
u=V.jH(a.width)
t=V.jH(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jc()
s.width=u
s.height=t
r=C.f.ds(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mn(r.getImageData(0,0,s.width,s.height))}}}
T.hF.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cC(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.t.dm(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.cV()}++s.e}}
T.hE.prototype={
$1:function(a){var u=this,t=u.a,s=t.cC(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.t.dm(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cV()}++t.e}}
X.jb.prototype={}
X.f1.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.z():u},
aj:function(a){var u=this.x
if(u!=null)u.w(a)},
X:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.c.af(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.c.af(r*t)
r=C.c.af(s.c*u)
a.c=r
s=C.c.af(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.f8.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.z():u},
X:function(a){var u
a.cy.bf(V.bn())
u=V.bn()
a.db.bf(u)},
b0:function(a){a.cy.aw()
a.db.aw()}}
X.cW.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.z():u},
aj:function(a){var u=this.f
if(u!=null)u.w(a)},
en:function(){return this.aj(null)},
X:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.al(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bf(k)
r=$.k6
if(r==null){r=V.k8()
q=V.ju()
p=$.kn
r=V.k2(r,q,p==null?$.kn=new V.y(0,0,-1):p)
$.k6=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aL(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bf(u)},
b0:function(a){a.cy.aw()
a.db.aw()}}
X.hw.prototype={}
V.cr.prototype={
b2:function(a){this.b=new P.f6(C.H)
this.c=null
this.d=H.b([],[[P.aj,W.ad]])},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ad]))
u=a.split("\n")
for(l=u.length,t=[W.ad],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.e_(q,0,q.length)
n=o==null?q:o
C.F.dv(p,H.jJ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gbb(m.d).push(p)}},
di:function(a,b){var u,t,s,r,q=this
q.d=H.b([],[[P.aj,W.ad]])
u=C.a.k(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).dq(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)q.be(t[r])}}
V.j4.prototype={
$1:function(a){var u=C.c.dn(this.a.gfR(),2)
if(u!=="0.00")P.jI(u+" fps")}}
V.eI.prototype={
be:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=R.hJ()
a1.c=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=T.o(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=T.o(new H.m("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=T.o(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=T.o(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=T.o(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=T.o(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=T.o(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=T.o(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=T.o(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new T.aq())
t=a1.j(0,r).k(0,h)
u=T.o(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=T.o(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=T.o(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=T.o(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new T.aq())
t=a1.j(0,r).k(0,e)
u=T.o(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=T.o(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=T.o(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new T.Z()
s=[T.aW]
t.a=H.b([],s)
u.a.push(t)
u=T.o(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=T.o(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=T.o(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new T.Z()
t.a=H.b([],s)
u.a.push(t)
u=T.o(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=T.o(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=T.o(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=T.o(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.L("Num")
t=a1.j(0,n)
t.d=t.a.L("Num")
t=a1.j(0,m)
t.d=t.a.L("Symbol")
t=a1.j(0,j)
t.d=t.a.L("String")
t=a1.j(0,g)
t.d=t.a.L("String")
t=a1.j(0,c)
t.d=t.a.L(d)
t=a1.j(0,a0)
t.d=t.a.L(a0)
t=a1.j(0,q)
t=t.d=t.a.L(q)
u=[P.q]
t.ax(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ax(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ax(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f3.prototype={
be:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=R.hJ()
e.c=e.j(0,r)
u=e.j(0,r).k(0,q)
t=T.o(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=T.o(new H.m("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=T.o(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=T.I("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=T.I("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=T.o(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=T.o(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=T.o(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=T.o(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new T.aq())
t=e.j(0,j).k(0,i)
u=T.o(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new T.Z()
s=[T.aW]
t.a=H.b([],s)
u.a.push(t)
u=T.o(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=T.o(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new T.Z()
u.a=H.b([],s)
t.a.push(u)
t=T.o(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=T.o(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=T.o(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=T.o(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.L("Num")
u=e.j(0,n)
u.d=u.a.L("Num")
u=e.j(0,m)
u.d=u.a.L("Symbol")
u=e.j(0,i)
u.d=u.a.L(j)
u=e.j(0,g)
u.d=u.a.L(h)
u=e.j(0,f)
u.d=u.a.L(f)
u=e.j(0,q)
u=u.d=u.a.L(q)
t=[P.q]
u.ax(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ax(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ax(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f4.prototype={
be:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=R.hJ()
l.c=l.j(0,s)
u=l.j(0,s).k(0,r)
t=T.o(new H.m("_"))
u.a.push(t)
t=T.I("a","z")
u.a.push(t)
t=T.I("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=T.o(new H.m("_"))
t.a.push(u)
u=T.I("0","9")
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=T.o(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=T.o(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=T.o(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=T.o(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=T.o(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=T.o(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=T.o(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new T.aq())
l.j(0,s).k(0,m).a.push(new T.aq())
u=l.j(0,m).k(0,m)
t=new T.Z()
t.a=H.b([],[T.aW])
u.a.push(t)
u=T.o(new H.m('</\\-!>=_"'))
t.a.push(u)
u=T.I("a","z")
t.a.push(u)
u=T.I("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.L("Symbol")
u=l.j(0,n)
u.d=u.a.L("String")
u=l.j(0,r)
t=u.a.L(r)
u.d=t
t.ax(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.q]))
t=l.j(0,q)
t.d=t.a.L(q)
t=l.j(0,m)
t.d=t.a.L(m)
return l}}
V.fX.prototype={
di:function(a,b){this.d=H.b([],[[P.aj,W.ad]])
this.I(C.a.k(b,"\n"),"#111")},
be:function(a){},
b9:function(){return}}
V.hg.prototype={
dL:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Q(q,"scroll",new V.hi(o),!1)},
cJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.ff()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dq(C.a.fU(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
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
if(H.mJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.ks(C.q,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
dr:function(a){var u,t,s,r=new V.eI("dart")
r.b2("dart")
u=new V.f3("glsl")
u.b2("glsl")
t=new V.f4("html")
t.b2("html")
s=C.a.fQ(H.b([r,u,t],[V.cr]),new V.hj(a))
if(s!=null)return s
r=new V.fX("plain")
r.b2("plain")
return r},
cI:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jB(s).bl(s,"+")){b0[t]=C.b.am(s,1)
a6.push(1)
u=!0}else if(C.b.bl(s,"-")){b0[t]=C.b.am(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dr(a8)
r.di(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ks(C.q,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jN()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.c(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.n)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.n)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gO(s);a2.u();)d.appendChild(a2.gE(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
ff:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=R.hJ()
u.c=u.j(0,q)
t=u.j(0,q).k(0,p)
s=T.o(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new T.Z()
r=[T.aW]
s.a=H.b([],r)
t.a.push(s)
t=T.o(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=T.o(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=T.o(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new T.Z()
s.a=H.b([],r)
t.a.push(s)
t=T.o(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=T.o(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=T.o(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new T.Z()
s.a=H.b([],r)
t.a.push(s)
t=T.o(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=T.o(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=T.o(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=T.o(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=T.o(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new T.Z()
t.a=H.b([],r)
s.a.push(t)
s=T.o(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=T.o(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new T.Z()
t.a=H.b([],r)
s.a.push(t)
s=T.o(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new T.aq())
s=u.j(0,i).k(0,i)
t=new T.Z()
t.a=H.b([],r)
s.a.push(t)
s=T.o(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.L(p)
s=u.j(0,n)
s.d=s.a.L(o)
s=u.j(0,"CodeEnd")
s.d=s.a.L(m)
s=u.j(0,j)
s.d=s.a.L("Link")
s=u.j(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hi.prototype={
$1:function(a){P.ki(C.i,new V.hh(this.a))}}
V.hh.prototype={
$0:function(){var u=C.c.af(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hj.prototype={
$1:function(a){return a.a===this.a}}
Q.j2.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.q]
u.cI("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cI("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dD=u.h
u=J.cG.prototype
u.dF=u.h
u=P.h.prototype
u.dE=u.bi
u=W.O.prototype
u.bm=u.aa
u=W.dU.prototype
u.dG=u.ak
u=T.cC.prototype
u.dC=u.av
u.cd=u.h
u=O.bO.prototype
u.ce=u.ap
u=O.ak.prototype
u.cf=u.ap})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mh","lF",6)
u(P,"mi","lG",6)
u(P,"mj","lH",6)
t(P,"kx","mf",9)
s(W,"mw",4,null,["$4"],["lI"],16,0)
s(W,"mx",4,null,["$4"],["lJ"],16,0)
var m
r(m=E.at.prototype,"gdg",0,0,null,["$1","$0"],["dh","h2"],0,0)
r(m,"gde",0,0,null,["$1","$0"],["df","h_"],0,0)
q(m,"gfY","fZ",3)
q(m,"gh0","h1",3)
r(m=E.d9.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
p(m,"ghe","dk",9)
o(m=X.di.prototype,"gez","eA",4)
o(m,"gek","el",4)
o(m,"ges","eu",2)
o(m,"geD","eE",10)
o(m,"geB","eC",10)
o(m,"geH","eI",2)
o(m,"geL","eM",2)
o(m,"gex","ey",2)
o(m,"geJ","eK",2)
o(m,"gev","ew",2)
o(m,"geN","eO",18)
o(m,"geP","eQ",4)
o(m,"gf4","f5",5)
o(m,"gf0","f1",5)
o(m,"gf2","f3",5)
r(D.bh.prototype,"gdN",0,0,null,["$1","$0"],["an","dO"],0,0)
r(m=D.cI.prototype,"gcv",0,0,null,["$1","$0"],["cw","eF"],0,0)
o(m,"geR","eS",19)
q(m,"gee","ef",11)
q(m,"geV","eW",11)
n(V.B.prototype,"gl","bW",12)
n(V.y.prototype,"gl","bW",12)
r(m=U.bI.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
q(m,"gec","ed",13)
q(m,"geT","eU",13)
r(m=U.dj.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
r(m=U.dk.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
o(m,"ge5","e6",1)
o(m,"ge7","e8",1)
o(m,"gfm","fn",1)
o(m,"gfk","fl",1)
o(m,"gfi","fj",1)
o(U.dl.prototype,"gea","eb",1)
r(m=M.cs.prototype,"gU",0,0,null,["$1","$0"],["V","aO"],0,0)
q(m,"geX","eY",14)
q(m,"geZ","f_",14)
r(M.cu.prototype,"gU",0,0,null,["$1","$0"],["V","aO"],0,0)
r(m=M.cz.prototype,"gU",0,0,null,["$1","$0"],["V","aO"],0,0)
q(m,"geo","ep",3)
q(m,"geq","er",3)
r(m=O.cO.prototype,"gaE",0,0,null,["$1","$0"],["T","aP"],0,0)
r(m,"gf9",0,0,null,["$1","$0"],["cA","fa"],0,0)
q(m,"geg","eh",15)
q(m,"gei","ej",15)
r(O.bO.prototype,"gaE",0,0,null,["$1","$0"],["T","aP"],0,0)
r(O.d0.prototype,"gaE",0,0,null,["$1","$0"],["T","aP"],0,0)
r(X.cW.prototype,"gem",0,0,null,["$1","$0"],["aj","en"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jn,J.a,J.Y,P.dH,P.h,H.bN,P.fa,H.cA,H.hZ,H.hO,P.bi,H.bE,H.dZ,P.au,H.fg,H.fh,H.fc,P.e4,P.dq,P.d5,P.hs,P.da,P.iP,P.iD,P.ix,P.dG,P.p,P.ez,P.f7,P.iN,P.ap,P.a7,P.ab,P.aM,P.fV,P.d3,P.dy,P.f0,P.f2,P.aj,P.cN,P.aY,P.q,P.aA,W.eE,W.c6,W.F,W.cU,W.dU,W.iI,W.cB,W.ax,W.iC,W.ea,P.e9,P.iy,T.aq,T.cC,T.aW,T.h1,T.hb,R.d4,R.db,R.dc,R.hI,O.ar,O.bP,E.ev,E.at,E.h3,E.d9,Z.dn,Z.dp,Z.bD,Z.bk,Z.aD,D.ey,D.bj,D.P,X.cq,X.cH,X.fe,X.fk,X.a8,X.fJ,X.hK,X.di,D.bh,D.a1,D.fZ,D.hn,V.R,V.a5,V.eS,V.cP,V.av,V.V,V.W,V.az,V.cY,V.B,V.y,U.dj,U.dk,U.dl,M.cu,M.cz,M.ae,A.cn,A.eq,A.T,A.cw,A.cX,A.d2,A.ft,A.c0,A.c2,A.c3,A.df,A.hV,F.aN,F.bM,F.bT,F.hc,F.hd,F.he,F.hf,F.bu,F.i7,F.i8,F.ib,F.ic,O.d7,O.bO,O.fu,T.hD,X.jb,X.hw,X.f8,X.cW,V.cr,V.hg])
s(J.a,[J.fb,J.cF,J.cG,J.aT,J.bL,J.aU,H.bS,W.d,W.en,W.co,W.ai,W.E,W.ds,W.a6,W.eJ,W.eK,W.du,W.cy,W.dw,W.eM,W.i,W.dz,W.aP,W.f5,W.dC,W.aQ,W.fj,W.fD,W.dI,W.dJ,W.aX,W.dK,W.dN,W.aZ,W.dR,W.dT,W.b0,W.dV,W.b1,W.e_,W.aB,W.e2,W.hH,W.b3,W.e5,W.hM,W.i0,W.eb,W.ed,W.ef,W.eh,W.ej,P.bm,P.dE,P.bo,P.dP,P.h0,P.e0,P.bs,P.e7,P.er,P.dr,P.cZ,P.dX])
s(J.cG,[J.fW,J.bt,J.aV])
t(J.jm,J.aT)
s(J.bL,[J.cE,J.cD])
t(P.fi,P.dH)
s(P.fi,[H.dh,W.io,W.X,P.eX])
t(H.m,H.dh)
s(P.h,[H.eP,H.fn,H.c4])
s(H.eP,[H.cL,H.cJ])
s(P.fa,[H.fo,H.ih])
t(H.fp,H.cL)
s(P.bi,[H.fS,H.fd,H.hY,H.ex,H.h9,P.cV,P.ac,P.i_,P.hX,P.bY,P.eB,P.eH])
s(H.bE,[H.j7,H.hx,H.iZ,H.j_,H.j0,P.ij,P.ii,P.ik,P.il,P.iM,P.iL,P.iU,P.iA,P.iB,P.fm,P.eN,P.eO,W.eQ,W.fF,W.fH,W.h8,W.hr,W.is,W.fR,W.fQ,W.iE,W.iF,W.iK,W.iO,P.iV,P.eY,P.eZ,P.et,E.h4,E.h5,E.h6,E.hG,D.eT,D.eU,F.iQ,F.ie,F.id,F.i9,F.ia,O.fx,O.fy,O.fz,O.fA,O.fB,O.fC,T.hF,T.hE,V.j4,V.hi,V.hh,V.hj,Q.j2])
s(H.hx,[H.hp,H.bB])
t(P.fl,P.au)
s(P.fl,[H.K,W.im])
t(H.cQ,H.bS)
s(H.cQ,[H.c7,H.c9])
t(H.c8,H.c7)
t(H.bR,H.c8)
t(H.ca,H.c9)
t(H.cR,H.ca)
s(H.cR,[H.fK,H.fL,H.fM,H.fN,H.fO,H.cS,H.fP])
t(P.iz,P.iP)
t(P.iw,P.iD)
t(P.eC,P.hs)
t(P.eR,P.ez)
s(P.eC,[P.f6,P.i2])
t(P.i1,P.eR)
s(P.ab,[P.J,P.x])
s(P.ac,[P.bq,P.f9])
s(W.d,[W.H,W.eW,W.b_,W.cb,W.b2,W.aC,W.cd,W.ig,W.c5,P.eu,P.be])
s(W.H,[W.O,W.aK])
s(W.O,[W.l,P.j])
s(W.l,[W.eo,W.ep,W.bf,W.bg,W.ad,W.f_,W.bK,W.ha,W.d6,W.hu,W.hv,W.bZ])
t(W.eD,W.ai)
t(W.bF,W.ds)
s(W.a6,[W.eF,W.eG])
t(W.dv,W.du)
t(W.cx,W.dv)
t(W.dx,W.dw)
t(W.eL,W.dx)
t(W.aO,W.co)
t(W.dA,W.dz)
t(W.eV,W.dA)
t(W.dD,W.dC)
t(W.bJ,W.dD)
t(W.b4,W.i)
s(W.b4,[W.bl,W.am,W.br])
t(W.fE,W.dI)
t(W.fG,W.dJ)
t(W.dL,W.dK)
t(W.fI,W.dL)
t(W.dO,W.dN)
t(W.cT,W.dO)
t(W.dS,W.dR)
t(W.fY,W.dS)
t(W.h7,W.dT)
t(W.cc,W.cb)
t(W.hl,W.cc)
t(W.dW,W.dV)
t(W.hm,W.dW)
t(W.hq,W.e_)
t(W.e3,W.e2)
t(W.hy,W.e3)
t(W.ce,W.cd)
t(W.hz,W.ce)
t(W.e6,W.e5)
t(W.hL,W.e6)
t(W.b6,W.am)
t(W.ec,W.eb)
t(W.ip,W.ec)
t(W.dt,W.cy)
t(W.ee,W.ed)
t(W.it,W.ee)
t(W.eg,W.ef)
t(W.dM,W.eg)
t(W.ei,W.eh)
t(W.iG,W.ei)
t(W.ek,W.ej)
t(W.iH,W.ek)
t(W.iq,W.im)
t(W.ir,P.d5)
t(W.iJ,W.dU)
t(P.a9,P.iy)
t(P.dF,P.dE)
t(P.ff,P.dF)
t(P.dQ,P.dP)
t(P.fT,P.dQ)
t(P.bX,P.j)
t(P.e1,P.e0)
t(P.ht,P.e1)
t(P.e8,P.e7)
t(P.hN,P.e8)
t(P.es,P.dr)
t(P.fU,P.be)
t(P.dY,P.dX)
t(P.ho,P.dY)
s(T.cC,[T.Z,R.de])
s(E.ev,[Z.cp,A.d_,T.d8])
s(D.P,[D.aR,D.aS,D.w,X.h_])
s(X.h_,[X.cM,X.aw,X.bQ,X.dd])
s(O.ar,[D.cI,U.bI,M.cs])
s(D.ey,[U.eA,U.a2])
t(U.ct,U.a2)
s(A.d_,[A.fq,A.hk])
s(A.df,[A.dg,A.hS,A.hT,A.hU,A.hQ,A.M,A.hR,A.D,A.c_,A.hW,A.c1,A.a3,A.S,A.b5])
s(O.d7,[O.cO,O.d0])
s(O.bO,[O.fr,O.fs,O.ak])
s(O.ak,[O.fv,O.fw])
s(T.d8,[T.hA,T.hC])
t(T.hB,T.hA)
t(X.f1,X.hw)
s(V.cr,[V.eI,V.f3,V.f4,V.fX])
u(H.dh,H.hZ)
u(H.c7,P.p)
u(H.c8,H.cA)
u(H.c9,P.p)
u(H.ca,H.cA)
u(P.dH,P.p)
u(W.ds,W.eE)
u(W.du,P.p)
u(W.dv,W.F)
u(W.dw,P.p)
u(W.dx,W.F)
u(W.dz,P.p)
u(W.dA,W.F)
u(W.dC,P.p)
u(W.dD,W.F)
u(W.dI,P.au)
u(W.dJ,P.au)
u(W.dK,P.p)
u(W.dL,W.F)
u(W.dN,P.p)
u(W.dO,W.F)
u(W.dR,P.p)
u(W.dS,W.F)
u(W.dT,P.au)
u(W.cb,P.p)
u(W.cc,W.F)
u(W.dV,P.p)
u(W.dW,W.F)
u(W.e_,P.au)
u(W.e2,P.p)
u(W.e3,W.F)
u(W.cd,P.p)
u(W.ce,W.F)
u(W.e5,P.p)
u(W.e6,W.F)
u(W.eb,P.p)
u(W.ec,W.F)
u(W.ed,P.p)
u(W.ee,W.F)
u(W.ef,P.p)
u(W.eg,W.F)
u(W.eh,P.p)
u(W.ei,W.F)
u(W.ej,P.p)
u(W.ek,W.F)
u(P.dE,P.p)
u(P.dF,W.F)
u(P.dP,P.p)
u(P.dQ,W.F)
u(P.e0,P.p)
u(P.e1,W.F)
u(P.e7,P.p)
u(P.e8,W.F)
u(P.dr,P.au)
u(P.dX,P.p)
u(P.dY,W.F)})()
var v={mangledGlobalNames:{x:"int",J:"double",ab:"num",q:"String",ap:"bool",aY:"Null",aj:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.P]},{func:1,ret:-1,args:[D.P]},{func:1,ret:-1,args:[W.am]},{func:1,ret:-1,args:[P.x,[P.h,E.at]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aY,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bl]},{func:1,ret:-1,args:[P.x,[P.h,D.a1]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.x,[P.h,U.a2]]},{func:1,ret:-1,args:[P.x,[P.h,M.ae]]},{func:1,ret:-1,args:[P.x,[P.h,V.av]]},{func:1,ret:P.ap,args:[W.O,P.q,P.q,W.c6]},{func:1,ret:P.aY,args:[,]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.ap,args:[[P.h,D.a1]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bf.prototype
C.f=W.bg.prototype
C.F=W.ad.prototype
C.I=J.a.prototype
C.a=J.aT.prototype
C.J=J.cD.prototype
C.d=J.cE.prototype
C.j=J.cF.prototype
C.c=J.bL.prototype
C.b=J.aU.prototype
C.K=J.aV.prototype
C.r=J.fW.prototype
C.t=P.cZ.prototype
C.u=W.d6.prototype
C.m=J.bt.prototype
C.v=W.b6.prototype
C.w=W.c5.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.D=new P.fV()
C.h=new P.i1()
C.E=new P.i2()
C.e=new P.iz()
C.i=new P.aM(0)
C.G=new P.aM(5e6)
C.H=new P.f7("element",!1,!1,!1)
C.L=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.M=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.q])
C.N=H.b(u([]),[P.q])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.q])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])})();(function staticFields(){$.ah=0
$.bC=null
$.jP=null
$.kz=null
$.kw=null
$.kC=null
$.iW=null
$.j1=null
$.jF=null
$.bv=null
$.ch=null
$.ci=null
$.jx=!1
$.af=C.e
$.a_=[]
$.as=null
$.jg=null
$.jV=null
$.jU=null
$.dB=P.jZ(P.q,P.f2)
$.k3=null
$.k7=null
$.bU=null
$.ke=null
$.km=null
$.ko=null
$.i3=null
$.i4=null
$.i5=null
$.kn=null
$.k6=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mR","kG",function(){return H.ky("_$dart_dartClosure")})
u($,"mS","jK",function(){return H.ky("_$dart_js")})
u($,"mT","kH",function(){return H.ao(H.hP({
toString:function(){return"$receiver$"}}))})
u($,"mU","kI",function(){return H.ao(H.hP({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mV","kJ",function(){return H.ao(H.hP(null))})
u($,"mW","kK",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mZ","kN",function(){return H.ao(H.hP(void 0))})
u($,"n_","kO",function(){return H.ao(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mY","kM",function(){return H.ao(H.kk(null))})
u($,"mX","kL",function(){return H.ao(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n1","kQ",function(){return H.ao(H.kk(void 0))})
u($,"n0","kP",function(){return H.ao(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ne","jL",function(){return P.lE()})
u($,"ng","kV",function(){return P.lt("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nf","kU",function(){return P.k_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.q)})
u($,"n8","kT",function(){return Z.aa(0)})
u($,"n2","kR",function(){return Z.aa(511)})
u($,"na","ag",function(){return Z.aa(1)})
u($,"n9","aI",function(){return Z.aa(2)})
u($,"n4","aH",function(){return Z.aa(4)})
u($,"nb","aJ",function(){return Z.aa(8)})
u($,"nc","ba",function(){return Z.aa(16)})
u($,"n5","cl",function(){return Z.aa(32)})
u($,"n6","cm",function(){return Z.aa(64)})
u($,"n7","kS",function(){return Z.aa(96)})
u($,"nd","bA",function(){return Z.aa(128)})
u($,"n3","aG",function(){return Z.aa(256)})
u($,"mQ","kF",function(){return new V.eS(1e-9)})
u($,"mP","A",function(){return $.kF()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bS,ArrayBufferView:H.bS,Float32Array:H.bR,Float64Array:H.bR,Int16Array:H.fK,Int32Array:H.fL,Int8Array:H.fM,Uint16Array:H.fN,Uint32Array:H.fO,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.fP,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.en,HTMLAnchorElement:W.eo,HTMLAreaElement:W.ep,Blob:W.co,HTMLBodyElement:W.bf,HTMLCanvasElement:W.bg,CDATASection:W.aK,CharacterData:W.aK,Comment:W.aK,ProcessingInstruction:W.aK,Text:W.aK,CSSPerspective:W.eD,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bF,MSStyleCSSProperties:W.bF,CSS2Properties:W.bF,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eF,CSSUnparsedValue:W.eG,DataTransferItemList:W.eJ,HTMLDivElement:W.ad,DOMException:W.eK,ClientRectList:W.cx,DOMRectList:W.cx,DOMRectReadOnly:W.cy,DOMStringList:W.eL,DOMTokenList:W.eM,Element:W.O,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aO,FileList:W.eV,FileWriter:W.eW,HTMLFormElement:W.f_,Gamepad:W.aP,History:W.f5,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,ImageData:W.aQ,HTMLImageElement:W.bK,KeyboardEvent:W.bl,Location:W.fj,MediaList:W.fD,MIDIInputMap:W.fE,MIDIOutputMap:W.fG,MimeType:W.aX,MimeTypeArray:W.fI,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.aZ,PluginArray:W.fY,RTCStatsReport:W.h7,HTMLSelectElement:W.ha,SourceBuffer:W.b_,SourceBufferList:W.hl,SpeechGrammar:W.b0,SpeechGrammarList:W.hm,SpeechRecognitionResult:W.b1,Storage:W.hq,CSSStyleSheet:W.aB,StyleSheet:W.aB,HTMLTableElement:W.d6,HTMLTableRowElement:W.hu,HTMLTableSectionElement:W.hv,HTMLTemplateElement:W.bZ,TextTrack:W.b2,TextTrackCue:W.aC,VTTCue:W.aC,TextTrackCueList:W.hy,TextTrackList:W.hz,TimeRanges:W.hH,Touch:W.b3,TouchEvent:W.br,TouchList:W.hL,TrackDefaultList:W.hM,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.i0,VideoTrackList:W.ig,WheelEvent:W.b6,Window:W.c5,DOMWindow:W.c5,CSSRuleList:W.ip,ClientRect:W.dt,DOMRect:W.dt,GamepadList:W.it,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,SpeechRecognitionResultList:W.iG,StyleSheetList:W.iH,SVGLength:P.bm,SVGLengthList:P.ff,SVGNumber:P.bo,SVGNumberList:P.fT,SVGPointList:P.h0,SVGScriptElement:P.bX,SVGStringList:P.ht,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bs,SVGTransformList:P.hN,AudioBuffer:P.er,AudioParamMap:P.es,AudioTrackList:P.eu,AudioContext:P.be,webkitAudioContext:P.be,BaseAudioContext:P.be,OfflineAudioContext:P.fU,WebGL2RenderingContext:P.cZ,SQLResultSetRowList:P.ho})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"
W.cd.$nativeSuperclassTag="EventTarget"
W.ce.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.kA,[])
else Q.kA([])})})()
//# sourceMappingURL=test.dart.js.map
