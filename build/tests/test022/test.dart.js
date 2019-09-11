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
a[c]=function(){a[c]=function(){H.pV(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lf:function lf(){},
kH:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hf:function(){return new P.cW("No element")},
nS:function(){return new P.cW("Too many elements")},
e8:function(a,b,c,d,e){if(c-b<=32)H.om(a,b,c,d,e)
else H.ol(a,b,c,d,e)},
om:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a1()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ol:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.e.a9(a4-a3+1,6),d=a3+e,c=a4-e,b=C.e.a9(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.d(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.d(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.d(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.d(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.d(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a1()
if(a1>0){p=q
q=r
r=p}C.a.k(a2,d,u)
C.a.k(a2,b,s)
C.a.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.Q(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.S()
if(k<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a1()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.S()
if(g<0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a1()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a1()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.d(a2,a1)
C.a.k(a2,a3,a2[a1])
C.a.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.d(a2,a1)
C.a.k(a2,a4,a2[a1])
C.a.k(a2,a1,r)
H.e8(a2,a3,o-2,a5,a6)
H.e8(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.d(a2,o)
if(!J.Q(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.d(a2,n)
if(!J.Q(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.d(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,m,a2[o])
C.a.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.d(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.d(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.S()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.d(a2,o)
C.a.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.d(a2,n)
C.a.k(a2,o,a2[n])
C.a.k(a2,n,l)
o=i}else{if(n>=a1)return H.d(a2,n)
C.a.k(a2,m,a2[n])
C.a.k(a2,n,l)}n=j
break}}}H.e8(a2,o,n,a5,a6)}else H.e8(a2,o,n,a5,a6)},
u:function u(a){this.a=a},
fW:function fW(){},
c0:function c0(){},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(){},
d5:function d5(){},
ej:function ej(){},
nK:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
co:function(a){var u,t=H.pW(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pD:function(a){return v.types[H.ad(a)]},
pK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iM},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.aM(a))
return u},
cR:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
od:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.O(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.D(s,q)|32)>t)return}return parseInt(a,b)},
cS:function(a){return H.o4(a)+H.lz(H.bQ(a),0,null)},
o4:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ic9){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.co(t.length>1&&C.b.D(t,0)===36?C.b.ab(t,1):t)},
o5:function(){if(!!self.location)return self.location.href
return},
mc:function(a){var u,t,s,r,q=J.aD(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oe:function(a){var u,t,s,r=H.e([],[P.l])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aM(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aR(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aM(s))}return H.mc(r)},
md:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aM(s))
if(s<0)throw H.c(H.aM(s))
if(s>65535)return H.oe(a)}return H.mc(a)},
of:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c2:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.ah(a,0,1114111,null,null))},
c1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oc:function(a){var u=H.c1(a).getFullYear()+0
return u},
oa:function(a){var u=H.c1(a).getMonth()+1
return u},
o6:function(a){var u=H.c1(a).getDate()+0
return u},
o7:function(a){var u=H.c1(a).getHours()+0
return u},
o9:function(a){var u=H.c1(a).getMinutes()+0
return u},
ob:function(a){var u=H.c1(a).getSeconds()+0
return u},
o8:function(a){var u=H.c1(a).getMilliseconds()+0
return u},
D:function(a){throw H.c(H.aM(a))},
d:function(a,b){if(a==null)J.aD(a)
throw H.c(H.ci(a,b))},
ci:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,s,null)
u=H.ad(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,s,null,u)
return P.e3(b,s)},
py:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c3(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c3(a,c,!0,b,"end",u)
return new P.aN(!0,b,"end",null)},
aM:function(a){return new P.aN(!0,a,null,null)},
pt:function(a){if(typeof a!=="number")throw H.c(H.aM(a))
return a},
c:function(a){var u
if(a==null)a=new P.e0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n9})
u.name=""}else u.toString=H.n9
return u},
n9:function(){return J.as(this.dartException)},
A:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bj(a))},
be:function(a){var u,t,s,r,q,p
a=H.n7(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m8:function(a,b){return new H.i0(a,b==null?null:b.method)},
lg:function(a,b){var u=b==null,t=u?null:b.method
return new H.hi(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lg(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m8(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nd()
q=$.ne()
p=$.nf()
o=$.ng()
n=$.nj()
m=$.nk()
l=$.ni()
$.nh()
k=$.nm()
j=$.nl()
i=r.ah(u)
if(i!=null)return f.$1(H.lg(H.O(u),i))
else{i=q.ah(u)
if(i!=null){i.method="call"
return f.$1(H.lg(H.O(u),i))}else{i=p.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=n.ah(u)
if(i==null){i=m.ah(u)
if(i==null){i=l.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=k.ah(u)
if(i==null){i=j.ah(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m8(H.O(u),i))}}return f.$1(new H.j7(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ea()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aN(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ea()
return a},
cm:function(a){var u
if(a==null)return new H.eZ(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eZ(a)},
pC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pJ:function(a,b,c,d,e,f){H.f(a,"$ibC")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
ch:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pJ)
a.$identity=u
return u},
nJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iy().constructor.prototype):Object.create(new H.cr(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b0
if(typeof t!=="number")return t.B()
$.b0=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lW(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nF(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lW(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nF:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lV:H.l5
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nG:function(a,b,c,d){var u=H.l5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nG(t,!r,u,b)
if(t===0){r=$.b0
if(typeof r!=="number")return r.B()
$.b0=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.fC("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b0
if(typeof r!=="number")return r.B()
$.b0=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
return new Function(r+H.i(q==null?$.cs=H.fC("self"):q)+"."+H.i(u)+"("+o+");}")()},
nH:function(a,b,c,d){var u=H.l5,t=H.lV
switch(b?-1:a){case 0:throw H.c(H.oj("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nI:function(a,b){var u,t,s,r,q,p,o,n=$.cs
if(n==null)n=$.cs=H.fC("self")
u=$.lU
if(u==null)u=$.lU=H.fC("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.b0
if(typeof u!=="number")return u.B()
$.b0=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.b0
if(typeof u!=="number")return u.B()
$.b0=u+1
return new Function(n+u+"}")()},
lD:function(a,b,c,d,e,f,g){return H.nJ(a,b,c,d,!!e,!!f,g)},
l5:function(a){return a.a},
lV:function(a){return a.c},
fC:function(a){var u,t,s,r=new H.cr("self","target","receiver","name"),q=J.ld(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
F:function(a){if(a==null)H.pp("boolean expression must not be null")
return a},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b_(a,"String"))},
pz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"double"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b_(a,"num"))},
lA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b_(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b_(a,"int"))},
n5:function(a,b){throw H.c(H.b_(a,H.co(H.O(b).substring(2))))},
pQ:function(a,b){throw H.c(H.nE(a,H.co(H.O(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.n5(a,b)},
t:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.pQ(a,b)},
qF:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b_(a,"List<dynamic>"))},
n1:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.n5(a,b)},
mX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
fn:function(a,b){var u
if(typeof a=="function")return!0
u=H.mX(J.T(a))
if(u==null)return!1
return H.mJ(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.lw)return a
$.lw=!0
try{if(H.fn(a,b))return a
u=H.kV(b)
t=H.b_(a,u)
throw H.c(t)}finally{$.lw=!1}},
lF:function(a,b){if(a!=null&&!H.lC(a,b))H.A(H.b_(a,H.kV(b)))
return a},
b_:function(a,b){return new H.iX("TypeError: "+P.dJ(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
nE:function(a,b){return new H.fD("CastError: "+P.dJ(a)+": type '"+H.i(H.mP(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.T(a)
if(!!t.$icu){u=H.mX(t)
if(u!=null)return H.kV(u)
return"Closure"}return H.cS(a)},
pp:function(a){throw H.c(new H.jw(a))},
pV:function(a){throw H.c(new P.fO(a))},
oj:function(a){return new H.ij(a)},
mZ:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
qE:function(a,b,c){return H.cn(a["$a"+H.i(c)],H.bQ(b))},
cl:function(a,b,c,d){var u=H.cn(a["$a"+H.i(c)],H.bQ(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u=H.cn(a["$a"+H.i(b)],H.bQ(a))
return u==null?null:u[c]},
q:function(a,b){var u=H.bQ(a)
return u==null?null:u[b]},
kV:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lz(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.i(b[t])}if('func' in a)return H.oZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bP(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bP(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bP(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pB(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.O(n[g])
i=i+h+H.bP(d[c],a0)+(" "+H.i(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lz:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.a6("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lB:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bQ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mS(H.cn(t[d],u),null,c,null)},
m:function(a,b,c,d){if(a==null)return a
if(H.lB(a,b,c,d))return a
throw H.c(H.b_(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lz(c,0,null),v.mangledGlobalNames)))},
mS:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aL(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aL(a[t],b,c[t],d))return!1
return!0},
qC:function(a,b,c){return a.apply(b,H.cn(J.T(b)["$a"+H.i(c)],H.bQ(b)))},
n0:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="V"||a.name==="P"||a===-1||a===-2||H.n0(u)}return!1},
lC:function(a,b){var u,t
if(a==null)return b==null||b.name==="V"||b.name==="P"||b===-1||b===-2||H.n0(b)
if(b==null||b===-1||b.name==="V"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fn(a,b)}u=J.T(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aL(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lC(a,b))throw H.c(H.b_(a,H.kV(b)))
return a},
aL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aL(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="P")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aL("type" in a?a.type:l,b,s,d)
else if(H.aL(a,b,s,d))return!0
else{if(!('$i'+"cA" in t.prototype))return!1
r=t.prototype["$a"+"cA"]
q=H.cn(r,u?a.slice(1):l)
return H.aL(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mJ(a,b,c,d)
if('func' in a)return c.name==="bC"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mS(H.cn(m,u),b,p,d)},
mJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aL(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aL(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aL(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aL(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pO(h,b,g,d)},
pO:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aL(c[s],d,a[s],b))return!1}return!0},
qD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pM:function(a){var u,t,s,r,q=H.O($.n_.$1(a)),p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.O($.mR.$2(a,q))
if(q!=null){p=$.kF[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kL[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kU(u)
$.kF[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kL[q]=u
return u}if(s==="-"){r=H.kU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n4(a,u)
if(s==="*")throw H.c(P.j6(q))
if(v.leafTags[q]===true){r=H.kU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n4(a,u)},
n4:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lH(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kU:function(a){return J.lH(a,!1,null,!!a.$iM)},
pN:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kU(u)
else return J.lH(u,c,null,null)},
pH:function(){if(!0===$.lG)return
$.lG=!0
H.pI()},
pI:function(){var u,t,s,r,q,p,o,n
$.kF=Object.create(null)
$.kL=Object.create(null)
H.pG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n6.$1(q)
if(p!=null){o=H.pN(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pG:function(){var u,t,s,r,q,p,o=C.G()
o=H.cg(C.H,H.cg(C.I,H.cg(C.v,H.cg(C.v,H.cg(C.J,H.cg(C.K,H.cg(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n_=new H.kI(r)
$.mR=new H.kJ(q)
$.n6=new H.kK(p)},
cg:function(a,b){return a(b)||b},
nU:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.a4("Illegal RegExp pattern ("+String(p)+")",a,null))},
pT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lK:function(a,b,c){var u=H.pU(a,b,c)
return u},
pU:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n7(b),'g'),H.pA(c))},
fI:function fI(){},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a){this.a=a},
l0:function l0(a){this.a=a},
eZ:function eZ(a){this.a=a
this.b=null},
cu:function cu(){},
iI:function iI(){},
iy:function iy(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a){this.a=a},
fD:function fD(a){this.a=a},
ij:function ij(a){this.a=a},
jw:function jw(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hn:function hn(a,b){this.a=a
this.$ti=b},
ho:function ho(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function(a){return a},
o2:function(a){return new Int8Array(a)},
bh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ci(b,a))},
oX:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.py(a,b,c))
return b},
cM:function cM(){},
bG:function bG(){},
dX:function dX(){},
cN:function cN(){},
dY:function dY(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
dZ:function dZ(){},
cO:function cO(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
pB:function(a){return J.m0(a?Object.keys(a):[],null)},
pW:function(a){return v.mangledGlobalNames[a]},
pP:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lH:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kG:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lG==null){H.pH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j6("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lM()]
if(r!=null)return r
r=H.pM(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lM(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
nT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.m0(new Array(a),b)},
m0:function(a,b){return J.ld(H.e(a,[b]))},
ld:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dM.prototype
return J.dL.prototype}if(typeof a=="string")return J.bE.prototype
if(a==null)return J.dN.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
dp:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
fo:function(a){if(a==null)return a
if(a.constructor==Array)return J.b5.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
mY:function(a){if(typeof a=="number")return J.cE.prototype
if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.c9.prototype
return a},
dq:function(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.c9.prototype
return a},
ck:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.V)return a
return J.kG(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).q(a,b)},
lO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mY(a).p(a,b)},
dt:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dp(a).j(a,b)},
l2:function(a,b,c){return J.fo(a).k(a,b,c)},
nv:function(a,b){return J.dq(a).D(a,b)},
nw:function(a,b,c){return J.ck(a).hH(a,b,c)},
nx:function(a,b,c,d){return J.ck(a).ia(a,b,c,d)},
ny:function(a,b){return J.dq(a).Y(a,b)},
l3:function(a,b){return J.mY(a).ip(a,b)},
fq:function(a,b){return J.fo(a).J(a,b)},
nz:function(a,b,c,d){return J.ck(a).iB(a,b,c,d)},
lP:function(a,b){return J.fo(a).H(a,b)},
nA:function(a){return J.ck(a).gij(a)},
lQ:function(a){return J.ck(a).gce(a)},
du:function(a){return J.T(a).gI(a)},
bv:function(a){return J.fo(a).gV(a)},
aD:function(a){return J.dp(a).gn(a)},
lR:function(a){return J.fo(a).j7(a)},
nB:function(a,b){return J.ck(a).jb(a,b)},
nC:function(a,b,c){return J.dq(a).t(a,b,c)},
nD:function(a){return J.dq(a).jl(a)},
as:function(a){return J.T(a).i(a)},
a:function a(){},
hg:function hg(){},
dN:function dN(){},
dO:function dO(){},
i4:function i4(){},
c9:function c9(){},
bF:function bF(){},
b5:function b5(a){this.$ti=a},
le:function le(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cE:function cE(){},
dM:function dM(){},
dL:function dL(){},
bE:function bE(){}},P={
oy:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pq()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ch(new P.jy(s),1)).observe(u,{childList:true})
return new P.jx(s,u,t)}else if(self.setImmediate!=null)return P.pr()
return P.ps()},
oz:function(a){self.scheduleImmediate(H.ch(new P.jz(H.o(a,{func:1,ret:-1})),0))},
oA:function(a){self.setImmediate(H.ch(new P.jA(H.o(a,{func:1,ret:-1})),0))},
oB:function(a){P.ll(C.o,H.o(a,{func:1,ret:-1}))},
ll:function(a,b){var u=C.e.a9(a.a,1000)
return P.oH(u<0?0:u,b)},
mm:function(a,b){var u=C.e.a9(a.a,1000)
return P.oI(u<0?0:u,b)},
oH:function(a,b){var u=new P.f4()
u.f6(a,b)
return u},
oI:function(a,b){var u=new P.f4()
u.f7(a,b)
return u},
oC:function(a,b){var u,t,s
b.a=1
try{a.ey(new P.jK(b),new P.jL(b),null)}catch(s){u=H.aj(s)
t=H.cm(s)
P.pR(new P.jM(b,u,t))}},
mz:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaK")
if(u>=4){t=b.c0()
b.a=a.a
b.c=a.c
P.da(b,t)}else{t=H.f(b.c,"$ibg")
b.a=2
b.c=a
a.dl(t)}},
da:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iao")
P.kw(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.da(h.a,b)}g=h.a
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
if(m){H.f(q,"$iao")
P.kw(i,i,g.b,q.a,q.b)
return}l=$.a1
if(l!==n)$.a1=n
else l=i
g=b.c
if((g&15)===8)new P.jQ(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jP(u,b,q).$0()}else if((g&2)!==0)new P.jO(h,u,b).$0()
if(l!=null)$.a1=l
g=u.b
if(!!J.T(g).$icA){if(g.a>=4){k=H.f(o.c,"$ibg")
o.c=null
b=o.bm(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.mz(g,o)
return}}j=b.b
k=H.f(j.c,"$ibg")
j.c=null
b=j.bm(k)
g=u.a
p=u.b
if(!g){H.E(p,H.q(j,0))
j.a=4
j.c=p}else{H.f(p,"$iao")
j.a=8
j.c=p}h.a=j
g=j}},
pl:function(a,b){if(H.fn(a,{func:1,args:[P.V,P.av]}))return H.o(a,{func:1,ret:null,args:[P.V,P.av]})
if(H.fn(a,{func:1,args:[P.V]}))return H.o(a,{func:1,ret:null,args:[P.V]})
throw H.c(P.l4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pk:function(){var u,t
for(;u=$.cf,u!=null;){$.dn=null
t=u.b
$.cf=t
if(t==null)$.dm=null
u.a.$0()}},
po:function(){$.lx=!0
try{P.pk()}finally{$.dn=null
$.lx=!1
if($.cf!=null)$.lN().$1(P.mT())}},
mO:function(a){var u=new P.er(a)
if($.cf==null){$.cf=$.dm=u
if(!$.lx)$.lN().$1(P.mT())}else $.dm=$.dm.b=u},
pn:function(a){var u,t,s=$.cf
if(s==null){P.mO(a)
$.dn=$.dm
return}u=new P.er(a)
t=$.dn
if(t==null){u.b=s
$.cf=$.dn=u}else{u.b=t.b
$.dn=t.b=u
if(u.b==null)$.dm=u}},
pR:function(a){var u=null,t=$.a1
if(C.f===t){P.ky(u,u,C.f,a)
return}P.ky(u,u,t,H.o(t.ca(a),{func:1,ret:-1}))},
ml:function(a,b){var u=$.a1
if(u===C.f)return P.ll(a,H.o(b,{func:1,ret:-1}))
return P.ll(a,H.o(u.ca(b),{func:1,ret:-1}))},
op:function(a,b){var u=$.a1
if(u===C.f)return P.mm(a,H.o(b,{func:1,ret:-1,args:[P.bc]}))
return P.mm(a,H.o(u.dE(b,P.bc),{func:1,ret:-1,args:[P.bc]}))},
kw:function(a,b,c,d,e){var u={}
u.a=d
P.pn(new P.kx(u,e))},
mK:function(a,b,c,d,e){var u,t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mL:function(a,b,c,d,e,f,g){var u,t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
pm:function(a,b,c,d,e,f,g,h,i){var u,t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
ky:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.ca(d):c.ik(d,-1)
P.mO(d)},
jy:function jy(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
f4:function f4(){this.c=0},
ke:function ke(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bg:function bg(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aK:function aK(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a
this.b=null},
iB:function iB(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
cX:function cX(){},
iC:function iC(){},
bc:function bc(){},
ao:function ao(a,b){this.a=a
this.b=b},
kn:function kn(){},
kx:function kx(a,b){this.a=a
this.b=b},
jX:function jX(){},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function(a,b){return new H.a2([a,b])},
lh:function(a,b){return new H.a2([a,b])},
nY:function(a){return H.pC(a,new H.a2([null,null]))},
dR:function(a){return new P.jV([a])},
lr:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oG:function(a,b,c){var u=new P.eG(a,b,[c])
u.c=a.e
return u},
nR:function(a,b,c){var u,t
if(P.ly(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.ax,a)
try{P.p_(a,u)}finally{if(0>=$.ax.length)return H.d($.ax,-1)
$.ax.pop()}t=P.mj(b,H.n1(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
lc:function(a,b,c){var u,t
if(P.ly(a))return b+"..."+c
u=new P.a6(b)
C.a.h($.ax,a)
try{t=u
t.a=P.mj(t.a,a,", ")}finally{if(0>=$.ax.length)return H.d($.ax,-1)
$.ax.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ly:function(a){var u,t
for(u=$.ax.length,t=0;t<u;++t)if(a===$.ax[t])return!0
return!1},
p_:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.i(n.gK(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){C.a.h(b,H.i(r))
return}t=H.i(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.i(r)
t=H.i(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
nX:function(a,b,c){var u=P.nW(b,c)
a.H(0,new P.hp(u,b,c))
return u},
m1:function(a,b){var u,t,s=P.dR(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.E(a[t],b))
return s},
li:function(a){var u,t={}
if(P.ly(a))return"{...}"
u=new P.a6("")
try{C.a.h($.ax,a)
u.a+="{"
t.a=!0
J.lP(a,new P.ht(t,u))
u.a+="}"}finally{if(0>=$.ax.length)return H.d($.ax,-1)
$.ax.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jV:function jV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eG:function eG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(){},
y:function y(){},
hs:function hs(){},
ht:function ht(a,b){this.a=a
this.b=b},
af:function af(){},
kf:function kf(){},
hu:function hu(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
k1:function k1(){},
eH:function eH(){},
fa:function fa(){},
ot:function(a,b,c,d){if(b instanceof Uint8Array)return P.ou(!1,b,c,d)
return},
ou:function(a,b,c,d){var u,t,s=$.nn()
if(s==null)return
u=0===c
if(u&&!0)return P.lo(s,b)
t=b.length
d=P.bL(c,d,t)
if(u&&d===t)return P.lo(s,b)
return P.lo(s,b.subarray(c,d))},
lo:function(a,b){if(P.ow(b))return
return P.ox(a,b)},
ox:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
ow:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ov:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mN:function(a,b,c){var u,t,s
for(u=J.dp(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.al()
if((s&127)!==s)return t-b}return c-b},
lT:function(a,b,c,d,e,f){if(C.e.bg(f,4)!==0)throw H.c(P.a4("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a4("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a4("Invalid base64 padding, more than two '=' characters",a,b))},
fz:function fz(){},
fA:function fA(){},
bV:function bV(){},
bz:function bz(){},
fY:function fY(){},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hc:function hc(a){this.a=a},
jf:function jf(){},
jh:function jh(){},
kl:function kl(a){this.b=0
this.c=a},
jg:function jg(a){this.a=a},
kk:function kk(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fp:function(a,b,c){var u=H.od(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a4(a,null,null))},
nO:function(a){if(a instanceof H.cu)return a.i(0)
return"Instance of '"+H.i(H.cS(a))+"'"},
nZ:function(a,b,c){var u,t=J.nT(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.k(t,u,b)
return H.m(t,"$ib",[c],"$ab")},
m2:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bv(a);u.A();)C.a.h(s,H.E(u.gK(u),c))
if(b)return s
return H.m(J.ld(s),"$ib",t,"$ab")},
cY:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.m(a,"$ib5",[P.l],"$ab5")
u=a.length
c=P.bL(b,c,u)
return H.md(b>0||c<u?C.a.eL(a,b,c):a)}if(!!J.T(a).$icO)return H.of(a,b,P.bL(b,c,a.length))
return P.on(a,b,c)},
on:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.ah(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ah(c,b,J.aD(a),q,q))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.ah(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.ah(c,b,s,q,q))
r.push(t.gK(t))}return H.md(r)},
oh:function(a){return new H.hh(a,H.nU(a,!1,!0,!1,!1,!1))},
mj:function(a,b,c){var u=J.bv(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gK(u))
while(u.A())}else{a+=H.i(u.gK(u))
for(;u.A();)a=a+c+H.i(u.gK(u))}return a},
mp:function(){var u=H.o5()
if(u!=null)return P.os(u)
throw H.c(P.I("'Uri.base' is not supported"))},
fb:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.nt().b
if(typeof b!=="string")H.A(H.aM(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.ar(c,"bV",0))
t=c.giA().cf(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c2(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nL:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a){return new P.bA(1000*a)},
dJ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nO(a)},
dw:function(a){return new P.aN(!1,null,null,a)},
l4:function(a,b,c){return new P.aN(!0,a,b,c)},
e3:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bL:function(a,b,c){if(0>a||a>c)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
me:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
Z:function(a,b,c,d,e){var u=H.ad(e==null?J.aD(b):e)
return new P.he(u,!0,a,c,"Index out of range")},
I:function(a){return new P.j8(a)},
j6:function(a){return new P.j5(a)},
mi:function(a){return new P.cW(a)},
bj:function(a){return new P.fG(a)},
C:function(a){return new P.ez(a)},
a4:function(a,b,c){return new P.h7(a,b,c)},
o_:function(a,b,c){var u,t=H.e([],[c])
C.a.sn(t,a)
for(u=0;u<a;++u)C.a.k(t,u,b.$1(u))
return t},
lJ:function(a){H.pP(a)},
os:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.D(a,4)^58)*3|C.b.D(a,0)^100|C.b.D(a,1)^97|C.b.D(a,2)^116|C.b.D(a,3)^97)>>>0
if(u===0)return P.mo(e<e?C.b.t(a,0,e):a,5,f).geD()
else if(u===32)return P.mo(C.b.t(a,5,e),0,f).geD()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.l])
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
if(typeof r!=="number")return r.jp()
if(r>=0)if(P.mM(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.S()
if(typeof n!=="number")return H.D(n)
if(m<n)n=m
if(typeof o!=="number")return o.S()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.S()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.S()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a5(a,"..",o)))j=n>o+2&&C.b.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a5(a,"file",0)){if(q<=0){if(!C.b.a5(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aX(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a5(a,"http",0)){if(t&&p+3===o&&C.b.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a5(a,"https",0)){if(t&&p+4===o&&C.b.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aX(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.k4(a,r,q,p,o,n,m,k)}return P.oJ(a,0,e,r,q,p,o,n,m,k)},
mr:function(a){var u=P.h
return C.a.iF(H.e(a.split("&"),[u]),P.lh(u,u),new P.jd(C.h),[P.z,P.h,P.h])},
or:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ja(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fp(C.b.t(a,s,t),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fp(C.b.t(a,s,c),n,n)
if(typeof p!=="number")return p.a1()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jb(a),d=new P.jc(e,a)
if(a.length<2)e.$1("address is too short")
u=H.e([],[P.l])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.b.Y(a,t)
if(p===58){if(t===b){++t
if(C.b.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
C.a.h(u,-1)
r=!0}else C.a.h(u,d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.a.gaz(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)C.a.h(u,d.$2(s,c))
else{m=P.or(a,s,c)
C.a.h(u,(m[0]<<8|m[1])>>>0)
C.a.h(u,(m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.e.aR(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
oJ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oR(a,b,d)
else{if(d===b)P.cd(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oS(a,u,e-1):""
s=P.oO(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.D(g)
q=r<g?P.oQ(P.fp(C.b.t(a,r,g),new P.kg(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oP(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lt(a,h+1,i,n):n
return new P.cc(j,t,s,q,p,o,i<c?P.oN(a,i+1,c):n)},
mD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cd:function(a,b,c){throw H.c(P.a4(c,a,b))},
oQ:function(a,b){if(a!=null&&a===P.mD(b))return
return a},
oO:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.b.Y(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.b.Y(a,u)!==93)P.cd(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oL(a,t,u)
if(typeof s!=="number")return s.S()
if(s<u){r=s+1
q=P.mI(a,C.b.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mq(a,t,s)
return C.b.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.D(c)
p=b
for(;p<c;++p)if(C.b.Y(a,p)===58){s=C.b.br(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mI(a,C.b.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mq(a,b,s)
return"["+C.b.t(a,b,s)+q+"]"}return P.oU(a,b,c)},
oL:function(a,b,c){var u,t=C.b.br(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.D(c)
u=t<c}else u=!1
return u?t:c},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.a6(d):null
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=!0
for(;u<c;){r=C.b.Y(a,u)
if(r===37){q=P.lu(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.a6("")
o=l.a+=C.b.t(a,t,u)
if(p)q=C.b.t(a,u,u+3)
else if(q==="%")P.cd(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.a6("")
if(t<u){l.a+=C.b.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.b.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.a6("")
l.a+=C.b.t(a,t,u)
l.a+=P.ls(r)
u+=m
t=u}}}if(l==null)return C.b.t(a,b,c)
if(t<c)l.a+=C.b.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.D(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Y(a,u)
if(q===37){p=P.lu(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.a6("")
n=C.b.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.z,o)
o=(C.z[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.a6("")
if(t<u){s.a+=C.b.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cd(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.a6("")
n=C.b.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ls(q)
u+=l
t=u}}}}if(s==null)return C.b.t(a,b,c)
if(t<c){n=C.b.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oR:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mF(C.b.D(a,b)))P.cd(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.D(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cd(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.t(a,b,c)
return P.oK(t?a.toLowerCase():a)},
oK:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oS:function(a,b,c){return P.dk(a,b,c,C.W,!1)},
oP:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dk(a,b,c,C.A,!0):C.k.jH(d,new P.kh(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a2(u,"/"))u="/"+u
return P.oT(u,e,f)},
oT:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a2(a,"/"))return P.oV(a,!u||c)
return P.oW(a)},
lt:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dk(a,b,c,C.m,!0)}if(d==null)return
u=new P.a6("")
t.a=""
d.H(0,new P.ki(new P.kj(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oN:function(a,b,c){return P.dk(a,b,c,C.m,!0)},
lu:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Y(a,b+1)
t=C.b.Y(a,p)
s=H.kH(u)
r=H.kH(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aR(q,4)
if(p>=8)return H.d(C.i,p)
p=(C.i[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c2(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.t(a,b,b+3).toUpperCase()
return},
ls:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.l])
C.a.k(t,0,37)
C.a.k(t,1,C.b.D(o,a>>>4))
C.a.k(t,2,C.b.D(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.l])
for(q=0;--r,r>=0;s=128){p=C.e.hU(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.D(o,p>>>4))
C.a.k(t,q+2,C.b.D(o,p&15))
q+=3}}return P.cY(t,0,null)},
dk:function(a,b,c,d,e){var u=P.mH(a,b,c,d,e)
return u==null?C.b.t(a,b,c):u},
mH:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.S()
if(typeof c!=="number")return H.D(c)
if(!(o<c))break
c$0:{u=C.b.Y(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lu(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.l,t)
t=(C.l[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.cd(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.b.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ls(u)}}if(m==null)m=new P.a6("")
m.a+=C.b.t(a,n,o)
m.a+=H.i(s)
if(typeof r!=="number")return H.D(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.S()
if(n<c)m.a+=C.b.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mG:function(a){if(C.b.a2(a,"."))return!0
return C.b.e7(a,"/.")!==-1},
oW:function(a){var u,t,s,r,q,p,o
if(!P.mG(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Q(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oV:function(a,b){var u,t,s,r,q,p
if(!P.mG(a))return!b?P.mE(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.mE(u[0]))}return C.a.m(u,"/")},
mE:function(a){var u,t,s,r=a.length
if(r>=2&&P.mF(J.nv(a,0)))for(u=1;u<r;++u){t=C.b.D(a,u)
if(t===58)return C.b.t(a,0,u)+"%3A"+C.b.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.n,s)
s=(C.n[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oM:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.D(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lv:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.D(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.t(a,b,c)
else r=new H.u(C.b.t(a,b,c))}else{r=H.e([],[P.l])
for(s=a.length,q=b;q<c;++q){t=C.b.D(a,q)
if(t>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dw("Truncated URI"))
C.a.h(r,P.oM(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.m(r,"$ib",[P.l],"$ab")
return new P.jg(!1).cf(r)},
mF:function(a){var u=a|32
return 97<=u&&u<=122},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.l])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.D(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a4(m,a,t))}}if(s<0&&t>b)throw H.c(P.a4(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.D(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaz(l)
if(r!==44||t!==p+7||!C.b.a5(a,"base64",p+1))throw H.c(P.a4("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.iQ(0,a,o,u)
else{n=P.mH(a,o,u,C.m,!0)
if(n!=null)a=C.b.aX(a,o,u,n)}return new P.j9(a,l,c)},
oY:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o_(22,new P.kr(),P.R),n=new P.kq(o),m=new P.ks(),l=new P.kt(),k=H.f(n.$2(0,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iR")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iR")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iR")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iR")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iR")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iR")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iR")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iR"),"]",5)
k=H.f(n.$2(9,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iR")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iR")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iR")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iR")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iR"),"az",21)
k=H.f(n.$2(21,245),"$iR")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mM:function(a,b,c,d,e){var u,t,s,r,q=$.nu()
for(u=b;u<c;++u){if(d<0||d>=q.length)return H.d(q,d)
t=q[d]
s=C.b.D(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
C.a.k(e,r>>>5,u)}return d},
S:function S(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
bA:function bA(a){this.a=a},
fU:function fU(){},
fV:function fV(){},
bB:function bB(){},
ft:function ft(){},
e0:function e0(){},
aN:function aN(a,b,c,d){var _=this
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
he:function he(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j8:function j8(a){this.a=a},
j5:function j5(a){this.a=a},
cW:function cW(a){this.a=a},
fG:function fG(a){this.a=a},
i3:function i3(){},
ea:function ea(){},
fO:function fO(a){this.a=a},
ez:function ez(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(){},
l:function l(){},
k:function k(){},
b4:function b4(){},
b:function b(){},
z:function z(){},
P:function P(){},
aa:function aa(){},
V:function V(){},
av:function av(){},
h:function h(){},
a6:function a6(a){this.a=a},
jd:function jd(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(){},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(){},
kq:function kq(a){this.a=a},
ks:function ks(){},
kt:function kt(){},
k4:function k4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jE:function jE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pw:function(a){var u,t=J.T(a)
if(!!t.$ibl){u=t.gdH(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f9(a.data,a.height,a.width)},
pv:function(a){if(a instanceof P.f9)return{data:a.a,height:a.b,width:a.c}
return a},
bp:function(a){var u,t,s,r,q
if(a==null)return
u=P.lh(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.O(t[r])
u.k(0,q,a[q])}return u},
pu:function(a){var u={}
a.H(0,new P.kz(u))
return u},
k6:function k6(){},
k8:function k8(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(){},
jU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oF:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jW:function jW(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
hk:function hk(){},
ba:function ba(){},
i1:function i1(){},
i8:function i8(){},
cT:function cT(){},
iF:function iF(){},
p:function p(){},
bd:function bd(){},
iU:function iU(){},
eE:function eE(){},
eF:function eF(){},
eP:function eP(){},
eQ:function eQ(){},
f0:function f0(){},
f1:function f1(){},
f7:function f7(){},
f8:function f8(){},
R:function R(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(a){this.a=a},
fy:function fy(){},
bS:function bS(){},
i2:function i2(){},
es:function es(){},
dy:function dy(){},
e2:function e2(){},
c4:function c4(){},
e6:function e6(){},
ed:function ed(){},
ei:function ei(){},
ix:function ix(){},
eX:function eX(){},
eY:function eY(){}},W={
lS:function(){var u=document.createElement("a")
return u},
l6:function(){var u=document.createElement("canvas")
return u},
nN:function(a,b,c){var u=document.body,t=(u&&C.t).ag(u,a,b,c)
t.toString
u=W.G
u=new H.d7(new W.aq(t),H.o(new W.fX(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaJ(u),"$iU")},
m_:function(a){H.f(a,"$ij")
return"wheel"},
cx:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ck(a)
t=u.gew(a)
if(typeof t==="string")r=u.gew(a)}catch(s){H.aj(s)}return r},
nQ:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icD")
try{s.type=a}catch(u){H.aj(u)}return s},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a,b,c,d){var u=W.jT(W.jT(W.jT(W.jT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.mQ(new W.jI(c),W.n)
if(u!=null&&!0)J.nx(a,b,u,!1)
return new W.jH(a,b,u,!1,[e])},
mA:function(a){var u=W.lS(),t=window.location
u=new W.bO(new W.k0(u,t))
u.eY(a)
return u},
oD:function(a,b,c,d){H.f(a,"$iU")
H.O(b)
H.O(c)
H.f(d,"$ibO")
return!0},
oE:function(a,b,c,d){var u,t,s
H.f(a,"$iU")
H.O(b)
H.O(c)
u=H.f(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mC:function(){var u=P.h,t=P.m1(C.p,u),s=H.q(C.p,0),r=H.o(new W.kc(),{func:1,ret:u,args:[s]}),q=H.e(["TEMPLATE"],[u])
t=new W.kb(t,P.dR(u),P.dR(u),P.dR(u),null)
t.f5(null,new H.hx(C.p,r,[s,u]),q,null)
return t},
mQ:function(a,b){var u=$.a1
if(u===C.f)return a
return u.dE(a,b)},
x:function x(){},
fr:function fr(){},
dv:function dv(){},
fs:function fs(){},
cq:function cq(){},
bT:function bT(){},
bw:function bw(){},
bU:function bU(){},
ct:function ct(){},
bx:function bx(){},
cv:function cv(){},
fK:function fK(){},
W:function W(){},
cw:function cw(){},
fL:function fL(){},
b2:function b2(){},
b3:function b3(){},
fM:function fM(){},
fN:function fN(){},
fQ:function fQ(){},
aE:function aE(){},
fR:function fR(){},
dG:function dG(){},
dH:function dH(){},
fS:function fS(){},
fT:function fT(){},
jC:function jC(a,b){this.a=a
this.b=b},
U:function U(){},
fX:function fX(){},
n:function n(){},
j:function j(){},
aF:function aF(){},
cz:function cz(){},
h2:function h2(){},
h6:function h6(){},
aP:function aP(){},
hb:function hb(){},
bY:function bY(){},
bl:function bl(){},
cC:function cC(){},
cD:function cD(){},
b6:function b6(){},
dS:function dS(){},
hM:function hM(){},
cJ:function cJ(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
aQ:function aQ(){},
hR:function hR(){},
ag:function ag(){},
aq:function aq(a){this.a=a},
G:function G(){},
cP:function cP(){},
aR:function aR(){},
i6:function i6(){},
ih:function ih(){},
ii:function ii(a){this.a=a},
ik:function ik(){},
aT:function aT(){},
iv:function iv(){},
aU:function aU(){},
iw:function iw(){},
aV:function aV(){},
iz:function iz(){},
iA:function iA(a){this.a=a},
aG:function aG(){},
bb:function bb(){},
eb:function eb(){},
iG:function iG(){},
iH:function iH(){},
cZ:function cZ(){},
aX:function aX(){},
aH:function aH(){},
iJ:function iJ(){},
iK:function iK(){},
iO:function iO(){},
aY:function aY(){},
aZ:function aZ(){},
iS:function iS(){},
iT:function iT(){},
bN:function bN(){},
je:function je(){},
jt:function jt(){},
bf:function bf(){},
d8:function d8(){},
d9:function d9(){},
jD:function jD(){},
eu:function eu(){},
jS:function jS(){},
eM:function eM(){},
k5:function k5(){},
k9:function k9(){},
jB:function jB(){},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lq:function lq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jI:function jI(a){this.a=a},
bO:function bO(a){this.a=a},
H:function H(){},
e_:function e_(a){this.a=a},
hZ:function hZ(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(){},
k2:function k2(){},
k3:function k3(){},
kb:function kb(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kc:function kc(){},
ka:function ka(){},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aB:function aB(){},
k0:function k0(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
km:function km(a){this.a=a},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
eO:function eO(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
dg:function dg(){},
dh:function dh(){},
eV:function eV(){},
eW:function eW(){},
f_:function f_(){},
f2:function f2(){},
f3:function f3(){},
di:function di(){},
dj:function dj(){},
f5:function f5(){},
f6:function f6(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){}},O={
l7:function(a){var u=new O.a3([a])
u.bE(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cH:function cH(){this.b=this.a=null},
m3:function(){var u,t,s=new O.dV()
s.sfe(O.l7(V.al))
s.e.bh(s.gfO(),s.gfQ())
u=new O.b8(s,"emission")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.f=u
u=new O.b8(s,"ambient")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.r=u
u=new O.b8(s,"diffuse")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.x=u
u=new O.b8(s,"invDiffuse")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.y=u
u=new O.hE(s,"specular")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=100
s.z=u
u=new O.hA(s,"bump")
u.c=new A.ak(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.b8(s,"reflect")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
s.cx=u
u=new O.hD(s,"refract")
u.c=new A.ak(!1,!1,!1)
u.f=new V.a7(0,0,0)
u.ch=1
s.cy=u
u=new O.hz(s,"alpha")
u.c=new A.ak(!1,!1,!1)
u.f=1
s.db=u
u=new D.dQ()
u.bE(D.ae)
u.sf_(H.e([],[D.dF]))
u.shy(H.e([],[D.bH]))
u.sf1(H.e([],[D.e9]))
u.y=u.x=null
u.cM(u.gfM(),u.ghm(),u.ghq())
s.dx=u
t=new O.hC()
t.b=new V.b1(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.X():t
u.h(0,s.ghJ())
u=s.dx
t=u.y
u=t==null?u.y=D.X():t
u.h(0,s.gbj())
s.fr=null
return s},
dV:function dV(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
hz:function hz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cG:function cG(){},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b8:function b8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=null},
hD:function hD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
la:function(){var u=new E.ap()
u.a=""
u.b=!0
u.seX(0,O.l7(E.ap))
u.y.bh(u.giR(),u.giU())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sad(0,null)
u.sbe(null)
u.saV(null)
return u},
oi:function(a,b){var u=new E.ic(a)
u.eT(a,b)
return u},
oo:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ibU)return E.mk(a,!0,!0,!0,!1)
u=W.l6()
t=u.style
t.width="100%"
t.height="100%"
s.gce(a).h(0,u)
return E.mk(u,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ee(),j=H.f(C.j.cK(a,"webgl2",P.nY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic4")
if(j==null)H.A(P.C("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oi(j,a)
u=new T.iL(j)
H.ad(j.getParameter(3379))
u.c=H.ad(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.el(a)
t=new X.hj()
t.c=new X.aA(!1,!1,!1)
t.shB(P.dR(P.l))
u.b=t
t=new X.hS(u)
t.f=0
t.r=V.bJ()
t.x=V.bJ()
t.ch=t.Q=1
u.c=t
t=new X.hr(u)
t.r=0
t.x=V.bJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iR(u)
t.f=V.bJ()
t.r=V.bJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfq(H.e([],[[P.cX,P.V]]))
t=u.z
s=document
r=W.ag
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.o(u.gfY(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.o(u.gh3(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.o(u.gfS(),o),!1,p))
t=u.z
n=W.b6
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.o(u.gh7(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.o(u.gh5(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.o(u.ghb(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.o(u.ghf(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.o(u.ghd(),q),!1,r))
n=u.z
W.m_(a)
m=W.bf;(n&&C.a).h(n,W.a9(a,H.O(W.m_(a)),H.o(u.ghh(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.o(u.gh_(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.o(u.gh1(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.o(u.ghj(),o),!1,p))
p=u.z
o=W.aZ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.o(u.ghw(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.o(u.ghs(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.o(u.ghu(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.dn()
return k},
fB:function fB(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iN:function iN(a){this.a=a}},Z={
lp:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ce(c)),35044)
a.bindBuffer(b,null)
return new Z.eq(b,u)},
aJ:function(a){return new Z.bo(a)},
eq:function eq(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ju:function ju(a){this.a=a},
dA:function dA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a){this.a=a}},D={
X:function(){var u=new D.bW()
u.sam(null)
u.saP(null)
u.c=null
u.d=0
return u},
fE:function fE(){},
bW:function bW(){var _=this
_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
B:function B(){this.b=null},
bZ:function bZ(a){this.b=null
this.$ti=a},
c_:function c_(a){this.b=null
this.$ti=a},
J:function J(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dF:function dF(){},
ae:function ae(){},
dQ:function dQ(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
bH:function bH(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){}},X={dB:function dB(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},hj:function hj(){var _=this
_.d=_.c=_.b=_.a=null},dT:function dT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hr:function hr(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bn:function bn(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hS:function hS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i7:function i7(){},eg:function eg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iR:function iR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nP:function(a){var u=new X.h8(),t=new V.b1(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mg
if(t==null){t=V.mf(0,0,1,1)
$.mg=t}u.r=t
return u},
dC:function dC(){},
h8:function h8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ec:function ec(){}},V={
l1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bg(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.d.ez(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
cj:function(a,b,c){var u,t,s,r,q,p=H.e([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.N(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.d(p,q)
C.a.k(p,q,C.b.ai(p[q],t))}return p},
lI:function(a){return C.d.ji(Math.pow(2,C.S.cq(Math.log(H.pt(a))/Math.log(2))))},
cI:function(){var u=$.hL
return u==null?$.hL=V.b9(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b9:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m7:function(a,b,c){return V.b9(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lj:function(a,b,c,d){return V.b9(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m4:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b9(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m5:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b9(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b9(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bJ:function(){var u=$.mb
return u==null?$.mb=new V.ac(0,0):u},
o3:function(){var u=$.cQ
return u==null?$.cQ=new V.a5(0,0,0):u},
mf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e4(a,b,c,d)},
d6:function(){var u=$.mx
return u==null?$.mx=new V.L(0,0,0):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a){this.a=a},
dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.D(a,0)
t=C.b.D(b,0)
s=new V.ib()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.il()
u.eU(a)
return u},
iQ:function(){var u=new V.iP(),t=P.h
u.shX(new H.a2([t,V.cV]))
u.si_(new H.a2([t,V.d1]))
u.c=null
return u},
bi:function bi(){},
az:function az(){},
dU:function dU(){},
au:function au(){this.a=null},
ib:function ib(){this.b=this.a=null},
il:function il(){this.a=null},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a){this.b=a
this.c=null},
iP:function iP(){this.c=this.b=this.a=null},
d2:function d2(a){this.b=a
this.a=this.c=null},
pS:function(a){P.op(C.P,new V.kW(a))},
ok:function(a){var u=new V.iq()
u.eW(a,!0)
return u},
by:function by(){},
kW:function kW(a){this.a=a},
fP:function fP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h9:function h9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i5:function i5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i9:function i9(a){this.a=a
this.c=null},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(){this.b=this.a=null},
is:function is(a){this.a=a},
ir:function ir(a){this.a=a},
it:function it(a){this.a=a}},U={
l8:function(){var u=new U.fF()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fH:function(a){var u=new U.dD()
u.a=a
return u},
lb:function(){var u=new U.cB()
u.bE(U.ab)
u.bh(u.gf2(),u.gho())
u.e=null
u.f=V.cI()
u.r=0
return u},
fF:function fF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cB:function cB(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
e5:function e5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dI:function dI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o0:function(a,b){var u=a.b7,t=new A.hy(b,u)
t.eV(b,u)
t.eS(a,b)
return t},
o1:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gas(a1)+a2.gas(a2)+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)e+="_"+H.i(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)e+="_"+H.i(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.v)(b2),++t)e+="_"+H.i(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
for(u=b1.length,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
if(!a7.a)q=a7.c
else q=!0
if(!q)if(!a8.a){q=a8.c
p=q}else p=!0
else p=!0
if(!a2.a)q=a2.c
else q=!0
if(!q){if(!a3.a)q=a3.c
else q=!0
if(!q){if(!a4.a)q=a4.c
else q=!0
if(!q)if(!a5.a)q=a5.c
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a5.a
if(q)n=a5.c
else n=!0
m=n||u>0||p
if(!a3.a)u=a3.c
else u=!0
if(!u){if(!a4.a)u=a4.c
else u=!0
if(!u){if(q)u=a5.c
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a6.a)u=a6.c
else u=!0
k=u||p}else k=!0
if(!a6.a)j=a6.c
else j=!0
i=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
h=a0>0
g=k||j||m||!1
b=b&&i
f=$.bt()
if(k){u=$.bs()
f=new Z.bo(f.a|u.a)}if(j){u=$.br()
f=new Z.bo(f.a|u.a)}if(i){u=$.bu()
f=new Z.bo(f.a|u.a)}if(h){u=$.bq()
f=new Z.bo(f.a|u.a)}return new A.hB(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
ku:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kv:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.ku(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kZ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
p3:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ku(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
p0:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kv(b,t,"ambient")
b.a+="\n"},
p1:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kv(b,t,"diffuse")
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
p4:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kv(b,t,"invDiffuse")
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
pa:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kv(b,t,"specular")
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
p6:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
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
p8:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ku(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
p9:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ku(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
p2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.kZ(t)
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
r=[P.h]
o=H.e([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.e([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
p7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.kZ(t)
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
c.a=r+"\n"}r=[P.h]
l=H.e([],r)
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
l=H.e([],r)
o=a.b
if(!o.a)o=o.c
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
k=H.e([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
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
pb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.kZ(t)
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
c.a=u+"\n"}u=[P.h]
j=H.e([],u)
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
j=H.e([],u)
r=a.b
if(!r.a)r=r.c
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
i=H.e([],u)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
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
p5:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.e([],[P.h])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.m(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pc:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.a6("")
i.a="precision mediump float;\n"
i.a=k
u=a.k3
if(u){i.a=j
t=j}else t=k
if(a.k4){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
i.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k1){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k2?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.dx)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.p3(a,i)
A.p0(a,i)
A.p1(a,i)
A.p4(a,i)
A.pa(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.p8(a,i)
A.p9(a,i)}A.p6(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.p2(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.p7(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pb(a,q[n],i)
A.p5(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.e([],[P.h])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.m(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pd:function(a,b){var u,t,s
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
pf:function(a,b){var u
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
pe:function(a,b){var u
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
ph:function(a,b){var u,t
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
pi:function(a,b){var u,t
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
pg:function(a,b){var u
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
pj:function(a,b){var u
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
kZ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
lm:function(a,b,c,d,e){var u=new A.iZ(a,c,e)
u.f=d
u.si7(P.nZ(d,0,P.l))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a,b){var _=this
_.dO=_.jy=_.dN=_.bq=_.b7=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jG=_.jF=_.jE=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.e_=_.jD=_.dZ=_.dY=_.jC=_.dX=_.dW=_.dV=_.jB=_.dU=_.dT=_.dS=_.jA=_.dR=_.dQ=_.jz=_.dP=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aO:function aO(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.b=b},
aW:function aW(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b7=b3
_.bq=b4},
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cU:function cU(){},
eh:function eh(){},
j3:function j3(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
d4:function d4(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lE:function(a,b,c,d){var u=F.lk()
F.dl(u,b,c,d,a,1,0,0,1)
F.dl(u,b,c,d,a,0,1,0,3)
F.dl(u,b,c,d,a,0,0,1,2)
F.dl(u,b,c,d,a,-1,0,0,0)
F.dl(u,b,c,d,a,0,-1,0,0)
F.dl(u,b,c,d,a,0,0,-1,3)
u.ay()
return u},
kp:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.L(u+a3,t+a1,s+a2)
q=new V.L(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.L(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.kp(i)
l=F.kp(j.b)
k=F.lL(d,a0,new F.ko(j,F.kp(j.c),F.kp(j.d),l,m,c),b)
if(k!=null)a.bb(k)},
mW:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.lk()
t=b?-1:1
s=-6.283185307179586/e
r=H.e([],[F.aw])
q=u.a
p=new V.L(0,0,t)
p=p.v(0,Math.sqrt(p.C(p)))
C.a.h(r,q.ie(new V.bK(a,-1,-1,-1),new V.b1(1,1,1,1),new V.a5(0,0,c),new V.L(0,0,t),new V.ac(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.D(k)
j=new V.L(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.ep(new V.bK(a,-1,-1,-1),null,new V.b1(i,g,h,1),new V.a5(m*k,l*k,c),new V.L(0,0,t),new V.ac(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ib(r)
return u},
mU:function(a,b,c){return F.px(!0,a,1,new F.kA(1,c),b)},
px:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lL(c,e,new F.kC(d),null)
if(u==null)return
u.ay()
u.c8()
if(b)u.bb(F.mW(3,!1,1,new F.kD(d),e))
u.bb(F.mW(1,!0,-1,new F.kE(d),e))
return u},
n8:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kX()
t=F.lE(a,null,new F.kY(s,1),b)
t.c8()
return t},
na:function(){return F.mV(15,30,0.5,1,new F.l_())},
pL:function(){return F.mV(12,120,0.3,1,new F.kM(3,2))},
mV:function(a,b,c,d,e){var u=F.lL(a,b,new F.kB(e,d,b,c),null)
if(u==null)return
u.ay()
u.c8()
return u},
lL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.lk()
t=H.e([],[F.aw])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ep(g,g,new V.b1(p,0,0,1),g,g,new V.ac(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cg(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ep(g,g,new V.b1(j,i,h,1),g,g,new V.ac(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cg(d))}}u.d.ic(a+1,b+1,t)
return u},
cy:function(a,b,c){var u=new F.a8(),t=a.a
if(t==null)H.A(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.C("May not create a face with vertices attached to different shapes."))
u.c6(a)
u.c7(b)
u.hP(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a_()
return u},
nV:function(a,b){var u=new F.bm(),t=a.a
if(t==null)H.A(P.C("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.A(P.C("May not create a line with vertices attached to different shapes."))
u.c6(a)
u.c7(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a_()
return u},
lk:function(){var u=new F.e7(),t=new F.ji(u)
t.b=!1
t.si8(H.e([],[F.aw]))
u.a=t
t=new F.ip(u)
t.sbZ(H.e([],[F.bI]))
u.b=t
t=new F.io(u)
t.sfA(H.e([],[F.bm]))
u.c=t
t=new F.im(u)
t.sfs(H.e([],[F.a8]))
u.d=t
u.e=null
return u},
ep:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aw(),r=new F.jq()
r.sbZ(H.e([],[F.bI]))
s.b=r
r=new F.jm()
u=[F.bm]
r.sfB(H.e([],u))
r.sfC(H.e([],u))
s.c=r
r=new F.jj()
u=[F.a8]
r.sft(H.e([],u))
r.sfu(H.e([],u))
r.sfv(H.e([],u))
s.d=r
h=$.no()
s.e=0
r=$.bt()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bs().a)!==0?e:t
s.x=(u&$.br().a)!==0?b:t
s.y=(u&$.bR().a)!==0?f:t
s.z=(u&$.bu().a)!==0?g:t
s.Q=(u&$.np().a)!==0?c:t
s.ch=(u&$.cp().a)!==0?i:0
s.cx=(u&$.bq().a)!==0?a:t
return s},
ko:function ko(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kX:function kX(){},
kY:function kY(a,b){this.a=a
this.b=b},
l_:function l_(){},
kM:function kM(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){},
iu:function iu(){},
bm:function bm(){this.b=this.a=null},
hl:function hl(){},
iY:function iY(){},
bI:function bI(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){this.a=a
this.b=null},
io:function io(a){this.a=a
this.b=null},
ip:function ip(a){this.a=a
this.b=null},
aw:function aw(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(){this.d=this.c=this.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){this.c=this.b=null},
jo:function jo(){},
jn:function jn(){},
jp:function jp(){},
i_:function i_(){},
jq:function jq(){this.b=null}},T={d_:function d_(){},d0:function d0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iL:function iL(a){var _=this
_.a=a
_.e=_.d=_.c=null},iM:function iM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
n2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=null,a4=34067,a5="modifiers",a6=V.ok("Test 022"),a7=W.l6()
a7.className="pageLargeCanvas"
a7.id=a2
a6.a.appendChild(a7)
u=[P.h]
a6.dB(H.e(["Test of the Material Lighting shader with a textured point light."],u))
a6.i9(H.e(["shapes"],u))
a6.dB(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a2)
if(t==null)H.A(P.C("Failed to find an element with the identifier, testCanvas."))
s=E.oo(t,!0,!0,!0,!1)
r=s.f
q=r.a
p=q.createTexture()
q.bindTexture(a4,p)
q.texParameteri(a4,10242,10497)
q.texParameteri(a4,10243,10497)
q.texParameteri(a4,10241,9729)
q.texParameteri(a4,10240,9729)
q.bindTexture(a4,a3)
o=new T.d0()
o.a=0
o.b=p
o.c=!1
o.d=0
r.aN(o,p,"../resources/earthColor/posx.png",34069,!1,!1)
r.aN(o,p,"../resources/earthColor/negx.png",34070,!1,!1)
r.aN(o,p,"../resources/earthColor/posy.png",34071,!1,!1)
r.aN(o,p,"../resources/earthColor/negy.png",34072,!1,!1)
r.aN(o,p,"../resources/earthColor/posz.png",34073,!1,!1)
r.aN(o,p,"../resources/earthColor/negz.png",34074,!1,!1)
n=U.lb()
n.h(0,U.fH(V.m7(0,0,2)))
r=new U.e5()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seF(0)
r.sem(0,0)
r.seu(0)
q=r.d
if(!(Math.abs(q-0.5)<$.K().a)){r.d=0.5
q=new D.J("deltaYaw",q,0.5,[P.r])
q.b=!0
r.G(q)}q=r.e
if(!(Math.abs(q-0.5)<$.K().a)){r.e=0.5
q=new D.J("deltaPitch",q,0.5,[P.r])
q.b=!0
r.G(q)}q=r.f
if(!(Math.abs(q-0)<$.K().a)){r.f=0
q=new D.J("deltaRoll",q,0,[P.r])
q.b=!0
r.G(q)}n.h(0,r)
m=E.la()
r=U.lb()
r.h(0,U.fH(V.lj(0.2,0.2,0.2,1)))
r.h(0,n)
m.saV(r)
m.sad(0,F.n8(8,8))
r=O.m3()
q=r.f
l=q.c
if(!l.c)q.c3(new A.ak(l.a,!1,!0))
l=q.e
if(l!==o){if(l!=null)l.gu().L(0,q.gbj())
k=q.e
q.e=o
o.gu().h(0,q.gbj())
l=new D.J(q.b+".textureCube",k,q.e,[T.d0])
l.b=!0
q.a.a0(l)}m.sbe(r)
j=new D.bH()
j.c=new V.a7(1,1,1)
j.r=1
j.y=j.x=0
j.z=!0
j.a=V.cI()
k=j.b
j.b=n
n.gu().h(0,j.gbF())
r=new D.J("mover",k,j.b,[U.ab])
r.b=!0
j.a6(r)
i=new V.a7(1,1,1)
if(!j.c.q(0,i)){k=j.c
j.c=i
r=new D.J("color",k,i,[V.a7])
r.b=!0
j.a6(r)}r=j.d
if(r!==o){if(r!=null)r.gu().L(0,j.gbF())
k=j.d
j.d=o
o.gu().h(0,j.gbF())
r=new D.J("texture",k,j.d,[T.d0])
r.b=!0
j.a6(r)}r=$.my
if(r==null){r=new V.ca(1,0.00390625,0.0000152587890625,0)
$.my=r
h=r}else h=r
if(!J.Q(j.f,h)){k=j.f
j.f=h
r=new D.J("shadowAdjust",k,h,[V.ca])
r.b=!0
j.a6(r)}r=j.r
if(!(Math.abs(r-1)<$.K().a)){j.r=1
r=new D.J("attenuation0",r,1,[P.r])
r.b=!0
j.a6(r)}r=j.x
if(!(Math.abs(r-0.15)<$.K().a)){j.x=0.15
r=new D.J("attenuation1",r,0.15,[P.r])
r.b=!0
j.a6(r)}r=j.y
if(!(Math.abs(r-0.05)<$.K().a)){j.y=0.05
r=new D.J("attenuation2",r,0.05,[P.r])
r.b=!0
j.a6(r)}g=O.m3()
g.dx.h(0,j)
r=g.r
r.sb4(0,new V.a7(0.1,0.1,0.1))
r=g.x
r.sb4(0,new V.a7(1,1,1))
r=g.z
r.sb4(0,new V.a7(1,1,1))
r=g.z
r.c3(new A.ak(!0,!1,r.c.c))
r.dr(100)
f=E.la()
f.saV(U.fH(V.lj(3,3,3,1)))
r=F.lE(1,a3,a3,1)
r.cp()
f.sad(0,r)
e=E.la()
e.sad(0,F.na())
d=U.lb()
r=s.r
q=new U.en()
l=U.l8()
l.scJ(0,!0)
l.scv(6.283185307179586)
l.scz(0)
l.sZ(0,0)
l.scw(100)
l.sX(0)
l.sci(0.5)
q.b=l
c=q.gaO()
l.gu().h(0,c)
l=U.l8()
l.scJ(0,!0)
l.scv(6.283185307179586)
l.scz(0)
l.sZ(0,0)
l.scw(100)
l.sX(0)
l.sci(0.5)
q.c=l
l.gu().h(0,c)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
b=new X.aA(!1,!1,!1)
k=q.d
q.d=b
l=[X.aA]
c=new D.J(a5,k,b,l)
c.b=!0
q.G(c)
c=q.f
if(c!==!1){q.f=!1
c=new D.J("invertX",c,!1,[P.S])
c.b=!0
q.G(c)}c=q.r
if(c!==!1){q.r=!1
c=new D.J("invertY",c,!1,[P.S])
c.b=!0
q.G(c)}q.b3(r)
d.h(0,q)
r=s.r
q=new U.em()
c=U.l8()
c.scJ(0,!0)
c.scv(6.283185307179586)
c.scz(0)
c.sZ(0,0)
c.scw(100)
c.sX(0)
c.sci(0.2)
q.b=c
c.gu().h(0,q.gaO())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
b=new X.aA(!0,!1,!1)
k=q.c
q.c=b
c=new D.J(a5,k,b,l)
c.b=!0
q.G(c)
q.b3(r)
d.h(0,q)
r=s.r
q=new U.eo()
q.c=0.01
q.e=q.d=0
b=new X.aA(!1,!1,!1)
q.b=b
l=new D.J(a5,a3,b,l)
l.b=!0
q.G(l)
q.b3(r)
d.h(0,q)
d.h(0,U.fH(V.m7(0,0,5)))
a=new M.dI()
a.a=!0
a.sfh(0,O.l7(E.ap))
a.e.bh(a.gfU(),a.gfW())
a.y=a.x=a.r=a.f=null
a0=X.nP(a3)
a1=new X.e1()
a1.c=1.0471975511965976
a1.d=0.1
a1.e=2000
a1.saV(a3)
r=a1.c
if(!(Math.abs(r-1.0471975511965976)<$.K().a)){a1.c=1.0471975511965976
r=new D.J("fov",r,1.0471975511965976,[P.r])
r.b=!0
a1.aL(r)}r=a1.d
if(!(Math.abs(r-0.1)<$.K().a)){a1.d=0.1
r=new D.J("near",r,0.1,[P.r])
r.b=!0
a1.aL(r)}r=a1.e
if(!(Math.abs(r-2000)<$.K().a)){a1.e=2000
r=new D.J("far",r,2000,[P.r])
r.b=!0
a1.aL(r)}r=a.b
if(r!==a1){if(r!=null)r.gu().L(0,a.gau())
k=a.b
a.b=a1
a1.gu().h(0,a.gau())
r=new D.J("camera",k,a.b,[X.dC])
r.b=!0
a.aA(r)}r=a.c
if(r!==a0){if(r!=null)r.gu().L(0,a.gau())
k=a.c
a.c=a0
a0.gu().h(0,a.gau())
r=new D.J("target",k,a.c,[X.ec])
r.b=!0
a.aA(r)}a.sbe(a3)
a.sbe(g)
a.e.h(0,f)
a.e.h(0,e)
a.e.h(0,m)
a.b.saV(d)
r=s.d
if(r!==a){if(r!=null)r.gu().L(0,s.gcS())
s.d=a
a.gu().h(0,s.gcS())
s.cT()}r=new V.i9("shapes")
u=u.getElementById("shapes")
r.c=u
if(u==null)H.A("Failed to find shapes for RadioGroup")
r.b2(0,"Cube",new T.kN(e))
r.b2(0,"Cylinder",new T.kO(e))
r.b2(0,"Cone",new T.kP(e))
r.b2(0,"Sphere",new T.kQ(e))
r.dz(0,"Toroid",new T.kR(e),!0)
r.b2(0,"Knot",new T.kS(e))
u=s.z
if(u==null)u=s.z=D.X()
r={func:1,ret:-1,args:[D.B]}
q=H.o(new T.kT(a6,g),r)
if(u.b==null)u.saP(H.e([],[r]))
u=u.b;(u&&C.a).h(u,q)
V.pS(s)},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lf.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.cR(a)},
i:function(a){return"Instance of '"+H.i(H.cS(a))+"'"}}
J.hg.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iS:1}
J.dN.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dO.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.i4.prototype={}
J.c9.prototype={}
J.bF.prototype={
i:function(a){var u=a[$.nc()]
if(u==null)return this.eO(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibC:1}
J.b5.prototype={
h:function(a,b){H.E(b,H.q(a,0))
if(!!a.fixed$length)H.A(P.I("add"))
a.push(b)},
eq:function(a,b){if(!!a.fixed$length)H.A(P.I("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e3(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.A(P.I("remove"))
for(u=0;u<a.length;++u)if(J.Q(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bj(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.i(a[u]))
return t.join(b)},
iM:function(a){return this.m(a,"")},
iF:function(a,b,c,d){var u,t,s
H.E(b,d)
H.o(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bj(a))}return t},
iE:function(a,b){var u,t,s
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.F(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bj(a))}throw H.c(H.hf())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eL:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ah(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.q(a,0)])
return H.e(a.slice(b,c),[H.q(a,0)])},
giD:function(a){if(a.length>0)return a[0]
throw H.c(H.hf())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hf())},
dC:function(a,b){var u,t
H.o(b,{func:1,ret:P.S,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.F(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bj(a))}return!1},
bC:function(a,b){var u=H.q(a,0)
H.o(b,{func:1,ret:P.l,args:[u,u]})
if(!!a.immutable$list)H.A(P.I("sort"))
H.e8(a,0,a.length-1,b,u)},
U:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Q(a[u],b))return!0
return!1},
i:function(a){return P.lc(a,"[","]")},
gV:function(a){return new J.at(a,a.length,[H.q(a,0)])},
gI:function(a){return H.cR(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.A(P.I("set length"))
if(b<0)throw H.c(P.ah(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ci(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.q(a,0))
if(!!a.immutable$list)H.A(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ci(a,b))
a[b]=c},
$ik:1,
$ib:1}
J.le.prototype={}
J.at.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sd9(null)
return!1}t.sd9(s[u]);++t.c
return!0},
sd9:function(a){this.d=H.E(a,H.q(this,0))},
$ib4:1}
J.cE.prototype={
ip:function(a,b){var u
H.n3(b)
if(typeof b!=="number")throw H.c(H.aM(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbs(b)
if(this.gbs(a)===u)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
ji:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
cq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
ez:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ah(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.A(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.aM(b))
return a*b},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dt(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dt(a,b)},
dt:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.ds(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hU:function(a,b){if(b<0)throw H.c(H.aM(b))
return this.ds(a,b)},
ds:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iaa:1}
J.dM.prototype={$il:1}
J.dL.prototype={}
J.bE.prototype={
Y:function(a,b){if(b<0)throw H.c(H.ci(a,b))
if(b>=a.length)H.A(H.ci(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.ci(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.l4(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
c=P.bL(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a2:function(a,b){return this.a5(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.aM(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.e3(b,null))
if(b>c)throw H.c(P.e3(b,null))
if(c>a.length)throw H.c(P.e3(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.t(a,b,null)},
jl:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
br:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ah(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e7:function(a,b){return this.br(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$im9:1,
$ih:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.Y(this.a,b)},
$ad5:function(){return[P.l]},
$ay:function(){return[P.l]},
$ak:function(){return[P.l]},
$ab:function(){return[P.l]}}
H.fW.prototype={}
H.c0.prototype={
gV:function(a){var u=this
return new H.cF(u,u.gn(u),[H.ar(u,"c0",0)])},
bA:function(a,b){return this.eN(0,H.o(b,{func:1,ret:P.S,args:[H.ar(this,"c0",0)]}))}}
H.cF.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.dp(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bj(s))
u=t.c
if(u>=q){t.saZ(null)
return!1}t.saZ(r.J(s,u));++t.c
return!0},
saZ:function(a){this.d=H.E(a,H.q(this,0))},
$ib4:1}
H.hv.prototype={
gV:function(a){return new H.hw(J.bv(this.a),this.b,this.$ti)},
gn:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ak:function(a,b){return[b]}}
H.hw.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saZ(u.c.$1(t.gK(t)))
return!0}u.saZ(null)
return!1},
gK:function(a){return this.a},
saZ:function(a){this.a=H.E(a,H.q(this,1))},
$ab4:function(a,b){return[b]}}
H.hx.prototype={
gn:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fq(this.a,b))},
$ac0:function(a,b){return[b]},
$ak:function(a,b){return[b]}}
H.d7.prototype={
gV:function(a){return new H.jv(J.bv(this.a),this.b,this.$ti)}}
H.jv.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.F(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bX.prototype={}
H.d5.prototype={
k:function(a,b,c){H.E(c,H.ar(this,"d5",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.ej.prototype={}
H.fI.prototype={
i:function(a){return P.li(this)},
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
return H.nK()},
$iz:1}
H.fJ.prototype={
gn:function(a){return this.a},
bo:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bo(0,b))return
return this.da(b)},
da:function(a){return this.b[H.O(a)]},
H:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.o(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.da(r),p))}}}
H.iV.prototype={
ah:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i0.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hi.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.j7.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l0.prototype={
$1:function(a){if(!!J.T(a).$ibB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.eZ.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cu.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibC:1,
gjo:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iI.prototype={}
H.iy.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cr))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cR(this.a)
else u=typeof t!=="object"?J.du(t):H.cR(t)
return(u^H.cR(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.i(H.cS(u))+"'")}}
H.iX.prototype={
i:function(a){return this.a}}
H.fD.prototype={
i:function(a){return this.a}}
H.ij.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.jw.prototype={
i:function(a){return"Assertion failed: "+P.dJ(this.a)}}
H.a2.prototype={
gn:function(a){return this.a},
giL:function(a){return this.a===0},
ga3:function(a){return new H.hn(this,[H.q(this,0)])},
bo:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d6(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d6(t,b)}else return s.iI(b)},
iI:function(a){var u=this,t=u.d
if(t==null)return!1
return u.ct(u.bN(t,u.cs(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.iJ(b)},
iJ:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bN(r,s.cs(a))
t=s.ct(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.q(s,0))
H.E(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.cX(u==null?s.b=s.bX():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cX(t==null?s.c=s.bX():t,b,c)}else s.iK(b,c)},
iK:function(a,b){var u,t,s,r,q=this
H.E(a,H.q(q,0))
H.E(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.bX()
t=q.cs(a)
s=q.bN(u,t)
if(s==null)q.c4(u,t,[q.bY(a,b)])
else{r=q.ct(s,a)
if(r>=0)s[r].b=b
else s.push(q.bY(a,b))}},
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bj(s))
u=u.c}},
cX:function(a,b,c){var u,t=this
H.E(b,H.q(t,0))
H.E(c,H.q(t,1))
u=t.bk(a,b)
if(u==null)t.c4(a,b,t.bY(b,c))
else u.b=c},
fI:function(){this.r=this.r+1&67108863},
bY:function(a,b){var u,t=this,s=new H.hm(H.E(a,H.q(t,0)),H.E(b,H.q(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fI()
return s},
cs:function(a){return J.du(a)&0x3ffffff},
ct:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1},
i:function(a){return P.li(this)},
bk:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
fm:function(a,b){delete a[b]},
d6:function(a,b){return this.bk(a,b)!=null},
bX:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c4(t,u,t)
this.fm(t,u)
return t}}
H.hm.prototype={}
H.hn.prototype={
gn:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.ho(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ho.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.scW(null)
return!1}else{u.scW(t.a)
u.c=u.c.c
return!0}}},
scW:function(a){this.d=H.E(a,H.q(this,0))},
$ib4:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:56}
H.kK.prototype={
$1:function(a){return this.a(H.O(a))},
$S:53}
H.hh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im9:1,
$iog:1}
H.cM.prototype={$icM:1}
H.bG.prototype={$ibG:1,$ioq:1}
H.dX.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cN.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pz(c)
H.bh(b,a,a.length)
a[b]=c},
$abX:function(){return[P.r]},
$ay:function(){return[P.r]},
$ik:1,
$ak:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dY.prototype={
k:function(a,b,c){H.ad(c)
H.bh(b,a,a.length)
a[b]=c},
$abX:function(){return[P.l]},
$ay:function(){return[P.l]},
$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]}}
H.hT.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hV.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hW.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.hX.prototype={
j:function(a,b){H.bh(b,a,a.length)
return a[b]}}
H.dZ.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$iqh:1}
H.cO.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bh(b,a,a.length)
return a[b]},
$icO:1,
$iR:1}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
P.jy.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jx.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f4.prototype={
f6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ch(new P.ke(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
f7:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ch(new P.kd(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibc:1}
P.ke.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kd.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eR(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bg.prototype={
iO:function(a){if((this.c&15)!==6)return!0
return this.b.b.cG(H.o(this.d,{func:1,ret:P.S,args:[P.V]}),a.a,P.S,P.V)},
iH:function(a){var u=this.e,t=P.V,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fn(u,{func:1,args:[P.V,P.av]}))return H.lF(r.jd(u,a.a,a.b,null,t,P.av),s)
else return H.lF(r.cG(H.o(u,{func:1,args:[P.V]}),a.a,null,t),s)}}
P.aK.prototype={
ey:function(a,b,c){var u,t,s,r=H.q(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.pl(b,u)}t=new P.aK($.a1,[c])
s=b==null?1:3
this.cY(new P.bg(t,s,a,b,[r,c]))
return t},
jh:function(a,b){return this.ey(a,null,b)},
cY:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibg")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaK")
s=u.a
if(s<4){u.cY(a)
return}t.a=s
t.c=u.c}P.ky(null,null,t.b,H.o(new P.jJ(t,a),{func:1,ret:-1}))}},
dl:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibg")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaK")
u=q.a
if(u<4){q.dl(a)
return}p.a=u
p.c=q.c}o.a=p.bm(a)
P.ky(null,null,p.b,H.o(new P.jN(o,p),{func:1,ret:-1}))}},
c0:function(){var u=H.f(this.c,"$ibg")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d2:function(a){var u,t,s=this,r=H.q(s,0)
H.lF(a,{futureOr:1,type:r})
u=s.$ti
if(H.lB(a,"$icA",u,"$acA"))if(H.lB(a,"$iaK",u,null))P.mz(a,s)
else P.oC(a,s)
else{t=s.c0()
H.E(a,r)
s.a=4
s.c=a
P.da(s,t)}},
d3:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.c0()
t.a=8
t.c=new P.ao(a,b)
P.da(t,u)},
$icA:1}
P.jJ.prototype={
$0:function(){P.da(this.a,this.b)},
$S:0}
P.jN.prototype={
$0:function(){P.da(this.b,this.a.a)},
$S:0}
P.jK.prototype={
$1:function(a){var u=this.a
u.a=0
u.d2(a)},
$S:18}
P.jL.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.d3(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jM.prototype={
$0:function(){this.a.d3(this.b,this.c)},
$S:0}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ev(H.o(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.cm(r)
if(o.d){s=H.f(o.a.a.c,"$iao").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iao")
else q.b=new P.ao(u,t)
q.a=!0
return}if(!!J.T(n).$icA){if(n instanceof P.aK&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iao")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jh(new P.jR(p),null)
s.a=!1}},
$S:3}
P.jR.prototype={
$1:function(a){return this.a},
$S:46}
P.jP.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.E(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cG(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.cm(o)
s=n.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iao")
r=m.c
if(H.F(r.iO(u))&&r.e!=null){q=m.b
q.b=r.iH(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.cm(p)
r=H.f(m.a.a.c,"$iao")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.er.prototype={}
P.iB.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aK($.a1,[P.l])
r.a=0
u=H.q(s,0)
t=H.o(new P.iD(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.iE(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iD.prototype={
$1:function(a){H.E(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.P,args:[H.q(this.b,0)]}}}
P.iE.prototype={
$0:function(){this.b.d2(this.a.a)},
$S:0}
P.cX.prototype={}
P.iC.prototype={}
P.bc.prototype={}
P.ao.prototype={
i:function(a){return H.i(this.a)},
$ibB:1}
P.kn.prototype={$iqw:1}
P.kx.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e0():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jX.prototype={
je:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a1){a.$0()
return}P.mK(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.cm(s)
P.kw(r,r,this,u,H.f(t,"$iav"))}},
jf:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a1){a.$1(b)
return}P.mL(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.cm(s)
P.kw(r,r,this,u,H.f(t,"$iav"))}},
ik:function(a,b){return new P.jZ(this,H.o(a,{func:1,ret:b}),b)},
ca:function(a){return new P.jY(this,H.o(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.k_(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.o(a,{func:1,ret:b})
if($.a1===C.f)return a.$0()
return P.mK(null,null,this,a,b)},
cG:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a1===C.f)return a.$1(b)
return P.mL(null,null,this,a,b,c,d)},
jd:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a1===C.f)return a.$2(b,c)
return P.pm(null,null,this,a,b,c,d,e,f)}}
P.jZ.prototype={
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jY.prototype={
$0:function(){return this.a.je(this.b)},
$S:3}
P.k_.prototype={
$1:function(a){var u=this.c
return this.a.jf(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jV.prototype={
gV:function(a){var u=this,t=new P.eG(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
U:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icb")!=null}else{t=this.fi(b)
return t}},
fi:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.dc(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d_(u==null?s.b=P.lr():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d_(t==null?s.c=P.lr():t,b)}else return s.f9(0,b)},
f9:function(a,b){var u,t,s,r=this
H.E(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.lr()
t=r.d4(b)
s=u[t]
if(s==null)u[t]=[r.bI(b)]
else{if(r.bL(s,b)>=0)return!1
s.push(r.bI(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hE(this.c,b)
else return this.hD(0,b)},
hD:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dc(r,b)
t=s.bL(u,b)
if(t<0)return!1
s.du(u.splice(t,1)[0])
return!0},
d_:function(a,b){H.E(b,H.q(this,0))
if(H.f(a[b],"$icb")!=null)return!1
a[b]=this.bI(b)
return!0},
hE:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icb")
if(u==null)return!1
this.du(u)
delete a[b]
return!0},
d1:function(){this.r=1073741823&this.r+1},
bI:function(a){var u,t=this,s=new P.cb(H.E(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d1()
return s},
du:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d1()},
d4:function(a){return J.du(a)&1073741823},
dc:function(a,b){return a[this.d4(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Q(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eG.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bj(t))
else{t=u.c
if(t==null){u.sd0(null)
return!1}else{u.sd0(H.E(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sd0:function(a){this.d=H.E(a,H.q(this,0))},
$ib4:1}
P.hp.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:5}
P.hq.prototype={$ik:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cF(a,this.gn(a),[H.cl(this,a,"y",0)])},
J:function(a,b){return this.j(a,b)},
jk:function(a,b){var u,t=this,s=H.e([],[H.cl(t,a,"y",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
jj:function(a){return this.jk(a,!0)},
iB:function(a,b,c,d){var u
H.E(d,H.cl(this,a,"y",0))
P.bL(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lc(a,"[","]")}}
P.hs.prototype={}
P.ht.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:5}
P.af.prototype={
H:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.cl(s,a,"af",0),H.cl(s,a,"af",1)]})
for(u=J.bv(s.ga3(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aD(this.ga3(a))},
i:function(a){return P.li(a)},
$iz:1}
P.kf.prototype={
k:function(a,b,c){H.E(b,H.q(this,0))
H.E(c,H.q(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hu.prototype={
j:function(a,b){return J.dt(this.a,b)},
k:function(a,b,c){J.l2(this.a,H.E(b,H.q(this,0)),H.E(c,H.q(this,1)))},
H:function(a,b){J.lP(this.a,H.o(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){return J.aD(this.a)},
i:function(a){return J.as(this.a)},
$iz:1}
P.ek.prototype={}
P.k1.prototype={
aw:function(a,b){var u
for(u=J.bv(H.m(b,"$ik",this.$ti,"$ak"));u.A();)this.h(0,u.gK(u))},
i:function(a){return P.lc(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.me(b,"index")
for(u=P.oG(r,r.r,H.q(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,r,"index",null,t))},
$ik:1,
$imh:1}
P.eH.prototype={}
P.fa.prototype={}
P.fz.prototype={
iQ:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bL(a0,a1,b.length)
u=$.nr()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.D(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kH(C.b.D(b,n))
j=H.kH(C.b.D(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.a6("")
g=r.a+=C.b.t(b,s,t)
r.a=g+H.c2(m)
s=n
continue}}throw H.c(P.a4("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.t(b,s,a1)
f=g.length
if(q>=0)P.lT(b,p,a1,q,o,f)
else{e=C.e.bg(f-1,4)+1
if(e===1)throw H.c(P.a4(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aX(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lT(b,p,a1,q,o,d)
else{e=C.e.bg(d,4)
if(e===1)throw H.c(P.a4(c,b,a1))
if(e>1)b=C.b.aX(b,a1,a1,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.l],P.h]}}
P.fA.prototype={
$abz:function(){return[[P.b,P.l],P.h]}}
P.bV.prototype={}
P.bz.prototype={}
P.fY.prototype={
$abV:function(){return[P.h,[P.b,P.l]]}}
P.hd.prototype={
i:function(a){return this.a}}
P.hc.prototype={
fj:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.a6("")
if(r>b)q.a+=C.b.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nC(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abz:function(){return[P.h,P.h]}}
P.jf.prototype={
giA:function(){return C.N}}
P.jh.prototype={
cf:function(a){var u,t,s=P.bL(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kl(u)
if(t.fw(a,0,s)!==s)t.dw(J.ny(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oX(0,t.b,u.length)))},
$abz:function(){return[P.h,[P.b,P.l]]}}
P.kl.prototype={
dw:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
fw:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.D(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dw(r,C.b.D(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.jg.prototype={
cf:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[P.l],"$ab")
u=P.ot(!1,a,0,null)
if(u!=null)return u
t=P.bL(0,null,J.aD(a))
s=P.mN(a,0,t)
if(s>0){r=P.cY(a,0,s)
if(s===t)return r
q=new P.a6(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.a6("")
n=new P.kk(!1,q)
n.c=o
n.iq(a,p,t)
if(n.e>0){H.A(P.a4("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c2(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abz:function(){return[[P.b,P.l],P.h]}}
P.kk.prototype={
iq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.m(a,"$ib",[P.l],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.dp(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.al()
if((o&192)!==128){n=P.a4(h+C.e.bf(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.w,n)
if(u<=C.w[n]){n=P.a4("Overlong encoding of 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a4("Character outside valid Unicode range: 0x"+C.e.bf(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c2(u)
i.c=!1}for(n=p<c;n;){m=P.mN(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cY(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a4("Negative UTF-8 code unit: -0x"+C.e.bf(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a4(h+C.e.bf(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.ay.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.nL(H.oc(u)),s=P.dE(H.oa(u)),r=P.dE(H.o6(u)),q=P.dE(H.o7(u)),p=P.dE(H.o9(u)),o=P.dE(H.ob(u)),n=P.nM(H.o8(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.bA.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bA&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r=new P.fV(),q=this.a
if(q<0)return"-"+new P.bA(0-q).i(0)
u=r.$1(C.e.a9(q,6e7)%60)
t=r.$1(C.e.a9(q,1e6)%60)
s=new P.fU().$1(q%1e6)
return""+C.e.a9(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.fU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bB.prototype={}
P.ft.prototype={
i:function(a){return"Assertion failed"}}
P.e0.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbK()+o+u
if(!q.a)return t
s=q.gbJ()
r=P.dJ(q.b)
return t+s+": "+r}}
P.c3.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.he.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gn:function(a){return this.f}}
P.j8.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fG.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dJ(u)+"."}}
P.i3.prototype={
i:function(a){return"Out of Memory"},
$ibB:1}
P.ea.prototype={
i:function(a){return"Stack Overflow"},
$ibB:1}
P.fO.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ez.prototype={
i:function(a){return"Exception: "+this.a}}
P.h7.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.D(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Y(f,q)
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
k=""}j=C.b.t(f,m,n)
return h+l+j+k+"\n"+C.b.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.i(g)+")"):h}}
P.bC.prototype={}
P.l.prototype={}
P.k.prototype={
bA:function(a,b){var u=H.ar(this,"k",0)
return new H.d7(this,H.o(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
gaJ:function(a){var u,t=this.gV(this)
if(!t.A())throw H.c(H.hf())
u=t.gK(t)
if(t.A())throw H.c(H.nS())
return u},
J:function(a,b){var u,t,s
P.me(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nR(this,"(",")")}}
P.b4.prototype={}
P.b.prototype={$ik:1}
P.z.prototype={}
P.P.prototype={
gI:function(a){return P.V.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
q:function(a,b){return this===b},
gI:function(a){return H.cR(this)},
i:function(a){return"Instance of '"+H.i(H.cS(this))+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.h.prototype={$im9:1}
P.a6.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq5:1}
P.jd.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.m(a,"$iz",[r,r],"$az")
H.O(b)
u=J.dq(b).e7(b,"=")
if(u===-1){if(b!=="")J.l2(a,P.lv(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.t(b,0,u)
s=C.b.ab(b,u+1)
r=this.a
J.l2(a,P.lv(t,0,t.length,r,!0),P.lv(s,0,s.length,r,!0))}return a},
$S:45}
P.ja.prototype={
$2:function(a,b){throw H.c(P.a4("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jb.prototype={
$2:function(a,b){throw H.c(P.a4("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jc.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fp(C.b.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.cc.prototype={
geE:function(){return this.b},
gcr:function(a){var u=this.c
if(u==null)return""
if(C.b.a2(u,"["))return C.b.t(u,1,u.length-1)
return u},
gbu:function(a){var u=this.d
if(u==null)return P.mD(this.a)
return u},
gcC:function(a){var u=this.f
return u==null?"":u},
ge1:function(){var u=this.r
return u==null?"":u},
er:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.m(b,"$iz",[P.h,null],"$az")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a2(p,"/"))p="/"+p
n=P.lt(null,0,0,b)
return new P.cc(u,s,q,r,p,n,m.r)},
gcD:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shC(new P.ek(P.mr(u==null?"":u),[t,t]))}return s.Q},
ge2:function(){return this.c!=null},
ge5:function(){return this.f!=null},
ge3:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$iln)if(s.a==b.gbB())if(s.c!=null===b.ge2())if(s.b==b.geE())if(s.gcr(s)==b.gcr(b))if(s.gbu(s)==b.gbu(b))if(s.e===b.gel(b)){u=s.f
t=u==null
if(!t===b.ge5()){if(t)u=""
if(u===b.gcC(b)){u=s.r
t=u==null
if(!t===b.ge3()){if(t)u=""
u=u===b.ge1()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shC:function(a){var u=P.h
this.Q=H.m(a,"$iz",[u,u],"$az")},
$iln:1,
gbB:function(){return this.a},
gel:function(a){return this.e}}
P.kg.prototype={
$1:function(a){throw H.c(P.a4("Invalid port",this.a,this.b+1))},
$S:41}
P.kh.prototype={
$1:function(a){return P.fb(C.X,a,C.h,!1)},
$S:23}
P.kj.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.fb(C.i,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.fb(C.i,b,C.h,!0))}},
$S:24}
P.ki.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.bv(H.n1(b,"$ik")),t=this.a;u.A();)t.$2(a,H.O(u.gK(u)))},
$S:40}
P.j9.prototype={
geD:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.br(u,"?",o)
s=u.length
if(t>=0){r=P.dk(u,t+1,s,C.m,!1)
s=t}else r=p
return q.c=new P.jE("data",p,p,p,P.dk(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kr.prototype={
$1:function(a){return new Uint8Array(96)},
$S:48}
P.kq.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.nz(u,0,96,b)
return u},
$S:39}
P.ks.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.D(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.kt.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.D(b,0),t=C.b.D(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.k4.prototype={
ge2:function(){return this.c>0},
ge4:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.D(t)
t=u+1<t
u=t}else u=!1
return u},
ge5:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
ge3:function(){return this.r<this.a.length},
gde:function(){return this.b===4&&C.b.a2(this.a,"http")},
gdf:function(){return this.b===5&&C.b.a2(this.a,"https")},
gbB:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gde())q=t.x="http"
else if(t.gdf()){t.x="https"
q="https"}else if(q===4&&C.b.a2(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a2(t.a,r)){t.x=r
q=r}else{q=C.b.t(t.a,0,q)
t.x=q}return q},
geE:function(){var u=this.c,t=this.b+3
return u>t?C.b.t(this.a,t,u-1):""},
gcr:function(a){var u=this.c
return u>0?C.b.t(this.a,u,this.d):""},
gbu:function(a){var u,t=this
if(t.ge4()){u=t.d
if(typeof u!=="number")return u.B()
return P.fp(C.b.t(t.a,u+1,t.e),null,null)}if(t.gde())return 80
if(t.gdf())return 443
return 0},
gel:function(a){return C.b.t(this.a,this.e,this.f)},
gcC:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.t(this.a,u+1,t):""},
ge1:function(){var u=this.r,t=this.a
return u<t.length?C.b.ab(t,u+1):""},
gcD:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.ek(P.mr(u.gcC(u)),[t,t])},
er:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.m(b,"$iz",[P.h,null],"$az")
u=k.gbB()
t=u==="file"
s=k.c
r=s>0?C.b.t(k.a,k.b+3,s):""
q=k.ge4()?k.gbu(k):j
s=k.c
if(s>0)p=C.b.t(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.t(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a2(o,"/"))o="/"+o
m=P.lt(j,0,0,b)
n=k.r
l=n<s.length?C.b.ab(s,n+1):j
return new P.cc(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$iln&&this.a===b.i(0)},
i:function(a){return this.a},
$iln:1}
P.jE.prototype={}
W.x.prototype={}
W.fr.prototype={
gn:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bT.prototype={$ibT:1}
W.bw.prototype={$ibw:1}
W.bU.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.pu(c))
return a.getContext(b)},
eH:function(a,b){return this.cK(a,b,null)},
$ibU:1}
W.ct.prototype={$ict:1}
W.bx.prototype={
gn:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.fK.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cw.prototype={
gn:function(a){return a.length}}
W.fL.prototype={}
W.b2.prototype={}
W.b3.prototype={}
W.fM.prototype={
gn:function(a){return a.length}}
W.fN.prototype={
gn:function(a){return a.length}}
W.fQ.prototype={
gn:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fR.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.m(c,"$iam",[P.aa],"$aam")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.am,P.aa]]},
$ay:function(){return[[P.am,P.aa]]},
$ik:1,
$ak:function(){return[[P.am,P.aa]]},
$ib:1,
$ab:function(){return[[P.am,P.aa]]},
$aH:function(){return[[P.am,P.aa]]}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gaI(a))+" x "+H.i(this.gaF(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&this.gaI(a)===u.gaI(b)&&this.gaF(a)===u.gaF(b)},
gI:function(a){return W.mB(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaI(a)),C.d.gI(this.gaF(a)))},
gdF:function(a){return a.bottom},
gaF:function(a){return a.height},
gbt:function(a){return a.left},
gbw:function(a){return a.right},
gbx:function(a){return a.top},
gaI:function(a){return a.width},
$iam:1,
$aam:function(){return[P.aa]}}
W.fS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.O(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$ay:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
W.fT.prototype={
gn:function(a){return a.length}}
W.jC.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$iU")},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jj(this)
return new J.at(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gij:function(a){return new W.jF(a)},
gce:function(a){return new W.jC(a,a.children)},
gdG:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lZ
if(u==null){u=H.e([],[W.aB])
t=new W.e_(u)
C.a.h(u,W.mA(null))
C.a.h(u,W.mC())
$.lZ=t
d=t}else d=u
u=$.lY
if(u==null){u=new W.fc(d)
$.lY=u
c=u}else{u.a=d
c=u}}if($.bk==null){u=document
t=u.implementation.createHTMLDocument("")
$.bk=t
$.l9=t.createRange()
t=$.bk.createElement("base")
H.f(t,"$icq")
t.href=u.baseURI
$.bk.head.appendChild(t)}u=$.bk
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibw")}u=$.bk
if(!!this.$ibw)s=u.body
else{s=u.createElement(a.tagName)
$.bk.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.U(C.V,a.tagName)){$.l9.selectNodeContents(s)
r=$.l9.createContextualFragment(b)}else{s.innerHTML=b
r=$.bk.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bk.body
if(s==null?u!=null:s!==u)J.lR(s)
c.cL(r)
document.adoptNode(r)
return r},
it:function(a,b,c){return this.ag(a,b,c,null)},
eJ:function(a,b){a.textContent=null
a.appendChild(this.ag(a,b,null,null))},
$iU:1,
gew:function(a){return a.tagName}}
W.fX.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:27}
W.n.prototype={$in:1}
W.j.prototype={
ia:function(a,b,c,d){H.o(c,{func:1,args:[W.n]})
if(c!=null)this.fa(a,b,c,!1)},
fa:function(a,b,c,d){return a.addEventListener(b,H.ch(H.o(c,{func:1,args:[W.n]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cz.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ik:1,
$ak:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icz:1,
$aH:function(){return[W.aF]}}
W.h2.prototype={
gn:function(a){return a.length}}
W.h6.prototype={
gn:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.hb.prototype={
gn:function(a){return a.length}}
W.bY.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibY:1,
$aH:function(){return[W.G]}}
W.bl.prototype={$ibl:1,
gdH:function(a){return a.data}}
W.cC.prototype={$icC:1}
W.cD.prototype={$icD:1}
W.b6.prototype={$ib6:1}
W.dS.prototype={
i:function(a){return String(a)},
$idS:1}
W.hM.prototype={
gn:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.hN.prototype={
j:function(a,b){return P.bp(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga3:function(a){var u=H.e([],[P.h])
this.H(a,new W.hO(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hP.prototype={
j:function(a,b){return P.bp(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga3:function(a){var u=H.e([],[P.h])
this.H(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aQ.prototype={$iaQ:1}
W.hR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ik:1,
$ak:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aH:function(){return[W.aQ]}}
W.ag.prototype={$iag:1}
W.aq.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mi("No elements"))
if(t>1)throw H.c(P.mi("More than one element"))
return u.firstChild},
aw:function(a,b){var u,t,s,r
H.m(b,"$ik",[W.G],"$ak")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
k:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dK(u,u.length,[H.cl(C.Z,u,"H",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ay:function(){return[W.G]},
$ak:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
j7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jb:function(a,b){var u,t
try{u=a.parentNode
J.nw(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eM(a):u},
ih:function(a,b){return a.appendChild(H.f(b,"$iG"))},
hH:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.aR.prototype={$iaR:1,
gn:function(a){return a.length}}
W.i6.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aR]},
$ay:function(){return[W.aR]},
$ik:1,
$ak:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aH:function(){return[W.aR]}}
W.ih.prototype={
j:function(a,b){return P.bp(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga3:function(a){var u=H.e([],[P.h])
this.H(a,new W.ii(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
W.ii.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.ik.prototype={
gn:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.iv.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ik:1,
$ak:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aH:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.iw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ik:1,
$ak:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aH:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gn:function(a){return a.length}}
W.iz.prototype={
j:function(a,b){return a.getItem(H.O(b))},
k:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.e([],[P.h])
this.H(a,new W.iA(u))
return u},
gn:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iz:1,
$az:function(){return[P.h,P.h]}}
W.iA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aG.prototype={$iaG:1}
W.bb.prototype={$ibb:1}
W.eb.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=W.nN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aq(t).aw(0,new W.aq(u))
return t}}
W.iG.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaJ(u)
s.toString
u=new W.aq(s)
r=u.gaJ(u)
t.toString
r.toString
new W.aq(t).aw(0,new W.aq(r))
return t}}
W.iH.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.aq(u)
s=u.gaJ(u)
t.toString
s.toString
new W.aq(t).aw(0,new W.aq(s))
return t}}
W.cZ.prototype={$icZ:1}
W.aX.prototype={$iaX:1}
W.aH.prototype={$iaH:1}
W.iJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ik:1,
$ak:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aH:function(){return[W.aH]}}
W.iK.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ik:1,
$ak:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aH:function(){return[W.aX]}}
W.iO.prototype={
gn:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.iS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$ik:1,
$ak:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aH:function(){return[W.aY]}}
W.iT.prototype={
gn:function(a){return a.length}}
W.bN.prototype={}
W.je.prototype={
i:function(a){return String(a)}}
W.jt.prototype={
gn:function(a){return a.length}}
W.bf.prototype={
giw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
giv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibf:1}
W.d8.prototype={
hI:function(a,b){return a.requestAnimationFrame(H.ch(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
fp:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d9.prototype={$id9:1}
W.jD.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iW")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.W]},
$ay:function(){return[W.W]},
$ik:1,
$ak:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aH:function(){return[W.W]}}
W.eu.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iam)return!1
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&a.width===u.gaI(b)&&a.height===u.gaF(b)},
gI:function(a){return W.mB(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gaF:function(a){return a.height},
gaI:function(a){return a.width}}
W.jS.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ik:1,
$ak:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aH:function(){return[W.aP]}}
W.eM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.G]},
$ay:function(){return[W.G]},
$ik:1,
$ak:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aH:function(){return[W.G]}}
W.k5.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ik:1,
$ak:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aH:function(){return[W.aV]}}
W.k9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ik:1,
$ak:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aH:function(){return[W.aG]}}
W.jB.prototype={
H:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.e([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.f(r[t],"$id9")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.h,P.h]},
$az:function(){return[P.h,P.h]}}
W.jF.prototype={
j:function(a,b){return this.a.getAttribute(H.O(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga3(this).length}}
W.jG.prototype={}
W.lq.prototype={}
W.jH.prototype={}
W.jI.prototype={
$1:function(a){return this.a.$1(H.f(a,"$in"))},
$S:37}
W.bO.prototype={
eY:function(a){var u
if($.db.giL($.db)){for(u=0;u<262;++u)$.db.k(0,C.U[u],W.pE())
for(u=0;u<12;++u)$.db.k(0,C.q[u],W.pF())}},
aS:function(a){return $.ns().U(0,W.cx(a))},
ax:function(a,b,c){var u=$.db.j(0,H.i(W.cx(a))+"::"+b)
if(u==null)u=$.db.j(0,"*::"+b)
if(u==null)return!1
return H.lA(u.$4(a,b,c,this))},
$iaB:1}
W.H.prototype={
gV:function(a){return new W.dK(a,this.gn(a),[H.cl(this,a,"H",0)])}}
W.e_.prototype={
aS:function(a){return C.a.dC(this.a,new W.hZ(a))},
ax:function(a,b,c){return C.a.dC(this.a,new W.hY(a,b,c))},
$iaB:1}
W.hZ.prototype={
$1:function(a){return H.f(a,"$iaB").aS(this.a)},
$S:29}
W.hY.prototype={
$1:function(a){return H.f(a,"$iaB").ax(this.a,this.b,this.c)},
$S:29}
W.eU.prototype={
f5:function(a,b,c,d){var u,t,s
this.a.aw(0,c)
u=b.bA(0,new W.k2())
t=b.bA(0,new W.k3())
this.b.aw(0,u)
s=this.c
s.aw(0,C.x)
s.aw(0,t)},
aS:function(a){return this.a.U(0,W.cx(a))},
ax:function(a,b,c){var u=this,t=W.cx(a),s=u.c
if(s.U(0,H.i(t)+"::"+b))return u.d.ig(c)
else if(s.U(0,"*::"+b))return u.d.ig(c)
else{s=u.b
if(s.U(0,H.i(t)+"::"+b))return!0
else if(s.U(0,"*::"+b))return!0
else if(s.U(0,H.i(t)+"::*"))return!0
else if(s.U(0,"*::*"))return!0}return!1},
$iaB:1}
W.k2.prototype={
$1:function(a){return!C.a.U(C.q,H.O(a))},
$S:30}
W.k3.prototype={
$1:function(a){return C.a.U(C.q,H.O(a))},
$S:30}
W.kb.prototype={
ax:function(a,b,c){if(this.eQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.U(0,b)
return!1}}
W.kc.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.O(a))},
$S:23}
W.ka.prototype={
aS:function(a){var u=J.T(a)
if(!!u.$icT)return!1
u=!!u.$ip
if(u&&W.cx(a)==="foreignObject")return!1
if(u)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.b.a2(b,"on"))return!1
return this.aS(a)},
$iaB:1}
W.dK.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdd(J.dt(u.a,t))
u.c=t
return!0}u.sdd(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdd:function(a){this.d=H.E(a,H.q(this,0))},
$ib4:1}
W.aB.prototype={}
W.k0.prototype={$iqi:1}
W.fc.prototype={
cL:function(a){new W.km(this).$2(a,null)},
b1:function(a,b){if(b==null)J.lR(a)
else b.removeChild(a)},
hN:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nA(a)
n=o.a.getAttribute("is")
H.f(a,"$iU")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.F(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.as(a)}catch(r){H.aj(r)}try{s=W.cx(a)
this.hM(H.f(a,"$iU"),b,p,t,s,H.f(o,"$iz"),H.O(n))}catch(r){if(H.aj(r) instanceof P.aN)throw r
else{this.b1(a,b)
window
q="Removing corrupted element "+H.i(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b1(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aS(a)){o.b1(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ax(a,"is",g)){o.b1(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.e(u.slice(0),[H.q(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.nD(r)
H.O(r)
if(!q.ax(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.i(e)+" "+r+'="'+H.i(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$icZ)o.cL(a.content)},
$iq2:1}
W.km.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hN(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b1(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iG")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iG")}},
$S:35}
W.et.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.f_.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
P.k6.prototype={
e0:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cI:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$iog)throw H.c(P.j6("structured clone of RegExp"))
if(!!u.$iaF)return a
if(!!u.$ibT)return a
if(!!u.$icz)return a
if(!!u.$ibl)return a
if(!!u.$icM||!!u.$ibG||!!u.$icJ)return a
if(!!u.$iz){t=q.e0(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.H(a,new P.k8(p,q))
return p.a}if(!!u.$ib){t=q.e0(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.is(a,t)}throw H.c(P.j6("structured clone of other type"))},
is:function(a,b){var u,t=J.dp(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.cI(t.j(a,u)))
return r}}
P.k8.prototype={
$2:function(a,b){this.a.a[a]=this.b.cI(b)},
$S:5}
P.f9.prototype={$ibl:1,
gdH:function(a){return this.a}}
P.kz.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.k7.prototype={}
P.h3.prototype={
gbl:function(){var u=this.b,t=H.ar(u,"y",0),s=W.U
return new H.hv(new H.d7(u,H.o(new P.h4(),{func:1,ret:P.S,args:[t]}),[t]),H.o(new P.h5(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbl()
J.nB(u.b.$1(J.fq(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aD(this.gbl().a)},
j:function(a,b){var u=this.gbl()
return u.b.$1(J.fq(u.a,b))},
gV:function(a){var u=P.m2(this.gbl(),!1,W.U)
return new J.at(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.U]},
$ak:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h4.prototype={
$1:function(a){return!!J.T(H.f(a,"$iG")).$iU},
$S:27}
P.h5.prototype={
$1:function(a){return H.t(H.f(a,"$iG"),"$iU")},
$S:34}
P.jW.prototype={
gbw:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
gdF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.D(t)
return H.E(u+t,H.q(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iam){t=p.a
if(t==u.gbt(b)){s=p.b
if(s==u.gbx(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.D(r)
q=H.q(p,0)
if(H.E(t+r,q)===u.gbw(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.D(t)
u=H.E(s+t,q)===u.gdF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.du(s),q=t.b,p=J.du(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.D(o)
u=H.q(t,0)
o=C.e.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.D(s)
u=C.e.gI(H.E(q+s,u))
return P.oF(P.jU(P.jU(P.jU(P.jU(0,r),p),o),u))}}
P.am.prototype={
gbt:function(a){return this.a},
gbx:function(a){return this.b},
gaI:function(a){return this.c},
gaF:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.hk.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b7]},
$ik:1,
$ak:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aH:function(){return[P.b7]}}
P.ba.prototype={$iba:1}
P.i1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$iba")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.ba]},
$ik:1,
$ak:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aH:function(){return[P.ba]}}
P.i8.prototype={
gn:function(a){return a.length}}
P.cT.prototype={$icT:1}
P.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.O(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ik:1,
$ak:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aH:function(){return[P.h]}}
P.p.prototype={
gce:function(a){return new P.h3(a,new W.aq(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p=H.e([],[W.aB])
C.a.h(p,W.mA(null))
C.a.h(p,W.mC())
C.a.h(p,new W.ka())
c=new W.fc(new W.e_(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).it(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.aq(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bd.prototype={$ibd:1}
P.iU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibd")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[P.bd]},
$ik:1,
$ak:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aH:function(){return[P.bd]}}
P.eE.prototype={}
P.eF.prototype={}
P.eP.prototype={}
P.eQ.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.f7.prototype={}
P.f8.prototype={}
P.R.prototype={$ik:1,
$ak:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$ioq:1}
P.fv.prototype={
gn:function(a){return a.length}}
P.fw.prototype={
j:function(a,b){return P.bp(a.get(H.O(b)))},
H:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bp(t.value[1]))}},
ga3:function(a){var u=H.e([],[P.h])
this.H(a,new P.fx(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.I("Not supported"))},
$aaf:function(){return[P.h,null]},
$iz:1,
$az:function(){return[P.h,null]}}
P.fx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fy.prototype={
gn:function(a){return a.length}}
P.bS.prototype={}
P.i2.prototype={
gn:function(a){return a.length}}
P.es.prototype={}
P.dy.prototype={$idy:1}
P.e2.prototype={$ie2:1}
P.c4.prototype={
jg:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibl)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pv(g))
return}if(!!t.$icC)t=!0
else t=!1
if(t){this.hZ(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
hZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
by:function(a,b,c){return a.uniform1i(b,c)},
W:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jn:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic4:1}
P.e6.prototype={$ie6:1}
P.ed.prototype={$ied:1}
P.ei.prototype={$iei:1}
P.ix.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.bp(a.item(b))},
k:function(a,b,c){H.f(c,"$iz")
throw H.c(P.I("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.z,,,]]},
$ik:1,
$ak:function(){return[[P.z,,,]]},
$ib:1,
$ab:function(){return[[P.z,,,]]},
$aH:function(){return[[P.z,,,]]}}
P.eX.prototype={}
P.eY.prototype={}
O.a3.prototype={
bE:function(a){var u=this
u.sfD(H.e([],[a]))
u.sdj(null)
u.sdg(null)
u.sdk(null)},
cM:function(a,b,c){var u=this,t=H.ar(u,"a3",0)
H.o(b,{func:1,ret:P.S,args:[[P.k,t]]})
t={func:1,ret:-1,args:[P.l,[P.k,t]]}
H.o(a,t)
H.o(c,t)
u.sdj(b)
u.sdg(a)
u.sdk(c)},
bh:function(a,b){return this.cM(a,null,b)},
hl:function(a){var u
H.m(a,"$ik",[H.ar(this,"a3",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fL:function(a,b){var u
H.m(b,"$ik",[H.ar(this,"a3",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.at(u,u.length,[H.q(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ar(s,"a3",0)
H.E(b,r)
r=[r]
if(H.F(s.hl(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.fL(t,H.e([b],r))}},
sfD:function(a){this.a=H.m(a,"$ib",[H.ar(this,"a3",0)],"$ab")},
sdj:function(a){this.b=H.o(a,{func:1,ret:P.S,args:[[P.k,H.ar(this,"a3",0)]]})},
sdg:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.ar(this,"a3",0)]]})},
sdk:function(a){H.o(a,{func:1,ret:-1,args:[P.l,[P.k,H.ar(this,"a3",0)]]})},
$ik:1}
O.cH.prototype={
gn:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.X():u},
aK:function(){var u=this.b
if(u!=null)u.E(null)},
gaa:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.cI()},
eo:function(a){var u=this.a
if(a==null)C.a.h(u,V.cI())
else C.a.h(u,a)
this.aK()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sbP:function(a){this.a=H.m(a,"$ib",[V.al],"$ab")}}
E.fB.prototype={}
E.ap.prototype={
cZ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.at(u,u.length,[H.q(u,0)]);u.A();){t=u.d
if(t.f==null)t.cZ()}},
sad:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().L(0,s.geg())
u=s.c
if(u!=null)u.gu().h(0,s.geg())
t=new D.J("shape",r,s.c,[F.e7])
t.b=!0
s.ao(t)}},
sbe:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gu().L(0,s.gei())
u=s.f
s.f=a
if(a!=null)a.gu().h(0,s.gei())
s.cZ()
t=new D.J("technique",u,s.f,[O.bM])
t.b=!0
s.ao(t)}},
saV:function(a){var u,t,s=this
if(!J.Q(s.r,a)){u=s.r
if(u!=null)u.gu().L(0,s.gee())
if(a!=null)a.gu().h(0,s.gee())
s.r=a
t=new D.J("mover",u,a,[U.ab])
t.b=!0
s.ao(t)}},
aq:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ar(0,b,s):null
if(!J.Q(q,s.x)){u=s.x
s.x=q
t=new D.J("matrix",u,q,[V.al])
t.b=!0
s.ao(t)}r=s.f
if(r!=null)r.aq(0,b)
for(r=s.y.a,r=new J.at(r,r.length,[H.q(r,0)]);r.A();)r.d.aq(0,b)},
aW:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gaa(s))
else C.a.h(s.a,r.p(0,s.gaa(s)))
s.aK()
a.ep(t.f)
s=a.dy
u=(s&&C.a).gaz(s)
if(u!=null&&t.d!=null)u.ja(a,t)
for(s=t.y.a,s=new J.at(s,s.length,[H.q(s,0)]);s.A();)s.d.aW(a)
a.en()
a.dx.cB()},
ao:function(a){var u=this.z
if(u!=null)u.E(a)},
a_:function(){return this.ao(null)},
eh:function(a){H.f(a,"$iB")
this.e=null
this.ao(a)},
iX:function(){return this.eh(null)},
ej:function(a){this.ao(H.f(a,"$iB"))},
iY:function(){return this.ej(null)},
ef:function(a){this.ao(H.f(a,"$iB"))},
iW:function(){return this.ef(null)},
ed:function(a){this.ao(H.f(a,"$iB"))},
iT:function(){return this.ed(null)},
iS:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ik",[E.ap],"$ak")
for(u=b.length,t=this.gec(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.sam(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sam(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a_()},
iV:function(a,b){var u,t
H.m(b,"$ik",[E.ap],"$ak")
for(u=b.gV(b),t=this.gec();u.A();)u.gK(u).gu().L(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seX:function(a,b){this.y=H.m(b,"$ia3",[E.ap],"$aa3")},
$icL:1}
E.ic.prototype={
eT:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cH()
t=[V.al]
u.sbP(H.e([],t))
u.b=null
u.gu().h(0,new E.id(s))
s.cy=u
u=new O.cH()
u.sbP(H.e([],t))
u.b=null
u.gu().h(0,new E.ie(s))
s.db=u
u=new O.cH()
u.sbP(H.e([],t))
u.b=null
u.gu().h(0,new E.ig(s))
s.dx=u
s.shY(H.e([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.shT(new H.a2([P.h,A.cU]))},
gj6:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gaa(s)
u=t.db
u=t.z=s.p(0,u.gaa(u))
s=u}return s},
ep:function(a){var u=this.dy,t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
en:function(){var u=this.dy
if(u.length>1)u.pop()},
shY:function(a){this.dy=H.m(a,"$ib",[O.bM],"$ab")},
shT:function(a){this.fr=H.m(a,"$iz",[P.h,A.cU],"$az")}}
E.id.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:10}
E.ie.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.ig.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:10}
E.ee.prototype={
cU:function(a){H.f(a,"$iB")
this.es()},
cT:function(){return this.cU(null)},
giG:function(){var u,t=this,s=Date.now(),r=C.e.a9(P.lX(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
dn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.D(r)
u=C.d.cq(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.cq(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ml(C.o,s.gjc())}},
es:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iN(this),{func:1,ret:-1,args:[P.aa]})
C.E.fp(u)
C.E.hI(u,W.mQ(t,P.aa))}},
j9:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lX(r-s.r.a).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aK()
r=s.db
C.a.sn(r.a,0)
r.aK()
r=s.dx
C.a.sn(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aW(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.cm(q)
P.lJ("Error: "+H.i(u))
P.lJ("Stack: "+H.i(t))
throw H.c(u)}}}
E.iN.prototype={
$1:function(a){var u
H.n3(a)
u=this.a
if(u.ch){u.ch=!1
u.j9()}},
$S:57}
Z.eq.prototype={$ipX:1}
Z.dz.prototype={
c9:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.C('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.ju.prototype={$ipY:1}
Z.dA.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c9:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c9(a)},
jm:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aW:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.as(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfz:function(a){this.b=H.m(a,"$ib",[Z.bD],"$ab")},
$iq6:1}
Z.bD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.i(H.cS(this.c))+"'")+"]"}}
Z.bo.prototype={
gcO:function(a){var u=this.a,t=(u&$.bt().a)!==0?3:0
if((u&$.bs().a)!==0)t+=3
if((u&$.br().a)!==0)t+=3
if((u&$.bR().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.dr().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bq().a)!==0?t+4:t},
ii:function(a){var u,t=$.bt(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ds()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0)if(u===a)return t
return $.nq()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bo))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bt().a)!==0)C.a.h(u,"Pos")
if((t&$.bs().a)!==0)C.a.h(u,"Norm")
if((t&$.br().a)!==0)C.a.h(u,"Binm")
if((t&$.bR().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bu().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dr().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bq().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fE.prototype={}
D.bW.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.o(b,u)
if(this.a==null)this.sam(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.a
t=(u&&C.a).L(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.U(u,b)
if(u===!0){u=s.b
t=(u&&C.a).L(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.B()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.m2(u,!0,{func:1,ret:-1,args:[D.B]}),new D.h_(q))
u=r.b
if(u!=null){r.saP(H.e([],[{func:1,ret:-1,args:[D.B]}]))
C.a.H(u,new D.h0(q))}return!0},
iy:function(){return this.E(null)},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
sam:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saP:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h_.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.h0.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.B.prototype={}
D.bZ.prototype={}
D.c_.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.dB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.dP.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.hj.prototype={
j2:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iZ:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
shB:function(a){this.d=H.m(a,"$imh",[P.l],"$amh")}}
X.dT.prototype={}
X.hr.prototype={
b_:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.ac(o.a+n*m,o.b+u*t)
t=q.a.gaT()
r=new X.bn(a,V.bJ(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cA:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eI()
if(typeof u!=="number")return u.al()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b_(a,b))
return!0},
j3:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaT()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cK(new V.Y(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
ha:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dT(c,r.a.gaT(),b)
s.b=!0
t.E(s)
r.y=new P.ay(u,!1)
r.x=V.bJ()}}
X.aA.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aA))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.F(this.b)?"Alt+":""
return u+(H.F(this.c)?"Shift+":"")}}
X.bn.prototype={}
X.hS.prototype={
bM:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gaT(),r=new X.bn(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bM(a,b,!0))
return!0},
bd:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eI()
if(typeof t!=="number")return t.al()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bM(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bM(a,b,!1))
return!0},
j4:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaT()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cK(new V.Y(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdJ:function(){var u=this.b
return u==null?this.b=D.X():u},
gbz:function(){var u=this.c
return u==null?this.c=D.X():u},
gea:function(){var u=this.d
return u==null?this.d=D.X():u}}
X.cK.prototype={}
X.i7.prototype={}
X.eg.prototype={}
X.iR.prototype={
b_:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ac],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=q.a.gaT()
r=new X.eg(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j1:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.b
if(u==null)return!1
u.E(this.b_(a,!0))
return!0},
j_:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.c
if(u==null)return!1
u.E(this.b_(a,!0))
return!0},
j0:function(a){var u
H.m(a,"$ib",[V.ac],"$ab")
u=this.d
if(u==null)return!1
u.E(this.b_(a,!1))
return!0}}
X.el.prototype={
gaT:function(){var u=this.a,t=C.j.gdG(u).c
t.toString
u=C.j.gdG(u).d
u.toString
return V.mf(0,0,t,u)},
d7:function(a){var u=a.keyCode,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dP(u,new X.aA(t,a.altKey,a.shiftKey))},
aQ:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
c5:function(a){var u=this.b,t=H.F(a.ctrlKey)||H.F(a.metaKey)
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.M()
u=t.top
if(typeof r!=="number")return r.M()
return new V.ac(s-q,r-u)},
b0:function(a){return new V.Y(a.movementX,a.movementY)},
c_:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.d.ap(r.pageX)
C.d.ap(r.pageY)
p=o.left
C.d.ap(r.pageX)
C.a.h(n,new V.ac(q-p,C.d.ap(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.F(a.ctrlKey)||H.F(a.metaKey)
return new X.dB(u,new X.aA(t,a.altKey,a.shiftKey))},
bQ:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.M()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.M()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h4:function(a){this.f=!0},
fT:function(a){this.f=!1},
fZ:function(a){H.f(a,"$iag")
if(H.F(this.f)&&this.bQ(a))a.preventDefault()},
h8:function(a){var u
H.f(a,"$ib6")
if(!H.F(this.f))return
u=this.d7(a)
this.b.j2(u)},
h6:function(a){var u
H.f(a,"$ib6")
if(!H.F(this.f))return
u=this.d7(a)
this.b.iZ(u)},
hc:function(a){var u,t,s,r,q=this
H.f(a,"$iag")
u=q.a
u.focus()
q.f=!0
q.aQ(a)
if(H.F(q.x)){t=q.aB(a)
s=q.b0(a)
if(q.d.cA(t,s))a.preventDefault()
return}if(H.F(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aD(a)
if(q.c.cA(t,r))a.preventDefault()},
hg:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bd(u,s))a.preventDefault()},
h2:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bQ(a)){r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bd(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bd(u,s))a.preventDefault()}},
he:function(a){var u,t,s,r=this
H.f(a,"$iag")
r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bc(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.f(a,"$iag")
if(!r.bQ(a)){r.aQ(a)
u=r.aB(a)
if(H.F(r.x)){t=r.b0(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.F(r.r))return
s=r.aD(a)
if(r.c.bc(u,s))a.preventDefault()}},
hi:function(a){var u,t,s=this
H.f(a,"$ibf")
s.aQ(a)
u=new V.Y((a&&C.D).giv(a),C.D.giw(a)).v(0,180)
if(H.F(s.x)){if(s.d.j3(u))a.preventDefault()
return}if(H.F(s.r))return
t=s.aD(a)
if(s.c.j4(u,t))a.preventDefault()},
hk:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.ha(u,t,r)}},
hx:function(a){var u,t=this
H.f(a,"$iaZ")
t.a.focus()
t.f=!0
t.c5(a)
u=t.c_(a)
if(t.e.j1(u))a.preventDefault()},
ht:function(a){var u
H.f(a,"$iaZ")
this.c5(a)
u=this.c_(a)
if(this.e.j_(u))a.preventDefault()},
hv:function(a){var u
H.f(a,"$iaZ")
this.c5(a)
u=this.c_(a)
if(this.e.j0(u))a.preventDefault()},
sfq:function(a){this.z=H.m(a,"$ib",[[P.cX,P.V]],"$ab")}}
D.dF.prototype={$iae:1,$icL:1}
D.ae.prototype={$icL:1}
D.dQ.prototype={
a6:function(a){var u=this.x
if(u!=null)u.E(a)},
di:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
h9:function(){return this.di(null)},
hn:function(a){var u,t,s
H.m(a,"$ik",[D.ae],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.eZ(s))return!1}return!0},
fN:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gdh(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iae")
if(p instanceof D.bH)C.a.h(this.f,p)
o=p.Q
if(o==null){o=new D.bW()
o.sam(null)
o.saP(null)
o.c=null
o.d=0
p.Q=o}H.o(t,s)
if(o.a==null)o.sam(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bZ([n])
n.b=!0
this.a6(n)},
hr:function(a,b){var u,t,s,r=D.ae
H.m(b,"$ik",[r],"$ak")
for(u=b.gV(b),t=this.gdh();u.A();){s=u.gK(u)
C.a.L(this.e,s)
s.gu().L(0,t)}r=new D.c_([r])
r.b=!0
this.a6(r)},
eZ:function(a){var u=C.a.U(this.f,a)
return u},
sf_:function(a){this.e=H.m(a,"$ib",[D.dF],"$ab")},
shy:function(a){this.f=H.m(a,"$ib",[D.bH],"$ab")},
sf1:function(a){this.r=H.m(a,"$ib",[D.e9],"$ab")},
$ak:function(){return[D.ae]},
$aa3:function(){return[D.ae]}}
D.bH.prototype={
a6:function(a){var u
H.f(a,"$iB")
u=this.Q
if(u!=null)u.E(a)},
f0:function(){return this.a6(null)},
gan:function(){var u=this.d!=null?1:0
return u+4},
$iae:1,
$icL:1}
D.e9.prototype={$iae:1,$icL:1}
V.a7.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.b1.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.fZ.prototype={}
V.dW.prototype={
ak:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dW))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.r],o=V.cj(H.e([q.a,q.d,q.r],p),3,0),n=V.cj(H.e([q.b,q.e,q.x],p),3,0),m=V.cj(H.e([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.al.prototype={
ak:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
e8:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.cI()
u=1/b1
t=-n
s=-a0
return V.b9((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b9(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cH:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
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
i:function(a){return this.P()},
F:function(a){var u,t,s,r,q,p=this,o=[P.r],n=V.cj(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.cj(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.cj(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.cj(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
P:function(){return this.F("")}}
V.ac.prototype={
M:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.a5.prototype={
B:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.bK.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.e4.prototype={
gac:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
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
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.Y.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.D(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.D(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.Y(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.ms
return u==null?$.ms=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.Y(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.L.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.L(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.K().a)return V.d6()
return new V.L(this.a/b,this.b/b,this.c/b)},
e9:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.ca.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ca))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
U.fF.prototype={
bH:function(a){var u=V.l1(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.X():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
scJ:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.J("maximumLocation",s,t.b,[P.r])
s.b=!0
t.G(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.J("minimumLocation",s,t.c,[P.r])
s.b=!0
t.G(s)}},
sZ:function(a,b){var u,t=this
b=t.bH(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.J("location",u,b,[P.r])
u.b=!0
t.G(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.J("maximumVelocity",r,a,[P.r])
r.b=!0
s.G(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.J("velocity",t,a,[P.r])
t.b=!0
u.G(t)}},
sci:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,[P.r])
u.b=!0
this.G(u)}},
aq:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dD.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.X():u},
ar:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.Q(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cB.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.X():u},
G:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.E(a)},
a8:function(){return this.G(null)},
f3:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gaO(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.o(t,s)
if(o.a==null)o.sam(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.G(n)},
hp:function(a,b){var u,t,s=U.ab
H.m(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gaO();u.A();)u.gK(u).gu().L(0,t)
s=new D.c_([s])
s.b=!0
this.G(s)},
ar:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.at(r,r.length,[H.q(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.ar(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.cI():u
r=s.e
if(r!=null)r.aj(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.Q(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.ab]},
$aa3:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.e5.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.X():u},
G:function(a){var u=this.y
if(u!=null)u.E(a)},
seF:function(a){var u
a=V.l1(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.K().a)){this.a=a
u=new D.J("yaw",u,a,[P.r])
u.b=!0
this.G(u)}},
sem:function(a,b){var u
b=V.l1(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.K().a)){this.b=b
u=new D.J("pitch",u,b,[P.r])
u.b=!0
this.G(u)}},
seu:function(a){var u
a=V.l1(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.J("roll",u,a,[P.r])
u.b=!0
this.G(u)}},
ar:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seF(u.a+u.d*b.y)
u.sem(0,u.b+u.e*b.y)
u.seu(u.c+u.f*b.y)
u.x=V.m6(u.c).p(0,V.m5(u.b)).p(0,V.m4(u.a))
t=u.y
if(t!=null)t.aj(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e5))return!1
u=r.a
t=b.a
s=$.K().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+"], ["+V.N(u.d,3,0)+", "+V.N(u.e,3,0)+", "+V.N(u.f,3,0)+"]"}}
U.em.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.X():u},
G:function(a){var u
H.f(a,"$iB")
u=this.cy
if(u!=null)u.E(a)},
a8:function(){return this.G(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdJ().h(0,u.gbR())
u.a.c.gea().h(0,u.gbT())
u.a.c.gbz().h(0,u.gbV())
return!0},
bS:function(a){var u=this
H.f(a,"$iB")
if(!J.Q(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bU:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$iB"),"$ibn")
if(!H.F(n.y))return
if(H.F(n.x)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.x=!1}if(H.F(n.d)){u=a.c
t=a.d.M(0,a.y)
u=new V.Y(t.a,t.b).p(0,2).v(0,u.gac())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.D(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.Y(s.a,s.b).p(0,2).v(0,u.gac())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.D(p)
o=n.z
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.M(0,a.z)
n.Q=new V.Y(t.a,t.b).p(0,2).v(0,u.gac())}n.a8()},
bW:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.y))return
r.y=!1
if(H.F(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.D(s)
u.sX(t*10*s)
r.a8()}},
ar:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.ch=r
u=b.y
t.b.aq(0,u)
t.cx=V.m6(t.b.d)}return t.cx},
$iab:1}
U.en.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.X():u},
G:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.E(a)},
a8:function(){return this.G(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdJ().h(0,s.gbR())
s.a.c.gea().h(0,s.gbT())
s.a.c.gbz().h(0,s.gbV())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gfE())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gfG())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.gi4())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gi2())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.gi0())
return!0},
av:function(a){var u=a.a,t=a.b
if(H.F(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.F(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.Y(u,t)},
bS:function(a){var u=this
a=H.t(H.f(a,"$iB"),"$ibn")
if(!J.Q(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bU:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$iB"),"$ibn")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.av(new V.Y(t.a,t.b).p(0,2).v(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.av(new V.Y(s.a,s.b).p(0,2).v(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).p(0,2).v(0,u.gac()))}n.a8()},
bW:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.a8()}},
fF:function(a){var u=this
if(H.t(H.f(a,"$iB"),"$idT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fH:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$iB"),"$ibn")
if(!J.Q(n.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=n.av(new V.Y(s.a,s.b).p(0,2).v(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).p(0,2).v(0,u.gac()))
n.a8()},
i5:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i3:function(a){var u,t,s,r,q,p,o,n=this
a=H.t(H.f(a,"$iB"),"$ieg")
if(!H.F(n.cx))return
if(H.F(n.ch)){u=a.d.M(0,a.y)
u=new V.Y(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
n.ch=!1}if(H.F(n.e)){u=a.c
t=a.d.M(0,a.y)
u=n.av(new V.Y(t.a,t.b).p(0,2).v(0,u.gac()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.D(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.D(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=n.av(new V.Y(s.a,s.b).p(0,2).v(0,u.gac()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.D(p)
o=n.cy
if(typeof o!=="number")return H.D(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.D(q)
s=n.db
if(typeof s!=="number")return H.D(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.M(0,a.z)
n.dx=n.av(new V.Y(t.a,t.b).p(0,2).v(0,u.gac()))}n.a8()},
i1:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.F(r.cx))return
r.cx=!1
if(H.F(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.D(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.D(u)
s.sX(-t*10*u)
r.a8()}},
ar:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.S()
if(s<r){t.dy=r
u=b.y
t.c.aq(0,u)
t.b.aq(0,u)
t.fr=V.m4(t.b.d).p(0,V.m5(t.c.d))}return t.fr},
$iab:1}
U.eo.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.X():u},
G:function(a){var u=this.r
if(u!=null)u.E(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.X():t
t=r.gfJ()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.X():s).h(0,t)
return!0},
fK:function(a){var u,t,s,r,q=this
H.f(a,"$iB")
if(!J.Q(q.b,q.a.b.c))return
H.t(a,"$icK")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.J("zoom",u,r,[P.r])
u.b=!0
q.G(u)}},
ar:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lj(u,u,u,1)}return t.f},
$iab:1}
M.dI.prototype={
aA:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.E(a)},
f4:function(){return this.aA(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n=E.ap
H.m(b,"$ik",[n],"$ak")
for(u=b.length,t=this.gau(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bW()
o.sam(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sam(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bZ([n])
n.b=!0
this.aA(n)},
fX:function(a,b){var u,t,s=E.ap
H.m(b,"$ik",[s],"$ak")
for(u=b.gV(b),t=this.gau();u.A();)u.gK(u).gu().L(0,t)
s=new D.c_([s])
s.b=!0
this.aA(s)},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().L(0,t.gau())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.gau())
s=new D.J("technique",u,t.d,[O.bM])
s.b=!0
t.aA(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.X():u},
aW:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.ep(a1.d)
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
if(typeof s!=="number")return H.D(s)
o=C.d.ap(p*s)
p=q.b
if(typeof r!=="number")return H.D(r)
n=C.d.ap(p*r)
p=C.d.ap(q.c*s)
a2.c=p
q=C.d.ap(q.d*r)
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
i=V.b9(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eo(i)
t=$.ma
if(t==null){t=V.o3()
q=$.mv
if(q==null)q=$.mv=new V.L(0,1,0)
p=$.mt
if(p==null)p=$.mt=new V.L(0,0,-1)
h=p.v(0,Math.sqrt(p.C(p)))
q=q.aE(h)
g=q.v(0,Math.sqrt(q.C(q)))
f=h.aE(g)
e=new V.L(t.a,t.b,t.c)
d=g.T(0).C(e)
c=f.T(0).C(e)
b=h.T(0).C(e)
t=V.b9(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ma=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.ar(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.eo(a)
u=a1.d
if(u!=null)u.aq(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.q(u,0)]);u.A();)u.d.aq(0,a2)
for(u=a1.e.a,u=new J.at(u,u.length,[H.q(u,0)]);u.A();)u.d.aW(a2)
a1.b.toString
a2.cy.cB()
a2.db.cB()
a1.c.toString
a2.en()},
sfh:function(a,b){this.e=H.m(b,"$ia3",[E.ap],"$aa3")},
$iq3:1}
A.dx.prototype={}
A.fu.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ix:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ak.prototype={
gas:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ak))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.hy.prototype={
eS:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.a6("")
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
A.pd(c3,u)
A.pf(c3,u)
A.pe(c3,u)
A.ph(c3,u)
A.pi(c3,u)
A.pg(c3,u)
A.pj(c3,u)
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
m=A.pc(b8.z)
b8.c=n
b8.d=m
b8.e=b8.d8(n,35633)
b8.f=b8.d8(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.F(H.lA(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.C("Failed to link shader: "+H.i(l)))}b8.hQ()
b8.hS()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.t(b8.y.N(0,"invViewMat"),"$iaC")
if(t)b8.dy=H.t(b8.y.N(0,"objMat"),"$iaC")
if(r)b8.fr=H.t(b8.y.N(0,"viewObjMat"),"$iaC")
b8.fy=H.t(b8.y.N(0,"projViewObjMat"),"$iaC")
if(c3.ry)b8.k1=H.t(b8.y.N(0,"txt2DMat"),"$id4")
if(c3.x1)b8.k2=H.t(b8.y.N(0,"txtCubeMat"),"$iaC")
if(c3.x2)b8.k3=H.t(b8.y.N(0,"colorMat"),"$iaC")
b8.sfd(H.e([],[A.aC]))
t=c3.y2
if(t>0){b8.k4=H.f(b8.y.N(0,"bendMatCount"),"$iaI")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.C(c0+q+c1));(s&&C.a).h(s,H.t(j,"$iaC"))}}t=c3.a
if(t.a)b8.r2=H.t(b8.y.N(0,"emissionClr"),"$ia0")
if(t.c)b8.ry=H.t(b8.y.N(0,"emissionTxt"),"$ian")
t=c3.b
if(t.a)b8.x1=H.t(b8.y.N(0,"ambientClr"),"$ia0")
if(t.c)b8.y1=H.t(b8.y.N(0,"ambientTxt"),"$ian")
t=c3.c
if(t.a)b8.y2=H.t(b8.y.N(0,"diffuseClr"),"$ia0")
if(t.c)b8.bq=H.t(b8.y.N(0,"diffuseTxt"),"$ian")
t=c3.d
if(t.a)b8.dN=H.t(b8.y.N(0,"invDiffuseClr"),"$ia0")
if(t.c)b8.dO=H.t(b8.y.N(0,"invDiffuseTxt"),"$ian")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dR=H.t(b8.y.N(0,"shininess"),"$iai")
if(s)b8.dP=H.t(b8.y.N(0,"specularClr"),"$ia0")
if(t.c)b8.dQ=H.t(b8.y.N(0,"specularTxt"),"$ian")}if(c3.f.c)b8.dS=H.t(b8.y.N(0,"bumpTxt"),"$ian")
if(c3.cy){b8.dT=H.t(b8.y.N(0,"envSampler"),"$ian")
t=c3.r
if(t.a)b8.dU=H.t(b8.y.N(0,"reflectClr"),"$ia0")
if(t.c)b8.dV=H.t(b8.y.N(0,"reflectTxt"),"$ian")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dW=H.t(b8.y.N(0,"refraction"),"$iai")
if(s)b8.dX=H.t(b8.y.N(0,"refractClr"),"$ia0")
if(t.c)b8.dY=H.t(b8.y.N(0,"refractTxt"),"$ian")}}t=c3.y
if(t.a)b8.dZ=H.t(b8.y.N(0,"alpha"),"$iai")
if(t.c)b8.e_=H.t(b8.y.N(0,"alphaTxt"),"$ian")
t=P.l
s=[t,A.aI]
b8.sfn(new H.a2(s))
b8.sfo(new H.a2([t,[P.b,A.c5]]))
b8.shz(new H.a2(s))
b8.shA(new H.a2([t,[P.b,A.c6]]))
b8.shV(new H.a2(s))
b8.shW(new H.a2([t,[P.b,A.c8]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c5],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.al()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.C(c0+d+c1))
H.t(j,"$ia0")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.C(c0+d+c1))
H.t(c,"$ia0")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.C(c0+d+c1))
H.t(b,"$ia0")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.C(c0+d+c1))
H.t(j,"$ia0")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.C(c0+d+c1))
H.t(c,"$ia0")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.t(b,"$ic7")
a2=b}else a2=b9
C.a.h(e,new A.c5(a1,a0,a,j,c,a2))}b8.ck.k(0,g,e)
q=b8.cj
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaI"))}for(t=c3.Q,s=t.length,r=[A.c6],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
H.t(j,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.C(c0+o+c1))
H.t(c,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.t(b,"$ia0")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.t(a3,"$id4")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.t(a3,"$ian")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.t(a3,"$ian")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.t(a5,"$id3")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.t(a3,"$iai")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.t(a5,"$iai")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.C(c0+o+c1))
H.t(a8,"$iai")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c6(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.cm.k(0,g,e)
q=b8.cl
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaI"))}for(t=c3.ch,s=t.length,r=[A.c8],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.i(g)
e=H.e([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
H.t(j,"$ia0")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.C(c0+o+c1))
H.t(c,"$ia0")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.C(c0+o+c1))
H.t(b,"$ia0")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.C(c0+o+c1))
H.t(a3,"$ia0")
if(typeof g!=="number")return g.al()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.t(a5,"$ia0")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.C(c0+o+c1))
H.t(a8,"$ia0")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.C(c0+o+c1))
H.t(b2,"$iai")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.C(c0+o+c1))
H.t(b3,"$iai")
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
if(a5==null)H.A(P.C(c0+d+c1))
H.t(a5,"$id3")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.t(a5,"$iai")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.C(c0+d+c1))
H.t(a8,"$iai")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.t(a5,"$iai")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.C(c0+d+c1))
H.t(a8,"$iai")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.C(c0+d+c1))
H.t(b2,"$iai")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.C(c0+d+c1))
H.t(a5,"$ic7")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.C(c0+o+c1))
H.t(a5,"$ic7")
a6=a5}else a6=b9
C.a.h(e,new A.c8(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.co.k(0,g,e)
q=b8.cn
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.C(c0+o+c1))
q.k(0,g,H.f(j,"$iaI"))}}},
af:function(a,b){if(b!=null&&b.d>=6)a.eK(b)},
sfd:function(a){this.r1=H.m(a,"$ib",[A.aC],"$ab")},
sfn:function(a){this.cj=H.m(a,"$iz",[P.l,A.aI],"$az")},
sfo:function(a){this.ck=H.m(a,"$iz",[P.l,[P.b,A.c5]],"$az")},
shz:function(a){this.cl=H.m(a,"$iz",[P.l,A.aI],"$az")},
shA:function(a){this.cm=H.m(a,"$iz",[P.l,[P.b,A.c6]],"$az")},
shV:function(a){this.cn=H.m(a,"$iz",[P.l,A.aI],"$az")},
shW:function(a){this.co=H.m(a,"$iz",[P.l,[P.b,A.c8]],"$az")}}
A.aO.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.aS.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aW.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.hB.prototype={
i:function(a){return this.b7}}
A.c5.prototype={}
A.c6.prototype={}
A.c8.prototype={}
A.cU.prototype={
eV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
d8:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.F(H.lA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.C("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
hQ:function(){var u,t,s,r=this,q=H.e([],[A.dx]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dx(p,t.name,s))}r.x=new A.fu(q)},
hS:function(){var u,t,s,r=this,q=H.e([],[A.eh]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.D(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iu(t.type,t.size,t.name,s))}r.y=new A.j3(q)},
aM:function(a,b,c){var u=this.a
if(a===1)return new A.aI(u,b,c)
else return A.lm(u,this.r,b,a,c)},
fk:function(a,b,c){var u=this.a
if(a===1)return new A.c7(u,b,c)
else return A.lm(u,this.r,b,a,c)},
fl:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.lm(u,this.r,b,a,c)},
bn:function(a,b){return new P.ez(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
iu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aM(b,c,d)
case 5121:return u.aM(b,c,d)
case 5122:return u.aM(b,c,d)
case 5123:return u.aM(b,c,d)
case 5124:return u.aM(b,c,d)
case 5125:return u.aM(b,c,d)
case 5126:return new A.ai(u.a,c,d)
case 35664:return new A.j_(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.d3(u.a,c,d)
case 35667:return new A.j0(u.a,c,d)
case 35668:return new A.j1(u.a,c,d)
case 35669:return new A.j2(u.a,c,d)
case 35674:return new A.j4(u.a,c,d)
case 35675:return new A.d4(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fk(b,c,d)
case 35680:return u.fl(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.eh.prototype={}
A.j3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.C("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aI.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
si7:function(a){H.m(a,"$ib",[P.l],"$ab")}}
A.ai.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.a0.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.d3.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.d4.prototype={
at:function(a){var u=new Float32Array(H.ce(H.m(a,"$ib",[P.r],"$ab")))
C.c.eB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.aC.prototype={
at:function(a){var u=new Float32Array(H.ce(H.m(a,"$ib",[P.r],"$ab")))
C.c.eC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.c7.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.an.prototype={
eK:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ko.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cu(s.b,b).cu(s.d.cu(s.c,b),c)
a.sZ(0,new V.a5(r.a,r.b,r.c))
a.sex(r.v(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdD(new V.bK(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:7}
F.kA.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:21}
F.kC.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.D(p)
s=-s*p
u=r*p
a.sZ(0,new V.a5(s,u,q))
u=new V.L(s,u,q)
a.sex(u.v(0,Math.sqrt(u.C(u))))
a.sdD(new V.bK(1-c,2+c,-1,-1))},
$S:7}
F.kD.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:20}
F.kE.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:20}
F.kX.prototype={
$2:function(a,b){return 0},
$S:21}
F.kY.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.D(s)
u=a.f
t=new V.L(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.C(t))).p(0,this.b+s)
a.sZ(0,new V.a5(s.a,s.b,s.c))},
$S:7}
F.l_.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:17}
F.kM.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.kB.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lO(n.$1(o),m)
m=J.lO(n.$1(o+3.141592653589793/p.c),m).M(0,l)
m=new V.L(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.C(m)))
n=$.mu
if(n==null){n=new V.L(1,0,0)
$.mu=n
t=n}else t=n
if(!J.Q(u,t)){n=$.mw
if(n==null){n=new V.L(0,0,1)
$.mw=n
t=n}else t=n}n=u.aE(t)
s=n.v(0,Math.sqrt(n.C(n)))
n=s.aE(u)
t=n.v(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sZ(0,l.B(0,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:7}
F.a8.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.L(u.a.a.d.b,u)
u.a.a.a_()}u.c1()
u.c2()
u.hF()},
c6:function(a){this.a=a
C.a.h(a.d.b,this)},
c7:function(a){this.b=a
C.a.h(a.d.c,this)},
hP:function(a){this.c=a
C.a.h(a.d.d,this)},
c1:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
c2:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hF:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
fc:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d6()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.v(0,Math.sqrt(s.C(s)))},
fg:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.M(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.C(r)))
r=t.M(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.aE(r.v(0,Math.sqrt(r.C(r))))
return r.v(0,Math.sqrt(r.C(r)))},
cd:function(){var u,t=this
if(t.d!=null)return!0
u=t.fc()
if(u==null){u=t.fg()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
fb:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d6()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.v(0,Math.sqrt(s.C(s)))},
ff:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.M(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.M(0,g).p(0,p).B(0,g).M(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.C(l)))
l=o.aE(q)
l=l.v(0,Math.sqrt(l.C(l))).aE(o)
q=l.v(0,Math.sqrt(l.C(l)))}return q},
cb:function(){var u,t=this
if(t.e!=null)return!0
u=t.fb()
if(u==null){u=t.ff()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
gio:function(a){var u=this
if(J.Q(u.a,u.b))return!0
if(J.Q(u.b,u.c))return!0
if(J.Q(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t,s=this
if(s.gb6())return a+"disposed"
u=a+C.b.ai(J.as(s.a.e),0)+", "+C.b.ai(J.as(s.b.e),0)+", "+C.b.ai(J.as(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.F("")}}
F.h1.prototype={}
F.iu.prototype={
ba:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bm.prototype={
b5:function(){var u=this
if(!u.gb6()){C.a.L(u.a.a.c.b,u)
u.a.a.a_()}u.c1()
u.c2()},
c6:function(a){this.a=a
C.a.h(a.c.b,this)},
c7:function(a){this.b=a
C.a.h(a.c.c,this)},
c1:function(){var u=this.a
if(u!=null){C.a.L(u.c.b,this)
this.a=null}},
c2:function(){var u=this.b
if(u!=null){C.a.L(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){if(this.gb6())return a+"disposed"
return a+C.b.ai(J.as(this.a.e),0)+", "+C.b.ai(J.as(this.b.e),0)},
P:function(){return this.F("")}}
F.hl.prototype={}
F.iY.prototype={
ba:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bI.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ai(J.as(u.e),0)},
P:function(){return this.F("")}}
F.e7.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.X():u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.ir())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bI()
if(n.a==null)H.A(P.C("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nV(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cy(l,k,i)}g=h.e
if(g!=null)g.aj(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
iP:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.q(o,0)])
for(o=[F.aw];u.length!==0;){t=C.a.giD(u)
C.a.eq(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.ba(0,t,q)){C.a.h(s,q)
C.a.eq(u,r)}}if(s.length>1)b.bb(s)}}p.a.w()
p.c.cE()
p.d.cE()
p.b.j8()
p.c.cF(new F.iY())
p.d.cF(new F.iu())
o=p.e
if(o!=null)o.aj(0)},
c8:function(){this.iP(new F.jn(),new F.i_())},
cp:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cp()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.seb(new V.L(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.L(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.Q(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.aj(0)},
il:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bt()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bs().a)!==0)++s
if((t&$.br().a)!==0)++s
if((t&$.bR().a)!==0)++s
if((t&$.bu().a)!==0)++s
if((t&$.dr().a)!==0)++s
if((t&$.ds().a)!==0)++s
if((t&$.cp().a)!==0)++s
if((t&$.bq().a)!==0)++s
r=a3.gcO(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.dz])
for(n=0,m=0;m<s;++m){l=a3.ii(m)
k=l.gcO(l)
C.a.k(o,m,new Z.dz(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].iN(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ce(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dA(new Z.eq(a0,f),o,a3)
e.sfz(H.e([],[Z.bD]))
if(a.b.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(0,d.length,b))}if(a.c.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(1,d.length,b))}if(a.d.b.length!==0){t=P.l
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bD(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.m(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.E(null)},
$iq4:1}
F.im.prototype={
ib:function(a){var u,t,s,r,q,p,o
H.m(a,"$ib",[F.aw],"$ab")
u=H.e([],[F.a8])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cy(s,p,o))}}return u},
ic:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aw],"$ab")
u=H.e([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cy(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cy(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cy(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.ba(0,p,n)){p.b5()
break}}}}},
cE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gio(s)
if(t)s.b5()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cd())s=!1
return s},
cc:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cb())s=!1
return s},
cp:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.L(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.L(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.E(null)}},
i:function(a){return this.P()},
F:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
P:function(){return this.F("")},
sfs:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")}}
F.io.prototype={
gn:function(a){return this.b.length},
cF:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.ba(0,p,n)){p.b5()
break}}}}},
cE:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.Q(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.P()},
F:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.F("")},
sfA:function(a){this.b=H.m(a,"$ib",[F.bm],"$ab")}}
F.ip.prototype={
gn:function(a){return this.b.length},
j8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.a.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
F:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(a))
return C.a.m(r,"\n")},
P:function(){return this.F("")},
sbZ:function(a){this.b=H.m(a,"$ib",[F.bI],"$ab")}}
F.aw.prototype={
cg:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ep(u.cx,r,o,t,s,q,p,a,n)},
ir:function(){return this.cg(null)},
sZ:function(a,b){var u
if(!J.Q(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a_()}},
seb:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.C(a)))
if(!J.Q(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a_()}},
sex:function(a){var u
if(!J.Q(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
sdD:function(a){var u
if(!J.Q(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a_()}},
iN:function(a){var u,t,s=this
if(a.q(0,$.bt())){u=s.f
t=[P.r]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bs())){u=s.r
t=[P.r]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.br())){u=s.x
t=[P.r]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.bR())){u=s.y
t=[P.r]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.q(0,$.bu())){u=s.z
t=[P.r]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.dr())){u=s.Q
t=[P.r]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.q(0,$.ds())){u=s.Q
t=[P.r]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.cp()))return H.e([s.ch],[P.r])
else if(a.q(0,$.bq())){u=s.cx
t=[P.r]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.r])},
cd:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.H(0,new F.js(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
cb:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d6()
t.d.H(0,new F.jr(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.ai(J.as(s.e),0))
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
C.a.h(q,V.N(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.F("")}}
F.js.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:6}
F.jr.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:6}
F.ji.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a_()
return!0},
ie:function(a,b,c,d,e,f){var u=F.ep(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cd()
return!0},
cc:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cb()
return!0},
im:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Q(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
this.w()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].F(a))
return C.a.m(u,"\n")},
P:function(){return this.F("")},
si8:function(a){this.c=H.m(a,"$ib",[F.aw],"$ab")}}
F.jj.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
H:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.H(u.b,b)
C.a.H(u.c,new F.jk(u,b))
C.a.H(u.d,new F.jl(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sft:function(a){this.b=H.m(a,"$ib",[F.a8],"$ab")},
sfu:function(a){this.c=H.m(a,"$ib",[F.a8],"$ab")},
sfv:function(a){this.d=H.m(a,"$ib",[F.a8],"$ab")}}
F.jk.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:6}
F.jl.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.Q(a.a,u)&&!J.Q(a.b,u))this.b.$1(a)},
$S:6}
F.jm.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sfB:function(a){this.b=H.m(a,"$ib",[F.bm],"$ab")},
sfC:function(a){this.c=H.m(a,"$ib",[F.bm],"$ab")}}
F.jo.prototype={}
F.jn.prototype={
ba:function(a,b,c){return J.Q(b.f,c.f)}}
F.jp.prototype={}
F.i_.prototype={
bb:function(a){var u,t,s,r
H.m(a,"$ib",[F.aw],"$ab")
u=V.d6()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.v(0,Math.sqrt(u.C(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s)a[s].seb(u)
return}}
F.jq.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].F(""))
return C.a.m(r,"\n")},
sbZ:function(a){this.b=H.m(a,"$ib",[F.bI],"$ab")}}
O.dV.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.X():u},
a0:function(a){var u
H.f(a,"$iB")
u=this.fr
if(u!=null)u.E(a)},
bG:function(){return this.a0(null)},
dm:function(a){H.f(a,"$iB")
this.a=null
this.a0(a)},
hK:function(){return this.dm(null)},
fP:function(a,b){var u=V.al
H.m(b,"$ik",[u],"$ak")
u=new D.bZ([u])
u.b=!0
this.a0(u)},
fR:function(a,b){var u=V.al
H.m(b,"$ik",[u],"$ak")
u=new D.c_([u])
u.b=!0
this.a0(u)},
d5:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.l,h=new H.a2([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.gan()
p=h.j(0,r.gan())
h.k(0,q,p==null?1:p)}o=H.e([],[A.aO])
h.H(0,new O.hF(j,o))
C.a.bC(o,new O.hG())
n=new H.a2([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=r.gan()
p=n.j(0,r.gan())
n.k(0,q,p==null?1:p)}m=H.e([],[A.aS])
n.H(0,new O.hH(j,m))
C.a.bC(m,new O.hI())
l=new H.a2([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){r=i[s]
t=r.gan()
q=l.j(0,r.gan())
l.k(0,t,q==null?1:q)}k=H.e([],[A.aW])
l.H(0,new O.hJ(j,k))
C.a.bC(k,new O.hK())
i=C.e.a9(j.e.a.length+3,4)
j.dy.e
return A.o1(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ae:function(a,b){H.m(a,"$ib",[T.d_],"$ab")
if(b!=null)if(!C.a.U(a,b)){b.a=a.length
C.a.h(a,b)}},
aq:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.at(u,u.length,[H.q(u,0)]);u.A();){t=u.d
t.toString
s=$.hL
t.a=s==null?$.hL=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ar(0,b,t)}},
ja:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.d5()
u=b6.fr.j(0,b5.b7)
if(u==null){u=A.o0(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.C("May not cache a shader with no name."))
if(b6.fr.bo(0,t))H.A(P.C('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.k(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.bq
b5=b7.e
if(!(b5 instanceof Z.dA))b5=b7.e=null
if(b5==null||!b5.d.q(0,r)){b5=s.k3
if(b5)b7.d.ay()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.cc()
p.a.cc()
p=p.e
if(p!=null)p.aj(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.im()
o=o.e
if(o!=null)o.aj(0)}m=b7.d.il(new Z.ju(b6.a),r)
m.aU($.bt()).e=b4.a.Q.c
if(b5)m.aU($.bs()).e=b4.a.cx.c
if(q)m.aU($.br()).e=b4.a.ch.c
if(s.r1)m.aU($.bR()).e=b4.a.cy.c
if(p)m.aU($.bu()).e=b4.a.db.c
if(s.rx)m.aU($.bq()).e=b4.a.dx.c
b7.e=m}b5=T.d_
l=H.e([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.iz()
if(s.dy){q=b4.a
o=b6.dx
o=o.gaa(o)
q=q.dy
q.toString
q.at(o.ak(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gaa(o)
n=b6.dx
n=b6.cx=o.p(0,n.gaa(n))
o=n}q=q.fr
q.toString
q.at(o.ak(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gj6()
n=b6.dx
n=b6.ch=o.p(0,n.gaa(n))
o=n}q=q.fy
q.toString
q.at(o.ak(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.at(C.k.ak(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.at(C.k.ak(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.at(C.k.ak(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.c.by(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.f(n,"$ial")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.ce(H.m(n.ak(0,!0),"$ib",q,"$ab")))
C.c.eC(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.c.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ae(l,b4.f.e)
q=b4.a
o=b4.f.e
q.af(q.ry,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.c.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ae(l,b4.r.e)
q=b4.a
o=b4.r.e
q.af(q.y1,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.c.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ae(l,b4.x.e)
q=b4.a
o=b4.x.e
q.af(q.bq,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.dN
C.c.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ae(l,b4.y.e)
q=b4.a
o=b4.y.e
q.af(q.dO,o)}q=s.e
o=q.a
if(!o)n=q.c
else n=!0
if(n){n=b4.a
h=b4.z.ch
n=n.dR
C.c.a4(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.dP
C.c.W(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.ae(l,b4.z.e)
q=b4.a
o=b4.z.e
q.af(q.dQ,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gaa(o)
o=P.l
f=new H.a2([o,o])
for(o=b4.dx.e,n=o.length,h=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gan()
b=f.j(0,c)
if(b==null)b=0
f.k(0,c,b+1)
a=J.dt(b4.a.ck.j(0,c),b)
a0=d.gdI(d)
a1=C.d.p(g.a,a0.gdK(a0))+C.d.p(g.b,a0.gdL(a0))+C.d.p(g.c,a0.gdM())
a2=C.d.p(g.e,a0.gdK(a0))+C.d.p(g.f,a0.gdL(a0))+C.d.p(g.r,a0.gdM())
a0=C.d.p(g.y,a0.gdK(a0))+C.d.p(g.z,a0.gdL(a0))+C.d.p(g.Q,a0.gdM())
a0=new V.L(a1,a2,a0).v(0,Math.sqrt(a1*a1+a2*a2+a0*a0))
a2=a.e
a1=a0.a
a3=a0.b
a0=a0.c
C.c.W(a2.a,a2.d,a1,a3,a0)
a0=d.gb4(d)
a3=a.f
C.c.W(a3.a,a3.d,a0.a,a0.b,a0.c)
d.gaY()
a0=d.gdI(d)
a1=a.d
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbz()
a1=a.b
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gbw(d)
a1=a.c
C.c.W(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaY()
H.m(l,"$ib",h,"$ab")
if(!C.a.U(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaY()
a1=a0.gb9(a0)
if(a1){a1=a.r
a1.toString
a2=a0.gb9(a0)
if(!a2)a1.a.uniform1i(a1.d,0)
else{a0=a0.ge6(a0)
a1.a.uniform1i(a1.d,a0)}}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.cj.j(0,n)
C.c.by(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gaa(o)
o=P.l
a4=new H.a2([o,o])
for(o=b4.dx.f,n=o.length,h=[P.r],a0=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gan()
b=a4.j(0,c)
if(b==null)b=0
a4.k(0,c,b+1)
a=J.dt(b4.a.cm.j(0,c),b)
a5=g.p(0,d.a)
a1=d.a
a2=$.cQ
a1=a1.cH(a2==null?$.cQ=new V.a5(0,0,0):a2)
a2=a.b
C.c.W(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=$.cQ
a1=a5.cH(a1==null?$.cQ=new V.a5(0,0,0):a1)
a2=a.c
C.c.W(a2.a,a2.d,a1.a,a1.b,a1.c)
a1=d.c
a2=a.e
C.c.W(a2.a,a2.d,a1.a,a1.b,a1.c)
if(d.d!=null||!1){a1=a5.e8(0)
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
i=new Float32Array(H.ce(H.m(new V.dW(a2,a3,a6,a7,a8,a9,b0,b1,a1).ak(0,!0),"$ib",h,"$ab")))
C.c.eB(b2.a,b2.d,!1,i)}a1=d.d
a2=a1!=null
if(a2){H.m(l,"$ib",a0,"$ab")
if(a2)if(!C.a.U(l,a1)){a1.a=l.length
C.a.h(l,a1)}a1=d.d
a2=a1!=null
if(a2&&a1.d>=6){a3=a.f
a3.toString
if(!a2||a1.d<6)a3.a.uniform1i(a3.d,0)
else{a1=a1.a
a3.a.uniform1i(a3.d,a1)}}}a1=d.r
a2=a.y
C.c.a4(a2.a,a2.d,a1)
a1=d.x
a2=a.z
C.c.a4(a2.a,a2.d,a1)
a1=d.y
a2=a.Q
C.c.a4(a2.a,a2.d,a1)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=a4.j(0,n)
if(k==null)k=0
n=b4.a.cl.j(0,n)
C.c.by(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gaa(o)
o=P.l
b3=new H.a2([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=d.gan()
b=b3.j(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.dt(b4.a.co.j(0,c),b)
h=d.gj5(d)
a0=a.b
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gdI(d).jI()
a0=a.c
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
h=g.cH(d.gj5(d))
a0=a.d
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gb4(d)
a0=a.e
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
d.gaY()
h=d.gbz()
a0=a.f
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gbw(d)
a0=a.r
C.c.W(a0.a,a0.d,h.a,h.b,h.c)
h=d.gjJ()
a0=a.x
C.c.a4(a0.a,a0.d,h)
h=d.gjK()
a0=a.y
C.c.a4(a0.a,a0.d,h)
d.gaY()
h=d.gaY()
H.m(l,"$ib",b5,"$ab")
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaY()
a0=h.gb9(h)
if(a0){a0=a.dx
a0.toString
a1=h.gb9(h)
if(!a1)a0.a.uniform1i(a0.d,0)
else{h=h.ge6(h)
a0.a.uniform1i(a0.d,h)}}d.gcN()
h=d.gjq()
a0=a.z
C.c.jn(a0.a,a0.d,h.a,h.b,h.c,h.d)
h=d.gcN()
if(!C.a.U(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcN()
a0=h.gb9(h)
if(a0){a0=a.dy
a0.toString
a1=h.gb9(h)
if(!a1)a0.a.uniform1i(a0.d,0)
else{h=h.ge6(h)
a0.a.uniform1i(a0.d,h)}}if(d.gjx()){h=d.gjv()
a0=a.Q
C.c.a4(a0.a,a0.d,h)
h=d.gju()
a0=a.ch
C.c.a4(a0.a,a0.d,h)}if(d.gjw()){h=d.gjr()
a0=a.cx
C.c.a4(a0.a,a0.d,h)
h=d.gjs()
a0=a.cy
C.c.a4(a0.a,a0.d,h)
h=d.gjt()
a0=a.db
C.c.a4(a0.a,a0.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.v)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.cn.j(0,o)
C.c.by(o.a,o.d,k)}}}if(s.f.c){b4.ae(l,b4.Q.e)
b5=b4.a
q=b4.Q.e
b5.af(b5.dS,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gaa(q).e8(0)}b5=b5.id
b5.toString
b5.at(q.ak(0,!0))}if(s.cy){b4.ae(l,b4.ch)
b5=b4.a
q=b4.ch
b5.af(b5.dT,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.dU
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ae(l,b4.cx.e)
b5=b4.a
q=b4.cx.e
b5.af(b5.dV,q)}b5=s.x
q=b5.a
if(!q)o=b5.c
else o=!0
if(o){o=b4.a
n=b4.cy.ch
o=o.dW
C.c.a4(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dX
C.c.W(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.ae(l,b4.cy.e)
b5=b4.a
q=b4.cy.e
b5.af(b5.dY,q)}}b5=s.y
q=b5.a
o=!q
if(o)n=b5.c
else n=!0
if(n){if(q){q=b4.a
n=b4.db.f
q=q.dZ
C.c.a4(q.a,q.d,n)}if(b5.c){b4.ae(l,b4.db.e)
q=b4.a
n=b4.db.e
q.af(q.e_,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d>=6){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(34067,q.b)}}q=b7.e
q.c9(b6)
q.aW(b6)
q.jm(b6)
if(o)b5=b5.c
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(34067,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.ix()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d5().b7},
sfe:function(a){this.e=H.m(a,"$ia3",[V.al],"$aa3")}}
O.hF.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aO(a,C.e.a9(b+3,4)*4))},
$S:12}
O.hG.prototype={
$2:function(a,b){H.f(a,"$iaO")
H.f(b,"$iaO")
return J.l3(a.a,b.a)},
$S:50}
O.hH.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aS(a,C.e.a9(b+3,4)*4))},
$S:12}
O.hI.prototype={
$2:function(a,b){H.f(a,"$iaS")
H.f(b,"$iaS")
return J.l3(a.a,b.a)},
$S:51}
O.hJ.prototype={
$2:function(a,b){H.ad(a)
H.ad(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aW(a,C.e.a9(b+3,4)*4))},
$S:12}
O.hK.prototype={
$2:function(a,b){H.f(a,"$iaW")
H.f(b,"$iaW")
return J.l3(a.a,b.a)},
$S:52}
O.hz.prototype={
aC:function(){var u,t=this
t.cQ()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.J(t.b,u,1,[P.r])
u.b=!0
t.a.a0(u)}}}
O.cG.prototype={
a0:function(a){return this.a.a0(H.f(a,"$iB"))},
bG:function(){return this.a0(null)},
aC:function(){},
c3:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.a0(null)}}}
O.hA.prototype={}
O.b8.prototype={
dq:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.J(s.b+".color",u,a,[V.a7])
t.b=!0
s.a.a0(t)}},
aC:function(){this.cQ()
this.dq(new V.a7(1,1,1))},
sb4:function(a,b){this.c3(new A.ak(!0,!1,this.c.c))
this.dq(b)}}
O.hC.prototype={}
O.hD.prototype={
aC:function(){var u,t=this
t.cR()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.J(t.b+".refraction",u,1,[P.r])
u.b=!0
t.a.a0(u)}}}
O.hE.prototype={
dr:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.K().a)){u.ch=a
t=new D.J(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.a0(t)}},
aC:function(){this.cR()
this.dr(100)}}
O.bM.prototype={}
T.d_.prototype={}
T.d0.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.X():u}}
T.iL.prototype={
aN:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a9(t,"load",H.o(new T.iM(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hL:function(a,b,c){var u,t,s,r
b=V.lI(b)
u=V.lI(a.width)
t=V.lI(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l6()
s.width=u
s.height=t
r=H.f(C.j.eH(s,"2d"),"$ict")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pw(r.getImageData(0,0,s.width,s.height))}}}
T.iM.prototype={
$1:function(a){var u=this,t=u.a,s=t.hL(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.c.jg(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iy()}++t.e},
$S:11}
V.bi.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dU.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa7:function(a){this.a=H.m(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aG:function(a,b){return!this.eP(0,b)},
i:function(a){return"!["+this.cP(0)+"]"}}
V.ib.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c2(this.a),t=H.c2(this.b)
return u+".."+t},
$iaz:1}
V.il.prototype={
eU:function(a){var u,t
if(a.a.length<=0)throw H.c(P.C("May not create a SetMatcher with zero characters."))
u=new H.a2([P.l,P.S])
for(t=new H.cF(a,a.gn(a),[H.ar(a,"y",0)]);t.A();)u.k(0,t.d,!0)
this.shO(u)},
aG:function(a,b){return this.a.bo(0,b)},
i:function(a){var u=this.a
return P.cY(u.ga3(u),0,null)},
shO:function(a){this.a=H.m(a,"$iz",[P.l,P.S],"$az")},
$iaz:1}
V.cV.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d2(this.a.l(0,b))
r.sa7(H.e([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
iC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b},
si6:function(a){this.c=H.m(a,"$ib",[V.d2],"$ab")}}
V.ef.prototype={
i:function(a){var u=H.lK(this.b,"\n","\\n"),t=H.lK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d1.prototype={
aH:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
shG:function(a){var u=P.h
this.c=H.m(a,"$iz",[u,u],"$az")}}
V.iP.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cV(this,b)
u.si6(H.e([],[V.d2]))
u.d=null
this.a.k(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d1(a)
u=P.h
t.shG(new H.a2([u,u]))
this.b.k(0,a,t)}return t},
eA:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.ef]),k=this.c,j=[P.l],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.D(a,s)
q=k.iC(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cY(i,0,m)
throw H.c(P.C("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cY(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ef(n==null?o.b:n,p,s)}++s}}},
shX:function(a){this.a=H.m(a,"$iz",[P.h,V.cV],"$az")},
si_:function(a){this.b=H.m(a,"$iz",[P.h,V.d1],"$az")}}
V.d2.prototype={
i:function(a){return this.b.b+": "+this.cP(0)}}
X.dC.prototype={$icL:1}
X.h8.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.e1.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.X():u},
aL:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.E(a)},
f8:function(){return this.aL(null)},
saV:function(a){var u,t,s=this
if(!J.Q(s.b,a)){u=s.b
if(u!=null)u.gu().L(0,s.gcV())
t=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gcV())
u=new D.J("mover",t,s.b,[U.ab])
u.b=!0
s.aL(u)}},
$icL:1,
$idC:1}
X.ec.prototype={}
V.by.prototype={
bi:function(a){this.b=new P.hc(C.Q)
this.c=null
this.sbO(H.e([],[[P.b,W.aE]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.e([],[W.aE]))
u=a.split("\n")
for(l=u.length,t=[W.aE],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.e([],t))
p=document.createElement("div")
p.className="codePart"
H.O(q)
o=m.b.fj(q,0,q.length)
n=o==null?q:o
C.O.eJ(p,H.lK(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaz(m.d),p)}},
ek:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbO(H.e([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bp():t).eA(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bv(t[r])},
sbO:function(a){this.d=H.m(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kW.prototype={
$1:function(a){var u
H.f(a,"$ibc")
u=C.d.ez(this.a.giG(),2)
if(u!=="0.00")P.lJ(u+" fps")},
$S:54}
V.fP.prototype={
bv:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iQ()
a1.c=a1.l(0,r)
u=a1.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=a1.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=a1.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=a1.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=a1.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=a1.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=a1.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,k)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=a1.l(0,k).m(0,j)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=a1.l(0,k).m(0,i)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,i).m(0,k)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
C.a.h(a1.l(0,k).m(0,k).a,new V.bi())
t=a1.l(0,r).m(0,h)
u=V.w(new H.u("'"))
C.a.h(t.a,u)
u=a1.l(0,h).m(0,g)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
t=a1.l(0,h).m(0,f)
u=V.w(new H.u("\\"))
C.a.h(t.a,u)
u=a1.l(0,f).m(0,h)
t=V.w(new H.u("'"))
C.a.h(u.a,t)
C.a.h(a1.l(0,h).m(0,h).a,new V.bi())
t=a1.l(0,r).m(0,e)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,d)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,d).m(0,c)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,d).m(0,d)
t=new V.au()
s=[V.az]
t.sa7(H.e([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=a1.l(0,e).m(0,b)
t=V.w(new H.u("*"))
C.a.h(u.a,t)
t=a1.l(0,b).m(0,a)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,b)
t=new V.au()
t.sa7(H.e([],s))
C.a.h(u.a,t)
u=V.w(new H.u("*"))
C.a.h(t.a,u)
u=a1.l(0,a).m(0,c)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
t=a1.l(0,r).m(0,a0)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=a1.l(0,a0).m(0,a0)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=a1.l(0,p)
t.d=t.a.R("Num")
t=a1.l(0,n)
t.d=t.a.R("Num")
t=a1.l(0,m)
t.d=t.a.R("Symbol")
t=a1.l(0,j)
t.d=t.a.R("String")
t=a1.l(0,g)
t.d=t.a.R("String")
t=a1.l(0,c)
t.d=t.a.R(d)
t=a1.l(0,a0)
t.d=t.a.R(a0)
t=a1.l(0,q)
t=t.d=t.a.R(q)
u=[P.h]
t.aH(0,"Class",H.e(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.e(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.e(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h9.prototype={
bv:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iQ()
e.c=e.l(0,r)
u=e.l(0,r).m(0,q)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=e.l(0,q).m(0,q)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=e.l(0,r).m(0,p)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,p).m(0,p)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,p).m(0,o)
t=V.w(new H.u("."))
C.a.h(u.a,t)
t=e.l(0,o).m(0,n)
u=V.a_("0","9")
C.a.h(t.a,u)
u=e.l(0,n).m(0,n)
t=V.a_("0","9")
C.a.h(u.a,t)
t=e.l(0,r).m(0,m)
u=V.w(new H.u(l))
C.a.h(t.a,u)
u=e.l(0,m).m(0,m)
t=V.w(new H.u(l))
C.a.h(u.a,t)
t=e.l(0,r).m(0,k)
u=V.w(new H.u("/"))
C.a.h(t.a,u)
u=e.l(0,k).m(0,j)
t=V.w(new H.u("/"))
C.a.h(u.a,t)
C.a.h(e.l(0,k).m(0,m).a,new V.bi())
t=e.l(0,j).m(0,i)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa7(H.e([],s))
C.a.h(u.a,t)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.w(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.au()
u.sa7(H.e([],s))
C.a.h(t.a,u)
t=V.w(new H.u("\n"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,g)
u=V.w(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,f)
t=V.w(new H.u(" \n\t"))
C.a.h(u.a,t)
t=e.l(0,f).m(0,f)
u=V.w(new H.u(" \n\t"))
C.a.h(t.a,u)
u=e.l(0,p)
u.d=u.a.R("Num")
u=e.l(0,n)
u.d=u.a.R("Num")
u=e.l(0,m)
u.d=u.a.R("Symbol")
u=e.l(0,i)
u.d=u.a.R(j)
u=e.l(0,g)
u.d=u.a.R(h)
u=e.l(0,f)
u.d=u.a.R(f)
u=e.l(0,q)
u=u.d=u.a.R(q)
t=[P.h]
u.aH(0,"Type",H.e(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.e(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.e(["gl_FragColor","gl_Position"],t))
return e}}
V.ha.prototype={
bv:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iQ()
l.c=l.l(0,s)
u=l.l(0,s).m(0,r)
t=V.w(new H.u("_"))
C.a.h(u.a,t)
t=V.a_("a","z")
C.a.h(u.a,t)
t=V.a_("A","Z")
C.a.h(u.a,t)
t=l.l(0,r).m(0,r)
u=V.w(new H.u("_"))
C.a.h(t.a,u)
u=V.a_("0","9")
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,r).m(0,q)
t=V.w(new H.u("="))
C.a.h(u.a,t)
u.c=!0
u=l.l(0,s).m(0,p)
t=V.w(new H.u("</\\-!>="))
C.a.h(u.a,t)
t=l.l(0,p).m(0,p)
u=V.w(new H.u("</\\-!>="))
C.a.h(t.a,u)
u=l.l(0,s).m(0,o)
t=V.w(new H.u('"'))
C.a.h(u.a,t)
t=l.l(0,o).m(0,n)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
u=l.l(0,o).m(0,"EscStr")
t=V.w(new H.u("\\"))
C.a.h(u.a,t)
t=l.l(0,"EscStr").m(0,o)
u=V.w(new H.u('"'))
C.a.h(t.a,u)
C.a.h(l.l(0,o).m(0,o).a,new V.bi())
C.a.h(l.l(0,s).m(0,m).a,new V.bi())
u=l.l(0,m).m(0,m)
t=new V.au()
t.sa7(H.e([],[V.az]))
C.a.h(u.a,t)
u=V.w(new H.u('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.a_("a","z")
C.a.h(t.a,u)
u=V.a_("A","Z")
C.a.h(t.a,u)
u=l.l(0,p)
u.d=u.a.R("Symbol")
u=l.l(0,n)
u.d=u.a.R("String")
u=l.l(0,r)
t=u.a.R(r)
u.d=t
t.aH(0,"Reserved",H.e(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.R(q)
t=l.l(0,m)
t.d=t.a.R(m)
return l}}
V.i5.prototype={
ek:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbO(H.e([],[[P.b,W.aE]]))
this.O(C.a.m(b,"\n"),"#111")},
bv:function(a){},
bp:function(){return}}
V.i9.prototype={
dz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.o(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mp().gcD().j(0,H.i(u))
if(t==null)if(d){c.$0()
m.dv(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lQ(m.c).h(0,q)
o=W.nQ("radio")
o.checked=s
o.name=u
u=W.n
W.a9(o,"change",H.o(new V.ia(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lQ(m.c).h(0,r.createElement("br"))},
b2:function(a,b,c){return this.dz(a,b,c,!1)},
dv:function(a){var u,t,s=P.mp(),r=P.h,q=P.nX(s.gcD(),r,r)
q.k(0,this.a,a)
u=s.er(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k7([],[]).cI(""),"",t)}}
V.ia.prototype={
$1:function(a){var u=this
if(H.F(u.b.checked)){u.c.$0()
u.a.dv(u.d)}},
$S:11}
V.iq.prototype={
eW:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.o(new V.is(o),{func:1,ret:-1,args:[r]}),!1,r)},
dB:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hR()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eA(C.a.iM(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.pT(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
t.appendChild(l)}else{k=P.fb(C.y,n,C.h,!1)
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
eG:function(a){var u,t,s,r=new V.fP("dart")
r.bi("dart")
u=new V.h9("glsl")
u.bi("glsl")
t=new V.ha("html")
t.bi("html")
s=C.a.iE(H.e([r,u,t],[V.by]),new V.it(a))
if(s!=null)return s
r=new V.i5("plain")
r.bi("plain")
return r},
dA:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.e([],[P.l])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dq(r).a2(r,"+")){C.a.k(b0,s,C.b.ab(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a2(r,"-")){C.a.k(b0,s,C.b.ab(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eG(a8)
q.ek(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fb(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lS()
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.ih(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.v)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gV(r);a3.A();)c.appendChild(a3.gK(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
i9:function(a){var u,t,s,r,q,p,o,n="auto"
H.m(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibb").style
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
o=H.f(r.insertCell(-1),"$ibb")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hR:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iQ()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.au()
r=[V.az]
s.sa7(H.e([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.l(0,p).m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,o)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,o).m(0,o)
s=new V.au()
s.sa7(H.e([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.l(0,o).m(0,n)
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,m)
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,m).m(0,m)
s=new V.au()
s.sa7(H.e([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.l(0,m).m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,q).m(0,l)
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,l).m(0,k)
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.l(0,l).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,l).m(0,l)
t=new V.au()
t.sa7(H.e([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.au()
t.sa7(H.e([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.bi())
s=u.l(0,i).m(0,i)
t=new V.au()
t.sa7(H.e([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.l(0,"BoldEnd")
s.d=s.a.R(p)
s=u.l(0,n)
s.d=s.a.R(o)
s=u.l(0,"CodeEnd")
s.d=s.a.R(m)
s=u.l(0,j)
s.d=s.a.R("Link")
s=u.l(0,i)
s.d=s.a.R(i)
this.b=u}}
V.is.prototype={
$1:function(a){P.ml(C.o,new V.ir(this.a))},
$S:11}
V.ir.prototype={
$0:function(){var u=C.d.ap(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.it.prototype={
$1:function(a){return H.f(a,"$iby").a===this.a},
$S:55}
T.kN.prototype={
$0:function(){this.a.sad(0,F.lE(1,null,null,1))},
$S:0}
T.kO.prototype={
$0:function(){this.a.sad(0,F.mU(!0,40,1))},
$S:0}
T.kP.prototype={
$0:function(){this.a.sad(0,F.mU(!1,40,0))},
$S:0}
T.kQ.prototype={
$0:function(){this.a.sad(0,F.n8(6,6))},
$S:0}
T.kR.prototype={
$0:function(){this.a.sad(0,F.na())},
$S:0}
T.kS.prototype={
$0:function(){this.a.sad(0,F.pL())},
$S:0}
T.kT.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dA("Vertex Shader","glsl",0,H.e((s==null?null:s.c).split("\n"),r))
t=t.a
u.dA("Fragment Shader","glsl",0,H.e((t==null?null:t.d).split("\n"),r))},
$S:10};(function aliases(){var u=J.a.prototype
u.eM=u.i
u=J.dO.prototype
u.eO=u.i
u=P.k.prototype
u.eN=u.bA
u=W.U.prototype
u.bD=u.ag
u=W.eU.prototype
u.eQ=u.ax
u=O.cG.prototype
u.cQ=u.aC
u=O.b8.prototype
u.cR=u.aC
u=V.dU.prototype
u.eP=u.aG
u.cP=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pq","oz",14)
u(P,"pr","oA",14)
u(P,"ps","oB",14)
t(P,"mT","po",3)
s(W,"pE",4,null,["$4"],["oD"],28,0)
s(W,"pF",4,null,["$4"],["oE"],28,0)
var m
r(m=E.ap.prototype,"geg",0,0,null,["$1","$0"],["eh","iX"],1,0)
r(m,"gei",0,0,null,["$1","$0"],["ej","iY"],1,0)
r(m,"gee",0,0,null,["$1","$0"],["ef","iW"],1,0)
r(m,"gec",0,0,null,["$1","$0"],["ed","iT"],1,0)
q(m,"giR","iS",9)
q(m,"giU","iV",9)
r(m=E.ee.prototype,"gcS",0,0,null,["$1","$0"],["cU","cT"],1,0)
p(m,"gjc","es",3)
o(m=X.el.prototype,"gh3","h4",16)
o(m,"gfS","fT",16)
o(m,"gfY","fZ",4)
o(m,"gh7","h8",31)
o(m,"gh5","h6",31)
o(m,"ghb","hc",4)
o(m,"ghf","hg",4)
o(m,"gh1","h2",4)
o(m,"ghd","he",4)
o(m,"gh_","h0",4)
o(m,"ghh","hi",36)
o(m,"ghj","hk",16)
o(m,"ghw","hx",15)
o(m,"ghs","ht",15)
o(m,"ghu","hv",15)
r(m=D.dQ.prototype,"gdh",0,0,null,["$1","$0"],["di","h9"],1,0)
o(m,"ghm","hn",38)
q(m,"gfM","fN",26)
q(m,"ghq","hr",26)
r(D.bH.prototype,"gbF",0,0,null,["$1","$0"],["a6","f0"],1,0)
n(V.Y.prototype,"gn","b8",13)
n(V.L.prototype,"gn","b8",13)
n(V.ca.prototype,"gn","b8",13)
r(m=U.cB.prototype,"gaO",0,0,null,["$1","$0"],["G","a8"],1,0)
q(m,"gf2","f3",22)
q(m,"gho","hp",22)
r(m=U.em.prototype,"gaO",0,0,null,["$1","$0"],["G","a8"],1,0)
o(m,"gbR","bS",2)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
r(m=U.en.prototype,"gaO",0,0,null,["$1","$0"],["G","a8"],1,0)
o(m,"gbR","bS",2)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gfE","fF",2)
o(m,"gfG","fH",2)
o(m,"gi4","i5",2)
o(m,"gi2","i3",2)
o(m,"gi0","i1",2)
o(U.eo.prototype,"gfJ","fK",2)
r(m=M.dI.prototype,"gau",0,0,null,["$1","$0"],["aA","f4"],1,0)
q(m,"gfU","fV",9)
q(m,"gfW","fX",9)
r(m=O.dV.prototype,"gbj",0,0,null,["$1","$0"],["a0","bG"],1,0)
r(m,"ghJ",0,0,null,["$1","$0"],["dm","hK"],1,0)
q(m,"gfO","fP",33)
q(m,"gfQ","fR",33)
r(O.cG.prototype,"gbj",0,0,null,["$1","$0"],["a0","bG"],1,0)
r(X.e1.prototype,"gcV",0,0,null,["$1","$0"],["aL","f8"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.lf,J.a,J.at,P.eH,P.k,H.cF,P.b4,H.bX,H.d5,H.fI,H.iV,P.bB,H.cu,H.eZ,P.af,H.hm,H.ho,H.hh,P.f4,P.bg,P.aK,P.er,P.iB,P.cX,P.iC,P.bc,P.ao,P.kn,P.k1,P.cb,P.eG,P.y,P.kf,P.hu,P.bV,P.hd,P.kl,P.kk,P.S,P.ay,P.aa,P.bA,P.i3,P.ea,P.ez,P.h7,P.bC,P.b,P.z,P.P,P.av,P.h,P.a6,P.cc,P.j9,P.k4,W.fL,W.bO,W.H,W.e_,W.eU,W.ka,W.dK,W.aB,W.k0,W.fc,P.k6,P.f9,P.jW,P.R,O.a3,O.cH,E.fB,E.ap,E.ic,E.ee,Z.eq,Z.ju,Z.dA,Z.bD,Z.bo,D.fE,D.bW,D.B,X.dB,X.dP,X.hj,X.hr,X.aA,X.hS,X.iR,X.el,D.dF,D.ae,D.bH,D.e9,V.a7,V.b1,V.fZ,V.dW,V.al,V.ac,V.a5,V.bK,V.e4,V.Y,V.L,V.ca,U.em,U.en,U.eo,M.dI,A.dx,A.fu,A.ak,A.aO,A.aS,A.aW,A.hB,A.c5,A.c6,A.c8,A.eh,A.j3,F.a8,F.h1,F.bm,F.hl,F.bI,F.e7,F.im,F.io,F.ip,F.aw,F.ji,F.jj,F.jm,F.jo,F.jp,F.jq,O.bM,O.cG,O.hC,T.iL,V.bi,V.az,V.dU,V.ib,V.il,V.cV,V.ef,V.d1,V.iP,X.dC,X.ec,X.e1,V.by,V.i9,V.iq])
s(J.a,[J.hg,J.dN,J.dO,J.b5,J.cE,J.bE,H.cM,H.bG,W.j,W.fr,W.bT,W.ct,W.b2,W.b3,W.W,W.et,W.fQ,W.fR,W.ev,W.dH,W.ex,W.fT,W.n,W.eA,W.aP,W.hb,W.eC,W.bl,W.dS,W.hM,W.eI,W.eJ,W.aQ,W.eK,W.eN,W.aR,W.eR,W.eT,W.aU,W.eV,W.aV,W.f_,W.aG,W.f2,W.iO,W.aY,W.f5,W.iT,W.je,W.fd,W.ff,W.fh,W.fj,W.fl,P.b7,P.eE,P.ba,P.eP,P.i8,P.f0,P.bd,P.f7,P.fv,P.es,P.dy,P.e2,P.c4,P.e6,P.ed,P.ei,P.eX])
s(J.dO,[J.i4,J.c9,J.bF])
t(J.le,J.b5)
s(J.cE,[J.dM,J.dL])
t(P.hq,P.eH)
s(P.hq,[H.ej,W.jC,W.aq,P.h3])
t(H.u,H.ej)
s(P.k,[H.fW,H.hv,H.d7])
s(H.fW,[H.c0,H.hn])
s(P.b4,[H.hw,H.jv])
t(H.hx,H.c0)
t(H.fJ,H.fI)
s(P.bB,[H.i0,H.hi,H.j7,H.iX,H.fD,H.ij,P.ft,P.e0,P.aN,P.j8,P.j5,P.cW,P.fG,P.fO])
s(H.cu,[H.l0,H.iI,H.kI,H.kJ,H.kK,P.jy,P.jx,P.jz,P.jA,P.ke,P.kd,P.jJ,P.jN,P.jK,P.jL,P.jM,P.jQ,P.jR,P.jP,P.jO,P.iD,P.iE,P.kx,P.jZ,P.jY,P.k_,P.hp,P.ht,P.fU,P.fV,P.jd,P.ja,P.jb,P.jc,P.kg,P.kh,P.kj,P.ki,P.kr,P.kq,P.ks,P.kt,W.fX,W.hO,W.hQ,W.ii,W.iA,W.jI,W.hZ,W.hY,W.k2,W.k3,W.kc,W.km,P.k8,P.kz,P.h4,P.h5,P.fx,E.id,E.ie,E.ig,E.iN,D.h_,D.h0,F.ko,F.kA,F.kC,F.kD,F.kE,F.kX,F.kY,F.l_,F.kM,F.kB,F.js,F.jr,F.jk,F.jl,O.hF,O.hG,O.hH,O.hI,O.hJ,O.hK,T.iM,V.kW,V.ia,V.is,V.ir,V.it,T.kN,T.kO,T.kP,T.kQ,T.kR,T.kS,T.kT])
s(H.iI,[H.iy,H.cr])
t(H.jw,P.ft)
t(P.hs,P.af)
s(P.hs,[H.a2,W.jB])
t(H.dX,H.bG)
s(H.dX,[H.dc,H.de])
t(H.dd,H.dc)
t(H.cN,H.dd)
t(H.df,H.de)
t(H.dY,H.df)
s(H.dY,[H.hT,H.hU,H.hV,H.hW,H.hX,H.dZ,H.cO])
t(P.jX,P.kn)
t(P.jV,P.k1)
t(P.fa,P.hu)
t(P.ek,P.fa)
s(P.bV,[P.fz,P.fY])
t(P.bz,P.iC)
s(P.bz,[P.fA,P.hc,P.jh,P.jg])
t(P.jf,P.fY)
s(P.aa,[P.r,P.l])
s(P.aN,[P.c3,P.he])
t(P.jE,P.cc)
s(W.j,[W.G,W.h2,W.cJ,W.aT,W.dg,W.aX,W.aH,W.di,W.jt,W.d8,P.fy,P.bS])
s(W.G,[W.U,W.bx,W.d9])
s(W.U,[W.x,P.p])
s(W.x,[W.dv,W.fs,W.cq,W.bw,W.bU,W.aE,W.h6,W.cC,W.cD,W.ik,W.bb,W.eb,W.iG,W.iH,W.cZ])
s(W.b2,[W.cv,W.fM,W.fN])
t(W.fK,W.b3)
t(W.cw,W.et)
t(W.ew,W.ev)
t(W.dG,W.ew)
t(W.ey,W.ex)
t(W.fS,W.ey)
t(W.aF,W.bT)
t(W.eB,W.eA)
t(W.cz,W.eB)
t(W.eD,W.eC)
t(W.bY,W.eD)
t(W.bN,W.n)
s(W.bN,[W.b6,W.ag,W.aZ])
t(W.hN,W.eI)
t(W.hP,W.eJ)
t(W.eL,W.eK)
t(W.hR,W.eL)
t(W.eO,W.eN)
t(W.cP,W.eO)
t(W.eS,W.eR)
t(W.i6,W.eS)
t(W.ih,W.eT)
t(W.dh,W.dg)
t(W.iv,W.dh)
t(W.eW,W.eV)
t(W.iw,W.eW)
t(W.iz,W.f_)
t(W.f3,W.f2)
t(W.iJ,W.f3)
t(W.dj,W.di)
t(W.iK,W.dj)
t(W.f6,W.f5)
t(W.iS,W.f6)
t(W.bf,W.ag)
t(W.fe,W.fd)
t(W.jD,W.fe)
t(W.eu,W.dH)
t(W.fg,W.ff)
t(W.jS,W.fg)
t(W.fi,W.fh)
t(W.eM,W.fi)
t(W.fk,W.fj)
t(W.k5,W.fk)
t(W.fm,W.fl)
t(W.k9,W.fm)
t(W.jF,W.jB)
t(W.jG,P.iB)
t(W.lq,W.jG)
t(W.jH,P.cX)
t(W.kb,W.eU)
t(P.k7,P.k6)
t(P.am,P.jW)
t(P.eF,P.eE)
t(P.hk,P.eF)
t(P.eQ,P.eP)
t(P.i1,P.eQ)
t(P.cT,P.p)
t(P.f1,P.f0)
t(P.iF,P.f1)
t(P.f8,P.f7)
t(P.iU,P.f8)
t(P.fw,P.es)
t(P.i2,P.bS)
t(P.eY,P.eX)
t(P.ix,P.eY)
s(E.fB,[Z.dz,A.cU,T.d_])
s(D.B,[D.bZ,D.c_,D.J,X.i7])
s(X.i7,[X.dT,X.bn,X.cK,X.eg])
s(O.a3,[D.dQ,U.cB])
s(D.fE,[U.fF,U.ab])
s(U.ab,[U.dD,U.e5])
t(A.hy,A.cU)
s(A.eh,[A.aI,A.j0,A.j1,A.j2,A.iZ,A.ai,A.j_,A.a0,A.d3,A.j4,A.d4,A.aC,A.c7,A.an])
t(F.iu,F.h1)
t(F.iY,F.hl)
t(F.jn,F.jo)
t(F.i_,F.jp)
t(O.dV,O.bM)
s(O.cG,[O.hz,O.hA,O.b8])
s(O.b8,[O.hD,O.hE])
t(T.d0,T.d_)
s(V.dU,[V.au,V.d2])
t(X.h8,X.ec)
s(V.by,[V.fP,V.h9,V.ha,V.i5])
u(H.ej,H.d5)
u(H.dc,P.y)
u(H.dd,H.bX)
u(H.de,P.y)
u(H.df,H.bX)
u(P.eH,P.y)
u(P.fa,P.kf)
u(W.et,W.fL)
u(W.ev,P.y)
u(W.ew,W.H)
u(W.ex,P.y)
u(W.ey,W.H)
u(W.eA,P.y)
u(W.eB,W.H)
u(W.eC,P.y)
u(W.eD,W.H)
u(W.eI,P.af)
u(W.eJ,P.af)
u(W.eK,P.y)
u(W.eL,W.H)
u(W.eN,P.y)
u(W.eO,W.H)
u(W.eR,P.y)
u(W.eS,W.H)
u(W.eT,P.af)
u(W.dg,P.y)
u(W.dh,W.H)
u(W.eV,P.y)
u(W.eW,W.H)
u(W.f_,P.af)
u(W.f2,P.y)
u(W.f3,W.H)
u(W.di,P.y)
u(W.dj,W.H)
u(W.f5,P.y)
u(W.f6,W.H)
u(W.fd,P.y)
u(W.fe,W.H)
u(W.ff,P.y)
u(W.fg,W.H)
u(W.fh,P.y)
u(W.fi,W.H)
u(W.fj,P.y)
u(W.fk,W.H)
u(W.fl,P.y)
u(W.fm,W.H)
u(P.eE,P.y)
u(P.eF,W.H)
u(P.eP,P.y)
u(P.eQ,W.H)
u(P.f0,P.y)
u(P.f1,W.H)
u(P.f7,P.y)
u(P.f8,W.H)
u(P.es,P.af)
u(P.eX,P.y)
u(P.eY,W.H)})()
var v={mangledGlobalNames:{l:"int",r:"double",aa:"num",h:"String",S:"bool",P:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.P},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.P,args:[,,]},{func:1,ret:P.P,args:[F.a8]},{func:1,ret:P.P,args:[F.aw,P.r,P.r]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.l,[P.k,E.ap]]},{func:1,ret:P.P,args:[D.B]},{func:1,ret:P.P,args:[W.n]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.r},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[W.n]},{func:1,ret:V.a5,args:[P.r]},{func:1,ret:P.P,args:[,]},{func:1,ret:P.h,args:[P.l]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:-1,args:[P.l,[P.k,U.ab]]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,args:[,]},{func:1,ret:-1,args:[P.l,[P.k,D.ae]]},{func:1,ret:P.S,args:[W.G]},{func:1,ret:P.S,args:[W.U,P.h,P.h,W.bO]},{func:1,ret:P.S,args:[W.aB]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.P,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:-1,args:[P.l,[P.k,V.al]]},{func:1,ret:W.U,args:[W.G]},{func:1,ret:-1,args:[W.G,W.G]},{func:1,ret:-1,args:[W.bf]},{func:1,args:[W.n]},{func:1,ret:P.S,args:[[P.k,D.ae]]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.P,args:[P.h,,]},{func:1,ret:P.P,args:[P.h]},{func:1,ret:P.l,args:[P.l,P.l]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.l]},{func:1,ret:[P.z,P.h,P.h],args:[[P.z,P.h,P.h],P.h]},{func:1,ret:[P.aK,,],args:[,]},{func:1,ret:P.P,args:[,],opt:[P.av]},{func:1,ret:P.R,args:[P.l]},{func:1,ret:P.P,args:[{func:1,ret:-1}]},{func:1,ret:P.l,args:[A.aO,A.aO]},{func:1,ret:P.l,args:[A.aS,A.aS]},{func:1,ret:P.l,args:[A.aW,A.aW]},{func:1,args:[P.h]},{func:1,ret:P.P,args:[P.bc]},{func:1,ret:P.S,args:[V.by]},{func:1,args:[,P.h]},{func:1,ret:P.P,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bw.prototype
C.j=W.bU.prototype
C.O=W.aE.prototype
C.R=J.a.prototype
C.a=J.b5.prototype
C.S=J.dL.prototype
C.e=J.dM.prototype
C.k=J.dN.prototype
C.d=J.cE.prototype
C.b=J.bE.prototype
C.T=J.bF.prototype
C.Z=W.cP.prototype
C.B=J.i4.prototype
C.c=P.c4.prototype
C.a_=W.bb.prototype
C.C=W.eb.prototype
C.r=J.c9.prototype
C.D=W.bf.prototype
C.E=W.d8.prototype
C.a0=new P.fA()
C.F=new P.fz()
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

C.M=new P.i3()
C.h=new P.jf()
C.N=new P.jh()
C.f=new P.jX()
C.o=new P.bA(0)
C.P=new P.bA(5e6)
C.Q=new P.hd("element",!1,!1,!1)
C.w=H.e(u([127,2047,65535,1114111]),[P.l])
C.l=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.l])
C.U=H.e(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.m=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.l])
C.n=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.l])
C.V=H.e(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.x=H.e(u([]),[P.h])
C.W=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.l])
C.y=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.l])
C.i=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.l])
C.z=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.l])
C.X=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.l])
C.A=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.l])
C.p=H.e(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.e(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fJ(0,{},C.x,[P.h,P.h])})();(function staticFields(){$.b0=0
$.cs=null
$.lU=null
$.lw=!1
$.n_=null
$.mR=null
$.n6=null
$.kF=null
$.kL=null
$.lG=null
$.cf=null
$.dm=null
$.dn=null
$.lx=!1
$.a1=C.f
$.ax=[]
$.bk=null
$.l9=null
$.lZ=null
$.lY=null
$.db=P.lh(P.h,P.bC)
$.hL=null
$.mb=null
$.cQ=null
$.mg=null
$.ms=null
$.mx=null
$.mu=null
$.mv=null
$.mw=null
$.mt=null
$.my=null
$.ma=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q0","nc",function(){return H.mZ("_$dart_dartClosure")})
u($,"q1","lM",function(){return H.mZ("_$dart_js")})
u($,"q7","nd",function(){return H.be(H.iW({
toString:function(){return"$receiver$"}}))})
u($,"q8","ne",function(){return H.be(H.iW({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q9","nf",function(){return H.be(H.iW(null))})
u($,"qa","ng",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qd","nj",function(){return H.be(H.iW(void 0))})
u($,"qe","nk",function(){return H.be(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qc","ni",function(){return H.be(H.mn(null))})
u($,"qb","nh",function(){return H.be(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qg","nm",function(){return H.be(H.mn(void 0))})
u($,"qf","nl",function(){return H.be(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qx","lN",function(){return P.oy()})
u($,"qj","nn",function(){return P.ov()})
u($,"qy","nr",function(){return H.o2(H.ce(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.l])))})
u($,"qA","nt",function(){return P.oh("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qB","nu",function(){return P.oY()})
u($,"qz","ns",function(){return P.m1(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qq","nq",function(){return Z.aJ(0)})
u($,"qk","no",function(){return Z.aJ(511)})
u($,"qs","bt",function(){return Z.aJ(1)})
u($,"qr","bs",function(){return Z.aJ(2)})
u($,"qm","br",function(){return Z.aJ(4)})
u($,"qt","bR",function(){return Z.aJ(8)})
u($,"qu","bu",function(){return Z.aJ(16)})
u($,"qn","dr",function(){return Z.aJ(32)})
u($,"qo","ds",function(){return Z.aJ(64)})
u($,"qp","np",function(){return Z.aJ(96)})
u($,"qv","cp",function(){return Z.aJ(128)})
u($,"ql","bq",function(){return Z.aJ(256)})
u($,"q_","nb",function(){return new V.fZ(1e-9)})
u($,"pZ","K",function(){return $.nb()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cM,DataView:H.bG,ArrayBufferView:H.bG,Float32Array:H.cN,Float64Array:H.cN,Int16Array:H.hT,Int32Array:H.hU,Int8Array:H.hV,Uint16Array:H.hW,Uint32Array:H.hX,Uint8ClampedArray:H.dZ,CanvasPixelArray:H.dZ,Uint8Array:H.cO,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fr,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fs,HTMLBaseElement:W.cq,Blob:W.bT,HTMLBodyElement:W.bw,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.ct,CDATASection:W.bx,CharacterData:W.bx,Comment:W.bx,ProcessingInstruction:W.bx,Text:W.bx,CSSNumericValue:W.cv,CSSUnitValue:W.cv,CSSPerspective:W.fK,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.b2,CSSKeywordValue:W.b2,CSSPositionValue:W.b2,CSSResourceValue:W.b2,CSSURLImageValue:W.b2,CSSStyleValue:W.b2,CSSMatrixComponent:W.b3,CSSRotation:W.b3,CSSScale:W.b3,CSSSkew:W.b3,CSSTranslation:W.b3,CSSTransformComponent:W.b3,CSSTransformValue:W.fM,CSSUnparsedValue:W.fN,DataTransferItemList:W.fQ,HTMLDivElement:W.aE,DOMException:W.fR,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.fS,DOMTokenList:W.fT,Element:W.U,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cz,FileWriter:W.h2,HTMLFormElement:W.h6,Gamepad:W.aP,History:W.hb,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.bl,HTMLImageElement:W.cC,HTMLInputElement:W.cD,KeyboardEvent:W.b6,Location:W.dS,MediaList:W.hM,MessagePort:W.cJ,MIDIInputMap:W.hN,MIDIOutputMap:W.hP,MimeType:W.aQ,MimeTypeArray:W.hR,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aR,PluginArray:W.i6,RTCStatsReport:W.ih,HTMLSelectElement:W.ik,SourceBuffer:W.aT,SourceBufferList:W.iv,SpeechGrammar:W.aU,SpeechGrammarList:W.iw,SpeechRecognitionResult:W.aV,Storage:W.iz,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.bb,HTMLTableDataCellElement:W.bb,HTMLTableHeaderCellElement:W.bb,HTMLTableElement:W.eb,HTMLTableRowElement:W.iG,HTMLTableSectionElement:W.iH,HTMLTemplateElement:W.cZ,TextTrack:W.aX,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iJ,TextTrackList:W.iK,TimeRanges:W.iO,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.iS,TrackDefaultList:W.iT,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.je,VideoTrackList:W.jt,WheelEvent:W.bf,Window:W.d8,DOMWindow:W.d8,Attr:W.d9,CSSRuleList:W.jD,ClientRect:W.eu,DOMRect:W.eu,GamepadList:W.jS,NamedNodeMap:W.eM,MozNamedAttrMap:W.eM,SpeechRecognitionResultList:W.k5,StyleSheetList:W.k9,SVGLength:P.b7,SVGLengthList:P.hk,SVGNumber:P.ba,SVGNumberList:P.i1,SVGPointList:P.i8,SVGScriptElement:P.cT,SVGStringList:P.iF,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bd,SVGTransformList:P.iU,AudioBuffer:P.fv,AudioParamMap:P.fw,AudioTrackList:P.fy,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.i2,WebGLBuffer:P.dy,WebGLProgram:P.e2,WebGL2RenderingContext:P.c4,WebGLShader:P.e6,WebGLTexture:P.ed,WebGLUniformLocation:P.ei,SQLResultSetRowList:P.ix})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dX.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dY.$nativeSuperclassTag="ArrayBufferView"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.n2,[])
else T.n2([])})})()
//# sourceMappingURL=test.dart.js.map
